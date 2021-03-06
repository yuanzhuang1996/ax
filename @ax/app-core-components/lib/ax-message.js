module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 118);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ax_message_AxMessage; });

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(1);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: external "element-ui/lib/notification"
var notification_ = __webpack_require__(71);
var notification_default = /*#__PURE__*/__webpack_require__.n(notification_);

// EXTERNAL MODULE: external "element-ui/lib/message"
var message_ = __webpack_require__(72);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: external "element-ui/lib/loading"
var loading_ = __webpack_require__(29);
var loading_default = /*#__PURE__*/__webpack_require__.n(loading_);

// EXTERNAL MODULE: external "element-ui/lib/message-box"
var message_box_ = __webpack_require__(73);
var message_box_default = /*#__PURE__*/__webpack_require__.n(message_box_);

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string.js"
var es_object_to_string_js_ = __webpack_require__(16);

// EXTERNAL MODULE: external "core-js/modules/es.array.join.js"
var es_array_join_js_ = __webpack_require__(40);

// EXTERNAL MODULE: external "core-js/modules/es.array.map.js"
var es_array_map_js_ = __webpack_require__(23);

// EXTERNAL MODULE: external "@ax/app-core-framework"
var app_core_framework_ = __webpack_require__(13);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-com-core"
var ax_com_core_ = __webpack_require__(4);
var ax_com_core_default = /*#__PURE__*/__webpack_require__.n(ax_com_core_);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(2);

// CONCATENATED MODULE: ./packages/ax-message/src/message.ts













var MessageButtonType = ax_com_core_default.a.MessageButtonType;
var MessageStyle = ax_com_core_default.a.MessageStyle;
var getAxLang = ax_com_core_default.a.getAxLang;
/* -------------------------------------- ??????????????? -------------------------------------- */

/**
 * ??????????????????????????????
 * @param {string} message ????????????
 * @param {number} [buttons] ?????????????????????????????????: MessageButtonType.OK??????????????????????????????????????????
 * @param {number} [style] ??????????????????????????????: MessageStyle.TIPS???
 * @param options [IAlertOptions] ??????????????????????????????
 * @returns {Promise<number>} ????????????????????????????????????: MessageButtonType.XXXX???
 */

function showAlert(message) {
  var buttons = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MessageButtonType.OK;
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MessageStyle.TIPS;
  var options = arguments.length > 3 ? arguments[3] : undefined;
  // ????????????????????????
  return new Promise(function (resolve, reject) {
    // ??????????????????
    var lang = getAxLang();
    var drags; // ????????????

    var title = getTitle(options ? options.title : undefined, style);
    var asHTML = options ? options.asHTML || options.asHTML === undefined : true;
    var showClose = options ? options.showClose || options.showClose === undefined : true;
    var iconClass = options ? options.iconClass : undefined; // ???????????????

    message_box_default.a.alert(message, {
      title: title,
      dangerouslyUseHTMLString: asHTML,
      type: getIconType(style),
      customClass: 'ax_alert',
      iconClass: iconClass,
      showClose: showClose || (buttons & ax_com_core_default.a.MessageButtonType.CLOSE) === ax_com_core_default.a.MessageButtonType.CLOSE,
      showConfirmButton: (buttons & ax_com_core_default.a.MessageButtonType.OK) === ax_com_core_default.a.MessageButtonType.OK || (buttons & ax_com_core_default.a.MessageButtonType.YES) === ax_com_core_default.a.MessageButtonType.YES,
      confirmButtonText: (buttons & ax_com_core_default.a.MessageButtonType.YES) === ax_com_core_default.a.MessageButtonType.YES ? lang.text('msg.button.yes') : lang.text('msg.button.ok'),
      showCancelButton: (buttons & ax_com_core_default.a.MessageButtonType.CANCEL) === ax_com_core_default.a.MessageButtonType.CANCEL || (buttons & ax_com_core_default.a.MessageButtonType.NO) === ax_com_core_default.a.MessageButtonType.NO,
      cancelButtonText: (buttons & ax_com_core_default.a.MessageButtonType.NO) === ax_com_core_default.a.MessageButtonType.NO ? lang.text('msg.button.no') : lang.text('msg.button.cancel'),
      cancelButtonClass: 'ax_alert_cancel',
      callback: function callback(action, instance) {
        drags.remove(); // ??????????????????

        resolve(getResultType(action, buttons));
      }
    }); // ????????????MessageBox????????????????????????????????????dom


    setTimeout(function () {
      drags = new message_Drags();
    }, 0);
  });
}
/**
 * ??????????????????
 * @param {string} [title] ???????????????????????????
 * @param {number} [style] ??????????????????
 * @returns {string} ??????????????????
 */

