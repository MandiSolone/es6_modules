/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Car: () => (/* binding */ Car)\n/* harmony export */ });\n class Car {\n    constructor(id, make, model, year){\n    this.id = id; \n    this.make = make; \n    this.model = model; \n    this.year = year;    \n    }  \n}\n \n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\nconsole.log(\"Hello World\");\n\n// TODO\n \n\n let form = document.querySelector(\"#submitForm\"); \n let makeInput = document.querySelector(\"#makeInput\"); \n let modelInput = document.querySelector(\"#modelInput\"); \n console.log(modelInput);\n let yearInput = document.querySelector(\"#yearInput\"); \n let makePara = document.querySelector(\"#car-make\"); \n let modelPara = document.querySelector(\"#car-model\"); \n let yearPara = document.querySelector(\"#car-year\"); \n let removeBtn = document.querySelector(\"#removeBtn\"); \n let uL = document.querySelector(\"#ul\");\n\n//Call the WishList constructor to create an instance from the WishList class\nlet wishlist = new _wishlist__WEBPACK_IMPORTED_MODULE_0__.WishList(); \n\nform.addEventListener(\"submit\", addCar); \n\nremoveBtn.addEventListener(\"click\", removeCar);  \n\nfunction updateDOMList(){\n   uL.innerHTML = \" \"; //clear the contents of ul \n\n    wishlist.list.forEach((car) => {\n        let liMakeModel  = document.createElement(\"li\");\n        liMakeModel.textContent = `${car.make} ${car.model}`;\n        liMakeModel.addEventListener(\"click\", () => showCarDetails(car)); \n        uL.appendChild(liMakeModel);\n    });\n}\n\nfunction showCarDetails(car){\n    makePara.textContent = car.make\n    modelPara.textContent = car.model\n    yearPara.textContent = car.year\n    removeBtn.disabled = false; //enable remove button \n\n     //This will set a custom data- attribute on the DOM element that corresponds with the selected element\n     removeBtn.setAttribute(\"data-carId\", car.id);\n}\n\nfunction addCar(event) {\n    event.preventDefault(); \n\n    let make = makeInput.value; \n    let model = modelInput.value; \n    let year = yearInput.value; \n\n    wishlist.add(make, model, year); \n\n    updateDOMList(); \n}\n\nfunction removeCar() {\n    let carId = Number(removeBtn.getAttribute(\"data-carId\"));\n    wishlist.remove(carId); \n\n    updateDOMList();\n\n  makePara.textContent = \"\";\n  modelPara.textContent = \"\";\n  yearPara.textContent = \"\";\n  removeBtn.disabled = true;// disable remove Btn\n}\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WishList: () => (/* binding */ WishList)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\n\nclass WishList {\n    constructor() {\n      this.list = [];\n      this.nextId = 0;\n    }\n\n    add(make, model, year) {\n        let newCar = new _car__WEBPACK_IMPORTED_MODULE_0__.Car (this.nextId++, make, model, year);\n        this.list.push(newCar);\n    }\n\n    remove(carId){\n        this.list = this.list.filter(car => car.id !== carId);\n    }\n}\n\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;