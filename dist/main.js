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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.sass */ \"./src/sass/main.sass\");\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/game.js */ \"./src/js/game.js\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _thing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thing.js */ \"./src/js/thing.js\");\n/* harmony import */ var _grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid.js */ \"./src/js/grid.js\");\n/* harmony import */ var _visual_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visual.js */ \"./src/js/visual.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar myRegion = new ZingTouch.Region(document.body);\nvar myElement = document.getElementById('touch-container');\n\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;\n\n    _classCallCheck(this, Game);\n\n    this.size = size;\n    this.visual = new _visual_js__WEBPACK_IMPORTED_MODULE_2__[\"Visual\"]();\n    this.gameSetup();\n    this.inputallowed = true;\n  }\n\n  _createClass(Game, [{\n    key: \"gameSetup\",\n    value: function gameSetup() {\n      var _this = this;\n\n      this.grid = new _grid_js__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"](this.size);\n      this.gameover = false;\n      this.score = 0;\n      this.visualRefresh();\n      document.querySelector('.gameover').style.display = 'none'; // мышь\n\n      this.touchControls(); // клавиатура\n\n      window.addEventListener('keydown', function (e) {\n        if (_this.inputallowed) {\n          _this.controls(e.code);\n        }\n      }); // reset\n\n      document.querySelector('.reset-button').addEventListener('click', function () {\n        _this.restartGame();\n      });\n    }\n  }, {\n    key: \"restartGame\",\n    value: function restartGame() {\n      this.visual.clearBoard();\n      this.gameSetup();\n      this.addStartThings();\n    }\n  }, {\n    key: \"addStartThings\",\n    value: function addStartThings() {\n      this.newRandomThing();\n      this.newRandomThing();\n      this.visualRefresh(); // console.table(this.grid.cells);\n    }\n  }, {\n    key: \"newRandomThing\",\n    value: function newRandomThing() {\n      this.options();\n      var options = this.availibleOptions;\n\n      if (options.length > 0) {\n        var value = Math.random() > 0.1 ? 2 : 4;\n        var position = options[Math.floor(Math.random() * options.length)];\n        var thing = new _thing_js__WEBPACK_IMPORTED_MODULE_0__[\"Thing\"](position, value);\n        this.grid.addThing(thing);\n        this.visual.drawThing(thing); //\n\n        this.inputallowed = true;\n      }\n    }\n  }, {\n    key: \"changePositions\",\n    value: function changePositions() {\n      this.grid.allCells(function (x, y, thing) {\n        if (thing) {\n          thing.changePosition({\n            x: x,\n            y: y\n          });\n        }\n      });\n    }\n  }, {\n    key: \"savePositions\",\n    value: function savePositions() {\n      this.grid.allCells(function (x, y, thing) {\n        if (thing) {\n          thing.mergedFrom = null;\n          thing.saveLastPosition({\n            x: x,\n            y: y\n          });\n        }\n      });\n    }\n  }, {\n    key: \"moveThings\",\n    value: function moveThings(column) {\n      var arr = column.filter(function (val) {\n        return val;\n      });\n      var missing = 4 - arr.length;\n      var zeros = Array(missing).fill(0);\n      arr = zeros.concat(arr);\n      return arr;\n    }\n  }, {\n    key: \"combiineThings\",\n    value: function combiineThings(column) {\n      for (var i = this.size - 1; i >= 1; i--) {\n        if (column[i] != 0) {\n          var a = column[i].value;\n          var b = column[i - 1].value;\n\n          if (a == b) {\n            column[i].value = a + b;\n            this.score = this.score + column[i].value;\n            column[i].positionBeforeCombined = {\n              x: column[i - 1].x,\n              y: column[i - 1].y\n            };\n            column[i].previousValue = column[i - 1].value;\n            column[i].lastPosition = null;\n            column[i - 1] = 0;\n          }\n        }\n      }\n\n      return column;\n    }\n  }, {\n    key: \"visualRefresh\",\n    value: function visualRefresh() {\n      this.visual.draw(this.grid, this.score);\n    }\n  }, {\n    key: \"touchControls\",\n    value: function touchControls() {\n      var _this2 = this;\n\n      myRegion.bind(myElement, 'swipe', function (e) {\n        if (_this2.inputallowed) {\n          var direction = e.detail.data[0].currentDirection;\n\n          if (direction < 135 && direction > 45) {\n            _this2.controls('ArrowUp');\n          } else if (direction < 45 || direction > 315) {\n            _this2.controls('ArrowRight');\n          } else if (direction < 315 && direction > 225) {\n            _this2.controls('ArrowDown');\n          } else if (direction < 225 || direction > 135) {\n            _this2.controls('ArrowLeft');\n          }\n        }\n      }, {\n        passive: false\n      });\n    }\n  }, {\n    key: \"controls\",\n    value: function controls(keyCode) {\n      var _this3 = this;\n\n      var flipped = false;\n      var transposed = false;\n      var played = true;\n      var cells = this.grid.cells;\n\n      switch (keyCode) {\n        case 'ArrowDown':\n          this.savePositions();\n          break;\n\n        case 'ArrowUp':\n          this.savePositions();\n          cells = this.grid.flipCells(cells);\n          flipped = true;\n          break;\n\n        case 'ArrowRight':\n          this.savePositions();\n          this.grid.cells = this.grid.transposeCells(this.grid.cells);\n          transposed = true;\n          break;\n\n        case 'ArrowLeft':\n          this.savePositions();\n          this.grid.cells = this.grid.transposeCells(this.grid.cells);\n          this.grid.cells = this.grid.flipCells(this.grid.cells);\n          transposed = true;\n          flipped = true;\n          break;\n\n        default:\n          played = false;\n      }\n\n      if (played) {\n        var pastCells = this.grid.copyGrid(this.grid.cells);\n\n        for (var i = 0; i < 4; i++) {\n          this.grid.cells[i] = this.moveProcess(this.grid.cells[i]);\n        }\n\n        this.changePositions();\n        var changed = this.grid.compare(pastCells, this.grid.cells);\n\n        if (flipped) {\n          this.grid.cells = this.grid.flipCells(cells);\n          this.changePositions();\n        }\n\n        if (transposed) {\n          this.grid.cells = this.grid.transposeCells(this.grid.cells);\n          this.changePositions();\n        }\n\n        if (changed) {\n          this.inputallowed = false;\n          this.visualRefresh();\n          setTimeout(function () {\n            return _this3.newRandomThing();\n          }, 150);\n        } // проверяем остались ли пустые места\n\n\n        this.options();\n\n        if (this.availibleOptions == 0) {\n          var gameover = this.isGameOver();\n\n          if (gameover) {\n            document.querySelector('.gameover').style.display = 'block';\n          }\n        }\n      }\n    }\n  }, {\n    key: \"moveProcess\",\n    value: function moveProcess(column) {\n      column = this.moveThings(column);\n      column = this.combiineThings(column);\n      column = this.moveThings(column);\n      return column;\n    }\n  }, {\n    key: \"isGameOver\",\n    value: function isGameOver() {\n      for (var i = 0; i < this.size; i++) {\n        for (var k = 0; k < this.size; k++) {\n          if (i !== this.size - 1 && this.grid.cells[i][k].value === this.grid.cells[i + 1][k].value) {\n            return false;\n          }\n\n          if (k !== this.size - 1 && this.grid.cells[i][k].value === this.grid.cells[i][k + 1].value) {\n            return false;\n          }\n        }\n      }\n\n      return true;\n    }\n  }, {\n    key: \"options\",\n    value: function options() {\n      var options = [];\n\n      for (var i = 0; i < this.size; i++) {\n        for (var k = 0; k < this.size; k++) {\n          if (this.grid.cells[i][k] === 0) {\n            options.push({\n              x: i,\n              y: k\n            });\n          }\n\n          ;\n        }\n      }\n\n      this.availibleOptions = options;\n    }\n  }]);\n\n  return Game;\n}();\n\nvar check = new Game();\ncheck.addStartThings();\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/grid.js":
/*!************************!*\
  !*** ./src/js/grid.js ***!
  \************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Grid = /*#__PURE__*/function () {\n  function Grid() {\n    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;\n\n    _classCallCheck(this, Grid);\n\n    this.size = size;\n    this.cells = this.emptyGrid();\n  } // создание пустой сетки\n\n\n  _createClass(Grid, [{\n    key: \"emptyGrid\",\n    value: function emptyGrid() {\n      var cells = [];\n\n      for (var i = 0; i < this.size; i++) {\n        var row = cells[i] = [];\n\n        for (var k = 0; k < this.size; k++) {\n          row.push(0);\n        }\n      }\n\n      return cells;\n    } // перевернуть сетку\n\n  }, {\n    key: \"flipCells\",\n    value: function flipCells() {\n      for (var i = 0; i < this.size; i++) {\n        this.cells[i].reverse();\n      }\n\n      return this.cells;\n    } // транспонировать сетку\n\n  }, {\n    key: \"transposeCells\",\n    value: function transposeCells(cells) {\n      var transposedCells = this.emptyGrid();\n\n      for (var i = 0; i < this.size; i++) {\n        for (var k = 0; k < this.size; k++) {\n          transposedCells[i][k] = cells[k][i];\n        }\n      }\n\n      return transposedCells;\n    } // скопировать сетки\n\n  }, {\n    key: \"copyGrid\",\n    value: function copyGrid() {\n      var copy = this.emptyGrid();\n\n      for (var i = 0; i < this.size; i++) {\n        for (var j = 0; j < this.size; j++) {\n          copy[i][j] = this.cells[i][j];\n        }\n      }\n\n      return copy;\n    } // проверить изменения в сетке\n\n  }, {\n    key: \"compare\",\n    value: function compare(a, b) {\n      for (var i = 0; i < 4; i++) {\n        for (var k = 0; k < 4; k++) {\n          if (a[i][k] !== b[i][k]) {\n            return true;\n          }\n        }\n      }\n\n      return false;\n    } // добавление новой плитки\n\n  }, {\n    key: \"addThing\",\n    value: function addThing(thing) {\n      this.cells[thing.x][thing.y] = thing;\n    } // удаление плитки\n\n  }, {\n    key: \"removeThing\",\n    value: function removeThing(thing) {\n      this.cells[thing.x][thing.y] = null;\n    } // колбэк для всех ячеек\n\n  }, {\n    key: \"allCells\",\n    value: function allCells(callback) {\n      for (var x = 0; x < this.size; x++) {\n        for (var y = 0; y < this.size; y++) {\n          callback(x, y, this.cells[x][y]);\n        }\n      }\n    }\n  }]);\n\n  return Grid;\n}();\n\n//# sourceURL=webpack:///./src/js/grid.js?");

/***/ }),