function getTitle(title, style) {
  // ????????????????????????
  if (title) return title; // ??????????????????

  var lang = ax_com_core_default.a.getAxLang(); // ????????????

  switch (style) {
    case ax_com_core_default.a.MessageStyle.INFO:
      return lang.text('msg.style.info');

    case ax_com_core_default.a.MessageStyle.SUCCESS:
      return lang.text('msg.style.success');

    case ax_com_core_default.a.MessageStyle.WARNING:
      return lang.text('msg.style.warning');

    case ax_com_core_default.a.MessageStyle.ERROR:
      return lang.text('msg.style.error');

    default:
      return lang.text('msg.style.tips');
  }
}
/**
 * ?????????????????????????????????
 * @param {number} icon ????????????
 * @returns {string|undefined} ????????????
 */


function getIconType(icon) {
  // ??????????????????(success / info / warning / error)
  switch (icon) {
    case ax_com_core_default.a.MessageStyle.SUCCESS:
      return 'success';

    case ax_com_core_default.a.MessageStyle.INFO:
      return 'info';

    case ax_com_core_default.a.MessageStyle.WARNING:
      return 'warning';

    case ax_com_core_default.a.MessageStyle.ERROR:
      return 'error';

    default:
      return undefined;
  }
}
/**
 * ????????????????????????
 * @param {MessageBoxCloseAction} action ????????????
 * @param {number} buttons ????????????
 * @returns {number} ????????????
 */


function getResultType(action, buttons) {
  if (action === 'confirm') return (buttons & ax_com_core_default.a.MessageButtonType.OK) === ax_com_core_default.a.MessageButtonType.OK ? ax_com_core_default.a.MessageButtonType.OK : ax_com_core_default.a.MessageButtonType.YES;
  if (action === 'cancel') return (buttons & ax_com_core_default.a.MessageButtonType.CANCEL) === ax_com_core_default.a.MessageButtonType.CANCEL ? ax_com_core_default.a.MessageButtonType.CANCEL : ax_com_core_default.a.MessageButtonType.NO;
  return ax_com_core_default.a.MessageButtonType.CLOSE;
}
/* -------------------------------------- ???????????? -------------------------------------- */

/**
 * ??????????????????????????????
 * @param target  {(Vue | HTMLElement)} [target] ??????????????????????????????????????????
 * @param text {string} [text] ??????????????????????????????????????????
 * @param iconClass {string} [iconClass] ?????????????????????????????????
 * @param body
 * @param lock
 * @param background
 * @returns {ICloseHandler} ??????????????????
 */


function showLoading(data) {
  if (!data) {
    return loading_default.a.service({});
  }

  var target = data.target,
      text = data.text,
      iconClass = data.iconClass,
      _data$body = data.body,
      body = _data$body === void 0 ? false : _data$body,
      _data$lock = data.lock,
      lock = _data$lock === void 0 ? false : _data$lock,
      background = data.background; // ??????????????????

  var el = target && target instanceof external_vue_property_decorator_["Vue"] ? target.$el : target;
  return loading_default.a.service({
    customClass: 'ax_loading',
    spinner: iconClass,
    target: el ? el : undefined,
    fullscreen: !el,
    text: text,
    body: body,
    lock: lock,
    background: background
  });
}
/* -------------------------------------- ???????????? -------------------------------------- */

/**
 * ????????????????????????
 * @param {string} text ????????????
 * @param {number} [timeout=5000] ??????????????????????????????????????????: 5000 ?????????
 * @param {number} [style=AxComCore.MessageStyle.TIPS] ???????????????????????????????????????: AxComCore.MessageStyle.TIPS???
 * @param {number} [positon=AxComCore.NotifyPosition.TOP_MIDDLE] ??????????????????????????????: AxComCore.NotifyPosition.TOP_MIDDLE???
 * @param {INotifyOptions} [options] ????????????????????????
 * @returns {ICloseHandler} ??????????????????
 */

