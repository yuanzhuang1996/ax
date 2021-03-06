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
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-framework");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name.js");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat.js");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string.js");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.iterator.js");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.iterator.js");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.map.js");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/checkbox");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map.js");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.find-index.js");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/loading");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each.js");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.find.js");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.includes.js");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.includes.js");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor.js");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter.js");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.splice.js");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/autocomplete");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/cascader");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/tooltip");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/switch");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/checkbox-button");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/date-picker");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/dialog");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/dropdown-item");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/dropdown-menu");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/dropdown");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/radio-button");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/radio");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/input");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/progress");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/option");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/select");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/table-column");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/table");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/transfer");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/time-select");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/time-picker");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/tree");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/upload");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys.js");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.join.js");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.sort.js");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec.js");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice.js");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.to-string.js");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime.js");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.set.js");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/notification");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/message");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/message-box");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/slider");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.split.js");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.constructor.js");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.replace.js");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.match.js");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.trim.js");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.flat.js");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 64 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@ax/app-core-components\",\"version\":\"2.1.25\",\"author\":\"LNK-FE\",\"description\":\"AxUI?????????\",\"main\":\"lib/index.js\",\"license\":\"MIT\",\"typings\":\"types/index.d.ts\",\"scripts\":{\"serve\":\"vue-cli-service serve\",\"build\":\"vue-cli-service build\",\"build:report\":\"vue-cli-service build --report\",\"lint\":\"vue-cli-service lint\",\"lib\":\"ax-cli-vue lib\",\"lib:types\":\"ax-cli-vue types\",\"lib:locale\":\"ax-cli-vue locale\",\"lib:all\":\"npm run lib && npm run lib:locale\",\"lib:unpublish\":\"npm unpublish --force\",\"lib:publish\":\"npm publish\",\"generate:vetur\":\"node ./build/generate-vetur.js\",\"version:ls\":\"npm view @ax/app-core-components versions\",\"deploy\":\"npm run lib && npm run rollup && npm run publish\"},\"repository\":{\"type\":\"git\",\"url\":\"git@192.168.2.30:nncs/front-end/html/vue/app-core/app-core-components/app-core-components-v2.git\"},\"keywords\":[\"vue\",\"UI?????????\"],\"homepage\":\"https://183.3.129.44:31017/nncs/front-end/html/vue/app-core/app-core-components/app-core-components-v2\",\"bugs\":{\"url\":\"https://183.3.129.44:31017/nncs/front-end/html/vue/app-core/app-core-components/app-core-components-v2\"},\"style\":\"lib/index.css\",\"dependencies\":{\"@ax/app-core-framework\":\"^2.2.0\",\"@ax/app-core-language\":\"^1.1.4\",\"core-js\":\"^3.6.5\",\"dayjs\":\"^1.8.33\",\"element-ui\":\"^2.13.0\",\"vue\":\"^2.6.11\",\"vue-property-decorator\":\"^9.1.2\"},\"devDependencies\":{\"@ax/app-core-api\":\"^1.0.3\",\"@ax/app-core-style\":\"^1.0.0\",\"@ax/app-stage-base\":\"^2.1.0\",\"@ax/cli-service-vue\":\"^1.0.0\",\"@ax/eslint-config-default\":\"^1.0.0\",\"@ax/webpack-loaders\":\"^1.0.0\",\"@ax/webpack-plugins\":\"^1.0.0\",\"@babel/plugin-transform-runtime\":\"^7.9.0\",\"@types/jest\":\"^26.0.13\",\"@vue/cli-plugin-babel\":\"^4.3.1\",\"@vue/cli-plugin-eslint\":\"^4.3.1\",\"@vue/cli-plugin-typescript\":\"^4.3.1\",\"@vue/cli-plugin-unit-jest\":\"^4.3.1\",\"@vue/cli-service\":\"^4.3.1\",\"@vue/test-utils\":\"^1.1.0\",\"autoprefixer\":\"^9.7.6\",\"babel-plugin-component\":\"^1.1.1\",\"copy-webpack-plugin\":\"^5.1.1\",\"html-loader\":\"^1.1.0\",\"node-sass\":\"^4.12.0\",\"postcss-normalize\":\"^9.0.0\",\"prettier\":\"^2.0.5\",\"sass\":\"^1.26.3\",\"sass-loader\":\"^8.0.0\",\"typescript\":\"^4.0.2\",\"vue-class-component\":\"^7.2.6\",\"vue-router\":\"^3.1.3\",\"vue-template-compiler\":\"^2.6.11\",\"vuex\":\"^3.1.0\"},\"peerDependencies\":{\"@ax/app-core-framework\":\"2.x\",\"@ax/app-core-language\":\"1.x\",\"core-js\":\"3.x\",\"dayjs\":\"1.x\",\"element-ui\":\"2.x\",\"vue\":\"2.x\"},\"postcss\":{\"plugins\":{\"autoprefixer\":{},\"postcss-normalize\":{}}},\"browserslist\":[\"> 1%\",\"last 2 versions\"],\"files\":[\"lib\",\"packages\",\"types\",\"vetur\"],\"publishConfig\":{\"registry\":\"http://192.168.2.202:4873/\"},\"vetur\":{\"tags\":\"vetur/tags.json\",\"attributes\":\"vetur/attributes.json\"}}");

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AxComCore", function() { return /* reexport */ ax_com_core; });
__webpack_require__.d(__webpack_exports__, "AxMessage", function() { return /* reexport */ ax_message_AxMessage; });
__webpack_require__.d(__webpack_exports__, "AxAutocomplete", function() { return /* reexport */ ax_autocomplete; });
__webpack_require__.d(__webpack_exports__, "AxBadge", function() { return /* reexport */ ax_badge; });
__webpack_require__.d(__webpack_exports__, "AxBoard", function() { return /* reexport */ ax_board; });
__webpack_require__.d(__webpack_exports__, "AxButton", function() { return /* reexport */ ax_button; });
__webpack_require__.d(__webpack_exports__, "AxCascader", function() { return /* reexport */ ax_cascader; });
__webpack_require__.d(__webpack_exports__, "AxCheckbox", function() { return /* reexport */ ax_checkbox; });
__webpack_require__.d(__webpack_exports__, "AxDate", function() { return /* reexport */ ax_date; });
__webpack_require__.d(__webpack_exports__, "AxDialog", function() { return /* reexport */ ax_dialog; });
__webpack_require__.d(__webpack_exports__, "AxDivider", function() { return /* reexport */ ax_divider; });
__webpack_require__.d(__webpack_exports__, "AxDropdown", function() { return /* reexport */ ax_dropdown; });
__webpack_require__.d(__webpack_exports__, "AxForm", function() { return /* reexport */ ax_form; });
__webpack_require__.d(__webpack_exports__, "AxHeader", function() { return /* reexport */ ax_header; });
__webpack_require__.d(__webpack_exports__, "AxInput", function() { return /* reexport */ ax_input; });
__webpack_require__.d(__webpack_exports__, "AxLink", function() { return /* reexport */ ax_link; });
__webpack_require__.d(__webpack_exports__, "AxNavigator", function() { return /* reexport */ ax_navigator; });
__webpack_require__.d(__webpack_exports__, "AxPanels", function() { return /* reexport */ ax_panels; });
__webpack_require__.d(__webpack_exports__, "AxProgress", function() { return /* reexport */ ax_progress; });
__webpack_require__.d(__webpack_exports__, "AxRadio", function() { return /* reexport */ ax_radio; });
__webpack_require__.d(__webpack_exports__, "AxSearch", function() { return /* reexport */ ax_search; });
__webpack_require__.d(__webpack_exports__, "AxSelect", function() { return /* reexport */ ax_select; });
__webpack_require__.d(__webpack_exports__, "AxSlider", function() { return /* reexport */ ax_slider; });
__webpack_require__.d(__webpack_exports__, "AxSplit", function() { return /* reexport */ ax_split; });
__webpack_require__.d(__webpack_exports__, "AxTab", function() { return /* reexport */ ax_tab; });
__webpack_require__.d(__webpack_exports__, "AxTime", function() { return /* reexport */ ax_time; });
__webpack_require__.d(__webpack_exports__, "AxTable", function() { return /* reexport */ ax_table; });
__webpack_require__.d(__webpack_exports__, "AxTag", function() { return /* reexport */ ax_tag; });
__webpack_require__.d(__webpack_exports__, "AxTooltip", function() { return /* reexport */ ax_tooltip; });
__webpack_require__.d(__webpack_exports__, "AxTree", function() { return /* reexport */ ax_tree; });
__webpack_require__.d(__webpack_exports__, "AxUpload", function() { return /* reexport */ ax_upload; });

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

// NAMESPACE OBJECT: ./packages/components.ts
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "AxAutocomplete", function() { return ax_autocomplete; });
__webpack_require__.d(components_namespaceObject, "AxBadge", function() { return ax_badge; });
__webpack_require__.d(components_namespaceObject, "AxBoard", function() { return ax_board; });
__webpack_require__.d(components_namespaceObject, "AxButton", function() { return ax_button; });
__webpack_require__.d(components_namespaceObject, "AxCascader", function() { return ax_cascader; });
__webpack_require__.d(components_namespaceObject, "AxCheckbox", function() { return ax_checkbox; });
__webpack_require__.d(components_namespaceObject, "AxDate", function() { return ax_date; });
__webpack_require__.d(components_namespaceObject, "AxDialog", function() { return ax_dialog; });
__webpack_require__.d(components_namespaceObject, "AxDivider", function() { return ax_divider; });
__webpack_require__.d(components_namespaceObject, "AxDropdown", function() { return ax_dropdown; });
__webpack_require__.d(components_namespaceObject, "AxForm", function() { return ax_form; });
__webpack_require__.d(components_namespaceObject, "AxHeader", function() { return ax_header; });
__webpack_require__.d(components_namespaceObject, "AxInput", function() { return ax_input; });
__webpack_require__.d(components_namespaceObject, "AxLink", function() { return ax_link; });
__webpack_require__.d(components_namespaceObject, "AxNavigator", function() { return ax_navigator; });
__webpack_require__.d(components_namespaceObject, "AxPanels", function() { return ax_panels; });
__webpack_require__.d(components_namespaceObject, "AxProgress", function() { return ax_progress; });
__webpack_require__.d(components_namespaceObject, "AxRadio", function() { return ax_radio; });
__webpack_require__.d(components_namespaceObject, "AxSearch", function() { return ax_search; });
__webpack_require__.d(components_namespaceObject, "AxSelect", function() { return ax_select; });
__webpack_require__.d(components_namespaceObject, "AxSlider", function() { return ax_slider; });
__webpack_require__.d(components_namespaceObject, "AxSplit", function() { return ax_split; });
__webpack_require__.d(components_namespaceObject, "AxTab", function() { return ax_tab; });
__webpack_require__.d(components_namespaceObject, "AxTime", function() { return ax_time; });
__webpack_require__.d(components_namespaceObject, "AxTable", function() { return ax_table; });
__webpack_require__.d(components_namespaceObject, "AxTag", function() { return ax_tag; });
__webpack_require__.d(components_namespaceObject, "AxTooltip", function() { return ax_tooltip; });
__webpack_require__.d(components_namespaceObject, "AxTree", function() { return ax_tree; });
__webpack_require__.d(components_namespaceObject, "AxUpload", function() { return ax_upload; });

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each.js"
var web_dom_collections_for_each_js_ = __webpack_require__(13);

// EXTERNAL MODULE: external "core-js/modules/es.object.keys.js"
var es_object_keys_js_ = __webpack_require__(44);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/defineProperty.js
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
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createClass.js
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
// EXTERNAL MODULE: external "element-ui/lib/notification"
var notification_ = __webpack_require__(52);
var notification_default = /*#__PURE__*/__webpack_require__.n(notification_);

// EXTERNAL MODULE: external "element-ui/lib/message"
var message_ = __webpack_require__(53);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: external "element-ui/lib/loading"
var loading_ = __webpack_require__(12);
var loading_default = /*#__PURE__*/__webpack_require__.n(loading_);

// EXTERNAL MODULE: external "element-ui/lib/message-box"
var message_box_ = __webpack_require__(54);
var message_box_default = /*#__PURE__*/__webpack_require__.n(message_box_);

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string.js"
var es_object_to_string_js_ = __webpack_require__(5);

// EXTERNAL MODULE: external "core-js/modules/es.array.join.js"
var es_array_join_js_ = __webpack_require__(45);

// EXTERNAL MODULE: external "core-js/modules/es.array.map.js"
var es_array_map_js_ = __webpack_require__(10);

// EXTERNAL MODULE: external "@ax/app-core-framework"
var app_core_framework_ = __webpack_require__(2);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
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
var typeof_ = __webpack_require__(55);
var typeof_default = /*#__PURE__*/__webpack_require__.n(typeof_);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_default()(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
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
// EXTERNAL MODULE: external "core-js/modules/es.array.concat.js"
var es_array_concat_js_ = __webpack_require__(4);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(3);

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/ax-com-core/core.ts










/**
 * AX ????????????
 */

var core_AxUIComponent = /*#__PURE__*/function (_Vue) {
  _inherits(AxUIComponent, _Vue);

  var _super = _createSuper(AxUIComponent);

  function AxUIComponent() {
    var _this;

    _classCallCheck(this, AxUIComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "mform", undefined);

    _defineProperty(_assertThisInitialized(_this), "mvalue", '');

    _defineProperty(_assertThisInitialized(_this), "validate", undefined);

    _defineProperty(_assertThisInitialized(_this), "data", void 0);

    _defineProperty(_assertThisInitialized(_this), "placeholder", void 0);

    _defineProperty(_assertThisInitialized(_this), "clearable", void 0);

    _defineProperty(_assertThisInitialized(_this), "disabled", void 0);

    _defineProperty(_assertThisInitialized(_this), "name", void 0);

    return _this;
  }

  _createClass(AxUIComponent, [{
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
// EXTERNAL MODULE: external "core-js/modules/es.array.find-index.js"
var es_array_find_index_js_ = __webpack_require__(11);

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

/* harmony default export */ var ax_com_core = (export_namespaceObject);
// CONCATENATED MODULE: ./packages/ax-message/src/message.ts













var message_MessageButtonType = ax_com_core.MessageButtonType;
var message_MessageStyle = ax_com_core.MessageStyle;
var message_getAxLang = ax_com_core.getAxLang;
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
  var buttons = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : message_MessageButtonType.OK;
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : message_MessageStyle.TIPS;
  var options = arguments.length > 3 ? arguments[3] : undefined;
  // ????????????????????????
  return new Promise(function (resolve, reject) {
    // ??????????????????
    var lang = message_getAxLang();
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
      showClose: showClose || (buttons & ax_com_core.MessageButtonType.CLOSE) === ax_com_core.MessageButtonType.CLOSE,
      showConfirmButton: (buttons & ax_com_core.MessageButtonType.OK) === ax_com_core.MessageButtonType.OK || (buttons & ax_com_core.MessageButtonType.YES) === ax_com_core.MessageButtonType.YES,
      confirmButtonText: (buttons & ax_com_core.MessageButtonType.YES) === ax_com_core.MessageButtonType.YES ? lang.text('msg.button.yes') : lang.text('msg.button.ok'),
      showCancelButton: (buttons & ax_com_core.MessageButtonType.CANCEL) === ax_com_core.MessageButtonType.CANCEL || (buttons & ax_com_core.MessageButtonType.NO) === ax_com_core.MessageButtonType.NO,
      cancelButtonText: (buttons & ax_com_core.MessageButtonType.NO) === ax_com_core.MessageButtonType.NO ? lang.text('msg.button.no') : lang.text('msg.button.cancel'),
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

  var lang = ax_com_core.getAxLang(); // ????????????

  switch (style) {
    case ax_com_core.MessageStyle.INFO:
      return lang.text('msg.style.info');

    case ax_com_core.MessageStyle.SUCCESS:
      return lang.text('msg.style.success');

    case ax_com_core.MessageStyle.WARNING:
      return lang.text('msg.style.warning');

    case ax_com_core.MessageStyle.ERROR:
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
    case ax_com_core.MessageStyle.SUCCESS:
      return 'success';

    case ax_com_core.MessageStyle.INFO:
      return 'info';

    case ax_com_core.MessageStyle.WARNING:
      return 'warning';

    case ax_com_core.MessageStyle.ERROR:
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
  if (action === 'confirm') return (buttons & ax_com_core.MessageButtonType.OK) === ax_com_core.MessageButtonType.OK ? ax_com_core.MessageButtonType.OK : ax_com_core.MessageButtonType.YES;
  if (action === 'cancel') return (buttons & ax_com_core.MessageButtonType.CANCEL) === ax_com_core.MessageButtonType.CANCEL ? ax_com_core.MessageButtonType.CANCEL : ax_com_core.MessageButtonType.NO;
  return ax_com_core.MessageButtonType.CLOSE;
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
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ax_com_core.MessageStyle.TIPS;
  var positon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ax_com_core.NotifyPosition.TOP_MIDDLE;
  var options = arguments.length > 4 ? arguments[4] : undefined;
  // ????????????
  var title = getTitle(options ? options.title : undefined, style);
  var asHTML = options ? options.asHTML || options.asHTML === undefined : true;
  var showClose = options ? options.showClose || options.showClose === undefined : true;
  var offset = options ? options.offset || 0 : 0;
  var iconClass = options ? options.iconClass : undefined; // ????????????

  if (positon === ax_com_core.NotifyPosition.TOP_MIDDLE) {
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
      case ax_com_core.NotifyPosition.TOP_RIGHT:
        pos = 'top-right';
        break;

      case ax_com_core.NotifyPosition.TOP_LEFT:
        pos = 'top-left';
        break;

      case ax_com_core.NotifyPosition.BOTTOM_RIGHT:
        pos = 'bottom-right';
        break;

      case ax_com_core.NotifyPosition.BOTTOM_LEFT:
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
    _classCallCheck(this, Drags);

    _defineProperty(this, "dialogHeaderEl", void 0);

    _defineProperty(this, "dialogEl", void 0);

    _defineProperty(this, "isDragingTitle", void 0);

    _defineProperty(this, "isTouch", void 0);

    _defineProperty(this, "deltaX", void 0);

    _defineProperty(this, "deltaY", void 0);

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

  _createClass(Drags, [{
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
  _classCallCheck(this, AxMessage);
};

_defineProperty(ax_message_AxMessage, "alert", showAlert);

_defineProperty(ax_message_AxMessage, "loading", showLoading);

_defineProperty(ax_message_AxMessage, "notify", showNotify);


// CONCATENATED MODULE: ./packages/install.ts
function addInstall(name, nameCom) {
  // let com: any = {};
  nameCom.install = function (Vue) {
    Vue.component(name, nameCom);
  };

  return nameCom;
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-autocomplete/src/autocomplete.vue?vue&type=template&id=7fae3ea8&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ax_select",
      class: [
        { validate_passed: _vm.validatePassed === true },
        { validate_failed: _vm.validatePassed === false },
        { button_mode: _vm.type === "button" }
      ],
      on: {
        keydown: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
          ) {
            return null
          }
          return _vm.close.apply(null, arguments)
        }
      }
    },
    [
      _vm.type === "select"
        ? _c("el-autocomplete", {
            ref: "el-autocomplete",
            staticClass: "dropdown_input",
            attrs: {
              name: _vm.name,
              disabled: _vm.disabled,
              "fetch-suggestions": _vm.querySearch,
              placeholder: _vm.placeholder,
              clearable: _vm.clearable,
              label: "text",
              "value-key": "key",
              "popper-class": _vm.popperClass
            },
            on: { blur: _vm.handleBlur },
            scopedSlots: _vm._u(
              [
                {
                  key: "prepend",
                  fn: function() {
                    return [_vm._t("outer-left")]
                  },
                  proxy: true
                },
                {
                  key: "prefix",
                  fn: function() {
                    return [_vm._t("inner-left")]
                  },
                  proxy: true
                },
                {
                  key: "suffix",
                  fn: function() {
                    return [_vm._t("inner-right")]
                  },
                  proxy: true
                },
                {
                  key: "append",
                  fn: function() {
                    return [_vm._t("outer-right")]
                  },
                  proxy: true
                },
                {
                  key: "default",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._t(
                        "option",
                        function() {
                          return [
                            _c(
                              "span",
                              {
                                class: _vm.isLatestSelectedKey(item.key)
                                  ? "selected"
                                  : ""
                              },
                              [
                                _vm._v(
                                  "\n          " +
                                    _vm._s(item.text) +
                                    "\n        "
                                )
                              ]
                            )
                          ]
                        },
                        { item: item }
                      )
                    ]
                  }
                }
              ],
              null,
              true
            ),
            model: {
              value: _vm.modelValue,
              callback: function($$v) {
                _vm.modelValue = $$v
              },
              expression: "modelValue"
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-autocomplete/src/autocomplete.vue?vue&type=template&id=7fae3ea8&

// EXTERNAL MODULE: external "element-ui/lib/autocomplete"
var autocomplete_ = __webpack_require__(20);
var autocomplete_default = /*#__PURE__*/__webpack_require__.n(autocomplete_);

// EXTERNAL MODULE: external "core-js/modules/es.map.js"
var es_map_js_ = __webpack_require__(8);

// EXTERNAL MODULE: external "core-js/modules/es.string.iterator.js"
var es_string_iterator_js_ = __webpack_require__(6);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.iterator.js"
var web_dom_collections_iterator_js_ = __webpack_require__(7);

// EXTERNAL MODULE: external "core-js/modules/es.array.sort.js"
var es_array_sort_js_ = __webpack_require__(46);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-autocomplete/src/autocomplete.vue?vue&type=script&lang=ts&


















var autocompletevue_type_script_lang_ts_AxAutocomplete = /*#__PURE__*/function (_AxComCore$AxUICompon) {
  _inherits(AxAutocomplete, _AxComCore$AxUICompon);

  var _super = _createSuper(AxAutocomplete);

  function AxAutocomplete() {
    var _this;

    _classCallCheck(this, AxAutocomplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "menuClass", void 0);

    _defineProperty(_assertThisInitialized(_this), "popperClass", void 0);

    _defineProperty(_assertThisInitialized(_this), "options", void 0);

    _defineProperty(_assertThisInitialized(_this), "createable", void 0);

    _defineProperty(_assertThisInitialized(_this), "filterable", void 0);

    _defineProperty(_assertThisInitialized(_this), "multiple", void 0);

    _defineProperty(_assertThisInitialized(_this), "collapseTags", void 0);

    _defineProperty(_assertThisInitialized(_this), "remoteMethod", void 0);

    _defineProperty(_assertThisInitialized(_this), "btnText", void 0);

    _defineProperty(_assertThisInitialized(_this), "optmap", new Map());

    return _this;
  }

  _createClass(AxAutocomplete, [{
    key: "loadDropdownText",
    get:
    /**
     * ???????????????????????????
     */
    function get() {
      // ?????????
      var ks = this.modelValue; // ??????????????????

      var opt = this.optmap.get(ks); // ??????????????????

      if (opt) return opt.text; // ???????????????????????????

      return this.placeholder || '';
    }
    /**
     * ??????????????????
     */

  }, {
    key: "focus",
    value: function focus() {
      // ????????????
      switch (this.type) {
        case 'select':
          // ?????????????????????????????????
          this.$refs['el-select'].focus();
          break;

        case 'dropdown':
          {
            // ??????????????????
            var el = this.$refs['el-dropdown']; // ??????????????? HTML ??????

            if (el instanceof external_vue_property_decorator_["Vue"]) {
              // ??????????????????
              var e = el.$el; // ??????????????? HTML ??????

              if (e && e instanceof HTMLElement) {
                // ????????????
                e.focus();
              }
            }
          }
          break;

        case 'input':
          this.$refs['el-autocomplete'].focus();
          break;

        default:
          break;
      } // ??????????????????


      return this;
    }
    /**
     * ?????????????????????
     */

  }, {
    key: "close",
    value: function close() {
      // ????????????
      switch (this.type) {
        case 'select':
          this.$refs['el-select'].blur();
          break;

        case 'dropdown':
          this.$refs['el-dropdown'].hide();
          break;

        case 'input':
          this.$refs['el-autocomplete'].close();
          break;

        default:
          break;
      } // ??????????????????


      return this;
    }
    /**
     * ?????????????????????????????????
     */

  }, {
    key: "updateDropdown",
    value: function updateDropdown() {
      // ????????????????????????????????????
      if (this.type === 'input') {
        // ??????????????????
        this.$refs['el-autocomplete'].handleChange(this.data);
      } // ??????????????????


      return this;
    }
    /**
     * ???????????????????????????????????????
     */

  }, {
    key: "isLatestSelectedKey",
    value: function isLatestSelectedKey(key) {
      // ?????????
      var ks = this.modelValue; // ????????????????????????

      if (this.multiple) {
        // ????????????????????????
        return ks && ks.length > 0 ? ks.indexOf(key) !== 0 : false;
      } else {
        // ??????????????????
        return ks === key;
      }
    }
    /**
     * ???????????????????????????????????????????????? undefined ???
     * @param {any} key ?????????????????????????????????????????????????????????????????????????????????
     * @returns {IOptionData | IOptionData[] | undefined} ????????????????????????????????????
     */

  }, {
    key: "getSelectedData",
    value: function getSelectedData(key) {
      // ??????????????????
      if (key === undefined || key === null) return undefined; // ????????????????????????

      if (key && this.optmap.size > 0) {
        // ????????????
        if (key instanceof Array) {
          // ???????????????????????????????????????
          if (key.length > 0) {
            // ??????????????????
            var vs = []; // ????????????

            for (var index = 0; index < key.length; index++) {
              // ??????????????????
              var op = this.optmap.get(key[index]); // ???????????????

              if (op) vs.push(op);
            } // ????????????


            return vs;
          }
        } else {
          // ???????????????
          return this.optmap.get(key);
        }
      } else {
        // ????????????
        return undefined;
      }
    }
    /**
     * ????????????????????????
     */

  }, {
    key: "setOptions",
    value: function setOptions() {
      // ????????????
      this.optmap.clear(); // ??????????????????

      var v = this.options; // ??????????????????

      if (!v || v.length === 0) return v; // ?????????????????????

      for (var index = 0; index < v.length; index++) {
        // ??????????????????
        var item = v[index]; // ???????????????

        this.optmap.set(item.key, item);
      }
    }
    /**
     * ?????????????????????????????????
     */

  }, {
    key: "querySearch",
    value: function querySearch(queryString, callback) {
      // ??????????????????????????????
      if (!queryString || queryString.length === 0 || !this.options) {
        // ????????????
        callback(this.options || []); // ????????????

        return;
      } // ????????????????????????


      var sortAry = []; // ???????????????

      var qstr = queryString.toLowerCase(); // ?????????????????????

      for (var index = 0; index < this.options.length; index++) {
        // ??????????????????
        var item = this.options[index]; // ??????????????????

        if (!item) continue; // ??????????????????

        var pos = item.text ? item.text.toLowerCase().indexOf(qstr) : 10000; // ????????????

        if (pos < 0) pos = 10000; // ????????????????????????

        sortAry.push({
          i: pos,
          v: item
        });
      } // ????????????????????????


      sortAry.sort(function (a, b) {
        if (a.i === b.i) return 0;
        return a.i < b.i ? -1 : 1;
      }); // ???????????????

      var items = []; // ??????????????????

      for (var _index = 0; _index < sortAry.length; _index++) {
        // ???????????????
        items.push(sortAry[_index].v);
      } // ?????? callback ???????????????????????????


      callback(items);
    }
    /**
     * ?????????????????????
     */

  }, {
    key: "handleCommand",
    value: function handleCommand(val) {
      var _this2 = this;

      // ??????????????????????????????????????? v-model???
      this.$emit('change', val); // ??????????????????

      if (!val || val.length === 0) {
        // ??????????????????
        this.$nextTick().then(function () {
          _this2.focus();
        });
      }
    }
    /**
     * ??????????????????
     */

  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      this.$emit('blur', event);
    }
    /**
     * ?????????????????????
     */

  }, {
    key: "created",
    value: function created() {
      // ???????????????????????????
      this.setOptions();
    }
  }]);

  return AxAutocomplete;
}(ax_com_core.AxUIComponent);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ax_com_core.DropdownType.NORMAL,
  type: String
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "menuClass", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'ax_autocomplete_popper'
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "popperClass", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "disabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "clearable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "options", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "createable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "filterable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "multiple", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "collapseTags", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "remoteMethod", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '????????????'
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "btnText", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('options')], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "setOptions", null);

autocompletevue_type_script_lang_ts_AxAutocomplete = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // ?????? v-model ????????????????????????
    prop: 'data',
    event: 'change'
  },
  components: _defineProperty({}, autocomplete_default.a.name, autocomplete_default.a)
})], autocompletevue_type_script_lang_ts_AxAutocomplete);
/* harmony default export */ var autocompletevue_type_script_lang_ts_ = (autocompletevue_type_script_lang_ts_AxAutocomplete);
// CONCATENATED MODULE: ./packages/ax-autocomplete/src/autocomplete.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_autocompletevue_type_script_lang_ts_ = (autocompletevue_type_script_lang_ts_); 
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/ax-autocomplete/src/autocomplete.vue





/* normalize component */

var component = normalizeComponent(
  src_autocompletevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ax-autocomplete/src/autocomplete.vue"
/* harmony default export */ var autocomplete = (component.exports);
// CONCATENATED MODULE: ./packages/ax-autocomplete/index.ts



addInstall(autocomplete.name, autocomplete);
/* harmony default export */ var ax_autocomplete = (autocomplete);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-badge/src/badge.vue?vue&type=template&id=5598c2fa&
var badgevue_type_template_id_5598c2fa_render = function() {
  var _obj
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ax_badge" },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c("sup", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.hidden && (_vm.content || _vm.isDot),
            expression: "!hidden && (content || isDot)"
          }
        ],
        staticClass: "ax_badge_content",
        class:
          ((_obj = {
            is_fixed: _vm.$slots.default,
            is_dot: _vm.isDot
          }),
          (_obj["type_" + _vm.type] = !!_vm.type),
          _obj),
        domProps: { textContent: _vm._s(_vm.content) }
      })
    ],
    2
  )
}
var badgevue_type_template_id_5598c2fa_staticRenderFns = []
badgevue_type_template_id_5598c2fa_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-badge/src/badge.vue?vue&type=template&id=5598c2fa&

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-badge/src/badge.vue?vue&type=script&lang=ts&











var badgevue_type_script_lang_ts_AxBadge = /*#__PURE__*/function (_Vue) {
  _inherits(AxBadge, _Vue);

  var _super = _createSuper(AxBadge);

  function AxBadge() {
    var _this;

    _classCallCheck(this, AxBadge);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "value", void 0);

    _defineProperty(_assertThisInitialized(_this), "max", void 0);

    _defineProperty(_assertThisInitialized(_this), "isDot", void 0);

    _defineProperty(_assertThisInitialized(_this), "hidden", void 0);

    return _this;
  }

  _createClass(AxBadge, [{
    key: "content",
    get:
    /**
     * ????????????
     * @returns {string}
     */
    function get() {
      if (this.isDot) return '';
      var value = this.value;
      var max = this.max;

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? "".concat(max, "+") : "".concat(value);
      }

      return "".concat(value);
    }
  }]);

  return AxBadge;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ax_com_core.BadgeType.DANGER
})], badgevue_type_script_lang_ts_AxBadge.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 99
})], badgevue_type_script_lang_ts_AxBadge.prototype, "value", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 99
})], badgevue_type_script_lang_ts_AxBadge.prototype, "max", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], badgevue_type_script_lang_ts_AxBadge.prototype, "isDot", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], badgevue_type_script_lang_ts_AxBadge.prototype, "hidden", void 0);

badgevue_type_script_lang_ts_AxBadge = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {}
})], badgevue_type_script_lang_ts_AxBadge);
/* harmony default export */ var badgevue_type_script_lang_ts_ = (badgevue_type_script_lang_ts_AxBadge);
// CONCATENATED MODULE: ./packages/ax-badge/src/badge.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_badgevue_type_script_lang_ts_ = (badgevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-badge/src/badge.vue





/* normalize component */

var badge_component = normalizeComponent(
  src_badgevue_type_script_lang_ts_,
  badgevue_type_template_id_5598c2fa_render,
  badgevue_type_template_id_5598c2fa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var badge_api; }
badge_component.options.__file = "packages/ax-badge/src/badge.vue"
/* harmony default export */ var badge = (badge_component.exports);
// CONCATENATED MODULE: ./packages/ax-badge/index.ts



addInstall(badge.name, badge);
/* harmony default export */ var ax_badge = (badge);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-board/src/index.vue?vue&type=template&id=6621faa8&
var srcvue_type_template_id_6621faa8_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "ax_board", class: [_vm.presetClass] }, [
    _vm.$slots.bar !== undefined
      ? _c(
          "div",
          {
            staticClass: "ax_board_bar",
            class: {
              with_preset: !!_vm.barPreset
            }
          },
          [_vm._t("bar")],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "ax_board_content",
        class: {
          with_bar: _vm.$slots.bar !== undefined,
          with_split: !!_vm.$slots.left && !!_vm.$slots.right,
          with_preset: !!_vm.contentPreset
        }
      },
      [
        _vm.layoutMode
          ? _c(
              "ax-split",
              {
                attrs: {
                  type: _vm.type,
                  "min-size": _vm.minSize,
                  size: _vm.splitSize,
                  "max-size": _vm.maxSize,
                  resizeable: _vm.splitResizeable
                }
              },
              [
                _c("template", { slot: "left" }, [_vm._t("left")], 2),
                _vm._v(" "),
                _c("template", { slot: "right" }, [_vm._t("right")], 2)
              ],
              2
            )
          : _vm._t("default")
      ],
      2
    )
  ])
}
var srcvue_type_template_id_6621faa8_staticRenderFns = []
srcvue_type_template_id_6621faa8_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-board/src/index.vue?vue&type=template&id=6621faa8&

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-split/src/split.vue?vue&type=template&id=ae215bb0&
var splitvue_type_template_id_ae215bb0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "refSplit",
      staticClass: "ax_split",
      class: [
        { split_horizontal: _vm.type === "horizontal" },
        { split_vertical: _vm.type === "vertical" },
        { split_resizeable: _vm.resizeable }
      ]
    },
    [
      _c(
        "div",
        { staticClass: "split_first", style: _vm.firstSize },
        [_vm._t("left")],
        2
      ),
      _vm._v(" "),
      _c("div", {
        class: [
          { split_hor: _vm.type === "horizontal" },
          { split_ver: _vm.type === "vertical" }
        ],
        on: {
          mousedown: function($event) {
            return _vm.startResize($event)
          }
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "split_second", style: _vm.secondSize },
        [_vm._t("right")],
        2
      )
    ]
  )
}
var splitvue_type_template_id_ae215bb0_staticRenderFns = []
splitvue_type_template_id_ae215bb0_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-split/src/split.vue?vue&type=template&id=ae215bb0&

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-split/src/split.vue?vue&type=script&lang=ts&











var splitvue_type_script_lang_ts_AxSplit = /*#__PURE__*/function (_Vue) {
  _inherits(AxSplit, _Vue);

  var _super = _createSuper(AxSplit);

  function AxSplit() {
    var _this;

    _classCallCheck(this, AxSplit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "size", void 0);

    _defineProperty(_assertThisInitialized(_this), "minSize", void 0);

    _defineProperty(_assertThisInitialized(_this), "maxSize", void 0);

    _defineProperty(_assertThisInitialized(_this), "resizeable", void 0);

    _defineProperty(_assertThisInitialized(_this), "width", 0);

    _defineProperty(_assertThisInitialized(_this), "height", 0);

    _defineProperty(_assertThisInitialized(_this), "leftSize", 0);

    _defineProperty(_assertThisInitialized(_this), "rightSize", 0);

    return _this;
  }

  _createClass(AxSplit, [{
    key: "firstSize",
    get: //#endregion
    //#region Computed

    /**
     * ???????????????
     */
    function get() {
      return this.isHorizontal() ? "max-width: ".concat(this.maxSize, "; min-width: ").concat(this.minSize, "; width: ").concat(this.leftSize, "%") : "max-height: ".concat(this.maxSize, "; min-height: ").concat(this.minSize, "; height: ").concat(this.leftSize, "%");
    }
    /**
     * ???????????????
     */

  }, {
    key: "secondSize",
    get: function get() {
      return this.isHorizontal() ? "max-width: ".concat(this.maxSize, "; min-width: ").concat(this.minSize, "; width: ").concat(this.rightSize, "%") : "max-height: ".concat(this.maxSize, "; min-height: ").concat(this.minSize, "; height: ").concat(this.rightSize, "%");
    } //#endregion
    //#region Methods

    /**
     * ??????resize
     * @param event
     */

  }, {
    key: "startResize",
    value: function startResize(event) {
      if (event.button !== 0) return;

      if (!this.resizeable) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
      app_core_framework_["AxDomUtils"].addDomEventListener(document, 'mousemove', this.drag);
      app_core_framework_["AxDomUtils"].addDomEventListener(document, 'mouseup', this.drop);
    }
    /**
     * ?????????????????????
     * @param evt
     */

  }, {
    key: "drop",
    value: function drop(evt) {
      var event = evt;
      if (event.button !== 0) return;
      app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'mousemove', this.drag);
      app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'mouseup', this.drop);
    }
    /**
     * ???????????????
     * @param evt
     */

  }, {
    key: "drag",
    value: function drag(evt) {
      var event = evt;
      if (event.button !== 0) return; // ?????????????????????

      var h = this.isHorizontal();
      var splitter = (h ? this.$el.children[1].clientWidth : this.$el.children[1].clientHeight) / 2;
      var parentRect = this.$el.getBoundingClientRect();
      var splitSize = h ? (event.x - parentRect.left - splitter) / this.$el.clientWidth * 100 : (event.y - parentRect.top - splitter) / this.$el.clientHeight * 100;
      this.leftSize = splitSize;
      this.rightSize = 100 - splitSize - 1;
    }
    /**
     * ?????????????????????
     * @returns {boolean}
     */

  }, {
    key: "isHorizontal",
    value: function isHorizontal() {
      return this.type === 'horizontal';
    }
    /**
     * ???????????????
     * @param value
     * @returns {number}
     */

  }, {
    key: "getPercent",
    value: function getPercent(value) {
      var member = 0; // ?????????rem

      if (/\d+rem/.test(value)) {
        member = app_core_framework_["AxStyleUtils"].remToPx(value) / (this.isHorizontal() ? this.width : this.height) * 100;
      } // ?????????px
      else if (/\d+px/.test(value)) {
        member = parseInt(value) / (this.isHorizontal() ? this.width : this.height) * 100;
      } // ???????????????????????????
      else {
        member = parseInt(value);
      }

      return member;
    } //#endregion
    //#region ???????????????

    /**
     * ????????????
     * @param val
     */

  }, {
    key: "setSize",
    value: function setSize(val) {
      // ??????????????????
      this.width = this.$el.clientWidth;
      this.height = this.$el.clientHeight; // ???????????????

      var left = this.getPercent(val);
      this.leftSize = left;
      this.rightSize = 100 - left - 1;
    } //#endregion
    //#region ????????????
    // ????????????????????????

  }, {
    key: "beforeCreate",
    value: function beforeCreate() {
      // ??????????????????????????????
      if (this.$slots.default) {
        // ??????????????????
        if (this.$slots.default.length > 1) {
          // ???????????????????????????
          this.$slots.left = [this.$slots.default[0]]; // ?????????????????????

          this.$slots.right = [this.$slots.default[1]];
        }
      }
    }
    /**
     * ???????????????
     */

  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      // ??????????????????????????????
      if (this.$slots.default) {
        // ??????????????????
        if (this.$slots.default.length > 1) {
          // ???????????????????????????
          this.$slots.left = [this.$slots.default[0]]; // ?????????????????????

          this.$slots.right = [this.$slots.default[1]];
        }
      }
    } //#endregion
    //#region ????????????

  }, {
    key: "mounted",
    value: function mounted() {
      this.setSize(this.size);
    }
  }]);

  return AxSplit;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'horizontal'
})], splitvue_type_script_lang_ts_AxSplit.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '20%'
})], splitvue_type_script_lang_ts_AxSplit.prototype, "size", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '10%'
})], splitvue_type_script_lang_ts_AxSplit.prototype, "minSize", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '90%'
})], splitvue_type_script_lang_ts_AxSplit.prototype, "maxSize", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], splitvue_type_script_lang_ts_AxSplit.prototype, "resizeable", void 0);

splitvue_type_script_lang_ts_AxSplit = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {}
})], splitvue_type_script_lang_ts_AxSplit);
/* harmony default export */ var splitvue_type_script_lang_ts_ = (splitvue_type_script_lang_ts_AxSplit);
// CONCATENATED MODULE: ./packages/ax-split/src/split.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_splitvue_type_script_lang_ts_ = (splitvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-split/src/split.vue





/* normalize component */

var split_component = normalizeComponent(
  src_splitvue_type_script_lang_ts_,
  splitvue_type_template_id_ae215bb0_render,
  splitvue_type_template_id_ae215bb0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var split_api; }
split_component.options.__file = "packages/ax-split/src/split.vue"
/* harmony default export */ var split = (split_component.exports);
// CONCATENATED MODULE: ./packages/ax-split/index.ts



addInstall(split.name, split);
/* harmony default export */ var ax_split = (split);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-board/src/index.vue?vue&type=script&lang=ts&











var srcvue_type_script_lang_ts_AxBoard = /*#__PURE__*/function (_Vue) {
  _inherits(AxBoard, _Vue);

  var _super = _createSuper(AxBoard);

  function AxBoard() {
    var _this;

    _classCallCheck(this, AxBoard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "layoutMode", void 0);

    _defineProperty(_assertThisInitialized(_this), "barPreset", void 0);

    _defineProperty(_assertThisInitialized(_this), "contentPreset", void 0);

    _defineProperty(_assertThisInitialized(_this), "presetClass", void 0);

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "splitSize", void 0);

    _defineProperty(_assertThisInitialized(_this), "splitResizeable", void 0);

    _defineProperty(_assertThisInitialized(_this), "minSize", void 0);

    _defineProperty(_assertThisInitialized(_this), "maxSize", void 0);

    return _this;
  }

  _createClass(AxBoard, [{
    key: "mounted",
    value:
    /**
     * DOM ????????????????????????????????????
     */
    function mounted() {}
  }]);

  return AxBoard;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], srcvue_type_script_lang_ts_AxBoard.prototype, "layoutMode", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], srcvue_type_script_lang_ts_AxBoard.prototype, "barPreset", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], srcvue_type_script_lang_ts_AxBoard.prototype, "contentPreset", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '',
  type: String
})], srcvue_type_script_lang_ts_AxBoard.prototype, "presetClass", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'horizontal',
  type: String
})], srcvue_type_script_lang_ts_AxBoard.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '20%'
})], srcvue_type_script_lang_ts_AxBoard.prototype, "splitSize", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], srcvue_type_script_lang_ts_AxBoard.prototype, "splitResizeable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '10%',
  type: String
})], srcvue_type_script_lang_ts_AxBoard.prototype, "minSize", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '90%',
  type: String
})], srcvue_type_script_lang_ts_AxBoard.prototype, "maxSize", void 0);

srcvue_type_script_lang_ts_AxBoard = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {
    AxSplit: ax_split
  }
})], srcvue_type_script_lang_ts_AxBoard);
/* harmony default export */ var srcvue_type_script_lang_ts_ = (srcvue_type_script_lang_ts_AxBoard);
// CONCATENATED MODULE: ./packages/ax-board/src/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var ax_board_srcvue_type_script_lang_ts_ = (srcvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-board/src/index.vue





/* normalize component */

var src_component = normalizeComponent(
  ax_board_srcvue_type_script_lang_ts_,
  srcvue_type_template_id_6621faa8_render,
  srcvue_type_template_id_6621faa8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var src_api; }
src_component.options.__file = "packages/ax-board/src/index.vue"
/* harmony default export */ var src = (src_component.exports);
// CONCATENATED MODULE: ./packages/ax-board/index.ts



addInstall(src.name, src);
/* harmony default export */ var ax_board = (src);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-button/src/button.vue?vue&type=template&id=699452e8&
var buttonvue_type_template_id_699452e8_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "ax_button",
      class: [
        "ax_button_" + _vm.type,
        "size_" + _vm.size,
        {
          is_disabled: _vm.disabled,
          is_loading: _vm.loading,
          is_round: _vm.round,
          is_circle: _vm.circle
        }
      ],
      attrs: {
        disabled: _vm.disabled || _vm.loading,
        autofocus: _vm.autofocus,
        type: _vm.nativeType
      },
      on: { click: _vm.handleClick }
    },
    [
      _vm.loading ? _c("i", { staticClass: "el-icon-loading" }) : _vm._e(),
      _vm._v(" "),
      _vm.icon && !_vm.loading
        ? _c("i", { staticClass: "ax_button_icon", class: _vm.icon })
        : _vm._e(),
      _vm._v(" "),
      _vm.$slots.default ? _c("span", [_vm._t("default")], 2) : _vm._e()
    ]
  )
}
var buttonvue_type_template_id_699452e8_staticRenderFns = []
buttonvue_type_template_id_699452e8_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-button/src/button.vue?vue&type=template&id=699452e8&

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-button/src/button.vue?vue&type=script&lang=ts&











var buttonvue_type_script_lang_ts_AxButton = /*#__PURE__*/function (_Vue) {
  _inherits(AxButton, _Vue);

  var _super = _createSuper(AxButton);

  function AxButton() {
    var _this;

    _classCallCheck(this, AxButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "nativeType", void 0);

    _defineProperty(_assertThisInitialized(_this), "name", void 0);

    _defineProperty(_assertThisInitialized(_this), "icon", void 0);

    _defineProperty(_assertThisInitialized(_this), "size", void 0);

    _defineProperty(_assertThisInitialized(_this), "disabled", void 0);

    _defineProperty(_assertThisInitialized(_this), "loading", void 0);

    _defineProperty(_assertThisInitialized(_this), "autofocus", void 0);

    _defineProperty(_assertThisInitialized(_this), "round", void 0);

    _defineProperty(_assertThisInitialized(_this), "circle", void 0);

    return _this;
  }

  _createClass(AxButton, [{
    key: "focus",
    value:
    /**
     * ??????????????????
     */
    function focus() {
      // ??????????????????
      var el = this.$refs['el-button']; // ??????????????? HTML ??????

      if (el instanceof external_vue_property_decorator_["Vue"]) {
        // ??????????????????
        var e = el.$el; // ??????????????? HTML ??????

        if (e && e instanceof HTMLElement) {
          // ????????????
          e.focus();
        }
      } // ??????????????????


      return this;
    }
    /**
     * ??????????????????
     */

  }, {
    key: "handleClick",
    value: function handleClick(event) {
      return event;
    }
  }]);

  return AxButton;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ax_com_core.ButtonType.PRIMARY
})], buttonvue_type_script_lang_ts_AxButton.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'button'
})], buttonvue_type_script_lang_ts_AxButton.prototype, "nativeType", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], buttonvue_type_script_lang_ts_AxButton.prototype, "name", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], buttonvue_type_script_lang_ts_AxButton.prototype, "icon", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ax_com_core.ButtonSize.NORMAL,
  type: String
})], buttonvue_type_script_lang_ts_AxButton.prototype, "size", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], buttonvue_type_script_lang_ts_AxButton.prototype, "disabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], buttonvue_type_script_lang_ts_AxButton.prototype, "loading", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], buttonvue_type_script_lang_ts_AxButton.prototype, "autofocus", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], buttonvue_type_script_lang_ts_AxButton.prototype, "round", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], buttonvue_type_script_lang_ts_AxButton.prototype, "circle", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('click')], buttonvue_type_script_lang_ts_AxButton.prototype, "handleClick", null);

buttonvue_type_script_lang_ts_AxButton = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {}
})], buttonvue_type_script_lang_ts_AxButton);
/* harmony default export */ var buttonvue_type_script_lang_ts_ = (buttonvue_type_script_lang_ts_AxButton);
// CONCATENATED MODULE: ./packages/ax-button/src/button.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_buttonvue_type_script_lang_ts_ = (buttonvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-button/src/button.vue





/* normalize component */

var button_component = normalizeComponent(
  src_buttonvue_type_script_lang_ts_,
  buttonvue_type_template_id_699452e8_render,
  buttonvue_type_template_id_699452e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var button_api; }
button_component.options.__file = "packages/ax-button/src/button.vue"
/* harmony default export */ var src_button = (button_component.exports);
// CONCATENATED MODULE: ./packages/ax-button/index.ts



addInstall(src_button.name, src_button);
/* harmony default export */ var ax_button = (src_button);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-cascader/src/cascader.vue?vue&type=template&id=78492968&
var cascadervue_type_template_id_78492968_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ax_cascader",
      class: [
        { validate_passed: _vm.validatePassed === true },
        { validate_failed: _vm.validatePassed === false }
      ],
      style: _vm.props.multiple ? "height:auto;" : ""
    },
    [
      _vm.showTooltip
        ? _c(
            "ax-tooltip",
            {
              attrs: {
                placement: "bottom",
                tips: _vm.tooltipText,
                disabled: _vm.disabledGet
              }
            },
            [
              _c(
                "el-cascader",
                _vm._g(
                  _vm._b(
                    {
                      ref: "el_cascader",
                      attrs: {
                        placement: "bottom-start",
                        "show-all-levels": _vm.showAllLevels,
                        "collapse-tags": _vm.collapseTags,
                        placeholder: _vm.placeholderStr,
                        disabled: _vm.disabled,
                        clearable: _vm.clearable,
                        "popper-class": _vm.popperClass,
                        name: _vm.name,
                        options: _vm.options,
                        props: _vm.props
                      },
                      on: {
                        change: _vm.nodeChange,
                        "expand-change": _vm.expandChange
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var node = ref.node
                              var data = ref.data
                              return [
                                _vm._t("default", null, {
                                  node: node,
                                  data: data
                                })
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      ),
                      model: {
                        value: _vm.modelValue,
                        callback: function($$v) {
                          _vm.modelValue = $$v
                        },
                        expression: "modelValue"
                      }
                    },
                    "el-cascader",
                    _vm.$attrs,
                    false
                  ),
                  _vm.$listeners
                )
              )
            ],
            1
          )
        : _c(
            "el-cascader",
            _vm._g(
              _vm._b(
                {
                  ref: "el_cascader",
                  attrs: {
                    placement: "bottom-start",
                    "show-all-levels": _vm.showAllLevels,
                    "collapse-tags": _vm.collapseTags,
                    "popper-class": _vm.popperClass,
                    placeholder: _vm.placeholderStr,
                    disabled: _vm.disabled,
                    clearable: _vm.clearable,
                    name: _vm.name,
                    options: _vm.options,
                    props: _vm.props
                  },
                  on: {
                    change: _vm.nodeChange,
                    "expand-change": _vm.expandChange
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var node = ref.node
                          var data = ref.data
                          return [
                            _vm._t("default", null, { node: node, data: data })
                          ]
                        }
                      }
                    ],
                    null,
                    true
                  ),
                  model: {
                    value: _vm.modelValue,
                    callback: function($$v) {
                      _vm.modelValue = $$v
                    },
                    expression: "modelValue"
                  }
                },
                "el-cascader",
                _vm.$attrs,
                false
              ),
              _vm.$listeners
            )
          )
    ],
    1
  )
}
var cascadervue_type_template_id_78492968_staticRenderFns = []
cascadervue_type_template_id_78492968_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-cascader/src/cascader.vue?vue&type=template&id=78492968&

// EXTERNAL MODULE: external "element-ui/lib/cascader"
var cascader_ = __webpack_require__(21);
var cascader_default = /*#__PURE__*/__webpack_require__.n(cascader_);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.exec.js"
var es_regexp_exec_js_ = __webpack_require__(47);

// EXTERNAL MODULE: external "core-js/modules/es.string.split.js"
var es_string_split_js_ = __webpack_require__(57);

// EXTERNAL MODULE: external "core-js/modules/es.array.slice.js"
var es_array_slice_js_ = __webpack_require__(48);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-tooltip/src/tooltip.vue?vue&type=template&id=525bda7a&
var tooltipvue_type_template_id_525bda7a_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-tooltip",
    {
      attrs: {
        "popper-class": _vm.popperClass,
        effect: _vm.effect,
        content: _vm.tips,
        placement: _vm.placement,
        disabled: _vm.disabled,
        offset: _vm.offset,
        "open-delay": _vm.openDelay,
        manual: _vm.manual,
        "visible-arrow": ""
      },
      scopedSlots: _vm._u(
        [
          {
            key: "content",
            fn: function() {
              return [_vm._t("tips")]
            },
            proxy: true
          }
        ],
        null,
        true
      ),
      model: {
        value: _vm.showModel,
        callback: function($$v) {
          _vm.showModel = $$v
        },
        expression: "showModel"
      }
    },
    [_vm._v(" "), _vm._t("default")],
    2
  )
}
var tooltipvue_type_template_id_525bda7a_staticRenderFns = []
tooltipvue_type_template_id_525bda7a_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-tooltip/src/tooltip.vue?vue&type=template&id=525bda7a&

// EXTERNAL MODULE: external "element-ui/lib/tooltip"
var tooltip_ = __webpack_require__(22);
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-tooltip/src/tooltip.vue?vue&type=script&lang=ts&












var tooltipvue_type_script_lang_ts_AxTooltip = /*#__PURE__*/function (_Vue) {
  _inherits(AxTooltip, _Vue);

  var _super = _createSuper(AxTooltip);

  function AxTooltip() {
    var _this;

    _classCallCheck(this, AxTooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "effect", void 0);

    _defineProperty(_assertThisInitialized(_this), "popperClass", void 0);

    _defineProperty(_assertThisInitialized(_this), "show", void 0);

    _defineProperty(_assertThisInitialized(_this), "showModel", false);

    _defineProperty(_assertThisInitialized(_this), "tips", void 0);

    _defineProperty(_assertThisInitialized(_this), "placement", void 0);

    _defineProperty(_assertThisInitialized(_this), "disabled", void 0);

    _defineProperty(_assertThisInitialized(_this), "offset", void 0);

    _defineProperty(_assertThisInitialized(_this), "openDelay", void 0);

    _defineProperty(_assertThisInitialized(_this), "manual", void 0);

    return _this;
  }

  _createClass(AxTooltip, [{
    key: "showWatch",
    value: function showWatch(val) {
      this.showModel = val;
    }
    /**
     * ??????
     */

  }]);

  return AxTooltip;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('show')], tooltipvue_type_script_lang_ts_AxTooltip.prototype, "showWatch", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'dark'
})], tooltipvue_type_script_lang_ts_AxTooltip.prototype, "effect", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'ax_tooltip_popper'
})], tooltipvue_type_script_lang_ts_AxTooltip.prototype, "popperClass", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], tooltipvue_type_script_lang_ts_AxTooltip.prototype, "show", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], tooltipvue_type_script_lang_ts_AxTooltip.prototype, "tips", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'right'
})], tooltipvue_type_script_lang_ts_AxTooltip.prototype, "placement", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], tooltipvue_type_script_lang_ts_AxTooltip.prototype, "disabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], tooltipvue_type_script_lang_ts_AxTooltip.prototype, "offset", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], tooltipvue_type_script_lang_ts_AxTooltip.prototype, "openDelay", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], tooltipvue_type_script_lang_ts_AxTooltip.prototype, "manual", void 0);

tooltipvue_type_script_lang_ts_AxTooltip = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // ?????? v-model ????????????????????????
    prop: 'data',
    event: 'change'
  },
  components: _defineProperty({}, tooltip_default.a.name, tooltip_default.a)
})], tooltipvue_type_script_lang_ts_AxTooltip);
/* harmony default export */ var tooltipvue_type_script_lang_ts_ = (tooltipvue_type_script_lang_ts_AxTooltip);
// CONCATENATED MODULE: ./packages/ax-tooltip/src/tooltip.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_tooltipvue_type_script_lang_ts_ = (tooltipvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-tooltip/src/tooltip.vue





/* normalize component */

var tooltip_component = normalizeComponent(
  src_tooltipvue_type_script_lang_ts_,
  tooltipvue_type_template_id_525bda7a_render,
  tooltipvue_type_template_id_525bda7a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tooltip_api; }
tooltip_component.options.__file = "packages/ax-tooltip/src/tooltip.vue"
/* harmony default export */ var tooltip = (tooltip_component.exports);
// CONCATENATED MODULE: ./packages/ax-tooltip/index.ts



addInstall(tooltip.name, tooltip);
/* harmony default export */ var ax_tooltip = (tooltip);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-cascader/src/cascader.vue?vue&type=script&lang=ts&








var _components;














var cascadervue_type_script_lang_ts_AxCascader = /*#__PURE__*/function (_AxComCore$AxUICompon) {
  _inherits(AxCascader, _AxComCore$AxUICompon);

  var _super = _createSuper(AxCascader);

  function AxCascader() {
    var _this;

    _classCallCheck(this, AxCascader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "refCascader", void 0);

    _defineProperty(_assertThisInitialized(_this), "showEllipsis", void 0);

    _defineProperty(_assertThisInitialized(_this), "popperClass", void 0);

    _defineProperty(_assertThisInitialized(_this), "showAllLevels", void 0);

    _defineProperty(_assertThisInitialized(_this), "showTooltip", void 0);

    _defineProperty(_assertThisInitialized(_this), "collapseTags", void 0);

    _defineProperty(_assertThisInitialized(_this), "options", void 0);

    _defineProperty(_assertThisInitialized(_this), "props", void 0);

    _defineProperty(_assertThisInitialized(_this), "tooltipText", '');

    _defineProperty(_assertThisInitialized(_this), "firstValue", null);

    return _this;
  }

  _createClass(AxCascader, [{
    key: "disabledGet",
    get: //#endregion
    //#region Computed

    /**
     * ???????????????
     * @returns {boolean}
     */
    function get() {
      return this.tooltipText === '';
    }
    /**
     * placeholder?????????
     * @returns {string}
     */

  }, {
    key: "placeholderStr",
    get: function get() {
      return this.placeholder === undefined ? UILang.t('select.placeholder') : this.placeholder;
    } //#endregion
    //#region Methods

    /**
     * ?????????????????????????????????
     */

  }, {
    key: "expandChange",
    value: function expandChange(list) {
      for (var _len2 = arguments.length, arg = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        arg[_key2 - 1] = arguments[_key2];
      }

      this.$emit('expandChange', list, arg);
    }
    /**
     * ??????????????????
     * @param ids
     */

  }, {
    key: "nodeChange",
    value: function nodeChange(ids) {
      var _this2 = this;

      this.$emit('nodeChange', ids); // ??????????????????,????????????...??????

      if (this.showEllipsis) {
        setTimeout(function () {
          var _this2$props;

          var limit = 3; // ????????????

          if ((_this2$props = _this2.props) !== null && _this2$props !== void 0 && _this2$props.multiple) {
            // ?????? presentTags
            _this2.refCascader.presentTags.forEach(function (item) {
              var arr = item.text.split('/');

              if (arr.length > limit) {
                var final = arr.slice(0 - limit).join('/'); // ????????????

                item.text = '.../' + final;
              }
            });
          } else {
            var str = _this2.getPresentText(); // ????????????????????????


            if (!str) {
              return;
            } // str=>arr  split


            var arr = str.split('/'); // ?????????????????????  ('/'>3)

            if (arr.length > limit) {
              var final = arr.slice(0 - limit).join('/'); // ????????????

              _this2.setPresentText('.../' + final);
            }
          }
        }, 50);
      } // ??????????????????


      setTimeout(function () {
        _this2.tooltipText = _this2.getPresentText();
      }, 200);
    }
    /**
     * ?????? ax????????? v-model ???
     */

  }, {
    key: "proxyChange",
    value: function proxyChange(val) {
      this.$emit('change', val);
    } //#endregion
    //#region ????????????

    /**
     * ????????????
     */

  }, {
    key: "setMenuVisible",
    value: function setMenuVisible() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // ????????????
      this.refCascader.toggleDropDownVisible(visible);
    }
    /**
     * ??????????????????
     */

  }, {
    key: "focus",
    value: function focus() {
      // ??????????????????
      var el = this.$refs['el-cascader']; // ??????????????? HTML ??????

      if (el instanceof external_vue_property_decorator_["Vue"]) {
        // ??????????????????
        var e = el.$el; // ??????????????? HTML ??????

        if (e && e instanceof HTMLElement) {
          // ????????????
          e.focus();
        }
      } // ??????????????????


      return this;
    }
    /**
     * ??????????????????
     * @param str
     */

  }, {
    key: "setPresentText",
    value: function setPresentText(str) {
      var _this$props,
          _this3 = this;

      // ????????????
      if ((_this$props = this.props) !== null && _this$props !== void 0 && _this$props.multiple) {
        var list = str.split(',');
        list.forEach(function (item, index) {
          _this3.refCascader.presentTags[index].text = item;
        });
      } else {
        this.refCascader.presentText = str;
      }
    }
    /**
     * ??????????????????
     * @returns {any}
     */

  }, {
    key: "getPresentText",
    value: function getPresentText() {
      var _this$props2;

      return (_this$props2 = this.props) !== null && _this$props2 !== void 0 && _this$props2.multiple ? this.refCascader.presentTags.map(function (item) {
        return item.text;
      }).join('  ,  ') : this.refCascader.presentText;
    }
    /**
     * ??????lazyload???????????????
     */

  }, {
    key: "clearLazyNode",
    value: function clearLazyNode(cb) {
      if (cb) {
        cb(); // ?????? lazyLoad
        // ?????? v-model
        // (this.$refs.ax_cascader as any).$refs.el_cascader.$refs.panel.checkedValue();
      }

      var panel = this.refCascader.$refs.panel; // ???????????? menus

      panel.menus = []; // ???????????? menus
      // ?????? refs ????????? menu ??????

      panel.$refs = {};
      panel.lazyLoad(); // panel.initStore();
    }
    /**
     * ???????????????????????????
     * @param leafOnly ??????????????????????????????????????? false
     * @returns {any}
     */

  }, {
    key: "getCheckedNodes",
    value: function getCheckedNodes() {
      var leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return this.refCascader.getCheckedNodes(leafOnly);
    } //#endregion
    //#region elementui ??? v-model ??????

    /**
     * ?????? elementui ??? v-model
     */

  }, {
    key: "elValueArr",
    get: function get() {
      var data = this.data; // ????????????????????????,??? return
      // if (this.firstValue !== null) {
      //   return this.firstValue;
      // }
      // ????????????????????????

      if (typeof data === 'string') {
        this.firstValue = data; // ?????? ??????

        return data.split('/');
      } else if (Array.isArray(data)) {
        this.firstValue = data.map(function (item) {
          return item;
        }); // ?????????????????????

        return this.firstValue;
      } else {
        return [];
      }
    }
    /**
     * ?????? elementui ??? v-model
     * @param val
     */
    ,
    set: function set(val) {
      if (typeof this.firstValue === 'string') {
        // ??????=>?????????
        var str = val.join('/');
        this.proxyChange(str);
      } else if (Array.isArray(this.firstValue)) {
        // ?????????????????????
        this.proxyChange(val);
      }
    } //#endregion
    //#region ????????????

    /**
     * created
     */

  }, {
    key: "created",
    value: function created() {
      var _this$props3;

      // ????????????????????????
      if (!((_this$props3 = this.props) !== null && _this$props3 !== void 0 && _this$props3.expandTrigger)) {
        this.props.expandTrigger = 'hover';
      }
    }
    /**
     * mounted
     */

  }, {
    key: "mounted",
    value: function mounted() {
      // ??????????????????
      this.tooltipText = this.getPresentText();
    }
  }]);

  return AxCascader;
}(ax_com_core.AxUIComponent);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Ref"])('el_cascader')], cascadervue_type_script_lang_ts_AxCascader.prototype, "refCascader", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "showEllipsis", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "name", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "placeholder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "disabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'ax_cascader_popper'
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "popperClass", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "clearable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "showAllLevels", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "showTooltip", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "collapseTags", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "options", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {
      value: undefined,
      label: undefined,
      children: undefined,
      disabled: undefined,
      expandTrigger: 'hover',
      multiple: false
    };
  }
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "props", void 0);

cascadervue_type_script_lang_ts_AxCascader = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // ?????? v-model ????????????????????????
    prop: 'data',
    event: 'change'
  },
  inheritAttrs: false,
  components: (_components = {}, _defineProperty(_components, cascader_default.a.name, cascader_default.a), _defineProperty(_components, "AxTooltip", ax_tooltip), _components)
})], cascadervue_type_script_lang_ts_AxCascader);
/* harmony default export */ var cascadervue_type_script_lang_ts_ = (cascadervue_type_script_lang_ts_AxCascader);
// CONCATENATED MODULE: ./packages/ax-cascader/src/cascader.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_cascadervue_type_script_lang_ts_ = (cascadervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-cascader/src/cascader.vue





/* normalize component */

var cascader_component = normalizeComponent(
  src_cascadervue_type_script_lang_ts_,
  cascadervue_type_template_id_78492968_render,
  cascadervue_type_template_id_78492968_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var cascader_api; }
cascader_component.options.__file = "packages/ax-cascader/src/cascader.vue"
/* harmony default export */ var cascader = (cascader_component.exports);
// CONCATENATED MODULE: ./packages/ax-cascader/index.ts



addInstall(cascader.name, cascader);
/* harmony default export */ var ax_cascader = (cascader);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-checkbox/src/checkbox.vue?vue&type=template&id=0d07b988&
var checkboxvue_type_template_id_0d07b988_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ax_checkbox",
      class: [
        { validate_passed: _vm.validatePassed === true },
        { validate_failed: _vm.validatePassed === false }
      ]
    },
    [
      _vm.type === "button"
        ? _c(
            "el-checkbox-button",
            {
              ref: "el-checkbox-button",
              staticClass: "checkbox-button",
              attrs: {
                name: _vm.name,
                label: _vm.trueValueInside,
                "true-label": _vm.trueValueInside,
                "false-label": _vm.falseValue,
                disabled: _vm.disabled,
                title: _vm.placeholder
              },
              on: { blur: _vm.handleBlur },
              model: {
                value: _vm.model,
                callback: function($$v) {
                  _vm.model = $$v
                },
                expression: "model"
              }
            },
            [
              _vm._t("default", function() {
                return [_vm._v(_vm._s(_vm.label))]
              })
            ],
            2
          )
        : _vm.type === "switch"
        ? _c("el-switch", {
            staticClass: "switch",
            attrs: {
              name: _vm.name,
              "active-value": _vm.trueValueInside,
              "inactive-value": _vm.falseValueInside,
              disabled: _vm.disabled,
              title: _vm.placeholder
            },
            model: {
              value: _vm.model,
              callback: function($$v) {
                _vm.model = $$v
              },
              expression: "model"
            }
          })
        : _c(
            "el-checkbox",
            {
              ref: "el-checkbox",
              staticClass: "checkbox",
              attrs: {
                name: _vm.name,
                label: _vm.trueValueInside,
                "true-label": _vm.trueValueInside,
                "false-label": _vm.falseValueInside,
                indeterminate: _vm.indeterminate,
                disabled: _vm.disabled,
                title: _vm.placeholder,
                border: _vm.type === "border"
              },
              on: { blur: _vm.handleBlur },
              model: {
                value: _vm.model,
                callback: function($$v) {
                  _vm.model = $$v
                },
                expression: "model"
              }
            },
            [
              _vm._t("default", function() {
                return [_vm._v(_vm._s(_vm.label))]
              })
            ],
            2
          )
    ],
    1
  )
}
var checkboxvue_type_template_id_0d07b988_staticRenderFns = []
checkboxvue_type_template_id_0d07b988_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-checkbox/src/checkbox.vue?vue&type=template&id=0d07b988&

// EXTERNAL MODULE: external "element-ui/lib/switch"
var switch_ = __webpack_require__(23);
var switch_default = /*#__PURE__*/__webpack_require__.n(switch_);

// EXTERNAL MODULE: external "element-ui/lib/checkbox-button"
var checkbox_button_ = __webpack_require__(24);
var checkbox_button_default = /*#__PURE__*/__webpack_require__.n(checkbox_button_);

// EXTERNAL MODULE: external "element-ui/lib/checkbox"
var checkbox_ = __webpack_require__(9);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-checkbox/src/checkbox.vue?vue&type=script&lang=ts&










var checkboxvue_type_script_lang_ts_components;







var checkboxvue_type_script_lang_ts_AxCheckbox = /*#__PURE__*/function (_AxComCore$AxUICompon) {
  _inherits(AxCheckbox, _AxComCore$AxUICompon);

  var _super = _createSuper(AxCheckbox);

  function AxCheckbox() {
    var _this;

    _classCallCheck(this, AxCheckbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "indeterminate", void 0);

    _defineProperty(_assertThisInitialized(_this), "label", void 0);

    _defineProperty(_assertThisInitialized(_this), "trueValue", void 0);

    _defineProperty(_assertThisInitialized(_this), "falseValue", void 0);

    _defineProperty(_assertThisInitialized(_this), "trueValueInside", 'Y');

    _defineProperty(_assertThisInitialized(_this), "falseValueInside", 'N');

    return _this;
  }

  _createClass(AxCheckbox, [{
    key: "model",
    get:
    /**
     * ??????ele???????????????v-model???????????????v-model???
     * @returns {string}
     */
    function get() {
      return this.modelValue === this.trueValue ? this.trueValueInside : this.falseValueInside;
    }
    /**
     * ??????ele???????????????v-model????????????????????????v-model???
     * @param val
     */
    ,
    set: function set(val) {
      this.modelValue = val === this.trueValueInside ? this.trueValue : this.falseValue;
    }
    /**
     * ?????????????????????????????????
     */

  }, {
    key: "isChecked",
    value: function isChecked() {
      return this.modelValue === this.trueValue;
    }
    /**
     * ??????????????????
     */

  }, {
    key: "focus",
    value: function focus() {
      // ??????????????????
      var el = this.$refs[this.type === ax_com_core.CheckboxType.BUTTON ? 'el-checkbox-button' : 'el-checkbox']; // ??????????????????

      var e = el.$el; // ??????????????? HTML ??????

      if (e && e instanceof HTMLElement) {
        // ????????????
        e.focus();
      } // ??????????????????


      return this;
    }
    /**
     * ??????????????????
     */

  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      this.$emit('blur', event);
    }
  }]);

  return AxCheckbox;
}(ax_com_core.AxUIComponent);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ax_com_core.CheckboxType.NORMAL
})], checkboxvue_type_script_lang_ts_AxCheckbox.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], checkboxvue_type_script_lang_ts_AxCheckbox.prototype, "indeterminate", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ''
})], checkboxvue_type_script_lang_ts_AxCheckbox.prototype, "label", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'Y'
})], checkboxvue_type_script_lang_ts_AxCheckbox.prototype, "trueValue", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'N'
})], checkboxvue_type_script_lang_ts_AxCheckbox.prototype, "falseValue", void 0);

checkboxvue_type_script_lang_ts_AxCheckbox = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // ?????? v-model ????????????????????????
    prop: 'data',
    event: 'change'
  },
  components: (checkboxvue_type_script_lang_ts_components = {}, _defineProperty(checkboxvue_type_script_lang_ts_components, checkbox_default.a.name, checkbox_default.a), _defineProperty(checkboxvue_type_script_lang_ts_components, checkbox_button_default.a.name, checkbox_button_default.a), _defineProperty(checkboxvue_type_script_lang_ts_components, switch_default.a.name, switch_default.a), checkboxvue_type_script_lang_ts_components)
})], checkboxvue_type_script_lang_ts_AxCheckbox);
/* harmony default export */ var checkboxvue_type_script_lang_ts_ = (checkboxvue_type_script_lang_ts_AxCheckbox);
// CONCATENATED MODULE: ./packages/ax-checkbox/src/checkbox.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_checkboxvue_type_script_lang_ts_ = (checkboxvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-checkbox/src/checkbox.vue





/* normalize component */

var checkbox_component = normalizeComponent(
  src_checkboxvue_type_script_lang_ts_,
  checkboxvue_type_template_id_0d07b988_render,
  checkboxvue_type_template_id_0d07b988_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var checkbox_api; }
checkbox_component.options.__file = "packages/ax-checkbox/src/checkbox.vue"
/* harmony default export */ var src_checkbox = (checkbox_component.exports);
// CONCATENATED MODULE: ./packages/ax-checkbox/index.ts



addInstall(src_checkbox.name, src_checkbox);
/* harmony default export */ var ax_checkbox = (src_checkbox);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-date/src/date.vue?vue&type=template&id=71ec4930&
var datevue_type_template_id_71ec4930_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ax_date",
      class: [
        { validate_passed: _vm.validatePassed === true },
        { validate_failed: _vm.validatePassed === false }
      ]
    },
    [
      _c("el-date-picker", {
        ref: "el-date-picker",
        attrs: {
          readonly: _vm.readonly,
          disabled: _vm.disabled,
          editable: _vm.editable,
          clearable: _vm.clearable,
          size: _vm.size,
          placeholder: _vm.placeholderStr,
          "start-placeholder": _vm.startPlaceholder,
          "end-placeholder": _vm.endPlaceholder,
          type: _vm.type,
          format: _vm.format,
          align: _vm.align,
          "popper-class": _vm.popperClass,
          "picker-options": _vm.pickerOptions,
          "range-separator": _vm.rangeSeparator,
          "default-value": _vm.defaultValue,
          "default-time": _vm.defaultTime,
          "value-format": _vm.valueFormat,
          name: _vm.name,
          "unlink-panels": _vm.unlinkPanels,
          "prefix-icon": _vm.prefixIcon,
          "clear-icon": _vm.clearIcon,
          "validate-event": _vm.validateEvent
        },
        on: { focus: _vm.handleFocus, blur: _vm.handleBlur },
        model: {
          value: _vm.modelValue,
          callback: function($$v) {
            _vm.modelValue = $$v
          },
          expression: "modelValue"
        }
      })
    ],
    1
  )
}
var datevue_type_template_id_71ec4930_staticRenderFns = []
datevue_type_template_id_71ec4930_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-date/src/date.vue?vue&type=template&id=71ec4930&

// EXTERNAL MODULE: external "element-ui/lib/date-picker"
var date_picker_ = __webpack_require__(25);
var date_picker_default = /*#__PURE__*/__webpack_require__.n(date_picker_);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-date/src/date.vue?vue&type=script&lang=ts&













var datevue_type_script_lang_ts_AxDate = /*#__PURE__*/function (_AxComCore$AxUICompon) {
  _inherits(AxDate, _AxComCore$AxUICompon);

  var _super = _createSuper(AxDate);

  function AxDate() {
    var _this;

    _classCallCheck(this, AxDate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "refDatePicker", void 0);

    _defineProperty(_assertThisInitialized(_this), "readonly", void 0);

    _defineProperty(_assertThisInitialized(_this), "editable", void 0);

    _defineProperty(_assertThisInitialized(_this), "size", void 0);

    _defineProperty(_assertThisInitialized(_this), "startPlaceholder", void 0);

    _defineProperty(_assertThisInitialized(_this), "endPlaceholder", void 0);

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "format", void 0);

    _defineProperty(_assertThisInitialized(_this), "align", void 0);

    _defineProperty(_assertThisInitialized(_this), "popperClass", void 0);

    _defineProperty(_assertThisInitialized(_this), "pickerOptions", void 0);

    _defineProperty(_assertThisInitialized(_this), "rangeSeparator", void 0);

    _defineProperty(_assertThisInitialized(_this), "defaultValue", void 0);

    _defineProperty(_assertThisInitialized(_this), "defaultTime", void 0);

    _defineProperty(_assertThisInitialized(_this), "valueFormat", void 0);

    _defineProperty(_assertThisInitialized(_this), "unlinkPanels", void 0);

    _defineProperty(_assertThisInitialized(_this), "prefixIcon", void 0);

    _defineProperty(_assertThisInitialized(_this), "clearIcon", void 0);

    _defineProperty(_assertThisInitialized(_this), "validateEvent", void 0);

    return _this;
  }

  _createClass(AxDate, [{
    key: "placeholderStr",
    get:
    /**
     * placeholder?????????
     * @returns {string}
     */
    function get() {
      return this.placeholder === undefined ? UILang.t('select.placeholder') : this.placeholder;
    }
    /**
     * ??????????????????
     */

  }, {
    key: "focus",
    value: function focus() {
      // ??????????????????
      var el = this.$refs['el-date-picker']; // ??????????????? HTML ??????

      if (el instanceof external_vue_property_decorator_["Vue"]) {
        // ??????????????????
        var e = el.$el; // ??????????????? HTML ??????

        if (e && e instanceof HTMLElement) {
          // ????????????
          e.focus();
        }
      } // ??????????????????


      return this;
    }
    /**
     * ??????????????????
     * @param ele
     */

  }, {
    key: "handleFocus",
    value: function handleFocus(ele) {
      return ele;
    }
    /**
     * ??????????????????
     * @param ele
     */

  }, {
    key: "handleBlur",
    value: function handleBlur(ele) {
      return ele;
    }
  }]);

  return AxDate;
}(ax_com_core.AxUIComponent);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Ref"])('el-date-picker')], datevue_type_script_lang_ts_AxDate.prototype, "refDatePicker", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "readonly", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "editable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], datevue_type_script_lang_ts_AxDate.prototype, "disabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "placeholder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], datevue_type_script_lang_ts_AxDate.prototype, "clearable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "size", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "startPlaceholder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "endPlaceholder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "format", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "align", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'ax_date_popper'
})], datevue_type_script_lang_ts_AxDate.prototype, "popperClass", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "pickerOptions", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "rangeSeparator", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "defaultValue", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "defaultTime", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "valueFormat", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "unlinkPanels", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "prefixIcon", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "clearIcon", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], datevue_type_script_lang_ts_AxDate.prototype, "validateEvent", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('focus')], datevue_type_script_lang_ts_AxDate.prototype, "handleFocus", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('blur')], datevue_type_script_lang_ts_AxDate.prototype, "handleBlur", null);

datevue_type_script_lang_ts_AxDate = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // ?????? v-model ????????????????????????
    prop: 'data',
    event: 'change'
  },
  components: _defineProperty({}, date_picker_default.a.name, date_picker_default.a)
})], datevue_type_script_lang_ts_AxDate);
/* harmony default export */ var datevue_type_script_lang_ts_ = (datevue_type_script_lang_ts_AxDate);
// CONCATENATED MODULE: ./packages/ax-date/src/date.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_datevue_type_script_lang_ts_ = (datevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-date/src/date.vue





/* normalize component */

var date_component = normalizeComponent(
  src_datevue_type_script_lang_ts_,
  datevue_type_template_id_71ec4930_render,
  datevue_type_template_id_71ec4930_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var date_api; }
date_component.options.__file = "packages/ax-date/src/date.vue"
/* harmony default export */ var date = (date_component.exports);
// CONCATENATED MODULE: ./packages/ax-date/index.ts



addInstall(date.name, date);
/* harmony default export */ var ax_date = (date);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-dialog/src/dialog.vue?vue&type=template&id=a7dcadb0&
var dialogvue_type_template_id_a7dcadb0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-dialog",
    {
      ref: "el-dialog",
      staticClass: "ax_dialog",
      class: { not_modal: !_vm.modal },
      attrs: {
        title: _vm.title,
        visible: true,
        "custom-class": [
          _vm.showFooterLine ? "show_footer_line" : "",
          _vm.contentLoading ? "show_content_loading" : "",
          _vm.customClass
        ].join(" "),
        width: _vm.contentLoading ? "30%" : _vm.width,
        fullscreen: _vm.fullscreen,
        top: _vm.top,
        modal: _vm.modal,
        "lock-scroll": _vm.lockScroll,
        "close-on-click-modal": _vm.closeOnClickModal,
        "close-on-press-escape": _vm.closeOnPressEscape,
        "show-close": _vm.showClose,
        "before-close": _vm.handleClose,
        center: _vm.center,
        "append-to-body": true
      },
      on: {
        open: _vm.open,
        opened: _vm.opened,
        close: _vm.close,
        closed: _vm.closed
      },
      scopedSlots: _vm._u(
        [
          {
            key: "title",
            fn: function() {
              return [_vm._t("title")]
            },
            proxy: true
          }
        ],
        null,
        true
      )
    },
    [
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _vm.contentLoading
        ? _c("div", { staticClass: "content_loading" }, [
            _c("div", { staticClass: "loading_bar" })
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.showFooter && !_vm.contentLoading
        ? _c(
            "div",
            {
              staticClass: "dialog_footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _vm.$slots.foot !== undefined
                ? [_vm._t("foot")]
                : [
                    _c(
                      "ax-button",
                      {
                        staticClass: "dialog_button",
                        attrs: { type: _vm.type, loading: _vm.loading },
                        on: { click: _vm.okClose }
                      },
                      [
                        _vm._v(
                          "\n        " +
                            _vm._s(_vm.axLang.text("dialog.footer.Yes")) +
                            "\n      "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "ax-button",
                      {
                        staticClass: "dialog_button",
                        attrs: { type: "info" },
                        on: { click: _vm.cancelClose }
                      },
                      [
                        _vm._v(
                          "\n        " +
                            _vm._s(_vm.axLang.text("dialog.footer.No")) +
                            "\n      "
                        )
                      ]
                    )
                  ]
            ],
            2
          )
        : _vm._e()
    ],
    2
  )
}
var dialogvue_type_template_id_a7dcadb0_staticRenderFns = []
dialogvue_type_template_id_a7dcadb0_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-dialog/src/dialog.vue?vue&type=template&id=a7dcadb0&

// EXTERNAL MODULE: external "element-ui/lib/dialog"
var dialog_ = __webpack_require__(26);
var dialog_default = /*#__PURE__*/__webpack_require__.n(dialog_);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-dialog/src/dialog.vue?vue&type=script&lang=ts&








var dialogvue_type_script_lang_ts_components;









var dialogvue_type_script_lang_ts_AxDialog = /*#__PURE__*/function (_Vue) {
  _inherits(AxDialog, _Vue);

  var _super = _createSuper(AxDialog);

  function AxDialog() {
    var _this;

    _classCallCheck(this, AxDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "showFooter", void 0);

    _defineProperty(_assertThisInitialized(_this), "height", void 0);

    _defineProperty(_assertThisInitialized(_this), "loading", void 0);

    _defineProperty(_assertThisInitialized(_this), "title", void 0);

    _defineProperty(_assertThisInitialized(_this), "visible", void 0);

    _defineProperty(_assertThisInitialized(_this), "width", void 0);

    _defineProperty(_assertThisInitialized(_this), "customClass", void 0);

    _defineProperty(_assertThisInitialized(_this), "fullscreen", void 0);

    _defineProperty(_assertThisInitialized(_this), "top", void 0);

    _defineProperty(_assertThisInitialized(_this), "modal", void 0);

    _defineProperty(_assertThisInitialized(_this), "lockScroll", void 0);

    _defineProperty(_assertThisInitialized(_this), "closeOnClickModal", void 0);

    _defineProperty(_assertThisInitialized(_this), "closeOnPressEscape", void 0);

    _defineProperty(_assertThisInitialized(_this), "showClose", void 0);

    _defineProperty(_assertThisInitialized(_this), "center", void 0);

    _defineProperty(_assertThisInitialized(_this), "showFooterLine", void 0);

    _defineProperty(_assertThisInitialized(_this), "contentLoading", void 0);

    _defineProperty(_assertThisInitialized(_this), "axLang", ax_com_core.getAxLang());

    _defineProperty(_assertThisInitialized(_this), "dialogVisible", false);

    _defineProperty(_assertThisInitialized(_this), "type", ax_com_core.ButtonType.PRIMARY);

    _defineProperty(_assertThisInitialized(_this), "isDraggingTitle", false);

    _defineProperty(_assertThisInitialized(_this), "isTouch", false);

    _defineProperty(_assertThisInitialized(_this), "deltaX", 0);

    _defineProperty(_assertThisInitialized(_this), "deltaY", 0);

    return _this;
  }

  _createClass(AxDialog, [{
    key: "visibleWatch",
    value: //#endregion
    //#region Watch
    function visibleWatch(val) {
      this.dialogVisible = val;

      if (val) {
        // ???????????????????????????
        this.onWindowResize();
      }
    } //#endregion
    //#region Public Methods

    /**
     * ??????????????????
     */

  }, {
    key: "focus",
    value: function focus() {
      // ??????????????????
      var el = this.$refs['el-dialog']; // ??????????????? HTML ??????

      if (el instanceof external_vue_property_decorator_["Vue"]) {
        // ??????????????????
        var e = el.$el; // ??????????????? HTML ??????

        if (e && e instanceof HTMLElement) {
          // ????????????
          e.focus();
        }
      } // ??????????????????


      return this;
    }
    /**
     * ??????????????????
     */

  }, {
    key: "resize",
    value: function resize() {
      this.onWindowResize();
    } //#endregion
    //#region Emit

    /**
     * ??????????????????, ????????????????????? (???????????????, ???????????? done() ??????)
     */

  }, {
    key: "handleClose",
    value: function handleClose(done) {
      // ????????????
      done();
    }
    /**
     * dialog ???????????????
     */

  }, {
    key: "open",
    value: function open() {}
    /**
     * dialog ??????????????????????????????
     */

  }, {
    key: "opened",
    value: function opened() {}
    /**
     * dialog ??????????????? (???????????????)
     */

  }, {
    key: "close",
    value: function close() {}
    /**
     * dialog ?????????????????????????????? (???????????????)
     */

  }, {
    key: "closed",
    value: function closed() {} //#endregion
    //#region Data
    // ?????????

  }, {
    key: "okClose",
    value: //#endregion
    //#region Methods

    /**
     * ???????????????????????? (????????????, ??????????????????????????????)
     */
    function okClose(e) {
      this.$emit('okClose', e);
    }
    /**
     * ????????????????????????
     * @param e
     */

  }, {
    key: "cancelClose",
    value: function cancelClose(e) {
      this.$refs['el-dialog'].$emit('close', e);
    }
    /**
     * ???????????????????????????, ???????????????????????????,????????? resize ??????,??????????????????
     */

  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      // ?????? isResize ??????true
      // ??? true,?????? false
      // noHeight ?????????, false=>true
      // ????????????
      this.$nextTick(function () {
        // ?????????????????????
        var dragDom = document.querySelector('.el-dialog');
        var pos = app_core_framework_["AxDomUtils"].getDomPosition(dragDom);
        var left = pos.left;
        var top = pos.top;
        var wsize = app_core_framework_["AxDomUtils"].getWindowSize();
        var fixL = (wsize.width - dragDom.offsetWidth) / 2;
        var fixT = (wsize.height - dragDom.offsetHeight) / 2;
        var minL = 40 - dragDom.offsetWidth - fixL;
        var maxL = wsize.width - 30 - fixL;
        var minT = -fixT;
        var maxT = wsize.height - 30 - fixT;
        var nleft = left < minL ? minL : left > maxL ? maxL : left;
        var ntop = top < minT ? minT : top > maxT ? maxT : top; // ??????????????????????????????

        if (nleft !== left) {
          dragDom.style.left = nleft + 'px';
        }

        if (ntop !== top) {
          dragDom.style.top = ntop + 'px';
        }
      });
    }
    /**
     * ???????????????????????????
     * @param evt
     * @returns {boolean}
     */

  }, {
    key: "onMouseDown",
    value: function onMouseDown(evt) {
      evt.preventDefault(); // evt.stopPropagation();

      var e = app_core_framework_["AxDomUtils"].getDomEventTarget(evt);
      if (!e || !e.tagName) return true;
      var tg = e.tagName.toUpperCase();
      if (tg === 'BUTTON' || e.parentElement && e.parentElement.tagName.toUpperCase() === 'BUTTON') return true;
      this.isDraggingTitle = true;
      this.isTouch = evt.type === 'touchstart';
      var ev = this.isTouch ? evt.touches.item(0) : evt; // ??????????????????

      var dragDom = this.$refs['el-dialog'].$el.querySelector('.el-dialog'); // ?????????????????????

      var dialogHeaderEl = dragDom.querySelector('.el-dialog__header'); // ??????????????????????????????????????????

      var pos = app_core_framework_["AxDomUtils"].getDomPosition(dialogHeaderEl); // ???????????????????????????

      this.deltaX = pos.left - ev.clientX;
      this.deltaY = pos.top - ev.clientY; // ???????????????????????????

      if (this.isTouch) {
        app_core_framework_["AxDomUtils"].addDomEventListener(document, 'touchmove', this.onMouseMove);
        app_core_framework_["AxDomUtils"].addDomEventListener(document, 'touchend', this.onMouseUp);
      } else {
        app_core_framework_["AxDomUtils"].addDomEventListener(document, 'onmousemove', this.onMouseMove);
        app_core_framework_["AxDomUtils"].addDomEventListener(document, 'onmouseup', this.onMouseUp);
      }

      return true;
    }
    /**
     * ??????????????????
     * @param evt1
     * @returns {boolean}
     */

  }, {
    key: "onMouseMove",
    value: function onMouseMove(evt1) {
      // ??????????????????
      var dragDom = this.$refs['el-dialog'].$el.querySelector('.el-dialog'); // ?????????????????????

      var dialogHeaderEl = dragDom.querySelector('.el-dialog__header');
      if (!this.isDraggingTitle) return true;
      var left;
      var top;
      var ev1 = this.isTouch ? evt1.touches.item(0) : evt1; // ????????????

      left = ev1.clientX + this.deltaX;
      top = ev1.clientY + this.deltaY; // ???????????????????????????

      var wsize = app_core_framework_["AxDomUtils"].getWindowSize(); // ?????????????????????????????????

      var leftMin = 0;
      var leftMax = wsize.width - dragDom.offsetWidth;
      var topMin = 0; // ?????????????????????????????????

      var topMax = wsize.height - dragDom.offsetHeight; // ??????????????????

      left = left <= leftMin ? leftMin : left >= leftMax ? leftMax : left;
      top = top <= topMin ? topMin : top >= topMax ? topMax : top; // ?????????????????????

      dragDom.style.left = "".concat(left, "px");
      dragDom.style.top = "".concat(top, "px"); // return AxDomUtils.cancelDomEvent(ev1);
    } // ??????????????????????????????

  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      if (!this.isDraggingTitle) return true;
      this.isDraggingTitle = false;

      if (this.isTouch) {
        app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'touchmove', this.onMouseMove);
        app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'touchend', this.onMouseUp);
      } else {
        app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'onmousemove', this.onMouseMove);
        app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'onmouseup', this.onMouseUp);
      }

      return true;
    } //#endregion
    //#region ????????????

    /**
     * mounted
     */

  }, {
    key: "mounted",
    value: function mounted() {
      // ???????????????
      this.onWindowResize(); // ??????????????????????????????

      app_core_framework_["AxDomUtils"].addDomEventListener(window, 'resize', this.onWindowResize); // ????????????

      var dialogHeaderEl = this.$refs['el-dialog'].$el.querySelector('.el-dialog__header'); // ?????????????????????????????????

      app_core_framework_["AxDomUtils"].addDomEventListener(dialogHeaderEl, ['onmousedown', 'touchstart'], this.onMouseDown);
    }
    /**
     * beforeDestroy
     */

  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      // ??????????????????????????????
      app_core_framework_["AxDomUtils"].removeDomEventListener(window, 'resize', this.onWindowResize); // ??????????????????????????????

      app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'onmouseup', this.onMouseUp);
    }
  }]);

  return AxDialog;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "showFooter", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "height", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "loading", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "title", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "visible", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '68rem'
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "width", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ''
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "customClass", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "fullscreen", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ''
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "top", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "modal", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "lockScroll", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "closeOnClickModal", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "closeOnPressEscape", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "showClose", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "center", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "showFooterLine", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "contentLoading", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('visible')], dialogvue_type_script_lang_ts_AxDialog.prototype, "visibleWatch", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('beforeClose')], dialogvue_type_script_lang_ts_AxDialog.prototype, "handleClose", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('open')], dialogvue_type_script_lang_ts_AxDialog.prototype, "open", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('opened')], dialogvue_type_script_lang_ts_AxDialog.prototype, "opened", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('close')], dialogvue_type_script_lang_ts_AxDialog.prototype, "close", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('closed')], dialogvue_type_script_lang_ts_AxDialog.prototype, "closed", null);

dialogvue_type_script_lang_ts_AxDialog = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: (dialogvue_type_script_lang_ts_components = {}, _defineProperty(dialogvue_type_script_lang_ts_components, dialog_default.a.name, dialog_default.a), _defineProperty(dialogvue_type_script_lang_ts_components, "AxButton", ax_button), dialogvue_type_script_lang_ts_components)
})], dialogvue_type_script_lang_ts_AxDialog);
/* harmony default export */ var dialogvue_type_script_lang_ts_ = (dialogvue_type_script_lang_ts_AxDialog);
// CONCATENATED MODULE: ./packages/ax-dialog/src/dialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_dialogvue_type_script_lang_ts_ = (dialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-dialog/src/dialog.vue





/* normalize component */

var dialog_component = normalizeComponent(
  src_dialogvue_type_script_lang_ts_,
  dialogvue_type_template_id_a7dcadb0_render,
  dialogvue_type_template_id_a7dcadb0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var dialog_api; }
dialog_component.options.__file = "packages/ax-dialog/src/dialog.vue"
/* harmony default export */ var dialog = (dialog_component.exports);
// CONCATENATED MODULE: ./packages/ax-dialog/index.ts



addInstall(dialog.name, dialog);
/* harmony default export */ var ax_dialog = (dialog);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-divider/src/divider.vue?vue&type=template&id=56ebf9a6&
var dividervue_type_template_id_56ebf9a6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    staticClass: "ax_divider",
    class: ["ax_divider_" + _vm.type],
    style: _vm.style
  })
}
var dividervue_type_template_id_56ebf9a6_staticRenderFns = []
dividervue_type_template_id_56ebf9a6_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-divider/src/divider.vue?vue&type=template&id=56ebf9a6&

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-divider/src/divider.vue?vue&type=script&lang=ts&











var dividervue_type_script_lang_ts_AxDivider = /*#__PURE__*/function (_Vue) {
  _inherits(AxDivider, _Vue);

  var _super = _createSuper(AxDivider);

  function AxDivider() {
    var _this;

    _classCallCheck(this, AxDivider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "preset", void 0);

    _defineProperty(_assertThisInitialized(_this), "background", void 0);

    _defineProperty(_assertThisInitialized(_this), "height", void 0);

    return _this;
  }

  _createClass(AxDivider, [{
    key: "style",
    get: function get() {
      var style = {
        background: this.background,
        height: this.height
      }; // ??????????????????????????????

      if (this.preset) {
        switch (this.preset) {
          case ax_com_core.DividerPreset.BUTTON:
            style.height = '2rem';
            break;

          default:
            break;
        }
      }

      return style;
    }
  }]);

  return AxDivider;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ax_com_core.DividerType.VERTICAL,
  type: String
})], dividervue_type_script_lang_ts_AxDivider.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '',
  type: String
})], dividervue_type_script_lang_ts_AxDivider.prototype, "preset", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined,
  type: String
})], dividervue_type_script_lang_ts_AxDivider.prototype, "background", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined,
  type: String
})], dividervue_type_script_lang_ts_AxDivider.prototype, "height", void 0);

dividervue_type_script_lang_ts_AxDivider = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {}
})], dividervue_type_script_lang_ts_AxDivider);
/* harmony default export */ var dividervue_type_script_lang_ts_ = (dividervue_type_script_lang_ts_AxDivider);
// CONCATENATED MODULE: ./packages/ax-divider/src/divider.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_dividervue_type_script_lang_ts_ = (dividervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-divider/src/divider.vue





/* normalize component */

var divider_component = normalizeComponent(
  src_dividervue_type_script_lang_ts_,
  dividervue_type_template_id_56ebf9a6_render,
  dividervue_type_template_id_56ebf9a6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var divider_api; }
divider_component.options.__file = "packages/ax-divider/src/divider.vue"
/* harmony default export */ var divider = (divider_component.exports);
// CONCATENATED MODULE: ./packages/ax-divider/index.ts



addInstall(divider.name, divider);
/* harmony default export */ var ax_divider = (divider);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-dropdown/src/dropdown.vue?vue&type=template&id=1f46c848&
var dropdownvue_type_template_id_1f46c848_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-dropdown",
    {
      ref: "el-dropdown",
      staticClass: "ax_dropdown",
      attrs: {
        trigger: _vm.trigger,
        placement: _vm.placement,
        tabindex: 1,
        "hide-on-click": _vm.hideOnClick
      },
      on: {
        command: _vm.handleCommand,
        "visible-change": _vm.handleVisibleChange
      }
    },
    [
      this.$slots.default && this.$slots.default.tag
        ? [_vm._t("default")]
        : [_c("span", [_vm._t("default")], 2)],
      _vm._v(" "),
      _c(
        "el-dropdown-menu",
        {
          class:
            _vm.menuClass === undefined
              ? "dropdown_menu"
              : "dropdown_menu " + _vm.menuClass,
          attrs: { slot: "dropdown" },
          slot: "dropdown"
        },
        _vm._l(_vm.options, function(item) {
          return _c(
            "el-dropdown-item",
            {
              key: item.key,
              class: "dropdown_item",
              attrs: {
                command: item.key,
                disabled: item.disabled,
                divided: item.text === "-"
              }
            },
            [
              item.text !== "-"
                ? _vm._t(
                    "option",
                    function() {
                      return [
                        _vm._v("\n        " + _vm._s(item.text) + "\n      ")
                      ]
                    },
                    { item: item }
                  )
                : _vm._e()
            ],
            2
          )
        }),
        1
      )
    ],
    2
  )
}
var dropdownvue_type_template_id_1f46c848_staticRenderFns = []
dropdownvue_type_template_id_1f46c848_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-dropdown/src/dropdown.vue?vue&type=template&id=1f46c848&

// EXTERNAL MODULE: external "element-ui/lib/dropdown-item"
var dropdown_item_ = __webpack_require__(27);
var dropdown_item_default = /*#__PURE__*/__webpack_require__.n(dropdown_item_);

// EXTERNAL MODULE: external "element-ui/lib/dropdown-menu"
var dropdown_menu_ = __webpack_require__(28);
var dropdown_menu_default = /*#__PURE__*/__webpack_require__.n(dropdown_menu_);

// EXTERNAL MODULE: external "element-ui/lib/dropdown"
var dropdown_ = __webpack_require__(29);
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown_);

// EXTERNAL MODULE: external "core-js/modules/es.array.find.js"
var es_array_find_js_ = __webpack_require__(14);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-dropdown/src/dropdown.vue?vue&type=script&lang=ts&










var dropdownvue_type_script_lang_ts_components;









var dropdownvue_type_script_lang_ts_AxDropdown = /*#__PURE__*/function (_Vue) {
  _inherits(AxDropdown, _Vue);

  var _super = _createSuper(AxDropdown);

  function AxDropdown() {
    var _this;

    _classCallCheck(this, AxDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "refDropdown", void 0);

    _defineProperty(_assertThisInitialized(_this), "trigger", void 0);

    _defineProperty(_assertThisInitialized(_this), "menuClass", void 0);

    _defineProperty(_assertThisInitialized(_this), "hideOnClick", void 0);

    _defineProperty(_assertThisInitialized(_this), "placement", void 0);

    _defineProperty(_assertThisInitialized(_this), "options", void 0);

    return _this;
  }

  _createClass(AxDropdown, [{
    key: "focus",
    value: //#endregion
    //#region public??????

    /**
     * ??????????????????
     */
    function focus() {
      // ??????????????? HTML ??????
      if (this.refDropdown) {
        // ??????????????????
        var e = this.refDropdown.$el; // ??????????????? HTML ??????

        if (e && e instanceof HTMLElement) {
          // ????????????
          e.focus();
        }
      } // ??????????????????


      return this;
    }
    /**
     * ?????????????????????
     */

  }, {
    key: "close",
    value: function close() {
      this.refDropdown.hide(); // ??????????????????

      return this;
    } //#endregion
    //#region Emit

    /**
     * ?????????????????????
     */

  }, {
    key: "handleCommand",
    value: function handleCommand(key) {
      var _this$options;

      // ????????? `options ?????????key
      this.$emit('change', key, (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.find(function (option) {
        return option.key === key;
      }));
    }
    /**
     * ???????????????/???????????????
     */

  }, {
    key: "handleVisibleChange",
    value: function handleVisibleChange(visible) {
      return visible;
    } //#endregion
    //#region ????????????

    /**
     * ?????????????????????
     */

  }, {
    key: "created",
    value: function created() {}
  }]);

  return AxDropdown;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Ref"])('el-dropdown')], dropdownvue_type_script_lang_ts_AxDropdown.prototype, "refDropdown", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'hover',
  type: String
})], dropdownvue_type_script_lang_ts_AxDropdown.prototype, "trigger", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined,
  type: String
})], dropdownvue_type_script_lang_ts_AxDropdown.prototype, "menuClass", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], dropdownvue_type_script_lang_ts_AxDropdown.prototype, "hideOnClick", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ax_com_core.DropdownPosition.BOTTOM_END
})], dropdownvue_type_script_lang_ts_AxDropdown.prototype, "placement", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], dropdownvue_type_script_lang_ts_AxDropdown.prototype, "options", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('visible-change')], dropdownvue_type_script_lang_ts_AxDropdown.prototype, "handleVisibleChange", null);

dropdownvue_type_script_lang_ts_AxDropdown = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // ?????? v-model ????????????????????????
    prop: 'data',
    event: 'change'
  },
  components: (dropdownvue_type_script_lang_ts_components = {}, _defineProperty(dropdownvue_type_script_lang_ts_components, dropdown_default.a.name, dropdown_default.a), _defineProperty(dropdownvue_type_script_lang_ts_components, dropdown_menu_default.a.name, dropdown_menu_default.a), _defineProperty(dropdownvue_type_script_lang_ts_components, dropdown_item_default.a.name, dropdown_item_default.a), _defineProperty(dropdownvue_type_script_lang_ts_components, "AxButton", ax_button), dropdownvue_type_script_lang_ts_components)
})], dropdownvue_type_script_lang_ts_AxDropdown);
/* harmony default export */ var dropdownvue_type_script_lang_ts_ = (dropdownvue_type_script_lang_ts_AxDropdown);
// CONCATENATED MODULE: ./packages/ax-dropdown/src/dropdown.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_dropdownvue_type_script_lang_ts_ = (dropdownvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-dropdown/src/dropdown.vue





/* normalize component */

var dropdown_component = normalizeComponent(
  src_dropdownvue_type_script_lang_ts_,
  dropdownvue_type_template_id_1f46c848_render,
  dropdownvue_type_template_id_1f46c848_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var dropdown_api; }
dropdown_component.options.__file = "packages/ax-dropdown/src/dropdown.vue"
/* harmony default export */ var dropdown = (dropdown_component.exports);
// CONCATENATED MODULE: ./packages/ax-dropdown/index.ts



addInstall(dropdown.name, dropdown);
/* harmony default export */ var ax_dropdown = (dropdown);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-form/src/form.vue?vue&type=template&id=6a2057b0&
var formvue_type_template_id_6a2057b0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ax_form",
      class: [_vm.presetStyle],
      on: { keypress: _vm.handleKeypress }
    },
    [
      _vm._t("default", null, { data: _vm.data }),
      _vm._v(" "),
      _vm._l(_vm.tipsmap, function(item, key) {
        return _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showTip && item.shown && !_vm.tooltip,
                expression: "showTip && item.shown && !tooltip"
              }
            ],
            key: key,
            staticClass: "ax_err_tips",
            style: "left: " + item.left + "px; top: " + item.top + "px;"
          },
          [_vm._v("\n    " + _vm._s(item.message) + "\n  ")]
        )
      })
    ],
    2
  )
}
var formvue_type_template_id_6a2057b0_staticRenderFns = []
formvue_type_template_id_6a2057b0_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-form/src/form.vue?vue&type=template&id=6a2057b0&

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
// EXTERNAL MODULE: external "core-js/modules/es.regexp.constructor.js"
var es_regexp_constructor_js_ = __webpack_require__(58);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.to-string.js"
var es_regexp_to_string_js_ = __webpack_require__(49);

// EXTERNAL MODULE: external "core-js/modules/es.string.replace.js"
var es_string_replace_js_ = __webpack_require__(59);

// EXTERNAL MODULE: external "core-js/modules/es.array.includes.js"
var es_array_includes_js_ = __webpack_require__(15);

// EXTERNAL MODULE: external "core-js/modules/es.string.includes.js"
var es_string_includes_js_ = __webpack_require__(16);

// EXTERNAL MODULE: external "core-js/modules/es.string.match.js"
var es_string_match_js_ = __webpack_require__(60);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-radio/src/radio.vue?vue&type=template&id=839b64ac&
var radiovue_type_template_id_839b64ac_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ax_radio",
      class: [
        { validate_passed: _vm.validatePassed === true },
        { validate_failed: _vm.validatePassed === false }
      ]
    },
    [
      _c(
        "el-radio",
        {
          ref: "el-radio",
          class: [
            _vm.type === "button" ? "radio radio-button" : "radio",
            _vm.hideLabel ? "hide_label" : ""
          ],
          attrs: {
            name: _vm.name,
            label: _vm.label,
            disabled: _vm.disabled,
            title: _vm.placeholder,
            border: _vm.type === "border"
          },
          on: { blur: _vm.handleBlur },
          model: {
            value: _vm.modelValue,
            callback: function($$v) {
              _vm.modelValue = $$v
            },
            expression: "modelValue"
          }
        },
        [
          _vm._t("default", function() {
            return [_vm._v(_vm._s(_vm.label))]
          })
        ],
        2
      )
    ],
    1
  )
}
var radiovue_type_template_id_839b64ac_staticRenderFns = []
radiovue_type_template_id_839b64ac_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-radio/src/radio.vue?vue&type=template&id=839b64ac&

// EXTERNAL MODULE: external "element-ui/lib/radio-button"
var radio_button_ = __webpack_require__(30);
var radio_button_default = /*#__PURE__*/__webpack_require__.n(radio_button_);

// EXTERNAL MODULE: external "element-ui/lib/radio"
var radio_ = __webpack_require__(31);
var radio_default = /*#__PURE__*/__webpack_require__.n(radio_);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-radio/src/radio.vue?vue&type=script&lang=ts&









var radiovue_type_script_lang_ts_components;







var radiovue_type_script_lang_ts_AxRadio = /*#__PURE__*/function (_AxComCore$AxUICompon) {
  _inherits(AxRadio, _AxComCore$AxUICompon);

  var _super = _createSuper(AxRadio);

  function AxRadio() {
    var _this;

    _classCallCheck(this, AxRadio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "label", void 0);

    _defineProperty(_assertThisInitialized(_this), "hideLabel", void 0);

    return _this;
  }

  _createClass(AxRadio, [{
    key: "isChecked",
    value:
    /**
     * ?????????????????????????????????
     */
    function isChecked() {
      return this.modelValue === this.label;
    }
    /**
     * ??????????????????
     */

  }, {
    key: "focus",
    value: function focus() {
      // ??????????????????
      var el = this.$refs['el-radio']; // ??????????????????

      var e = el.$el; // ??????????????? HTML ??????

      if (e && e instanceof HTMLElement) {
        // ????????????
        e.focus();
      } // ??????????????????


      return this;
    }
    /**
     * ??????????????????
     */

  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      this.$emit('blur', event);
    }
  }]);

  return AxRadio;
}(ax_com_core.AxUIComponent);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ax_com_core.RadioType.NORMAL
})], radiovue_type_script_lang_ts_AxRadio.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ''
})], radiovue_type_script_lang_ts_AxRadio.prototype, "label", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], radiovue_type_script_lang_ts_AxRadio.prototype, "hideLabel", void 0);

radiovue_type_script_lang_ts_AxRadio = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // ?????? v-model ????????????????????????
    prop: 'data',
    event: 'change'
  },
  components: (radiovue_type_script_lang_ts_components = {}, _defineProperty(radiovue_type_script_lang_ts_components, radio_default.a.name, radio_default.a), _defineProperty(radiovue_type_script_lang_ts_components, radio_button_default.a.name, radio_button_default.a), radiovue_type_script_lang_ts_components)
})], radiovue_type_script_lang_ts_AxRadio);
/* harmony default export */ var radiovue_type_script_lang_ts_ = (radiovue_type_script_lang_ts_AxRadio);
// CONCATENATED MODULE: ./packages/ax-radio/src/radio.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_radiovue_type_script_lang_ts_ = (radiovue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-radio/src/radio.vue





/* normalize component */

var radio_component = normalizeComponent(
  src_radiovue_type_script_lang_ts_,
  radiovue_type_template_id_839b64ac_render,
  radiovue_type_template_id_839b64ac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var radio_api; }
radio_component.options.__file = "packages/ax-radio/src/radio.vue"
/* harmony default export */ var src_radio = (radio_component.exports);
// CONCATENATED MODULE: ./packages/ax-radio/index.ts



addInstall(src_radio.name, src_radio);
/* harmony default export */ var ax_radio = (src_radio);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(32);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-form/src/form.vue?vue&type=script&lang=ts&




























var formvue_type_script_lang_ts_AxForm = /*#__PURE__*/function (_Vue) {
  _inherits(AxForm, _Vue);

  var _super = _createSuper(AxForm);

  function AxForm() {
    var _this;

    _classCallCheck(this, AxForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "data", void 0);

    _defineProperty(_assertThisInitialized(_this), "config", void 0);

    _defineProperty(_assertThisInitialized(_this), "showTip", void 0);

    _defineProperty(_assertThisInitialized(_this), "tooltip", void 0);

    _defineProperty(_assertThisInitialized(_this), "presetStyle", void 0);

    _defineProperty(_assertThisInitialized(_this), "cmap", new Map());

    _defineProperty(_assertThisInitialized(_this), "axmap", new Map());

    _defineProperty(_assertThisInitialized(_this), "tipsmap", {});

    return _this;
  }

  _createClass(AxForm, [{
    key: "mounted",
    value:
    /* -------------------------- TODO: ????????????????????? -------------------------- */

    /**
     * ????????????????????????
     */
    function mounted() {
      // ???????????????
      this.initConfig(); // ????????????????????????

      this.$on('form-item-change', this.handleFormItemChange);
    }
    /**
     * ????????????????????????
     * @param name
     * @param value
     */

  }, {
    key: "handleFormItemChange",
    value: function handleFormItemChange(name, value) {
      // ??????????????????
      var comps = this.axmap.get(name); // ??????????????????

      if (!comps || comps.length === 0) return; // ????????????????????????

      var conf = this.cmap.get(name); // ??????????????????

      if (!conf) return; // ??????????????????????????????
      // const cv = this.convertToType(conf.type, value);
      // ?????????????????????????????????????????????????????????????????????????????????
      // // XXX: ???????????????radio???????????????????????????
      // if (cv !== value) {
      //   value = cv;
      //   this.$nextTick(() => {
      //     this.handleFormItemChange(name, value);
      //   });
      //   return;
      // }
      // ??????????????????????????????

      var hasErr = false; // ???????????????????????????????????????????????????????????????????????????

      for (var i = 0, c = comps.length; i < c; i++) {
        // ??????????????????
        var comp = comps[i]; // ??????????????????

        if (comp.modelValue !== value) {
          // ????????????????????????????????????????????????radio???
          comp.setFormItemValue(value);
        } // ????????????????????????????????????


        if (!this.validateValue(conf, comp, value, 'change')) {
          // ??????????????????
          if (!hasErr) hasErr = true; // ???????????????,????????????
          // ?????????????????????

          var tip = this.tipsmap[conf.name];

          if (this.tooltip) {
            // ????????????????????????????????????????????????
            this.$emit('showTooltip', true, tip);
          } else {
            this.$set(this.tipsmap, conf.name, tip);
          }
        }
      } // ???????????????????????????????????????????????????


      if (!hasErr) {
        // ?????????????????????
        var _tip = this.tipsmap[conf.name]; // ????????????????????????

        if (_tip && _tip.shown) {
          // ???????????????????????????
          _tip.shown = false; // ??????????????????

          this.$set(this.tipsmap, conf.name, _tip);
        }
      } // ??????????????????????????????


      if (this.data !== undefined && this.data !== null) {
        // ????????????
        this.$set(this.data, name, value); // ??????????????????????????????

        this.$emit('change', this.data);
      }
    }
    /**
     * ????????????????????????
     */

  }, {
    key: "refreshForm",
    value: function refreshForm() {
      // ????????????
      this.axmap.clear(); // ?????????????????????

      this.findComponents(this); // ??????????????????????????????

      if (this.config && this.config.length > 0) {
        // ??????????????????
        var _iterator = _createForOfIteratorHelper(this.config),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var conf = _step.value;
            // ??????????????????
            var name = conf.name; // ??????????????????

            if (!name || name.length === 0) continue; // ??????????????????

            var comps = this.axmap.get(name); // ??????????????????

            if (!comps || comps.length === 0) continue; // ??????????????????

            var _iterator2 = _createForOfIteratorHelper(comps),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var comp = _step2.value;
                // ??????????????????
                this.configComponent(conf, comp);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } // ???????????????


      this.initData(true);
    }
    /**
     * ?????????????????????????????????????????????
     */

  }, {
    key: "refreshData",
    value: function refreshData() {
      this.initData(false);
    }
    /**
     * ??????????????????????????????
     */

  }, {
    key: "focus",
    value: function focus() {
      // ?????????????????????????????????
      var firstUI;
      var focusUI; // ??????????????????

      var _iterator3 = _createForOfIteratorHelper(this.axmap),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
              key = _step3$value[0],
              value = _step3$value[1];

          // ????????????
          if (!value) continue; // ????????????

          for (var index = 0; index < value.length; index++) {
            // ??????????????????
            var axc = value[index]; // ?????????????????????

            if (firstUI === undefined) firstUI = axc; // ????????????????????????

            if (axc.validatePassed === false) {
              // ???????????????????????????????????????
              focusUI = axc; // ??????

              break;
            }
          }
        } // ????????????????????????

      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (focusUI || firstUI) {
        // ??????????????????
        window.setTimeout(function () {
          // ????????????
          if (focusUI) {
            // ????????????
            focusUI.focus();
          } else if (firstUI) {
            // ?????????????????????
            firstUI.focus();
          }
        }, 100);
      }
    }
    /**
     * ?????????????????????????????????
     */

  }, {
    key: "findComponents",
    value: function findComponents(vue) {
      // ??????????????????
      if (!vue) return; // ???????????????

      var nodes = vue.$children; // ??????????????????

      if (!nodes || nodes.length === 0) return; // ??????????????????????????????

      for (var i = 0, c = nodes.length; i < c; i++) {
        // ??????????????????
        var node = nodes[i]; // ????????????????????????

        if (node && node instanceof ax_com_core.AxUIComponent) {
          // ?????????????????????????????????????????????
          var comp = node; // ??????????????????

          var name = comp.name; // ??????????????????

          if (!name || name.length === 0) continue; // ?????????????????????

          var comps = this.axmap.get(name); // ??????????????????

          if (!comps) {
            // ????????????
            comps = []; // ???????????????

            this.axmap.set(name, comps);
          } // ????????????????????????


          comps.push(comp);
        } // ?????????????????????


        this.findComponents(node);
      }
    }
    /* -------------------------- TODO: ?????????????????? -------------------------- */

    /**
     * ??????????????????
     */

  }, {
    key: "configComponent",
    value: function configComponent(conf, comp) {
      // ?????????????????????????????????
      var ele = comp.$el; // ??????????????????
      // if (!ele || ele.getAttribute('hasAxFormConfig') === 'true') return;
      // ?????????????????????????????????

      comp.$on('blur', this.handleComponentBlur.bind(this, conf, comp)); // ?????????????????????
      // ele.setAttribute('hasAxFormConfig', 'true');
      // ??????????????????????????????

      if (conf.min !== undefined && !isNaN(conf.min) || conf.max !== undefined && !isNaN(conf.max) || conf.exreg && conf.exreg.length > 0) {
        // XXX: ??????????????????????????????
        // ???????????????????????????
        this.configTextInput(ele.getElementsByTagName('input'), conf); // ???????????????????????????

        this.configTextInput(ele.getElementsByTagName('textarea'), conf);
      }
    }
    /**
     * ????????????????????????
     */

  }, {
    key: "handleComponentBlur",
    value: function handleComponentBlur(conf, comp) {
      // ?????????????????????
      // const value = this.convertToType(conf.type, comp.modelValue);
      var value = comp.modelValue; // ??????????????????

      if (this.validateValue(conf, comp, value, 'blur')) {
        // ?????????????????????
        var tip = this.tipsmap[conf.name]; // ????????????????????????

        if (tip && tip.shown) {
          // ???????????????????????????
          tip.shown = false; // ??????????????????

          this.$set(this.tipsmap, conf.name, tip);
        }
      }
    }
    /**
     * ?????????????????????
     */

  }, {
    key: "configTextInput",
    value: function configTextInput(inputs, conf) {
      // ??????????????????
      if (!inputs || inputs.length === 0) return; // ??????????????????

      var _iterator4 = _createForOfIteratorHelper(inputs),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var input = _step4.value;
          // ?????????????????????
          input.style.imeMode = 'disabled';

          try {
            // ?????????????????????
            input.autocomplete = 'off';
          } catch (ex) {} // ???????????????????????????


          if (input instanceof HTMLInputElement) {
            // ????????????
            switch (input.type) {
              case 'text':
              case 'password':
                // ??????????????????
                if (conf.max !== undefined && !isNaN(conf.max)) {
                  // ??????????????????
                  input.maxLength = conf.max;
                }

                break;

              case 'number':
                {
                  // ??????????????????
                  var len = 0; // ???????????????

                  if (conf.min !== undefined && !isNaN(conf.min)) {
                    // ???????????????
                    input.min = conf.min + ''; // ?????????????????????

                    len = (conf.min + '').length;
                  } // ???????????????


                  if (conf.max !== undefined && !isNaN(conf.max)) {
                    // ???????????????
                    input.max = conf.max + ''; // ?????????????????????

                    len = Math.max((conf.max + '').length, len);
                  } // ????????????


                  if (len > 0) input.maxLength = len;
                  break;
                }

              default:
                continue;
            }
          } else {
            // ????????????????????????????????????
            if (conf.max !== undefined && !isNaN(conf.max)) {
              // ??????????????????
              input.maxLength = conf.max;
            }
          } // ??????????????????????????????


          if (conf.exreg && conf.exreg.length > 0) {
            // ??????????????????
            app_core_framework_["AxDomUtils"].addDomEventListener(input, ['keydown', 'change', 'paste', 'compositionend'], this.handleInputEvent.bind(this, conf, input));
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * ?????????????????????
     */

  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(conf, e, evt) {
      var _this2 = this;

      // ???????????????????????????
      var reg = new RegExp(conf.exreg || '', 'img'); // ??????????????????

      var isNum = (conf.type & ax_com_core.FormValueType.INT) === ax_com_core.FormValueType.INT || (conf.type & ax_com_core.FormValueType.FLOAT) === ax_com_core.FormValueType.FLOAT || (conf.type & ax_com_core.FormValueType.DOUBLE) === ax_com_core.FormValueType.DOUBLE; // ??????????????????

      switch (evt.type) {
        case 'keydown':
          // ????????????
          var k = app_core_framework_["AxDomUtils"].getDomEventKeyCode(evt);
          if (app_core_framework_["AxDomUtils"].isDomControlKey(k) || evt.ctrlKey) return true;
          var cs = app_core_framework_["AxDomUtils"].keyCodeToString(evt, false);
          if (!cs) return true;
          reg.lastIndex = 0;
          if (reg.test(cs)) return app_core_framework_["AxDomUtils"].cancelDomEvent(evt);
          break;

        case 'paste':
          // ????????????
          var win = window;

          if (win.clipboardData) {
            // ?????? IE
            var t = win.clipboardData.getData('Text');
            win.clipboardData.setData('Text', t.replace(reg, ''));
            evt.returnValue = true;

            if (isNum) {
              window.setTimeout(function () {
                _this2.fixInputNumber(conf, e, e.value);

                _this2.handleFormItemChange(conf.name, e.value);
              }, 10);
            } else {
              this.handleFormItemChange(conf.name, e.value);
            }

            return true;
          } else {
            // ???????????????
            window.setTimeout(function () {
              reg.lastIndex = 0;
              if (e.value) e.value = e.value.replace(reg, '');
              if (isNum) _this2.fixInputNumber(conf, e, e.value);

              _this2.handleFormItemChange(conf.name, e.value);
            }, 10);
          }

          break;

        case 'change':
          // ????????????
          reg.lastIndex = 0;
          if (e.value) e.value = e.value.replace(reg, '');
          if (isNum) this.fixInputNumber(conf, e, e.value);
          this.handleFormItemChange(conf.name, e.value);
          break;

        case 'compositionend':
          // ?????????????????????????????????
          reg.lastIndex = 0;

          if (e.value) {
            this.$nextTick(function () {
              e.value = e.value.replace(reg, '');
              if (isNum) _this2.fixInputNumber(conf, e, e.value);

              _this2.handleFormItemChange(conf.name, e.value);
            });
          }

          break;

        default:
          break;
      }

      return true;
    }
    /**
     * ???????????????????????????
     */

  }, {
    key: "fixInputNumber",
    value: function fixInputNumber(conf, e, value) {
      var n = parseFloat(value);

      if (!isNaN(n)) {
        if (conf.min !== undefined && n < conf.min) {
          e.value = conf.min + '';
        }

        if (conf.max !== undefined && n > conf.max) {
          e.value = conf.max + '';
        }
      } else {
        e.value = '0';
      }

      return;
    }
    /* -------------------------- TODO: ????????????????????? -------------------------- */

    /**
     * ?????????????????????
     */

  }, {
    key: "initData",
    value: function initData(eventEnabled) {
      // ??????????????????????????????
      if (!this.data || !this.config || this.config.length === 0 || this.axmap.size === 0) return; // ????????????????????????????????????

      var hasChanged = false; // ??????????????????

      var _iterator5 = _createForOfIteratorHelper(this.config),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var conf = _step5.value;
          // ??????????????????
          var name = conf.name; // ??????????????????

          if (!name || name.length === 0) continue; // ??????????????????

          var comps = this.axmap.get(name); // ??????????????????

          if (!comps || comps.length === 0) continue; // ???????????????

          var value = this.data[name]; // ????????????????????????

          if (value !== undefined && value !== null) {
            // ???????????????????????????????????????????????????????????????
            for (var i = 0, c = comps.length; i < c; i++) {
              // ??????????????????
              var comp = comps[i]; // ??????????????????

              comp.setFormItemValue(value);
            }
          } else {
            // ????????????????????????????????????
            for (var _i = 0, _c = comps.length; _i < _c; _i++) {
              // ??????????????????
              var _comp = comps[_i]; // ??????????????????????????????

              if (_i === 0 && _comp instanceof ax_radio) {
                // ??????????????????
                var radio = _comp; // ???????????????????????????

                radio.setFormItemValue(radio.label); // ????????????

                value = radio.label; // ????????????

                break;
              } // ?????????????????????


              value = _comp.modelValue;
            } // ?????????????????????


            this.$set(this.data, name, value); // ????????????

            if (!hasChanged) hasChanged = true;
          }
        } // ??????????????????????????????

      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      if (eventEnabled && hasChanged) {
        // ????????????????????????
        this.$emit('change', this.data);
      }
    }
    /* -------------------------- TODO: ?????????????????? -------------------------- */

    /**
     * ??????????????????
     */

  }, {
    key: "handleKeypress",
    value: function handleKeypress(evt) {
      // ??????????????????
      if (!evt) return; // ????????????????????????

      var el = app_core_framework_["AxDomUtils"].getDomEventTarget(evt); // ?????????????????????????????????????????? textarea ????????? ctrl + enter ??????????????????

      if (el && el.tagName && el.tagName.toUpperCase() === 'TEXTAREA' && !evt.ctrlKey) return; // ???????????????

      var kc = app_core_framework_["AxDomUtils"].getDomEventKeyCode(evt); // ????????????

      switch (kc) {
        case 13:
          // ??????????????????
          this.$emit('submit'); // ??????

          break;

        default:
          break;
      }
    }
    /**
     * @params customTip ????????????????????????
     * ??????????????????????????????????????????????????????????????????: resolve(data: { [key: string]: any })???????????????????????????????????????: reject(msg: string)
     */

  }, {
    key: "validate",
    value: function validate(customTip) {
      // ??????????????????
      var self = this; // ????????????????????????

      return new Promise(function (resolve, reject) {
        // ??????????????????
        var axLang = ax_com_core.getAxLang(); // ??????????????????????????????

        if (self.data && self.config && self.config.length > 0) {
          // ??????????????????
          var data = {}; // ????????????

          var errs = 0; // ??????????????????

          var _iterator6 = _createForOfIteratorHelper(self.config),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var conf = _step6.value;
              // ????????????????????????
              if (conf.disabled) continue; // ??????????????????

              var name = conf.name; // ??????????????????

              if (!name || name.length === 0) {
                // ???????????????????????????
                reject(customTip || axLang.text('form.config.invalid')); // ??????

                return;
              } // ??????????????????


              var comps = self.axmap.get(name); // ??????????????????

              if (!comps || comps.length === 0) {
                // ??????????????????????????????
                reject(customTip || axLang.text('form.comp.invalid', name)); // ??????

                return;
              } // ?????????????????????
              // const value = self.convertToType(conf.type, self.data[name]);


              var value = self.data[name]; // ??????????????????????????????

              var hasErr = false; // ???????????????????????????????????????

              for (var i = 0, c = comps.length; i < c; i++) {
                // ??????????????????
                var comp = comps[i]; // ?????????????????????????????????????????????????????????????????????

                if (!self.validateValue(conf, comp, value, 'validate')) {
                  // ??????????????????
                  if (!hasErr) hasErr = true; // ??????????????????

                  errs++;
                }
              } // ???????????????????????????????????????????????????


              if (!hasErr) {
                // ?????????????????????
                var tip = self.tipsmap[conf.name]; // ????????????????????????

                if (tip && tip.shown) {
                  // ???????????????????????????
                  tip.shown = false; // ??????????????????

                  self.$set(self.tipsmap, conf.name, tip);
                }
              } // ??????????????????


              data[name] = self.convertToType(conf.type, self.data[name]);
            } // ????????????????????????

          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          if (errs === 0) {
            // ????????????
            resolve(data);
          } else {
            // ?????????????????????????????????
            reject(customTip || axLang.text('form.vlidate.failed'));
          }
        } else {
          // ???????????????????????????
          reject(customTip || axLang.text('form.config.invalid'));
        }
      });
    }
    /**
     * ????????????????????????????????????
     */

  }, {
    key: "hideValidateTips",
    value: function hideValidateTips() {
      // ??????????????????????????????
      if (this.config && this.config.length > 0) {
        // ??????????????????
        var _iterator7 = _createForOfIteratorHelper(this.config),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var conf = _step7.value;
            // ?????????????????????
            var tip = this.tipsmap[conf.name]; // ????????????????????????

            if (tip && tip.shown) {
              // ???????????????????????????
              tip.shown = false; // ??????????????????

              this.$set(this.tipsmap, conf.name, tip);
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    }
    /**
     * ??????????????????????????????
     */

  }, {
    key: "convertToType",
    value: function convertToType(type, value) {
      // ???????????????
      var ret; // ??????????????????

      if ((type & ax_com_core.FormValueType.ARRAY) === ax_com_core.FormValueType.ARRAY) {
        // ??????????????????
        if (value === undefined || value === null) return null; // ?????????????????????

        if (value instanceof Array) {
          // ??????????????????????????? ARRAY ??????????????????????????????????????????
          var stype = type ^ ax_com_core.FormValueType.ARRAY; // ??????????????????

          for (var index = 0; index < value.length; index++) {
            // ??????????????????
            value[index] = this.convertToType(stype, value[index]);
          } // ????????????


          return value;
        } else {
          // ??????????????????
          return null;
        }
      } else if ((type & ax_com_core.FormValueType.STRING) === ax_com_core.FormValueType.STRING) {
        // ??????????????????
        ret = value === undefined || value === null ? null : value.replace(/^\s*/, '') + '';
      } else if ((type & ax_com_core.FormValueType.INT) === ax_com_core.FormValueType.INT) {
        // ???????????????
        ret = parseInt(value + '', 10); // ??????????????????

        if (isNaN(ret)) ret = 0;
      } else if ((type & ax_com_core.FormValueType.FLOAT) === ax_com_core.FormValueType.FLOAT) {
        // ??????????????????
        ret = parseFloat(value + ''); // ??????????????????

        if (isNaN(ret)) ret = 0;
      } else if ((type & ax_com_core.FormValueType.DOUBLE) === ax_com_core.FormValueType.DOUBLE) {
        // ??????????????????
        ret = +value; // ??????????????????

        if (isNaN(ret)) ret = 0;
      } else if ((type & ax_com_core.FormValueType.BOOLEAN) === ax_com_core.FormValueType.BOOLEAN) {
        // ???????????????
        if (value === undefined || value === null) {
          ret = false;
        } else if (typeof value === 'string') {
          ret = value.toUpperCase();
          ret = ret === 'TRUE' || ret === 'Y' || ret === '1';
        } else {
          ret = !!value;
        }
      } else if ((type & ax_com_core.FormValueType.DATE) === ax_com_core.FormValueType.DATE) {
        // ????????????
        ret = external_dayjs_default()(value).toDate();
      } else {
        // ????????????
        ret = value;
      } // ????????????


      return ret;
    }
    /**
     * ????????????????????????
     */

  }, {
    key: "validateValue",
    value: function validateValue(conf, comp, value, eventType) {
      // ???????????????????????????
      if (conf.disabled) return true; // ????????????????????????????????????

      if (typeof conf.validator === 'function') {
        // ??????????????????????????????
        var vres = conf.validator(value, conf, comp, eventType); // ??????????????????

        if (vres) {
          // ???????????????????????????????????????
          if (vres.passed) {
            // ???????????????,??????tooltip???????????????
            if (this.tooltip) {
              // ??????????????????
              this.$emit('showTooltip', false);
            } // ????????????


            return comp.validatePassed = true;
          } else {
            // ?????????????????????????????????
            var tip = this.tipsmap[conf.name]; // ????????????????????????

            if (tip) {
              // ????????????????????????
              var pos = app_core_framework_["AxDomUtils"].getDomPosition(comp.$el, this.$el); // ???????????????????????????

              tip.top = pos.top + (comp.$el ? comp.$el.offsetHeight : 0) + 2;
              tip.left = pos.left;
              tip.message = vres.message;
              tip.shown = true; // ??????????????????

              this.$set(this.tipsmap, conf.name, tip);
            } // ????????????


            return comp.validatePassed = false;
          }
        }
      } // ??????????????????????????????????????????


      if ((conf.type & ax_com_core.FormValueType.ARRAY) === ax_com_core.FormValueType.ARRAY) {
        // ????????????????????????
        if (conf.required && !(value && value instanceof Array && value.length > 0)) {
          // ??????????????????
          this.showTypeErrMessage(comp, 'form.array.required', conf); // ????????????

          return comp.validatePassed = false;
        } // ?????????????????????????????????


        for (var index = 0; index < value.length; index++) {
          // ??????????????????
          var v = value[index]; // ????????????

          if (!this.validateType(conf.type ^ ax_com_core.FormValueType.ARRAY, conf, comp, v)) {
            // ????????????
            return comp.validatePassed = false;
          }
        } // ????????????


        return comp.validatePassed = true;
      } else {
        // ?????????????????????????????????
        return comp.validatePassed = this.validateType(conf.type, conf, comp, value);
      }
    }
    /**
     * ??????????????????????????????
     */

  }, {
    key: "validateType",
    value: function validateType(type, conf, comp, value) {
      // ????????????????????????????????????????????????????????????  HACK: ?????????????????? ???
      if (!conf.required && !value) {
        return true;
      } // ??????????????????????????????????????????????????????


      if (!this.validateInput(type, conf, comp, value)) {
        return false;
      } // ??????????????????


      value = this.convertToType(conf.type, value); // ?????????????????????????????????????????????

      if ((type & ax_com_core.FormValueType.BOOLEAN) === ax_com_core.FormValueType.BOOLEAN || (type & ax_com_core.FormValueType.ARRAY) === ax_com_core.FormValueType.ARRAY) return true; // ????????????

      if ((type & ax_com_core.FormValueType.STRING) === ax_com_core.FormValueType.STRING || (type & ax_com_core.FormValueType.PASSWORD) === ax_com_core.FormValueType.PASSWORD) {
        // ????????????????????????????????????
        if (conf.required && !value) {
          // ?????????????????????
          this.showTypeErrMessage(comp, 'form.string.required', conf); // ????????????

          return false;
        } else if (!this.checkNumber(app_core_framework_["AxStringUtils"].getBytesLength(value), conf.min, conf.max)) {
          // ?????????????????????????????????
          var msg = conf.min !== undefined && conf.max !== undefined ? 'form.string.invalid' : conf.min !== undefined ? 'form.string.min.invalid' : 'form.string.max.invalid'; // ??????????????????

          this.showTypeErrMessage(comp, msg, conf); // ????????????

          return false;
        }
      } else if ((type & ax_com_core.FormValueType.DATE) === ax_com_core.FormValueType.DATE) {
        // ?????????????????????????????????
        if (conf.required && value === undefined || value === null) {
          // ?????????????????????
          this.showTypeErrMessage(comp, 'form.date.required', conf); // ????????????

          return false;
        } else if (!this.checkNumber(value === undefined || value === null ? 0 : value.valueOf(), conf.min, conf.max)) {
          // ?????????????????????????????????
          var _msg = conf.min !== undefined && conf.max !== undefined ? 'form.date.invalid' : conf.min !== undefined ? 'form.date.min.invalid' : 'form.date.max.invalid'; // ??????????????????


          this.showTypeErrMessage(comp, _msg, conf); // ????????????

          return false;
        }
      } else if ((type & ax_com_core.FormValueType.FLOAT) === ax_com_core.FormValueType.FLOAT || (type & ax_com_core.FormValueType.DOUBLE) === ax_com_core.FormValueType.DOUBLE) {
        // ?????????
        if (conf.digits || conf.digits === 0) {
          // ???????????????
          var reg = new RegExp("^([+-]?)[0-9]+([.][0-9]{0,".concat(conf.digits, "})?$"));

          if (!reg.test(value)) {
            // ??????????????????
            this.showTypeErrMessage(comp, 'form.num.digits.invalid', conf); // ????????????

            return false;
          }
        } else if (!this.checkNumber(value, conf.min, conf.max)) {
          // ?????????????????????????????????
          var _msg2 = conf.min !== undefined && conf.max !== undefined ? 'form.num.invalid' : conf.min !== undefined ? 'form.num.min.invalid' : 'form.num.max.invalid'; // ??????????????????


          this.showTypeErrMessage(comp, _msg2, conf); // ????????????

          return false;
        }
      } else {
        // ??????????????????????????????????????????
        if (!this.checkNumber(value, conf.min, conf.max)) {
          // ?????????????????????????????????
          var _msg3 = conf.min !== undefined && conf.max !== undefined ? 'form.num.invalid' : conf.min !== undefined ? 'form.num.min.invalid' : 'form.num.max.invalid'; // ??????????????????


          this.showTypeErrMessage(comp, _msg3, conf); // ????????????

          return false;
        }
      } // ??????????????????


      return true;
    }
    /**
     * ???????????????????????????
     * @param type
     * @param conf
     * @param comp
     * @param value
     */

  }, {
    key: "validateInput",
    value: function validateInput(type, conf, comp, value) {
      if ((type & ax_com_core.FormValueType.FLOAT) === ax_com_core.FormValueType.FLOAT || (type & ax_com_core.FormValueType.DOUBLE) === ax_com_core.FormValueType.DOUBLE) {
        // ???????????????????????????
        if (!/^[+\-]?\d+(\.\d+)?$/.test("".concat(value))) {
          // ?????????????????????????????????
          var msg = conf.min !== undefined && conf.max !== undefined ? 'form.num.invalid' : conf.min !== undefined ? 'form.num.min.invalid' : 'form.num.max.invalid'; // ??????????????????

          this.showTypeErrMessage(comp, msg, conf); // ????????????

          return false;
        }
      } else if ((type & ax_com_core.FormValueType.INT) === ax_com_core.FormValueType.INT) {
        // ???????????????????????????
        if (!/^[+\-]?\d+$/.test("".concat(value))) {
          // ?????????????????????????????????
          var _msg4 = conf.min !== undefined && conf.max !== undefined ? 'form.num.invalid' : conf.min !== undefined ? 'form.num.min.invalid' : 'form.num.max.invalid'; // ??????????????????


          this.showTypeErrMessage(comp, _msg4, conf); // ????????????

          return false;
        }
      }

      return true;
    }
    /**
     * ????????????????????????????????????????????????
     * @param {number} num ??????????????????
     * @param {number} min ?????????
     * @param {number} max ?????????
     * @returns {boolean} ????????????
     */

  }, {
    key: "checkNumber",
    value: function checkNumber(num, min, max) {
      // ??????????????????
      if (num === undefined || isNaN(num)) return false; // ??????????????????????????????

      if (min !== undefined && !isNaN(min)) {
        // ???????????????????????????????????????????????????
        if (num < min) return false;
      } // ??????????????????????????????


      if (max !== undefined && !isNaN(max)) {
        // ??????????????????????????????????????????????????????
        if (num > max) return false;
      } // ?????????????????????????????????


      return true;
    }
    /**
     * ???????????????????????????????????????
     */

  }, {
    key: "showTypeErrMessage",
    value: function showTypeErrMessage(comp, message, conf) {
      // ????????????????????????
      if (!this.$el || !comp.$el) return; // ????????????????????????0 - ?????????1 - ????????????2 - ????????????3 - ??????????????????4 - ???????????????
      // ???????????????

      var mins = conf.min !== undefined && !isNaN(conf.min) ? this.getDateString(conf, conf.min) : ''; // ???????????????

      var maxs = conf.max !== undefined && !isNaN(conf.max) ? this.getDateString(conf, conf.max) : ''; // ??????????????????

      var axLang = ax_com_core.getAxLang(); // ??????????????????

      var text = axLang.text(message, conf.text.toLowerCase(), mins, maxs); // ???????????????????????????????????????

      if (conf.exreg && conf.exreg.length > 0) {
        // ???????????????????????????
        text = text + this.getExRegText(conf.exreg);
      } else if (conf.max !== undefined && !isNaN(conf.max) && (conf.type & ax_com_core.FormValueType.PASSWORD) === 0) {
        // ??????????????????????????????????????????
        text = text + axLang.text('form.string.miltiword', conf.max); // FIX: /2 ????????? ,?????? ??????
      } // ??????????????????????????????


      if (conf.digits || conf.digits === 0) {
        // ???????????????????????????
        text = axLang.text(message, conf.digits);
      } // ????????????????????????????????????????????????


      if (conf.spText) {
        text = conf.spText;
      } // ?????????????????????


      var tip = this.tipsmap[conf.name]; // ????????????????????????

      if (tip) {
        // ????????????????????????
        var pos = app_core_framework_["AxDomUtils"].getDomPosition(comp.$el, this.$el); // ???????????????????????????

        tip.top = pos.top + (comp.$el ? comp.$el.offsetHeight : 0);
        tip.left = pos.left;
        tip.message = text;
        tip.shown = true; // ??????????????????

        if (this.tooltip) {
          // ????????????????????????????????????????????????
          this.$emit('showTooltip', true, tip);
        } else {
          this.$set(this.tipsmap, conf.name, tip);
        }
      }
    }
    /**
     * ??????????????????????????????????????????????????????????????????????????????
     */

  }, {
    key: "getDateString",
    value: function getDateString(conf, value) {
      // ???????????????????????????
      if ((conf.type & ax_com_core.FormValueType.DATE) === ax_com_core.FormValueType.DATE) {
        // ??????????????????????????????
        return external_dayjs_default()(new Date(value)).format('yyyy-mm-dd');
      } // ??????????????????


      return value + '';
    }
    /**
     * ?????????????????????????????????????????????
     */

  }, {
    key: "getExRegText",
    value: function getExRegText(regstr) {
      // ??????????????????
      var axLang = ax_com_core.getAxLang(); // ?????????????????????

      var sps = axLang.text('form.reg.separator'); // ??????????????????

      var spSymbol = /[\[\]\^\(\)\*]/g;
      var isInclude = (regstr.match(spSymbol) || []).includes('^');
      var note = regstr.replace(spSymbol, '');
      note = note.replace(/\\w/g, axLang.text('form.reg.words') + sps);
      note = note.replace(/\\d/g, axLang.text('form.reg.numbers') + sps);
      note = note.replace(/\\s/g, axLang.text('form.reg.spaces') + sps);
      note = note.replace(/\\/g, sps);
      note = note.replace(new RegExp('(' + sps + '){2,}', 'img'), sps);
      note = note.replace(new RegExp('(' + sps + ')+$', 'img'), ''); // ?????????????????????????????????????????? p.s. ?????????????????????

      return axLang.text(isInclude ? 'form.reg.noteInclude' : 'form.reg.noteExclude', note);
    }
    /* -------------------------- TODO: ?????????????????? -------------------------- */

    /**
     * ??????????????????
     */

  }, {
    key: "initConfig",
    value: function initConfig() {
      // ????????????
      this.cmap.clear(); // ????????????

      this.tipsmap = {}; // ????????????????????????

      if (!this.config || this.config.length === 0) return; // ??????????????????

      var _iterator8 = _createForOfIteratorHelper(this.config),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var conf = _step8.value;
          // ???????????????
          this.cmap.set(conf.name, conf); // ??????????????????????????????

          this.$set(this.tipsmap, conf.name, {
            top: 0,
            left: 0,
            message: '',
            shown: false
          });
        } // ??????????????????

      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      this.refreshForm();
    }
  }]);

  return AxForm;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {};
  }
})], formvue_type_script_lang_ts_AxForm.prototype, "data", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], formvue_type_script_lang_ts_AxForm.prototype, "config", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], formvue_type_script_lang_ts_AxForm.prototype, "showTip", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], formvue_type_script_lang_ts_AxForm.prototype, "tooltip", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'form_table',
  type: String
})], formvue_type_script_lang_ts_AxForm.prototype, "presetStyle", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('config')], formvue_type_script_lang_ts_AxForm.prototype, "initConfig", null);

formvue_type_script_lang_ts_AxForm = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // ?????? v-model ????????????????????????
    prop: 'data',
    event: 'change'
  },
  components: {}
})], formvue_type_script_lang_ts_AxForm);
/* harmony default export */ var formvue_type_script_lang_ts_ = (formvue_type_script_lang_ts_AxForm);
// CONCATENATED MODULE: ./packages/ax-form/src/form.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_formvue_type_script_lang_ts_ = (formvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-form/src/form.vue





/* normalize component */

var form_component = normalizeComponent(
  src_formvue_type_script_lang_ts_,
  formvue_type_template_id_6a2057b0_render,
  formvue_type_template_id_6a2057b0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var form_api; }
form_component.options.__file = "packages/ax-form/src/form.vue"
/* harmony default export */ var src_form = (form_component.exports);
// CONCATENATED MODULE: ./packages/ax-form/index.ts



addInstall(src_form.name, src_form);
/* harmony default export */ var ax_form = (src_form);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-header/src/header.vue?vue&type=template&id=6e6dac08&
var headervue_type_template_id_6e6dac08_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ax_header",
      class: [{ ax_header_border: !_vm.hideBorder }, "ax_header_" + _vm.mode],
      style: { "background-color": _vm.bgColor, width: _vm.width }
    },
    [
      _c("div", { staticClass: "ax_header_left" }, [
        !_vm.hideBack
          ? _c(
              "div",
              { staticClass: "ax_header_back", on: { click: _vm.handleBack } },
              [
                _vm.$slots.left
                  ? [_vm._t("left")]
                  : [_c("i", { class: [_vm.icon || "i_cc i_cc_left_circle"] })]
              ],
              2
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "ax_header_title",
            class: { is_clickable: _vm.titleClickable },
            on: { click: _vm.handleBackTitle }
          },
          [_vm._t("default")],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "ax_header_right" }, [_vm._t("right")], 2)
    ]
  )
}
var headervue_type_template_id_6e6dac08_staticRenderFns = []
headervue_type_template_id_6e6dac08_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-header/src/header.vue?vue&type=template&id=6e6dac08&

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-header/src/header.vue?vue&type=script&lang=ts&











var headervue_type_script_lang_ts_AxHeader = /*#__PURE__*/function (_Vue) {
  _inherits(AxHeader, _Vue);

  var _super = _createSuper(AxHeader);

  function AxHeader() {
    var _this;

    _classCallCheck(this, AxHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "mode", void 0);

    _defineProperty(_assertThisInitialized(_this), "icon", void 0);

    _defineProperty(_assertThisInitialized(_this), "hideBack", void 0);

    _defineProperty(_assertThisInitialized(_this), "hideBorder", void 0);

    _defineProperty(_assertThisInitialized(_this), "bgColor", void 0);

    _defineProperty(_assertThisInitialized(_this), "width", void 0);

    _defineProperty(_assertThisInitialized(_this), "titleClick", void 0);

    return _this;
  }

  _createClass(AxHeader, [{
    key: "handleBack",
    value:
    /**
     * ????????????????????????
     */
    function handleBack(event) {
      return event;
    }
    /**
     * ?????????????????????
     */

  }, {
    key: "titleClickable",
    get: function get() {
      if (this.mode === ax_com_core.HeaderMode.FIRST && this.titleClick === undefined) {
        return true;
      } else {
        return !!this.titleClick;
      }
    }
    /**
     * ???????????????
     */

  }, {
    key: "handleBackTitle",
    value: function handleBackTitle(event) {
      if (this.titleClickable) {
        this.handleBack(event);
      }
    }
  }]);

  return AxHeader;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ax_com_core.HeaderMode.FIRST,
  type: String
})], headervue_type_script_lang_ts_AxHeader.prototype, "mode", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], headervue_type_script_lang_ts_AxHeader.prototype, "icon", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], headervue_type_script_lang_ts_AxHeader.prototype, "hideBack", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], headervue_type_script_lang_ts_AxHeader.prototype, "hideBorder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined,
  type: String
})], headervue_type_script_lang_ts_AxHeader.prototype, "bgColor", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '100%',
  type: String
})], headervue_type_script_lang_ts_AxHeader.prototype, "width", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined,
  type: Boolean
})], headervue_type_script_lang_ts_AxHeader.prototype, "titleClick", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('back')], headervue_type_script_lang_ts_AxHeader.prototype, "handleBack", null);

headervue_type_script_lang_ts_AxHeader = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {}
})], headervue_type_script_lang_ts_AxHeader);
/* harmony default export */ var headervue_type_script_lang_ts_ = (headervue_type_script_lang_ts_AxHeader);
// CONCATENATED MODULE: ./packages/ax-header/src/header.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_headervue_type_script_lang_ts_ = (headervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-header/src/header.vue





/* normalize component */

var header_component = normalizeComponent(
  src_headervue_type_script_lang_ts_,
  headervue_type_template_id_6e6dac08_render,
  headervue_type_template_id_6e6dac08_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var header_api; }
header_component.options.__file = "packages/ax-header/src/header.vue"
/* harmony default export */ var header = (header_component.exports);
// CONCATENATED MODULE: ./packages/ax-header/index.ts



addInstall(header.name, header);
/* harmony default export */ var ax_header = (header);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-input/src/input.vue?vue&type=template&id=3a45ff88&
var inputvue_type_template_id_3a45ff88_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ax_input",
      class: [
        { validate_passed: _vm.validatePassed === true },
        { validate_failed: _vm.validatePassed === false },
        "ax_input_" + _vm.type
      ]
    },
    [
      _c("el-input", {
        ref: "el-input",
        attrs: {
          name: _vm.name,
          type:
            _vm.type === _vm.inputType.PASSWORD
              ? _vm.passwordShow
                ? _vm.inputType.TEXT
                : _vm.type
              : _vm.type,
          maxlength: _vm.maxlength,
          minlength: _vm.minlength,
          placeholder: _vm.placeholderStr,
          clearable: _vm.clearable,
          disabled: _vm.disabled,
          "prefix-icon": _vm.leftIcon,
          "suffix-icon": _vm.rightIcon,
          rows: _vm.rows,
          autosize: _vm.autosize,
          readonly: _vm.readonly,
          resize: _vm.resize,
          autocomplete: "on",
          autofocus: _vm.autofocus,
          "popper-append-to-body": _vm.popperAppendToBody,
          "trigger-on-focus": "",
          "validate-event": ""
        },
        on: {
          focus: _vm.handleFocus,
          blur: _vm.handleBlur,
          change: _vm.handleChange
        },
        scopedSlots: _vm._u(
          [
            {
              key: "prepend",
              fn: function() {
                return [_vm._t("outer-left")]
              },
              proxy: true
            },
            {
              key: "prefix",
              fn: function() {
                return [_vm._t("inner-left")]
              },
              proxy: true
            },
            {
              key: "suffix",
              fn: function() {
                return [
                  _vm._t("inner-right"),
                  _vm._v(" "),
                  _vm.type === _vm.inputType.PASSWORD
                    ? [
                        _c("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.passwordShow,
                              expression: "passwordShow"
                            }
                          ],
                          staticClass: "icon_inner i_cc i_cc_kejian",
                          on: {
                            click: function($event) {
                              return _vm.changePasswordShow(false)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.passwordShow,
                              expression: "!passwordShow"
                            }
                          ],
                          staticClass: "icon_inner i_cc i_cc_bukejian",
                          on: {
                            click: function($event) {
                              return _vm.changePasswordShow(true)
                            }
                          }
                        })
                      ]
                    : _vm._e()
                ]
              },
              proxy: true
            },
            {
              key: "append",
              fn: function() {
                return [_vm._t("outer-right")]
              },
              proxy: true
            }
          ],
          null,
          true
        ),
        model: {
          value: _vm.modelValue,
          callback: function($$v) {
            _vm.modelValue = $$v
          },
          expression: "modelValue"
        }
      })
    ],
    1
  )
}
var inputvue_type_template_id_3a45ff88_staticRenderFns = []
inputvue_type_template_id_3a45ff88_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-input/src/input.vue?vue&type=template&id=3a45ff88&

// EXTERNAL MODULE: external "element-ui/lib/input"
var input_ = __webpack_require__(33);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor.js"
var es_number_constructor_js_ = __webpack_require__(17);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-input/src/input.vue?vue&type=script&lang=ts&














var inputvue_type_script_lang_ts_AxInput = /*#__PURE__*/function (_AxUIComponent) {
  _inherits(AxInput, _AxUIComponent);

  var _super = _createSuper(AxInput);

  function AxInput() {
    var _this;

    _classCallCheck(this, AxInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "maxlength", void 0);

    _defineProperty(_assertThisInitialized(_this), "autofocus", void 0);

    _defineProperty(_assertThisInitialized(_this), "minlength", void 0);

    _defineProperty(_assertThisInitialized(_this), "leftIcon", void 0);

    _defineProperty(_assertThisInitialized(_this), "rightIcon", void 0);

    _defineProperty(_assertThisInitialized(_this), "rows", void 0);

    _defineProperty(_assertThisInitialized(_this), "autosize", void 0);

    _defineProperty(_assertThisInitialized(_this), "readonly", void 0);

    _defineProperty(_assertThisInitialized(_this), "resize", void 0);

    _defineProperty(_assertThisInitialized(_this), "popperAppendToBody", void 0);

    _defineProperty(_assertThisInitialized(_this), "passwordShow", false);

    _defineProperty(_assertThisInitialized(_this), "inputType", InputType);

    return _this;
  }

  _createClass(AxInput, [{
    key: "placeholderStr",
    get:
    /**
     * placeholder?????????
     * @returns {string}
     */
    function get() {
      return this.placeholder === undefined ? UILang.t('input.placeholder') : this.placeholder;
    }
    /**
     * ???????????????
     * @param show
     */

  }, {
    key: "changePasswordShow",
    value: function changePasswordShow(show) {
      this.passwordShow = show;
    }
    /**
     * ??????????????????
     */

  }, {
    key: "focus",
    value: function focus() {
      // ?????????????????????????????????
      this.$refs['el-input'].focus();
      this.$refs['el-input'].select(); // ??????????????????

      return this;
    }
    /**
     * ??????????????????
     */

  }, {
    key: "blur",
    value: function blur() {
      // ?????????????????????????????????
      this.$refs['el-input'].blur();
    }
    /**
     * ??????????????????
     * @param event
     */

  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      this.$emit('focus', event);
    }
    /**
     * ??????????????????
     * @param event
     */

  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      this.$emit('blur', event);
    }
    /**
     * ??????????????????
     * @param event
     */

  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.$emit('change', event);
    }
  }]);

  return AxInput;
}(core_AxUIComponent);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: InputType.TEXT,
  type: String
})], inputvue_type_script_lang_ts_AxInput.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], inputvue_type_script_lang_ts_AxInput.prototype, "maxlength", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], inputvue_type_script_lang_ts_AxInput.prototype, "autofocus", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], inputvue_type_script_lang_ts_AxInput.prototype, "minlength", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], inputvue_type_script_lang_ts_AxInput.prototype, "leftIcon", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], inputvue_type_script_lang_ts_AxInput.prototype, "rightIcon", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true
})], inputvue_type_script_lang_ts_AxInput.prototype, "clearable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined,
  type: Number
})], inputvue_type_script_lang_ts_AxInput.prototype, "rows", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], inputvue_type_script_lang_ts_AxInput.prototype, "autosize", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], inputvue_type_script_lang_ts_AxInput.prototype, "readonly", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ResizeType.NONE
})], inputvue_type_script_lang_ts_AxInput.prototype, "resize", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], inputvue_type_script_lang_ts_AxInput.prototype, "placeholder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], inputvue_type_script_lang_ts_AxInput.prototype, "popperAppendToBody", void 0);

inputvue_type_script_lang_ts_AxInput = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // ?????? v-model ????????????????????????
    prop: 'data',
    event: 'change'
  },
  components: _defineProperty({}, input_default.a.name, input_default.a)
})], inputvue_type_script_lang_ts_AxInput);
/* harmony default export */ var inputvue_type_script_lang_ts_ = (inputvue_type_script_lang_ts_AxInput);
// CONCATENATED MODULE: ./packages/ax-input/src/input.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_inputvue_type_script_lang_ts_ = (inputvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-input/src/input.vue





/* normalize component */

var input_component = normalizeComponent(
  src_inputvue_type_script_lang_ts_,
  inputvue_type_template_id_3a45ff88_render,
  inputvue_type_template_id_3a45ff88_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var input_api; }
input_component.options.__file = "packages/ax-input/src/input.vue"
/* harmony default export */ var src_input = (input_component.exports);
// CONCATENATED MODULE: ./packages/ax-input/index.ts



addInstall(src_input.name, src_input);
/* harmony default export */ var ax_input = (src_input);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-link/src/link.vue?vue&type=template&id=6548b0e8&
var linkvue_type_template_id_6548b0e8_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    _vm._b(
      {
        ref: "ax_link",
        class: [
          "ax_link",
          "ax_link_" + _vm.type,
          _vm.disabled && "is_disabled",
          _vm.underline && !_vm.disabled && "is_underline"
        ],
        attrs: { href: _vm.disabled ? null : _vm.href },
        on: { click: _vm.handleClick }
      },
      "a",
      _vm.$attrs,
      false
    ),
    [
      _vm.icon
        ? _c("i", { staticClass: "ax_link_icon", class: _vm.icon })
        : _vm._e(),
      _vm._v(" "),
      _vm.$slots.default
        ? _c("span", { staticClass: "ax_link_inner" }, [_vm._t("default")], 2)
        : _vm._e()
    ]
  )
}
var linkvue_type_template_id_6548b0e8_staticRenderFns = []
linkvue_type_template_id_6548b0e8_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-link/src/link.vue?vue&type=template&id=6548b0e8&

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-link/src/link.vue?vue&type=script&lang=ts&











var linkvue_type_script_lang_ts_AxLink = /*#__PURE__*/function (_Vue) {
  _inherits(AxLink, _Vue);

  var _super = _createSuper(AxLink);

  function AxLink() {
    var _this;

    _classCallCheck(this, AxLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "refLink", void 0);

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "icon", void 0);

    _defineProperty(_assertThisInitialized(_this), "disabled", void 0);

    _defineProperty(_assertThisInitialized(_this), "underline", void 0);

    _defineProperty(_assertThisInitialized(_this), "href", void 0);

    return _this;
  }

  _createClass(AxLink, [{
    key: "focus",
    value: //#endregion
    //#region ????????????

    /**
     * ??????????????????
     */
    function focus() {
      // ??????????????? HTML ??????
      if (this.refLink instanceof external_vue_property_decorator_["Vue"]) {
        // ??????????????????
        var e = this.refLink.$el; // ??????????????? HTML ??????

        if (e && e instanceof HTMLElement) {
          // ????????????
          e.focus();
        }
      } // ??????????????????


      return this;
    } //#endregion
    //#region ????????????

    /**
     * ????????????
     */

  }, {
    key: "handleClick",
    value: function handleClick(event) {
      if (!this.disabled && !this.href) {
        this.click(event);
      }
    } //#endregion
    //#region Emit

    /**
     * ??????????????????
     */

  }, {
    key: "click",
    value: function click(event) {
      return event;
    }
  }]);

  return AxLink;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Ref"])('ax_link')], linkvue_type_script_lang_ts_AxLink.prototype, "refLink", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ax_com_core.LinkType.DEFAULT
})], linkvue_type_script_lang_ts_AxLink.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], linkvue_type_script_lang_ts_AxLink.prototype, "icon", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], linkvue_type_script_lang_ts_AxLink.prototype, "disabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], linkvue_type_script_lang_ts_AxLink.prototype, "underline", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], linkvue_type_script_lang_ts_AxLink.prototype, "href", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])()], linkvue_type_script_lang_ts_AxLink.prototype, "click", null);

linkvue_type_script_lang_ts_AxLink = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {}
})], linkvue_type_script_lang_ts_AxLink);
/* harmony default export */ var linkvue_type_script_lang_ts_ = (linkvue_type_script_lang_ts_AxLink);
// CONCATENATED MODULE: ./packages/ax-link/src/link.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_linkvue_type_script_lang_ts_ = (linkvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-link/src/link.vue





/* normalize component */

var link_component = normalizeComponent(
  src_linkvue_type_script_lang_ts_,
  linkvue_type_template_id_6548b0e8_render,
  linkvue_type_template_id_6548b0e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var link_api; }
link_component.options.__file = "packages/ax-link/src/link.vue"
/* harmony default export */ var src_link = (link_component.exports);
// CONCATENATED MODULE: ./packages/ax-link/index.ts



addInstall(src_link.name, src_link);
/* harmony default export */ var ax_link = (src_link);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-navigator/src/navigator.vue?vue&type=template&id=610beee2&
var navigatorvue_type_template_id_610beee2_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ax_navigator" },
    _vm._l(_vm.data, function(item, index) {
      return _c(
        "div",
        { key: index, staticClass: "navigator_item" },
        [
          _vm._t(
            "default",
            function() {
              return [
                index !== 0 ? _c("i", { class: _vm.icon }) : _vm._e(),
                _vm._v(" "),
                item.path && !item.link
                  ? _c(
                      "router-link",
                      {
                        staticClass: "navigator_link",
                        attrs: { to: item.path }
                      },
                      [
                        _vm._t(
                          "default",
                          function() {
                            return [_c("span", [_vm._v(_vm._s(item.text))])]
                          },
                          { item: item }
                        )
                      ],
                      2
                    )
                  : !item.path && item.link
                  ? _c(
                      "a",
                      {
                        staticClass: "navigator_link",
                        on: {
                          click: function($event) {
                            return _vm.linkClick(item)
                          }
                        }
                      },
                      [_vm._v("\n        " + _vm._s(item.text) + "\n      ")]
                    )
                  : _c("span", { staticClass: "navigator_text" }, [
                      _vm._v(_vm._s(item.text))
                    ])
              ]
            },
            { item: item }
          )
        ],
        2
      )
    }),
    0
  )
}
var navigatorvue_type_template_id_610beee2_staticRenderFns = []
navigatorvue_type_template_id_610beee2_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-navigator/src/navigator.vue?vue&type=template&id=610beee2&

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-navigator/src/navigator.vue?vue&type=script&lang=ts&










var navigatorvue_type_script_lang_ts_AxNavigator = /*#__PURE__*/function (_Vue) {
  _inherits(AxNavigator, _Vue);

  var _super = _createSuper(AxNavigator);

  function AxNavigator() {
    var _this;

    _classCallCheck(this, AxNavigator);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "data", void 0);

    _defineProperty(_assertThisInitialized(_this), "icon", void 0);

    return _this;
  }

  _createClass(AxNavigator, [{
    key: "linkClick",
    value:
    /**
     * link?????????????????????
     * @param item
     * @returns {AxComCore.INavigatorData}
     */
    function linkClick(item) {
      return item;
    }
  }]);

  return AxNavigator;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], navigatorvue_type_script_lang_ts_AxNavigator.prototype, "data", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'i_cc i_cc_triangle_right_line',
  type: String
})], navigatorvue_type_script_lang_ts_AxNavigator.prototype, "icon", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('click')], navigatorvue_type_script_lang_ts_AxNavigator.prototype, "linkClick", null);

navigatorvue_type_script_lang_ts_AxNavigator = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {}
})], navigatorvue_type_script_lang_ts_AxNavigator);
/* harmony default export */ var navigatorvue_type_script_lang_ts_ = (navigatorvue_type_script_lang_ts_AxNavigator);
// CONCATENATED MODULE: ./packages/ax-navigator/src/navigator.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_navigatorvue_type_script_lang_ts_ = (navigatorvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-navigator/src/navigator.vue





/* normalize component */

var navigator_component = normalizeComponent(
  src_navigatorvue_type_script_lang_ts_,
  navigatorvue_type_template_id_610beee2_render,
  navigatorvue_type_template_id_610beee2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var navigator_api; }
navigator_component.options.__file = "packages/ax-navigator/src/navigator.vue"
/* harmony default export */ var src_navigator = (navigator_component.exports);
// CONCATENATED MODULE: ./packages/ax-navigator/index.ts



addInstall(src_navigator.name, src_navigator);
/* harmony default export */ var ax_navigator = (src_navigator);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-panels/src/panels.vue?vue&type=template&id=59ad1ac8&
var panelsvue_type_template_id_59ad1ac8_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "groups",
      staticClass: "ax_panels",
      class: [
        { bottom_top: _vm.type === "bottom_top" },
        { left_right: _vm.type === "left_right" },
        { right_left: _vm.type === "right_left" },
        { top_bottom: _vm.type === "top_bottom" }
      ]
    },
    [_vm._t("default")],
    2
  )
}
var panelsvue_type_template_id_59ad1ac8_staticRenderFns = []
panelsvue_type_template_id_59ad1ac8_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-panels/src/panels.vue?vue&type=template&id=59ad1ac8&

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-panels/src/panels.vue?vue&type=script&lang=ts&















var panelsvue_type_script_lang_ts_AxPanels = /*#__PURE__*/function (_Vue) {
  _inherits(AxPanels, _Vue);

  var _super = _createSuper(AxPanels);

  function AxPanels() {
    var _this;

    _classCallCheck(this, AxPanels);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "items", []);

    _defineProperty(_assertThisInitialized(_this), "views", new Map());

    _defineProperty(_assertThisInitialized(_this), "current", undefined);

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "index", void 0);

    return _this;
  }

  _createClass(AxPanels, [{
    key: "watchCurrentTab",
    value: function watchCurrentTab(val) {
      // ????????????????????? vue
      this.setVisible(this.views.get(val));
    }
    /**
     * ?????? panel ????????????
     */

  }, {
    key: "getData",
    value: function getData() {
      return this.items;
    }
    /**
     * ??????????????????
     */

  }, {
    key: "mounted",
    value: function mounted() {
      // ??????????????????
      var children = this.$el.children; // ?????? html ??????

      for (var i = 0; i < children.length; i++) {
        // ????????????
        var target = null;
        var source = children[i];

        if (source.className === 'control_panel') {
          target = source;
        } else {
          if (source.childNodes[0].className === 'control_panel') {
            // ????????????????????????,?????? control_panel ,????????????????????????!
            target = source.childNodes[0];
          } else {
            // ????????????????????????,?????????????????????
            return;
          }
        } // ????????????


        var key = target.getAttribute('symbol') || i;
        var label = target.getAttribute('label') || '' + i; // ????????????????????????

        this.items.push({
          key: key,
          label: label
        }); // ???????????????????????????

        this.views.set(key, target); // ??????????????????

        if (this.index === key) {
          // ????????????????????? vue
          this.setVisible(target);
        } else {
          // ???????????? vue
          target.style.display = 'none';
        }
      }
    }
    /**
     * ????????????????????????
     */

  }, {
    key: "setVisible",
    value: function setVisible(view) {
      if (!view) return; // ???????????????

      if (this.current) this.current.style.display = 'none'; // ????????????

      this.current = view; // ???????????? vue

      view.style.display = ''; // ????????????

      app_core_framework_["AxDomUtils"].dispatchDomEvent(view, ['panel_changes']);
    }
  }]);

  return AxPanels;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], panelsvue_type_script_lang_ts_AxPanels.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], panelsvue_type_script_lang_ts_AxPanels.prototype, "index", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('index')], panelsvue_type_script_lang_ts_AxPanels.prototype, "watchCurrentTab", null);

panelsvue_type_script_lang_ts_AxPanels = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {}
})], panelsvue_type_script_lang_ts_AxPanels);
/* harmony default export */ var panelsvue_type_script_lang_ts_ = (panelsvue_type_script_lang_ts_AxPanels);
// CONCATENATED MODULE: ./packages/ax-panels/src/panels.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_panelsvue_type_script_lang_ts_ = (panelsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-panels/src/panels.vue





/* normalize component */

var panels_component = normalizeComponent(
  src_panelsvue_type_script_lang_ts_,
  panelsvue_type_template_id_59ad1ac8_render,
  panelsvue_type_template_id_59ad1ac8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var panels_api; }
panels_component.options.__file = "packages/ax-panels/src/panels.vue"
/* harmony default export */ var panels = (panels_component.exports);
// CONCATENATED MODULE: ./packages/ax-panels/index.ts



addInstall(panels.name, panels);
/* harmony default export */ var ax_panels = (panels);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-progress/src/progress.vue?vue&type=template&id=d07a5470&
var progressvue_type_template_id_d07a5470_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ax_progress" },
    [
      _c("el-progress", {
        ref: "el_progress",
        staticClass: "progress",
        attrs: {
          percentage: _vm.percentage,
          type: _vm.type,
          "stroke-width": _vm.strokeWidth,
          status: _vm.status,
          color: _vm.color,
          "show-text": _vm.showText,
          "text-inside": _vm.textInside,
          width: _vm.width,
          format: _vm.format,
          "stroke-linecap": _vm.strokeLinecap
        }
      })
    ],
    1
  )
}
var progressvue_type_template_id_d07a5470_staticRenderFns = []
progressvue_type_template_id_d07a5470_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-progress/src/progress.vue?vue&type=template&id=d07a5470&

// EXTERNAL MODULE: external "element-ui/lib/progress"
var progress_ = __webpack_require__(34);
var progress_default = /*#__PURE__*/__webpack_require__.n(progress_);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-progress/src/progress.vue?vue&type=script&lang=ts&












var progressvue_type_script_lang_ts_AxProgress = /*#__PURE__*/function (_Vue) {
  _inherits(AxProgress, _Vue);

  var _super = _createSuper(AxProgress);

  function AxProgress() {
    var _this;

    _classCallCheck(this, AxProgress);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "percentage", void 0);

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "strokeWidth", void 0);

    _defineProperty(_assertThisInitialized(_this), "status", void 0);

    _defineProperty(_assertThisInitialized(_this), "color", void 0);

    _defineProperty(_assertThisInitialized(_this), "strokeLinecap", void 0);

    _defineProperty(_assertThisInitialized(_this), "showText", void 0);

    _defineProperty(_assertThisInitialized(_this), "strokeColor", void 0);

    _defineProperty(_assertThisInitialized(_this), "textInside", void 0);

    _defineProperty(_assertThisInitialized(_this), "width", void 0);

    _defineProperty(_assertThisInitialized(_this), "format", void 0);

    return _this;
  }

  _createClass(AxProgress, [{
    key: "mounted",
    value: //#region ????????????
    function mounted() {
      if (this.strokeColor) {
        //?????????????????????
        this.$refs.el_progress.$el.querySelector('.el-progress-circle').querySelector('.el-progress-circle__track').style.stroke = this.strokeColor;
      }
    }
  }]);

  return AxProgress;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 0
})], progressvue_type_script_lang_ts_AxProgress.prototype, "percentage", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'line'
})], progressvue_type_script_lang_ts_AxProgress.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 6
})], progressvue_type_script_lang_ts_AxProgress.prototype, "strokeWidth", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], progressvue_type_script_lang_ts_AxProgress.prototype, "status", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], progressvue_type_script_lang_ts_AxProgress.prototype, "color", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], progressvue_type_script_lang_ts_AxProgress.prototype, "strokeLinecap", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true
})], progressvue_type_script_lang_ts_AxProgress.prototype, "showText", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])()], progressvue_type_script_lang_ts_AxProgress.prototype, "strokeColor", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], progressvue_type_script_lang_ts_AxProgress.prototype, "textInside", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 126
})], progressvue_type_script_lang_ts_AxProgress.prototype, "width", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], progressvue_type_script_lang_ts_AxProgress.prototype, "format", void 0);

progressvue_type_script_lang_ts_AxProgress = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: _defineProperty({}, progress_default.a.name, progress_default.a)
})], progressvue_type_script_lang_ts_AxProgress);
/* harmony default export */ var progressvue_type_script_lang_ts_ = (progressvue_type_script_lang_ts_AxProgress);
// CONCATENATED MODULE: ./packages/ax-progress/src/progress.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_progressvue_type_script_lang_ts_ = (progressvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-progress/src/progress.vue





/* normalize component */

var progress_component = normalizeComponent(
  src_progressvue_type_script_lang_ts_,
  progressvue_type_template_id_d07a5470_render,
  progressvue_type_template_id_d07a5470_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var progress_api; }
progress_component.options.__file = "packages/ax-progress/src/progress.vue"
/* harmony default export */ var progress = (progress_component.exports);
// CONCATENATED MODULE: ./packages/ax-progress/index.ts



addInstall(progress.name, progress);
/* harmony default export */ var ax_progress = (progress);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-search/src/search.vue?vue&type=template&id=b086a5b0&
var searchvue_type_template_id_b086a5b0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "ax-search", staticClass: "ax_search" }, [
    _c(
      "div",
      { staticClass: "search_title" },
      [
        _c(
          "ax-input",
          {
            ref: "axInput",
            attrs: {
              type: "text",
              clearable: _vm.clearable,
              placeholder: _vm.placeholderStr
            },
            on: {
              change: _vm.handleChange,
              focus: _vm.handleFocus,
              blur: _vm.handleBlur
            },
            nativeOn: {
              keyup: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.clickSearch.apply(null, arguments)
              }
            },
            model: {
              value: _vm.dataGet,
              callback: function($$v) {
                _vm.dataGet = $$v
              },
              expression: "dataGet"
            }
          },
          [
            _c("i", {
              staticClass: "el-input__icon el-icon-search",
              attrs: { slot: "inner-right" },
              on: { click: _vm.clickSearch },
              slot: "inner-right"
            })
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.historyVisible && _vm.history,
            expression: "historyVisible && history"
          }
        ],
        staticClass: "search_history"
      },
      [
        _c("div", { staticClass: "history_title" }, [
          _c("span", [_vm._v(_vm._s(_vm.UILang.t("search.search.history")))]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "clear",
              on: {
                click: function($event) {
                  _vm.hisVisible = true
                }
              }
            },
            [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.UILang.t("search.clear.history")) +
                  "\n      "
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "history_data" },
          _vm._l(_vm.historyData, function(item, index) {
            return _c(
              "span",
              {
                key: index,
                attrs: { title: item.text },
                on: {
                  click: function($event) {
                    return _vm.setValue(item)
                  }
                }
              },
              [_vm._v("\n        " + _vm._s(item.text) + "\n      ")]
            )
          }),
          0
        ),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "history_title" }, [
          _c("span", [
            _vm._v(_vm._s(_vm.UILang.t("search.search.result.history")))
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "clear",
              on: {
                click: function($event) {
                  _vm.tagVisible = true
                }
              }
            },
            [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.UILang.t("search.clear.result.history")) +
                  "\n      "
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "history_tag" },
          _vm._l(_vm.historyTag, function(item, index) {
            return _c(
              "span",
              {
                key: index,
                attrs: { title: item.text },
                on: {
                  click: function($event) {
                    return _vm.selectTag(item)
                  }
                }
              },
              [
                _c("i", {
                  staticClass: "el-tag__close el-icon-close",
                  on: {
                    click: function($event) {
                      return _vm.closeTag(item)
                    }
                  }
                }),
                _vm._v("\n        " + _vm._s(item.text) + "\n      ")
              ]
            )
          }),
          0
        )
      ]
    )
  ])
}
var searchvue_type_template_id_b086a5b0_staticRenderFns = []
searchvue_type_template_id_b086a5b0_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-search/src/search.vue?vue&type=template&id=b086a5b0&

// EXTERNAL MODULE: external "core-js/modules/es.string.trim.js"
var es_string_trim_js_ = __webpack_require__(61);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-search/src/search.vue?vue&type=script&lang=ts&













var searchvue_type_script_lang_ts_AxSearch = /*#__PURE__*/function (_Vue) {
  _inherits(AxSearch, _Vue);

  var _super = _createSuper(AxSearch);

  function AxSearch() {
    var _this;

    _classCallCheck(this, AxSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "searchData", void 0);

    _defineProperty(_assertThisInitialized(_this), "dataGet", '');

    _defineProperty(_assertThisInitialized(_this), "UILang", UILang);

    _defineProperty(_assertThisInitialized(_this), "refSelf", void 0);

    _defineProperty(_assertThisInitialized(_this), "resultData", void 0);

    _defineProperty(_assertThisInitialized(_this), "history", void 0);

    _defineProperty(_assertThisInitialized(_this), "placeholder", void 0);

    _defineProperty(_assertThisInitialized(_this), "clearable", void 0);

    _defineProperty(_assertThisInitialized(_this), "isOnceResult", false);

    _defineProperty(_assertThisInitialized(_this), "isRequest", false);

    _defineProperty(_assertThisInitialized(_this), "historyData", []);

    _defineProperty(_assertThisInitialized(_this), "historyTag", []);

    _defineProperty(_assertThisInitialized(_this), "historyVisible", false);

    _defineProperty(_assertThisInitialized(_this), "resultVisible", false);

    _defineProperty(_assertThisInitialized(_this), "resultTag", false);

    return _this;
  }

  _createClass(AxSearch, [{
    key: "dataWatch",
    value: function dataWatch() {
      this.dataGet = this.searchData;
    } //
    // private set  dataGet(val:string){
    //  this.searchData =val;
    //  }
    // ?????????

  }, {
    key: "selectTag",
    value: function selectTag() {}
  }, {
    key: "closeTag",
    value: function closeTag() {} //
    // @Emit()
    // private modelChange(value: string) {
    //   return value;
    // }
    // ??????????????????Ref

  }, {
    key: "placeholderStr",
    get:
    /**
     * placeholder?????????
     * @returns {string}
     */
    function get() {
      return this.placeholder === undefined ? UILang.t('search.placeholder') : this.placeholder;
    } // // ??????????????? getter
    // private get value(): any {
    //   return this.data;
    // }
    //
    // // ??????????????? setter
    // private set value(val: any) {
    //   this.$emit('change', val);
    // }
    // ????????????????????????????????????
    // private tagVisible?: boolean = false;
    // ??????????????????????????????
    // private hisVisible?: boolean = false;
    // ??????????????????????????????????????????

  }, {
    key: "setValue",
    value: // ????????????
    // private isSort?: boolean = true;
    // private get getResultData() {
    //   if (this.resultData) {
    //     // ??????????????????
    //     this.isRequest = true;
    //     // ???????????????
    //     this.historyVisible = false;
    //   }
    //   return this.resultData;
    // }

    /**
     * ???
     */
    function setValue() {} // ????????????

  }, {
    key: "clickSearch",
    value: function clickSearch() {
      // ????????????
      // const term = (this.data + '').replace(/\s+/g, '');
      // ????????????
      this.$emit('search', (this.dataGet + '').trim());
    } // ???????????????

  }, {
    key: "on",
    value: function on() {
      if (!this.resultTag) {
        if (this.isOnceResult) {
          this.resultVisible = true;
          this.resultTag = false;
        } else {
          // ?????????????????????????????????

          /* list([this.$store.getters.language])
            .then(res => {
              // ????????????????????????
              if (res.code !== 1) return;
              this.historyData = res.data.searchHiss;
              this.historyTag = res.data.searchResults;
            })
            .catch(res => {
            }); */
          // ??????????????????
          this.resultVisible ? this.historyVisible = false : this.historyVisible = true; // ??????????????????

          document.addEventListener('click', this.off);
        }
      }

      if (this.resultTag) {
        this.resultVisible = true;
        this.resultTag = false;
      }
    } // ???????????????

  }, {
    key: "off",
    value: function off(e) {
      // ??????????????????
      if (!this.refSelf) return; // ???????????????????????????

      if (!this.refSelf.contains(e.target)) {
        // ???????????????????????????
        if (!this.isRequest && this.resultVisible && this.isOnceResult && this.resultData && this.resultData.length > 1) {
          this.resultTag = true;
        } // ????????????


        this.historyVisible = false;
        this.resultVisible = false; // ????????????????????????

        if (this.isRequest && this.resultData && this.resultData.length > 1) {
          this.resultTag = true;
        }
      }
    }
    /**
     * ??????????????????
     * @param event
     */

  }, {
    key: "handleChange",
    value: function handleChange(val) {
      this.$emit('change', val);
    }
    /**
     * ??????????????????
     * @param event
     */

  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      this.$emit('focus', event);
    }
    /**
     * ??????????????????
     * @param event
     */

  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      this.$emit('blur', event);
    }
    /**
     * ??????????????????
     */

  }, {
    key: "focus",
    value: function focus() {
      // ?????????????????????????????????
      this.$refs.axInput.focus();
      this.$refs.axInput.select(); // ??????????????????

      return this;
    }
  }]);

  return AxSearch;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Model"])('change', {
  type: String,
  default: ''
})], searchvue_type_script_lang_ts_AxSearch.prototype, "searchData", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('Watch')], searchvue_type_script_lang_ts_AxSearch.prototype, "dataWatch", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Ref"])('ax-search')], searchvue_type_script_lang_ts_AxSearch.prototype, "refSelf", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], searchvue_type_script_lang_ts_AxSearch.prototype, "resultData", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], searchvue_type_script_lang_ts_AxSearch.prototype, "history", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], searchvue_type_script_lang_ts_AxSearch.prototype, "placeholder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true
})], searchvue_type_script_lang_ts_AxSearch.prototype, "clearable", void 0);

searchvue_type_script_lang_ts_AxSearch = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  // model: {
  //   // ?????? v-model ????????????????????????
  //   prop: 'data',
  //   event: 'change',
  // },
  components: {
    AxInput: ax_input
  }
})], searchvue_type_script_lang_ts_AxSearch);
/* harmony default export */ var searchvue_type_script_lang_ts_ = (searchvue_type_script_lang_ts_AxSearch);
// CONCATENATED MODULE: ./packages/ax-search/src/search.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_searchvue_type_script_lang_ts_ = (searchvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-search/src/search.vue





/* normalize component */

var search_component = normalizeComponent(
  src_searchvue_type_script_lang_ts_,
  searchvue_type_template_id_b086a5b0_render,
  searchvue_type_template_id_b086a5b0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var search_api; }
search_component.options.__file = "packages/ax-search/src/search.vue"
/* harmony default export */ var search = (search_component.exports);
// CONCATENATED MODULE: ./packages/ax-search/index.ts



addInstall(search.name, search);
/* harmony default export */ var ax_search = (search);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-select/src/select.vue?vue&type=template&id=45bc5eb0&
var selectvue_type_template_id_45bc5eb0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ax_select",
      class: {
        validate_passed: _vm.validatePassed === true,
        validate_failed: _vm.validatePassed === false,
        select_multiple: _vm.multiple,
        select_adaptive: _vm.multiple && !_vm.collapseTags
      },
      on: {
        keydown: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
          ) {
            return null
          }
          return _vm.close.apply(null, arguments)
        }
      }
    },
    [
      _c(
        "el-select",
        {
          ref: "el-select",
          attrs: {
            name: _vm.name,
            disabled: _vm.disabled,
            clearable: _vm.clearable,
            placeholder: _vm.placeholderStr,
            "allow-create": _vm.allowCreate,
            filterable: _vm.filterable,
            multiple: _vm.multiple,
            "multiple-limit": _vm.multipleLimit,
            "collapse-tags": _vm.collapseTags,
            loading: _vm.loading,
            "default-first-option": "",
            remote: !!_vm.remoteMethod,
            "remote-method": _vm.remoteMethod,
            "popper-class": _vm.popperClass,
            "popper-append-to-body": _vm.popperAppendToBody,
            "value-key": "key"
          },
          on: {
            blur: _vm.handleBlur,
            focus: _vm.handleFocus,
            change: _vm.change,
            "remove-tag": _vm.removeTag
          },
          scopedSlots: _vm._u(
            [
              {
                key: "prefix",
                fn: function() {
                  return [_vm._t("inner-left")]
                },
                proxy: true
              }
            ],
            null,
            true
          ),
          model: {
            value: _vm.modelValue,
            callback: function($$v) {
              _vm.modelValue = $$v
            },
            expression: "modelValue"
          }
        },
        [
          _vm._v(" "),
          _vm._l(_vm.options, function(item) {
            return _c(
              "el-option",
              {
                key: item.key,
                attrs: {
                  label: item.text,
                  value: item.key,
                  disabled: item.disabled
                }
              },
              [
                _vm._t(
                  "option",
                  function() {
                    return [_vm._v(_vm._s(item.text))]
                  },
                  { item: item }
                )
              ],
              2
            )
          })
        ],
        2
      )
    ],
    1
  )
}
var selectvue_type_template_id_45bc5eb0_staticRenderFns = []
selectvue_type_template_id_45bc5eb0_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-select/src/select.vue?vue&type=template&id=45bc5eb0&

// EXTERNAL MODULE: external "element-ui/lib/option"
var option_ = __webpack_require__(35);
var option_default = /*#__PURE__*/__webpack_require__.n(option_);

// EXTERNAL MODULE: external "element-ui/lib/select"
var select_ = __webpack_require__(36);
var select_default = /*#__PURE__*/__webpack_require__.n(select_);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-select/src/select.vue?vue&type=script&lang=ts&









var selectvue_type_script_lang_ts_components;












var selectvue_type_script_lang_ts_AxSelect = /*#__PURE__*/function (_AxUIComponent) {
  _inherits(AxSelect, _AxUIComponent);

  var _super = _createSuper(AxSelect);

  function AxSelect() {
    var _this;

    _classCallCheck(this, AxSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "refSelect", void 0);

    _defineProperty(_assertThisInitialized(_this), "options", void 0);

    _defineProperty(_assertThisInitialized(_this), "allowCreate", void 0);

    _defineProperty(_assertThisInitialized(_this), "filterable", void 0);

    _defineProperty(_assertThisInitialized(_this), "multiple", void 0);

    _defineProperty(_assertThisInitialized(_this), "multipleLimit", void 0);

    _defineProperty(_assertThisInitialized(_this), "collapseTags", void 0);

    _defineProperty(_assertThisInitialized(_this), "loading", void 0);

    _defineProperty(_assertThisInitialized(_this), "atLeast", void 0);

    _defineProperty(_assertThisInitialized(_this), "remoteMethod", void 0);

    _defineProperty(_assertThisInitialized(_this), "popperClass", void 0);

    _defineProperty(_assertThisInitialized(_this), "popperAppendToBody", void 0);

    _defineProperty(_assertThisInitialized(_this), "optmap", new Map());

    return _this;
  }

  _createClass(AxSelect, [{
    key: "placeholderStr",
    get: //#endregion
    //#region Computed

    /**
     * placeholder?????????
     * @returns {string}
     */
    function get() {
      return this.placeholder === undefined ? UILang.t('select.placeholder') : this.placeholder;
    } //#endregion
    //#region Watch

    /**
     * ????????????????????????
     */

  }, {
    key: "setOptions",
    value: function setOptions() {
      // ????????????
      this.optmap.clear(); // ??????????????????

      var v = this.options; // ??????????????????

      if (!v || v.length === 0) return v; // ?????????????????????

      for (var index = 0; index < v.length; index++) {
        // ??????????????????
        var item = v[index]; // ???????????????

        this.optmap.set(item.key, item);
      }
    } //#endregion
    //#region Emit

    /**
     * ?????????????????????
     * @param event
     * @returns {Event}
     */

  }, {
    key: "onBlur",
    value: function onBlur(event) {
      return event;
    }
    /**
     * ?????????????????????
     * @param event
     * @returns {Event}
     */

  }, {
    key: "onFocus",
    value: function onFocus(event) {
      return event;
    } //#endregion
    //#region ???????????????

    /**
     * ??????????????????
     */

  }, {
    key: "focus",
    value: function focus() {
      // ?????????????????????????????????
      this.refSelect.focus(); // ??????????????????

      return this;
    }
    /**
     * ?????????????????????
     */

  }, {
    key: "close",
    value: function close() {
      // ???????????????????????????
      this.refSelect.blur(); // ??????????????????

      return this;
    }
    /**
     * ???????????????????????????????????????
     */

  }, {
    key: "isLatestSelectedKey",
    value: function isLatestSelectedKey(key) {
      // ?????????
      var ks = this.modelValue; // ????????????????????????

      if (this.multiple) {
        // ????????????????????????
        return ks && ks.length > 0 ? ks.indexOf(key) !== 0 : false;
      } else {
        // ??????????????????
        return ks === key;
      }
    }
    /**
     * ???????????????????????????????????????????????? undefined ???
     * @param {any} key ?????????????????????????????????????????????????????????????????????????????????
     * @returns {IOptionData | IOptionData[] | undefined} ????????????????????????????????????
     */

  }, {
    key: "getSelectedData",
    value: function getSelectedData(key) {
      // ??????????????????
      if (key === undefined || key === null) return undefined; // ????????????????????????

      if (key && this.optmap.size > 0) {
        // ????????????
        if (key instanceof Array) {
          // ???????????????????????????????????????
          if (key.length > 0) {
            // ??????????????????
            var vs = []; // ????????????

            for (var index = 0; index < key.length; index++) {
              // ??????????????????
              var op = this.optmap.get(key[index]); // ???????????????

              if (op) vs.push(op);
            } // ????????????


            return vs;
          }
        } else {
          // ???????????????
          return this.optmap.get(key);
        }
      } else {
        // ????????????
        return undefined;
      }
    } //#endregion
    //#region ????????????

    /**
     * ????????????????????????????????????????????????????????????
     */

  }, {
    key: "removeTag",
    value: //#endregion
    //#region ????????????

    /**
     * ??????,, ??????????????????
     */
    function removeTag(tag) {
      var _this2 = this;

      if (this.atLeast) {
        // ????????????,??????????????????????????????
        setTimeout(function () {
          if (_this2.modelValue.length === 0) {
            _this2.modelValue = [tag];
          }
        }, 20);
      }

      this.$emit('remove-tag', tag);
    }
    /**
     * ????????????
     * @param currentValue
     */

  }, {
    key: "change",
    value: function change(currentValue) {
      var _this3 = this;

      var temp = JSON.parse(JSON.stringify(this.modelValue));

      if (this.multiple && this.atLeast) {
        // ???????????????????????????, ???????????????
        if (currentValue.length === 0 && this.modelValue.length) {
          setTimeout(function () {
            _this3.modelValue = temp;
          }, 20);
        }
      } // this.$emit('change', this.modelValue);

    }
    /**
     * ????????????
     * @param event
     */

  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      this.onBlur(event);
    }
    /**
     * ????????????
     * @param event
     */

  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      this.onFocus(event);
    } //#endregion
    //#region ????????????

    /**
     * ?????????????????????
     */

  }, {
    key: "created",
    value: function created() {
      // ???????????????????????????
      this.setOptions();
    }
  }]);

  return AxSelect;
}(core_AxUIComponent);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Ref"])('el-select')], selectvue_type_script_lang_ts_AxSelect.prototype, "refSelect", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], selectvue_type_script_lang_ts_AxSelect.prototype, "disabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], selectvue_type_script_lang_ts_AxSelect.prototype, "clearable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], selectvue_type_script_lang_ts_AxSelect.prototype, "options", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], selectvue_type_script_lang_ts_AxSelect.prototype, "allowCreate", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], selectvue_type_script_lang_ts_AxSelect.prototype, "filterable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], selectvue_type_script_lang_ts_AxSelect.prototype, "multiple", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 0,
  type: Number
})], selectvue_type_script_lang_ts_AxSelect.prototype, "multipleLimit", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], selectvue_type_script_lang_ts_AxSelect.prototype, "collapseTags", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], selectvue_type_script_lang_ts_AxSelect.prototype, "loading", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], selectvue_type_script_lang_ts_AxSelect.prototype, "atLeast", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], selectvue_type_script_lang_ts_AxSelect.prototype, "remoteMethod", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'ax_select_popper'
})], selectvue_type_script_lang_ts_AxSelect.prototype, "popperClass", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], selectvue_type_script_lang_ts_AxSelect.prototype, "popperAppendToBody", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], selectvue_type_script_lang_ts_AxSelect.prototype, "placeholder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('options')], selectvue_type_script_lang_ts_AxSelect.prototype, "setOptions", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('blur')], selectvue_type_script_lang_ts_AxSelect.prototype, "onBlur", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('focus')], selectvue_type_script_lang_ts_AxSelect.prototype, "onFocus", null);

selectvue_type_script_lang_ts_AxSelect = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // ?????? v-model ????????????????????????
    prop: 'data',
    event: 'change'
  },
  components: (selectvue_type_script_lang_ts_components = {}, _defineProperty(selectvue_type_script_lang_ts_components, select_default.a.name, select_default.a), _defineProperty(selectvue_type_script_lang_ts_components, option_default.a.name, option_default.a), selectvue_type_script_lang_ts_components)
})], selectvue_type_script_lang_ts_AxSelect);
/* harmony default export */ var selectvue_type_script_lang_ts_ = (selectvue_type_script_lang_ts_AxSelect);
// CONCATENATED MODULE: ./packages/ax-select/src/select.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_selectvue_type_script_lang_ts_ = (selectvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-select/src/select.vue





/* normalize component */

var select_component = normalizeComponent(
  src_selectvue_type_script_lang_ts_,
  selectvue_type_template_id_45bc5eb0_render,
  selectvue_type_template_id_45bc5eb0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var select_api; }
select_component.options.__file = "packages/ax-select/src/select.vue"
/* harmony default export */ var src_select = (select_component.exports);
// CONCATENATED MODULE: ./packages/ax-select/index.ts



addInstall(src_select.name, src_select);
/* harmony default export */ var ax_select = (src_select);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-slider/src/slider.vue?vue&type=template&id=f05f20f0&
var slidervue_type_template_id_f05f20f0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ax_slider" },
    [
      _c("slider", {
        ref: "refSlider",
        attrs: {
          min: _vm.min,
          max: _vm.max,
          disabled: _vm.disabled,
          step: _vm.step,
          "show-input": _vm.showInput,
          "show-input-controls": _vm.showInputControls,
          "input-size": _vm.inputSize,
          "show-stops": _vm.showStops,
          "show-tooltip": _vm.showTooltip,
          "format-tooltip": _vm.formatTooltip,
          range: _vm.formatTooltip,
          vertical: _vm.range,
          height: _vm.height,
          label: _vm.label,
          debounce: _vm.debounce,
          "tooltip-class": _vm.tooltipClass,
          marks: _vm.marks
        },
        on: { change: _vm.change, input: _vm.input },
        model: {
          value: _vm.value,
          callback: function($$v) {
            _vm.value = $$v
          },
          expression: "value"
        }
      })
    ],
    1
  )
}
var slidervue_type_template_id_f05f20f0_staticRenderFns = []
slidervue_type_template_id_f05f20f0_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-slider/src/slider.vue?vue&type=template&id=f05f20f0&

// EXTERNAL MODULE: external "element-ui/lib/slider"
var slider_ = __webpack_require__(56);
var slider_default = /*#__PURE__*/__webpack_require__.n(slider_);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-slider/src/slider.vue?vue&type=script&lang=ts&












var slidervue_type_script_lang_ts_AxSlider = /*#__PURE__*/function (_Vue) {
  _inherits(AxSlider, _Vue);

  var _super = _createSuper(AxSlider);

  function AxSlider() {
    var _this;

    _classCallCheck(this, AxSlider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "data", void 0);

    _defineProperty(_assertThisInitialized(_this), "min", void 0);

    _defineProperty(_assertThisInitialized(_this), "max", void 0);

    _defineProperty(_assertThisInitialized(_this), "disabled", void 0);

    _defineProperty(_assertThisInitialized(_this), "step", void 0);

    _defineProperty(_assertThisInitialized(_this), "showInput", void 0);

    _defineProperty(_assertThisInitialized(_this), "showInputControls", void 0);

    _defineProperty(_assertThisInitialized(_this), "inputSize", void 0);

    _defineProperty(_assertThisInitialized(_this), "showStops", void 0);

    _defineProperty(_assertThisInitialized(_this), "showTooltip", void 0);

    _defineProperty(_assertThisInitialized(_this), "formatTooltip", void 0);

    _defineProperty(_assertThisInitialized(_this), "range", void 0);

    _defineProperty(_assertThisInitialized(_this), "vertical", void 0);

    _defineProperty(_assertThisInitialized(_this), "height", void 0);

    _defineProperty(_assertThisInitialized(_this), "label", void 0);

    _defineProperty(_assertThisInitialized(_this), "debounce", void 0);

    _defineProperty(_assertThisInitialized(_this), "tooltipClass", void 0);

    _defineProperty(_assertThisInitialized(_this), "marks", void 0);

    return _this;
  }

  _createClass(AxSlider, [{
    key: "value",
    get:
    /**
     * v-model?????????
     * @returns {number}
     */
    function get() {
      return this.data;
    }
    /**
     * v-model??????????????????
     * @param value
     */
    ,
    set: function set(value) {
      this.$emit('change', value);
    } // ?????????

  }, {
    key: "change",
    value:
    /**
     * ???????????????????????????????????????????????????????????????????????????
     * @param value
     * @returns {number}
     */
    function change(value) {
      return value;
    }
    /**
     * ???????????????????????????????????????????????????????????????????????????
     * @param value
     * @returns {number}
     */

  }, {
    key: "input",
    value: function input(value) {
      return value;
    }
  }]);

  return AxSlider;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Model"])('change', {
  type: Number,
  default: 0
})], slidervue_type_script_lang_ts_AxSlider.prototype, "data", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 0
})], slidervue_type_script_lang_ts_AxSlider.prototype, "min", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 100
})], slidervue_type_script_lang_ts_AxSlider.prototype, "max", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], slidervue_type_script_lang_ts_AxSlider.prototype, "disabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 1
})], slidervue_type_script_lang_ts_AxSlider.prototype, "step", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], slidervue_type_script_lang_ts_AxSlider.prototype, "showInput", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true
})], slidervue_type_script_lang_ts_AxSlider.prototype, "showInputControls", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'small'
})], slidervue_type_script_lang_ts_AxSlider.prototype, "inputSize", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], slidervue_type_script_lang_ts_AxSlider.prototype, "showStops", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true
})], slidervue_type_script_lang_ts_AxSlider.prototype, "showTooltip", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], slidervue_type_script_lang_ts_AxSlider.prototype, "formatTooltip", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], slidervue_type_script_lang_ts_AxSlider.prototype, "range", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], slidervue_type_script_lang_ts_AxSlider.prototype, "vertical", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], slidervue_type_script_lang_ts_AxSlider.prototype, "height", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], slidervue_type_script_lang_ts_AxSlider.prototype, "label", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 300
})], slidervue_type_script_lang_ts_AxSlider.prototype, "debounce", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], slidervue_type_script_lang_ts_AxSlider.prototype, "tooltipClass", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], slidervue_type_script_lang_ts_AxSlider.prototype, "marks", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])()], slidervue_type_script_lang_ts_AxSlider.prototype, "change", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])()], slidervue_type_script_lang_ts_AxSlider.prototype, "input", null);

slidervue_type_script_lang_ts_AxSlider = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {
    Slider: slider_default.a
  }
})], slidervue_type_script_lang_ts_AxSlider);
/* harmony default export */ var slidervue_type_script_lang_ts_ = (slidervue_type_script_lang_ts_AxSlider);
// CONCATENATED MODULE: ./packages/ax-slider/src/slider.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_slidervue_type_script_lang_ts_ = (slidervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-slider/src/slider.vue





/* normalize component */

var slider_component = normalizeComponent(
  src_slidervue_type_script_lang_ts_,
  slidervue_type_template_id_f05f20f0_render,
  slidervue_type_template_id_f05f20f0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var slider_api; }
slider_component.options.__file = "packages/ax-slider/src/slider.vue"
/* harmony default export */ var slider = (slider_component.exports);
// CONCATENATED MODULE: ./packages/ax-slider/index.ts



addInstall(slider.name, slider);
/* harmony default export */ var ax_slider = (slider);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-tab/src/tab.vue?vue&type=template&id=00e2d81e&
var tabvue_type_template_id_00e2d81e_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "ax_tab",
      staticClass: "ax_tab",
      class: [{ inner_mode: _vm.isInnerMode }, { outer_mode: !_vm.isInnerMode }]
    },
    [
      _c(
        "div",
        { staticClass: "tab_bar" },
        _vm._l(_vm.tabData, function(item, i) {
          return _c(
            "div",
            {
              key: i,
              staticClass: "tab_item",
              class: [{ tab_select: _vm.index === item.key }],
              on: {
                click: function($event) {
                  return _vm.onClick(item)
                }
              }
            },
            [
              _vm._t(
                item.name,
                function() {
                  return [_vm._v(_vm._s(item.label))]
                },
                { item: item }
              )
            ],
            2
          )
        }),
        0
      ),
      _vm._v(" "),
      _vm.isInnerMode
        ? _c(
            "ax-panels",
            {
              ref: "panels",
              staticClass: "tab_panels",
              class: [
                { bottom_top: _vm.type === "bottom_top" },
                { left_right: _vm.type === "left_right" },
                { right_left: _vm.type === "right_left" },
                { top_bottom: _vm.type === "top_bottom" }
              ],
              attrs: { index: _vm.index }
            },
            [_vm._t("default")],
            2
          )
        : _vm._e()
    ],
    1
  )
}
var tabvue_type_template_id_00e2d81e_staticRenderFns = []
tabvue_type_template_id_00e2d81e_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-tab/src/tab.vue?vue&type=template&id=00e2d81e&

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-tab/src/tab.vue?vue&type=script&lang=ts&











var tabvue_type_script_lang_ts_AxTab = /*#__PURE__*/function (_Vue) {
  _inherits(AxTab, _Vue);

  var _super = _createSuper(AxTab);

  function AxTab() {
    var _this;

    _classCallCheck(this, AxTab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "items", []);

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "index", void 0);

    _defineProperty(_assertThisInitialized(_this), "data", void 0);

    return _this;
  }

  _createClass(AxTab, [{
    key: "tabData",
    get: function get() {
      // ????????????
      this.items = this.data || []; // ??????????????????????????????

      if (this.index !== undefined && this.items.length > 0) {
        // ????????????????????????????????? key
        if (typeof this.index === 'string' && Object.prototype.hasOwnProperty.call(this.items, this.index) // this.items.hasOwnProperty(this.index)
        ) {
          // ?????????????????????
          this.$emit('change', this.index);
        } else if (this.items.length > this.index) {
          // ?????????????????????
          this.$emit('change', this.index);
        }
      } // ????????????


      return this.items;
    }
    /**
     * ????????????????????????
     */

  }, {
    key: "isInnerMode",
    get: function get() {
      return !this.data || this.data.length === 0;
    }
    /**
     * ????????????
     */

  }, {
    key: "onClick",
    value: function onClick(val) {
      // ?????????????????????
      this.$emit('change', val.key);
    }
  }]);

  return AxTab;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], tabvue_type_script_lang_ts_AxTab.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], tabvue_type_script_lang_ts_AxTab.prototype, "index", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], tabvue_type_script_lang_ts_AxTab.prototype, "data", void 0);

tabvue_type_script_lang_ts_AxTab = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    prop: 'index',
    event: 'change'
  },
  components: {
    AxPanels: ax_panels
  }
})], tabvue_type_script_lang_ts_AxTab);
/* harmony default export */ var tabvue_type_script_lang_ts_ = (tabvue_type_script_lang_ts_AxTab);
// CONCATENATED MODULE: ./packages/ax-tab/src/tab.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_tabvue_type_script_lang_ts_ = (tabvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-tab/src/tab.vue





/* normalize component */

var tab_component = normalizeComponent(
  src_tabvue_type_script_lang_ts_,
  tabvue_type_template_id_00e2d81e_render,
  tabvue_type_template_id_00e2d81e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tab_api; }
tab_component.options.__file = "packages/ax-tab/src/tab.vue"
/* harmony default export */ var tab = (tab_component.exports);
// CONCATENATED MODULE: ./packages/ax-tab/index.ts



addInstall(tab.name, tab);
/* harmony default export */ var ax_tab = (tab);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-table/src/table.vue?vue&type=template&id=c4b662e0&
var tablevue_type_template_id_c4b662e0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "ax_table",
      staticClass: "ax_table",
      attrs: { onselectstart: "return false;" }
    },
    [
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.loading,
              expression: "loading"
            },
            {
              name: "tableLoadMore",
              rawName: "v-tableLoadMore",
              value: _vm.tableLoadMore,
              expression: "tableLoadMore"
            }
          ],
          ref: "elTable",
          staticClass: "el_table",
          attrs: {
            border: "",
            fit: "",
            resizable: "",
            "highlight-current-row": "",
            "row-key": _vm.keyId,
            data: _vm.tableDataLoad,
            "empty-text": _vm.axLang.text("table.head.empty"),
            "tree-props": _vm.treeProps,
            "row-class-name": _vm.rowClassName,
            "row-style": _vm.rowStyle,
            "cell-style": _vm.cellStyle
          },
          on: {
            "row-click": _vm.rowClick,
            "row-dblclick": _vm.rowdblClick,
            "cell-dblclick": _vm.celldblclick,
            "selection-change": _vm.selectionChange
          }
        },
        [
          _vm.showIndex
            ? _c("el-table-column", {
                attrs: {
                  type: "index",
                  width: _vm.styleTransform.remToPx(4.3),
                  label: _vm.axLang.text("table.head.index"),
                  align: "center"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.boxType === _vm.tableBoxType.CHECKBOX
            ? _c("el-table-column", {
                attrs: {
                  label: _vm.axLang.text("table.head.selection.checkbox"),
                  type: "selection",
                  width: _vm.styleTransform.remToPx(3.6),
                  selectable: _vm.rowSelectableCheckbox,
                  align: "center"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.boxType === _vm.tableBoxType.RADIO
            ? _c("el-table-column", {
                attrs: {
                  label: _vm.axLang.text("table.head.selection.radio"),
                  width: _vm.styleTransform.remToPx(3.6),
                  align: "center"
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          _c("AxRadio", {
                            staticClass: "radio_show",
                            staticStyle: { width: "100%" },
                            attrs: {
                              label: scope.row[_vm.keyId],
                              disabled: _vm.rowSelectDisabled.includes(
                                scope.row[_vm.keyId]
                              ),
                              "hide-label": ""
                            },
                            on: {
                              change: function($event) {
                                return _vm.radioClick(scope.row[_vm.keyId])
                              }
                            },
                            model: {
                              value: _vm.radioSelectedCurrent,
                              callback: function($$v) {
                                _vm.radioSelectedCurrent = $$v
                              },
                              expression: "radioSelectedCurrent"
                            }
                          })
                        ]
                      }
                    }
                  ],
                  null,
                  false,
                  1273637679
                )
              })
            : _vm._e(),
          _vm._v(" "),
          !_vm.tableColumn.length
            ? _c("el-table-column", { attrs: { align: "center" } })
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.tableColumnLoad, function(item, index) {
            return _c("el-table-column", {
              key: index,
              attrs: {
                "show-overflow-tooltip":
                  !item.isSelect && !item.isEnable && !item.hideTooltip,
                width: _vm.styleTransform.remToPx(item.width),
                "min-width": _vm.styleTransform.remToPx(item.minWidth),
                label: item.label,
                align: item.align
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "header",
                    fn: function(scope) {
                      return [
                        _c("table-head", {
                          attrs: {
                            "show-menu": _vm.showMenu,
                            "head-mode": _vm.headMode && !!item.isRange,
                            scope: scope,
                            column: item
                          },
                          on: { headIconClick: _vm.headIconClick },
                          nativeOn: {
                            click: function($event) {
                              return _vm.headSortClick(scope, item)
                            }
                          }
                        })
                      ]
                    }
                  },
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        item.isMove
                          ? _c(
                              "div",
                              { staticClass: "move_button" },
                              [
                                _c(
                                  "ax-button",
                                  {
                                    staticClass: "move_button_item",
                                    on: {
                                      click: function($event) {
                                        return _vm.moveButton(
                                          scope,
                                          _vm.MoveDirType.UP
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "iconfont" }, [
                                      _vm._v("???")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "ax-button",
                                  {
                                    staticClass: "move_button_item",
                                    on: {
                                      click: function($event) {
                                        return _vm.moveButton(
                                          scope,
                                          _vm.MoveDirType.DOWN
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "iconfont" }, [
                                      _vm._v("???")
                                    ])
                                  ]
                                )
                              ],
                              1
                            )
                          : item.isSelect
                          ? _c(
                              "div",
                              [
                                _c("el-checkbox", {
                                  model: {
                                    value: scope.row[item.name],
                                    callback: function($$v) {
                                      _vm.$set(scope.row, item.name, $$v)
                                    },
                                    expression: "scope.row[item.name]"
                                  }
                                })
                              ],
                              1
                            )
                          : item.render
                          ? _c(
                              "div",
                              [
                                _c("cell-render", {
                                  attrs: {
                                    vnodes: item.render(
                                      scope.row[item.name],
                                      scope.row
                                    )
                                  }
                                })
                              ],
                              1
                            )
                          : item.isEnable
                          ? _c("div", { staticClass: "col_enable" }, [
                              _c("i", {
                                staticClass: "i_cc",
                                class: [
                                  "i_cc_" +
                                    (!!scope.row[item.name] ? "right" : "wrong")
                                ]
                              })
                            ])
                          : _c("edit-cell", {
                              ref:
                                scope.column[_vm.keyId] +
                                "_row_" +
                                scope.$index,
                              refInFor: true,
                              attrs: {
                                "key-id": _vm.keyId,
                                index: index,
                                "no-edit-ids": _vm.noEditIds,
                                "edit-mode": _vm.editMode,
                                scope: scope,
                                column: item,
                                editrowconfig: _vm.editrowconfig,
                                "total-column": _vm.totalColumn,
                                "tip-offset": item.editOffset,
                                align: item.align
                              },
                              on: {
                                cellLinkClick: _vm.cellLinkClick,
                                cellBlur: _vm.cellBlur,
                                cellDbClick: _vm.cellDbClick
                              }
                            })
                      ]
                    }
                  }
                ],
                null,
                true
              )
            })
          }),
          _vm._v(" "),
          _vm.operation && _vm.operation.list.length
            ? _c("el-table-column", {
                attrs: {
                  width: _vm.styleTransform.remToPx(_vm.operation.width || 4.5),
                  label: _vm.axLang.text("table.head.operate"),
                  align: "center"
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "header",
                      fn: function(scope) {
                        return [
                          _c("div", { staticClass: "table_head" }, [
                            _c("span", { staticClass: "table_head_text" }, [
                              _vm._v(_vm._s(scope.column.label))
                            ])
                          ])
                        ]
                      }
                    },
                    {
                      key: "default",
                      fn: function(scope) {
                        return _c(
                          "div",
                          {
                            staticClass: "table_operate",
                            class: [
                              "table_operate_" + (_vm.operation.align || "left")
                            ]
                          },
                          [
                            _vm._l(_vm.operation.list, function(
                              operate,
                              index
                            ) {
                              return [
                                operate.isIcon
                                  ? _c("ax-link", {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            !operate.hidden ||
                                            !operate.hidden(scope.row),
                                          expression:
                                            "!operate.hidden || !operate.hidden(scope.row)"
                                        }
                                      ],
                                      key: "icon_" + index,
                                      attrs: {
                                        type: "primary",
                                        disabled:
                                          operate.disabled &&
                                          operate.disabled(scope.row),
                                        icon: _vm.getOperateText(
                                          operate.value,
                                          scope.row
                                        )
                                      },
                                      on: {
                                        click: function($event) {
                                          return operate.click(scope.row)
                                        }
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                !operate.isIcon
                                  ? _c(
                                      "ax-link",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value:
                                              !operate.hidden ||
                                              !operate.hidden(scope.row),
                                            expression:
                                              "!operate.hidden || !operate.hidden(scope.row)"
                                          }
                                        ],
                                        key: "button_" + index,
                                        attrs: {
                                          type: "primary",
                                          disabled:
                                            operate.disabled &&
                                            operate.disabled(scope.row)
                                        },
                                        on: {
                                          click: function($event) {
                                            return operate.click(scope.row)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n            " +
                                            _vm._s(
                                              _vm.getOperateText(
                                                operate.value,
                                                scope.row
                                              )
                                            ) +
                                            "\n          "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            })
                          ],
                          2
                        )
                      }
                    }
                  ],
                  null,
                  false,
                  2300545800
                )
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.showRefresh
            ? _c(
                "el-table-column",
                {
                  attrs: {
                    width: _vm.styleTransform.remToPx(2.85),
                    align: "center"
                  }
                },
                [
                  _c("template", { slot: "header" }, [
                    _c(
                      "div",
                      {
                        staticClass: "table_refresh",
                        class: [_vm.loading ? "refresh_rotate" : ""],
                        on: { click: _vm.refreshClick }
                      },
                      [_c("i", { staticClass: "el-icon el-icon-refresh" })]
                    )
                  ])
                ],
                2
              )
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var tablevue_type_template_id_c4b662e0_staticRenderFns = []
tablevue_type_template_id_c4b662e0_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-table/src/table.vue?vue&type=template&id=c4b662e0&

// EXTERNAL MODULE: external "element-ui/lib/table-column"
var table_column_ = __webpack_require__(37);
var table_column_default = /*#__PURE__*/__webpack_require__.n(table_column_);

// EXTERNAL MODULE: external "element-ui/lib/table"
var table_ = __webpack_require__(38);
var table_default = /*#__PURE__*/__webpack_require__.n(table_);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/objectSpread2.js


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: external "regenerator-runtime/runtime.js"
var runtime_js_ = __webpack_require__(50);

// EXTERNAL MODULE: external "core-js/modules/es.array.filter.js"
var es_array_filter_js_ = __webpack_require__(18);

// EXTERNAL MODULE: external "core-js/modules/es.array.splice.js"
var es_array_splice_js_ = __webpack_require__(19);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-table/src/custom-transfer.vue?vue&type=template&id=16960089&
var custom_transfervue_type_template_id_16960089_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ax-dialog",
    {
      ref: "customDialog",
      staticClass: "ax_transfer",
      attrs: {
        visible: _vm.flag,
        title: _vm.axLang.text("column.title"),
        loading: _vm.isButtonLoading
      },
      on: { close: _vm.close, okClose: _vm.okClose }
    },
    [
      _c(
        "div",
        { staticClass: "content" },
        [
          _c("AxTable", {
            ref: "hideTable",
            staticClass: "transfer_table",
            attrs: {
              "show-index": false,
              "show-menu": false,
              "show-refresh": false,
              "edit-mode": false,
              "head-mode": false,
              "table-data": _vm.hideList,
              "key-id": _vm.config.key,
              "table-column": _vm.hideColumn
            },
            on: { selectionChange: _vm.selectionChangeLeft }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "button_module" }, [
            _c(
              "div",
              { staticClass: "buttons" },
              [
                _c(
                  "ax-button",
                  {
                    staticClass: "control_button",
                    attrs: { disabled: !_vm.hideIds.length },
                    on: { click: _vm.leftToRight }
                  },
                  [_vm._v("\n          ??????>>\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "ax-button",
                  {
                    staticClass: "control_button",
                    attrs: { disabled: !_vm.showIds.length },
                    on: { click: _vm.rightToLeft }
                  },
                  [_vm._v("\n          ??????<<\n        ")]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("AxTable", {
            ref: "showTable",
            staticClass: "transfer_table",
            attrs: {
              "show-index": false,
              "show-menu": false,
              "show-refresh": false,
              "edit-mode": false,
              "head-mode": false,
              "table-data": _vm.showList,
              "table-column": _vm.showColumn,
              "key-id": _vm.config.key
            },
            on: { selectionChange: _vm.selectionChangeRight },
            model: {
              value: _vm.ids,
              callback: function($$v) {
                _vm.ids = $$v
              },
              expression: "ids"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "button_module" }, [
            _c(
              "div",
              { staticClass: "buttons" },
              [
                _c(
                  "ax-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.mergeShowFlag,
                        expression: "!mergeShowFlag"
                      }
                    ],
                    staticClass: "control_button",
                    attrs: {
                      disabled: !_vm.showIds.length,
                      loading: _vm.isButtonLoading
                    },
                    on: {
                      click: function($event) {
                        return _vm.moveClick("up")
                      }
                    }
                  },
                  [_vm._v("\n          ??????\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "ax-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.mergeShowFlag,
                        expression: "!mergeShowFlag"
                      }
                    ],
                    staticClass: "control_button",
                    attrs: {
                      disabled: !_vm.showIds.length,
                      loading: _vm.isButtonLoading
                    },
                    on: {
                      click: function($event) {
                        return _vm.moveClick("down")
                      }
                    }
                  },
                  [_vm._v("\n          ??????\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "ax-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.mergeShowFlag,
                        expression: "mergeShowFlag"
                      }
                    ],
                    staticClass: "control_button",
                    attrs: { loading: _vm.isButtonLoading },
                    on: {
                      click: function($event) {
                        return _vm.mergeClick("up")
                      }
                    }
                  },
                  [_vm._v("\n          ????????????\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "ax-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.mergeShowFlag,
                        expression: "mergeShowFlag"
                      }
                    ],
                    staticClass: "control_button",
                    attrs: { loading: _vm.isButtonLoading },
                    on: {
                      click: function($event) {
                        return _vm.mergeClick("down")
                      }
                    }
                  },
                  [_vm._v("\n          ????????????\n        ")]
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ]
  )
}
var custom_transfervue_type_template_id_16960089_staticRenderFns = []
custom_transfervue_type_template_id_16960089_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-table/src/custom-transfer.vue?vue&type=template&id=16960089&

// EXTERNAL MODULE: external "element-ui/lib/transfer"
var transfer_ = __webpack_require__(39);
var transfer_default = /*#__PURE__*/__webpack_require__.n(transfer_);

// EXTERNAL MODULE: external "core-js/modules/es.array.flat.js"
var es_array_flat_js_ = __webpack_require__(62);

// EXTERNAL MODULE: external "core-js/modules/es.set.js"
var es_set_js_ = __webpack_require__(51);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-table/src/custom-transfer.vue?vue&type=script&lang=ts&










var custom_transfervue_type_script_lang_ts_components;






















var custom_transfervue_type_script_lang_ts_CustomTransfer = /*#__PURE__*/function (_Vue) {
  _inherits(CustomTransfer, _Vue);

  var _super = _createSuper(CustomTransfer);

  function CustomTransfer() {
    var _this;

    _classCallCheck(this, CustomTransfer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "loadColumn", void 0);

    _defineProperty(_assertThisInitialized(_this), "flag", void 0);

    _defineProperty(_assertThisInitialized(_this), "config", void 0);

    _defineProperty(_assertThisInitialized(_this), "totalData", void 0);

    _defineProperty(_assertThisInitialized(_this), "showData", void 0);

    _defineProperty(_assertThisInitialized(_this), "axLang", ax_com_core.getAxLang());

    _defineProperty(_assertThisInitialized(_this), "isButtonLoading", false);

    _defineProperty(_assertThisInitialized(_this), "mergeShowFlag", false);

    _defineProperty(_assertThisInitialized(_this), "titles", [_this.axLang.text('table.column.hide'), _this.axLang.text('table.column.show')]);

    _defineProperty(_assertThisInitialized(_this), "hideIds", []);

    _defineProperty(_assertThisInitialized(_this), "hideColumn", []);

    _defineProperty(_assertThisInitialized(_this), "ids", []);

    _defineProperty(_assertThisInitialized(_this), "showIds", []);

    _defineProperty(_assertThisInitialized(_this), "showIdsOrigin", []);

    _defineProperty(_assertThisInitialized(_this), "showColumn", []);

    _defineProperty(_assertThisInitialized(_this), "showList", []);

    _defineProperty(_assertThisInitialized(_this), "hideList", []);

    return _this;
  }

  _createClass(CustomTransfer, [{
    key: "loadColumnData",
    value: function loadColumnData() {
      if (!this.loadColumn) {
        return;
      }

      this.loadColumn().then(function (res) {});
    } // dialog ??????

  }, {
    key: "flagWatch",
    value: function flagWatch(val) {
      var _this2 = this;

      if (val) {
        this.$nextTick(function () {
          if (!_this2.showData) {
            return;
          } // ?????? showList


          _this2.showList = _this2.showData.filter(function (item) {
            return !item.isHide;
          }); // ?????? hideList

          _this2.hideList = _this2.getHideData(_this2.showList);
        });
      }
    }
  }, {
    key: "getHideData",
    value: // ????????????????????? ??? showList,????????????
    function getHideData(showList) {
      if (!this.totalData || !this.config) {
        return [];
      }

      var key = this.config.key;
      var showMap = new Map(); // ?????? Map ??????

      var _iterator = _createForOfIteratorHelper(showList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          showMap.set(item[key], item);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var hideList = []; // ????????? totalData ?????????

      var _iterator2 = _createForOfIteratorHelper(this.totalData),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var jtem = _step2.value;
          var target = showMap.get(jtem[key]); // ????????????????????????

          if (!target) {
            hideList.push(jtem);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return hideList;
    }
    /**
     * ??????????????????
     * @params value ?????????
     * @params checkedKeys ?????????
     * @return ?????????
     */

  }, {
    key: "isContinue",
    value: function isContinue(value, checkedKeys) {
      // ???????????? Map ??????,  ???:??????
      var tempMap = new Map();

      for (var index = 0; index < value.length; index++) {
        var element = value[index];
        tempMap.set(element, index);
      } // ?????? index ?????????


      var indexList = [];

      var _iterator3 = _createForOfIteratorHelper(checkedKeys),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var iterator = _step3.value;
          indexList.push(tempMap.get(iterator));
        } // ???????????????,????????????????????????????????????index,?????????????????????

      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var preNum = 0;

      for (var jndex = 0; jndex < indexList.length; jndex++) {
        // ????????????
        var currentNum = indexList[jndex]; // ??????????????????

        if (jndex === 0) {
          preNum = currentNum;
        } else {
          // ????????????????????????????????????index,????????????????????????
          if (currentNum - preNum !== jndex) {
            return false;
          } else {
            continue;
          }
        }
      } // ????????????,??????????????? true ???


      return true;
    }
    /***********????????????**************/
    // ?????????????????????

  }, {
    key: "selectionChangeLeft",
    value: function selectionChangeLeft(hideIds) {
      this.hideIds = hideIds;
    } // ?????????????????????

  }, {
    key: "selectionChangeRight",
    value: function selectionChangeRight(showIds) {
      // ?????????????????????????????????
      if (this.isButtonLoading) {
        return;
      } // ??????????????? showMap ??? key


      var totalShowIds = this.$refs.showTable.getTotalIds(); // ??????????????????

      this.showIdsOrigin = showIds; // ???????????????

      this.showIds = this.checkedKeysCorrect(showIds); // ???????????????,?????????????????????,????????? "????????????" ??????

      if (!this.showIds.length) {
        return;
      }

      if (this.showIds.length <= 1) {
        this.mergeShowFlag = false;
      } else if (this.showIds.length > 1) {
        // ??????????????????
        if (this.isContinue(totalShowIds, this.showIds)) {
          // ???????????????,??????????????????,??????????????????
          this.mergeShowFlag = false;
        } else {
          this.mergeShowFlag = true;
        }
      }
    }
    /**
     * ?????? ???????????????????????????
     */

  }, {
    key: "checkedKeysCorrect",
    value: function checkedKeysCorrect(origin) {
      var _this3 = this;

      if (!this.config) {
        return [];
      } //     ?????????????????? indexList


      var indexList = [];
      var attr = this.config.key;

      var _iterator4 = _createForOfIteratorHelper(origin),
          _step4;

      try {
        var _loop = function _loop() {
          var item = _step4.value;

          var totalKeys = _this3.$refs.showTable.getTotalIds();

          var index = totalKeys.findIndex(function (jtem) {
            return jtem === item;
          });
          indexList.push(index);
        };

        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          _loop();
        } //  ???????????? indexList

      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      indexList.sort(function (a, b) {
        return a - b;
      }); // ?????? tableColumnLoad ??????????????????

      var tableValues = this.$refs.showTable.getTotalValues();
      return indexList.map(function (item) {
        return tableValues[item][attr];
      });
    }
    /**
     * ?????????,??????????????????
     */

  }, {
    key: "showChecked",
    value: function showChecked() {
      if (this.isButtonLoading) {
        // ???????????????
        var _iterator5 = _createForOfIteratorHelper(this.showIdsOrigin),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var iterator = _step5.value;
            this.$refs.showTable.setDataCheck(iterator);
          } // ?????? loading

        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        this.isButtonLoading = false;
      }
    }
    /***********????????????**************/
    // ?????? => ??????

  }, {
    key: "leftToRight",
    value: function leftToRight() {
      if (!this.config) return;

      var _iterator6 = _createForOfIteratorHelper(this.hideIds),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var item = _step6.value;
          // const target = this.hideMap.get(item);
          var target = this.$refs.hideTable.getDataById(item);

          if (target) {
            // ?????? showMap
            this.$refs.showTable.addData(target); // ??????

            this.$refs.hideTable.delete(item);
          }
        } // ?????? showList hideList

      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      this.showList = this.$refs.showTable.getTotalValues();
      this.hideList = this.$refs.hideTable.getTotalValues();
    } // ?????? => ??????

  }, {
    key: "rightToLeft",
    value: function rightToLeft() {
      if (!this.config) return;

      var _iterator7 = _createForOfIteratorHelper(this.showIds),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var item = _step7.value;
          // ?????? hideMap ??????
          var target = this.$refs.showTable.getDataById(item);

          if (target) {
            // ?????? hide
            this.$refs.hideTable.addData(target); // ?????? show

            this.$refs.showTable.delete(item);
          }
        } // ?????? showList hideList

      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      this.showList = this.$refs.showTable.getTotalValues();
      this.hideList = this.$refs.hideTable.getTotalValues();
    }
    /**
     * ??????????????????
     * @params value ????????????????????????v-model???
     * @params checkedKeys ???????????????
     * @params str ?????????????????????,???????????? 'up'
     */

  }, {
    key: "move",
    value: function move(value, checkedKeys, str) {
      // ?????????????????????????????????
      var defineKey = '';

      if (str === 'up') {
        defineKey = checkedKeys[0];
      } else if (str === 'down') {
        defineKey = checkedKeys[checkedKeys.length - 1];
      } else {
        defineKey = checkedKeys[0];
      } // ??????????????????


      var index = value.findIndex(function (item) {
        return item === defineKey;
      });

      if (str === 'up') {
        // ????????????????????????
        index <= 0 && index--;
      } else if (str === 'down') {
        // ????????????????????????
        index >= value.length - 1 ? index++ : index = index + 2;
        defineKey = checkedKeys[checkedKeys.length - 1];
      } else {
        index <= 0 && index--;
      } // ????????? value


      var tempValue = JSON.parse(JSON.stringify(value)); // ?????? ??????

      tempValue.splice(index, 0, checkedKeys); // ???????????? Map ??????

      var tempMap = new Map();

      var _iterator8 = _createForOfIteratorHelper(tempValue),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var item = _step8.value;
          tempMap.set(item, item);
        } // ?????? checkedKeys ?????????

      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      var _iterator9 = _createForOfIteratorHelper(checkedKeys),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _item = _step9.value;
          tempMap.delete(_item);
        } //  ???????????????????????????

      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      var temp = _toConsumableArray(tempMap.values()); // ?????????


      return temp.flat();
    }
    /**
     * ??????????????????
     * @params value ??????????????? key
     * @params checkedKeys ???????????????
     * @params str ?????????????????????,???????????? 'up'
     */

  }, {
    key: "merge",
    value: function merge(value, checkedKeys, str) {
      // ?????????????????????????????????
      var defineKey = '';

      if (str === 'up') {
        defineKey = checkedKeys[0];
      } else if (str === 'down') {
        defineKey = checkedKeys[checkedKeys.length - 1];
      } else {
        defineKey = checkedKeys[0];
      } // ??????????????????


      var index = value.findIndex(function (item) {
        return item === defineKey;
      }); // ????????? value

      var tempValue = JSON.parse(JSON.stringify(value)); // const tempValue = value;
      // ???????????????

      tempValue.splice(index, 1, checkedKeys); // ???????????? Map ??????

      var tempMap = new Map();

      var _iterator10 = _createForOfIteratorHelper(tempValue),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var item = _step10.value;
          tempMap.set(item, item);
        } // ?????? checkedKeys ?????????

      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      var _iterator11 = _createForOfIteratorHelper(checkedKeys),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var _item2 = _step11.value;
          tempMap.delete(_item2);
        } //  ???????????????????????????

      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      var temp = _toConsumableArray(tempMap.values()); // ?????????


      return temp.flat();
    }
    /**
     * ????????????
     */

  }, {
    key: "moveClick",
    value: function moveClick(str) {
      var _this4 = this;

      // ???????????????????????????
      var keys = this.$refs.showTable.getTotalIds();
      var showRes = [];

      if (str === 'up') {
        showRes = this.move(keys, this.showIds, str);
      } else if (str === 'down') {
        showRes = this.move(keys, this.showIds, str);
      } else {
        showRes = this.move(keys, this.showIds, 'up');
      }

      this.isButtonLoading = true; // ????????????

      this.showList = showRes.map(function (item) {
        return _this4.$refs.showTable.getDataById(item);
      }); // ???????????????

      this.$nextTick(function () {
        _this4.showChecked();
      });
    }
    /**
     * ????????????
     */

  }, {
    key: "mergeClick",
    value: function mergeClick(str) {
      var _this5 = this;

      // ???????????????????????????
      var keys = this.$refs.showTable.getTotalIds();
      var showRes = [];

      if (str === 'up') {
        showRes = this.merge(keys, this.showIds, str);
      } else if (str === 'down') {
        showRes = this.merge(keys, this.showIds, str);
      } else {
        showRes = this.merge(keys, this.showIds, 'up');
      }

      this.isButtonLoading = true; // ????????????

      this.showList = showRes.map(function (item) {
        return _this5.$refs.showTable.getDataById(item);
      }); // ??????????????????

      this.mergeShowFlag = false; // ???????????????

      this.$nextTick(function () {
        _this5.showChecked();
      });
    }
    /***********??????????????????**************/
    // ?????????

  }, {
    key: "mergeUp",
    value: function mergeUp() {
      var _this6 = this;

      // TODO: ??? showMap ,??????????????? showList
      // TODO: showIds ?????????????????? , showList ?????????
      // ????????????????????? ???????????? getTotalIds()
      var listValue = this.$refs.showTable.getTotalIds(); // ?????????????????????,?????? Map

      var selectedSet = new Set(); // ????????????????????????????????????

      var _iterator12 = _createForOfIteratorHelper(this.showIds),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var item = _step12.value;
          selectedSet.add(item);
        } // ??????????????????

      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      var res = []; // ??????????????????

      var startted = false; // ?????????????????????????????????

      var index = 0; // ???????????????????????????

      var _iterator13 = _createForOfIteratorHelper(listValue),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var _item3 = _step13.value;

          // ??????????????????????????????
          if (selectedSet.has(_item3)) {
            // ???????????????????????????
            if (!startted) {
              // ??????????????????
              startted = true; // TODO:
              // ?????????????????????
            } // ????????????,?????????????????????,??????????????????????????????


            res.push(_item3);
          } else {
            // ?????????????????????
            res.push(_item3);
          }
        } // ????????????,??????

      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      this.showList = res.map(function (item) {
        return _this6.$refs.showTable.getDataById(item);
      });
      return res;
    } // ?????????

  }, {
    key: "mergeDown",
    value: function mergeDown() {
      var _this7 = this;

      // TODO: ??? showMap ,??????????????? showList
      // ????????????????????? ???????????? getTotalIds()
      var listValue = this.$refs.showTable.getTotalIds(); // ?????????????????????

      var selectedSet = new Set(); // ????????????????????????????????????

      var _iterator14 = _createForOfIteratorHelper(this.showIds),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var item = _step14.value;
          selectedSet.add(item);
        } // ??????????????????

      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }

      var res = []; // ??????????????????

      var endLen = 0; // ?????????????????????

      var _iterator15 = _createForOfIteratorHelper(listValue),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var _item4 = _step15.value;

          // ??????????????????????????????
          if (selectedSet.has(_item4)) {
            // ???????????????????????????
            endLen++; // ?????? ?????????????????????,endLen ???????????????

            if (endLen === this.showIds.length) {
              res.push.apply(res, _toConsumableArray(this.showIds));
            }
          } else {
            // ?????????????????????
            res.push(_item4);
          }
        } // ????????????,??????

      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      this.showList = res.map(function (item) {
        return _this7.$refs.showTable.getDataById(item);
      });
      return res;
    }
    /***********public ????????????**************/

    /***********emit ????????????**************/

    /**
     * ??????????????????
     */

  }, {
    key: "close",
    value: function close(event) {
      this.$emit('flagChange', false);
      this.isButtonLoading = false;
    }
    /**
     * ?????? ??????
     */

  }, {
    key: "okClose",
    value: function okClose(e) {
      //  ??????:  ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
      // ???????????????????????????
      var keys = this.$refs.showTable.getTotalIds();
      var values = this.$refs.showTable.getTotalValues();

      if (!keys.length) {
        ax_message_AxMessage.alert(this.axLang.text('table.column.error'));
        return;
      }

      this.$emit('confirm', keys, values); // ????????????

      this.$emit('flagChange', false);
    }
    /***********????????????**************/

  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "created",
    value: function created() {
      this.hideColumn = [{
        label: '?????????',
        name: this.config ? this.config.label : 'label',
        align: 'center'
      }];
      this.showColumn = [{
        label: '?????????',
        name: this.config ? this.config.label : 'label',
        align: 'center'
      }];
    }
  }]);

  return CustomTransfer;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], custom_transfervue_type_script_lang_ts_CustomTransfer.prototype, "loadColumn", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Model"])('flagChange', {
  type: Boolean
})], custom_transfervue_type_script_lang_ts_CustomTransfer.prototype, "flag", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('flag')], custom_transfervue_type_script_lang_ts_CustomTransfer.prototype, "flagWatch", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {
      key: 'name',
      label: 'label'
    };
  }
})], custom_transfervue_type_script_lang_ts_CustomTransfer.prototype, "config", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [{
      label: '??????',
      name: 'ptype',
      align: 'center',
      isEdit: true
    }, {
      label: '????????????',
      name: 'stype',
      align: 'center',
      isEdit: true
    }, {
      label: '??????',
      name: 'zh_CN',
      align: 'center',
      isEdit: true
    }, {
      label: '??????',
      name: 'en_US',
      align: 'center',
      isEdit: true
    }, {
      label: '??????',
      name: 'chs',
      align: 'center',
      isEdit: true
    }, {
      label: '??????',
      name: 'lat',
      align: 'center',
      isEdit: true
    }, {
      label: '??????',
      name: 'lon',
      align: 'center',
      isEdit: true
    }, {
      label: '??????',
      name: 'desc',
      align: 'center',
      isEdit: true
    }];
  }
})], custom_transfervue_type_script_lang_ts_CustomTransfer.prototype, "totalData", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [{
      label: '??????',
      name: 'ptype',
      align: 'center',
      isEdit: true
    }, {
      label: '??????',
      name: 'zh_CN',
      align: 'center',
      isEdit: true
    }, {
      label: '??????',
      name: 'en_US',
      align: 'center',
      isEdit: true
    }, {
      label: '??????',
      name: 'chs',
      align: 'center',
      isEdit: true
    }, {
      label: '??????',
      name: 'lat',
      align: 'center',
      isEdit: true
    }, {
      label: '??????',
      name: 'desc',
      align: 'center',
      isEdit: true
    }];
  }
})], custom_transfervue_type_script_lang_ts_CustomTransfer.prototype, "showData", void 0);

custom_transfervue_type_script_lang_ts_CustomTransfer = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  name: 'custom-transfer',
  components: (custom_transfervue_type_script_lang_ts_components = {}, _defineProperty(custom_transfervue_type_script_lang_ts_components, transfer_default.a.name, transfer_default.a), _defineProperty(custom_transfervue_type_script_lang_ts_components, "AxButton", ax_button), _defineProperty(custom_transfervue_type_script_lang_ts_components, "AxDialog", ax_dialog), _defineProperty(custom_transfervue_type_script_lang_ts_components, "AxTable", table), custom_transfervue_type_script_lang_ts_components)
})], custom_transfervue_type_script_lang_ts_CustomTransfer);
/* harmony default export */ var custom_transfervue_type_script_lang_ts_ = (custom_transfervue_type_script_lang_ts_CustomTransfer);
// CONCATENATED MODULE: ./packages/ax-table/src/custom-transfer.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_custom_transfervue_type_script_lang_ts_ = (custom_transfervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-table/src/custom-transfer.vue





/* normalize component */

var custom_transfer_component = normalizeComponent(
  src_custom_transfervue_type_script_lang_ts_,
  custom_transfervue_type_template_id_16960089_render,
  custom_transfervue_type_template_id_16960089_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var custom_transfer_api; }
custom_transfer_component.options.__file = "packages/ax-table/src/custom-transfer.vue"
/* harmony default export */ var custom_transfer = (custom_transfer_component.exports);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-table/src/edit-cell.vue?vue&type=template&id=462e64f2&
var edit_cellvue_type_template_id_462e64f2_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.editMode && _vm.column.isEdit && !_vm.editFlag
    ? _c(
        "span",
        {
          staticClass: "editable_cell",
          class: ["align_" + _vm.align],
          domProps: {
            innerHTML: _vm._s(
              _vm.column.translate
                ? _vm.column.translate(
                    _vm.scope.row[_vm.getAttr("name")],
                    _vm.scope.row
                  )
                : _vm.scope.row[_vm.getAttr("name")]
            )
          },
          on: { dblclick: _vm.dblclick }
        },
        [
          _c("span", { staticClass: "editable_cell_box" }, [
            _c("span", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.correctFlag,
                  expression: "correctFlag"
                }
              ],
              staticClass: "editable_cell_triangle"
            })
          ])
        ]
      )
    : _vm.editMode && _vm.column.isEdit && _vm.editFlag
    ? _c(
        "div",
        { staticClass: "cell_edit_input" },
        [
          _c(
            "ax-form",
            {
              ref: _vm.scope.column[_vm.keyId] + "_row_" + _vm.scope.$index,
              attrs: {
                data: _vm.scope.row,
                config: _vm.column.editConfig,
                tooltip: true
              },
              on: { showTooltip: _vm.showTooltip }
            },
            [
              _c(
                "ax-tooltip",
                {
                  ref: "tooltip",
                  attrs: {
                    tips: _vm.tipText,
                    placement: "bottom",
                    manual: true,
                    offset: _vm.tipOffset,
                    show: _vm.tipShow
                  }
                },
                [
                  _c("ax-input", {
                    ref: "axInput",
                    attrs: {
                      name: _vm.column.name,
                      placeholder: "???????????????",
                      clearable: false,
                      autofocus: true
                    },
                    on: {
                      blur: function($event) {
                        _vm.elInputBlur(
                          _vm.column.name,
                          _vm.scope.row[_vm.getAttr("name")]
                        )
                      }
                    },
                    model: {
                      value: _vm.scope.row[_vm.getAttr("name")],
                      callback: function($$v) {
                        _vm.$set(_vm.scope.row, _vm.getAttr("name"), $$v)
                      },
                      expression: "scope.row[getAttr('name')]"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    : !_vm.editMode || (!_vm.column.isEdit && !_vm.column.isImage)
    ? _c("span", {
        class: [
          _vm.column.isLink ? "table_underline" : "",
          "align_" + _vm.align
        ],
        domProps: {
          innerHTML: _vm._s(
            _vm.column.translate
              ? _vm.column.translate(
                  _vm.scope.row[_vm.getAttr("name")],
                  _vm.scope.row
                )
              : _vm.scope.row[_vm.getAttr("name")]
          )
        },
        on: { click: _vm.cellLinkClick }
      })
    : _vm.column.isImage
    ? _c("div", { staticClass: "table_img" }, [
        _c("img", { attrs: { src: _vm.scope.row[_vm.getAttr("name")] } })
      ])
    : _vm._e()
}
var edit_cellvue_type_template_id_462e64f2_staticRenderFns = []
edit_cellvue_type_template_id_462e64f2_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-table/src/edit-cell.vue?vue&type=template&id=462e64f2&

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-table/src/edit-cell.vue?vue&type=script&lang=ts&





















var edit_cellvue_type_script_lang_ts_EditCell = /*#__PURE__*/function (_Vue) {
  _inherits(EditCell, _Vue);

  var _super = _createSuper(EditCell);

  function EditCell() {
    var _this;

    _classCallCheck(this, EditCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "keyId", void 0);

    _defineProperty(_assertThisInitialized(_this), "index", void 0);

    _defineProperty(_assertThisInitialized(_this), "editMode", void 0);

    _defineProperty(_assertThisInitialized(_this), "totalColumn", void 0);

    _defineProperty(_assertThisInitialized(_this), "noEditIds", void 0);

    _defineProperty(_assertThisInitialized(_this), "editrowconfig", void 0);

    _defineProperty(_assertThisInitialized(_this), "tipOffset", void 0);

    _defineProperty(_assertThisInitialized(_this), "align", void 0);

    _defineProperty(_assertThisInitialized(_this), "scope", void 0);

    _defineProperty(_assertThisInitialized(_this), "column", void 0);

    _defineProperty(_assertThisInitialized(_this), "editFlag", false);

    _defineProperty(_assertThisInitialized(_this), "correctFlag", false);

    _defineProperty(_assertThisInitialized(_this), "tempValue", '');

    _defineProperty(_assertThisInitialized(_this), "tipText", '');

    _defineProperty(_assertThisInitialized(_this), "tipShow", false);

    return _this;
  }

  _createClass(EditCell, [{
    key: "isNoEdit",
    value: function isNoEdit() {
      // ????????????id??????,?????? column.isEdit ?????????false???
      if (!this.noEditIds || !this.keyId) {
        return false;
      }

      if (this.editrowconfig && !this.isCellEdit()) {
        return true;
      }

      var noEditIds = this.noEditIds;
      var row = this.scope.row; // ????????????????????????

      if (Array.isArray(row)) {
        //  ???????????????
        return !!row.filter(function (v) {
          return noEditIds.includes(v);
        }).length;
      } else {
        var keyId = this.keyId;
        return !!noEditIds.find(function (item) {
          return item === row[keyId];
        });
      }
    } // ????????????

  }, {
    key: "elInputBlur",
    value:
    /*******************************??????******************************/

    /**
     * input ?????????????????????,emit ??????
     */
    function () {
      var _elInputBlur = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(attr, value) {
        var refName;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!this.scope || !this.column || !this.totalColumn || !this.keyId)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                refName = "".concat(this.scope.column[this.keyId], "_row_").concat(this.scope.$index);
                this.$emit('cellBlur', this, refName, attr);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function elInputBlur(_x, _x2) {
        return _elInputBlur.apply(this, arguments);
      }

      return elInputBlur;
    }()
    /**
     * ????????????????????????
     */

  }, {
    key: "cellLinkClick",
    value: function cellLinkClick() {
      // ????????????????????? ??????????????????
      if (!this.column) {
        return;
      }

      if (this.column.isLink) {
        this.$emit('cellLinkClick', this.scope, this.index);
      }
    }
    /**
     * ??????????????????
     */

  }, {
    key: "clearCorrect",
    value: function clearCorrect() {
      this.correctFlag = false;
      this.editFlag = false;
    }
    /*******************************????????????******************************/

  }, {
    key: "dblclick",
    value: function dblclick() {
      var _this2 = this;

      // ???????????????????????????
      if (this.isNoEdit()) {
        // ??????????????? cell ????????????????????????
        // showNotify('???????????????');
        return;
      } // ????????? tooltip ??????


      this.showTooltip(false);
      this.editFlag = true; // ?????????????????????

      this.tempValue = this.scope.row[this.getAttr('name')]; // ?????????input?????????,???input??????????????????

      this.$nextTick(function () {
        _this2.$refs.axInput.focus();
      });
    }
    /**
     * ?????????????????????,???????????????????????????????????????
     */

  }, {
    key: "getAttr",
    value: function getAttr(attr) {
      if (!this.totalColumn || !this.column || !this.scope) {
        return undefined;
      } // ?????????????????????????????????


      if (Array.isArray(this.scope.row)) {
        var target = this.column[attr]; // ??????????????????????????? index ??????

        return this.totalColumn.findIndex(function (item) {
          return target === item;
        });
      } else {
        // ?????????????????????????????????,????????? ??????id????????????
        return this.column[attr];
      }
    } // ------------------- ???????????? -------------------
    // ??????????????????

  }, {
    key: "showTooltip",
    value:
    /**
     * ????????????????????????
     * @param show
     * @param tip
     */
    function showTooltip(show, tip) {
      // ????????????
      this.tipShow = show; // ????????????

      this.tipText = tip && show ? tip.message || '' : '';
    }
    /**
     * ????????????
     * @param data
     */
    // private inputChange(data: any) {
    //   // ?????????????????????????????????
    //   this.showTooltip(false);
    // }

  }, {
    key: "isCellEdit",
    value: function isCellEdit() {
      if (!this.column || !this.scope) {
        return '';
      }

      var row = this.scope.row;
      var configkey = row[this.editrowconfig.key];
      var config = this.editrowconfig.filterconfig[configkey] || [];

      if (config.indexOf(this.column.name) !== -1) {
        this.$emit('cellDbClick', row);
        return false;
      } else {
        return true;
      }
    }
  }]);

  return EditCell;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'id'
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "keyId", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 0
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "index", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "editMode", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "totalColumn", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "noEditIds", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "editrowconfig", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 0
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "tipOffset", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '',
  type: String
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "align", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {};
  }
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "scope", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {};
  }
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "column", void 0);

edit_cellvue_type_script_lang_ts_EditCell = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  name: 'edit-cell',
  components: {
    AxInput: ax_input,
    AxForm: ax_form,
    AxTooltip: ax_tooltip
  }
})], edit_cellvue_type_script_lang_ts_EditCell);
/* harmony default export */ var edit_cellvue_type_script_lang_ts_ = (edit_cellvue_type_script_lang_ts_EditCell);
// CONCATENATED MODULE: ./packages/ax-table/src/edit-cell.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_edit_cellvue_type_script_lang_ts_ = (edit_cellvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-table/src/edit-cell.vue





/* normalize component */

var edit_cell_component = normalizeComponent(
  src_edit_cellvue_type_script_lang_ts_,
  edit_cellvue_type_template_id_462e64f2_render,
  edit_cellvue_type_template_id_462e64f2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var edit_cell_api; }
edit_cell_component.options.__file = "packages/ax-table/src/edit-cell.vue"
/* harmony default export */ var edit_cell = (edit_cell_component.exports);
// CONCATENATED MODULE: ./packages/ax-table/src/table-core.ts










var table_core_TableHandler = /*#__PURE__*/function () {
  function TableHandler() {
    _classCallCheck(this, TableHandler);

    _defineProperty(this, "dataMap", new Map());

    _defineProperty(this, "totalColumn", []);
  }

  _createClass(TableHandler, [{
    key: "setColumn",
    value: // ?????????
    function setColumn(val) {
      this.totalColumn = val;
    }
    /**
     * ?????? dataMap,????????? Map ????????????,????????????
     * @param data ????????????
     * @param attrList ???????????????????????????
     * @param attr ??????????????????????????? Map ????????? key ???
     */

  }, {
    key: "createMapData",
    value: function createMapData(data, attrList) {
      var attr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';

      // ??????????????????
      if (!data) {
        return;
      }

      this.dataMap.clear(); // ??????

      if (data[0] instanceof Array) {
        // ???????????? id ????????? index ??????
        var index = attrList.findIndex(function (item) {
          return attr === item;
        });

        var _iterator = _createForOfIteratorHelper(data),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var value = _step.value;
            // ???????????????
            var tempObj = {};

            for (var jndex = 0; jndex < attrList.length; jndex++) {
              var jtem = attrList[jndex];
              tempObj[jtem] = value[jndex];
            }

            tempObj.data = value; // ??????????????? id ?????? key

            this.dataMap.set(value[index], tempObj);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else if (data[0] instanceof Object) {
        // ?????????????????????????????????,
        // ?????????????????? id ????????????
        var _iterator2 = _createForOfIteratorHelper(data),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var obj = _step2.value;
            // ??????????????? id ?????? key
            this.dataMap.set(obj[attr], _objectSpread2(_objectSpread2({}, obj), {}, {
              data: obj
            }));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
    /**
     * ?????????????????????,???????????????????????????????????????
     * @param attr ???????????????
     * @param value ??????map??????
     */

  }, {
    key: "getValue",
    value: function getValue(attr, value) {
      // ?????????????????????????????????
      if (value instanceof Array) {
        // ??????????????????????????? index ??????
        return value[this.totalColumn.findIndex(function (item) {
          return item === attr;
        })];
      } else if (value instanceof Object) {
        // ?????????????????????????????????,????????? ??????id????????????
        return value[attr];
      }
    }
    /**
     * ??????????????????,???????????????????????????
     * @param key ???
     * @param value ???
     */

  }, {
    key: "setData",
    value: function setData(key, value) {
      // Map ??????????????????
      var final = {};

      if (value instanceof Array) {
        if (!this.totalColumn) {
          return;
        } // ???????????? id ????????? index ??????


        var tempObj = {};

        for (var jndex = 0; jndex < this.totalColumn.length; jndex++) {
          var jtem = this.totalColumn[jndex];
          tempObj[jtem] = value[jndex];
        }

        final = _objectSpread2(_objectSpread2({}, tempObj), {}, {
          data: value
        });
        this.dataMap.set(key, final);
      } else if (value instanceof Object) {
        // ?????????????????????????????????,
        // ?????????????????? id ????????????
        final = _objectSpread2(_objectSpread2({}, value), {}, {
          data: value
        });
        this.dataMap.set(key, final);
      }

      return final;
    }
  }]);

  return TableHandler;
}();
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-table/src/table-head.vue?vue&type=template&id=32b1b2ad&
var table_headvue_type_template_id_32b1b2ad_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "table_head",
      on: { mouseover: _vm.headMouseover, mouseout: _vm.headMouseout }
    },
    [
      _vm.headMode
        ? _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.column.ASC,
                expression: "column.ASC"
              }
            ],
            staticClass: "table_head_name_icon ax_icon_arrow_up"
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.headMode
        ? _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.column.DESC,
                expression: "column.DESC"
              }
            ],
            staticClass: "table_head_name_icon ax_icon_arrow_down"
          })
        : _vm._e(),
      _vm._v(" "),
      _c("span", { staticClass: "table_head_text" }, [
        _vm._v(_vm._s(_vm.scope.column.label))
      ]),
      _vm._v(" "),
      _vm.showMenu
        ? _c(
            "div",
            {
              staticClass: "table_head_search",
              on: { click: _vm.headIconClick }
            },
            [
              _c("div", {
                staticClass: "triangle-down icon",
                style: _vm.visibility
              }),
              _vm._v(" "),
              _c("div", { staticClass: "table_head_panel" })
            ]
          )
        : _vm._e()
    ]
  )
}
var table_headvue_type_template_id_32b1b2ad_staticRenderFns = []
table_headvue_type_template_id_32b1b2ad_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-table/src/table-head.vue?vue&type=template&id=32b1b2ad&

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-table/src/table-head.vue?vue&type=script&lang=ts&













var table_headvue_type_script_lang_ts_TableHead = /*#__PURE__*/function (_Vue) {
  _inherits(TableHead, _Vue);

  var _super = _createSuper(TableHead);

  function TableHead() {
    var _this;

    _classCallCheck(this, TableHead);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "showMenu", void 0);

    _defineProperty(_assertThisInitialized(_this), "headMode", void 0);

    _defineProperty(_assertThisInitialized(_this), "scope", void 0);

    _defineProperty(_assertThisInitialized(_this), "column", void 0);

    _defineProperty(_assertThisInitialized(_this), "visibility", 'visibility:hidden');

    _defineProperty(_assertThisInitialized(_this), "tipShow", false);

    return _this;
  }

  _createClass(TableHead, [{
    key: "headIconClick",
    value:
    /*******************************??????******************************/
    function headIconClick(e) {
      this.$emit('headIconClick', e);
      app_core_framework_["AxDomUtils"].cancelDomEventBubble(e);
    }
    /*******************************????????????******************************/

  }, {
    key: "headMouseover",
    value: function headMouseover(event) {
      this.visibility = 'visibility:visible';
      event = event || window.event;
      this.tipShow = ax_com_core.isEllipsis(event.target);
    }
  }, {
    key: "headMouseout",
    value: function headMouseout(event) {
      this.visibility = 'visibility:hidden';
      this.tipShow = false;
    }
  }]);

  return TableHead;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], table_headvue_type_script_lang_ts_TableHead.prototype, "showMenu", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], table_headvue_type_script_lang_ts_TableHead.prototype, "headMode", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {};
  }
})], table_headvue_type_script_lang_ts_TableHead.prototype, "scope", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {};
  }
})], table_headvue_type_script_lang_ts_TableHead.prototype, "column", void 0);

table_headvue_type_script_lang_ts_TableHead = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  name: 'table-head',
  components: {
    AxTooltip: ax_tooltip
  }
})], table_headvue_type_script_lang_ts_TableHead);
/* harmony default export */ var table_headvue_type_script_lang_ts_ = (table_headvue_type_script_lang_ts_TableHead);
// CONCATENATED MODULE: ./packages/ax-table/src/table-head.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_table_headvue_type_script_lang_ts_ = (table_headvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-table/src/table-head.vue





/* normalize component */

var table_head_component = normalizeComponent(
  src_table_headvue_type_script_lang_ts_,
  table_headvue_type_template_id_32b1b2ad_render,
  table_headvue_type_template_id_32b1b2ad_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var table_head_api; }
table_head_component.options.__file = "packages/ax-table/src/table-head.vue"
/* harmony default export */ var table_head = (table_head_component.exports);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-table/src/table.vue?vue&type=script&lang=ts&















var tablevue_type_script_lang_ts_components;






























/**************??????**************/

var scrollTopTemp = 0; // ???????????????????????????

external_vue_property_decorator_["Vue"].directive('tableLoadMore', {
  bind: function bind(el, binding) {
    var eleWrapper = el.querySelector('.el-table__body-wrapper');
    eleWrapper.addEventListener('scroll', function () {
      // ?????????????????????
      if (Math.abs(scrollTopTemp - eleWrapper.scrollTop) < 1) {
        return;
      }

      scrollTopTemp = eleWrapper.scrollTop; // ??????????????????????????????????????????

      var sign = 15; // ??????????????????

      var dis = eleWrapper.scrollHeight - eleWrapper.scrollTop - eleWrapper.clientHeight;

      if (dis < sign) {
        binding.value();
      }
    });
  }
}); // table????????????Element???loading??????

external_vue_property_decorator_["Vue"].use(loading_default.a);

var tablevue_type_script_lang_ts_AxTable = /*#__PURE__*/function (_Vue) {
  _inherits(AxTable, _Vue);

  var _super = _createSuper(AxTable);

  function AxTable() {
    var _this;

    _classCallCheck(this, AxTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "tableColumn", void 0);

    _defineProperty(_assertThisInitialized(_this), "columnList", void 0);

    _defineProperty(_assertThisInitialized(_this), "operation", void 0);

    _defineProperty(_assertThisInitialized(_this), "tableData", void 0);

    _defineProperty(_assertThisInitialized(_this), "editrowconfig", void 0);

    _defineProperty(_assertThisInitialized(_this), "keyId", void 0);

    _defineProperty(_assertThisInitialized(_this), "noEditIds", void 0);

    _defineProperty(_assertThisInitialized(_this), "enableHeaderCustom", void 0);

    _defineProperty(_assertThisInitialized(_this), "showIndex", void 0);

    _defineProperty(_assertThisInitialized(_this), "showRefresh", void 0);

    _defineProperty(_assertThisInitialized(_this), "boxType", void 0);

    _defineProperty(_assertThisInitialized(_this), "showMenu", void 0);

    _defineProperty(_assertThisInitialized(_this), "loading", void 0);

    _defineProperty(_assertThisInitialized(_this), "height", void 0);

    _defineProperty(_assertThisInitialized(_this), "editMode", void 0);

    _defineProperty(_assertThisInitialized(_this), "headMode", void 0);

    _defineProperty(_assertThisInitialized(_this), "rowClassName", void 0);

    _defineProperty(_assertThisInitialized(_this), "rowStyle", void 0);

    _defineProperty(_assertThisInitialized(_this), "cellStyle", void 0);

    _defineProperty(_assertThisInitialized(_this), "ids", void 0);

    _defineProperty(_assertThisInitialized(_this), "loadColumn", void 0);

    _defineProperty(_assertThisInitialized(_this), "sortOrder", void 0);

    _defineProperty(_assertThisInitialized(_this), "treeProps", void 0);

    _defineProperty(_assertThisInitialized(_this), "rowSelectDisabled", void 0);

    _defineProperty(_assertThisInitialized(_this), "radioSelectedDefault", void 0);

    _defineProperty(_assertThisInitialized(_this), "pageConfig", void 0);

    _defineProperty(_assertThisInitialized(_this), "pageLoader", void 0);

    _defineProperty(_assertThisInitialized(_this), "tableBoxType", ax_com_core.TableBoxType);

    _defineProperty(_assertThisInitialized(_this), "axLang", ax_com_core.getAxLang());

    _defineProperty(_assertThisInitialized(_this), "correctIds", []);

    _defineProperty(_assertThisInitialized(_this), "customFlag", false);

    _defineProperty(_assertThisInitialized(_this), "MoveDirType", ax_com_core.MoveDirType);

    _defineProperty(_assertThisInitialized(_this), "rowClickIds", []);

    _defineProperty(_assertThisInitialized(_this), "selectionIds", []);

    _defineProperty(_assertThisInitialized(_this), "tableDataLoad", []);

    _defineProperty(_assertThisInitialized(_this), "radioSelectedCurrent", null);

    _defineProperty(_assertThisInitialized(_this), "changeHeadTdFirst", true);

    _defineProperty(_assertThisInitialized(_this), "isMoveRow", false);

    _defineProperty(_assertThisInitialized(_this), "MoveRowSelection", []);

    _defineProperty(_assertThisInitialized(_this), "styleTransform", app_core_framework_["AxStyleUtils"]);

    _defineProperty(_assertThisInitialized(_this), "rowClickFlag", false);

    _defineProperty(_assertThisInitialized(_this), "transferFlag", false);

    _defineProperty(_assertThisInitialized(_this), "transferTotalData", []);

    _defineProperty(_assertThisInitialized(_this), "rowClickTimer", null);

    _defineProperty(_assertThisInitialized(_this), "pageData", {
      page: 1,
      loadQueue: Promise.resolve()
    });

    _defineProperty(_assertThisInitialized(_this), "handler", new table_core_TableHandler());

    return _this;
  }

  _createClass(AxTable, [{
    key: "customFlagWatch",
    value: //#endregion
    //#region Watch
    function customFlagWatch(val) {
      this.transferFlagChange();
    }
    /**
     * ????????????????????????,??????
     */

  }, {
    key: "tableDataWatch",
    value: function tableDataWatch(val) {
      this.createNewMap(); // ???????????????

      if (this.changeHeadTdFirst) {
        this.changeHeadTdWidth(); // ????????????

        this.changeHeadTdFirst = false;
      }
    } //#endregion
    //#region Emit

    /**
     * ???????????????
     * @param row
     * @returns {any}
     */

  }, {
    key: "cellDbClick",
    value: function cellDbClick(row) {
      return row;
    } //#endregion
    //#region Computed
    // { k: 'ptype', v: "ASC" }

  }, {
    key: "rangeList",
    get: function get() {
      if (!this.sortOrder) {
        return [];
      }

      return this.sortOrder.map(function (item) {
        return item;
      });
    }
    /**
     * tableColumn ??????????????????,??? tableColumn ???????????? ASC ??? DESC
     * ????????????????????????
     */

  }, {
    key: "tableColumnLoad",
    get: function get() {
      if (!this.tableColumn || !this.tableColumn.length) {
        return [];
      }

      return this.tableColumn.filter(function (item) {
        return !item.isHide;
      }).map(function (item) {
        var _item$align;

        return _objectSpread2(_objectSpread2({}, item), {}, {
          ASC: false,
          DESC: false,
          align: (_item$align = item.align) !== null && _item$align !== void 0 ? _item$align : 'center'
        });
      });
    }
    /**
     * ??????????????????
     */

  }, {
    key: "totalColumn",
    get: function get() {
      if (!this.tableColumn || !this.columnList) {
        return [];
      }

      var totalList = []; // ?????????????????? columnList,????????? tableColumn ????????? list

      !this.columnList.length ? totalList = this.tableColumn.map(function (item) {
        return item.name;
      }) : totalList = this.columnList; // ???????????????????????????

      this.handler.setColumn(totalList);
      return totalList;
    } //#endregion
    //#region Data

    /**************?????? data**************/
    // TODO

  }, {
    key: "radioClick",
    value: //#endregion
    //#region Methods

    /**
     * ???????????????,??????
     * @param key ??????????????????????????????????????????????????????row[key]
     */
    function radioClick(key) {
      this.radioSelectedCurrent = key;
    }
    /**
     * ????????????????????????
     * @param value
     * @param row
     * @return {string}
     */

  }, {
    key: "getOperateText",
    value: function getOperateText(value, row) {
      return typeof value === 'function' ? value(row) : value;
    }
    /**
     * ??????????????????
     * @returns {boolean}
     */

  }, {
    key: "changeHeadTdWidth",
    value: function changeHeadTdWidth() {
      var _this2 = this;

      setTimeout(function () {
        var textDoms = _this2.$el.querySelectorAll('.table_head_text');

        var headerColDoms = _this2.$el.querySelectorAll('.el-table__header>colgroup>col');

        var bodyColDoms = _this2.$el.querySelectorAll('.el-table__body>colgroup>col');

        var bodyTable = _this2.$el.querySelector('.el-table__body');

        var totalWidth = 0;
        var headerColMap = new Map();
        var bodyColMap = new Map();

        var _iterator = _createForOfIteratorHelper(headerColDoms),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            //  ?????? col ??? map
            headerColMap.set(item.attributes.name.value, item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = _createForOfIteratorHelper(bodyColDoms),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            //  ?????? col ??? map
            bodyColMap.set(_item.attributes.name.value, _item);
          } // ??????????????????????????????

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var _iterator3 = _createForOfIteratorHelper(textDoms),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item2 = _step3.value;
            var el = _item2; // ????????????

            var width = el.offsetWidth;
            totalWidth += width + 16;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        if (totalWidth + 60 + 50 + 40 < _this2.$refs.elTable.$el.offsetWidth) {
          return;
        }

        var _iterator4 = _createForOfIteratorHelper(textDoms),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _item3 = _step4.value;
            var _el = _item3; // ????????????

            var _width = _el.offsetWidth; // ?????? ???????????? th

            var th = app_core_framework_["AxDomUtils"].getDomParent(_el, undefined, undefined, undefined, 'th');

            if (th === undefined) {
              return;
            } // ??????????????????


            var classname = th.classList[0]; // ?????? col ??????

            var target = headerColMap.get(classname); // ???????????? width

            target.width = _width + 16 + ''; // ?????? body > col ??? width

            bodyColMap.get(classname).width = target.width;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }, 200);
      return true;
    }
    /**
     * ????????????????????????
     */

  }, {
    key: "moveButton",
    value: function moveButton(scope, dir) {
      if (!this.keyId) {
        return;
      }

      var targetIndex = 0;

      if (dir === ax_com_core.MoveDirType.UP) {
        if (scope.$index <= 0) {
          ax_message_AxMessage.notify(this.axLang.text('table.move.up.warning'));
          return;
        }

        targetIndex = scope.$index - 1;
      } else if (dir === ax_com_core.MoveDirType.DOWN) {
        if (scope.$index >= this.tableDataLoad.length - 1) {
          ax_message_AxMessage.notify(this.axLang.text('table.move.down.warning'));
          return;
        }

        targetIndex = scope.$index + 1;
      }

      var origin = this.tableDataLoad[scope.$index];
      var target = this.tableDataLoad[targetIndex];

      if (!target) {
        ax_message_AxMessage.notify(this.axLang.text('table.move.nofound'));
        return;
      }

      var self = this;
      /* ?????????????????? */

      function changeTableRow() {
        // ?????? ?????? ?????????
        self.tableDataLoad[targetIndex] = origin; // ????????? ?????? ??????

        self.tableDataLoad[scope.$index] = target; // ?????? tableColumnLoad

        self.tableDataLoad = _toConsumableArray(self.tableDataLoad); // ?????? rowclickid

        self.rowClickIds = [origin[self.keyId]];
        self.idsLoad(); // ?????????????????????

        self.isMoveRow = true;
        self.MoveRowSelection = self.selectionIds; // ????????????

        ax_message_AxMessage.notify(self.axLang.text("table.move.".concat(dir, ".success")));
      }
      /**
       * ????????? emit
       * @parmas row ???????????????
       * @parmas index  ??????????????????
       * @parmas id    ????????????
       * @parmas dir    ?????? ?????????/?????????
       * @parmas changeTableRow   ???????????? Function
       */


      var targetData = {
        row: target,
        index: targetIndex,
        id: target[this.keyId]
      };
      var originData = {
        row: origin,
        index: scope.$index,
        id: origin[this.keyId]
      };
      this.$emit('moveRow', targetData, originData, changeTableRow);
    }
    /**
     * ?????????????????????,emit ??????
     */

  }, {
    key: "tableLoadMore",
    value: function tableLoadMore() {
      var _this3 = this;

      // ???????????????????????????????????????
      if (this.pageConfig && this.pageLoader) {
        // ??????????????????????????????????????????????????????????????????
        this.pageData.loadQueue = this.pageData.loadQueue.then(function () {
          return _this3.pageLoad();
        });
      }
    }
    /**
     * emit ?????? ?????????????????????,?????????????????????,?????? keyId
     * @param self ?????????input?????????this,????????????ref,
     * @param refName ???????????????,
     * @param attr ???????????????????????????table?????????,
     */

  }, {
    key: "cellBlur",
    value: function cellBlur(self, refName, attr) {
      // ???????????????????????? editcell ????????? keyId
      this.correctIds.push(refName);
      this.$emit('cellBlur', self, refName, attr);
    }
    /**
     * ?????????????????????,??????????????????
     */

  }, {
    key: "celldblclick",
    value: function celldblclick(row, column, cell, event) {
      if (!this.tableColumn) {
        return;
      } // ????????? prop,???????????????


      var labelValue = column.label;
      var tableColumnTarget = this.tableColumn.find(function (item) {
        return labelValue === item.label;
      }); // ?????????  index, selection ???

      if (!tableColumnTarget) {
        // ?????????????????? selection ,????????????????????????
        if (labelValue === this.axLang.text('table.head.selection.checkbox')) return;
        this.$emit('celldblclick', labelValue);
        return;
      }

      var name = tableColumnTarget.name;
      /**
       * @return ?????? name ??????
       */

      this.$emit('celldblclick', name);
    }
    /**
     * ?????????????????????,??????????????????
     */

  }, {
    key: "rowdblClick",
    value: function rowdblClick(row, column, event) {
      if (!this.tableColumn) {
        return;
      } // ????????? prop,???????????????


      var labelValue = column.label; // ?????????????????????,????????????

      if (column.type === 'selection') {
        return;
      }

      var tableColumnTarget = this.tableColumn.find(function (item) {
        return labelValue === item.label;
      }); // ?????????????????????

      if (!tableColumnTarget) {
        /**
         * @return ?????? labelValue
         */
        this.$emit('row-dblclick', labelValue);
      } else {
        var name = tableColumnTarget.name;
        /**
         * @return ?????? name ??????
         */

        this.$emit('row-dblclick', name);
      }
    }
    /**
     * ?????????
     * @param row
     * @param column
     * @param event
     */

  }, {
    key: "rowClick",
    value: function rowClick(row, column, event) {
      var _this4 = this;

      if (!this.totalColumn) {
        return;
      } // TODO:??????????????? rowClick
      // ????????????????????????


      if (this.rowClickFlag) {
        // ????????????????????????
        clearTimeout(this.rowClickTimer); // ???????????????

        this.rowClickTimer = setTimeout(function () {
          _this4.rowClickFlag = false;
          clearTimeout(_this4.rowClickTimer);
        }, 300);
        return;
      } // ??????id???????????????


      var keyId = ax_com_core.getValueByAttr(row, this.totalColumn, this.keyId); // ?????????????????? keyId ??????, v-model?????????[], ????????????[keyId]

      this.rowClickIds = keyId ? [keyId] : [];
      this.idsLoad(); // ???????????????????????????

      this.$emit('rowClick', keyId, row); // ???????????????????????????

      this.rowClickFlag = true; // ???????????????

      this.rowClickTimer = setTimeout(function () {
        _this4.rowClickFlag = false;
        clearTimeout(_this4.rowClickTimer);
      }, 300);
    }
    /**
     * ???????????????????????????,?????????????????????
     */

  }, {
    key: "selectionChange",
    value: function selectionChange(val) {
      // ????????? isMoveRow:true,??????????????????,???????????????v-model??????
      if (this.isMoveRow) {
        this.selectionIds = this.MoveRowSelection;

        for (var index = 0; index < this.selectionIds.length; index++) {
          var item = this.selectionIds[index];
          var currentData = this.handler.dataMap.get(item); // ??????
          // ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????selected ??? true ????????????

          this.$refs.elTable.toggleRowSelection(currentData, true); // ?????????????????????

          if (index === this.selectionIds.length - 1) {
            // ???????????????????????????
            this.$refs.elTable.setCurrentRow(currentData);
          }
        } // ????????????


        this.isMoveRow = false;
        return;
      }

      if (!this.keyId) {
        return;
      } // ????????????????????????
      // ????????????????????????,???????????????????????????,  ???????????????????????????


      var totalIds = [];

      if (val.length) {
        // ???????????????????????????
        this.$refs.elTable.setCurrentRow(val[val.length - 1]); // ??????v-model
        // ?????????????????????????????????,
        // ?????????????????? id ????????????

        var keyId = this.keyId;
        totalIds = val.map(function (item) {
          return item[keyId];
        }); // v-model ?????????

        this.selectionIds = totalIds;
      } else {
        // ?????? selectionIds
        this.selectionIds = []; // ????????????????????????????????????

        if (this.tableDataLoad && this.tableDataLoad.length > 0) {
          //  ??????????????????????????? , ?????????????????????
          this.$refs.elTable.setCurrentRow(this.tableDataLoad[0]); // ???????????????
          // ???????????????

          this.rowClickIds = this.tableDataLoad[0][this.keyId] ? [this.tableDataLoad[0][this.keyId]] : [];
        }
      }

      this.idsLoad(); // ??????????????????????????????,?????????????????????

      var lastId = totalIds.length ? totalIds[totalIds.length - 1] : undefined;
      /**
       * ??????????????????????????????
       * @params totalIds   ????????????v-model??????
       * @params lastId      ????????????????????? v-model ??????
       * @params val        ?????????????????????
       */

      this.$emit('selectionChange', totalIds, lastId, val);
    }
    /**
     * ????????????????????????
     */

  }, {
    key: "cellLinkClick",
    value: function cellLinkClick(scope, index) {
      if (!this.totalColumn) {
        return;
      }

      var keyId = ax_com_core.getValueByAttr(scope.row, this.totalColumn, this.keyId); // ?????????

      var column = this.tableColumnLoad[index];
      /** ??????????????????????????????
       * @param id ????????? id
       * @param  scope.row ??????????????????
       */

      this.$emit('cellLinkClick', keyId, scope.row, column);
    }
    /**
     * ??????????????????????????????
     */

  }, {
    key: "transferConfirm",
    value: function transferConfirm(keys, values) {
      /**
       * ??????????????????????????????
       * @params keys ?????????????????????
       * @params values ?????????????????????
       */
      this.$emit('transferConfirm', keys, values);
    }
    /**
     * ?????????????????????????????????
     */

  }, {
    key: "transferFlagChange",
    value: function () {
      var _transferFlagChange = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.loadColumn) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return this.loadColumn();

              case 5:
                this.transferTotalData = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                ax_message_AxMessage.notify(_context.t0);

              case 11:
                this.transferFlag = true;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      function transferFlagChange() {
        return _transferFlagChange.apply(this, arguments);
      }

      return transferFlagChange;
    }()
    /**
     * ??????????????????
     * @param scope
     * @param item
     */

  }, {
    key: "headSortClick",
    value: function headSortClick(scope, item) {
      // ?????????headmode : false??????,???return
      if (!(this.headMode && !!item.isRange)) {
        return;
      } // ??????????????? ASC ??????


      var flag = !!item.ASC; // ?????? rangeListRecord ??????

      var len = this.rangeListRecord.length; //  ?????????????????????   rangeListRecord

      if (len > 0) {
        try {
          this.rangeListRecord[len - 1].ASC = false;
          this.rangeListRecord[len - 1].DESC = false;
        } catch (err) {// ???????????????????????????
        }
      } // ???????????????


      item.ASC = !flag;
      item.DESC = flag; // ?????? ????????? item.name , ?????????????????? rangeList;

      var index = this.rangeList.findIndex(function (jtem) {
        return jtem.k === item.name;
      });

      if (index >= 0) {
        // ????????????,??????????????????
        this.rangeList.splice(index, 1);
      }

      this.rangeList.push({
        //   DESC????????????,DESC ???/ASC???    DESC????????????,DESC???/ASC???
        k: item.name,
        v: flag ? 'DESC' : 'ASC'
      });
      this.rangeListRecord.push(item); // ????????????3?????????,????????????,???????????????????????? unshift

      if (this.rangeListRecord.length > 3) {
        this.rangeListRecord.shift();
      }

      if (this.rangeList.length > 3) {
        this.rangeList.shift();
      } // ????????????  ??????


      this.$refs.elTable.bodyWrapper.scrollTop = 0; // ??????????????????

      this.$emit('headSortClick', this.rangeList); // ?????? correct

      this.clearCorrect();
    }
    /**
     * ?????????????????????????????????
     * @param scope
     * @param item
     */

  }, {
    key: "headIconClick",
    value: function headIconClick(scope, item) {
      // ?????????????????????
      this.customFlag = true;
      this.$emit('headIconClick');
    } // ????????? column ?????????

  }, {
    key: "rangeListRecord",
    get: function get() {
      if (!this.sortOrder) {
        return [];
      }

      var final = this.sortOrder.map(function (item) {
        return item;
      }); //  ??????????????????order????????????????????????(ASC)

      this.showOrderIcon(final); // ?????????????????? totalColumn ?????? ??? ASC

      return final;
    }
    /**
     * ??????:??????order??????????????????
     * @param final
     */

  }, {
    key: "showOrderIcon",
    value: function showOrderIcon(final) {
      if (!this.sortOrder) {
        return;
      }

      var last = this.sortOrder.slice(-1)[0];
      var target = this.tableColumnLoad.find(function (item) {
        return item.name === last.k;
      });

      if (target) {
        target[last.v] = true;
        final.pop();
        final.push(target);
      }
    }
    /**
     * ???????????? tableLoad
     */

  }, {
    key: "initTableLoad",
    value: function initTableLoad() {
      // ?????? map ??????
      this.handler.createMapData(this.tableData, this.totalColumn, this.keyId); // ??? table ?????????

      this.tableDataLoad = _toConsumableArray(this.handler.dataMap.values()); // ??????????????????

      this.clearCorrect();
    }
    /**
     * ????????????map,??? tableData ????????????,
     */

  }, {
    key: "createNewMap",
    value: function createNewMap() {
      // ???????????? tableLoad
      this.initTableLoad(); // ????????????

      this.resetTopSelected(true);
    }
    /**
     * ??????????????????
     * @param wait
     * @returns {Promise<void>}
     */

  }, {
    key: "resetTopSelected",
    value: function () {
      var _resetTopSelected = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(wait) {
        var keyId;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!wait) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return this.$nextTick();

              case 3:
                // ?????? rowclickid
                keyId = ax_com_core.getValueByAttr(this.tableDataLoad[0], this.totalColumn, this.keyId);
                this.rowClickIds = keyId ? [keyId] : [];
                this.idsLoad(); // ?????????????????????

                this.$refs.elTable.setCurrentRow(this.tableDataLoad[0]); // ????????????  ??????

                this.$refs.elTable.bodyWrapper.scrollTop = 0;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function resetTopSelected(_x) {
        return _resetTopSelected.apply(this, arguments);
      }

      return resetTopSelected;
    }()
    /**
     * ??????????????????
     */

  }, {
    key: "refreshClick",
    value: function refreshClick() {
      this.$emit('refreshClick');
      this.clearCorrect(); // ????????????  ??????

      this.$refs.elTable.bodyWrapper.scrollTop = 0;
    }
    /**
     * ??????????????????????????????
     */

  }, {
    key: "checkPageCtrl",
    value: function checkPageCtrl() {
      if (!this.pageConfig) {
        // eslint-disable-next-line no-console
        console.warn('???????????? page-config ??????????????????');
      }
    }
    /**
     * ????????????????????????
     * @param row
     * @param index
     */

  }, {
    key: "rowSelectableCheckbox",
    value: function rowSelectableCheckbox(row, index) {
      return !this.rowSelectDisabled.includes(row[this.keyId]);
    } //#endregion
    //#region ???????????????

    /**
     * ????????????????????????
     */

  }, {
    key: "setDataCheck",
    value:
    /**
     * ????????????????????????,??????
     * @param keyId ???????????????keyid
     */
    function setDataCheck(keyId) {
      var _this5 = this;

      var currentData = this.handler.dataMap.get(keyId); // ??????
      // ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????selected ??? true ????????????

      this.$refs.elTable.toggleRowSelection(currentData, true);
      this.$nextTick(function () {
        // ??????
        _this5.$refs.elTable.setCurrentRow(currentData);
      }); // ??????????????? v-modal
    }
    /**
     * ???????????????????????????
     * @param keyId
     */

  }, {
    key: "setCurrentRow",
    value: function setCurrentRow(keyId) {
      var _this6 = this;

      var currentData = this.handler.dataMap.get(keyId) || this.tableDataLoad[0];
      var index = _toConsumableArray(this.handler.dataMap.keys()).findIndex(function (item) {
        return item === keyId;
      }) || 0;
      this.$nextTick(function () {
        // ??????
        _this6.$refs.elTable.setCurrentRow(currentData); // ?????? ids ??????


        _this6.$emit('idsChange', [keyId]); // ????????????  ??????


        var totalHeight = _this6.$refs.elTable.$el.querySelectorAll('.el-table__body')[0].clientHeight;

        _this6.$refs.elTable.bodyWrapper.scrollTop = parseInt((index / _this6.tableDataLoad.length * totalHeight).toString());
      });
    }
    /**
     * FIXME:
     * ??????????????????,???????????? correctIds
     */

  }, {
    key: "clearCorrect",
    value: function clearCorrect() {
      if (this.correctIds) {
        var _iterator5 = _createForOfIteratorHelper(this.correctIds),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var value = _step5.value;
            this.$refs[value][0].clearCorrect();
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }

      this.correctIds = [];
    }
    /**
     * ??????v-model??????,???????????????,????????????????????????????????????
     */

  }, {
    key: "idsLoad",
    value: function idsLoad() {
      // ???????????????????????????????????????,??????????????? rowClick???????????????
      if (!this.selectionIds.length) {
        this.$emit('idsChange', this.rowClickIds);
        this.$emit('row-change', this.getrows(this.rowClickIds, "".concat(this.keyId)));
      } else {
        this.$emit('idsChange', this.selectionIds);
        this.$emit('row-change', this.getrows(this.selectionIds, "".concat(this.keyId)));
      }
    }
    /**
     * ?????????????????????
     * @param ids
     * @param key
     * @returns {any[]}
     */

  }, {
    key: "getrows",
    value: function getrows(ids, key) {
      var res = [];

      var _iterator6 = _createForOfIteratorHelper(this.tableDataLoad),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var val = _step6.value;

          if (ids.indexOf(val[key]) !== -1) {
            res.push(val);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return res;
    }
    /**
     * ????????????????????????
     * @param index
     * @returns {any}
     */

  }, {
    key: "getIndexRow",
    value: function getIndexRow(index) {
      return this.tableDataLoad[index];
    }
    /**
     * ?????? ids,??????????????????????????????,????????????
     * @params ids ??????????????? keyId,??????????????????
     * @params attr ??????????????????
     * @return string[]
     */

  }, {
    key: "getAttrByIds",
    value: function getAttrByIds(ids, attr) {
      var list = [];

      var _iterator7 = _createForOfIteratorHelper(ids),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var iterator = _step7.value;
          var target = this.getDataById(iterator);
          list.push(target[attr]);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return list;
    }
    /**
     * ??????????????? ids
     * @return string[]
     */

  }, {
    key: "getTotalIds",
    value: function getTotalIds() {
      var _this7 = this;

      return this.tableDataLoad.map(function (data) {
        return data[_this7.keyId];
      });
    }
    /**
     * ??????????????? Map ??????
     * @return any[]
     */

  }, {
    key: "getTotalValues",
    value: function getTotalValues() {
      return this.tableDataLoad;
    }
    /**
     * ???????????? keyId,??????????????? Map ??????
     * @return Map ???????????????????????????
     */

  }, {
    key: "getDataById",
    value: function getDataById(keyId) {
      return this.handler.dataMap.get(keyId);
    }
    /**
     * ?????? tableDataLoad ??????????????????,???????????????
     * ERROR: ?????????translate,??????????????????
     * @params key id,did????????????,?????????v-model?????????
     * @params value ???????????????row?????????
     */

  }, {
    key: "updateData",
    value: function updateData(key, value) {
      var _this8 = this;

      // ??????????????? tableDataLoad,??????????????????
      var rs = this.handler.setData(key, value); // ????????????

      this.tableDataLoad = this.tableDataLoad.map(function (item) {
        if (item[_this8.keyId] === key) {
          return rs;
        } else {
          return item;
        }
      }); // ???????????????????????????

      this.$refs.elTable.setCurrentRow(this.handler.dataMap.get(key)); // ?????? rowClickIds

      this.rowClickIds = [key];
      this.idsLoad(); // ??????

      sleep(50).then(function () {
        _this8.setCurrentRow(key);
      });
    }
    /**
     * ??????????????????
     * @param id ???????????????keyid?????????
     */

  }, {
    key: "delete",
    value: function _delete(id) {
      var _this9 = this;

      this.handler.dataMap.delete(id); // ????????? Map???????????????

      this.tableDataLoad = this.tableDataLoad.filter(function (item) {
        return item[_this9.keyId] !== id;
      }); // ?????????????????????

      this.$nextTick(function () {
        // ????????????????????????,return
        if (!_this9.tableDataLoad.length) {
          return;
        } else {
          // ?????? rowclickid
          var keyId = ax_com_core.getValueByAttr(_this9.tableDataLoad[0], _this9.totalColumn, _this9.keyId);
          _this9.rowClickIds = keyId ? [keyId] : [];

          _this9.idsLoad();
        } // ??????


        _this9.setCurrentRow(_this9.ids[0]);
      });
    }
    /**
     * ?????? ids ????????? Map ??????
     * @params ids ??????????????? keyId,??????????????????
     */

  }, {
    key: "deleteDataByIds",
    value: function deleteDataByIds(ids) {
      var _this10 = this;

      var _iterator8 = _createForOfIteratorHelper(ids),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var iterator = _step8.value;
          //  ??????????????????
          this.handler.dataMap.delete(iterator);
        } // ????????? Map ???????????????

      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      this.tableDataLoad = this.tableDataLoad.filter(function (item) {
        return !ids.includes(item[_this10.keyId]);
      }); // ?????????????????????, v-model ?????????

      if (!this.tableDataLoad.length) {
        this.rowClickIds = [];
        this.idsLoad();
        return;
      } else {
        // ?????????,v-model????????????????????????,v-model ??????????????????
        // ?????????????????????
        // (this.$refs.elTable as Table).setCurrentRow(this.tableDataLoad[0]);
        // ?????? v-model ????????????????????????,??????????????? selectionChange ?????????
        if (this.ids && this.ids.length === 1) {
          var keyId = ax_com_core.getValueByAttr(this.tableDataLoad[0], this.totalColumn, this.keyId);
          this.rowClickIds = keyId ? [keyId] : [];
          this.idsLoad();
        }
      }

      this.$nextTick(function () {
        // ?????????
        _this10.setCurrentRow(_this10.ids[0]);
      });
    }
    /**
     * ??????????????????
     * @params value ??????row??????
     */

  }, {
    key: "addData",
    value: function addData(value) {
      var _this11 = this;

      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var hasFlag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      // ??????id???????????????
      var keyId = ax_com_core.getValueByAttr(value, this.totalColumn, this.keyId); // ????????????????????????

      if (this.handler.dataMap.get(keyId)) {
        // ??????????????????    this.tableDataLoad
        this.tableDataLoad = this.tableDataLoad.filter(function (item) {
          return item[_this11.keyId + ''] !== keyId;
        });
      } // ????????????


      var target = this.handler.setData(keyId, value); // ?????????????????????,???????????????

      this.tableDataLoad.splice(index, 0, target); // ?????? rowclickid

      this.rowClickIds = [keyId];
      this.idsLoad();
      setTimeout(function () {
        // ??????????????????
        // this.setCurrentRow(keyId);
        // ????????????  ??????
        _this11.$refs.elTable.setCurrentRow(target);

        var totalHeight = _this11.$refs.elTable.$el.querySelectorAll('.el-table__body')[0].clientHeight;

        _this11.$refs.elTable.bodyWrapper.scrollTop = parseInt((index / _this11.tableDataLoad.length * totalHeight).toString()); // ??????????????????????????????

        var html = _this11.$refs.elTable.$el.querySelector("tbody tr:nth-child(".concat(index + 1, ") td:first-child"));

        if (!html) {
          return;
        } // ???????????????,???????????????????????????


        if (hasFlag) {
          html.classList.add('tri_up');
        }
      }, 50);
    }
    /**
     * ??????????????????
     * @param data
     */

  }, {
    key: "addMultiData",
    value: function addMultiData(data) {
      if (!data.length) {
        return;
      }

      var _iterator9 = _createForOfIteratorHelper(data),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var item = _step9.value;
          // ??????id???????????????
          var keyId = ax_com_core.getValueByAttr(item, this.totalColumn, this.keyId);
          this.handler.setData(keyId, item);
          this.tableDataLoad.unshift(item);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      var firstKeyId = ax_com_core.getValueByAttr(this.tableDataLoad[0], this.totalColumn, this.keyId); // ?????? rowclickid

      this.rowClickIds = [firstKeyId];
      this.idsLoad(); // ?????????????????????

      this.$refs.elTable.setCurrentRow(this.tableDataLoad[0]); // ????????????  ??????

      this.$refs.elTable.bodyWrapper.scrollTop = 0;
    }
    /**
     * ????????????
     * @param down
     * @returns {boolean}
     */

  }, {
    key: "moveData",
    value: function moveData() {
      var down = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.ids.length !== 1) {
        return false;
      }

      return this.moveDataByKey(this.ids[0], down);
    }
    /**
     * ????????????????????????key???
     * @param key
     * @param down ????????????
     * @return {boolean}
     */

  }, {
    key: "moveDataByKey",
    value: function moveDataByKey(key) {
      var _this12 = this,
          _this$tableDataLoad;

      var down = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      // ????????????index
      var index = this.tableDataLoad.findIndex(function (item) {
        return item[_this12.keyId || ''] === key;
      }); // ?????????

      if (index < 0) {
        return false;
      } // ??????????????????


      if (!down && index === 0) {
        return false;
      } // ??????????????????


      if (down && index === this.tableDataLoad.length - 1) {
        return false;
      } // ????????????


      var target = this.tableDataLoad.splice(index, 1); // ????????????

      var pos = down ? index + 1 : index - 1; // ???????????????

      (_this$tableDataLoad = this.tableDataLoad).splice.apply(_this$tableDataLoad, [pos, 0].concat(_toConsumableArray(target))); // ????????????


      this.$nextTick(function () {
        var targetEle = _this12.$refs.elTable.$el.querySelectorAll('.el-table__body > tbody .current-row')[0];

        var offsetTop = targetEle.offsetTop;
        var offsetHeight = targetEle.offsetHeight;
        var bodyWrapper = _this12.$refs.elTable.bodyWrapper; // ????????????????????????

        if (offsetTop - bodyWrapper.scrollTop > bodyWrapper.offsetHeight || offsetTop - bodyWrapper.scrollTop < 0) {
          if (down) {
            bodyWrapper.scrollTop = offsetTop - bodyWrapper.offsetHeight + offsetHeight;
          } else {
            bodyWrapper.scrollTop = offsetTop;
          }
        }
      });
      return true;
    }
    /**
     * ????????????
     * @param page
     * @param isStart
     */

  }, {
    key: "pageLoad",
    value: function pageLoad(page) {
      var _this$pageConfig,
          _this13 = this;

      var isStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // ??????????????????????????????????????????????????????????????????????????????
      if (this.tableDataLoad.length && this.tableDataLoad.length >= (((_this$pageConfig = this.pageConfig) === null || _this$pageConfig === void 0 ? void 0 : _this$pageConfig.count) || Infinity) && !isStart) {
        return;
      } // count??????????????????0????????????????????????


      if (this.pageConfig && this.pageConfig.count !== undefined && this.pageConfig.count <= 0 && !isStart) {
        return;
      } // ?????????????????????????????????


      if (page === undefined) {
        this.pageData.page += 1;
      } else {
        this.pageData.page = page;
      } // ???????????????


      if (this.pageConfig && this.pageLoader) {
        // ?????????????????????loader
        return this.pageLoader(this.pageData.page).then(function (list) {
          if (list) {
            if (isStart) {
              // ?????? map ??????
              _this13.handler.createMapData(list, _this13.totalColumn, _this13.keyId); // ??? table ?????????


              _this13.tableDataLoad = _toConsumableArray(_this13.handler.dataMap.values()); // ??????????????????

              _this13.clearCorrect();
            } else {
              list.forEach(function (value) {
                // ??????id????????????
                var keyId = ax_com_core.getValueByAttr(value, _this13.totalColumn, _this13.keyId); // ????????????????????????

                if (_this13.handler.dataMap.get(keyId)) {
                  // ??????????????????
                  _this13.tableDataLoad = _this13.tableDataLoad.filter(function (item) {
                    return item[_this13.keyId + ''] !== keyId;
                  });
                } // ????????????


                var target = _this13.handler.setData(keyId, value); // ?????????????????????,???????????????


                _this13.tableDataLoad.push(target);
              });
            } // dom?????????????????????


            _this13.$nextTick().then(function () {
              if (isStart) {
                // ?????????????????????
                _this13.resetTopSelected();
              } // ???????????????????????????????????????


              var eleWrapper = _this13.$el.querySelector('.el-table__body-wrapper');

              var eleTable = _this13.$el.querySelector('.el-table__body-wrapper > table'); // ??????????????????????????????????????????????????????


              if (eleWrapper && eleTable && eleWrapper.clientHeight > eleTable.clientHeight) {
                _this13.pageLoad();
              }
            });
          }
        });
      } else {
        return Promise.resolve();
      }
    }
    /**
     * ????????????
     */

  }, {
    key: "pageReload",
    value: function pageReload() {
      this.checkPageCtrl();

      if (this.pageConfig) {
        var start = this.pageConfig.start;
        this.pageLoad(start !== null && start !== void 0 ? start : 1, true);
      }
    }
    /**
     * ???????????????????????????
     * @returns {{id: T, row: any}}
     */

  }, {
    key: "getRadioSelected",
    value: function getRadioSelected() {
      return {
        id: this.radioSelectedCurrent,
        row: this.getDataById(this.radioSelectedCurrent)
      };
    } //#endregion
    //#region ????????????

  }, {
    key: "mounted",
    value: function () {
      var _mounted = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this$pageConfig2;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if ((_this$pageConfig2 = this.pageConfig) !== null && _this$pageConfig2 !== void 0 && _this$pageConfig2.autoLoad) {
                  this.pageReload();
                }

                if (this.radioSelectedDefault) {
                  this.radioSelectedCurrent = this.radioSelectedDefault;
                }

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function mounted() {
        return _mounted.apply(this, arguments);
      }

      return mounted;
    }()
  }, {
    key: "updated",
    value: function updated() {}
  }]);

  return AxTable;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [{
      label: '??????',
      name: 'name',
      align: 'center',
      isEdit: true,
      isRange: true,
      isHide: false,
      isLink: true,
      isMove: false
    }, {
      label: '??????',
      name: 'age',
      align: 'center',
      isEdit: true
    }];
  }
})], tablevue_type_script_lang_ts_AxTable.prototype, "tableColumn", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], tablevue_type_script_lang_ts_AxTable.prototype, "columnList", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {
      list: []
    };
  }
})], tablevue_type_script_lang_ts_AxTable.prototype, "operation", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], tablevue_type_script_lang_ts_AxTable.prototype, "tableData", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], tablevue_type_script_lang_ts_AxTable.prototype, "editrowconfig", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'id'
})], tablevue_type_script_lang_ts_AxTable.prototype, "keyId", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], tablevue_type_script_lang_ts_AxTable.prototype, "noEditIds", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], tablevue_type_script_lang_ts_AxTable.prototype, "enableHeaderCustom", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], tablevue_type_script_lang_ts_AxTable.prototype, "showIndex", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], tablevue_type_script_lang_ts_AxTable.prototype, "showRefresh", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ax_com_core.TableBoxType.CHECKBOX
})], tablevue_type_script_lang_ts_AxTable.prototype, "boxType", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], tablevue_type_script_lang_ts_AxTable.prototype, "showMenu", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], tablevue_type_script_lang_ts_AxTable.prototype, "loading", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '20rem'
})], tablevue_type_script_lang_ts_AxTable.prototype, "height", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], tablevue_type_script_lang_ts_AxTable.prototype, "editMode", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], tablevue_type_script_lang_ts_AxTable.prototype, "headMode", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ''
})], tablevue_type_script_lang_ts_AxTable.prototype, "rowClassName", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {};
  }
})], tablevue_type_script_lang_ts_AxTable.prototype, "rowStyle", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {};
  }
})], tablevue_type_script_lang_ts_AxTable.prototype, "cellStyle", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], tablevue_type_script_lang_ts_AxTable.prototype, "ids", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], tablevue_type_script_lang_ts_AxTable.prototype, "loadColumn", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], tablevue_type_script_lang_ts_AxTable.prototype, "sortOrder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {
      children: 'children',
      hasChildren: 'hasChildren'
    };
  },
  type: Object
})], tablevue_type_script_lang_ts_AxTable.prototype, "treeProps", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  },
  type: Array
})], tablevue_type_script_lang_ts_AxTable.prototype, "rowSelectDisabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: null
})], tablevue_type_script_lang_ts_AxTable.prototype, "radioSelectedDefault", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  type: Object
})], tablevue_type_script_lang_ts_AxTable.prototype, "pageConfig", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  type: Function
})], tablevue_type_script_lang_ts_AxTable.prototype, "pageLoader", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('customFlag')], tablevue_type_script_lang_ts_AxTable.prototype, "customFlagWatch", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('tableData')], tablevue_type_script_lang_ts_AxTable.prototype, "tableDataWatch", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])()], tablevue_type_script_lang_ts_AxTable.prototype, "cellDbClick", null);

tablevue_type_script_lang_ts_AxTable = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: (tablevue_type_script_lang_ts_components = {}, _defineProperty(tablevue_type_script_lang_ts_components, checkbox_default.a.name, checkbox_default.a), _defineProperty(tablevue_type_script_lang_ts_components, table_default.a.name, table_default.a), _defineProperty(tablevue_type_script_lang_ts_components, table_column_default.a.name, table_column_default.a), _defineProperty(tablevue_type_script_lang_ts_components, "AxButton", ax_button), _defineProperty(tablevue_type_script_lang_ts_components, "AxLink", ax_link), _defineProperty(tablevue_type_script_lang_ts_components, "AxRadio", ax_radio), _defineProperty(tablevue_type_script_lang_ts_components, "CustomTransfer", custom_transfer), _defineProperty(tablevue_type_script_lang_ts_components, "EditCell", edit_cell), _defineProperty(tablevue_type_script_lang_ts_components, "TableHead", table_head), _defineProperty(tablevue_type_script_lang_ts_components, "CellRender", {
    functional: true,
    render: function render(h, ctx) {
      return ctx.props.vnodes;
    }
  }), tablevue_type_script_lang_ts_components),
  model: {
    // ?????? v-model ????????????????????????
    prop: 'ids',
    event: 'idsChange'
  }
})], tablevue_type_script_lang_ts_AxTable);
/* harmony default export */ var tablevue_type_script_lang_ts_ = (tablevue_type_script_lang_ts_AxTable);
// CONCATENATED MODULE: ./packages/ax-table/src/table.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_tablevue_type_script_lang_ts_ = (tablevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-table/src/table.vue





/* normalize component */

var table_component = normalizeComponent(
  src_tablevue_type_script_lang_ts_,
  tablevue_type_template_id_c4b662e0_render,
  tablevue_type_template_id_c4b662e0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var table_api; }
table_component.options.__file = "packages/ax-table/src/table.vue"
/* harmony default export */ var table = (table_component.exports);
// CONCATENATED MODULE: ./packages/ax-table/index.ts



addInstall(table.name, table);
/* harmony default export */ var ax_table = (table);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-tag/src/tag.vue?vue&type=template&id=ac8f23b0&
var tagvue_type_template_id_ac8f23b0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    {
      ref: "refTag",
      staticClass: "ax_tag",
      class: [
        "tag_size_" + _vm.size,
        _vm.disabled ? "" : "tag_type_" + _vm.type
      ],
      attrs: { disabled: _vm.disabled },
      on: { click: _vm.handleClick }
    },
    [
      _vm._t("default"),
      _vm._v(" "),
      _vm.closable
        ? _c("i", {
            staticClass: "tag_close el-icon-close",
            on: { click: _vm.handleClose }
          })
        : _vm._e()
    ],
    2
  )
}
var tagvue_type_template_id_ac8f23b0_staticRenderFns = []
tagvue_type_template_id_ac8f23b0_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-tag/src/tag.vue?vue&type=template&id=ac8f23b0&

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-tag/src/tag.vue?vue&type=script&lang=ts&











var tagvue_type_script_lang_ts_AxTag = /*#__PURE__*/function (_Vue) {
  _inherits(AxTag, _Vue);

  var _super = _createSuper(AxTag);

  function AxTag() {
    var _this;

    _classCallCheck(this, AxTag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "refTag", void 0);

    _defineProperty(_assertThisInitialized(_this), "disabled", void 0);

    _defineProperty(_assertThisInitialized(_this), "closable", void 0);

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "size", void 0);

    return _this;
  }

  _createClass(AxTag, [{
    key: "focus",
    value:
    /**
     * ??????????????????
     */
    function focus() {
      // ????????????
      this.refTag.focus(); // ??????????????????

      return this;
    }
    /**
     * ??????????????????
     * @param event
     */

  }, {
    key: "handleClick",
    value: function handleClick(event) {
      if (this.disabled) {
        return;
      }

      this.click(event);
    }
    /**
     * ??????????????????
     * @param event
     */

  }, {
    key: "handleClose",
    value: function handleClose(event) {
      if (this.disabled) {
        return;
      }

      this.close(event);
    }
    /**
     * ??????????????????
     * @param event
     * @returns {Event}
     */

  }, {
    key: "click",
    value: function click(event) {
      return event;
    }
    /**
     * ??????????????????
     * @param event
     * @returns {Event}
     */

  }, {
    key: "close",
    value: function close(event) {
      event.stopPropagation();
      return event;
    }
  }]);

  return AxTag;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Ref"])('axTag')], tagvue_type_script_lang_ts_AxTag.prototype, "refTag", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], tagvue_type_script_lang_ts_AxTag.prototype, "disabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], tagvue_type_script_lang_ts_AxTag.prototype, "closable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ax_com_core.TagType.PRIMARY,
  type: String
})], tagvue_type_script_lang_ts_AxTag.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ax_com_core.TagSize.NORMAL,
  type: String
})], tagvue_type_script_lang_ts_AxTag.prototype, "size", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])()], tagvue_type_script_lang_ts_AxTag.prototype, "click", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('close')], tagvue_type_script_lang_ts_AxTag.prototype, "close", null);

tagvue_type_script_lang_ts_AxTag = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {}
})], tagvue_type_script_lang_ts_AxTag);
/* harmony default export */ var tagvue_type_script_lang_ts_ = (tagvue_type_script_lang_ts_AxTag);
// CONCATENATED MODULE: ./packages/ax-tag/src/tag.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_tagvue_type_script_lang_ts_ = (tagvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-tag/src/tag.vue





/* normalize component */

var tag_component = normalizeComponent(
  src_tagvue_type_script_lang_ts_,
  tagvue_type_template_id_ac8f23b0_render,
  tagvue_type_template_id_ac8f23b0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tag_api; }
tag_component.options.__file = "packages/ax-tag/src/tag.vue"
/* harmony default export */ var tag = (tag_component.exports);
// CONCATENATED MODULE: ./packages/ax-tag/index.ts



addInstall(tag.name, tag);
/* harmony default export */ var ax_tag = (tag);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-time/src/time.vue?vue&type=template&id=faed0370&
var timevue_type_template_id_faed0370_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ax_time",
      class: [
        { validate_passed: _vm.validatePassed === true },
        { validate_failed: _vm.validatePassed === false }
      ]
    },
    [
      _vm.type === _vm.AxTimeType.SELECT
        ? _c(
            "el-time-select",
            _vm._g(
              _vm._b(
                {
                  ref: "el-time",
                  attrs: {
                    align: _vm.align,
                    "arrow-control": _vm.arrowControl,
                    "clear-icon": _vm.clearIcon,
                    clearable: _vm.clearable,
                    "default-value": _vm.defaultValue,
                    disabled: _vm.disabled,
                    editable: _vm.editable,
                    "end-placeholder": _vm.endPlaceholder,
                    "is-range": _vm.isRange,
                    name: _vm.name,
                    "picker-options": _vm.pickerOptions,
                    placeholder: _vm.placeholderStr,
                    "popper-class": _vm.popperClass,
                    "prefix-icon": _vm.prefixIcon,
                    "range-separator": _vm.rangeSeparator,
                    readonly: _vm.readonly,
                    size: _vm.size,
                    "start-placeholder": _vm.startPlaceholder,
                    "value-format": _vm.valueFormat
                  },
                  model: {
                    value: _vm.modelValue,
                    callback: function($$v) {
                      _vm.modelValue = $$v
                    },
                    expression: "modelValue"
                  }
                },
                "el-time-select",
                _vm.$attrs,
                false
              ),
              _vm.$listeners
            )
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.type === _vm.AxTimeType.PICKER
        ? _c(
            "el-time-picker",
            _vm._g(
              _vm._b(
                {
                  ref: "el-time",
                  attrs: {
                    align: _vm.align,
                    "arrow-control": _vm.arrowControl,
                    "clear-icon": _vm.clearIcon,
                    clearable: _vm.clearable,
                    "default-value": _vm.defaultValue,
                    disabled: _vm.disabled,
                    editable: _vm.editable,
                    "end-placeholder": _vm.endPlaceholder,
                    "is-range": _vm.isRange,
                    name: _vm.name,
                    "picker-options": _vm.pickerOptions,
                    placeholder: _vm.placeholderStr,
                    "popper-class": _vm.popperClass,
                    "prefix-icon": _vm.prefixIcon,
                    "range-separator": _vm.rangeSeparator,
                    readonly: _vm.readonly,
                    size: _vm.size,
                    "start-placeholder": _vm.startPlaceholder,
                    "value-format": _vm.valueFormat
                  },
                  model: {
                    value: _vm.modelValue,
                    callback: function($$v) {
                      _vm.modelValue = $$v
                    },
                    expression: "modelValue"
                  }
                },
                "el-time-picker",
                _vm.$attrs,
                false
              ),
              _vm.$listeners
            )
          )
        : _vm._e()
    ],
    1
  )
}
var timevue_type_template_id_faed0370_staticRenderFns = []
timevue_type_template_id_faed0370_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-time/src/time.vue?vue&type=template&id=faed0370&

// EXTERNAL MODULE: external "element-ui/lib/time-select"
var time_select_ = __webpack_require__(40);
var time_select_default = /*#__PURE__*/__webpack_require__.n(time_select_);

// EXTERNAL MODULE: external "element-ui/lib/time-picker"
var time_picker_ = __webpack_require__(41);
var time_picker_default = /*#__PURE__*/__webpack_require__.n(time_picker_);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-time/src/time.vue?vue&type=script&lang=ts&









var timevue_type_script_lang_ts_components;







var timevue_type_script_lang_ts_AxTime = /*#__PURE__*/function (_AxUIComponent) {
  _inherits(AxTime, _AxUIComponent);

  var _super = _createSuper(AxTime);

  function AxTime() {
    var _this;

    _classCallCheck(this, AxTime);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "readonly", void 0);

    _defineProperty(_assertThisInitialized(_this), "isRange", void 0);

    _defineProperty(_assertThisInitialized(_this), "editable", void 0);

    _defineProperty(_assertThisInitialized(_this), "arrowControl", void 0);

    _defineProperty(_assertThisInitialized(_this), "size", void 0);

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "startPlaceholder", void 0);

    _defineProperty(_assertThisInitialized(_this), "endPlaceholder", void 0);

    _defineProperty(_assertThisInitialized(_this), "format", void 0);

    _defineProperty(_assertThisInitialized(_this), "align", void 0);

    _defineProperty(_assertThisInitialized(_this), "popperClass", void 0);

    _defineProperty(_assertThisInitialized(_this), "pickerOptions", void 0);

    _defineProperty(_assertThisInitialized(_this), "rangeSeparator", void 0);

    _defineProperty(_assertThisInitialized(_this), "defaultValue", void 0);

    _defineProperty(_assertThisInitialized(_this), "defaultTime", void 0);

    _defineProperty(_assertThisInitialized(_this), "valueFormat", void 0);

    _defineProperty(_assertThisInitialized(_this), "unlinkPanels", void 0);

    _defineProperty(_assertThisInitialized(_this), "prefixIcon", void 0);

    _defineProperty(_assertThisInitialized(_this), "clearIcon", void 0);

    _defineProperty(_assertThisInitialized(_this), "validateEvent", void 0);

    _defineProperty(_assertThisInitialized(_this), "AxTimeType", AxTimeType);

    return _this;
  }

  _createClass(AxTime, [{
    key: "placeholderStr",
    get:
    /**
     * placeholder?????????
     * @returns {string}
     */
    function get() {
      return this.placeholder === undefined ? UILang.t('select.placeholder') : this.placeholder;
    }
  }, {
    key: "focus",
    value:
    /**
     * ??????????????????
     */
    function focus() {
      // ??????????????????
      var el = this.$refs['el-time']; // ??????????????? HTML ??????

      if (el instanceof external_vue_property_decorator_["Vue"]) {
        // ??????????????????
        var e = el.$el; // ??????????????? HTML ??????

        if (e && e instanceof HTMLElement) {
          // ????????????
          e.focus();
        }
      } // ??????????????????


      return this;
    }
  }]);

  return AxTime;
}(core_AxUIComponent);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "readonly", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "isRange", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "editable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], timevue_type_script_lang_ts_AxTime.prototype, "disabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], timevue_type_script_lang_ts_AxTime.prototype, "arrowControl", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], timevue_type_script_lang_ts_AxTime.prototype, "clearable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "size", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'SELECT'
})], timevue_type_script_lang_ts_AxTime.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "placeholder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "startPlaceholder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "endPlaceholder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "format", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "align", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'ax_time_popper'
})], timevue_type_script_lang_ts_AxTime.prototype, "popperClass", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {};
  }
})], timevue_type_script_lang_ts_AxTime.prototype, "pickerOptions", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "rangeSeparator", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "defaultValue", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "defaultTime", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "valueFormat", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "unlinkPanels", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "prefixIcon", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "clearIcon", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], timevue_type_script_lang_ts_AxTime.prototype, "validateEvent", void 0);

timevue_type_script_lang_ts_AxTime = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // ?????? v-model ????????????????????????
    prop: 'data',
    event: 'change'
  },
  inheritAttrs: false,
  components: (timevue_type_script_lang_ts_components = {}, _defineProperty(timevue_type_script_lang_ts_components, time_picker_default.a.name, time_picker_default.a), _defineProperty(timevue_type_script_lang_ts_components, time_select_default.a.name, time_select_default.a), timevue_type_script_lang_ts_components)
})], timevue_type_script_lang_ts_AxTime);
/* harmony default export */ var timevue_type_script_lang_ts_ = (timevue_type_script_lang_ts_AxTime);
// CONCATENATED MODULE: ./packages/ax-time/src/time.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_timevue_type_script_lang_ts_ = (timevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-time/src/time.vue





/* normalize component */

var time_component = normalizeComponent(
  src_timevue_type_script_lang_ts_,
  timevue_type_template_id_faed0370_render,
  timevue_type_template_id_faed0370_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var time_api; }
time_component.options.__file = "packages/ax-time/src/time.vue"
/* harmony default export */ var time = (time_component.exports);
// CONCATENATED MODULE: ./packages/ax-time/index.ts



addInstall(time.name, time);
/* harmony default export */ var ax_time = (time);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-tree/src/tree.vue?vue&type=template&id=70404968&
var treevue_type_template_id_70404968_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ax_tree",
      class: [
        {
          ax_tree_border: _vm.border
        }
      ]
    },
    [
      _c("el-tree", {
        ref: "elTree",
        attrs: {
          "node-key": "id",
          data: _vm.handler.root,
          "current-node-key": _vm.modelValue,
          "default-expand-all": _vm.defaultExpandAll,
          props: _vm.propsConfig,
          load: _vm.loadChildrenData,
          lazy: _vm.loadChildren !== undefined,
          "default-expanded-keys": _vm.defaultExpandedIds,
          "show-checkbox": _vm.enableCheckbox,
          "default-checked-keys": _vm.defaultCheckedIds,
          "expand-on-click-node": false,
          "empty-text": "",
          "highlight-current": "",
          "check-strictly": _vm.checkStrictly,
          "auto-expand-parent": ""
        },
        on: {
          "current-change": _vm.handleCurrentChange,
          "node-click": _vm.handleNodeClick,
          "node-contextmenu": _vm.handleContextmenu,
          "check-change": _vm.handleCheckChange,
          "node-expand": _vm.handleExpand,
          "node-collapse": _vm.handleCollapse,
          check: _vm.handleCheck
        },
        scopedSlots: _vm._u(
          [
            {
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return _c(
                  "span",
                  {
                    staticClass: "tree_node",
                    class: [_vm.getNodeValueByKey(data, "nodeClassKey")],
                    on: {
                      dblclick: function($event) {
                        return _vm.handleDblClick(data)
                      }
                    }
                  },
                  [
                    _vm._t(
                      "default",
                      function() {
                        return [
                          _vm.enableIcon &&
                          _vm.getNodeValueByKey(data, "iconKey")
                            ? _c("i", {
                                staticClass: "tree_icon",
                                class: _vm.getNodeValueByKey(data, "iconKey"),
                                style: {
                                  color: _vm.getNodeValueByKey(
                                    data,
                                    "iconColorKey",
                                    undefined
                                  )
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.enableIcon &&
                          !_vm.getNodeValueByKey(data, "iconKey") &&
                          _vm.getNodeValueByKey(data, "imageKey")
                            ? _c("span", { staticClass: "tree_image" }, [
                                _c("img", {
                                  attrs: {
                                    src: _vm.getNodeValueByKey(
                                      data,
                                      "imageKey"
                                    ),
                                    alt: ""
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._t("prefix", null, { nodeData: data.data }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "tree_text",
                              style: {
                                color: data.data[
                                  _vm.config ? _vm.config.disabledKey || "" : ""
                                ]
                                  ? "#ccc"
                                  : ""
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(data.text) +
                                  "\n        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm._t("content", null, { nodeData: data.data })
                        ]
                      },
                      { data: data }
                    )
                  ],
                  2
                )
              }
            }
          ],
          null,
          true
        )
      }),
      _vm._v(" "),
      _vm.debugMode
        ? _c("textarea", {
            staticClass: "tree_debug",
            domProps: { value: _vm.debugModeInfo }
          })
        : _vm._e()
    ],
    1
  )
}
var treevue_type_template_id_70404968_staticRenderFns = []
treevue_type_template_id_70404968_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-tree/src/tree.vue?vue&type=template&id=70404968&

// EXTERNAL MODULE: external "element-ui/lib/tree"
var tree_ = __webpack_require__(42);
var tree_default = /*#__PURE__*/__webpack_require__.n(tree_);

// CONCATENATED MODULE: ./packages/ax-tree/src/tree-core.ts













/**
 * ?????????????????????
 */
var tree_core_TreeHandler = /*#__PURE__*/function () {
  function TreeHandler() {
    _classCallCheck(this, TreeHandler);

    _defineProperty(this, "config", {
      idKey: 'id',
      pidKey: 'pid',
      iconKey: 'icon',
      iconColorKey: 'iconColor',
      imageKey: 'image',
      nodeClassKey: 'nodeClass',
      textKey: 'text',
      disabledKey: 'disabled',
      childCountKey: 'count',
      childrenKey: 'children'
    });

    _defineProperty(this, "currentMaxId", 0);

    _defineProperty(this, "dataMap", new Map());

    _defineProperty(this, "rootArray", []);
  }

  _createClass(TreeHandler, [{
    key: "initConfig",
    value: // --------------------------------- ?????????????????? ---------------------------------

    /**
     * ?????????????????????
     * @param conf ??????????????????
     */
    function initConfig(conf) {
      var _this = this;

      // ??????????????????
      if (!conf) return this.config; // ??????????????????

      Object.keys(this.config).forEach(function (key) {
        var confElement = conf[key];

        if (confElement) {
          _this.config[key] = confElement;
        }
      }); // ????????????????????????

      if (this.dataMap.size > 0) {
        // ??????????????????????????????
        var _iterator = _createForOfIteratorHelper(this.dataMap),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            // ??????????????????
            this.updateMapData(value);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } // ??????????????????


      return this.config;
    }
    /**
     * ?????????????????????
     */

  }, {
    key: "root",
    get: function get() {
      return this.rootArray;
    }
    /**
     * ????????????????????????
     */

  }, {
    key: "map",
    get: function get() {
      return this.dataMap;
    }
    /**
     * ????????????????????????
     */

  }, {
    key: "configs",
    get: function get() {
      return this.config;
    }
    /**
     * ????????????????????????????????????????????????????????????????????? undefined ???
     * @param data ??????????????????
     * @returns string ??????????????????
     */

  }, {
    key: "getDataId",
    value: function getDataId(data) {
      // ??????????????????
      if (!data) return undefined; // ??????????????????

      var id = data[this.config.idKey]; // ??????????????????

      if (id || id === 0) return '' + id; // ????????????????????????????????????

      var _iterator2 = _createForOfIteratorHelper(this.dataMap),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              key = _step2$value[0],
              value = _step2$value[1];

          // ???????????????????????????
          if (value.data === data) return key;
        } // ?????????????????????

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return undefined;
    }
    /**
     * ??????????????????????????????????????????????????????????????? undefined ???
     * @param id ??????????????????
     * @returns TreeMapData ??????????????????
     */

  }, {
    key: "getDataById",
    value: function getDataById(id) {
      return this.dataMap.get(id + '');
    }
    /**
     * ??????????????????????????????????????????????????????????????? undefined ???
     * @param id  ??????????????????
     * @returns TreeMapData | undefined ?????????????????????
     */

  }, {
    key: "getParent",
    value: function getParent(id) {
      var data = this.dataMap.get(id + '');
      if (!data) return undefined;
      var pdata = this.dataMap.get(data.pid);
      return pdata;
    }
    /**
     * ???????????????????????????
     * @param data ????????????????????????
     */

  }, {
    key: "initData",
    value: function initData(data) {
      // ????????????
      this.rootArray = []; // ????????????

      this.dataMap.clear(); // ??????????????????

      this.addData(data);
    }
    /**
     * ?????????????????????
     * @param data ???????????????????????????
     * @param [defaultPid] ?????????????????????(????????? undefined ?????????????????????)
     * @param [position] ?????????????????????????????????????????????????????????????????????-1 ????????????????????????0 ???????????????????????????
     * @returns TreeMapData[] ??????????????????
     */

  }, {
    key: "addData",
    value: function addData(data, defaultPid) {
      var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      // ??????????????????
      if (!data || data.length === 0) return []; // ?????????????????????????????????

      if (!defaultPid || !this.dataMap.has(defaultPid)) defaultPid = undefined; // ?????????????????????

      var mapArray = []; // ??????????????????????????????????????????????????????

      this.createMapDataArray(mapArray, data, defaultPid); // ????????????????????????????????????????????????????????????

      this.setDataRelation(mapArray, position); // ????????????

      return mapArray;
    }
    /**
     * ????????????????????????
     * @param id ??????????????????
     * @returns ????????????????????????
     */

  }, {
    key: "remove",
    value: function remove(id) {
      // ??????????????????
      if (!id) return undefined; // ???????????????

      var data = this.dataMap.get(id); // ????????????????????????

      if (!data) return undefined; // ??????????????????????????????????????????????????????

      this.removeMapData(data); // ?????????????????????????????????

      var children; // ??????????????????

      if (data.pid) {
        // ???????????????
        var parent = this.dataMap.get(data.pid); // ????????????????????????

        children = parent ? parent.children : undefined;
      } else {
        // ??????????????????????????????
        children = this.rootArray;
      } // ?????????????????????


      var selectId; // ???????????????????????????

      if (children && children.length > 0) {
        // ???????????????????????????
        var pos = children.indexOf(data); // ??????????????????

        if (pos >= 0) {
          // ?????????????????????????????????
          children.splice(pos, 1); // ??????????????????????????????

          if (children.length > 0) {
            // ????????????????????????
            selectId = children[Math.min(pos, children.length - 1)].id;
          }
        }
      } // ??????????????????


      if (!selectId) {
        // ???????????????????????????
        selectId = data.pid; // ????????????????????????

        if (!selectId && this.rootArray.length > 0) {
          // ???????????????
          selectId = this.rootArray[0].id;
        }
      } // ?????????????????????


      return {
        data: data,
        selectId: selectId
      };
    }
    /**
     * ?????????????????????????????????
     * @param data ????????????
     * @param [id] ???????????????
     */

  }, {
    key: "updateData",
    value: function updateData(data, id) {
      // ????????????????????????
      if (!data) return; // ???????????????????????????

      if (!id) id = this.getDataId(data); // ??????????????????

      if (!id) return; // ???????????????????????????

      var prev = this.dataMap.get(id); // ??????????????????

      if (!prev) return; // ????????????

      prev.text = data[this.config.textKey] || prev.text; // prev.data = data;
      // ?????????: ????????????????????????????????????

      prev.data = data;
    } // --------------------------------- ?????????????????? ---------------------------------

    /**
     * ?????????????????????????????????
     * @returns  ???????????????
     */

  }, {
    key: "nextId",
    value: function nextId(id) {
      // ??????????????????
      if (id || id === 0) return '' + id; // ????????????????????????

      do {
        // ????????????
        this.currentMaxId++; // ????????????

        id = '$ID' + this.currentMaxId; // ???????????????????????????????????????
      } while (this.dataMap.has(id)); // ????????????


      return id;
    }
    /**
     * ????????????????????????????????????????????????????????????
     * @param data  ????????????????????????
     * @param [position] ?????????????????????????????????
     */

  }, {
    key: "setDataRelation",
    value: function setDataRelation(data) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      // ??????????????????
      if (position <= 0) {
        // ???????????????????????????????????????
        var _iterator3 = _createForOfIteratorHelper(data),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var value = _step3.value;
            // ?????????????????????????????????
            this.addToParent(value, position);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else {
        // ???????????????????????????????????????
        for (var i = data.length - 1; i >= 0; i--) {
          // ?????????????????????????????????
          this.addToParent(data[i], position);
        }
      }
    }
    /**
     * ?????????????????????????????????
     * @param data ?????????????????????
     * @param position ??????????????????????????????
     */

  }, {
    key: "addToParent",
    value: function addToParent(data, position) {
      // ?????????????????????
      var pid = data.pid; // ?????????????????????

      var children; // ?????????????????????????????????????????????????????????????????????????????????

      if (pid === undefined || !this.dataMap.has(pid)) {
        // ?????????????????????
        children = this.rootArray;
      } else {
        // ????????????????????????????????????????????????
        var parent = this.dataMap.get(pid); // ??????????????????

        if (!parent) return; // ???????????????????????????

        children = parent.children;
      } // ??????????????????


      if (!children) return; // ????????????????????????

      if (position < 0 || position >= children.length) {
        // ?????????????????????
        children.push(data);
      } else {
        // ?????????????????????
        children.splice(position, 0, data);
      }
    }
    /**
     * ?????????????????????
     * @param data ??????????????????
     * @param defaultPid ?????????????????????(????????? undefined ?????????????????????)
     */

  }, {
    key: "createMapDataArray",
    value: function createMapDataArray(output, data, defaultPid) {
      // ??????????????????
      if (!data || data.length === 0) return; // ??????????????????

      var _iterator4 = _createForOfIteratorHelper(data),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var value = _step4.value;
          // ?????????????????????
          var mapdata = this.createMapData(value, defaultPid); // ??????????????????

          if (!mapdata) continue; // ???????????????

          output.push(mapdata); // ?????????????????????

          var children = value[this.config.childrenKey]; // ?????????????????????????????????

          if (children && children.length > 0 && children instanceof Array) {
            // ???????????????????????????????????????????????????
            this.createMapDataArray(output, children, mapdata.id);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * ?????????????????????????????????
     * @param data ??????????????????
     * @param defaultPid ?????????????????????(????????? undefined ?????????????????????)
     * @returns TreeMapData ???????????????
     */

  }, {
    key: "createMapData",
    value: function createMapData(data, defaultPid) {
      // ??????????????????
      if (!data) return null; // ??????????????????

      var id = this.nextId(data[this.config.idKey]); // ?????????????????????

      var pid = defaultPid === undefined ? data[this.config.pidKey] : defaultPid; // ??????????????????????????????

      if (!pid) {
        pid = undefined;
      } else {
        // ??????????????????
        pid += '';
      } // ??????????????????


      var text = data[this.config.textKey];
      var disabled = data[this.config.disabledKey]; // ??????????????????????????????

      if (this.dataMap.has(id)) {
        // ?????????????????????????????????????????????
        var prev = this.dataMap.get(id); // ??????????????????

        if (prev) {
          // ?????????????????????????????????
          this.removeFromParent(prev); // ????????????????????????

          prev.pid = pid;
          prev.text = text;
          prev.disabled = disabled;
          prev.data = data; // ??????????????????

          return prev;
        }
      } // ????????????????????????


      var mapdata = {
        id: id,
        pid: pid,
        text: text,
        disabled: disabled,
        data: data,
        children: []
      }; // ????????????????????????

      this.dataMap.set(id, mapdata); // ??????????????????

      return mapdata;
    }
    /**
     * ?????????????????????????????????????????????????????????
     * @param data ??????????????????
     */

  }, {
    key: "removeFromParent",
    value: function removeFromParent(data) {
      // ?????????????????????????????????
      var children; // ??????????????????????????????

      if (!data.pid) {
        // ?????????????????????
        children = this.rootArray;
      } else {
        // ????????????????????????
        var parent = this.dataMap.get(data.pid); // ??????????????????

        children = parent ? parent.children : undefined;
      } // ??????????????????


      if (children && children.length > 0) {
        // ????????????
        var pos = children.indexOf(data); // ??????????????????

        if (pos >= 0) {
          // ???????????????
          children.splice(pos, 1);
        }
      }
    }
    /**
     * ?????????????????????????????????????????????????????????
     */

  }, {
    key: "removeMapData",
    value: function removeMapData(data) {
      // ????????????????????????
      if (!data) return; // ?????????????????????

      this.dataMap.delete(data.id); // ?????????????????????

      var children = data.children; // ??????????????????

      if (children && children.length > 0) {
        // ???????????????????????????
        var _iterator5 = _createForOfIteratorHelper(children),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var cvalue = _step5.value;
            // ????????????
            this.removeMapData(cvalue);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
    /**
     * ??????????????????????????????
     * @param data ??????????????????
     */

  }, {
    key: "updateMapData",
    value: function updateMapData(data) {
      // ????????????????????????
      if (!data) return; // ??????????????????

      data.text = data.data[this.config.textKey];
    }
  }]);

  return TreeHandler;
}();
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-tree/src/tree.vue?vue&type=script&lang=ts&






















var treevue_type_script_lang_ts_AxTree = /*#__PURE__*/function (_AxComCore$AxUICompon) {
  _inherits(AxTree, _AxComCore$AxUICompon);

  var _super = _createSuper(AxTree);

  function AxTree() {
    var _this;

    _classCallCheck(this, AxTree);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handler", new tree_core_TreeHandler());

    _defineProperty(_assertThisInitialized(_this), "innerChanges", false);

    _defineProperty(_assertThisInitialized(_this), "needScrollingKey", void 0);

    _defineProperty(_assertThisInitialized(_this), "defaultHighlight", void 0);

    _defineProperty(_assertThisInitialized(_this), "defaultExpandAll", void 0);

    _defineProperty(_assertThisInitialized(_this), "debugMode", void 0);

    _defineProperty(_assertThisInitialized(_this), "config", void 0);

    _defineProperty(_assertThisInitialized(_this), "dataArray", void 0);

    _defineProperty(_assertThisInitialized(_this), "defaultExpandDeep", void 0);

    _defineProperty(_assertThisInitialized(_this), "defaultExpandedIds", void 0);

    _defineProperty(_assertThisInitialized(_this), "enableIcon", void 0);

    _defineProperty(_assertThisInitialized(_this), "enableCheckbox", void 0);

    _defineProperty(_assertThisInitialized(_this), "checkStrictly", void 0);

    _defineProperty(_assertThisInitialized(_this), "border", void 0);

    _defineProperty(_assertThisInitialized(_this), "defaultCheckedIds", void 0);

    _defineProperty(_assertThisInitialized(_this), "loadChildren", void 0);

    return _this;
  }

  _createClass(AxTree, [{
    key: "debugModeInfo",
    get: // ????????????????????????
    function get() {
      if (!this.debugMode) return '';
      var res = 'TIME: ' + new Date().getTime() + '\r\n';
      res += 'ROOT: ' + '\r\n' + JSON.stringify(this.handler.root) + '\r\n\r\n';
      res += 'MAP: ' + '\r\n' + JSON.stringify(this.handler.map) + '\r\n\r\n';
      return res;
    }
    /**
     * ????????????????????????
     */

  }, {
    key: "mounted",
    value: function mounted() {
      // ?????????????????????????????????
      if (this.dataArray && this.dataArray.length > 0 && this.handler.map.size === 0) {
        // ?????????????????????????????????????????????
        this.onPropDataChanges(this.dataArray, []);
      }
    } // -------------------------------- TODO: ?????????????????? -----------------------------------

    /**
     * ????????????????????????????????????
     */

  }, {
    key: "root",
    get: function get() {
      return this.handler.root;
    }
    /**
     * ??????????????????????????????
     */

  }, {
    key: "loadChildrenData",
    value:
    /**
     * ???????????????????????????
     */
    function loadChildrenData(node, resolve) {
      // ??????????????????
      if (!this.loadChildren || !node || node.loaded) return; // ???????????????????????????????????????

      var needLoad = node.level === 0 && (!node.data || node.data.length === 0) || node.level > 0 && !this.isEndNodeData(node.data.data); // ??????????????????????????????

      if (needLoad) {
        // ??????????????????
        var self = this; // ??????????????????

        this.loadChildren(node.level, node.level === 0 || !node.data ? null : node.data.data).then(function (rets) {
          // ????????????????????????
          var added = self.handler.addData(rets, node.data.id); // ????????????????????????

          var pdata = self.handler.getDataById(node.data.id); // ??????????????????

          if (pdata && pdata.children) {
            // ????????????
            resolve(pdata.children);
          } else {
            // ????????????
            resolve(added);
          } // ??????????????????


          var hl = self.defaultHighlight; // ????????????

          self.defaultHighlight = undefined; // ????????????????????????

          self.$nextTick(function () {
            // ????????????????????????
            if (hl) self.setCurrentData(hl); // ????????????

            self.$emit('loaded', node.data);
          }); // ??????????????????????????????

          if (!self.needScrollingKey) return; // ????????????

          self.scrollToCurrentItem(self.needScrollingKey); // ????????????

          self.needScrollingKey = undefined;
        });
      } else {
        // ??????????????????
        resolve([]);
      }
    }
    /**
     * ?????????????????????????????????
     */

  }, {
    key: "isEndNodeData",
    value: function isEndNodeData(data) {
      // ???????????????
      var countKey = this.handler.configs.childCountKey; // ??????????????????

      if (!countKey || !data) return true; // ?????????????????????????????????

      if (data && Object.prototype.hasOwnProperty.call(data, countKey)) {
        // ?????????????????????
        var count = parseInt(data[countKey], 10); // ???????????????????????????????????????

        return isNaN(count) || count <= 0;
      } else {
        // ??????????????????????????????????????????
        return true;
      }
    }
    /**
     * ????????????????????????????????????
     */

  }, {
    key: "propsConfig",
    get: function get() {
      var _this2 = this;

      // ???????????????
      var config = this.handler.initConfig(this.config); // ?????????????????????????????????????????????

      var isLeaf = this.loadChildren && config.childCountKey ? function (data, node) {
        // ?????????????????????????????????
        if (data && data.children && data.children.length > 0) return false; // ?????????????????????????????????

        return _this2.isEndNodeData(data.data);
      } : false; // ??????????????????

      return {
        key: 'id',
        label: 'text',
        disabled: 'disabled',
        children: 'children',
        isLeaf: isLeaf
      };
    }
    /**
     * ???????????????????????????
     * @param data
     * @param key
     * @param defValue
     * @returns {any}
     */

  }, {
    key: "getNodeValueByKey",
    value: function getNodeValueByKey(data, key) {
      var defValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      return data !== null && data !== void 0 && data.data ? data.data[this.handler.configs[key]] : defValue;
    }
    /**
     * ???????????????????????????
     */

  }, {
    key: "onPropDataChanges",
    value: function onPropDataChanges(data, prev) {
      var _this3 = this;

      // ?????????????????????
      this.handler.initData(data); // ??????????????????

      this.$nextTick(function () {
        // ????????????????????????????????????
        if (_this3.defaultExpandDeep && _this3.defaultExpandDeep > 0) {
          // ??????????????????
          _this3.expandByDeep(_this3.handler.root, 0, _this3.defaultExpandDeep);
        } // ???????????????????????????


        var selected = _this3.getCurrentId(); // ??????????????????


        if (!selected && _this3.root.length > 0) selected = _this3.root[0].id; // ??????????????????

        if (selected && _this3.handler.map.has(selected)) {
          // ??????????????????
          _this3.setCurrentId(selected); // ????????????


          _this3.$emit('change', selected, _this3.handler.getDataById(selected));
        }
      });
    }
    /**
     * ???????????????????????????
     */

  }, {
    key: "expandByDeep",
    value: function expandByDeep(array, deep, maxDeep) {
      // ??????????????????
      if (deep >= maxDeep) return; // ????????????

      deep++; // ????????????????????????

      for (var i = 0, c = array.length; i < c; i++) {
        // ??????????????????
        var data = array[i]; // ????????????

        this.expand(data.id); // ??????????????????????????????

        if (deep < maxDeep && data.children && data.children.length > 0) {
          // ????????????????????????
          this.expandByDeep(data.children, deep, maxDeep);
        }
      }
    }
    /**
     * ?????????????????????????????????
     */

  }, {
    key: "handleDblClick",
    value: function handleDblClick(data, event) {
      // ????????????????????????
      var id = data.id; // ????????????????????????

      if (this.isExpanded(id)) {
        // ????????????
        this.collapse(id);
      } else {
        // ????????????
        this.expand(id);
      }
    } // -------------------------------- TODO: ?????????????????? -----------------------------------

    /**
     * ????????????????????????????????????????????????????????????????????? undefined ???
     * @param data ??????????????????
     * @returns string ??????????????????
     */

  }, {
    key: "getDataId",
    value: function getDataId(data) {
      return this.handler.getDataId(data);
    }
    /**
     * ??????????????????????????????????????????????????????????????? undefined ???
     * @param id ??????????????????
     * @returns AxComCore.ITreeMapData ??????????????????
     */

  }, {
    key: "getDataById",
    value: function getDataById(id) {
      return this.handler.getDataById(id);
    }
    /**
     * ???????????????????????????????????????
     */

  }, {
    key: "getIds",
    value: function getIds() {
      var rets = [];

      var _iterator = _createForOfIteratorHelper(this.handler.map),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          rets.push(key);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return rets;
    }
    /**
     * ?????????????????????????????????????????????????????? parentId ??? undefined???
     * @param data ???????????????????????????????????????
     * @param parentId ??????????????????????????????????????????????????????????????? undefined???
     * @param position ?????????????????????????????????????????????????????????????????????-1 ????????????????????????0 ???????????????????????????
     * @param highlight ????????????????????????????????????
     * @returns AxComCore.ITreeMapData[] ????????????????????????
     */

  }, {
    key: "add",
    value: function add(data, parentId) {
      var _this4 = this;

      var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      var highlight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      // ??????????????????
      if (!data) return []; // ??????????????????

      var array; // ?????????????????????

      if (data instanceof Array) {
        // ????????????
        array = data;
      } else {
        // ???????????????
        array = [data];
      } // ??????????????????


      var mdata = this.handler.addData(array, parentId, position); // ????????????????????????

      if (mdata.length === 0) return mdata; // ???????????????????????????

      this.innerChanges = true; // ???????????????????????????

      if (this.loadChildren) {
        // ????????????????????????????????????
        var pids = new Set(); // ??????????????????

        var etree = this.$refs.elTree; // ???????????????????????????

        var _iterator2 = _createForOfIteratorHelper(mdata),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            // ???????????????
            var pid = item.pid; // ?????????????????????????????????

            if (!this.isEndNodeData(item.data)) {
              // ???????????????????????????????????????????????????????????????
              etree.append(item, pid);
            } // ???????????????


            if (!pids.has(pid) && !this.isExpanded(pid)) {
              // ????????????
              pids.add(pid); // ???????????????

              this.expand(pid);
            }
          } // ??????????????????

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (highlight) this.defaultHighlight = mdata[0].data;
      } // ??????????????????????????????


      if (highlight) {
        // ??????????????????
        this.$nextTick(function () {
          // ???????????????????????????
          _this4.setCurrentData(mdata[0].data);
        });
      } // ????????????


      return mdata;
    }
    /**
     * ???????????????????????????????????????????????????????????????????????????????????????????????? undefined ???
     * @param data ?????????????????????
     * @param autoHighlight ?????????????????????????????????
     * @returns AxComCore.ITreeMapData ??????????????????
     */

  }, {
    key: "remove",
    value: function remove(data) {
      var autoHighlight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // ??????????????????
      if (!data) return undefined; // ???????????????

      var id = this.handler.getDataId(data); // ??????????????????

      if (!id) return undefined; // ????????????

      return this.removeById(id, autoHighlight);
    }
    /**
     * ?????????????????????????????????????????????????????????????????????????????? undefined)
     * @param id ??????????????????
     * @param autoHighlight ?????????????????????????????????
     * @returns AxComCore.ITreeMapData ??????????????????
     */

  }, {
    key: "removeById",
    value: function removeById(id) {
      var _this5 = this;

      var autoHighlight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // ??????????????????
      id += ''; // ???????????????????????????

      this.innerChanges = true; // ????????????

      var removed = this.handler.remove(id); // ??????????????????

      if (!removed) return undefined; // ??????????????????

      this.$refs.elTree.remove(id); // ??????????????????????????????

      if (autoHighlight) {
        // ??????????????????
        this.$nextTick(function () {
          // ?????????????????????
          _this5.setCurrentId(removed.selectId);
        });
      } // ?????????????????????


      return removed.data;
    }
    /**
     * ?????????????????????????????????
     * @param data ???????????????????????????
     */

  }, {
    key: "update",
    value: function update(data) {
      // ??????????????????
      if (!data) return; // ???????????????????????????

      this.innerChanges = true; // ????????????

      this.handler.updateData(data);
    }
  }, {
    key: "reset",
    value: function reset(data) {
      // ??????????????????
      if (!data) return;
      this.handler.initData(data);
    }
    /**
     * ?????????????????????????????????
     * @param id ??????????????????
     * @param data ???????????????????????????
     */

  }, {
    key: "updateById",
    value: function updateById(id, data) {
      // ??????????????????
      if (!data) return; // ???????????????????????????

      this.innerChanges = true; // ????????????

      this.handler.updateData(data, id);
    } // -------------------------------- TODO: ?????????????????? -----------------------------------

    /**
     * ???????????????????????????????????????????????????????????? checkbox ?????????????????????
     * @param endNodeOnly ????????????????????????????????????????????????????????????true???
     * @returns AxComCore.ITreeData[] ?????????????????????????????????????????? undefined ???
     */

  }, {
    key: "getCheckedData",
    value: function getCheckedData() {
      var endNodeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // ?????????????????????
      var ids = this.getCheckedIds(endNodeOnly); // ??????????????????

      if (!ids) return undefined; // ????????????????????????

      var rets = []; // ??????????????????

      var _iterator3 = _createForOfIteratorHelper(ids),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var id = _step3.value;
          // ??????????????????
          var data = this.handler.getDataById(id); // ??????????????????

          if (data) rets.push(data.data);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return rets;
    }
    /**
     * ??????????????????????????????????????????????????????????????? checkbox ?????????????????????
     * @param endNodeOnly ????????????????????????????????????????????????????????????true???
     * @returns string[] ????????????????????????????????????????????? undefined ???
     */

  }, {
    key: "getCheckedIds",
    value: function getCheckedIds() {
      var endNodeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return this.$refs.elTree.getCheckedKeys(endNodeOnly);
    }
    /**
     * ??????????????????????????????????????????????????????????????? checkbox ?????????????????????
     * @param ids ?????????????????????????????????
     */

  }, {
    key: "setCheckedData",
    value: function setCheckedData(data) {
      // ??????????????????
      if (!data || data.length === 0) return; // ??????????????????

      var ids = []; // ????????????????????????

      var _iterator4 = _createForOfIteratorHelper(data),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var value = _step4.value;

          // ??????????????????
          if (value) {
            // ????????????
            var id = this.handler.getDataId(value); // ???????????????

            if (id) ids.push(id);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      this.$refs.elTree.setCheckedKeys(ids, false);
    }
    /**
     * ??????????????????????????????????????????????????????????????? checkbox ?????????????????????
     * @param ids ?????????????????????????????????
     */

  }, {
    key: "setCheckedIds",
    value: function setCheckedIds(ids) {
      this.$refs.elTree.setCheckedKeys(ids, false);
    }
    /**
     * ?????????????????????????????????????????????????????? checkbox ?????????????????????
     * @param idOrData ?????????????????????????????????
     * @param checked ????????????
     */

  }, {
    key: "setChecked",
    value: function setChecked(idOrData, checked) {
      // ????????????
      var id; // ????????????????????????

      if (typeof idOrData === 'string') {
        // ????????????
        id = idOrData;
      } else {
        // ????????????????????????
        id = this.getDataId(idOrData);
      } // ??????????????????


      if (!id) return; // ??????????????????

      this.$refs.elTree.setChecked(id, checked, true);
    }
    /**
     * ??????????????????????????????????????????
     */

  }, {
    key: "getCurrentId",
    value: function getCurrentId() {
      return this.$refs.elTree.getCurrentKey();
    }
    /**
     * ???????????????????????????????????????
     */

  }, {
    key: "getCurrentData",
    value: function getCurrentData() {
      var id = this.getCurrentId();
      if (!id) return undefined;
      return this.handler.getDataById(id);
    }
    /**
     * ?????????????????????????????????????????????????????????
     * @param id ???????????????
     * @param scrolling ????????????????????????
     */

  }, {
    key: "setCurrentId",
    value: function setCurrentId(id) {
      var scrolling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // ????????????????????????
      if (id) {
        // ???????????????
        var parent = this.handler.getParent(id); // ?????????????????????????????????????????????

        if (parent) this.expand(parent.id);
      } // ??????????????????


      var tree = this.$refs.elTree; // ????????????????????????

      tree.setCurrentKey(id); // ??????????????????

      this.$emit(ax_com_core.TreeEventType.CHANGE, id, id ? this.handler.getDataById(id) : null); // ??????????????????????????????

      if (!scrolling || !id) return; // ??????????????????????????????

      this.needScrollingKey = id; // ????????????????????????????????????

      if (!this.handler.map.has(id)) return; // ???????????????????????????

      this.scrollToCurrentItem(id);
    }
    /**
     * ????????????????????????????????????
     */

  }, {
    key: "scrollToCurrentItem",
    value: function scrollToCurrentItem(id) {
      var _this6 = this;

      // ??????????????????
      var tree = this.$refs.elTree; // ????????????????????????

      tree.setCurrentKey(id); // ??????????????????

      var self = this; // ????????????

      window.setTimeout(function () {
        // ???????????????????????????
        var roote = _this6.$el; // ?????????????????????????????????

        if (!roote) return; // ???????????????????????????

        var el = tree.$el.querySelector('div.is-current'); // ??????????????????

        if (!el) return; // ????????????????????????

        if (el.getAttribute('role') === 'treeitem' && el.childNodes && el.childNodes.length > 0) {
          // ????????????????????????????????????
          el = el.firstElementChild;
        } // ?????????????????????????????????


        var pos = app_core_framework_["AxDomUtils"].getDomPosition(el, roote); // ????????????????????????

        var treeH = roote.clientHeight; // ?????????????????????

        roote.scrollTop = Math.max(0, Math.floor(pos.top - treeH / 2 + el.offsetHeight / 2)); // ????????????,????????????

        self.needScrollingKey = undefined;
      }, 100);
    }
    /**
     * ???????????????????????????????????????
     * @param data ????????????
     */

  }, {
    key: "setCurrentData",
    value: function setCurrentData(data) {
      if (!data) return;
      var id = this.getDataId(data);
      if (!id) return;
      this.$refs.elTree.setCurrentKey(id);
    }
    /**
     * ?????????????????????????????????
     * @param id ???????????????
     * @returns boolean ???????????????????????????
     */

  }, {
    key: "isExpanded",
    value: function isExpanded(id) {
      // ????????????????????????
      var node = this.$refs.elTree.getNode(id); // ??????????????????

      if (!node) return false; // ?????????????????????

      return node.expanded;
    }
    /**
     * ???????????????????????????????????????
     * @param id ????????????????????????
     */

  }, {
    key: "expand",
    value: function expand(id) {
      // ????????????????????????
      var node = this.$refs.elTree.getNode(id); // ??????????????????

      if (!node) return; // ????????????????????????

      if (node.expand) {
        // ??????????????????
        node.expand(null, true);
      } else {
        // ??????????????????
        node.expanded = true;
      }
    }
    /**
     * ????????????????????????????????????
     * @param data ??????????????????????????????
     */

  }, {
    key: "expandData",
    value: function expandData(data) {
      if (!data) return;
      var id = this.getDataId(data);
      if (!id) return;
      this.expand(id);
    } // ??????id,??????????????????

  }, {
    key: "expandLink",
    value: function expandLink(ids, fn) {
      var _this7 = this;

      if (ids && ids.length > 0) {
        var id = ids.shift();

        if (id) {
          // ???????????????????????????????????????
          var isload = this.isNodeLoaded(id);

          while (isload) {
            id = ids.shift();

            if (id) {
              isload = this.isNodeLoaded(id);
            } else {
              isload = false;

              if (fn && typeof fn === 'function') {
                fn();
              }
            }
          } // ????????????


          if (id) {
            var load = function load(data) {
              id = ids.shift();

              if (id) {
                _this7.$once('loaded', load);

                _this7.expand(id);
              } else {
                if (fn && typeof fn === 'function') {
                  fn();
                }
              }
            };

            this.$once('loaded', load);
            this.expand(id);
            var nodedata = this.getDataById(id);

            if (this.isNodeLoaded(id) && nodedata && this.isEndNodeData(nodedata)) {
              if (fn && typeof fn === 'function') {
                fn();
              }
            }
          }
        }
      } else {
        if (fn && typeof fn === 'function') {
          fn();
        }
      }
    } // ??????????????????

  }, {
    key: "isNodeLoaded",
    value: function isNodeLoaded(id) {
      var node = this.$refs.elTree.getNode(id);
      if (!node) return false;
      return node.loaded;
    } // ??????????????????

  }, {
    key: "getAllParentIds",
    value: function getAllParentIds(id) {
      var res = [];

      if (id) {
        res.push(id);
        var parent = this.handler.getParent(id);

        while (parent) {
          res.push(parent.data.id);
          parent = this.handler.getParent(parent.data.id);
        }
      }

      return res;
    }
    /**
     * ?????????????????????AxComCore.ITreeMapData??????
     * @param id
     * @returns {AxComCore.ITreeMapData[]}
     * @param self ??????????????????
     */

  }, {
    key: "getAllParentData",
    value: function getAllParentData(id) {
      var self = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var rs = [];

      if (id) {
        var current = this.handler.getDataById(id);

        if (self && current) {
          rs.push(current);
        }

        var parent = this.handler.getParent(id);

        while (parent) {
          rs.unshift(parent);
          parent = this.handler.getParent(parent.data.id);
        }
      }

      return rs;
    }
    /**res
     * ??????????????????
     * @param id ????????????????????????
     */

  }, {
    key: "collapse",
    value: function collapse(id) {
      // ????????????????????????
      var node = this.$refs.elTree.getNode(id); // ??????????????????

      if (!node) return; // ????????????????????????

      if (node.collapse) {
        // ??????????????????
        node.collapse();
      } else {
        // ??????????????????
        node.expanded = false;
      }
    }
    /**
     * ??????????????????
     * @param data ???????????????????????????
     */

  }, {
    key: "collapseData",
    value: function collapseData(data) {
      if (!data) return;
      var id = this.getDataId(data);
      if (!id) return;
      this.collapse(id);
    }
    /**
     * ??????????????????
     */

  }, {
    key: "focus",
    value: function focus() {
      // ??????????????????
      var tree = this.$refs.elTree; // ??????????????????

      if (tree && tree.$el) {
        // ??????????????????
        tree.$el.focus();
      } // ??????????????????


      return this;
    } // -------------------------------- TODO: ?????????????????? -----------------------------------

    /**
     * ??????????????????????????????
     */

  }, {
    key: "handleCurrentChange",
    value: function handleCurrentChange(data, node) {
      // ??????????????????
      if (!data) return; // ??????????????????

      this.$emit(ax_com_core.TreeEventType.CHANGE, data.id, data);
    }
    /**
     * ??????????????????
     */

  }, {
    key: "handleNodeClick",
    value: function handleNodeClick(data) {
      if (!data) return;
      this.$emit(ax_com_core.TreeEventType.NODE_CLICK, data);
    }
    /**
     * ??????????????????
     */

  }, {
    key: "handleContextmenu",
    value: function handleContextmenu(event, data) {
      if (!data) return;
      this.$emit(ax_com_core.TreeEventType.NODE_CONTEXTMENU, event, data);
    }
    /**
     * ???????????????????????? CHECK ??????????????????????????????????????????????????????????????????
     */

  }, {
    key: "handleCheckChange",
    value: function handleCheckChange(data, checked) {
      if (!data) return;
      this.$emit(ax_com_core.TreeEventType.CHECK_CHANGE, data, checked);
    }
    /**
     * ?????????????????????????????????????????? CHECK_CHANGE ???????????????????????????????????????????????????
     */

  }, {
    key: "handleCheck",
    value: function handleCheck(data, checkedKeyNode) {
      if (!data) return;
      this.$emit(ax_com_core.TreeEventType.CHECK, data, checkedKeyNode);
    }
    /**
     * ??????????????????
     */

  }, {
    key: "handleExpand",
    value: function handleExpand(data) {
      if (!data) return;
      this.$emit(ax_com_core.TreeEventType.NODE_EXPAND, data);
    }
    /**
     * ??????????????????
     */

  }, {
    key: "handleCollapse",
    value: function handleCollapse(data) {
      if (!data) return;
      this.$emit(ax_com_core.TreeEventType.NODE_COLLAPSE, data);
    }
  }]);

  return AxTree;
}(ax_com_core.AxUIComponent);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], treevue_type_script_lang_ts_AxTree.prototype, "defaultExpandAll", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], treevue_type_script_lang_ts_AxTree.prototype, "debugMode", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], treevue_type_script_lang_ts_AxTree.prototype, "config", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], treevue_type_script_lang_ts_AxTree.prototype, "dataArray", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 1
})], treevue_type_script_lang_ts_AxTree.prototype, "defaultExpandDeep", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], treevue_type_script_lang_ts_AxTree.prototype, "defaultExpandedIds", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], treevue_type_script_lang_ts_AxTree.prototype, "enableIcon", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], treevue_type_script_lang_ts_AxTree.prototype, "enableCheckbox", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], treevue_type_script_lang_ts_AxTree.prototype, "checkStrictly", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], treevue_type_script_lang_ts_AxTree.prototype, "border", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], treevue_type_script_lang_ts_AxTree.prototype, "defaultCheckedIds", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], treevue_type_script_lang_ts_AxTree.prototype, "loadChildren", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('dataArray')], treevue_type_script_lang_ts_AxTree.prototype, "onPropDataChanges", null);

treevue_type_script_lang_ts_AxTree = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // ?????? v-model ????????????????????????
    prop: 'data',
    event: 'change'
  },
  components: _defineProperty({}, tree_default.a.name, tree_default.a)
})], treevue_type_script_lang_ts_AxTree);
/* harmony default export */ var treevue_type_script_lang_ts_ = (treevue_type_script_lang_ts_AxTree);
// CONCATENATED MODULE: ./packages/ax-tree/src/tree.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_treevue_type_script_lang_ts_ = (treevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-tree/src/tree.vue





/* normalize component */

var tree_component = normalizeComponent(
  src_treevue_type_script_lang_ts_,
  treevue_type_template_id_70404968_render,
  treevue_type_template_id_70404968_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tree_api; }
tree_component.options.__file = "packages/ax-tree/src/tree.vue"
/* harmony default export */ var src_tree = (tree_component.exports);
// CONCATENATED MODULE: ./packages/ax-tree/index.ts



addInstall(src_tree.name, src_tree);
/* harmony default export */ var ax_tree = (src_tree);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-upload/src/upload.vue?vue&type=template&id=31bffb88&
var uploadvue_type_template_id_31bffb88_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ax_upload" },
    [
      _c(
        "el-upload",
        _vm._g(
          _vm._b(
            {
              ref: "el_upload",
              attrs: {
                disabled: _vm.disabled,
                multiple: _vm.multiple,
                action: _vm.action
              }
            },
            "el-upload",
            _vm.$attrs,
            false
          ),
          _vm.$listeners
        ),
        [
          _c(
            "ax-button",
            { attrs: { type: "primary", disabled: _vm.disabled } },
            [_vm._v(_vm._s(_vm.text))]
          ),
          _vm._v(" "),
          _vm.tip
            ? _c(
                "div",
                {
                  staticClass: "el-upload__tip",
                  attrs: { slot: "tip" },
                  slot: "tip"
                },
                [_vm._v(_vm._s(_vm.tip))]
              )
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var uploadvue_type_template_id_31bffb88_staticRenderFns = []
uploadvue_type_template_id_31bffb88_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-upload/src/upload.vue?vue&type=template&id=31bffb88&

// EXTERNAL MODULE: external "element-ui/lib/upload"
var upload_ = __webpack_require__(43);
var upload_default = /*#__PURE__*/__webpack_require__.n(upload_);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-upload/src/upload.vue?vue&type=script&lang=ts&








var uploadvue_type_script_lang_ts_components;








var uploadvue_type_script_lang_ts_AxUpload = /*#__PURE__*/function (_AxComCore$AxUICompon) {
  _inherits(AxUpload, _AxComCore$AxUICompon);

  var _super = _createSuper(AxUpload);

  function AxUpload() {
    var _this;

    _classCallCheck(this, AxUpload);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "text", void 0);

    _defineProperty(_assertThisInitialized(_this), "multiple", void 0);

    _defineProperty(_assertThisInitialized(_this), "action", void 0);

    _defineProperty(_assertThisInitialized(_this), "tip", void 0);

    return _this;
  }

  _createClass(AxUpload, [{
    key: "focus",
    value:
    /**
     * ??????????????????
     */
    function focus() {
      // ??????????????????
      var el = this.$refs['el-upload']; // ??????????????? HTML ??????

      if (el instanceof external_vue_property_decorator_["Vue"]) {
        // ??????????????????
        var e = el.$el; // ??????????????? HTML ??????

        if (e && e instanceof HTMLElement) {
          // ????????????
          e.focus();
        }
      } // ??????????????????


      return this;
    } // /**
    //  * ??????????????????
    //  */
    // private handleClick(event: Event) {
    //   this.$emit('click', event);
    // }
    // ??????????????????	??? file: fileList ?????? file ?????? ???

  }, {
    key: "abort",
    value: function abort(file) {
      this.$refs.el_upload.abort(file);
    }
  }]);

  return AxUpload;
}(ax_com_core.AxUIComponent);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ''
})], uploadvue_type_script_lang_ts_AxUpload.prototype, "text", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], uploadvue_type_script_lang_ts_AxUpload.prototype, "disabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], uploadvue_type_script_lang_ts_AxUpload.prototype, "multiple", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'https://jsonplaceholder.typicode.com/posts/'
})], uploadvue_type_script_lang_ts_AxUpload.prototype, "action", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ''
})], uploadvue_type_script_lang_ts_AxUpload.prototype, "tip", void 0);

uploadvue_type_script_lang_ts_AxUpload = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // ?????? v-model ????????????????????????
    prop: 'data',
    event: 'change'
  },
  inheritAttrs: false,
  components: (uploadvue_type_script_lang_ts_components = {}, _defineProperty(uploadvue_type_script_lang_ts_components, upload_default.a.name, upload_default.a), _defineProperty(uploadvue_type_script_lang_ts_components, "AxButton", ax_button), uploadvue_type_script_lang_ts_components)
})], uploadvue_type_script_lang_ts_AxUpload);
/* harmony default export */ var uploadvue_type_script_lang_ts_ = (uploadvue_type_script_lang_ts_AxUpload);
// CONCATENATED MODULE: ./packages/ax-upload/src/upload.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_uploadvue_type_script_lang_ts_ = (uploadvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-upload/src/upload.vue





/* normalize component */

var upload_component = normalizeComponent(
  src_uploadvue_type_script_lang_ts_,
  uploadvue_type_template_id_31bffb88_render,
  uploadvue_type_template_id_31bffb88_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var upload_api; }
upload_component.options.__file = "packages/ax-upload/src/upload.vue"
/* harmony default export */ var upload = (upload_component.exports);
// CONCATENATED MODULE: ./packages/ax-upload/index.ts



addInstall(upload.name, upload);
/* harmony default export */ var ax_upload = (upload);
// CONCATENATED MODULE: ./packages/components.ts






























// EXTERNAL MODULE: ./packages/styles/base.scss
var base = __webpack_require__(63);

// CONCATENATED MODULE: ./packages/index.ts





 // ???????????????

var _require = __webpack_require__(64),
    version = _require.version;
/**
 * ??????????????????
 * @param Vue
 * @param opts ??????????????????
 */


function install(Vue
/*opts?: T*/
) {
  // ??????????????????
  Object.keys(components_namespaceObject).forEach(function (name) {
    // ????????????
    Vue.component(name, components_namespaceObject[name]);
  }); // ??????????????????????????????

  Vue.prototype.$AxMessage = ax_message_AxMessage;
}

var AxUI = {
  install: install,
  version: version
}; //#region ??????

 // ??????????????????

 // ??????????????????

/* harmony default export */ var packages_0 = __webpack_exports__["default"] = (AxUI); //#endregion

/***/ })
/******/ ]);