/***/ "./src/js/thing.js":
/*!*************************!*\
  !*** ./src/js/thing.js ***!
  \*************************/
/*! exports provided: Thing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Thing\", function() { return Thing; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Thing = /*#__PURE__*/function () {\n  function Thing(position, value) {\n    _classCallCheck(this, Thing);\n\n    this.x = position.x;\n    this.y = position.y;\n    this.value = value;\n    this.lastPosition = null;\n    this.combined = null; // Tracks tiles that merged together\n  }\n\n  _createClass(Thing, [{\n    key: \"changePosition\",\n    value: function changePosition(position) {\n      this.x = position.x;\n      this.y = position.y;\n    }\n  }, {\n    key: \"saveLastPosition\",\n    value: function saveLastPosition(position) {\n      this.lastPosition = {\n        x: position.x,\n        y: position.y\n      };\n    }\n  }]);\n\n  return Thing;\n}();\n\n//# sourceURL=webpack:///./src/js/thing.js?");

/***/ }),

/***/ "./src/js/visual.js":
/*!**************************!*\
  !*** ./src/js/visual.js ***!
  \**************************/
/*! exports provided: Visual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Visual\", function() { return Visual; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Visual = /*#__PURE__*/function () {\n  function Visual() {\n    _classCallCheck(this, Visual);\n\n    this.board = document.querySelector('.play-board');\n    this.scoreText = document.querySelector('.score span');\n  }\n\n  _createClass(Visual, [{\n    key: \"draw\",\n    value: function draw(grid, score) {\n      var _this = this;\n\n      this.clearBoard(); // перерисовка всех ячеек\n\n      grid.cells.forEach(function (column) {\n        column.forEach(function (thing) {\n          if (thing) {\n            _this.drawThing(thing);\n          }\n        });\n      }); // обновить счет \n\n      this.scoreText.innerHTML = score;\n    }\n  }, {\n    key: \"drawThing\",\n    value: function drawThing(thing) {\n      var id = 'id' + Math.floor(Math.random() * 20000);\n      var thingDiv = document.createElement('div');\n      var position = {\n        x: thing.x,\n        y: thing.y\n      };\n\n      if (thing.lastPosition) {\n        thingDiv.classList.add('thing', 't' + thing.value, id);\n        thingDiv.style.cssText = this.positionStyle(thing.lastPosition);\n        this.board.append(thingDiv);\n        this.animate('move', position, id);\n      } else if (thing.positionBeforeCombined) {\n        thingDiv.classList.add('thing', 't' + thing.value, id, 'combined');\n        thingDiv.style.cssText = this.positionStyle(thing.positionBeforeCombined);\n        this.board.append(thingDiv);\n        this.animate('move', position, id);\n      } else {\n        thingDiv.classList.add('thing', 't' + thing.value, id, 'new');\n        thingDiv.style.cssText = this.positionStyle(position);\n        this.board.append(thingDiv); // this.animate('new')\n      }\n    }\n  }, {\n    key: \"positionStyle\",\n    value: function positionStyle(position) {\n      return \"top:\".concat(position.y + '00px', \"; left:\").concat(position.x + '00px');\n    }\n  }, {\n    key: \"moveThing\",\n    value: function moveThing(thing, position) {\n      thing.style.cssText = this.positionStyle(position);\n    }\n  }, {\n    key: \"clearBoard\",\n    value: function clearBoard() {\n      while (this.board.firstChild) {\n        this.board.removeChild(this.board.firstChild);\n      }\n    }\n  }, {\n    key: \"animate\",\n    value: function animate(type, position, id) {\n      var _this2 = this;\n\n      if (type == 'move') {\n        setTimeout(function () {\n          document.querySelector('.' + id).style.cssText = _this2.positionStyle(position);\n        }, 0);\n      } else if (type == 'new') {\n        document.querySelector('.new').classList.add('new-thing');\n        setTimeout(function () {\n          document.querySelector('.new').classList.remove('new-thing');\n        }, 10);\n      } else if (type == 'combined') {\n        document.querySelector('.combined').classList.add('combined-thing');\n        setTimeout(function () {\n          document.querySelector('.combined').classList.remove('combine-thing');\n        }, 0);\n      }\n    }\n  }]);\n\n  return Visual;\n}();\n\n//# sourceURL=webpack:///./src/js/visual.js?");

/***/ }),

/***/ "./src/sass/main.sass":
/*!****************************!*\
  !*** ./src/sass/main.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/sass/main.sass?");

/***/ })

/******/ });