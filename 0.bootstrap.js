(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/conway_wasm.js":
/*!*****************************!*\
  !*** ../pkg/conway_wasm.js ***!
  \*****************************/
/*! exports provided: Cell, Universe, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_object_drop_ref, __wbg_time_f95106dabafc2a66, __wbg_timeEnd_4cf2ddaad87faeb9, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conway_wasm_bg.wasm */ \"../pkg/conway_wasm_bg.wasm\");\n/* harmony import */ var _conway_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conway_wasm_bg.js */ \"../pkg/conway_wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return _conway_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return _conway_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_59cb74e423758ede\", function() { return _conway_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_59cb74e423758ede\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_558ba5917b466edd\", function() { return _conway_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_stack_558ba5917b466edd\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_4bb6c2a97407129a\", function() { return _conway_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_error_4bb6c2a97407129a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _conway_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_time_f95106dabafc2a66\", function() { return _conway_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_time_f95106dabafc2a66\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_timeEnd_4cf2ddaad87faeb9\", function() { return _conway_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_timeEnd_4cf2ddaad87faeb9\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _conway_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/conway_wasm.js?");

/***/ }),

/***/ "../pkg/conway_wasm_bg.js":
/*!********************************!*\
  !*** ../pkg/conway_wasm_bg.js ***!
  \********************************/
/*! exports provided: Cell, Universe, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_object_drop_ref, __wbg_time_f95106dabafc2a66, __wbg_timeEnd_4cf2ddaad87faeb9, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_59cb74e423758ede\", function() { return __wbg_new_59cb74e423758ede; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_558ba5917b466edd\", function() { return __wbg_stack_558ba5917b466edd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_4bb6c2a97407129a\", function() { return __wbg_error_4bb6c2a97407129a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_time_f95106dabafc2a66\", function() { return __wbg_time_f95106dabafc2a66; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_timeEnd_4cf2ddaad87faeb9\", function() { return __wbg_timeEnd_4cf2ddaad87faeb9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conway_wasm_bg.wasm */ \"../pkg/conway_wasm_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n*/\nconst Cell = Object.freeze({ Dead:0,\"0\":\"Dead\",Alive:1,\"1\":\"Alive\", });\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_universe_free\"](ptr);\n    }\n    /**\n    * @returns {Universe}\n    */\n    static new() {\n        var ret = _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_new\"]();\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        try {\n            const retptr = _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_render\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        var ret = _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_width\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        var ret = _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_height\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    cells() {\n        var ret = _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_cells\"](this.ptr);\n        return ret;\n    }\n    /**\n    */\n    tick() {\n        _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_tick\"](this.ptr);\n    }\n    /**\n    * Set the width of the universe.\n    *\n    * Resets all cells to the dead state.\n    * @param {number} width\n    */\n    set_width(width) {\n        _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_set_width\"](this.ptr, width);\n    }\n    /**\n    * Set the height of the universe.\n    *\n    * Resets all cells to the dead state.\n    * @param {number} height\n    */\n    set_height(height) {\n        _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_set_height\"](this.ptr, height);\n    }\n    /**\n    * @param {number} row\n    * @param {number} column\n    */\n    toggle_cell(row, column) {\n        _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_toggle_cell\"](this.ptr, row, column);\n    }\n}\n\nconst __wbg_new_59cb74e423758ede = function() {\n    var ret = new Error();\n    return addHeapObject(ret);\n};\n\nconst __wbg_stack_558ba5917b466edd = function(arg0, arg1) {\n    var ret = getObject(arg1).stack;\n    var ptr0 = passStringToWasm0(ret, _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {\n    try {\n        console.error(getStringFromWasm0(arg0, arg1));\n    } finally {\n        _conway_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](arg0, arg1);\n    }\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_time_f95106dabafc2a66 = function(arg0, arg1) {\n    console.time(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbg_timeEnd_4cf2ddaad87faeb9 = function(arg0, arg1) {\n    console.timeEnd(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/conway_wasm_bg.js?");

/***/ }),

/***/ "../pkg/conway_wasm_bg.wasm":
/*!**********************************!*\
  !*** ../pkg/conway_wasm_bg.wasm ***!
  \**********************************/
