define(['exports'],function(a){'use strict';function b(){var a=require.context('@/layouts',!1,/^\.\/.*\.vue$/);return a.keys().map(a)}var d={loader:null,layoutDefault:'default',prefix:'layout'},e=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},f={},g={},h=!1;function i(a){var h=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};f=a;g=e({},d,h);b().forEach(function(b){b=b.default||b;a.component(g.prefix+'-'+b.name,b)})}function j(a){return f.compile('<'+g.prefix+'-'+a+' />')}function k(a,b){this.$options.render=a.render;this.$options.staticRenderFns=a.staticRenderFns;b&&(this.$forceUpdate(),h=!0)}var l={beforeCreate:function a(){var b=this;if(!g.loader){h=!0;return}setTimeout(function(){k.call(b,j(g.loader),!h)},2000)},created:function a(){h&&this.velRender()},watch:{'$route':'velRender'},methods:{velRender:function a(){var b=g.layoutDefault;this.$route.matched[0]&&this.$route.matched[0].meta.layout&&(b=this.$route.matched[0].meta.layout);k.call(this,j(b),!0)}}};a.VueExtendLayout=i;a.layout=l;Object.defineProperty(a,'__esModule',{value:!0})})
