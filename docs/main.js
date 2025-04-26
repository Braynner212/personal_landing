"use strict";
(self["webpackChunkpersonal_landing"] = self["webpackChunkpersonal_landing"] || []).push([["main"],{

/***/ 2912:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AboutComponent {
  static {
    this.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 0,
      consts: [["id", "about", 1, "about"], [1, "about__container", "container-generic"], [1, "about__title"], [1, "about__text-about"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sobre m\u00ED");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Soy ingeniero de sistemas de profesi\u00F3n, enfocado en el desarrollo web y estoy apasionado por crear experiencias digitales accesibles, intuitivas y eficientes. Me especializo en el desarrollo con tecnolog\u00EDas como Angular presto a optimizar cada vez m\u00E1s del rendimiento de las soluciones desarrolladas. Adem\u00E1s, tengo conocimiento de backend usando el framework Nodejs + Express y GitHub para el manejo de versiones. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br")(7, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Fuera del mundo digital disfruto mucho de la m\u00FAsica, me gusta cantar, tocar guitarra e interpretar esas canciones que me permiten conectar mis emociones. Tambi\u00E9n creo en los pilares de una vida integral por ello trabajo en mi vida espiritual constante mente leyendo, buscando contenido que pueda permitirme cada vez m\u00E1s ampliar mi nivel de consciencia. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      styles: ["@media (min-width: 768px) {\n  .container-generic[_ngcontent-%COMP%] {\n    width: 600px !important;\n    height: 600px !important;\n  }\n}\n@media (min-width: 1024px) {\n  .container-generic[_ngcontent-%COMP%] {\n    width: 730px !important;\n  }\n}\n.about[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: slideUp 1s ease-in-out both;\n}\n.about__container[_ngcontent-%COMP%] {\n  width: 240px;\n}\n.about__title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: bold;\n  margin-bottom: 0px;\n  color: #fff;\n}\n.about__text-about[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n  font-weight: 300;\n}\n\n@media (min-width: 375px) {\n  .about__container[_ngcontent-%COMP%] {\n    width: 280px;\n  }\n}\n@media (min-width: 768px) {\n  .about__title[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n  .about__text-about[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (min-width: 1024px) {\n  .about__title[_ngcontent-%COMP%] {\n    margin-top: 100px;\n    font-size: 48px;\n  }\n  .about__text-about[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXGJyZWFrcG9pbnQuc2NzcyIsImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdFO0VBTUE7SUFDRSx1QkFBQTtJQUNBLHdCQUFBO0VDZkY7QUFDRjtBRE1FO0VBYUE7SUFDRSx1QkFBQTtFQ2hCRjtBQUNGO0FBUkE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0FBVUY7QUFQRTtFQUNFLFlBQUE7QUFTSjtBQU5FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBUUo7QUFMRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QURyQkU7RUNvQkU7SUFDRSxZQUFBO0VBS0o7QUFDRjtBRDNCRTtFQzZCRTtJQUNFLGVBQUE7RUFDSjtFQUVFO0lBQ0UsZUFBQTtFQUFKO0FBQ0Y7QURuQ0U7RUMwQ0U7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUFKSjtFQU9FO0lBQ0UsZUFBQTtFQUxKO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnJlYWtwb2ludHM6IChcclxuICBcIm1vdmlsIHNcIjogMzIwcHgsXHJcbiAgXCJtb3ZpbCBtXCI6IDM3NXB4LFxyXG4gIFwibW92aWwgbFwiOiA0MjVweCxcclxuICBcInRhYmxldFwiOiA3NjhweCxcclxuICBcImxhcHRvcFwiOiAxMDI0cHgsXHJcbiAgXCJsYXB0b3AgbFwiOiAxNDQwcHgsXHJcbiAgXCI0a1wiOiAyNTYwcHgsXHJcbikgIWRlZmF1bHQ7XHJcblxyXG5AbWl4aW4gcmVzcG9uc2l2ZSgkc2l6ZSkge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIHJlc3BvbnNpdmUoXCJ0YWJsZXRcIikge1xyXG4gIC5jb250YWluZXItZ2VuZXJpYyB7XHJcbiAgICB3aWR0aDogNjAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIHJlc3BvbnNpdmUoXCJsYXB0b3BcIikge1xyXG4gIC5jb250YWluZXItZ2VuZXJpYyB7XHJcbiAgICB3aWR0aDogNzMwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn0iLCJAdXNlIFwiLi4vLi4vYXNzZXRzL3N0eWxlcy9icmVha3BvaW50LnNjc3NcIiBhcyBicDtcblxuLmFib3V0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogc2xpZGVVcCAxcyBlYXNlLWluLW91dCBib3RoO1xuXG5cbiAgJl9fY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjQwcHg7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gICZfX3RleHQtYWJvdXQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG59XG5cbkBpbmNsdWRlIGJwLnJlc3BvbnNpdmUoXCJtb3ZpbCBtXCIpIHtcbiAgLmFib3V0IHtcbiAgICAmX19jb250YWluZXIge1xuICAgICAgd2lkdGg6IDI4MHB4O1xuICAgIH1cbiAgfVxufVxuXG5AaW5jbHVkZSBicC5yZXNwb25zaXZlKFwidGFibGV0XCIpIHtcbiAgLmFib3V0IHtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICB9XG5cbiAgICAmX190ZXh0LWFib3V0IHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgYnAucmVzcG9uc2l2ZShcImxhcHRvcFwiKSB7XG4gIC5hYm91dCB7XG5cbiAgICAmX190aXRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICB9XG5cbiAgICAmX190ZXh0LWFib3V0IHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2JyZWFrcG9pbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0U7RUFNQTtJQUNFLHVCQUFBO0lBQ0Esd0JBQUE7RUNmRjtBQUNGO0FETUU7RUFhQTtJQUNFLHVCQUFBO0VDaEJGO0FBQ0Y7QUFSQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUFVRjtBQVBFO0VBQ0UsWUFBQTtBQVNKO0FBTkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFRSjtBQUxFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQU9KOztBRHJCRTtFQ29CRTtJQUNFLFlBQUE7RUFLSjtBQUNGO0FEM0JFO0VDNkJFO0lBQ0UsZUFBQTtFQUNKO0VBRUU7SUFDRSxlQUFBO0VBQUo7QUFDRjtBRG5DRTtFQzBDRTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQUpKO0VBT0U7SUFDRSxlQUFBO0VBTEo7QUFDRjtBQUNBLG94RkFBb3hGIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnRzOiAoXHJcbiAgXCJtb3ZpbCBzXCI6IDMyMHB4LFxyXG4gIFwibW92aWwgbVwiOiAzNzVweCxcclxuICBcIm1vdmlsIGxcIjogNDI1cHgsXHJcbiAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgXCJsYXB0b3BcIjogMTAyNHB4LFxyXG4gIFwibGFwdG9wIGxcIjogMTQ0MHB4LFxyXG4gIFwiNGtcIjogMjU2MHB4LFxyXG4pICFkZWZhdWx0O1xyXG5cclxuQG1peGluIHJlc3BvbnNpdmUoJHNpemUpIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSByZXNwb25zaXZlKFwidGFibGV0XCIpIHtcclxuICAuY29udGFpbmVyLWdlbmVyaWMge1xyXG4gICAgd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSByZXNwb25zaXZlKFwibGFwdG9wXCIpIHtcclxuICAuY29udGFpbmVyLWdlbmVyaWMge1xyXG4gICAgd2lkdGg6IDczMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59IiwiQHVzZSBcIi4uLy4uL2Fzc2V0cy9zdHlsZXMvYnJlYWtwb2ludC5zY3NzXCIgYXMgYnA7XG5cbi5hYm91dCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbmltYXRpb246IHNsaWRlVXAgMXMgZWFzZS1pbi1vdXQgYm90aDtcblxuXG4gICZfX2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAmX190ZXh0LWFib3V0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxufVxuXG5AaW5jbHVkZSBicC5yZXNwb25zaXZlKFwibW92aWwgbVwiKSB7XG4gIC5hYm91dCB7XG4gICAgJl9fY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAyODBweDtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgYnAucmVzcG9uc2l2ZShcInRhYmxldFwiKSB7XG4gIC5hYm91dCB7XG5cbiAgICAmX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgfVxuXG4gICAgJl9fdGV4dC1hYm91dCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIGJwLnJlc3BvbnNpdmUoXCJsYXB0b3BcIikge1xuICAuYWJvdXQge1xuXG4gICAgJl9fdGl0bGUge1xuICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgfVxuXG4gICAgJl9fdGV4dC1hYm91dCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class AppComponent {
  constructor() {
    this.title = 'personal_landing';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2181);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ 6045);





const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__["default"], (0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.withHashLocation)()), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.withFetch)()), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.provideHttpClient)(), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.provideAnimations)(), (0,ng2_charts__WEBPACK_IMPORTED_MODULE_4__.provideCharts)((0,ng2_charts__WEBPACK_IMPORTED_MODULE_4__.withDefaultRegisterables)())]
};

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page/main-page.component */ 5168);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 7824);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 2912);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills/skills.component */ 1858);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ 8474);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ 3074);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ 8712);







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  path: '',
  component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__.MainPageComponent,
  children: [{
    path: 'home',
    component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
  }, {
    path: 'about',
    component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent
  }, {
    path: 'project',
    component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__.ProjectsComponent
  }, {
    path: 'skill',
    component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__.SkillComponent
  }, {
    path: 'experience',
    component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__.ExperienceComponent
  }, {
    path: 'contact',
    component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent
  }, {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }]
}]);

/***/ }),