/*! exports provided: memory, __wbg_universe_free, universe_new, universe_render, universe_width, universe_height, universe_cells, universe_tick, universe_set_width, universe_set_height, universe_toggle_cell, __wbindgen_add_to_stack_pointer, __wbindgen_free, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./conway_wasm_bg.js */ \"../pkg/conway_wasm_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/conway_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var conway_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! conway-wasm */ \"../pkg/conway_wasm.js\");\n/* harmony import */ var conway_wasm_conway_wasm_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! conway-wasm/conway_wasm_bg */ \"../pkg/conway_wasm_bg.wasm\");\n\n// Import the webassembly memory at the top of the file.\n\n\nconst CELL_SIZE = 5; // px\nconst GRID_COLOR = \"#CCCCCC\";\nconst DEAD_COLOR = \"#FFFFFF\";\nconst ALIVE_COLOR = \"#000000\";\n\nlet universe = conway_wasm__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new();\nconst width = universe.width();\nconst height = universe.height();\n\nconst canvas = document.getElementById(\"game-of-life-canvas\");\ncanvas.height = (CELL_SIZE + 1) * height + 1;\ncanvas.width = (CELL_SIZE + 1) * width + 1;\n\nconst ctx = canvas.getContext('2d');\nlet animationId = null;\n\nconst renderLoop = () => {\n    fps.render();\n\n    universe.tick();\n    drawGrid();\n    drawCells();\n\n    animationId = requestAnimationFrame(renderLoop);\n};\n\nconst drawGrid = () => {\n    ctx.beginPath();\n    ctx.strokeStyle = GRID_COLOR;\n\n    // Vertical lines.\n    for (let i = 0; i <= width; i++) {\n        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);\n        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);\n    }\n\n    // Horizontal lines.\n    for (let j = 0; j <= height; j++) {\n        ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);\n        ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);\n    }\n\n    ctx.stroke();\n};\n\nconst getIndex = (row, column) => {\n    return row * width + column;\n};\n\nconst bitIsSet = (n, arr) => {\n    const byte = Math.floor(n / 8);\n    const mask = 1 << (n % 8);\n    return (arr[byte] & mask) === mask;\n};\n\nconst drawCells = () => {\n    const cellsPtr = universe.cells();\n    const cells = new Uint8Array(conway_wasm_conway_wasm_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, cellsPtr, width * height / 8);\n\n    ctx.beginPath();\n\n    // Alive cells.\n    ctx.fillStyle = ALIVE_COLOR;\n    for (let row = 0; row < height; row++) {\n        for (let col = 0; col < width; col++) {\n            const idx = getIndex(row, col);\n\n            if (!bitIsSet(idx, cells)) {\n                continue;\n            }\n\n            ctx.fillRect(\n                col * (CELL_SIZE + 1) + 1,\n                row * (CELL_SIZE + 1) + 1,\n                CELL_SIZE,\n                CELL_SIZE\n            );\n        }\n    }\n\n    // Dead cells.\n    ctx.fillStyle = DEAD_COLOR;\n    for (let row = 0; row < height; row++) {\n        for (let col = 0; col < width; col++) {\n            const idx = getIndex(row, col);\n\n            if (bitIsSet(idx, cells)) {\n                continue;\n            }\n\n            ctx.fillRect(\n                col * (CELL_SIZE + 1) + 1,\n                row * (CELL_SIZE + 1) + 1,\n                CELL_SIZE,\n                CELL_SIZE\n            );\n        }\n    }\n\n    ctx.stroke();\n};\n\nconst isPaused = () => {\n    return animationId === null;\n};\n\nconst playPauseButton = document.getElementById(\"play-pause\");\n\nconst play = () => {\n    playPauseButton.textContent = \"Stop\";\n    renderLoop();\n};\n\nconst pause = () => {\n    playPauseButton.textContent = \"Start\";\n    cancelAnimationFrame(animationId);\n    animationId = null;\n};\n\nplayPauseButton.addEventListener(\"click\", event => {\n    if (isPaused()) {\n        play();\n    } else {\n        pause();\n    }\n});\n\nconst resetButton = document.getElementById(\"reset\");\n\nresetButton.addEventListener(\"click\", event => {\n    const fps = document.getElementById(\"fps\");\n    fps.textContent = \"\";\n\n    universe = conway_wasm__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new();\n    drawGrid();\n    drawCells();\n});\n\ncanvas.addEventListener(\"click\", event => {\n    const boundingRect = canvas.getBoundingClientRect();\n\n    const scaleX = canvas.width / boundingRect.width;\n    const scaleY = canvas.height / boundingRect.height;\n\n    const canvasLeft = (event.clientX - boundingRect.left) * scaleX;\n    const canvasTop = (event.clientY - boundingRect.top) * scaleY;\n\n    const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1);\n    const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1);\n\n    universe.toggle_cell(row, col);\n\n    drawGrid();\n    drawCells();\n});\n\nconst init = () => {\n    drawGrid();\n    drawCells();\n};\n\nconst fps = new class {\n    constructor() {\n        this.fps = document.getElementById(\"fps\");\n        this.frames = [];\n        this.lastFrameTimeStamp = performance.now();\n    }\n\n    render() {\n        const now = performance.now();\n        const delta = now - this.lastFrameTimeStamp;\n        this.lastFrameTimeStamp = now;\n        const fps = 1 / delta * 1000;\n\n        // Save only the latest 100 timings.\n        this.frames.push(fps);\n        if (this.frames.length > 100) {\n            this.frames.shift();\n        }\n\n        // Find the max, min, and mean of our 100 latest timings.\n        let min = Infinity;\n        let max = -Infinity;\n        let sum = 0;\n        for (let i = 0; i < this.frames.length; i++) {\n            sum += this.frames[i];\n            min = Math.min(this.frames[i], min);\n            max = Math.max(this.frames[i], max);\n        }\n        let mean = sum / this.frames.length;\n\n        // Render the statistics.\n        this.fps.textContent = `\nFrames per Second (last 100):\nlatest : ${Math.round(fps)} / avg: ${Math.round(mean)} / min: ${Math.round(min)} / max: ${Math.round(max)}\n`.trim();\n    }\n};\n\ninit();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);