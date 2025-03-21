@use('Filament\Support\Facades\FilamentAsset')

@php($componentId = \Illuminate\Support\Str::random(8))

<x-dynamic-component
        :component="$getFieldWrapperView()"
        :field="$field"
>
  <div class="flex w-full items-center rounded-lg border border-gray-300 bg-gray-100 text-sm shadow-sm dark:border-gray-700 dark:bg-gray-800"
       ax-load
       ax-load-src="{{ FilamentAsset::getAlpineComponentSrc('dropzone', 'kkosmider/filament-dropzone') }}"
       x-data="dropzoneComponent({
               componentId: '{{ $componentId }}',
               maxFiles: @js($getMaxFiles()),
               maxFilesize: @js($getMaxFilesize()),
               acceptedFiles: @js($getAcceptedFiles()),
               chunkSize: @js($getChunkSize()),
               chunking: @js($getChunking()),
               allowMultiple: @js($getAllowMultiple()),
               parallelUploads: @js($getParallelUploads()),
               parallelChunkUploads: @js($getParallelChunkUploads()),
               autoProcessQueue: @js($getAutoProcessQueue()),
               url: @js($getUploadEndpointUrl()),
               retryChunks: @js($getRetryChunks()),
               retryChunksLimit: @js($getRetryChunksLimit()),
               clearOnFinish: @js($getClearOnFinish()),
               leaveFailed: @js($getLeaveFailed()),
               directory: @js($getDirectory()),
               disk: @js($getDiskName()),
               maxVideoDuration: @js($getMaxVideoDuration()),
               defaultMessage: @js($getDefaultMessage()),
               successTitle: @js($getSuccessTitle()),
               successMessage: @js($getSuccessMessage()),
               state: $wire.{{ $applyStateBindingModifiers("\$entangle('{$getStatePath()}')") }},
           })"
       wire:ignore
       x-ignore
  >
    <x-filament::grid id="{{ $componentId }}"
                      class="dropzone grid block w-full border-none text-sm transition duration-75 focus-visible:border-primary-500 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:opacity-70 dark:bg-gray-700 dark:text-white dark:focus-visible:border-primary-500"
                      :default="$getColumns('default')"
                      :sm="$getColumns('sm')"
                      :md="$getColumns('md')"
                      :lg="$getColumns('lg')"
                      :xl="$getColumns('xl')"
                      :two-xl="$getColumns('2xl')"
    />
  </div>
</x-dynamic-component>
