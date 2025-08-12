/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".location-marker-ui-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  padding: 80px 0 0 250px;\n}\n.location-marker-ui-container > .lmui-sidebar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 250px;\n  height: 100%;\n  background-color: white;\n  border-right: 1px solid silver;\n  padding-top: 80px;\n}\n.location-marker-ui-container > .lmui-sidebar > .title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 250px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 900;\n  text-transform: uppercase;\n  border-bottom: 1px solid silver;\n}\n.location-marker-ui-container > .lmui-sidebar > .content {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  padding: 10px;\n}\n.location-marker-ui-container > .lmui-sidebar > .content .search {\n  width: 100%;\n  height: auto;\n  padding: 20px 10px;\n}\n.location-marker-ui-container > .lmui-sidebar > .content .search .uxp-search-box-container .search-box-container .uxp-input-container input {\n  min-width: 165px !important;\n}\n.location-marker-ui-container > .lmui-sidebar > .content > .space {\n  width: 100%;\n  height: auto;\n  padding: 10px;\n  font-size: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  margin-bottom: 8px;\n  border-radius: 5px;\n  background-color: #d8d8d8;\n}\n.location-marker-ui-container > .lmui-sidebar > .content > .space.active {\n  background-color: #52c4c9;\n  color: white;\n}\n.location-marker-ui-container > .lmui-toolbar {\n  position: absolute;\n  top: 0;\n  left: 250px;\n  right: 0;\n  height: 80px;\n  padding: 20px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  border-bottom: 1px solid silver;\n}\n.location-marker-ui-container > .lmui-toolbar > .floor-filter {\n  width: auto;\n}\n.location-marker-ui-container > .lmui-toolbar > .floor-filter .uxp-form-select {\n  max-width: 250px;\n  margin: 0;\n}\n.location-marker-ui-container > .lmui-map-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.location-marker-ui-container > .lmui-map-container > .no-map {\n  font-weight: 900;\n  font-size: 20px;\n  color: #868686;\n}\n.location-marker-ui-container > .lmui-map-container > .toolbar {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  z-index: 999;\n}\n.location-marker-ui-container > .lmui-map-container > .toolbar .uxp-button {\n  margin: 4px 0;\n}\n.location-marker-ui-container > .lmui-map-container > .toolbar .uxp-button.confirm-button, .location-marker-ui-container > .lmui-map-container > .toolbar .uxp-button.edit-coordinated-btn {\n  background-color: #52c4c9;\n  color: white;\n}\n.location-marker-ui-container > .lmui-map-container > .toolbar .coordinates-list {\n  background-color: rgba(255, 255, 255, 0.8);\n  backdrop-filter: blur(20px);\n  padding: 8px;\n  border-radius: 6px;\n  min-width: 250px;\n}\n.location-marker-ui-container > .lmui-map-container > .toolbar .coordinates-list .coordinates-list-header {\n  padding: 8px;\n}\n.location-marker-ui-container > .lmui-map-container > .toolbar .coordinates-list .coordinates-list-body {\n  width: 100%;\n  max-height: 250px;\n  overflow-y: auto;\n}\n.location-marker-ui-container > .lmui-map-container > .toolbar .coordinates-list .coordinates-list-body table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.location-marker-ui-container > .lmui-map-container > .toolbar .coordinates-list .coordinates-list-body table td {\n  padding: 2px 4px;\n  font-size: 13px;\n}\n.location-marker-ui-container > .lmui-map-container > .toolbar .coordinates-list .coordinate-list-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 6px;\n}\n.location-marker-ui-container > .lmui-map-container > .toolbar .coordinates-list .coordinate-list-footer .uxp-button {\n  margin: 0;\n}\n.location-marker-ui-container > .lmui-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100%;\n}\n\n.location-marker-config-row > .row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.location-marker-config-row > .row > .uxp-input-container {\n  margin: 4px;\n}\n\n.lmui-custom-marker {\n  background-color: transparent;\n}\n.lmui-custom-marker > div {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 30px;\n  height: 30px;\n  border: 2px solid #52c4c9;\n  background-color: #52c4c955;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n}\n.lmui-custom-marker > div::before {\n  content: \"\";\n  width: 5px;\n  height: 5px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #52c4c9;\n  border-radius: 50%;\n}\n.lmui-custom-marker.edit-marker > div {\n  border: 2px solid #f09936;\n  background-color: #f099365c;\n}\n.lmui-custom-marker.edit-marker > div::before {\n  background-color: #f09936;\n  /* Match border color */\n}\n\n/* Icon markers */\n.icon-marker {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  transform: translate(-15px, -15px);\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.icon-marker i {\n  font-size: 14px;\n}\n\n.default-marker {\n  /* Uses parent .lmui-custom-marker > div styles */\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "react"));
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const SensorSpaceCoordinateEditor = (props) => {
    var _a;
    // State management
    const [filteredSpaces, setFilteredSpaces] = React.useState([]);
    const [query, setQuery] = React.useState('');
    const [spaces, setSpaces] = React.useState([]);
    const [selectedSpace, setSelectedSpace] = React.useState(null);
    const [floors, setFloors] = React.useState([]);
    const [selectedFloor, setSelectedFloor] = React.useState('');
    const [config, setConfig] = React.useState({
        floors: { model: "", action: "" },
        spaces: { model: "", action: "" },
        setRegion: { model: "", action: "" },
    });
    const [allSpaceRegions, setAllSpaceRegions] = React.useState([]);
    const [isEditingRegion, setIsEditingRegion] = React.useState(false);
    const [region, setRegion] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isSaving, setIsSaving] = React.useState(false);
    const [isConfirming, setIsConfirming] = React.useState(false);
    const toast = components_1.useToast();
    // Initialize config from URL params
    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setConfig({
            floors: {
                model: params.get("flm") || "",
                action: params.get("fla") || ""
            },
            spaces: {
                model: params.get("asm") || "",
                action: params.get("asa") || ""
            },
            setRegion: {
                model: params.get("ucm") || "",
                action: params.get("uca") || ""
            }
        });
    }, []);
    // Load floors when config changes
    React.useEffect(() => {
        if (config.floors.model && config.floors.action) {
            loadFloors();
        }
    }, [config.floors]);
    // Auto-select first floor
    React.useEffect(() => {
        if (floors.length > 0 && !selectedFloor) {
            // setSelectedFloor(floors[0].id);
            setSelectedFloor("AU-MEL-435B.L06");
        }
    }, [floors, selectedFloor]);
    // Load spaces when floor or config changes
    React.useEffect(() => {
        if (selectedFloor && config.spaces.model && config.spaces.action) {
            loadSpaces();
        }
    }, [config.spaces, selectedFloor]);
    // Filter spaces based on search query
    React.useEffect(() => {
        const filtered = query.trim()
            ? spaces.filter(s => s.name.toLowerCase().includes(query.toLowerCase()))
            : spaces;
        setFilteredSpaces(filtered);
    }, [spaces, query]);
    // Load coordinates when space changes
    React.useEffect(() => {
        if (selectedSpace) {
            loadCoordinates();
        }
    }, [selectedSpace]);
    // Helper functions
    const getCenterCoords = React.useCallback(() => {
        const floorData = floors.find(f => f.id === selectedFloor);
        if (!floorData)
            return { x: 0, y: 0 };
        return {
            x: floorData.layout.width * 0.5,
            y: floorData.layout.height * 0.5
        };
    }, [floors, selectedFloor]);
    const loadCoordinates = React.useCallback(() => {
        var _a;
        if (!selectedSpace)
            return;
        const coords = ((_a = selectedSpace.coordinates) === null || _a === void 0 ? void 0 : _a.length) ? selectedSpace.coordinates
            : [getCenterCoords()];
        setRegion(coords);
    }, [selectedSpace, getCenterCoords]);
    // API calls
    const loadFloors = React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        try {
            setIsLoading(true);
            const { model, action } = config.floors;
            const res = yield ((_b = props.uxpContext) === null || _b === void 0 ? void 0 : _b.executeAction(model, action, {}, { json: true }));
            setFloors((res === null || res === void 0 ? void 0 : res.floors) || []);
        }
        catch (error) {
            console.error("Failed to load floors:", error);
            setFloors([]);
        }
        finally {
            setIsLoading(false);
        }
    }), [config.floors, props.uxpContext]);
    const loadSpaces = React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        var _c;
        try {
            setIsLoading(true);
            const { model, action } = config.spaces;
            const res = yield ((_c = props.uxpContext) === null || _c === void 0 ? void 0 : _c.executeAction(model, action, { floorId: selectedFloor }, { json: true }));
            const spacesData = (res === null || res === void 0 ? void 0 : res.spaces) || [];
            setSpaces(spacesData);
            // Extract all space regions and markers for map display
            const regions = spacesData
                .filter(space => space.coordinates && space.coordinates.length > 1)
                .map(space => ({
                spaceId: space.id,
                coordinates: space.coordinates,
                color: (space === null || space === void 0 ? void 0 : space.color) || null,
                type: 'region'
            }));
            const markers = spacesData
                .filter(space => space.coordinates && space.coordinates.length === 1)
                .map(space => ({
                spaceId: space.id,
                coordinates: space.coordinates,
                color: (space === null || space === void 0 ? void 0 : space.color) || null,
                icon: (space === null || space === void 0 ? void 0 : space.icon) || null,
                type: 'marker'
            }));
            setAllSpaceRegions([...regions, ...markers]);
        }
        catch (error) {
            console.error("Failed to load spaces:", error);
            setSpaces([]);
            setAllSpaceRegions([]);
        }
        finally {
            setIsLoading(false);
        }
    }), [config.spaces, selectedFloor, props.uxpContext]);
    const saveRegionChanges = React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        var _d;
        if (!selectedSpace || isSaving)
            return;
        try {
            setIsSaving(true);
            const { model, action } = config.setRegion;
            const params = {
                id: selectedSpace.id,
                coordinates: JSON.stringify(region),
                floor: selectedFloor
            };
            yield ((_d = props.uxpContext) === null || _d === void 0 ? void 0 : _d.executeAction(model, action, params, { json: true }));
            yield loadSpaces();
            setIsEditingRegion(false);
            setIsConfirming(false);
            toast.success("Coordinates saved successfully");
        }
        catch (error) {
            console.error("Failed to save coordinates:", error);
            toast.error("Unable to save changes. Something went wrong");
        }
        finally {
            setIsSaving(false);
        }
    }), [selectedSpace, isSaving, config.setRegion, region, selectedFloor, props.uxpContext, loadSpaces, toast]);
    // Event handlers
    const handleSpaceSelect = React.useCallback((space) => {
        setSelectedSpace(space);
        setIsEditingRegion(false);
        setIsConfirming(false);
    }, []);
    const handleFloorChange = React.useCallback((floorId) => {
        setSelectedFloor(floorId);
        setSelectedSpace(null);
        setIsEditingRegion(false);
        setIsConfirming(false);
    }, []);
    const handleRegionUpdate = React.useCallback((index, newPosition) => {
        setRegion(prev => prev.map((pos, i) => i === index ? newPosition : pos));
    }, []);
    const handleMarkerDelete = React.useCallback((index) => {
        setRegion(prev => prev.filter((_, i) => i !== index));
    }, []);
    const handleMarkerDuplicate = React.useCallback((index) => {
        setRegion(prev => {
            const newRegion = [...prev];
            const pos = prev[index];
            newRegion.splice(index + 1, 0, { x: pos.x + 1, y: pos.y + 1 });
            return newRegion;
        });
    }, []);
    const handleAddCoordinate = React.useCallback(() => {
        setRegion(prev => {
            const last = prev[prev.length - 1] || getCenterCoords();
            return [...prev, { x: last.x + 10, y: last.y + 10 }];
        });
    }, [getCenterCoords]);
    const handleCancelEdit = React.useCallback(() => {
        setIsEditingRegion(false);
        setIsConfirming(false);
        loadCoordinates();
    }, [loadCoordinates]);
    const getImageUrl = React.useCallback((imagePath) => {
        var _a;
        if (!imagePath)
            return '';
        if (imagePath.startsWith('/')) {
            const lucyUrl = ((_a = props.uxpContext) === null || _a === void 0 ? void 0 : _a.lucyUrl) || '';
            return `${lucyUrl}${imagePath}`;
        }
        return imagePath;
    }, [(_a = props.uxpContext) === null || _a === void 0 ? void 0 : _a.lucyUrl]);
    // Computed values
    const selectedFloorData = React.useMemo(() => floors.find(f => f.id === selectedFloor), [floors, selectedFloor]);
    const mapCenter = React.useMemo(() => {
        if (!selectedFloorData)
            return null;
        return {
            position: {
                latitude: selectedFloorData.layout.width * 0.5,
                longitude: selectedFloorData.layout.height * 0.5
            },
            renderMarker: false
        };
    }, [selectedFloorData]);
    const markers = React.useMemo(() => {
        if (!selectedFloorData)
            return [];
        const allMarkers = [];
        // Show editing markers when in edit mode
        if (selectedSpace && isEditingRegion) {
            const editMarkers = region.map((pos, index) => ({
                latitude: selectedFloorData.layout.height - pos.y,
                longitude: pos.x,
                draggable: true,
                ondragend: (e) => {
                    const { lat, lng } = e.target._latlng;
                    handleRegionUpdate(index, {
                        x: Number(lng),
                        y: Number(selectedFloorData.layout.height - lat)
                    });
                },
                customHTMLIcon: {
                    className: 'lmui-custom-marker edit-marker',
                    html: '<div class="edit-marker"></div>',
                    iconSize: [0, 0],
                    iconAnchor: [0, 0]
                },
                renderPopup: {
                    content: () => (React.createElement("div", null,
                        React.createElement(components_1.IconButton, { type: "copy", size: "small", onClick: () => handleMarkerDuplicate(index) }),
                        React.createElement(components_1.IconButton, { type: "delete", size: "small", onClick: () => handleMarkerDelete(index) })))
                }
            }));
            allMarkers.push(...editMarkers);
        }
        // Show space markers (only for non-editing spaces)
        const spaceMarkers = allSpaceRegions
            .filter(item => item.type === 'marker' && (!selectedSpace || selectedSpace.id !== item.spaceId || !isEditingRegion))
            .map(item => {
            const pos = item.coordinates[0];
            const isSelected = (selectedSpace === null || selectedSpace === void 0 ? void 0 : selectedSpace.id) === item.spaceId;
            return {
                latitude: selectedFloorData.layout.height - pos.y,
                longitude: pos.x,
                draggable: false,
                customHTMLIcon: {
                    className: `lmui-custom-marker ${isSelected ? 'edit-marker' : ''}`,
                    html: !!item.icon
                        ? `<div class="icon-marker" style="background-color: ${item.color || '#52c4c9'}"><i class="${item.icon}"></i></div>`
                        : `<div class='default-marker'></div>`,
                }
            };
        });
        allMarkers.push(...spaceMarkers);
        return allMarkers;
    }, [selectedFloorData, region, isEditingRegion, allSpaceRegions, selectedSpace, handleRegionUpdate, handleMarkerDuplicate, handleMarkerDelete]);
    const mapRegions = React.useMemo(() => {
        const regions = [];
        // Add all space regions (non-selected in default colors)
        allSpaceRegions
            .filter(item => item.type === 'region' && (selectedSpace === null || selectedSpace === void 0 ? void 0 : selectedSpace.id) !== item.spaceId)
            .forEach(spaceRegion => {
            regions.push({
                type: 'polygon',
                color: (spaceRegion === null || spaceRegion === void 0 ? void 0 : spaceRegion.color) || '#52c4c9',
                fillColor: ((spaceRegion === null || spaceRegion === void 0 ? void 0 : spaceRegion.color) || '#52c4c9') + '55',
                bounds: spaceRegion.coordinates.map(c => [c.x, c.y]),
                imageCoordinates: true,
            });
        });
        // Add selected space region
        if (selectedSpace && region.length > 0) {
            regions.push({
                type: 'polygon',
                color: '#E74C3CFF',
                fillColor: '#E74C3C55',
                bounds: region.map(c => [c.x, c.y]),
                imageCoordinates: true,
            });
        }
        return regions;
    }, [allSpaceRegions, selectedSpace, region, isEditingRegion]);
    return (React.createElement("div", { className: "location-marker-ui-container" },
        React.createElement("div", { className: "lmui-sidebar" },
            React.createElement("div", { className: "title" }, "Spaces"),
            React.createElement("div", { className: "content" },
                React.createElement("div", { className: "search" },
                    React.createElement(components_1.SearchBox, { value: query, onChange: setQuery })),
                filteredSpaces.map((space, index) => (React.createElement("div", { key: space.id, className: `space ${(selectedSpace === null || selectedSpace === void 0 ? void 0 : selectedSpace.id) === space.id ? 'active' : ''}`, onClick: () => handleSpaceSelect(space) }, space.name))))),
        React.createElement("div", { className: "lmui-toolbar" },
            React.createElement(components_1.FormField, { className: "floor-filter" },
                React.createElement(components_1.Select, { selected: selectedFloor, onChange: handleFloorChange, options: floors, labelField: "name", valueField: "id", placeholder: "Select a floor" })),
            React.createElement(components_1.FilterPanel, null,
                React.createElement(components_1.FormField, { className: "location-marker-config-row" },
                    React.createElement(components_1.Label, null, "Get Floors"),
                    React.createElement("div", { className: "row" },
                        React.createElement(components_1.Input, { value: config.floors.model, onChange: (model) => setConfig(prev => (Object.assign(Object.assign({}, prev), { floors: Object.assign(Object.assign({}, prev.floors), { model }) }))), placeholder: "Model name" }),
                        React.createElement(components_1.Input, { value: config.floors.action, onChange: (action) => setConfig(prev => (Object.assign(Object.assign({}, prev), { floors: Object.assign(Object.assign({}, prev.floors), { action }) }))), placeholder: "Action name" }))),
                React.createElement(components_1.FormField, { className: "location-marker-config-row" },
                    React.createElement(components_1.Label, null, "Get Spaces"),
                    React.createElement("div", { className: "row" },
                        React.createElement(components_1.Input, { value: config.spaces.model, onChange: (model) => setConfig(prev => (Object.assign(Object.assign({}, prev), { spaces: Object.assign(Object.assign({}, prev.spaces), { model }) }))), placeholder: "Model name" }),
                        React.createElement(components_1.Input, { value: config.spaces.action, onChange: (action) => setConfig(prev => (Object.assign(Object.assign({}, prev), { spaces: Object.assign(Object.assign({}, prev.spaces), { action }) }))), placeholder: "Action name" }))),
                React.createElement(components_1.FormField, { className: "location-marker-config-row" },
                    React.createElement(components_1.Label, null, "Set Coordinates"),
                    React.createElement("div", { className: "row" },
                        React.createElement(components_1.Input, { value: config.setRegion.model, onChange: (model) => setConfig(prev => (Object.assign(Object.assign({}, prev), { setRegion: Object.assign(Object.assign({}, prev.setRegion), { model }) }))), placeholder: "Model name" }),
                        React.createElement(components_1.Input, { value: config.setRegion.action, onChange: (action) => setConfig(prev => (Object.assign(Object.assign({}, prev), { setRegion: Object.assign(Object.assign({}, prev.setRegion), { action }) }))), placeholder: "Action name" }))))),
        React.createElement("div", { className: "lmui-map-container" }, (selectedFloorData === null || selectedFloorData === void 0 ? void 0 : selectedFloorData.layout.floorPlan) ? (React.createElement(React.Fragment, null,
            React.createElement(components_1.MapComponent, { zoom: -1, minZoom: -20, center: mapCenter, regions: mapRegions, staticImage: {
                    url: getImageUrl(selectedFloorData.layout.floorPlan),
                    width: selectedFloorData.layout.width,
                    height: selectedFloorData.layout.height
                }, markers: markers, onMarkerClick: () => { }, mapUrl: "", onClick: (e) => console.log("Map clicked", e) }),
            selectedSpace && (React.createElement("div", { className: "toolbar" },
                !isEditingRegion && (React.createElement(components_1.Button, { title: "Edit Coordinates", onClick: () => setIsEditingRegion(true), className: "edit-coordinated-btn" })),
                isEditingRegion && (React.createElement("div", { className: "coordinates-list" },
                    React.createElement("div", { className: "coordinates-list-header" }, "Corrdinates"),
                    React.createElement("div", { className: "coordinates-list-body" },
                        React.createElement("table", null,
                            React.createElement("tbody", null, region.map((coord, index) => (React.createElement("tr", { key: index, className: "coordinate-container" },
                                React.createElement("td", null, index + 1),
                                React.createElement("td", null,
                                    "x: ",
                                    coord.x),
                                React.createElement("td", null,
                                    "y: ",
                                    coord.y),
                                region.length > 1 && (React.createElement("td", null,
                                    React.createElement(components_1.IconButton, { type: "delete", size: "small", onClick: () => handleMarkerDelete(index) }))))))))),
                    React.createElement("div", { className: "coordinate-list-footer" },
                        (!isConfirming && !isSaving) && React.createElement(components_1.Button, { title: "Add", onClick: handleAddCoordinate }),
                        isConfirming ? (React.createElement(components_1.AsyncButton, { title: "Confirm", loadingTitle: "Saving...", onClick: saveRegionChanges, className: "confirm-button" })) : (React.createElement(components_1.Button, { title: "Save", onClick: () => setIsConfirming(true), className: "confirm-button" })),
                        !isSaving && (React.createElement(components_1.IconButton, { type: 'close', onClick: handleCancelEdit }))))))))) : (React.createElement("div", { className: "no-map" }, "Select a floor to get started"))),
        isLoading && (React.createElement("div", { className: "lmui-overlay" },
            React.createElement(components_1.Loading, null)))));
};
uxp_1.registerUI({
    id: "sensor-space-coordinate-editor",
    component: SensorSpaceCoordinateEditor,
    showDefaultHeader: false
});


