var E=S;function S(){var n=[].slice.call(arguments),e=!1;typeof n[0]=="boolean"&&(e=n.shift());var i=n[0];if(C(i))throw new Error("extendee must be an object");for(var t=n.slice(1),s=t.length,r=0;r<s;r++){var l=t[r];for(var o in l)if(Object.prototype.hasOwnProperty.call(l,o)){var a=l[o];if(e&&R(a)){var d=Array.isArray(a)?[]:{};i[o]=S(!0,Object.prototype.hasOwnProperty.call(i,o)&&!C(i[o])?i[o]:d,a)}else i[o]=a}}return i}function R(n){return Array.isArray(n)||{}.toString.call(n)=="[object Object]"}function C(n){return!n||typeof n!="object"&&typeof n!="function"}function D(n){return n&&n.__esModule?n.default:n}var v=class{on(e,i){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(i),this}emit(e,...i){this._callbacks=this._callbacks||{};let t=this._callbacks[e];if(t)for(let s of t)s.apply(this,i);return this.element&&this.element.dispatchEvent(this.makeEvent("dropzone:"+e,{args:i})),this}makeEvent(e,i){let t={bubbles:!0,cancelable:!0,detail:i};if(typeof window.CustomEvent=="function")return new CustomEvent(e,t);var s=document.createEvent("CustomEvent");return s.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),s}off(e,i){if(!this._callbacks||arguments.length===0)return this._callbacks={},this;let t=this._callbacks[e];if(!t)return this;if(arguments.length===1)return delete this._callbacks[e],this;for(let s=0;s<t.length;s++)if(t[s]===i){t.splice(s,1);break}return this}},L={};L=`<div class="dz-preview dz-file-preview">
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
`;var I={url:null,method:"post",withCredentials:!1,timeout:null,parallelUploads:2,uploadMultiple:!1,chunking:!1,forceChunking:!1,chunkSize:2097152,parallelChunkUploads:!1,retryChunks:!1,retryChunksLimit:3,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,headers:null,defaultHeaders:!0,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,disablePreviews:!1,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictUploadCanceled:"Upload canceled.",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init(){},params(n,e,i){if(i)return{dzuuid:i.file.upload.uuid,dzchunkindex:i.index,dztotalfilesize:i.file.size,dzchunksize:this.options.chunkSize,dztotalchunkcount:i.file.upload.totalChunkCount,dzchunkbyteoffset:i.index*this.options.chunkSize}},accept(n,e){return e()},chunksUploaded:function(n,e){e()},binaryBody:!1,fallback(){let n;this.element.className=`${this.element.className} dz-browser-not-supported`;for(let i of this.element.getElementsByTagName("div"))if(/(^| )dz-message($| )/.test(i.className)){n=i,i.className="dz-message";break}n||(n=u.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(n));let e=n.getElementsByTagName("span")[0];return e&&(e.textContent!=null?e.textContent=this.options.dictFallbackMessage:e.innerText!=null&&(e.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize(n,e,i,t){let s={srcX:0,srcY:0,srcWidth:n.width,srcHeight:n.height},r=n.width/n.height;e==null&&i==null?(e=s.srcWidth,i=s.srcHeight):e==null?e=i*r:i==null&&(i=e/r),e=Math.min(e,s.srcWidth),i=Math.min(i,s.srcHeight);let l=e/i;if(s.srcWidth>e||s.srcHeight>i)if(t==="crop")r>l?(s.srcHeight=n.height,s.srcWidth=s.srcHeight*l):(s.srcWidth=n.width,s.srcHeight=s.srcWidth/l);else if(t==="contain")r>l?i=e/r:e=i*r;else throw new Error(`Unknown resizeMethod '${t}'`);return s.srcX=(n.width-s.srcWidth)/2,s.srcY=(n.height-s.srcHeight)/2,s.trgWidth=e,s.trgHeight=i,s},transformFile(n,e){return(this.options.resizeWidth||this.options.resizeHeight)&&n.type.match(/image.*/)?this.resizeImage(n,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,e):e(n)},previewTemplate:D(L),drop(n){return this.element.classList.remove("dz-drag-hover")},dragstart(n){},dragend(n){return this.element.classList.remove("dz-drag-hover")},dragenter(n){return this.element.classList.add("dz-drag-hover")},dragover(n){return this.element.classList.add("dz-drag-hover")},dragleave(n){return this.element.classList.remove("dz-drag-hover")},paste(n){},reset(){return this.element.classList.remove("dz-started")},addedfile(n){if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer&&!this.options.disablePreviews){n.previewElement=u.createElement(this.options.previewTemplate.trim()),n.previewTemplate=n.previewElement,this.previewsContainer.appendChild(n.previewElement);for(var e of n.previewElement.querySelectorAll("[data-dz-name]"))e.textContent=n.name;for(e of n.previewElement.querySelectorAll("[data-dz-size]"))e.innerHTML=this.filesize(n.size);this.options.addRemoveLinks&&(n._removeLink=u.createElement(`<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`),n.previewElement.appendChild(n._removeLink));let i=t=>(t.preventDefault(),t.stopPropagation(),n.status===u.UPLOADING?u.confirm(this.options.dictCancelUploadConfirmation,()=>this.removeFile(n)):this.options.dictRemoveFileConfirmation?u.confirm(this.options.dictRemoveFileConfirmation,()=>this.removeFile(n)):this.removeFile(n));for(let t of n.previewElement.querySelectorAll("[data-dz-remove]"))t.addEventListener("click",i)}},removedfile(n){return n.previewElement!=null&&n.previewElement.parentNode!=null&&n.previewElement.parentNode.removeChild(n.previewElement),this._updateMaxFilesReachedClass()},thumbnail(n,e){if(n.previewElement){n.previewElement.classList.remove("dz-file-preview");for(let i of n.previewElement.querySelectorAll("[data-dz-thumbnail]"))i.alt=n.name,i.src=e;return setTimeout(()=>n.previewElement.classList.add("dz-image-preview"),1)}},error(n,e){if(n.previewElement){n.previewElement.classList.add("dz-error"),typeof e!="string"&&e.error&&(e=e.error);for(let i of n.previewElement.querySelectorAll("[data-dz-errormessage]"))i.textContent=e}},errormultiple(){},processing(n){if(n.previewElement&&(n.previewElement.classList.add("dz-processing"),n._removeLink))return n._removeLink.innerHTML=this.options.dictCancelUpload},processingmultiple(){},uploadprogress(n,e,i){if(n.previewElement)for(let t of n.previewElement.querySelectorAll("[data-dz-uploadprogress]"))t.nodeName==="PROGRESS"?t.value=e:t.style.width=`${e}%`},totaluploadprogress(){},sending(){},sendingmultiple(){},success(n){if(n.previewElement)return n.previewElement.classList.add("dz-success")},successmultiple(){},canceled(n){return this.emit("error",n,this.options.dictUploadCanceled)},canceledmultiple(){},complete(n){if(n._removeLink&&(n._removeLink.innerHTML=this.options.dictRemoveFile),n.previewElement)return n.previewElement.classList.add("dz-complete")},completemultiple(){},maxfilesexceeded(){},maxfilesreached(){},queuecomplete(){},addedfiles(){}},N=I,u=class n extends v{static initClass(){this.prototype.Emitter=v,this.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],this.prototype._thumbnailQueue=[],this.prototype._processingThumbnail=!1}getAcceptedFiles(){return this.files.filter(e=>e.accepted).map(e=>e)}getRejectedFiles(){return this.files.filter(e=>!e.accepted).map(e=>e)}getFilesWithStatus(e){return this.files.filter(i=>i.status===e).map(i=>i)}getQueuedFiles(){return this.getFilesWithStatus(n.QUEUED)}getUploadingFiles(){return this.getFilesWithStatus(n.UPLOADING)}getAddedFiles(){return this.getFilesWithStatus(n.ADDED)}getActiveFiles(){return this.files.filter(e=>e.status===n.UPLOADING||e.status===n.QUEUED).map(e=>e)}init(){if(this.element.tagName==="form"&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(n.createElement(`<div class="dz-default dz-message"><button class="dz-button" type="button">${this.options.dictDefaultMessage}</button></div>`)),this.clickableElements.length){let t=()=>{this.hiddenFileInput&&this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=document.createElement("input"),this.hiddenFileInput.setAttribute("type","file"),(this.options.maxFiles===null||this.options.maxFiles>1)&&this.hiddenFileInput.setAttribute("multiple","multiple"),this.hiddenFileInput.className="dz-hidden-input",this.options.acceptedFiles!==null&&this.hiddenFileInput.setAttribute("accept",this.options.acceptedFiles),this.options.capture!==null&&this.hiddenFileInput.setAttribute("capture",this.options.capture),this.hiddenFileInput.setAttribute("tabindex","-1"),this.hiddenFileInput.style.visibility="hidden",this.hiddenFileInput.style.position="absolute",this.hiddenFileInput.style.top="0",this.hiddenFileInput.style.left="0",this.hiddenFileInput.style.height="0",this.hiddenFileInput.style.width="0",n.getElement(this.options.hiddenInputContainer,"hiddenInputContainer").appendChild(this.hiddenFileInput),this.hiddenFileInput.addEventListener("change",()=>{let{files:s}=this.hiddenFileInput;if(s.length)for(let r of s)this.addFile(r);this.emit("addedfiles",s),t()})};t()}this.URL=window.URL!==null?window.URL:window.webkitURL;for(let t of this.events)this.on(t,this.options[t]);this.on("uploadprogress",()=>this.updateTotalUploadProgress()),this.on("removedfile",()=>this.updateTotalUploadProgress()),this.on("canceled",t=>this.emit("complete",t)),this.on("complete",t=>{if(this.getAddedFiles().length===0&&this.getUploadingFiles().length===0&&this.getQueuedFiles().length===0)return setTimeout(()=>this.emit("queuecomplete"),0)});let e=function(t){if(t.dataTransfer.types){for(var s=0;s<t.dataTransfer.types.length;s++)if(t.dataTransfer.types[s]==="Files")return!0}return!1},i=function(t){if(e(t))return t.stopPropagation(),t.preventDefault?t.preventDefault():t.returnValue=!1};return this.listeners=[{element:this.element,events:{dragstart:t=>this.emit("dragstart",t),dragenter:t=>(i(t),this.emit("dragenter",t)),dragover:t=>{let s;try{s=t.dataTransfer.effectAllowed}catch{}return t.dataTransfer.dropEffect=s==="move"||s==="linkMove"?"move":"copy",i(t),this.emit("dragover",t)},dragleave:t=>this.emit("dragleave",t),drop:t=>(i(t),this.drop(t)),dragend:t=>this.emit("dragend",t)}}],this.clickableElements.forEach(t=>this.listeners.push({element:t,events:{click:s=>((t!==this.element||s.target===this.element||n.elementInside(s.target,this.element.querySelector(".dz-message")))&&this.hiddenFileInput.click(),!0)}})),this.enable(),this.options.init.call(this)}destroy(){return this.disable(),this.removeAllFiles(!0),this.hiddenFileInput!=null&&this.hiddenFileInput.parentNode&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,n.instances.splice(n.instances.indexOf(this),1)}updateTotalUploadProgress(){let e,i=0,t=0;if(this.getActiveFiles().length){for(let r of this.getActiveFiles())i+=r.upload.bytesSent,t+=r.upload.total;e=100*i/t}else e=100;return this.emit("totaluploadprogress",e,t,i)}_getParamName(e){return typeof this.options.paramName=="function"?this.options.paramName(e):`${this.options.paramName}${this.options.uploadMultiple?`[${e}]`:""}`}_renameFile(e){return typeof this.options.renameFile!="function"?e.name:this.options.renameFile(e)}getFallbackForm(){let e,i;if(e=this.getExistingFallback())return e;let t='<div class="dz-fallback">';this.options.dictFallbackText&&(t+=`<p>${this.options.dictFallbackText}</p>`),t+=`<input type="file" name="${this._getParamName(0)}" ${this.options.uploadMultiple?'multiple="multiple"':void 0} /><input type="submit" value="Upload!"></div>`;let s=n.createElement(t);return this.element.tagName!=="FORM"?(i=n.createElement(`<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`),i.appendChild(s)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),i??s}getExistingFallback(){let e=function(t){for(let s of t)if(/(^| )fallback($| )/.test(s.className))return s};for(let t of["div","form"]){var i;if(i=e(this.element.getElementsByTagName(t)))return i}}setupEventListeners(){return this.listeners.map(e=>(()=>{let i=[];for(let t in e.events){let s=e.events[t];i.push(e.element.addEventListener(t,s,!1))}return i})())}removeEventListeners(){return this.listeners.map(e=>(()=>{let i=[];for(let t in e.events){let s=e.events[t];i.push(e.element.removeEventListener(t,s,!1))}return i})())}disable(){return this.clickableElements.forEach(e=>e.classList.remove("dz-clickable")),this.removeEventListeners(),this.disabled=!0,this.files.map(e=>this.cancelUpload(e))}enable(){return delete this.disabled,this.clickableElements.forEach(e=>e.classList.add("dz-clickable")),this.setupEventListeners()}filesize(e){let i=0,t="b";if(e>0){let s=["tb","gb","mb","kb","b"];for(let r=0;r<s.length;r++){let l=s[r],o=Math.pow(this.options.filesizeBase,4-r)/10;if(e>=o){i=e/Math.pow(this.options.filesizeBase,4-r),t=l;break}}i=Math.round(10*i)/10}return`<strong>${i}</strong> ${this.options.dictFileSizeUnits[t]}`}_updateMaxFilesReachedClass(){return this.options.maxFiles!=null&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")}drop(e){if(!e.dataTransfer)return;this.emit("drop",e);let i=[];for(let t=0;t<e.dataTransfer.files.length;t++)i[t]=e.dataTransfer.files[t];if(i.length){let{items:t}=e.dataTransfer;t&&t.length&&t[0].webkitGetAsEntry!=null?this._addFilesFromItems(t):this.handleFiles(i)}this.emit("addedfiles",i)}paste(e){if(B(e?.clipboardData,t=>t.items)==null)return;this.emit("paste",e);let{items:i}=e.clipboardData;if(i.length)return this._addFilesFromItems(i)}handleFiles(e){for(let i of e)this.addFile(i)}_addFilesFromItems(e){return(()=>{let i=[];for(let s of e){var t;s.webkitGetAsEntry!=null&&(t=s.webkitGetAsEntry())?t.isFile?i.push(this.addFile(s.getAsFile())):t.isDirectory?i.push(this._addFilesFromDirectory(t,t.name)):i.push(void 0):s.getAsFile!=null&&(s.kind==null||s.kind==="file")?i.push(this.addFile(s.getAsFile())):i.push(void 0)}return i})()}_addFilesFromDirectory(e,i){let t=e.createReader(),s=l=>q(console,"log",o=>o.log(l));var r=()=>t.readEntries(l=>{if(l.length>0){for(let o of l)o.isFile?o.file(a=>{if(!(this.options.ignoreHiddenFiles&&a.name.substring(0,1)==="."))return a.fullPath=`${i}/${a.name}`,this.addFile(a)}):o.isDirectory&&this._addFilesFromDirectory(o,`${i}/${o.name}`);r()}return null},s);return r()}accept(e,i){this.options.maxFilesize&&e.size>this.options.maxFilesize*1048576?i(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):n.isValidFile(e,this.options.acceptedFiles)?this.options.maxFiles!=null&&this.getAcceptedFiles().length>=this.options.maxFiles?(i(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,i):i(this.options.dictInvalidFileType)}addFile(e){e.upload={uuid:n.uuidv4(),progress:0,total:e.size,bytesSent:0,filename:this._renameFile(e)},this.files.push(e),e.status=n.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,i=>{i?(e.accepted=!1,this._errorProcessing([e],i)):(e.accepted=!0,this.options.autoQueue&&this.enqueueFile(e)),this._updateMaxFilesReachedClass()})}enqueueFiles(e){for(let i of e)this.enqueueFile(i);return null}enqueueFile(e){if(e.status===n.ADDED&&e.accepted===!0){if(e.status=n.QUEUED,this.options.autoProcessQueue)return setTimeout(()=>this.processQueue(),0)}else throw new Error("This file can't be queued because it has already been processed or was rejected.")}_enqueueThumbnail(e){if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=this.options.maxThumbnailFilesize*1048576)return this._thumbnailQueue.push(e),setTimeout(()=>this._processThumbnailQueue(),0)}_processThumbnailQueue(){if(this._processingThumbnail||this._thumbnailQueue.length===0)return;this._processingThumbnail=!0;let e=this._thumbnailQueue.shift();return this.createThumbnail(e,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,i=>(this.emit("thumbnail",e,i),this._processingThumbnail=!1,this._processThumbnailQueue()))}removeFile(e){if(e.status===n.UPLOADING&&this.cancelUpload(e),this.files=$(this.files,e),this.emit("removedfile",e),this.files.length===0)return this.emit("reset")}removeAllFiles(e){e==null&&(e=!1);for(let i of this.files.slice())(i.status!==n.UPLOADING||e)&&this.removeFile(i);return null}resizeImage(e,i,t,s,r){return this.createThumbnail(e,i,t,s,!0,(l,o)=>{if(o==null)return r(e);{let{resizeMimeType:a}=this.options;a==null&&(a=e.type);let d=o.toDataURL(a,this.options.resizeQuality);return(a==="image/jpeg"||a==="image/jpg")&&(d=z.restore(e.dataURL,d)),r(n.dataURItoBlob(d))}})}createThumbnail(e,i,t,s,r,l){let o=new FileReader;o.onload=()=>{if(e.dataURL=o.result,e.type==="image/svg+xml"){l?.(o.result);return}this.createThumbnailFromUrl(e,i,t,s,r,l)},o.readAsDataURL(e)}displayExistingFile(e,i,t,s,r=!0){if(this.emit("addedfile",e),this.emit("complete",e),!r)this.emit("thumbnail",e,i),t&&t();else{let l=o=>{this.emit("thumbnail",e,o),t&&t()};e.dataURL=i,this.createThumbnailFromUrl(e,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,this.options.fixOrientation,l,s)}}createThumbnailFromUrl(e,i,t,s,r,l,o){let a=document.createElement("img");return o&&(a.crossOrigin=o),r=getComputedStyle(document.body).imageOrientation=="from-image"?!1:r,a.onload=()=>{let d=p=>p(1);return typeof EXIF<"u"&&EXIF!==null&&r&&(d=p=>EXIF.getData(a,function(){return p(EXIF.getTag(this,"Orientation"))})),d(p=>{e.width=a.width,e.height=a.height;let h=this.options.resize.call(this,e,i,t,s),m=document.createElement("canvas"),c=m.getContext("2d");switch(m.width=h.trgWidth,m.height=h.trgHeight,p>4&&(m.width=h.trgHeight,m.height=h.trgWidth),p){case 2:c.translate(m.width,0),c.scale(-1,1);break;case 3:c.translate(m.width,m.height),c.rotate(Math.PI);break;case 4:c.translate(0,m.height),c.scale(1,-1);break;case 5:c.rotate(.5*Math.PI),c.scale(1,-1);break;case 6:c.rotate(.5*Math.PI),c.translate(0,-m.width);break;case 7:c.rotate(.5*Math.PI),c.translate(m.height,-m.width),c.scale(-1,1);break;case 8:c.rotate(-.5*Math.PI),c.translate(-m.height,0);break}O(c,a,h.srcX!=null?h.srcX:0,h.srcY!=null?h.srcY:0,h.srcWidth,h.srcHeight,h.trgX!=null?h.trgX:0,h.trgY!=null?h.trgY:0,h.trgWidth,h.trgHeight);let b=m.toDataURL("image/png");if(l!=null)return l(b,m)})},l!=null&&(a.onerror=l),a.src=e.dataURL}processQueue(){let{parallelUploads:e}=this.options,i=this.getUploadingFiles().length,t=i;if(i>=e)return;let s=this.getQueuedFiles();if(s.length>0){if(this.options.uploadMultiple)return this.processFiles(s.slice(0,e-i));for(;t<e;){if(!s.length)return;this.processFile(s.shift()),t++}}}processFile(e){return this.processFiles([e])}processFiles(e){for(let i of e)i.processing=!0,i.status=n.UPLOADING,this.emit("processing",i);return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)}_getFilesWithXhr(e){let i;return i=this.files.filter(t=>t.xhr===e).map(t=>t)}cancelUpload(e){if(e.status===n.UPLOADING){let i=this._getFilesWithXhr(e.xhr);for(let t of i)t.status=n.CANCELED;typeof e.xhr<"u"&&e.xhr.abort();for(let t of i)this.emit("canceled",t);this.options.uploadMultiple&&this.emit("canceledmultiple",i)}else(e.status===n.ADDED||e.status===n.QUEUED)&&(e.status=n.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()}resolveOption(e,...i){return typeof e=="function"?e.apply(this,i):e}uploadFile(e){return this.uploadFiles([e])}uploadFiles(e){this._transformFiles(e,i=>{if(this.options.chunking){let t=i[0];e[0].upload.chunked=this.options.chunking&&(this.options.forceChunking||t.size>this.options.chunkSize),e[0].upload.totalChunkCount=Math.ceil(t.size/this.options.chunkSize)}if(e[0].upload.chunked){let t=e[0],s=i[0],r=0;t.upload.chunks=[];let l=()=>{let o=0;for(;t.upload.chunks[o]!==void 0;)o++;if(o>=t.upload.totalChunkCount)return;r++;let a=o*this.options.chunkSize,d=Math.min(a+this.options.chunkSize,s.size),p={name:this._getParamName(0),data:s.webkitSlice?s.webkitSlice(a,d):s.slice(a,d),filename:t.upload.filename,chunkIndex:o};t.upload.chunks[o]={file:t,index:o,dataBlock:p,status:n.UPLOADING,progress:0,retries:0},this._uploadData(e,[p])};if(t.upload.finishedChunkUpload=(o,a)=>{let d=!0;o.status=n.SUCCESS,o.dataBlock=null,o.response=o.xhr.responseText,o.responseHeaders=o.xhr.getAllResponseHeaders(),o.xhr=null;for(let p=0;p<t.upload.totalChunkCount;p++){if(t.upload.chunks[p]===void 0)return l();t.upload.chunks[p].status!==n.SUCCESS&&(d=!1)}d&&this.options.chunksUploaded(t,()=>{this._finished(e,a,null)})},this.options.parallelChunkUploads)for(let o=0;o<t.upload.totalChunkCount;o++)l();else l()}else{let t=[];for(let s=0;s<e.length;s++)t[s]={name:this._getParamName(s),data:i[s],filename:e[s].upload.filename};this._uploadData(e,t)}})}_getChunk(e,i){for(let t=0;t<e.upload.totalChunkCount;t++)if(e.upload.chunks[t]!==void 0&&e.upload.chunks[t].xhr===i)return e.upload.chunks[t]}_uploadData(e,i){let t=new XMLHttpRequest;for(let d of e)d.xhr=t;e[0].upload.chunked&&(e[0].upload.chunks[i[0].chunkIndex].xhr=t);let s=this.resolveOption(this.options.method,e,i),r=this.resolveOption(this.options.url,e,i);t.open(s,r,!0),this.resolveOption(this.options.timeout,e)&&(t.timeout=this.resolveOption(this.options.timeout,e)),t.withCredentials=!!this.options.withCredentials,t.onload=d=>{this._finishedUploading(e,t,d)},t.ontimeout=()=>{this._handleUploadError(e,t,`Request timedout after ${this.options.timeout/1e3} seconds`)},t.onerror=()=>{this._handleUploadError(e,t)};let o=t.upload!=null?t.upload:t;o.onprogress=d=>this._updateFilesUploadProgress(e,t,d);let a=this.options.defaultHeaders?{Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"}:{};this.options.binaryBody&&(a["Content-Type"]=e[0].type),this.options.headers&&E(a,this.options.headers);for(let d in a){let p=a[d];p&&t.setRequestHeader(d,p)}if(this.options.binaryBody){for(let d of e)this.emit("sending",d,t);this.options.uploadMultiple&&this.emit("sendingmultiple",e,t),this.submitRequest(t,null,e)}else{let d=new FormData;if(this.options.params){let p=this.options.params;typeof p=="function"&&(p=p.call(this,e,t,e[0].upload.chunked?this._getChunk(e[0],t):null));for(let h in p){let m=p[h];if(Array.isArray(m))for(let c=0;c<m.length;c++)d.append(h,m[c]);else d.append(h,m)}}for(let p of e)this.emit("sending",p,t,d);this.options.uploadMultiple&&this.emit("sendingmultiple",e,t,d),this._addFormElementData(d);for(let p=0;p<i.length;p++){let h=i[p];d.append(h.name,h.data,h.filename)}this.submitRequest(t,d,e)}}_transformFiles(e,i){let t=[],s=0;for(let r=0;r<e.length;r++)this.options.transformFile.call(this,e[r],l=>{t[r]=l,++s===e.length&&i(t)})}_addFormElementData(e){if(this.element.tagName==="FORM")for(let i of this.element.querySelectorAll("input, textarea, select, button")){let t=i.getAttribute("name"),s=i.getAttribute("type");if(s&&(s=s.toLowerCase()),!(typeof t>"u"||t===null))if(i.tagName==="SELECT"&&i.hasAttribute("multiple"))for(let r of i.options)r.selected&&e.append(t,r.value);else(!s||s!=="checkbox"&&s!=="radio"||i.checked)&&e.append(t,i.value)}}_updateFilesUploadProgress(e,i,t){if(e[0].upload.chunked){let s=e[0],r=this._getChunk(s,i);t?(r.progress=100*t.loaded/t.total,r.total=t.total,r.bytesSent=t.loaded):(r.progress=100,r.bytesSent=r.total),s.upload.progress=0,s.upload.total=0,s.upload.bytesSent=0;for(let l=0;l<s.upload.totalChunkCount;l++)s.upload.chunks[l]&&typeof s.upload.chunks[l].progress<"u"&&(s.upload.progress+=s.upload.chunks[l].progress,s.upload.total+=s.upload.chunks[l].total,s.upload.bytesSent+=s.upload.chunks[l].bytesSent);s.upload.progress=s.upload.progress/s.upload.totalChunkCount,this.emit("uploadprogress",s,s.upload.progress,s.upload.bytesSent)}else for(let s of e)s.upload.total&&s.upload.bytesSent&&s.upload.bytesSent==s.upload.total||(t?(s.upload.progress=100*t.loaded/t.total,s.upload.total=t.total,s.upload.bytesSent=t.loaded):(s.upload.progress=100,s.upload.bytesSent=s.upload.total),this.emit("uploadprogress",s,s.upload.progress,s.upload.bytesSent))}_finishedUploading(e,i,t){let s;if(e[0].status!==n.CANCELED&&i.readyState===4){if(i.responseType!=="arraybuffer"&&i.responseType!=="blob"&&(s=i.responseText,i.getResponseHeader("content-type")&&~i.getResponseHeader("content-type").indexOf("application/json")))try{s=JSON.parse(s)}catch(r){t=r,s="Invalid JSON response from server."}this._updateFilesUploadProgress(e,i),200<=i.status&&i.status<300?e[0].upload.chunked?e[0].upload.finishedChunkUpload(this._getChunk(e[0],i),s):this._finished(e,s,t):this._handleUploadError(e,i,s)}}_handleUploadError(e,i,t){if(e[0].status!==n.CANCELED){if(e[0].upload.chunked&&this.options.retryChunks){let s=this._getChunk(e[0],i);if(s.retries++<this.options.retryChunksLimit){this._uploadData(e,[s.dataBlock]);return}else console.warn("Retried this chunk too often. Giving up.")}this._errorProcessing(e,t||this.options.dictResponseError.replace("{{statusCode}}",i.status),i)}}submitRequest(e,i,t){if(e.readyState!=1){console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");return}if(this.options.binaryBody)if(t[0].upload.chunked){let s=this._getChunk(t[0],e);e.send(s.dataBlock.data)}else e.send(t[0]);else e.send(i)}_finished(e,i,t){for(let s of e)s.status=n.SUCCESS,this.emit("success",s,i,t),this.emit("complete",s);if(this.options.uploadMultiple&&(this.emit("successmultiple",e,i,t),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}_errorProcessing(e,i,t){for(let s of e)s.status=n.ERROR,this.emit("error",s,i,t),this.emit("complete",s);if(this.options.uploadMultiple&&(this.emit("errormultiple",e,i,t),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}static uuidv4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){let i=Math.random()*16|0;return(e==="x"?i:i&3|8).toString(16)})}constructor(e,i){super();let t,s;if(this.element=e,this.clickableElements=[],this.listeners=[],this.files=[],typeof this.element=="string"&&(this.element=document.querySelector(this.element)),!this.element||this.element.nodeType==null)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");n.instances.push(this),this.element.dropzone=this;let r=(s=n.optionsForElement(this.element))!=null?s:{};if(this.options=E(!0,{},N,r,i??{}),this.options.previewTemplate=this.options.previewTemplate.replace(/\n*/g,""),this.options.forceFallback||!n.isBrowserSupported())return this.options.fallback.call(this);if(this.options.url==null&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");if(this.options.uploadMultiple&&this.options.chunking)throw new Error("You cannot set both: uploadMultiple and chunking.");if(this.options.binaryBody&&this.options.uploadMultiple)throw new Error("You cannot set both: binaryBody and uploadMultiple.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.renameFilename!=null&&(this.options.renameFile=l=>this.options.renameFilename.call(this,l.name,l)),typeof this.options.method=="string"&&(this.options.method=this.options.method.toUpperCase()),(t=this.getExistingFallback())&&t.parentNode&&t.parentNode.removeChild(t),this.options.previewsContainer!==!1&&(this.options.previewsContainer?this.previewsContainer=n.getElement(this.options.previewsContainer,"previewsContainer"):this.previewsContainer=this.element),this.options.clickable&&(this.options.clickable===!0?this.clickableElements=[this.element]:this.clickableElements=n.getElements(this.options.clickable,"clickable")),this.init()}};u.initClass();u.options={};u.optionsForElement=function(n){if(n.getAttribute("id"))return u.options[_(n.getAttribute("id"))]};u.instances=[];u.forElement=function(n){if(typeof n=="string"&&(n=document.querySelector(n)),n?.dropzone==null)throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return n.dropzone};u.discover=function(){let n;if(document.querySelectorAll)n=document.querySelectorAll(".dropzone");else{n=[];let e=i=>(()=>{let t=[];for(let s of i)/(^| )dropzone($| )/.test(s.className)?t.push(n.push(s)):t.push(void 0);return t})();e(document.getElementsByTagName("div")),e(document.getElementsByTagName("form"))}return(()=>{let e=[];for(let i of n)u.optionsForElement(i)!==!1?e.push(new u(i)):e.push(void 0);return e})()};u.blockedBrowsers=[/opera.*(Macintosh|Windows Phone).*version\/12/i];u.isBrowserSupported=function(){let n=!0;if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if(!("classList"in document.createElement("a")))n=!1;else{u.blacklistedBrowsers!==void 0&&(u.blockedBrowsers=u.blacklistedBrowsers);for(let e of u.blockedBrowsers)if(e.test(navigator.userAgent)){n=!1;continue}}else n=!1;return n};u.dataURItoBlob=function(n){let e=atob(n.split(",")[1]),i=n.split(",")[0].split(":")[1].split(";")[0],t=new ArrayBuffer(e.length),s=new Uint8Array(t);for(let r=0,l=e.length,o=0<=l;o?r<=l:r>=l;o?r++:r--)s[r]=e.charCodeAt(r);return new Blob([t],{type:i})};var $=(n,e)=>n.filter(i=>i!==e).map(i=>i),_=n=>n.replace(/[\-_](\w)/g,e=>e.charAt(1).toUpperCase());u.createElement=function(n){let e=document.createElement("div");return e.innerHTML=n,e.childNodes[0]};u.elementInside=function(n,e){if(n===e)return!0;for(;n=n.parentNode;)if(n===e)return!0;return!1};u.getElement=function(n,e){let i;if(typeof n=="string"?i=document.querySelector(n):n.nodeType!=null&&(i=n),i==null)throw new Error(`Invalid \`${e}\` option provided. Please provide a CSS selector or a plain HTML element.`);return i};u.getElements=function(n,e){let i,t;if(n instanceof Array){t=[];try{for(i of n)t.push(this.getElement(i,e))}catch{t=null}}else if(typeof n=="string"){t=[];for(i of document.querySelectorAll(n))t.push(i)}else n.nodeType!=null&&(t=[n]);if(t==null||!t.length)throw new Error(`Invalid \`${e}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`);return t};u.confirm=function(n,e,i){if(window.confirm(n))return e();if(i!=null)return i()};u.isValidFile=function(n,e){if(!e)return!0;e=e.split(",");let i=n.type,t=i.replace(/\/.*$/,"");for(let s of e)if(s=s.trim(),s.charAt(0)==="."){if(n.name.toLowerCase().indexOf(s.toLowerCase(),n.name.length-s.length)!==-1)return!0}else if(/\/\*$/.test(s)){if(t===s.replace(/\/.*$/,""))return!0}else if(i===s)return!0;return!1};typeof jQuery<"u"&&jQuery!==null&&(jQuery.fn.dropzone=function(n){return this.each(function(){return new u(this,n)})});u.ADDED="added";u.QUEUED="queued";u.ACCEPTED=u.QUEUED;u.UPLOADING="uploading";u.PROCESSING=u.UPLOADING;u.CANCELED="canceled";u.ERROR="error";u.SUCCESS="success";var P=function(n){let e=n.naturalWidth,i=n.naturalHeight,t=document.createElement("canvas");t.width=1,t.height=i;let s=t.getContext("2d");s.drawImage(n,0,0);let{data:r}=s.getImageData(1,0,1,i),l=0,o=i,a=i;for(;a>l;)r[(a-1)*4+3]===0?o=a:l=a,a=o+l>>1;let d=a/i;return d===0?1:d},O=function(n,e,i,t,s,r,l,o,a,d){let p=P(e);return n.drawImage(e,i,t,s,r,l,o,a,d/p)},z=class{static initClass(){this.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}static encode64(e){let i="",t,s,r="",l,o,a,d="",p=0;for(;t=e[p++],s=e[p++],r=e[p++],l=t>>2,o=(t&3)<<4|s>>4,a=(s&15)<<2|r>>6,d=r&63,isNaN(s)?a=d=64:isNaN(r)&&(d=64),i=i+this.KEY_STR.charAt(l)+this.KEY_STR.charAt(o)+this.KEY_STR.charAt(a)+this.KEY_STR.charAt(d),t=s=r="",l=o=a=d="",p<e.length;);return i}static restore(e,i){if(!e.match("data:image/jpeg;base64,"))return i;let t=this.decode64(e.replace("data:image/jpeg;base64,","")),s=this.slice2Segments(t),r=this.exifManipulation(i,s);return`data:image/jpeg;base64,${this.encode64(r)}`}static exifManipulation(e,i){let t=this.getExifArray(i),s=this.insertExif(e,t);return new Uint8Array(s)}static getExifArray(e){let i,t=0;for(;t<e.length;){if(i=e[t],i[0]===255&i[1]===225)return i;t++}return[]}static insertExif(e,i){let t=e.replace("data:image/jpeg;base64,",""),s=this.decode64(t),r=s.indexOf(255,3),l=s.slice(0,r),o=s.slice(r),a=l;return a=a.concat(i),a=a.concat(o),a}static slice2Segments(e){let i=0,t=[];for(;;){var s;if(e[i]===255&e[i+1]===218)break;if(e[i]===255&e[i+1]===216)i+=2;else{s=e[i+2]*256+e[i+3];let r=i+s+2,l=e.slice(i,r);t.push(l),i=r}if(i>e.length)break}return t}static decode64(e){let i="",t,s,r="",l,o,a,d="",p=0,h=[];for(/[^A-Za-z0-9\+\/\=]/g.exec(e)&&console.warn(`There were invalid base64 characters in the input text.
Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='
Expect errors in decoding.`),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");l=this.KEY_STR.indexOf(e.charAt(p++)),o=this.KEY_STR.indexOf(e.charAt(p++)),a=this.KEY_STR.indexOf(e.charAt(p++)),d=this.KEY_STR.indexOf(e.charAt(p++)),t=l<<2|o>>4,s=(o&15)<<4|a>>2,r=(a&3)<<6|d,h.push(t),a!==64&&h.push(s),d!==64&&h.push(r),t=s=r="",l=o=a=d="",p<e.length;);return h}};z.initClass();function B(n,e){return typeof n<"u"&&n!==null?e(n):void 0}function q(n,e,i){if(typeof n<"u"&&n!==null&&typeof n[e]=="function")return i(n,e)}function H({maxFilesize:n,acceptedFiles:e,chunkSize:i,chunking:t,allowMultiple:s,parallelUploads:r,parallelChunksUploads:l,autoProcessQueue:o,url:a,retryChunks:d,retryChunksLimit:p,clearOnFinish:h,leaveFailed:m,directory:c,disk:b,maxVideoDuration:w,defaultMessage:T,successTitle:U,successMessage:k,state:A}){return{dropzone:null,error:null,state:A,init:async function(){let y=document.querySelector(".dropzone");c===null&&(c="");let F={maxFilesize:n,acceptedFiles:e,allowMultiple:s,autoProcessQueue:o,parallelUploads:r,parallelChunksUploads:l,chunking:t,chunkSize:i,url:`${a}?directory=${c}&disk=${b}`,retryChunks:d,retryChunksLimit:p,dictDefaultMessage:T,maxFiles:s?null:1};this.dropzone=new u(y,F),this.dropzone.on("addedfile",g=>{if(this.dispatchFormEvent("form-processing-started"),w&&g.type.startsWith("video/")){let f=document.createElement("video");f.src=URL.createObjectURL(g),f.onloadedmetadata=()=>{f.duration>w&&(this.dropzone.removeFile(g),this.error=`Video duration is too long. Maximum allowed duration is ${w} seconds.`)}}}),this.dropzone.on("error",(g,f)=>{console.error(`Error uploading file: ${g.name}`,f),new window.FilamentNotification().title(`Error uploading file: ${g.name}`).warning().body(this.error??f?.message).send()}),this.dropzone.on("queuecomplete",()=>{this.state=this.dropzone.files.map(f=>c?`${c}/${f.name}`:f.name);let g=this.dropzone.getFilesWithStatus(u.ERROR).length;if(g!==this.dropzone.files.length){let f=new window.FilamentNotification,x=U??"Upload complete";f.title(x).success(),k&&f.body(k),h&&setTimeout(()=>{this.dropzone.removeAllFiles()},5e3),m&&g>0&&(f.body("Some files failed to upload. Please check the list below."),this.dropzone.getFilesWithStatus(u.SUCCESS).forEach(M=>{this.dropzone.removeFile(M)})),f.send()}this.dispatchFormEvent("form-processing-finished",{failedUploadsCount:g})}),window.addEventListener("clear-dropzone",()=>{this.dropzone.removeAllFiles()})},destroy:function(){this.dropzone.destroy(),this.dropzone=null},dispatchFormEvent:function(y,F={}){window.dispatchEvent(new CustomEvent(y,{composed:!0,cancelable:!0,detail:F}))}}}export{H as default};
