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
/******/ 	return __webpack_require__(__webpack_require__.s = 88);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

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

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name.js");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-framework");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat.js");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string.js");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.find-index.js");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("tslib");

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

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _createSuper; });

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// EXTERNAL MODULE: external "@babel/runtime/helpers/typeof"
var typeof_ = __webpack_require__(10);
var typeof_default = /*#__PURE__*/__webpack_require__.n(typeof_);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(0);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_default()(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inherits; });

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AxUIComponent", function() { return /* reexport */ core_AxUIComponent; });
__webpack_require__.d(__webpack_exports__, "LayoutType", function() { return /* reexport */ LayoutType; });
__webpack_require__.d(__webpack_exports__, "InputType", function() { return /* reexport */ InputType; });
__webpack_require__.d(__webpack_exports__, "BadgeType", function() { return /* reexport */ BadgeType; });
__webpack_require__.d(__webpack_exports__, "ButtonType", function() { return /* reexport */ ButtonType; });
__webpack_require__.d(__webpack_exports__, "BoardPresetClass", function() { return /* reexport */ BoardPresetClass; });
__webpack_require__.d(__webpack_exports__, "LinkType", function() { return /* reexport */ LinkType; });
__webpack_require__.d(__webpack_exports__, "ButtonSize", function() { return /* reexport */ ButtonSize; });
__webpack_require__.d(__webpack_exports__, "DividerType", function() { return /* reexport */ DividerType; });
__webpack_require__.d(__webpack_exports__, "DividerPreset", function() { return /* reexport */ DividerPreset; });
__webpack_require__.d(__webpack_exports__, "HeaderMode", function() { return /* reexport */ HeaderMode; });
__webpack_require__.d(__webpack_exports__, "TagType", function() { return /* reexport */ TagType; });
__webpack_require__.d(__webpack_exports__, "TagSize", function() { return /* reexport */ TagSize; });
__webpack_require__.d(__webpack_exports__, "DropdownType", function() { return /* reexport */ DropdownType; });
__webpack_require__.d(__webpack_exports__, "DropdownPosition", function() { return /* reexport */ DropdownPosition; });
__webpack_require__.d(__webpack_exports__, "CheckboxType", function() { return /* reexport */ CheckboxType; });
__webpack_require__.d(__webpack_exports__, "RadioType", function() { return /* reexport */ RadioType; });
__webpack_require__.d(__webpack_exports__, "ResizeType", function() { return /* reexport */ ResizeType; });
__webpack_require__.d(__webpack_exports__, "FormValueType", function() { return /* reexport */ FormValueType; });
__webpack_require__.d(__webpack_exports__, "MoveDirType", function() { return /* reexport */ MoveDirType; });
__webpack_require__.d(__webpack_exports__, "DialogType", function() { return /* reexport */ DialogType; });
__webpack_require__.d(__webpack_exports__, "TreeEventType", function() { return /* reexport */ TreeEventType; });
__webpack_require__.d(__webpack_exports__, "MessageButtonType", function() { return /* reexport */ MessageButtonType; });
__webpack_require__.d(__webpack_exports__, "MessageStyle", function() { return /* reexport */ MessageStyle; });
__webpack_require__.d(__webpack_exports__, "NotifyPosition", function() { return /* reexport */ NotifyPosition; });
__webpack_require__.d(__webpack_exports__, "TableBoxType", function() { return /* reexport */ TableBoxType; });
__webpack_require__.d(__webpack_exports__, "AxTimeType", function() { return /* reexport */ AxTimeType; });
__webpack_require__.d(__webpack_exports__, "throttle", function() { return /* reexport */ throttle; });
__webpack_require__.d(__webpack_exports__, "debounce", function() { return /* reexport */ debounce; });
__webpack_require__.d(__webpack_exports__, "sleep", function() { return /* reexport */ sleep; });
__webpack_require__.d(__webpack_exports__, "isEllipsis", function() { return /* reexport */ isEllipsis; });
__webpack_require__.d(__webpack_exports__, "getValueByAttr", function() { return /* reexport */ getValueByAttr; });
__webpack_require__.d(__webpack_exports__, "UILang", function() { return /* reexport */ UILang; });
__webpack_require__.d(__webpack_exports__, "getAxLang", function() { return /* reexport */ getAxLang; });

