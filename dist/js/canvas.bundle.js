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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/DeadLeft.png":
/*!*********************************!*\
  !*** ./src/images/DeadLeft.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f1f223cb70ca093fabf77a14c7945fe8.png");

/***/ }),

/***/ "./src/images/DeadRight.png":
/*!**********************************!*\
  !*** ./src/images/DeadRight.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c9f6996c650331daaea918eb11162f03.png");

/***/ }),

/***/ "./src/images/IdleLeft.png":
/*!*********************************!*\
  !*** ./src/images/IdleLeft.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "43202a1c07656b0937285a18f7982201.png");

/***/ }),

/***/ "./src/images/IdleRight.png":
/*!**********************************!*\
  !*** ./src/images/IdleRight.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11812c0b7ccb833cd99870ba0182c75d.png");

/***/ }),

/***/ "./src/images/JumpLeft.png":
/*!*********************************!*\
  !*** ./src/images/JumpLeft.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a4f6868ade5a220bbbbf91d897529e94.png");

/***/ }),

/***/ "./src/images/JumpRight.png":
/*!**********************************!*\
  !*** ./src/images/JumpRight.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "99a7fd269b6444d6af6651f00da7ae71.png");

/***/ }),

/***/ "./src/images/RunLeft.png":
/*!********************************!*\
  !*** ./src/images/RunLeft.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "29bbebd9582f22220ca8c7b0c69a313b.png");

/***/ }),

/***/ "./src/images/RunRight.png":
/*!*********************************!*\
  !*** ./src/images/RunRight.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "895c07f3c94a9e54738c7d3d370fa218.png");

/***/ }),

/***/ "./src/images/WalkLeft.png":
/*!*********************************!*\
  !*** ./src/images/WalkLeft.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "deeb630c7b52567fff3471a13df61408.png");

/***/ }),

/***/ "./src/images/WalkRight.png":
/*!**********************************!*\
  !*** ./src/images/WalkRight.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "96fd2714986b227db45afad854224450.png");

/***/ }),

/***/ "./src/images/background.png":
/*!***********************************!*\
  !*** ./src/images/background.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/images/hills.png":
/*!******************************!*\
  !*** ./src/images/hills.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/images/platform.png":
/*!*********************************!*\
  !*** ./src/images/platform.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/images/platformSmallTall.png":
/*!******************************************!*\
  !*** ./src/images/platformSmallTall.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/images/ramp.png":
/*!*****************************!*\
  !*** ./src/images/ramp.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8598130b5ede0f2d77aa06f7f46977ad.png");

/***/ }),

/***/ "./src/images/tree.png":
/*!*****************************!*\
  !*** ./src/images/tree.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "523170002b4b602813bf5775b1790e8f.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/platform.png */ "./src/images/platform.png");
/* harmony import */ var _images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/platformSmallTall.png */ "./src/images/platformSmallTall.png");
/* harmony import */ var _images_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/hills.png */ "./src/images/hills.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
/* harmony import */ var _images_ramp_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/ramp.png */ "./src/images/ramp.png");
/* harmony import */ var _images_tree_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/tree.png */ "./src/images/tree.png");
/* harmony import */ var _images_DeadLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/DeadLeft.png */ "./src/images/DeadLeft.png");
/* harmony import */ var _images_DeadRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/DeadRight.png */ "./src/images/DeadRight.png");
/* harmony import */ var _images_IdleLeft_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/IdleLeft.png */ "./src/images/IdleLeft.png");
/* harmony import */ var _images_IdleRight_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/IdleRight.png */ "./src/images/IdleRight.png");
/* harmony import */ var _images_JumpRight_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/JumpRight.png */ "./src/images/JumpRight.png");
/* harmony import */ var _images_JumpLeft_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/JumpLeft.png */ "./src/images/JumpLeft.png");
/* harmony import */ var _images_RunRight_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/RunRight.png */ "./src/images/RunRight.png");
/* harmony import */ var _images_RunLeft_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/RunLeft.png */ "./src/images/RunLeft.png");
/* harmony import */ var _images_WalkRight_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/WalkRight.png */ "./src/images/WalkRight.png");
/* harmony import */ var _images_WalkLeft_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/WalkLeft.png */ "./src/images/WalkLeft.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
















var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var gravity = 1.5;
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 163.3;
    this.height = 150;
    this.image = createImage(_images_IdleRight_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, 0, 0, 614, 466, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
      }
    }
  }]);
  return Player;
}();
var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image;
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return Platform;
}();
var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
      y = _ref2.y,
      image = _ref2.image;
    _classCallCheck(this, GenericObject);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return GenericObject;
}();
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}
var player = new Player();
var platformImage = createImage(_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallTallImage = createImage(_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var platforms = [, new Platform({
  x: 1000,
  y: canvas.height - 230,
  image: platformImage
}),
//new Platform({
//    x: 1000, y: canvas.height - 230, image: platformImage
//}),
new Platform({
  x: -1,
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: platformImage.width - 3,
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 2 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 3 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 4 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 5 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 6 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 7 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 8 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 9 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 10 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 11 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 12 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 13 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 14 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 15 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 16 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 17 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 18 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 19 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 20 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 21 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 22 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 23 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 24 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 25 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 26 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
}), new Platform({
  x: 27 * (platformImage.width - 3),
  y: canvas.height - 120,
  image: platformImage
})];
var genericObjects = [new GenericObject({
  x: 0,
  y: 0,
  image: createImage(_images_background_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new GenericObject({
  x: 0,
  y: canvas.height - 700,
  image: createImage(_images_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"])
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });

  // Check for platform collision before updating player position
  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;
    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  }
  if (scrollOffset > 2000) {
    console.log("you win");
  }
}
animate();
addEventListener('keydown', function (_ref3) {
  var key = _ref3.key;
  switch (key) {
    case 'a':
      console.log('left');
      keys.left.pressed = true;
      break;
    case 'd':
      console.log('right');
      keys.right.pressed = true;
      break;
    case 'w':
      console.log('up');
      player.velocity.y -= 25;
      break;
    case 's':
      console.log('down');
      break;
  }
});
addEventListener('keyup', function (_ref4) {
  var key = _ref4.key;
  switch (key) {
    case 'a':
      console.log('left');
      keys.left.pressed = false;
      break;
    case 'd':
      console.log('right');
      keys.right.pressed = false;
      break;
    case 'w':
      console.log('up');
      break;
    case 's':
      console.log('down');
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map