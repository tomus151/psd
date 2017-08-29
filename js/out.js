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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);
$(function () {
     var addImg = $('.row3Col-8ImgAdd');
     addImg.on('click', function (e) {
          e.preventDefault();
          var noVisible = $('.noVisible');
          noVisible.addClass('visible');
          noVisible.css('display', 'block');
     });
     var counter = 0;
     var noVisibleButton = $('.noVisibleButton');
     noVisibleButton.on('click', function (e) {
          e.preventDefault();
          var link1 = $('.noVisibleInput').val();
          var imgs = $('.row3Col-8Img');
          if (counter > 7) {
               counter = 0;
          }
          imgs.eq(counter).attr('src', link1);
          counter = counter + 1;
     });
     var noVisibleDiv = $('.noVisibleDiv');
     noVisibleDiv.on('click', function (e) {
          e.preventDefault();
          var visible = $('.visible');
          visible.css('display', 'none');
          visible.removeClass('visible');
     });
     var galImg = $('.row3Col-8Img');
     galImg.on('click', function (e) {
          e.preventDefault();
          var galleryDiv = $('.displayNone');
          galleryDiv.removeClass('displayNone');
          var href = $(this).attr('src');
          var galleryWindow = $('.noVisibleGallery').find('img');
          galleryWindow.attr('src', href);
     });
     var galDiv = $('.noVisibleDivGallery');
     galDiv.on('click', function (e) {
          e.preventDefault();
          var toHide = $('.toHide');
          toHide.addClass('displayNone');
     });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);