/***/ 2150:
/*!*************************************************************!*\
  !*** ./src/app/commons/components/modal/modal.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalComponent: () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);




const _c0 = (a0, a1) => ({
  "modal__container--success": a0,
  "modal__container--error": a1
});
const _c1 = (a0, a1) => ({
  "modal__message--success": a0,
  "modal__message--error": a1
});
function ModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4)(4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Conditional_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Listo, gracias!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r1.type === "success", ctx_r1.type === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.icons[ctx_r1.type], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, ctx_r1.type === "success", ctx_r1.type === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.message, " ");
  }
}
function ModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4)(4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.message, " ");
  }
}
class ModalComponent {
  constructor() {
    this.type = 'success';
    this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.icons = {
      success: './assets/icons/modal-icons/success-modal.png',
      error: './assets/icons/modal-icons/error-modal.png'
    };
  }
  closeModal() {
    this.closeEvent.emit();
  }
  static {
    this.ɵfac = function ModalComponent_Factory(t) {
      return new (t || ModalComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalComponent,
      selectors: [["app-modal"]],
      inputs: {
        message: "message",
        type: "type"
      },
      outputs: {
        closeEvent: "closeEvent"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 1,
      consts: [[1, "modal__cap-priority"], [1, "modal__container", 3, "ngClass"], [1, "modal__header"], ["alt", "\u00EDcono modal", 1, "modal__icon", 3, "src"], [1, "modal__body"], [1, "modal__message", 3, "ngClass"], [1, "modal__footer"], [1, "modal__button", 3, "click"], [1, "modal__container"], [1, "modal__spinner"], [1, "modal__message"]],
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalComponent_Conditional_1_Template, 9, 10, "div", 1)(2, ModalComponent_Conditional_2_Template, 6, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx.type === "success" || ctx.type === "error" ? 1 : 2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
      styles: ["@media (min-width: 768px) {\n  .container-generic[_ngcontent-%COMP%] {\n    width: 600px !important;\n    height: 600px !important;\n  }\n}\n@media (min-width: 1024px) {\n  .container-generic[_ngcontent-%COMP%] {\n    width: 730px !important;\n  }\n}\n.modal__cap-priority[_ngcontent-%COMP%] {\n  z-index: 5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  background: rgba(0, 0, 0, 0.8);\n  transition: all 0.8s;\n}\n.modal__container[_ngcontent-%COMP%] {\n  animation: slideDown 1s ease-in-out both;\n  box-sizing: border-box;\n  width: 282px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  background: rgba(18, 18, 18, 0.95);\n  border-width: 1px 0.5px 0.5px 1px;\n  border-style: solid;\n  border-color: #9d9a9a;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 30px;\n  transform: matrix(1, 0, 0, 1, 0, 0);\n  padding: 20px 10px;\n}\n.modal__header[_ngcontent-%COMP%] {\n  height: 64px;\n  margin-bottom: 10px;\n}\n.modal__icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n.modal__spinner[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  border: 6px solid rgb(15, 105, 101);\n  border-top-color: #47ABA5;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.modal__body[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  align-items: center;\n}\n.modal__message[_ngcontent-%COMP%] {\n  width: 298px;\n  font-weight: 400;\n  font-size: 14px;\n  text-align: center;\n  color: #ffffff;\n  margin: 0;\n}\n.modal__message--success[_ngcontent-%COMP%] {\n  width: 193px;\n}\n.modal__message--error[_ngcontent-%COMP%] {\n  width: 197px;\n}\n.modal__footer[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.modal__button[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-size: 10px;\n  width: 127px;\n  height: 27px;\n  background: #ffffff;\n  border: 2px solid #ffffff;\n  border-radius: 25px;\n}\n\n@media (min-width: 375px) {\n  .modal__container[_ngcontent-%COMP%] {\n    width: 330px;\n  }\n  .modal__message[_ngcontent-%COMP%] {\n    width: 220px;\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcYnJlYWtwb2ludC5zY3NzIiwibW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0U7RUFNQTtJQUNFLHVCQUFBO0lBQ0Esd0JBQUE7RUNmRjtBQUNGO0FETUU7RUFhQTtJQUNFLHVCQUFBO0VDaEJGO0FBQ0Y7QUFSRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUFVSjtBQVBFO0VBQ0Usd0NBQUE7RUFDQSxzQkFBQTtFQUVBLFlBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQU1KO0FBSEU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFLSjtBQUZFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFJSjtBQURFO0VBQ00sV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQUdSO0FBQUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUo7QUFDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7QUFDUjtBQUNJO0VBQ0ksWUFBQTtBQUNSO0FBSUU7RUFDRSxnQkFBQTtBQUZKO0FBS0U7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUhKOztBRDVFRTtFQ3FGRTtJQUNJLFlBQUE7RUFMTjtFQVFFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7RUFOSjtBQUNGIiwiZmlsZSI6Im1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnRzOiAoXHJcbiAgXCJtb3ZpbCBzXCI6IDMyMHB4LFxyXG4gIFwibW92aWwgbVwiOiAzNzVweCxcclxuICBcIm1vdmlsIGxcIjogNDI1cHgsXHJcbiAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgXCJsYXB0b3BcIjogMTAyNHB4LFxyXG4gIFwibGFwdG9wIGxcIjogMTQ0MHB4LFxyXG4gIFwiNGtcIjogMjU2MHB4LFxyXG4pICFkZWZhdWx0O1xyXG5cclxuQG1peGluIHJlc3BvbnNpdmUoJHNpemUpIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSByZXNwb25zaXZlKFwidGFibGV0XCIpIHtcclxuICAuY29udGFpbmVyLWdlbmVyaWMge1xyXG4gICAgd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSByZXNwb25zaXZlKFwibGFwdG9wXCIpIHtcclxuICAuY29udGFpbmVyLWdlbmVyaWMge1xyXG4gICAgd2lkdGg6IDczMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59IiwiQHVzZSAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9icmVha3BvaW50JyBhcyBicDtcclxuLm1vZGFsIHtcclxuICAmX19jYXAtcHJpb3JpdHkge1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOHM7XHJcbiAgfVxyXG5cclxuICAmX19jb250YWluZXIge1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZURvd24gMXMgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgd2lkdGg6IDI4MnB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxOCwgMTgsIDAuOTUpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMC41cHggMC41cHggMXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzlkOWE5YTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgdHJhbnNmb3JtOiBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICAmX19oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgfVxyXG5cclxuICAmX19zcGlubmVyIHtcclxuICAgICAgICB3aWR0aDogNTRweDtcclxuICAgICAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICAgICAgYm9yZGVyOiA2cHggc29saWQgcmdiKDE1LCAxMDUsIDEwMSk7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzQ3QUJBNTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gICZfX2JvZHkge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAyOThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAmLS1zdWNjZXNzIHtcclxuICAgICAgICB3aWR0aDogMTkzcHg7XHJcbiAgICB9XHJcbiAgICAmLS1lcnJvciB7XHJcbiAgICAgICAgd2lkdGg6IDE5N3B4O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gICZfX2Zvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9uIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB3aWR0aDogMTI3cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBicC5yZXNwb25zaXZlKCdtb3ZpbCBtJykge1xyXG4gIC5tb2RhbCB7XHJcbiAgICAmX19jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAzMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19tZXNzYWdlIHtcclxuICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2JyZWFrcG9pbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9ucy9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdFO0VBTUE7SUFDRSx1QkFBQTtJQUNBLHdCQUFBO0VDZkY7QUFDRjtBRE1FO0VBYUE7SUFDRSx1QkFBQTtFQ2hCRjtBQUNGO0FBUkU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBVUo7QUFQRTtFQUNFLHdDQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUFNSjtBQUhFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBS0o7QUFGRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSUo7QUFERTtFQUNNLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFHUjtBQUFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNKO0FBQ0k7RUFDSSxZQUFBO0FBQ1I7QUFDSTtFQUNJLFlBQUE7QUFDUjtBQUlFO0VBQ0UsZ0JBQUE7QUFGSjtBQUtFO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUQ1RUU7RUNxRkU7SUFDSSxZQUFBO0VBTE47RUFRRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0VBTko7QUFDRjtBQUNBLHc4SkFBdzhKIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnRzOiAoXHJcbiAgXCJtb3ZpbCBzXCI6IDMyMHB4LFxyXG4gIFwibW92aWwgbVwiOiAzNzVweCxcclxuICBcIm1vdmlsIGxcIjogNDI1cHgsXHJcbiAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgXCJsYXB0b3BcIjogMTAyNHB4LFxyXG4gIFwibGFwdG9wIGxcIjogMTQ0MHB4LFxyXG4gIFwiNGtcIjogMjU2MHB4LFxyXG4pICFkZWZhdWx0O1xyXG5cclxuQG1peGluIHJlc3BvbnNpdmUoJHNpemUpIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSByZXNwb25zaXZlKFwidGFibGV0XCIpIHtcclxuICAuY29udGFpbmVyLWdlbmVyaWMge1xyXG4gICAgd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSByZXNwb25zaXZlKFwibGFwdG9wXCIpIHtcclxuICAuY29udGFpbmVyLWdlbmVyaWMge1xyXG4gICAgd2lkdGg6IDczMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59IiwiQHVzZSAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9icmVha3BvaW50JyBhcyBicDtcclxuLm1vZGFsIHtcclxuICAmX19jYXAtcHJpb3JpdHkge1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOHM7XHJcbiAgfVxyXG5cclxuICAmX19jb250YWluZXIge1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZURvd24gMXMgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgd2lkdGg6IDI4MnB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxOCwgMTgsIDAuOTUpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMC41cHggMC41cHggMXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzlkOWE5YTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgdHJhbnNmb3JtOiBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICAmX19oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgfVxyXG5cclxuICAmX19zcGlubmVyIHtcclxuICAgICAgICB3aWR0aDogNTRweDtcclxuICAgICAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICAgICAgYm9yZGVyOiA2cHggc29saWQgcmdiKDE1LCAxMDUsIDEwMSk7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzQ3QUJBNTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gICZfX2JvZHkge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAyOThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAmLS1zdWNjZXNzIHtcclxuICAgICAgICB3aWR0aDogMTkzcHg7XHJcbiAgICB9XHJcbiAgICAmLS1lcnJvciB7XHJcbiAgICAgICAgd2lkdGg6IDE5N3B4O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gICZfX2Zvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9uIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB3aWR0aDogMTI3cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBicC5yZXNwb25zaXZlKCdtb3ZpbCBtJykge1xyXG4gIC5tb2RhbCB7XHJcbiAgICAmX19jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAzMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19tZXNzYWdlIHtcclxuICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8912:
/*!***************************************************************!*\
  !*** ./src/app/commons/components/navbar/navbar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



function NavbarComponent_For_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 20);
  }
}
function NavbarComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_For_15_Conditional_2_Template, 1, 0, "hr", 20);
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ɵ$index_29_r2 = ctx.$index;
    const ɵ$count_29_r3 = ctx.$count;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", option_r1.routerlink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, !(ɵ$index_29_r2 === ɵ$count_29_r3 - 1) ? 2 : -1);
  }
}
function NavbarComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", option_r4.routerlink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4.content, " ");
  }
}
class NavbarComponent {
  constructor() {
    this.currentMenuItem = 'home';
    this.menuOptions = [{
      content: 'Inicio',
      routerlink: '/home'
    }, {
      content: 'Sobre mí',
      routerlink: '/about'
    }, {
      content: 'Proyectos',
      routerlink: '/project'
    }, {
      content: 'Habilidades',
      routerlink: '/skill'
    }, {
      content: 'Experiencia',
      routerlink: '/experience'
    }, {
      content: 'Convercemos',
      routerlink: '/contact'
    }];
  }
  static {
    this.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 30,
      vars: 4,
      consts: [[1, "navbar"], [1, "navbar__menu-logo-container"], [1, "navbar__menu-toggle-container"], ["type", "checkbox", "id", "menu-toggle", 1, "navbar__menu-toggle"], ["for", "menu-toggle", 1, "navbar__menu-label-icon"], ["width", "15", "height", "10", "viewBox", "0 0 15 10", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "navbar__icon-menu"], ["x1", "0.9", "y1", "9.1", "x2", "14.1", "y2", "9.1", "stroke", "white", "stroke-width", "1.8", "stroke-linecap", "round"], ["x1", "0.9", "y1", "5.1", "x2", "14.1", "y2", "5.1", "stroke", "white", "stroke-width", "1.8", "stroke-linecap", "round"], ["x1", "0.9", "y1", "1.1", "x2", "14.1", "y2", "1.1", "stroke", "white", "stroke-width", "1.8", "stroke-linecap", "round"], ["width", "12", "height", "12", "viewBox", "0 0 12 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "navbar__icon-closed"], ["x1", "1.46908", "y1", "1.69672", "x2", "10.8029", "y2", "11.0305", "stroke", "white", "stroke-width", "1.8", "stroke-linecap", "round"], ["x1", "1.19678", "y1", "11.0306", "x2", "10.5306", "y2", "1.69674", "stroke", "white", "stroke-width", "1.8", "stroke-linecap", "round"], [1, "navbar__menu-toggle-options"], [1, "navbar__logo"], [1, "navbar__logo-letter", "navbar__logo-letter--semibold"], [1, "navbar__logo-letter", "navbar__logo-letter--regular"], [1, "navbar__logo-letter", "navbar__logo-letter--semibold", "navbar__logo-letter--15px"], [1, "navbar__menu"], ["routerLinkActive", "navbar__menu-item--active", 1, "navbar__menu-item", 3, "routerLink"], ["routerLink", "/contact", 1, "navbar__button--conversemos"], [1, "navbar__menu-split"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "nav", 0)(2, "div", 1)(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "line", 6)(8, "line", 7)(9, "line", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "line", 10)(12, "line", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](14, NavbarComponent_For_15_Template, 3, 3, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13)(17, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](26, NavbarComponent_For_27_Template, 2, 2, "li", 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " conversemos ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.menuOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("<D");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("ev.a");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("l");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](">");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.menuOptions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
      styles: ["@media (min-width: 768px) {\n  .container-generic[_ngcontent-%COMP%] {\n    width: 600px !important;\n    height: 600px !important;\n  }\n}\n@media (min-width: 1024px) {\n  .container-generic[_ngcontent-%COMP%] {\n    width: 730px !important;\n  }\n}\n.navbar[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 50px;\n  padding: 0px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: transparent;\n  z-index: 4;\n  transform: translateY(-100%);\n  opacity: 0;\n  animation: slideDown 1s ease-in-out both;\n}\n.navbar__menu-logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.navbar__logo[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.navbar__logo-letter[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.navbar__logo-letter--semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n}\n.navbar__logo-letter--regular[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 20px;\n}\n.navbar__logo-letter--15px[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.navbar__menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n.navbar__menu-toggle-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.navbar__menu-toggle-options[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  z-index: 3;\n  position: absolute;\n  width: 150px;\n  height: 0px;\n  left: -10px;\n  padding: 10px 25px 20px 10px;\n  top: 50px;\n  background: rgba(217, 217, 217, 0.8);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 0px 0px 25px 0px;\n  margin: 0;\n  list-style-type: none;\n  opacity: 0;\n  transition: opacity 0.5s ease-in, height 0.2s ease-in;\n}\n.navbar__menu-toggle[_ngcontent-%COMP%]:checked    ~ .navbar__menu-toggle-options[_ngcontent-%COMP%] {\n  opacity: 1;\n  height: 285px;\n}\n.navbar__menu-toggle[_ngcontent-%COMP%]:not(:checked)    ~ .navbar__menu-toggle-options[_ngcontent-%COMP%] {\n  transition: opacity 0.2s ease-in, height 0.5s ease-in;\n}\n.navbar__menu-toggle[_ngcontent-%COMP%]:not(:checked)    ~ .navbar__menu-toggle-options[_ngcontent-%COMP%]   .navbar__menu-item[_ngcontent-%COMP%], .navbar__menu-toggle[_ngcontent-%COMP%]:not(:checked)    ~ .navbar__menu-toggle-options[_ngcontent-%COMP%]   .navbar__menu-split[_ngcontent-%COMP%] {\n  display: none;\n}\n.navbar__menu-label-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n}\n.navbar__menu-label-icon[_ngcontent-%COMP%]   .navbar__icon-menu[_ngcontent-%COMP%], .navbar__menu-toggle[_ngcontent-%COMP%]:checked    + .navbar__menu-label-icon[_ngcontent-%COMP%]   .navbar__icon-closed[_ngcontent-%COMP%] {\n  display: block;\n}\n.navbar__menu-label-icon[_ngcontent-%COMP%]   .navbar__icon-closed[_ngcontent-%COMP%], .navbar__menu-toggle[_ngcontent-%COMP%]:checked    + .navbar__menu-label-icon[_ngcontent-%COMP%]   .navbar__icon-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n.navbar__menu[_ngcontent-%COMP%] {\n  display: none;\n}\n.navbar__menu-item[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  transition: all 0.3s ease;\n}\n.navbar__menu-split[_ngcontent-%COMP%] {\n  height: 0px;\n  border: 1px solid #b6b3b3;\n}\n.navbar__menu-item--active[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.navbar__button--conversemos[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  font-size: 10px;\n  background-color: #ffffff;\n  border: none;\n  cursor: pointer;\n  width: 85px;\n  height: 27px;\n  animation: pulse 1.5s infinite alternate ease-in-out;\n}\n.navbar__button--conversemos[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n}\n\n@media (min-width: 1024px) {\n  .navbar[_ngcontent-%COMP%] {\n    height: 86px;\n    padding: 0px 60px;\n  }\n  .navbar__menu-toggle-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar__menu[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    list-style-type: none;\n    padding-left: 0;\n  }\n  .navbar__menu-item[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: #b6b3b3;\n    padding: 0px;\n    margin-left: 10px;\n    font-size: 12px;\n    font-weight: 600;\n    cursor: pointer;\n    position: relative;\n  }\n  .navbar__menu-item[_ngcontent-%COMP%]:hover, .navbar__menu-item--active[_ngcontent-%COMP%] {\n    color: #ffffff;\n  }\n  .navbar__logo[_ngcontent-%COMP%] {\n    width: 145px;\n  }\n  .navbar__button--conversemos[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 145px;\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcYnJlYWtwb2ludC5zY3NzIiwibmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdFO0VBTUE7SUFDRSx1QkFBQTtJQUNBLHdCQUFBO0VDZkY7QUFDRjtBRE1FO0VBYUE7SUFDRSx1QkFBQTtFQ2hCRjtBQUNGO0FBUkE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0FBVUY7QUFSRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVVKO0FBUEU7RUFDRSxrQkFBQTtBQVNKO0FBUEk7RUFDRSxjQUFBO0FBU047QUFQTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQVNSO0FBTk07RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFRUjtBQUxNO0VBQ0UsZUFBQTtBQU9SO0FBRkU7RUFDRSxhQUFBO0FBSUo7QUFGSTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFJTjtBQURJO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EscURBQUE7QUFHTjtBQUFJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFFTjtBQUNJO0VBQ0UscURBQUE7QUFDTjtBQUVJO0VBRUUsYUFBQTtBQUROO0FBS0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUU7RUFFRSxjQUFBO0FBTEo7QUFRRTtFQUVFLGFBQUE7QUFQSjtBQVVFO0VBQ0UsYUFBQTtBQVJKO0FBVUk7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FBUk47QUFXSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQVROO0FBWUk7RUFDRSxjQUFBO0FBVk47QUFjRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9EQUFBO0FBWko7QUFjSTtFQUNFLHNCQUFBO0FBWk47O0FEaEhFO0VDa0lBO0lBQ0UsWUFBQTtJQUNBLGlCQUFBO0VBZEY7RUFnQkU7SUFDRSxhQUFBO0VBZEo7RUFpQkU7SUFDRSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxxQkFBQTtJQUNBLGVBQUE7RUFmSjtFQWlCSTtJQUNFLHFCQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQWZOO0VBaUJNO0lBQ0UsY0FBQTtFQWZSO0VBcUJFO0lBQ0UsWUFBQTtFQW5CSjtFQXNCRTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQXBCSjtBQUNGIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRicmVha3BvaW50czogKFxyXG4gIFwibW92aWwgc1wiOiAzMjBweCxcclxuICBcIm1vdmlsIG1cIjogMzc1cHgsXHJcbiAgXCJtb3ZpbCBsXCI6IDQyNXB4LFxyXG4gIFwidGFibGV0XCI6IDc2OHB4LFxyXG4gIFwibGFwdG9wXCI6IDEwMjRweCxcclxuICBcImxhcHRvcCBsXCI6IDE0NDBweCxcclxuICBcIjRrXCI6IDI1NjBweCxcclxuKSAhZGVmYXVsdDtcclxuXHJcbkBtaXhpbiByZXNwb25zaXZlKCRzaXplKSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkc2l6ZSkpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgcmVzcG9uc2l2ZShcInRhYmxldFwiKSB7XHJcbiAgLmNvbnRhaW5lci1nZW5lcmljIHtcclxuICAgIHdpZHRoOiA2MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgcmVzcG9uc2l2ZShcImxhcHRvcFwiKSB7XHJcbiAgLmNvbnRhaW5lci1nZW5lcmljIHtcclxuICAgIHdpZHRoOiA3MzBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufSIsIkB1c2UgXCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2JyZWFrcG9pbnRcIiBhcyBicDtcblxuLm5hdmJhciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIDFzIGVhc2UtaW4tb3V0IGJvdGg7XG5cbiAgJl9fbWVudS1sb2dvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgJl9fbG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgJi1sZXR0ZXIge1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG5cbiAgICAgICYtLXNlbWlib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAmLS1yZWd1bGFyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAmLS0xNXB4IHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX21lbnUtdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgJi1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgICYtb3B0aW9ucyB7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgei1pbmRleDogMztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGhlaWdodDogMHB4O1xuICAgICAgbGVmdDogLTEwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDI1cHggMjBweCAxMHB4O1xuICAgICAgdG9wOiA1MHB4O1xuICAgICAgYmFja2dyb3VuZDogI2Q5ZDlkOWNjO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjVweCAwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4sIGhlaWdodCAwLjJzIGVhc2UtaW47XG4gICAgfVxuXG4gICAgJjpjaGVja2VkIH4gJi1vcHRpb25zIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBoZWlnaHQ6IDI4NXB4O1xuICAgIH1cblxuICAgICY6bm90KDpjaGVja2VkKSB+ICYtb3B0aW9ucyB7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbiwgaGVpZ2h0IDAuNXMgZWFzZS1pbjtcbiAgICB9XG5cbiAgICAmOm5vdCg6Y2hlY2tlZCkgfiAmLW9wdGlvbnMgLm5hdmJhcl9fbWVudS1pdGVtLFxuICAgICY6bm90KDpjaGVja2VkKSB+ICYtb3B0aW9ucyAubmF2YmFyX19tZW51LXNwbGl0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJl9fbWVudS1sYWJlbC1pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gICZfX21lbnUtbGFiZWwtaWNvbiAmX19pY29uLW1lbnUsXG4gICZfX21lbnUtdG9nZ2xlOmNoZWNrZWQgKyAmX19tZW51LWxhYmVsLWljb24gJl9faWNvbi1jbG9zZWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgJl9fbWVudS1sYWJlbC1pY29uICZfX2ljb24tY2xvc2VkLFxuICAmX19tZW51LXRvZ2dsZTpjaGVja2VkICsgJl9fbWVudS1sYWJlbC1pY29uICZfX2ljb24tbWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICZfX21lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAmLWl0ZW0ge1xuICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIH1cblxuICAgICYtc3BsaXQge1xuICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjZiM2IzO1xuICAgIH1cblxuICAgICYtaXRlbS0tYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxuXG4gICZfX2J1dHRvbi0tY29udmVyc2Vtb3Mge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogODVweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAxLjVzIGluZmluaXRlIGFsdGVybmF0ZSBlYXNlLWluLW91dDtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgYnAucmVzcG9uc2l2ZShcImxhcHRvcFwiKSB7XG4gIC5uYXZiYXIge1xuICAgIGhlaWdodDogODZweDtcbiAgICBwYWRkaW5nOiAwcHggNjBweDtcblxuICAgICZfX21lbnUtdG9nZ2xlLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICZfX21lbnUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcblxuICAgICAgJi1pdGVtIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogI2I2YjNiMztcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOmhvdmVyLCAmLS1hY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmOyAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cblxuICAgICZfX2xvZ28ge1xuICAgICAgd2lkdGg6IDE0NXB4O1xuICAgIH1cblxuICAgICZfX2J1dHRvbi0tY29udmVyc2Vtb3Mge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgd2lkdGg6IDE0NXB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2JyZWFrcG9pbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9ucy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0U7RUFNQTtJQUNFLHVCQUFBO0lBQ0Esd0JBQUE7RUNmRjtBQUNGO0FETUU7RUFhQTtJQUNFLHVCQUFBO0VDaEJGO0FBQ0Y7QUFSQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7QUFVRjtBQVJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBVUo7QUFQRTtFQUNFLGtCQUFBO0FBU0o7QUFQSTtFQUNFLGNBQUE7QUFTTjtBQVBNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBU1I7QUFOTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQVFSO0FBTE07RUFDRSxlQUFBO0FBT1I7QUFGRTtFQUNFLGFBQUE7QUFJSjtBQUZJO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQUlOO0FBREk7RUFDRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsMkNBQUE7RUFDQSwrQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxxREFBQTtBQUdOO0FBQUk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQUVOO0FBQ0k7RUFDRSxxREFBQTtBQUNOO0FBRUk7RUFFRSxhQUFBO0FBRE47QUFLRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEo7QUFNRTtFQUVFLGNBQUE7QUFMSjtBQVFFO0VBRUUsYUFBQTtBQVBKO0FBVUU7RUFDRSxhQUFBO0FBUko7QUFVSTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUFSTjtBQVdJO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBVE47QUFZSTtFQUNFLGNBQUE7QUFWTjtBQWNFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0RBQUE7QUFaSjtBQWNJO0VBQ0Usc0JBQUE7QUFaTjs7QURoSEU7RUNrSUE7SUFDRSxZQUFBO0lBQ0EsaUJBQUE7RUFkRjtFQWdCRTtJQUNFLGFBQUE7RUFkSjtFQWlCRTtJQUNFLGFBQUE7SUFDQSw4QkFBQTtJQUNBLHFCQUFBO0lBQ0EsZUFBQTtFQWZKO0VBaUJJO0lBQ0UscUJBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VBZk47RUFpQk07SUFDRSxjQUFBO0VBZlI7RUFxQkU7SUFDRSxZQUFBO0VBbkJKO0VBc0JFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBcEJKO0FBQ0Y7QUFDQSx3ek9BQXd6TyIsInNvdXJjZXNDb250ZW50IjpbIiRicmVha3BvaW50czogKFxyXG4gIFwibW92aWwgc1wiOiAzMjBweCxcclxuICBcIm1vdmlsIG1cIjogMzc1cHgsXHJcbiAgXCJtb3ZpbCBsXCI6IDQyNXB4LFxyXG4gIFwidGFibGV0XCI6IDc2OHB4LFxyXG4gIFwibGFwdG9wXCI6IDEwMjRweCxcclxuICBcImxhcHRvcCBsXCI6IDE0NDBweCxcclxuICBcIjRrXCI6IDI1NjBweCxcclxuKSAhZGVmYXVsdDtcclxuXHJcbkBtaXhpbiByZXNwb25zaXZlKCRzaXplKSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkc2l6ZSkpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgcmVzcG9uc2l2ZShcInRhYmxldFwiKSB7XHJcbiAgLmNvbnRhaW5lci1nZW5lcmljIHtcclxuICAgIHdpZHRoOiA2MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgcmVzcG9uc2l2ZShcImxhcHRvcFwiKSB7XHJcbiAgLmNvbnRhaW5lci1nZW5lcmljIHtcclxuICAgIHdpZHRoOiA3MzBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufSIsIkB1c2UgXCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2JyZWFrcG9pbnRcIiBhcyBicDtcblxuLm5hdmJhciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIDFzIGVhc2UtaW4tb3V0IGJvdGg7XG5cbiAgJl9fbWVudS1sb2dvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgJl9fbG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgJi1sZXR0ZXIge1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG5cbiAgICAgICYtLXNlbWlib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAmLS1yZWd1bGFyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAmLS0xNXB4IHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX21lbnUtdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgJi1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgICYtb3B0aW9ucyB7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgei1pbmRleDogMztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGhlaWdodDogMHB4O1xuICAgICAgbGVmdDogLTEwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDI1cHggMjBweCAxMHB4O1xuICAgICAgdG9wOiA1MHB4O1xuICAgICAgYmFja2dyb3VuZDogI2Q5ZDlkOWNjO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjVweCAwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4sIGhlaWdodCAwLjJzIGVhc2UtaW47XG4gICAgfVxuXG4gICAgJjpjaGVja2VkIH4gJi1vcHRpb25zIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBoZWlnaHQ6IDI4NXB4O1xuICAgIH1cblxuICAgICY6bm90KDpjaGVja2VkKSB+ICYtb3B0aW9ucyB7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbiwgaGVpZ2h0IDAuNXMgZWFzZS1pbjtcbiAgICB9XG5cbiAgICAmOm5vdCg6Y2hlY2tlZCkgfiAmLW9wdGlvbnMgLm5hdmJhcl9fbWVudS1pdGVtLFxuICAgICY6bm90KDpjaGVja2VkKSB+ICYtb3B0aW9ucyAubmF2YmFyX19tZW51LXNwbGl0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJl9fbWVudS1sYWJlbC1pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gICZfX21lbnUtbGFiZWwtaWNvbiAmX19pY29uLW1lbnUsXG4gICZfX21lbnUtdG9nZ2xlOmNoZWNrZWQgKyAmX19tZW51LWxhYmVsLWljb24gJl9faWNvbi1jbG9zZWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgJl9fbWVudS1sYWJlbC1pY29uICZfX2ljb24tY2xvc2VkLFxuICAmX19tZW51LXRvZ2dsZTpjaGVja2VkICsgJl9fbWVudS1sYWJlbC1pY29uICZfX2ljb24tbWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICZfX21lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAmLWl0ZW0ge1xuICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIH1cblxuICAgICYtc3BsaXQge1xuICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjZiM2IzO1xuICAgIH1cblxuICAgICYtaXRlbS0tYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxuXG4gICZfX2J1dHRvbi0tY29udmVyc2Vtb3Mge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogODVweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAxLjVzIGluZmluaXRlIGFsdGVybmF0ZSBlYXNlLWluLW91dDtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgYnAucmVzcG9uc2l2ZShcImxhcHRvcFwiKSB7XG4gIC5uYXZiYXIge1xuICAgIGhlaWdodDogODZweDtcbiAgICBwYWRkaW5nOiAwcHggNjBweDtcblxuICAgICZfX21lbnUtdG9nZ2xlLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICZfX21lbnUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcblxuICAgICAgJi1pdGVtIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogI2I2YjNiMztcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOmhvdmVyLCAmLS1hY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmOyAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cblxuICAgICZfX2xvZ28ge1xuICAgICAgd2lkdGg6IDE0NXB4O1xuICAgIH1cblxuICAgICZfX2J1dHRvbi0tY29udmVyc2Vtb3Mge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgd2lkdGg6IDE0NXB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9822:
/*!*******************************************************************************************!*\
  !*** ./src/app/commons/directives/fixed-text-area-height-by-messages-errors.directive.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FixedTextAreaHeightByMessagesErrorsDirective: () => (/* binding */ FixedTextAreaHeightByMessagesErrorsDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FixedTextAreaHeightByMessagesErrorsDirective {
  constructor(element, renderer) {
    this.element = element;
    this.renderer = renderer;
    this.textareaBaseHeight = 180;
  }
  ngAfterViewInit() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (!mutation.target.matches('.contact__wrapper-input, .contact__wrapper-textarea')) return;
        if (mutation.addedNodes.length !== 0) {
          this.fixedHeight('removeHeight');
        }
        ;
        if (mutation.removedNodes.length !== 0) {
          this.fixedHeight('addHeight');
        }
        ;
      });
    });
    this.observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  fixedHeight(operation) {
    const textarea = this.element.nativeElement;
    const elementErrorMessages = Array.from(document.querySelectorAll('p.contact__message--error'));
    let height = 0;
    if (operation === 'addHeight') {
      height = textarea.clientHeight + 15;
    }
    if (operation === 'removeHeight') {
      const totalErrorHeight = elementErrorMessages.reduce((sum, p) => sum + p.clientHeight, 0);
      height = this.textareaBaseHeight - totalErrorHeight;
    }
    this.renderer.setStyle(textarea, 'height', `${height}px`);
  }
  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  static {
    this.ɵfac = function FixedTextAreaHeightByMessagesErrorsDirective_Factory(t) {
      return new (t || FixedTextAreaHeightByMessagesErrorsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FixedTextAreaHeightByMessagesErrorsDirective,
      selectors: [["", "appFixedTextAreaHeightByMessagesErrors", ""]],
      standalone: true
    });
  }
}

