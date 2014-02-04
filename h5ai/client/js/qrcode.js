/* h5ai 0.24.0 - http://larsjung.de/h5ai/ */!function(r){"use strict";var t=function(){var r=document.createElement("canvas");return!(!r.getContext||!r.getContext("2d"))}(),e=function(r,t,e){var n=s(r,t);return n.addData(e),n.make(),n},n=function(r){for(var t=2;40>=t;t+=1)try{return e(t,"L",r)}catch(n){}return null},i=function(t,e){var i=e.text,a=e.left,o=e.top,l=e.width,u=e.height,s=e.color,f=e.bgColor,c=n(i),h=r(t),g=h[0].getContext("2d");if(f&&(g.fillStyle=f,g.fillRect(a,o,l,u)),c){var v,p,d=c.getModuleCount(),w=l/d,_=u/d;for(g.beginPath(),v=0;d>v;v+=1)for(p=0;d>p;p+=1)c.isDark(v,p)&&g.rect(a+p*w,o+v*_,w,_);g.fillStyle=s,g.fill()}return h},a=function(t){var e=r("<canvas/>").attr("width",t.width).attr("height",t.height);return i(e,t)},o=function(t){var e=t.text,i=t.width,a=t.height,o=t.color,l=t.bgColor,u=Math.floor,s=n(e),f=r("<div/>").css({position:"relative",left:0,top:0,padding:0,margin:0,width:i,height:a});if(l&&f.css("background-color",l),s){var c,h,g=s.getModuleCount(),v=u(i/g),p=u(a/g),d=u(.5*(i-v*g)),w=u(.5*(a-p*g));for(c=0;g>c;c+=1)for(h=0;g>h;h+=1)s.isDark(c,h)&&r("<div/>").css({left:d+h*v,top:w+c*p}).appendTo(f);f.children().css({position:"absolute",padding:0,margin:0,width:v,height:p,"background-color":o})}return f},l=function(r){return t&&"canvas"===r.render?a(r):o(r)},u={render:"canvas",left:0,top:0,width:256,height:256,color:"#000",bgColor:null,text:"no text"};r.fn.qrcode=function(t){var e=r.extend({},u,t);return this.each(function(){"canvas"===this.nodeName.toLowerCase()?i(this,e):r(this).append(l(e))})};var s=function(){function r(t,e){if("undefined"==typeof t.length)throw new Error(t.length+"/"+e);var n=function(){for(var r=0;r<t.length&&0==t[r];)r+=1;for(var n=new Array(t.length-r+e),i=0;i<t.length-r;i+=1)n[i]=t[i+r];return n}(),i={};return i.get=function(r){return n[r]},i.getLength=function(){return n.length},i.multiply=function(t){for(var e=new Array(i.getLength()+t.getLength()-1),n=0;n<i.getLength();n+=1)for(var a=0;a<t.getLength();a+=1)e[n+a]^=o.gexp(o.glog(i.get(n))+o.glog(t.get(a)));return r(e,0)},i.mod=function(t){if(i.getLength()-t.getLength()<0)return i;for(var e=o.glog(i.get(0))-o.glog(t.get(0)),n=new Array(i.getLength()),a=0;a<i.getLength();a+=1)n[a]=i.get(a);for(var a=0;a<t.getLength();a+=1)n[a]^=o.gexp(o.glog(t.get(a))+e);return r(n,0).mod(t)},i}var t=function(t,e){var i=236,o=17,f=t,c=n[e],h=null,g=0,p=null,d=new Array,w={},_=function(r,t){g=4*f+17,h=function(r){for(var t=new Array(r),e=0;r>e;e+=1){t[e]=new Array(r);for(var n=0;r>n;n+=1)t[e][n]=null}return t}(g),b(0,0),b(g-7,0),b(0,g-7),m(),k(),E(r,t),f>=7&&B(r),null==p&&(p=T(f,c,d)),M(p,t)},b=function(r,t){for(var e=-1;7>=e;e+=1)if(!(-1>=r+e||r+e>=g))for(var n=-1;7>=n;n+=1)-1>=t+n||t+n>=g||(h[r+e][t+n]=e>=0&&6>=e&&(0==n||6==n)||n>=0&&6>=n&&(0==e||6==e)||e>=2&&4>=e&&n>=2&&4>=n?!0:!1)},y=function(){for(var r=0,t=0,e=0;8>e;e+=1){_(!0,e);var n=a.getLostPoint(w);(0==e||r>n)&&(r=n,t=e)}return t},k=function(){for(var r=8;g-8>r;r+=1)null==h[r][6]&&(h[r][6]=0==r%2);for(var t=8;g-8>t;t+=1)null==h[6][t]&&(h[6][t]=0==t%2)},m=function(){for(var r=a.getPatternPosition(f),t=0;t<r.length;t+=1)for(var e=0;e<r.length;e+=1){var n=r[t],i=r[e];if(null==h[n][i])for(var o=-2;2>=o;o+=1)for(var l=-2;2>=l;l+=1)h[n+o][i+l]=-2==o||2==o||-2==l||2==l||0==o&&0==l?!0:!1}},B=function(r){for(var t=a.getBCHTypeNumber(f),e=0;18>e;e+=1){var n=!r&&1==(1&t>>e);h[Math.floor(e/3)][e%3+g-8-3]=n}for(var e=0;18>e;e+=1){var n=!r&&1==(1&t>>e);h[e%3+g-8-3][Math.floor(e/3)]=n}},E=function(r,t){for(var e=c<<3|t,n=a.getBCHTypeInfo(e),i=0;15>i;i+=1){var o=!r&&1==(1&n>>i);6>i?h[i][8]=o:8>i?h[i+1][8]=o:h[g-15+i][8]=o}for(var i=0;15>i;i+=1){var o=!r&&1==(1&n>>i);8>i?h[8][g-i-1]=o:9>i?h[8][15-i-1+1]=o:h[8][15-i-1]=o}h[g-8][8]=!r},M=function(r,t){for(var e=-1,n=g-1,i=7,o=0,l=a.getMaskFunction(t),u=g-1;u>0;u-=2)for(6==u&&(u-=1);;){for(var s=0;2>s;s+=1)if(null==h[n][u-s]){var f=!1;o<r.length&&(f=1==(1&r[o]>>>i));var c=l(n,u-s);c&&(f=!f),h[n][u-s]=f,i-=1,-1==i&&(o+=1,i=7)}if(n+=e,0>n||n>=g){n-=e,e=-e;break}}},A=function(t,e){for(var n=0,i=0,o=0,l=new Array(e.length),u=new Array(e.length),s=0;s<e.length;s+=1){var f=e[s].dataCount,c=e[s].totalCount-f;i=Math.max(i,f),o=Math.max(o,c),l[s]=new Array(f);for(var h=0;h<l[s].length;h+=1)l[s][h]=255&t.getBuffer()[h+n];n+=f;var g=a.getErrorCorrectPolynomial(c),v=r(l[s],g.getLength()-1),p=v.mod(g);u[s]=new Array(g.getLength()-1);for(var h=0;h<u[s].length;h+=1){var d=h+p.getLength()-u[s].length;u[s][h]=d>=0?p.get(d):0}}for(var w=0,h=0;h<e.length;h+=1)w+=e[h].totalCount;for(var _=new Array(w),b=0,h=0;i>h;h+=1)for(var s=0;s<e.length;s+=1)h<l[s].length&&(_[b]=l[s][h],b+=1);for(var h=0;o>h;h+=1)for(var s=0;s<e.length;s+=1)h<u[s].length&&(_[b]=u[s][h],b+=1);return _},T=function(r,t,e){for(var n=l.getRSBlocks(r,t),s=u(),f=0;f<e.length;f+=1){var c=e[f];s.put(c.getMode(),4),s.put(c.getLength(),a.getLengthInBits(c.getMode(),r)),c.write(s)}for(var h=0,f=0;f<n.length;f+=1)h+=n[f].dataCount;if(s.getLengthInBits()>8*h)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*h+")");for(s.getLengthInBits()+4<=8*h&&s.put(0,4);0!=s.getLengthInBits()%8;)s.putBit(!1);for(;;){if(s.getLengthInBits()>=8*h)break;if(s.put(i,8),s.getLengthInBits()>=8*h)break;s.put(o,8)}return A(s,n)};return w.addData=function(r){var t=s(r);d.push(t),p=null},w.isDark=function(r,t){if(0>r||r>=g||0>t||t>=g)throw new Error(r+","+t);return h[r][t]},w.getModuleCount=function(){return g},w.make=function(){_(!1,y())},w.createTableTag=function(r,t){r=r||2,t="undefined"==typeof t?4*r:t;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+t+"px;",e+='">',e+="<tbody>";for(var n=0;n<w.getModuleCount();n+=1){e+="<tr>";for(var i=0;i<w.getModuleCount();i+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+r+"px;",e+=" height: "+r+"px;",e+=" background-color: ",e+=w.isDark(n,i)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},w.createImgTag=function(r,t){r=r||2,t="undefined"==typeof t?4*r:t;var e=w.getModuleCount()*r+2*t,n=t,i=e-t;return v(e,e,function(t,e){if(t>=n&&i>t&&e>=n&&i>e){var a=Math.floor((t-n)/r),o=Math.floor((e-n)/r);return w.isDark(o,a)?0:1}return 1})},w};t.stringToBytes=function(r){for(var t=new Array,e=0;e<r.length;e+=1){var n=r.charCodeAt(e);t.push(255&n)}return t},t.createStringToBytes=function(r,t){var e=function(){for(var e=h(r),n=function(){var r=e.read();if(-1==r)throw new Error;return r},i=0,a={};;){var o=e.read();if(-1==o)break;var l=n(),u=n(),s=n(),f=String.fromCharCode(o<<8|l),c=u<<8|s;a[f]=c,i+=1}if(i!=t)throw new Error(i+" != "+t);return a}(),n="?".charCodeAt(0);return function(r){for(var t=new Array,i=0;i<r.length;i+=1){var a=r.charCodeAt(i);if(128>a)t.push(a);else{var o=e[r.charAt(i)];"number"==typeof o?(255&o)==o?t.push(o):(t.push(o>>>8),t.push(255&o)):t.push(n)}}return t}};var e={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},n={L:1,M:0,Q:3,H:2},i={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},a=function(){var t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=1335,a=7973,l=21522,u={},s=function(r){for(var t=0;0!=r;)t+=1,r>>>=1;return t};return u.getBCHTypeInfo=function(r){for(var t=r<<10;s(t)-s(n)>=0;)t^=n<<s(t)-s(n);return(r<<10|t)^l},u.getBCHTypeNumber=function(r){for(var t=r<<12;s(t)-s(a)>=0;)t^=a<<s(t)-s(a);return r<<12|t},u.getPatternPosition=function(r){return t[r-1]},u.getMaskFunction=function(r){switch(r){case i.PATTERN000:return function(r,t){return 0==(r+t)%2};case i.PATTERN001:return function(r){return 0==r%2};case i.PATTERN010:return function(r,t){return 0==t%3};case i.PATTERN011:return function(r,t){return 0==(r+t)%3};case i.PATTERN100:return function(r,t){return 0==(Math.floor(r/2)+Math.floor(t/3))%2};case i.PATTERN101:return function(r,t){return 0==r*t%2+r*t%3};case i.PATTERN110:return function(r,t){return 0==(r*t%2+r*t%3)%2};case i.PATTERN111:return function(r,t){return 0==(r*t%3+(r+t)%2)%2};default:throw new Error("bad maskPattern:"+r)}},u.getErrorCorrectPolynomial=function(t){for(var e=r([1],0),n=0;t>n;n+=1)e=e.multiply(r([1,o.gexp(n)],0));return e},u.getLengthInBits=function(r,t){if(t>=1&&10>t)switch(r){case e.MODE_NUMBER:return 10;case e.MODE_ALPHA_NUM:return 9;case e.MODE_8BIT_BYTE:return 8;case e.MODE_KANJI:return 8;default:throw new Error("mode:"+r)}else if(27>t)switch(r){case e.MODE_NUMBER:return 12;case e.MODE_ALPHA_NUM:return 11;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 10;default:throw new Error("mode:"+r)}else{if(!(41>t))throw new Error("type:"+t);switch(r){case e.MODE_NUMBER:return 14;case e.MODE_ALPHA_NUM:return 13;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 12;default:throw new Error("mode:"+r)}}},u.getLostPoint=function(r){for(var t=r.getModuleCount(),e=0,n=0;t>n;n+=1)for(var i=0;t>i;i+=1){for(var a=0,o=r.isDark(n,i),l=-1;1>=l;l+=1)if(!(0>n+l||n+l>=t))for(var u=-1;1>=u;u+=1)0>i+u||i+u>=t||(0!=l||0!=u)&&o==r.isDark(n+l,i+u)&&(a+=1);a>5&&(e+=3+a-5)}for(var n=0;t-1>n;n+=1)for(var i=0;t-1>i;i+=1){var s=0;r.isDark(n,i)&&(s+=1),r.isDark(n+1,i)&&(s+=1),r.isDark(n,i+1)&&(s+=1),r.isDark(n+1,i+1)&&(s+=1),(0==s||4==s)&&(e+=3)}for(var n=0;t>n;n+=1)for(var i=0;t-6>i;i+=1)r.isDark(n,i)&&!r.isDark(n,i+1)&&r.isDark(n,i+2)&&r.isDark(n,i+3)&&r.isDark(n,i+4)&&!r.isDark(n,i+5)&&r.isDark(n,i+6)&&(e+=40);for(var i=0;t>i;i+=1)for(var n=0;t-6>n;n+=1)r.isDark(n,i)&&!r.isDark(n+1,i)&&r.isDark(n+2,i)&&r.isDark(n+3,i)&&r.isDark(n+4,i)&&!r.isDark(n+5,i)&&r.isDark(n+6,i)&&(e+=40);for(var f=0,i=0;t>i;i+=1)for(var n=0;t>n;n+=1)r.isDark(n,i)&&(f+=1);var c=Math.abs(100*f/t/t-50)/5;return e+=10*c},u}(),o=function(){for(var r=new Array(256),t=new Array(256),e=0;8>e;e+=1)r[e]=1<<e;for(var e=8;256>e;e+=1)r[e]=r[e-4]^r[e-5]^r[e-6]^r[e-8];for(var e=0;255>e;e+=1)t[r[e]]=e;var n={};return n.glog=function(r){if(1>r)throw new Error("glog("+r+")");return t[r]},n.gexp=function(t){for(;0>t;)t+=255;for(;t>=256;)t-=255;return r[t]},n}(),l=function(){var r=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(r,t){var e={};return e.totalCount=r,e.dataCount=t,e},e={},i=function(t,e){switch(e){case n.L:return r[4*(t-1)+0];case n.M:return r[4*(t-1)+1];case n.Q:return r[4*(t-1)+2];case n.H:return r[4*(t-1)+3];default:return void 0}};return e.getRSBlocks=function(r,e){var n=i(r,e);if("undefined"==typeof n)throw new Error("bad rs block @ typeNumber:"+r+"/errorCorrectLevel:"+e);for(var a=n.length/3,o=new Array,l=0;a>l;l+=1)for(var u=n[3*l+0],s=n[3*l+1],f=n[3*l+2],c=0;u>c;c+=1)o.push(t(s,f));return o},e}(),u=function(){var r=new Array,t=0,e={};return e.getBuffer=function(){return r},e.get=function(t){var e=Math.floor(t/8);return 1==(1&r[e]>>>7-t%8)},e.put=function(r,t){for(var n=0;t>n;n+=1)e.putBit(1==(1&r>>>t-n-1))},e.getLengthInBits=function(){return t},e.putBit=function(e){var n=Math.floor(t/8);r.length<=n&&r.push(0),e&&(r[n]|=128>>>t%8),t+=1},e},s=function(r){var n=e.MODE_8BIT_BYTE,i=t.stringToBytes(r),a={};return a.getMode=function(){return n},a.getLength=function(){return i.length},a.write=function(r){for(var t=0;t<i.length;t+=1)r.put(i[t],8)},a},f=function(){var r=new Array,t={};return t.writeByte=function(t){r.push(255&t)},t.writeShort=function(r){t.writeByte(r),t.writeByte(r>>>8)},t.writeBytes=function(r,e,n){e=e||0,n=n||r.length;for(var i=0;n>i;i+=1)t.writeByte(r[i+e])},t.writeString=function(r){for(var e=0;e<r.length;e+=1)t.writeByte(r.charCodeAt(e))},t.toByteArray=function(){return r},t.toString=function(){var t="";t+="[";for(var e=0;e<r.length;e+=1)e>0&&(t+=","),t+=r[e];return t+="]"},t},c=function(){var r=0,t=0,e=0,n="",i={},a=function(r){n+=String.fromCharCode(o(63&r))},o=function(r){if(0>r);else{if(26>r)return 65+r;if(52>r)return 97+(r-26);if(62>r)return 48+(r-52);if(62==r)return 43;if(63==r)return 47}throw new Error("n:"+r)};return i.writeByte=function(n){for(r=r<<8|255&n,t+=8,e+=1;t>=6;)a(r>>>t-6),t-=6},i.flush=function(){if(t>0&&(a(r<<6-t),r=0,t=0),0!=e%3)for(var i=3-e%3,o=0;i>o;o+=1)n+="="},i.toString=function(){return n},i},h=function(r){var t=r,e=0,n=0,i=0,a={};a.read=function(){for(;8>i;){if(e>=t.length){if(0==i)return-1;throw new Error("unexpected end of file./"+i)}var r=t.charAt(e);if(e+=1,"="==r)return i=0,-1;r.match(/^\s$/)||(n=n<<6|o(r.charCodeAt(0)),i+=6)}var a=255&n>>>i-8;return i-=8,a};var o=function(r){if(r>=65&&90>=r)return r-65;if(r>=97&&122>=r)return r-97+26;if(r>=48&&57>=r)return r-48+52;if(43==r)return 62;if(47==r)return 63;throw new Error("c:"+r)};return a},g=function(r,t){var e=r,n=t,i=new Array(r*t),a={};a.setPixel=function(r,t,n){i[t*e+r]=n},a.write=function(r){r.writeString("GIF87a"),r.writeShort(e),r.writeShort(n),r.writeByte(128),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(255),r.writeByte(255),r.writeByte(255),r.writeString(","),r.writeShort(0),r.writeShort(0),r.writeShort(e),r.writeShort(n),r.writeByte(0);var t=2,i=l(t);r.writeByte(t);for(var a=0;i.length-a>255;)r.writeByte(255),r.writeBytes(i,a,255),a+=255;r.writeByte(i.length-a),r.writeBytes(i,a,i.length-a),r.writeByte(0),r.writeString(";")};var o=function(r){var t=r,e=0,n=0,i={};return i.write=function(r,i){if(0!=r>>>i)throw new Error("length over");for(;e+i>=8;)t.writeByte(255&(r<<e|n)),i-=8-e,r>>>=8-e,n=0,e=0;n=r<<e|n,e+=i},i.flush=function(){e>0&&t.writeByte(n)},i},l=function(r){for(var t=1<<r,e=(1<<r)+1,n=r+1,a=u(),l=0;t>l;l+=1)a.add(String.fromCharCode(l));a.add(String.fromCharCode(t)),a.add(String.fromCharCode(e));var s=f(),c=o(s);c.write(t,n);var h=0,g=String.fromCharCode(i[h]);for(h+=1;h<i.length;){var v=String.fromCharCode(i[h]);h+=1,a.contains(g+v)?g+=v:(c.write(a.indexOf(g),n),a.size()<4095&&(a.size()==1<<n&&(n+=1),a.add(g+v)),g=v)}return c.write(a.indexOf(g),n),c.write(e,n),c.flush(),s.toByteArray()},u=function(){var r={},t=0,e={};return e.add=function(n){if(e.contains(n))throw new Error("dup key:"+n);r[n]=t,t+=1},e.size=function(){return t},e.indexOf=function(t){return r[t]},e.contains=function(t){return"undefined"!=typeof r[t]},e};return a},v=function(r,t,e,n){for(var i=g(r,t),a=0;t>a;a+=1)for(var o=0;r>o;o+=1)i.setPixel(o,a,e(o,a));var l=f();i.write(l);for(var u=c(),s=l.toByteArray(),h=0;h<s.length;h+=1)u.writeByte(s[h]);u.flush();var v="";return v+="<img",v+=' src="',v+="data:image/gif;base64,",v+=u,v+='"',v+=' width="',v+=r,v+='"',v+=' height="',v+=t,v+='"',n&&(v+=' alt="',v+=n,v+='"'),v+="/>"};return t}()}(jQuery);