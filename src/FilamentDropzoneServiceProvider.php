<?php
declare(strict_types=1);

namespace Kkosmider\FilamentDropzone;

use Filament\Support\Assets\AlpineComponent;
use Filament\Support\Assets\Css;
use Filament\Support\Facades\FilamentAsset;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentDropzoneServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        $package
            ->name('filament-dropzone')
            ->hasViews();
    }

    public function packageBooted(): void
    {
        FilamentAsset::register([
            AlpineComponent::make('dropzone', __DIR__ . '/../dist/js/dropzone.js'),
            Css::make('dropzone', __DIR__ . '/../dist/js/dropzone.css'),
            Css::make('filament-dropzone', __DIR__ . '/../dist/css/filament-dropzone.css')
        ], 'kkosmider/filament-dropzone');
    }
}
