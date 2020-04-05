(function(t){function e(e){for(var n,s,r=e[0],h=e[1],l=e[2],u=0,c=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&c.push(o[s][0]),o[s]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);g&&g(e);while(c.length)c.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var h=i[r];0!==o[h]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],h=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var g=h;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("3396")},"8f4d":function(t,e,i){},aceb:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%"}},[i("label",{attrs:{for:"range"}},[t._v("Images per Row: ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.perRow,expression:"perRow"}],attrs:{id:"range",type:"range",min:"1",max:"10"},domProps:{value:t.perRow},on:{__r:function(e){t.perRow=e.target.value}}}),i("Gallery",{attrs:{images:t.images,"per-row":t.perRow,options:t.options}})],1)},o=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.amountOfRows,(function(e){return i("ImageRow",{key:e,staticClass:"postImageRow",attrs:{"border-style":t.borderStyle,width:t.width,height:t.height,images:t.images.slice((e-1)*t.perRow,e*t.perRow),amount:e},on:{click:t.imageClick}})})),1)},s=[],r=(i("8ab7"),i("bf68"),i("b451"),i("86c4"),i("1406"),i("0bc2"),i("2a95"),i("8cc3"),i("cf69")),h=i("04a7"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w-100 imagerow d-flex align-content-center"},t._l(t.images,(function(e,n){return i("div",{key:n,staticClass:"img-wrapper align-self-center overflow-hidden",style:t.widths[n]+" border: "+t.borderStyle+";",attrs:{"data-sub-html":e.text,"data-src":e.src}},[i("img",{staticClass:"h-100 w-100",attrs:{src:e.thumbnail,id:e.id,alt:e.text?e.text:" "},on:{click:function(i){return t.click(e)}}}),i("img",{staticClass:"h-100 w-100",style:t.getBackground(e),attrs:{src:e.src,alt:e.text?e.text:" "},on:{load:function(i){return t.loadImage(e)},click:function(i){return t.click(e)}}})])})),0)},g=[],u=(i("da6c"),i("df99"),{name:"ImageRow",props:["images","amount","width","height","borderStyle"],data:function(){return{widths:[],widestImage:null}},methods:{getWidth:function(t){var e=[],i={ratio:0},n=!0,o=!1,a=void 0;try{for(var s,r=this.images[Symbol.iterator]();!(n=(s=r.next()).done);n=!0){var h=s.value,l=parseInt(h.width)/parseInt(h.height);e.push(l),l>i.ratio&&(i.ratio=l,i.image=h)}}catch(m){o=!0,a=m}finally{try{n||null==r["return"]||r["return"]()}finally{if(o)throw a}}var g=e.reduce((function(t,e){return t+e})),u=e[t]/g*100,c=parseInt(i.image.width)/parseInt(i.image.height)/g*this.width,p=c/i.image.width,d=i.image.height*p;return"height: "+d+"px; width: "+u+"%;"},click:function(t){this.$emit("click",t)},loadImage:function(t){document.getElementById(t.id)&&document.getElementById(t.id).remove(),event.target.classList.add("loaded"),this.$emit("imageLoad",event)},getBackground:function(t){return"background-image: url('".concat(t.thumbnail_url,"');")}},watch:{images:function(){for(var t in this.widths=[],this.images)this.widths.push(this.getWidth(t))}},mounted:function(){for(var t in this.images)this.widths.push(this.getWidth(t))}}),c=u,p=(i("d4e2"),i("cdd7")),d=Object(p["a"])(c,l,g,!1,null,"5eaebd72",null),m=d.exports,w=i("ec26"),f={components:{ImageRow:m},props:["images","options","perRow"],methods:{imageClick:function(t){this.openIndex=this.images.indexOf(t)},handleResize:function(){var t=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout((function(){t.width=t.$el.getBoundingClientRect().width,t.height=t.$el.getBoundingClientRect().height}),300)}},watch:{perRow:function(){this.amountOfRows=Math.ceil(this.imgs.length/this.perRow)}},data:function(){return{imgs:[],amountOfRows:0,openIndex:-1,opt:null,width:1e3,height:1e3,resizeTimeout:null,borderStyle:"none"}},created:function(){if(Object(h["a"])(this.images)===Object(h["a"])([])){this.imgs=Object(r["a"])(this.images);var t=!0,e=!1,i=void 0;try{for(var n,o=this.imgs[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var a=n.value;a.id=Object(w["a"])()}}catch(s){e=!0,i=s}finally{try{t||null==o["return"]||o["return"]()}finally{if(e)throw i}}this.amountOfRows=Math.ceil(this.imgs.length/this.perRow),this.borderStyle=this.options.border?this.options.border:"none"}},mounted:function(){this.width=this.$el.getBoundingClientRect().width,this.height=this.$el.getBoundingClientRect().height,window.addEventListener("resize",this.handleResize)}},b=f,k=Object(p["a"])(b,a,s,!1,null,null,null),_=k.exports,y={components:{Gallery:_},data:function(){return{perRow:3,options:{border:"solid 1vw white"},images:[{height:4160,width:3120,src:"https://florianwenzel.github.io/stock_images/low-angle-shot-of-a-building-of-ancient-architecture-3097592.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/low-angle-shot-of-a-building-of-ancient-architecture-3097592.jpg"},{height:2e3,width:3e3,src:"https://florianwenzel.github.io/stock_images/white-concrete-houses-1531660.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/white-concrete-houses-1531660.jpg"},{height:3078,width:2462,src:"https://florianwenzel.github.io/stock_images/green-leafed-tree-in-a-park-surrounded-by-water-2456439.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/green-leafed-tree-in-a-park-surrounded-by-water-2456439.jpg"},{height:2259,width:3872,src:"https://florianwenzel.github.io/stock_images/scenic-view-of-mountains-320555.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/scenic-view-of-mountains-320555.jpg"},{height:2832,width:4256,src:"https://florianwenzel.github.io/stock_images/two-monks-walking-between-trees-750895.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/two-monks-walking-between-trees-750895.jpg"},{height:3e3,width:4342,src:"https://florianwenzel.github.io/stock_images/landscape-photography-of-montain-3027138.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/landscape-photography-of-montain-3027138.jpg"},{height:4897,width:3264,src:"https://florianwenzel.github.io/stock_images/close-up-photography-of-gray-bridge-2543253.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/close-up-photography-of-gray-bridge-2543253.jpg"},{height:3448,width:4592,src:"https://florianwenzel.github.io/stock_images/tilicho-lake-nepal-674865.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/tilicho-lake-nepal-674865.jpg"},{height:3376,width:5062,src:"https://florianwenzel.github.io/stock_images/houses-near-hill-3352873.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/houses-near-hill-3352873.jpg"},{height:5320,width:3547,src:"https://florianwenzel.github.io/stock_images/low-angle-shot-of-the-temple-732895.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/low-angle-shot-of-the-temple-732895.jpg"},{height:3648,width:5472,src:"https://florianwenzel.github.io/stock_images/aerial-photography-of-brown-mountain-ranges-and-lake-1449601.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/aerial-photography-of-brown-mountain-ranges-and-lake-1449601.jpg"},{height:5774,width:3537,src:"https://florianwenzel.github.io/stock_images/photo-of-ancient-building-3287165.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/photo-of-ancient-building-3287165.jpg"},{height:4e3,width:5600,src:"https://florianwenzel.github.io/stock_images/woman-wearing-yellow-and-red-traditional-dress-dancing-near-1274922.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/woman-wearing-yellow-and-red-traditional-dress-dancing-near-1274922.jpg"},{height:6e3,width:4e3,src:"https://florianwenzel.github.io/stock_images/black-donkey-on-a-road-2409958.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/black-donkey-on-a-road-2409958.jpg"},{height:6e3,width:4e3,src:"https://florianwenzel.github.io/stock_images/group-of-people-walking-beside-concrete-building-2102064.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/group-of-people-walking-beside-concrete-building-2102064.jpg"},{height:4e3,width:6e3,src:"https://florianwenzel.github.io/stock_images/red-and-brown-temple-roofs-2104882.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/red-and-brown-temple-roofs-2104882.jpg"},{height:4e3,width:6e3,src:"https://florianwenzel.github.io/stock_images/people-standing-near-building-2177708.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/people-standing-near-building-2177708.jpg"},{height:4e3,width:6e3,src:"https://florianwenzel.github.io/stock_images/white-horses-2856273.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/white-horses-2856273.jpg"},{height:4e3,width:6e3,src:"https://florianwenzel.github.io/stock_images/snow-capped-mountain-during-golden-hour-3142916.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/snow-capped-mountain-during-golden-hour-3142916.jpg"},{height:4084,width:8192,src:"https://florianwenzel.github.io/stock_images/photo-of-mountains-under-clouds-2902939.jpg",thumbnail:"https://florianwenzel.github.io/stock_images/thumbnails/photo-of-mountains-under-clouds-2902939.jpg"}]}}},j=y,v=Object(p["a"])(j,n,o,!1,null,"2b60bad1",null);e["a"]=v.exports},d4e2:function(t,e,i){"use strict";var n=i("8f4d"),o=i.n(n);o.a}});
//# sourceMappingURL=app.0c415b51.js.map