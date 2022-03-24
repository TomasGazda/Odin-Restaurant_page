/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create_contact": () => (/* binding */ create_contact)
/* harmony export */ });
function create_contact(){
    let contact = document.createElement('div');
    contact.classList.add("container-fluid", "d-flex", "justify-content-center", "align-items-center",);
    contact.id="contact";

    contact.innerHTML = `
    <div id="contact-main" class="h-100 w-75 d-flex flex-column align-items-center text-center">
            <div class=" h1 display-3 mb-5 mt-4 name text-white">
              Contact Info
            </div>
            <div class="row w-100 mb-5">
              <div class ="col-md-6">
                <iframe width="90%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=350&amp;height=350&amp;hl=en&amp;q=%20Rome+(Pizzeria)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://mapswebsite.net/'>mapswebsite</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=77f487d7cd8a5172e0256fa20423e070a4c7b881'></script>
              </div>
              <div class ="col-md-6 fs-4 ps-3">
                <p>Via Dulla Meloria, 46, 00137 </p>
                <p>Rome – Italy</p>
                <p>Email: Contattaci@tomassino.it</p>
                <p>Tel: (+39) 07 397555416</p>
 
              </div>

            </div>
            <div class="row w-75 text-start mt-4 mb-4 fs-5" >
              <div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Your email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Your message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-12 justify-content-end d-flex">
                  <button id="Send_btn" class="btn btn-primary">Send Message</button>
                </div>
              </div>
            </div>
          </div>
    `;

 return contact;
}
 