// NAMESPACE OBJECT: ./packages/ax-com-core/export.ts
var export_namespaceObject = {};
__webpack_require__.r(export_namespaceObject);
__webpack_require__.d(export_namespaceObject, "AxUIComponent", function() { return core_AxUIComponent; });
__webpack_require__.d(export_namespaceObject, "LayoutType", function() { return LayoutType; });
__webpack_require__.d(export_namespaceObject, "InputType", function() { return InputType; });
__webpack_require__.d(export_namespaceObject, "BadgeType", function() { return BadgeType; });
__webpack_require__.d(export_namespaceObject, "ButtonType", function() { return ButtonType; });
__webpack_require__.d(export_namespaceObject, "BoardPresetClass", function() { return BoardPresetClass; });
__webpack_require__.d(export_namespaceObject, "LinkType", function() { return LinkType; });
__webpack_require__.d(export_namespaceObject, "ButtonSize", function() { return ButtonSize; });
__webpack_require__.d(export_namespaceObject, "DividerType", function() { return DividerType; });
__webpack_require__.d(export_namespaceObject, "DividerPreset", function() { return DividerPreset; });
__webpack_require__.d(export_namespaceObject, "HeaderMode", function() { return HeaderMode; });
__webpack_require__.d(export_namespaceObject, "TagType", function() { return TagType; });
__webpack_require__.d(export_namespaceObject, "TagSize", function() { return TagSize; });
__webpack_require__.d(export_namespaceObject, "DropdownType", function() { return DropdownType; });
__webpack_require__.d(export_namespaceObject, "DropdownPosition", function() { return DropdownPosition; });
__webpack_require__.d(export_namespaceObject, "CheckboxType", function() { return CheckboxType; });
__webpack_require__.d(export_namespaceObject, "RadioType", function() { return RadioType; });
__webpack_require__.d(export_namespaceObject, "ResizeType", function() { return ResizeType; });
__webpack_require__.d(export_namespaceObject, "FormValueType", function() { return FormValueType; });
__webpack_require__.d(export_namespaceObject, "MoveDirType", function() { return MoveDirType; });
__webpack_require__.d(export_namespaceObject, "DialogType", function() { return DialogType; });
__webpack_require__.d(export_namespaceObject, "TreeEventType", function() { return TreeEventType; });
__webpack_require__.d(export_namespaceObject, "MessageButtonType", function() { return MessageButtonType; });
__webpack_require__.d(export_namespaceObject, "MessageStyle", function() { return MessageStyle; });
__webpack_require__.d(export_namespaceObject, "NotifyPosition", function() { return NotifyPosition; });
__webpack_require__.d(export_namespaceObject, "TableBoxType", function() { return TableBoxType; });
__webpack_require__.d(export_namespaceObject, "AxTimeType", function() { return AxTimeType; });
__webpack_require__.d(export_namespaceObject, "throttle", function() { return throttle; });
__webpack_require__.d(export_namespaceObject, "debounce", function() { return debounce; });
__webpack_require__.d(export_namespaceObject, "sleep", function() { return sleep; });
__webpack_require__.d(export_namespaceObject, "isEllipsis", function() { return isEllipsis; });
__webpack_require__.d(export_namespaceObject, "getValueByAttr", function() { return getValueByAttr; });
__webpack_require__.d(export_namespaceObject, "UILang", function() { return UILang; });
__webpack_require__.d(export_namespaceObject, "getAxLang", function() { return getAxLang; });

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(0);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(8);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(7);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(1);

