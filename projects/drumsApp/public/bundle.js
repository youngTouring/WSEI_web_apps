/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Keyboard.ts":
/*!*************************!*\
  !*** ./src/Keyboard.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Keyboard = /** @class */ (function () {\r\n    function Keyboard() {\r\n        this.audios = {};\r\n        this.key = null;\r\n    }\r\n    Keyboard.prototype.load = function () {\r\n        var keyTypes = [\"boom\", \"clap\", \"hihat\", \"kick\", \"openhat\", \"ride\", \"snare\", \"tink\", \"tom\"];\r\n        var audios = {};\r\n        keyTypes.forEach(function (keyType) {\r\n            var sound = document.querySelector(\"[data-sound=\\\"\" + keyType + \"\\\"]\");\r\n            if (sound != null) {\r\n                audios[keyType] = sound;\r\n            }\r\n        });\r\n        this.audios = audios;\r\n    };\r\n    Keyboard.prototype.setKey = function (key) {\r\n        this.key = key;\r\n    };\r\n    Keyboard.prototype.play = function () {\r\n        if (this.key != null && (this.key in this.audios)) {\r\n            var a = this.audios[this.key];\r\n            a.currentTime = 0;\r\n            a.play();\r\n        }\r\n    };\r\n    return Keyboard;\r\n}());\r\nexports[\"default\"] = Keyboard;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvS2V5Ym9hcmQudHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcnVtcy8uL3NyYy9LZXlib2FyZC50cz85MTUxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBLZXlib2FyZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEtleWJvYXJkKCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9zID0ge307XHJcbiAgICAgICAgdGhpcy5rZXkgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgS2V5Ym9hcmQucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGtleVR5cGVzID0gW1wiYm9vbVwiLCBcImNsYXBcIiwgXCJoaWhhdFwiLCBcImtpY2tcIiwgXCJvcGVuaGF0XCIsIFwicmlkZVwiLCBcInNuYXJlXCIsIFwidGlua1wiLCBcInRvbVwiXTtcclxuICAgICAgICB2YXIgYXVkaW9zID0ge307XHJcbiAgICAgICAga2V5VHlwZXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5VHlwZSkge1xyXG4gICAgICAgICAgICB2YXIgc291bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc291bmQ9XFxcIlwiICsga2V5VHlwZSArIFwiXFxcIl1cIik7XHJcbiAgICAgICAgICAgIGlmIChzb3VuZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBhdWRpb3Nba2V5VHlwZV0gPSBzb3VuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYXVkaW9zID0gYXVkaW9zO1xyXG4gICAgfTtcclxuICAgIEtleWJvYXJkLnByb3RvdHlwZS5zZXRLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICB9O1xyXG4gICAgS2V5Ym9hcmQucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5ICE9IG51bGwgJiYgKHRoaXMua2V5IGluIHRoaXMuYXVkaW9zKSkge1xyXG4gICAgICAgICAgICB2YXIgYSA9IHRoaXMuYXVkaW9zW3RoaXMua2V5XTtcclxuICAgICAgICAgICAgYS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgIGEucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gS2V5Ym9hcmQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEtleWJvYXJkO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Keyboard.ts\n");

/***/ }),

/***/ "./src/Layer.ts":
/*!**********************!*\
  !*** ./src/Layer.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.initLayers = void 0;\r\nvar initLayers = function (numberOfLayers) {\r\n    var layerContainer = document.getElementById(\"layerContainer\");\r\n    for (var i = 0; i < numberOfLayers; i++) {\r\n        var newLayer = document.createElement(\"div\");\r\n        var recordBtn = document.createElement(\"button\");\r\n        var channelParagraph = document.createElement(\"p\");\r\n        channelParagraph.innerHTML = \"Channel \" + (i + 1);\r\n        recordBtn.classList.add(\"record-btn\");\r\n        recordBtn.innerHTML = \"Recording\";\r\n        recordBtn.dataset.key = String(i);\r\n        var stopRecordingBtn = document.createElement(\"button\");\r\n        stopRecordingBtn.innerHTML = \"Stop recording\";\r\n        stopRecordingBtn.disabled = true;\r\n        stopRecordingBtn.classList.add(\"stop-recording-btn\");\r\n        stopRecordingBtn.dataset.key = String(i);\r\n        var playBtn = document.createElement(\"button\");\r\n        playBtn.innerHTML = \"Play\";\r\n        stopRecordingBtn.disabled = true;\r\n        playBtn.classList.add(\"play-btn\");\r\n        playBtn.dataset.key = String(i);\r\n        newLayer.appendChild(channelParagraph);\r\n        newLayer.appendChild(recordBtn);\r\n        newLayer.appendChild(stopRecordingBtn);\r\n        newLayer.appendChild(playBtn);\r\n        layerContainer === null || layerContainer === void 0 ? void 0 : layerContainer.appendChild(newLayer);\r\n    }\r\n};\r\nexports.initLayers = initLayers;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTGF5ZXIudHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2RydW1zLy4vc3JjL0xheWVyLnRzP2Q1MGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbml0TGF5ZXJzID0gdm9pZCAwO1xyXG52YXIgaW5pdExheWVycyA9IGZ1bmN0aW9uIChudW1iZXJPZkxheWVycykge1xyXG4gICAgdmFyIGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYXllckNvbnRhaW5lclwiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZMYXllcnM7IGkrKykge1xyXG4gICAgICAgIHZhciBuZXdMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdmFyIHJlY29yZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgdmFyIGNoYW5uZWxQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjaGFubmVsUGFyYWdyYXBoLmlubmVySFRNTCA9IFwiQ2hhbm5lbCBcIiArIChpICsgMSk7XHJcbiAgICAgICAgcmVjb3JkQnRuLmNsYXNzTGlzdC5hZGQoXCJyZWNvcmQtYnRuXCIpO1xyXG4gICAgICAgIHJlY29yZEJ0bi5pbm5lckhUTUwgPSBcIlJlY29yZGluZ1wiO1xyXG4gICAgICAgIHJlY29yZEJ0bi5kYXRhc2V0LmtleSA9IFN0cmluZyhpKTtcclxuICAgICAgICB2YXIgc3RvcFJlY29yZGluZ0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgc3RvcFJlY29yZGluZ0J0bi5pbm5lckhUTUwgPSBcIlN0b3AgcmVjb3JkaW5nXCI7XHJcbiAgICAgICAgc3RvcFJlY29yZGluZ0J0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgc3RvcFJlY29yZGluZ0J0bi5jbGFzc0xpc3QuYWRkKFwic3RvcC1yZWNvcmRpbmctYnRuXCIpO1xyXG4gICAgICAgIHN0b3BSZWNvcmRpbmdCdG4uZGF0YXNldC5rZXkgPSBTdHJpbmcoaSk7XHJcbiAgICAgICAgdmFyIHBsYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHBsYXlCdG4uaW5uZXJIVE1MID0gXCJQbGF5XCI7XHJcbiAgICAgICAgc3RvcFJlY29yZGluZ0J0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcGxheUJ0bi5jbGFzc0xpc3QuYWRkKFwicGxheS1idG5cIik7XHJcbiAgICAgICAgcGxheUJ0bi5kYXRhc2V0LmtleSA9IFN0cmluZyhpKTtcclxuICAgICAgICBuZXdMYXllci5hcHBlbmRDaGlsZChjaGFubmVsUGFyYWdyYXBoKTtcclxuICAgICAgICBuZXdMYXllci5hcHBlbmRDaGlsZChyZWNvcmRCdG4pO1xyXG4gICAgICAgIG5ld0xheWVyLmFwcGVuZENoaWxkKHN0b3BSZWNvcmRpbmdCdG4pO1xyXG4gICAgICAgIG5ld0xheWVyLmFwcGVuZENoaWxkKHBsYXlCdG4pO1xyXG4gICAgICAgIGxheWVyQ29udGFpbmVyID09PSBudWxsIHx8IGxheWVyQ29udGFpbmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdMYXllcik7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMuaW5pdExheWVycyA9IGluaXRMYXllcnM7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Layer.ts\n");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Player = /** @class */ (function () {\r\n    function Player(recorder, keyboard) {\r\n        this.recorder = recorder;\r\n        this.keyboard = keyboard;\r\n    }\r\n    Player.prototype.play = function () {\r\n        var _this = this;\r\n        var channel = this.recorder.getChannel();\r\n        var startAt = this.recorder.startAt;\r\n        var prevTime = startAt;\r\n        channel === null || channel === void 0 ? void 0 : channel.forEach(function (step) {\r\n            if (prevTime == 0) {\r\n                prevTime = step.time;\r\n            }\r\n            var timeout = step.time - prevTime;\r\n            setTimeout(function () {\r\n                _this.keyboard.setKey(step.key);\r\n                _this.keyboard.play();\r\n            }, timeout);\r\n        });\r\n    };\r\n    return Player;\r\n}());\r\nexports[\"default\"] = Player;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUGxheWVyLnRzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2RydW1zLy4vc3JjL1BsYXllci50cz8xYmQ3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQbGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQbGF5ZXIocmVjb3JkZXIsIGtleWJvYXJkKSB7XHJcbiAgICAgICAgdGhpcy5yZWNvcmRlciA9IHJlY29yZGVyO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmQgPSBrZXlib2FyZDtcclxuICAgIH1cclxuICAgIFBsYXllci5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjaGFubmVsID0gdGhpcy5yZWNvcmRlci5nZXRDaGFubmVsKCk7XHJcbiAgICAgICAgdmFyIHN0YXJ0QXQgPSB0aGlzLnJlY29yZGVyLnN0YXJ0QXQ7XHJcbiAgICAgICAgdmFyIHByZXZUaW1lID0gc3RhcnRBdDtcclxuICAgICAgICBjaGFubmVsID09PSBudWxsIHx8IGNoYW5uZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNoYW5uZWwuZm9yRWFjaChmdW5jdGlvbiAoc3RlcCkge1xyXG4gICAgICAgICAgICBpZiAocHJldlRpbWUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcHJldlRpbWUgPSBzdGVwLnRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBzdGVwLnRpbWUgLSBwcmV2VGltZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5rZXlib2FyZC5zZXRLZXkoc3RlcC5rZXkpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMua2V5Ym9hcmQucGxheSgpO1xyXG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUGxheWVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBQbGF5ZXI7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Player.ts\n");

/***/ }),

