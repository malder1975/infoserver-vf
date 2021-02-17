(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_app_Dislocation_VslMap_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/app/Dislocation/VslMap.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/app/Dislocation/VslMap.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-maps */ "./node_modules/google-maps/lib/esm/loader.js");
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VslMap",
  mounted: function mounted() {
    google_maps__WEBPACK_IMPORTED_MODULE_0__.Loader.load(function (google) {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/google-maps/lib/esm/loader.js":
/*!****************************************************!*\
  !*** ./node_modules/google-maps/lib/esm/loader.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => /* binding */ Loader
/* harmony export */ });
class Loader {
    constructor(apiKey = null, options = {}) {
        this.apiKey = apiKey;
        this.options = options;
        if (typeof window === 'undefined') {
            throw new Error('google-maps is supported only in browser environment');
        }
    }
    load() {
        if (typeof this.api !== 'undefined') {
            return Promise.resolve(this.api);
        }
        if (typeof this.loader !== 'undefined') {
            return this.loader;
        }
        window[Loader.CALLBACK_NAME] = () => {
            this.api = window['google'];
            if (typeof this.resolve === 'undefined') {
                throw new Error('Should not happen');
            }
            this.resolve(this.api);
        };
        window['gm_authFailure'] = () => {
            if (typeof this.reject === 'undefined') {
                throw new Error('Should not happen');
            }
            this.reject(new Error('google-maps: authentication error'));
        };
        return this.loader = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
            const script = document.createElement('script');
            script.src = this.createUrl();
            script.async = true;
            script.onerror = (e) => reject(e);
            document.head.appendChild(script);
        });
    }
    createUrl() {
        const parameters = [
            `callback=${Loader.CALLBACK_NAME}`,
        ];
        if (this.apiKey) {
            parameters.push(`key=${this.apiKey}`);
        }
        for (let name in this.options) {
            if (this.options.hasOwnProperty(name)) {
                let value = this.options[name];
                if (name === 'version') {
                    name = 'v';
                }
                if (name === 'libraries') {
                    value = value.join(',');
                }
                parameters.push(`${name}=${value}`);
            }
        }
        return `https://maps.googleapis.com/maps/api/js?${parameters.join('&')}`;
    }
}
Loader.CALLBACK_NAME = '_dk_google_maps_loader_cb';
//# sourceMappingURL=loader.js.map

/***/ }),

/***/ "./resources/js/views/app/Dislocation/VslMap.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/app/Dislocation/VslMap.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _VslMap_vue_vue_type_template_id_c5a463f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VslMap.vue?vue&type=template&id=c5a463f4&scoped=true& */ "./resources/js/views/app/Dislocation/VslMap.vue?vue&type=template&id=c5a463f4&scoped=true&");
/* harmony import */ var _VslMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VslMap.vue?vue&type=script&lang=js& */ "./resources/js/views/app/Dislocation/VslMap.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _VslMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _VslMap_vue_vue_type_template_id_c5a463f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _VslMap_vue_vue_type_template_id_c5a463f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c5a463f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/Dislocation/VslMap.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/Dislocation/VslMap.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/app/Dislocation/VslMap.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VslMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VslMap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/app/Dislocation/VslMap.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VslMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/app/Dislocation/VslMap.vue?vue&type=template&id=c5a463f4&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/app/Dislocation/VslMap.vue?vue&type=template&id=c5a463f4&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VslMap_vue_vue_type_template_id_c5a463f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VslMap_vue_vue_type_template_id_c5a463f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VslMap_vue_vue_type_template_id_c5a463f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VslMap.vue?vue&type=template&id=c5a463f4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/app/Dislocation/VslMap.vue?vue&type=template&id=c5a463f4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/app/Dislocation/VslMap.vue?vue&type=template&id=c5a463f4&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/app/Dislocation/VslMap.vue?vue&type=template&id=c5a463f4&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      !!_vm.mapLoaded
        ? [_vm._t("default", null, { google: _vm.google, map: _vm.map })]
        : _vm._e(),
      _vm._v(" "),
      _vm._m(0)
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "map-container" }, [
      _c("div", { staticClass: "map", attrs: { id: "map" } })
    ])
  }
]
render._withStripped = true



/***/ })

}]);