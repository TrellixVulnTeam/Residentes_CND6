(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "ke6l":
/*!***************************************************************************************!*\
  !*** ../node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js ***!
  \***************************************************************************************/
/*! exports provided: pwa_camera_modal_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pwa_camera_modal_instance", function() { return PWACameraModal; });
/* harmony import */ var _core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-f86805ad.js */ "J9U/");


const PWACameraModal = class {
    constructor(hostRef) {
        Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.noDevicesText = 'No camera found';
        this.noDevicesButtonText = 'Choose image';
        this.handlePhoto = async (photo) => {
            this.onPhoto.emit(photo);
        };
        this.handleNoDeviceError = async (photo) => {
            this.noDeviceError.emit(photo);
        };
        this.onPhoto = Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "onPhoto", 7);
        this.noDeviceError = Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "noDeviceError", 7);
    }
    handleBackdropClick(e) {
        if (e.target !== this.el) {
            this.onPhoto.emit(null);
        }
    }
    handleComponentClick(e) {
        e.stopPropagation();
    }
    handleBackdropKeyUp(e) {
        if (e.key === "Escape") {
            this.onPhoto.emit(null);
        }
    }
    render() {
        return (Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "wrapper", onClick: e => this.handleBackdropClick(e) }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content" }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("pwa-camera", { onClick: e => this.handleComponentClick(e), handlePhoto: this.handlePhoto, handleNoDeviceError: this.handleNoDeviceError, noDevicesButtonText: this.noDevicesButtonText, noDevicesText: this.noDevicesText }))));
    }
    get el() { return Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
    static get style() { return ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}\@media only screen and (max-width:600px){.content{width:100%;height:100%}}"; }
};




/***/ })

}]);
//# sourceMappingURL=44.js.map