/***/ "./src/Recorder.ts":
/*!*************************!*\
  !*** ./src/Recorder.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.RecorderState = void 0;\r\nvar Recorder = /** @class */ (function () {\r\n    function Recorder() {\r\n        this._startAt = 0;\r\n        this._state = RecorderState.WAITING;\r\n        this._channel = [];\r\n    }\r\n    Recorder.prototype.push = function (key, time) {\r\n        if (this.state == RecorderState.RECORDING) {\r\n            this._channel.push({ key: key, time: time });\r\n        }\r\n    };\r\n    Recorder.prototype.getChannel = function () {\r\n        return this._channel;\r\n    };\r\n    Recorder.prototype.clearChannel = function () {\r\n        this._channel = [];\r\n    };\r\n    Object.defineProperty(Recorder.prototype, \"state\", {\r\n        get: function () {\r\n            return this._state;\r\n        },\r\n        set: function (state) {\r\n            this._state = state;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Recorder.prototype, \"startAt\", {\r\n        get: function () {\r\n            return this._startAt;\r\n        },\r\n        set: function (startAt) {\r\n            this._startAt = startAt;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return Recorder;\r\n}());\r\nexports[\"default\"] = Recorder;\r\nvar RecorderState;\r\n(function (RecorderState) {\r\n    RecorderState[RecorderState[\"WAITING\"] = 0] = \"WAITING\";\r\n    RecorderState[RecorderState[\"RECORDING\"] = 1] = \"RECORDING\";\r\n})(RecorderState = exports.RecorderState || (exports.RecorderState = {}));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUmVjb3JkZXIudHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsc0JBQXNCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Qsa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNENBQTRDLHFCQUFxQixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJ1bXMvLi9zcmMvUmVjb3JkZXIudHM/NjFjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlJlY29yZGVyU3RhdGUgPSB2b2lkIDA7XHJcbnZhciBSZWNvcmRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlY29yZGVyKCkge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0QXQgPSAwO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gUmVjb3JkZXJTdGF0ZS5XQUlUSU5HO1xyXG4gICAgICAgIHRoaXMuX2NoYW5uZWwgPSBbXTtcclxuICAgIH1cclxuICAgIFJlY29yZGVyLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGtleSwgdGltZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09IFJlY29yZGVyU3RhdGUuUkVDT1JESU5HKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoYW5uZWwucHVzaCh7IGtleToga2V5LCB0aW1lOiB0aW1lIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWNvcmRlci5wcm90b3R5cGUuZ2V0Q2hhbm5lbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hhbm5lbDtcclxuICAgIH07XHJcbiAgICBSZWNvcmRlci5wcm90b3R5cGUuY2xlYXJDaGFubmVsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2NoYW5uZWwgPSBbXTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb3JkZXIucHJvdG90eXBlLCBcInN0YXRlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb3JkZXIucHJvdG90eXBlLCBcInN0YXJ0QXRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhcnRBdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHN0YXJ0QXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRBdCA9IHN0YXJ0QXQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFJlY29yZGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBSZWNvcmRlcjtcclxudmFyIFJlY29yZGVyU3RhdGU7XHJcbihmdW5jdGlvbiAoUmVjb3JkZXJTdGF0ZSkge1xyXG4gICAgUmVjb3JkZXJTdGF0ZVtSZWNvcmRlclN0YXRlW1wiV0FJVElOR1wiXSA9IDBdID0gXCJXQUlUSU5HXCI7XHJcbiAgICBSZWNvcmRlclN0YXRlW1JlY29yZGVyU3RhdGVbXCJSRUNPUkRJTkdcIl0gPSAxXSA9IFwiUkVDT1JESU5HXCI7XHJcbn0pKFJlY29yZGVyU3RhdGUgPSBleHBvcnRzLlJlY29yZGVyU3RhdGUgfHwgKGV4cG9ydHMuUmVjb3JkZXJTdGF0ZSA9IHt9KSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Recorder.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Keyboard_1 = __importDefault(__webpack_require__(/*! ./Keyboard */ \"./src/Keyboard.ts\"));\r\nvar Recorder_1 = __importStar(__webpack_require__(/*! ./Recorder */ \"./src/Recorder.ts\"));\r\nvar DefaultKeyboardMapper_1 = __importDefault(__webpack_require__(/*! ./mappers/DefaultKeyboardMapper */ \"./src/mappers/DefaultKeyboardMapper.ts\"));\r\nvar Player_1 = __importDefault(__webpack_require__(/*! ./Player */ \"./src/Player.ts\"));\r\nvar Layer_1 = __webpack_require__(/*! ./Layer */ \"./src/Layer.ts\");\r\nvar numberOfLayers = 3;\r\nvar recorders = [];\r\nvar players = [];\r\nvar keyboard = new Keyboard_1.default();\r\nkeyboard.load();\r\n(0, Layer_1.initLayers)(numberOfLayers);\r\nfor (var index = 0; index < numberOfLayers; index++) {\r\n    recorders[index] = new Recorder_1.default();\r\n    players[index] = new Player_1.default(recorders[index], keyboard);\r\n}\r\n//\r\nfunction onKeyPress(event) {\r\n    var _a;\r\n    var key = String(event.key).toLocaleLowerCase();\r\n    var time = event.timeStamp;\r\n    var mapper = DefaultKeyboardMapper_1.default.getMapper();\r\n    if (key in mapper) {\r\n        keyboard.setKey(mapper[key]);\r\n        keyboard.play();\r\n        for (var index = 0; index < numberOfLayers; index++) {\r\n            (_a = recorders[index]) === null || _a === void 0 ? void 0 : _a.push(mapper[key], time);\r\n        }\r\n    }\r\n}\r\nfunction onClick(event) {\r\n    var _a;\r\n    var target = event.target;\r\n    var soundKey = target.dataset.sound;\r\n    var time = event.timeStamp;\r\n    if (soundKey != undefined) {\r\n        keyboard.setKey(soundKey);\r\n        keyboard.play();\r\n        for (var index = 0; index < numberOfLayers; index++) {\r\n            (_a = recorders[index]) === null || _a === void 0 ? void 0 : _a.push(soundKey, time);\r\n        }\r\n    }\r\n}\r\n//\r\nvar recordBtns = document.querySelectorAll(\".record-btn\");\r\nvar stopRecordingBtns = document.querySelectorAll(\".stop-recording-btn\");\r\nvar playBtns = document.querySelectorAll(\".play-btn\");\r\nfunction getInputIndex(event) {\r\n    var target = event.target;\r\n    return Number(target.dataset.key);\r\n}\r\nrecordBtns === null || recordBtns === void 0 ? void 0 : recordBtns.forEach(function (btn) {\r\n    btn.addEventListener(\"click\", function (event) {\r\n        var index = getInputIndex(event);\r\n        var recorder = recorders[index];\r\n        if (recorder.state == Recorder_1.RecorderState.WAITING) {\r\n            console.log(\"RECORD BTN!\");\r\n            recorder.clearChannel();\r\n            recorder.state = Recorder_1.RecorderState.RECORDING;\r\n            recorder.startAt = event.timeStamp;\r\n            var recordBtn = document.querySelector(\"button.record-btn[data-key=\\\"\" + index + \"\\\"]\");\r\n            recordBtn.disabled = true;\r\n            var stopRecordingBtn = document.querySelector(\"button.stop-recording-btn[data-key=\\\"\" + index + \"\\\"]\");\r\n            stopRecordingBtn.disabled = false;\r\n        }\r\n    });\r\n});\r\nstopRecordingBtns === null || stopRecordingBtns === void 0 ? void 0 : stopRecordingBtns.forEach(function (btn) {\r\n    btn.addEventListener(\"click\", function (event) {\r\n        var index = getInputIndex(event);\r\n        var recorder = recorders[index];\r\n        if (recorder.state == Recorder_1.RecorderState.RECORDING) {\r\n            console.log(\"STOP RECORDING BTN!\");\r\n            recorder.state = Recorder_1.RecorderState.WAITING;\r\n            var recordBtn = document.querySelector(\"button.record-btn[data-key=\\\"\" + index + \"\\\"]\");\r\n            recordBtn.disabled = false;\r\n            var stopRecordingBtn = document.querySelector(\"button.stop-recording-btn[data-key=\\\"\" + index + \"\\\"]\");\r\n            stopRecordingBtn.disabled = true;\r\n        }\r\n    });\r\n});\r\nplayBtns === null || playBtns === void 0 ? void 0 : playBtns.forEach(function (btn) {\r\n    btn.addEventListener(\"click\", function (event) {\r\n        var index = getInputIndex(event);\r\n        var recorder = recorders[index];\r\n        var player = players[index];\r\n        if (recorder.state == Recorder_1.RecorderState.WAITING) {\r\n            console.log(\"PLAY BTN!\");\r\n            player.play();\r\n        }\r\n    });\r\n});\r\n//\r\ndocument.addEventListener(\"keypress\", onKeyPress);\r\n//\r\nvar keyboardPanel = document.getElementById(\"keyboardPanel\");\r\nif (keyboardPanel != null) {\r\n    var keys = keyboardPanel.querySelectorAll(\".keyboardKey\");\r\n    keys === null || keys === void 0 ? void 0 : keys.forEach(function (key) {\r\n        key.addEventListener(\"click\", onClick);\r\n    });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0EsbUNBQW1DLG9DQUFvQyxnQkFBZ0I7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEMsNEJBQTRCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlDQUFpQyxtQkFBTyxDQUFDLHFDQUFZO0FBQ3JELDhCQUE4QixtQkFBTyxDQUFDLHFDQUFZO0FBQ2xELDhDQUE4QyxtQkFBTyxDQUFDLCtFQUFpQztBQUN2RiwrQkFBK0IsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNqRCxjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcnVtcy8uL3NyYy9pbmRleC50cz9jOTA2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgS2V5Ym9hcmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9LZXlib2FyZFwiKSk7XHJcbnZhciBSZWNvcmRlcl8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1JlY29yZGVyXCIpKTtcclxudmFyIERlZmF1bHRLZXlib2FyZE1hcHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHBlcnMvRGVmYXVsdEtleWJvYXJkTWFwcGVyXCIpKTtcclxudmFyIFBsYXllcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1BsYXllclwiKSk7XHJcbnZhciBMYXllcl8xID0gcmVxdWlyZShcIi4vTGF5ZXJcIik7XHJcbnZhciBudW1iZXJPZkxheWVycyA9IDM7XHJcbnZhciByZWNvcmRlcnMgPSBbXTtcclxudmFyIHBsYXllcnMgPSBbXTtcclxudmFyIGtleWJvYXJkID0gbmV3IEtleWJvYXJkXzEuZGVmYXVsdCgpO1xyXG5rZXlib2FyZC5sb2FkKCk7XHJcbigwLCBMYXllcl8xLmluaXRMYXllcnMpKG51bWJlck9mTGF5ZXJzKTtcclxuZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG51bWJlck9mTGF5ZXJzOyBpbmRleCsrKSB7XHJcbiAgICByZWNvcmRlcnNbaW5kZXhdID0gbmV3IFJlY29yZGVyXzEuZGVmYXVsdCgpO1xyXG4gICAgcGxheWVyc1tpbmRleF0gPSBuZXcgUGxheWVyXzEuZGVmYXVsdChyZWNvcmRlcnNbaW5kZXhdLCBrZXlib2FyZCk7XHJcbn1cclxuLy9cclxuZnVuY3Rpb24gb25LZXlQcmVzcyhldmVudCkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgdmFyIGtleSA9IFN0cmluZyhldmVudC5rZXkpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICB2YXIgdGltZSA9IGV2ZW50LnRpbWVTdGFtcDtcclxuICAgIHZhciBtYXBwZXIgPSBEZWZhdWx0S2V5Ym9hcmRNYXBwZXJfMS5kZWZhdWx0LmdldE1hcHBlcigpO1xyXG4gICAgaWYgKGtleSBpbiBtYXBwZXIpIHtcclxuICAgICAgICBrZXlib2FyZC5zZXRLZXkobWFwcGVyW2tleV0pO1xyXG4gICAgICAgIGtleWJvYXJkLnBsYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbnVtYmVyT2ZMYXllcnM7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgKF9hID0gcmVjb3JkZXJzW2luZGV4XSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnB1c2gobWFwcGVyW2tleV0sIHRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgdmFyIHNvdW5kS2V5ID0gdGFyZ2V0LmRhdGFzZXQuc291bmQ7XHJcbiAgICB2YXIgdGltZSA9IGV2ZW50LnRpbWVTdGFtcDtcclxuICAgIGlmIChzb3VuZEtleSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBrZXlib2FyZC5zZXRLZXkoc291bmRLZXkpO1xyXG4gICAgICAgIGtleWJvYXJkLnBsYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbnVtYmVyT2ZMYXllcnM7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgKF9hID0gcmVjb3JkZXJzW2luZGV4XSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnB1c2goc291bmRLZXksIHRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vL1xyXG52YXIgcmVjb3JkQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVjb3JkLWJ0blwiKTtcclxudmFyIHN0b3BSZWNvcmRpbmdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdG9wLXJlY29yZGluZy1idG5cIik7XHJcbnZhciBwbGF5QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheS1idG5cIik7XHJcbmZ1bmN0aW9uIGdldElucHV0SW5kZXgoZXZlbnQpIHtcclxuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICByZXR1cm4gTnVtYmVyKHRhcmdldC5kYXRhc2V0LmtleSk7XHJcbn1cclxucmVjb3JkQnRucyA9PT0gbnVsbCB8fCByZWNvcmRCdG5zID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWNvcmRCdG5zLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBnZXRJbnB1dEluZGV4KGV2ZW50KTtcclxuICAgICAgICB2YXIgcmVjb3JkZXIgPSByZWNvcmRlcnNbaW5kZXhdO1xyXG4gICAgICAgIGlmIChyZWNvcmRlci5zdGF0ZSA9PSBSZWNvcmRlcl8xLlJlY29yZGVyU3RhdGUuV0FJVElORykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFQ09SRCBCVE4hXCIpO1xyXG4gICAgICAgICAgICByZWNvcmRlci5jbGVhckNoYW5uZWwoKTtcclxuICAgICAgICAgICAgcmVjb3JkZXIuc3RhdGUgPSBSZWNvcmRlcl8xLlJlY29yZGVyU3RhdGUuUkVDT1JESU5HO1xyXG4gICAgICAgICAgICByZWNvcmRlci5zdGFydEF0ID0gZXZlbnQudGltZVN0YW1wO1xyXG4gICAgICAgICAgICB2YXIgcmVjb3JkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5yZWNvcmQtYnRuW2RhdGEta2V5PVxcXCJcIiArIGluZGV4ICsgXCJcXFwiXVwiKTtcclxuICAgICAgICAgICAgcmVjb3JkQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIHN0b3BSZWNvcmRpbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnN0b3AtcmVjb3JkaW5nLWJ0bltkYXRhLWtleT1cXFwiXCIgKyBpbmRleCArIFwiXFxcIl1cIik7XHJcbiAgICAgICAgICAgIHN0b3BSZWNvcmRpbmdCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbnN0b3BSZWNvcmRpbmdCdG5zID09PSBudWxsIHx8IHN0b3BSZWNvcmRpbmdCdG5zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdG9wUmVjb3JkaW5nQnRucy5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5wdXRJbmRleChldmVudCk7XHJcbiAgICAgICAgdmFyIHJlY29yZGVyID0gcmVjb3JkZXJzW2luZGV4XTtcclxuICAgICAgICBpZiAocmVjb3JkZXIuc3RhdGUgPT0gUmVjb3JkZXJfMS5SZWNvcmRlclN0YXRlLlJFQ09SRElORykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNUT1AgUkVDT1JESU5HIEJUTiFcIik7XHJcbiAgICAgICAgICAgIHJlY29yZGVyLnN0YXRlID0gUmVjb3JkZXJfMS5SZWNvcmRlclN0YXRlLldBSVRJTkc7XHJcbiAgICAgICAgICAgIHZhciByZWNvcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnJlY29yZC1idG5bZGF0YS1rZXk9XFxcIlwiICsgaW5kZXggKyBcIlxcXCJdXCIpO1xyXG4gICAgICAgICAgICByZWNvcmRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIHN0b3BSZWNvcmRpbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnN0b3AtcmVjb3JkaW5nLWJ0bltkYXRhLWtleT1cXFwiXCIgKyBpbmRleCArIFwiXFxcIl1cIik7XHJcbiAgICAgICAgICAgIHN0b3BSZWNvcmRpbmdCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxucGxheUJ0bnMgPT09IG51bGwgfHwgcGxheUJ0bnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBsYXlCdG5zLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBnZXRJbnB1dEluZGV4KGV2ZW50KTtcclxuICAgICAgICB2YXIgcmVjb3JkZXIgPSByZWNvcmRlcnNbaW5kZXhdO1xyXG4gICAgICAgIHZhciBwbGF5ZXIgPSBwbGF5ZXJzW2luZGV4XTtcclxuICAgICAgICBpZiAocmVjb3JkZXIuc3RhdGUgPT0gUmVjb3JkZXJfMS5SZWNvcmRlclN0YXRlLldBSVRJTkcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQTEFZIEJUTiFcIik7XHJcbiAgICAgICAgICAgIHBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4vL1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgb25LZXlQcmVzcyk7XHJcbi8vXHJcbnZhciBrZXlib2FyZFBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrZXlib2FyZFBhbmVsXCIpO1xyXG5pZiAoa2V5Ym9hcmRQYW5lbCAhPSBudWxsKSB7XHJcbiAgICB2YXIga2V5cyA9IGtleWJvYXJkUGFuZWwucXVlcnlTZWxlY3RvckFsbChcIi5rZXlib2FyZEtleVwiKTtcclxuICAgIGtleXMgPT09IG51bGwgfHwga2V5cyA9PT0gdm9pZCAwID8gdm9pZCAwIDoga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBrZXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2spO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/mappers/DefaultKeyboardMapper.ts":
/*!**********************************************!*\
  !*** ./src/mappers/DefaultKeyboardMapper.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar DefaultKeyboardMapper = /** @class */ (function () {\r\n    function DefaultKeyboardMapper() {\r\n    }\r\n    DefaultKeyboardMapper.getMapper = function () {\r\n        return {\r\n            '1': \"boom\",\r\n            '2': \"clap\",\r\n            '3': \"hihat\",\r\n            '4': \"kick\",\r\n            '5': \"openhat\",\r\n            '6': \"ride\",\r\n            '7': \"snare\",\r\n            '8': \"tink\",\r\n            '9': \"tom\",\r\n        };\r\n    };\r\n    return DefaultKeyboardMapper;\r\n}());\r\nexports[\"default\"] = DefaultKeyboardMapper;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFwcGVycy9EZWZhdWx0S2V5Ym9hcmRNYXBwZXIudHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2RydW1zLy4vc3JjL21hcHBlcnMvRGVmYXVsdEtleWJvYXJkTWFwcGVyLnRzPzA4MTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIERlZmF1bHRLZXlib2FyZE1hcHBlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERlZmF1bHRLZXlib2FyZE1hcHBlcigpIHtcclxuICAgIH1cclxuICAgIERlZmF1bHRLZXlib2FyZE1hcHBlci5nZXRNYXBwZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJzEnOiBcImJvb21cIixcclxuICAgICAgICAgICAgJzInOiBcImNsYXBcIixcclxuICAgICAgICAgICAgJzMnOiBcImhpaGF0XCIsXHJcbiAgICAgICAgICAgICc0JzogXCJraWNrXCIsXHJcbiAgICAgICAgICAgICc1JzogXCJvcGVuaGF0XCIsXHJcbiAgICAgICAgICAgICc2JzogXCJyaWRlXCIsXHJcbiAgICAgICAgICAgICc3JzogXCJzbmFyZVwiLFxyXG4gICAgICAgICAgICAnOCc6IFwidGlua1wiLFxyXG4gICAgICAgICAgICAnOSc6IFwidG9tXCIsXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRGVmYXVsdEtleWJvYXJkTWFwcGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBEZWZhdWx0S2V5Ym9hcmRNYXBwZXI7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mappers/DefaultKeyboardMapper.ts\n");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;