/***/ }),

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create_history": () => (/* binding */ create_history)
/* harmony export */ });
function create_history(){
    let history = document.createElement('div');
    history.classList.add("container-fluid", "d-flex", "justify-content-center", "align-items-center");
    history.id="history";
    history.innerHTML = `
                            <div id="history-main" class = "h-100 w-75 d-flex flex-column align-items-center text-center">
                            <div class=" h1 display-3 mb-5 mt-4 name text-white">
                                Our  history
                                </div>
                                <div class ="quick_note lh-sm fs-2 text-center w-50">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                
                                </div>

                            </div>


                        `;
return history;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create_homepage": () => (/* binding */ create_homepage)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);




function create_homepage(){
    let landing_page = document.createElement('div');
    landing_page.classList.add("landing-page");
    landing_page.innerHTML = `<div class ="left"></div>
                                <div class ="right d-flex flex-column justify-content-center align-items-center dark">
                                    <div class=" h1 display-2 name text-white">
                                            Pizzeria Tomasino
                                    </div>
                                    <div class ="quick_note fs-2 text-muted w-50">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    
                                    </div>
                                </div> `;
    return landing_page;
}



/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history */ "./src/history.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);







let active_page;


jquery__WEBPACK_IMPORTED_MODULE_4___default()( document ).ready(function() {
    
    jquery__WEBPACK_IMPORTED_MODULE_4___default()("#content").append(_home_js__WEBPACK_IMPORTED_MODULE_1__.create_homepage); 
    active_page = "1";
     


    jquery__WEBPACK_IMPORTED_MODULE_4___default()("button[id^=pills-]").click(function (e) { 
        e.preventDefault();
        
   
        if(jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).data("page") == "1" && active_page != "1"){
            active_page = "1";
            jquery__WEBPACK_IMPORTED_MODULE_4___default()("#content").html('');
            
            jquery__WEBPACK_IMPORTED_MODULE_4___default()("#content").append(_home_js__WEBPACK_IMPORTED_MODULE_1__.create_homepage); 
        }
        if(jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).data("page") == "2" && active_page != "2"){
            jquery__WEBPACK_IMPORTED_MODULE_4___default()("#content").html('');
            
            jquery__WEBPACK_IMPORTED_MODULE_4___default()("#content").append(_history__WEBPACK_IMPORTED_MODULE_2__.create_history); 
            active_page = "2";
        }
        if(jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).data("page") == "3" && active_page != "3"){
            jquery__WEBPACK_IMPORTED_MODULE_4___default()("#content").html('');
            
            jquery__WEBPACK_IMPORTED_MODULE_4___default()("#content").append(_contact__WEBPACK_IMPORTED_MODULE_3__.create_contact); 
            active_page = "3";
        }
    
        
    });
});





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0xBQWtMLGVBQWUsVUFBVSx5QkFBeUIsT0FBTyxTQUFTLFlBQVksWUFBWTtBQUM1UTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnVCOzs7O0FBSXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ040Qjs7QUFFZ0I7QUFDRDtBQUNBO0FBQ3BCOztBQUV2Qjs7O0FBR0EsNkNBQUM7QUFDRDtBQUNBLElBQUksNkNBQUMsb0JBQW9CLHFEQUFlO0FBQ3hDO0FBQ0E7OztBQUdBLElBQUksNkNBQUM7QUFDTDtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZDQUFDO0FBQ1o7QUFDQSxZQUFZLDZDQUFDO0FBQ2I7QUFDQSxZQUFZLDZDQUFDLG9CQUFvQixxREFBZTtBQUNoRDtBQUNBLFdBQVcsNkNBQUM7QUFDWixZQUFZLDZDQUFDO0FBQ2I7QUFDQSxZQUFZLDZDQUFDLG9CQUFvQixvREFBYztBQUMvQztBQUNBO0FBQ0EsV0FBVyw2Q0FBQztBQUNaLFlBQVksNkNBQUM7QUFDYjtBQUNBLFlBQVksNkNBQUMsb0JBQW9CLG9EQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRfcGFnZS8uL3NyYy9hc3NldHMvc3R5bGUuY3NzP2VmNTAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRfcGFnZS8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50X3BhZ2UvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJmdW5jdGlvbiBjcmVhdGVfY29udGFjdCgpe1xuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWZsdWlkXCIsIFwiZC1mbGV4XCIsIFwianVzdGlmeS1jb250ZW50LWNlbnRlclwiLCBcImFsaWduLWl0ZW1zLWNlbnRlclwiLCk7XG4gICAgY29udGFjdC5pZD1cImNvbnRhY3RcIjtcblxuICAgIGNvbnRhY3QuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgaWQ9XCJjb250YWN0LW1haW5cIiBjbGFzcz1cImgtMTAwIHctNzUgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiBoMSBkaXNwbGF5LTMgbWItNSBtdC00IG5hbWUgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICBDb250YWN0IEluZm9cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMCBtYi01XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiOTAlXCIgaGVpZ2h0PVwiMzUwXCIgZnJhbWVib3JkZXI9XCIwXCIgc2Nyb2xsaW5nPVwibm9cIiBtYXJnaW5oZWlnaHQ9XCIwXCIgbWFyZ2lud2lkdGg9XCIwXCIgaWQ9XCJnbWFwX2NhbnZhc1wiIHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHM/d2lkdGg9MzUwJmFtcDtoZWlnaHQ9MzUwJmFtcDtobD1lbiZhbXA7cT0lMjBSb21lKyhQaXp6ZXJpYSkmYW1wO3Q9JmFtcDt6PTEzJmFtcDtpZT1VVEY4JmFtcDtpd2xvYz1CJmFtcDtvdXRwdXQ9ZW1iZWRcIj48L2lmcmFtZT4gPGEgaHJlZj0naHR0cHM6Ly9tYXBzd2Vic2l0ZS5uZXQvJz5tYXBzd2Vic2l0ZTwvYT4gPHNjcmlwdCB0eXBlPSd0ZXh0L2phdmFzY3JpcHQnIHNyYz0naHR0cHM6Ly9lbWJlZG1hcHMuY29tL2dvb2dsZS1tYXBzLWF1dGhvcml6YXRpb24vc2NyaXB0LmpzP2lkPTc3ZjQ4N2Q3Y2Q4YTUxNzJlMDI1NmZhMjA0MjNlMDcwYTRjN2I4ODEnPjwvc2NyaXB0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJjb2wtbWQtNiBmcy00IHBzLTNcIj5cbiAgICAgICAgICAgICAgICA8cD5WaWEgRHVsbGEgTWVsb3JpYSwgNDYsIDAwMTM3IDwvcD5cbiAgICAgICAgICAgICAgICA8cD5Sb21lIOKAkyBJdGFseTwvcD5cbiAgICAgICAgICAgICAgICA8cD5FbWFpbDogQ29udGF0dGFjaUB0b21hc3Npbm8uaXQ8L3A+XG4gICAgICAgICAgICAgICAgPHA+VGVsOiAoKzM5KSAwNyAzOTc1NTU0MTY8L3A+XG4gXG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy03NSB0ZXh0LXN0YXJ0IG10LTQgbWItNCBmcy01XCIgPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUZvcm1Db250cm9sSW5wdXQxXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+WW91ciBlbWFpbCBhZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUZvcm1Db250cm9sSW5wdXQxXCIgcGxhY2Vob2xkZXI9XCJuYW1lQGV4YW1wbGUuY29tXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlRm9ybUNvbnRyb2xUZXh0YXJlYTFcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5Zb3VyIG1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlRm9ybUNvbnRyb2xUZXh0YXJlYTFcIiByb3dzPVwiM1wiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBqdXN0aWZ5LWNvbnRlbnQtZW5kIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIlNlbmRfYnRuXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gcmV0dXJuIGNvbnRhY3Q7XG59XG4gXG5leHBvcnQge2NyZWF0ZV9jb250YWN0fTsiLCJmdW5jdGlvbiBjcmVhdGVfaGlzdG9yeSgpe1xuICAgIGxldCBoaXN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGlzdG9yeS5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWZsdWlkXCIsIFwiZC1mbGV4XCIsIFwianVzdGlmeS1jb250ZW50LWNlbnRlclwiLCBcImFsaWduLWl0ZW1zLWNlbnRlclwiKTtcbiAgICBoaXN0b3J5LmlkPVwiaGlzdG9yeVwiO1xuICAgIGhpc3RvcnkuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJoaXN0b3J5LW1haW5cIiBjbGFzcyA9IFwiaC0xMDAgdy03NSBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiBoMSBkaXNwbGF5LTMgbWItNSBtdC00IG5hbWUgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdXIgIGhpc3RvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwicXVpY2tfbm90ZSBsaC1zbSBmcy0yIHRleHQtY2VudGVyIHctNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XG5yZXR1cm4gaGlzdG9yeTtcbn1cblxuZXhwb3J0e2NyZWF0ZV9oaXN0b3J5fTsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cblxuZnVuY3Rpb24gY3JlYXRlX2hvbWVwYWdlKCl7XG4gICAgbGV0IGxhbmRpbmdfcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxhbmRpbmdfcGFnZS5jbGFzc0xpc3QuYWRkKFwibGFuZGluZy1wYWdlXCIpO1xuICAgIGxhbmRpbmdfcGFnZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcyA9XCJsZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwicmlnaHQgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGRhcmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgaDEgZGlzcGxheS0yIG5hbWUgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaXp6ZXJpYSBUb21hc2lub1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cInF1aWNrX25vdGUgZnMtMiB0ZXh0LW11dGVkIHctNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IGA7XG4gICAgcmV0dXJuIGxhbmRpbmdfcGFnZTtcbn1cblxuZXhwb3J0e2NyZWF0ZV9ob21lcGFnZX07IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vYXNzZXRzL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBjcmVhdGVfaG9tZXBhZ2UgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVfaGlzdG9yeSB9IGZyb20gXCIuL2hpc3RvcnlcIjtcbmltcG9ydCB7IGNyZWF0ZV9jb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxubGV0IGFjdGl2ZV9wYWdlO1xuXG5cbiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgJChcIiNjb250ZW50XCIpLmFwcGVuZChjcmVhdGVfaG9tZXBhZ2UpOyBcbiAgICBhY3RpdmVfcGFnZSA9IFwiMVwiO1xuICAgICBcblxuXG4gICAgJChcImJ1dHRvbltpZF49cGlsbHMtXVwiKS5jbGljayhmdW5jdGlvbiAoZSkgeyBcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBcbiAgIFxuICAgICAgICBpZigkKHRoaXMpLmRhdGEoXCJwYWdlXCIpID09IFwiMVwiICYmIGFjdGl2ZV9wYWdlICE9IFwiMVwiKXtcbiAgICAgICAgICAgIGFjdGl2ZV9wYWdlID0gXCIxXCI7XG4gICAgICAgICAgICAkKFwiI2NvbnRlbnRcIikuaHRtbCgnJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoXCIjY29udGVudFwiKS5hcHBlbmQoY3JlYXRlX2hvbWVwYWdlKTsgXG4gICAgICAgIH1cbiAgICAgICAgaWYoJCh0aGlzKS5kYXRhKFwicGFnZVwiKSA9PSBcIjJcIiAmJiBhY3RpdmVfcGFnZSAhPSBcIjJcIil7XG4gICAgICAgICAgICAkKFwiI2NvbnRlbnRcIikuaHRtbCgnJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoXCIjY29udGVudFwiKS5hcHBlbmQoY3JlYXRlX2hpc3RvcnkpOyBcbiAgICAgICAgICAgIGFjdGl2ZV9wYWdlID0gXCIyXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYoJCh0aGlzKS5kYXRhKFwicGFnZVwiKSA9PSBcIjNcIiAmJiBhY3RpdmVfcGFnZSAhPSBcIjNcIil7XG4gICAgICAgICAgICAkKFwiI2NvbnRlbnRcIikuaHRtbCgnJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoXCIjY29udGVudFwiKS5hcHBlbmQoY3JlYXRlX2NvbnRhY3QpOyBcbiAgICAgICAgICAgIGFjdGl2ZV9wYWdlID0gXCIzXCI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgXG4gICAgfSk7XG59KTtcblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9