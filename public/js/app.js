!function(){"use strict";function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function t(){n(this,t);document.head.insertAdjacentHTML("beforeend","\n            <style>\n                p{\n                    color:red;\n                }\n            </style>\n        ")},r=function r(o){n(this,r),this.$el=o,new t,console.log(">>>",this.$el)};function o(n,t){return n(t={exports:{}},t.exports),t.exports}var e=o((function(n){!function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(n,t){return n<<t|n>>>32-t},rotr:function(n,t){return n<<32-t|n>>>t},endian:function(n){if(n.constructor==Number)return 16711935&r.rotl(n,8)|4278255360&r.rotl(n,24);for(var t=0;t<n.length;t++)n[t]=r.endian(n[t]);return n},randomBytes:function(n){for(var t=[];n>0;n--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(n){for(var t=[],r=0,o=0;r<n.length;r++,o+=8)t[o>>>5]|=n[r]<<24-o%32;return t},wordsToBytes:function(n){for(var t=[],r=0;r<32*n.length;r+=8)t.push(n[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(n){for(var t=[],r=0;r<n.length;r++)t.push((n[r]>>>4).toString(16)),t.push((15&n[r]).toString(16));return t.join("")},hexToBytes:function(n){for(var t=[],r=0;r<n.length;r+=2)t.push(parseInt(n.substr(r,2),16));return t},bytesToBase64:function(n){for(var r=[],o=0;o<n.length;o+=3)for(var e=n[o]<<16|n[o+1]<<8|n[o+2],u=0;u<4;u++)8*o+6*u<=8*n.length?r.push(t.charAt(e>>>6*(3-u)&63)):r.push("=");return r.join("")},base64ToBytes:function(n){n=n.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],o=0,e=0;o<n.length;e=++o%4)0!=e&&r.push((t.indexOf(n.charAt(o-1))&Math.pow(2,-2*e+8)-1)<<2*e|t.indexOf(n.charAt(o))>>>6-2*e);return r}};n.exports=r}()})),u={utf8:{stringToBytes:function(n){return u.bin.stringToBytes(unescape(encodeURIComponent(n)))},bytesToString:function(n){return decodeURIComponent(escape(u.bin.bytesToString(n)))}},bin:{stringToBytes:function(n){for(var t=[],r=0;r<n.length;r++)t.push(255&n.charCodeAt(r));return t},bytesToString:function(n){for(var t=[],r=0;r<n.length;r++)t.push(String.fromCharCode(n[r]));return t.join("")}}},i=u,s=function(n){return null!=n&&(c(n)||function(n){return"function"==typeof n.readFloatLE&&"function"==typeof n.slice&&c(n.slice(0,0))}(n)||!!n._isBuffer)};function c(n){return!!n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n)}var f=o((function(n){!function(){var t=e,r=i.utf8,o=s,u=i.bin,c=function(n,e){n.constructor==String?n=e&&"binary"===e.encoding?u.stringToBytes(n):r.stringToBytes(n):o(n)?n=Array.prototype.slice.call(n,0):Array.isArray(n)||(n=n.toString());for(var i=t.bytesToWords(n),s=8*n.length,f=1732584193,a=-271733879,l=-1732584194,h=271733878,g=0;g<i.length;g++)i[g]=16711935&(i[g]<<8|i[g]>>>24)|4278255360&(i[g]<<24|i[g]>>>8);i[s>>>5]|=128<<s%32,i[14+(s+64>>>9<<4)]=s;var y=c._ff,d=c._gg,p=c._hh,v=c._ii;for(g=0;g<i.length;g+=16){var T=f,b=a,B=l,S=h;f=y(f,a,l,h,i[g+0],7,-680876936),h=y(h,f,a,l,i[g+1],12,-389564586),l=y(l,h,f,a,i[g+2],17,606105819),a=y(a,l,h,f,i[g+3],22,-1044525330),f=y(f,a,l,h,i[g+4],7,-176418897),h=y(h,f,a,l,i[g+5],12,1200080426),l=y(l,h,f,a,i[g+6],17,-1473231341),a=y(a,l,h,f,i[g+7],22,-45705983),f=y(f,a,l,h,i[g+8],7,1770035416),h=y(h,f,a,l,i[g+9],12,-1958414417),l=y(l,h,f,a,i[g+10],17,-42063),a=y(a,l,h,f,i[g+11],22,-1990404162),f=y(f,a,l,h,i[g+12],7,1804603682),h=y(h,f,a,l,i[g+13],12,-40341101),l=y(l,h,f,a,i[g+14],17,-1502002290),f=d(f,a=y(a,l,h,f,i[g+15],22,1236535329),l,h,i[g+1],5,-165796510),h=d(h,f,a,l,i[g+6],9,-1069501632),l=d(l,h,f,a,i[g+11],14,643717713),a=d(a,l,h,f,i[g+0],20,-373897302),f=d(f,a,l,h,i[g+5],5,-701558691),h=d(h,f,a,l,i[g+10],9,38016083),l=d(l,h,f,a,i[g+15],14,-660478335),a=d(a,l,h,f,i[g+4],20,-405537848),f=d(f,a,l,h,i[g+9],5,568446438),h=d(h,f,a,l,i[g+14],9,-1019803690),l=d(l,h,f,a,i[g+3],14,-187363961),a=d(a,l,h,f,i[g+8],20,1163531501),f=d(f,a,l,h,i[g+13],5,-1444681467),h=d(h,f,a,l,i[g+2],9,-51403784),l=d(l,h,f,a,i[g+7],14,1735328473),f=p(f,a=d(a,l,h,f,i[g+12],20,-1926607734),l,h,i[g+5],4,-378558),h=p(h,f,a,l,i[g+8],11,-2022574463),l=p(l,h,f,a,i[g+11],16,1839030562),a=p(a,l,h,f,i[g+14],23,-35309556),f=p(f,a,l,h,i[g+1],4,-1530992060),h=p(h,f,a,l,i[g+4],11,1272893353),l=p(l,h,f,a,i[g+7],16,-155497632),a=p(a,l,h,f,i[g+10],23,-1094730640),f=p(f,a,l,h,i[g+13],4,681279174),h=p(h,f,a,l,i[g+0],11,-358537222),l=p(l,h,f,a,i[g+3],16,-722521979),a=p(a,l,h,f,i[g+6],23,76029189),f=p(f,a,l,h,i[g+9],4,-640364487),h=p(h,f,a,l,i[g+12],11,-421815835),l=p(l,h,f,a,i[g+15],16,530742520),f=v(f,a=p(a,l,h,f,i[g+2],23,-995338651),l,h,i[g+0],6,-198630844),h=v(h,f,a,l,i[g+7],10,1126891415),l=v(l,h,f,a,i[g+14],15,-1416354905),a=v(a,l,h,f,i[g+5],21,-57434055),f=v(f,a,l,h,i[g+12],6,1700485571),h=v(h,f,a,l,i[g+3],10,-1894986606),l=v(l,h,f,a,i[g+10],15,-1051523),a=v(a,l,h,f,i[g+1],21,-2054922799),f=v(f,a,l,h,i[g+8],6,1873313359),h=v(h,f,a,l,i[g+15],10,-30611744),l=v(l,h,f,a,i[g+6],15,-1560198380),a=v(a,l,h,f,i[g+13],21,1309151649),f=v(f,a,l,h,i[g+4],6,-145523070),h=v(h,f,a,l,i[g+11],10,-1120210379),l=v(l,h,f,a,i[g+2],15,718787259),a=v(a,l,h,f,i[g+9],21,-343485551),f=f+T>>>0,a=a+b>>>0,l=l+B>>>0,h=h+S>>>0}return t.endian([f,a,l,h])};c._ff=function(n,t,r,o,e,u,i){var s=n+(t&r|~t&o)+(e>>>0)+i;return(s<<u|s>>>32-u)+t},c._gg=function(n,t,r,o,e,u,i){var s=n+(t&o|r&~o)+(e>>>0)+i;return(s<<u|s>>>32-u)+t},c._hh=function(n,t,r,o,e,u,i){var s=n+(t^r^o)+(e>>>0)+i;return(s<<u|s>>>32-u)+t},c._ii=function(n,t,r,o,e,u,i){var s=n+(r^(t|~o))+(e>>>0)+i;return(s<<u|s>>>32-u)+t},c._blocksize=16,c._digestsize=16,n.exports=function(n,r){if(null==n)throw new Error("Illegal argument "+n);var o=t.wordsToBytes(c(n,r));return r&&r.asBytes?o:r&&r.asString?u.bytesToString(o):t.bytesToHex(o)}}()}));window.addEventListener("DOMContentLoaded",(function(n){var t;t="Renaud",console.log("Salut ".concat(t)),console.log(f("toto"));var o=document.querySelector("p");new r(o)}))}();
