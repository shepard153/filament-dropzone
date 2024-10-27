import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";

export default function dropzoneComponent({
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
    directory,
    disk,
    maxVideoDuration,
    state
}) {
    return {
        dropzone: null,
        error: null,
        state,

        init: async function () {
            const dropzoneElement = document.querySelector(".dropzone");

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

                this.dispatchFormEvent('form-processing-finished');

                if (this.dropzone.getFilesWithStatus(Dropzone.ERROR).length !== this.dropzone.files.length) {
                    const notification = new window.FilamentNotification();

                    notification.title("Upload complete")
                        .success()
                        .send();

                    if (clearOnFinish) {
                        notification.body("Upload zone will be cleared now.");

                        setTimeout(() => {
                            this.dropzone.removeAllFiles();
                        }, 5000);
                    }

                    notification.send();
                }
            });
        },

        destroy: function () {
            this.dropzone.destroy();
            this.dropzone = null;
        },

        dispatchFormEvent: function (name, detail = {}) {
            this.$el.closest('form')?.dispatchEvent(
                new CustomEvent(name, {
                    composed: true,
                    cancelable: true,
                    detail,
                }),
            )
        },
    }
}