function showNotify(text) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ax_com_core_default.a.MessageStyle.TIPS;
  var positon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ax_com_core_default.a.NotifyPosition.TOP_MIDDLE;
  var options = arguments.length > 4 ? arguments[4] : undefined;
  // ????????????
  var title = getTitle(options ? options.title : undefined, style);
  var asHTML = options ? options.asHTML || options.asHTML === undefined : true;
  var showClose = options ? options.showClose || options.showClose === undefined : true;
  var offset = options ? options.offset || 0 : 0;
  var iconClass = options ? options.iconClass : undefined; // ????????????

  if (positon === ax_com_core_default.a.NotifyPosition.TOP_MIDDLE) {
    // ????????????
    return message_default()({
      message: text,
      customClass: 'ax_notify',
      type: getIconType(style),
      dangerouslyUseHTMLString: asHTML,
      showClose: showClose,
      iconClass: iconClass,
      duration: timeout
    });
  } else {
    // ?????????????????????????????????
    var pos;

    switch (positon) {
      case ax_com_core_default.a.NotifyPosition.TOP_RIGHT:
        pos = 'top-right';
        break;

      case ax_com_core_default.a.NotifyPosition.TOP_LEFT:
        pos = 'top-left';
        break;

      case ax_com_core_default.a.NotifyPosition.BOTTOM_RIGHT:
        pos = 'bottom-right';
        break;

      case ax_com_core_default.a.NotifyPosition.BOTTOM_LEFT:
        pos = 'bottom-left';
        break;

      default:
        pos = 'top-right';
        break;
    } // ????????????????????????


    return notification_default()({
      title: title,
      message: text,
      customClass: 'ax_notify',
      iconClass: iconClass,
      type: getIconType(style),
      dangerouslyUseHTMLString: asHTML,
      duration: timeout,
      position: pos,
      showClose: showClose,
      offset: offset
    });
  }
}
/**
 * ?????????????????????????????????.?????????????????????,???????????????
 * @param nameList
 */

function getValueText(nameList) {
  // ?????????????????? ids ????????????????????? name
  // const nameList = this.table.getAttrByIds(this.tableSelectedIds, 'name');
  var valueText = ''; // ??????????????????,??????????????????

  if (nameList.length > 2) {
    nameList.length = 2;
  }

  return valueText = nameList.map(function (item) {
    return "\"".concat(item, "\"");
  }).join('???');
}

