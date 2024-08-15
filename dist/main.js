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
exports.push([module.id, ".location-marker-ui-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  padding: 80px 0 0 250px;\n}\n.location-marker-ui-container > .lmui-sidebar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 250px;\n  height: 100%;\n  background-color: white;\n  border-right: 1px solid silver;\n  padding-top: 80px;\n}\n.location-marker-ui-container > .lmui-sidebar > .title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 250px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 900;\n  text-transform: uppercase;\n  border-bottom: 1px solid silver;\n}\n.location-marker-ui-container > .lmui-sidebar > .content {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  padding: 10px;\n}\n.location-marker-ui-container > .lmui-sidebar > .content .search {\n  width: 100%;\n  height: auto;\n  padding: 20px 10px;\n}\n.location-marker-ui-container > .lmui-sidebar > .content .search .uxp-search-box-container .search-box-container .uxp-input-container input {\n  min-width: 165px !important;\n}\n.location-marker-ui-container > .lmui-sidebar > .content > .space {\n  width: 100%;\n  height: auto;\n  padding: 10px;\n  font-size: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  margin-bottom: 8px;\n  border-radius: 5px;\n  background-color: #d8d8d8;\n}\n.location-marker-ui-container > .lmui-sidebar > .content > .space.active {\n  background-color: #52c4c9;\n  color: white;\n}\n.location-marker-ui-container > .lmui-toolbar {\n  position: absolute;\n  top: 0;\n  left: 250px;\n  right: 0;\n  height: 80px;\n  padding: 20px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  border-bottom: 1px solid silver;\n}\n.location-marker-ui-container > .lmui-toolbar > .floor-filter {\n  width: auto;\n}\n.location-marker-ui-container > .lmui-toolbar > .floor-filter .uxp-form-select {\n  max-width: 250px;\n  margin: 0;\n}\n.location-marker-ui-container > .lmui-map-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.location-marker-ui-container > .lmui-map-container > .no-map {\n  font-weight: 900;\n  font-size: 20px;\n  color: #868686;\n}\n.location-marker-ui-container > .lmui-map-container > .toolbar {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background-color: rgba(0, 0, 0, 0.5);\n  border: 2px solid black;\n  padding: 15px 20px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 999;\n}\n.location-marker-ui-container > .lmui-map-container > .toolbar > .uxp-button {\n  margin: 0 4px;\n}\n.location-marker-ui-container > .lmui-map-container > .toolbar > .uxp-button.confirm-button {\n  background-color: #52c4c9;\n  color: white;\n}\n.location-marker-ui-container > .lmui-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100%;\n}\n\n.location-marker-config-row > .row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.location-marker-config-row > .row > .uxp-input-container {\n  margin: 4px;\n}\n\n.lmui-custom-marker {\n  background-color: transparent;\n}\n.lmui-custom-marker > div {\n  width: 30px;\n  height: 30px;\n  border: 2px solid #52c4c9;\n  background-color: #51d2d757;\n  transform: translate(-9px, -9px);\n  border-radius: 50%;\n  position: relative;\n}\n.lmui-custom-marker > div::before {\n  content: \"\";\n  width: 5px;\n  height: 5px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #52c4c9;\n}", ""]);
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
    const [filteredSpace, setFilteredSpace] = React.useState([]);
    const [query, setQuery] = React.useState('');
    let [spaces, setSpaces] = React.useState([]);
    let [space, setSpace] = React.useState(null);
    let [floors, setFloors] = React.useState([]);
    let [floor, setFloor] = React.useState(null);
    let [config, setConfig] = React.useState({
        floors: { model: "", action: "" },
        spaces: { model: "", action: "" },
        setRegion: { model: "", action: "" },
    });
    let [region, setRegion] = React.useState([]);
    let [editRegion, setEditRegion] = React.useState(false);
    let [loading, setLoading] = React.useState(true);
    let [saving, setSaving] = React.useState(false);
    let [confirming, setConfirming] = React.useState(false);
    let toast = components_1.useToast();
    React.useEffect(() => {
        let params = new URLSearchParams(window.location.search);
        console.log("params ", params);
        let flm = params.get("flm") || "";
        let fla = params.get("fla") || "";
        let asm = params.get("asm") || "";
        let asa = params.get("asa") || "";
        let ucm = params.get("ucm") || "";
        let uca = params.get("uca") || "";
        setConfig({
            floors: {
                model: flm,
                action: fla
            },
            spaces: {
                model: asm,
                action: asa
            },
            setRegion: {
                model: ucm,
                action: uca
            }
        });
    }, [window.location]);
    React.useEffect(() => {
        getFloors();
    }, [config.floors]);
    React.useEffect(() => {
        if (floors.length > 0) {
            setFloor(floors[0].id);
        }
    }, [floors]);
    React.useEffect(() => {
        getSpaces();
    }, [config.spaces]);
    React.useEffect(() => {
        if (spaces.length > 0 && !!space)
            setSpace(spaces[0]);
    }, [spaces]);
    React.useEffect(() => {
        filterSpaces();
    }, [spaces, query]);
    React.useEffect(() => {
        getDefaultCoords();
    }, [space]);
    function filterSpaces() {
        var _a;
        const filtered = (((_a = query === null || query === void 0 ? void 0 : query.trim()) === null || _a === void 0 ? void 0 : _a.length) > 0) ? [...spaces].filter(s => { var _a; return ((_a = s === null || s === void 0 ? void 0 : s.name) === null || _a === void 0 ? void 0 : _a.indexOf(query)) !== -1; }) : spaces;
        setFilteredSpace(filtered);
    }
    function getDefaultCoords() {
        if (space) {
            let coords = space.coordinates || [];
            if (coords.length == 0)
                coords = [getCenterCoords()];
            setRegion(coords);
        }
    }
    function getCenterCoords() {
        let floorData = floors.find(f => f.id == floor);
        let lat = (floorData === null || floorData === void 0 ? void 0 : floorData.layout.width) * 0.5 || 0;
        let lng = (floorData === null || floorData === void 0 ? void 0 : floorData.layout.height) * 0.5 || 0;
        return { x: lng, y: lat };
    }
    function getFloors() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                setLoading(true);
                let { model, action } = config.floors;
                if (model.trim().length > 0 && action.trim().length > 0) {
                    let res = yield props.uxpContext.executeAction(model, action, {}, { json: true });
                    setFloors(res.floors || []);
                }
                setLoading(false);
            }
            catch (e) {
                setFloors([]);
                console.log("unable to get floors ", e);
                setLoading(false);
                // toast.error("Unable to get floors. Something went wrong")
            }
        });
    }
    function getSpaces() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                setLoading(true);
                let { model, action } = config.spaces;
                if (model.trim().length > 0 && action.trim().length > 0) {
                    let res = yield props.uxpContext.executeAction(model, action, {}, { json: true });
                    setSpaces(res.spaces || []);
                    console.log("spaces ", res.spaces);
                }
                setLoading(false);
            }
            catch (e) {
                setSpaces([]);
                console.log("unable to get spaces ", e);
                // toast.error("Unable to get spaces. Something went wrong")
            }
        });
    }
    function saveRegionChanges() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { model, action } = config.setRegion;
                if (model.trim().length > 0 && action.trim().length > 0 && space) {
                    if (saving)
                        return;
                    setSaving(true);
                    let params = {
                        id: space.id,
                        coordinates: JSON.stringify(region),
                        floor: floor
                    };
                    let res = yield props.uxpContext.executeAction(model, action, params, { json: true });
                    yield getSpaces();
                    setEditRegion(false);
                    setConfirming(false);
                    setSaving(false);
                }
            }
            catch (e) {
                console.log("Unable to save ", e);
                toast.error("Unable to save changes. Something went wrong");
            }
        });
    }
    let floorData = floors.find(f => f.id == floor);
    let _center = {
        position: {
            latitude: (floorData === null || floorData === void 0 ? void 0 : floorData.layout.width) * 0.5,
            longitude: (floorData === null || floorData === void 0 ? void 0 : floorData.layout.height) * 0.5
        },
        renderMarker: false
    };
    let markers = [];
    if (floorData) {
        for (let i = 0; i < region.length; i++) {
            let pos = region[i];
            let lat = (floorData.layout.height - pos.y);
            let lng = pos.x;
            let m = {
                latitude: lat,
                longitude: lng,
                draggable: editRegion,
                ondragstart: (e) => console.log("Drag start ", e),
                ondragend: (e) => {
                    let { lat, lng } = e.target._latlng;
                    let _region = [...region];
                    _region[i] = { x: Number(lng), y: Number(floorData.layout.height - lat) };
                    setRegion(_region);
                },
                customHTMLIcon: {
                    className: 'lmui-custom-marker',
                    html: '<div></div>'
                },
                renderPopup: {
                    content: () => React.createElement("div", null, editRegion ?
                        React.createElement(React.Fragment, null,
                            React.createElement(components_1.IconButton, { type: "copy", size: "small", onClick: () => {
                                    // duplicate the marker 
                                    let _region = [...region];
                                    _region.splice(i, 0, { x: pos.x + 1, y: pos.y + 1 });
                                    setRegion(_region);
                                } }),
                            React.createElement(components_1.IconButton, { type: "delete", size: "small", onClick: () => {
                                    let _region = [...region];
                                    _region.splice(i, 1);
                                    setRegion(_region);
                                } }))
                        :
                            React.createElement("div", null, " Click on \"Edit Coordinates\" to start editing "))
                }
            };
            markers.push(m);
        }
    }
    return (React.createElement("div", { className: "location-marker-ui-container" },
        React.createElement("div", { className: "lmui-sidebar" },
            React.createElement("div", { className: "title" }, " Spaces "),
            React.createElement("div", { className: "content" },
                React.createElement("div", { className: "search" },
                    React.createElement(components_1.SearchBox, { value: query, onChange: setQuery })),
                filteredSpace.map((s, i) => {
                    return React.createElement("div", { className: `space ${(space === null || space === void 0 ? void 0 : space.id) == s.id && 'active'} `, key: i, onClick: () => setSpace(s) },
                        " ",
                        s.name,
                        " ");
                }))),
        React.createElement("div", { className: "lmui-toolbar" },
            React.createElement(components_1.FormField, { className: "floor-filter" },
                React.createElement(components_1.Select, { selected: floor || "", onChange: setFloor, options: floors, labelField: "name", valueField: "id", placeholder: "Select a floor" })),
            React.createElement(components_1.FilterPanel, null,
                React.createElement(components_1.FormField, { className: "location-marker-config-row" },
                    React.createElement(components_1.Label, null, "Get Floors "),
                    React.createElement("div", { className: "row" },
                        React.createElement(components_1.Input, { value: config.floors.model || "", onChange: s => { setConfig(prev => (Object.assign(Object.assign({}, prev), { floors: Object.assign(Object.assign({}, prev.floors), { model: s }) }))); }, placeholder: "Model name" }),
                        React.createElement(components_1.Input, { value: config.floors.action || "", onChange: s => { setConfig(prev => (Object.assign(Object.assign({}, prev), { floors: Object.assign(Object.assign({}, prev.floors), { action: s }) }))); }, placeholder: "Action name" }))),
                React.createElement(components_1.FormField, { className: "location-marker-config-row" },
                    React.createElement(components_1.Label, null, "Get Spaces "),
                    React.createElement("div", { className: "row" },
                        React.createElement(components_1.Input, { value: config.spaces.model || "", onChange: s => { setConfig(prev => (Object.assign(Object.assign({}, prev), { spaces: Object.assign(Object.assign({}, prev.spaces), { model: s }) }))); }, placeholder: "Model name" }),
                        React.createElement(components_1.Input, { value: config.spaces.action || "", onChange: s => { setConfig(prev => (Object.assign(Object.assign({}, prev), { spaces: Object.assign(Object.assign({}, prev.spaces), { action: s }) }))); }, placeholder: "Action name" }))),
                React.createElement(components_1.FormField, { className: "location-marker-config-row" },
                    React.createElement(components_1.Label, null, "Set Coordinates "),
                    React.createElement("div", { className: "row" },
                        React.createElement(components_1.Input, { value: config.setRegion.model || "", onChange: s => { setConfig(prev => (Object.assign(Object.assign({}, prev), { setRegion: Object.assign(Object.assign({}, prev.setRegion), { model: s }) }))); }, placeholder: "Model name" }),
                        React.createElement(components_1.Input, { value: config.setRegion.action || "", onChange: s => { setConfig(prev => (Object.assign(Object.assign({}, prev), { setRegion: Object.assign(Object.assign({}, prev.setRegion), { action: s }) }))); }, placeholder: "Action name" }))))),
        React.createElement("div", { className: "lmui-map-container" }, (floorData && floorData.layout.floorPlan) ?
            React.createElement(React.Fragment, null,
                React.createElement(components_1.MapComponent, { zoom: 1, minZoom: -20, center: _center, regions: [
                        {
                            type: 'polygon',
                            color: '#DDBC52FF',
                            fillColor: '#DDBC52FF',
                            bounds: region.map((c) => [c.x, c.y]),
                            imageCoordinates: true,
                        }
                    ], staticImage: {
                        url: floorData.layout.floorPlan || "",
                        width: floorData.layout.width,
                        height: floorData.layout.height
                    }, onRegionClick: (e, data) => {
                    }, markers: markers, onMarkerClick: () => { }, mapUrl: '', onClick: e => {
                        console.log("cliked", e);
                        // const _reg = [...region]
                        // _reg.push({x:e.latlng.lat, y:e.latlng.lng})
                        // setRegion(_reg)
                    } }),
                space &&
                    React.createElement("div", { className: "toolbar" }, editRegion ?
                        React.createElement(React.Fragment, null,
                            confirming ?
                                React.createElement(components_1.AsyncButton, { title: "Confirm", loadingTitle: "Saving...", onClick: saveRegionChanges, className: "confirm-button" })
                                :
                                    React.createElement(components_1.Button, { title: "Save Changes", loadingTitle: "Saving Changes....", onClick: () => setConfirming(true), className: "confirm-button" }),
                            !saving &&
                                React.createElement(components_1.Button, { title: 'Cancel', onClick: () => {
                                        setEditRegion(false);
                                        getDefaultCoords();
                                    } }))
                        :
                            React.createElement(components_1.Button, { title: "Edit Coordinates", onClick: () => setEditRegion(true) })))
            : React.createElement("div", { className: 'no-map' }, "Select a floor to get started")),
        loading && React.createElement("div", { className: "lmui-overlay" },
            " ",
            React.createElement(components_1.Loading, null),
            " ")));
};
/**
 * Register as a Widget
 */
uxp_1.registerUI({
    id: "sensor-space-coordinate-editor",
    component: SensorSpaceCoordinateEditor,
    showDefaultHeader: false
});
/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "LocationMarkerUI",
    label: "LocationMarkerUI",
    // click: () => alert("Hello"),
    component: LocationMarkerUIWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"LocationMarkerUI",
   component: LocationMarkerUIWidget
});
*/ 


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