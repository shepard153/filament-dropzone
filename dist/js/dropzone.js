var C=U;function U(){var s=[].slice.call(arguments),e=!1;typeof s[0]=="boolean"&&(e=s.shift());var i=s[0];if(L(i))throw new Error("extendee must be an object");for(var t=s.slice(1),n=t.length,r=0;r<n;r++){var l=t[r];for(var o in l)if(Object.prototype.hasOwnProperty.call(l,o)){var a=l[o];if(e&&$(a)){var d=Array.isArray(a)?[]:{};i[o]=U(!0,Object.prototype.hasOwnProperty.call(i,o)&&!L(i[o])?i[o]:d,a)}else i[o]=a}}return i}function $(s){return Array.isArray(s)||{}.toString.call(s)=="[object Object]"}function L(s){return!s||typeof s!="object"&&typeof s!="function"}function _(s){return s&&s.__esModule?s.default:s}var w=class{on(e,i){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(i),this}emit(e,...i){this._callbacks=this._callbacks||{};let t=this._callbacks[e];if(t)for(let n of t)n.apply(this,i);return this.element&&this.element.dispatchEvent(this.makeEvent("dropzone:"+e,{args:i})),this}makeEvent(e,i){let t={bubbles:!0,cancelable:!0,detail:i};if(typeof window.CustomEvent=="function")return new CustomEvent(e,t);var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}off(e,i){if(!this._callbacks||arguments.length===0)return this._callbacks={},this;let t=this._callbacks[e];if(!t)return this;if(arguments.length===1)return delete this._callbacks[e],this;for(let n=0;n<t.length;n++)if(t[n]===i){t.splice(n,1);break}return this}},T={};T=`<div class="dz-preview dz-file-preview">
  <div class="dz-image"><img data-dz-thumbnail=""></div>
  <div class="dz-details">
    <div class="dz-size"><span data-dz-size=""></span></div>
    <div class="dz-filename"><span data-dz-name=""></span></div>
  </div>
  <div class="dz-progress">
    <span class="dz-upload" data-dz-uploadprogress=""></span>
  </div>
  <div class="dz-error-message"><span data-dz-errormessage=""></span></div>
  <div class="dz-success-mark">
    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.2071 29.7929L14.2929 25.7071C14.6834 25.3166 15.3166 25.3166 15.7071 25.7071L21.2929 31.2929C21.6834 31.6834 22.3166 31.6834 22.7071 31.2929L38.2929 15.7071C38.6834 15.3166 39.3166 15.3166 39.7071 15.7071L43.7929 19.7929C44.1834 20.1834 44.1834 20.8166 43.7929 21.2071L22.7071 42.2929C22.3166 42.6834 21.6834 42.6834 21.2929 42.2929L10.2071 31.2071C9.81658 30.8166 9.81658 30.1834 10.2071 29.7929Z"></path>
    </svg>
  </div>
  <div class="dz-error-mark">
    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.2929 20.2929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071L13.2071 17.7929C12.8166 18.1834 12.8166 18.8166 13.2071 19.2071L20.2929 26.2929C20.6834 26.6834 20.6834 27.3166 20.2929 27.7071L13.2071 34.7929C12.8166 35.1834 12.8166 35.8166 13.2071 36.2071L17.7929 40.7929C18.1834 41.1834 18.8166 41.1834 19.2071 40.7929L26.2929 33.7071C26.6834 33.3166 27.3166 33.3166 27.7071 33.7071L34.7929 40.7929C35.1834 41.1834 35.8166 41.1834 36.2071 40.7929L40.7929 36.2071C41.1834 35.8166 41.1834 35.1834 40.7929 34.7929L33.7071 27.7071C33.3166 27.3166 33.3166 26.6834 33.7071 26.2929L40.7929 19.2071C41.1834 18.8166 41.1834 18.1834 40.7929 17.7929L36.2071 13.2071C35.8166 12.8166 35.1834 12.8166 34.7929 13.2071L27.7071 20.2929C27.3166 20.6834 26.6834 20.6834 26.2929 20.2929Z"></path>
    </svg>
  </div>
</div>
`;var P={url:null,method:"post",withCredentials:!1,timeout:null,parallelUploads:2,uploadMultiple:!1,chunking:!1,forceChunking:!1,chunkSize:2097152,parallelChunkUploads:!1,retryChunks:!1,retryChunksLimit:3,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,headers:null,defaultHeaders:!0,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,disablePreviews:!1,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictUploadCanceled:"Upload canceled.",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init(){},params(s,e,i){if(i)return{dzuuid:i.file.upload.uuid,dzchunkindex:i.index,dztotalfilesize:i.file.size,dzchunksize:this.options.chunkSize,dztotalchunkcount:i.file.upload.totalChunkCount,dzchunkbyteoffset:i.index*this.options.chunkSize}},accept(s,e){return e()},chunksUploaded:function(s,e){e()},binaryBody:!1,fallback(){let s;this.element.className=`${this.element.className} dz-browser-not-supported`;for(let i of this.element.getElementsByTagName("div"))if(/(^| )dz-message($| )/.test(i.className)){s=i,i.className="dz-message";break}s||(s=p.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(s));let e=s.getElementsByTagName("span")[0];return e&&(e.textContent!=null?e.textContent=this.options.dictFallbackMessage:e.innerText!=null&&(e.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize(s,e,i,t){let n={srcX:0,srcY:0,srcWidth:s.width,srcHeight:s.height},r=s.width/s.height;e==null&&i==null?(e=n.srcWidth,i=n.srcHeight):e==null?e=i*r:i==null&&(i=e/r),e=Math.min(e,n.srcWidth),i=Math.min(i,n.srcHeight);let l=e/i;if(n.srcWidth>e||n.srcHeight>i)if(t==="crop")r>l?(n.srcHeight=s.height,n.srcWidth=n.srcHeight*l):(n.srcWidth=s.width,n.srcHeight=n.srcWidth/l);else if(t==="contain")r>l?i=e/r:e=i*r;else throw new Error(`Unknown resizeMethod '${t}'`);return n.srcX=(s.width-n.srcWidth)/2,n.srcY=(s.height-n.srcHeight)/2,n.trgWidth=e,n.trgHeight=i,n},transformFile(s,e){return(this.options.resizeWidth||this.options.resizeHeight)&&s.type.match(/image.*/)?this.resizeImage(s,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,e):e(s)},previewTemplate:_(T),drop(s){return this.element.classList.remove("dz-drag-hover")},dragstart(s){},dragend(s){return this.element.classList.remove("dz-drag-hover")},dragenter(s){return this.element.classList.add("dz-drag-hover")},dragover(s){return this.element.classList.add("dz-drag-hover")},dragleave(s){return this.element.classList.remove("dz-drag-hover")},paste(s){},reset(){return this.element.classList.remove("dz-started")},addedfile(s){if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer&&!this.options.disablePreviews){s.previewElement=p.createElement(this.options.previewTemplate.trim()),s.previewTemplate=s.previewElement,this.previewsContainer.appendChild(s.previewElement);for(var e of s.previewElement.querySelectorAll("[data-dz-name]"))e.textContent=s.name;for(e of s.previewElement.querySelectorAll("[data-dz-size]"))e.innerHTML=this.filesize(s.size);this.options.addRemoveLinks&&(s._removeLink=p.createElement(`<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`),s.previewElement.appendChild(s._removeLink));let i=t=>(t.preventDefault(),t.stopPropagation(),s.status===p.UPLOADING?p.confirm(this.options.dictCancelUploadConfirmation,()=>this.removeFile(s)):this.options.dictRemoveFileConfirmation?p.confirm(this.options.dictRemoveFileConfirmation,()=>this.removeFile(s)):this.removeFile(s));for(let t of s.previewElement.querySelectorAll("[data-dz-remove]"))t.addEventListener("click",i)}},removedfile(s){return s.previewElement!=null&&s.previewElement.parentNode!=null&&s.previewElement.parentNode.removeChild(s.previewElement),this._updateMaxFilesReachedClass()},thumbnail(s,e){if(s.previewElement){s.previewElement.classList.remove("dz-file-preview");for(let i of s.previewElement.querySelectorAll("[data-dz-thumbnail]"))i.alt=s.name,i.src=e;return setTimeout(()=>s.previewElement.classList.add("dz-image-preview"),1)}},error(s,e){if(s.previewElement){s.previewElement.classList.add("dz-error"),typeof e!="string"&&e.error&&(e=e.error);for(let i of s.previewElement.querySelectorAll("[data-dz-errormessage]"))i.textContent=e}},errormultiple(){},processing(s){if(s.previewElement&&(s.previewElement.classList.add("dz-processing"),s._removeLink))return s._removeLink.innerHTML=this.options.dictCancelUpload},processingmultiple(){},uploadprogress(s,e,i){if(s.previewElement)for(let t of s.previewElement.querySelectorAll("[data-dz-uploadprogress]"))t.nodeName==="PROGRESS"?t.value=e:t.style.width=`${e}%`},totaluploadprogress(){},sending(){},sendingmultiple(){},success(s){if(s.previewElement)return s.previewElement.classList.add("dz-success")},successmultiple(){},canceled(s){return this.emit("error",s,this.options.dictUploadCanceled)},canceledmultiple(){},complete(s){if(s._removeLink&&(s._removeLink.innerHTML=this.options.dictRemoveFile),s.previewElement)return s.previewElement.classList.add("dz-complete")},completemultiple(){},maxfilesexceeded(){},maxfilesreached(){},queuecomplete(){},addedfiles(){}},O=P,p=class s extends w{static initClass(){this.prototype.Emitter=w,this.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],this.prototype._thumbnailQueue=[],this.prototype._processingThumbnail=!1}getAcceptedFiles(){return this.files.filter(e=>e.accepted).map(e=>e)}getRejectedFiles(){return this.files.filter(e=>!e.accepted).map(e=>e)}getFilesWithStatus(e){return this.files.filter(i=>i.status===e).map(i=>i)}getQueuedFiles(){return this.getFilesWithStatus(s.QUEUED)}getUploadingFiles(){return this.getFilesWithStatus(s.UPLOADING)}getAddedFiles(){return this.getFilesWithStatus(s.ADDED)}getActiveFiles(){return this.files.filter(e=>e.status===s.UPLOADING||e.status===s.QUEUED).map(e=>e)}init(){if(this.element.tagName==="form"&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(s.createElement(`<div class="dz-default dz-message"><button class="dz-button" type="button">${this.options.dictDefaultMessage}</button></div>`)),this.clickableElements.length){let t=()=>{this.hiddenFileInput&&this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=document.createElement("input"),this.hiddenFileInput.setAttribute("type","file"),(this.options.maxFiles===null||this.options.maxFiles>1)&&this.hiddenFileInput.setAttribute("multiple","multiple"),this.hiddenFileInput.className="dz-hidden-input",this.options.acceptedFiles!==null&&this.hiddenFileInput.setAttribute("accept",this.options.acceptedFiles),this.options.capture!==null&&this.hiddenFileInput.setAttribute("capture",this.options.capture),this.hiddenFileInput.setAttribute("tabindex","-1"),this.hiddenFileInput.style.visibility="hidden",this.hiddenFileInput.style.position="absolute",this.hiddenFileInput.style.top="0",this.hiddenFileInput.style.left="0",this.hiddenFileInput.style.height="0",this.hiddenFileInput.style.width="0",s.getElement(this.options.hiddenInputContainer,"hiddenInputContainer").appendChild(this.hiddenFileInput),this.hiddenFileInput.addEventListener("change",()=>{let{files:n}=this.hiddenFileInput;if(n.length)for(let r of n)this.addFile(r);this.emit("addedfiles",n),t()})};t()}this.URL=window.URL!==null?window.URL:window.webkitURL;for(let t of this.events)this.on(t,this.options[t]);this.on("uploadprogress",()=>this.updateTotalUploadProgress()),this.on("removedfile",()=>this.updateTotalUploadProgress()),this.on("canceled",t=>this.emit("complete",t)),this.on("complete",t=>{if(this.getAddedFiles().length===0&&this.getUploadingFiles().length===0&&this.getQueuedFiles().length===0)return setTimeout(()=>this.emit("queuecomplete"),0)});let e=function(t){if(t.dataTransfer.types){for(var n=0;n<t.dataTransfer.types.length;n++)if(t.dataTransfer.types[n]==="Files")return!0}return!1},i=function(t){if(e(t))return t.stopPropagation(),t.preventDefault?t.preventDefault():t.returnValue=!1};return this.listeners=[{element:this.element,events:{dragstart:t=>this.emit("dragstart",t),dragenter:t=>(i(t),this.emit("dragenter",t)),dragover:t=>{let n;try{n=t.dataTransfer.effectAllowed}catch{}return t.dataTransfer.dropEffect=n==="move"||n==="linkMove"?"move":"copy",i(t),this.emit("dragover",t)},dragleave:t=>this.emit("dragleave",t),drop:t=>(i(t),this.drop(t)),dragend:t=>this.emit("dragend",t)}}],this.clickableElements.forEach(t=>this.listeners.push({element:t,events:{click:n=>((t!==this.element||n.target===this.element||s.elementInside(n.target,this.element.querySelector(".dz-message")))&&this.hiddenFileInput.click(),!0)}})),this.enable(),this.options.init.call(this)}destroy(){return this.disable(),this.removeAllFiles(!0),this.hiddenFileInput!=null&&this.hiddenFileInput.parentNode&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,s.instances.splice(s.instances.indexOf(this),1)}updateTotalUploadProgress(){let e,i=0,t=0;if(this.getActiveFiles().length){for(let r of this.getActiveFiles())i+=r.upload.bytesSent,t+=r.upload.total;e=100*i/t}else e=100;return this.emit("totaluploadprogress",e,t,i)}_getParamName(e){return typeof this.options.paramName=="function"?this.options.paramName(e):`${this.options.paramName}${this.options.uploadMultiple?`[${e}]`:""}`}_renameFile(e){return typeof this.options.renameFile!="function"?e.name:this.options.renameFile(e)}getFallbackForm(){let e,i;if(e=this.getExistingFallback())return e;let t='<div class="dz-fallback">';this.options.dictFallbackText&&(t+=`<p>${this.options.dictFallbackText}</p>`),t+=`<input type="file" name="${this._getParamName(0)}" ${this.options.uploadMultiple?'multiple="multiple"':void 0} /><input type="submit" value="Upload!"></div>`;let n=s.createElement(t);return this.element.tagName!=="FORM"?(i=s.createElement(`<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`),i.appendChild(n)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),i??n}getExistingFallback(){let e=function(t){for(let n of t)if(/(^| )fallback($| )/.test(n.className))return n};for(let t of["div","form"]){var i;if(i=e(this.element.getElementsByTagName(t)))return i}}setupEventListeners(){return this.listeners.map(e=>(()=>{let i=[];for(let t in e.events){let n=e.events[t];i.push(e.element.addEventListener(t,n,!1))}return i})())}removeEventListeners(){return this.listeners.map(e=>(()=>{let i=[];for(let t in e.events){let n=e.events[t];i.push(e.element.removeEventListener(t,n,!1))}return i})())}disable(){return this.clickableElements.forEach(e=>e.classList.remove("dz-clickable")),this.removeEventListeners(),this.disabled=!0,this.files.map(e=>this.cancelUpload(e))}enable(){return delete this.disabled,this.clickableElements.forEach(e=>e.classList.add("dz-clickable")),this.setupEventListeners()}filesize(e){let i=0,t="b";if(e>0){let n=["tb","gb","mb","kb","b"];for(let r=0;r<n.length;r++){let l=n[r],o=Math.pow(this.options.filesizeBase,4-r)/10;if(e>=o){i=e/Math.pow(this.options.filesizeBase,4-r),t=l;break}}i=Math.round(10*i)/10}return`<strong>${i}</strong> ${this.options.dictFileSizeUnits[t]}`}_updateMaxFilesReachedClass(){return this.options.maxFiles!=null&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")}drop(e){if(!e.dataTransfer)return;this.emit("drop",e);let i=[];for(let t=0;t<e.dataTransfer.files.length;t++)i[t]=e.dataTransfer.files[t];if(i.length){let{items:t}=e.dataTransfer;t&&t.length&&t[0].webkitGetAsEntry!=null?this._addFilesFromItems(t):this.handleFiles(i)}this.emit("addedfiles",i)}paste(e){if(W(e?.clipboardData,t=>t.items)==null)return;this.emit("paste",e);let{items:i}=e.clipboardData;if(i.length)return this._addFilesFromItems(i)}handleFiles(e){for(let i of e)this.addFile(i)}_addFilesFromItems(e){return(()=>{let i=[];for(let n of e){var t;n.webkitGetAsEntry!=null&&(t=n.webkitGetAsEntry())?t.isFile?i.push(this.addFile(n.getAsFile())):t.isDirectory?i.push(this._addFilesFromDirectory(t,t.name)):i.push(void 0):n.getAsFile!=null&&(n.kind==null||n.kind==="file")?i.push(this.addFile(n.getAsFile())):i.push(void 0)}return i})()}_addFilesFromDirectory(e,i){let t=e.createReader(),n=l=>Y(console,"log",o=>o.log(l));var r=()=>t.readEntries(l=>{if(l.length>0){for(let o of l)o.isFile?o.file(a=>{if(!(this.options.ignoreHiddenFiles&&a.name.substring(0,1)==="."))return a.fullPath=`${i}/${a.name}`,this.addFile(a)}):o.isDirectory&&this._addFilesFromDirectory(o,`${i}/${o.name}`);r()}return null},n);return r()}accept(e,i){this.options.maxFilesize&&e.size>this.options.maxFilesize*1048576?i(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):s.isValidFile(e,this.options.acceptedFiles)?this.options.maxFiles!=null&&this.getAcceptedFiles().length>=this.options.maxFiles?(i(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,i):i(this.options.dictInvalidFileType)}addFile(e){e.upload={uuid:s.uuidv4(),progress:0,total:e.size,bytesSent:0,filename:this._renameFile(e)},this.files.push(e),e.status=s.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,i=>{i?(e.accepted=!1,this._errorProcessing([e],i)):(e.accepted=!0,this.options.autoQueue&&this.enqueueFile(e)),this._updateMaxFilesReachedClass()})}enqueueFiles(e){for(let i of e)this.enqueueFile(i);return null}enqueueFile(e){if(e.status===s.ADDED&&e.accepted===!0){if(e.status=s.QUEUED,this.options.autoProcessQueue)return setTimeout(()=>this.processQueue(),0)}else throw new Error("This file can't be queued because it has already been processed or was rejected.")}_enqueueThumbnail(e){if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=this.options.maxThumbnailFilesize*1048576)return this._thumbnailQueue.push(e),setTimeout(()=>this._processThumbnailQueue(),0)}_processThumbnailQueue(){if(this._processingThumbnail||this._thumbnailQueue.length===0)return;this._processingThumbnail=!0;let e=this._thumbnailQueue.shift();return this.createThumbnail(e,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,i=>(this.emit("thumbnail",e,i),this._processingThumbnail=!1,this._processThumbnailQueue()))}removeFile(e){if(e.status===s.UPLOADING&&this.cancelUpload(e),this.files=B(this.files,e),this.emit("removedfile",e),this.files.length===0)return this.emit("reset")}removeAllFiles(e){e==null&&(e=!1);for(let i of this.files.slice())(i.status!==s.UPLOADING||e)&&this.removeFile(i);return null}resizeImage(e,i,t,n,r){return this.createThumbnail(e,i,t,n,!0,(l,o)=>{if(o==null)return r(e);{let{resizeMimeType:a}=this.options;a==null&&(a=e.type);let d=o.toDataURL(a,this.options.resizeQuality);return(a==="image/jpeg"||a==="image/jpg")&&(d=y.restore(e.dataURL,d)),r(s.dataURItoBlob(d))}})}createThumbnail(e,i,t,n,r,l){let o=new FileReader;o.onload=()=>{if(e.dataURL=o.result,e.type==="image/svg+xml"){l?.(o.result);return}this.createThumbnailFromUrl(e,i,t,n,r,l)},o.readAsDataURL(e)}displayExistingFile(e,i,t,n,r=!0){if(this.emit("addedfile",e),this.emit("complete",e),!r)this.emit("thumbnail",e,i),t&&t();else{let l=o=>{this.emit("thumbnail",e,o),t&&t()};e.dataURL=i,this.createThumbnailFromUrl(e,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,this.options.fixOrientation,l,n)}}createThumbnailFromUrl(e,i,t,n,r,l,o){let a=document.createElement("img");return o&&(a.crossOrigin=o),r=getComputedStyle(document.body).imageOrientation=="from-image"?!1:r,a.onload=()=>{let d=u=>u(1);return typeof EXIF<"u"&&EXIF!==null&&r&&(d=u=>EXIF.getData(a,function(){return u(EXIF.getTag(this,"Orientation"))})),d(u=>{e.width=a.width,e.height=a.height;let h=this.options.resize.call(this,e,i,t,n),c=document.createElement("canvas"),m=c.getContext("2d");switch(c.width=h.trgWidth,c.height=h.trgHeight,u>4&&(c.width=h.trgHeight,c.height=h.trgWidth),u){case 2:m.translate(c.width,0),m.scale(-1,1);break;case 3:m.translate(c.width,c.height),m.rotate(Math.PI);break;case 4:m.translate(0,c.height),m.scale(1,-1);break;case 5:m.rotate(.5*Math.PI),m.scale(1,-1);break;case 6:m.rotate(.5*Math.PI),m.translate(0,-c.width);break;case 7:m.rotate(.5*Math.PI),m.translate(c.height,-c.width),m.scale(-1,1);break;case 8:m.rotate(-.5*Math.PI),m.translate(-c.height,0);break}Q(m,a,h.srcX!=null?h.srcX:0,h.srcY!=null?h.srcY:0,h.srcWidth,h.srcHeight,h.trgX!=null?h.trgX:0,h.trgY!=null?h.trgY:0,h.trgWidth,h.trgHeight);let F=c.toDataURL("image/png");if(l!=null)return l(F,c)})},l!=null&&(a.onerror=l),a.src=e.dataURL}processQueue(){let{parallelUploads:e}=this.options,i=this.getUploadingFiles().length,t=i;if(i>=e)return;let n=this.getQueuedFiles();if(n.length>0){if(this.options.uploadMultiple)return this.processFiles(n.slice(0,e-i));for(;t<e;){if(!n.length)return;this.processFile(n.shift()),t++}}}processFile(e){return this.processFiles([e])}processFiles(e){for(let i of e)i.processing=!0,i.status=s.UPLOADING,this.emit("processing",i);return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)}_getFilesWithXhr(e){let i;return i=this.files.filter(t=>t.xhr===e).map(t=>t)}cancelUpload(e){if(e.status===s.UPLOADING){let i=this._getFilesWithXhr(e.xhr);for(let t of i)t.status=s.CANCELED;typeof e.xhr<"u"&&e.xhr.abort();for(let t of i)this.emit("canceled",t);this.options.uploadMultiple&&this.emit("canceledmultiple",i)}else(e.status===s.ADDED||e.status===s.QUEUED)&&(e.status=s.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()}resolveOption(e,...i){return typeof e=="function"?e.apply(this,i):e}uploadFile(e){return this.uploadFiles([e])}uploadFiles(e){this._transformFiles(e,i=>{if(this.options.chunking){let t=i[0];e[0].upload.chunked=this.options.chunking&&(this.options.forceChunking||t.size>this.options.chunkSize),e[0].upload.totalChunkCount=Math.ceil(t.size/this.options.chunkSize)}if(e[0].upload.chunked){let t=e[0],n=i[0],r=0;t.upload.chunks=[];let l=()=>{let o=0;for(;t.upload.chunks[o]!==void 0;)o++;if(o>=t.upload.totalChunkCount)return;r++;let a=o*this.options.chunkSize,d=Math.min(a+this.options.chunkSize,n.size),u={name:this._getParamName(0),data:n.webkitSlice?n.webkitSlice(a,d):n.slice(a,d),filename:t.upload.filename,chunkIndex:o};t.upload.chunks[o]={file:t,index:o,dataBlock:u,status:s.UPLOADING,progress:0,retries:0},this._uploadData(e,[u])};if(t.upload.finishedChunkUpload=(o,a)=>{let d=!0;o.status=s.SUCCESS,o.dataBlock=null,o.response=o.xhr.responseText,o.responseHeaders=o.xhr.getAllResponseHeaders(),o.xhr=null;for(let u=0;u<t.upload.totalChunkCount;u++){if(t.upload.chunks[u]===void 0)return l();t.upload.chunks[u].status!==s.SUCCESS&&(d=!1)}d&&this.options.chunksUploaded(t,()=>{this._finished(e,a,null)})},this.options.parallelChunkUploads)for(let o=0;o<t.upload.totalChunkCount;o++)l();else l()}else{let t=[];for(let n=0;n<e.length;n++)t[n]={name:this._getParamName(n),data:i[n],filename:e[n].upload.filename};this._uploadData(e,t)}})}_getChunk(e,i){for(let t=0;t<e.upload.totalChunkCount;t++)if(e.upload.chunks[t]!==void 0&&e.upload.chunks[t].xhr===i)return e.upload.chunks[t]}_uploadData(e,i){let t=new XMLHttpRequest;for(let d of e)d.xhr=t;e[0].upload.chunked&&(e[0].upload.chunks[i[0].chunkIndex].xhr=t);let n=this.resolveOption(this.options.method,e,i),r=this.resolveOption(this.options.url,e,i);t.open(n,r,!0),this.resolveOption(this.options.timeout,e)&&(t.timeout=this.resolveOption(this.options.timeout,e)),t.withCredentials=!!this.options.withCredentials,t.onload=d=>{this._finishedUploading(e,t,d)},t.ontimeout=()=>{this._handleUploadError(e,t,`Request timedout after ${this.options.timeout/1e3} seconds`)},t.onerror=()=>{this._handleUploadError(e,t)};let o=t.upload!=null?t.upload:t;o.onprogress=d=>this._updateFilesUploadProgress(e,t,d);let a=this.options.defaultHeaders?{Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"}:{};this.options.binaryBody&&(a["Content-Type"]=e[0].type),this.options.headers&&C(a,this.options.headers);for(let d in a){let u=a[d];u&&t.setRequestHeader(d,u)}if(this.options.binaryBody){for(let d of e)this.emit("sending",d,t);this.options.uploadMultiple&&this.emit("sendingmultiple",e,t),this.submitRequest(t,null,e)}else{let d=new FormData;if(this.options.params){let u=this.options.params;typeof u=="function"&&(u=u.call(this,e,t,e[0].upload.chunked?this._getChunk(e[0],t):null));for(let h in u){let c=u[h];if(Array.isArray(c))for(let m=0;m<c.length;m++)d.append(h,c[m]);else d.append(h,c)}}for(let u of e)this.emit("sending",u,t,d);this.options.uploadMultiple&&this.emit("sendingmultiple",e,t,d),this._addFormElementData(d);for(let u=0;u<i.length;u++){let h=i[u];d.append(h.name,h.data,h.filename)}this.submitRequest(t,d,e)}}_transformFiles(e,i){let t=[],n=0;for(let r=0;r<e.length;r++)this.options.transformFile.call(this,e[r],l=>{t[r]=l,++n===e.length&&i(t)})}_addFormElementData(e){if(this.element.tagName==="FORM")for(let i of this.element.querySelectorAll("input, textarea, select, button")){let t=i.getAttribute("name"),n=i.getAttribute("type");if(n&&(n=n.toLowerCase()),!(typeof t>"u"||t===null))if(i.tagName==="SELECT"&&i.hasAttribute("multiple"))for(let r of i.options)r.selected&&e.append(t,r.value);else(!n||n!=="checkbox"&&n!=="radio"||i.checked)&&e.append(t,i.value)}}_updateFilesUploadProgress(e,i,t){if(e[0].upload.chunked){let n=e[0],r=this._getChunk(n,i);t?(r.progress=100*t.loaded/t.total,r.total=t.total,r.bytesSent=t.loaded):(r.progress=100,r.bytesSent=r.total),n.upload.progress=0,n.upload.total=0,n.upload.bytesSent=0;for(let l=0;l<n.upload.totalChunkCount;l++)n.upload.chunks[l]&&typeof n.upload.chunks[l].progress<"u"&&(n.upload.progress+=n.upload.chunks[l].progress,n.upload.total+=n.upload.chunks[l].total,n.upload.bytesSent+=n.upload.chunks[l].bytesSent);n.upload.progress=n.upload.progress/n.upload.totalChunkCount,this.emit("uploadprogress",n,n.upload.progress,n.upload.bytesSent)}else for(let n of e)n.upload.total&&n.upload.bytesSent&&n.upload.bytesSent==n.upload.total||(t?(n.upload.progress=100*t.loaded/t.total,n.upload.total=t.total,n.upload.bytesSent=t.loaded):(n.upload.progress=100,n.upload.bytesSent=n.upload.total),this.emit("uploadprogress",n,n.upload.progress,n.upload.bytesSent))}_finishedUploading(e,i,t){let n;if(e[0].status!==s.CANCELED&&i.readyState===4){if(i.responseType!=="arraybuffer"&&i.responseType!=="blob"&&(n=i.responseText,i.getResponseHeader("content-type")&&~i.getResponseHeader("content-type").indexOf("application/json")))try{n=JSON.parse(n)}catch(r){t=r,n="Invalid JSON response from server."}this._updateFilesUploadProgress(e,i),200<=i.status&&i.status<300?e[0].upload.chunked?e[0].upload.finishedChunkUpload(this._getChunk(e[0],i),n):this._finished(e,n,t):this._handleUploadError(e,i,n)}}_handleUploadError(e,i,t){if(e[0].status!==s.CANCELED){if(e[0].upload.chunked&&this.options.retryChunks){let n=this._getChunk(e[0],i);if(n.retries++<this.options.retryChunksLimit){this._uploadData(e,[n.dataBlock]);return}else console.warn("Retried this chunk too often. Giving up.")}this._errorProcessing(e,t||this.options.dictResponseError.replace("{{statusCode}}",i.status),i)}}submitRequest(e,i,t){if(e.readyState!=1){console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");return}if(this.options.binaryBody)if(t[0].upload.chunked){let n=this._getChunk(t[0],e);e.send(n.dataBlock.data)}else e.send(t[0]);else e.send(i)}_finished(e,i,t){for(let n of e)n.status=s.SUCCESS,this.emit("success",n,i,t),this.emit("complete",n);if(this.options.uploadMultiple&&(this.emit("successmultiple",e,i,t),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}_errorProcessing(e,i,t){for(let n of e)n.status=s.ERROR,this.emit("error",n,i,t),this.emit("complete",n);if(this.options.uploadMultiple&&(this.emit("errormultiple",e,i,t),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}static uuidv4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){let i=Math.random()*16|0;return(e==="x"?i:i&3|8).toString(16)})}constructor(e,i){super();let t,n;if(this.element=e,this.clickableElements=[],this.listeners=[],this.files=[],typeof this.element=="string"&&(this.element=document.querySelector(this.element)),!this.element||this.element.nodeType==null)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");s.instances.push(this),this.element.dropzone=this;let r=(n=s.optionsForElement(this.element))!=null?n:{};if(this.options=C(!0,{},O,r,i??{}),this.options.previewTemplate=this.options.previewTemplate.replace(/\n*/g,""),this.options.forceFallback||!s.isBrowserSupported())return this.options.fallback.call(this);if(this.options.url==null&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");if(this.options.uploadMultiple&&this.options.chunking)throw new Error("You cannot set both: uploadMultiple and chunking.");if(this.options.binaryBody&&this.options.uploadMultiple)throw new Error("You cannot set both: binaryBody and uploadMultiple.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.renameFilename!=null&&(this.options.renameFile=l=>this.options.renameFilename.call(this,l.name,l)),typeof this.options.method=="string"&&(this.options.method=this.options.method.toUpperCase()),(t=this.getExistingFallback())&&t.parentNode&&t.parentNode.removeChild(t),this.options.previewsContainer!==!1&&(this.options.previewsContainer?this.previewsContainer=s.getElement(this.options.previewsContainer,"previewsContainer"):this.previewsContainer=this.element),this.options.clickable&&(this.options.clickable===!0?this.clickableElements=[this.element]:this.clickableElements=s.getElements(this.options.clickable,"clickable")),this.init()}};p.initClass();p.options={};p.optionsForElement=function(s){if(s.getAttribute("id"))return p.options[q(s.getAttribute("id"))]};p.instances=[];p.forElement=function(s){if(typeof s=="string"&&(s=document.querySelector(s)),s?.dropzone==null)throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return s.dropzone};p.discover=function(){let s;if(document.querySelectorAll)s=document.querySelectorAll(".dropzone");else{s=[];let e=i=>(()=>{let t=[];for(let n of i)/(^| )dropzone($| )/.test(n.className)?t.push(s.push(n)):t.push(void 0);return t})();e(document.getElementsByTagName("div")),e(document.getElementsByTagName("form"))}return(()=>{let e=[];for(let i of s)p.optionsForElement(i)!==!1?e.push(new p(i)):e.push(void 0);return e})()};p.blockedBrowsers=[/opera.*(Macintosh|Windows Phone).*version\/12/i];p.isBrowserSupported=function(){let s=!0;if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if(!("classList"in document.createElement("a")))s=!1;else{p.blacklistedBrowsers!==void 0&&(p.blockedBrowsers=p.blacklistedBrowsers);for(let e of p.blockedBrowsers)if(e.test(navigator.userAgent)){s=!1;continue}}else s=!1;return s};p.dataURItoBlob=function(s){let e=atob(s.split(",")[1]),i=s.split(",")[0].split(":")[1].split(";")[0],t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0,l=e.length,o=0<=l;o?r<=l:r>=l;o?r++:r--)n[r]=e.charCodeAt(r);return new Blob([t],{type:i})};var B=(s,e)=>s.filter(i=>i!==e).map(i=>i),q=s=>s.replace(/[\-_](\w)/g,e=>e.charAt(1).toUpperCase());p.createElement=function(s){let e=document.createElement("div");return e.innerHTML=s,e.childNodes[0]};p.elementInside=function(s,e){if(s===e)return!0;for(;s=s.parentNode;)if(s===e)return!0;return!1};p.getElement=function(s,e){let i;if(typeof s=="string"?i=document.querySelector(s):s.nodeType!=null&&(i=s),i==null)throw new Error(`Invalid \`${e}\` option provided. Please provide a CSS selector or a plain HTML element.`);return i};p.getElements=function(s,e){let i,t;if(s instanceof Array){t=[];try{for(i of s)t.push(this.getElement(i,e))}catch{t=null}}else if(typeof s=="string"){t=[];for(i of document.querySelectorAll(s))t.push(i)}else s.nodeType!=null&&(t=[s]);if(t==null||!t.length)throw new Error(`Invalid \`${e}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`);return t};p.confirm=function(s,e,i){if(window.confirm(s))return e();if(i!=null)return i()};p.isValidFile=function(s,e){if(!e)return!0;e=e.split(",");let i=s.type,t=i.replace(/\/.*$/,"");for(let n of e)if(n=n.trim(),n.charAt(0)==="."){if(s.name.toLowerCase().indexOf(n.toLowerCase(),s.name.length-n.length)!==-1)return!0}else if(/\/\*$/.test(n)){if(t===n.replace(/\/.*$/,""))return!0}else if(i===n)return!0;return!1};typeof jQuery<"u"&&jQuery!==null&&(jQuery.fn.dropzone=function(s){return this.each(function(){return new p(this,s)})});p.ADDED="added";p.QUEUED="queued";p.ACCEPTED=p.QUEUED;p.UPLOADING="uploading";p.PROCESSING=p.UPLOADING;p.CANCELED="canceled";p.ERROR="error";p.SUCCESS="success";var H=function(s){let e=s.naturalWidth,i=s.naturalHeight,t=document.createElement("canvas");t.width=1,t.height=i;let n=t.getContext("2d");n.drawImage(s,0,0);let{data:r}=n.getImageData(1,0,1,i),l=0,o=i,a=i;for(;a>l;)r[(a-1)*4+3]===0?o=a:l=a,a=o+l>>1;let d=a/i;return d===0?1:d},Q=function(s,e,i,t,n,r,l,o,a,d){let u=H(e);return s.drawImage(e,i,t,n,r,l,o,a,d/u)},y=class{static initClass(){this.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}static encode64(e){let i="",t,n,r="",l,o,a,d="",u=0;for(;t=e[u++],n=e[u++],r=e[u++],l=t>>2,o=(t&3)<<4|n>>4,a=(n&15)<<2|r>>6,d=r&63,isNaN(n)?a=d=64:isNaN(r)&&(d=64),i=i+this.KEY_STR.charAt(l)+this.KEY_STR.charAt(o)+this.KEY_STR.charAt(a)+this.KEY_STR.charAt(d),t=n=r="",l=o=a=d="",u<e.length;);return i}static restore(e,i){if(!e.match("data:image/jpeg;base64,"))return i;let t=this.decode64(e.replace("data:image/jpeg;base64,","")),n=this.slice2Segments(t),r=this.exifManipulation(i,n);return`data:image/jpeg;base64,${this.encode64(r)}`}static exifManipulation(e,i){let t=this.getExifArray(i),n=this.insertExif(e,t);return new Uint8Array(n)}static getExifArray(e){let i,t=0;for(;t<e.length;){if(i=e[t],i[0]===255&i[1]===225)return i;t++}return[]}static insertExif(e,i){let t=e.replace("data:image/jpeg;base64,",""),n=this.decode64(t),r=n.indexOf(255,3),l=n.slice(0,r),o=n.slice(r),a=l;return a=a.concat(i),a=a.concat(o),a}static slice2Segments(e){let i=0,t=[];for(;;){var n;if(e[i]===255&e[i+1]===218)break;if(e[i]===255&e[i+1]===216)i+=2;else{n=e[i+2]*256+e[i+3];let r=i+n+2,l=e.slice(i,r);t.push(l),i=r}if(i>e.length)break}return t}static decode64(e){let i="",t,n,r="",l,o,a,d="",u=0,h=[];for(/[^A-Za-z0-9\+\/\=]/g.exec(e)&&console.warn(`There were invalid base64 characters in the input text.
Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='
Expect errors in decoding.`),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");l=this.KEY_STR.indexOf(e.charAt(u++)),o=this.KEY_STR.indexOf(e.charAt(u++)),a=this.KEY_STR.indexOf(e.charAt(u++)),d=this.KEY_STR.indexOf(e.charAt(u++)),t=l<<2|o>>4,n=(o&15)<<4|a>>2,r=(a&3)<<6|d,h.push(t),a!==64&&h.push(n),d!==64&&h.push(r),t=n=r="",l=o=a=d="",u<e.length;);return h}};y.initClass();function W(s,e){return typeof s<"u"&&s!==null?e(s):void 0}function Y(s,e,i){if(typeof s<"u"&&s!==null&&typeof s[e]=="function")return i(s,e)}function j({componentId:s,maxFiles:e,maxFilesize:i,acceptedFiles:t,chunkSize:n,chunking:r,allowMultiple:l,parallelUploads:o,parallelChunksUploads:a,autoProcessQueue:d,url:u,retryChunks:h,retryChunksLimit:c,clearOnFinish:m,leaveFailed:F,directory:z,disk:A,maxVideoDuration:E,defaultMessage:M,successTitle:R,successMessage:S,state:D}){return{dropzone:null,error:null,state:D,init:async function(){let k=document.getElementById(s);z===null&&(z="");let x={maxFilesize:i,acceptedFiles:t,allowMultiple:l,autoProcessQueue:d,parallelUploads:o,parallelChunksUploads:a,chunking:r,chunkSize:n,url:`${u}?directory=${z}&disk=${A}`,retryChunks:h,retryChunksLimit:c,dictDefaultMessage:M,maxFiles:l?e:1};this.dropzone=new p(k,x),this.dropzone.on("addedfile",v=>{if(this.dispatchFormEvent("form-processing-started"),E&&v.type.startsWith("video/")){let g=document.createElement("video");g.src=URL.createObjectURL(v),g.onloadedmetadata=()=>{g.duration>E&&(this.dropzone.removeFile(v),this.error=`Video duration is too long. Maximum allowed duration is ${E} seconds.`)}}}),this.dropzone.on("error",(v,g)=>{console.error(`Error uploading file: ${v.name}`,g),new window.FilamentNotification().title(`Error uploading file: ${v.name}`).warning().body(this.error??g?.message).send()}),this.dropzone.on("queuecomplete",()=>{this.state=this.dropzone.files.map(f=>z?`${z}/${f.name}`:f.name);let v=this.dropzone.files.length,g=this.dropzone.getFilesWithStatus(p.SUCCESS).length,b=this.dropzone.getFilesWithStatus(p.ERROR).length;if(g>b){let f=new window.FilamentNotification,I=R??"Upload complete";f.title(I),S&&f.body(S),m&&setTimeout(()=>{this.dropzone.removeAllFiles()},5e3),F&&b>0?(f.warning(),f.body("Some files failed to upload. Please check the list below."),this.dropzone.getFilesWithStatus(p.SUCCESS).forEach(N=>{this.dropzone.removeFile(N)})):f.success(),f.send()}else new window.FilamentNotification().title("Upload failed").danger().body(b>0?"Please check the list below.":"No files were uploaded.").send();this.dispatchFormEvent("form-processing-finished",{stats:{totalFilesCount:v,successfulUploadsCount:g,failedUploadsCount:b}})}),window.addEventListener("clear-dropzone",()=>{this.dropzone&&this.dropzone.removeAllFiles()})},destroy:function(){this.dropzone.destroy(),this.dropzone=null},dispatchFormEvent:function(k,x={}){window.dispatchEvent(new CustomEvent(k,{composed:!0,cancelable:!0,detail:x}))}}}export{j as default};
