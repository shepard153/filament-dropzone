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
    state
}) {
    return {
        dropzone: null,
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

/*            this.$el.closest('form')
                ?.querySelector("button[type=submit]")
                .addEventListener("click", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.dropzone.processQueue();
                });*/

            this.dropzone.on("addedfile", () => {
                this.dispatchFormEvent('form-processing-started');
            });

            this.dropzone.on("error", (file, response) => {
                console.error(`Error uploading file: ${file.name}`, response);

                const notification = new window.FilamentNotification();

                notification.title(`Error uploading file: ${file.name}`)
                    .warning()
                    .body(response?.message)
                    .send();
            });

            this.dropzone.on("queuecomplete", () => {
                this.state = this.dropzone.files.map((file) => directory
                    ? `${directory}/${file.name}`
                    : file.name
                );

                this.dispatchFormEvent('form-processing-finished');

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