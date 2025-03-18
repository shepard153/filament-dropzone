// node_modules/just-extend/index.esm.js
var objectExtend = extend;
function extend() {
  var args = [].slice.call(arguments);
  var deep = false;
  if (typeof args[0] == "boolean") {
    deep = args.shift();
  }
  var result = args[0];
  if (isUnextendable(result)) {
    throw new Error("extendee must be an object");
  }
  var extenders = args.slice(1);
  var len = extenders.length;
  for (var i = 0; i < len; i++) {
    var extender = extenders[i];
    for (var key in extender) {
      if (Object.prototype.hasOwnProperty.call(extender, key)) {
        var value = extender[key];
        if (deep && isCloneable(value)) {
          var base = Array.isArray(value) ? [] : {};
          result[key] = extend(
            true,
            Object.prototype.hasOwnProperty.call(result, key) && !isUnextendable(result[key]) ? result[key] : base,
            value
          );
        } else {
          result[key] = value;
        }
      }
    }
  }
  return result;
}
function isCloneable(obj) {
  return Array.isArray(obj) || {}.toString.call(obj) == "[object Object]";
}
function isUnextendable(val) {
  return !val || typeof val != "object" && typeof val != "function";
}

// node_modules/dropzone/dist/dropzone.mjs
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $4040acfd8584338d$export$2e2bcd8739ae039 = class {
  // Add an event listener for given event
  on(event, fn) {
    this._callbacks = this._callbacks || {};
    if (!this._callbacks[event]) this._callbacks[event] = [];
    this._callbacks[event].push(fn);
    return this;
  }
  emit(event, ...args) {
    this._callbacks = this._callbacks || {};
    let callbacks = this._callbacks[event];
    if (callbacks) for (let callback of callbacks) callback.apply(this, args);
    if (this.element) this.element.dispatchEvent(this.makeEvent("dropzone:" + event, {
      args
    }));
    return this;
  }
  makeEvent(eventName, detail) {
    let params = {
      bubbles: true,
      cancelable: true,
      detail
    };
    if (typeof window.CustomEvent === "function") return new CustomEvent(eventName, params);
    else {
      var evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
  }
  // Remove event listener for given event. If fn is not provided, all event
  // listeners for that event will be removed. If neither is provided, all
  // event listeners will be removed.
  off(event, fn) {
    if (!this._callbacks || arguments.length === 0) {
      this._callbacks = {};
      return this;
    }
    let callbacks = this._callbacks[event];
    if (!callbacks) return this;
    if (arguments.length === 1) {
      delete this._callbacks[event];
      return this;
    }
    for (let i = 0; i < callbacks.length; i++) {
      let callback = callbacks[i];
      if (callback === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }
    return this;
  }
};
var $fd6031f88dce2e32$exports = {};
$fd6031f88dce2e32$exports = '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail=""></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size=""></span></div>\n    <div class="dz-filename"><span data-dz-name=""></span></div>\n  </div>\n  <div class="dz-progress">\n    <span class="dz-upload" data-dz-uploadprogress=""></span>\n  </div>\n  <div class="dz-error-message"><span data-dz-errormessage=""></span></div>\n  <div class="dz-success-mark">\n    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">\n      <path d="M10.2071 29.7929L14.2929 25.7071C14.6834 25.3166 15.3166 25.3166 15.7071 25.7071L21.2929 31.2929C21.6834 31.6834 22.3166 31.6834 22.7071 31.2929L38.2929 15.7071C38.6834 15.3166 39.3166 15.3166 39.7071 15.7071L43.7929 19.7929C44.1834 20.1834 44.1834 20.8166 43.7929 21.2071L22.7071 42.2929C22.3166 42.6834 21.6834 42.6834 21.2929 42.2929L10.2071 31.2071C9.81658 30.8166 9.81658 30.1834 10.2071 29.7929Z"></path>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">\n      <path d="M26.2929 20.2929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071L13.2071 17.7929C12.8166 18.1834 12.8166 18.8166 13.2071 19.2071L20.2929 26.2929C20.6834 26.6834 20.6834 27.3166 20.2929 27.7071L13.2071 34.7929C12.8166 35.1834 12.8166 35.8166 13.2071 36.2071L17.7929 40.7929C18.1834 41.1834 18.8166 41.1834 19.2071 40.7929L26.2929 33.7071C26.6834 33.3166 27.3166 33.3166 27.7071 33.7071L34.7929 40.7929C35.1834 41.1834 35.8166 41.1834 36.2071 40.7929L40.7929 36.2071C41.1834 35.8166 41.1834 35.1834 40.7929 34.7929L33.7071 27.7071C33.3166 27.3166 33.3166 26.6834 33.7071 26.2929L40.7929 19.2071C41.1834 18.8166 41.1834 18.1834 40.7929 17.7929L36.2071 13.2071C35.8166 12.8166 35.1834 12.8166 34.7929 13.2071L27.7071 20.2929C27.3166 20.6834 26.6834 20.6834 26.2929 20.2929Z"></path>\n    </svg>\n  </div>\n</div>\n';
var $4ca367182776f80b$var$defaultOptions = {
  /**
  * Has to be specified on elements other than form (or when the form doesn't
  * have an `action` attribute).
  *
  * You can also provide a function that will be called with `files` and
  * `dataBlocks`  and must return the url as string.
  */
  url: null,
  /**
  * Can be changed to `"put"` if necessary. You can also provide a function
  * that will be called with `files` and must return the method (since `v3.12.0`).
  */
  method: "post",
  /**
  * Will be set on the XHRequest.
  */
  withCredentials: false,
  /**
  * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
  * If set to null or 0, no timeout is going to be set.
  */
  timeout: null,
  /**
  * How many file uploads to process in parallel (See the
  * Enqueuing file uploads documentation section for more info)
  */
  parallelUploads: 2,
  /**
  * Whether to send multiple files in one request. If
  * this it set to true, then the fallback file input element will
  * have the `multiple` attribute as well. This option will
  * also trigger additional events (like `processingmultiple`). See the events
  * documentation section for more information.
  */
  uploadMultiple: false,
  /**
  * Whether you want files to be uploaded in chunks to your server. This can't be
  * used in combination with `uploadMultiple`.
  *
  * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
  */
  chunking: false,
  /**
  * If `chunking` is enabled, this defines whether **every** file should be chunked,
  * even if the file size is below chunkSize. This means, that the additional chunk
  * form data will be submitted and the `chunksUploaded` callback will be invoked.
  */
  forceChunking: false,
  /**
  * If `chunking` is `true`, then this defines the chunk size in bytes.
  */
  chunkSize: 2097152,
  /**
  * If `true`, the individual chunks of a file are being uploaded simultaneously.
  */
  parallelChunkUploads: false,
  /**
  * Whether a chunk should be retried if it fails.
  */
  retryChunks: false,
  /**
  * If `retryChunks` is true, how many times should it be retried.
  */
  retryChunksLimit: 3,
  /**
  * The maximum filesize (in MiB) that is allowed to be uploaded.
  */
  maxFilesize: 256,
  /**
  * The name of the file param that gets transferred.
  * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
  * Dropzone will append `[]` to the name.
  */
  paramName: "file",
  /**
  * Whether thumbnails for images should be generated
  */
  createImageThumbnails: true,
  /**
  * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
  */
  maxThumbnailFilesize: 10,
  /**
  * If `null`, the ratio of the image will be used to calculate it.
  */
  thumbnailWidth: 120,
  /**
  * The same as `thumbnailWidth`. If both are null, images will not be resized.
  */
  thumbnailHeight: 120,
  /**
  * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
  * Can be either `contain` or `crop`.
  */
  thumbnailMethod: "crop",
  /**
  * If set, images will be resized to these dimensions before being **uploaded**.
  * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
  * ratio of the file will be preserved.
  *
  * The `options.transformFile` function uses these options, so if the `transformFile` function
  * is overridden, these options don't do anything.
  */
  resizeWidth: null,
  /**
  * See `resizeWidth`.
  */
  resizeHeight: null,
  /**
  * The mime type of the resized image (before it gets uploaded to the server).
  * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
  * See `resizeWidth` for more information.
  */
  resizeMimeType: null,
  /**
  * The quality of the resized images. See `resizeWidth`.
  */
  resizeQuality: 0.8,
  /**
  * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
  * Can be either `contain` or `crop`.
  */
  resizeMethod: "contain",
  /**
  * The base that is used to calculate the **displayed** filesize. You can
  * change this to 1024 if you would rather display kibibytes, mebibytes,
  * etc... 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte`
  * not `1 kilobyte`. You can change this to `1024` if you don't care about
  * validity.
  */
  filesizeBase: 1e3,
  /**
  * If not `null` defines how many files this Dropzone handles. If it exceeds,
  * the event `maxfilesexceeded` will be called. The dropzone element gets the
  * class `dz-max-files-reached` accordingly so you can provide visual
  * feedback.
  */
  maxFiles: null,
  /**
  * An optional object to send additional headers to the server. Eg:
  * `{ "My-Awesome-Header": "header value" }`
  */
  headers: null,
  /**
  * Should the default headers be set or not?
  * Accept: application/json <- for requesting json response
  * Cache-Control: no-cache <- Request shouldnt be cached
  * X-Requested-With: XMLHttpRequest <- We sent the request via XMLHttpRequest
  */
  defaultHeaders: true,
  /**
  * If `true`, the dropzone element itself will be clickable, if `false`
  * nothing will be clickable.
  *
  * You can also pass an HTML element, a CSS selector (for multiple elements)
  * or an array of those. In that case, all of those elements will trigger an
  * upload when clicked.
  */
  clickable: true,
  /**
  * Whether hidden files in directories should be ignored.
  */
  ignoreHiddenFiles: true,
  /**
  * The default implementation of `accept` checks the file's mime type or
  * extension against this list. This is a comma separated list of mime
  * types or file extensions.
  *
  * Eg.: `image/*,application/pdf,.psd`
  *
  * If the Dropzone is `clickable` this option will also be used as
  * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
  * parameter on the hidden file input as well.
  */
  acceptedFiles: null,
  /**
  * **Deprecated!**
  * Use acceptedFiles instead.
  */
  acceptedMimeTypes: null,
  /**
  * If false, files will be added to the queue but the queue will not be
  * processed automatically.
  * This can be useful if you need some additional user input before sending
  * files (or if you want want all files sent at once).
  * If you're ready to send the file simply call `myDropzone.processQueue()`.
  *
  * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
  * section for more information.
  */
  autoProcessQueue: true,
  /**
  * If false, files added to the dropzone will not be queued by default.
  * You'll have to call `enqueueFile(file)` manually.
  */
  autoQueue: true,
  /**
  * If `true`, this will add a link to every file preview to remove or cancel (if
  * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
  * and `dictRemoveFile` options are used for the wording.
  */
  addRemoveLinks: false,
  /**
  * Defines where to display the file previews – if `null` the
  * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
  * selector. The element should have the `dropzone-previews` class so
  * the previews are displayed properly.
  */
  previewsContainer: null,
  /**
  * Set this to `true` if you don't want previews to be shown.
  */
  disablePreviews: false,
  /**
  * This is the element the hidden input field (which is used when clicking on the
  * dropzone to trigger file selection) will be appended to. This might
  * be important in case you use frameworks to switch the content of your page.
  *
  * Can be a selector string, or an element directly.
  */
  hiddenInputContainer: "body",
  /**
  * If null, no capture type will be specified
  * If camera, mobile devices will skip the file selection and choose camera
  * If microphone, mobile devices will skip the file selection and choose the microphone
  * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
  * On apple devices multiple must be set to false.  AcceptedFiles may need to
  * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
  */
  capture: null,
  /**
  * **Deprecated**. Use `renameFile` instead.
  */
  renameFilename: null,
  /**
  * A function that is invoked before the file is uploaded to the server and renames the file.
  * This function gets the `File` as argument and can use the `file.name`. The actual name of the
  * file that gets used during the upload can be accessed through `file.upload.filename`.
  */
  renameFile: null,
  /**
  * If `true` the fallback will be forced. This is very useful to test your server
  * implementations first and make sure that everything works as
  * expected without dropzone if you experience problems, and to test
  * how your fallbacks will look.
  */
  forceFallback: false,
  /**
  * The text used before any files are dropped.
  */
  dictDefaultMessage: "Drop files here to upload",
  /**
  * The text that replaces the default message text it the browser is not supported.
  */
  dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
  /**
  * The text that will be added before the fallback form.
  * If you provide a  fallback element yourself, or if this option is `null` this will
  * be ignored.
  */
  dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
  /**
  * If the filesize is too big.
  * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
  */
  dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
  /**
  * If the file doesn't match the file type.
  */
  dictInvalidFileType: "You can't upload files of this type.",
  /**
  * If the server response was invalid.
  * `{{statusCode}}` will be replaced with the servers status code.
  */
  dictResponseError: "Server responded with {{statusCode}} code.",
  /**
  * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
  */
  dictCancelUpload: "Cancel upload",
  /**
  * The text that is displayed if an upload was manually canceled
  */
  dictUploadCanceled: "Upload canceled.",
  /**
  * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
  */
  dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
  /**
  * If `addRemoveLinks` is true, the text to be used to remove a file.
  */
  dictRemoveFile: "Remove file",
  /**
  * If this is not null, then the user will be prompted before removing a file.
  */
  dictRemoveFileConfirmation: null,
  /**
  * Displayed if `maxFiles` is st and exceeded.
  * The string `{{maxFiles}}` will be replaced by the configuration value.
  */
  dictMaxFilesExceeded: "You can not upload any more files.",
  /**
  * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
  * `b` for bytes.
  */
  dictFileSizeUnits: {
    tb: "TB",
    gb: "GB",
    mb: "MB",
    kb: "KB",
    b: "b"
  },
  /**
  * Called when dropzone initialized
  * You can add event listeners here
  */
  init() {
  },
  /**
  * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
  * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
  * of a function, this needs to return a map.
  *
  * The default implementation does nothing for normal uploads, but adds relevant information for
  * chunked uploads.
  *
  * This is the same as adding hidden input fields in the form element.
  */
  params(files, xhr, chunk) {
    if (chunk) return {
      dzuuid: chunk.file.upload.uuid,
      dzchunkindex: chunk.index,
      dztotalfilesize: chunk.file.size,
      dzchunksize: this.options.chunkSize,
      dztotalchunkcount: chunk.file.upload.totalChunkCount,
      dzchunkbyteoffset: chunk.index * this.options.chunkSize
    };
  },
  /**
  * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
  * and a `done` function as parameters.
  *
  * If the done function is invoked without arguments, the file is "accepted" and will
  * be processed. If you pass an error message, the file is rejected, and the error
  * message will be displayed.
  * This function will not be called if the file is too big or doesn't match the mime types.
  */
  accept(file, done) {
    return done();
  },
  /**
  * The callback that will be invoked when all chunks have been uploaded for a file.
  * It gets the file for which the chunks have been uploaded as the first parameter,
  * and the `done` function as second. `done()` needs to be invoked when everything
  * needed to finish the upload process is done.
  */
  chunksUploaded: function(file, done) {
    done();
  },
  /**
  * Sends the file as binary blob in body instead of form data.
  * If this is set, the `params` option will be ignored.
  * It's an error to set this to `true` along with `uploadMultiple` since
  * multiple files cannot be in a single binary body.
  */
  binaryBody: false,
  /**
  * Gets called when the browser is not supported.
  * The default implementation shows the fallback input field and adds
  * a text.
  */
  fallback() {
    let messageElement;
    this.element.className = `${this.element.className} dz-browser-not-supported`;
    for (let child of this.element.getElementsByTagName("div")) if (/(^| )dz-message($| )/.test(child.className)) {
      messageElement = child;
      child.className = "dz-message";
      break;
    }
    if (!messageElement) {
      messageElement = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement('<div class="dz-message"><span></span></div>');
      this.element.appendChild(messageElement);
    }
    let span = messageElement.getElementsByTagName("span")[0];
    if (span) {
      if (span.textContent != null) span.textContent = this.options.dictFallbackMessage;
      else if (span.innerText != null) span.innerText = this.options.dictFallbackMessage;
    }
    return this.element.appendChild(this.getFallbackForm());
  },
  /**
  * Gets called to calculate the thumbnail dimensions.
  *
  * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
  *
  *  - `srcWidth` & `srcHeight` (required)
  *  - `trgWidth` & `trgHeight` (required)
  *  - `srcX` & `srcY` (optional, default `0`)
  *  - `trgX` & `trgY` (optional, default `0`)
  *
  * Those values are going to be used by `ctx.drawImage()`.
  */
  resize(file, width, height, resizeMethod) {
    let info = {
      srcX: 0,
      srcY: 0,
      srcWidth: file.width,
      srcHeight: file.height
    };
    let srcRatio = file.width / file.height;
    if (width == null && height == null) {
      width = info.srcWidth;
      height = info.srcHeight;
    } else if (width == null) width = height * srcRatio;
    else if (height == null) height = width / srcRatio;
    width = Math.min(width, info.srcWidth);
    height = Math.min(height, info.srcHeight);
    let trgRatio = width / height;
    if (info.srcWidth > width || info.srcHeight > height) {
      if (resizeMethod === "crop") {
        if (srcRatio > trgRatio) {
          info.srcHeight = file.height;
          info.srcWidth = info.srcHeight * trgRatio;
        } else {
          info.srcWidth = file.width;
          info.srcHeight = info.srcWidth / trgRatio;
        }
      } else if (resizeMethod === "contain") {
        if (srcRatio > trgRatio) height = width / srcRatio;
        else width = height * srcRatio;
      } else throw new Error(`Unknown resizeMethod '${resizeMethod}'`);
    }
    info.srcX = (file.width - info.srcWidth) / 2;
    info.srcY = (file.height - info.srcHeight) / 2;
    info.trgWidth = width;
    info.trgHeight = height;
    return info;
  },
  /**
  * Can be used to transform the file (for example, resize an image if necessary).
  *
  * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
  * images according to those dimensions.
  *
  * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
  * to be invoked with the file when the transformation is done.
  */
  transformFile(file, done) {
    if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
    else return done(file);
  },
  /**
  * A string that contains the template used for each dropped
  * file. Change it to fulfill your needs but make sure to properly
  * provide all elements.
  *
  * If you want to use an actual HTML element instead of providing a String
  * as a config option, you could create a div with the id `tpl`,
  * put the template inside it and provide the element like this:
  *
  *     document
  *       .querySelector('#tpl')
  *       .innerHTML
  *
  */
  previewTemplate: /* @__PURE__ */ $parcel$interopDefault($fd6031f88dce2e32$exports),
  /*
  Those functions register themselves to the events on init and handle all
  the user interface specific stuff. Overwriting them won't break the upload
  but can break the way it's displayed.
  You can overwrite them if you don't like the default behavior. If you just
  want to add an additional event handler, register it on the dropzone object
  and don't overwrite those options.
  */
  // Those are self explanatory and simply concern the DragnDrop.
  drop(e) {
    return this.element.classList.remove("dz-drag-hover");
  },
  dragstart(e) {
  },
  dragend(e) {
    return this.element.classList.remove("dz-drag-hover");
  },
  dragenter(e) {
    return this.element.classList.add("dz-drag-hover");
  },
  dragover(e) {
    return this.element.classList.add("dz-drag-hover");
  },
  dragleave(e) {
    return this.element.classList.remove("dz-drag-hover");
  },
  paste(e) {
  },
  // Called whenever there are no files left in the dropzone anymore, and the
  // dropzone should be displayed as if in the initial state.
  reset() {
    return this.element.classList.remove("dz-started");
  },
  // Called when a file is added to the queue
  // Receives `file`
  addedfile(file) {
    if (this.element === this.previewsContainer) this.element.classList.add("dz-started");
    if (this.previewsContainer && !this.options.disablePreviews) {
      file.previewElement = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(this.options.previewTemplate.trim());
      file.previewTemplate = file.previewElement;
      this.previewsContainer.appendChild(file.previewElement);
      for (var node of file.previewElement.querySelectorAll("[data-dz-name]")) node.textContent = file.name;
      for (node of file.previewElement.querySelectorAll("[data-dz-size]")) node.innerHTML = this.filesize(file.size);
      if (this.options.addRemoveLinks) {
        file._removeLink = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(`<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`);
        file.previewElement.appendChild(file._removeLink);
      }
      let removeFileEvent = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING) return $3ed269f2f0fb224b$export$2e2bcd8739ae039.confirm(
          this.options.dictCancelUploadConfirmation,
          () => this.removeFile(file)
        );
        else {
          if (this.options.dictRemoveFileConfirmation) return $3ed269f2f0fb224b$export$2e2bcd8739ae039.confirm(
            this.options.dictRemoveFileConfirmation,
            () => this.removeFile(file)
          );
          else return this.removeFile(file);
        }
      };
      for (let removeLink of file.previewElement.querySelectorAll("[data-dz-remove]")) removeLink.addEventListener("click", removeFileEvent);
    }
  },
  // Called whenever a file is removed.
  removedfile(file) {
    if (file.previewElement != null && file.previewElement.parentNode != null) file.previewElement.parentNode.removeChild(file.previewElement);
    return this._updateMaxFilesReachedClass();
  },
  // Called when a thumbnail has been generated
  // Receives `file` and `dataUrl`
  thumbnail(file, dataUrl) {
    if (file.previewElement) {
      file.previewElement.classList.remove("dz-file-preview");
      for (let thumbnailElement of file.previewElement.querySelectorAll("[data-dz-thumbnail]")) {
        thumbnailElement.alt = file.name;
        thumbnailElement.src = dataUrl;
      }
      return setTimeout(
        () => file.previewElement.classList.add("dz-image-preview"),
        1
      );
    }
  },
  // Called whenever an error occurs
  // Receives `file` and `message`
  error(file, message) {
    if (file.previewElement) {
      file.previewElement.classList.add("dz-error");
      if (typeof message !== "string" && message.error) message = message.error;
      for (let node of file.previewElement.querySelectorAll("[data-dz-errormessage]")) node.textContent = message;
    }
  },
  errormultiple() {
  },
  // Called when a file gets processed. Since there is a cue, not all added
  // files are processed immediately.
  // Receives `file`
  processing(file) {
    if (file.previewElement) {
      file.previewElement.classList.add("dz-processing");
      if (file._removeLink) return file._removeLink.innerHTML = this.options.dictCancelUpload;
    }
  },
  processingmultiple() {
  },
  // Called whenever the upload progress gets updated.
  // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
  // To get the total number of bytes of the file, use `file.size`
  uploadprogress(file, progress, bytesSent) {
    if (file.previewElement) for (let node of file.previewElement.querySelectorAll("[data-dz-uploadprogress]")) node.nodeName === "PROGRESS" ? node.value = progress : node.style.width = `${progress}%`;
  },
  // Called whenever the total upload progress gets updated.
  // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
  totaluploadprogress() {
  },
  // Called just before the file is sent. Gets the `xhr` object as second
  // parameter, so you can modify it (for example to add a CSRF token) and a
  // `formData` object to add additional information.
  sending() {
  },
  sendingmultiple() {
  },
  // When the complete upload is finished and successful
  // Receives `file`
  success(file) {
    if (file.previewElement) return file.previewElement.classList.add("dz-success");
  },
  successmultiple() {
  },
  // When the upload is canceled.
  canceled(file) {
    return this.emit("error", file, this.options.dictUploadCanceled);
  },
  canceledmultiple() {
  },
  // When the upload is finished, either with success or an error.
  // Receives `file`
  complete(file) {
    if (file._removeLink) file._removeLink.innerHTML = this.options.dictRemoveFile;
    if (file.previewElement) return file.previewElement.classList.add("dz-complete");
  },
  completemultiple() {
  },
  maxfilesexceeded() {
  },
  maxfilesreached() {
  },
  queuecomplete() {
  },
  addedfiles() {
  }
};
var $4ca367182776f80b$export$2e2bcd8739ae039 = $4ca367182776f80b$var$defaultOptions;
var $3ed269f2f0fb224b$export$2e2bcd8739ae039 = class _$3ed269f2f0fb224b$export$2e2bcd8739ae039 extends $4040acfd8584338d$export$2e2bcd8739ae039 {
  static initClass() {
    this.prototype.Emitter = $4040acfd8584338d$export$2e2bcd8739ae039;
    this.prototype.events = [
      "drop",
      "dragstart",
      "dragend",
      "dragenter",
      "dragover",
      "dragleave",
      "addedfile",
      "addedfiles",
      "removedfile",
      "thumbnail",
      "error",
      "errormultiple",
      "processing",
      "processingmultiple",
      "uploadprogress",
      "totaluploadprogress",
      "sending",
      "sendingmultiple",
      "success",
      "successmultiple",
      "canceled",
      "canceledmultiple",
      "complete",
      "completemultiple",
      "reset",
      "maxfilesexceeded",
      "maxfilesreached",
      "queuecomplete"
    ];
    this.prototype._thumbnailQueue = [];
    this.prototype._processingThumbnail = false;
  }
  // Returns all files that have been accepted
  getAcceptedFiles() {
    return this.files.filter(
      (file) => file.accepted
    ).map(
      (file) => file
    );
  }
  // Returns all files that have been rejected
  // Not sure when that's going to be useful, but added for completeness.
  getRejectedFiles() {
    return this.files.filter(
      (file) => !file.accepted
    ).map(
      (file) => file
    );
  }
  getFilesWithStatus(status) {
    return this.files.filter(
      (file) => file.status === status
    ).map(
      (file) => file
    );
  }
  // Returns all files that are in the queue
  getQueuedFiles() {
    return this.getFilesWithStatus(_$3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED);
  }
  getUploadingFiles() {
    return this.getFilesWithStatus(_$3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING);
  }
  getAddedFiles() {
    return this.getFilesWithStatus(_$3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED);
  }
  // Files that are either queued or uploading
  getActiveFiles() {
    return this.files.filter(
      (file) => file.status === _$3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING || file.status === _$3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED
    ).map(
      (file) => file
    );
  }
  // The function that gets called when Dropzone is initialized. You
  // can (and should) setup event listeners inside this function.
  init() {
    if (this.element.tagName === "form") this.element.setAttribute("enctype", "multipart/form-data");
    if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) this.element.appendChild(_$3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(`<div class="dz-default dz-message"><button class="dz-button" type="button">${this.options.dictDefaultMessage}</button></div>`));
    if (this.clickableElements.length) {
      let setupHiddenFileInput = () => {
        if (this.hiddenFileInput) this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = document.createElement("input");
        this.hiddenFileInput.setAttribute("type", "file");
        if (this.options.maxFiles === null || this.options.maxFiles > 1) this.hiddenFileInput.setAttribute("multiple", "multiple");
        this.hiddenFileInput.className = "dz-hidden-input";
        if (this.options.acceptedFiles !== null) this.hiddenFileInput.setAttribute("accept", this.options.acceptedFiles);
        if (this.options.capture !== null) this.hiddenFileInput.setAttribute("capture", this.options.capture);
        this.hiddenFileInput.setAttribute("tabindex", "-1");
        this.hiddenFileInput.style.visibility = "hidden";
        this.hiddenFileInput.style.position = "absolute";
        this.hiddenFileInput.style.top = "0";
        this.hiddenFileInput.style.left = "0";
        this.hiddenFileInput.style.height = "0";
        this.hiddenFileInput.style.width = "0";
        _$3ed269f2f0fb224b$export$2e2bcd8739ae039.getElement(this.options.hiddenInputContainer, "hiddenInputContainer").appendChild(this.hiddenFileInput);
        this.hiddenFileInput.addEventListener("change", () => {
          let { files } = this.hiddenFileInput;
          if (files.length) for (let file of files) this.addFile(file);
          this.emit("addedfiles", files);
          setupHiddenFileInput();
        });
      };
      setupHiddenFileInput();
    }
    this.URL = window.URL !== null ? window.URL : window.webkitURL;
    for (let eventName of this.events) this.on(eventName, this.options[eventName]);
    this.on(
      "uploadprogress",
      () => this.updateTotalUploadProgress()
    );
    this.on(
      "removedfile",
      () => this.updateTotalUploadProgress()
    );
    this.on(
      "canceled",
      (file) => this.emit("complete", file)
    );
    this.on("complete", (file) => {
      if (this.getAddedFiles().length === 0 && this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0)
        return setTimeout(
          () => this.emit("queuecomplete"),
          0
        );
    });
    const containsFiles = function(e) {
      if (e.dataTransfer.types)
        for (var i = 0; i < e.dataTransfer.types.length; i++) {
          if (e.dataTransfer.types[i] === "Files") return true;
        }
      return false;
    };
    let noPropagation = function(e) {
      if (!containsFiles(e)) return;
      e.stopPropagation();
      if (e.preventDefault) return e.preventDefault();
      else return e.returnValue = false;
    };
    this.listeners = [
      {
        element: this.element,
        events: {
          dragstart: (e) => {
            return this.emit("dragstart", e);
          },
          dragenter: (e) => {
            noPropagation(e);
            return this.emit("dragenter", e);
          },
          dragover: (e) => {
            let efct;
            try {
              efct = e.dataTransfer.effectAllowed;
            } catch (error) {
            }
            e.dataTransfer.dropEffect = "move" === efct || "linkMove" === efct ? "move" : "copy";
            noPropagation(e);
            return this.emit("dragover", e);
          },
          dragleave: (e) => {
            return this.emit("dragleave", e);
          },
          drop: (e) => {
            noPropagation(e);
            return this.drop(e);
          },
          dragend: (e) => {
            return this.emit("dragend", e);
          }
        }
      }
    ];
    this.clickableElements.forEach((clickableElement) => {
      return this.listeners.push({
        element: clickableElement,
        events: {
          click: (evt) => {
            if (clickableElement !== this.element || evt.target === this.element || _$3ed269f2f0fb224b$export$2e2bcd8739ae039.elementInside(evt.target, this.element.querySelector(".dz-message"))) this.hiddenFileInput.click();
            return true;
          }
        }
      });
    });
    this.enable();
    return this.options.init.call(this);
  }
  // Not fully tested yet
  destroy() {
    this.disable();
    this.removeAllFiles(true);
    if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : void 0) {
      this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
      this.hiddenFileInput = null;
    }
    delete this.element.dropzone;
    return _$3ed269f2f0fb224b$export$2e2bcd8739ae039.instances.splice(_$3ed269f2f0fb224b$export$2e2bcd8739ae039.instances.indexOf(this), 1);
  }
  updateTotalUploadProgress() {
    let totalUploadProgress;
    let totalBytesSent = 0;
    let totalBytes = 0;
    let activeFiles = this.getActiveFiles();
    if (activeFiles.length) {
      for (let file of this.getActiveFiles()) {
        totalBytesSent += file.upload.bytesSent;
        totalBytes += file.upload.total;
      }
      totalUploadProgress = 100 * totalBytesSent / totalBytes;
    } else totalUploadProgress = 100;
    return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
  }
  // @options.paramName can be a function taking one parameter rather than a string.
  // A parameter name for a file is obtained simply by calling this with an index number.
  _getParamName(n) {
    if (typeof this.options.paramName === "function") return this.options.paramName(n);
    else return `${this.options.paramName}${this.options.uploadMultiple ? `[${n}]` : ""}`;
  }
  // If @options.renameFile is a function,
  // the function will be used to rename the file.name before appending it to the formData
  _renameFile(file) {
    if (typeof this.options.renameFile !== "function") return file.name;
    return this.options.renameFile(file);
  }
  // Returns a form that can be used as fallback if the browser does not support DragnDrop
  //
  // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
  // This code has to pass in IE7 :(
  getFallbackForm() {
    let existingFallback, form;
    if (existingFallback = this.getExistingFallback()) return existingFallback;
    let fieldsString = '<div class="dz-fallback">';
    if (this.options.dictFallbackText) fieldsString += `<p>${this.options.dictFallbackText}</p>`;
    fieldsString += `<input type="file" name="${this._getParamName(0)}" ${this.options.uploadMultiple ? 'multiple="multiple"' : void 0} /><input type="submit" value="Upload!"></div>`;
    let fields = _$3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(fieldsString);
    if (this.element.tagName !== "FORM") {
      form = _$3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(`<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`);
      form.appendChild(fields);
    } else {
      this.element.setAttribute("enctype", "multipart/form-data");
      this.element.setAttribute("method", this.options.method);
    }
    return form != null ? form : fields;
  }
  // Returns the fallback elements if they exist already
  //
  // This code has to pass in IE7 :(
  getExistingFallback() {
    let getFallback = function(elements) {
      for (let el of elements) {
        if (/(^| )fallback($| )/.test(el.className)) return el;
      }
    };
    for (let tagName of [
      "div",
      "form"
    ]) {
      var fallback;
      if (fallback = getFallback(this.element.getElementsByTagName(tagName))) return fallback;
    }
  }
  // Activates all listeners stored in @listeners
  setupEventListeners() {
    return this.listeners.map(
      (elementListeners) => (() => {
        let result = [];
        for (let event in elementListeners.events) {
          let listener = elementListeners.events[event];
          result.push(elementListeners.element.addEventListener(event, listener, false));
        }
        return result;
      })()
    );
  }
  // Deactivates all listeners stored in @listeners
  removeEventListeners() {
    return this.listeners.map(
      (elementListeners) => (() => {
        let result = [];
        for (let event in elementListeners.events) {
          let listener = elementListeners.events[event];
          result.push(elementListeners.element.removeEventListener(event, listener, false));
        }
        return result;
      })()
    );
  }
  // Removes all event listeners and cancels all files in the queue or being processed.
  disable() {
    this.clickableElements.forEach(
      (element) => element.classList.remove("dz-clickable")
    );
    this.removeEventListeners();
    this.disabled = true;
    return this.files.map(
      (file) => this.cancelUpload(file)
    );
  }
  enable() {
    delete this.disabled;
    this.clickableElements.forEach(
      (element) => element.classList.add("dz-clickable")
    );
    return this.setupEventListeners();
  }
  // Returns a nicely formatted filesize
  filesize(size) {
    let selectedSize = 0;
    let selectedUnit = "b";
    if (size > 0) {
      let units = [
        "tb",
        "gb",
        "mb",
        "kb",
        "b"
      ];
      for (let i = 0; i < units.length; i++) {
        let unit = units[i];
        let cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
        if (size >= cutoff) {
          selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
          selectedUnit = unit;
          break;
        }
      }
      selectedSize = Math.round(10 * selectedSize) / 10;
    }
    return `<strong>${selectedSize}</strong> ${this.options.dictFileSizeUnits[selectedUnit]}`;
  }
  // Adds or removes the `dz-max-files-reached` class from the form.
  _updateMaxFilesReachedClass() {
    if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
      if (this.getAcceptedFiles().length === this.options.maxFiles) this.emit("maxfilesreached", this.files);
      return this.element.classList.add("dz-max-files-reached");
    } else return this.element.classList.remove("dz-max-files-reached");
  }
  drop(e) {
    if (!e.dataTransfer) return;
    this.emit("drop", e);
    let files = [];
    for (let i = 0; i < e.dataTransfer.files.length; i++) files[i] = e.dataTransfer.files[i];
    if (files.length) {
      let { items } = e.dataTransfer;
      if (items && items.length && items[0].webkitGetAsEntry != null)
        this._addFilesFromItems(items);
      else this.handleFiles(files);
    }
    this.emit("addedfiles", files);
  }
  paste(e) {
    if ($3ed269f2f0fb224b$var$__guard__(
      e != null ? e.clipboardData : void 0,
      (x) => x.items
    ) == null) return;
    this.emit("paste", e);
    let { items } = e.clipboardData;
    if (items.length) return this._addFilesFromItems(items);
  }
  handleFiles(files) {
    for (let file of files) this.addFile(file);
  }
  // When a folder is dropped (or files are pasted), items must be handled
  // instead of files.
  _addFilesFromItems(items) {
    return (() => {
      let result = [];
      for (let item of items) {
        var entry;
        if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
          if (entry.isFile) result.push(this.addFile(item.getAsFile()));
          else if (entry.isDirectory)
            result.push(this._addFilesFromDirectory(entry, entry.name));
          else result.push(void 0);
        } else if (item.getAsFile != null) {
          if (item.kind == null || item.kind === "file") result.push(this.addFile(item.getAsFile()));
          else result.push(void 0);
        } else result.push(void 0);
      }
      return result;
    })();
  }
  // Goes through the directory, and adds each file it finds recursively
  _addFilesFromDirectory(directory, path) {
    let dirReader = directory.createReader();
    let errorHandler = (error) => $3ed269f2f0fb224b$var$__guardMethod__(
      console,
      "log",
      (o) => o.log(error)
    );
    var readEntries = () => {
      return dirReader.readEntries((entries) => {
        if (entries.length > 0) {
          for (let entry of entries) {
            if (entry.isFile) entry.file((file) => {
              if (this.options.ignoreHiddenFiles && file.name.substring(0, 1) === ".") return;
              file.fullPath = `${path}/${file.name}`;
              return this.addFile(file);
            });
            else if (entry.isDirectory) this._addFilesFromDirectory(entry, `${path}/${entry.name}`);
          }
          readEntries();
        }
        return null;
      }, errorHandler);
    };
    return readEntries();
  }
  // If `done()` is called without argument the file is accepted
  // If you call it with an error message, the file is rejected
  // (This allows for asynchronous validation)
  //
  // This function checks the filesize, and if the file.type passes the
  // `acceptedFiles` check.
  accept(file, done) {
    if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1048576) done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
    else if (!_$3ed269f2f0fb224b$export$2e2bcd8739ae039.isValidFile(file, this.options.acceptedFiles)) done(this.options.dictInvalidFileType);
    else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
      done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
      this.emit("maxfilesexceeded", file);
    } else this.options.accept.call(this, file, done);
  }
  addFile(file) {
    file.upload = {
      uuid: _$3ed269f2f0fb224b$export$2e2bcd8739ae039.uuidv4(),
      progress: 0,
      // Setting the total upload size to file.size for the beginning
      // It's actual different than the size to be transmitted.
      total: file.size,
      bytesSent: 0,
      filename: this._renameFile(file)
    };
    this.files.push(file);
    file.status = _$3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED;
    this.emit("addedfile", file);
    this._enqueueThumbnail(file);
    this.accept(file, (error) => {
      if (error) {
        file.accepted = false;
        this._errorProcessing([
          file
        ], error);
      } else {
        file.accepted = true;
        if (this.options.autoQueue) this.enqueueFile(file);
      }
      this._updateMaxFilesReachedClass();
    });
  }
  // Wrapper for enqueueFile
  enqueueFiles(files) {
    for (let file of files) this.enqueueFile(file);
    return null;
  }
  enqueueFile(file) {
    if (file.status === _$3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED && file.accepted === true) {
      file.status = _$3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED;
      if (this.options.autoProcessQueue) return setTimeout(
        () => this.processQueue(),
        0
      );
    } else throw new Error("This file can't be queued because it has already been processed or was rejected.");
  }
  _enqueueThumbnail(file) {
    if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1048576) {
      this._thumbnailQueue.push(file);
      return setTimeout(
        () => this._processThumbnailQueue(),
        0
      );
    }
  }
  _processThumbnailQueue() {
    if (this._processingThumbnail || this._thumbnailQueue.length === 0) return;
    this._processingThumbnail = true;
    let file = this._thumbnailQueue.shift();
    return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, (dataUrl) => {
      this.emit("thumbnail", file, dataUrl);
      this._processingThumbnail = false;
      return this._processThumbnailQueue();
    });
  }
  // Can be called by the user to remove a file
  removeFile(file) {
    if (file.status === _$3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING) this.cancelUpload(file);
    this.files = $3ed269f2f0fb224b$var$without(this.files, file);
    this.emit("removedfile", file);
    if (this.files.length === 0) return this.emit("reset");
  }
  // Removes all files that aren't currently processed from the list
  removeAllFiles(cancelIfNecessary) {
    if (cancelIfNecessary == null) cancelIfNecessary = false;
    for (let file of this.files.slice()) if (file.status !== _$3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING || cancelIfNecessary) this.removeFile(file);
    return null;
  }
  // Resizes an image before it gets sent to the server. This function is the default behavior of
  // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
  // the resized blob.
  resizeImage(file, width, height, resizeMethod, callback) {
    return this.createThumbnail(file, width, height, resizeMethod, true, (dataUrl, canvas) => {
      if (canvas == null)
        return callback(file);
      else {
        let { resizeMimeType } = this.options;
        if (resizeMimeType == null) resizeMimeType = file.type;
        let resizedDataURL = canvas.toDataURL(resizeMimeType, this.options.resizeQuality);
        if (resizeMimeType === "image/jpeg" || resizeMimeType === "image/jpg")
          resizedDataURL = $3ed269f2f0fb224b$var$ExifRestore.restore(file.dataURL, resizedDataURL);
        return callback(_$3ed269f2f0fb224b$export$2e2bcd8739ae039.dataURItoBlob(resizedDataURL));
      }
    });
  }
  createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      file.dataURL = fileReader.result;
      if (file.type === "image/svg+xml") {
        if (callback != null) callback(fileReader.result);
        return;
      }
      this.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
    };
    fileReader.readAsDataURL(file);
  }
  // `mockFile` needs to have these attributes:
  //
  //     { name: 'name', size: 12345, imageUrl: '' }
  //
  // `callback` will be invoked when the image has been downloaded and displayed.
  // `crossOrigin` will be added to the `img` tag when accessing the file.
  displayExistingFile(mockFile, imageUrl, callback, crossOrigin, resizeThumbnail = true) {
    this.emit("addedfile", mockFile);
    this.emit("complete", mockFile);
    if (!resizeThumbnail) {
      this.emit("thumbnail", mockFile, imageUrl);
      if (callback) callback();
    } else {
      let onDone = (thumbnail) => {
        this.emit("thumbnail", mockFile, thumbnail);
        if (callback) callback();
      };
      mockFile.dataURL = imageUrl;
      this.createThumbnailFromUrl(mockFile, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, onDone, crossOrigin);
    }
  }
  createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
    let img = document.createElement("img");
    if (crossOrigin) img.crossOrigin = crossOrigin;
    fixOrientation = getComputedStyle(document.body)["imageOrientation"] == "from-image" ? false : fixOrientation;
    img.onload = () => {
      let loadExif = (callback2) => callback2(1);
      if (typeof EXIF !== "undefined" && EXIF !== null && fixOrientation) loadExif = (callback2) => EXIF.getData(img, function() {
        return callback2(EXIF.getTag(this, "Orientation"));
      });
      return loadExif((orientation) => {
        file.width = img.width;
        file.height = img.height;
        let resizeInfo = this.options.resize.call(this, file, width, height, resizeMethod);
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        canvas.width = resizeInfo.trgWidth;
        canvas.height = resizeInfo.trgHeight;
        if (orientation > 4) {
          canvas.width = resizeInfo.trgHeight;
          canvas.height = resizeInfo.trgWidth;
        }
        switch (orientation) {
          case 2:
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
            break;
          case 3:
            ctx.translate(canvas.width, canvas.height);
            ctx.rotate(Math.PI);
            break;
          case 4:
            ctx.translate(0, canvas.height);
            ctx.scale(1, -1);
            break;
          case 5:
            ctx.rotate(0.5 * Math.PI);
            ctx.scale(1, -1);
            break;
          case 6:
            ctx.rotate(0.5 * Math.PI);
            ctx.translate(0, -canvas.width);
            break;
          case 7:
            ctx.rotate(0.5 * Math.PI);
            ctx.translate(canvas.height, -canvas.width);
            ctx.scale(-1, 1);
            break;
          case 8:
            ctx.rotate(-0.5 * Math.PI);
            ctx.translate(-canvas.height, 0);
            break;
        }
        $3ed269f2f0fb224b$var$drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
        let thumbnail = canvas.toDataURL("image/png");
        if (callback != null) return callback(thumbnail, canvas);
      });
    };
    if (callback != null) img.onerror = callback;
    return img.src = file.dataURL;
  }
  // Goes through the queue and processes files if there aren't too many already.
  processQueue() {
    let { parallelUploads } = this.options;
    let processingLength = this.getUploadingFiles().length;
    let i = processingLength;
    if (processingLength >= parallelUploads) return;
    let queuedFiles = this.getQueuedFiles();
    if (!(queuedFiles.length > 0)) return;
    if (this.options.uploadMultiple)
      return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
    else while (i < parallelUploads) {
      if (!queuedFiles.length) return;
      this.processFile(queuedFiles.shift());
      i++;
    }
  }
  // Wrapper for `processFiles`
  processFile(file) {
    return this.processFiles([
      file
    ]);
  }
  // Loads the file, then calls finishedLoading()
  processFiles(files) {
    for (let file of files) {
      file.processing = true;
      file.status = _$3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING;
      this.emit("processing", file);
    }
    if (this.options.uploadMultiple) this.emit("processingmultiple", files);
    return this.uploadFiles(files);
  }
  _getFilesWithXhr(xhr) {
    let files;
    return files = this.files.filter(
      (file) => file.xhr === xhr
    ).map(
      (file) => file
    );
  }
  // Cancels the file upload and sets the status to CANCELED
  // **if** the file is actually being uploaded.
  // If it's still in the queue, the file is being removed from it and the status
  // set to CANCELED.
  cancelUpload(file) {
    if (file.status === _$3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING) {
      let groupedFiles = this._getFilesWithXhr(file.xhr);
      for (let groupedFile of groupedFiles) groupedFile.status = _$3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED;
      if (typeof file.xhr !== "undefined") file.xhr.abort();
      for (let groupedFile1 of groupedFiles) this.emit("canceled", groupedFile1);
      if (this.options.uploadMultiple) this.emit("canceledmultiple", groupedFiles);
    } else if (file.status === _$3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED || file.status === _$3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED) {
      file.status = _$3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED;
      this.emit("canceled", file);
      if (this.options.uploadMultiple) this.emit("canceledmultiple", [
        file
      ]);
    }
    if (this.options.autoProcessQueue) return this.processQueue();
  }
  resolveOption(option, ...args) {
    if (typeof option === "function") return option.apply(this, args);
    return option;
  }
  uploadFile(file) {
    return this.uploadFiles([
      file
    ]);
  }
  uploadFiles(files) {
    this._transformFiles(files, (transformedFiles) => {
      if (this.options.chunking) {
        let transformedFile = transformedFiles[0];
        files[0].upload.chunked = this.options.chunking && (this.options.forceChunking || transformedFile.size > this.options.chunkSize);
        files[0].upload.totalChunkCount = Math.ceil(transformedFile.size / this.options.chunkSize);
      }
      if (files[0].upload.chunked) {
        let file = files[0];
        let transformedFile = transformedFiles[0];
        let startedChunkCount = 0;
        file.upload.chunks = [];
        let handleNextChunk = () => {
          let chunkIndex = 0;
          while (file.upload.chunks[chunkIndex] !== void 0) chunkIndex++;
          if (chunkIndex >= file.upload.totalChunkCount) return;
          startedChunkCount++;
          let start = chunkIndex * this.options.chunkSize;
          let end = Math.min(start + this.options.chunkSize, transformedFile.size);
          let dataBlock = {
            name: this._getParamName(0),
            data: transformedFile.webkitSlice ? transformedFile.webkitSlice(start, end) : transformedFile.slice(start, end),
            filename: file.upload.filename,
            chunkIndex
          };
          file.upload.chunks[chunkIndex] = {
            file,
            index: chunkIndex,
            dataBlock,
            status: _$3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING,
            progress: 0,
            retries: 0
          };
          this._uploadData(files, [
            dataBlock
          ]);
        };
        file.upload.finishedChunkUpload = (chunk, response) => {
          let allFinished = true;
          chunk.status = _$3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS;
          chunk.dataBlock = null;
          chunk.response = chunk.xhr.responseText;
          chunk.responseHeaders = chunk.xhr.getAllResponseHeaders();
          chunk.xhr = null;
          for (let i = 0; i < file.upload.totalChunkCount; i++) {
            if (file.upload.chunks[i] === void 0) return handleNextChunk();
            if (file.upload.chunks[i].status !== _$3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS) allFinished = false;
          }
          if (allFinished) this.options.chunksUploaded(file, () => {
            this._finished(files, response, null);
          });
        };
        if (this.options.parallelChunkUploads) for (let i = 0; i < file.upload.totalChunkCount; i++) handleNextChunk();
        else handleNextChunk();
      } else {
        let dataBlocks = [];
        for (let i = 0; i < files.length; i++) dataBlocks[i] = {
          name: this._getParamName(i),
          data: transformedFiles[i],
          filename: files[i].upload.filename
        };
        this._uploadData(files, dataBlocks);
      }
    });
  }
  /// Returns the right chunk for given file and xhr
  _getChunk(file, xhr) {
    for (let i = 0; i < file.upload.totalChunkCount; i++) {
      if (file.upload.chunks[i] !== void 0 && file.upload.chunks[i].xhr === xhr) return file.upload.chunks[i];
    }
  }
  // This function actually uploads the file(s) to the server.
  //
  //  If dataBlocks contains the actual data to upload (meaning, that this could
  // either be transformed files, or individual chunks for chunked upload) then
  // they will be used for the actual data to upload.
  _uploadData(files, dataBlocks) {
    let xhr = new XMLHttpRequest();
    for (let file of files) file.xhr = xhr;
    if (files[0].upload.chunked)
      files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
    let method = this.resolveOption(this.options.method, files, dataBlocks);
    let url = this.resolveOption(this.options.url, files, dataBlocks);
    xhr.open(method, url, true);
    let timeout = this.resolveOption(this.options.timeout, files);
    if (timeout) xhr.timeout = this.resolveOption(this.options.timeout, files);
    xhr.withCredentials = !!this.options.withCredentials;
    xhr.onload = (e) => {
      this._finishedUploading(files, xhr, e);
    };
    xhr.ontimeout = () => {
      this._handleUploadError(files, xhr, `Request timedout after ${this.options.timeout / 1e3} seconds`);
    };
    xhr.onerror = () => {
      this._handleUploadError(files, xhr);
    };
    let progressObj = xhr.upload != null ? xhr.upload : xhr;
    progressObj.onprogress = (e) => this._updateFilesUploadProgress(files, xhr, e);
    let headers = this.options.defaultHeaders ? {
      Accept: "application/json",
      "Cache-Control": "no-cache",
      "X-Requested-With": "XMLHttpRequest"
    } : {};
    if (this.options.binaryBody) headers["Content-Type"] = files[0].type;
    if (this.options.headers) objectExtend(headers, this.options.headers);
    for (let headerName in headers) {
      let headerValue = headers[headerName];
      if (headerValue) xhr.setRequestHeader(headerName, headerValue);
    }
    if (this.options.binaryBody) {
      for (let file of files) this.emit("sending", file, xhr);
      if (this.options.uploadMultiple) this.emit("sendingmultiple", files, xhr);
      this.submitRequest(xhr, null, files);
    } else {
      let formData = new FormData();
      if (this.options.params) {
        let additionalParams = this.options.params;
        if (typeof additionalParams === "function") additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
        for (let key in additionalParams) {
          let value = additionalParams[key];
          if (Array.isArray(value))
            for (let i = 0; i < value.length; i++) formData.append(key, value[i]);
          else formData.append(key, value);
        }
      }
      for (let file of files) this.emit("sending", file, xhr, formData);
      if (this.options.uploadMultiple) this.emit("sendingmultiple", files, xhr, formData);
      this._addFormElementData(formData);
      for (let i = 0; i < dataBlocks.length; i++) {
        let dataBlock = dataBlocks[i];
        formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
      }
      this.submitRequest(xhr, formData, files);
    }
  }
  // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.
  _transformFiles(files, done) {
    let transformedFiles = [];
    let doneCounter = 0;
    for (let i = 0; i < files.length; i++) this.options.transformFile.call(this, files[i], (transformedFile) => {
      transformedFiles[i] = transformedFile;
      if (++doneCounter === files.length) done(transformedFiles);
    });
  }
  // Takes care of adding other input elements of the form to the AJAX request
  _addFormElementData(formData) {
    if (this.element.tagName === "FORM") for (let input of this.element.querySelectorAll("input, textarea, select, button")) {
      let inputName = input.getAttribute("name");
      let inputType = input.getAttribute("type");
      if (inputType) inputType = inputType.toLowerCase();
      if (typeof inputName === "undefined" || inputName === null) continue;
      if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
        for (let option of input.options) if (option.selected) formData.append(inputName, option.value);
      } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) formData.append(inputName, input.value);
    }
  }
  // Invoked when there is new progress information about given files.
  // If e is not provided, it is assumed that the upload is finished.
  _updateFilesUploadProgress(files, xhr, e) {
    if (!files[0].upload.chunked)
      for (let file of files) {
        if (file.upload.total && file.upload.bytesSent && file.upload.bytesSent == file.upload.total) continue;
        if (e) {
          file.upload.progress = 100 * e.loaded / e.total;
          file.upload.total = e.total;
          file.upload.bytesSent = e.loaded;
        } else {
          file.upload.progress = 100;
          file.upload.bytesSent = file.upload.total;
        }
        this.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
      }
    else {
      let file = files[0];
      let chunk = this._getChunk(file, xhr);
      if (e) {
        chunk.progress = 100 * e.loaded / e.total;
        chunk.total = e.total;
        chunk.bytesSent = e.loaded;
      } else {
        chunk.progress = 100;
        chunk.bytesSent = chunk.total;
      }
      file.upload.progress = 0;
      file.upload.total = 0;
      file.upload.bytesSent = 0;
      for (let i = 0; i < file.upload.totalChunkCount; i++) if (file.upload.chunks[i] && typeof file.upload.chunks[i].progress !== "undefined") {
        file.upload.progress += file.upload.chunks[i].progress;
        file.upload.total += file.upload.chunks[i].total;
        file.upload.bytesSent += file.upload.chunks[i].bytesSent;
      }
      file.upload.progress = file.upload.progress / file.upload.totalChunkCount;
      this.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
    }
  }
  _finishedUploading(files, xhr, e) {
    let response;
    if (files[0].status === _$3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED) return;
    if (xhr.readyState !== 4) return;
    if (xhr.responseType !== "arraybuffer" && xhr.responseType !== "blob") {
      response = xhr.responseText;
      if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) try {
        response = JSON.parse(response);
      } catch (error) {
        e = error;
        response = "Invalid JSON response from server.";
      }
    }
    this._updateFilesUploadProgress(files, xhr);
    if (!(200 <= xhr.status && xhr.status < 300)) this._handleUploadError(files, xhr, response);
    else if (files[0].upload.chunked) files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr), response);
    else this._finished(files, response, e);
  }
  _handleUploadError(files, xhr, response) {
    if (files[0].status === _$3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED) return;
    if (files[0].upload.chunked && this.options.retryChunks) {
      let chunk = this._getChunk(files[0], xhr);
      if (chunk.retries++ < this.options.retryChunksLimit) {
        this._uploadData(files, [
          chunk.dataBlock
        ]);
        return;
      } else console.warn("Retried this chunk too often. Giving up.");
    }
    this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
  }
  submitRequest(xhr, formData, files) {
    if (xhr.readyState != 1) {
      console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");
      return;
    }
    if (this.options.binaryBody) {
      if (files[0].upload.chunked) {
        const chunk = this._getChunk(files[0], xhr);
        xhr.send(chunk.dataBlock.data);
      } else xhr.send(files[0]);
    } else xhr.send(formData);
  }
  // Called internally when processing is finished.
  // Individual callbacks have to be called in the appropriate sections.
  _finished(files, responseText, e) {
    for (let file of files) {
      file.status = _$3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS;
      this.emit("success", file, responseText, e);
      this.emit("complete", file);
    }
    if (this.options.uploadMultiple) {
      this.emit("successmultiple", files, responseText, e);
      this.emit("completemultiple", files);
    }
    if (this.options.autoProcessQueue) return this.processQueue();
  }
  // Called internally when processing is finished.
  // Individual callbacks have to be called in the appropriate sections.
  _errorProcessing(files, message, xhr) {
    for (let file of files) {
      file.status = _$3ed269f2f0fb224b$export$2e2bcd8739ae039.ERROR;
      this.emit("error", file, message, xhr);
      this.emit("complete", file);
    }
    if (this.options.uploadMultiple) {
      this.emit("errormultiple", files, message, xhr);
      this.emit("completemultiple", files);
    }
    if (this.options.autoProcessQueue) return this.processQueue();
  }
  static uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  }
  constructor(el, options) {
    super();
    let fallback, left;
    this.element = el;
    this.clickableElements = [];
    this.listeners = [];
    this.files = [];
    if (typeof this.element === "string") this.element = document.querySelector(this.element);
    if (!this.element || this.element.nodeType == null) throw new Error("Invalid dropzone element.");
    if (this.element.dropzone) throw new Error("Dropzone already attached.");
    _$3ed269f2f0fb224b$export$2e2bcd8739ae039.instances.push(this);
    this.element.dropzone = this;
    let elementOptions = (left = _$3ed269f2f0fb224b$export$2e2bcd8739ae039.optionsForElement(this.element)) != null ? left : {};
    this.options = objectExtend(true, {}, $4ca367182776f80b$export$2e2bcd8739ae039, elementOptions, options != null ? options : {});
    this.options.previewTemplate = this.options.previewTemplate.replace(/\n*/g, "");
    if (this.options.forceFallback || !_$3ed269f2f0fb224b$export$2e2bcd8739ae039.isBrowserSupported()) return this.options.fallback.call(this);
    if (this.options.url == null) this.options.url = this.element.getAttribute("action");
    if (!this.options.url) throw new Error("No URL provided.");
    if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
    if (this.options.uploadMultiple && this.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
    if (this.options.binaryBody && this.options.uploadMultiple) throw new Error("You cannot set both: binaryBody and uploadMultiple.");
    if (this.options.acceptedMimeTypes) {
      this.options.acceptedFiles = this.options.acceptedMimeTypes;
      delete this.options.acceptedMimeTypes;
    }
    if (this.options.renameFilename != null) this.options.renameFile = (file) => this.options.renameFilename.call(this, file.name, file);
    if (typeof this.options.method === "string") this.options.method = this.options.method.toUpperCase();
    if ((fallback = this.getExistingFallback()) && fallback.parentNode)
      fallback.parentNode.removeChild(fallback);
    if (this.options.previewsContainer !== false) {
      if (this.options.previewsContainer) this.previewsContainer = _$3ed269f2f0fb224b$export$2e2bcd8739ae039.getElement(this.options.previewsContainer, "previewsContainer");
      else this.previewsContainer = this.element;
    }
    if (this.options.clickable) {
      if (this.options.clickable === true) this.clickableElements = [
        this.element
      ];
      else this.clickableElements = _$3ed269f2f0fb224b$export$2e2bcd8739ae039.getElements(this.options.clickable, "clickable");
    }
    this.init();
  }
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.initClass();
$3ed269f2f0fb224b$export$2e2bcd8739ae039.options = {};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.optionsForElement = function(element) {
  if (element.getAttribute("id")) return $3ed269f2f0fb224b$export$2e2bcd8739ae039.options[$3ed269f2f0fb224b$var$camelize(element.getAttribute("id"))];
  else return void 0;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.instances = [];
$3ed269f2f0fb224b$export$2e2bcd8739ae039.forElement = function(element) {
  if (typeof element === "string") element = document.querySelector(element);
  if ((element != null ? element.dropzone : void 0) == null) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
  return element.dropzone;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.discover = function() {
  let dropzones;
  if (document.querySelectorAll) dropzones = document.querySelectorAll(".dropzone");
  else {
    dropzones = [];
    let checkElements = (elements) => (() => {
      let result = [];
      for (let el of elements) if (/(^| )dropzone($| )/.test(el.className)) result.push(dropzones.push(el));
      else result.push(void 0);
      return result;
    })();
    checkElements(document.getElementsByTagName("div"));
    checkElements(document.getElementsByTagName("form"));
  }
  return (() => {
    let result = [];
    for (let dropzone of dropzones)
      if ($3ed269f2f0fb224b$export$2e2bcd8739ae039.optionsForElement(dropzone) !== false) result.push(new $3ed269f2f0fb224b$export$2e2bcd8739ae039(dropzone));
      else result.push(void 0);
    return result;
  })();
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.blockedBrowsers = [
  // The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
  /opera.*(Macintosh|Windows Phone).*version\/12/i
];
$3ed269f2f0fb224b$export$2e2bcd8739ae039.isBrowserSupported = function() {
  let capableBrowser = true;
  if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
    if (!("classList" in document.createElement("a"))) capableBrowser = false;
    else {
      if ($3ed269f2f0fb224b$export$2e2bcd8739ae039.blacklistedBrowsers !== void 0)
        $3ed269f2f0fb224b$export$2e2bcd8739ae039.blockedBrowsers = $3ed269f2f0fb224b$export$2e2bcd8739ae039.blacklistedBrowsers;
      for (let regex of $3ed269f2f0fb224b$export$2e2bcd8739ae039.blockedBrowsers) if (regex.test(navigator.userAgent)) {
        capableBrowser = false;
        continue;
      }
    }
  } else capableBrowser = false;
  return capableBrowser;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.dataURItoBlob = function(dataURI) {
  let byteString = atob(dataURI.split(",")[1]);
  let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  let ab = new ArrayBuffer(byteString.length);
  let ia = new Uint8Array(ab);
  for (let i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) ia[i] = byteString.charCodeAt(i);
  return new Blob([
    ab
  ], {
    type: mimeString
  });
};
var $3ed269f2f0fb224b$var$without = (list, rejectedItem) => list.filter(
  (item) => item !== rejectedItem
).map(
  (item) => item
);
var $3ed269f2f0fb224b$var$camelize = (str) => str.replace(
  /[\-_](\w)/g,
  (match) => match.charAt(1).toUpperCase()
);
$3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement = function(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.childNodes[0];
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.elementInside = function(element, container) {
  if (element === container) return true;
  while (element = element.parentNode) {
    if (element === container) return true;
  }
  return false;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.getElement = function(el, name) {
  let element;
  if (typeof el === "string") element = document.querySelector(el);
  else if (el.nodeType != null) element = el;
  if (element == null) throw new Error(`Invalid \`${name}\` option provided. Please provide a CSS selector or a plain HTML element.`);
  return element;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.getElements = function(els, name) {
  let el, elements;
  if (els instanceof Array) {
    elements = [];
    try {
      for (el of els) elements.push(this.getElement(el, name));
    } catch (e) {
      elements = null;
    }
  } else if (typeof els === "string") {
    elements = [];
    for (el of document.querySelectorAll(els)) elements.push(el);
  } else if (els.nodeType != null) elements = [
    els
  ];
  if (elements == null || !elements.length) throw new Error(`Invalid \`${name}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`);
  return elements;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.confirm = function(question, accepted, rejected) {
  if (window.confirm(question)) return accepted();
  else if (rejected != null) return rejected();
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.isValidFile = function(file, acceptedFiles) {
  if (!acceptedFiles) return true;
  acceptedFiles = acceptedFiles.split(",");
  let mimeType = file.type;
  let baseMimeType = mimeType.replace(/\/.*$/, "");
  for (let validType of acceptedFiles) {
    validType = validType.trim();
    if (validType.charAt(0) === ".") {
      if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) return true;
    } else if (/\/\*$/.test(validType)) {
      if (baseMimeType === validType.replace(/\/.*$/, "")) return true;
    } else {
      if (mimeType === validType) return true;
    }
  }
  return false;
};
if (typeof jQuery !== "undefined" && jQuery !== null) jQuery.fn.dropzone = function(options) {
  return this.each(function() {
    return new $3ed269f2f0fb224b$export$2e2bcd8739ae039(this, options);
  });
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED = "added";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED = "queued";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.ACCEPTED = $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED;
$3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING = "uploading";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.PROCESSING = $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING;
$3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED = "canceled";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.ERROR = "error";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS = "success";
var $3ed269f2f0fb224b$var$detectVerticalSquash = function(img) {
  let iw = img.naturalWidth;
  let ih = img.naturalHeight;
  let canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = ih;
  let ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  let { data } = ctx.getImageData(1, 0, 1, ih);
  let sy = 0;
  let ey = ih;
  let py = ih;
  while (py > sy) {
    let alpha = data[(py - 1) * 4 + 3];
    if (alpha === 0) ey = py;
    else sy = py;
    py = ey + sy >> 1;
  }
  let ratio = py / ih;
  if (ratio === 0) return 1;
  else return ratio;
};
var $3ed269f2f0fb224b$var$drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
  let vertSquashRatio = $3ed269f2f0fb224b$var$detectVerticalSquash(img);
  return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
};
var $3ed269f2f0fb224b$var$ExifRestore = class {
  static initClass() {
    this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  }
  static encode64(input) {
    let output = "";
    let chr1 = void 0;
    let chr2 = void 0;
    let chr3 = "";
    let enc1 = void 0;
    let enc2 = void 0;
    let enc3 = void 0;
    let enc4 = "";
    let i = 0;
    while (true) {
      chr1 = input[i++];
      chr2 = input[i++];
      chr3 = input[i++];
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;
      if (isNaN(chr2)) enc3 = enc4 = 64;
      else if (isNaN(chr3)) enc4 = 64;
      output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
      chr1 = chr2 = chr3 = "";
      enc1 = enc2 = enc3 = enc4 = "";
      if (!(i < input.length)) break;
    }
    return output;
  }
  static restore(origFileBase64, resizedFileBase64) {
    if (!origFileBase64.match("data:image/jpeg;base64,")) return resizedFileBase64;
    let rawImage = this.decode64(origFileBase64.replace("data:image/jpeg;base64,", ""));
    let segments = this.slice2Segments(rawImage);
    let image = this.exifManipulation(resizedFileBase64, segments);
    return `data:image/jpeg;base64,${this.encode64(image)}`;
  }
  static exifManipulation(resizedFileBase64, segments) {
    let exifArray = this.getExifArray(segments);
    let newImageArray = this.insertExif(resizedFileBase64, exifArray);
    let aBuffer = new Uint8Array(newImageArray);
    return aBuffer;
  }
  static getExifArray(segments) {
    let seg = void 0;
    let x = 0;
    while (x < segments.length) {
      seg = segments[x];
      if (seg[0] === 255 & seg[1] === 225) return seg;
      x++;
    }
    return [];
  }
  static insertExif(resizedFileBase64, exifArray) {
    let imageData = resizedFileBase64.replace("data:image/jpeg;base64,", "");
    let buf = this.decode64(imageData);
    let separatePoint = buf.indexOf(255, 3);
    let mae = buf.slice(0, separatePoint);
    let ato = buf.slice(separatePoint);
    let array = mae;
    array = array.concat(exifArray);
    array = array.concat(ato);
    return array;
  }
  static slice2Segments(rawImageArray) {
    let head = 0;
    let segments = [];
    while (true) {
      var length;
      if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) break;
      if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) head += 2;
      else {
        length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
        let endPoint = head + length + 2;
        let seg = rawImageArray.slice(head, endPoint);
        segments.push(seg);
        head = endPoint;
      }
      if (head > rawImageArray.length) break;
    }
    return segments;
  }
  static decode64(input) {
    let output = "";
    let chr1 = void 0;
    let chr2 = void 0;
    let chr3 = "";
    let enc1 = void 0;
    let enc2 = void 0;
    let enc3 = void 0;
    let enc4 = "";
    let i = 0;
    let buf = [];
    let base64test = /[^A-Za-z0-9\+\/\=]/g;
    if (base64test.exec(input)) console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (true) {
      enc1 = this.KEY_STR.indexOf(input.charAt(i++));
      enc2 = this.KEY_STR.indexOf(input.charAt(i++));
      enc3 = this.KEY_STR.indexOf(input.charAt(i++));
      enc4 = this.KEY_STR.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      buf.push(chr1);
      if (enc3 !== 64) buf.push(chr2);
      if (enc4 !== 64) buf.push(chr3);
      chr1 = chr2 = chr3 = "";
      enc1 = enc2 = enc3 = enc4 = "";
      if (!(i < input.length)) break;
    }
    return buf;
  }
};
$3ed269f2f0fb224b$var$ExifRestore.initClass();
function $3ed269f2f0fb224b$var$__guard__(value, transform) {
  return typeof value !== "undefined" && value !== null ? transform(value) : void 0;
}
function $3ed269f2f0fb224b$var$__guardMethod__(obj, methodName, transform) {
  if (typeof obj !== "undefined" && obj !== null && typeof obj[methodName] === "function") return transform(obj, methodName);
  else return void 0;
}

// resources/js/dropzone.js
function dropzoneComponent({
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
    init: async function() {
      const dropzoneElement = document.getElementById(componentId);
      if (directory === null) {
        directory = "";
      }
      const options = {
        maxFilesize,
        acceptedFiles,
        allowMultiple,
        autoProcessQueue,
        parallelUploads,
        parallelChunksUploads,
        chunking,
        chunkSize,
        url: `${url}?directory=${directory}&disk=${disk}`,
        retryChunks,
        retryChunksLimit,
        dictDefaultMessage: defaultMessage,
        maxFiles: allowMultiple ? null : 1
      };
      this.dropzone = new $3ed269f2f0fb224b$export$2e2bcd8739ae039(dropzoneElement, options);
      this.dropzone.on("addedfile", (file) => {
        this.dispatchFormEvent("form-processing-started");
        if (maxVideoDuration && file.type.startsWith("video/")) {
          const video = document.createElement("video");
          video.src = URL.createObjectURL(file);
          video.onloadedmetadata = () => {
            if (video.duration > maxVideoDuration) {
              this.dropzone.removeFile(file);
              this.error = `Video duration is too long. Maximum allowed duration is ${maxVideoDuration} seconds.`;
            }
          };
        }
      });
      this.dropzone.on("error", (file, response) => {
        console.error(`Error uploading file: ${file.name}`, response);
        const notification = new window.FilamentNotification();
        notification.title(`Error uploading file: ${file.name}`).warning().body(this.error ?? response?.message).send();
      });
      this.dropzone.on("queuecomplete", () => {
        this.state = this.dropzone.files.map(
          (file) => directory ? `${directory}/${file.name}` : file.name
        );
        const totalFilesCount = this.dropzone.files.length;
        const successfulUploadsCount = this.dropzone.getFilesWithStatus($3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS).length;
        const failedUploadsCount = this.dropzone.getFilesWithStatus($3ed269f2f0fb224b$export$2e2bcd8739ae039.ERROR).length;
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
            }, 5e3);
          }
          if (leaveFailed && failedUploadsCount > 0) {
            notification.warning();
            notification.body("Some files failed to upload. Please check the list below.");
            this.dropzone.getFilesWithStatus($3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS).forEach((file) => {
              this.dropzone.removeFile(file);
            });
          } else {
            notification.success();
          }
          notification.send();
        } else {
          const notification = new window.FilamentNotification();
          notification.title("Upload failed").danger().body(failedUploadsCount > 0 ? "Please check the list below." : "No files were uploaded.").send();
        }
        this.dispatchFormEvent("form-processing-finished", {
          stats: {
            totalFilesCount,
            successfulUploadsCount,
            failedUploadsCount
          }
        });
      });
      window.addEventListener("clear-dropzone", () => {
        if (this.dropzone) {
          this.dropzone.removeAllFiles();
        }
      });
    },
    destroy: function() {
      this.dropzone.destroy();
      this.dropzone = null;
    },
    dispatchFormEvent: function(name, detail = {}) {
      window.dispatchEvent(
        new CustomEvent(name, {
          composed: true,
          cancelable: true,
          detail
        })
      );
    }
  };
}
export {
  dropzoneComponent as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2p1c3QtZXh0ZW5kL2luZGV4LmVzbS5qcyIsICIuLi9ub2RlX21vZHVsZXMvZHJvcHpvbmUvZGlzdC9zcmMvZHJvcHpvbmUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Ryb3B6b25lL2Rpc3Qvc3JjL2VtaXR0ZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Ryb3B6b25lL2Rpc3Qvc3JjL29wdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Ryb3B6b25lL2Rpc3Qvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvYnVuZGxlcy9ydW50aW1lLTA0NGY2ZGU0MDM5NWE1NjQuanMiLCAiLi4vcmVzb3VyY2VzL2pzL2Ryb3B6b25lLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ2YXIgb2JqZWN0RXh0ZW5kID0gZXh0ZW5kO1xuXG4vKlxuICB2YXIgb2JqID0ge2E6IDMsIGI6IDV9O1xuICBleHRlbmQob2JqLCB7YTogNCwgYzogOH0pOyAvLyB7YTogNCwgYjogNSwgYzogOH1cbiAgb2JqOyAvLyB7YTogNCwgYjogNSwgYzogOH1cblxuICB2YXIgb2JqID0ge2E6IDMsIGI6IDV9O1xuICBleHRlbmQoe30sIG9iaiwge2E6IDQsIGM6IDh9KTsgLy8ge2E6IDQsIGI6IDUsIGM6IDh9XG4gIG9iajsgLy8ge2E6IDMsIGI6IDV9XG5cbiAgdmFyIGFyciA9IFsxLCAyLCAzXTtcbiAgdmFyIG9iaiA9IHthOiAzLCBiOiA1fTtcbiAgZXh0ZW5kKG9iaiwge2M6IGFycn0pOyAvLyB7YTogMywgYjogNSwgYzogWzEsIDIsIDNdfVxuICBhcnIucHVzaCg0KTtcbiAgb2JqOyAvLyB7YTogMywgYjogNSwgYzogWzEsIDIsIDMsIDRdfVxuXG4gIHZhciBhcnIgPSBbMSwgMiwgM107XG4gIHZhciBvYmogPSB7YTogMywgYjogNX07XG4gIGV4dGVuZCh0cnVlLCBvYmosIHtjOiBhcnJ9KTsgLy8ge2E6IDMsIGI6IDUsIGM6IFsxLCAyLCAzXX1cbiAgYXJyLnB1c2goNCk7XG4gIG9iajsgLy8ge2E6IDMsIGI6IDUsIGM6IFsxLCAyLCAzXX1cblxuICBleHRlbmQoe2E6IDQsIGI6IDV9KTsgLy8ge2E6IDQsIGI6IDV9XG4gIGV4dGVuZCh7YTogNCwgYjogNX0sIDMpOyB7YTogNCwgYjogNX1cbiAgZXh0ZW5kKHthOiA0LCBiOiA1fSwgdHJ1ZSk7IHthOiA0LCBiOiA1fVxuICBleHRlbmQoJ2hlbGxvJywge2E6IDQsIGI6IDV9KTsgLy8gdGhyb3dzXG4gIGV4dGVuZCgzLCB7YTogNCwgYjogNX0pOyAvLyB0aHJvd3NcbiovXG5cbmZ1bmN0aW9uIGV4dGVuZCgvKiBbZGVlcF0sIG9iajEsIG9iajIsIFtvYmpuXSAqLykge1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgdmFyIGRlZXAgPSBmYWxzZTtcbiAgaWYgKHR5cGVvZiBhcmdzWzBdID09ICdib29sZWFuJykge1xuICAgIGRlZXAgPSBhcmdzLnNoaWZ0KCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IGFyZ3NbMF07XG4gIGlmIChpc1VuZXh0ZW5kYWJsZShyZXN1bHQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdleHRlbmRlZSBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG4gIHZhciBleHRlbmRlcnMgPSBhcmdzLnNsaWNlKDEpO1xuICB2YXIgbGVuID0gZXh0ZW5kZXJzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBleHRlbmRlciA9IGV4dGVuZGVyc1tpXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gZXh0ZW5kZXIpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXh0ZW5kZXIsIGtleSkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gZXh0ZW5kZXJba2V5XTtcbiAgICAgICAgaWYgKGRlZXAgJiYgaXNDbG9uZWFibGUodmFsdWUpKSB7XG4gICAgICAgICAgdmFyIGJhc2UgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IFtdIDoge307XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSBleHRlbmQoXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlc3VsdCwga2V5KSAmJiAhaXNVbmV4dGVuZGFibGUocmVzdWx0W2tleV0pXG4gICAgICAgICAgICAgID8gcmVzdWx0W2tleV1cbiAgICAgICAgICAgICAgOiBiYXNlLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gaXNDbG9uZWFibGUob2JqKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG9iaikgfHwge30udG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5mdW5jdGlvbiBpc1VuZXh0ZW5kYWJsZSh2YWwpIHtcbiAgcmV0dXJuICF2YWwgfHwgKHR5cGVvZiB2YWwgIT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCAhPSAnZnVuY3Rpb24nKTtcbn1cblxuZXhwb3J0IHtvYmplY3RFeHRlbmQgYXMgZGVmYXVsdH07XG4iLCAiaW1wb3J0IGV4dGVuZCBmcm9tIFwianVzdC1leHRlbmRcIjtcbmltcG9ydCBFbWl0dGVyIGZyb20gXCIuL2VtaXR0ZXJcIjtcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3B6b25lIGV4dGVuZHMgRW1pdHRlciB7XG4gIHN0YXRpYyBpbml0Q2xhc3MoKSB7XG4gICAgLy8gRXhwb3NpbmcgdGhlIGVtaXR0ZXIgY2xhc3MsIG1haW5seSBmb3IgdGVzdHNcbiAgICB0aGlzLnByb3RvdHlwZS5FbWl0dGVyID0gRW1pdHRlcjtcblxuICAgIC8qXG4gICAgIFRoaXMgaXMgYSBsaXN0IG9mIGFsbCBhdmFpbGFibGUgZXZlbnRzIHlvdSBjYW4gcmVnaXN0ZXIgb24gYSBkcm9wem9uZSBvYmplY3QuXG5cbiAgICAgWW91IGNhbiByZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIGxpa2UgdGhpczpcblxuICAgICBkcm9wem9uZS5vbihcImRyYWdFbnRlclwiLCBmdW5jdGlvbigpIHsgfSk7XG5cbiAgICAgKi9cbiAgICB0aGlzLnByb3RvdHlwZS5ldmVudHMgPSBbXG4gICAgICBcImRyb3BcIixcbiAgICAgIFwiZHJhZ3N0YXJ0XCIsXG4gICAgICBcImRyYWdlbmRcIixcbiAgICAgIFwiZHJhZ2VudGVyXCIsXG4gICAgICBcImRyYWdvdmVyXCIsXG4gICAgICBcImRyYWdsZWF2ZVwiLFxuICAgICAgXCJhZGRlZGZpbGVcIixcbiAgICAgIFwiYWRkZWRmaWxlc1wiLFxuICAgICAgXCJyZW1vdmVkZmlsZVwiLFxuICAgICAgXCJ0aHVtYm5haWxcIixcbiAgICAgIFwiZXJyb3JcIixcbiAgICAgIFwiZXJyb3JtdWx0aXBsZVwiLFxuICAgICAgXCJwcm9jZXNzaW5nXCIsXG4gICAgICBcInByb2Nlc3NpbmdtdWx0aXBsZVwiLFxuICAgICAgXCJ1cGxvYWRwcm9ncmVzc1wiLFxuICAgICAgXCJ0b3RhbHVwbG9hZHByb2dyZXNzXCIsXG4gICAgICBcInNlbmRpbmdcIixcbiAgICAgIFwic2VuZGluZ211bHRpcGxlXCIsXG4gICAgICBcInN1Y2Nlc3NcIixcbiAgICAgIFwic3VjY2Vzc211bHRpcGxlXCIsXG4gICAgICBcImNhbmNlbGVkXCIsXG4gICAgICBcImNhbmNlbGVkbXVsdGlwbGVcIixcbiAgICAgIFwiY29tcGxldGVcIixcbiAgICAgIFwiY29tcGxldGVtdWx0aXBsZVwiLFxuICAgICAgXCJyZXNldFwiLFxuICAgICAgXCJtYXhmaWxlc2V4Y2VlZGVkXCIsXG4gICAgICBcIm1heGZpbGVzcmVhY2hlZFwiLFxuICAgICAgXCJxdWV1ZWNvbXBsZXRlXCIsXG4gICAgXTtcblxuICAgIHRoaXMucHJvdG90eXBlLl90aHVtYm5haWxRdWV1ZSA9IFtdO1xuICAgIHRoaXMucHJvdG90eXBlLl9wcm9jZXNzaW5nVGh1bWJuYWlsID0gZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgbGV0IGZhbGxiYWNrLCBsZWZ0O1xuICAgIHRoaXMuZWxlbWVudCA9IGVsO1xuXG4gICAgdGhpcy5jbGlja2FibGVFbGVtZW50cyA9IFtdO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5maWxlcyA9IFtdOyAvLyBBbGwgZmlsZXNcblxuICAgIGlmICh0eXBlb2YgdGhpcy5lbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gTm90IGNoZWNraW5nIGlmIGluc3RhbmNlIG9mIEhUTUxFbGVtZW50IG9yIEVsZW1lbnQgc2luY2UgSUU5IGlzIGV4dHJlbWVseSB3ZWlyZC5cbiAgICBpZiAoIXRoaXMuZWxlbWVudCB8fCB0aGlzLmVsZW1lbnQubm9kZVR5cGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkcm9wem9uZSBlbGVtZW50LlwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LmRyb3B6b25lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEcm9wem9uZSBhbHJlYWR5IGF0dGFjaGVkLlwiKTtcbiAgICB9XG5cbiAgICAvLyBOb3cgYWRkIHRoaXMgZHJvcHpvbmUgdG8gdGhlIGluc3RhbmNlcy5cbiAgICBEcm9wem9uZS5pbnN0YW5jZXMucHVzaCh0aGlzKTtcblxuICAgIC8vIFB1dCB0aGUgZHJvcHpvbmUgaW5zaWRlIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAgICB0aGlzLmVsZW1lbnQuZHJvcHpvbmUgPSB0aGlzO1xuXG4gICAgbGV0IGVsZW1lbnRPcHRpb25zID1cbiAgICAgIChsZWZ0ID0gRHJvcHpvbmUub3B0aW9uc0ZvckVsZW1lbnQodGhpcy5lbGVtZW50KSkgIT0gbnVsbCA/IGxlZnQgOiB7fTtcblxuICAgIHRoaXMub3B0aW9ucyA9IGV4dGVuZChcbiAgICAgIHRydWUsXG4gICAgICB7fSxcbiAgICAgIGRlZmF1bHRPcHRpb25zLFxuICAgICAgZWxlbWVudE9wdGlvbnMsXG4gICAgICBvcHRpb25zICE9IG51bGwgPyBvcHRpb25zIDoge31cbiAgICApO1xuXG4gICAgdGhpcy5vcHRpb25zLnByZXZpZXdUZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5wcmV2aWV3VGVtcGxhdGUucmVwbGFjZShcbiAgICAgIC9cXG4qL2csXG4gICAgICBcIlwiXG4gICAgKTtcblxuICAgIC8vIElmIHRoZSBicm93c2VyIGZhaWxlZCwganVzdCBjYWxsIHRoZSBmYWxsYmFjayBhbmQgbGVhdmVcbiAgICBpZiAodGhpcy5vcHRpb25zLmZvcmNlRmFsbGJhY2sgfHwgIURyb3B6b25lLmlzQnJvd3NlclN1cHBvcnRlZCgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gQG9wdGlvbnMudXJsID0gQGVsZW1lbnQuZ2V0QXR0cmlidXRlIFwiYWN0aW9uXCIgdW5sZXNzIEBvcHRpb25zLnVybD9cbiAgICBpZiAodGhpcy5vcHRpb25zLnVybCA9PSBudWxsKSB7XG4gICAgICB0aGlzLm9wdGlvbnMudXJsID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImFjdGlvblwiKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy51cmwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIFVSTCBwcm92aWRlZC5cIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hY2NlcHRlZEZpbGVzICYmIHRoaXMub3B0aW9ucy5hY2NlcHRlZE1pbWVUeXBlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIllvdSBjYW4ndCBwcm92aWRlIGJvdGggJ2FjY2VwdGVkRmlsZXMnIGFuZCAnYWNjZXB0ZWRNaW1lVHlwZXMnLiAnYWNjZXB0ZWRNaW1lVHlwZXMnIGlzIGRlcHJlY2F0ZWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy51cGxvYWRNdWx0aXBsZSAmJiB0aGlzLm9wdGlvbnMuY2h1bmtpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjYW5ub3Qgc2V0IGJvdGg6IHVwbG9hZE11bHRpcGxlIGFuZCBjaHVua2luZy5cIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5iaW5hcnlCb2R5ICYmIHRoaXMub3B0aW9ucy51cGxvYWRNdWx0aXBsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbm5vdCBzZXQgYm90aDogYmluYXJ5Qm9keSBhbmQgdXBsb2FkTXVsdGlwbGUuXCIpO1xuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgaWYgKHRoaXMub3B0aW9ucy5hY2NlcHRlZE1pbWVUeXBlcykge1xuICAgICAgdGhpcy5vcHRpb25zLmFjY2VwdGVkRmlsZXMgPSB0aGlzLm9wdGlvbnMuYWNjZXB0ZWRNaW1lVHlwZXM7XG4gICAgICBkZWxldGUgdGhpcy5vcHRpb25zLmFjY2VwdGVkTWltZVR5cGVzO1xuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW5hbWVGaWxlbmFtZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLm9wdGlvbnMucmVuYW1lRmlsZSA9IChmaWxlKSA9PlxuICAgICAgICB0aGlzLm9wdGlvbnMucmVuYW1lRmlsZW5hbWUuY2FsbCh0aGlzLCBmaWxlLm5hbWUsIGZpbGUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm1ldGhvZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhpcy5vcHRpb25zLm1ldGhvZCA9IHRoaXMub3B0aW9ucy5tZXRob2QudG9VcHBlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoKGZhbGxiYWNrID0gdGhpcy5nZXRFeGlzdGluZ0ZhbGxiYWNrKCkpICYmIGZhbGxiYWNrLnBhcmVudE5vZGUpIHtcbiAgICAgIC8vIFJlbW92ZSB0aGUgZmFsbGJhY2tcbiAgICAgIGZhbGxiYWNrLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZmFsbGJhY2spO1xuICAgIH1cblxuICAgIC8vIERpc3BsYXkgcHJldmlld3MgaW4gdGhlIHByZXZpZXdzQ29udGFpbmVyIGVsZW1lbnQgb3IgdGhlIERyb3B6b25lIGVsZW1lbnQgdW5sZXNzIGV4cGxpY2l0bHkgc2V0IHRvIGZhbHNlXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wcmV2aWV3c0NvbnRhaW5lciAhPT0gZmFsc2UpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJldmlld3NDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5wcmV2aWV3c0NvbnRhaW5lciA9IERyb3B6b25lLmdldEVsZW1lbnQoXG4gICAgICAgICAgdGhpcy5vcHRpb25zLnByZXZpZXdzQ29udGFpbmVyLFxuICAgICAgICAgIFwicHJldmlld3NDb250YWluZXJcIlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmV2aWV3c0NvbnRhaW5lciA9IHRoaXMuZWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNsaWNrYWJsZSkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbGlja2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5jbGlja2FibGVFbGVtZW50cyA9IFt0aGlzLmVsZW1lbnRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGlja2FibGVFbGVtZW50cyA9IERyb3B6b25lLmdldEVsZW1lbnRzKFxuICAgICAgICAgIHRoaXMub3B0aW9ucy5jbGlja2FibGUsXG4gICAgICAgICAgXCJjbGlja2FibGVcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhbGwgZmlsZXMgdGhhdCBoYXZlIGJlZW4gYWNjZXB0ZWRcbiAgZ2V0QWNjZXB0ZWRGaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlcy5maWx0ZXIoKGZpbGUpID0+IGZpbGUuYWNjZXB0ZWQpLm1hcCgoZmlsZSkgPT4gZmlsZSk7XG4gIH1cblxuICAvLyBSZXR1cm5zIGFsbCBmaWxlcyB0aGF0IGhhdmUgYmVlbiByZWplY3RlZFxuICAvLyBOb3Qgc3VyZSB3aGVuIHRoYXQncyBnb2luZyB0byBiZSB1c2VmdWwsIGJ1dCBhZGRlZCBmb3IgY29tcGxldGVuZXNzLlxuICBnZXRSZWplY3RlZEZpbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVzLmZpbHRlcigoZmlsZSkgPT4gIWZpbGUuYWNjZXB0ZWQpLm1hcCgoZmlsZSkgPT4gZmlsZSk7XG4gIH1cblxuICBnZXRGaWxlc1dpdGhTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZXNcbiAgICAgIC5maWx0ZXIoKGZpbGUpID0+IGZpbGUuc3RhdHVzID09PSBzdGF0dXMpXG4gICAgICAubWFwKChmaWxlKSA9PiBmaWxlKTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYWxsIGZpbGVzIHRoYXQgYXJlIGluIHRoZSBxdWV1ZVxuICBnZXRRdWV1ZWRGaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRGaWxlc1dpdGhTdGF0dXMoRHJvcHpvbmUuUVVFVUVEKTtcbiAgfVxuXG4gIGdldFVwbG9hZGluZ0ZpbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEZpbGVzV2l0aFN0YXR1cyhEcm9wem9uZS5VUExPQURJTkcpO1xuICB9XG5cbiAgZ2V0QWRkZWRGaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRGaWxlc1dpdGhTdGF0dXMoRHJvcHpvbmUuQURERUQpO1xuICB9XG5cbiAgLy8gRmlsZXMgdGhhdCBhcmUgZWl0aGVyIHF1ZXVlZCBvciB1cGxvYWRpbmdcbiAgZ2V0QWN0aXZlRmlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZXNcbiAgICAgIC5maWx0ZXIoXG4gICAgICAgIChmaWxlKSA9PlxuICAgICAgICAgIGZpbGUuc3RhdHVzID09PSBEcm9wem9uZS5VUExPQURJTkcgfHwgZmlsZS5zdGF0dXMgPT09IERyb3B6b25lLlFVRVVFRFxuICAgICAgKVxuICAgICAgLm1hcCgoZmlsZSkgPT4gZmlsZSk7XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCB3aGVuIERyb3B6b25lIGlzIGluaXRpYWxpemVkLiBZb3VcbiAgLy8gY2FuIChhbmQgc2hvdWxkKSBzZXR1cCBldmVudCBsaXN0ZW5lcnMgaW5zaWRlIHRoaXMgZnVuY3Rpb24uXG4gIGluaXQoKSB7XG4gICAgLy8gSW4gY2FzZSBpdCBpc24ndCBzZXQgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQudGFnTmFtZSA9PT0gXCJmb3JtXCIpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJlbmN0eXBlXCIsIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcHpvbmVcIikgJiZcbiAgICAgICF0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5kei1tZXNzYWdlXCIpXG4gICAgKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgIERyb3B6b25lLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJkei1kZWZhdWx0IGR6LW1lc3NhZ2VcIj48YnV0dG9uIGNsYXNzPVwiZHotYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPiR7dGhpcy5vcHRpb25zLmRpY3REZWZhdWx0TWVzc2FnZX08L2J1dHRvbj48L2Rpdj5gXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2xpY2thYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICBsZXQgc2V0dXBIaWRkZW5GaWxlSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmhpZGRlbkZpbGVJbnB1dCkge1xuICAgICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5oaWRkZW5GaWxlSW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZmlsZVwiKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXhGaWxlcyA9PT0gbnVsbCB8fCB0aGlzLm9wdGlvbnMubWF4RmlsZXMgPiAxKSB7XG4gICAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIiwgXCJtdWx0aXBsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5jbGFzc05hbWUgPSBcImR6LWhpZGRlbi1pbnB1dFwiO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYWNjZXB0ZWRGaWxlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwiYWNjZXB0XCIsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYWNjZXB0ZWRGaWxlc1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jYXB0dXJlICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc2V0QXR0cmlidXRlKFwiY2FwdHVyZVwiLCB0aGlzLm9wdGlvbnMuY2FwdHVyZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYWtpbmcgc3VyZSB0aGF0IG5vIG9uZSBjYW4gXCJ0YWJcIiBpbnRvIHRoaXMgZmllbGQuXG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG5cbiAgICAgICAgLy8gTm90IHNldHRpbmcgYGRpc3BsYXk9XCJub25lXCJgIGJlY2F1c2Ugc29tZSBicm93c2VycyBkb24ndCBhY2NlcHQgY2xpY2tzXG4gICAgICAgIC8vIG9uIGVsZW1lbnRzIHRoYXQgYXJlbid0IGRpc3BsYXllZC5cbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc3R5bGUubGVmdCA9IFwiMFwiO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICAgICAgRHJvcHpvbmUuZ2V0RWxlbWVudChcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuaGlkZGVuSW5wdXRDb250YWluZXIsXG4gICAgICAgICAgXCJoaWRkZW5JbnB1dENvbnRhaW5lclwiXG4gICAgICAgICkuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5GaWxlSW5wdXQpO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICBsZXQgeyBmaWxlcyB9ID0gdGhpcy5oaWRkZW5GaWxlSW5wdXQ7XG4gICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiBmaWxlcykge1xuICAgICAgICAgICAgICB0aGlzLmFkZEZpbGUoZmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZW1pdChcImFkZGVkZmlsZXNcIiwgZmlsZXMpO1xuICAgICAgICAgIHNldHVwSGlkZGVuRmlsZUlucHV0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHNldHVwSGlkZGVuRmlsZUlucHV0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5VUkwgPSB3aW5kb3cuVVJMICE9PSBudWxsID8gd2luZG93LlVSTCA6IHdpbmRvdy53ZWJraXRVUkw7XG5cbiAgICAvLyBTZXR1cCBhbGwgZXZlbnQgbGlzdGVuZXJzIG9uIHRoZSBEcm9wem9uZSBvYmplY3QgaXRzZWxmLlxuICAgIC8vIFRoZXkncmUgbm90IGluIEBzZXR1cEV2ZW50TGlzdGVuZXJzKCkgYmVjYXVzZSB0aGV5IHNob3VsZG4ndCBiZSByZW1vdmVkXG4gICAgLy8gYWdhaW4gd2hlbiB0aGUgZHJvcHpvbmUgZ2V0cyBkaXNhYmxlZC5cbiAgICBmb3IgKGxldCBldmVudE5hbWUgb2YgdGhpcy5ldmVudHMpIHtcbiAgICAgIHRoaXMub24oZXZlbnROYW1lLCB0aGlzLm9wdGlvbnNbZXZlbnROYW1lXSk7XG4gICAgfVxuXG4gICAgdGhpcy5vbihcInVwbG9hZHByb2dyZXNzXCIsICgpID0+IHRoaXMudXBkYXRlVG90YWxVcGxvYWRQcm9ncmVzcygpKTtcblxuICAgIHRoaXMub24oXCJyZW1vdmVkZmlsZVwiLCAoKSA9PiB0aGlzLnVwZGF0ZVRvdGFsVXBsb2FkUHJvZ3Jlc3MoKSk7XG5cbiAgICB0aGlzLm9uKFwiY2FuY2VsZWRcIiwgKGZpbGUpID0+IHRoaXMuZW1pdChcImNvbXBsZXRlXCIsIGZpbGUpKTtcblxuICAgIC8vIEVtaXQgYSBgcXVldWVjb21wbGV0ZWAgZXZlbnQgaWYgYWxsIGZpbGVzIGZpbmlzaGVkIHVwbG9hZGluZy5cbiAgICB0aGlzLm9uKFwiY29tcGxldGVcIiwgKGZpbGUpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5nZXRBZGRlZEZpbGVzKCkubGVuZ3RoID09PSAwICYmXG4gICAgICAgIHRoaXMuZ2V0VXBsb2FkaW5nRmlsZXMoKS5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgdGhpcy5nZXRRdWV1ZWRGaWxlcygpLmxlbmd0aCA9PT0gMFxuICAgICAgKSB7XG4gICAgICAgIC8vIFRoaXMgbmVlZHMgdG8gYmUgZGVmZXJyZWQgc28gdGhhdCBgcXVldWVjb21wbGV0ZWAgcmVhbGx5IHRyaWdnZXJzIGFmdGVyIGBjb21wbGV0ZWBcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbWl0KFwicXVldWVjb21wbGV0ZVwiKSwgMCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250YWluc0ZpbGVzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLmRhdGFUcmFuc2Zlci50eXBlcykge1xuICAgICAgICAvLyBCZWNhdXNlIGUuZGF0YVRyYW5zZmVyLnR5cGVzIGlzIGFuIE9iamVjdCBpblxuICAgICAgICAvLyBJRSwgd2UgbmVlZCB0byBpdGVyYXRlIGxpa2UgdGhpcyBpbnN0ZWFkIG9mXG4gICAgICAgIC8vIHVzaW5nIGUuZGF0YVRyYW5zZmVyLnR5cGVzLnNvbWUoKVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUuZGF0YVRyYW5zZmVyLnR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLnR5cGVzW2ldID09PSBcIkZpbGVzXCIpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGxldCBub1Byb3BhZ2F0aW9uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBmaWxlcywgd2UgZG9uJ3Qgd2FudCB0byBzdG9wXG4gICAgICAvLyBwcm9wYWdhdGlvbiBzbyB3ZSBkb24ndCBpbnRlcmZlcmUgd2l0aCBvdGhlclxuICAgICAgLy8gZHJhZyBhbmQgZHJvcCBiZWhhdmlvdXIuXG4gICAgICBpZiAoIWNvbnRhaW5zRmlsZXMoZSkpIHJldHVybjtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChlLnJldHVyblZhbHVlID0gZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgdGhlIGxpc3RlbmVyc1xuICAgIHRoaXMubGlzdGVuZXJzID0gW1xuICAgICAge1xuICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGRyYWdzdGFydDogKGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVtaXQoXCJkcmFnc3RhcnRcIiwgZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkcmFnZW50ZXI6IChlKSA9PiB7XG4gICAgICAgICAgICBub1Byb3BhZ2F0aW9uKGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdChcImRyYWdlbnRlclwiLCBlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRyYWdvdmVyOiAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gTWFrZXMgaXQgcG9zc2libGUgdG8gZHJhZyBmaWxlcyBmcm9tIGNocm9tZSdzIGRvd25sb2FkIGJhclxuICAgICAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTUyNjQzMC9kcmFnLWFuZC1kcm9wLWZpbGUtdXBsb2Fkcy1mcm9tLWNocm9tZS1kb3dubG9hZHMtYmFyXG4gICAgICAgICAgICAvLyBUcnkgaXMgcmVxdWlyZWQgdG8gcHJldmVudCBidWcgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTEgKFNDUklQVDY1NTM1IGV4Y2VwdGlvbilcbiAgICAgICAgICAgIGxldCBlZmN0O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZWZjdCA9IGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQ7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPVxuICAgICAgICAgICAgICBcIm1vdmVcIiA9PT0gZWZjdCB8fCBcImxpbmtNb3ZlXCIgPT09IGVmY3QgPyBcIm1vdmVcIiA6IFwiY29weVwiO1xuXG4gICAgICAgICAgICBub1Byb3BhZ2F0aW9uKGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdChcImRyYWdvdmVyXCIsIGUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZHJhZ2xlYXZlOiAoZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdChcImRyYWdsZWF2ZVwiLCBlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRyb3A6IChlKSA9PiB7XG4gICAgICAgICAgICBub1Byb3BhZ2F0aW9uKGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJvcChlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRyYWdlbmQ6IChlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbWl0KFwiZHJhZ2VuZFwiLCBlKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFRoaXMgaXMgZGlzYWJsZWQgcmlnaHQgbm93LCBiZWNhdXNlIHRoZSBicm93c2VycyBkb24ndCBpbXBsZW1lbnQgaXQgcHJvcGVybHkuXG4gICAgICAgIC8vIFwicGFzdGVcIjogKGUpID0+XG4gICAgICAgIC8vICAgbm9Qcm9wYWdhdGlvbiBlXG4gICAgICAgIC8vICAgQHBhc3RlIGVcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHRoaXMuY2xpY2thYmxlRWxlbWVudHMuZm9yRWFjaCgoY2xpY2thYmxlRWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXJzLnB1c2goe1xuICAgICAgICBlbGVtZW50OiBjbGlja2FibGVFbGVtZW50LFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogKGV2dCkgPT4ge1xuICAgICAgICAgICAgLy8gT25seSB0aGUgYWN0dWFsIGRyb3B6b25lIG9yIHRoZSBtZXNzYWdlIGVsZW1lbnQgc2hvdWxkIHRyaWdnZXIgZmlsZSBzZWxlY3Rpb25cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY2xpY2thYmxlRWxlbWVudCAhPT0gdGhpcy5lbGVtZW50IHx8XG4gICAgICAgICAgICAgIGV2dC50YXJnZXQgPT09IHRoaXMuZWxlbWVudCB8fFxuICAgICAgICAgICAgICBEcm9wem9uZS5lbGVtZW50SW5zaWRlKFxuICAgICAgICAgICAgICAgIGV2dC50YXJnZXQsXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHotbWVzc2FnZVwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuY2xpY2soKTsgLy8gRm9yd2FyZCB0aGUgY2xpY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZW5hYmxlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmluaXQuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIC8vIE5vdCBmdWxseSB0ZXN0ZWQgeWV0XG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgdGhpcy5yZW1vdmVBbGxGaWxlcyh0cnVlKTtcbiAgICBpZiAoXG4gICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dCAhPSBudWxsID8gdGhpcy5oaWRkZW5GaWxlSW5wdXQucGFyZW50Tm9kZSA6IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmhpZGRlbkZpbGVJbnB1dCk7XG4gICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dCA9IG51bGw7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnQuZHJvcHpvbmU7XG4gICAgcmV0dXJuIERyb3B6b25lLmluc3RhbmNlcy5zcGxpY2UoRHJvcHpvbmUuaW5zdGFuY2VzLmluZGV4T2YodGhpcyksIDEpO1xuICB9XG5cbiAgdXBkYXRlVG90YWxVcGxvYWRQcm9ncmVzcygpIHtcbiAgICBsZXQgdG90YWxVcGxvYWRQcm9ncmVzcztcbiAgICBsZXQgdG90YWxCeXRlc1NlbnQgPSAwO1xuICAgIGxldCB0b3RhbEJ5dGVzID0gMDtcblxuICAgIGxldCBhY3RpdmVGaWxlcyA9IHRoaXMuZ2V0QWN0aXZlRmlsZXMoKTtcblxuICAgIGlmIChhY3RpdmVGaWxlcy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGZpbGUgb2YgdGhpcy5nZXRBY3RpdmVGaWxlcygpKSB7XG4gICAgICAgIHRvdGFsQnl0ZXNTZW50ICs9IGZpbGUudXBsb2FkLmJ5dGVzU2VudDtcbiAgICAgICAgdG90YWxCeXRlcyArPSBmaWxlLnVwbG9hZC50b3RhbDtcbiAgICAgIH1cbiAgICAgIHRvdGFsVXBsb2FkUHJvZ3Jlc3MgPSAoMTAwICogdG90YWxCeXRlc1NlbnQpIC8gdG90YWxCeXRlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdG90YWxVcGxvYWRQcm9ncmVzcyA9IDEwMDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbWl0KFxuICAgICAgXCJ0b3RhbHVwbG9hZHByb2dyZXNzXCIsXG4gICAgICB0b3RhbFVwbG9hZFByb2dyZXNzLFxuICAgICAgdG90YWxCeXRlcyxcbiAgICAgIHRvdGFsQnl0ZXNTZW50XG4gICAgKTtcbiAgfVxuXG4gIC8vIEBvcHRpb25zLnBhcmFtTmFtZSBjYW4gYmUgYSBmdW5jdGlvbiB0YWtpbmcgb25lIHBhcmFtZXRlciByYXRoZXIgdGhhbiBhIHN0cmluZy5cbiAgLy8gQSBwYXJhbWV0ZXIgbmFtZSBmb3IgYSBmaWxlIGlzIG9idGFpbmVkIHNpbXBseSBieSBjYWxsaW5nIHRoaXMgd2l0aCBhbiBpbmRleCBudW1iZXIuXG4gIF9nZXRQYXJhbU5hbWUobikge1xuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBhcmFtTmFtZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnBhcmFtTmFtZShuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wYXJhbU5hbWV9JHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnVwbG9hZE11bHRpcGxlID8gYFske259XWAgOiBcIlwiXG4gICAgICB9YDtcbiAgICB9XG4gIH1cblxuICAvLyBJZiBAb3B0aW9ucy5yZW5hbWVGaWxlIGlzIGEgZnVuY3Rpb24sXG4gIC8vIHRoZSBmdW5jdGlvbiB3aWxsIGJlIHVzZWQgdG8gcmVuYW1lIHRoZSBmaWxlLm5hbWUgYmVmb3JlIGFwcGVuZGluZyBpdCB0byB0aGUgZm9ybURhdGFcbiAgX3JlbmFtZUZpbGUoZmlsZSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnJlbmFtZUZpbGUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIGZpbGUubmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yZW5hbWVGaWxlKGZpbGUpO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIGZvcm0gdGhhdCBjYW4gYmUgdXNlZCBhcyBmYWxsYmFjayBpZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IERyYWduRHJvcFxuICAvL1xuICAvLyBJZiB0aGUgZHJvcHpvbmUgaXMgYWxyZWFkeSBhIGZvcm0sIG9ubHkgdGhlIGlucHV0IGZpZWxkIGFuZCBidXR0b24gYXJlIHJldHVybmVkLiBPdGhlcndpc2UgYSBjb21wbGV0ZSBmb3JtIGVsZW1lbnQgaXMgcHJvdmlkZWQuXG4gIC8vIFRoaXMgY29kZSBoYXMgdG8gcGFzcyBpbiBJRTcgOihcbiAgZ2V0RmFsbGJhY2tGb3JtKCkge1xuICAgIGxldCBleGlzdGluZ0ZhbGxiYWNrLCBmb3JtO1xuICAgIGlmICgoZXhpc3RpbmdGYWxsYmFjayA9IHRoaXMuZ2V0RXhpc3RpbmdGYWxsYmFjaygpKSkge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nRmFsbGJhY2s7XG4gICAgfVxuXG4gICAgbGV0IGZpZWxkc1N0cmluZyA9ICc8ZGl2IGNsYXNzPVwiZHotZmFsbGJhY2tcIj4nO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGljdEZhbGxiYWNrVGV4dCkge1xuICAgICAgZmllbGRzU3RyaW5nICs9IGA8cD4ke3RoaXMub3B0aW9ucy5kaWN0RmFsbGJhY2tUZXh0fTwvcD5gO1xuICAgIH1cbiAgICBmaWVsZHNTdHJpbmcgKz0gYDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCIke3RoaXMuX2dldFBhcmFtTmFtZSgwKX1cIiAke1xuICAgICAgdGhpcy5vcHRpb25zLnVwbG9hZE11bHRpcGxlID8gJ211bHRpcGxlPVwibXVsdGlwbGVcIicgOiB1bmRlZmluZWRcbiAgICB9IC8+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlVwbG9hZCFcIj48L2Rpdj5gO1xuXG4gICAgbGV0IGZpZWxkcyA9IERyb3B6b25lLmNyZWF0ZUVsZW1lbnQoZmllbGRzU3RyaW5nKTtcbiAgICBpZiAodGhpcy5lbGVtZW50LnRhZ05hbWUgIT09IFwiRk9STVwiKSB7XG4gICAgICBmb3JtID0gRHJvcHpvbmUuY3JlYXRlRWxlbWVudChcbiAgICAgICAgYDxmb3JtIGFjdGlvbj1cIiR7dGhpcy5vcHRpb25zLnVybH1cIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG1ldGhvZD1cIiR7dGhpcy5vcHRpb25zLm1ldGhvZH1cIj48L2Zvcm0+YFxuICAgICAgKTtcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGVuY3R5cGUgYW5kIG1ldGhvZCBhdHRyaWJ1dGVzIGFyZSBzZXQgcHJvcGVybHlcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJlbmN0eXBlXCIsIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgdGhpcy5vcHRpb25zLm1ldGhvZCk7XG4gICAgfVxuICAgIHJldHVybiBmb3JtICE9IG51bGwgPyBmb3JtIDogZmllbGRzO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgZmFsbGJhY2sgZWxlbWVudHMgaWYgdGhleSBleGlzdCBhbHJlYWR5XG4gIC8vXG4gIC8vIFRoaXMgY29kZSBoYXMgdG8gcGFzcyBpbiBJRTcgOihcbiAgZ2V0RXhpc3RpbmdGYWxsYmFjaygpIHtcbiAgICBsZXQgZ2V0RmFsbGJhY2sgPSBmdW5jdGlvbiAoZWxlbWVudHMpIHtcbiAgICAgIGZvciAobGV0IGVsIG9mIGVsZW1lbnRzKSB7XG4gICAgICAgIGlmICgvKF58IClmYWxsYmFjaygkfCApLy50ZXN0KGVsLmNsYXNzTmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yIChsZXQgdGFnTmFtZSBvZiBbXCJkaXZcIiwgXCJmb3JtXCJdKSB7XG4gICAgICB2YXIgZmFsbGJhY2s7XG4gICAgICBpZiAoXG4gICAgICAgIChmYWxsYmFjayA9IGdldEZhbGxiYWNrKHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbGxiYWNrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFjdGl2YXRlcyBhbGwgbGlzdGVuZXJzIHN0b3JlZCBpbiBAbGlzdGVuZXJzXG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXJzLm1hcCgoZWxlbWVudExpc3RlbmVycykgPT5cbiAgICAgICgoKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgZXZlbnQgaW4gZWxlbWVudExpc3RlbmVycy5ldmVudHMpIHtcbiAgICAgICAgICBsZXQgbGlzdGVuZXIgPSBlbGVtZW50TGlzdGVuZXJzLmV2ZW50c1tldmVudF07XG4gICAgICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgICAgICBlbGVtZW50TGlzdGVuZXJzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pKClcbiAgICApO1xuICB9XG5cbiAgLy8gRGVhY3RpdmF0ZXMgYWxsIGxpc3RlbmVycyBzdG9yZWQgaW4gQGxpc3RlbmVyc1xuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnMubWFwKChlbGVtZW50TGlzdGVuZXJzKSA9PlxuICAgICAgKCgpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBldmVudCBpbiBlbGVtZW50TGlzdGVuZXJzLmV2ZW50cykge1xuICAgICAgICAgIGxldCBsaXN0ZW5lciA9IGVsZW1lbnRMaXN0ZW5lcnMuZXZlbnRzW2V2ZW50XTtcbiAgICAgICAgICByZXN1bHQucHVzaChcbiAgICAgICAgICAgIGVsZW1lbnRMaXN0ZW5lcnMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSkoKVxuICAgICk7XG4gIH1cblxuICAvLyBSZW1vdmVzIGFsbCBldmVudCBsaXN0ZW5lcnMgYW5kIGNhbmNlbHMgYWxsIGZpbGVzIGluIHRoZSBxdWV1ZSBvciBiZWluZyBwcm9jZXNzZWQuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5jbGlja2FibGVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHotY2xpY2thYmxlXCIpXG4gICAgKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcy5maWxlcy5tYXAoKGZpbGUpID0+IHRoaXMuY2FuY2VsVXBsb2FkKGZpbGUpKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBkZWxldGUgdGhpcy5kaXNhYmxlZDtcbiAgICB0aGlzLmNsaWNrYWJsZUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkei1jbGlja2FibGVcIilcbiAgICApO1xuICAgIHJldHVybiB0aGlzLnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBuaWNlbHkgZm9ybWF0dGVkIGZpbGVzaXplXG4gIGZpbGVzaXplKHNpemUpIHtcbiAgICBsZXQgc2VsZWN0ZWRTaXplID0gMDtcbiAgICBsZXQgc2VsZWN0ZWRVbml0ID0gXCJiXCI7XG5cbiAgICBpZiAoc2l6ZSA+IDApIHtcbiAgICAgIGxldCB1bml0cyA9IFtcInRiXCIsIFwiZ2JcIiwgXCJtYlwiLCBcImtiXCIsIFwiYlwiXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bml0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdW5pdCA9IHVuaXRzW2ldO1xuICAgICAgICBsZXQgY3V0b2ZmID0gTWF0aC5wb3codGhpcy5vcHRpb25zLmZpbGVzaXplQmFzZSwgNCAtIGkpIC8gMTA7XG5cbiAgICAgICAgaWYgKHNpemUgPj0gY3V0b2ZmKSB7XG4gICAgICAgICAgc2VsZWN0ZWRTaXplID0gc2l6ZSAvIE1hdGgucG93KHRoaXMub3B0aW9ucy5maWxlc2l6ZUJhc2UsIDQgLSBpKTtcbiAgICAgICAgICBzZWxlY3RlZFVuaXQgPSB1bml0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdGVkU2l6ZSA9IE1hdGgucm91bmQoMTAgKiBzZWxlY3RlZFNpemUpIC8gMTA7IC8vIEN1dHRpbmcgb2YgZGlnaXRzXG4gICAgfVxuXG4gICAgcmV0dXJuIGA8c3Ryb25nPiR7c2VsZWN0ZWRTaXplfTwvc3Ryb25nPiAke3RoaXMub3B0aW9ucy5kaWN0RmlsZVNpemVVbml0c1tzZWxlY3RlZFVuaXRdfWA7XG4gIH1cblxuICAvLyBBZGRzIG9yIHJlbW92ZXMgdGhlIGBkei1tYXgtZmlsZXMtcmVhY2hlZGAgY2xhc3MgZnJvbSB0aGUgZm9ybS5cbiAgX3VwZGF0ZU1heEZpbGVzUmVhY2hlZENsYXNzKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy5tYXhGaWxlcyAhPSBudWxsICYmXG4gICAgICB0aGlzLmdldEFjY2VwdGVkRmlsZXMoKS5sZW5ndGggPj0gdGhpcy5vcHRpb25zLm1heEZpbGVzXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5nZXRBY2NlcHRlZEZpbGVzKCkubGVuZ3RoID09PSB0aGlzLm9wdGlvbnMubWF4RmlsZXMpIHtcbiAgICAgICAgdGhpcy5lbWl0KFwibWF4ZmlsZXNyZWFjaGVkXCIsIHRoaXMuZmlsZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHotbWF4LWZpbGVzLXJlYWNoZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImR6LW1heC1maWxlcy1yZWFjaGVkXCIpO1xuICAgIH1cbiAgfVxuXG4gIGRyb3AoZSkge1xuICAgIGlmICghZS5kYXRhVHJhbnNmZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbWl0KFwiZHJvcFwiLCBlKTtcblxuICAgIC8vIENvbnZlcnQgdGhlIEZpbGVMaXN0IHRvIGFuIEFycmF5XG4gICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgZm9yIElFMTFcbiAgICBsZXQgZmlsZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWxlc1tpXSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzW2ldO1xuICAgIH1cblxuICAgIC8vIEV2ZW4gaWYgaXQncyBhIGZvbGRlciwgZmlsZXMubGVuZ3RoIHdpbGwgY29udGFpbiB0aGUgZm9sZGVycy5cbiAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XG4gICAgICBsZXQgeyBpdGVtcyB9ID0gZS5kYXRhVHJhbnNmZXI7XG4gICAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoICYmIGl0ZW1zWzBdLndlYmtpdEdldEFzRW50cnkgIT0gbnVsbCkge1xuICAgICAgICAvLyBUaGUgYnJvd3NlciBzdXBwb3J0cyBkcm9wcGluZyBvZiBmb2xkZXJzLCBzbyBoYW5kbGUgaXRlbXMgaW5zdGVhZCBvZiBmaWxlc1xuICAgICAgICB0aGlzLl9hZGRGaWxlc0Zyb21JdGVtcyhpdGVtcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbGVzKGZpbGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoXCJhZGRlZGZpbGVzXCIsIGZpbGVzKTtcbiAgfVxuXG4gIHBhc3RlKGUpIHtcbiAgICBpZiAoXG4gICAgICBfX2d1YXJkX18oZSAhPSBudWxsID8gZS5jbGlwYm9hcmREYXRhIDogdW5kZWZpbmVkLCAoeCkgPT4geC5pdGVtcykgPT0gbnVsbFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZW1pdChcInBhc3RlXCIsIGUpO1xuICAgIGxldCB7IGl0ZW1zIH0gPSBlLmNsaXBib2FyZERhdGE7XG5cbiAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWRkRmlsZXNGcm9tSXRlbXMoaXRlbXMpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZpbGVzKGZpbGVzKSB7XG4gICAgZm9yIChsZXQgZmlsZSBvZiBmaWxlcykge1xuICAgICAgdGhpcy5hZGRGaWxlKGZpbGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdoZW4gYSBmb2xkZXIgaXMgZHJvcHBlZCAob3IgZmlsZXMgYXJlIHBhc3RlZCksIGl0ZW1zIG11c3QgYmUgaGFuZGxlZFxuICAvLyBpbnN0ZWFkIG9mIGZpbGVzLlxuICBfYWRkRmlsZXNGcm9tSXRlbXMoaXRlbXMpIHtcbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXRlbS53ZWJraXRHZXRBc0VudHJ5ICE9IG51bGwgJiZcbiAgICAgICAgICAoZW50cnkgPSBpdGVtLndlYmtpdEdldEFzRW50cnkoKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKGVudHJ5LmlzRmlsZSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5hZGRGaWxlKGl0ZW0uZ2V0QXNGaWxlKCkpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgYWxsIGZpbGVzIGZyb20gdGhhdCBkaXJlY3RvcnkgdG8gZmlsZXNcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuX2FkZEZpbGVzRnJvbURpcmVjdG9yeShlbnRyeSwgZW50cnkubmFtZSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLmdldEFzRmlsZSAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKGl0ZW0ua2luZCA9PSBudWxsIHx8IGl0ZW0ua2luZCA9PT0gXCJmaWxlXCIpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuYWRkRmlsZShpdGVtLmdldEFzRmlsZSgpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSkoKTtcbiAgfVxuXG4gIC8vIEdvZXMgdGhyb3VnaCB0aGUgZGlyZWN0b3J5LCBhbmQgYWRkcyBlYWNoIGZpbGUgaXQgZmluZHMgcmVjdXJzaXZlbHlcbiAgX2FkZEZpbGVzRnJvbURpcmVjdG9yeShkaXJlY3RvcnksIHBhdGgpIHtcbiAgICBsZXQgZGlyUmVhZGVyID0gZGlyZWN0b3J5LmNyZWF0ZVJlYWRlcigpO1xuXG4gICAgbGV0IGVycm9ySGFuZGxlciA9IChlcnJvcikgPT5cbiAgICAgIF9fZ3VhcmRNZXRob2RfXyhjb25zb2xlLCBcImxvZ1wiLCAobykgPT4gby5sb2coZXJyb3IpKTtcblxuICAgIHZhciByZWFkRW50cmllcyA9ICgpID0+IHtcbiAgICAgIHJldHVybiBkaXJSZWFkZXIucmVhZEVudHJpZXMoKGVudHJpZXMpID0+IHtcbiAgICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAobGV0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ZpbGUpIHtcbiAgICAgICAgICAgICAgZW50cnkuZmlsZSgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pZ25vcmVIaWRkZW5GaWxlcyAmJlxuICAgICAgICAgICAgICAgICAgZmlsZS5uYW1lLnN1YnN0cmluZygwLCAxKSA9PT0gXCIuXCJcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmlsZS5mdWxsUGF0aCA9IGAke3BhdGh9LyR7ZmlsZS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkRmlsZShmaWxlKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICAgIHRoaXMuX2FkZEZpbGVzRnJvbURpcmVjdG9yeShlbnRyeSwgYCR7cGF0aH0vJHtlbnRyeS5uYW1lfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNhbGwgcmVhZEVudHJpZXMoKSBhZ2Fpbiwgc2luY2UgYnJvd3NlciBvbmx5IGhhbmRsZVxuICAgICAgICAgIC8vIHRoZSBmaXJzdCAxMDAgZW50cmllcy5cbiAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9EaXJlY3RvcnlSZWFkZXIjcmVhZEVudHJpZXNcbiAgICAgICAgICByZWFkRW50cmllcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSwgZXJyb3JIYW5kbGVyKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJlYWRFbnRyaWVzKCk7XG4gIH1cblxuICAvLyBJZiBgZG9uZSgpYCBpcyBjYWxsZWQgd2l0aG91dCBhcmd1bWVudCB0aGUgZmlsZSBpcyBhY2NlcHRlZFxuICAvLyBJZiB5b3UgY2FsbCBpdCB3aXRoIGFuIGVycm9yIG1lc3NhZ2UsIHRoZSBmaWxlIGlzIHJlamVjdGVkXG4gIC8vIChUaGlzIGFsbG93cyBmb3IgYXN5bmNocm9ub3VzIHZhbGlkYXRpb24pXG4gIC8vXG4gIC8vIFRoaXMgZnVuY3Rpb24gY2hlY2tzIHRoZSBmaWxlc2l6ZSwgYW5kIGlmIHRoZSBmaWxlLnR5cGUgcGFzc2VzIHRoZVxuICAvLyBgYWNjZXB0ZWRGaWxlc2AgY2hlY2suXG4gIGFjY2VwdChmaWxlLCBkb25lKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRpb25zLm1heEZpbGVzaXplICYmXG4gICAgICBmaWxlLnNpemUgPiB0aGlzLm9wdGlvbnMubWF4RmlsZXNpemUgKiAxMDI0ICogMTAyNFxuICAgICkge1xuICAgICAgZG9uZShcbiAgICAgICAgdGhpcy5vcHRpb25zLmRpY3RGaWxlVG9vQmlnXG4gICAgICAgICAgLnJlcGxhY2UoXCJ7e2ZpbGVzaXplfX1cIiwgTWF0aC5yb3VuZChmaWxlLnNpemUgLyAxMDI0IC8gMTAuMjQpIC8gMTAwKVxuICAgICAgICAgIC5yZXBsYWNlKFwie3ttYXhGaWxlc2l6ZX19XCIsIHRoaXMub3B0aW9ucy5tYXhGaWxlc2l6ZSlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghRHJvcHpvbmUuaXNWYWxpZEZpbGUoZmlsZSwgdGhpcy5vcHRpb25zLmFjY2VwdGVkRmlsZXMpKSB7XG4gICAgICBkb25lKHRoaXMub3B0aW9ucy5kaWN0SW52YWxpZEZpbGVUeXBlKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5vcHRpb25zLm1heEZpbGVzICE9IG51bGwgJiZcbiAgICAgIHRoaXMuZ2V0QWNjZXB0ZWRGaWxlcygpLmxlbmd0aCA+PSB0aGlzLm9wdGlvbnMubWF4RmlsZXNcbiAgICApIHtcbiAgICAgIGRvbmUoXG4gICAgICAgIHRoaXMub3B0aW9ucy5kaWN0TWF4RmlsZXNFeGNlZWRlZC5yZXBsYWNlKFxuICAgICAgICAgIFwie3ttYXhGaWxlc319XCIsXG4gICAgICAgICAgdGhpcy5vcHRpb25zLm1heEZpbGVzXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICB0aGlzLmVtaXQoXCJtYXhmaWxlc2V4Y2VlZGVkXCIsIGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbnMuYWNjZXB0LmNhbGwodGhpcywgZmlsZSwgZG9uZSk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmlsZShmaWxlKSB7XG4gICAgZmlsZS51cGxvYWQgPSB7XG4gICAgICB1dWlkOiBEcm9wem9uZS51dWlkdjQoKSxcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgLy8gU2V0dGluZyB0aGUgdG90YWwgdXBsb2FkIHNpemUgdG8gZmlsZS5zaXplIGZvciB0aGUgYmVnaW5uaW5nXG4gICAgICAvLyBJdCdzIGFjdHVhbCBkaWZmZXJlbnQgdGhhbiB0aGUgc2l6ZSB0byBiZSB0cmFuc21pdHRlZC5cbiAgICAgIHRvdGFsOiBmaWxlLnNpemUsXG4gICAgICBieXRlc1NlbnQ6IDAsXG4gICAgICBmaWxlbmFtZTogdGhpcy5fcmVuYW1lRmlsZShmaWxlKSxcbiAgICAgIC8vIE5vdCBzZXR0aW5nIGNodW5raW5nIGluZm9ybWF0aW9uIGhlcmUsIGJlY2F1c2UgdGhlIGFjdXRhbCBkYXRhIOKAlCBhbmRcbiAgICAgIC8vIHRodXMgdGhlIGNodW5rcyDigJQgbWlnaHQgY2hhbmdlIGlmIGBvcHRpb25zLnRyYW5zZm9ybUZpbGVgIGlzIHNldFxuICAgICAgLy8gYW5kIGRvZXMgc29tZXRoaW5nIHRvIHRoZSBkYXRhLlxuICAgIH07XG4gICAgdGhpcy5maWxlcy5wdXNoKGZpbGUpO1xuXG4gICAgZmlsZS5zdGF0dXMgPSBEcm9wem9uZS5BRERFRDtcblxuICAgIHRoaXMuZW1pdChcImFkZGVkZmlsZVwiLCBmaWxlKTtcblxuICAgIHRoaXMuX2VucXVldWVUaHVtYm5haWwoZmlsZSk7XG5cbiAgICB0aGlzLmFjY2VwdChmaWxlLCAoZXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBmaWxlLmFjY2VwdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2Vycm9yUHJvY2Vzc2luZyhbZmlsZV0sIGVycm9yKTsgLy8gV2lsbCBzZXQgdGhlIGZpbGUuc3RhdHVzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWxlLmFjY2VwdGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvUXVldWUpIHtcbiAgICAgICAgICB0aGlzLmVucXVldWVGaWxlKGZpbGUpO1xuICAgICAgICB9IC8vIFdpbGwgc2V0IC5hY2NlcHRlZCA9IHRydWVcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VwZGF0ZU1heEZpbGVzUmVhY2hlZENsYXNzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBXcmFwcGVyIGZvciBlbnF1ZXVlRmlsZVxuICBlbnF1ZXVlRmlsZXMoZmlsZXMpIHtcbiAgICBmb3IgKGxldCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICB0aGlzLmVucXVldWVGaWxlKGZpbGUpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGVucXVldWVGaWxlKGZpbGUpIHtcbiAgICBpZiAoZmlsZS5zdGF0dXMgPT09IERyb3B6b25lLkFEREVEICYmIGZpbGUuYWNjZXB0ZWQgPT09IHRydWUpIHtcbiAgICAgIGZpbGUuc3RhdHVzID0gRHJvcHpvbmUuUVVFVUVEO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvUHJvY2Vzc1F1ZXVlKSB7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvY2Vzc1F1ZXVlKCksIDApOyAvLyBEZWZlcnJpbmcgdGhlIGNhbGxcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIlRoaXMgZmlsZSBjYW4ndCBiZSBxdWV1ZWQgYmVjYXVzZSBpdCBoYXMgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZCBvciB3YXMgcmVqZWN0ZWQuXCJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgX2VucXVldWVUaHVtYm5haWwoZmlsZSkge1xuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy5jcmVhdGVJbWFnZVRodW1ibmFpbHMgJiZcbiAgICAgIGZpbGUudHlwZS5tYXRjaCgvaW1hZ2UuKi8pICYmXG4gICAgICBmaWxlLnNpemUgPD0gdGhpcy5vcHRpb25zLm1heFRodW1ibmFpbEZpbGVzaXplICogMTAyNCAqIDEwMjRcbiAgICApIHtcbiAgICAgIHRoaXMuX3RodW1ibmFpbFF1ZXVlLnB1c2goZmlsZSk7XG4gICAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9wcm9jZXNzVGh1bWJuYWlsUXVldWUoKSwgMCk7IC8vIERlZmVycmluZyB0aGUgY2FsbFxuICAgIH1cbiAgfVxuXG4gIF9wcm9jZXNzVGh1bWJuYWlsUXVldWUoKSB7XG4gICAgaWYgKHRoaXMuX3Byb2Nlc3NpbmdUaHVtYm5haWwgfHwgdGhpcy5fdGh1bWJuYWlsUXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcHJvY2Vzc2luZ1RodW1ibmFpbCA9IHRydWU7XG4gICAgbGV0IGZpbGUgPSB0aGlzLl90aHVtYm5haWxRdWV1ZS5zaGlmdCgpO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVRodW1ibmFpbChcbiAgICAgIGZpbGUsXG4gICAgICB0aGlzLm9wdGlvbnMudGh1bWJuYWlsV2lkdGgsXG4gICAgICB0aGlzLm9wdGlvbnMudGh1bWJuYWlsSGVpZ2h0LFxuICAgICAgdGhpcy5vcHRpb25zLnRodW1ibmFpbE1ldGhvZCxcbiAgICAgIHRydWUsXG4gICAgICAoZGF0YVVybCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoXCJ0aHVtYm5haWxcIiwgZmlsZSwgZGF0YVVybCk7XG4gICAgICAgIHRoaXMuX3Byb2Nlc3NpbmdUaHVtYm5haWwgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NUaHVtYm5haWxRdWV1ZSgpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvLyBDYW4gYmUgY2FsbGVkIGJ5IHRoZSB1c2VyIHRvIHJlbW92ZSBhIGZpbGVcbiAgcmVtb3ZlRmlsZShmaWxlKSB7XG4gICAgaWYgKGZpbGUuc3RhdHVzID09PSBEcm9wem9uZS5VUExPQURJTkcpIHtcbiAgICAgIHRoaXMuY2FuY2VsVXBsb2FkKGZpbGUpO1xuICAgIH1cbiAgICB0aGlzLmZpbGVzID0gd2l0aG91dCh0aGlzLmZpbGVzLCBmaWxlKTtcblxuICAgIHRoaXMuZW1pdChcInJlbW92ZWRmaWxlXCIsIGZpbGUpO1xuICAgIGlmICh0aGlzLmZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1pdChcInJlc2V0XCIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlbW92ZXMgYWxsIGZpbGVzIHRoYXQgYXJlbid0IGN1cnJlbnRseSBwcm9jZXNzZWQgZnJvbSB0aGUgbGlzdFxuICByZW1vdmVBbGxGaWxlcyhjYW5jZWxJZk5lY2Vzc2FyeSkge1xuICAgIC8vIENyZWF0ZSBhIGNvcHkgb2YgZmlsZXMgc2luY2UgcmVtb3ZlRmlsZSgpIGNoYW5nZXMgdGhlIEBmaWxlcyBhcnJheS5cbiAgICBpZiAoY2FuY2VsSWZOZWNlc3NhcnkgPT0gbnVsbCkge1xuICAgICAgY2FuY2VsSWZOZWNlc3NhcnkgPSBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChsZXQgZmlsZSBvZiB0aGlzLmZpbGVzLnNsaWNlKCkpIHtcbiAgICAgIGlmIChmaWxlLnN0YXR1cyAhPT0gRHJvcHpvbmUuVVBMT0FESU5HIHx8IGNhbmNlbElmTmVjZXNzYXJ5KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRmlsZShmaWxlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBSZXNpemVzIGFuIGltYWdlIGJlZm9yZSBpdCBnZXRzIHNlbnQgdG8gdGhlIHNlcnZlci4gVGhpcyBmdW5jdGlvbiBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZlxuICAvLyBgb3B0aW9ucy50cmFuc2Zvcm1GaWxlYCBpZiBgcmVzaXplV2lkdGhgIG9yIGByZXNpemVIZWlnaHRgIGFyZSBzZXQuIFRoZSBjYWxsYmFjayBpcyBpbnZva2VkIHdpdGhcbiAgLy8gdGhlIHJlc2l6ZWQgYmxvYi5cbiAgcmVzaXplSW1hZ2UoZmlsZSwgd2lkdGgsIGhlaWdodCwgcmVzaXplTWV0aG9kLCBjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVRodW1ibmFpbChcbiAgICAgIGZpbGUsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHJlc2l6ZU1ldGhvZCxcbiAgICAgIHRydWUsXG4gICAgICAoZGF0YVVybCwgY2FudmFzKSA9PiB7XG4gICAgICAgIGlmIChjYW52YXMgPT0gbnVsbCkge1xuICAgICAgICAgIC8vIFRoZSBpbWFnZSBoYXMgbm90IGJlZW4gcmVzaXplZFxuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhmaWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgeyByZXNpemVNaW1lVHlwZSB9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgICAgIGlmIChyZXNpemVNaW1lVHlwZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXNpemVNaW1lVHlwZSA9IGZpbGUudHlwZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHJlc2l6ZWREYXRhVVJMID0gY2FudmFzLnRvRGF0YVVSTChcbiAgICAgICAgICAgIHJlc2l6ZU1pbWVUeXBlLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJlc2l6ZVF1YWxpdHlcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHJlc2l6ZU1pbWVUeXBlID09PSBcImltYWdlL2pwZWdcIiB8fFxuICAgICAgICAgICAgcmVzaXplTWltZVR5cGUgPT09IFwiaW1hZ2UvanBnXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIE5vdyBhZGQgdGhlIG9yaWdpbmFsIEVYSUYgaW5mb3JtYXRpb25cbiAgICAgICAgICAgIHJlc2l6ZWREYXRhVVJMID0gRXhpZlJlc3RvcmUucmVzdG9yZShmaWxlLmRhdGFVUkwsIHJlc2l6ZWREYXRhVVJMKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKERyb3B6b25lLmRhdGFVUkl0b0Jsb2IocmVzaXplZERhdGFVUkwpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjcmVhdGVUaHVtYm5haWwoZmlsZSwgd2lkdGgsIGhlaWdodCwgcmVzaXplTWV0aG9kLCBmaXhPcmllbnRhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBsZXQgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICBmaWxlUmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGZpbGUuZGF0YVVSTCA9IGZpbGVSZWFkZXIucmVzdWx0O1xuXG4gICAgICAvLyBEb24ndCBib3RoZXIgY3JlYXRpbmcgYSB0aHVtYm5haWwgZm9yIFNWRyBpbWFnZXMgc2luY2UgdGhleSdyZSB2ZWN0b3JcbiAgICAgIGlmIChmaWxlLnR5cGUgPT09IFwiaW1hZ2Uvc3ZnK3htbFwiKSB7XG4gICAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgY2FsbGJhY2soZmlsZVJlYWRlci5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jcmVhdGVUaHVtYm5haWxGcm9tVXJsKFxuICAgICAgICBmaWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICByZXNpemVNZXRob2QsXG4gICAgICAgIGZpeE9yaWVudGF0aW9uLFxuICAgICAgICBjYWxsYmFja1xuICAgICAgKTtcbiAgICB9O1xuXG4gICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICB9XG5cbiAgLy8gYG1vY2tGaWxlYCBuZWVkcyB0byBoYXZlIHRoZXNlIGF0dHJpYnV0ZXM6XG4gIC8vXG4gIC8vICAgICB7IG5hbWU6ICduYW1lJywgc2l6ZTogMTIzNDUsIGltYWdlVXJsOiAnJyB9XG4gIC8vXG4gIC8vIGBjYWxsYmFja2Agd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIGltYWdlIGhhcyBiZWVuIGRvd25sb2FkZWQgYW5kIGRpc3BsYXllZC5cbiAgLy8gYGNyb3NzT3JpZ2luYCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBgaW1nYCB0YWcgd2hlbiBhY2Nlc3NpbmcgdGhlIGZpbGUuXG4gIGRpc3BsYXlFeGlzdGluZ0ZpbGUoXG4gICAgbW9ja0ZpbGUsXG4gICAgaW1hZ2VVcmwsXG4gICAgY2FsbGJhY2ssXG4gICAgY3Jvc3NPcmlnaW4sXG4gICAgcmVzaXplVGh1bWJuYWlsID0gdHJ1ZVxuICApIHtcbiAgICB0aGlzLmVtaXQoXCJhZGRlZGZpbGVcIiwgbW9ja0ZpbGUpO1xuICAgIHRoaXMuZW1pdChcImNvbXBsZXRlXCIsIG1vY2tGaWxlKTtcblxuICAgIGlmICghcmVzaXplVGh1bWJuYWlsKSB7XG4gICAgICB0aGlzLmVtaXQoXCJ0aHVtYm5haWxcIiwgbW9ja0ZpbGUsIGltYWdlVXJsKTtcbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG9uRG9uZSA9ICh0aHVtYm5haWwpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KFwidGh1bWJuYWlsXCIsIG1vY2tGaWxlLCB0aHVtYm5haWwpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICB9O1xuICAgICAgbW9ja0ZpbGUuZGF0YVVSTCA9IGltYWdlVXJsO1xuXG4gICAgICB0aGlzLmNyZWF0ZVRodW1ibmFpbEZyb21VcmwoXG4gICAgICAgIG1vY2tGaWxlLFxuICAgICAgICB0aGlzLm9wdGlvbnMudGh1bWJuYWlsV2lkdGgsXG4gICAgICAgIHRoaXMub3B0aW9ucy50aHVtYm5haWxIZWlnaHQsXG4gICAgICAgIHRoaXMub3B0aW9ucy50aHVtYm5haWxNZXRob2QsXG4gICAgICAgIHRoaXMub3B0aW9ucy5maXhPcmllbnRhdGlvbixcbiAgICAgICAgb25Eb25lLFxuICAgICAgICBjcm9zc09yaWdpblxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVUaHVtYm5haWxGcm9tVXJsKFxuICAgIGZpbGUsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHJlc2l6ZU1ldGhvZCxcbiAgICBmaXhPcmllbnRhdGlvbixcbiAgICBjYWxsYmFjayxcbiAgICBjcm9zc09yaWdpblxuICApIHtcbiAgICAvLyBOb3QgdXNpbmcgYG5ldyBJbWFnZWAgaGVyZSBiZWNhdXNlIG9mIGEgYnVnIGluIGxhdGVzdCBDaHJvbWUgdmVyc2lvbnMuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbnlvL2Ryb3B6b25lL3B1bGwvMjI2XG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICBpZiAoY3Jvc3NPcmlnaW4pIHtcbiAgICAgIGltZy5jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xuICAgIH1cblxuICAgIC8vIGZpeE9yaWVudGF0aW9uIGlzIG5vdCBuZWVkZWQgYW55bW9yZSB3aXRoIGJyb3dzZXJzIGhhbmRsaW5nIGltYWdlT3JpZW50YXRpb25cbiAgICBmaXhPcmllbnRhdGlvbiA9XG4gICAgICBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpW1wiaW1hZ2VPcmllbnRhdGlvblwiXSA9PSBcImZyb20taW1hZ2VcIlxuICAgICAgICA/IGZhbHNlXG4gICAgICAgIDogZml4T3JpZW50YXRpb247XG5cbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgbGV0IGxvYWRFeGlmID0gKGNhbGxiYWNrKSA9PiBjYWxsYmFjaygxKTtcbiAgICAgIGlmICh0eXBlb2YgRVhJRiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBFWElGICE9PSBudWxsICYmIGZpeE9yaWVudGF0aW9uKSB7XG4gICAgICAgIGxvYWRFeGlmID0gKGNhbGxiYWNrKSA9PlxuICAgICAgICAgIEVYSUYuZ2V0RGF0YShpbWcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhFWElGLmdldFRhZyh0aGlzLCBcIk9yaWVudGF0aW9uXCIpKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvYWRFeGlmKChvcmllbnRhdGlvbikgPT4ge1xuICAgICAgICBmaWxlLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICBmaWxlLmhlaWdodCA9IGltZy5oZWlnaHQ7XG5cbiAgICAgICAgbGV0IHJlc2l6ZUluZm8gPSB0aGlzLm9wdGlvbnMucmVzaXplLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBmaWxlLFxuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICByZXNpemVNZXRob2RcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgY2FudmFzLndpZHRoID0gcmVzaXplSW5mby50cmdXaWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHJlc2l6ZUluZm8udHJnSGVpZ2h0O1xuXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA+IDQpIHtcbiAgICAgICAgICBjYW52YXMud2lkdGggPSByZXNpemVJbmZvLnRyZ0hlaWdodDtcbiAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gcmVzaXplSW5mby50cmdXaWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAob3JpZW50YXRpb24pIHtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAvLyBob3Jpem9udGFsIGZsaXBcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoY2FudmFzLndpZHRoLCAwKTtcbiAgICAgICAgICAgIGN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAvLyAxODDCsCByb3RhdGUgbGVmdFxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3R4LnJvdGF0ZShNYXRoLlBJKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIC8vIHZlcnRpY2FsIGZsaXBcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoMCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHguc2NhbGUoMSwgLTEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgLy8gdmVydGljYWwgZmxpcCArIDkwIHJvdGF0ZSByaWdodFxuICAgICAgICAgICAgY3R4LnJvdGF0ZSgwLjUgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5zY2FsZSgxLCAtMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAvLyA5MMKwIHJvdGF0ZSByaWdodFxuICAgICAgICAgICAgY3R4LnJvdGF0ZSgwLjUgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoMCwgLWNhbnZhcy53aWR0aCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAvLyBob3Jpem9udGFsIGZsaXAgKyA5MCByb3RhdGUgcmlnaHRcbiAgICAgICAgICAgIGN0eC5yb3RhdGUoMC41ICogTWF0aC5QSSk7XG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKGNhbnZhcy5oZWlnaHQsIC1jYW52YXMud2lkdGgpO1xuICAgICAgICAgICAgY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIC8vIDkwwrAgcm90YXRlIGxlZnRcbiAgICAgICAgICAgIGN0eC5yb3RhdGUoLTAuNSAqIE1hdGguUEkpO1xuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgtY2FudmFzLmhlaWdodCwgMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgaXMgYSBidWdmaXggZm9yIGlPUycgc2NhbGluZyBidWcuXG4gICAgICAgIGRyYXdJbWFnZUlPU0ZpeChcbiAgICAgICAgICBjdHgsXG4gICAgICAgICAgaW1nLFxuICAgICAgICAgIHJlc2l6ZUluZm8uc3JjWCAhPSBudWxsID8gcmVzaXplSW5mby5zcmNYIDogMCxcbiAgICAgICAgICByZXNpemVJbmZvLnNyY1kgIT0gbnVsbCA/IHJlc2l6ZUluZm8uc3JjWSA6IDAsXG4gICAgICAgICAgcmVzaXplSW5mby5zcmNXaWR0aCxcbiAgICAgICAgICByZXNpemVJbmZvLnNyY0hlaWdodCxcbiAgICAgICAgICByZXNpemVJbmZvLnRyZ1ggIT0gbnVsbCA/IHJlc2l6ZUluZm8udHJnWCA6IDAsXG4gICAgICAgICAgcmVzaXplSW5mby50cmdZICE9IG51bGwgPyByZXNpemVJbmZvLnRyZ1kgOiAwLFxuICAgICAgICAgIHJlc2l6ZUluZm8udHJnV2lkdGgsXG4gICAgICAgICAgcmVzaXplSW5mby50cmdIZWlnaHRcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgdGh1bWJuYWlsID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcblxuICAgICAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayh0aHVtYm5haWwsIGNhbnZhcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCkge1xuICAgICAgaW1nLm9uZXJyb3IgPSBjYWxsYmFjaztcbiAgICB9XG5cbiAgICByZXR1cm4gKGltZy5zcmMgPSBmaWxlLmRhdGFVUkwpO1xuICB9XG5cbiAgLy8gR29lcyB0aHJvdWdoIHRoZSBxdWV1ZSBhbmQgcHJvY2Vzc2VzIGZpbGVzIGlmIHRoZXJlIGFyZW4ndCB0b28gbWFueSBhbHJlYWR5LlxuICBwcm9jZXNzUXVldWUoKSB7XG4gICAgbGV0IHsgcGFyYWxsZWxVcGxvYWRzIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgbGV0IHByb2Nlc3NpbmdMZW5ndGggPSB0aGlzLmdldFVwbG9hZGluZ0ZpbGVzKCkubGVuZ3RoO1xuICAgIGxldCBpID0gcHJvY2Vzc2luZ0xlbmd0aDtcblxuICAgIC8vIFRoZXJlIGFyZSBhbHJlYWR5IGF0IGxlYXN0IGFzIG1hbnkgZmlsZXMgdXBsb2FkaW5nIHRoYW4gc2hvdWxkIGJlXG4gICAgaWYgKHByb2Nlc3NpbmdMZW5ndGggPj0gcGFyYWxsZWxVcGxvYWRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHF1ZXVlZEZpbGVzID0gdGhpcy5nZXRRdWV1ZWRGaWxlcygpO1xuXG4gICAgaWYgKCEocXVldWVkRmlsZXMubGVuZ3RoID4gMCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnVwbG9hZE11bHRpcGxlKSB7XG4gICAgICAvLyBUaGUgZmlsZXMgc2hvdWxkIGJlIHVwbG9hZGVkIGluIG9uZSByZXF1ZXN0XG4gICAgICByZXR1cm4gdGhpcy5wcm9jZXNzRmlsZXMoXG4gICAgICAgIHF1ZXVlZEZpbGVzLnNsaWNlKDAsIHBhcmFsbGVsVXBsb2FkcyAtIHByb2Nlc3NpbmdMZW5ndGgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoaSA8IHBhcmFsbGVsVXBsb2Fkcykge1xuICAgICAgICBpZiAoIXF1ZXVlZEZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBOb3RoaW5nIGxlZnQgdG8gcHJvY2Vzc1xuICAgICAgICB0aGlzLnByb2Nlc3NGaWxlKHF1ZXVlZEZpbGVzLnNoaWZ0KCkpO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gV3JhcHBlciBmb3IgYHByb2Nlc3NGaWxlc2BcbiAgcHJvY2Vzc0ZpbGUoZmlsZSkge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3NGaWxlcyhbZmlsZV0pO1xuICB9XG5cbiAgLy8gTG9hZHMgdGhlIGZpbGUsIHRoZW4gY2FsbHMgZmluaXNoZWRMb2FkaW5nKClcbiAgcHJvY2Vzc0ZpbGVzKGZpbGVzKSB7XG4gICAgZm9yIChsZXQgZmlsZSBvZiBmaWxlcykge1xuICAgICAgZmlsZS5wcm9jZXNzaW5nID0gdHJ1ZTsgLy8gQmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgIGZpbGUuc3RhdHVzID0gRHJvcHpvbmUuVVBMT0FESU5HO1xuXG4gICAgICB0aGlzLmVtaXQoXCJwcm9jZXNzaW5nXCIsIGZpbGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMudXBsb2FkTXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuZW1pdChcInByb2Nlc3NpbmdtdWx0aXBsZVwiLCBmaWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudXBsb2FkRmlsZXMoZmlsZXMpO1xuICB9XG5cbiAgX2dldEZpbGVzV2l0aFhocih4aHIpIHtcbiAgICBsZXQgZmlsZXM7XG4gICAgcmV0dXJuIChmaWxlcyA9IHRoaXMuZmlsZXNcbiAgICAgIC5maWx0ZXIoKGZpbGUpID0+IGZpbGUueGhyID09PSB4aHIpXG4gICAgICAubWFwKChmaWxlKSA9PiBmaWxlKSk7XG4gIH1cblxuICAvLyBDYW5jZWxzIHRoZSBmaWxlIHVwbG9hZCBhbmQgc2V0cyB0aGUgc3RhdHVzIHRvIENBTkNFTEVEXG4gIC8vICoqaWYqKiB0aGUgZmlsZSBpcyBhY3R1YWxseSBiZWluZyB1cGxvYWRlZC5cbiAgLy8gSWYgaXQncyBzdGlsbCBpbiB0aGUgcXVldWUsIHRoZSBmaWxlIGlzIGJlaW5nIHJlbW92ZWQgZnJvbSBpdCBhbmQgdGhlIHN0YXR1c1xuICAvLyBzZXQgdG8gQ0FOQ0VMRUQuXG4gIGNhbmNlbFVwbG9hZChmaWxlKSB7XG4gICAgaWYgKGZpbGUuc3RhdHVzID09PSBEcm9wem9uZS5VUExPQURJTkcpIHtcbiAgICAgIGxldCBncm91cGVkRmlsZXMgPSB0aGlzLl9nZXRGaWxlc1dpdGhYaHIoZmlsZS54aHIpO1xuICAgICAgZm9yIChsZXQgZ3JvdXBlZEZpbGUgb2YgZ3JvdXBlZEZpbGVzKSB7XG4gICAgICAgIGdyb3VwZWRGaWxlLnN0YXR1cyA9IERyb3B6b25lLkNBTkNFTEVEO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBmaWxlLnhociAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBmaWxlLnhoci5hYm9ydCgpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgZ3JvdXBlZEZpbGUgb2YgZ3JvdXBlZEZpbGVzKSB7XG4gICAgICAgIHRoaXMuZW1pdChcImNhbmNlbGVkXCIsIGdyb3VwZWRGaWxlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXBsb2FkTXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5lbWl0KFwiY2FuY2VsZWRtdWx0aXBsZVwiLCBncm91cGVkRmlsZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBmaWxlLnN0YXR1cyA9PT0gRHJvcHpvbmUuQURERUQgfHxcbiAgICAgIGZpbGUuc3RhdHVzID09PSBEcm9wem9uZS5RVUVVRURcbiAgICApIHtcbiAgICAgIGZpbGUuc3RhdHVzID0gRHJvcHpvbmUuQ0FOQ0VMRUQ7XG4gICAgICB0aGlzLmVtaXQoXCJjYW5jZWxlZFwiLCBmaWxlKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXBsb2FkTXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5lbWl0KFwiY2FuY2VsZWRtdWx0aXBsZVwiLCBbZmlsZV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b1Byb2Nlc3NRdWV1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1F1ZXVlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZU9wdGlvbihvcHRpb24sIC4uLmFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gb3B0aW9uLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uO1xuICB9XG5cbiAgdXBsb2FkRmlsZShmaWxlKSB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkRmlsZXMoW2ZpbGVdKTtcbiAgfVxuXG4gIHVwbG9hZEZpbGVzKGZpbGVzKSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtRmlsZXMoZmlsZXMsICh0cmFuc2Zvcm1lZEZpbGVzKSA9PiB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNodW5raW5nKSB7XG4gICAgICAgIC8vIENodW5raW5nIGlzIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgd2l0aCBgdXBsb2FkTXVsdGlwbGVgIHNvIHdlIGtub3dcbiAgICAgICAgLy8gdGhhdCB0aGVyZSBpcyBvbmx5IF9fb25lX19maWxlLlxuICAgICAgICBsZXQgdHJhbnNmb3JtZWRGaWxlID0gdHJhbnNmb3JtZWRGaWxlc1swXTtcbiAgICAgICAgZmlsZXNbMF0udXBsb2FkLmNodW5rZWQgPVxuICAgICAgICAgIHRoaXMub3B0aW9ucy5jaHVua2luZyAmJlxuICAgICAgICAgICh0aGlzLm9wdGlvbnMuZm9yY2VDaHVua2luZyB8fFxuICAgICAgICAgICAgdHJhbnNmb3JtZWRGaWxlLnNpemUgPiB0aGlzLm9wdGlvbnMuY2h1bmtTaXplKTtcbiAgICAgICAgZmlsZXNbMF0udXBsb2FkLnRvdGFsQ2h1bmtDb3VudCA9IE1hdGguY2VpbChcbiAgICAgICAgICB0cmFuc2Zvcm1lZEZpbGUuc2l6ZSAvIHRoaXMub3B0aW9ucy5jaHVua1NpemVcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbGVzWzBdLnVwbG9hZC5jaHVua2VkKSB7XG4gICAgICAgIC8vIFRoaXMgZmlsZSBzaG91bGQgYmUgc2VudCBpbiBjaHVua3MhXG5cbiAgICAgICAgLy8gSWYgdGhlIGNodW5raW5nIG9wdGlvbiBpcyBzZXQsIHdlICoqa25vdyoqIHRoYXQgdGhlcmUgY2FuIG9ubHkgYmUgKipvbmUqKiBmaWxlLCBzaW5jZVxuICAgICAgICAvLyB1cGxvYWRNdWx0aXBsZSBpcyBub3QgYWxsb3dlZCB3aXRoIHRoaXMgb3B0aW9uLlxuICAgICAgICBsZXQgZmlsZSA9IGZpbGVzWzBdO1xuICAgICAgICBsZXQgdHJhbnNmb3JtZWRGaWxlID0gdHJhbnNmb3JtZWRGaWxlc1swXTtcbiAgICAgICAgbGV0IHN0YXJ0ZWRDaHVua0NvdW50ID0gMDtcblxuICAgICAgICBmaWxlLnVwbG9hZC5jaHVua3MgPSBbXTtcblxuICAgICAgICBsZXQgaGFuZGxlTmV4dENodW5rID0gKCkgPT4ge1xuICAgICAgICAgIGxldCBjaHVua0luZGV4ID0gMDtcblxuICAgICAgICAgIC8vIEZpbmQgdGhlIG5leHQgaXRlbSBpbiBmaWxlLnVwbG9hZC5jaHVua3MgdGhhdCBpcyBub3QgZGVmaW5lZCB5ZXQuXG4gICAgICAgICAgd2hpbGUgKGZpbGUudXBsb2FkLmNodW5rc1tjaHVua0luZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjaHVua0luZGV4Kys7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVGhpcyBtZWFucywgdGhhdCBhbGwgY2h1bmtzIGhhdmUgYWxyZWFkeSBiZWVuIHN0YXJ0ZWQuXG4gICAgICAgICAgaWYgKGNodW5rSW5kZXggPj0gZmlsZS51cGxvYWQudG90YWxDaHVua0NvdW50KSByZXR1cm47XG5cbiAgICAgICAgICBzdGFydGVkQ2h1bmtDb3VudCsrO1xuXG4gICAgICAgICAgbGV0IHN0YXJ0ID0gY2h1bmtJbmRleCAqIHRoaXMub3B0aW9ucy5jaHVua1NpemU7XG4gICAgICAgICAgbGV0IGVuZCA9IE1hdGgubWluKFxuICAgICAgICAgICAgc3RhcnQgKyB0aGlzLm9wdGlvbnMuY2h1bmtTaXplLFxuICAgICAgICAgICAgdHJhbnNmb3JtZWRGaWxlLnNpemVcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgbGV0IGRhdGFCbG9jayA9IHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuX2dldFBhcmFtTmFtZSgwKSxcbiAgICAgICAgICAgIGRhdGE6IHRyYW5zZm9ybWVkRmlsZS53ZWJraXRTbGljZVxuICAgICAgICAgICAgICA/IHRyYW5zZm9ybWVkRmlsZS53ZWJraXRTbGljZShzdGFydCwgZW5kKVxuICAgICAgICAgICAgICA6IHRyYW5zZm9ybWVkRmlsZS5zbGljZShzdGFydCwgZW5kKSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLnVwbG9hZC5maWxlbmFtZSxcbiAgICAgICAgICAgIGNodW5rSW5kZXg6IGNodW5rSW5kZXgsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGZpbGUudXBsb2FkLmNodW5rc1tjaHVua0luZGV4XSA9IHtcbiAgICAgICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgICAgICBpbmRleDogY2h1bmtJbmRleCxcbiAgICAgICAgICAgIGRhdGFCbG9jazogZGF0YUJsb2NrLCAvLyBJbiBjYXNlIHdlIHdhbnQgdG8gcmV0cnkuXG4gICAgICAgICAgICBzdGF0dXM6IERyb3B6b25lLlVQTE9BRElORyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICAgICAgcmV0cmllczogMCwgLy8gVGhlIG51bWJlciBvZiB0aW1lcyB0aGlzIGJsb2NrIGhhcyBiZWVuIHJldHJpZWQuXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRoaXMuX3VwbG9hZERhdGEoZmlsZXMsIFtkYXRhQmxvY2tdKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmaWxlLnVwbG9hZC5maW5pc2hlZENodW5rVXBsb2FkID0gKGNodW5rLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGxldCBhbGxGaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgY2h1bmsuc3RhdHVzID0gRHJvcHpvbmUuU1VDQ0VTUztcblxuICAgICAgICAgIC8vIENsZWFyIHRoZSBkYXRhIGZyb20gdGhlIGNodW5rXG4gICAgICAgICAgY2h1bmsuZGF0YUJsb2NrID0gbnVsbDtcbiAgICAgICAgICBjaHVuay5yZXNwb25zZSA9IGNodW5rLnhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgY2h1bmsucmVzcG9uc2VIZWFkZXJzID0gY2h1bmsueGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xuICAgICAgICAgIC8vIExlYXZpbmcgdGhpcyByZWZlcmVuY2UgdG8geGhyIHdpbGwgY2F1c2UgbWVtb3J5IGxlYWtzLlxuICAgICAgICAgIGNodW5rLnhociA9IG51bGw7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGUudXBsb2FkLnRvdGFsQ2h1bmtDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZmlsZS51cGxvYWQuY2h1bmtzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZU5leHRDaHVuaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbGUudXBsb2FkLmNodW5rc1tpXS5zdGF0dXMgIT09IERyb3B6b25lLlNVQ0NFU1MpIHtcbiAgICAgICAgICAgICAgYWxsRmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYWxsRmluaXNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaHVua3NVcGxvYWRlZChmaWxlLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX2ZpbmlzaGVkKGZpbGVzLCByZXNwb25zZSwgbnVsbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYXJhbGxlbENodW5rVXBsb2Fkcykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZS51cGxvYWQudG90YWxDaHVua0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGhhbmRsZU5leHRDaHVuaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoYW5kbGVOZXh0Q2h1bmsoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRhdGFCbG9ja3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRhdGFCbG9ja3NbaV0gPSB7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLl9nZXRQYXJhbU5hbWUoaSksXG4gICAgICAgICAgICBkYXRhOiB0cmFuc2Zvcm1lZEZpbGVzW2ldLFxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGVzW2ldLnVwbG9hZC5maWxlbmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwbG9hZERhdGEoZmlsZXMsIGRhdGFCbG9ja3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8vIFJldHVybnMgdGhlIHJpZ2h0IGNodW5rIGZvciBnaXZlbiBmaWxlIGFuZCB4aHJcbiAgX2dldENodW5rKGZpbGUsIHhocikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZS51cGxvYWQudG90YWxDaHVua0NvdW50OyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgZmlsZS51cGxvYWQuY2h1bmtzW2ldICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgZmlsZS51cGxvYWQuY2h1bmtzW2ldLnhociA9PT0geGhyXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZpbGUudXBsb2FkLmNodW5rc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIGZ1bmN0aW9uIGFjdHVhbGx5IHVwbG9hZHMgdGhlIGZpbGUocykgdG8gdGhlIHNlcnZlci5cbiAgLy9cbiAgLy8gIElmIGRhdGFCbG9ja3MgY29udGFpbnMgdGhlIGFjdHVhbCBkYXRhIHRvIHVwbG9hZCAobWVhbmluZywgdGhhdCB0aGlzIGNvdWxkXG4gIC8vIGVpdGhlciBiZSB0cmFuc2Zvcm1lZCBmaWxlcywgb3IgaW5kaXZpZHVhbCBjaHVua3MgZm9yIGNodW5rZWQgdXBsb2FkKSB0aGVuXG4gIC8vIHRoZXkgd2lsbCBiZSB1c2VkIGZvciB0aGUgYWN0dWFsIGRhdGEgdG8gdXBsb2FkLlxuICBfdXBsb2FkRGF0YShmaWxlcywgZGF0YUJsb2Nrcykge1xuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIFB1dCB0aGUgeGhyIG9iamVjdCBpbiB0aGUgZmlsZSBvYmplY3RzIHRvIGJlIGFibGUgdG8gcmVmZXJlbmNlIGl0IGxhdGVyLlxuICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGZpbGUueGhyID0geGhyO1xuICAgIH1cbiAgICBpZiAoZmlsZXNbMF0udXBsb2FkLmNodW5rZWQpIHtcbiAgICAgIC8vIFB1dCB0aGUgeGhyIG9iamVjdCBpbiB0aGUgcmlnaHQgY2h1bmsgb2JqZWN0LCBzbyBpdCBjYW4gYmUgYXNzb2NpYXRlZFxuICAgICAgLy8gbGF0ZXIsIGFuZCBmb3VuZCB3aXRoIF9nZXRDaHVuay5cbiAgICAgIGZpbGVzWzBdLnVwbG9hZC5jaHVua3NbZGF0YUJsb2Nrc1swXS5jaHVua0luZGV4XS54aHIgPSB4aHI7XG4gICAgfVxuXG4gICAgbGV0IG1ldGhvZCA9IHRoaXMucmVzb2x2ZU9wdGlvbih0aGlzLm9wdGlvbnMubWV0aG9kLCBmaWxlcywgZGF0YUJsb2Nrcyk7XG4gICAgbGV0IHVybCA9IHRoaXMucmVzb2x2ZU9wdGlvbih0aGlzLm9wdGlvbnMudXJsLCBmaWxlcywgZGF0YUJsb2Nrcyk7XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuXG4gICAgLy8gU2V0dGluZyB0aGUgdGltZW91dCBhZnRlciBvcGVuIGJlY2F1c2Ugb2YgSUUxMSBpc3N1ZTogaHR0cHM6Ly9naXRsYWIuY29tL21lbm8vZHJvcHpvbmUvaXNzdWVzLzhcbiAgICBsZXQgdGltZW91dCA9IHRoaXMucmVzb2x2ZU9wdGlvbih0aGlzLm9wdGlvbnMudGltZW91dCwgZmlsZXMpO1xuICAgIGlmICh0aW1lb3V0KSB4aHIudGltZW91dCA9IHRoaXMucmVzb2x2ZU9wdGlvbih0aGlzLm9wdGlvbnMudGltZW91dCwgZmlsZXMpO1xuXG4gICAgLy8gSGFzIHRvIGJlIGFmdGVyIGAub3BlbigpYC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbnlvL2Ryb3B6b25lL2lzc3Vlcy8xNzlcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gISF0aGlzLm9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuXG4gICAgeGhyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICB0aGlzLl9maW5pc2hlZFVwbG9hZGluZyhmaWxlcywgeGhyLCBlKTtcbiAgICB9O1xuXG4gICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZVVwbG9hZEVycm9yKFxuICAgICAgICBmaWxlcyxcbiAgICAgICAgeGhyLFxuICAgICAgICBgUmVxdWVzdCB0aW1lZG91dCBhZnRlciAke3RoaXMub3B0aW9ucy50aW1lb3V0IC8gMTAwMH0gc2Vjb25kc2BcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlVXBsb2FkRXJyb3IoZmlsZXMsIHhocik7XG4gICAgfTtcblxuICAgIC8vIFNvbWUgYnJvd3NlcnMgZG8gbm90IGhhdmUgdGhlIC51cGxvYWQgcHJvcGVydHlcbiAgICBsZXQgcHJvZ3Jlc3NPYmogPSB4aHIudXBsb2FkICE9IG51bGwgPyB4aHIudXBsb2FkIDogeGhyO1xuICAgIHByb2dyZXNzT2JqLm9ucHJvZ3Jlc3MgPSAoZSkgPT5cbiAgICAgIHRoaXMuX3VwZGF0ZUZpbGVzVXBsb2FkUHJvZ3Jlc3MoZmlsZXMsIHhociwgZSk7XG5cbiAgICBsZXQgaGVhZGVycyA9IHRoaXMub3B0aW9ucy5kZWZhdWx0SGVhZGVyc1xuICAgICAgPyB7XG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBcIkNhY2hlLUNvbnRyb2xcIjogXCJuby1jYWNoZVwiLFxuICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXG4gICAgICAgIH1cbiAgICAgIDoge307XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmJpbmFyeUJvZHkpIHtcbiAgICAgIGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBmaWxlc1swXS50eXBlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaGVhZGVycykge1xuICAgICAgZXh0ZW5kKGhlYWRlcnMsIHRoaXMub3B0aW9ucy5oZWFkZXJzKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBoZWFkZXJOYW1lIGluIGhlYWRlcnMpIHtcbiAgICAgIGxldCBoZWFkZXJWYWx1ZSA9IGhlYWRlcnNbaGVhZGVyTmFtZV07XG4gICAgICBpZiAoaGVhZGVyVmFsdWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyTmFtZSwgaGVhZGVyVmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuYmluYXJ5Qm9keSkge1xuICAgICAgLy8gU2luY2UgdGhlIGZpbGUgaXMgZ29pbmcgdG8gYmUgc2VudCBhcyBiaW5hcnkgYm9keSwgaXQgZG9lc24ndCBtYWtlXG4gICAgICAvLyBhbnkgc2Vuc2UgdG8gZ2VuZXJhdGUgYEZvcm1EYXRhYCBmb3IgaXQuXG4gICAgICBmb3IgKGxldCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgIHRoaXMuZW1pdChcInNlbmRpbmdcIiwgZmlsZSwgeGhyKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXBsb2FkTXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5lbWl0KFwic2VuZGluZ211bHRpcGxlXCIsIGZpbGVzLCB4aHIpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdWJtaXRSZXF1ZXN0KHhociwgbnVsbCwgZmlsZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgLy8gQWRkaW5nIGFsbCBAb3B0aW9ucyBwYXJhbWV0ZXJzXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnBhcmFtcykge1xuICAgICAgICBsZXQgYWRkaXRpb25hbFBhcmFtcyA9IHRoaXMub3B0aW9ucy5wYXJhbXM7XG4gICAgICAgIGlmICh0eXBlb2YgYWRkaXRpb25hbFBhcmFtcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgYWRkaXRpb25hbFBhcmFtcyA9IGFkZGl0aW9uYWxQYXJhbXMuY2FsbChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBmaWxlcyxcbiAgICAgICAgICAgIHhocixcbiAgICAgICAgICAgIGZpbGVzWzBdLnVwbG9hZC5jaHVua2VkID8gdGhpcy5fZ2V0Q2h1bmsoZmlsZXNbMF0sIHhocikgOiBudWxsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhZGRpdGlvbmFsUGFyYW1zKSB7XG4gICAgICAgICAgbGV0IHZhbHVlID0gYWRkaXRpb25hbFBhcmFtc1trZXldO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgLy8gVGhlIGFkZGl0aW9uYWwgcGFyYW1ldGVyIGNvbnRhaW5zIGFuIGFycmF5LFxuICAgICAgICAgICAgLy8gc28gbGV0cyBpdGVyYXRlIG92ZXIgaXQgdG8gYXR0YWNoIGVhY2ggdmFsdWVcbiAgICAgICAgICAgIC8vIGluZGl2aWR1YWxseS5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIExldCB0aGUgdXNlciBhZGQgYWRkaXRpb25hbCBkYXRhIGlmIG5lY2Vzc2FyeVxuICAgICAgZm9yIChsZXQgZmlsZSBvZiBmaWxlcykge1xuICAgICAgICB0aGlzLmVtaXQoXCJzZW5kaW5nXCIsIGZpbGUsIHhociwgZm9ybURhdGEpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cGxvYWRNdWx0aXBsZSkge1xuICAgICAgICB0aGlzLmVtaXQoXCJzZW5kaW5nbXVsdGlwbGVcIiwgZmlsZXMsIHhociwgZm9ybURhdGEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hZGRGb3JtRWxlbWVudERhdGEoZm9ybURhdGEpO1xuXG4gICAgICAvLyBGaW5hbGx5IGFkZCB0aGUgZmlsZXNcbiAgICAgIC8vIEhhcyB0byBiZSBsYXN0IGJlY2F1c2Ugc29tZSBzZXJ2ZXJzIChlZzogUzMpIGV4cGVjdCB0aGUgZmlsZSB0byBiZSB0aGUgbGFzdCBwYXJhbWV0ZXJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZGF0YUJsb2NrID0gZGF0YUJsb2Nrc1tpXTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKGRhdGFCbG9jay5uYW1lLCBkYXRhQmxvY2suZGF0YSwgZGF0YUJsb2NrLmZpbGVuYW1lKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdWJtaXRSZXF1ZXN0KHhociwgZm9ybURhdGEsIGZpbGVzKTtcbiAgICB9XG4gIH1cblxuICAvLyBUcmFuc2Zvcm1zIGFsbCBmaWxlcyB3aXRoIHRoaXMub3B0aW9ucy50cmFuc2Zvcm1GaWxlIGFuZCBpbnZva2VzIGRvbmUgd2l0aCB0aGUgdHJhbnNmb3JtZWQgZmlsZXMgd2hlbiBkb25lLlxuICBfdHJhbnNmb3JtRmlsZXMoZmlsZXMsIGRvbmUpIHtcbiAgICBsZXQgdHJhbnNmb3JtZWRGaWxlcyA9IFtdO1xuICAgIC8vIENsdW1zeSB3YXkgb2YgaGFuZGxpbmcgYXN5bmNocm9ub3VzIGNhbGxzLCB1bnRpbCBJIGdldCB0byBhZGQgYSBwcm9wZXIgRnV0dXJlIGxpYnJhcnkuXG4gICAgbGV0IGRvbmVDb3VudGVyID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLm9wdGlvbnMudHJhbnNmb3JtRmlsZS5jYWxsKHRoaXMsIGZpbGVzW2ldLCAodHJhbnNmb3JtZWRGaWxlKSA9PiB7XG4gICAgICAgIHRyYW5zZm9ybWVkRmlsZXNbaV0gPSB0cmFuc2Zvcm1lZEZpbGU7XG4gICAgICAgIGlmICgrK2RvbmVDb3VudGVyID09PSBmaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICBkb25lKHRyYW5zZm9ybWVkRmlsZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBUYWtlcyBjYXJlIG9mIGFkZGluZyBvdGhlciBpbnB1dCBlbGVtZW50cyBvZiB0aGUgZm9ybSB0byB0aGUgQUpBWCByZXF1ZXN0XG4gIF9hZGRGb3JtRWxlbWVudERhdGEoZm9ybURhdGEpIHtcbiAgICAvLyBUYWtlIGNhcmUgb2Ygb3RoZXIgaW5wdXQgZWxlbWVudHNcbiAgICBpZiAodGhpcy5lbGVtZW50LnRhZ05hbWUgPT09IFwiRk9STVwiKSB7XG4gICAgICBmb3IgKGxldCBpbnB1dCBvZiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgYnV0dG9uXCJcbiAgICAgICkpIHtcbiAgICAgICAgbGV0IGlucHV0TmFtZSA9IGlucHV0LmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XG4gICAgICAgIGxldCBpbnB1dFR5cGUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuICAgICAgICBpZiAoaW5wdXRUeXBlKSBpbnB1dFR5cGUgPSBpbnB1dFR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvLyBJZiB0aGUgaW5wdXQgZG9lc24ndCBoYXZlIGEgbmFtZSwgd2UgY2FuJ3QgdXNlIGl0LlxuICAgICAgICBpZiAodHlwZW9mIGlucHV0TmFtZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBpbnB1dE5hbWUgPT09IG51bGwpIGNvbnRpbnVlO1xuXG4gICAgICAgIGlmIChpbnB1dC50YWdOYW1lID09PSBcIlNFTEVDVFwiICYmIGlucHV0Lmhhc0F0dHJpYnV0ZShcIm11bHRpcGxlXCIpKSB7XG4gICAgICAgICAgLy8gUG9zc2libHkgbXVsdGlwbGUgdmFsdWVzXG4gICAgICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIGlucHV0Lm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGlucHV0TmFtZSwgb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgIWlucHV0VHlwZSB8fFxuICAgICAgICAgIChpbnB1dFR5cGUgIT09IFwiY2hlY2tib3hcIiAmJiBpbnB1dFR5cGUgIT09IFwicmFkaW9cIikgfHxcbiAgICAgICAgICBpbnB1dC5jaGVja2VkXG4gICAgICAgICkge1xuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChpbnB1dE5hbWUsIGlucHV0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEludm9rZWQgd2hlbiB0aGVyZSBpcyBuZXcgcHJvZ3Jlc3MgaW5mb3JtYXRpb24gYWJvdXQgZ2l2ZW4gZmlsZXMuXG4gIC8vIElmIGUgaXMgbm90IHByb3ZpZGVkLCBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHVwbG9hZCBpcyBmaW5pc2hlZC5cbiAgX3VwZGF0ZUZpbGVzVXBsb2FkUHJvZ3Jlc3MoZmlsZXMsIHhociwgZSkge1xuICAgIGlmICghZmlsZXNbMF0udXBsb2FkLmNodW5rZWQpIHtcbiAgICAgIC8vIEhhbmRsZSBmaWxlIHVwbG9hZHMgd2l0aG91dCBjaHVua2luZ1xuICAgICAgZm9yIChsZXQgZmlsZSBvZiBmaWxlcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZmlsZS51cGxvYWQudG90YWwgJiZcbiAgICAgICAgICBmaWxlLnVwbG9hZC5ieXRlc1NlbnQgJiZcbiAgICAgICAgICBmaWxlLnVwbG9hZC5ieXRlc1NlbnQgPT0gZmlsZS51cGxvYWQudG90YWxcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gSWYgYm90aCwgdGhlIGB0b3RhbGAgYW5kIGBieXRlc1NlbnRgIGhhdmUgYWxyZWFkeSBiZWVuIHNldCwgYW5kXG4gICAgICAgICAgLy8gdGhleSBhcmUgZXF1YWwgKG1lYW5pbmcgcHJvZ3Jlc3MgaXMgYXQgMTAwJSksIHdlIGNhbiBza2lwIHRoaXNcbiAgICAgICAgICAvLyBmaWxlLCBzaW5jZSBhbiB1cGxvYWQgcHJvZ3Jlc3Mgc2hvdWxkbid0IGdvIGRvd24uXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgIGZpbGUudXBsb2FkLnByb2dyZXNzID0gKDEwMCAqIGUubG9hZGVkKSAvIGUudG90YWw7XG4gICAgICAgICAgZmlsZS51cGxvYWQudG90YWwgPSBlLnRvdGFsO1xuICAgICAgICAgIGZpbGUudXBsb2FkLmJ5dGVzU2VudCA9IGUubG9hZGVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vIGV2ZW50LCBzbyB3ZSdyZSBhdCAxMDAlXG4gICAgICAgICAgZmlsZS51cGxvYWQucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgICAgZmlsZS51cGxvYWQuYnl0ZXNTZW50ID0gZmlsZS51cGxvYWQudG90YWw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVtaXQoXG4gICAgICAgICAgXCJ1cGxvYWRwcm9ncmVzc1wiLFxuICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgZmlsZS51cGxvYWQucHJvZ3Jlc3MsXG4gICAgICAgICAgZmlsZS51cGxvYWQuYnl0ZXNTZW50XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEhhbmRsZSBjaHVua2VkIGZpbGUgdXBsb2Fkc1xuXG4gICAgICAvLyBDaHVua2VkIHVwbG9hZCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHVwbG9hZGluZyBtdWx0aXBsZSBmaWxlcyBpbiBvbmVcbiAgICAgIC8vIHJlcXVlc3QsIHNvIHdlIGtub3cgdGhlcmUncyBvbmx5IG9uZSBmaWxlLlxuICAgICAgbGV0IGZpbGUgPSBmaWxlc1swXTtcblxuICAgICAgLy8gU2luY2UgdGhpcyBpcyBhIGNodW5rZWQgdXBsb2FkLCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgYXBwcm9wcmlhdGUgY2h1bmtcbiAgICAgIC8vIHByb2dyZXNzLlxuICAgICAgbGV0IGNodW5rID0gdGhpcy5fZ2V0Q2h1bmsoZmlsZSwgeGhyKTtcblxuICAgICAgaWYgKGUpIHtcbiAgICAgICAgY2h1bmsucHJvZ3Jlc3MgPSAoMTAwICogZS5sb2FkZWQpIC8gZS50b3RhbDtcbiAgICAgICAgY2h1bmsudG90YWwgPSBlLnRvdGFsO1xuICAgICAgICBjaHVuay5ieXRlc1NlbnQgPSBlLmxvYWRlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vIGV2ZW50LCBzbyB3ZSdyZSBhdCAxMDAlXG4gICAgICAgIGNodW5rLnByb2dyZXNzID0gMTAwO1xuICAgICAgICBjaHVuay5ieXRlc1NlbnQgPSBjaHVuay50b3RhbDtcbiAgICAgIH1cblxuICAgICAgLy8gTm93IHRhbGx5IHRoZSAqZmlsZSogdXBsb2FkIHByb2dyZXNzIGZyb20gaXRzIGluZGl2aWR1YWwgY2h1bmtzXG4gICAgICBmaWxlLnVwbG9hZC5wcm9ncmVzcyA9IDA7XG4gICAgICBmaWxlLnVwbG9hZC50b3RhbCA9IDA7XG4gICAgICBmaWxlLnVwbG9hZC5ieXRlc1NlbnQgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlLnVwbG9hZC50b3RhbENodW5rQ291bnQ7IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZmlsZS51cGxvYWQuY2h1bmtzW2ldICYmXG4gICAgICAgICAgdHlwZW9mIGZpbGUudXBsb2FkLmNodW5rc1tpXS5wcm9ncmVzcyAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICBmaWxlLnVwbG9hZC5wcm9ncmVzcyArPSBmaWxlLnVwbG9hZC5jaHVua3NbaV0ucHJvZ3Jlc3M7XG4gICAgICAgICAgZmlsZS51cGxvYWQudG90YWwgKz0gZmlsZS51cGxvYWQuY2h1bmtzW2ldLnRvdGFsO1xuICAgICAgICAgIGZpbGUudXBsb2FkLmJ5dGVzU2VudCArPSBmaWxlLnVwbG9hZC5jaHVua3NbaV0uYnl0ZXNTZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTaW5jZSB0aGUgcHJvY2VzcyBpcyBhIHBlcmNlbnRhZ2UsIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBhbW91bnQgb2ZcbiAgICAgIC8vIGNodW5rcyB3ZSd2ZSB1c2VkLlxuICAgICAgZmlsZS51cGxvYWQucHJvZ3Jlc3MgPSBmaWxlLnVwbG9hZC5wcm9ncmVzcyAvIGZpbGUudXBsb2FkLnRvdGFsQ2h1bmtDb3VudDtcblxuICAgICAgdGhpcy5lbWl0KFxuICAgICAgICBcInVwbG9hZHByb2dyZXNzXCIsXG4gICAgICAgIGZpbGUsXG4gICAgICAgIGZpbGUudXBsb2FkLnByb2dyZXNzLFxuICAgICAgICBmaWxlLnVwbG9hZC5ieXRlc1NlbnRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgX2ZpbmlzaGVkVXBsb2FkaW5nKGZpbGVzLCB4aHIsIGUpIHtcbiAgICBsZXQgcmVzcG9uc2U7XG5cbiAgICBpZiAoZmlsZXNbMF0uc3RhdHVzID09PSBEcm9wem9uZS5DQU5DRUxFRCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh4aHIucmVzcG9uc2VUeXBlICE9PSBcImFycmF5YnVmZmVyXCIgJiYgeGhyLnJlc3BvbnNlVHlwZSAhPT0gXCJibG9iXCIpIHtcbiAgICAgIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dDtcblxuICAgICAgaWYgKFxuICAgICAgICB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJjb250ZW50LXR5cGVcIikgJiZcbiAgICAgICAgfnhoci5nZXRSZXNwb25zZUhlYWRlcihcImNvbnRlbnQtdHlwZVwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24vanNvblwiKVxuICAgICAgKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBlID0gZXJyb3I7XG4gICAgICAgICAgcmVzcG9uc2UgPSBcIkludmFsaWQgSlNPTiByZXNwb25zZSBmcm9tIHNlcnZlci5cIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZUZpbGVzVXBsb2FkUHJvZ3Jlc3MoZmlsZXMsIHhocik7XG5cbiAgICBpZiAoISgyMDAgPD0geGhyLnN0YXR1cyAmJiB4aHIuc3RhdHVzIDwgMzAwKSkge1xuICAgICAgdGhpcy5faGFuZGxlVXBsb2FkRXJyb3IoZmlsZXMsIHhociwgcmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZmlsZXNbMF0udXBsb2FkLmNodW5rZWQpIHtcbiAgICAgICAgZmlsZXNbMF0udXBsb2FkLmZpbmlzaGVkQ2h1bmtVcGxvYWQoXG4gICAgICAgICAgdGhpcy5fZ2V0Q2h1bmsoZmlsZXNbMF0sIHhociksXG4gICAgICAgICAgcmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ZpbmlzaGVkKGZpbGVzLCByZXNwb25zZSwgZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZVVwbG9hZEVycm9yKGZpbGVzLCB4aHIsIHJlc3BvbnNlKSB7XG4gICAgaWYgKGZpbGVzWzBdLnN0YXR1cyA9PT0gRHJvcHpvbmUuQ0FOQ0VMRUQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZmlsZXNbMF0udXBsb2FkLmNodW5rZWQgJiYgdGhpcy5vcHRpb25zLnJldHJ5Q2h1bmtzKSB7XG4gICAgICBsZXQgY2h1bmsgPSB0aGlzLl9nZXRDaHVuayhmaWxlc1swXSwgeGhyKTtcbiAgICAgIGlmIChjaHVuay5yZXRyaWVzKysgPCB0aGlzLm9wdGlvbnMucmV0cnlDaHVua3NMaW1pdCkge1xuICAgICAgICB0aGlzLl91cGxvYWREYXRhKGZpbGVzLCBbY2h1bmsuZGF0YUJsb2NrXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlJldHJpZWQgdGhpcyBjaHVuayB0b28gb2Z0ZW4uIEdpdmluZyB1cC5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fZXJyb3JQcm9jZXNzaW5nKFxuICAgICAgZmlsZXMsXG4gICAgICByZXNwb25zZSB8fFxuICAgICAgICB0aGlzLm9wdGlvbnMuZGljdFJlc3BvbnNlRXJyb3IucmVwbGFjZShcInt7c3RhdHVzQ29kZX19XCIsIHhoci5zdGF0dXMpLFxuICAgICAgeGhyXG4gICAgKTtcbiAgfVxuXG4gIHN1Ym1pdFJlcXVlc3QoeGhyLCBmb3JtRGF0YSwgZmlsZXMpIHtcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgIT0gMSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIkNhbm5vdCBzZW5kIHRoaXMgcmVxdWVzdCBiZWNhdXNlIHRoZSBYTUxIdHRwUmVxdWVzdC5yZWFkeVN0YXRlIGlzIG5vdCBPUEVORUQuXCJcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuYmluYXJ5Qm9keSkge1xuICAgICAgaWYgKGZpbGVzWzBdLnVwbG9hZC5jaHVua2VkKSB7XG4gICAgICAgIGNvbnN0IGNodW5rID0gdGhpcy5fZ2V0Q2h1bmsoZmlsZXNbMF0sIHhocik7XG4gICAgICAgIHhoci5zZW5kKGNodW5rLmRhdGFCbG9jay5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhoci5zZW5kKGZpbGVzWzBdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENhbGxlZCBpbnRlcm5hbGx5IHdoZW4gcHJvY2Vzc2luZyBpcyBmaW5pc2hlZC5cbiAgLy8gSW5kaXZpZHVhbCBjYWxsYmFja3MgaGF2ZSB0byBiZSBjYWxsZWQgaW4gdGhlIGFwcHJvcHJpYXRlIHNlY3Rpb25zLlxuICBfZmluaXNoZWQoZmlsZXMsIHJlc3BvbnNlVGV4dCwgZSkge1xuICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGZpbGUuc3RhdHVzID0gRHJvcHpvbmUuU1VDQ0VTUztcbiAgICAgIHRoaXMuZW1pdChcInN1Y2Nlc3NcIiwgZmlsZSwgcmVzcG9uc2VUZXh0LCBlKTtcbiAgICAgIHRoaXMuZW1pdChcImNvbXBsZXRlXCIsIGZpbGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnVwbG9hZE11bHRpcGxlKSB7XG4gICAgICB0aGlzLmVtaXQoXCJzdWNjZXNzbXVsdGlwbGVcIiwgZmlsZXMsIHJlc3BvbnNlVGV4dCwgZSk7XG4gICAgICB0aGlzLmVtaXQoXCJjb21wbGV0ZW11bHRpcGxlXCIsIGZpbGVzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9Qcm9jZXNzUXVldWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NRdWV1ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENhbGxlZCBpbnRlcm5hbGx5IHdoZW4gcHJvY2Vzc2luZyBpcyBmaW5pc2hlZC5cbiAgLy8gSW5kaXZpZHVhbCBjYWxsYmFja3MgaGF2ZSB0byBiZSBjYWxsZWQgaW4gdGhlIGFwcHJvcHJpYXRlIHNlY3Rpb25zLlxuICBfZXJyb3JQcm9jZXNzaW5nKGZpbGVzLCBtZXNzYWdlLCB4aHIpIHtcbiAgICBmb3IgKGxldCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICBmaWxlLnN0YXR1cyA9IERyb3B6b25lLkVSUk9SO1xuICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZmlsZSwgbWVzc2FnZSwgeGhyKTtcbiAgICAgIHRoaXMuZW1pdChcImNvbXBsZXRlXCIsIGZpbGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnVwbG9hZE11bHRpcGxlKSB7XG4gICAgICB0aGlzLmVtaXQoXCJlcnJvcm11bHRpcGxlXCIsIGZpbGVzLCBtZXNzYWdlLCB4aHIpO1xuICAgICAgdGhpcy5lbWl0KFwiY29tcGxldGVtdWx0aXBsZVwiLCBmaWxlcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvUHJvY2Vzc1F1ZXVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9jZXNzUXVldWUoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdXVpZHY0KCkge1xuICAgIHJldHVybiBcInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnJlcGxhY2UoXG4gICAgICAvW3h5XS9nLFxuICAgICAgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgbGV0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXG4gICAgICAgICAgdiA9IGMgPT09IFwieFwiID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbkRyb3B6b25lLmluaXRDbGFzcygpO1xuXG4vLyBUaGlzIGlzIGEgbWFwIG9mIG9wdGlvbnMgZm9yIHlvdXIgZGlmZmVyZW50IGRyb3B6b25lcy4gQWRkIGNvbmZpZ3VyYXRpb25zXG4vLyB0byB0aGlzIG9iamVjdCBmb3IgeW91ciBkaWZmZXJlbnQgZHJvcHpvbmUgZWxlbWVucy5cbi8vXG4vLyBFeGFtcGxlOlxuLy9cbi8vICAgICBEcm9wem9uZS5vcHRpb25zLm15RHJvcHpvbmVFbGVtZW50SWQgPSB7IG1heEZpbGVzaXplOiAxIH07XG4vL1xuLy8gQW5kIGluIGh0bWw6XG4vL1xuLy8gICAgIDxmb3JtIGFjdGlvbj1cIi91cGxvYWRcIiBpZD1cIm15LWRyb3B6b25lLWVsZW1lbnQtaWRcIiBjbGFzcz1cImRyb3B6b25lXCI+PC9mb3JtPlxuRHJvcHpvbmUub3B0aW9ucyA9IHt9O1xuXG4vLyBSZXR1cm5zIHRoZSBvcHRpb25zIGZvciBhbiBlbGVtZW50IG9yIHVuZGVmaW5lZCBpZiBub25lIGF2YWlsYWJsZS5cbkRyb3B6b25lLm9wdGlvbnNGb3JFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgLy8gR2V0IHRoZSBgRHJvcHpvbmUub3B0aW9ucy5lbGVtZW50SWRgIGZvciB0aGlzIGVsZW1lbnQgaWYgaXQgZXhpc3RzXG4gIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShcImlkXCIpKSB7XG4gICAgcmV0dXJuIERyb3B6b25lLm9wdGlvbnNbY2FtZWxpemUoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSldO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn07XG5cbi8vIEhvbGRzIGEgbGlzdCBvZiBhbGwgZHJvcHpvbmUgaW5zdGFuY2VzXG5Ecm9wem9uZS5pbnN0YW5jZXMgPSBbXTtcblxuLy8gUmV0dXJucyB0aGUgZHJvcHpvbmUgZm9yIGdpdmVuIGVsZW1lbnQgaWYgYW55XG5Ecm9wem9uZS5mb3JFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG4gIH1cbiAgaWYgKChlbGVtZW50ICE9IG51bGwgPyBlbGVtZW50LmRyb3B6b25lIDogdW5kZWZpbmVkKSA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJObyBEcm9wem9uZSBmb3VuZCBmb3IgZ2l2ZW4gZWxlbWVudC4gVGhpcyBpcyBwcm9iYWJseSBiZWNhdXNlIHlvdSdyZSB0cnlpbmcgdG8gYWNjZXNzIGl0IGJlZm9yZSBEcm9wem9uZSBoYWQgdGhlIHRpbWUgdG8gaW5pdGlhbGl6ZS4gVXNlIHRoZSBgaW5pdGAgb3B0aW9uIHRvIHNldHVwIGFueSBhZGRpdGlvbmFsIG9ic2VydmVycyBvbiB5b3VyIERyb3B6b25lLlwiXG4gICAgKTtcbiAgfVxuICByZXR1cm4gZWxlbWVudC5kcm9wem9uZTtcbn07XG5cbi8vIExvb2tzIGZvciBhbGwgLmRyb3B6b25lIGVsZW1lbnRzIGFuZCBjcmVhdGVzIGEgZHJvcHpvbmUgZm9yIHRoZW1cbkRyb3B6b25lLmRpc2NvdmVyID0gZnVuY3Rpb24gKCkge1xuICBsZXQgZHJvcHpvbmVzO1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCkge1xuICAgIGRyb3B6b25lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcHpvbmVcIik7XG4gIH0gZWxzZSB7XG4gICAgZHJvcHpvbmVzID0gW107XG4gICAgLy8gSUUgOihcbiAgICBsZXQgY2hlY2tFbGVtZW50cyA9IChlbGVtZW50cykgPT5cbiAgICAgICgoKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICBpZiAoLyhefCApZHJvcHpvbmUoJHwgKS8udGVzdChlbC5jbGFzc05hbWUpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChkcm9wem9uZXMucHVzaChlbCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSkoKTtcbiAgICBjaGVja0VsZW1lbnRzKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpKTtcbiAgICBjaGVja0VsZW1lbnRzKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKSk7XG4gIH1cblxuICByZXR1cm4gKCgpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgZHJvcHpvbmUgb2YgZHJvcHpvbmVzKSB7XG4gICAgICAvLyBDcmVhdGUgYSBkcm9wem9uZSB1bmxlc3MgYXV0byBkaXNjb3ZlciBoYXMgYmVlbiBkaXNhYmxlZCBmb3Igc3BlY2lmaWMgZWxlbWVudFxuICAgICAgaWYgKERyb3B6b25lLm9wdGlvbnNGb3JFbGVtZW50KGRyb3B6b25lKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgcmVzdWx0LnB1c2gobmV3IERyb3B6b25lKGRyb3B6b25lKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaCh1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSgpO1xufTtcblxuLy8gU29tZSBicm93c2VycyBzdXBwb3J0IGRyYWcgYW5kIGRyb2cgZnVuY3Rpb25hbGl0eSwgYnV0IG5vdCBjb3JyZWN0bHkuXG4vL1xuLy8gU28gSSBjcmVhdGVkIGEgYmxvY2tsaXN0IG9mIHVzZXJBZ2VudHMuIFllcywgeWVzLiBCcm93c2VyIHNuaWZmaW5nLCBJIGtub3cuXG4vLyBCdXQgd2hhdCB0byBkbyB3aGVuIGJyb3dzZXJzICp0aGVvcmV0aWNhbGx5KiBzdXBwb3J0IGFuIEFQSSwgYnV0IGNyYXNoXG4vLyB3aGVuIHVzaW5nIGl0LlxuLy9cbi8vIFRoaXMgaXMgYSBsaXN0IG9mIHJlZ3VsYXIgZXhwcmVzc2lvbnMgdGVzdGVkIGFnYWluc3QgbmF2aWdhdG9yLnVzZXJBZ2VudFxuLy9cbi8vICoqIEl0IHNob3VsZCBvbmx5IGJlIHVzZWQgb24gYnJvd3NlciB0aGF0ICpkbyogc3VwcG9ydCB0aGUgQVBJLCBidXRcbi8vIGluY29ycmVjdGx5ICoqXG5Ecm9wem9uZS5ibG9ja2VkQnJvd3NlcnMgPSBbXG4gIC8vIFRoZSBtYWMgb3MgYW5kIHdpbmRvd3MgcGhvbmUgdmVyc2lvbiBvZiBvcGVyYSAxMiBzZWVtcyB0byBoYXZlIGEgcHJvYmxlbSB3aXRoIHRoZSBGaWxlIGRyYWcnbidkcm9wIEFQSS5cbiAgL29wZXJhLiooTWFjaW50b3NofFdpbmRvd3MgUGhvbmUpLip2ZXJzaW9uXFwvMTIvaSxcbl07XG5cbi8vIENoZWNrcyBpZiB0aGUgYnJvd3NlciBpcyBzdXBwb3J0ZWRcbkRyb3B6b25lLmlzQnJvd3NlclN1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGNhcGFibGVCcm93c2VyID0gdHJ1ZTtcblxuICBpZiAoXG4gICAgd2luZG93LkZpbGUgJiZcbiAgICB3aW5kb3cuRmlsZVJlYWRlciAmJlxuICAgIHdpbmRvdy5GaWxlTGlzdCAmJlxuICAgIHdpbmRvdy5CbG9iICYmXG4gICAgd2luZG93LkZvcm1EYXRhICYmXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvclxuICApIHtcbiAgICBpZiAoIShcImNsYXNzTGlzdFwiIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpKSkge1xuICAgICAgY2FwYWJsZUJyb3dzZXIgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKERyb3B6b25lLmJsYWNrbGlzdGVkQnJvd3NlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBTaW5jZSB0aGlzIGhhcyBiZWVuIHJlbmFtZWQsIHRoaXMgbWFrZXMgc3VyZSB3ZSBkb24ndCBicmVhayBvbGRlclxuICAgICAgICAvLyBjb25maWd1cmF0aW9uLlxuICAgICAgICBEcm9wem9uZS5ibG9ja2VkQnJvd3NlcnMgPSBEcm9wem9uZS5ibGFja2xpc3RlZEJyb3dzZXJzO1xuICAgICAgfVxuICAgICAgLy8gVGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhlIEFQSSwgYnV0IG1heSBiZSBibG9ja2VkLlxuICAgICAgZm9yIChsZXQgcmVnZXggb2YgRHJvcHpvbmUuYmxvY2tlZEJyb3dzZXJzKSB7XG4gICAgICAgIGlmIChyZWdleC50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgY2FwYWJsZUJyb3dzZXIgPSBmYWxzZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjYXBhYmxlQnJvd3NlciA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGNhcGFibGVCcm93c2VyO1xufTtcblxuRHJvcHpvbmUuZGF0YVVSSXRvQmxvYiA9IGZ1bmN0aW9uIChkYXRhVVJJKSB7XG4gIC8vIGNvbnZlcnQgYmFzZTY0IHRvIHJhdyBiaW5hcnkgZGF0YSBoZWxkIGluIGEgc3RyaW5nXG4gIC8vIGRvZXNuJ3QgaGFuZGxlIFVSTEVuY29kZWQgRGF0YVVSSXMgLSBzZWUgU08gYW5zd2VyICM2ODUwMjc2IGZvciBjb2RlIHRoYXQgZG9lcyB0aGlzXG4gIGxldCBieXRlU3RyaW5nID0gYXRvYihkYXRhVVJJLnNwbGl0KFwiLFwiKVsxXSk7XG5cbiAgLy8gc2VwYXJhdGUgb3V0IHRoZSBtaW1lIGNvbXBvbmVudFxuICBsZXQgbWltZVN0cmluZyA9IGRhdGFVUkkuc3BsaXQoXCIsXCIpWzBdLnNwbGl0KFwiOlwiKVsxXS5zcGxpdChcIjtcIilbMF07XG5cbiAgLy8gd3JpdGUgdGhlIGJ5dGVzIG9mIHRoZSBzdHJpbmcgdG8gYW4gQXJyYXlCdWZmZXJcbiAgbGV0IGFiID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcbiAgbGV0IGlhID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xuICBmb3IgKFxuICAgIGxldCBpID0gMCwgZW5kID0gYnl0ZVN0cmluZy5sZW5ndGgsIGFzYyA9IDAgPD0gZW5kO1xuICAgIGFzYyA/IGkgPD0gZW5kIDogaSA+PSBlbmQ7XG4gICAgYXNjID8gaSsrIDogaS0tXG4gICkge1xuICAgIGlhW2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICB9XG5cbiAgLy8gd3JpdGUgdGhlIEFycmF5QnVmZmVyIHRvIGEgYmxvYlxuICByZXR1cm4gbmV3IEJsb2IoW2FiXSwgeyB0eXBlOiBtaW1lU3RyaW5nIH0pO1xufTtcblxuLy8gUmV0dXJucyBhbiBhcnJheSB3aXRob3V0IHRoZSByZWplY3RlZCBpdGVtXG5jb25zdCB3aXRob3V0ID0gKGxpc3QsIHJlamVjdGVkSXRlbSkgPT5cbiAgbGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHJlamVjdGVkSXRlbSkubWFwKChpdGVtKSA9PiBpdGVtKTtcblxuLy8gYWJjLWRlZl9naGkgLT4gYWJjRGVmR2hpXG5jb25zdCBjYW1lbGl6ZSA9IChzdHIpID0+XG4gIHN0ci5yZXBsYWNlKC9bXFwtX10oXFx3KS9nLCAobWF0Y2gpID0+IG1hdGNoLmNoYXJBdCgxKS50b1VwcGVyQ2FzZSgpKTtcblxuLy8gQ3JlYXRlcyBhbiBlbGVtZW50IGZyb20gc3RyaW5nXG5Ecm9wem9uZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHN0cmluZykge1xuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmlubmVySFRNTCA9IHN0cmluZztcbiAgcmV0dXJuIGRpdi5jaGlsZE5vZGVzWzBdO1xufTtcblxuLy8gVGVzdHMgaWYgZ2l2ZW4gZWxlbWVudCBpcyBpbnNpZGUgKG9yIHNpbXBseSBpcykgdGhlIGNvbnRhaW5lclxuRHJvcHpvbmUuZWxlbWVudEluc2lkZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgaWYgKGVsZW1lbnQgPT09IGNvbnRhaW5lcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIENvZmZlZXNjcmlwdCBkb2Vzbid0IHN1cHBvcnQgZG8vd2hpbGUgbG9vcHNcbiAgd2hpbGUgKChlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlKSkge1xuICAgIGlmIChlbGVtZW50ID09PSBjb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5Ecm9wem9uZS5nZXRFbGVtZW50ID0gZnVuY3Rpb24gKGVsLCBuYW1lKSB7XG4gIGxldCBlbGVtZW50O1xuICBpZiAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICB9IGVsc2UgaWYgKGVsLm5vZGVUeXBlICE9IG51bGwpIHtcbiAgICBlbGVtZW50ID0gZWw7XG4gIH1cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkIFxcYCR7bmFtZX1cXGAgb3B0aW9uIHByb3ZpZGVkLiBQbGVhc2UgcHJvdmlkZSBhIENTUyBzZWxlY3RvciBvciBhIHBsYWluIEhUTUwgZWxlbWVudC5gXG4gICAgKTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbkRyb3B6b25lLmdldEVsZW1lbnRzID0gZnVuY3Rpb24gKGVscywgbmFtZSkge1xuICBsZXQgZWwsIGVsZW1lbnRzO1xuICBpZiAoZWxzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBlbGVtZW50cyA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKGVsIG9mIGVscykge1xuICAgICAgICBlbGVtZW50cy5wdXNoKHRoaXMuZ2V0RWxlbWVudChlbCwgbmFtZSkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVsZW1lbnRzID0gbnVsbDtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVscyA9PT0gXCJzdHJpbmdcIikge1xuICAgIGVsZW1lbnRzID0gW107XG4gICAgZm9yIChlbCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVscykpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWwpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChlbHMubm9kZVR5cGUgIT0gbnVsbCkge1xuICAgIGVsZW1lbnRzID0gW2Vsc107XG4gIH1cblxuICBpZiAoZWxlbWVudHMgPT0gbnVsbCB8fCAhZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEludmFsaWQgXFxgJHtuYW1lfVxcYCBvcHRpb24gcHJvdmlkZWQuIFBsZWFzZSBwcm92aWRlIGEgQ1NTIHNlbGVjdG9yLCBhIHBsYWluIEhUTUwgZWxlbWVudCBvciBhIGxpc3Qgb2YgdGhvc2UuYFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG4vLyBBc2tzIHRoZSB1c2VyIHRoZSBxdWVzdGlvbiBhbmQgY2FsbHMgYWNjZXB0ZWQgb3IgcmVqZWN0ZWQgYWNjb3JkaW5nbHlcbi8vXG4vLyBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBqdXN0IHVzZXMgYHdpbmRvdy5jb25maXJtYCBhbmQgdGhlbiBjYWxscyB0aGVcbi8vIGFwcHJvcHJpYXRlIGNhbGxiYWNrLlxuRHJvcHpvbmUuY29uZmlybSA9IGZ1bmN0aW9uIChxdWVzdGlvbiwgYWNjZXB0ZWQsIHJlamVjdGVkKSB7XG4gIGlmICh3aW5kb3cuY29uZmlybShxdWVzdGlvbikpIHtcbiAgICByZXR1cm4gYWNjZXB0ZWQoKTtcbiAgfSBlbHNlIGlmIChyZWplY3RlZCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHJlamVjdGVkKCk7XG4gIH1cbn07XG5cbi8vIFZhbGlkYXRlcyB0aGUgbWltZSB0eXBlIGxpa2UgdGhpczpcbi8vXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0hUTUwvRWxlbWVudC9pbnB1dCNhdHRyLWFjY2VwdFxuRHJvcHpvbmUuaXNWYWxpZEZpbGUgPSBmdW5jdGlvbiAoZmlsZSwgYWNjZXB0ZWRGaWxlcykge1xuICBpZiAoIWFjY2VwdGVkRmlsZXMpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBJZiB0aGVyZSBhcmUgbm8gYWNjZXB0ZWQgbWltZSB0eXBlcywgaXQncyBPS1xuICBhY2NlcHRlZEZpbGVzID0gYWNjZXB0ZWRGaWxlcy5zcGxpdChcIixcIik7XG5cbiAgbGV0IG1pbWVUeXBlID0gZmlsZS50eXBlO1xuICBsZXQgYmFzZU1pbWVUeXBlID0gbWltZVR5cGUucmVwbGFjZSgvXFwvLiokLywgXCJcIik7XG5cbiAgZm9yIChsZXQgdmFsaWRUeXBlIG9mIGFjY2VwdGVkRmlsZXMpIHtcbiAgICB2YWxpZFR5cGUgPSB2YWxpZFR5cGUudHJpbSgpO1xuICAgIGlmICh2YWxpZFR5cGUuY2hhckF0KDApID09PSBcIi5cIikge1xuICAgICAgaWYgKFxuICAgICAgICBmaWxlLm5hbWVcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5pbmRleE9mKFxuICAgICAgICAgICAgdmFsaWRUeXBlLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBmaWxlLm5hbWUubGVuZ3RoIC0gdmFsaWRUeXBlLmxlbmd0aFxuICAgICAgICAgICkgIT09IC0xXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgvXFwvXFwqJC8udGVzdCh2YWxpZFR5cGUpKSB7XG4gICAgICAvLyBUaGlzIGlzIHNvbWV0aGluZyBsaWtlIGEgaW1hZ2UvKiBtaW1lIHR5cGVcbiAgICAgIGlmIChiYXNlTWltZVR5cGUgPT09IHZhbGlkVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCBcIlwiKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1pbWVUeXBlID09PSB2YWxpZFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8gQXVnbWVudCBqUXVlcnlcbmlmICh0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiICYmIGpRdWVyeSAhPT0gbnVsbCkge1xuICBqUXVlcnkuZm4uZHJvcHpvbmUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBEcm9wem9uZSh0aGlzLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuLy8gRHJvcHpvbmUgZmlsZSBzdGF0dXMgY29kZXNcbkRyb3B6b25lLkFEREVEID0gXCJhZGRlZFwiO1xuXG5Ecm9wem9uZS5RVUVVRUQgPSBcInF1ZXVlZFwiO1xuLy8gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBOb3csIGlmIGEgZmlsZSBpcyBhY2NlcHRlZCwgaXQncyBlaXRoZXIgcXVldWVkXG4vLyBvciB1cGxvYWRpbmcuXG5Ecm9wem9uZS5BQ0NFUFRFRCA9IERyb3B6b25lLlFVRVVFRDtcblxuRHJvcHpvbmUuVVBMT0FESU5HID0gXCJ1cGxvYWRpbmdcIjtcbkRyb3B6b25lLlBST0NFU1NJTkcgPSBEcm9wem9uZS5VUExPQURJTkc7IC8vIGFsaWFzXG5cbkRyb3B6b25lLkNBTkNFTEVEID0gXCJjYW5jZWxlZFwiO1xuRHJvcHpvbmUuRVJST1IgPSBcImVycm9yXCI7XG5Ecm9wem9uZS5TVUNDRVNTID0gXCJzdWNjZXNzXCI7XG5cbi8qXG5cbiBCdWdmaXggZm9yIGlPUyA2IGFuZCA3XG4gU291cmNlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExOTI5MDk5L2h0bWw1LWNhbnZhcy1kcmF3aW1hZ2UtcmF0aW8tYnVnLWlvc1xuIGJhc2VkIG9uIHRoZSB3b3JrIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9zdG9taXRhL2lvcy1pbWFnZWZpbGUtbWVnYXBpeGVsXG5cbiAqL1xuXG4vLyBEZXRlY3RpbmcgdmVydGljYWwgc3F1YXNoIGluIGxvYWRlZCBpbWFnZS5cbi8vIEZpeGVzIGEgYnVnIHdoaWNoIHNxdWFzaCBpbWFnZSB2ZXJ0aWNhbGx5IHdoaWxlIGRyYXdpbmcgaW50byBjYW52YXMgZm9yIHNvbWUgaW1hZ2VzLlxuLy8gVGhpcyBpcyBhIGJ1ZyBpbiBpT1M2IGRldmljZXMuIFRoaXMgZnVuY3Rpb24gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc3RvbWl0YS9pb3MtaW1hZ2VmaWxlLW1lZ2FwaXhlbFxubGV0IGRldGVjdFZlcnRpY2FsU3F1YXNoID0gZnVuY3Rpb24gKGltZykge1xuICBsZXQgaXcgPSBpbWcubmF0dXJhbFdpZHRoO1xuICBsZXQgaWggPSBpbWcubmF0dXJhbEhlaWdodDtcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIGNhbnZhcy53aWR0aCA9IDE7XG4gIGNhbnZhcy5oZWlnaHQgPSBpaDtcbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgbGV0IHsgZGF0YSB9ID0gY3R4LmdldEltYWdlRGF0YSgxLCAwLCAxLCBpaCk7XG5cbiAgLy8gc2VhcmNoIGltYWdlIGVkZ2UgcGl4ZWwgcG9zaXRpb24gaW4gY2FzZSBpdCBpcyBzcXVhc2hlZCB2ZXJ0aWNhbGx5LlxuICBsZXQgc3kgPSAwO1xuICBsZXQgZXkgPSBpaDtcbiAgbGV0IHB5ID0gaWg7XG4gIHdoaWxlIChweSA+IHN5KSB7XG4gICAgbGV0IGFscGhhID0gZGF0YVsocHkgLSAxKSAqIDQgKyAzXTtcblxuICAgIGlmIChhbHBoYSA9PT0gMCkge1xuICAgICAgZXkgPSBweTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3kgPSBweTtcbiAgICB9XG5cbiAgICBweSA9IChleSArIHN5KSA+PiAxO1xuICB9XG4gIGxldCByYXRpbyA9IHB5IC8gaWg7XG5cbiAgaWYgKHJhdGlvID09PSAwKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJhdGlvO1xuICB9XG59O1xuXG4vLyBBIHJlcGxhY2VtZW50IGZvciBjb250ZXh0LmRyYXdJbWFnZVxuLy8gKGFyZ3MgYXJlIGZvciBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uKS5cbnZhciBkcmF3SW1hZ2VJT1NGaXggPSBmdW5jdGlvbiAoY3R4LCBpbWcsIHN4LCBzeSwgc3csIHNoLCBkeCwgZHksIGR3LCBkaCkge1xuICBsZXQgdmVydFNxdWFzaFJhdGlvID0gZGV0ZWN0VmVydGljYWxTcXVhc2goaW1nKTtcbiAgcmV0dXJuIGN0eC5kcmF3SW1hZ2UoaW1nLCBzeCwgc3ksIHN3LCBzaCwgZHgsIGR5LCBkdywgZGggLyB2ZXJ0U3F1YXNoUmF0aW8pO1xufTtcblxuLy8gQmFzZWQgb24gTWluaWZ5SnBlZ1xuLy8gU291cmNlOiBodHRwOi8vd3d3LnBlcnJ5LmN6L2ZpbGVzL0V4aWZSZXN0b3Jlci5qc1xuLy8gaHR0cDovL2VsaWNvbi5ibG9nNTcuZmMyLmNvbS9ibG9nLWVudHJ5LTIwNi5odG1sXG5jbGFzcyBFeGlmUmVzdG9yZSB7XG4gIHN0YXRpYyBpbml0Q2xhc3MoKSB7XG4gICAgdGhpcy5LRVlfU1RSID1cbiAgICAgIFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtcbiAgfVxuXG4gIHN0YXRpYyBlbmNvZGU2NChpbnB1dCkge1xuICAgIGxldCBvdXRwdXQgPSBcIlwiO1xuICAgIGxldCBjaHIxID0gdW5kZWZpbmVkO1xuICAgIGxldCBjaHIyID0gdW5kZWZpbmVkO1xuICAgIGxldCBjaHIzID0gXCJcIjtcbiAgICBsZXQgZW5jMSA9IHVuZGVmaW5lZDtcbiAgICBsZXQgZW5jMiA9IHVuZGVmaW5lZDtcbiAgICBsZXQgZW5jMyA9IHVuZGVmaW5lZDtcbiAgICBsZXQgZW5jNCA9IFwiXCI7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjaHIxID0gaW5wdXRbaSsrXTtcbiAgICAgIGNocjIgPSBpbnB1dFtpKytdO1xuICAgICAgY2hyMyA9IGlucHV0W2krK107XG4gICAgICBlbmMxID0gY2hyMSA+PiAyO1xuICAgICAgZW5jMiA9ICgoY2hyMSAmIDMpIDw8IDQpIHwgKGNocjIgPj4gNCk7XG4gICAgICBlbmMzID0gKChjaHIyICYgMTUpIDw8IDIpIHwgKGNocjMgPj4gNik7XG4gICAgICBlbmM0ID0gY2hyMyAmIDYzO1xuICAgICAgaWYgKGlzTmFOKGNocjIpKSB7XG4gICAgICAgIGVuYzMgPSBlbmM0ID0gNjQ7XG4gICAgICB9IGVsc2UgaWYgKGlzTmFOKGNocjMpKSB7XG4gICAgICAgIGVuYzQgPSA2NDtcbiAgICAgIH1cbiAgICAgIG91dHB1dCA9XG4gICAgICAgIG91dHB1dCArXG4gICAgICAgIHRoaXMuS0VZX1NUUi5jaGFyQXQoZW5jMSkgK1xuICAgICAgICB0aGlzLktFWV9TVFIuY2hhckF0KGVuYzIpICtcbiAgICAgICAgdGhpcy5LRVlfU1RSLmNoYXJBdChlbmMzKSArXG4gICAgICAgIHRoaXMuS0VZX1NUUi5jaGFyQXQoZW5jNCk7XG4gICAgICBjaHIxID0gY2hyMiA9IGNocjMgPSBcIlwiO1xuICAgICAgZW5jMSA9IGVuYzIgPSBlbmMzID0gZW5jNCA9IFwiXCI7XG4gICAgICBpZiAoIShpIDwgaW5wdXQubGVuZ3RoKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIHN0YXRpYyByZXN0b3JlKG9yaWdGaWxlQmFzZTY0LCByZXNpemVkRmlsZUJhc2U2NCkge1xuICAgIGlmICghb3JpZ0ZpbGVCYXNlNjQubWF0Y2goXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiKSkge1xuICAgICAgcmV0dXJuIHJlc2l6ZWRGaWxlQmFzZTY0O1xuICAgIH1cbiAgICBsZXQgcmF3SW1hZ2UgPSB0aGlzLmRlY29kZTY0KFxuICAgICAgb3JpZ0ZpbGVCYXNlNjQucmVwbGFjZShcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIsIFwiXCIpXG4gICAgKTtcbiAgICBsZXQgc2VnbWVudHMgPSB0aGlzLnNsaWNlMlNlZ21lbnRzKHJhd0ltYWdlKTtcbiAgICBsZXQgaW1hZ2UgPSB0aGlzLmV4aWZNYW5pcHVsYXRpb24ocmVzaXplZEZpbGVCYXNlNjQsIHNlZ21lbnRzKTtcbiAgICByZXR1cm4gYGRhdGE6aW1hZ2UvanBlZztiYXNlNjQsJHt0aGlzLmVuY29kZTY0KGltYWdlKX1gO1xuICB9XG5cbiAgc3RhdGljIGV4aWZNYW5pcHVsYXRpb24ocmVzaXplZEZpbGVCYXNlNjQsIHNlZ21lbnRzKSB7XG4gICAgbGV0IGV4aWZBcnJheSA9IHRoaXMuZ2V0RXhpZkFycmF5KHNlZ21lbnRzKTtcbiAgICBsZXQgbmV3SW1hZ2VBcnJheSA9IHRoaXMuaW5zZXJ0RXhpZihyZXNpemVkRmlsZUJhc2U2NCwgZXhpZkFycmF5KTtcbiAgICBsZXQgYUJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KG5ld0ltYWdlQXJyYXkpO1xuICAgIHJldHVybiBhQnVmZmVyO1xuICB9XG5cbiAgc3RhdGljIGdldEV4aWZBcnJheShzZWdtZW50cykge1xuICAgIGxldCBzZWcgPSB1bmRlZmluZWQ7XG4gICAgbGV0IHggPSAwO1xuICAgIHdoaWxlICh4IDwgc2VnbWVudHMubGVuZ3RoKSB7XG4gICAgICBzZWcgPSBzZWdtZW50c1t4XTtcbiAgICAgIGlmICgoc2VnWzBdID09PSAyNTUpICYgKHNlZ1sxXSA9PT0gMjI1KSkge1xuICAgICAgICByZXR1cm4gc2VnO1xuICAgICAgfVxuICAgICAgeCsrO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBzdGF0aWMgaW5zZXJ0RXhpZihyZXNpemVkRmlsZUJhc2U2NCwgZXhpZkFycmF5KSB7XG4gICAgbGV0IGltYWdlRGF0YSA9IHJlc2l6ZWRGaWxlQmFzZTY0LnJlcGxhY2UoXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiLCBcIlwiKTtcbiAgICBsZXQgYnVmID0gdGhpcy5kZWNvZGU2NChpbWFnZURhdGEpO1xuICAgIGxldCBzZXBhcmF0ZVBvaW50ID0gYnVmLmluZGV4T2YoMjU1LCAzKTtcbiAgICBsZXQgbWFlID0gYnVmLnNsaWNlKDAsIHNlcGFyYXRlUG9pbnQpO1xuICAgIGxldCBhdG8gPSBidWYuc2xpY2Uoc2VwYXJhdGVQb2ludCk7XG4gICAgbGV0IGFycmF5ID0gbWFlO1xuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KGV4aWZBcnJheSk7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoYXRvKTtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBzdGF0aWMgc2xpY2UyU2VnbWVudHMocmF3SW1hZ2VBcnJheSkge1xuICAgIGxldCBoZWFkID0gMDtcbiAgICBsZXQgc2VnbWVudHMgPSBbXTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIGxlbmd0aDtcbiAgICAgIGlmICgocmF3SW1hZ2VBcnJheVtoZWFkXSA9PT0gMjU1KSAmIChyYXdJbWFnZUFycmF5W2hlYWQgKyAxXSA9PT0gMjE4KSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICgocmF3SW1hZ2VBcnJheVtoZWFkXSA9PT0gMjU1KSAmIChyYXdJbWFnZUFycmF5W2hlYWQgKyAxXSA9PT0gMjE2KSkge1xuICAgICAgICBoZWFkICs9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZW5ndGggPSByYXdJbWFnZUFycmF5W2hlYWQgKyAyXSAqIDI1NiArIHJhd0ltYWdlQXJyYXlbaGVhZCArIDNdO1xuICAgICAgICBsZXQgZW5kUG9pbnQgPSBoZWFkICsgbGVuZ3RoICsgMjtcbiAgICAgICAgbGV0IHNlZyA9IHJhd0ltYWdlQXJyYXkuc2xpY2UoaGVhZCwgZW5kUG9pbnQpO1xuICAgICAgICBzZWdtZW50cy5wdXNoKHNlZyk7XG4gICAgICAgIGhlYWQgPSBlbmRQb2ludDtcbiAgICAgIH1cbiAgICAgIGlmIChoZWFkID4gcmF3SW1hZ2VBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWdtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBkZWNvZGU2NChpbnB1dCkge1xuICAgIGxldCBvdXRwdXQgPSBcIlwiO1xuICAgIGxldCBjaHIxID0gdW5kZWZpbmVkO1xuICAgIGxldCBjaHIyID0gdW5kZWZpbmVkO1xuICAgIGxldCBjaHIzID0gXCJcIjtcbiAgICBsZXQgZW5jMSA9IHVuZGVmaW5lZDtcbiAgICBsZXQgZW5jMiA9IHVuZGVmaW5lZDtcbiAgICBsZXQgZW5jMyA9IHVuZGVmaW5lZDtcbiAgICBsZXQgZW5jNCA9IFwiXCI7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBidWYgPSBbXTtcbiAgICAvLyByZW1vdmUgYWxsIGNoYXJhY3RlcnMgdGhhdCBhcmUgbm90IEEtWiwgYS16LCAwLTksICssIC8sIG9yID1cbiAgICBsZXQgYmFzZTY0dGVzdCA9IC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZztcbiAgICBpZiAoYmFzZTY0dGVzdC5leGVjKGlucHV0KSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIlRoZXJlIHdlcmUgaW52YWxpZCBiYXNlNjQgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQgdGV4dC5cXG5WYWxpZCBiYXNlNjQgY2hhcmFjdGVycyBhcmUgQS1aLCBhLXosIDAtOSwgJysnLCAnLycsYW5kICc9J1xcbkV4cGVjdCBlcnJvcnMgaW4gZGVjb2RpbmcuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csIFwiXCIpO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBlbmMxID0gdGhpcy5LRVlfU1RSLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgZW5jMiA9IHRoaXMuS0VZX1NUUi5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcbiAgICAgIGVuYzMgPSB0aGlzLktFWV9TVFIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG4gICAgICBlbmM0ID0gdGhpcy5LRVlfU1RSLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgY2hyMSA9IChlbmMxIDw8IDIpIHwgKGVuYzIgPj4gNCk7XG4gICAgICBjaHIyID0gKChlbmMyICYgMTUpIDw8IDQpIHwgKGVuYzMgPj4gMik7XG4gICAgICBjaHIzID0gKChlbmMzICYgMykgPDwgNikgfCBlbmM0O1xuICAgICAgYnVmLnB1c2goY2hyMSk7XG4gICAgICBpZiAoZW5jMyAhPT0gNjQpIHtcbiAgICAgICAgYnVmLnB1c2goY2hyMik7XG4gICAgICB9XG4gICAgICBpZiAoZW5jNCAhPT0gNjQpIHtcbiAgICAgICAgYnVmLnB1c2goY2hyMyk7XG4gICAgICB9XG4gICAgICBjaHIxID0gY2hyMiA9IGNocjMgPSBcIlwiO1xuICAgICAgZW5jMSA9IGVuYzIgPSBlbmMzID0gZW5jNCA9IFwiXCI7XG4gICAgICBpZiAoIShpIDwgaW5wdXQubGVuZ3RoKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxufVxuRXhpZlJlc3RvcmUuaW5pdENsYXNzKCk7XG5cbi8qXG4gKiBjb250ZW50bG9hZGVkLmpzXG4gKlxuICogQXV0aG9yOiBEaWVnbyBQZXJpbmkgKGRpZWdvLnBlcmluaSBhdCBnbWFpbC5jb20pXG4gKiBTdW1tYXJ5OiBjcm9zcy1icm93c2VyIHdyYXBwZXIgZm9yIERPTUNvbnRlbnRMb2FkZWRcbiAqIFVwZGF0ZWQ6IDIwMTAxMDIwXG4gKiBMaWNlbnNlOiBNSVRcbiAqIFZlcnNpb246IDEuMlxuICpcbiAqIFVSTDpcbiAqIGh0dHA6Ly9qYXZhc2NyaXB0Lm53Ym94LmNvbS9Db250ZW50TG9hZGVkL1xuICogaHR0cDovL2phdmFzY3JpcHQubndib3guY29tL0NvbnRlbnRMb2FkZWQvTUlULUxJQ0VOU0VcbiAqL1xuXG4vLyBAd2luIHdpbmRvdyByZWZlcmVuY2Vcbi8vIEBmbiBmdW5jdGlvbiByZWZlcmVuY2VcbmxldCBjb250ZW50TG9hZGVkID0gZnVuY3Rpb24gKHdpbiwgZm4pIHtcbiAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgbGV0IHRvcCA9IHRydWU7XG4gIGxldCBkb2MgPSB3aW4uZG9jdW1lbnQ7XG4gIGxldCByb290ID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgbGV0IGFkZCA9IGRvYy5hZGRFdmVudExpc3RlbmVyID8gXCJhZGRFdmVudExpc3RlbmVyXCIgOiBcImF0dGFjaEV2ZW50XCI7XG4gIGxldCByZW0gPSBkb2MuYWRkRXZlbnRMaXN0ZW5lciA/IFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiIDogXCJkZXRhY2hFdmVudFwiO1xuICBsZXQgcHJlID0gZG9jLmFkZEV2ZW50TGlzdGVuZXIgPyBcIlwiIDogXCJvblwiO1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudHlwZSA9PT0gXCJyZWFkeXN0YXRlY2hhbmdlXCIgJiYgZG9jLnJlYWR5U3RhdGUgIT09IFwiY29tcGxldGVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAoZS50eXBlID09PSBcImxvYWRcIiA/IHdpbiA6IGRvYylbcmVtXShwcmUgKyBlLnR5cGUsIGluaXQsIGZhbHNlKTtcbiAgICBpZiAoIWRvbmUgJiYgKGRvbmUgPSB0cnVlKSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwod2luLCBlLnR5cGUgfHwgZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBwb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByb290LmRvU2Nyb2xsKFwibGVmdFwiKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXRUaW1lb3V0KHBvbGwsIDUwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGluaXQoXCJwb2xsXCIpO1xuICB9O1xuXG4gIGlmIChkb2MucmVhZHlTdGF0ZSAhPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgaWYgKGRvYy5jcmVhdGVFdmVudE9iamVjdCAmJiByb290LmRvU2Nyb2xsKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0b3AgPSAhd2luLmZyYW1lRWxlbWVudDtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgICAgaWYgKHRvcCkge1xuICAgICAgICBwb2xsKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGRvY1thZGRdKHByZSArIFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0LCBmYWxzZSk7XG4gICAgZG9jW2FkZF0ocHJlICsgXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGluaXQsIGZhbHNlKTtcbiAgICByZXR1cm4gd2luW2FkZF0ocHJlICsgXCJsb2FkXCIsIGluaXQsIGZhbHNlKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gX19ndWFyZF9fKHZhbHVlLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB2YWx1ZSAhPT0gbnVsbFxuICAgID8gdHJhbnNmb3JtKHZhbHVlKVxuICAgIDogdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gX19ndWFyZE1ldGhvZF9fKG9iaiwgbWV0aG9kTmFtZSwgdHJhbnNmb3JtKSB7XG4gIGlmIChcbiAgICB0eXBlb2Ygb2JqICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgb2JqICE9PSBudWxsICYmXG4gICAgdHlwZW9mIG9ialttZXRob2ROYW1lXSA9PT0gXCJmdW5jdGlvblwiXG4gICkge1xuICAgIHJldHVybiB0cmFuc2Zvcm0ob2JqLCBtZXRob2ROYW1lKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydCB7IERyb3B6b25lIH07XG4iLCAiLy8gVGhlIEVtaXR0ZXIgY2xhc3MgcHJvdmlkZXMgdGhlIGFiaWxpdHkgdG8gY2FsbCBgLm9uKClgIG9uIERyb3B6b25lIHRvIGxpc3RlblxuLy8gdG8gZXZlbnRzLlxuLy8gSXQgaXMgc3Ryb25nbHkgYmFzZWQgb24gY29tcG9uZW50J3MgZW1pdHRlciBjbGFzcywgYW5kIEkgcmVtb3ZlZCB0aGVcbi8vIGZ1bmN0aW9uYWxpdHkgYmVjYXVzZSBvZiB0aGUgZGVwZW5kZW5jeSBoZWxsIHdpdGggZGlmZmVyZW50IGZyYW1ld29ya3MuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIHtcbiAgLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBnaXZlbiBldmVudFxuICBvbihldmVudCwgZm4pIHtcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gICAgLy8gQ3JlYXRlIG5hbWVzcGFjZSBmb3IgdGhpcyBldmVudFxuICAgIGlmICghdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSkge1xuICAgICAgdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsYmFja3NbZXZlbnRdLnB1c2goZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZW1pdChldmVudCwgLi4uYXJncykge1xuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgICBsZXQgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcblxuICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgIGZvciAobGV0IGNhbGxiYWNrIG9mIGNhbGxiYWNrcykge1xuICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdHJpZ2dlciBhIGNvcnJlc3BvbmRpbmcgRE9NIGV2ZW50XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIHRoaXMubWFrZUV2ZW50KFwiZHJvcHpvbmU6XCIgKyBldmVudCwgeyBhcmdzOiBhcmdzIH0pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1ha2VFdmVudChldmVudE5hbWUsIGRldGFpbCkge1xuICAgIGxldCBwYXJhbXMgPSB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGRldGFpbDogZGV0YWlsIH07XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgcGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSUUgMTEgc3VwcG9ydFxuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50L0N1c3RvbUV2ZW50XG4gICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoXG4gICAgICAgIGV2ZW50TmFtZSxcbiAgICAgICAgcGFyYW1zLmJ1YmJsZXMsXG4gICAgICAgIHBhcmFtcy5jYW5jZWxhYmxlLFxuICAgICAgICBwYXJhbXMuZGV0YWlsXG4gICAgICApO1xuICAgICAgcmV0dXJuIGV2dDtcbiAgICB9XG4gIH1cblxuICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgZm9yIGdpdmVuIGV2ZW50LiBJZiBmbiBpcyBub3QgcHJvdmlkZWQsIGFsbCBldmVudFxuICAvLyBsaXN0ZW5lcnMgZm9yIHRoYXQgZXZlbnQgd2lsbCBiZSByZW1vdmVkLiBJZiBuZWl0aGVyIGlzIHByb3ZpZGVkLCBhbGxcbiAgLy8gZXZlbnQgbGlzdGVuZXJzIHdpbGwgYmUgcmVtb3ZlZC5cbiAgb2ZmKGV2ZW50LCBmbikge1xuICAgIGlmICghdGhpcy5fY2FsbGJhY2tzIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgICBsZXQgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgICBpZiAoIWNhbGxiYWNrcykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjYWxsYmFjayA9IGNhbGxiYWNrc1tpXTtcbiAgICAgIGlmIChjYWxsYmFjayA9PT0gZm4pIHtcbiAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsICJpbXBvcnQgRHJvcHpvbmUgZnJvbSBcIi4vZHJvcHpvbmVcIjtcbmltcG9ydCBkZWZhdWx0UHJldmlld1RlbXBsYXRlIGZyb20gXCJidW5kbGUtdGV4dDouL3ByZXZpZXctdGVtcGxhdGUuaHRtbFwiO1xuXG5sZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBIYXMgdG8gYmUgc3BlY2lmaWVkIG9uIGVsZW1lbnRzIG90aGVyIHRoYW4gZm9ybSAob3Igd2hlbiB0aGUgZm9ybSBkb2Vzbid0XG4gICAqIGhhdmUgYW4gYGFjdGlvbmAgYXR0cmlidXRlKS5cbiAgICpcbiAgICogWW91IGNhbiBhbHNvIHByb3ZpZGUgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggYGZpbGVzYCBhbmRcbiAgICogYGRhdGFCbG9ja3NgICBhbmQgbXVzdCByZXR1cm4gdGhlIHVybCBhcyBzdHJpbmcuXG4gICAqL1xuICB1cmw6IG51bGwsXG5cbiAgLyoqXG4gICAqIENhbiBiZSBjaGFuZ2VkIHRvIGBcInB1dFwiYCBpZiBuZWNlc3NhcnkuIFlvdSBjYW4gYWxzbyBwcm92aWRlIGEgZnVuY3Rpb25cbiAgICogdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIGBmaWxlc2AgYW5kIG11c3QgcmV0dXJuIHRoZSBtZXRob2QgKHNpbmNlIGB2My4xMi4wYCkuXG4gICAqL1xuICBtZXRob2Q6IFwicG9zdFwiLFxuXG4gIC8qKlxuICAgKiBXaWxsIGJlIHNldCBvbiB0aGUgWEhSZXF1ZXN0LlxuICAgKi9cbiAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcblxuICAvKipcbiAgICogVGhlIHRpbWVvdXQgZm9yIHRoZSBYSFIgcmVxdWVzdHMgaW4gbWlsbGlzZWNvbmRzIChzaW5jZSBgdjQuNC4wYCkuXG4gICAqIElmIHNldCB0byBudWxsIG9yIDAsIG5vIHRpbWVvdXQgaXMgZ29pbmcgdG8gYmUgc2V0LlxuICAgKi9cbiAgdGltZW91dDogbnVsbCxcblxuICAvKipcbiAgICogSG93IG1hbnkgZmlsZSB1cGxvYWRzIHRvIHByb2Nlc3MgaW4gcGFyYWxsZWwgKFNlZSB0aGVcbiAgICogRW5xdWV1aW5nIGZpbGUgdXBsb2FkcyBkb2N1bWVudGF0aW9uIHNlY3Rpb24gZm9yIG1vcmUgaW5mbylcbiAgICovXG4gIHBhcmFsbGVsVXBsb2FkczogMixcblxuICAvKipcbiAgICogV2hldGhlciB0byBzZW5kIG11bHRpcGxlIGZpbGVzIGluIG9uZSByZXF1ZXN0LiBJZlxuICAgKiB0aGlzIGl0IHNldCB0byB0cnVlLCB0aGVuIHRoZSBmYWxsYmFjayBmaWxlIGlucHV0IGVsZW1lbnQgd2lsbFxuICAgKiBoYXZlIHRoZSBgbXVsdGlwbGVgIGF0dHJpYnV0ZSBhcyB3ZWxsLiBUaGlzIG9wdGlvbiB3aWxsXG4gICAqIGFsc28gdHJpZ2dlciBhZGRpdGlvbmFsIGV2ZW50cyAobGlrZSBgcHJvY2Vzc2luZ211bHRpcGxlYCkuIFNlZSB0aGUgZXZlbnRzXG4gICAqIGRvY3VtZW50YXRpb24gc2VjdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICovXG4gIHVwbG9hZE11bHRpcGxlOiBmYWxzZSxcblxuICAvKipcbiAgICogV2hldGhlciB5b3Ugd2FudCBmaWxlcyB0byBiZSB1cGxvYWRlZCBpbiBjaHVua3MgdG8geW91ciBzZXJ2ZXIuIFRoaXMgY2FuJ3QgYmVcbiAgICogdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIGB1cGxvYWRNdWx0aXBsZWAuXG4gICAqXG4gICAqIFNlZSBbY2h1bmtzVXBsb2FkZWRdKCNjb25maWctY2h1bmtzVXBsb2FkZWQpIGZvciB0aGUgY2FsbGJhY2sgdG8gZmluYWxpc2UgYW4gdXBsb2FkLlxuICAgKi9cbiAgY2h1bmtpbmc6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBJZiBgY2h1bmtpbmdgIGlzIGVuYWJsZWQsIHRoaXMgZGVmaW5lcyB3aGV0aGVyICoqZXZlcnkqKiBmaWxlIHNob3VsZCBiZSBjaHVua2VkLFxuICAgKiBldmVuIGlmIHRoZSBmaWxlIHNpemUgaXMgYmVsb3cgY2h1bmtTaXplLiBUaGlzIG1lYW5zLCB0aGF0IHRoZSBhZGRpdGlvbmFsIGNodW5rXG4gICAqIGZvcm0gZGF0YSB3aWxsIGJlIHN1Ym1pdHRlZCBhbmQgdGhlIGBjaHVua3NVcGxvYWRlZGAgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkLlxuICAgKi9cbiAgZm9yY2VDaHVua2luZzogZmFsc2UsXG5cbiAgLyoqXG4gICAqIElmIGBjaHVua2luZ2AgaXMgYHRydWVgLCB0aGVuIHRoaXMgZGVmaW5lcyB0aGUgY2h1bmsgc2l6ZSBpbiBieXRlcy5cbiAgICovXG4gIGNodW5rU2l6ZTogMiAqIDEwMjQgKiAxMDI0LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbmRpdmlkdWFsIGNodW5rcyBvZiBhIGZpbGUgYXJlIGJlaW5nIHVwbG9hZGVkIHNpbXVsdGFuZW91c2x5LlxuICAgKi9cbiAgcGFyYWxsZWxDaHVua1VwbG9hZHM6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGEgY2h1bmsgc2hvdWxkIGJlIHJldHJpZWQgaWYgaXQgZmFpbHMuXG4gICAqL1xuICByZXRyeUNodW5rczogZmFsc2UsXG5cbiAgLyoqXG4gICAqIElmIGByZXRyeUNodW5rc2AgaXMgdHJ1ZSwgaG93IG1hbnkgdGltZXMgc2hvdWxkIGl0IGJlIHJldHJpZWQuXG4gICAqL1xuICByZXRyeUNodW5rc0xpbWl0OiAzLFxuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBmaWxlc2l6ZSAoaW4gTWlCKSB0aGF0IGlzIGFsbG93ZWQgdG8gYmUgdXBsb2FkZWQuXG4gICAqL1xuICBtYXhGaWxlc2l6ZTogMjU2LFxuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZmlsZSBwYXJhbSB0aGF0IGdldHMgdHJhbnNmZXJyZWQuXG4gICAqICoqTk9URSoqOiBJZiB5b3UgaGF2ZSB0aGUgb3B0aW9uICBgdXBsb2FkTXVsdGlwbGVgIHNldCB0byBgdHJ1ZWAsIHRoZW5cbiAgICogRHJvcHpvbmUgd2lsbCBhcHBlbmQgYFtdYCB0byB0aGUgbmFtZS5cbiAgICovXG4gIHBhcmFtTmFtZTogXCJmaWxlXCIsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGh1bWJuYWlscyBmb3IgaW1hZ2VzIHNob3VsZCBiZSBnZW5lcmF0ZWRcbiAgICovXG4gIGNyZWF0ZUltYWdlVGh1bWJuYWlsczogdHJ1ZSxcblxuICAvKipcbiAgICogSW4gTUIuIFdoZW4gdGhlIGZpbGVuYW1lIGV4Y2VlZHMgdGhpcyBsaW1pdCwgdGhlIHRodW1ibmFpbCB3aWxsIG5vdCBiZSBnZW5lcmF0ZWQuXG4gICAqL1xuICBtYXhUaHVtYm5haWxGaWxlc2l6ZTogMTAsXG5cbiAgLyoqXG4gICAqIElmIGBudWxsYCwgdGhlIHJhdGlvIG9mIHRoZSBpbWFnZSB3aWxsIGJlIHVzZWQgdG8gY2FsY3VsYXRlIGl0LlxuICAgKi9cbiAgdGh1bWJuYWlsV2lkdGg6IDEyMCxcblxuICAvKipcbiAgICogVGhlIHNhbWUgYXMgYHRodW1ibmFpbFdpZHRoYC4gSWYgYm90aCBhcmUgbnVsbCwgaW1hZ2VzIHdpbGwgbm90IGJlIHJlc2l6ZWQuXG4gICAqL1xuICB0aHVtYm5haWxIZWlnaHQ6IDEyMCxcblxuICAvKipcbiAgICogSG93IHRoZSBpbWFnZXMgc2hvdWxkIGJlIHNjYWxlZCBkb3duIGluIGNhc2UgYm90aCwgYHRodW1ibmFpbFdpZHRoYCBhbmQgYHRodW1ibmFpbEhlaWdodGAgYXJlIHByb3ZpZGVkLlxuICAgKiBDYW4gYmUgZWl0aGVyIGBjb250YWluYCBvciBgY3JvcGAuXG4gICAqL1xuICB0aHVtYm5haWxNZXRob2Q6IFwiY3JvcFwiLFxuXG4gIC8qKlxuICAgKiBJZiBzZXQsIGltYWdlcyB3aWxsIGJlIHJlc2l6ZWQgdG8gdGhlc2UgZGltZW5zaW9ucyBiZWZvcmUgYmVpbmcgKip1cGxvYWRlZCoqLlxuICAgKiBJZiBvbmx5IG9uZSwgYHJlc2l6ZVdpZHRoYCAqKm9yKiogYHJlc2l6ZUhlaWdodGAgaXMgcHJvdmlkZWQsIHRoZSBvcmlnaW5hbCBhc3BlY3RcbiAgICogcmF0aW8gb2YgdGhlIGZpbGUgd2lsbCBiZSBwcmVzZXJ2ZWQuXG4gICAqXG4gICAqIFRoZSBgb3B0aW9ucy50cmFuc2Zvcm1GaWxlYCBmdW5jdGlvbiB1c2VzIHRoZXNlIG9wdGlvbnMsIHNvIGlmIHRoZSBgdHJhbnNmb3JtRmlsZWAgZnVuY3Rpb25cbiAgICogaXMgb3ZlcnJpZGRlbiwgdGhlc2Ugb3B0aW9ucyBkb24ndCBkbyBhbnl0aGluZy5cbiAgICovXG4gIHJlc2l6ZVdpZHRoOiBudWxsLFxuXG4gIC8qKlxuICAgKiBTZWUgYHJlc2l6ZVdpZHRoYC5cbiAgICovXG4gIHJlc2l6ZUhlaWdodDogbnVsbCxcblxuICAvKipcbiAgICogVGhlIG1pbWUgdHlwZSBvZiB0aGUgcmVzaXplZCBpbWFnZSAoYmVmb3JlIGl0IGdldHMgdXBsb2FkZWQgdG8gdGhlIHNlcnZlcikuXG4gICAqIElmIGBudWxsYCB0aGUgb3JpZ2luYWwgbWltZSB0eXBlIHdpbGwgYmUgdXNlZC4gVG8gZm9yY2UganBlZywgZm9yIGV4YW1wbGUsIHVzZSBgaW1hZ2UvanBlZ2AuXG4gICAqIFNlZSBgcmVzaXplV2lkdGhgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgcmVzaXplTWltZVR5cGU6IG51bGwsXG5cbiAgLyoqXG4gICAqIFRoZSBxdWFsaXR5IG9mIHRoZSByZXNpemVkIGltYWdlcy4gU2VlIGByZXNpemVXaWR0aGAuXG4gICAqL1xuICByZXNpemVRdWFsaXR5OiAwLjgsXG5cbiAgLyoqXG4gICAqIEhvdyB0aGUgaW1hZ2VzIHNob3VsZCBiZSBzY2FsZWQgZG93biBpbiBjYXNlIGJvdGgsIGByZXNpemVXaWR0aGAgYW5kIGByZXNpemVIZWlnaHRgIGFyZSBwcm92aWRlZC5cbiAgICogQ2FuIGJlIGVpdGhlciBgY29udGFpbmAgb3IgYGNyb3BgLlxuICAgKi9cbiAgcmVzaXplTWV0aG9kOiBcImNvbnRhaW5cIixcblxuICAvKipcbiAgICogVGhlIGJhc2UgdGhhdCBpcyB1c2VkIHRvIGNhbGN1bGF0ZSB0aGUgKipkaXNwbGF5ZWQqKiBmaWxlc2l6ZS4gWW91IGNhblxuICAgKiBjaGFuZ2UgdGhpcyB0byAxMDI0IGlmIHlvdSB3b3VsZCByYXRoZXIgZGlzcGxheSBraWJpYnl0ZXMsIG1lYmlieXRlcyxcbiAgICogZXRjLi4uIDEwMjQgaXMgdGVjaG5pY2FsbHkgaW5jb3JyZWN0LCBiZWNhdXNlIGAxMDI0IGJ5dGVzYCBhcmUgYDEga2liaWJ5dGVgXG4gICAqIG5vdCBgMSBraWxvYnl0ZWAuIFlvdSBjYW4gY2hhbmdlIHRoaXMgdG8gYDEwMjRgIGlmIHlvdSBkb24ndCBjYXJlIGFib3V0XG4gICAqIHZhbGlkaXR5LlxuICAgKi9cbiAgZmlsZXNpemVCYXNlOiAxMDAwLFxuXG4gIC8qKlxuICAgKiBJZiBub3QgYG51bGxgIGRlZmluZXMgaG93IG1hbnkgZmlsZXMgdGhpcyBEcm9wem9uZSBoYW5kbGVzLiBJZiBpdCBleGNlZWRzLFxuICAgKiB0aGUgZXZlbnQgYG1heGZpbGVzZXhjZWVkZWRgIHdpbGwgYmUgY2FsbGVkLiBUaGUgZHJvcHpvbmUgZWxlbWVudCBnZXRzIHRoZVxuICAgKiBjbGFzcyBgZHotbWF4LWZpbGVzLXJlYWNoZWRgIGFjY29yZGluZ2x5IHNvIHlvdSBjYW4gcHJvdmlkZSB2aXN1YWxcbiAgICogZmVlZGJhY2suXG4gICAqL1xuICBtYXhGaWxlczogbnVsbCxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgb2JqZWN0IHRvIHNlbmQgYWRkaXRpb25hbCBoZWFkZXJzIHRvIHRoZSBzZXJ2ZXIuIEVnOlxuICAgKiBgeyBcIk15LUF3ZXNvbWUtSGVhZGVyXCI6IFwiaGVhZGVyIHZhbHVlXCIgfWBcbiAgICovXG4gIGhlYWRlcnM6IG51bGwsXG5cbiAgLyoqXG4gICAqIFNob3VsZCB0aGUgZGVmYXVsdCBoZWFkZXJzIGJlIHNldCBvciBub3Q/XG4gICAqIEFjY2VwdDogYXBwbGljYXRpb24vanNvbiA8LSBmb3IgcmVxdWVzdGluZyBqc29uIHJlc3BvbnNlXG4gICAqIENhY2hlLUNvbnRyb2w6IG5vLWNhY2hlIDwtIFJlcXVlc3Qgc2hvdWxkbnQgYmUgY2FjaGVkXG4gICAqIFgtUmVxdWVzdGVkLVdpdGg6IFhNTEh0dHBSZXF1ZXN0IDwtIFdlIHNlbnQgdGhlIHJlcXVlc3QgdmlhIFhNTEh0dHBSZXF1ZXN0XG4gICAqL1xuICBkZWZhdWx0SGVhZGVyczogdHJ1ZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgZHJvcHpvbmUgZWxlbWVudCBpdHNlbGYgd2lsbCBiZSBjbGlja2FibGUsIGlmIGBmYWxzZWBcbiAgICogbm90aGluZyB3aWxsIGJlIGNsaWNrYWJsZS5cbiAgICpcbiAgICogWW91IGNhbiBhbHNvIHBhc3MgYW4gSFRNTCBlbGVtZW50LCBhIENTUyBzZWxlY3RvciAoZm9yIG11bHRpcGxlIGVsZW1lbnRzKVxuICAgKiBvciBhbiBhcnJheSBvZiB0aG9zZS4gSW4gdGhhdCBjYXNlLCBhbGwgb2YgdGhvc2UgZWxlbWVudHMgd2lsbCB0cmlnZ2VyIGFuXG4gICAqIHVwbG9hZCB3aGVuIGNsaWNrZWQuXG4gICAqL1xuICBjbGlja2FibGU6IHRydWUsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgaGlkZGVuIGZpbGVzIGluIGRpcmVjdG9yaWVzIHNob3VsZCBiZSBpZ25vcmVkLlxuICAgKi9cbiAgaWdub3JlSGlkZGVuRmlsZXM6IHRydWUsXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIGBhY2NlcHRgIGNoZWNrcyB0aGUgZmlsZSdzIG1pbWUgdHlwZSBvclxuICAgKiBleHRlbnNpb24gYWdhaW5zdCB0aGlzIGxpc3QuIFRoaXMgaXMgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBtaW1lXG4gICAqIHR5cGVzIG9yIGZpbGUgZXh0ZW5zaW9ucy5cbiAgICpcbiAgICogRWcuOiBgaW1hZ2UvKixhcHBsaWNhdGlvbi9wZGYsLnBzZGBcbiAgICpcbiAgICogSWYgdGhlIERyb3B6b25lIGlzIGBjbGlja2FibGVgIHRoaXMgb3B0aW9uIHdpbGwgYWxzbyBiZSB1c2VkIGFzXG4gICAqIFtgYWNjZXB0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9IVE1ML0VsZW1lbnQvaW5wdXQjYXR0ci1hY2NlcHQpXG4gICAqIHBhcmFtZXRlciBvbiB0aGUgaGlkZGVuIGZpbGUgaW5wdXQgYXMgd2VsbC5cbiAgICovXG4gIGFjY2VwdGVkRmlsZXM6IG51bGwsXG5cbiAgLyoqXG4gICAqICoqRGVwcmVjYXRlZCEqKlxuICAgKiBVc2UgYWNjZXB0ZWRGaWxlcyBpbnN0ZWFkLlxuICAgKi9cbiAgYWNjZXB0ZWRNaW1lVHlwZXM6IG51bGwsXG5cbiAgLyoqXG4gICAqIElmIGZhbHNlLCBmaWxlcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBxdWV1ZSBidXQgdGhlIHF1ZXVlIHdpbGwgbm90IGJlXG4gICAqIHByb2Nlc3NlZCBhdXRvbWF0aWNhbGx5LlxuICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgaWYgeW91IG5lZWQgc29tZSBhZGRpdGlvbmFsIHVzZXIgaW5wdXQgYmVmb3JlIHNlbmRpbmdcbiAgICogZmlsZXMgKG9yIGlmIHlvdSB3YW50IHdhbnQgYWxsIGZpbGVzIHNlbnQgYXQgb25jZSkuXG4gICAqIElmIHlvdSdyZSByZWFkeSB0byBzZW5kIHRoZSBmaWxlIHNpbXBseSBjYWxsIGBteURyb3B6b25lLnByb2Nlc3NRdWV1ZSgpYC5cbiAgICpcbiAgICogU2VlIHRoZSBbZW5xdWV1aW5nIGZpbGUgdXBsb2Fkc10oI2VucXVldWluZy1maWxlLXVwbG9hZHMpIGRvY3VtZW50YXRpb25cbiAgICogc2VjdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGF1dG9Qcm9jZXNzUXVldWU6IHRydWUsXG5cbiAgLyoqXG4gICAqIElmIGZhbHNlLCBmaWxlcyBhZGRlZCB0byB0aGUgZHJvcHpvbmUgd2lsbCBub3QgYmUgcXVldWVkIGJ5IGRlZmF1bHQuXG4gICAqIFlvdSdsbCBoYXZlIHRvIGNhbGwgYGVucXVldWVGaWxlKGZpbGUpYCBtYW51YWxseS5cbiAgICovXG4gIGF1dG9RdWV1ZTogdHJ1ZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGlzIHdpbGwgYWRkIGEgbGluayB0byBldmVyeSBmaWxlIHByZXZpZXcgdG8gcmVtb3ZlIG9yIGNhbmNlbCAoaWZcbiAgICogYWxyZWFkeSB1cGxvYWRpbmcpIHRoZSBmaWxlLiBUaGUgYGRpY3RDYW5jZWxVcGxvYWRgLCBgZGljdENhbmNlbFVwbG9hZENvbmZpcm1hdGlvbmBcbiAgICogYW5kIGBkaWN0UmVtb3ZlRmlsZWAgb3B0aW9ucyBhcmUgdXNlZCBmb3IgdGhlIHdvcmRpbmcuXG4gICAqL1xuICBhZGRSZW1vdmVMaW5rczogZmFsc2UsXG5cbiAgLyoqXG4gICAqIERlZmluZXMgd2hlcmUgdG8gZGlzcGxheSB0aGUgZmlsZSBwcmV2aWV3cyDigJMgaWYgYG51bGxgIHRoZVxuICAgKiBEcm9wem9uZSBlbGVtZW50IGl0c2VsZiBpcyB1c2VkLiBDYW4gYmUgYSBwbGFpbiBgSFRNTEVsZW1lbnRgIG9yIGEgQ1NTXG4gICAqIHNlbGVjdG9yLiBUaGUgZWxlbWVudCBzaG91bGQgaGF2ZSB0aGUgYGRyb3B6b25lLXByZXZpZXdzYCBjbGFzcyBzb1xuICAgKiB0aGUgcHJldmlld3MgYXJlIGRpc3BsYXllZCBwcm9wZXJseS5cbiAgICovXG4gIHByZXZpZXdzQ29udGFpbmVyOiBudWxsLFxuXG4gIC8qKlxuICAgKiBTZXQgdGhpcyB0byBgdHJ1ZWAgaWYgeW91IGRvbid0IHdhbnQgcHJldmlld3MgdG8gYmUgc2hvd24uXG4gICAqL1xuICBkaXNhYmxlUHJldmlld3M6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBlbGVtZW50IHRoZSBoaWRkZW4gaW5wdXQgZmllbGQgKHdoaWNoIGlzIHVzZWQgd2hlbiBjbGlja2luZyBvbiB0aGVcbiAgICogZHJvcHpvbmUgdG8gdHJpZ2dlciBmaWxlIHNlbGVjdGlvbikgd2lsbCBiZSBhcHBlbmRlZCB0by4gVGhpcyBtaWdodFxuICAgKiBiZSBpbXBvcnRhbnQgaW4gY2FzZSB5b3UgdXNlIGZyYW1ld29ya3MgdG8gc3dpdGNoIHRoZSBjb250ZW50IG9mIHlvdXIgcGFnZS5cbiAgICpcbiAgICogQ2FuIGJlIGEgc2VsZWN0b3Igc3RyaW5nLCBvciBhbiBlbGVtZW50IGRpcmVjdGx5LlxuICAgKi9cbiAgaGlkZGVuSW5wdXRDb250YWluZXI6IFwiYm9keVwiLFxuXG4gIC8qKlxuICAgKiBJZiBudWxsLCBubyBjYXB0dXJlIHR5cGUgd2lsbCBiZSBzcGVjaWZpZWRcbiAgICogSWYgY2FtZXJhLCBtb2JpbGUgZGV2aWNlcyB3aWxsIHNraXAgdGhlIGZpbGUgc2VsZWN0aW9uIGFuZCBjaG9vc2UgY2FtZXJhXG4gICAqIElmIG1pY3JvcGhvbmUsIG1vYmlsZSBkZXZpY2VzIHdpbGwgc2tpcCB0aGUgZmlsZSBzZWxlY3Rpb24gYW5kIGNob29zZSB0aGUgbWljcm9waG9uZVxuICAgKiBJZiBjYW1jb3JkZXIsIG1vYmlsZSBkZXZpY2VzIHdpbGwgc2tpcCB0aGUgZmlsZSBzZWxlY3Rpb24gYW5kIGNob29zZSB0aGUgY2FtZXJhIGluIHZpZGVvIG1vZGVcbiAgICogT24gYXBwbGUgZGV2aWNlcyBtdWx0aXBsZSBtdXN0IGJlIHNldCB0byBmYWxzZS4gIEFjY2VwdGVkRmlsZXMgbWF5IG5lZWQgdG9cbiAgICogYmUgc2V0IHRvIGFuIGFwcHJvcHJpYXRlIG1pbWUgdHlwZSAoZS5nLiBcImltYWdlLypcIiwgXCJhdWRpby8qXCIsIG9yIFwidmlkZW8vKlwiKS5cbiAgICovXG4gIGNhcHR1cmU6IG51bGwsXG5cbiAgLyoqXG4gICAqICoqRGVwcmVjYXRlZCoqLiBVc2UgYHJlbmFtZUZpbGVgIGluc3RlYWQuXG4gICAqL1xuICByZW5hbWVGaWxlbmFtZTogbnVsbCxcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgYmVmb3JlIHRoZSBmaWxlIGlzIHVwbG9hZGVkIHRvIHRoZSBzZXJ2ZXIgYW5kIHJlbmFtZXMgdGhlIGZpbGUuXG4gICAqIFRoaXMgZnVuY3Rpb24gZ2V0cyB0aGUgYEZpbGVgIGFzIGFyZ3VtZW50IGFuZCBjYW4gdXNlIHRoZSBgZmlsZS5uYW1lYC4gVGhlIGFjdHVhbCBuYW1lIG9mIHRoZVxuICAgKiBmaWxlIHRoYXQgZ2V0cyB1c2VkIGR1cmluZyB0aGUgdXBsb2FkIGNhbiBiZSBhY2Nlc3NlZCB0aHJvdWdoIGBmaWxlLnVwbG9hZC5maWxlbmFtZWAuXG4gICAqL1xuICByZW5hbWVGaWxlOiBudWxsLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAgdGhlIGZhbGxiYWNrIHdpbGwgYmUgZm9yY2VkLiBUaGlzIGlzIHZlcnkgdXNlZnVsIHRvIHRlc3QgeW91ciBzZXJ2ZXJcbiAgICogaW1wbGVtZW50YXRpb25zIGZpcnN0IGFuZCBtYWtlIHN1cmUgdGhhdCBldmVyeXRoaW5nIHdvcmtzIGFzXG4gICAqIGV4cGVjdGVkIHdpdGhvdXQgZHJvcHpvbmUgaWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMsIGFuZCB0byB0ZXN0XG4gICAqIGhvdyB5b3VyIGZhbGxiYWNrcyB3aWxsIGxvb2suXG4gICAqL1xuICBmb3JjZUZhbGxiYWNrOiBmYWxzZSxcblxuICAvKipcbiAgICogVGhlIHRleHQgdXNlZCBiZWZvcmUgYW55IGZpbGVzIGFyZSBkcm9wcGVkLlxuICAgKi9cbiAgZGljdERlZmF1bHRNZXNzYWdlOiBcIkRyb3AgZmlsZXMgaGVyZSB0byB1cGxvYWRcIixcblxuICAvKipcbiAgICogVGhlIHRleHQgdGhhdCByZXBsYWNlcyB0aGUgZGVmYXVsdCBtZXNzYWdlIHRleHQgaXQgdGhlIGJyb3dzZXIgaXMgbm90IHN1cHBvcnRlZC5cbiAgICovXG4gIGRpY3RGYWxsYmFja01lc3NhZ2U6XG4gICAgXCJZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBkcmFnJ24nZHJvcCBmaWxlIHVwbG9hZHMuXCIsXG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRoYXQgd2lsbCBiZSBhZGRlZCBiZWZvcmUgdGhlIGZhbGxiYWNrIGZvcm0uXG4gICAqIElmIHlvdSBwcm92aWRlIGEgIGZhbGxiYWNrIGVsZW1lbnQgeW91cnNlbGYsIG9yIGlmIHRoaXMgb3B0aW9uIGlzIGBudWxsYCB0aGlzIHdpbGxcbiAgICogYmUgaWdub3JlZC5cbiAgICovXG4gIGRpY3RGYWxsYmFja1RleHQ6XG4gICAgXCJQbGVhc2UgdXNlIHRoZSBmYWxsYmFjayBmb3JtIGJlbG93IHRvIHVwbG9hZCB5b3VyIGZpbGVzIGxpa2UgaW4gdGhlIG9sZGVuIGRheXMuXCIsXG5cbiAgLyoqXG4gICAqIElmIHRoZSBmaWxlc2l6ZSBpcyB0b28gYmlnLlxuICAgKiBge3tmaWxlc2l6ZX19YCBhbmQgYHt7bWF4RmlsZXNpemV9fWAgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSByZXNwZWN0aXZlIGNvbmZpZ3VyYXRpb24gdmFsdWVzLlxuICAgKi9cbiAgZGljdEZpbGVUb29CaWc6XG4gICAgXCJGaWxlIGlzIHRvbyBiaWcgKHt7ZmlsZXNpemV9fU1pQikuIE1heCBmaWxlc2l6ZToge3ttYXhGaWxlc2l6ZX19TWlCLlwiLFxuXG4gIC8qKlxuICAgKiBJZiB0aGUgZmlsZSBkb2Vzbid0IG1hdGNoIHRoZSBmaWxlIHR5cGUuXG4gICAqL1xuICBkaWN0SW52YWxpZEZpbGVUeXBlOiBcIllvdSBjYW4ndCB1cGxvYWQgZmlsZXMgb2YgdGhpcyB0eXBlLlwiLFxuXG4gIC8qKlxuICAgKiBJZiB0aGUgc2VydmVyIHJlc3BvbnNlIHdhcyBpbnZhbGlkLlxuICAgKiBge3tzdGF0dXNDb2RlfX1gIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGUgc2VydmVycyBzdGF0dXMgY29kZS5cbiAgICovXG4gIGRpY3RSZXNwb25zZUVycm9yOiBcIlNlcnZlciByZXNwb25kZWQgd2l0aCB7e3N0YXR1c0NvZGV9fSBjb2RlLlwiLFxuXG4gIC8qKlxuICAgKiBJZiBgYWRkUmVtb3ZlTGlua3NgIGlzIHRydWUsIHRoZSB0ZXh0IHRvIGJlIHVzZWQgZm9yIHRoZSBjYW5jZWwgdXBsb2FkIGxpbmsuXG4gICAqL1xuICBkaWN0Q2FuY2VsVXBsb2FkOiBcIkNhbmNlbCB1cGxvYWRcIixcblxuICAvKipcbiAgICogVGhlIHRleHQgdGhhdCBpcyBkaXNwbGF5ZWQgaWYgYW4gdXBsb2FkIHdhcyBtYW51YWxseSBjYW5jZWxlZFxuICAgKi9cbiAgZGljdFVwbG9hZENhbmNlbGVkOiBcIlVwbG9hZCBjYW5jZWxlZC5cIixcblxuICAvKipcbiAgICogSWYgYGFkZFJlbW92ZUxpbmtzYCBpcyB0cnVlLCB0aGUgdGV4dCB0byBiZSB1c2VkIGZvciBjb25maXJtYXRpb24gd2hlbiBjYW5jZWxsaW5nIHVwbG9hZC5cbiAgICovXG4gIGRpY3RDYW5jZWxVcGxvYWRDb25maXJtYXRpb246IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbCB0aGlzIHVwbG9hZD9cIixcblxuICAvKipcbiAgICogSWYgYGFkZFJlbW92ZUxpbmtzYCBpcyB0cnVlLCB0aGUgdGV4dCB0byBiZSB1c2VkIHRvIHJlbW92ZSBhIGZpbGUuXG4gICAqL1xuICBkaWN0UmVtb3ZlRmlsZTogXCJSZW1vdmUgZmlsZVwiLFxuXG4gIC8qKlxuICAgKiBJZiB0aGlzIGlzIG5vdCBudWxsLCB0aGVuIHRoZSB1c2VyIHdpbGwgYmUgcHJvbXB0ZWQgYmVmb3JlIHJlbW92aW5nIGEgZmlsZS5cbiAgICovXG4gIGRpY3RSZW1vdmVGaWxlQ29uZmlybWF0aW9uOiBudWxsLFxuXG4gIC8qKlxuICAgKiBEaXNwbGF5ZWQgaWYgYG1heEZpbGVzYCBpcyBzdCBhbmQgZXhjZWVkZWQuXG4gICAqIFRoZSBzdHJpbmcgYHt7bWF4RmlsZXN9fWAgd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZS5cbiAgICovXG4gIGRpY3RNYXhGaWxlc0V4Y2VlZGVkOiBcIllvdSBjYW4gbm90IHVwbG9hZCBhbnkgbW9yZSBmaWxlcy5cIixcblxuICAvKipcbiAgICogQWxsb3dzIHlvdSB0byB0cmFuc2xhdGUgdGhlIGRpZmZlcmVudCB1bml0cy4gU3RhcnRpbmcgd2l0aCBgdGJgIGZvciB0ZXJhYnl0ZXMgYW5kIGdvaW5nIGRvd24gdG9cbiAgICogYGJgIGZvciBieXRlcy5cbiAgICovXG4gIGRpY3RGaWxlU2l6ZVVuaXRzOiB7IHRiOiBcIlRCXCIsIGdiOiBcIkdCXCIsIG1iOiBcIk1CXCIsIGtiOiBcIktCXCIsIGI6IFwiYlwiIH0sXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBkcm9wem9uZSBpbml0aWFsaXplZFxuICAgKiBZb3UgY2FuIGFkZCBldmVudCBsaXN0ZW5lcnMgaGVyZVxuICAgKi9cbiAgaW5pdCgpIHt9LFxuXG4gIC8qKlxuICAgKiBDYW4gYmUgYW4gKipvYmplY3QqKiBvZiBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gdHJhbnNmZXIgdG8gdGhlIHNlcnZlciwgKipvcioqIGEgYEZ1bmN0aW9uYFxuICAgKiB0aGF0IGdldHMgaW52b2tlZCB3aXRoIHRoZSBgZmlsZXNgLCBgeGhyYCBhbmQsIGlmIGl0J3MgYSBjaHVua2VkIHVwbG9hZCwgYGNodW5rYCBhcmd1bWVudHMuIEluIGNhc2VcbiAgICogb2YgYSBmdW5jdGlvbiwgdGhpcyBuZWVkcyB0byByZXR1cm4gYSBtYXAuXG4gICAqXG4gICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIGRvZXMgbm90aGluZyBmb3Igbm9ybWFsIHVwbG9hZHMsIGJ1dCBhZGRzIHJlbGV2YW50IGluZm9ybWF0aW9uIGZvclxuICAgKiBjaHVua2VkIHVwbG9hZHMuXG4gICAqXG4gICAqIFRoaXMgaXMgdGhlIHNhbWUgYXMgYWRkaW5nIGhpZGRlbiBpbnB1dCBmaWVsZHMgaW4gdGhlIGZvcm0gZWxlbWVudC5cbiAgICovXG4gIHBhcmFtcyhmaWxlcywgeGhyLCBjaHVuaykge1xuICAgIGlmIChjaHVuaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZHp1dWlkOiBjaHVuay5maWxlLnVwbG9hZC51dWlkLFxuICAgICAgICBkemNodW5raW5kZXg6IGNodW5rLmluZGV4LFxuICAgICAgICBkenRvdGFsZmlsZXNpemU6IGNodW5rLmZpbGUuc2l6ZSxcbiAgICAgICAgZHpjaHVua3NpemU6IHRoaXMub3B0aW9ucy5jaHVua1NpemUsXG4gICAgICAgIGR6dG90YWxjaHVua2NvdW50OiBjaHVuay5maWxlLnVwbG9hZC50b3RhbENodW5rQ291bnQsXG4gICAgICAgIGR6Y2h1bmtieXRlb2Zmc2V0OiBjaHVuay5pbmRleCAqIHRoaXMub3B0aW9ucy5jaHVua1NpemUsXG4gICAgICB9O1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IGdldHMgYSBbZmlsZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9ET00vRmlsZSlcbiAgICogYW5kIGEgYGRvbmVgIGZ1bmN0aW9uIGFzIHBhcmFtZXRlcnMuXG4gICAqXG4gICAqIElmIHRoZSBkb25lIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIHRoZSBmaWxlIGlzIFwiYWNjZXB0ZWRcIiBhbmQgd2lsbFxuICAgKiBiZSBwcm9jZXNzZWQuIElmIHlvdSBwYXNzIGFuIGVycm9yIG1lc3NhZ2UsIHRoZSBmaWxlIGlzIHJlamVjdGVkLCBhbmQgdGhlIGVycm9yXG4gICAqIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQuXG4gICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBub3QgYmUgY2FsbGVkIGlmIHRoZSBmaWxlIGlzIHRvbyBiaWcgb3IgZG9lc24ndCBtYXRjaCB0aGUgbWltZSB0eXBlcy5cbiAgICovXG4gIGFjY2VwdChmaWxlLCBkb25lKSB7XG4gICAgcmV0dXJuIGRvbmUoKTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYWxsIGNodW5rcyBoYXZlIGJlZW4gdXBsb2FkZWQgZm9yIGEgZmlsZS5cbiAgICogSXQgZ2V0cyB0aGUgZmlsZSBmb3Igd2hpY2ggdGhlIGNodW5rcyBoYXZlIGJlZW4gdXBsb2FkZWQgYXMgdGhlIGZpcnN0IHBhcmFtZXRlcixcbiAgICogYW5kIHRoZSBgZG9uZWAgZnVuY3Rpb24gYXMgc2Vjb25kLiBgZG9uZSgpYCBuZWVkcyB0byBiZSBpbnZva2VkIHdoZW4gZXZlcnl0aGluZ1xuICAgKiBuZWVkZWQgdG8gZmluaXNoIHRoZSB1cGxvYWQgcHJvY2VzcyBpcyBkb25lLlxuICAgKi9cbiAgY2h1bmtzVXBsb2FkZWQ6IGZ1bmN0aW9uIChmaWxlLCBkb25lKSB7XG4gICAgZG9uZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZW5kcyB0aGUgZmlsZSBhcyBiaW5hcnkgYmxvYiBpbiBib2R5IGluc3RlYWQgb2YgZm9ybSBkYXRhLlxuICAgKiBJZiB0aGlzIGlzIHNldCwgdGhlIGBwYXJhbXNgIG9wdGlvbiB3aWxsIGJlIGlnbm9yZWQuXG4gICAqIEl0J3MgYW4gZXJyb3IgdG8gc2V0IHRoaXMgdG8gYHRydWVgIGFsb25nIHdpdGggYHVwbG9hZE11bHRpcGxlYCBzaW5jZVxuICAgKiBtdWx0aXBsZSBmaWxlcyBjYW5ub3QgYmUgaW4gYSBzaW5nbGUgYmluYXJ5IGJvZHkuXG4gICAqL1xuICBiaW5hcnlCb2R5OiBmYWxzZSxcblxuICAvKipcbiAgICogR2V0cyBjYWxsZWQgd2hlbiB0aGUgYnJvd3NlciBpcyBub3Qgc3VwcG9ydGVkLlxuICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBzaG93cyB0aGUgZmFsbGJhY2sgaW5wdXQgZmllbGQgYW5kIGFkZHNcbiAgICogYSB0ZXh0LlxuICAgKi9cbiAgZmFsbGJhY2soKSB7XG4gICAgLy8gVGhpcyBjb2RlIHNob3VsZCBwYXNzIGluIElFNy4uLiA6KFxuICAgIGxldCBtZXNzYWdlRWxlbWVudDtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gYCR7dGhpcy5lbGVtZW50LmNsYXNzTmFtZX0gZHotYnJvd3Nlci1ub3Qtc3VwcG9ydGVkYDtcblxuICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKSkge1xuICAgICAgaWYgKC8oXnwgKWR6LW1lc3NhZ2UoJHwgKS8udGVzdChjaGlsZC5jbGFzc05hbWUpKSB7XG4gICAgICAgIG1lc3NhZ2VFbGVtZW50ID0gY2hpbGQ7XG4gICAgICAgIGNoaWxkLmNsYXNzTmFtZSA9IFwiZHotbWVzc2FnZVwiOyAvLyBSZW1vdmVzIHRoZSAnZHotZGVmYXVsdCcgY2xhc3NcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbWVzc2FnZUVsZW1lbnQpIHtcbiAgICAgIG1lc3NhZ2VFbGVtZW50ID0gRHJvcHpvbmUuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJkei1tZXNzYWdlXCI+PHNwYW4+PC9zcGFuPjwvZGl2PidcbiAgICAgICk7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGxldCBzcGFuID0gbWVzc2FnZUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzcGFuXCIpWzBdO1xuICAgIGlmIChzcGFuKSB7XG4gICAgICBpZiAoc3Bhbi50ZXh0Q29udGVudCAhPSBudWxsKSB7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB0aGlzLm9wdGlvbnMuZGljdEZhbGxiYWNrTWVzc2FnZTtcbiAgICAgIH0gZWxzZSBpZiAoc3Bhbi5pbm5lclRleHQgIT0gbnVsbCkge1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IHRoaXMub3B0aW9ucy5kaWN0RmFsbGJhY2tNZXNzYWdlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5nZXRGYWxsYmFja0Zvcm0oKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgY2FsbGVkIHRvIGNhbGN1bGF0ZSB0aGUgdGh1bWJuYWlsIGRpbWVuc2lvbnMuXG4gICAqXG4gICAqIEl0IGdldHMgYGZpbGVgLCBgd2lkdGhgIGFuZCBgaGVpZ2h0YCAoYm90aCBtYXkgYmUgYG51bGxgKSBhcyBwYXJhbWV0ZXJzIGFuZCBtdXN0IHJldHVybiBhbiBvYmplY3QgY29udGFpbmluZzpcbiAgICpcbiAgICogIC0gYHNyY1dpZHRoYCAmIGBzcmNIZWlnaHRgIChyZXF1aXJlZClcbiAgICogIC0gYHRyZ1dpZHRoYCAmIGB0cmdIZWlnaHRgIChyZXF1aXJlZClcbiAgICogIC0gYHNyY1hgICYgYHNyY1lgIChvcHRpb25hbCwgZGVmYXVsdCBgMGApXG4gICAqICAtIGB0cmdYYCAmIGB0cmdZYCAob3B0aW9uYWwsIGRlZmF1bHQgYDBgKVxuICAgKlxuICAgKiBUaG9zZSB2YWx1ZXMgYXJlIGdvaW5nIHRvIGJlIHVzZWQgYnkgYGN0eC5kcmF3SW1hZ2UoKWAuXG4gICAqL1xuICByZXNpemUoZmlsZSwgd2lkdGgsIGhlaWdodCwgcmVzaXplTWV0aG9kKSB7XG4gICAgbGV0IGluZm8gPSB7XG4gICAgICBzcmNYOiAwLFxuICAgICAgc3JjWTogMCxcbiAgICAgIHNyY1dpZHRoOiBmaWxlLndpZHRoLFxuICAgICAgc3JjSGVpZ2h0OiBmaWxlLmhlaWdodCxcbiAgICB9O1xuXG4gICAgbGV0IHNyY1JhdGlvID0gZmlsZS53aWR0aCAvIGZpbGUuaGVpZ2h0O1xuXG4gICAgLy8gQXV0b21hdGljYWxseSBjYWxjdWxhdGUgZGltZW5zaW9ucyBpZiBub3Qgc3BlY2lmaWVkXG4gICAgaWYgKHdpZHRoID09IG51bGwgJiYgaGVpZ2h0ID09IG51bGwpIHtcbiAgICAgIHdpZHRoID0gaW5mby5zcmNXaWR0aDtcbiAgICAgIGhlaWdodCA9IGluZm8uc3JjSGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAod2lkdGggPT0gbnVsbCkge1xuICAgICAgd2lkdGggPSBoZWlnaHQgKiBzcmNSYXRpbztcbiAgICB9IGVsc2UgaWYgKGhlaWdodCA9PSBudWxsKSB7XG4gICAgICBoZWlnaHQgPSB3aWR0aCAvIHNyY1JhdGlvO1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSBpbWFnZXMgYXJlbid0IHVwc2NhbGVkXG4gICAgd2lkdGggPSBNYXRoLm1pbih3aWR0aCwgaW5mby5zcmNXaWR0aCk7XG4gICAgaGVpZ2h0ID0gTWF0aC5taW4oaGVpZ2h0LCBpbmZvLnNyY0hlaWdodCk7XG5cbiAgICBsZXQgdHJnUmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcblxuICAgIGlmIChpbmZvLnNyY1dpZHRoID4gd2lkdGggfHwgaW5mby5zcmNIZWlnaHQgPiBoZWlnaHQpIHtcbiAgICAgIC8vIEltYWdlIGlzIGJpZ2dlciBhbmQgbmVlZHMgcmVzY2FsaW5nXG4gICAgICBpZiAocmVzaXplTWV0aG9kID09PSBcImNyb3BcIikge1xuICAgICAgICBpZiAoc3JjUmF0aW8gPiB0cmdSYXRpbykge1xuICAgICAgICAgIGluZm8uc3JjSGVpZ2h0ID0gZmlsZS5oZWlnaHQ7XG4gICAgICAgICAgaW5mby5zcmNXaWR0aCA9IGluZm8uc3JjSGVpZ2h0ICogdHJnUmF0aW87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5mby5zcmNXaWR0aCA9IGZpbGUud2lkdGg7XG4gICAgICAgICAgaW5mby5zcmNIZWlnaHQgPSBpbmZvLnNyY1dpZHRoIC8gdHJnUmF0aW87XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmVzaXplTWV0aG9kID09PSBcImNvbnRhaW5cIikge1xuICAgICAgICAvLyBNZXRob2QgJ2NvbnRhaW4nXG4gICAgICAgIGlmIChzcmNSYXRpbyA+IHRyZ1JhdGlvKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBzcmNSYXRpbztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aWR0aCA9IGhlaWdodCAqIHNyY1JhdGlvO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gcmVzaXplTWV0aG9kICcke3Jlc2l6ZU1ldGhvZH0nYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5mby5zcmNYID0gKGZpbGUud2lkdGggLSBpbmZvLnNyY1dpZHRoKSAvIDI7XG4gICAgaW5mby5zcmNZID0gKGZpbGUuaGVpZ2h0IC0gaW5mby5zcmNIZWlnaHQpIC8gMjtcblxuICAgIGluZm8udHJnV2lkdGggPSB3aWR0aDtcbiAgICBpbmZvLnRyZ0hlaWdodCA9IGhlaWdodDtcblxuICAgIHJldHVybiBpbmZvO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDYW4gYmUgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGZpbGUgKGZvciBleGFtcGxlLCByZXNpemUgYW4gaW1hZ2UgaWYgbmVjZXNzYXJ5KS5cbiAgICpcbiAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gdXNlcyBgcmVzaXplV2lkdGhgIGFuZCBgcmVzaXplSGVpZ2h0YCAoaWYgcHJvdmlkZWQpIGFuZCByZXNpemVzXG4gICAqIGltYWdlcyBhY2NvcmRpbmcgdG8gdGhvc2UgZGltZW5zaW9ucy5cbiAgICpcbiAgICogR2V0cyB0aGUgYGZpbGVgIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIGFuZCBhIGBkb25lKClgIGZ1bmN0aW9uIGFzIHRoZSBzZWNvbmQsIHRoYXQgbmVlZHNcbiAgICogdG8gYmUgaW52b2tlZCB3aXRoIHRoZSBmaWxlIHdoZW4gdGhlIHRyYW5zZm9ybWF0aW9uIGlzIGRvbmUuXG4gICAqL1xuICB0cmFuc2Zvcm1GaWxlKGZpbGUsIGRvbmUpIHtcbiAgICBpZiAoXG4gICAgICAodGhpcy5vcHRpb25zLnJlc2l6ZVdpZHRoIHx8IHRoaXMub3B0aW9ucy5yZXNpemVIZWlnaHQpICYmXG4gICAgICBmaWxlLnR5cGUubWF0Y2goL2ltYWdlLiovKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzaXplSW1hZ2UoXG4gICAgICAgIGZpbGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy5yZXNpemVXaWR0aCxcbiAgICAgICAgdGhpcy5vcHRpb25zLnJlc2l6ZUhlaWdodCxcbiAgICAgICAgdGhpcy5vcHRpb25zLnJlc2l6ZU1ldGhvZCxcbiAgICAgICAgZG9uZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRvbmUoZmlsZSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBIHN0cmluZyB0aGF0IGNvbnRhaW5zIHRoZSB0ZW1wbGF0ZSB1c2VkIGZvciBlYWNoIGRyb3BwZWRcbiAgICogZmlsZS4gQ2hhbmdlIGl0IHRvIGZ1bGZpbGwgeW91ciBuZWVkcyBidXQgbWFrZSBzdXJlIHRvIHByb3Blcmx5XG4gICAqIHByb3ZpZGUgYWxsIGVsZW1lbnRzLlxuICAgKlxuICAgKiBJZiB5b3Ugd2FudCB0byB1c2UgYW4gYWN0dWFsIEhUTUwgZWxlbWVudCBpbnN0ZWFkIG9mIHByb3ZpZGluZyBhIFN0cmluZ1xuICAgKiBhcyBhIGNvbmZpZyBvcHRpb24sIHlvdSBjb3VsZCBjcmVhdGUgYSBkaXYgd2l0aCB0aGUgaWQgYHRwbGAsXG4gICAqIHB1dCB0aGUgdGVtcGxhdGUgaW5zaWRlIGl0IGFuZCBwcm92aWRlIHRoZSBlbGVtZW50IGxpa2UgdGhpczpcbiAgICpcbiAgICogICAgIGRvY3VtZW50XG4gICAqICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjdHBsJylcbiAgICogICAgICAgLmlubmVySFRNTFxuICAgKlxuICAgKi9cbiAgcHJldmlld1RlbXBsYXRlOiBkZWZhdWx0UHJldmlld1RlbXBsYXRlLFxuXG4gIC8qXG4gICBUaG9zZSBmdW5jdGlvbnMgcmVnaXN0ZXIgdGhlbXNlbHZlcyB0byB0aGUgZXZlbnRzIG9uIGluaXQgYW5kIGhhbmRsZSBhbGxcbiAgIHRoZSB1c2VyIGludGVyZmFjZSBzcGVjaWZpYyBzdHVmZi4gT3ZlcndyaXRpbmcgdGhlbSB3b24ndCBicmVhayB0aGUgdXBsb2FkXG4gICBidXQgY2FuIGJyZWFrIHRoZSB3YXkgaXQncyBkaXNwbGF5ZWQuXG4gICBZb3UgY2FuIG92ZXJ3cml0ZSB0aGVtIGlmIHlvdSBkb24ndCBsaWtlIHRoZSBkZWZhdWx0IGJlaGF2aW9yLiBJZiB5b3UganVzdFxuICAgd2FudCB0byBhZGQgYW4gYWRkaXRpb25hbCBldmVudCBoYW5kbGVyLCByZWdpc3RlciBpdCBvbiB0aGUgZHJvcHpvbmUgb2JqZWN0XG4gICBhbmQgZG9uJ3Qgb3ZlcndyaXRlIHRob3NlIG9wdGlvbnMuXG4gICAqL1xuXG4gIC8vIFRob3NlIGFyZSBzZWxmIGV4cGxhbmF0b3J5IGFuZCBzaW1wbHkgY29uY2VybiB0aGUgRHJhZ25Ecm9wLlxuICBkcm9wKGUpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkei1kcmFnLWhvdmVyXCIpO1xuICB9LFxuICBkcmFnc3RhcnQoZSkge30sXG4gIGRyYWdlbmQoZSkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImR6LWRyYWctaG92ZXJcIik7XG4gIH0sXG4gIGRyYWdlbnRlcihlKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHotZHJhZy1ob3ZlclwiKTtcbiAgfSxcbiAgZHJhZ292ZXIoZSkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LWRyYWctaG92ZXJcIik7XG4gIH0sXG4gIGRyYWdsZWF2ZShlKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHotZHJhZy1ob3ZlclwiKTtcbiAgfSxcblxuICBwYXN0ZShlKSB7fSxcblxuICAvLyBDYWxsZWQgd2hlbmV2ZXIgdGhlcmUgYXJlIG5vIGZpbGVzIGxlZnQgaW4gdGhlIGRyb3B6b25lIGFueW1vcmUsIGFuZCB0aGVcbiAgLy8gZHJvcHpvbmUgc2hvdWxkIGJlIGRpc3BsYXllZCBhcyBpZiBpbiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAgcmVzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHotc3RhcnRlZFwiKTtcbiAgfSxcblxuICAvLyBDYWxsZWQgd2hlbiBhIGZpbGUgaXMgYWRkZWQgdG8gdGhlIHF1ZXVlXG4gIC8vIFJlY2VpdmVzIGBmaWxlYFxuICBhZGRlZGZpbGUoZmlsZSkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQgPT09IHRoaXMucHJldmlld3NDb250YWluZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHotc3RhcnRlZFwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcmV2aWV3c0NvbnRhaW5lciAmJiAhdGhpcy5vcHRpb25zLmRpc2FibGVQcmV2aWV3cykge1xuICAgICAgZmlsZS5wcmV2aWV3RWxlbWVudCA9IERyb3B6b25lLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIHRoaXMub3B0aW9ucy5wcmV2aWV3VGVtcGxhdGUudHJpbSgpXG4gICAgICApO1xuICAgICAgZmlsZS5wcmV2aWV3VGVtcGxhdGUgPSBmaWxlLnByZXZpZXdFbGVtZW50OyAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXG4gICAgICB0aGlzLnByZXZpZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpbGUucHJldmlld0VsZW1lbnQpO1xuICAgICAgZm9yICh2YXIgbm9kZSBvZiBmaWxlLnByZXZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1kei1uYW1lXVwiKSkge1xuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gZmlsZS5uYW1lO1xuICAgICAgfVxuICAgICAgZm9yIChub2RlIG9mIGZpbGUucHJldmlld0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWR6LXNpemVdXCIpKSB7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gdGhpcy5maWxlc2l6ZShmaWxlLnNpemUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFkZFJlbW92ZUxpbmtzKSB7XG4gICAgICAgIGZpbGUuX3JlbW92ZUxpbmsgPSBEcm9wem9uZS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIGA8YSBjbGFzcz1cImR6LXJlbW92ZVwiIGhyZWY9XCJqYXZhc2NyaXB0OnVuZGVmaW5lZDtcIiBkYXRhLWR6LXJlbW92ZT4ke3RoaXMub3B0aW9ucy5kaWN0UmVtb3ZlRmlsZX08L2E+YFxuICAgICAgICApO1xuICAgICAgICBmaWxlLnByZXZpZXdFbGVtZW50LmFwcGVuZENoaWxkKGZpbGUuX3JlbW92ZUxpbmspO1xuICAgICAgfVxuXG4gICAgICBsZXQgcmVtb3ZlRmlsZUV2ZW50ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoZmlsZS5zdGF0dXMgPT09IERyb3B6b25lLlVQTE9BRElORykge1xuICAgICAgICAgIHJldHVybiBEcm9wem9uZS5jb25maXJtKFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRpY3RDYW5jZWxVcGxvYWRDb25maXJtYXRpb24sXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnJlbW92ZUZpbGUoZmlsZSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGljdFJlbW92ZUZpbGVDb25maXJtYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBEcm9wem9uZS5jb25maXJtKFxuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGljdFJlbW92ZUZpbGVDb25maXJtYXRpb24sXG4gICAgICAgICAgICAgICgpID0+IHRoaXMucmVtb3ZlRmlsZShmaWxlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlRmlsZShmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAobGV0IHJlbW92ZUxpbmsgb2YgZmlsZS5wcmV2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICBcIltkYXRhLWR6LXJlbW92ZV1cIlxuICAgICAgKSkge1xuICAgICAgICByZW1vdmVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVGaWxlRXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvLyBDYWxsZWQgd2hlbmV2ZXIgYSBmaWxlIGlzIHJlbW92ZWQuXG4gIHJlbW92ZWRmaWxlKGZpbGUpIHtcbiAgICBpZiAoZmlsZS5wcmV2aWV3RWxlbWVudCAhPSBudWxsICYmIGZpbGUucHJldmlld0VsZW1lbnQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICBmaWxlLnByZXZpZXdFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZmlsZS5wcmV2aWV3RWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl91cGRhdGVNYXhGaWxlc1JlYWNoZWRDbGFzcygpO1xuICB9LFxuXG4gIC8vIENhbGxlZCB3aGVuIGEgdGh1bWJuYWlsIGhhcyBiZWVuIGdlbmVyYXRlZFxuICAvLyBSZWNlaXZlcyBgZmlsZWAgYW5kIGBkYXRhVXJsYFxuICB0aHVtYm5haWwoZmlsZSwgZGF0YVVybCkge1xuICAgIGlmIChmaWxlLnByZXZpZXdFbGVtZW50KSB7XG4gICAgICBmaWxlLnByZXZpZXdFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkei1maWxlLXByZXZpZXdcIik7XG4gICAgICBmb3IgKGxldCB0aHVtYm5haWxFbGVtZW50IG9mIGZpbGUucHJldmlld0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgXCJbZGF0YS1kei10aHVtYm5haWxdXCJcbiAgICAgICkpIHtcbiAgICAgICAgdGh1bWJuYWlsRWxlbWVudC5hbHQgPSBmaWxlLm5hbWU7XG4gICAgICAgIHRodW1ibmFpbEVsZW1lbnQuc3JjID0gZGF0YVVybDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IGZpbGUucHJldmlld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LWltYWdlLXByZXZpZXdcIiksXG4gICAgICAgIDFcbiAgICAgICk7XG4gICAgfVxuICB9LFxuXG4gIC8vIENhbGxlZCB3aGVuZXZlciBhbiBlcnJvciBvY2N1cnNcbiAgLy8gUmVjZWl2ZXMgYGZpbGVgIGFuZCBgbWVzc2FnZWBcbiAgZXJyb3IoZmlsZSwgbWVzc2FnZSkge1xuICAgIGlmIChmaWxlLnByZXZpZXdFbGVtZW50KSB7XG4gICAgICBmaWxlLnByZXZpZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkei1lcnJvclwiKTtcbiAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gXCJzdHJpbmdcIiAmJiBtZXNzYWdlLmVycm9yKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLmVycm9yO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgbm9kZSBvZiBmaWxlLnByZXZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIFwiW2RhdGEtZHotZXJyb3JtZXNzYWdlXVwiXG4gICAgICApKSB7XG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBlcnJvcm11bHRpcGxlKCkge30sXG5cbiAgLy8gQ2FsbGVkIHdoZW4gYSBmaWxlIGdldHMgcHJvY2Vzc2VkLiBTaW5jZSB0aGVyZSBpcyBhIGN1ZSwgbm90IGFsbCBhZGRlZFxuICAvLyBmaWxlcyBhcmUgcHJvY2Vzc2VkIGltbWVkaWF0ZWx5LlxuICAvLyBSZWNlaXZlcyBgZmlsZWBcbiAgcHJvY2Vzc2luZyhmaWxlKSB7XG4gICAgaWYgKGZpbGUucHJldmlld0VsZW1lbnQpIHtcbiAgICAgIGZpbGUucHJldmlld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LXByb2Nlc3NpbmdcIik7XG4gICAgICBpZiAoZmlsZS5fcmVtb3ZlTGluaykge1xuICAgICAgICByZXR1cm4gKGZpbGUuX3JlbW92ZUxpbmsuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmRpY3RDYW5jZWxVcGxvYWQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBwcm9jZXNzaW5nbXVsdGlwbGUoKSB7fSxcblxuICAvLyBDYWxsZWQgd2hlbmV2ZXIgdGhlIHVwbG9hZCBwcm9ncmVzcyBnZXRzIHVwZGF0ZWQuXG4gIC8vIFJlY2VpdmVzIGBmaWxlYCwgYHByb2dyZXNzYCAocGVyY2VudGFnZSAwLTEwMCkgYW5kIGBieXRlc1NlbnRgLlxuICAvLyBUbyBnZXQgdGhlIHRvdGFsIG51bWJlciBvZiBieXRlcyBvZiB0aGUgZmlsZSwgdXNlIGBmaWxlLnNpemVgXG4gIHVwbG9hZHByb2dyZXNzKGZpbGUsIHByb2dyZXNzLCBieXRlc1NlbnQpIHtcbiAgICBpZiAoZmlsZS5wcmV2aWV3RWxlbWVudCkge1xuICAgICAgZm9yIChsZXQgbm9kZSBvZiBmaWxlLnByZXZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIFwiW2RhdGEtZHotdXBsb2FkcHJvZ3Jlc3NdXCJcbiAgICAgICkpIHtcbiAgICAgICAgbm9kZS5ub2RlTmFtZSA9PT0gXCJQUk9HUkVTU1wiXG4gICAgICAgICAgPyAobm9kZS52YWx1ZSA9IHByb2dyZXNzKVxuICAgICAgICAgIDogKG5vZGUuc3R5bGUud2lkdGggPSBgJHtwcm9ncmVzc30lYCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8vIENhbGxlZCB3aGVuZXZlciB0aGUgdG90YWwgdXBsb2FkIHByb2dyZXNzIGdldHMgdXBkYXRlZC5cbiAgLy8gQ2FsbGVkIHdpdGggdG90YWxVcGxvYWRQcm9ncmVzcyAoMC0xMDApLCB0b3RhbEJ5dGVzIGFuZCB0b3RhbEJ5dGVzU2VudFxuICB0b3RhbHVwbG9hZHByb2dyZXNzKCkge30sXG5cbiAgLy8gQ2FsbGVkIGp1c3QgYmVmb3JlIHRoZSBmaWxlIGlzIHNlbnQuIEdldHMgdGhlIGB4aHJgIG9iamVjdCBhcyBzZWNvbmRcbiAgLy8gcGFyYW1ldGVyLCBzbyB5b3UgY2FuIG1vZGlmeSBpdCAoZm9yIGV4YW1wbGUgdG8gYWRkIGEgQ1NSRiB0b2tlbikgYW5kIGFcbiAgLy8gYGZvcm1EYXRhYCBvYmplY3QgdG8gYWRkIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24uXG4gIHNlbmRpbmcoKSB7fSxcblxuICBzZW5kaW5nbXVsdGlwbGUoKSB7fSxcblxuICAvLyBXaGVuIHRoZSBjb21wbGV0ZSB1cGxvYWQgaXMgZmluaXNoZWQgYW5kIHN1Y2Nlc3NmdWxcbiAgLy8gUmVjZWl2ZXMgYGZpbGVgXG4gIHN1Y2Nlc3MoZmlsZSkge1xuICAgIGlmIChmaWxlLnByZXZpZXdFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZmlsZS5wcmV2aWV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHotc3VjY2Vzc1wiKTtcbiAgICB9XG4gIH0sXG5cbiAgc3VjY2Vzc211bHRpcGxlKCkge30sXG5cbiAgLy8gV2hlbiB0aGUgdXBsb2FkIGlzIGNhbmNlbGVkLlxuICBjYW5jZWxlZChmaWxlKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1pdChcImVycm9yXCIsIGZpbGUsIHRoaXMub3B0aW9ucy5kaWN0VXBsb2FkQ2FuY2VsZWQpO1xuICB9LFxuXG4gIGNhbmNlbGVkbXVsdGlwbGUoKSB7fSxcblxuICAvLyBXaGVuIHRoZSB1cGxvYWQgaXMgZmluaXNoZWQsIGVpdGhlciB3aXRoIHN1Y2Nlc3Mgb3IgYW4gZXJyb3IuXG4gIC8vIFJlY2VpdmVzIGBmaWxlYFxuICBjb21wbGV0ZShmaWxlKSB7XG4gICAgaWYgKGZpbGUuX3JlbW92ZUxpbmspIHtcbiAgICAgIGZpbGUuX3JlbW92ZUxpbmsuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmRpY3RSZW1vdmVGaWxlO1xuICAgIH1cbiAgICBpZiAoZmlsZS5wcmV2aWV3RWxlbWVudCkge1xuICAgICAgcmV0dXJuIGZpbGUucHJldmlld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LWNvbXBsZXRlXCIpO1xuICAgIH1cbiAgfSxcblxuICBjb21wbGV0ZW11bHRpcGxlKCkge30sXG5cbiAgbWF4ZmlsZXNleGNlZWRlZCgpIHt9LFxuXG4gIG1heGZpbGVzcmVhY2hlZCgpIHt9LFxuXG4gIHF1ZXVlY29tcGxldGUoKSB7fSxcblxuICBhZGRlZGZpbGVzKCkge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0T3B0aW9ucztcbiIsICJtb2R1bGUuZXhwb3J0cyA9IFwiYTFhY2YzMTljNDcxZmEwM1wiOyIsICJpbXBvcnQgRHJvcHpvbmUgZnJvbSBcImRyb3B6b25lXCI7XG5pbXBvcnQgXCJkcm9wem9uZS9kaXN0L2Ryb3B6b25lLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcm9wem9uZUNvbXBvbmVudCh7XG4gICAgY29tcG9uZW50SWQsXG4gICAgbWF4RmlsZXNpemUsXG4gICAgYWNjZXB0ZWRGaWxlcyxcbiAgICBjaHVua1NpemUsXG4gICAgY2h1bmtpbmcsXG4gICAgYWxsb3dNdWx0aXBsZSxcbiAgICBwYXJhbGxlbFVwbG9hZHMsXG4gICAgcGFyYWxsZWxDaHVua3NVcGxvYWRzLFxuICAgIGF1dG9Qcm9jZXNzUXVldWUsXG4gICAgdXJsLFxuICAgIHJldHJ5Q2h1bmtzLFxuICAgIHJldHJ5Q2h1bmtzTGltaXQsXG4gICAgY2xlYXJPbkZpbmlzaCxcbiAgICBsZWF2ZUZhaWxlZCxcbiAgICBkaXJlY3RvcnksXG4gICAgZGlzayxcbiAgICBtYXhWaWRlb0R1cmF0aW9uLFxuICAgIGRlZmF1bHRNZXNzYWdlLFxuICAgIHN1Y2Nlc3NUaXRsZSxcbiAgICBzdWNjZXNzTWVzc2FnZSxcbiAgICBzdGF0ZVxufSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRyb3B6b25lOiBudWxsLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgc3RhdGUsXG5cbiAgICAgICAgaW5pdDogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgZHJvcHpvbmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29tcG9uZW50SWQpO1xuXG4gICAgICAgICAgICBpZiAoZGlyZWN0b3J5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0b3J5ID0gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWF4RmlsZXNpemU6IG1heEZpbGVzaXplLFxuICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IGFjY2VwdGVkRmlsZXMsXG4gICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZTogYWxsb3dNdWx0aXBsZSxcbiAgICAgICAgICAgICAgICBhdXRvUHJvY2Vzc1F1ZXVlOiBhdXRvUHJvY2Vzc1F1ZXVlLFxuICAgICAgICAgICAgICAgIHBhcmFsbGVsVXBsb2FkczogcGFyYWxsZWxVcGxvYWRzLFxuICAgICAgICAgICAgICAgIHBhcmFsbGVsQ2h1bmtzVXBsb2FkczogcGFyYWxsZWxDaHVua3NVcGxvYWRzLFxuICAgICAgICAgICAgICAgIGNodW5raW5nOiBjaHVua2luZyxcbiAgICAgICAgICAgICAgICBjaHVua1NpemU6IGNodW5rU2l6ZSxcbiAgICAgICAgICAgICAgICB1cmw6IGAke3VybH0/ZGlyZWN0b3J5PSR7ZGlyZWN0b3J5fSZkaXNrPSR7ZGlza31gLFxuICAgICAgICAgICAgICAgIHJldHJ5Q2h1bmtzOiByZXRyeUNodW5rcyxcbiAgICAgICAgICAgICAgICByZXRyeUNodW5rc0xpbWl0OiByZXRyeUNodW5rc0xpbWl0LFxuICAgICAgICAgICAgICAgIGRpY3REZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgbWF4RmlsZXM6IGFsbG93TXVsdGlwbGUgPyBudWxsIDogMSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kcm9wem9uZSA9IG5ldyBEcm9wem9uZShkcm9wem9uZUVsZW1lbnQsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICB0aGlzLmRyb3B6b25lLm9uKFwiYWRkZWRmaWxlXCIsIChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEZvcm1FdmVudCgnZm9ybS1wcm9jZXNzaW5nLXN0YXJ0ZWQnKTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXhWaWRlb0R1cmF0aW9uICYmIGZpbGUudHlwZS5zdGFydHNXaXRoKCd2aWRlby8nKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmlkZW8uZHVyYXRpb24gPiBtYXhWaWRlb0R1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wem9uZS5yZW1vdmVGaWxlKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBgVmlkZW8gZHVyYXRpb24gaXMgdG9vIGxvbmcuIE1heGltdW0gYWxsb3dlZCBkdXJhdGlvbiBpcyAke21heFZpZGVvRHVyYXRpb259IHNlY29uZHMuYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmRyb3B6b25lLm9uKFwiZXJyb3JcIiwgKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgdXBsb2FkaW5nIGZpbGU6ICR7ZmlsZS5uYW1lfWAsIHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IG5ldyB3aW5kb3cuRmlsYW1lbnROb3RpZmljYXRpb24oKTtcblxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi50aXRsZShgRXJyb3IgdXBsb2FkaW5nIGZpbGU6ICR7ZmlsZS5uYW1lfWApXG4gICAgICAgICAgICAgICAgICAgIC53YXJuaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLmJvZHkodGhpcy5lcnJvciA/PyByZXNwb25zZT8ubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmRyb3B6b25lLm9uKFwicXVldWVjb21wbGV0ZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZHJvcHpvbmUuZmlsZXMubWFwKChmaWxlKSA9PiBkaXJlY3RvcnlcbiAgICAgICAgICAgICAgICAgICAgPyBgJHtkaXJlY3Rvcnl9LyR7ZmlsZS5uYW1lfWBcbiAgICAgICAgICAgICAgICAgICAgOiBmaWxlLm5hbWVcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxGaWxlc0NvdW50ID0gdGhpcy5kcm9wem9uZS5maWxlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc2Z1bFVwbG9hZHNDb3VudCA9IHRoaXMuZHJvcHpvbmUuZ2V0RmlsZXNXaXRoU3RhdHVzKERyb3B6b25lLlNVQ0NFU1MpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBmYWlsZWRVcGxvYWRzQ291bnQgPSB0aGlzLmRyb3B6b25lLmdldEZpbGVzV2l0aFN0YXR1cyhEcm9wem9uZS5FUlJPUikubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3NmdWxVcGxvYWRzQ291bnQgPiBmYWlsZWRVcGxvYWRzQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gbmV3IHdpbmRvdy5GaWxhbWVudE5vdGlmaWNhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHN1Y2Nlc3NUaXRsZSA/PyBcIlVwbG9hZCBjb21wbGV0ZVwiO1xuXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi50aXRsZSh0aXRsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uYm9keShzdWNjZXNzTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYXJPbkZpbmlzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wem9uZS5yZW1vdmVBbGxGaWxlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAobGVhdmVGYWlsZWQgJiYgZmFpbGVkVXBsb2Fkc0NvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLndhcm5pbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5ib2R5KCdTb21lIGZpbGVzIGZhaWxlZCB0byB1cGxvYWQuIFBsZWFzZSBjaGVjayB0aGUgbGlzdCBiZWxvdy4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wem9uZS5nZXRGaWxlc1dpdGhTdGF0dXMoRHJvcHpvbmUuU1VDQ0VTUykuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcHpvbmUucmVtb3ZlRmlsZShmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLnN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5zZW5kKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gbmV3IHdpbmRvdy5GaWxhbWVudE5vdGlmaWNhdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi50aXRsZShcIlVwbG9hZCBmYWlsZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgLmRhbmdlcigpXG4gICAgICAgICAgICAgICAgICAgICAgIC5ib2R5KGZhaWxlZFVwbG9hZHNDb3VudCA+IDA/IFwiUGxlYXNlIGNoZWNrIHRoZSBsaXN0IGJlbG93LlwiIDogXCJObyBmaWxlcyB3ZXJlIHVwbG9hZGVkLlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hGb3JtRXZlbnQoJ2Zvcm0tcHJvY2Vzc2luZy1maW5pc2hlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsRmlsZXNDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NmdWxVcGxvYWRzQ291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsZWRVcGxvYWRzQ291bnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGVhci1kcm9wem9uZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kcm9wem9uZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyb3B6b25lLnJlbW92ZUFsbEZpbGVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5kcm9wem9uZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmRyb3B6b25lID0gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBkaXNwYXRjaEZvcm1FdmVudDogZnVuY3Rpb24gKG5hbWUsIGRldGFpbCA9IHt9KSB7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKVxuICAg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