// EXTERNAL MODULE: external "core-js/modules/es.array.concat.js"
var es_array_concat_js_ = __webpack_require__(14);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(12);

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(3);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(2);

// CONCATENATED MODULE: ./packages/ax-com-core/core.ts










/**
 * AX ????????????
 */

var core_AxUIComponent = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(AxUIComponent, _Vue);

  var _super = Object(createSuper["a" /* default */])(AxUIComponent);

  function AxUIComponent() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AxUIComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mform", undefined);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mvalue", '');

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "validate", undefined);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "data", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "placeholder", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "clearable", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "disabled", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "name", void 0);

    return _this;
  }

  Object(createClass["a" /* default */])(AxUIComponent, [{
    key: "form",
    get:
    /**
     * ???????????????????????????????????????????????? null???
     */
    function get() {
      // ??????????????????
      if (this.mform !== undefined) return this.mform; // ??????????????????

      var parent = this.$parent; // ??????????????????????????????

      while (parent) {
        // ???????????????????????????
        if (parent.$options.name === 'ax-form') {
          // ???????????????????????????
          this.mform = parent; // ??????????????????

          return this.mform;
        } // ????????????????????????


        parent = parent.$parent;
      } // ?????????????????????????????????


      this.mform = null; // ???????????????

      return null;
    }
    /**
     * ??????????????????????????????
     */

  }, {
    key: "validatePassed",
    get:
    /**
     * ??????????????????????????????
     */
    function get() {
      return this.validate;
    }
    /**
     * ?????????????????????????????????
     */
    ,
    set: function set(val) {
      this.validate = val;
      this.$forceUpdate();
    }
  }, {
    key: "modelValue",
    get: function get() {
      // ?????????????????????????????????
      if (this.data !== undefined && this.data !== null && this.mvalue !== this.data) {
        // ?????????????????????????????????????????????
        this.mvalue = this.data;
      } // ?????????


      return this.mvalue;
    }
    /**
     * ?????????????????????????????????????????????
     * @param value
     */
    ,
    set: function set(value) {
      // ??????????????????
      if (this.mvalue === value) return; // ??????????????????

      this.mvalue = value; // ????????????????????????

      this.$emit('change', value); // ????????????????????????

      if (this.name && this.name.length > 0 && this.form) {
        // ??????????????????
        this.form.$emit('form-item-change', this.name, value);
      } // ???????????????????????????


      if (this.clearable !== undefined && this.clearable && (!value || value.length === 0)) {
        // ????????????
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var self = this; // ??????????????????

        window.setTimeout(function () {
          self.focus();
        }, 10);
      }
    }
    /**
     * ??????????????????????????????
     * @param {*} value ?????????????????????
     */

  }, {
    key: "setFormItemValue",
    value: function setFormItemValue(value) {
      // ??????????????????
      if (this.mvalue === value) return; // ??????????????????

      this.mvalue = value; // ????????????????????????

      this.$emit('change', value);
    }
    /**
     * ?????????????????????
     */

  }]);

  return AxUIComponent;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], core_AxUIComponent.prototype, "data", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], core_AxUIComponent.prototype, "placeholder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true
})], core_AxUIComponent.prototype, "clearable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], core_AxUIComponent.prototype, "disabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], core_AxUIComponent.prototype, "name", void 0);
// CONCATENATED MODULE: ./packages/ax-com-core/interfaces/interfaces.ts

// CONCATENATED MODULE: ./packages/ax-com-core/const/enum.ts
/* ================================  ?????????????????? =================================== */

/**
 * ?????? ????????????
 */
var LayoutType;

(function (LayoutType) {
  /* ???????????? */
  LayoutType["VERTICAL"] = "vertical";
  /* ???????????? */

  LayoutType["HORIZONTAL"] = "horizontal";
})(LayoutType || (LayoutType = {}));
/**
 * ???????????????????????????
 */


var InputType;