/***/ }),

/***/ "./src/uxp.ts":
/*!********************!*\
  !*** ./src/uxp.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerUI = exports.registerMenuItem = exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
function registerWidget(_widget) {
    var _a;
    let id = (bundle_json_1.default.id + '/widget/' + _widget.id).toLowerCase();
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    // get widget details from bundle.json 
    // get widget
    let _widgetDetails = (_a = bundle_json_1.default.widgets) === null || _a === void 0 ? void 0 : _a.find((w) => w.id == _widget.id);
    if (!_widgetDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The widget you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedWidget = Object.assign(Object.assign(Object.assign({}, _widget), _widgetDetails), { id });
    window.registerWidget(updatedWidget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    var _a;
    let id = (bundle_json_1.default.id + '/sidebarlink/' + _link.id).toLowerCase();
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _linkDetails = (_a = bundle_json_1.default.sidebarLinks) === null || _a === void 0 ? void 0 : _a.find((s) => s.id == _link.id);
    if (!_linkDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The sidebar link you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedLink = Object.assign(Object.assign(Object.assign({}, _link), _linkDetails), { id });
    window.registerLink(updatedLink);
}
exports.registerLink = registerLink;
function registerMenuItem(_menuItem) {
    let id = (bundle_json_1.default.id + '/menuitem/' + _menuItem.id).toLowerCase();
    if (!window.registerMenuItem) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering menu item....', id);
    // get widget details from bundle.json 
    // get widget
    let _menuItemDetails = bundle_json_1.default.menuItems.find((s) => s.id == _menuItem.id);
    if (!_menuItemDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The menu item you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedMenuItem = Object.assign(Object.assign(Object.assign({}, _menuItem), _menuItemDetails), { id });
    window.registerMenuItem(updatedMenuItem);
}
exports.registerMenuItem = registerMenuItem;
function registerUI(_ui) {
    let id = (bundle_json_1.default.id + '/ui/' + _ui.id).toLowerCase();
    if (!window.registerUI) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _uiDetails = bundle_json_1.default.uis.find((s) => s.id == _ui.id);
    if (!_uiDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The ui you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedUI = Object.assign(Object.assign(Object.assign({}, _ui), _uiDetails), { id });
    window.registerUI(updatedUI);
}
exports.registerUI = registerUI;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "uxp/components":
/*!********************************!*\
  !*** external "UXPComponents" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = UXPComponents;

/***/ }),

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"id":"86b70895-f91a-419f-9eca-0425e5d8ca17","author":"dinesh","widgets":[],"sidebarLinks":[],"uis":[{"id":"sensor-space-coordinate-editor","label":"Sensor,space coordinate editor interface"}],"menuItems":[]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map