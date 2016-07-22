/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var foo = 1;
	var bar = 2;
	var baz = 3;

	console.log(foo);
	console.log(bar);
	console.log(baz);
	var sum = function sum(a, b) {
	    return a + b;
	};
	console.log(sum(1, 2));

	function timeout(ms) {
	    return new Promise(function (resolve, reject) {
	        setTimeout(resolve, ms, 'done');
	    });
	}

	timeout(100).then(function (value) {
	    console.log(value);
	});

	function loadImageAsync(url) {
	    return new Promise(function (resolve, reject) {
	        var image = new Image();

	        image.onload = function () {
	            resolve(image);
	        };

	        image.onerror = function () {
	            reject(new Error('Could not load image at ' + url));
	        };

	        image.src = url;
	    });
	}
	loadImageAsync('http://pic.baike.soso.com/p/20100205/20100205165903-630558999.jpg').then(function (e) {
	    console.log(e);
	}, function (e) {
	    console.log(e);
	});

/***/ }
/******/ ]);