var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},t=e.parcelRequirec771;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){o[e]=r},e.parcelRequirec771=t),t.register("mFnXe",(function(e,r){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var o=function(e){var r="";switch(e){case 1:r="uno";break;case 2:r="dos";break;case 3:r="tres";break;case 4:r="cuatro";break;case 5:r="cinco";break;case 6:r="seis";break;case 7:r="siete";break;case 8:r="ocho";break;case 9:r="nueve"}return r};e.exports.default=o}));var n,a=(n=t("mFnXe"))&&n.__esModule?n:{default:n};var u=document.querySelector("#numero"),s=document.querySelector("#numeros-form"),i=document.querySelector("#resultado-div");s.addEventListener("submit",(function(e){e.preventDefault();var r=Number.parseInt(u.value);i.innerHTML="<p>"+(0,a.default)(r)+"</p>"}));
//# sourceMappingURL=index.2d809eb7.js.map