/***/ }),

/***/ 6254:
/*!**********************************************************!*\
  !*** ./src/app/commons/services/contact-form.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactFormService: () => (/* binding */ ContactFormService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class ContactFormService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  sendData(data, recaptchaToken) {
    return this.httpClient.post(`${this.apiUrl}/api/contact-form`, {
      data,
      recaptchaToken
    });
  }
  static {
    this.ɵfac = function ContactFormService_Factory(t) {
      return new (t || ContactFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ContactFormService,
      factory: ContactFormService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1640:
/*!***************************************************!*\
  !*** ./src/app/commons/services/modal.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalService: () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/modal/modal.component */ 2150);



class ModalService {
  constructor(injector, appRef) {
    this.injector = injector;
    this.appRef = appRef;
  }
  open(config) {
    if (this.modalRef) return;
    this.modalRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.createComponent)(_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, {
      environmentInjector: this.appRef.injector,
      elementInjector: this.injector
    });
    this.modalRef.instance.message = config.message;
    this.modalRef.instance.type = config.type || 'success';
    this.modalRef.instance.closeEvent.subscribe(() => this.close());
    document.body.appendChild(this.modalRef.location.nativeElement);
    this.appRef.attachView(this.modalRef.hostView);
  }
  close() {
    if (this.modalRef) {
      this.appRef.detachView(this.modalRef.hostView);
      this.modalRef.destroy();
      this.modalRef = undefined;
    }
  }
  static {
    this.ɵfac = function ModalService_Factory(t) {
      return new (t || ModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ModalService,
      factory: ModalService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2036:
/*!*******************************************************!*\
  !*** ./src/app/commons/services/recaptcha.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecaptchaService: () => (/* binding */ RecaptchaService)
/* harmony export */ });
/* harmony import */ var C_Users_Braynner_Documents_PersonalWebGitHub_personal_landing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class RecaptchaService {
  constructor() {
    this.siteKey = '6Lce9PoqAAAAAHMF0Gr6rrTV43izKlbSs3adiu2W';
  }
  executeRecaptcha(action) {
    var _this = this;
    return (0,C_Users_Braynner_Documents_PersonalWebGitHub_personal_landing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        if (!window.grecaptcha) {
          reject('reCAPTCHA no está cargado');
          return;
        }
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(_this.siteKey, {
            action
          }).then(token => resolve(token)).catch(reject);
        });
      });
    })();
  }
  static {
    this.ɵfac = function RecaptchaService_Factory(t) {
      return new (t || RecaptchaService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RecaptchaService,
      factory: RecaptchaService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8712:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Braynner_Documents_PersonalWebGitHub_personal_landing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _commons_directives_fixed_text_area_height_by_messages_errors_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commons/directives/fixed-text-area-height-by-messages-errors.directive */ 9822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _commons_services_contact_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commons/services/contact-form.service */ 6254);
/* harmony import */ var _commons_services_recaptcha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commons/services/recaptcha.service */ 2036);
/* harmony import */ var _commons_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commons/services/modal.service */ 1640);










