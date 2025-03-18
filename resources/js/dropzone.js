import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";

export default function dropzoneComponent({
    componentId,
    maxFilesize,
    acceptedFiles,
    chunkSize,
    chunking,
    allowMultiple,
    parallelUploads,
    parallelChunksUploads,
    autoProcessQueue,
    url,
    retryChunks,
    retryChunksLimit,
    clearOnFinish,
    leaveFailed,
    directory,
    disk,
    maxVideoDuration,
    defaultMessage,
    successTitle,
    successMessage,
    state
}) {
    return {
        dropzone: null,
        error: null,
        state,

        init: async function () {
            const dropzoneElement = document.getElementById(componentId);

            if (directory === null) {
                directory = '';
            }

            const options = {
                maxFilesize: maxFilesize,
                acceptedFiles: acceptedFiles,
                allowMultiple: allowMultiple,
                autoProcessQueue: autoProcessQueue,
                parallelUploads: parallelUploads,
                parallelChunksUploads: parallelChunksUploads,
                chunking: chunking,
                chunkSize: chunkSize,
                url: `${url}?directory=${directory}&disk=${disk}`,
                retryChunks: retryChunks,
                retryChunksLimit: retryChunksLimit,
                dictDefaultMessage: defaultMessage,
                maxFiles: allowMultiple ? null : 1,
            }

            this.dropzone = new Dropzone(dropzoneElement, options);

            this.dropzone.on("addedfile", (file) => {
                this.dispatchFormEvent('form-processing-started');

                if (maxVideoDuration && file.type.startsWith('video/')) {
                    const video = document.createElement('video');
                    video.src = URL.createObjectURL(file);
                    video.onloadedmetadata = () => {
                        if (video.duration > maxVideoDuration) {
                            this.dropzone.removeFile(file);
                            this.error = `Video duration is too long. Maximum allowed duration is ${maxVideoDuration} seconds.`;
                        }
                    }
                }
            });

            this.dropzone.on("error", (file, response) => {
                console.error(`Error uploading file: ${file.name}`, response);

                const notification = new window.FilamentNotification();

                notification.title(`Error uploading file: ${file.name}`)
                    .warning()
                    .body(this.error ?? response?.message)
                    .send();
            });

            this.dropzone.on("queuecomplete", () => {
                this.state = this.dropzone.files.map((file) => directory
                    ? `${directory}/${file.name}`
                    : file.name
                );

                const totalFilesCount = this.dropzone.files.length;
                const successfulUploadsCount = this.dropzone.getFilesWithStatus(Dropzone.SUCCESS).length;
                const failedUploadsCount = this.dropzone.getFilesWithStatus(Dropzone.ERROR).length;

                if (successfulUploadsCount > failedUploadsCount) {
                    const notification = new window.FilamentNotification();
                    const title = successTitle ?? "Upload complete";

                    notification.title(title);

                    if (successMessage) {
                        notification.body(successMessage);
                    }

                    if (clearOnFinish) {
                        setTimeout(() => {
                            this.dropzone.removeAllFiles();
                        }, 5000);
                    }

                    if (leaveFailed && failedUploadsCount > 0) {
                        notification.warning();
                        notification.body('Some files failed to upload. Please check the list below.');

                        this.dropzone.getFilesWithStatus(Dropzone.SUCCESS).forEach((file) => {
                            this.dropzone.removeFile(file);
                        });
                    } else {
                        notification.success();
                    }

                    notification.send();
                } else {
                    const notification = new window.FilamentNotification();

                    notification.title("Upload failed")
                       .danger()
                       .body(failedUploadsCount > 0? "Please check the list below." : "No files were uploaded.")
                       .send();
                }

                this.dispatchFormEvent('form-processing-finished', {
                    stats: {
                        totalFilesCount,
                        successfulUploadsCount,
                        failedUploadsCount
                    }
                });
            });

            window.addEventListener('clear-dropzone', () => {
                if (this.dropzone) {
                    this.dropzone.removeAllFiles();
                }
            });
        },

        destroy: function () {
            this.dropzone.destroy();
            this.dropzone = null;
        },

        dispatchFormEvent: function (name, detail = {}) {
            window.dispatchEvent(
                new CustomEvent(name, {
                    composed: true,
                    cancelable: true,
                    detail,
                }),
            )
        },
    }
}
