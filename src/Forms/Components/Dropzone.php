<?php
declare(strict_types=1);

namespace Kkosmider\FilamentDropzone\Forms\Components;

use Closure;
use Filament\Forms\Components\BaseFileUpload;

class Dropzone extends BaseFileUpload
{
    protected string $view = 'forms.components.dropzone';

    protected bool | Closure $autoProcessQueue = true;
    protected bool | Closure $allowMultiple = false;
    protected bool | Closure $chunking = false;
    protected bool | Closure $parallelChunkUploads = false;
    protected bool | Closure $retryChunks = false;
    protected bool | Closure $clearOnFinish = false;

    protected int | Closure | null $maxFilesize = 20;
    protected int | Closure | null $parallelUploads = 1;
    protected int | Closure | null $chunkSize = 2000000;
    protected int | Closure | null $retryChunksLimit = 3;

    protected string | Closure $acceptedFiles = '';
    protected string | Closure $uploadEndpointUrl = '/api/attachments';

    public function autoProcessQueue($autoProcessQueue = true): static
    {
        $this->autoProcessQueue = $autoProcessQueue;

        return $this;
    }

    public function allowMultiple($allowMultiple = true): static
    {
        $this->allowMultiple = $allowMultiple;

        return $this;
    }

    public function chunking($chunking = true): static
    {
        $this->chunking = $chunking;

        return $this;
    }

    public function parallelChunkUploads($parallelChunkUploads = true): static
    {
        $this->parallelChunkUploads = $parallelChunkUploads;

        return $this;
    }

    public function clearOnFinish($clearOnFinish = true): static
    {
        $this->clearOnFinish = $clearOnFinish;

        return $this;
    }

    public function retryChunks($retryChunks = true): static
    {
        $this->retryChunks = $retryChunks;

        return $this;
    }

    public function maxFilesize($maxFilesize): static
    {
        $this->maxFilesize = $maxFilesize;

        return $this;
    }

    public function parallelUploads($parallelUploads): static
    {
        $this->parallelUploads = $parallelUploads;

        return $this;
    }

    public function chunkSize($chunkSize): static
    {
        $this->chunkSize = $chunkSize;

        return $this;
    }

    public function retryChunksLimit($retryChunksLimit): static
    {
        $this->retryChunksLimit = $retryChunksLimit;

        return $this;
    }

    public function acceptedFiles($acceptedFiles): static
    {
        $this->acceptedFiles = $acceptedFiles;

        return $this;
    }

    public function uploadEndpointUrl($uploadEndpointUrl): static
    {
        $this->uploadEndpointUrl = $uploadEndpointUrl;

        return $this;
    }

    public function getAutoProcessQueue(): bool
    {
        return $this->evaluate($this->autoProcessQueue);
    }

    public function getAllowMultiple(): bool
    {
        return $this->evaluate($this->allowMultiple);
    }

    public function getParallelChunkUploads(): bool
    {
        return $this->evaluate($this->parallelChunkUploads);
    }

    public function getRetryChunks(): bool
    {
        return $this->evaluate($this->retryChunks);
    }

    public function getChunking(): bool
    {
        return $this->evaluate($this->chunking);
    }

    public function getClearOnFinish(): bool
    {
        return $this->evaluate($this->clearOnFinish);
    }

    public function getMaxFilesize(): int | null
    {
        return $this->evaluate($this->maxFilesize);
    }

    public function getParallelUploads(): int | null
    {
        return $this->evaluate($this->parallelUploads);
    }

    public function getChunkSize(): int
    {
        return $this->evaluate($this->chunkSize);
    }

    public function getRetryChunksLimit(): int
    {
        return $this->evaluate($this->retryChunksLimit);
    }

    public function getAcceptedFiles(): string
    {
        return $this->evaluate($this->acceptedFiles);
    }

    public function getUploadEndpointUrl(): string
    {
        return $this->evaluate($this->uploadEndpointUrl);
    }
}