(function (InputType) {
  InputType["TEXT"] = "text";
  InputType["PASSWORD"] = "password";
  InputType["TEXT_AREA"] = "textarea";
})(InputType || (InputType = {}));
/**
 * ????????????
 */


var BadgeType;

(function (BadgeType) {
  BadgeType["PRIMARY"] = "primary";
  BadgeType["SUCCESS"] = "success";
  BadgeType["WARNING"] = "warning";
  BadgeType["DANGER"] = "danger";
})(BadgeType || (BadgeType = {}));
/**
 * ????????????
 */


var ButtonType;

(function (ButtonType) {
  ButtonType["PRIMARY"] = "primary";
  ButtonType["SUCCESS"] = "success";
  ButtonType["WARNING"] = "warning";
  ButtonType["DANGER"] = "danger";
  ButtonType["INFO"] = "info";
  ButtonType["TEXT"] = "text";
})(ButtonType || (ButtonType = {}));
/**
 * ?????????????????????
 */


var BoardPresetClass;

(function (BoardPresetClass) {
  BoardPresetClass["TABLE_ABSOLUTE"] = "table_absolute";
})(BoardPresetClass || (BoardPresetClass = {}));
/**
 * ????????????
 */


var LinkType;

(function (LinkType) {
  LinkType["PRIMARY"] = "primary";
  LinkType["SUCCESS"] = "success";
  LinkType["WARNING"] = "warning";
  LinkType["DANGER"] = "danger";
  LinkType["INFO"] = "info";
  LinkType["DEFAULT"] = "default";
})(LinkType || (LinkType = {}));
/**
 * ????????????
 */


var ButtonSize;

(function (ButtonSize) {
  ButtonSize["MAX"] = "max";
  ButtonSize["LARGE"] = "large";
  ButtonSize["NORMAL"] = "normal";
  ButtonSize["SMALL"] = "small";
  ButtonSize["MINI"] = "mini";
})(ButtonSize || (ButtonSize = {}));
/**
 * ???????????????
 */


var DividerType;

(function (DividerType) {
  // ??????
  DividerType["HORIZONTAL"] = "horizontal"; // ??????

  DividerType["VERTICAL"] = "vertical";
})(DividerType || (DividerType = {}));
/**
 * ???????????????
 */


var DividerPreset;

(function (DividerPreset) {
  // ??????
  DividerPreset["BUTTON"] = "button";
})(DividerPreset || (DividerPreset = {}));
/**
 * ???????????????
 */


var HeaderMode;

(function (HeaderMode) {
  // ????????????
  HeaderMode["FIRST"] = "first"; // ???????????? ?????????

  HeaderMode["FIRST_BG"] = "first_bg"; // ????????????

  HeaderMode["SECOND"] = "second"; // form?????????

  HeaderMode["FORM_SPLIT"] = "form_split"; // form????????? ?????????

  HeaderMode["FORM_BG"] = "form_bg";
})(HeaderMode || (HeaderMode = {}));
/**
 * ????????????
 */


var TagType;

(function (TagType) {
  TagType["PRIMARY"] = "primary";
  TagType["SUCCESS"] = "success";
  TagType["WARNING"] = "warning";
  TagType["DANGER"] = "danger";
  TagType["INFO"] = "info";
})(TagType || (TagType = {}));
/**
 * ????????????
 */


var TagSize;

(function (TagSize) {
  TagSize["LARGE"] = "large";
  TagSize["NORMAL"] = "normal";
  TagSize["SMALL"] = "small";
})(TagSize || (TagSize = {}));
/**
 * ???????????????
 */


var DropdownType;

(function (DropdownType) {
  /**
   * ?????????????????????
   */
  DropdownType["NORMAL"] = "select";
  /**
   * ?????????????????????
   */

  DropdownType["BORDER"] = "input";
})(DropdownType || (DropdownType = {}));
/**
 * ???????????????
 */


var DropdownPosition;

