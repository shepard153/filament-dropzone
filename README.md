## Installation
```bash
composer require kkosmider/filament-dropzone
```

## Usage
### Basic usage:
```php
use Kkosmider\FilamentDropzone\Forms\Components\Dropzone;

// For methods available on the Dropzone component,
// check the Kkosmider\FilamentDropzone\Forms\Components\Dropzone class
Dropzone::make('upload')
    ->uploadEndpointUrl('/api/upload-document')
    ->autoProcessQueue()
    ->allowMultiple()
    ->parallelUploads(4)
    ->clearOnFinish()
    ->directory('documents')
    ->acceptedFiles('application/pdf,.txt,.docx,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document'),
```

### Chunking uploads:
```php
Dropzone::make('upload')
    ->acceptedFiles('video/*')
    ->uploadEndpointUrl('/api/upload-video')
    ->chunking()
    ->maxFilesize(30000)  // 30GB
    ->chunkSize(40000000) // 40MB
    ->retryChunks()
    ->directory('videos')
    ->parallelChunkUploads()
    ->required(),
```

As seen above, in order for uploads to work you need to provide an endpoint URL where the files will be uploaded.
Example of a chunked upload endpoint:
```php
$request->validate([
    'file' => 'required|file',
]);

// Dropzone sends additional data with each chunk. Check dropzone.js documentation for more info.
$chunkIndex = (int) $request->input('dzchunkindex');
$chunksTotal = (int) $request->input('dztotalchunkcount');

$fileName = $request->file('file')->getClientOriginalName();

$chunkName = $fileName . '.part' . $chunkIndex;

if ($chunksTotal === 0) {
    $this->putToStorage($request->file('file'), $fileName);
} else {
    $this->putToStorage($request->file('file'), '/chunks/' . $chunkName);
}

// If all chunks have been uploaded, merge them into one file and delete the chunks
if ($chunkIndex === $chunksTotal - 1) {
    $filePath = $this->directory . DIRECTORY_SEPARATOR . $fileName;

    for ($i = 0; $i < $chunksTotal; $i++) {
        $chunkPath = $this->directory . '/chunks/' . $fileName . '.part' . $i;

        File::append($this->storage->path($filePath), File::get($this->storage->path($chunkPath)));
                
        $this->storage->delete($chunkPath);
    }
}

// Return response 200 so Dropzone knows the file was uploaded successfully        
return response()->json([
   'chunk' => $chunkName,
]);
```