const _c0 = a0 => ({
  "contact__input--error": a0
});
const _c1 = a0 => ({
  "contact__textarea--error": a0
});
function ContactComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El nombre es necesario para enviar la informaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El nombre solo permite letras y espacios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" El nombre debe tener m\u00E1s de ", (tmp_1_0 = ctx_r0.form.get("name_complete")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"]["requiredLength"], " letras y tiene ", (tmp_1_0 = ctx_r0.form.get("name_complete")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"]["actualLength"], " ");
  }
}
function ContactComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" El nombre no debe tener m\u00E1s de ", (tmp_1_0 = ctx_r0.form.get("name_complete")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["maxlength"]["requiredLength"], " car\u00E1cteres y tiene ", (tmp_1_0 = ctx_r0.form.get("name_complete")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["maxlength"]["actualLength"], " ");
  }
}
function ContactComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El correo es necesario para enviar la informaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El correo debe ser v\u00E1lido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Este campo es necesario para enviar la informaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Este campo debe tener m\u00E1s de ", (tmp_1_0 = ctx_r0.form.get("message")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"]["requiredLength"], " car\u00E1cteres y tiene ", (tmp_1_0 = ctx_r0.form.get("message")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"]["actualLength"], " ");
  }
}
function ContactComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Este campo no debe tener m\u00E1s de ", (tmp_1_0 = ctx_r0.form.get("message")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["maxlength"]["requiredLength"], " car\u00E1cteres y tiene ", (tmp_1_0 = ctx_r0.form.get("message")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["maxlength"]["actualLength"], " ");
  }
}
function ContactComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const socialMedia_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", socialMedia_r2.href, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", socialMedia_r2.src, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", socialMedia_r2.alt);
  }
}
//Testing
class ContactComponent {
  constructor(formBuild, contactFormServ, recaptchaServ, modalService) {
    this.formBuild = formBuild;
    this.contactFormServ = contactFormServ;
    this.recaptchaServ = recaptchaServ;
    this.modalService = modalService;
    this.socialsMedia = [{
      src: './assets/icons/whatsapp.png',
      alt: 'Ícono Whatsapp',
      href: 'https://wa.me/573186496090'
    }, {
      src: './assets/icons/linkedin.png',
      alt: 'Ícono linkedIn',
      href: 'https://linkedin.com/in/braynner-polo'
    }, {
      src: './assets/icons/github.png',
      alt: 'Ícono Github',
      href: 'https://github.com/braynner212'
    }, {
      src: './assets/icons/instagram.png',
      alt: 'Ícono Instagram',
      href: 'https://instagram.com/braynner.dev.ai'
    }];
  }
  ngOnInit() {
    this.makeForm();
  }
  makeForm() {
    this.form = this.formBuild.group({
      name_complete: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/)]],
      mail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)]],
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(255)]]
    });
  }
  onSubmit() {
    var _this = this;
    return (0,C_Users_Braynner_Documents_PersonalWebGitHub_personal_landing_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.form.invalid) {
        Object.keys(_this.form.controls).forEach(key => {
          if (_this.form.controls[key].invalid) {
            _this.form.controls[key].markAsTouched();
          }
        });
      } else {
        try {
          const recaptchaToken = yield _this.recaptchaServ.executeRecaptcha('submit');
          _this.openModal({
            message: 'Enviando...',
            type: 'loading'
          });
          _this.contactFormServ.sendData(_this.form.value, recaptchaToken).subscribe({
            next: response => {
              setTimeout(() => {
                _this.closeModal();
                _this.openModal({
                  message: response.message,
                  type: 'success'
                });
              }, 1500);
            },
            error: error => {
              _this.closeModal();
              if (error.error.message === 'Exceso de solicitudes, espera un momento antes de intentarlo de nuevo.' || error.error.message === 'Verificación reCAPTCHA fallida') {
                _this.openModal({
                  message: error.error.message,
                  type: 'error'
                });
              } else {
                _this.openModal({
                  message: 'Estamos presentando algunos inconvenientes, si persisten existes otros medios para que conversemos LinkedIn, Whatsapp e Instagram',
                  type: 'error'
                });
              }
            },
            complete: () => {
              _this.form.reset();
            }
          });
        } catch {
          _this.closeModal();
          _this.openModal({
            message: 'Estamos presentando algunos inconvenientes, si persisten existes otros medios para que conversemos LinkedIn, Whatsapp e Instagram',
            type: 'error'
          });
        }
      }
    })();
  }
  openModal(config) {
    this.modalService.open({
      message: config.message,
      type: config.type
    });
  }
  closeModal() {
    this.modalService.close();
  }
  static {
    this.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_commons_services_contact_form_service__WEBPACK_IMPORTED_MODULE_2__.ContactFormService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_commons_services_recaptcha_service__WEBPACK_IMPORTED_MODULE_3__.RecaptchaService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_commons_services_modal_service__WEBPACK_IMPORTED_MODULE_4__.ModalService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 28,
      vars: 19,
      consts: [["id", "contact", 1, "contact"], [1, "contact__container", "container-generic"], [1, "contact__title"], [1, "contact__form", 3, "submit", "formGroup"], [1, "contact__wrapper-input"], ["id", "name_complete", "type", "text", "placeholder", "Nombre Completo", "formControlName", "name_complete", 1, "contact__input", 3, "ngClass"], ["class", "contact__message--error", 4, "ngIf"], ["id", "mail", "type", "email", "placeholder", "Correo", "formControlName", "mail", 1, "contact__input", 3, "ngClass"], [1, "contact__wrapper-textarea"], ["id", "message", "cols", "30", "formControlName", "message", "placeholder", "Cu\u00E9ntame de esa idea que tienes en mente", "appFixedTextAreaHeightByMessagesErrors", "", 1, "contact__textarea", 3, "ngClass"], ["type", "submit", 1, "contact__button"], [1, "contact__box-right"], [1, "contact__paragraph"], [1, "contact__socials-media-container"], [1, "contact__socials-media-icon"], [1, "contact__message--error"], ["target", "_blank", 3, "href"], [1, "contact__socials-media-icon-img", 3, "src", "alt"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u00A1Convencemos!");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function ContactComponent_Template_form_submit_4_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ContactComponent_p_7_Template, 2, 0, "p", 6)(8, ContactComponent_p_8_Template, 2, 0, "p", 6)(9, ContactComponent_p_9_Template, 2, 2, "p", 6)(10, ContactComponent_p_10_Template, 2, 2, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ContactComponent_p_13_Template, 2, 0, "p", 6)(14, ContactComponent_p_14_Template, 2, 0, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "textarea", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ContactComponent_p_17_Template, 2, 0, "p", 6)(18, ContactComponent_p_18_Template, 2, 2, "p", 6)(19, ContactComponent_p_19_Template, 2, 2, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Enviar");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 11)(23, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Me gustar\u00EDa que conversemos sobre tu idea, puedes dejarla a trav\u00E9s del formulario o si lo prefieres puedes escribirme por Whatsapp, Instagram o LinkedIn y por su puesto si quieres saber sobre contenido digital no dudes en seguirme en redes. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](26, ContactComponent_For_27_Template, 3, 3, "div", 14, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          let tmp_8_0;
          let tmp_9_0;
          let tmp_10_0;
          let tmp_11_0;
          let tmp_12_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](13, _c0, ((tmp_1_0 = ctx.form.get("name_complete")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx.form.get("name_complete")) == null ? null : tmp_1_0.touched) || ((tmp_1_0 = ctx.form.get("name_complete")) == null ? null : tmp_1_0.hasError("pattern")) && ((tmp_1_0 = ctx.form.get("name_complete")) == null ? null : tmp_1_0.touched) || ((tmp_1_0 = ctx.form.get("name_complete")) == null ? null : tmp_1_0.hasError("minlength")) && ((tmp_1_0 = ctx.form.get("name_complete")) == null ? null : tmp_1_0.touched) || ((tmp_1_0 = ctx.form.get("name_complete")) == null ? null : tmp_1_0.hasError("maxlength")) && ((tmp_1_0 = ctx.form.get("name_complete")) == null ? null : tmp_1_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.form.get("name_complete")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.form.get("name_complete")) == null ? null : tmp_2_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.form.get("name_complete")) == null ? null : tmp_3_0.hasError("pattern")) && ((tmp_3_0 = ctx.form.get("name_complete")) == null ? null : tmp_3_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.form.get("name_complete")) == null ? null : tmp_4_0.hasError("minlength")) && ((tmp_4_0 = ctx.form.get("name_complete")) == null ? null : tmp_4_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.form.get("name_complete")) == null ? null : tmp_5_0.hasError("maxlength")) && ((tmp_5_0 = ctx.form.get("name_complete")) == null ? null : tmp_5_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c0, ((tmp_6_0 = ctx.form.get("mail")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.form.get("mail")) == null ? null : tmp_6_0.touched) || ((tmp_6_0 = ctx.form.get("mail")) == null ? null : tmp_6_0.hasError("email")) && ((tmp_6_0 = ctx.form.get("mail")) == null ? null : tmp_6_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.form.get("mail")) == null ? null : tmp_7_0.hasError("required")) && ((tmp_7_0 = ctx.form.get("mail")) == null ? null : tmp_7_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.form.get("mail")) == null ? null : tmp_8_0.hasError("email")) && ((tmp_8_0 = ctx.form.get("mail")) == null ? null : tmp_8_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c1, ((tmp_9_0 = ctx.form.get("message")) == null ? null : tmp_9_0.hasError("required")) && ((tmp_9_0 = ctx.form.get("message")) == null ? null : tmp_9_0.touched) || ((tmp_9_0 = ctx.form.get("message")) == null ? null : tmp_9_0.hasError("minlength")) && ((tmp_9_0 = ctx.form.get("message")) == null ? null : tmp_9_0.touched) || ((tmp_9_0 = ctx.form.get("message")) == null ? null : tmp_9_0.hasError("maxlength")) && ((tmp_9_0 = ctx.form.get("message")) == null ? null : tmp_9_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.form.get("message")) == null ? null : tmp_10_0.hasError("required")) && ((tmp_10_0 = ctx.form.get("message")) == null ? null : tmp_10_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.form.get("message")) == null ? null : tmp_11_0.hasError("minlength")) && ((tmp_11_0 = ctx.form.get("message")) == null ? null : tmp_11_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.form.get("message")) == null ? null : tmp_12_0.hasError("maxlength")) && ((tmp_12_0 = ctx.form.get("message")) == null ? null : tmp_12_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.socialsMedia);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _commons_directives_fixed_text_area_height_by_messages_errors_directive__WEBPACK_IMPORTED_MODULE_1__.FixedTextAreaHeightByMessagesErrorsDirective],
      styles: ["@media (min-width: 768px) {\n  .container-generic[_ngcontent-%COMP%] {\n    width: 600px !important;\n    height: 600px !important;\n  }\n}\n@media (min-width: 1024px) {\n  .container-generic[_ngcontent-%COMP%] {\n    width: 730px !important;\n  }\n}\n.contact[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  animation: slideUp 1s ease-in-out both;\n}\n.contact__container[_ngcontent-%COMP%] {\n  width: 282px;\n}\n.contact__title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 600;\n  color: #ffffff;\n}\n.contact__wrapper-input[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.contact__wrapper-textarea[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n.contact__input[_ngcontent-%COMP%], .contact__textarea[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border: none;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 25px;\n  font-family: \"Noto Sans\", \"Roboto\";\n}\n.contact__input[_ngcontent-%COMP%]::placeholder, .contact__textarea[_ngcontent-%COMP%]::placeholder {\n  color: #807c7c;\n  font-size: 15px;\n  font-weight: 600;\n}\n.contact__input[_ngcontent-%COMP%]:focus, .contact__textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-width: 3px;\n  animation: pulse 1.5s infinite alternate ease-in-out;\n}\n.contact__input--error[_ngcontent-%COMP%], .contact__textarea--error[_ngcontent-%COMP%] {\n  border: 1px solid #ff4d4d;\n  box-shadow: 0 0 8px rgba(255, 77, 77, 0.6);\n  animation: shake 0.3s ease-in-out, pulse-error 1.5s infinite alternate ease-in-out;\n}\n.contact__input--error[_ngcontent-%COMP%]:focus, .contact__textarea--error[_ngcontent-%COMP%]:focus {\n  border: 1px solid #ff4d4d;\n}\n.contact__input[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 30px;\n}\n.contact__textarea[_ngcontent-%COMP%] {\n  resize: none;\n  height: 180px;\n  padding: 15px 30px;\n  margin-bottom: 0;\n}\n.contact__message--error[_ngcontent-%COMP%] {\n  font-size: 13px;\n  box-sizing: border-box;\n  width: 100%;\n  color: #ff4d4d;\n  margin: 5px 0px;\n}\n.contact__button[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 25px;\n  height: 40px;\n  width: 100%;\n  background-color: #ffffff;\n  color: #000000;\n  font-size: 16px;\n  font-weight: 300;\n  cursor: pointer;\n  margin-top: 10px;\n}\n.contact__button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n.contact__paragraph[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 300;\n}\n.contact__socials-media-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.contact__socials-media-icon[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 60px;\n  height: 60px;\n  background: rgba(18, 18, 18, 0.95);\n  border-width: 1px 0.5px 0.5px 1px;\n  border-style: solid;\n  border-color: #9d9a9a;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.contact__socials-media-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n\n@media (min-width: 375px) {\n  .contact__container[_ngcontent-%COMP%] {\n    width: 330px;\n  }\n}\n@media (min-width: 768px) {\n  .contact__container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-rows: 0.1fr 0.6fr;\n    grid-template-columns: 1fr 1fr;\n    place-content: center;\n  }\n  .contact__title[_ngcontent-%COMP%] {\n    font-size: 48px;\n    grid-column: 1/2;\n    margin: 0 0 20px;\n  }\n  .contact__form[_ngcontent-%COMP%] {\n    grid-row: 2/3;\n    width: 90%;\n  }\n  .contact__box-right[_ngcontent-%COMP%] {\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .contact__paragraph[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 10px;\n    font-size: 20px;\n  }\n  .contact__socials-media-container[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n  }\n  .contact__socials-media-icon[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    width: 80px;\n    height: 80px;\n  }\n  .contact__socials-media-icon-img[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXGJyZWFrcG9pbnQuc2NzcyIsImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0U7RUFNQTtJQUNFLHVCQUFBO0lBQ0Esd0JBQUE7RUNmRjtBQUNGO0FETUU7RUFhQTtJQUNFLHVCQUFBO0VDaEJGO0FBQ0Y7QUFSQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUFVRjtBQVJFO0VBQ0UsWUFBQTtBQVVKO0FBUEU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBU0o7QUFORTtFQUNFLG1CQUFBO0FBUUo7QUFMRTtFQUNFLGtCQUFBO0FBT0o7QUFKRTtFQUVFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUFLSjtBQUZJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlOO0FBREk7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvREFBQTtBQUdOO0FBQUk7RUFDRSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0ZBQ0U7QUFDUjtBQUdJO0VBQ0UseUJBQUE7QUFETjtBQUtFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFISjtBQU1FO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSko7QUFPRTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUxKO0FBUUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU5KO0FBUUk7RUFDRSxzQkFBQTtBQU5OO0FBVUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUko7QUFZSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFWTjtBQWFJO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWk47QUFjTTtFQUNFLHNCQUFBO0FBWlI7O0FEMUdFO0VDOEhFO0lBQ0UsWUFBQTtFQWhCSjtBQUNGO0FEaEhFO0VDc0lFO0lBQ0UsYUFBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7SUFDQSxxQkFBQTtFQW5CSjtFQXNCRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBcEJKO0VBd0JFO0lBQ0UsYUFBQTtJQUNBLFVBQUE7RUF0Qko7RUEwQkU7SUFDRSxhQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7RUF4Qko7RUEyQkU7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBekJKO0VBNkJJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtFQTNCTjtFQThCSTtJQUNFLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUE1Qk47RUErQkk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQTdCTjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnJlYWtwb2ludHM6IChcclxuICBcIm1vdmlsIHNcIjogMzIwcHgsXHJcbiAgXCJtb3ZpbCBtXCI6IDM3NXB4LFxyXG4gIFwibW92aWwgbFwiOiA0MjVweCxcclxuICBcInRhYmxldFwiOiA3NjhweCxcclxuICBcImxhcHRvcFwiOiAxMDI0cHgsXHJcbiAgXCJsYXB0b3AgbFwiOiAxNDQwcHgsXHJcbiAgXCI0a1wiOiAyNTYwcHgsXHJcbikgIWRlZmF1bHQ7XHJcblxyXG5AbWl4aW4gcmVzcG9uc2l2ZSgkc2l6ZSkge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIHJlc3BvbnNpdmUoXCJ0YWJsZXRcIikge1xyXG4gIC5jb250YWluZXItZ2VuZXJpYyB7XHJcbiAgICB3aWR0aDogNjAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIHJlc3BvbnNpdmUoXCJsYXB0b3BcIikge1xyXG4gIC5jb250YWluZXItZ2VuZXJpYyB7XHJcbiAgICB3aWR0aDogNzMwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn0iLCJAdXNlICcuLi8uLi9hc3NldHMvc3R5bGVzL2JyZWFrcG9pbnQnIGFzIGJwO1xuXG4uY29udGFjdCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbmltYXRpb246IHNsaWRlVXAgMXMgZWFzZS1pbi1vdXQgYm90aDtcblxuICAmX19jb250YWluZXJ7XG4gICAgd2lkdGg6IDI4MnB4O1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgJl9fd3JhcHBlci1pbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gICZfX3dyYXBwZXItdGV4dGFyZWEge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuXG4gICZfX2lucHV0LFxuICAmX190ZXh0YXJlYSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCIsIFwiUm9ib3RvXCI7XG5cblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjODA3YzdjO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMS41cyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgJi0tZXJyb3Ige1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmNGQ0ZDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgyNTUsIDc3LCA3NywgMC42KTtcbiAgICAgIGFuaW1hdGlvbjpcbiAgICAgICAgc2hha2UgMC4zcyBlYXNlLWluLW91dCxcbiAgICAgICAgcHVsc2UtZXJyb3IgMS41cyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgJi0tZXJyb3I6Zm9jdXMge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmNGQ0ZDtcbiAgICB9XG4gIH1cblxuICAmX19pbnB1dCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgfVxuXG4gICZfX3RleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gICZfX21lc3NhZ2UtLWVycm9yIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogI2ZmNGQ0ZDtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gIH1cblxuICAmX19idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICAgIH1cbiAgfVxuXG4gICZfX3BhcmFncmFwaCB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICAmX19zb2NpYWxzLW1lZGlhIHtcbiAgICAmLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgJi1pY29uIHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogNjBweDtcblxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxOCwgMTgsIDE4LCAwLjk1KTtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4IDAuNXB4IDAuNXB4IDFweDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItY29sb3I6ICM5ZDlhOWE7XG4gICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AaW5jbHVkZSBicC5yZXNwb25zaXZlKFwibW92aWwgbVwiKSB7XG4gIC5jb250YWN0IHtcbiAgICAmX19jb250YWluZXIge1xuICAgICAgd2lkdGg6IDMzMHB4O1xuICAgIH1cbiAgfVxufVxuQGluY2x1ZGUgYnAucmVzcG9uc2l2ZShcInRhYmxldFwiKSB7XG4gIC5jb250YWN0IHtcblxuICAgICZfX2NvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjFmciAwLjZmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICBtYXJnaW46ICAwIDAgMjBweDtcblxuICAgIH1cblxuICAgICZfX2Zvcm0ge1xuICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgICAgd2lkdGg6IDkwJTtcblxuICAgIH1cblxuICAgICZfX2JveC1yaWdodCB7XG4gICAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAmX19wYXJhZ3JhcGgge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgJl9fc29jaWFscy1tZWRpYSB7XG4gICAgICAmLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG4gIFxuICAgICAgJi1pY29uIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJi1pY29uLWltZyB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2JyZWFrcG9pbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdFO0VBTUE7SUFDRSx1QkFBQTtJQUNBLHdCQUFBO0VDZkY7QUFDRjtBRE1FO0VBYUE7SUFDRSx1QkFBQTtFQ2hCRjtBQUNGO0FBUkE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0FBVUY7QUFSRTtFQUNFLFlBQUE7QUFVSjtBQVBFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVNKO0FBTkU7RUFDRSxtQkFBQTtBQVFKO0FBTEU7RUFDRSxrQkFBQTtBQU9KO0FBSkU7RUFFRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FBS0o7QUFGSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJTjtBQURJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0RBQUE7QUFHTjtBQUFJO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtGQUNFO0FBQ1I7QUFHSTtFQUNFLHlCQUFBO0FBRE47QUFLRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBSEo7QUFNRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUpKO0FBT0U7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFMSjtBQVFFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVFJO0VBQ0Usc0JBQUE7QUFOTjtBQVVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVJKO0FBWUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBVk47QUFhSTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVpOO0FBY007RUFDRSxzQkFBQTtBQVpSOztBRDFHRTtFQzhIRTtJQUNFLFlBQUE7RUFoQko7QUFDRjtBRGhIRTtFQ3NJRTtJQUNFLGFBQUE7SUFDQSwrQkFBQTtJQUNBLDhCQUFBO0lBQ0EscUJBQUE7RUFuQko7RUFzQkU7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQXBCSjtFQXdCRTtJQUNFLGFBQUE7SUFDQSxVQUFBO0VBdEJKO0VBMEJFO0lBQ0UsYUFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLDhCQUFBO0VBeEJKO0VBMkJFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQXpCSjtFQTZCSTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7RUEzQk47RUE4Qkk7SUFDRSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBNUJOO0VBK0JJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUE3Qk47QUFDRjtBQUNBLGdoUEFBZ2hQIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnRzOiAoXHJcbiAgXCJtb3ZpbCBzXCI6IDMyMHB4LFxyXG4gIFwibW92aWwgbVwiOiAzNzVweCxcclxuICBcIm1vdmlsIGxcIjogNDI1cHgsXHJcbiAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgXCJsYXB0b3BcIjogMTAyNHB4LFxyXG4gIFwibGFwdG9wIGxcIjogMTQ0MHB4LFxyXG4gIFwiNGtcIjogMjU2MHB4LFxyXG4pICFkZWZhdWx0O1xyXG5cclxuQG1peGluIHJlc3BvbnNpdmUoJHNpemUpIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSByZXNwb25zaXZlKFwidGFibGV0XCIpIHtcclxuICAuY29udGFpbmVyLWdlbmVyaWMge1xyXG4gICAgd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSByZXNwb25zaXZlKFwibGFwdG9wXCIpIHtcclxuICAuY29udGFpbmVyLWdlbmVyaWMge1xyXG4gICAgd2lkdGg6IDczMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59IiwiQHVzZSAnLi4vLi4vYXNzZXRzL3N0eWxlcy9icmVha3BvaW50JyBhcyBicDtcblxuLmNvbnRhY3Qge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDFzIGVhc2UtaW4tb3V0IGJvdGg7XG5cbiAgJl9fY29udGFpbmVye1xuICAgIHdpZHRoOiAyODJweDtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gICZfX3dyYXBwZXItaW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cblxuICAmX193cmFwcGVyLXRleHRhcmVhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAmX19pbnB1dCxcbiAgJl9fdGV4dGFyZWEge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLCBcIlJvYm90b1wiO1xuXG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogIzgwN2M3YztcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgICBhbmltYXRpb246IHB1bHNlIDEuNXMgaW5maW5pdGUgYWx0ZXJuYXRlIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgICYtLWVycm9yIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjRkNGQ7XG4gICAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMjU1LCA3NywgNzcsIDAuNik7XG4gICAgICBhbmltYXRpb246XG4gICAgICAgIHNoYWtlIDAuM3MgZWFzZS1pbi1vdXQsXG4gICAgICAgIHB1bHNlLWVycm9yIDEuNXMgaW5maW5pdGUgYWx0ZXJuYXRlIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgICYtLWVycm9yOmZvY3VzIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjRkNGQ7XG4gICAgfVxuICB9XG5cbiAgJl9faW5wdXQge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG4gIH1cblxuICAmX190ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAmX19tZXNzYWdlLS1lcnJvciB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNmZjRkNGQ7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuICB9XG5cbiAgJl9fYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgICB9XG4gIH1cblxuICAmX19wYXJhZ3JhcGgge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG5cbiAgJl9fc29jaWFscy1tZWRpYSB7XG4gICAgJi1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgICYtaWNvbiB7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG5cbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTgsIDE4LCAxOCwgMC45NSk7XG4gICAgICBib3JkZXItd2lkdGg6IDFweCAwLjVweCAwLjVweCAxcHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjOWQ5YTlhO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgYnAucmVzcG9uc2l2ZShcIm1vdmlsIG1cIikge1xuICAuY29udGFjdCB7XG4gICAgJl9fY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAzMzBweDtcbiAgICB9XG4gIH1cbn1cbkBpbmNsdWRlIGJwLnJlc3BvbnNpdmUoXCJ0YWJsZXRcIikge1xuICAuY29udGFjdCB7XG5cbiAgICAmX19jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMC42ZnI7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgICAgbWFyZ2luOiAgMCAwIDIwcHg7XG5cbiAgICB9XG5cbiAgICAmX19mb3JtIHtcbiAgICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICAgIHdpZHRoOiA5MCU7XG5cbiAgICB9XG5cbiAgICAmX19ib3gtcmlnaHQge1xuICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgJl9fcGFyYWdyYXBoIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgICZfX3NvY2lhbHMtbWVkaWEge1xuICAgICAgJi1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICBcbiAgICAgICYtaWNvbiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgICYtaWNvbi1pbWcge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8474:
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceComponent: () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

function ExperienceComponent_For_5_For_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const function_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", function_r1, " ");
  }
}
function ExperienceComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 3)(1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5)(4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](9, ExperienceComponent_For_5_For_10_Template, 2, 1, "li", 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const experience_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r2.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r2.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r2.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](experience_r2.functions);
  }
}
class ExperienceComponent {
  constructor() {
    this.experiences = [{
      role: 'Profesional TI Junior (Área de Ciberseguridad)',
      company: 'A-ire Intervenido',
      time: '2024 - 2025',
      functions: ['Trabajó en la estandarización de desarrollo seguro usando OWASP TOP 10.', 'Resolución de casos de soporte a aplicaciones requeridas desde el enfoque de ciberseguridad.']
    }, {
      role: 'Desarrollador Fullstack',
      company: 'Orbita Ingenieros SAS',
      time: '2023 - 2024',
      functions: ['Desarrolló aplicaciones para control y gestión de información, además de la integración con equipos por protocolos como rstp, mqtt, entre otros y Modbus/TCP a un servidor OPC para almacenar y presentar la información de acuerdo a las necesidades. También se usó despliegue con pm2 y Nginx.']
    }, {
      role: 'Desarrollador Fullstack',
      company: 'Desarrollos & Proyectos SAS',
      time: '2021 - 2023',
      functions: ['Se desarrollaron módulos en un software, los cuales estaban enfocados a la gestión documental de la empresa. Con desarrollo de formularios dinámicos en Angular, backend en Laravel y estructuración de base de datos con SQL, lo que nos permitió la factibilidad y agilidad para recuperar la información.', 'Planificación e implementación del análisis de datos en una etapa temprana. Con la herramienta Google Analytics en la página principal.']
    }];
  }
  static {
    this.ɵfac = function ExperienceComponent_Factory(t) {
      return new (t || ExperienceComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperienceComponent,
      selectors: [["app-experience"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 0,
      consts: [["id", "experience", 1, "experiences"], [1, "experiences__container", "container-generic"], [1, "experiences__title"], [1, "experience__box"], [1, "experience__role"], [1, "experience__middle"], [1, "experience__company"], [1, "experience__time"], [1, "experience__functions"], [1, "experience__function"]],
      template: function ExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Experiencia laboral");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](4, ExperienceComponent_For_5_Template, 11, 3, "article", 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.experiences);
        }
      },
      styles: ["@media (min-width: 768px) {\n  .container-generic[_ngcontent-%COMP%] {\n    width: 600px !important;\n    height: 600px !important;\n  }\n}\n@media (min-width: 1024px) {\n  .container-generic[_ngcontent-%COMP%] {\n    width: 730px !important;\n  }\n}\n.experiences[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 100vh;\n  padding: 90px 15px 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  animation: slideUp 1s ease-in-out both;\n}\n.experiences__container[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 660px;\n}\n.experiences__title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 600;\n  width: 260px;\n  color: #ffffff;\n  margin: 0;\n  margin-bottom: 30px;\n}\n\n.experience__box[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 247px;\n  height: auto;\n  padding: 20px;\n  position: relative;\n  background: rgba(18, 18, 18, 0.95);\n  border-width: 1px 0.5px 0.5px 1px;\n  border-style: solid;\n  border-color: #9d9a9a;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 30px;\n  margin-bottom: 2px;\n}\n.experience__role[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0px;\n}\n.experience__middle[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 9px;\n  font-weight: 400;\n  display: flex;\n  justify-content: space-between;\n}\n.experience__functions[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  margin: 5px 0 0;\n}\n.experience__function[_ngcontent-%COMP%] {\n  color: #b6b3b3;\n  font-size: 11px;\n  font-weight: 300;\n}\n\n@media (min-width: 375px) {\n  .experiences__container[_ngcontent-%COMP%] {\n    width: 330px;\n  }\n}\n@media (min-width: 768px) {\n  .experiences__container[_ngcontent-%COMP%] {\n    display: grid;\n    place-content: center;\n  }\n  .experiences__title[_ngcontent-%COMP%] {\n    font-size: 48px;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXGJyZWFrcG9pbnQuc2NzcyIsImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0U7RUFNQTtJQUNFLHVCQUFBO0lBQ0Esd0JBQUE7RUNmRjtBQUNGO0FETUU7RUFhQTtJQUNFLHVCQUFBO0VDaEJGO0FBQ0Y7QUFSQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0FBVUY7QUFSRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBVUo7QUFQRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBU0o7O0FBSEU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQU1KO0FBSEU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUtKO0FBRkU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBSUo7QUFERTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUdKO0FBQUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FEM0RFO0VDK0RFO0lBQ0UsWUFBQTtFQUFKO0FBQ0Y7QURqRUU7RUN1RUU7SUFDRSxhQUFBO0lBQ0EscUJBQUE7RUFISjtFQU1FO0lBQ0UsZUFBQTtJQUNBLFdBQUE7RUFKSjtBQUNGIiwiZmlsZSI6ImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnJlYWtwb2ludHM6IChcclxuICBcIm1vdmlsIHNcIjogMzIwcHgsXHJcbiAgXCJtb3ZpbCBtXCI6IDM3NXB4LFxyXG4gIFwibW92aWwgbFwiOiA0MjVweCxcclxuICBcInRhYmxldFwiOiA3NjhweCxcclxuICBcImxhcHRvcFwiOiAxMDI0cHgsXHJcbiAgXCJsYXB0b3AgbFwiOiAxNDQwcHgsXHJcbiAgXCI0a1wiOiAyNTYwcHgsXHJcbikgIWRlZmF1bHQ7XHJcblxyXG5AbWl4aW4gcmVzcG9uc2l2ZSgkc2l6ZSkge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIHJlc3BvbnNpdmUoXCJ0YWJsZXRcIikge1xyXG4gIC5jb250YWluZXItZ2VuZXJpYyB7XHJcbiAgICB3aWR0aDogNjAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIHJlc3BvbnNpdmUoXCJsYXB0b3BcIikge1xyXG4gIC5jb250YWluZXItZ2VuZXJpYyB7XHJcbiAgICB3aWR0aDogNzMwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn0iLCJAdXNlIFwiLi4vLi4vYXNzZXRzL3N0eWxlcy9icmVha3BvaW50LnNjc3NcIiBhcyBicDtcblxuLmV4cGVyaWVuY2VzIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogOTBweCAxNXB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbmltYXRpb246IHNsaWRlVXAgMXMgZWFzZS1pbi1vdXQgYm90aDtcblxuICAmX19jb250YWluZXIge1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBoZWlnaHQ6IDY2MHB4O1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAyNjBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuXG59XG5cbi5leHBlcmllbmNlIHtcbiAgJl9fYm94IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjQ3cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgsIDE4LCAxOCwgMC45NSk7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMC41cHggMC41cHggMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjOWQ5YTlhO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cblxuICAmX19yb2xlIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gICZfX21pZGRsZSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gICZfX2Z1bmN0aW9ucyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbjogNXB4IDAgMDtcbiAgfVxuXG4gICZfX2Z1bmN0aW9uIHtcbiAgICBjb2xvcjogI2I2YjNiMztcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxufVxuXG5AaW5jbHVkZSBicC5yZXNwb25zaXZlKFwibW92aWwgbVwiKSB7XG4gIC5leHBlcmllbmNlcyB7XG4gICAgJl9fY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAzMzBweDtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgYnAucmVzcG9uc2l2ZShcInRhYmxldFwiKSB7XG4gIC5leHBlcmllbmNlcyB7XG4gICAgJl9fY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2JyZWFrcG9pbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdFO0VBTUE7SUFDRSx1QkFBQTtJQUNBLHdCQUFBO0VDZkY7QUFDRjtBRE1FO0VBYUE7SUFDRSx1QkFBQTtFQ2hCRjtBQUNGO0FBUkE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQVVGO0FBUkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQVVKO0FBUEU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQVNKOztBQUhFO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFNSjtBQUhFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFLSjtBQUZFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUlKO0FBREU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFHSjtBQUFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKOztBRDNERTtFQytERTtJQUNFLFlBQUE7RUFBSjtBQUNGO0FEakVFO0VDdUVFO0lBQ0UsYUFBQTtJQUNBLHFCQUFBO0VBSEo7RUFNRTtJQUNFLGVBQUE7SUFDQSxXQUFBO0VBSko7QUFDRjtBQUNBLDRtSUFBNG1JIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnRzOiAoXHJcbiAgXCJtb3ZpbCBzXCI6IDMyMHB4LFxyXG4gIFwibW92aWwgbVwiOiAzNzVweCxcclxuICBcIm1vdmlsIGxcIjogNDI1cHgsXHJcbiAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgXCJsYXB0b3BcIjogMTAyNHB4LFxyXG4gIFwibGFwdG9wIGxcIjogMTQ0MHB4LFxyXG4gIFwiNGtcIjogMjU2MHB4LFxyXG4pICFkZWZhdWx0O1xyXG5cclxuQG1peGluIHJlc3BvbnNpdmUoJHNpemUpIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSByZXNwb25zaXZlKFwidGFibGV0XCIpIHtcclxuICAuY29udGFpbmVyLWdlbmVyaWMge1xyXG4gICAgd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSByZXNwb25zaXZlKFwibGFwdG9wXCIpIHtcclxuICAuY29udGFpbmVyLWdlbmVyaWMge1xyXG4gICAgd2lkdGg6IDczMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59IiwiQHVzZSBcIi4uLy4uL2Fzc2V0cy9zdHlsZXMvYnJlYWtwb2ludC5zY3NzXCIgYXMgYnA7XG5cbi5leHBlcmllbmNlcyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDkwcHggMTVweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDFzIGVhc2UtaW4tb3V0IGJvdGg7XG5cbiAgJl9fY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgaGVpZ2h0OiA2NjBweDtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxufVxuXG4uZXhwZXJpZW5jZSB7XG4gICZfX2JveCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDI0N3B4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxOCwgMTgsIDAuOTUpO1xuICAgIGJvcmRlci13aWR0aDogMXB4IDAuNXB4IDAuNXB4IDFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzlkOWE5YTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG5cbiAgJl9fcm9sZSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cblxuICAmX19taWRkbGUge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAmX19mdW5jdGlvbnMge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBtYXJnaW46IDVweCAwIDA7XG4gIH1cblxuICAmX19mdW5jdGlvbiB7XG4gICAgY29sb3I6ICNiNmIzYjM7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbn1cblxuQGluY2x1ZGUgYnAucmVzcG9uc2l2ZShcIm1vdmlsIG1cIikge1xuICAuZXhwZXJpZW5jZXMge1xuICAgICZfX2NvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMzMwcHg7XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIGJwLnJlc3BvbnNpdmUoXCJ0YWJsZXRcIikge1xuICAuZXhwZXJpZW5jZXMge1xuICAgICZfX2NvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgICZfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7824:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);



class HomeComponent {
  constructor(http) {
    this.http = http;
  }
  downloadCurriculum() {
    const url = 'assets/files/Braynner Polo Curriculum vitae - English.pdf'; // reemplaza con la ruta del archivo que deseas descargar
    this.http.get(url, {
      responseType: 'blob'
    }).subscribe(response => {
      const urlObject = URL.createObjectURL(response);
      const a = document.createElement('a');
      a.href = urlObject;
      a.download = 'Braynner Polo Curriculum vitae.pdf'; // reemplaza con el nombre que deseas dar al archivo descargado
      a.click();
      URL.revokeObjectURL(urlObject);
    });
  }
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 0,
      consts: [["id", "home", 1, "home"], [1, "home__container", "container-generic"], [1, "home__phrase"], [1, "home__description"], ["routerLink", "/contact", 1, "home__button"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Tu idea y mi c\u00F3digo para crear soluciones digitales que hacen la diferencia ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Soy Braynner Polo, desarrollador web y estoy emocionado de lo que podemos contruir juntos ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "conversemos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["@media (min-width: 768px) {\n  .container-generic[_ngcontent-%COMP%] {\n    width: 600px !important;\n    height: 600px !important;\n  }\n}\n@media (min-width: 1024px) {\n  .container-generic[_ngcontent-%COMP%] {\n    width: 730px !important;\n  }\n}\n.home[_ngcontent-%COMP%] {\n  color: #fff;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  animation: slideUp 1s ease-in-out both;\n}\n.home__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.home__phrase[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 600;\n  margin-bottom: 30px;\n  width: 274px;\n}\n.home__description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 40px;\n  width: 170px;\n}\n.home__button[_ngcontent-%COMP%] {\n  border: none;\n  width: 200px;\n  height: 50px;\n  background: #0fd7cb;\n  border-radius: 25px;\n  color: #fff;\n  font-size: 16px;\n  animation: pulse 1.5s infinite alternate ease-in-out;\n}\n.home__button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n}\n\n@media (min-width: 768px) {\n  .home__phrase[_ngcontent-%COMP%] {\n    width: 600px;\n    margin: 0 0 20px;\n  }\n  .home__description[_ngcontent-%COMP%] {\n    width: 300px;\n    margin: 0 0 20px;\n  }\n}\n@media (min-width: 1024px) {\n  .home__phrase[_ngcontent-%COMP%] {\n    font-size: 36px;\n    width: 100%;\n    margin: 0 0 20px;\n  }\n  .home__description[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 530px;\n    margin: 0 0 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXGJyZWFrcG9pbnQuc2NzcyIsImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0U7RUFNQTtJQUNFLHVCQUFBO0lBQ0Esd0JBQUE7RUNmRjtBQUNGO0FETUU7RUFhQTtJQUNFLHVCQUFBO0VDaEJGO0FBQ0Y7QUFSQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0FBVUY7QUFQRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVNKO0FBTkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFRSjtBQUxFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBT0o7QUFKRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9EQUFBO0FBTUo7QUFKSTtFQUNFLHNCQUFBO0FBTU47O0FEeENFO0VDMENFO0lBQ0UsWUFBQTtJQUNBLGdCQUFBO0VBRUo7RUFFRTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtFQUFKO0FBQ0Y7QURuREU7RUN5REU7SUFDRSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VBSEo7RUFPRTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUFMSjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnJlYWtwb2ludHM6IChcclxuICBcIm1vdmlsIHNcIjogMzIwcHgsXHJcbiAgXCJtb3ZpbCBtXCI6IDM3NXB4LFxyXG4gIFwibW92aWwgbFwiOiA0MjVweCxcclxuICBcInRhYmxldFwiOiA3NjhweCxcclxuICBcImxhcHRvcFwiOiAxMDI0cHgsXHJcbiAgXCJsYXB0b3AgbFwiOiAxNDQwcHgsXHJcbiAgXCI0a1wiOiAyNTYwcHgsXHJcbikgIWRlZmF1bHQ7XHJcblxyXG5AbWl4aW4gcmVzcG9uc2l2ZSgkc2l6ZSkge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIHJlc3BvbnNpdmUoXCJ0YWJsZXRcIikge1xyXG4gIC5jb250YWluZXItZ2VuZXJpYyB7XHJcbiAgICB3aWR0aDogNjAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIHJlc3BvbnNpdmUoXCJsYXB0b3BcIikge1xyXG4gIC5jb250YWluZXItZ2VuZXJpYyB7XHJcbiAgICB3aWR0aDogNzMwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn0iLCJAdXNlICcuLi8uLi9hc3NldHMvc3R5bGVzL2JyZWFrcG9pbnQnIGFzIGJwO1xuXG4uaG9tZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDFzIGVhc2UtaW4tb3V0IGJvdGg7XG5cblxuICAmX19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICZfX3BocmFzZSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogMjc0cHg7XG4gIH1cblxuICAmX19kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB3aWR0aDogMTcwcHg7XG4gIH1cblxuICAmX19idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQ6ICMwZmQ3Y2I7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAxLjVzIGluZmluaXRlIGFsdGVybmF0ZSBlYXNlLWluLW91dDtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgYnAucmVzcG9uc2l2ZShcInRhYmxldFwiKSB7XG4gIC5ob21lIHtcblxuICAgICZfX3BocmFzZSB7XG4gICAgICB3aWR0aDogNjAwcHg7XG4gICAgICBtYXJnaW46IDAgMCAyMHB4O1xuXG4gICAgfVxuXG4gICAgJl9fZGVzY3JpcHRpb24ge1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgbWFyZ2luOiAwIDAgMjBweDtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgYnAucmVzcG9uc2l2ZShcImxhcHRvcFwiKSB7XG4gIC5ob21lIHtcbiAgICAmX19waHJhc2Uge1xuICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDAgMCAyMHB4O1xuXG4gICAgfVxuXG4gICAgJl9fZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgd2lkdGg6IDUzMHB4O1xuICAgICAgbWFyZ2luOiAwIDAgMjBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2JyZWFrcG9pbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdFO0VBTUE7SUFDRSx1QkFBQTtJQUNBLHdCQUFBO0VDZkY7QUFDRjtBRE1FO0VBYUE7SUFDRSx1QkFBQTtFQ2hCRjtBQUNGO0FBUkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQVVGO0FBUEU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFTSjtBQU5FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBUUo7QUFMRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQU9KO0FBSkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvREFBQTtBQU1KO0FBSkk7RUFDRSxzQkFBQTtBQU1OOztBRHhDRTtFQzBDRTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtFQUVKO0VBRUU7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUFBSjtBQUNGO0FEbkRFO0VDeURFO0lBQ0UsZUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQUhKO0VBT0U7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBTEo7QUFDRjtBQUNBLG9tSEFBb21IIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnRzOiAoXHJcbiAgXCJtb3ZpbCBzXCI6IDMyMHB4LFxyXG4gIFwibW92aWwgbVwiOiAzNzVweCxcclxuICBcIm1vdmlsIGxcIjogNDI1cHgsXHJcbiAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgXCJsYXB0b3BcIjogMTAyNHB4LFxyXG4gIFwibGFwdG9wIGxcIjogMTQ0MHB4LFxyXG4gIFwiNGtcIjogMjU2MHB4LFxyXG4pICFkZWZhdWx0O1xyXG5cclxuQG1peGluIHJlc3BvbnNpdmUoJHNpemUpIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSByZXNwb25zaXZlKFwidGFibGV0XCIpIHtcclxuICAuY29udGFpbmVyLWdlbmVyaWMge1xyXG4gICAgd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSByZXNwb25zaXZlKFwibGFwdG9wXCIpIHtcclxuICAuY29udGFpbmVyLWdlbmVyaWMge1xyXG4gICAgd2lkdGg6IDczMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59IiwiQHVzZSAnLi4vLi4vYXNzZXRzL3N0eWxlcy9icmVha3BvaW50JyBhcyBicDtcblxuLmhvbWUge1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogc2xpZGVVcCAxcyBlYXNlLWluLW91dCBib3RoO1xuXG5cbiAgJl9fY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAmX19waHJhc2Uge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgd2lkdGg6IDI3NHB4O1xuICB9XG5cbiAgJl9fZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgd2lkdGg6IDE3MHB4O1xuICB9XG5cbiAgJl9fYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMGZkN2NiO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGFuaW1hdGlvbjogcHVsc2UgMS41cyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIGJwLnJlc3BvbnNpdmUoXCJ0YWJsZXRcIikge1xuICAuaG9tZSB7XG5cbiAgICAmX19waHJhc2Uge1xuICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgbWFyZ2luOiAwIDAgMjBweDtcblxuICAgIH1cblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIGJwLnJlc3BvbnNpdmUoXCJsYXB0b3BcIikge1xuICAuaG9tZSB7XG4gICAgJl9fcGhyYXNlIHtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwIDAgMjBweDtcblxuICAgIH1cblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHdpZHRoOiA1MzBweDtcbiAgICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5168:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _commons_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commons/components/navbar/navbar.component */ 8912);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




class MainPageComponent {
  static {
    this.ɵfac = function MainPageComponent_Factory(t) {
      return new (t || MainPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MainPageComponent,
      selectors: [["app-main-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 0,
      template: function MainPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar")(2, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_commons_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
      styles: [".main[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoibWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDQSw0VUFBNFUiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1407:
/*!*******************************************************!*\
  !*** ./src/app/projects/project/project.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectComponent: () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ProjectComponent {
  static {
    this.ɵfac = function ProjectComponent_Factory(t) {
      return new (t || ProjectComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectComponent,
      selectors: [["app-project"]],
      inputs: {
        project: "project"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 3,
      consts: [[1, "project"], [1, "project__header"], ["alt", "imagen proyecto gestoring task", 1, "project__imagen", 3, "src"], [1, "project__title"], [1, "project__description"]],
      template: function ProjectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0)(1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.project.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.description);
        }
      },
      styles: [".project[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 30px 20px 40px;\n  width: 250px;\n  height: 260px;\n  background: rgba(18, 18, 18, 0.95);\n  border-width: 1px 0.5px 0.5px 1px;\n  border-style: solid;\n  border-color: #9d9a9a;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 30px;\n}\n.project__header[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  height: 72px;\n  background: #f3efef;\n  border: 0.5px solid #9d9a9a;\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.project__imagen[_ngcontent-%COMP%] {\n  width: 113px;\n  height: 45px;\n}\n.project__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 0px;\n  color: #ffffff;\n}\n.project__description[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #807c7c;\n  width: 173px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBRkoiLCJmaWxlIjoicHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMzBweCAyMHB4IDQwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxOCwgMTgsIDE4LCAwLjk1KTtcbiAgYm9yZGVyLXdpZHRoOiAxcHggMC41cHggMC41cHggMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICM5ZDlhOWE7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG5cbiAgJl9faGVhZGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjNlZmVmO1xuICAgIGJvcmRlcjogMC41cHggc29saWQgIzlkOWE5YTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAmX19pbWFnZW4ge1xuICAgIHdpZHRoOiAxMTNweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gICZfX2Rlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6ICM4MDdjN2M7XG4gICAgd2lkdGg6IDE3M3B4O1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBREo7QUFJRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUZKO0FBQ0EsdzNEQUF3M0QiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDMwcHggMjBweCA0MHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjYwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTgsIDE4LCAxOCwgMC45NSk7XG4gIGJvcmRlci13aWR0aDogMXB4IDAuNXB4IDAuNXB4IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjOWQ5YTlhO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuXG4gICZfX2hlYWRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgYmFja2dyb3VuZDogI2YzZWZlZjtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICM5ZDlhOWE7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgJl9faW1hZ2VuIHtcbiAgICB3aWR0aDogMTEzcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAmX19kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjODA3YzdjO1xuICAgIHdpZHRoOiAxNzNweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3074:
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project/project.component */ 1407);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




function ProjectsComponent_app_project_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-project", 6);
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("project", project_r1);
  }
}
class ProjectsComponent {
  constructor() {
    this.projects = [{
      name: 'Gestoring Task',
      description: 'Es un proyecto en el que implementaron estrategias como Movil First y RxJs para gestión de estados.',
      image: 'assets/images/projects/gestoring-task.png',
      alt: 'f',
      url: 'c'
    }
    /* {
      name: 'SmartCity',
      description:
        'Este proyecto con fines académicos, es una solución que permite de forma gráfica e intuitiva interactuar con varias soluciones de alta tecnología desde la geolocación de vehículos para el monitarie de tráfico, control de luminarias y control de luces hasta un cubrimiento IoT de la ciudad de forma holística.',
      image: 'assets/images/projects/smartdashboard.JPEG',
      alt: 'f',
      url: 'c',
    }, */
    /*     {
      name: 'Convicción & Coraje',
      description:
        'Esta es una tienda de ropa enfocada netametne a la ropa para cabelleros. \n Es un estilo muy clásico y moderno, hasta un poco atemporal me atrevería a decir. Lo interesante en la dinámica de esta tienda es que es muy innovadora buscaban darle forma la realidad aumentada de la ropa para una experiencia más divertida. \n Es una tienda muy especial y de la mejor calidad.',
      image: 'assets/images/projects/smartdashboard.jpg',
      alt: '<a href="https://www.freepik.com/free-ai-image/black-suit-man-street-photography_93557991.htm#fromView=image_search_similar&page=1&position=0&uuid=e537fc3a-54ad-4a96-b68e-778ff8ac5821">Image by vector_corp on Freepik</a>',
      url: 'https://convicción-coraje.netlify.app/',
    },
    {
      name: 'AI-ARBoard',
      description:
        'Este es un proyecto que tiene como objetivo brindar una herramienta a las mentes con visión futurista y de la mano con ai y AR. \n Esta herramienta le permite a las personas ver de una manera más fluida su espacialidad, permite la capacidad de trabajo en equipo y abre las puertas un nuevo paradigma para la interacción con la simbiosis entre los seres humanos y la tecnología',
      image: 'assets/images/projects/ai-arboard.jpg',
      alt: '<a href="https://www.freepik.com/free-ai-image/beauty-digital-art-through-immersive-experiences_138695766.htm#fromView=search&page=1&position=15&uuid=ef0336da-928a-41fb-a5f1-ba16049a1ce6">Image by freepik</a>',
      url: 'https://ai-arboard.netlify.app/',
    }, */];
  }
  static {
    this.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 1,
      consts: [["id", "projects", 1, "projects"], [1, "projects__container", "container-generic"], [1, "projects__text-container"], [1, "projects__title"], [1, "projects__paragraph"], ["class", "projects__project", 3, "project", 4, "ngFor", "ngForOf"], [1, "projects__project", 3, "project"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Proyectos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Algunos de las soluciones en la que he trabajado y con las cuales he adquirido experiencia ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProjectsComponent_app_project_7_Template, 1, 1, "app-project", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projects);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _project_project_component__WEBPACK_IMPORTED_MODULE_0__.ProjectComponent],
      styles: ["@media (min-width: 768px) {\n  .container-generic[_ngcontent-%COMP%] {\n    width: 600px !important;\n    height: 600px !important;\n  }\n}\n@media (min-width: 1024px) {\n  .container-generic[_ngcontent-%COMP%] {\n    width: 730px !important;\n  }\n}\n.projects[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  animation: slideUp 1s ease-in-out both;\n}\n.projects__container[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 660px;\n}\n.projects__title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 600;\n  color: #ffffff;\n  width: 250px;\n}\n.projects__paragraph[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n  color: #ffffff;\n  width: 250px;\n  margin-bottom: 70px;\n}\n\n@media (min-width: 768px) {\n  .projects[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .projects__container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 30px;\n    place-content: center;\n  }\n  .projects__title[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 10px;\n    font-size: 48px;\n  }\n  .projects__paragraph[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .projects__text-container[_ngcontent-%COMP%] {\n    place-self: end;\n    width: 250px;\n    grid-column: 2/3;\n  }\n  .projects__project[_ngcontent-%COMP%] {\n    grid-column: 1/2;\n    grid-row: 1/2;\n  }\n}\n@media (min-width: 1024px) {\n  .projects__title[_ngcontent-%COMP%] {\n    padding-top: 0;\n    font-size: 48px;\n  }\n  .projects__text-container[_ngcontent-%COMP%] {\n    place-self: center;\n  }\n  .projects__project[_ngcontent-%COMP%] {\n    place-self: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXGJyZWFrcG9pbnQuc2NzcyIsInByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdFO0VBTUE7SUFDRSx1QkFBQTtJQUNBLHdCQUFBO0VDZkY7QUFDRjtBRE1FO0VBYUE7SUFDRSx1QkFBQTtFQ2hCRjtBQUNGO0FBUkE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUFVRjtBQVJFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFVSjtBQVBFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFTSjtBQU5FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVFKOztBRHpCRTtFQ3dCQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFLRjtFQUhFO0lBQ0UsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsU0FBQTtJQUNBLHFCQUFBO0VBS0o7RUFERTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFHSjtFQUFFO0lBQ0UsZUFBQTtFQUVKO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBQ0o7RUFFRTtJQUNFLGdCQUFBO0lBQ0EsYUFBQTtFQUFKO0FBQ0Y7QUR6REU7RUNnRUU7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQUpKO0VBT0U7SUFDRSxrQkFBQTtFQUxKO0VBUUU7SUFDRSxrQkFBQTtFQU5KO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnJlYWtwb2ludHM6IChcclxuICBcIm1vdmlsIHNcIjogMzIwcHgsXHJcbiAgXCJtb3ZpbCBtXCI6IDM3NXB4LFxyXG4gIFwibW92aWwgbFwiOiA0MjVweCxcclxuICBcInRhYmxldFwiOiA3NjhweCxcclxuICBcImxhcHRvcFwiOiAxMDI0cHgsXHJcbiAgXCJsYXB0b3AgbFwiOiAxNDQwcHgsXHJcbiAgXCI0a1wiOiAyNTYwcHgsXHJcbikgIWRlZmF1bHQ7XHJcblxyXG5AbWl4aW4gcmVzcG9uc2l2ZSgkc2l6ZSkge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIHJlc3BvbnNpdmUoXCJ0YWJsZXRcIikge1xyXG4gIC5jb250YWluZXItZ2VuZXJpYyB7XHJcbiAgICB3aWR0aDogNjAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIHJlc3BvbnNpdmUoXCJsYXB0b3BcIikge1xyXG4gIC5jb250YWluZXItZ2VuZXJpYyB7XHJcbiAgICB3aWR0aDogNzMwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn0iLCJAdXNlIFwiLi4vLi4vYXNzZXRzL3N0eWxlcy9icmVha3BvaW50LnNjc3NcIiBhcyBicDtcblxuLnByb2plY3RzIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogc2xpZGVVcCAxcyBlYXNlLWluLW91dCBib3RoO1xuXG4gICZfX2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGhlaWdodDogNjYwcHg7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG5cbiAgJl9fcGFyYWdyYXBoIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgfVxuXG59XG5cblxuQGluY2x1ZGUgYnAucmVzcG9uc2l2ZShcInRhYmxldFwiKSB7XG4gIC5wcm9qZWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmX19jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgIGdhcDogMzBweDtcbiAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIH1cblxuICAgICZfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgIH1cblxuICAgICZfX3BhcmFncmFwaCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgJl9fdGV4dC1jb250YWluZXIge1xuICAgICAgcGxhY2Utc2VsZjogZW5kO1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIH1cblxuICAgICZfX3Byb2plY3Qge1xuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIH1cblxuICB9XG59XG5cbkBpbmNsdWRlIGJwLnJlc3BvbnNpdmUoXCJsYXB0b3BcIikge1xuICAucHJvamVjdHMge1xuICAgICZfX3RpdGxlIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgIH1cblxuICAgICZfX3RleHQtY29udGFpbmVyIHtcbiAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19wcm9qZWN0IHtcbiAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2JyZWFrcG9pbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0U7RUFNQTtJQUNFLHVCQUFBO0lBQ0Esd0JBQUE7RUNmRjtBQUNGO0FETUU7RUFhQTtJQUNFLHVCQUFBO0VDaEJGO0FBQ0Y7QUFSQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQVVGO0FBUkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQVVKO0FBUEU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQVNKO0FBTkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBUUo7O0FEekJFO0VDd0JBO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQUtGO0VBSEU7SUFDRSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxTQUFBO0lBQ0EscUJBQUE7RUFLSjtFQURFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQUdKO0VBQUU7SUFDRSxlQUFBO0VBRUo7RUFDRTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUFDSjtFQUVFO0lBQ0UsZ0JBQUE7SUFDQSxhQUFBO0VBQUo7QUFDRjtBRHpERTtFQ2dFRTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VBSko7RUFPRTtJQUNFLGtCQUFBO0VBTEo7RUFRRTtJQUNFLGtCQUFBO0VBTko7QUFDRjtBQUNBLHd3SEFBd3dIIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnRzOiAoXHJcbiAgXCJtb3ZpbCBzXCI6IDMyMHB4LFxyXG4gIFwibW92aWwgbVwiOiAzNzVweCxcclxuICBcIm1vdmlsIGxcIjogNDI1cHgsXHJcbiAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgXCJsYXB0b3BcIjogMTAyNHB4LFxyXG4gIFwibGFwdG9wIGxcIjogMTQ0MHB4LFxyXG4gIFwiNGtcIjogMjU2MHB4LFxyXG4pICFkZWZhdWx0O1xyXG5cclxuQG1peGluIHJlc3BvbnNpdmUoJHNpemUpIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSByZXNwb25zaXZlKFwidGFibGV0XCIpIHtcclxuICAuY29udGFpbmVyLWdlbmVyaWMge1xyXG4gICAgd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSByZXNwb25zaXZlKFwibGFwdG9wXCIpIHtcclxuICAuY29udGFpbmVyLWdlbmVyaWMge1xyXG4gICAgd2lkdGg6IDczMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59IiwiQHVzZSBcIi4uLy4uL2Fzc2V0cy9zdHlsZXMvYnJlYWtwb2ludC5zY3NzXCIgYXMgYnA7XG5cbi5wcm9qZWN0cyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbmltYXRpb246IHNsaWRlVXAgMXMgZWFzZS1pbi1vdXQgYm90aDtcblxuICAmX19jb250YWluZXIge1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBoZWlnaHQ6IDY2MHB4O1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuXG4gICZfX3BhcmFncmFwaCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gIH1cblxufVxuXG5cbkBpbmNsdWRlIGJwLnJlc3BvbnNpdmUoXCJ0YWJsZXRcIikge1xuICAucHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJl9fY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICBnYXA6IDMwcHg7XG4gICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICB9XG5cbiAgICAmX19wYXJhZ3JhcGgge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgICZfX3RleHQtY29udGFpbmVyIHtcbiAgICAgIHBsYWNlLXNlbGY6IGVuZDtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICB9XG5cbiAgICAmX19wcm9qZWN0IHtcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICB9XG5cbiAgfVxufVxuXG5AaW5jbHVkZSBicC5yZXNwb25zaXZlKFwibGFwdG9wXCIpIHtcbiAgLnByb2plY3RzIHtcbiAgICAmX190aXRsZSB7XG4gICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICB9XG5cbiAgICAmX190ZXh0LWNvbnRhaW5lciB7XG4gICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9fcHJvamVjdCB7XG4gICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1858:
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillComponent: () => (/* binding */ SkillComponent)
/* harmony export */ });
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ 6045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


const _c0 = (a0, a1) => ({
  "list-skills__scope--empty": a0,
  "list-skills__scope--full": a1
});
function SkillComponent_For_6_For_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scope_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, scope_r1 === 0, scope_r1 === 1));
  }
}
function SkillComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](2, SkillComponent_For_6_For_3_Template, 2, 5, ":svg:svg", 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r2.createArrayScopeSkill(skill_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r2.name);
  }
}
class SkillComponent {
  constructor() {
    this.skills_list = [{
      name: 'Angular',
      scope: 8
    }, {
      name: 'Node',
      scope: 7
    }, {
      name: 'Sequelize',
      scope: 6
    }, {
      name: 'HTML',
      scope: 8
    }, {
      name: 'Bootstrap',
      scope: 5
    }, {
      name: 'SCSS',
      scope: 5
    }, {
      name: 'Typescript',
      scope: 7
    }, {
      name: 'Figma',
      scope: 4
    }, {
      name: 'MySQL',
      scope: 8
    }];
    this.radarChartOptions = {
      responsive: true,
      borderColor: '#0A8D85',
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        r: {
          pointLabels: {
            display: false,
            font: {
              size: 10,
              // Reducir tamaño de la fuente
              weight: 'bold'
            }
          },
          min: 0,
          max: 10,
          ticks: {
            backdropColor: 'transparent',
            stepSize: 2,
            color: '#ffffff',
            font: {
              size: 4,
              weight: 'bold'
            }
          },
          grid: {
            color: '#807C7C',
            lineWidth: 2
          },
          angleLines: {
            color: '#807C7C',
            lineWidth: 2
          }
        }
      }
    };
    this.radarChartLabels = ['Comunicación asertiva', 'Adaptabilidad y aprendizaje continuo', 'Atención al detalle', 'Trabajo en equipo y Colaboración', 'Resolución de Problemas', 'Creatividad'];
    this.radarChartDatasets = [{
      data: [9, 8, 8, 8, 7, 9]
    }];
  }
  // Create an array scope of skills with 10 elements with value 0 if lenght is 10 and each element if scope is 8  create a array [1,1,1,1,1,1,1,1,0,0]
  createArrayScopeSkill(skill) {
    const arraySkill = new Array(10).fill(0, 0, 10);
    arraySkill.fill(1, 0, skill.scope);
    return arraySkill;
  }
  static {
    this.ɵfac = function SkillComponent_Factory(t) {
      return new (t || SkillComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillComponent,
      selectors: [["app-skills"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 25,
      vars: 4,
      consts: [["id", "skills", 1, "skills"], [1, "skills__container", "container-generic"], [1, "skills__title"], [1, "list-skills"], [1, "list-skills__item"], [1, "skills__paragraph"], [1, "skills__radar-container"], [1, "radar-title", "radar-title-ca"], [1, "radar-title", "radar-title-aac"], [1, "radar-title", "radar-title-ad"], [1, "radar-title", "radar-title-tc"], [1, "radar-title", "radar-title-rp"], [1, "radar-title", "radar-title-c"], ["baseChart", "", 3, "datasets", "options", "labels", "type"], [1, "list-skills__scope-container"], ["width", "7", "height", "7", "viewBox", "0 0 42 42", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "list-skills__scope", 3, "class"], [1, "list-skills__name"], ["width", "7", "height", "7", "viewBox", "0 0 42 42", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "list-skills__scope"], ["cx", "21.2295", "cy", "20.981", "r", "20.5", "fill", "CurrentColor"]],
      template: function SkillComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Habilidades");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](5, SkillComponent_For_6_Template, 6, 1, "li", 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Si bien, lo anterior est\u00E1 relacionado con la parte t\u00E9cnica, destacar\u00E9 algunas habilidades de poder que han sido parte esencial en mi crecimiento profesional y en la cuales he podido notar el impacto significativo en mi vida personal. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Comunicaci\u00F3n asertiva");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Adaptabilidad y aprendizaje continuo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Atenci\u00F3n al detalle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Trabajo en equipo y colaboraci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Resoluci\u00F3n ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "de problemas");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Creatividad");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "canvas", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.skills_list);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.radarChartDatasets)("options", ctx.radarChartOptions)("labels", ctx.radarChartLabels)("type", "radar");
        }
      },
      dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__.BaseChartDirective],
      styles: ["@media (min-width: 768px) {\n  .container-generic[_ngcontent-%COMP%] {\n    width: 600px !important;\n    height: 600px !important;\n  }\n}\n@media (min-width: 1024px) {\n  .container-generic[_ngcontent-%COMP%] {\n    width: 730px !important;\n  }\n}\n.skills[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: slideUp 1s ease-in-out both;\n}\n.skills__container[_ngcontent-%COMP%] {\n  width: 282px;\n}\n.skills__title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 600;\n  color: #ffffff;\n  margin: 0 10px;\n}\n.skills__paragraph[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 300;\n}\n.skills__radar-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 50px;\n  position: relative;\n  background: rgba(18, 18, 18, 0.95);\n  border-width: 1px 0.5px 0.5px 1px;\n  border-style: solid;\n  border-color: #9d9a9a;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 30px;\n  z-index: -2;\n  display: flex;\n  justify-content: center;\n}\n\n.list-skills[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 126px;\n  background: rgba(18, 18, 18, 0.95);\n  border-width: 1px 0.5px 0.5px 1px;\n  border-style: solid;\n  border-color: #9d9a9a;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 30px;\n  display: flex;\n  justify-content: space-between;\n  list-style-type: none;\n  padding: 20px;\n  margin: 10px 0 0;\n}\n.list-skills__item[_ngcontent-%COMP%] {\n  width: 28px;\n}\n.list-skills__name[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 6px;\n  font-weight: 600;\n  height: 14%;\n  padding: 0;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.list-skills__scope-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  height: 86%;\n}\n.list-skills__scope[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 0 0 1px;\n  width: 100%;\n}\n.list-skills__scope--full[_ngcontent-%COMP%] {\n  color: #0a8d85;\n}\n.list-skills__scope--empty[_ngcontent-%COMP%] {\n  color: #162827;\n}\n\n.radar-title[_ngcontent-%COMP%] {\n  font-size: 8px;\n  position: absolute;\n  z-index: -1;\n}\n.radar-title-ca[_ngcontent-%COMP%] {\n  width: 55px;\n  top: 30px;\n  left: 110px;\n  color: #ffffff;\n  text-align: center;\n}\n.radar-title-aac[_ngcontent-%COMP%] {\n  width: 60px;\n  top: 70px;\n  right: 20px;\n  color: #ffffff;\n  text-align: right;\n}\n.radar-title-ad[_ngcontent-%COMP%] {\n  width: 36px;\n  bottom: 70px;\n  right: 28px;\n  color: #ffffff;\n  text-align: right;\n}\n.radar-title-tc[_ngcontent-%COMP%] {\n  width: 76px;\n  bottom: 30px;\n  right: 100px;\n  color: #ffffff;\n  text-align: center;\n}\n.radar-title-rp[_ngcontent-%COMP%] {\n  width: 60px;\n  bottom: 70px;\n  left: 20px;\n  color: #ffffff;\n  text-align: left;\n}\n.radar-title-c[_ngcontent-%COMP%] {\n  top: 75px;\n  left: 20px;\n  color: #ffffff;\n  text-align: left;\n}\n\n@media (min-width: 375px) {\n  .skills__container[_ngcontent-%COMP%] {\n    width: 330px;\n  }\n  .list-skills__name[_ngcontent-%COMP%] {\n    font-size: 7px;\n  }\n  .radar-title[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .radar-title-ca[_ngcontent-%COMP%] {\n    width: 70px;\n    top: 25px;\n    left: 130px;\n  }\n  .radar-title-aac[_ngcontent-%COMP%] {\n    width: 70px;\n    top: 60px;\n    right: 26px;\n  }\n  .radar-title-ad[_ngcontent-%COMP%] {\n    width: 45px;\n    bottom: 80px;\n    right: 24px;\n  }\n  .radar-title-tc[_ngcontent-%COMP%] {\n    width: 90px;\n    bottom: 25px;\n    right: 120px;\n  }\n  .radar-title-rp[_ngcontent-%COMP%] {\n    width: 70px;\n    bottom: 80px;\n    left: 20px;\n  }\n  .radar-title-c[_ngcontent-%COMP%] {\n    top: 85px;\n    left: 15px;\n  }\n}\n@media (min-width: 425px) {\n  .radar-title-ca[_ngcontent-%COMP%] {\n    left: 130px;\n  }\n  .radar-title-aac[_ngcontent-%COMP%] {\n    right: 15px;\n  }\n  .radar-title-ad[_ngcontent-%COMP%] {\n    bottom: 90px;\n  }\n  .radar-title-tc[_ngcontent-%COMP%] {\n    right: 120px;\n  }\n  .radar-title-rp[_ngcontent-%COMP%] {\n    bottom: 80px;\n  }\n  .radar-title-c[_ngcontent-%COMP%] {\n    top: 90px;\n  }\n}\n@media (min-width: 768px) {\n  .skills__title[_ngcontent-%COMP%] {\n    margin-top: 70px;\n    font-size: 48px;\n  }\n  .skills__container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: auto 0.3fr 210px;\n    grid-template-rows: 0.1fr 0.2fr 210px;\n    gap: 1rem;\n    place-content: center;\n  }\n  .skills__paragraph[_ngcontent-%COMP%] {\n    place-self: start;\n    padding-left: 0px;\n    grid-column: 1/3;\n    font-size: 20px;\n    width: 100%;\n  }\n  .skills__radar-container[_ngcontent-%COMP%] {\n    width: 210px;\n  }\n  .skills__scope-container[_ngcontent-%COMP%] {\n    grid-column: 3/3;\n  }\n  .list-skills[_ngcontent-%COMP%] {\n    grid-column: 1/4;\n    height: 182px;\n    width: 100%;\n    align-items: center;\n  }\n  .list-skills__item[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n  .list-skills__name[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .list-skills__scope[_ngcontent-%COMP%] {\n    height: 11px;\n    width: 11px;\n  }\n  .radar-title[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n  .radar-title-ca[_ngcontent-%COMP%] {\n    left: 70px;\n  }\n  .radar-title-aac[_ngcontent-%COMP%] {\n    top: 50px;\n    right: 15px;\n  }\n  .radar-title-ad[_ngcontent-%COMP%] {\n    width: 40px;\n    right: 18px;\n    bottom: 70px;\n  }\n  .radar-title-tc[_ngcontent-%COMP%] {\n    right: 60px;\n  }\n  .radar-title-rp[_ngcontent-%COMP%] {\n    bottom: 60px;\n    left: 12px;\n  }\n  .radar-title-c[_ngcontent-%COMP%] {\n    top: 70px;\n    left: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXGJyZWFrcG9pbnQuc2NzcyIsInNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXRTtFQU1BO0lBQ0UsdUJBQUE7SUFDQSx3QkFBQTtFQ2ZGO0FBQ0Y7QURNRTtFQWFBO0lBQ0UsdUJBQUE7RUNoQkY7QUFDRjtBQVJBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUFVRjtBQVJFO0VBQ0UsWUFBQTtBQVVKO0FBUEU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVNKO0FBTkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUUo7QUFMRTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQU9KOztBQUhBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFLRjtBQUhFO0VBQ0UsV0FBQTtBQUtKO0FBRkU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQUlKO0FBREU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFHSjtBQUFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBRUo7QUFBSTtFQUNFLGNBQUE7QUFFTjtBQUFJO0VBQ0UsY0FBQTtBQUVOOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFGO0FBRUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBREo7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUZKO0FBS0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSko7QUFPRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTEo7O0FEaElFO0VDNklFO0lBQ0UsWUFBQTtFQVRKO0VBY0U7SUFDRSxjQUFBO0VBWko7RUFnQkE7SUFDRSxlQUFBO0VBZEY7RUFnQkU7SUFDRSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUFkSjtFQWlCRTtJQUNFLFdBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQWZKO0VBbUJFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBakJKO0VBcUJFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBbkJKO0VBc0JFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBcEJKO0VBdUJFO0lBQ0UsU0FBQTtJQUNBLFVBQUE7RUFyQko7QUFDRjtBRHpLRTtFQ3NNRTtJQUNFLFdBQUE7RUExQko7RUE2QkU7SUFDRSxXQUFBO0VBM0JKO0VBOEJFO0lBQ0UsWUFBQTtFQTVCSjtFQStCRTtJQUNFLFlBQUE7RUE3Qko7RUFnQ0U7SUFDRSxZQUFBO0VBOUJKO0VBaUNFO0lBQ0UsU0FBQTtFQS9CSjtBQUNGO0FEN0xFO0VDa09FO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VBbENKO0VBcUNFO0lBQ0UsYUFBQTtJQUNBLHVDQUFBO0lBQ0EscUNBQUE7SUFDQSxTQUFBO0lBQ0EscUJBQUE7RUFuQ0o7RUFzQ0U7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQXBDSjtFQXVDRTtJQUNFLFlBQUE7RUFyQ0o7RUF3Q0U7SUFDRSxnQkFBQTtFQXRDSjtFQTBDQTtJQUNFLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQXhDRjtFQTBDRTtJQUNFLFdBQUE7RUF4Q0o7RUEyQ0U7SUFDRSxlQUFBO0VBekNKO0VBNENFO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUExQ0o7RUE4Q0E7SUFDRSxjQUFBO0VBNUNGO0VBNkNFO0lBQ0UsVUFBQTtFQTNDSjtFQThDRTtJQUNFLFNBQUE7SUFDQSxXQUFBO0VBNUNKO0VBK0NFO0lBQ0UsV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBN0NKO0VBZ0RFO0lBQ0UsV0FBQTtFQTlDSjtFQWlERTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VBL0NKO0VBa0RFO0lBQ0UsU0FBQTtJQUNBLFVBQUE7RUFoREo7QUFDRiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnJlYWtwb2ludHM6IChcclxuICBcIm1vdmlsIHNcIjogMzIwcHgsXHJcbiAgXCJtb3ZpbCBtXCI6IDM3NXB4LFxyXG4gIFwibW92aWwgbFwiOiA0MjVweCxcclxuICBcInRhYmxldFwiOiA3NjhweCxcclxuICBcImxhcHRvcFwiOiAxMDI0cHgsXHJcbiAgXCJsYXB0b3AgbFwiOiAxNDQwcHgsXHJcbiAgXCI0a1wiOiAyNTYwcHgsXHJcbikgIWRlZmF1bHQ7XHJcblxyXG5AbWl4aW4gcmVzcG9uc2l2ZSgkc2l6ZSkge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHNpemUpKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIHJlc3BvbnNpdmUoXCJ0YWJsZXRcIikge1xyXG4gIC5jb250YWluZXItZ2VuZXJpYyB7XHJcbiAgICB3aWR0aDogNjAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIHJlc3BvbnNpdmUoXCJsYXB0b3BcIikge1xyXG4gIC5jb250YWluZXItZ2VuZXJpYyB7XHJcbiAgICB3aWR0aDogNzMwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn0iLCJAdXNlIFwiLi4vLi4vYXNzZXRzL3N0eWxlcy9icmVha3BvaW50LnNjc3NcIiBhcyBicDtcblxuLnNraWxscyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbmltYXRpb246IHNsaWRlVXAgMXMgZWFzZS1pbi1vdXQgYm90aDtcblxuICAmX19jb250YWluZXJ7XG4gICAgd2lkdGg6IDI4MnB4O1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG5cbiAgJl9fcGFyYWdyYXBoIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuXG4gICZfX3JhZGFyLWNvbnRhaW5lciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxOCwgMTgsIDAuOTUpO1xuICAgIGJvcmRlci13aWR0aDogMXB4IDAuNXB4IDAuNXB4IDFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzlkOWE5YTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgei1pbmRleDogLTI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG4ubGlzdC1za2lsbHMge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDEyNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxOCwgMTgsIDAuOTUpO1xuICBib3JkZXItd2lkdGg6IDFweCAwLjVweCAwLjVweCAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzlkOWE5YTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcblxuICAmX19pdGVtIHtcbiAgICB3aWR0aDogMjhweDtcbiAgfVxuXG4gICZfX25hbWUge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgaGVpZ2h0OiAxNCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICZfX3Njb3BlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDg2JTtcbiAgfVxuXG4gICZfX3Njb3BlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAwIDAgMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJi0tZnVsbCB7XG4gICAgICBjb2xvcjogIzBhOGQ4NTtcbiAgICB9XG4gICAgJi0tZW1wdHkge1xuICAgICAgY29sb3I6ICMxNjI4Mjc7XG4gICAgfVxuICB9XG59XG5cbi5yYWRhci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuXG4gICYtY2Ege1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIHRvcDogMzBweDtcbiAgICBsZWZ0OiAxMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAmLWFhYyB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgdG9wOiA3MHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG5cbiAgJi1hZCB7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgYm90dG9tOiA3MHB4O1xuICAgIHJpZ2h0OiAyOHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG5cbiAgJi10YyB7XG4gICAgd2lkdGg6IDc2cHg7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIHJpZ2h0OiAxMDBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICB9XG5cbiAgJi1ycCB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgYm90dG9tOiA3MHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gICYtYyB7XG4gICAgdG9wOiA3NXB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG59XG5cbkBpbmNsdWRlIGJwLnJlc3BvbnNpdmUoXCJtb3ZpbCBtXCIpIHtcblxuICAuc2tpbGxzIHtcbiAgICAmX19jb250YWluZXIge1xuICAgICAgd2lkdGg6IDMzMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5saXN0LXNraWxscyB7XG4gICAgJl9fbmFtZSB7XG4gICAgICBmb250LXNpemU6IDdweDtcbiAgICB9XG4gIH1cblxuICAucmFkYXItdGl0bGV7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgJi1jYSB7XG4gICAgICB3aWR0aDogNzBweDtcbiAgICAgIHRvcDogMjVweDtcbiAgICAgIGxlZnQ6IDEzMHB4O1xuICAgIH1cblxuICAgICYtYWFjIHtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgdG9wOiA2MHB4O1xuICAgICAgcmlnaHQ6IDI2cHg7XG5cbiAgICB9XG5cbiAgICAmLWFkIHtcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgYm90dG9tOiA4MHB4O1xuICAgICAgcmlnaHQ6IDI0cHg7XG5cbiAgICB9XG5cbiAgICAmLXRjIHtcbiAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgYm90dG9tOiAyNXB4O1xuICAgICAgcmlnaHQ6IDEyMHB4O1xuICAgIH1cblxuICAgICYtcnAge1xuICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICBib3R0b206IDgwcHg7XG4gICAgICBsZWZ0OiAyMHB4O1xuICAgIH1cblxuICAgICYtYyB7XG4gICAgICB0b3A6IDg1cHg7XG4gICAgICBsZWZ0OiAxNXB4O1xuICAgIH1cbiAgfVxufVxuXG5AaW5jbHVkZSBicC5yZXNwb25zaXZlKFwibW92aWwgbFwiKSB7XG5cbiAgLnJhZGFyLXRpdGxle1xuXG4gICAgJi1jYSB7XG4gICAgICBsZWZ0OiAxMzBweDtcbiAgICB9XG5cbiAgICAmLWFhYyB7XG4gICAgICByaWdodDogMTVweDtcbiAgICB9XG5cbiAgICAmLWFkIHtcbiAgICAgIGJvdHRvbTogOTBweDtcbiAgICB9XG5cbiAgICAmLXRjIHtcbiAgICAgIHJpZ2h0OiAxMjBweDtcbiAgICB9XG5cbiAgICAmLXJwIHtcbiAgICAgIGJvdHRvbTogODBweDtcbiAgICB9XG5cbiAgICAmLWMge1xuICAgICAgdG9wOiA5MHB4O1xuICAgIH1cbiAgfVxufVxuXG5AaW5jbHVkZSBicC5yZXNwb25zaXZlKFwidGFibGV0XCIpIHtcbiAgLnNraWxsc3tcbiAgICAmX190aXRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgIH1cblxuICAgICZfX2NvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDAuM2ZyIDIxMHB4O1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjFmciAwLjJmciAyMTBweDtcbiAgICAgIGdhcDogMXJlbTtcbiAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19wYXJhZ3JhcGgge1xuICAgICAgcGxhY2Utc2VsZjogc3RhcnQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICZfX3JhZGFyLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMjEwcHg7XG4gICAgfVxuXG4gICAgJl9fc2NvcGUtY29udGFpbmVyIHtcbiAgICAgIGdyaWQtY29sdW1uOiAzIC8gMztcbiAgICB9XG4gIH1cblxuICAubGlzdC1za2lsbHMge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgICBoZWlnaHQ6IDE4MnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmX19pdGVtIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgIH1cblxuICAgICZfX25hbWUge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgICZfX3Njb3BlIHtcbiAgICAgIGhlaWdodDogMTFweDtcbiAgICAgIHdpZHRoOiAxMXB4O1xuICAgIH1cbiAgfVxuXG4gIC5yYWRhci10aXRsZXtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICAmLWNhIHtcbiAgICAgIGxlZnQ6IDcwcHg7XG4gICAgfVxuXG4gICAgJi1hYWMge1xuICAgICAgdG9wOiA1MHB4O1xuICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgfVxuXG4gICAgJi1hZCB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIHJpZ2h0OiAxOHB4O1xuICAgICAgYm90dG9tOiA3MHB4O1xuICAgIH1cblxuICAgICYtdGMge1xuICAgICAgcmlnaHQ6IDYwcHg7XG4gICAgfVxuXG4gICAgJi1ycCB7XG4gICAgICBib3R0b206IDYwcHg7XG4gICAgICBsZWZ0OiAxMnB4O1xuICAgIH1cblxuICAgICYtYyB7XG4gICAgICB0b3A6IDcwcHg7XG4gICAgICBsZWZ0OiAxMnB4O1xuICAgIH1cbiAgfVxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2JyZWFrcG9pbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXRTtFQU1BO0lBQ0UsdUJBQUE7SUFDQSx3QkFBQTtFQ2ZGO0FBQ0Y7QURNRTtFQWFBO0lBQ0UsdUJBQUE7RUNoQkY7QUFDRjtBQVJBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUFVRjtBQVJFO0VBQ0UsWUFBQTtBQVVKO0FBUEU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVNKO0FBTkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUUo7QUFMRTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQU9KOztBQUhBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFLRjtBQUhFO0VBQ0UsV0FBQTtBQUtKO0FBRkU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQUlKO0FBREU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFHSjtBQUFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBRUo7QUFBSTtFQUNFLGNBQUE7QUFFTjtBQUFJO0VBQ0UsY0FBQTtBQUVOOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFGO0FBRUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBREo7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUZKO0FBS0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSko7QUFPRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTEo7O0FEaElFO0VDNklFO0lBQ0UsWUFBQTtFQVRKO0VBY0U7SUFDRSxjQUFBO0VBWko7RUFnQkE7SUFDRSxlQUFBO0VBZEY7RUFnQkU7SUFDRSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUFkSjtFQWlCRTtJQUNFLFdBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQWZKO0VBbUJFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBakJKO0VBcUJFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBbkJKO0VBc0JFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBcEJKO0VBdUJFO0lBQ0UsU0FBQTtJQUNBLFVBQUE7RUFyQko7QUFDRjtBRHpLRTtFQ3NNRTtJQUNFLFdBQUE7RUExQko7RUE2QkU7SUFDRSxXQUFBO0VBM0JKO0VBOEJFO0lBQ0UsWUFBQTtFQTVCSjtFQStCRTtJQUNFLFlBQUE7RUE3Qko7RUFnQ0U7SUFDRSxZQUFBO0VBOUJKO0VBaUNFO0lBQ0UsU0FBQTtFQS9CSjtBQUNGO0FEN0xFO0VDa09FO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VBbENKO0VBcUNFO0lBQ0UsYUFBQTtJQUNBLHVDQUFBO0lBQ0EscUNBQUE7SUFDQSxTQUFBO0lBQ0EscUJBQUE7RUFuQ0o7RUFzQ0U7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQXBDSjtFQXVDRTtJQUNFLFlBQUE7RUFyQ0o7RUF3Q0U7SUFDRSxnQkFBQTtFQXRDSjtFQTBDQTtJQUNFLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQXhDRjtFQTBDRTtJQUNFLFdBQUE7RUF4Q0o7RUEyQ0U7SUFDRSxlQUFBO0VBekNKO0VBNENFO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUExQ0o7RUE4Q0E7SUFDRSxjQUFBO0VBNUNGO0VBNkNFO0lBQ0UsVUFBQTtFQTNDSjtFQThDRTtJQUNFLFNBQUE7SUFDQSxXQUFBO0VBNUNKO0VBK0NFO0lBQ0UsV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBN0NKO0VBZ0RFO0lBQ0UsV0FBQTtFQTlDSjtFQWlERTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VBL0NKO0VBa0RFO0lBQ0UsU0FBQTtJQUNBLFVBQUE7RUFoREo7QUFDRjtBQUNBLDRwVUFBNHBVIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnRzOiAoXHJcbiAgXCJtb3ZpbCBzXCI6IDMyMHB4LFxyXG4gIFwibW92aWwgbVwiOiAzNzVweCxcclxuICBcIm1vdmlsIGxcIjogNDI1cHgsXHJcbiAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgXCJsYXB0b3BcIjogMTAyNHB4LFxyXG4gIFwibGFwdG9wIGxcIjogMTQ0MHB4LFxyXG4gIFwiNGtcIjogMjU2MHB4LFxyXG4pICFkZWZhdWx0O1xyXG5cclxuQG1peGluIHJlc3BvbnNpdmUoJHNpemUpIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSByZXNwb25zaXZlKFwidGFibGV0XCIpIHtcclxuICAuY29udGFpbmVyLWdlbmVyaWMge1xyXG4gICAgd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSByZXNwb25zaXZlKFwibGFwdG9wXCIpIHtcclxuICAuY29udGFpbmVyLWdlbmVyaWMge1xyXG4gICAgd2lkdGg6IDczMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59IiwiQHVzZSBcIi4uLy4uL2Fzc2V0cy9zdHlsZXMvYnJlYWtwb2ludC5zY3NzXCIgYXMgYnA7XG5cbi5za2lsbHMge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDFzIGVhc2UtaW4tb3V0IGJvdGg7XG5cbiAgJl9fY29udGFpbmVye1xuICAgIHdpZHRoOiAyODJweDtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxuXG4gICZfX3BhcmFncmFwaCB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICAmX19yYWRhci1jb250YWluZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxOCwgMTgsIDE4LCAwLjk1KTtcbiAgICBib3JkZXItd2lkdGg6IDFweCAwLjVweCAwLjVweCAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICM5ZDlhOWE7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHotaW5kZXg6IC0yO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLmxpc3Qtc2tpbGxzIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxMjZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxOCwgMTgsIDE4LCAwLjk1KTtcbiAgYm9yZGVyLXdpZHRoOiAxcHggMC41cHggMC41cHggMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICM5ZDlhOWE7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMTBweCAwIDA7XG5cbiAgJl9faXRlbSB7XG4gICAgd2lkdGg6IDI4cHg7XG4gIH1cblxuICAmX19uYW1lIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGhlaWdodDogMTQlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAmX19zY29wZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4NiU7XG4gIH1cblxuICAmX19zY29wZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAwIDFweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICYtLWZ1bGwge1xuICAgICAgY29sb3I6ICMwYThkODU7XG4gICAgfVxuICAgICYtLWVtcHR5IHtcbiAgICAgIGNvbG9yOiAjMTYyODI3O1xuICAgIH1cbiAgfVxufVxuXG4ucmFkYXItdGl0bGUge1xuICBmb250LXNpemU6IDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcblxuICAmLWNhIHtcbiAgICB3aWR0aDogNTVweDtcbiAgICB0b3A6IDMwcHg7XG4gICAgbGVmdDogMTEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgJi1hYWMge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHRvcDogNzBweDtcbiAgICByaWdodDogMjBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gICYtYWQge1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGJvdHRvbTogNzBweDtcbiAgICByaWdodDogMjhweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gICYtdGMge1xuICAgIHdpZHRoOiA3NnB4O1xuICAgIGJvdHRvbTogMzBweDtcbiAgICByaWdodDogMTAwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgfVxuXG4gICYtcnAge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGJvdHRvbTogNzBweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAmLWMge1xuICAgIHRvcDogNzVweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxufVxuXG5AaW5jbHVkZSBicC5yZXNwb25zaXZlKFwibW92aWwgbVwiKSB7XG5cbiAgLnNraWxscyB7XG4gICAgJl9fY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAzMzBweDtcbiAgICB9XG4gIH1cblxuICAubGlzdC1za2lsbHMge1xuICAgICZfX25hbWUge1xuICAgICAgZm9udC1zaXplOiA3cHg7XG4gICAgfVxuICB9XG5cbiAgLnJhZGFyLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgICYtY2Ege1xuICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICB0b3A6IDI1cHg7XG4gICAgICBsZWZ0OiAxMzBweDtcbiAgICB9XG5cbiAgICAmLWFhYyB7XG4gICAgICB3aWR0aDogNzBweDtcbiAgICAgIHRvcDogNjBweDtcbiAgICAgIHJpZ2h0OiAyNnB4O1xuXG4gICAgfVxuXG4gICAgJi1hZCB7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICAgIGJvdHRvbTogODBweDtcbiAgICAgIHJpZ2h0OiAyNHB4O1xuXG4gICAgfVxuXG4gICAgJi10YyB7XG4gICAgICB3aWR0aDogOTBweDtcbiAgICAgIGJvdHRvbTogMjVweDtcbiAgICAgIHJpZ2h0OiAxMjBweDtcbiAgICB9XG5cbiAgICAmLXJwIHtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgYm90dG9tOiA4MHB4O1xuICAgICAgbGVmdDogMjBweDtcbiAgICB9XG5cbiAgICAmLWMge1xuICAgICAgdG9wOiA4NXB4O1xuICAgICAgbGVmdDogMTVweDtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgYnAucmVzcG9uc2l2ZShcIm1vdmlsIGxcIikge1xuXG4gIC5yYWRhci10aXRsZXtcblxuICAgICYtY2Ege1xuICAgICAgbGVmdDogMTMwcHg7XG4gICAgfVxuXG4gICAgJi1hYWMge1xuICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgfVxuXG4gICAgJi1hZCB7XG4gICAgICBib3R0b206IDkwcHg7XG4gICAgfVxuXG4gICAgJi10YyB7XG4gICAgICByaWdodDogMTIwcHg7XG4gICAgfVxuXG4gICAgJi1ycCB7XG4gICAgICBib3R0b206IDgwcHg7XG4gICAgfVxuXG4gICAgJi1jIHtcbiAgICAgIHRvcDogOTBweDtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgYnAucmVzcG9uc2l2ZShcInRhYmxldFwiKSB7XG4gIC5za2lsbHN7XG4gICAgJl9fdGl0bGUge1xuICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICB9XG5cbiAgICAmX19jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAwLjNmciAyMTBweDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMC4yZnIgMjEwcHg7XG4gICAgICBnYXA6IDFyZW07XG4gICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9fcGFyYWdyYXBoIHtcbiAgICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xuICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmX19yYWRhci1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDIxMHB4O1xuICAgIH1cblxuICAgICZfX3Njb3BlLWNvbnRhaW5lciB7XG4gICAgICBncmlkLWNvbHVtbjogMyAvIDM7XG4gICAgfVxuICB9XG5cbiAgLmxpc3Qtc2tpbGxzIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XG4gICAgaGVpZ2h0OiAxODJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJl9faXRlbSB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICB9XG5cbiAgICAmX19uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAmX19zY29wZSB7XG4gICAgICBoZWlnaHQ6IDExcHg7XG4gICAgICB3aWR0aDogMTFweDtcbiAgICB9XG4gIH1cblxuICAucmFkYXItdGl0bGV7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgJi1jYSB7XG4gICAgICBsZWZ0OiA3MHB4O1xuICAgIH1cblxuICAgICYtYWFjIHtcbiAgICAgIHRvcDogNTBweDtcbiAgICAgIHJpZ2h0OiAxNXB4O1xuICAgIH1cblxuICAgICYtYWQge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICByaWdodDogMThweDtcbiAgICAgIGJvdHRvbTogNzBweDtcbiAgICB9XG5cbiAgICAmLXRjIHtcbiAgICAgIHJpZ2h0OiA2MHB4O1xuICAgIH1cblxuICAgICYtcnAge1xuICAgICAgYm90dG9tOiA2MHB4O1xuICAgICAgbGVmdDogMTJweDtcbiAgICB9XG5cbiAgICAmLWMge1xuICAgICAgdG9wOiA3MHB4O1xuICAgICAgbGVmdDogMTJweDtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'https://personallandingbackend-production.up.railway.app/api'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config */ 289);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig).catch(err => console.log(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map