(function (DropdownPosition) {
  // ?????? ??????
  DropdownPosition["TOP"] = "top"; // ?????? ?????????

  DropdownPosition["TOP_START"] = "top-start"; // ?????? ?????????

  DropdownPosition["TOP_END"] = "top-end"; // ?????? ??????

  DropdownPosition["BOTTOM"] = "bottom"; // ?????? ?????????

  DropdownPosition["BOTTOM_START"] = "bottom-start"; // ?????? ?????????

  DropdownPosition["BOTTOM_END"] = "bottom-end";
})(DropdownPosition || (DropdownPosition = {}));
/**
 * ???????????????
 */


var CheckboxType;

(function (CheckboxType) {
  /**
   * ???????????????
   */
  CheckboxType["NORMAL"] = "normal";
  /**
   * ?????????????????????
   */

  CheckboxType["BUTTON"] = "button";
  /**
   * ??????????????????
   */

  CheckboxType["BORDER"] = "border";
  /**
   * ?????????????????????
   */

  CheckboxType["SWITCH"] = "switch";
})(CheckboxType || (CheckboxType = {}));
/**
 * ???????????????
 */


var RadioType;

(function (RadioType) {
  RadioType["NORMAL"] = "normal";
  RadioType["BUTTON"] = "button";
  RadioType["BORDER"] = "border";
})(RadioType || (RadioType = {}));
/**
 * ????????????????????????????????????
 * @export
 * @enum {string} ?????????????????????
 */


var ResizeType;

(function (ResizeType) {
  ResizeType["NONE"] = "none";
  ResizeType["BOTH"] = "both";
  ResizeType["HORIZONTAL"] = "horizontal";
  ResizeType["VERTICAL"] = "vertical";
})(ResizeType || (ResizeType = {}));
/**
 * ?????????????????????
 */


var FormValueType;

(function (FormValueType) {
  /**
   * ????????????????????????????????????????????????????????????????????????????????????: FormValueType.ARRAY|FormValueType.STRING ?????????????????????????????????
   */
  FormValueType[FormValueType["ARRAY"] = 1] = "ARRAY";
  /**
   * ?????????????????????
   */

  FormValueType[FormValueType["STRING"] = 2] = "STRING";
  /**
   * ????????????
   */

  FormValueType[FormValueType["INT"] = 4] = "INT";
  /**
   * ??????????????????
   */

  FormValueType[FormValueType["FLOAT"] = 8] = "FLOAT";
  /**
   * ????????????
   */

  FormValueType[FormValueType["DOUBLE"] = 16] = "DOUBLE";
  /**
   * ????????????
   */

  FormValueType[FormValueType["BOOLEAN"] = 32] = "BOOLEAN";
  /**
   * ????????????
   */

  FormValueType[FormValueType["DATE"] = 64] = "DATE";
  /**
   * ????????????
   */

  FormValueType[FormValueType["PASSWORD"] = 128] = "PASSWORD";
})(FormValueType || (FormValueType = {}));
/**
 * ?????????????????????
 */


var MoveDirType;

(function (MoveDirType) {
  MoveDirType["UP"] = "up";
  MoveDirType["DOWN"] = "down";
})(MoveDirType || (MoveDirType = {}));
/**
 * ??????????????????
 */


var DialogType;

(function (DialogType) {
  DialogType[DialogType["CONFIRM"] = 1] = "CONFIRM";
  DialogType[DialogType["CANCEL"] = 2] = "CANCEL";
  DialogType[DialogType["CLOSE"] = 3] = "CLOSE";
})(DialogType || (DialogType = {}));
/**
 * ?????????????????????
 */


var TreeEventType;

