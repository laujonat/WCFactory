!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("../rhelement/rhelement.umd.js"),require("../rh-icon/rh-icon.umd.js")):"function"==typeof define&&define.amd?define(["../rhelement/rhelement.umd.js","../rh-icon/rh-icon.umd.js"],n):n(e.RHElement)}(this,function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var o=function(){function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}}(),e=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,t),o(n,[{key:"html",get:function(){return'\n<style>\n:host {\n  display: flex;\n  align-content: flex-start; }\n\n:host rh-icon {\n  margin-right: var(--rhe-c-icon-panel__icon--MarginRight, 1rem);\n  font-size: var(--rhe-c-icon-panel__icon--size, 4rem);\n  line-height: var(--rhe-c-icon-panel__icon--size, 4rem); }\n\n:host ::slotted([slot="header"]),\n:host ::slotted([slot="footer"]) {\n  display: block; }\n\n:host ::slotted([slot="footer"]) {\n  margin-top: var(--rhe-c-icon-panel__footer--MarginTop, 16px); }\n</style>\n<rh-icon></rh-icon>\n<div class="content">\n  <slot class="header" name="header"></slot>\n  <slot class="body"></slot>\n  <slot class="footer" name="footer"></slot>\n</div>'}},{key:"styleUrl",get:function(){return"rh-icon-panel.scss"}},{key:"templateUrl",get:function(){return"rh-icon-panel.html"}}],[{key:"tag",get:function(){return"rh-icon-panel"}},{key:"observedAttributes",get:function(){return["icon"]}},{key:"cascadingAttributes",get:function(){return{icon:"rh-icon"}}}]),n}();t.create(e)});
//# sourceMappingURL=rh-icon-panel.umd.js.map