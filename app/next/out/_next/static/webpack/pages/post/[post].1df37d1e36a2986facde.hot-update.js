webpackHotUpdate_N_E("pages/post/[post]",{

/***/ "./pages/post/[post].js":
/*!******************************!*\
  !*** ./pages/post/[post].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getFetchByID; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_brunodev_Documentos_VS_Code_Projects_Cloud_ssr_react_app_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_brunodev_Documentos_VS_Code_Projects_Cloud_ssr_react_app_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_brunodev_Documentos_VS_Code_Projects_Cloud_ssr_react_app_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_brunodev_Documentos_VS_Code_Projects_Cloud_ssr_react_app_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/layout/Layout */ \"./src/layout/Layout.js\");\n\n\n\n\nvar _jsxFileName = \"/home/brunodev/Documentos/VS Code Projects/Cloud/ssr_react/app/next/pages/post/[post].js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction getFetchByID(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var post = router.query.post; //console.log(post);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])( /*#__PURE__*/Object(_home_brunodev_Documentos_VS_Code_Projects_Cloud_ssr_react_app_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_brunodev_Documentos_VS_Code_Projects_Cloud_ssr_react_app_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var url, response, json;\n    return _home_brunodev_Documentos_VS_Code_Projects_Cloud_ssr_react_app_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            setLoading(true);\n            url = \"https://jsonplaceholder.typicode.com/posts/\" + post;\n            _context.next = 5;\n            return fetch(url);\n\n          case 5:\n            response = _context.sent;\n            _context.next = 8;\n            return response.json();\n\n          case 8:\n            json = _context.sent;\n            setData(json);\n            console.log(json);\n            _context.next = 17;\n            break;\n\n          case 13:\n            _context.prev = 13;\n            _context.t0 = _context[\"catch\"](0);\n            setError(_context.t0);\n            setLoading(false);\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 13]]);\n  })), [post]);\n\n  if (data) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 36\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 36\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 36\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card bg-dark text-white p-3\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"card-body\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n                children: data.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 57\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: data.body\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 57\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 50\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 43\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 36\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 29\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 22\n    }, this);\n  }\n\n  if (loading) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 36\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 36\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 36\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container\",\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 36\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 29\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 22\n    }, this);\n  }\n\n  if (error) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 36\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 36\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 36\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container\",\n          children: JSON.stringify(error)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 36\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 29\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 22\n    }, this);\n  }\n}\n\n_s(getFetchByID, \"0j910EsTXVn7JI7DGGaTCUjRovg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bcG9zdF0uanM/NDRhNCJdLCJuYW1lcyI6WyJnZXRGZXRjaEJ5SUQiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInBvc3QiLCJxdWVyeSIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJ1cmwiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFBQTs7QUFDckMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURxQyxNQUU3QkMsSUFGNkIsR0FFcEJGLE1BQU0sQ0FBQ0csS0FGYSxDQUU3QkQsSUFGNkIsRUFHckM7O0FBSHFDLGtCQUtiRSxzREFBUSxDQUFDLEVBQUQsQ0FMSztBQUFBLE1BSzlCQyxJQUw4QjtBQUFBLE1BS3hCQyxPQUx3Qjs7QUFBQSxtQkFNUEYsc0RBQVEsQ0FBQyxJQUFELENBTkQ7QUFBQSxNQU05QkcsT0FOOEI7QUFBQSxNQU1yQkMsVUFOcUI7O0FBQUEsbUJBT1hKLHNEQUFRLENBQUMsRUFBRCxDQVBHO0FBQUEsTUFPOUJLLEtBUDhCO0FBQUEsTUFPdkJDLFFBUHVCOztBQVNyQ0MseURBQVMsZ1dBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFY0gsc0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDTUksZUFIcEIsR0FJcUIsZ0RBQ0FWLElBTHJCO0FBQUE7QUFBQSxtQkFNcUNXLEtBQUssQ0FBQ0QsR0FBRCxDQU4xQzs7QUFBQTtBQU1vQkUsb0JBTnBCO0FBQUE7QUFBQSxtQkFPaUNBLFFBQVEsQ0FBQ0MsSUFBVCxFQVBqQzs7QUFBQTtBQU9vQkEsZ0JBUHBCO0FBUWNULG1CQUFPLENBQUNTLElBQUQsQ0FBUDtBQUNBQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFUZDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVdjTCxvQkFBUSxhQUFSO0FBQ0FGLHNCQUFVLENBQUMsS0FBRCxDQUFWOztBQVpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBREUsSUFnQkYsQ0FBQ04sSUFBRCxDQWhCRSxDQUFUOztBQW1CQSxNQUFJRyxJQUFKLEVBQVU7QUFDSCx3QkFDTyxxRUFBQywwREFBRDtBQUFBLDZCQUNPO0FBQUEsZ0NBQ087QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEUCxlQUVPO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRlAsZUFHTztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhQLGVBS087QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FDTztBQUFLLHFCQUFTLEVBQUMsNkJBQWY7QUFBQSxtQ0FDTztBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUFBLHNDQUNPO0FBQUEsMEJBQUtBLElBQUksQ0FBQ2E7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURQLGVBRU87QUFBQSwwQkFBSWIsSUFBSSxDQUFDYztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURQO0FBa0JOOztBQUVELE1BQUlaLE9BQUosRUFBYTtBQUNOLHdCQUNPLHFFQUFDLDBEQUFEO0FBQUEsNkJBQ087QUFBQSxnQ0FDTztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURQLGVBRU87QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGUCxlQUdPO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSFAsZUFJTztBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFA7QUFVTjs7QUFFRCxNQUFJRSxLQUFKLEVBQVc7QUFDSix3QkFDTyxxRUFBQywwREFBRDtBQUFBLDZCQUNPO0FBQUEsZ0NBQ087QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEUCxlQUVPO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRlAsZUFHTztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhQLGVBSU87QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxvQkFDUVcsSUFBSSxDQUFDQyxTQUFMLENBQWVaLEtBQWY7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEUDtBQVlOO0FBQ1A7O0dBNUV1QlgsWTtVQUNGRyxxRCIsImZpbGUiOiIuL3BhZ2VzL3Bvc3QvW3Bvc3RdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vc3JjL2xheW91dC9MYXlvdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RmV0Y2hCeUlEKHByb3BzKSB7XG4gICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgICAgY29uc3QgeyBwb3N0IH0gPSByb3V0ZXIucXVlcnk7XG4gICAgICAgLy9jb25zb2xlLmxvZyhwb3N0KTtcblxuICAgICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgICAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgICAgIHVzZUVmZmVjdChcbiAgICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGpzb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtwb3N0XVxuICAgICAgICk7XG5cbiAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctZGFyayB0ZXh0LXdoaXRlIHAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57ZGF0YS50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YS5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICApO1xuICAgICAgIH1cblxuICAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgfVxuXG4gICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICApO1xuICAgICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[post].js\n");

/***/ })

})