(function (TreeEventType) {
  /**
   * ??????????????????????????????????????????: ( id: string, data: TreeMapData )
   */
  TreeEventType["CHANGE"] = "change";
  /**
   * ???????????????????????????: ( data: TreeMapData )
   */

  TreeEventType["NODE_CLICK"] = "node-click";
  /**
   * ?????????????????????????????????: ( event: Event, data: TreeMapData )
   */

  TreeEventType["NODE_CONTEXTMENU"] = "node-contextmenu";
  /**
   * ???????????????????????????: ( data: TreeMapData, checked: boolean )
   */

  TreeEventType["CHECK_CHANGE"] = "check-change";
  /**
   * ?????????????????????????????????????????????: ( data: TreeMapData, checkedkeynode: ITreeCheckedKeyNode)
   */

  TreeEventType["CHECK"] = "check";
  /**
   * ???????????????????????????: ( data: TreeMapData )
   */

  TreeEventType["NODE_EXPAND"] = "node-expand";
  /**
   * ???????????????????????????: ( data: TreeMapData )
   */

  TreeEventType["NODE_COLLAPSE"] = "node-collapse";
})(TreeEventType || (TreeEventType = {}));
/**
 * ?????????????????????????????????
 */


var MessageButtonType;

(function (MessageButtonType) {
  /**
   * ?????????????????????
   */
  MessageButtonType[MessageButtonType["CLOSE"] = 1] = "CLOSE";
  /**
   * ????????????
   */

  MessageButtonType[MessageButtonType["OK"] = 2] = "OK";
  /**
   * ????????????
   */

  MessageButtonType[MessageButtonType["CANCEL"] = 4] = "CANCEL";
  /**
   * ?????????
   */

  MessageButtonType[MessageButtonType["YES"] = 8] = "YES";
  /**
   * ?????????
   */

  MessageButtonType[MessageButtonType["NO"] = 16] = "NO";
})(MessageButtonType || (MessageButtonType = {}));
/**
 * ????????????????????????
 */


var MessageStyle;

(function (MessageStyle) {
  /**
   * ?????????????????????
   */
  MessageStyle[MessageStyle["TIPS"] = 0] = "TIPS";
  /**
   * ????????????/??????
   */

  MessageStyle[MessageStyle["SUCCESS"] = 1] = "SUCCESS";
  /**
   * ????????????/??????
   */

  MessageStyle[MessageStyle["INFO"] = 2] = "INFO";
  /**
   * ????????????/??????
   */

  MessageStyle[MessageStyle["WARNING"] = 3] = "WARNING";
  /**
   * ????????????/??????
   */

  MessageStyle[MessageStyle["ERROR"] = 4] = "ERROR";
})(MessageStyle || (MessageStyle = {}));
/**
 * ????????????????????????
 */


var NotifyPosition;

(function (NotifyPosition) {
  /**
   * ???????????????
   */
  NotifyPosition[NotifyPosition["TOP_LEFT"] = 1] = "TOP_LEFT";
  /**
   * ????????????
   */

  NotifyPosition[NotifyPosition["TOP_MIDDLE"] = 2] = "TOP_MIDDLE";
  /**
   * ???????????????
   */

  NotifyPosition[NotifyPosition["TOP_RIGHT"] = 3] = "TOP_RIGHT";
  /**
   * ???????????????
   */

  NotifyPosition[NotifyPosition["BOTTOM_RIGHT"] = 4] = "BOTTOM_RIGHT";
  /**
   * ???????????????
   */

  NotifyPosition[NotifyPosition["BOTTOM_LEFT"] = 5] = "BOTTOM_LEFT";
})(NotifyPosition || (NotifyPosition = {}));
/**
 * ????????????????????????
 */


var TableBoxType;

(function (TableBoxType) {
  // ?????????
  TableBoxType["NONE"] = "0"; // ?????????

  TableBoxType["RADIO"] = "1"; // ?????????

  TableBoxType["CHECKBOX"] = "2";
})(TableBoxType || (TableBoxType = {}));
/*????????????*/


var AxTimeType;

