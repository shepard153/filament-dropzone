<?php
declare(strict_types=1);

namespace Kkosmider\FilamentDropzone\Forms\Components;

use Closure;
use Filament\Forms\Components\BaseFileUpload;

class Dropzone extends BaseFileUpload
{
    protected string $view = 'filament-dropzone::forms.components.dropzone';

    protected bool | Closure $autoProcessQueue = true;
    protected bool | Closure $allowMultiple = false;
    protected bool | Closure $chunking = false;
    protected bool | Closure $parallelChunkUploads = false;
    protected bool | Closure $retryChunks = false;
    protected bool | Closure $clearOnFinish = false;
    protected bool | Closure $leaveFailed = false;

    protected int | Closure | null $maxFilesize = 20;
    protected int | Closure | null $parallelUploads = 1;
    protected int | Closure | null $chunkSize = 2000000;
    protected int | Closure | null $retryChunksLimit = 3;
    protected int | Closure | null $maxVideoDuration = null;

    protected string | Closure $acceptedFiles = '';
    protected string | Closure $uploadEndpointUrl = '/api/attachments';

    protected string | Closure $defaultMessage = 'Drop files here to upload';
    protected string | Closure | null $successTitle = null;
    protected string | Closure | null $successMessage = null;

    public function autoProcessQueue(bool|Closure $autoProcessQueue = true): static
    {
        $this->autoProcessQueue = $autoProcessQueue;

        return $this;
    }

    public function allowMultiple(bool|Closure $allowMultiple = true): static
    {
        $this->allowMultiple = $allowMultiple;

        return $this;
    }

    public function chunking(bool|Closure $chunking = true): static
    {
        $this->chunking = $chunking;

        return $this;
    }

    public function parallelChunkUploads(bool|Closure $parallelChunkUploads = true): static
    {
        $this->parallelChunkUploads = $parallelChunkUploads;

        return $this;
    }

    public function clearOnFinish(bool|Closure $clearOnFinish = true): static
    {
        $this->clearOnFinish = $clearOnFinish;

        return $this;
    }

    public function leaveFailed(bool|Closure $leaveFailed = true): static
    {
        $this->leaveFailed = $leaveFailed;

        return $this;
    }

    public function retryChunks(bool|Closure $retryChunks = true): static
    {
        $this->retryChunks = $retryChunks;

        return $this;
    }

    public function maxFilesize(int|Closure|null $maxFilesize): static
    {
        $this->maxFilesize = $maxFilesize;

        return $this;
    }

    public function parallelUploads(int|Closure|null $parallelUploads): static
    {
        $this->parallelUploads = $parallelUploads;

        return $this;
    }

    public function chunkSize(int|Closure|null $chunkSize): static
    {
        $this->chunkSize = $chunkSize;

        return $this;
    }

    public function retryChunksLimit(int|Closure|null $retryChunksLimit): static
    {
        $this->retryChunksLimit = $retryChunksLimit;

        return $this;
    }

    public function maxVideoDuration(int|Closure|null $maxVideoDuration): static
    {
        $this->maxVideoDuration = $maxVideoDuration;

        return $this;
    }

    public function acceptedFiles(string|Closure $acceptedFiles): static
    {
        $this->acceptedFiles = $acceptedFiles;

        return $this;
    }

    public function uploadEndpointUrl(string|Closure $uploadEndpointUrl): static
    {
        $this->uploadEndpointUrl = $uploadEndpointUrl;

        return $this;
    }

    public function defaultMessage(Closure|string $message): static
    {
        $this->defaultMessage = $message;

        return $this;
    }

    public function successTitle(Closure|string|null $title = null): static
    {
        $this->successTitle = $title;

        return $this;
    }

    public function successMessage(Closure|string|null $message = null): static
    {
        $this->successMessage = $message;

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

    public function getLeaveFailed(): bool
    {
        return $this->evaluate($this->leaveFailed);
    }

    public function getMaxFilesize(): int | null
    {
        return $this->evaluate($this->maxFilesize);
    }

    public function getParallelUploads(): int | null
    {
        return $this->evaluate($this->parallelUploads);
    }

    public function getChunkSize(): ?int
    {
        return $this->evaluate($this->chunkSize);
    }

    public function getRetryChunksLimit(): ?int
    {
        return $this->evaluate($this->retryChunksLimit);
    }

    public function getMaxVideoDuration(): ?int
    {
        return $this->evaluate($this->maxVideoDuration);
    }

    public function getAcceptedFiles(): string
    {
        return $this->evaluate($this->acceptedFiles);
    }

    public function getUploadEndpointUrl(): string
    {
        return $this->evaluate($this->uploadEndpointUrl);
    }

    public function getDefaultMessage(): string
    {
        return $this->evaluate($this->defaultMessage);
    }

    public function getSuccessTitle(): ?string
    {
        return $this->evaluate($this->successTitle);
    }

    public function getSuccessMessage(): ?string
    {
        return $this->evaluate($this->successMessage);
    }
}