var message_Drags = /*#__PURE__*/function () {
  // ???????????????????????????
  // ????????????????????????
  function Drags() {
    Object(classCallCheck["a" /* default */])(this, Drags);

    Object(defineProperty["a" /* default */])(this, "dialogHeaderEl", void 0);

    Object(defineProperty["a" /* default */])(this, "dialogEl", void 0);

    Object(defineProperty["a" /* default */])(this, "isDragingTitle", void 0);

    Object(defineProperty["a" /* default */])(this, "isTouch", void 0);

    Object(defineProperty["a" /* default */])(this, "deltaX", void 0);

    Object(defineProperty["a" /* default */])(this, "deltaY", void 0);

    this.dialogHeaderEl = document.querySelector('.el-message-box__header');
    this.dialogEl = this.dialogHeaderEl ? this.dialogHeaderEl.parentElement ? this.dialogHeaderEl.parentElement : null : null;
    this.isDragingTitle = false;
    this.isTouch = false;
    this.deltaX = 0;
    this.deltaY = 0;
    this.init();

    if (!this.dialogHeaderEl && !this.dialogEl) {
      return;
    }
  }

  Object(createClass["a" /* default */])(Drags, [{
    key: "init",
    value: function init() {
      if (this.dialogEl && this.dialogHeaderEl) {
        this.dialogEl.style.left = 0 + 'px';
        this.dialogEl.style.top = 0 + 'px';
        app_core_framework_["AxDomUtils"].addDomEventListener(this.dialogHeaderEl, ['onmousedown', 'touchstart'], this.onMouseDown);
      }
    } // ???????????????????????????

  }, {
    key: "onMouseDown",
    value: function onMouseDown(evt) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var self = this;
      var e = app_core_framework_["AxDomUtils"].getDomEventTarget(evt);
      if (!e || !e.tagName) return true;
      var tg = e.tagName.toUpperCase();
      if (tg === 'BUTTON' || e.parentElement && e.parentElement.tagName.toUpperCase() === 'BUTTON') return true;
      this.isDragingTitle = true;
      this.isTouch = evt.type === 'touchstart';
      var ev = this.isTouch ? evt.touches.item(0) : evt; // ??????????????????

      var dragDom = document.querySelector('.el-message-box'); // ?????????????????????

      var dialogHeaderEl = dragDom.querySelector('.el-message-box__header');
      var pos = app_core_framework_["AxDomUtils"].getDomPosition(dialogHeaderEl); // ??????????????????????????????

      var wsize = app_core_framework_["AxDomUtils"].getWindowSize(); //  ????????????????????????

      this.deltaX = ev.clientX - pos.left + (wsize.width - dragDom.offsetWidth) / 2;
      this.deltaY = ev.clientY - pos.top + (wsize.height - dragDom.offsetHeight) / 2; // ???????????????????????????

      if (this.isTouch) {
        app_core_framework_["AxDomUtils"].addDomEventListener(document, 'touchmove', onMouseMove);
        app_core_framework_["AxDomUtils"].addDomEventListener(document, 'touchend', onMouseUp);
      } else {
        app_core_framework_["AxDomUtils"].addDomEventListener(document, 'onmousemove', onMouseMove);
        app_core_framework_["AxDomUtils"].addDomEventListener(document, 'onmouseup', onMouseUp);
      }

      function onMouseMove(evt1) {
        // ??????????????????
        var dragDom = document.querySelector('.el-message-box');
        if (!self.isDragingTitle) return true;
        var left;
        var top;
        var ev1 = self.isTouch ? evt1.touches.item(0) : evt1;
        left = ev1.clientX - self.deltaX;
        top = ev1.clientY - self.deltaY; // ???????????????????????????

        var wsize = app_core_framework_["AxDomUtils"].getWindowSize();
        var fixL = (wsize.width - dragDom.offsetWidth) / 2;
        var fixT = (wsize.height - dragDom.offsetHeight) / 2;
        var minL = 40 - dragDom.offsetWidth - fixL;
        var maxL = wsize.width - 30 - fixL;
        var minT = -fixT;
        var maxT = wsize.height - 30 - fixT;
        left = left < minL ? minL : left > maxL ? maxL : left;
        top = top < minT ? minT : top > maxT ? maxT : top; // ?????????????????????

        dragDom.style.left = left + 'px';
        dragDom.style.top = top + 'px';
        return app_core_framework_["AxDomUtils"].cancelDomEvent(evt1);
      }

      function onMouseUp() {
        if (!self.isDragingTitle) return true;
        self.isDragingTitle = false;

        if (self.isTouch) {
          app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'touchmove', onMouseMove);
          app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'touchend', onMouseUp);
        } else {
          app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'onmousemove', onMouseMove);
          app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'onmouseup', onMouseUp);
        }

        return true;
      }

      return true;
    }
  }, {
    key: "remove",
    value: function remove() {
      return this.dialogHeaderEl ? app_core_framework_["AxDomUtils"].removeDomEventListener(this.dialogHeaderEl, ['onmousedown', 'touchstart'], this.onMouseDown) : false;
    }
  }]);

  return Drags;
}();
// CONCATENATED MODULE: ./packages/ax-message/index.ts




var ax_message_AxMessage = function AxMessage() {
  Object(classCallCheck["a" /* default */])(this, AxMessage);
};

Object(defineProperty["a" /* default */])(ax_message_AxMessage, "alert", showAlert);

Object(defineProperty["a" /* default */])(ax_message_AxMessage, "loading", showLoading);

Object(defineProperty["a" /* default */])(ax_message_AxMessage, "notify", showNotify);



/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-framework");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string.js");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map.js");

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/loading");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-com-core");

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.join.js");

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/notification");

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/message");

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/message-box");

/***/ })

/******/ });