(function (AxTimeType) {
  AxTimeType["SELECT"] = "SELECT";
  AxTimeType["PICKER"] = "PICKER";
})(AxTimeType || (AxTimeType = {}));
// EXTERNAL MODULE: external "core-js/modules/es.object.to-string.js"
var es_object_to_string_js_ = __webpack_require__(16);

// EXTERNAL MODULE: external "core-js/modules/es.array.find-index.js"
var es_array_find_index_js_ = __webpack_require__(28);

// CONCATENATED MODULE: ./packages/ax-com-core/utils/function.ts



/**
 * ??????
 * @param func
 * @param wait
 * @returns {() => void}
 */
// tslint:disable-next-line:ban-types
function throttle(func, wait) {
  var timeout = null;
  var callbackArgs = null; // eslint-disable-next-line @typescript-eslint/no-this-alias

  var context = this;

  var later = function later() {
    func.apply(context, callbackArgs);
    timeout = null;
  }; // tslint:disable-next-line:only-arrow-functions


  return function () {
    if (!timeout) {
      // eslint-disable-next-line prefer-rest-params
      callbackArgs = arguments;
      timeout = setTimeout(later, wait);
    }
  };
}
/**
 * ??????
 * @param func
 * @param wait
 * @param immediate
 * @returns {(this:any) => void}
 */
// tslint:disable-next-line:ban-types

var debounce = function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    // tslint:disable-next-line:one-variable-per-declaration
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    var context = this,
        // eslint-disable-next-line prefer-rest-params
    args = arguments;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};
/**
 * ??????
 * @param time ????????????
 */

var sleep = function sleep(time) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, time);
  });
};
/**
 * ???????????????????????????
 * @param dom
 */

function isEllipsis(dom) {
  // ????????????,????????????
  var checkDom = dom.cloneNode();
  checkDom.style.width = dom.offsetWidth + 'px';
  checkDom.style.height = dom.offsetHeight + 'px';
  checkDom.style.overflow = 'auto';
  checkDom.style.position = 'absolute';
  checkDom.style.zIndex = '-1';
  checkDom.style.opacity = ' 0';
  checkDom.style.whiteSpace = 'nowrap';
  checkDom.innerHTML = dom.innerHTML;
  var parent = dom.parentNode;

  if (parent === null) {
    return false;
  }

  parent.appendChild(checkDom);
  var flag = checkDom.scrollWidth > checkDom.offsetWidth;
  parent.removeChild(checkDom);
  return flag;
}
/**
 * ??????????????????,????????????????????????????????????
 * @param row ???????????????
 * @param column ??????????????????  ????????? this.totalColumn
 * @param attr ???????????????????????????,??????'id'
 * @return ?????? ??????(id) ??????
 */

function getValueByAttr(row, column) {
  var attr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';

  if (!row) {
    return '';
  } // ???????????????????????? Array ??????


  if (Array.isArray(row)) {
    // ???????????? id ????????? index ??????
    var index = column.findIndex(function (item) {
      return attr === item;
    });
    return row[index];
  } else {
    // ?????????????????????????????????,
    // ?????????????????? id ????????????
    return row[attr];
  }
}
// EXTERNAL MODULE: external "@ax/app-core-framework"
var app_core_framework_ = __webpack_require__(13);

// CONCATENATED MODULE: ./packages/ax-com-core/lang.ts

 // ???????????????????????????

var UILang = app_core_framework_["AxLocale"].create('AxUI');
/**
 * ?????? AX ????????????
 */

function getAxLang() {
  return {
    text: function text(key) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      return UILang.t.apply(UILang, [key].concat(params));
    }
  };
}
// CONCATENATED MODULE: ./packages/ax-com-core/export.ts





// CONCATENATED MODULE: ./packages/ax-com-core/index.ts
 // ??????????????????

 // ???????????????????????????

/* harmony default export */ var ax_com_core = __webpack_exports__["default"] = (export_namespaceObject);

/***/ })

/******/ });