(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();const uo="182",ki={ROTATE:0,DOLLY:1,PAN:2},Bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iu=0,ko=1,ru=2,ts=1,su=2,fr=3,Jn=0,Ht=1,xn=2,Ln=0,Gi=1,Go=2,zo=3,Vo=4,au=5,li=100,ou=101,lu=102,cu=103,uu=104,hu=200,fu=201,du=202,pu=203,ca=204,ua=205,mu=206,gu=207,_u=208,vu=209,xu=210,Su=211,Mu=212,yu=213,Eu=214,ha=0,fa=1,da=2,Vi=3,pa=4,ma=5,ga=6,_a=7,rc=0,bu=1,Tu=2,yn=0,sc=1,ac=2,oc=3,lc=4,cc=5,uc=6,hc=7,fc=300,pi=301,Hi=302,va=303,xa=304,ps=306,Sa=1e3,Un=1001,Ma=1002,Pt=1003,Au=1004,Dr=1005,At=1006,Cs=1007,ui=1008,Jt=1009,dc=1010,pc=1011,vr=1012,ho=1013,bn=1014,Sn=1015,Fn=1016,fo=1017,po=1018,xr=1020,mc=35902,gc=35899,_c=1021,vc=1022,fn=1023,Nn=1026,hi=1027,xc=1028,mo=1029,Wi=1030,go=1031,_o=1033,ns=33776,is=33777,rs=33778,ss=33779,ya=35840,Ea=35841,ba=35842,Ta=35843,Aa=36196,wa=37492,Ca=37496,Ra=37488,Pa=37489,Da=37490,Ua=37491,La=37808,Ia=37809,Fa=37810,Na=37811,Oa=37812,Ba=37813,ka=37814,Ga=37815,za=37816,Va=37817,Ha=37818,Wa=37819,Xa=37820,Ya=37821,ja=36492,qa=36494,Ka=36495,Za=36283,Ja=36284,Qa=36285,$a=36286,wu=3200,Cu=3201,Sc=0,Ru=1,Kn="",en="srgb",Xi="srgb-linear",us="linear",ct="srgb",Ei=7680,Ho=519,Pu=512,Du=513,Uu=514,vo=515,Lu=516,Iu=517,xo=518,Fu=519,Wo=35044,Xo="300 es",Mn=2e3,hs=2001;function Mc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Nu(){const r=fs("canvas");return r.style.display="block",r}const Yo={};function jo(...r){const e="THREE."+r.shift();console.log(e,...r)}function qe(...r){const e="THREE."+r.shift();console.warn(e,...r)}function it(...r){const e="THREE."+r.shift();console.error(e,...r)}function Sr(...r){const e=r.join(" ");e in Yo||(Yo[e]=!0,qe(...r))}function Ou(r,e,t){return new Promise(function(s,n){function i(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:s()}}setTimeout(i,t)})}class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const n=s[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const n=s.slice(0);for(let i=0,a=n.length;i<a;i++)n[i].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],as=Math.PI/180,eo=180/Math.PI;function yr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ut[r&255]+Ut[r>>8&255]+Ut[r>>16&255]+Ut[r>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[s&255]+Ut[s>>8&255]+Ut[s>>16&255]+Ut[s>>24&255]).toLowerCase()}function $e(r,e,t){return Math.max(e,Math.min(t,r))}function Bu(r,e){return(r%e+e)%e}function Rs(r,e,t){return(1-t)*r+t*e}function rr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ku={DEG2RAD:as};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,n=e.elements;return this.x=n[0]*t+n[3]*s+n[6],this.y=n[1]*t+n[4]*s+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar($e(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos($e(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),n=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*s-a*n+e.x,this.y=i*n+a*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mi{constructor(e=0,t=0,s=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=n}static slerpFlat(e,t,s,n,i,a,o){let l=s[n+0],c=s[n+1],u=s[n+2],h=s[n+3],f=i[a+0],d=i[a+1],g=i[a+2],v=i[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==g){let m=l*f+c*d+u*g+h*v;m<0&&(f=-f,d=-d,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){const E=Math.acos(m),b=Math.sin(E);p=Math.sin(p*E)/b,o=Math.sin(o*E)/b,l=l*p+f*o,c=c*p+d*o,u=u*p+g*o,h=h*p+v*o}else{l=l*p+f*o,c=c*p+d*o,u=u*p+g*o,h=h*p+v*o;const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,s,n,i,a){const o=s[n],l=s[n+1],c=s[n+2],u=s[n+3],h=i[a],f=i[a+1],d=i[a+2],g=i[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,n){return this._x=e,this._y=t,this._z=s,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,n=e._y,i=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(s/2),u=o(n/2),h=o(i/2),f=l(s/2),d=l(n/2),g=l(i/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,n=Math.sin(s);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],n=t[4],i=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=s+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(i-c)*d,this._z=(a-n)*d}else if(s>o&&s>h){const d=2*Math.sqrt(1+s-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(i+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-s-h);this._w=(i-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-s-o);this._w=(a-n)/d,this._x=(i+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const n=Math.min(1,t/s);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,n=e._y,i=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=s*u+a*o+n*c-i*l,this._y=n*u+a*l+i*o-s*c,this._z=i*u+a*c+s*l-n*o,this._w=a*u-s*o-n*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let s=e._x,n=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(s=-s,n=-n,i=-i,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+s*t,this._y=this._y*l+n*t,this._z=this._z*l+i*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+s*t,this._y=this._y*l+n*t,this._z=this._z*l+i*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),n=Math.sqrt(1-s),i=Math.sqrt(s);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,s=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*s+i[6]*n,this.y=i[1]*t+i[4]*s+i[7]*n,this.z=i[2]*t+i[5]*s+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,n=this.z,i=e.elements,a=1/(i[3]*t+i[7]*s+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*s+i[8]*n+i[12])*a,this.y=(i[1]*t+i[5]*s+i[9]*n+i[13])*a,this.z=(i[2]*t+i[6]*s+i[10]*n+i[14])*a,this}applyQuaternion(e){const t=this.x,s=this.y,n=this.z,i=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*s),u=2*(o*t-i*n),h=2*(i*s-a*t);return this.x=t+l*c+a*h-o*u,this.y=s+l*u+o*c-i*h,this.z=n+l*h+i*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*s+i[8]*n,this.y=i[1]*t+i[5]*s+i[9]*n,this.z=i[2]*t+i[6]*s+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar($e(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,n=e.y,i=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-i*o,this.y=i*a-s*l,this.z=s*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ps.copy(this).projectOnVector(e),this.sub(Ps)}reflect(e){return this.sub(Ps.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos($e(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,n=this.z-e.z;return t*t+s*s+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const n=Math.sin(t)*e;return this.x=n*Math.sin(s),this.y=Math.cos(t)*e,this.z=n*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ps=new Q,qo=new mi;class Ze{constructor(e,t,s,n,i,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,n,i,a,o,l,c)}set(e,t,s,n,i,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=i,u[5]=l,u[6]=s,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,n=t.elements,i=this.elements,a=s[0],o=s[3],l=s[6],c=s[1],u=s[4],h=s[7],f=s[2],d=s[5],g=s[8],v=n[0],m=n[3],p=n[6],E=n[1],b=n[4],M=n[7],y=n[2],w=n[5],T=n[8];return i[0]=a*v+o*E+l*y,i[3]=a*m+o*b+l*w,i[6]=a*p+o*M+l*T,i[1]=c*v+u*E+h*y,i[4]=c*m+u*b+h*w,i[7]=c*p+u*M+h*T,i[2]=f*v+d*E+g*y,i[5]=f*m+d*b+g*w,i[8]=f*p+d*M+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-s*i*u+s*o*l+n*i*c-n*a*l}invert(){const e=this.elements,t=e[0],s=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*i,d=c*i-a*l,g=t*h+s*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(n*c-u*s)*v,e[2]=(o*s-n*a)*v,e[3]=f*v,e[4]=(u*t-n*l)*v,e[5]=(n*i-o*t)*v,e[6]=d*v,e[7]=(s*l-c*t)*v,e[8]=(a*t-s*i)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,n,i,a,o){const l=Math.cos(i),c=Math.sin(i);return this.set(s*l,s*c,-s*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ds.makeScale(e,t)),this}rotate(e){return this.premultiply(Ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let n=0;n<9;n++)if(t[n]!==s[n])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new Ze,Ko=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zo=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gu(){const r={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(n,i,a){return this.enabled===!1||i===a||!i||!a||(this.spaces[i].transfer===ct&&(n.r=In(n.r),n.g=In(n.g),n.b=In(n.b)),this.spaces[i].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[i].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(n.r=zi(n.r),n.g=zi(n.g),n.b=zi(n.b))),n},workingToColorSpace:function(n,i){return this.convert(n,this.workingColorSpace,i)},colorSpaceToWorking:function(n,i){return this.convert(n,i,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Kn?us:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,i=this.workingColorSpace){return n.fromArray(this.spaces[i].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,i,a){return n.copy(this.spaces[i].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,i){return Sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,i)},toWorkingColorSpace:function(n,i){return Sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,i)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Xi]:{primaries:e,whitePoint:s,transfer:us,toXYZ:Ko,fromXYZ:Zo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:s,transfer:ct,toXYZ:Ko,fromXYZ:Zo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),r}const rt=Gu();function In(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let bi;class zu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{bi===void 0&&(bi=fs("canvas")),bi.width=e.width,bi.height=e.height;const n=bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),s=bi}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fs("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const n=s.getImageData(0,0,e.width,e.height),i=n.data;for(let a=0;a<i.length;a++)i[a]=In(i[a]/255)*255;return s.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(In(t[s]/255)*255):t[s]=In(t[s]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vu=0;class So{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=yr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?i.push(Us(n[a].image)):i.push(Us(n[a]))}else i=Us(n);s.url=i}return t||(e.images[this.uuid]=s),s}}function Us(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?zu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let Hu=0;const Ls=new Q;class It extends gi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,s=Un,n=Un,i=At,a=ui,o=fn,l=Jt,c=It.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=yr(),this.name="",this.source=new So(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=n,this.magFilter=i,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ls).x}get height(){return this.source.getSize(Ls).y}get depth(){return this.source.getSize(Ls).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&s&&n.isVector2&&s.isVector2||n&&s&&n.isVector3&&s.isVector3||n&&s&&n.isMatrix3&&s.isMatrix3?n.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sa:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sa:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=fc;It.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,s=0,n=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,n){return this.x=e,this.y=t,this.z=s,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,n=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*s+a[8]*n+a[12]*i,this.y=a[1]*t+a[5]*s+a[9]*n+a[13]*i,this.z=a[2]*t+a[6]*s+a[10]*n+a[14]*i,this.w=a[3]*t+a[7]*s+a[11]*n+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,n,i;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(d+1)/2,y=(p+1)/2,w=(u+f)/4,T=(h+v)/4,P=(g+m)/4;return b>M&&b>y?b<.01?(s=0,n=.707106781,i=.707106781):(s=Math.sqrt(b),n=w/s,i=T/s):M>y?M<.01?(s=.707106781,n=0,i=.707106781):(n=Math.sqrt(M),s=w/n,i=P/n):y<.01?(s=.707106781,n=.707106781,i=0):(i=Math.sqrt(y),s=T/i,n=P/i),this.set(s,n,i,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-v)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar($e(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wu extends gi{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const n={width:e,height:t,depth:s.depth},i=new It(n);this.textures=[];const a=s.count;for(let o=0;o<a;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=s,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new So(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends Wu{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class yc extends It{constructor(e=null,t=1,s=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:n},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xu extends It{constructor(e=null,t=1,s=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:n},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const i=s.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=i.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(i,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ur.copy(s.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}const n=e.children;for(let i=0,a=n.length;i<a;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Lr.subVectors(this.max,sr),Ti.subVectors(e.a,sr),Ai.subVectors(e.b,sr),wi.subVectors(e.c,sr),Vn.subVectors(Ai,Ti),Hn.subVectors(wi,Ai),ti.subVectors(Ti,wi);let t=[0,-Vn.z,Vn.y,0,-Hn.z,Hn.y,0,-ti.z,ti.y,Vn.z,0,-Vn.x,Hn.z,0,-Hn.x,ti.z,0,-ti.x,-Vn.y,Vn.x,0,-Hn.y,Hn.x,0,-ti.y,ti.x,0];return!Is(t,Ti,Ai,wi,Lr)||(t=[1,0,0,0,1,0,0,0,1],!Is(t,Ti,Ai,wi,Lr))?!1:(Ir.crossVectors(Vn,Hn),t=[Ir.x,Ir.y,Ir.z],Is(t,Ti,Ai,wi,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ln=new Q,Ur=new _i,Ti=new Q,Ai=new Q,wi=new Q,Vn=new Q,Hn=new Q,ti=new Q,sr=new Q,Lr=new Q,Ir=new Q,ni=new Q;function Is(r,e,t,s,n){for(let i=0,a=r.length-3;i<=a;i+=3){ni.fromArray(r,i);const o=n.x*Math.abs(ni.x)+n.y*Math.abs(ni.y)+n.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),u=s.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Yu=new _i,ar=new Q,Fs=new Q;class ms{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Yu.setFromPoints(e).getCenter(s);let n=0;for(let i=0,a=e.length;i<a;i++)n=Math.max(n,s.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),n=(s-this.radius)*.5;this.center.addScaledVector(ar,n/s),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Fs)),this.expandByPoint(ar.copy(e.center).sub(Fs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Cn=new Q,Ns=new Q,Fr=new Q,Wn=new Q,Os=new Q,Nr=new Q,Bs=new Q;class Mo{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,s,n){Ns.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(Ns);const i=e.distanceTo(t)*.5,a=-this.direction.dot(Fr),o=Wn.dot(this.direction),l=-Wn.dot(Fr),c=Wn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=i*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=i,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-i,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*i+o)),f=h>0?-i:Math.min(Math.max(-i,-l),i),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-i,-l),i),d=f*(f+2*l)+c):(h=Math.max(0,-(a*i+o)),f=h>0?i:Math.min(Math.max(-i,-l),i),d=-h*h+f*(f+2*l)+c);else f=a>0?-i:i,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return s&&s.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Ns).addScaledVector(Fr,f),d}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const s=Cn.dot(this.direction),n=Cn.dot(Cn)-s*s,i=e.radius*e.radius;if(n>i)return null;const a=Math.sqrt(i-n),o=s-a,l=s+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,n,i,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(s=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(s=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(i=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(i=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),s>a||i>n||((i>s||isNaN(s))&&(s=i),(a<n||isNaN(n))&&(n=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),s>l||o>n)||((o>s||s!==s)&&(s=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(s>=0?s:n,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,s,n,i){Os.subVectors(t,e),Nr.subVectors(s,e),Bs.crossVectors(Os,Nr);let a=this.direction.dot(Bs),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);const l=o*this.direction.dot(Nr.crossVectors(Wn,Nr));if(l<0)return null;const c=o*this.direction.dot(Os.cross(Wn));if(c<0||l+c>a)return null;const u=-o*Wn.dot(Bs);return u<0?null:this.at(u/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,s,n,i,a,o,l,c,u,h,f,d,g,v,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,n,i,a,o,l,c,u,h,f,d,g,v,m)}set(e,t,s,n,i,a,o,l,c,u,h,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=s,p[12]=n,p[1]=i,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,s=e.elements,n=1/Ci.setFromMatrixColumn(e,0).length(),i=1/Ci.setFromMatrixColumn(e,1).length(),a=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=s[0]*n,t[1]=s[1]*n,t[2]=s[2]*n,t[3]=0,t[4]=s[4]*i,t[5]=s[5]*i,t[6]=s[6]*i,t[7]=0,t[8]=s[8]*a,t[9]=s[9]*a,t[10]=s[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,n=e.y,i=e.z,a=Math.cos(s),o=Math.sin(s),l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ju,e,qu)}lookAt(e,t,s){const n=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Xn.crossVectors(s,qt),Xn.lengthSq()===0&&(Math.abs(s.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Xn.crossVectors(s,qt)),Xn.normalize(),Or.crossVectors(qt,Xn),n[0]=Xn.x,n[4]=Or.x,n[8]=qt.x,n[1]=Xn.y,n[5]=Or.y,n[9]=qt.y,n[2]=Xn.z,n[6]=Or.z,n[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,n=t.elements,i=this.elements,a=s[0],o=s[4],l=s[8],c=s[12],u=s[1],h=s[5],f=s[9],d=s[13],g=s[2],v=s[6],m=s[10],p=s[14],E=s[3],b=s[7],M=s[11],y=s[15],w=n[0],T=n[4],P=n[8],x=n[12],S=n[1],D=n[5],R=n[9],I=n[13],N=n[2],V=n[6],B=n[10],z=n[14],$=n[3],j=n[7],W=n[11],L=n[15];return i[0]=a*w+o*S+l*N+c*$,i[4]=a*T+o*D+l*V+c*j,i[8]=a*P+o*R+l*B+c*W,i[12]=a*x+o*I+l*z+c*L,i[1]=u*w+h*S+f*N+d*$,i[5]=u*T+h*D+f*V+d*j,i[9]=u*P+h*R+f*B+d*W,i[13]=u*x+h*I+f*z+d*L,i[2]=g*w+v*S+m*N+p*$,i[6]=g*T+v*D+m*V+p*j,i[10]=g*P+v*R+m*B+p*W,i[14]=g*x+v*I+m*z+p*L,i[3]=E*w+b*S+M*N+y*$,i[7]=E*T+b*D+M*V+y*j,i[11]=E*P+b*R+M*B+y*W,i[15]=E*x+b*I+M*z+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],n=e[8],i=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15],E=l*d-c*f,b=o*d-c*h,M=o*f-l*h,y=a*d-c*u,w=a*f-l*u,T=a*h-o*u;return t*(v*E-m*b+p*M)-s*(g*E-m*y+p*w)+n*(g*b-v*y+p*T)-i*(g*M-v*w+m*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],E=h*m*c-v*f*c+v*l*d-o*m*d-h*l*p+o*f*p,b=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,M=u*v*c-g*h*c+g*o*d-a*v*d-u*o*p+a*h*p,y=g*h*l-u*v*l-g*o*f+a*v*f+u*o*m-a*h*m,w=t*E+s*b+n*M+i*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=E*T,e[1]=(v*f*i-h*m*i-v*n*d+s*m*d+h*n*p-s*f*p)*T,e[2]=(o*m*i-v*l*i+v*n*c-s*m*c-o*n*p+s*l*p)*T,e[3]=(h*l*i-o*f*i-h*n*c+s*f*c+o*n*d-s*l*d)*T,e[4]=b*T,e[5]=(u*m*i-g*f*i+g*n*d-t*m*d-u*n*p+t*f*p)*T,e[6]=(g*l*i-a*m*i-g*n*c+t*m*c+a*n*p-t*l*p)*T,e[7]=(a*f*i-u*l*i+u*n*c-t*f*c-a*n*d+t*l*d)*T,e[8]=M*T,e[9]=(g*h*i-u*v*i-g*s*d+t*v*d+u*s*p-t*h*p)*T,e[10]=(a*v*i-g*o*i+g*s*c-t*v*c-a*s*p+t*o*p)*T,e[11]=(u*o*i-a*h*i-u*s*c+t*h*c+a*s*d-t*o*d)*T,e[12]=y*T,e[13]=(u*v*n-g*h*n+g*s*f-t*v*f-u*s*m+t*h*m)*T,e[14]=(g*o*n-a*v*n-g*s*l+t*v*l+a*s*m-t*o*m)*T,e[15]=(a*h*n-u*o*n+u*s*l-t*h*l-a*s*f+t*o*f)*T,this}scale(e){const t=this.elements,s=e.x,n=e.y,i=e.z;return t[0]*=s,t[4]*=n,t[8]*=i,t[1]*=s,t[5]*=n,t[9]*=i,t[2]*=s,t[6]*=n,t[10]*=i,t[3]*=s,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,n))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),n=Math.sin(t),i=1-s,a=e.x,o=e.y,l=e.z,c=i*a,u=i*o;return this.set(c*a+s,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+s,u*l-n*a,0,c*l-n*o,u*l+n*a,i*l*l+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,n,i,a){return this.set(1,s,i,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,s){const n=this.elements,i=t._x,a=t._y,o=t._z,l=t._w,c=i+i,u=a+a,h=o+o,f=i*c,d=i*u,g=i*h,v=a*u,m=a*h,p=o*h,E=l*c,b=l*u,M=l*h,y=s.x,w=s.y,T=s.z;return n[0]=(1-(v+p))*y,n[1]=(d+M)*y,n[2]=(g-b)*y,n[3]=0,n[4]=(d-M)*w,n[5]=(1-(f+p))*w,n[6]=(m+E)*w,n[7]=0,n[8]=(g+b)*T,n[9]=(m-E)*T,n[10]=(1-(f+v))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,s){const n=this.elements;if(e.x=n[12],e.y=n[13],e.z=n[14],this.determinant()===0)return s.set(1,1,1),t.identity(),this;let i=Ci.set(n[0],n[1],n[2]).length();const a=Ci.set(n[4],n[5],n[6]).length(),o=Ci.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),cn.copy(this);const c=1/i,u=1/a,h=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),s.x=i,s.y=a,s.z=o,this}makePerspective(e,t,s,n,i,a,o=Mn,l=!1){const c=this.elements,u=2*i/(t-e),h=2*i/(s-n),f=(t+e)/(t-e),d=(s+n)/(s-n);let g,v;if(l)g=i/(a-i),v=a*i/(a-i);else if(o===Mn)g=-(a+i)/(a-i),v=-2*a*i/(a-i);else if(o===hs)g=-a/(a-i),v=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,s,n,i,a,o=Mn,l=!1){const c=this.elements,u=2/(t-e),h=2/(s-n),f=-(t+e)/(t-e),d=-(s+n)/(s-n);let g,v;if(l)g=1/(a-i),v=a/(a-i);else if(o===Mn)g=-2/(a-i),v=-(a+i)/(a-i);else if(o===hs)g=-1/(a-i),v=-i/(a-i);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let n=0;n<16;n++)if(t[n]!==s[n])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Ci=new Q,cn=new mt,ju=new Q(0,0,0),qu=new Q(1,1,1),Xn=new Q,Or=new Q,qt=new Q,Jo=new mt,Qo=new mi;class On{constructor(e=0,t=0,s=0,n=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,n=this._order){return this._x=e,this._y=t,this._z=s,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const n=e.elements,i=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,i),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,i)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-u,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Jo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jo,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qo.setFromEuler(this),this.setFromQuaternion(Qo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class yo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ku=0;const $o=new Q,Ri=new mi,Rn=new mt,Br=new Q,or=new Q,Zu=new Q,Ju=new mi,el=new Q(1,0,0),tl=new Q(0,1,0),nl=new Q(0,0,1),il={type:"added"},Qu={type:"removed"},Pi={type:"childadded",child:null},ks={type:"childremoved",child:null};class Wt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new Q,t=new On,s=new mi,n=new Q(1,1,1);function i(){s.setFromEuler(t,!1)}function a(){t.setFromQuaternion(s,void 0,!1)}t._onChange(i),s._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ze}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(el,e)}rotateY(e){return this.rotateOnAxis(tl,e)}rotateZ(e){return this.rotateOnAxis(nl,e)}translateOnAxis(e,t){return $o.copy(e).applyQuaternion(this.quaternion),this.position.add($o.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(el,e)}translateY(e){return this.translateOnAxis(tl,e)}translateZ(e){return this.translateOnAxis(nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Br.copy(e):Br.set(e,t,s);const n=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(or,Br,this.up):Rn.lookAt(Br,or,this.up),this.quaternion.setFromRotationMatrix(Rn),n&&(Rn.extractRotation(n.matrixWorld),Ri.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(il),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qu),ks.child=e,this.dispatchEvent(ks),ks.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(il),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,n=this.children.length;s<n;s++){const a=this.children[s].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,Zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Ju,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,n=t.length;s<n;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,n=t.length;s<n;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,n=t.length;s<n;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];i(e.shapes,h)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(e.materials,this.material[l]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(i(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(s.geometries=o),l.length>0&&(s.materials=l),c.length>0&&(s.textures=c),u.length>0&&(s.images=u),h.length>0&&(s.shapes=h),f.length>0&&(s.skeletons=f),d.length>0&&(s.animations=d),g.length>0&&(s.nodes=g)}return s.object=n,s;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const n=e.children[s];this.add(n.clone())}return this}}Wt.DEFAULT_UP=new Q(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new Q,Pn=new Q,Gs=new Q,Dn=new Q,Di=new Q,Ui=new Q,rl=new Q,zs=new Q,Vs=new Q,Hs=new Q,Ws=new pt,Xs=new pt,Ys=new pt;class hn{constructor(e=new Q,t=new Q,s=new Q){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,n){n.subVectors(s,t),un.subVectors(e,t),n.cross(un);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,s,n,i){un.subVectors(n,t),Pn.subVectors(s,t),Gs.subVectors(e,t);const a=un.dot(un),o=un.dot(Pn),l=un.dot(Gs),c=Pn.dot(Pn),u=Pn.dot(Gs),h=a*c-o*o;if(h===0)return i.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return i.set(1-d-g,g,d)}static containsPoint(e,t,s,n){return this.getBarycoord(e,t,s,n,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,s,n,i,a,o,l){return this.getBarycoord(e,t,s,n,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(e,t,s,n,i,a){return Ws.setScalar(0),Xs.setScalar(0),Ys.setScalar(0),Ws.fromBufferAttribute(e,t),Xs.fromBufferAttribute(e,s),Ys.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Ws,i.x),a.addScaledVector(Xs,i.y),a.addScaledVector(Ys,i.z),a}static isFrontFacing(e,t,s,n){return un.subVectors(s,t),Pn.subVectors(e,t),un.cross(Pn).dot(n)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,n){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,s,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),un.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,n,i){return hn.getInterpolation(e,this.a,this.b,this.c,t,s,n,i)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,n=this.b,i=this.c;let a,o;Di.subVectors(n,s),Ui.subVectors(i,s),zs.subVectors(e,s);const l=Di.dot(zs),c=Ui.dot(zs);if(l<=0&&c<=0)return t.copy(s);Vs.subVectors(e,n);const u=Di.dot(Vs),h=Ui.dot(Vs);if(u>=0&&h<=u)return t.copy(n);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(s).addScaledVector(Di,a);Hs.subVectors(e,i);const d=Di.dot(Hs),g=Ui.dot(Hs);if(g>=0&&d<=g)return t.copy(i);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(s).addScaledVector(Ui,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return rl.subVectors(i,n),o=(h-u)/(h-u+(d-g)),t.copy(n).addScaledVector(rl,o);const p=1/(m+v+f);return a=v*p,o=f*p,t.copy(s).addScaledVector(Di,a).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},kr={h:0,s:0,l:0};function js(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class et{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,n=rt.workingColorSpace){return this.r=e,this.g=t,this.b=s,rt.colorSpaceToWorking(this,n),this}setHSL(e,t,s,n=rt.workingColorSpace){if(e=Bu(e,1),t=$e(t,0,1),s=$e(s,0,1),t===0)this.r=this.g=this.b=s;else{const i=s<=.5?s*(1+t):s+t-s*t,a=2*s-i;this.r=js(a,i,e+1/3),this.g=js(a,i,e),this.b=js(a,i,e-1/3)}return rt.colorSpaceToWorking(this,n),this}setStyle(e,t=en){function s(i){i!==void 0&&parseFloat(i)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return s(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return s(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return s(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const s=Ec[e.toLowerCase()];return s!==void 0?this.setHex(s,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return rt.workingToColorSpace(Lt.copy(this),e),Math.round($e(Lt.r*255,0,255))*65536+Math.round($e(Lt.g*255,0,255))*256+Math.round($e(Lt.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Lt.copy(this),t);const s=Lt.r,n=Lt.g,i=Lt.b,a=Math.max(s,n,i),o=Math.min(s,n,i);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case s:l=(n-i)/h+(n<i?6:0);break;case n:l=(i-s)/h+2;break;case i:l=(s-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=en){rt.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,s=Lt.g,n=Lt.b;return e!==en?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(n*255)})`}offsetHSL(e,t,s){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(kr);const s=Rs(Yn.h,kr.h,t),n=Rs(Yn.s,kr.s,t),i=Rs(Yn.l,kr.l,t);return this.setHSL(s,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*s+i[6]*n,this.g=i[1]*t+i[4]*s+i[7]*n,this.b=i[2]*t+i[5]*s+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new et;et.NAMES=Ec;let $u=0;class Er extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=Gi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ua,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(s):n&&n.isVector3&&s&&s.isVector3?n.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(s.blending=this.blending),this.side!==Jn&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ca&&(s.blendSrc=this.blendSrc),this.blendDst!==ua&&(s.blendDst=this.blendDst),this.blendEquation!==li&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ho&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function n(i){const a=[];for(const o in i){const l=i[o];delete l.metadata,a.push(l)}return a}if(t){const i=n(e.textures),a=n(e.images);i.length>0&&(s.textures=i),a.length>0&&(s.images=a)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const n=t.length;s=new Array(n);for(let i=0;i!==n;++i)s[i]=t[i].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Eo extends Er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new Q,Gr=new je;let eh=0;class dn{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Wo,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[s+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=rr(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Gt(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),s=Gt(s,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=n,this}setXYZW(e,t,s,n,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),s=Gt(s,this.array),n=Gt(n,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wo&&(e.usage=this.usage),e}}class bc extends dn{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Tc extends dn{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class tn extends dn{constructor(e,t,s){super(new Float32Array(e),t,s)}}let th=0;const $t=new mt,qs=new Wt,Li=new Q,Kt=new _i,lr=new _i,Tt=new Q;class pn extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mc(e)?Tc:bc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const i=new Ze().getNormalMatrix(e);s.applyNormalMatrix(i),s.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,s){return $t.makeTranslation(e,t,s),this.applyMatrix4($t),this}scale(e,t,s){return $t.makeScale(e,t,s),this.applyMatrix4($t),this}lookAt(e){return qs.lookAt(e),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];s.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tn(s,3))}else{const s=Math.min(e.length,t.count);for(let n=0;n<s;n++){const i=e[n];t.setXYZ(n,i.x,i.y,i.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,n=t.length;s<n;s++){const i=t[s];Kt.setFromBufferAttribute(i),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const s=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Kt.min,lr.min),Kt.expandByPoint(Tt),Tt.addVectors(Kt.max,lr.max),Kt.expandByPoint(Tt)):(Kt.expandByPoint(lr.min),Kt.expandByPoint(lr.max))}Kt.getCenter(s);let n=0;for(let i=0,a=e.count;i<a;i++)Tt.fromBufferAttribute(e,i),n=Math.max(n,s.distanceToSquared(Tt));if(t)for(let i=0,a=t.length;i<a;i++){const o=t[i],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Tt.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),Tt.add(Li)),n=Math.max(n,s.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,n=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*s.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<s.count;P++)o[P]=new Q,l[P]=new Q;const c=new Q,u=new Q,h=new Q,f=new je,d=new je,g=new je,v=new Q,m=new Q;function p(P,x,S){c.fromBufferAttribute(s,P),u.fromBufferAttribute(s,x),h.fromBufferAttribute(s,S),f.fromBufferAttribute(i,P),d.fromBufferAttribute(i,x),g.fromBufferAttribute(i,S),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[P].add(v),o[x].add(v),o[S].add(v),l[P].add(m),l[x].add(m),l[S].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,x=E.length;P<x;++P){const S=E[P],D=S.start,R=S.count;for(let I=D,N=D+R;I<N;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const b=new Q,M=new Q,y=new Q,w=new Q;function T(P){y.fromBufferAttribute(n,P),w.copy(y);const x=o[P];b.copy(x),b.sub(y.multiplyScalar(y.dot(x))).normalize(),M.crossVectors(w,x);const D=M.dot(l[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,D)}for(let P=0,x=E.length;P<x;++P){const S=E[P],D=S.start,R=S.count;for(let I=D,N=D+R;I<N;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let f=0,d=s.count;f<d;f++)s.setXYZ(f,0,0,0);const n=new Q,i=new Q,a=new Q,o=new Q,l=new Q,c=new Q,u=new Q,h=new Q;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,i),h.subVectors(n,i),u.cross(h),o.fromBufferAttribute(s,g),l.fromBufferAttribute(s,v),c.fromBufferAttribute(s,m),o.add(u),l.add(u),c.add(u),s.setXYZ(g,o.x,o.y,o.z),s.setXYZ(v,l.x,l.y,l.z),s.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),i.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,i),h.subVectors(n,i),u.cross(h),s.setXYZ(f+0,u.x,u.y,u.z),s.setXYZ(f+1,u.x,u.y,u.z),s.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new dn(f,u,h)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,s=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,s);t.setAttribute(o,c)}const i=this.morphAttributes;for(const o in i){const l=[],c=i[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,s);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const l in s){const c=s[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const i=e.morphAttributes;for(const c in i){const u=[],h=i[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sl=new mt,ii=new Mo,zr=new ms,al=new Q,Vr=new Q,Hr=new Q,Wr=new Q,Ks=new Q,Xr=new Q,ol=new Q,Yr=new Q;class Xt extends Wt{constructor(e=new pn,t=new Eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const n=t[s[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const s=this.geometry,n=s.attributes.position,i=s.morphAttributes.position,a=s.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(i&&o){Xr.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const u=o[l],h=i[l];u!==0&&(Ks.fromBufferAttribute(h,e),a?Xr.addScaledVector(Ks,u):Xr.addScaledVector(Ks.sub(t),u))}t.add(Xr)}return t}raycast(e,t){const s=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),zr.copy(s.boundingSphere),zr.applyMatrix4(i),ii.copy(e.ray).recast(e.near),!(zr.containsPoint(ii.origin)===!1&&(ii.intersectSphere(zr,al)===null||ii.origin.distanceToSquared(al)>(e.far-e.near)**2))&&(sl.copy(i).invert(),ii.copy(e.ray).applyMatrix4(sl),!(s.boundingBox!==null&&ii.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,s){let n;const i=this.geometry,a=this.material,o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv1,h=i.attributes.normal,f=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,y=b;M<y;M+=3){const w=o.getX(M),T=o.getX(M+1),P=o.getX(M+2);n=jr(this,p,e,s,c,u,h,w,T,P),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const E=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);n=jr(this,a,e,s,c,u,h,E,b,M),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,y=b;M<y;M+=3){const w=M,T=M+1,P=M+2;n=jr(this,p,e,s,c,u,h,w,T,P),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const E=m,b=m+1,M=m+2;n=jr(this,a,e,s,c,u,h,E,b,M),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function nh(r,e,t,s,n,i,a,o){let l;if(e.side===Ht?l=s.intersectTriangle(a,i,n,!0,o):l=s.intersectTriangle(n,i,a,e.side===Jn,o),l===null)return null;Yr.copy(o),Yr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:r}}function jr(r,e,t,s,n,i,a,o,l,c){r.getVertexPosition(o,Vr),r.getVertexPosition(l,Hr),r.getVertexPosition(c,Wr);const u=nh(r,e,t,s,Vr,Hr,Wr,ol);if(u){const h=new Q;hn.getBarycoord(ol,Vr,Hr,Wr,h),n&&(u.uv=hn.getInterpolatedAttribute(n,o,l,c,h,new je)),i&&(u.uv1=hn.getInterpolatedAttribute(i,o,l,c,h,new je)),a&&(u.normal=hn.getInterpolatedAttribute(a,o,l,c,h,new Q),u.normal.dot(s.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new Q,materialIndex:0};hn.getNormal(Vr,Hr,Wr,f.normal),u.face=f,u.barycoord=h}return u}class br extends pn{constructor(e=1,t=1,s=1,n=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:n,heightSegments:i,depthSegments:a};const o=this;n=Math.floor(n),i=Math.floor(i),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,s,t,e,a,i,0),g("z","y","x",1,-1,s,t,-e,a,i,1),g("x","z","y",1,1,e,s,t,n,a,2),g("x","z","y",1,-1,e,s,-t,n,a,3),g("x","y","z",1,-1,e,t,s,n,i,4),g("x","y","z",-1,-1,e,t,-s,n,i,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(h,2));function g(v,m,p,E,b,M,y,w,T,P,x){const S=M/T,D=y/P,R=M/2,I=y/2,N=w/2,V=T+1,B=P+1;let z=0,$=0;const j=new Q;for(let W=0;W<B;W++){const L=W*D-I;for(let H=0;H<V;H++){const q=H*S-R;j[v]=q*E,j[m]=L*b,j[p]=N,c.push(j.x,j.y,j.z),j[v]=0,j[m]=0,j[p]=w>0?1:-1,u.push(j.x,j.y,j.z),h.push(H/T),h.push(1-W/P),z+=1}}for(let W=0;W<P;W++)for(let L=0;L<T;L++){const H=f+L+V*W,q=f+L+V*(W+1),ne=f+(L+1)+V*(W+1),ee=f+(L+1)+V*W;l.push(H,q,ee),l.push(q,ne,ee),$+=6}o.addGroup(d,$,x),d+=$,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const n=r[t][s];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=n.clone():Array.isArray(n)?e[t][s]=n.slice():e[t][s]=n}}return e}function Nt(r){const e={};for(let t=0;t<r.length;t++){const s=Yi(r[t]);for(const n in s)e[n]=s[n]}return e}function ih(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ac(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const wc={clone:Yi,merge:Nt};var rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends Er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rh,this.fragmentShader=sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=ih(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const n in this.extensions)this.extensions[n]===!0&&(s[n]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Cc extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new Q,ll=new je,cl=new je;class Zt extends Cc{constructor(e=50,t=1,s=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,ll,cl),t.subVectors(cl,ll)}setViewOffset(e,t,s,n,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(as*.5*this.fov)/this.zoom,s=2*t,n=this.aspect*s,i=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;i+=a.offsetX*n/l,t-=a.offsetY*s/c,n*=a.width/l,s*=a.height/c}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Fi=1;class ah extends Wt{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Zt(Ii,Fi,e,t);n.layers=this.layers,this.add(n);const i=new Zt(Ii,Fi,e,t);i.layers=this.layers,this.add(i);const a=new Zt(Ii,Fi,e,t);a.layers=this.layers,this.add(a);const o=new Zt(Ii,Fi,e,t);o.layers=this.layers,this.add(o);const l=new Zt(Ii,Fi,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Ii,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,n,i,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mn)s.up.set(0,1,0),s.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hs)s.up.set(0,-1,0),s.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,n),e.render(t,i),e.setRenderTarget(s,1,n),e.render(t,a),e.setRenderTarget(s,2,n),e.render(t,o),e.setRenderTarget(s,3,n),e.render(t,l),e.setRenderTarget(s,4,n),e.render(t,c),s.texture.generateMipmaps=v,e.setRenderTarget(s,5,n),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,s.texture.needsPMREMUpdate=!0}}class Rc extends It{constructor(e=[],t=pi,s,n,i,a,o,l,c,u){super(e,t,s,n,i,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pc extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},n=[s,s,s,s,s,s];this.texture=new Rc(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new br(5,5,5),i=new Tn({name:"CubemapFromEquirect",uniforms:Yi(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Ht,blending:Ln});i.uniforms.tEquirect.value=t;const a=new Xt(n,i),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=At),new ah(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,s=!0,n=!0){const i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,s,n);e.setRenderTarget(i)}}let qr=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const oh={type:"move"};class Zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let n=null,i=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,s),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,s),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(oh)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new qr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class lh extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ch extends It{constructor(e=null,t=1,s=1,n,i,a,o,l,c=Pt,u=Pt,h,f){super(null,a,o,l,c,u,n,i,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uh extends dn{constructor(e,t,s,n=1){super(e,t,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Js=new Q,hh=new Q,fh=new Ze;class qn{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,n){return this.normal.set(e,t,s),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const n=Js.subVectors(s,t).cross(hh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Js),n=this.normal.dot(s);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(s,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||fh.getNormalMatrix(e),n=this.coplanarPoint(Js).applyMatrix4(e),i=this.normal.applyMatrix3(s).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new ms,dh=new je(.5,.5),Kr=new Q;class bo{constructor(e=new qn,t=new qn,s=new qn,n=new qn,i=new qn,a=new qn){this.planes=[e,t,s,n,i,a]}set(e,t,s,n,i,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(s),o[3].copy(n),o[4].copy(i),o[5].copy(a),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Mn,s=!1){const n=this.planes,i=e.elements,a=i[0],o=i[1],l=i[2],c=i[3],u=i[4],h=i[5],f=i[6],d=i[7],g=i[8],v=i[9],m=i[10],p=i[11],E=i[12],b=i[13],M=i[14],y=i[15];if(n[0].setComponents(c-a,d-u,p-g,y-E).normalize(),n[1].setComponents(c+a,d+u,p+g,y+E).normalize(),n[2].setComponents(c+o,d+h,p+v,y+b).normalize(),n[3].setComponents(c-o,d-h,p-v,y-b).normalize(),s)n[4].setComponents(l,f,m,M).normalize(),n[5].setComponents(c-l,d-f,p-m,y-M).normalize();else if(n[4].setComponents(c-l,d-f,p-m,y-M).normalize(),t===Mn)n[5].setComponents(c+l,d+f,p+m,y+M).normalize();else if(t===hs)n[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){ri.center.set(0,0,0);const t=dh.distanceTo(e.center);return ri.radius=.7071067811865476+t,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,s=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(s)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const n=t[s];if(Kr.x=n.normal.x>0?e.max.x:e.min.x,Kr.y=n.normal.y>0?e.max.y:e.min.y,Kr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mr extends It{constructor(e,t,s=bn,n,i,a,o=Pt,l=Pt,c,u=Nn,h=1){if(u!==Nn&&u!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,n,i,a,o,l,u,s,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new So(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ph extends Mr{constructor(e,t=bn,s=pi,n,i,a=Pt,o=Pt,l,c=Nn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,s,n,i,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dc extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vi extends pn{constructor(e=1,t=1,s=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:n};const i=e/2,a=t/2,o=Math.floor(s),l=Math.floor(n),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const E=p*f-a;for(let b=0;b<c;b++){const M=b*h-i;g.push(M,-E,0),v.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const b=E+c*p,M=E+c*(p+1),y=E+1+c*(p+1),w=E+1+c*p;d.push(b,M,w),d.push(M,y,w)}this.setIndex(d),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.widthSegments,e.heightSegments)}}class ds extends pn{constructor(e=1,t=32,s=16,n=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:n,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new Q,f=new Q,d=[],g=[],v=[],m=[];for(let p=0;p<=s;p++){const E=[],b=p/s;let M=0;p===0&&a===0?M=.5/t:p===s&&l===Math.PI&&(M=-.5/t);for(let y=0;y<=t;y++){const w=y/t;h.x=-e*Math.cos(n+w*i)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(n+w*i)*Math.sin(a+b*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(w+M,1-b),E.push(c++)}u.push(E)}for(let p=0;p<s;p++)for(let E=0;E<t;E++){const b=u[p][E+1],M=u[p][E],y=u[p+1][E],w=u[p+1][E+1];(p!==0||a>0)&&d.push(b,M,w),(p!==s-1||l<Math.PI)&&d.push(M,y,w)}this.setIndex(d),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mh extends Tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ul extends Er{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new et(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sc,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Uc extends Er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lc extends Er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ic extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Qs=new mt,hl=new Q,fl=new Q;class gh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(hl),fl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fl),t.updateMatrixWorld(),Qs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qs,t.coordinateSystem,t.reversedDepth),t.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Qs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _h extends gh{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}}class vh extends Ic{constructor(e,t,s=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=n,this.shadow=new _h}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Fc extends Cc{constructor(e=-1,t=1,s=1,n=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=n,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,n,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=s-e,a=s+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,a=i+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xh extends Ic{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sh extends pn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Mh extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const dl=new mt;class yh{constructor(e,t,s=0,n=1/0){this.ray=new Mo(e,t),this.near=s,this.far=n,this.camera=null,this.layers=new yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):it("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dl),this}intersectObject(e,t=!0,s=[]){return to(e,this,s,t),s.sort(pl),s}intersectObjects(e,t=!0,s=[]){for(let n=0,i=e.length;n<i;n++)to(e[n],this,s,t);return s.sort(pl),s}}function pl(r,e){return r.distance-e.distance}function to(r,e,t,s){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&s===!0){const i=r.children;for(let a=0,o=i.length;a<o;a++)to(i[a],e,t,!0)}}class ml{constructor(e=1,t=0,s=0){this.radius=e,this.phi=t,this.theta=s}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Eh extends gi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){qe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function gl(r,e,t,s){const n=bh(s);switch(t){case _c:return r*e;case xc:return r*e/n.components*n.byteLength;case mo:return r*e/n.components*n.byteLength;case Wi:return r*e*2/n.components*n.byteLength;case go:return r*e*2/n.components*n.byteLength;case vc:return r*e*3/n.components*n.byteLength;case fn:return r*e*4/n.components*n.byteLength;case _o:return r*e*4/n.components*n.byteLength;case ns:case is:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case rs:case ss:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ea:case Ta:return Math.max(r,16)*Math.max(e,8)/4;case ya:case ba:return Math.max(r,8)*Math.max(e,8)/2;case Aa:case wa:case Ra:case Pa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Da:case Ua:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Na:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ka:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case za:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Va:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Xa:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ja:case qa:case Ka:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Za:case Ja:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Qa:case $a:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bh(r){switch(r){case Jt:case dc:return{byteLength:1,components:1};case vr:case pc:case Fn:return{byteLength:2,components:1};case fo:case po:return{byteLength:2,components:4};case bn:case ho:case Sn:return{byteLength:4,components:1};case mc:case gc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uo}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uo);function Nc(){let r=null,e=!1,t=null,s=null;function n(i,a){t(i,a),s=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){r=i}}}function Th(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function s(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];r.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(c.buffer,o,l),c.version=o.version}}return{get:n,remove:i,update:a}}var Ah=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ch=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ph=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ih=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Oh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_f=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Af=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,If=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,td=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,id=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,od=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,md=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Md=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ad=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ld=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Id=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Od=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$d=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,np=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:Ah,alphahash_pars_fragment:wh,alphamap_fragment:Ch,alphamap_pars_fragment:Rh,alphatest_fragment:Ph,alphatest_pars_fragment:Dh,aomap_fragment:Uh,aomap_pars_fragment:Lh,batching_pars_vertex:Ih,batching_vertex:Fh,begin_vertex:Nh,beginnormal_vertex:Oh,bsdfs:Bh,iridescence_fragment:kh,bumpmap_pars_fragment:Gh,clipping_planes_fragment:zh,clipping_planes_pars_fragment:Vh,clipping_planes_pars_vertex:Hh,clipping_planes_vertex:Wh,color_fragment:Xh,color_pars_fragment:Yh,color_pars_vertex:jh,color_vertex:qh,common:Kh,cube_uv_reflection_fragment:Zh,defaultnormal_vertex:Jh,displacementmap_pars_vertex:Qh,displacementmap_vertex:$h,emissivemap_fragment:ef,emissivemap_pars_fragment:tf,colorspace_fragment:nf,colorspace_pars_fragment:rf,envmap_fragment:sf,envmap_common_pars_fragment:af,envmap_pars_fragment:of,envmap_pars_vertex:lf,envmap_physical_pars_fragment:xf,envmap_vertex:cf,fog_vertex:uf,fog_pars_vertex:hf,fog_fragment:ff,fog_pars_fragment:df,gradientmap_pars_fragment:pf,lightmap_pars_fragment:mf,lights_lambert_fragment:gf,lights_lambert_pars_fragment:_f,lights_pars_begin:vf,lights_toon_fragment:Sf,lights_toon_pars_fragment:Mf,lights_phong_fragment:yf,lights_phong_pars_fragment:Ef,lights_physical_fragment:bf,lights_physical_pars_fragment:Tf,lights_fragment_begin:Af,lights_fragment_maps:wf,lights_fragment_end:Cf,logdepthbuf_fragment:Rf,logdepthbuf_pars_fragment:Pf,logdepthbuf_pars_vertex:Df,logdepthbuf_vertex:Uf,map_fragment:Lf,map_pars_fragment:If,map_particle_fragment:Ff,map_particle_pars_fragment:Nf,metalnessmap_fragment:Of,metalnessmap_pars_fragment:Bf,morphinstance_vertex:kf,morphcolor_vertex:Gf,morphnormal_vertex:zf,morphtarget_pars_vertex:Vf,morphtarget_vertex:Hf,normal_fragment_begin:Wf,normal_fragment_maps:Xf,normal_pars_fragment:Yf,normal_pars_vertex:jf,normal_vertex:qf,normalmap_pars_fragment:Kf,clearcoat_normal_fragment_begin:Zf,clearcoat_normal_fragment_maps:Jf,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:$f,opaque_fragment:ed,packing:td,premultiplied_alpha_fragment:nd,project_vertex:id,dithering_fragment:rd,dithering_pars_fragment:sd,roughnessmap_fragment:ad,roughnessmap_pars_fragment:od,shadowmap_pars_fragment:ld,shadowmap_pars_vertex:cd,shadowmap_vertex:ud,shadowmask_pars_fragment:hd,skinbase_vertex:fd,skinning_pars_vertex:dd,skinning_vertex:pd,skinnormal_vertex:md,specularmap_fragment:gd,specularmap_pars_fragment:_d,tonemapping_fragment:vd,tonemapping_pars_fragment:xd,transmission_fragment:Sd,transmission_pars_fragment:Md,uv_pars_fragment:yd,uv_pars_vertex:Ed,uv_vertex:bd,worldpos_vertex:Td,background_vert:Ad,background_frag:wd,backgroundCube_vert:Cd,backgroundCube_frag:Rd,cube_vert:Pd,cube_frag:Dd,depth_vert:Ud,depth_frag:Ld,distance_vert:Id,distance_frag:Fd,equirect_vert:Nd,equirect_frag:Od,linedashed_vert:Bd,linedashed_frag:kd,meshbasic_vert:Gd,meshbasic_frag:zd,meshlambert_vert:Vd,meshlambert_frag:Hd,meshmatcap_vert:Wd,meshmatcap_frag:Xd,meshnormal_vert:Yd,meshnormal_frag:jd,meshphong_vert:qd,meshphong_frag:Kd,meshphysical_vert:Zd,meshphysical_frag:Jd,meshtoon_vert:Qd,meshtoon_frag:$d,points_vert:ep,points_frag:tp,shadow_vert:np,shadow_frag:ip,sprite_vert:rp,sprite_frag:sp},Le={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},vn={basic:{uniforms:Nt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Nt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new et(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Nt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Nt([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Nt([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new et(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Nt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Nt([Le.points,Le.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Nt([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Nt([Le.common,Le.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Nt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Nt([Le.sprite,Le.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Nt([Le.common,Le.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Nt([Le.lights,Le.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};vn.physical={uniforms:Nt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Zr={r:0,b:0,g:0},si=new On,ap=new mt;function op(r,e,t,s,n,i,a){const o=new et(0);let l=i===!0?0:1,c,u,h=null,f=0,d=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function v(b){let M=!1;const y=g(b);y===null?p(o,l):y&&y.isColor&&(p(y,1),M=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?s.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(b,M){const y=g(M);y&&(y.isCubeTexture||y.mapping===ps)?(u===void 0&&(u=new Xt(new br(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Yi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),si.copy(M.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ap.makeRotationFromEuler(si)),u.material.toneMapped=rt.getTransfer(y.colorSpace)!==ct,(h!==y||f!==y.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=r.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Xt(new vi(2,2),new Tn({name:"BackgroundMaterial",uniforms:Yi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=rt.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(Zr,Ac(r)),s.buffers.color.setClear(Zr.r,Zr.g,Zr.b,M,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:v,addToRenderList:m,dispose:E}}function lp(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},n=f(null);let i=n,a=!1;function o(S,D,R,I,N){let V=!1;const B=h(I,R,D);i!==B&&(i=B,c(i.object)),V=d(S,I,R,N),V&&g(S,I,R,N),N!==null&&e.update(N,r.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,M(S,D,R,I),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function h(S,D,R){const I=R.wireframe===!0;let N=s[S.id];N===void 0&&(N={},s[S.id]=N);let V=N[D.id];V===void 0&&(V={},N[D.id]=V);let B=V[I];return B===void 0&&(B=f(l()),V[I]=B),B}function f(S){const D=[],R=[],I=[];for(let N=0;N<t;N++)D[N]=0,R[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:R,attributeDivisors:I,object:S,attributes:{},index:null}}function d(S,D,R,I){const N=i.attributes,V=D.attributes;let B=0;const z=R.getAttributes();for(const $ in z)if(z[$].location>=0){const W=N[$];let L=V[$];if(L===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(L=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(L=S.instanceColor)),W===void 0||W.attribute!==L||L&&W.data!==L.data)return!0;B++}return i.attributesNum!==B||i.index!==I}function g(S,D,R,I){const N={},V=D.attributes;let B=0;const z=R.getAttributes();for(const $ in z)if(z[$].location>=0){let W=V[$];W===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(W=S.instanceColor));const L={};L.attribute=W,W&&W.data&&(L.data=W.data),N[$]=L,B++}i.attributes=N,i.attributesNum=B,i.index=I}function v(){const S=i.newAttributes;for(let D=0,R=S.length;D<R;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const R=i.newAttributes,I=i.enabledAttributes,N=i.attributeDivisors;R[S]=1,I[S]===0&&(r.enableVertexAttribArray(S),I[S]=1),N[S]!==D&&(r.vertexAttribDivisor(S,D),N[S]=D)}function E(){const S=i.newAttributes,D=i.enabledAttributes;for(let R=0,I=D.length;R<I;R++)D[R]!==S[R]&&(r.disableVertexAttribArray(R),D[R]=0)}function b(S,D,R,I,N,V,B){B===!0?r.vertexAttribIPointer(S,D,R,N,V):r.vertexAttribPointer(S,D,R,I,N,V)}function M(S,D,R,I){v();const N=I.attributes,V=R.getAttributes(),B=D.defaultAttributeValues;for(const z in V){const $=V[z];if($.location>=0){let j=N[z];if(j===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){const W=j.normalized,L=j.itemSize,H=e.get(j);if(H===void 0)continue;const q=H.buffer,ne=H.type,ee=H.bytesPerElement,G=ne===r.INT||ne===r.UNSIGNED_INT||j.gpuType===ho;if(j.isInterleavedBufferAttribute){const k=j.data,J=k.stride,ve=j.offset;if(k.isInstancedInterleavedBuffer){for(let fe=0;fe<$.locationSize;fe++)p($.location+fe,k.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let fe=0;fe<$.locationSize;fe++)m($.location+fe);r.bindBuffer(r.ARRAY_BUFFER,q);for(let fe=0;fe<$.locationSize;fe++)b($.location+fe,L/$.locationSize,ne,W,J*ee,(ve+L/$.locationSize*fe)*ee,G)}else{if(j.isInstancedBufferAttribute){for(let k=0;k<$.locationSize;k++)p($.location+k,j.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let k=0;k<$.locationSize;k++)m($.location+k);r.bindBuffer(r.ARRAY_BUFFER,q);for(let k=0;k<$.locationSize;k++)b($.location+k,L/$.locationSize,ne,W,L*ee,L/$.locationSize*k*ee,G)}}else if(B!==void 0){const W=B[z];if(W!==void 0)switch(W.length){case 2:r.vertexAttrib2fv($.location,W);break;case 3:r.vertexAttrib3fv($.location,W);break;case 4:r.vertexAttrib4fv($.location,W);break;default:r.vertexAttrib1fv($.location,W)}}}}E()}function y(){P();for(const S in s){const D=s[S];for(const R in D){const I=D[R];for(const N in I)u(I[N].object),delete I[N];delete D[R]}delete s[S]}}function w(S){if(s[S.id]===void 0)return;const D=s[S.id];for(const R in D){const I=D[R];for(const N in I)u(I[N].object),delete I[N];delete D[R]}delete s[S.id]}function T(S){for(const D in s){const R=s[D];if(R[S.id]===void 0)continue;const I=R[S.id];for(const N in I)u(I[N].object),delete I[N];delete R[S.id]}}function P(){x(),a=!0,i!==n&&(i=n,c(i.object))}function x(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:x,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function cp(r,e,t){let s;function n(c){s=c}function i(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(s,c,u,h),t.update(u,s,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,s,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(s,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,s,1)}}this.setMode=n,this.render=i,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function up(r,e,t,s){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(T){return!(T!==fn&&s.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Jt&&s.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Sn&&!P)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,maxSamples:y,samples:w}}function hp(r){const e=this;let t=null,s=0,n=!1,i=!1;const a=new qn,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||s!==0||n;return n=f,s=h.length,d},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!n||g===null||g.length===0||i&&!m)i?u(null):c();else{const E=i?0:s,b=E*4;let M=p.clippingState||null;l.value=M,M=u(g,f,b,d);for(let y=0;y!==b;++y)M[y]=t[y];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=d;b!==v;++b,M+=4)a.copy(h[b]).applyMatrix4(E,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function fp(r){let e=new WeakMap;function t(a,o){return o===va?a.mapping=pi:o===xa&&(a.mapping=Hi),a}function s(a){if(a&&a.isTexture){const o=a.mapping;if(o===va||o===xa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Pc(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:s,dispose:i}}const Zn=4,_l=[.125,.215,.35,.446,.526,.582],ci=20,dp=256,cr=new Fc,vl=new et;let $s=null,ea=0,ta=0,na=!1;const pp=new Q;class xl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,n=100,i={}){const{size:a=256,position:o=pp}=i;$s=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($s,ea,ta),this._renderer.xr.enabled=na,e.scissorTest=!1,Ni(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$s=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:At,minFilter:At,generateMipmaps:!1,type:Fn,format:fn,colorSpace:Xi,depthBuffer:!1},n=Sl(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(e,t,s);const{_lodMax:i}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mp(i)),this._blurMaterial=_p(i,e,t),this._ggxMaterial=gp(i,e,t)}return n}_compileMaterial(e){const t=new Xt(new pn,e);this._renderer.compile(t,cr)}_sceneToCubeUV(e,t,s,n,i){const l=new Zt(90,1,t,s),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(vl),h.toneMapping=yn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(n),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new br,new Eo({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,p=!0):(m.color.copy(vl),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(i.x,i.y,i.z),l.lookAt(i.x+u[b],i.y,i.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(i.x,i.y,i.z),l.lookAt(i.x,i.y+u[b],i.z)):(l.up.set(0,c[b],0),l.position.set(i.x,i.y,i.z),l.lookAt(i.x,i.y,i.z+u[b]));const y=this._cubeSize;Ni(n,M*y,b>2?y:0,y,y),h.setRenderTarget(n),p&&h.render(v,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=E}_textureToCubeUV(e,t){const s=this._renderer,n=e.mapping===pi||e.mapping===Hi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const i=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;const o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;Ni(t,0,0,3*l,2*l),s.setRenderTarget(t),s.render(a,cr)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let i=1;i<n;i++)this._applyGGXFilter(e,i-1,i);t.autoClear=s}_applyGGXFilter(e,t,s){const n=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[s];o.material=a;const l=a.uniforms,c=s/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:g}=this,v=this._sizeLods[s],m=3*v*(s>g-Zn?s-g+Zn:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Ni(i,m,p,3*v,2*v),n.setRenderTarget(i),n.render(o,cr),l.envMap.value=i.texture,l.roughness.value=0,l.mipInt.value=g-s,Ni(e,m,p,3*v,2*v),n.setRenderTarget(e),n.render(o,cr)}_blur(e,t,s,n,i){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,s,n,"latitudinal",i),this._halfBlur(a,e,s,s,n,"longitudinal",i)}_halfBlur(e,t,s,n,i,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[n];h.material=c;const f=c.uniforms,d=this._sizeLods[s]-1,g=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*ci-1),v=i/g,m=isFinite(i)?1+Math.floor(u*v):ci;m>ci&&qe(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`);const p=[];let E=0;for(let T=0;T<ci;++T){const P=T/v,x=Math.exp(-P*P/2);p.push(x),T===0?E+=x:T<m&&(E+=2*x)}for(let T=0;T<p.length;T++)p[T]=p[T]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-s;const M=this._sizeLods[n],y=3*M*(n>b-Zn?n-b+Zn:0),w=4*(this._cubeSize-M);Ni(t,y,w,3*M,2*M),l.setRenderTarget(t),l.render(h,cr)}}function mp(r){const e=[],t=[],s=[];let n=r;const i=r-Zn+1+_l.length;for(let a=0;a<i;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>r-Zn?l=_l[a-r+Zn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,E=new Float32Array(v*g*d),b=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,P=w>2?0:-1,x=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];E.set(x,v*g*w),b.set(f,m*g*w);const S=[w,w,w,w,w,w];M.set(S,p*g*w)}const y=new pn;y.setAttribute("position",new dn(E,v)),y.setAttribute("uv",new dn(b,m)),y.setAttribute("faceIndex",new dn(M,p)),s.push(new Xt(y,null)),n>Zn&&n--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function Sl(r,e,t){const s=new En(r,e,t);return s.texture.mapping=ps,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ni(r,e,t,s,n){r.viewport.set(e,t,s,n),r.scissor.set(e,t,s,n)}function gp(r,e,t){return new Tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function _p(r,e,t){const s=new Float32Array(ci),n=new Q(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ml(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function yl(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function gs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vp(r){let e=new WeakMap,t=null;function s(o){if(o&&o.isTexture){const l=o.mapping,c=l===va||l===xa,u=l===pi||l===Hi;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new xl(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new xl(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",i),h.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:a}}function xp(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const n=r.getExtension(s);return e[s]=n,n}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const n=t(s);return n===null&&Sr("WebGLRenderer: "+s+" extension not supported."),n}}}function Sp(r,e,t,s){const n={},i=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete n[f.id];const d=i.get(f);d&&(e.remove(d),i.delete(f)),s.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const E=d.array;v=d.version;for(let b=0,M=E.length;b<M;b+=3){const y=E[b+0],w=E[b+1],T=E[b+2];f.push(y,w,w,T,T,y)}}else if(g!==void 0){const E=g.array;v=g.version;for(let b=0,M=E.length/3-1;b<M;b+=3){const y=b+0,w=b+1,T=b+2;f.push(y,w,w,T,T,y)}}else return;const m=new(Mc(f)?Tc:bc)(f,1);m.version=v;const p=i.get(h);p&&e.remove(p),i.set(h,m)}function u(h){const f=i.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return i.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Mp(r,e,t){let s;function n(f){s=f}let i,a;function o(f){i=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(s,d,i,f*a),t.update(d,s,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(s,d,i,f*a,g),t.update(d,s,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,d,0,i,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,s,1)}function h(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(s,d,0,i,f,0,v,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*v[E];t.update(p,s,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function yp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(i,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(i/3);break;case r.LINES:t.lines+=o*(i/2);break;case r.LINE_STRIP:t.lines+=o*(i-1);break;case r.LINE_LOOP:t.lines+=o*i;break;case r.POINTS:t.points+=o*i;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:s}}function Ep(r,e,t){const s=new WeakMap,n=new pt;function i(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=s.get(o);if(f===void 0||f.count!==h){let S=function(){P.dispose(),s.delete(o),o.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let y=o.attributes.position.count*M,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*w*4*h),P=new yc(T,y,w,h);P.type=Sn,P.needsUpdate=!0;const x=M*4;for(let D=0;D<h;D++){const R=p[D],I=E[D],N=b[D],V=y*w*4*D;for(let B=0;B<R.count;B++){const z=B*x;g===!0&&(n.fromBufferAttribute(R,B),T[V+z+0]=n.x,T[V+z+1]=n.y,T[V+z+2]=n.z,T[V+z+3]=0),v===!0&&(n.fromBufferAttribute(I,B),T[V+z+4]=n.x,T[V+z+5]=n.y,T[V+z+6]=n.z,T[V+z+7]=0),m===!0&&(n.fromBufferAttribute(N,B),T[V+z+8]=n.x,T[V+z+9]=n.y,T[V+z+10]=n.z,T[V+z+11]=N.itemSize===4?n.w:1)}}f={count:h,texture:P,size:new je(y,w)},s.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:i}}function bp(r,e,t,s){let n=new WeakMap;function i(l){const c=s.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return h}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:a}}const Tp={[sc]:"LINEAR_TONE_MAPPING",[ac]:"REINHARD_TONE_MAPPING",[oc]:"CINEON_TONE_MAPPING",[lc]:"ACES_FILMIC_TONE_MAPPING",[uc]:"AGX_TONE_MAPPING",[hc]:"NEUTRAL_TONE_MAPPING",[cc]:"CUSTOM_TONE_MAPPING"};function Ap(r,e,t,s,n){const i=new En(e,t,{type:r,depthBuffer:s,stencilBuffer:n}),a=new En(e,t,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),o=new pn;o.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new tn([0,2,0,0,2,0],2));const l=new mh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Xt(o,l),u=new Fc(-1,1,1,-1,0,1);let h=null,f=null,d=!1,g,v=null,m=[],p=!1;this.setSize=function(E,b){i.setSize(E,b),a.setSize(E,b);for(let M=0;M<m.length;M++){const y=m[M];y.setSize&&y.setSize(E,b)}},this.setEffects=function(E){m=E,p=m.length>0&&m[0].isRenderPass===!0;const b=i.width,M=i.height;for(let y=0;y<m.length;y++){const w=m[y];w.setSize&&w.setSize(b,M)}},this.begin=function(E,b){if(d||E.toneMapping===yn&&m.length===0)return!1;if(v=b,b!==null){const M=b.width,y=b.height;(i.width!==M||i.height!==y)&&this.setSize(M,y)}return p===!1&&E.setRenderTarget(i),g=E.toneMapping,E.toneMapping=yn,!0},this.hasRenderPass=function(){return p},this.end=function(E,b){E.toneMapping=g,d=!0;let M=i,y=a;for(let w=0;w<m.length;w++){const T=m[w];if(T.enabled!==!1&&(T.render(E,y,M,b),T.needsSwap!==!1)){const P=M;M=y,y=P}}if(h!==E.outputColorSpace||f!==E.toneMapping){h=E.outputColorSpace,f=E.toneMapping,l.defines={},rt.getTransfer(h)===ct&&(l.defines.SRGB_TRANSFER="");const w=Tp[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,E.setRenderTarget(v),E.render(c,u),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){i.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Oc=new It,no=new Mr(1,1),Bc=new yc,kc=new Xu,Gc=new Rc,El=[],bl=[],Tl=new Float32Array(16),Al=new Float32Array(9),wl=new Float32Array(4);function ji(r,e,t){const s=r[0];if(s<=0||s>0)return r;const n=e*t;let i=El[n];if(i===void 0&&(i=new Float32Array(n),El[n]=i),e!==0){s.toArray(i,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(i,o)}return i}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Et(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function _s(r,e){let t=bl[e];t===void 0&&(t=new Int32Array(e),bl[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function wp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Cp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),Et(t,e)}}function Rp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),Et(t,e)}}function Pp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),Et(t,e)}}function Dp(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,s))return;wl.set(s),r.uniformMatrix2fv(this.addr,!1,wl),Et(t,s)}}function Up(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,s))return;Al.set(s),r.uniformMatrix3fv(this.addr,!1,Al),Et(t,s)}}function Lp(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,s))return;Tl.set(s),r.uniformMatrix4fv(this.addr,!1,Tl),Et(t,s)}}function Ip(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Fp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2iv(this.addr,e),Et(t,e)}}function Np(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3iv(this.addr,e),Et(t,e)}}function Op(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4iv(this.addr,e),Et(t,e)}}function Bp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function kp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2uiv(this.addr,e),Et(t,e)}}function Gp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3uiv(this.addr,e),Et(t,e)}}function zp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4uiv(this.addr,e),Et(t,e)}}function Vp(r,e,t){const s=this.cache,n=t.allocateTextureUnit();s[0]!==n&&(r.uniform1i(this.addr,n),s[0]=n);let i;this.type===r.SAMPLER_2D_SHADOW?(no.compareFunction=t.isReversedDepthBuffer()?xo:vo,i=no):i=Oc,t.setTexture2D(e||i,n)}function Hp(r,e,t){const s=this.cache,n=t.allocateTextureUnit();s[0]!==n&&(r.uniform1i(this.addr,n),s[0]=n),t.setTexture3D(e||kc,n)}function Wp(r,e,t){const s=this.cache,n=t.allocateTextureUnit();s[0]!==n&&(r.uniform1i(this.addr,n),s[0]=n),t.setTextureCube(e||Gc,n)}function Xp(r,e,t){const s=this.cache,n=t.allocateTextureUnit();s[0]!==n&&(r.uniform1i(this.addr,n),s[0]=n),t.setTexture2DArray(e||Bc,n)}function Yp(r){switch(r){case 5126:return wp;case 35664:return Cp;case 35665:return Rp;case 35666:return Pp;case 35674:return Dp;case 35675:return Up;case 35676:return Lp;case 5124:case 35670:return Ip;case 35667:case 35671:return Fp;case 35668:case 35672:return Np;case 35669:case 35673:return Op;case 5125:return Bp;case 36294:return kp;case 36295:return Gp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}function jp(r,e){r.uniform1fv(this.addr,e)}function qp(r,e){const t=ji(e,this.size,2);r.uniform2fv(this.addr,t)}function Kp(r,e){const t=ji(e,this.size,3);r.uniform3fv(this.addr,t)}function Zp(r,e){const t=ji(e,this.size,4);r.uniform4fv(this.addr,t)}function Jp(r,e){const t=ji(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Qp(r,e){const t=ji(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function $p(r,e){const t=ji(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function em(r,e){r.uniform1iv(this.addr,e)}function tm(r,e){r.uniform2iv(this.addr,e)}function nm(r,e){r.uniform3iv(this.addr,e)}function im(r,e){r.uniform4iv(this.addr,e)}function rm(r,e){r.uniform1uiv(this.addr,e)}function sm(r,e){r.uniform2uiv(this.addr,e)}function am(r,e){r.uniform3uiv(this.addr,e)}function om(r,e){r.uniform4uiv(this.addr,e)}function lm(r,e,t){const s=this.cache,n=e.length,i=_s(t,n);yt(s,i)||(r.uniform1iv(this.addr,i),Et(s,i));let a;this.type===r.SAMPLER_2D_SHADOW?a=no:a=Oc;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,i[o])}function cm(r,e,t){const s=this.cache,n=e.length,i=_s(t,n);yt(s,i)||(r.uniform1iv(this.addr,i),Et(s,i));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||kc,i[a])}function um(r,e,t){const s=this.cache,n=e.length,i=_s(t,n);yt(s,i)||(r.uniform1iv(this.addr,i),Et(s,i));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Gc,i[a])}function hm(r,e,t){const s=this.cache,n=e.length,i=_s(t,n);yt(s,i)||(r.uniform1iv(this.addr,i),Et(s,i));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Bc,i[a])}function fm(r){switch(r){case 5126:return jp;case 35664:return qp;case 35665:return Kp;case 35666:return Zp;case 35674:return Jp;case 35675:return Qp;case 35676:return $p;case 5124:case 35670:return em;case 35667:case 35671:return tm;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return rm;case 36294:return sm;case 36295:return am;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return hm}}class dm{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=Yp(t.type)}}class pm{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fm(t.type)}}class mm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const n=this.seq;for(let i=0,a=n.length;i!==a;++i){const o=n[i];o.setValue(e,t[o.id],s)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function Cl(r,e){r.seq.push(e),r.map[e.id]=e}function gm(r,e,t){const s=r.name,n=s.length;for(ia.lastIndex=0;;){const i=ia.exec(s),a=ia.lastIndex;let o=i[1];const l=i[2]==="]",c=i[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Cl(t,c===void 0?new dm(o,r,e):new pm(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new mm(o),Cl(t,h)),t=h}}}class os{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);gm(o,l,this)}const n=[],i=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):i.push(a);n.length>0&&(this.seq=n.concat(i))}setValue(e,t,s,n){const i=this.map[t];i!==void 0&&i.setValue(e,s,n)}setOptional(e,t,s){const n=t[s];n!==void 0&&this.setValue(e,s,n)}static upload(e,t,s,n){for(let i=0,a=t.length;i!==a;++i){const o=t[i],l=s[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const s=[];for(let n=0,i=e.length;n!==i;++n){const a=e[n];a.id in t&&s.push(a)}return s}}function Rl(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const _m=37297;let vm=0;function xm(r,e){const t=r.split(`
`),s=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let a=n;a<i;a++){const o=a+1;s.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return s.join(`
`)}const Pl=new Ze;function Sm(r){rt._getMatrix(Pl,rt.workingColorSpace,r);const e=`mat3( ${Pl.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(r)){case us:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Dl(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),i=(r.getShaderInfoLog(e)||"").trim();if(s&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+xm(r.getShaderSource(e),o)}else return i}function Mm(r,e){const t=Sm(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ym={[sc]:"Linear",[ac]:"Reinhard",[oc]:"Cineon",[lc]:"ACESFilmic",[uc]:"AgX",[hc]:"Neutral",[cc]:"Custom"};function Em(r,e){const t=ym[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jr=new Q;function bm(){rt.getLuminanceCoefficients(Jr);const r=Jr.x.toFixed(4),e=Jr.y.toFixed(4),t=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function Am(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function wm(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<s;n++){const i=r.getActiveAttrib(e,n),a=i.name;let o=1;i.type===r.FLOAT_MAT2&&(o=2),i.type===r.FLOAT_MAT3&&(o=3),i.type===r.FLOAT_MAT4&&(o=4),t[a]={type:i.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function dr(r){return r!==""}function Ul(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ll(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(r){return r.replace(Cm,Pm)}const Rm=new Map;function Pm(r,e){let t=Qe[e];if(t===void 0){const s=Rm.get(e);if(s!==void 0)t=Qe[s],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return io(t)}const Dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(r){return r.replace(Dm,Um)}function Um(r,e,t,s){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=s.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function Fl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Lm={[ts]:"SHADOWMAP_TYPE_PCF",[fr]:"SHADOWMAP_TYPE_VSM"};function Im(r){return Lm[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Fm={[pi]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE_UV"};function Nm(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Fm[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Om={[Hi]:"ENVMAP_MODE_REFRACTION"};function Bm(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Om[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const km={[rc]:"ENVMAP_BLENDING_MULTIPLY",[bu]:"ENVMAP_BLENDING_MIX",[Tu]:"ENVMAP_BLENDING_ADD"};function Gm(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":km[r.combine]||"ENVMAP_BLENDING_NONE"}function zm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function Vm(r,e,t,s){const n=r.getContext(),i=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Im(t),c=Nm(t),u=Bm(t),h=Gm(t),f=zm(t),d=Tm(t),g=Am(i),v=n.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),p.length>0&&(p+=`
`)):(m=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),p=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==yn?Em("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Mm("linearToOutputTexel",t.outputColorSpace),bm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=io(a),a=Ul(a,t),a=Ll(a,t),o=io(o),o=Ul(o,t),o=Ll(o,t),a=Il(a),o=Il(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+m+a,M=E+p+o,y=Rl(n,n.VERTEX_SHADER,b),w=Rl(n,n.FRAGMENT_SHADER,M);n.attachShader(v,y),n.attachShader(v,w),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function T(D){if(r.debug.checkShaderErrors){const R=n.getProgramInfoLog(v)||"",I=n.getShaderInfoLog(y)||"",N=n.getShaderInfoLog(w)||"",V=R.trim(),B=I.trim(),z=N.trim();let $=!0,j=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,v,y,w);else{const W=Dl(n,y,"vertex"),L=Dl(n,w,"fragment");it("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+W+`
`+L)}else V!==""?qe("WebGLProgram: Program Info Log:",V):(B===""||z==="")&&(j=!1);j&&(D.diagnostics={runnable:$,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:z,prefix:p}})}n.deleteShader(y),n.deleteShader(w),P=new os(n,v),x=wm(n,v)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(v,_m)),S},this.destroy=function(){s.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=w,this}let Hm=0;class Wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(s),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new Xm(e),t.set(e,s)),s}}class Xm{constructor(e){this.id=Hm++,this.code=e,this.usedTimes=0}}function Ym(r,e,t,s,n,i,a){const o=new yo,l=new Wm,c=new Set,u=[],h=new Map,f=n.logarithmicDepthBuffer;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,D,R,I){const N=R.fog,V=I.geometry,B=x.isMeshStandardMaterial?R.environment:null,z=(x.isMeshStandardMaterial?t:e).get(x.envMap||B),$=z&&z.mapping===ps?z.image.height:null,j=g[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&qe("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const W=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,L=W!==void 0?W.length:0;let H=0;V.morphAttributes.position!==void 0&&(H=1),V.morphAttributes.normal!==void 0&&(H=2),V.morphAttributes.color!==void 0&&(H=3);let q,ne,ee,G;if(j){const Xe=vn[j];q=Xe.vertexShader,ne=Xe.fragmentShader}else q=x.vertexShader,ne=x.fragmentShader,l.update(x),ee=l.getVertexShaderID(x),G=l.getFragmentShaderID(x);const k=r.getRenderTarget(),J=r.state.buffers.depth.getReversed(),ve=I.isInstancedMesh===!0,fe=I.isBatchedMesh===!0,me=!!x.map,ge=!!x.matcap,Ie=!!z,De=!!x.aoMap,Ue=!!x.lightMap,Te=!!x.bumpMap,ke=!!x.normalMap,U=!!x.displacementMap,we=!!x.emissiveMap,be=!!x.metalnessMap,ae=!!x.roughnessMap,pe=x.anisotropy>0,A=x.clearcoat>0,_=x.dispersion>0,F=x.iridescence>0,ie=x.sheen>0,K=x.transmission>0,Y=pe&&!!x.anisotropyMap,xe=A&&!!x.clearcoatMap,_e=A&&!!x.clearcoatNormalMap,ye=A&&!!x.clearcoatRoughnessMap,Re=F&&!!x.iridescenceMap,oe=F&&!!x.iridescenceThicknessMap,le=ie&&!!x.sheenColorMap,ue=ie&&!!x.sheenRoughnessMap,Ee=!!x.specularMap,Se=!!x.specularColorMap,We=!!x.specularIntensityMap,O=K&&!!x.transmissionMap,he=K&&!!x.thicknessMap,de=!!x.gradientMap,Pe=!!x.alphaMap,ce=x.alphaTest>0,se=!!x.alphaHash,Me=!!x.extensions;let Ne=yn;x.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ne=r.toneMapping);const Oe={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:q,fragmentShader:ne,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:G,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:fe,batchingColor:fe&&I._colorsTexture!==null,instancing:ve,instancingColor:ve&&I.instanceColor!==null,instancingMorph:ve&&I.morphTexture!==null,outputColorSpace:k===null?r.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Xi,alphaToCoverage:!!x.alphaToCoverage,map:me,matcap:ge,envMap:Ie,envMapMode:Ie&&z.mapping,envMapCubeUVHeight:$,aoMap:De,lightMap:Ue,bumpMap:Te,normalMap:ke,displacementMap:U,emissiveMap:we,normalMapObjectSpace:ke&&x.normalMapType===Ru,normalMapTangentSpace:ke&&x.normalMapType===Sc,metalnessMap:be,roughnessMap:ae,anisotropy:pe,anisotropyMap:Y,clearcoat:A,clearcoatMap:xe,clearcoatNormalMap:_e,clearcoatRoughnessMap:ye,dispersion:_,iridescence:F,iridescenceMap:Re,iridescenceThicknessMap:oe,sheen:ie,sheenColorMap:le,sheenRoughnessMap:ue,specularMap:Ee,specularColorMap:Se,specularIntensityMap:We,transmission:K,transmissionMap:O,thicknessMap:he,gradientMap:de,opaque:x.transparent===!1&&x.blending===Gi&&x.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ce,alphaHash:se,combine:x.combine,mapUv:me&&v(x.map.channel),aoMapUv:De&&v(x.aoMap.channel),lightMapUv:Ue&&v(x.lightMap.channel),bumpMapUv:Te&&v(x.bumpMap.channel),normalMapUv:ke&&v(x.normalMap.channel),displacementMapUv:U&&v(x.displacementMap.channel),emissiveMapUv:we&&v(x.emissiveMap.channel),metalnessMapUv:be&&v(x.metalnessMap.channel),roughnessMapUv:ae&&v(x.roughnessMap.channel),anisotropyMapUv:Y&&v(x.anisotropyMap.channel),clearcoatMapUv:xe&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ue&&v(x.sheenRoughnessMap.channel),specularMapUv:Ee&&v(x.specularMap.channel),specularColorMapUv:Se&&v(x.specularColorMap.channel),specularIntensityMapUv:We&&v(x.specularIntensityMap.channel),transmissionMapUv:O&&v(x.transmissionMap.channel),thicknessMapUv:he&&v(x.thicknessMap.channel),alphaMapUv:Pe&&v(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ke||pe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(me||Pe),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:J,skinning:I.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:H,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ne,decodeVideoTexture:me&&x.map.isVideoTexture===!0&&rt.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:we&&x.emissiveMap.isVideoTexture===!0&&rt.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xn,flipSided:x.side===Ht,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||fe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)S.push(D),S.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(E(S,x),b(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function E(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function b(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function M(x){const S=g[x.type];let D;if(S){const R=vn[S];D=wc.clone(R.uniforms)}else D=x.uniforms;return D}function y(x,S){let D=h.get(S);return D!==void 0?++D.usedTimes:(D=new Vm(r,S,x,i),u.push(D),h.set(S,D)),D}function w(x){if(--x.usedTimes===0){const S=u.indexOf(x);u[S]=u[u.length-1],u.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:P}}function jm(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function s(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function i(){r=new WeakMap}return{has:e,get:t,remove:s,update:n,dispose:i}}function qm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Nl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ol(){const r=[];let e=0;const t=[],s=[],n=[];function i(){e=0,t.length=0,s.length=0,n.length=0}function a(h,f,d,g,v,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function o(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?s.push(p):d.transparent===!0?n.push(p):t.push(p)}function l(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?s.unshift(p):d.transparent===!0?n.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||qm),s.length>1&&s.sort(f||Nl),n.length>1&&n.sort(f||Nl)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:s,transparent:n,init:i,push:o,unshift:l,finish:u,sort:c}}function Km(){let r=new WeakMap;function e(s,n){const i=r.get(s);let a;return i===void 0?(a=new Ol,r.set(s,[a])):n>=i.length?(a=new Ol,i.push(a)):a=i[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Zm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new et};break;case"SpotLight":t={position:new Q,direction:new Q,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[e.id]=t,t}}}function Jm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Qm=0;function $m(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function eg(r){const e=new Zm,t=Jm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)s.probe.push(new Q);const n=new Q,i=new mt,a=new mt;function o(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)s.probe[x].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,E=0,b=0,M=0,y=0,w=0,T=0;c.sort($m);for(let x=0,S=c.length;x<S;x++){const D=c[x],R=D.color,I=D.intensity,N=D.distance;let V=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Wi?V=D.shadow.map.texture:V=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=R.r*I,h+=R.g*I,f+=R.b*I;else if(D.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(D.sh.coefficients[B],I);T++}else if(D.isDirectionalLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const z=D.shadow,$=t.get(D);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,s.directionalShadow[d]=$,s.directionalShadowMap[d]=V,s.directionalShadowMatrix[d]=D.shadow.matrix,E++}s.directional[d]=B,d++}else if(D.isSpotLight){const B=e.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(R).multiplyScalar(I),B.distance=N,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,s.spot[v]=B;const z=D.shadow;if(D.map&&(s.spotLightMap[y]=D.map,y++,z.updateMatrices(D),D.castShadow&&w++),s.spotLightMatrix[v]=z.matrix,D.castShadow){const $=t.get(D);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,s.spotShadow[v]=$,s.spotShadowMap[v]=V,M++}v++}else if(D.isRectAreaLight){const B=e.get(D);B.color.copy(R).multiplyScalar(I),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),s.rectArea[m]=B,m++}else if(D.isPointLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){const z=D.shadow,$=t.get(D);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,$.shadowCameraNear=z.camera.near,$.shadowCameraFar=z.camera.far,s.pointShadow[g]=$,s.pointShadowMap[g]=V,s.pointShadowMatrix[g]=D.shadow.matrix,b++}s.point[g]=B,g++}else if(D.isHemisphereLight){const B=e.get(D);B.skyColor.copy(D.color).multiplyScalar(I),B.groundColor.copy(D.groundColor).multiplyScalar(I),s.hemi[p]=B,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=u,s.ambient[1]=h,s.ambient[2]=f;const P=s.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==E||P.numPointShadows!==b||P.numSpotShadows!==M||P.numSpotMaps!==y||P.numLightProbes!==T)&&(s.directional.length=d,s.spot.length=v,s.rectArea.length=m,s.point.length=g,s.hemi.length=p,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=M,s.spotShadowMap.length=M,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=M+y-w,s.spotLightMap.length=y,s.numSpotLightShadowsWithMaps=w,s.numLightProbes=T,P.directionalLength=d,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=E,P.numPointShadows=b,P.numSpotShadows=M,P.numSpotMaps=y,P.numLightProbes=T,s.version=Qm++)}function l(c,u){let h=0,f=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const b=c[p];if(b.isDirectionalLight){const M=s.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),h++}else if(b.isSpotLight){const M=s.spot[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const M=s.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),i.copy(b.matrixWorld),i.premultiply(m),a.extractRotation(i),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=s.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const M=s.hemi[v];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:s}}function Bl(r){const e=new eg(r),t=[],s=[];function n(u){c.camera=u,t.length=0,s.length=0}function i(u){t.push(u)}function a(u){s.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:i,pushShadow:a}}function tg(r){let e=new WeakMap;function t(n,i=0){const a=e.get(n);let o;return a===void 0?(o=new Bl(r),e.set(n,[o])):i>=a.length?(o=new Bl(r),a.push(o)):o=a[i],o}function s(){e=new WeakMap}return{get:t,dispose:s}}const ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rg=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],sg=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],kl=new mt,ur=new Q,ra=new Q;function ag(r,e,t){let s=new bo;const n=new je,i=new je,a=new pt,o=new Uc,l=new Lc,c={},u=t.maxTextureSize,h={[Jn]:Ht,[Ht]:Jn,[xn]:xn},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new pn;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Xt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ts;let p=this.type;this.render=function(w,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===su&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=ts);const x=r.getRenderTarget(),S=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),R=r.state;R.setBlending(Ln),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const I=p!==this.type;I&&T.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(V=>V.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,V=w.length;N<V;N++){const B=w[N],z=B.shadow;if(z===void 0){qe("WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);const $=z.getFrameExtents();if(n.multiply($),i.copy(z.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/$.x),n.x=i.x*$.x,z.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/$.y),n.y=i.y*$.y,z.mapSize.y=i.y)),z.map===null||I===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===fr){if(B.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new En(n.x,n.y,{format:Wi,type:Fn,minFilter:At,magFilter:At,generateMipmaps:!1}),z.map.texture.name=B.name+".shadowMap",z.map.depthTexture=new Mr(n.x,n.y,Sn),z.map.depthTexture.name=B.name+".shadowMapDepth",z.map.depthTexture.format=Nn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Pt,z.map.depthTexture.magFilter=Pt}else{B.isPointLight?(z.map=new Pc(n.x),z.map.depthTexture=new ph(n.x,bn)):(z.map=new En(n.x,n.y),z.map.depthTexture=new Mr(n.x,n.y,bn)),z.map.depthTexture.name=B.name+".shadowMap",z.map.depthTexture.format=Nn;const W=r.state.buffers.depth.getReversed();this.type===ts?(z.map.depthTexture.compareFunction=W?xo:vo,z.map.depthTexture.minFilter=At,z.map.depthTexture.magFilter=At):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Pt,z.map.depthTexture.magFilter=Pt)}z.camera.updateProjectionMatrix()}const j=z.map.isWebGLCubeRenderTarget?6:1;for(let W=0;W<j;W++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,W),r.clear();else{W===0&&(r.setRenderTarget(z.map),r.clear());const L=z.getViewport(W);a.set(i.x*L.x,i.y*L.y,i.x*L.z,i.y*L.w),R.viewport(a)}if(B.isPointLight){const L=z.camera,H=z.matrix,q=B.distance||L.far;q!==L.far&&(L.far=q,L.updateProjectionMatrix()),ur.setFromMatrixPosition(B.matrixWorld),L.position.copy(ur),ra.copy(L.position),ra.add(rg[W]),L.up.copy(sg[W]),L.lookAt(ra),L.updateMatrixWorld(),H.makeTranslation(-ur.x,-ur.y,-ur.z),kl.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),z._frustum.setFromProjectionMatrix(kl,L.coordinateSystem,L.reversedDepth)}else z.updateMatrices(B);s=z.getFrustum(),M(T,P,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===fr&&E(z,P),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(x,S,D)};function E(w,T){const P=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new En(n.x,n.y,{format:Wi,type:Fn})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,P,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,P,d,v,null)}function b(w,T,P,x){let S=null;const D=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)S=D;else if(S=P.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const R=S.uuid,I=T.uuid;let N=c[R];N===void 0&&(N={},c[R]=N);let V=N[I];V===void 0&&(V=S.clone(),N[I]=V,T.addEventListener("dispose",y)),S=V}if(S.visible=T.visible,S.wireframe=T.wireframe,x===fr?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const R=r.properties.get(S);R.light=P}return S}function M(w,T,P,x,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===fr)&&(!w.frustumCulled||s.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const I=e.update(w),N=w.material;if(Array.isArray(N)){const V=I.groups;for(let B=0,z=V.length;B<z;B++){const $=V[B],j=N[$.materialIndex];if(j&&j.visible){const W=b(w,j,x,S);w.onBeforeShadow(r,w,T,P,I,W,$),r.renderBufferDirect(P,null,I,W,w,$),w.onAfterShadow(r,w,T,P,I,W,$)}}}else if(N.visible){const V=b(w,N,x,S);w.onBeforeShadow(r,w,T,P,I,V,null),r.renderBufferDirect(P,null,I,V,w,null),w.onAfterShadow(r,w,T,P,I,V,null)}}const R=w.children;for(let I=0,N=R.length;I<N;I++)M(R[I],T,P,x,S)}function y(w){w.target.removeEventListener("dispose",y);for(const P in c){const x=c[P],S=w.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const og={[ha]:fa,[da]:ga,[pa]:_a,[Vi]:ma,[fa]:ha,[ga]:da,[_a]:pa,[ma]:Vi};function lg(r,e){function t(){let O=!1;const he=new pt;let de=null;const Pe=new pt(0,0,0,0);return{setMask:function(ce){de!==ce&&!O&&(r.colorMask(ce,ce,ce,ce),de=ce)},setLocked:function(ce){O=ce},setClear:function(ce,se,Me,Ne,Oe){Oe===!0&&(ce*=Ne,se*=Ne,Me*=Ne),he.set(ce,se,Me,Ne),Pe.equals(he)===!1&&(r.clearColor(ce,se,Me,Ne),Pe.copy(he))},reset:function(){O=!1,de=null,Pe.set(-1,0,0,0)}}}function s(){let O=!1,he=!1,de=null,Pe=null,ce=null;return{setReversed:function(se){if(he!==se){const Me=e.get("EXT_clip_control");se?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),he=se;const Ne=ce;ce=null,this.setClear(Ne)}},getReversed:function(){return he},setTest:function(se){se?k(r.DEPTH_TEST):J(r.DEPTH_TEST)},setMask:function(se){de!==se&&!O&&(r.depthMask(se),de=se)},setFunc:function(se){if(he&&(se=og[se]),Pe!==se){switch(se){case ha:r.depthFunc(r.NEVER);break;case fa:r.depthFunc(r.ALWAYS);break;case da:r.depthFunc(r.LESS);break;case Vi:r.depthFunc(r.LEQUAL);break;case pa:r.depthFunc(r.EQUAL);break;case ma:r.depthFunc(r.GEQUAL);break;case ga:r.depthFunc(r.GREATER);break;case _a:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Pe=se}},setLocked:function(se){O=se},setClear:function(se){ce!==se&&(he&&(se=1-se),r.clearDepth(se),ce=se)},reset:function(){O=!1,de=null,Pe=null,ce=null,he=!1}}}function n(){let O=!1,he=null,de=null,Pe=null,ce=null,se=null,Me=null,Ne=null,Oe=null;return{setTest:function(Xe){O||(Xe?k(r.STENCIL_TEST):J(r.STENCIL_TEST))},setMask:function(Xe){he!==Xe&&!O&&(r.stencilMask(Xe),he=Xe)},setFunc:function(Xe,ht,ft){(de!==Xe||Pe!==ht||ce!==ft)&&(r.stencilFunc(Xe,ht,ft),de=Xe,Pe=ht,ce=ft)},setOp:function(Xe,ht,ft){(se!==Xe||Me!==ht||Ne!==ft)&&(r.stencilOp(Xe,ht,ft),se=Xe,Me=ht,Ne=ft)},setLocked:function(Xe){O=Xe},setClear:function(Xe){Oe!==Xe&&(r.clearStencil(Xe),Oe=Xe)},reset:function(){O=!1,he=null,de=null,Pe=null,ce=null,se=null,Me=null,Ne=null,Oe=null}}}const i=new t,a=new s,o=new n,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,E=null,b=null,M=null,y=null,w=null,T=new et(0,0,0),P=0,x=!1,S=null,D=null,R=null,I=null,N=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,z=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec($)[1]),B=z>=1):$.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=z>=2);let j=null,W={};const L=r.getParameter(r.SCISSOR_BOX),H=r.getParameter(r.VIEWPORT),q=new pt().fromArray(L),ne=new pt().fromArray(H);function ee(O,he,de,Pe){const ce=new Uint8Array(4),se=r.createTexture();r.bindTexture(O,se),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Me=0;Me<de;Me++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,Pe,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(he+Me,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return se}const G={};G[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),G[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),G[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),k(r.DEPTH_TEST),a.setFunc(Vi),Te(!1),ke(ko),k(r.CULL_FACE),De(Ln);function k(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function J(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function ve(O,he){return h[O]!==he?(r.bindFramebuffer(O,he),h[O]=he,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=he),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=he),!0):!1}function fe(O,he){let de=d,Pe=!1;if(O){de=f.get(he),de===void 0&&(de=[],f.set(he,de));const ce=O.textures;if(de.length!==ce.length||de[0]!==r.COLOR_ATTACHMENT0){for(let se=0,Me=ce.length;se<Me;se++)de[se]=r.COLOR_ATTACHMENT0+se;de.length=ce.length,Pe=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,Pe=!0);Pe&&r.drawBuffers(de)}function me(O){return g!==O?(r.useProgram(O),g=O,!0):!1}const ge={[li]:r.FUNC_ADD,[ou]:r.FUNC_SUBTRACT,[lu]:r.FUNC_REVERSE_SUBTRACT};ge[cu]=r.MIN,ge[uu]=r.MAX;const Ie={[hu]:r.ZERO,[fu]:r.ONE,[du]:r.SRC_COLOR,[ca]:r.SRC_ALPHA,[xu]:r.SRC_ALPHA_SATURATE,[_u]:r.DST_COLOR,[mu]:r.DST_ALPHA,[pu]:r.ONE_MINUS_SRC_COLOR,[ua]:r.ONE_MINUS_SRC_ALPHA,[vu]:r.ONE_MINUS_DST_COLOR,[gu]:r.ONE_MINUS_DST_ALPHA,[Su]:r.CONSTANT_COLOR,[Mu]:r.ONE_MINUS_CONSTANT_COLOR,[yu]:r.CONSTANT_ALPHA,[Eu]:r.ONE_MINUS_CONSTANT_ALPHA};function De(O,he,de,Pe,ce,se,Me,Ne,Oe,Xe){if(O===Ln){v===!0&&(J(r.BLEND),v=!1);return}if(v===!1&&(k(r.BLEND),v=!0),O!==au){if(O!==m||Xe!==x){if((p!==li||M!==li)&&(r.blendEquation(r.FUNC_ADD),p=li,M=li),Xe)switch(O){case Gi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Go:r.blendFunc(r.ONE,r.ONE);break;case zo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vo:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:it("WebGLState: Invalid blending: ",O);break}else switch(O){case Gi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Go:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case zo:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vo:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",O);break}E=null,b=null,y=null,w=null,T.set(0,0,0),P=0,m=O,x=Xe}return}ce=ce||he,se=se||de,Me=Me||Pe,(he!==p||ce!==M)&&(r.blendEquationSeparate(ge[he],ge[ce]),p=he,M=ce),(de!==E||Pe!==b||se!==y||Me!==w)&&(r.blendFuncSeparate(Ie[de],Ie[Pe],Ie[se],Ie[Me]),E=de,b=Pe,y=se,w=Me),(Ne.equals(T)===!1||Oe!==P)&&(r.blendColor(Ne.r,Ne.g,Ne.b,Oe),T.copy(Ne),P=Oe),m=O,x=!1}function Ue(O,he){O.side===xn?J(r.CULL_FACE):k(r.CULL_FACE);let de=O.side===Ht;he&&(de=!de),Te(de),O.blending===Gi&&O.transparent===!1?De(Ln):De(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),i.setMask(O.colorWrite);const Pe=O.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),we(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?k(r.SAMPLE_ALPHA_TO_COVERAGE):J(r.SAMPLE_ALPHA_TO_COVERAGE)}function Te(O){S!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),S=O)}function ke(O){O!==iu?(k(r.CULL_FACE),O!==D&&(O===ko?r.cullFace(r.BACK):O===ru?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):J(r.CULL_FACE),D=O}function U(O){O!==R&&(B&&r.lineWidth(O),R=O)}function we(O,he,de){O?(k(r.POLYGON_OFFSET_FILL),(I!==he||N!==de)&&(r.polygonOffset(he,de),I=he,N=de)):J(r.POLYGON_OFFSET_FILL)}function be(O){O?k(r.SCISSOR_TEST):J(r.SCISSOR_TEST)}function ae(O){O===void 0&&(O=r.TEXTURE0+V-1),j!==O&&(r.activeTexture(O),j=O)}function pe(O,he,de){de===void 0&&(j===null?de=r.TEXTURE0+V-1:de=j);let Pe=W[de];Pe===void 0&&(Pe={type:void 0,texture:void 0},W[de]=Pe),(Pe.type!==O||Pe.texture!==he)&&(j!==de&&(r.activeTexture(de),j=de),r.bindTexture(O,he||G[O]),Pe.type=O,Pe.texture=he)}function A(){const O=W[j];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function _(){try{r.compressedTexImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function ie(){try{r.texSubImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function K(){try{r.texSubImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function xe(){try{r.compressedTexSubImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function _e(){try{r.texStorage2D(...arguments)}catch(O){it("WebGLState:",O)}}function ye(){try{r.texStorage3D(...arguments)}catch(O){it("WebGLState:",O)}}function Re(){try{r.texImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function oe(){try{r.texImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function le(O){q.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),q.copy(O))}function ue(O){ne.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),ne.copy(O))}function Ee(O,he){let de=c.get(he);de===void 0&&(de=new WeakMap,c.set(he,de));let Pe=de.get(O);Pe===void 0&&(Pe=r.getUniformBlockIndex(he,O.name),de.set(O,Pe))}function Se(O,he){const Pe=c.get(he).get(O);l.get(he)!==Pe&&(r.uniformBlockBinding(he,Pe,O.__bindingPointIndex),l.set(he,Pe))}function We(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},j=null,W={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,E=null,b=null,M=null,y=null,w=null,T=new et(0,0,0),P=0,x=!1,S=null,D=null,R=null,I=null,N=null,q.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:k,disable:J,bindFramebuffer:ve,drawBuffers:fe,useProgram:me,setBlending:De,setMaterial:Ue,setFlipSided:Te,setCullFace:ke,setLineWidth:U,setPolygonOffset:we,setScissorTest:be,activeTexture:ae,bindTexture:pe,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Re,texImage3D:oe,updateUBOMapping:Ee,uniformBlockBinding:Se,texStorage2D:_e,texStorage3D:ye,texSubImage2D:ie,texSubImage3D:K,compressedTexSubImage2D:Y,compressedTexSubImage3D:xe,scissor:le,viewport:ue,reset:We}}function cg(r,e,t,s,n,i,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return d?new OffscreenCanvas(A,_):fs("canvas")}function v(A,_,F){let ie=1;const K=pe(A);if((K.width>F||K.height>F)&&(ie=F/Math.max(K.width,K.height)),ie<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(ie*K.width),xe=Math.floor(ie*K.height);h===void 0&&(h=g(Y,xe));const _e=_?g(Y,xe):h;return _e.width=Y,_e.height=xe,_e.getContext("2d").drawImage(A,0,0,Y,xe),qe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+xe+")."),_e}else return"data"in A&&qe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(A,_,F,ie,K=!1){if(A!==null){if(r[A]!==void 0)return r[A];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=_;if(_===r.RED&&(F===r.FLOAT&&(Y=r.R32F),F===r.HALF_FLOAT&&(Y=r.R16F),F===r.UNSIGNED_BYTE&&(Y=r.R8)),_===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(Y=r.R8UI),F===r.UNSIGNED_SHORT&&(Y=r.R16UI),F===r.UNSIGNED_INT&&(Y=r.R32UI),F===r.BYTE&&(Y=r.R8I),F===r.SHORT&&(Y=r.R16I),F===r.INT&&(Y=r.R32I)),_===r.RG&&(F===r.FLOAT&&(Y=r.RG32F),F===r.HALF_FLOAT&&(Y=r.RG16F),F===r.UNSIGNED_BYTE&&(Y=r.RG8)),_===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(Y=r.RG8UI),F===r.UNSIGNED_SHORT&&(Y=r.RG16UI),F===r.UNSIGNED_INT&&(Y=r.RG32UI),F===r.BYTE&&(Y=r.RG8I),F===r.SHORT&&(Y=r.RG16I),F===r.INT&&(Y=r.RG32I)),_===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),F===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),F===r.UNSIGNED_INT&&(Y=r.RGB32UI),F===r.BYTE&&(Y=r.RGB8I),F===r.SHORT&&(Y=r.RGB16I),F===r.INT&&(Y=r.RGB32I)),_===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),F===r.UNSIGNED_INT&&(Y=r.RGBA32UI),F===r.BYTE&&(Y=r.RGBA8I),F===r.SHORT&&(Y=r.RGBA16I),F===r.INT&&(Y=r.RGBA32I)),_===r.RGB&&(F===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),_===r.RGBA){const xe=K?us:rt.getTransfer(ie);F===r.FLOAT&&(Y=r.RGBA32F),F===r.HALF_FLOAT&&(Y=r.RGBA16F),F===r.UNSIGNED_BYTE&&(Y=xe===ct?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(A,_){let F;return A?_===null||_===bn||_===xr?F=r.DEPTH24_STENCIL8:_===Sn?F=r.DEPTH32F_STENCIL8:_===vr&&(F=r.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===bn||_===xr?F=r.DEPTH_COMPONENT24:_===Sn?F=r.DEPTH_COMPONENT32F:_===vr&&(F=r.DEPTH_COMPONENT16),F}function y(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pt&&A.minFilter!==At?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function w(A){const _=A.target;_.removeEventListener("dispose",w),P(_),_.isVideoTexture&&u.delete(_)}function T(A){const _=A.target;_.removeEventListener("dispose",T),S(_)}function P(A){const _=s.get(A);if(_.__webglInit===void 0)return;const F=A.source,ie=f.get(F);if(ie){const K=ie[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&x(A),Object.keys(ie).length===0&&f.delete(F)}s.remove(A)}function x(A){const _=s.get(A);r.deleteTexture(_.__webglTexture);const F=A.source,ie=f.get(F);delete ie[_.__cacheKey],a.memory.textures--}function S(A){const _=s.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),s.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(_.__webglFramebuffer[ie]))for(let K=0;K<_.__webglFramebuffer[ie].length;K++)r.deleteFramebuffer(_.__webglFramebuffer[ie][K]);else r.deleteFramebuffer(_.__webglFramebuffer[ie]);_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer[ie])}else{if(Array.isArray(_.__webglFramebuffer))for(let ie=0;ie<_.__webglFramebuffer.length;ie++)r.deleteFramebuffer(_.__webglFramebuffer[ie]);else r.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&r.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ie=0;ie<_.__webglColorRenderbuffer.length;ie++)_.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(_.__webglColorRenderbuffer[ie]);_.__webglDepthRenderbuffer&&r.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=A.textures;for(let ie=0,K=F.length;ie<K;ie++){const Y=s.get(F[ie]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),s.remove(F[ie])}s.remove(A)}let D=0;function R(){D=0}function I(){const A=D;return A>=n.maxTextures&&qe("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),D+=1,A}function N(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function V(A,_){const F=s.get(A);if(A.isVideoTexture&&be(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const ie=A.image;if(ie===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{G(F,A,_);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+_)}function B(A,_){const F=s.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){G(F,A,_);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+_)}function z(A,_){const F=s.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){G(F,A,_);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+_)}function $(A,_){const F=s.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){k(F,A,_);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+_)}const j={[Sa]:r.REPEAT,[Un]:r.CLAMP_TO_EDGE,[Ma]:r.MIRRORED_REPEAT},W={[Pt]:r.NEAREST,[Au]:r.NEAREST_MIPMAP_NEAREST,[Dr]:r.NEAREST_MIPMAP_LINEAR,[At]:r.LINEAR,[Cs]:r.LINEAR_MIPMAP_NEAREST,[ui]:r.LINEAR_MIPMAP_LINEAR},L={[Pu]:r.NEVER,[Fu]:r.ALWAYS,[Du]:r.LESS,[vo]:r.LEQUAL,[Uu]:r.EQUAL,[xo]:r.GEQUAL,[Lu]:r.GREATER,[Iu]:r.NOTEQUAL};function H(A,_){if(_.type===Sn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===At||_.magFilter===Cs||_.magFilter===Dr||_.magFilter===ui||_.minFilter===At||_.minFilter===Cs||_.minFilter===Dr||_.minFilter===ui)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,j[_.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,j[_.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,j[_.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,W[_.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,W[_.minFilter]),_.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,L[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Pt||_.minFilter!==Dr&&_.minFilter!==ui||_.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||s.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),s.get(_).__currentAnisotropy=_.anisotropy}}}function q(A,_){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",w));const ie=_.source;let K=f.get(ie);K===void 0&&(K={},f.set(ie,K));const Y=N(_);if(Y!==A.__cacheKey){K[Y]===void 0&&(K[Y]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[Y].usedTimes++;const xe=K[A.__cacheKey];xe!==void 0&&(K[A.__cacheKey].usedTimes--,xe.usedTimes===0&&x(_)),A.__cacheKey=Y,A.__webglTexture=K[Y].texture}return F}function ne(A,_,F){return Math.floor(Math.floor(A/F)/_)}function ee(A,_,F,ie){const Y=A.updateRanges;if(Y.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,_.width,_.height,F,ie,_.data);else{Y.sort((oe,le)=>oe.start-le.start);let xe=0;for(let oe=1;oe<Y.length;oe++){const le=Y[xe],ue=Y[oe],Ee=le.start+le.count,Se=ne(ue.start,_.width,4),We=ne(le.start,_.width,4);ue.start<=Ee+1&&Se===We&&ne(ue.start+ue.count-1,_.width,4)===Se?le.count=Math.max(le.count,ue.start+ue.count-le.start):(++xe,Y[xe]=ue)}Y.length=xe+1;const _e=r.getParameter(r.UNPACK_ROW_LENGTH),ye=r.getParameter(r.UNPACK_SKIP_PIXELS),Re=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,_.width);for(let oe=0,le=Y.length;oe<le;oe++){const ue=Y[oe],Ee=Math.floor(ue.start/4),Se=Math.ceil(ue.count/4),We=Ee%_.width,O=Math.floor(Ee/_.width),he=Se,de=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,We,O,he,de,F,ie,_.data)}A.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,_e),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,Re)}}function G(A,_,F){let ie=r.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ie=r.TEXTURE_3D);const K=q(A,_),Y=_.source;t.bindTexture(ie,A.__webglTexture,r.TEXTURE0+F);const xe=s.get(Y);if(Y.version!==xe.__version||K===!0){t.activeTexture(r.TEXTURE0+F);const _e=rt.getPrimaries(rt.workingColorSpace),ye=_.colorSpace===Kn?null:rt.getPrimaries(_.colorSpace),Re=_.colorSpace===Kn||_e===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let oe=v(_.image,!1,n.maxTextureSize);oe=ae(_,oe);const le=i.convert(_.format,_.colorSpace),ue=i.convert(_.type);let Ee=b(_.internalFormat,le,ue,_.colorSpace,_.isVideoTexture);H(ie,_);let Se;const We=_.mipmaps,O=_.isVideoTexture!==!0,he=xe.__version===void 0||K===!0,de=Y.dataReady,Pe=y(_,oe);if(_.isDepthTexture)Ee=M(_.format===hi,_.type),he&&(O?t.texStorage2D(r.TEXTURE_2D,1,Ee,oe.width,oe.height):t.texImage2D(r.TEXTURE_2D,0,Ee,oe.width,oe.height,0,le,ue,null));else if(_.isDataTexture)if(We.length>0){O&&he&&t.texStorage2D(r.TEXTURE_2D,Pe,Ee,We[0].width,We[0].height);for(let ce=0,se=We.length;ce<se;ce++)Se=We[ce],O?de&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,Se.width,Se.height,le,ue,Se.data):t.texImage2D(r.TEXTURE_2D,ce,Ee,Se.width,Se.height,0,le,ue,Se.data);_.generateMipmaps=!1}else O?(he&&t.texStorage2D(r.TEXTURE_2D,Pe,Ee,oe.width,oe.height),de&&ee(_,oe,le,ue)):t.texImage2D(r.TEXTURE_2D,0,Ee,oe.width,oe.height,0,le,ue,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){O&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,Ee,We[0].width,We[0].height,oe.depth);for(let ce=0,se=We.length;ce<se;ce++)if(Se=We[ce],_.format!==fn)if(le!==null)if(O){if(de)if(_.layerUpdates.size>0){const Me=gl(Se.width,Se.height,_.format,_.type);for(const Ne of _.layerUpdates){const Oe=Se.data.subarray(Ne*Me/Se.data.BYTES_PER_ELEMENT,(Ne+1)*Me/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,Ne,Se.width,Se.height,1,le,Oe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,Se.width,Se.height,oe.depth,le,Se.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ce,Ee,Se.width,Se.height,oe.depth,0,Se.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?de&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,Se.width,Se.height,oe.depth,le,ue,Se.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ce,Ee,Se.width,Se.height,oe.depth,0,le,ue,Se.data)}else{O&&he&&t.texStorage2D(r.TEXTURE_2D,Pe,Ee,We[0].width,We[0].height);for(let ce=0,se=We.length;ce<se;ce++)Se=We[ce],_.format!==fn?le!==null?O?de&&t.compressedTexSubImage2D(r.TEXTURE_2D,ce,0,0,Se.width,Se.height,le,Se.data):t.compressedTexImage2D(r.TEXTURE_2D,ce,Ee,Se.width,Se.height,0,Se.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?de&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,Se.width,Se.height,le,ue,Se.data):t.texImage2D(r.TEXTURE_2D,ce,Ee,Se.width,Se.height,0,le,ue,Se.data)}else if(_.isDataArrayTexture)if(O){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,Ee,oe.width,oe.height,oe.depth),de)if(_.layerUpdates.size>0){const ce=gl(oe.width,oe.height,_.format,_.type);for(const se of _.layerUpdates){const Me=oe.data.subarray(se*ce/oe.data.BYTES_PER_ELEMENT,(se+1)*ce/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,se,oe.width,oe.height,1,le,ue,Me)}_.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,le,ue,oe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ee,oe.width,oe.height,oe.depth,0,le,ue,oe.data);else if(_.isData3DTexture)O?(he&&t.texStorage3D(r.TEXTURE_3D,Pe,Ee,oe.width,oe.height,oe.depth),de&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,le,ue,oe.data)):t.texImage3D(r.TEXTURE_3D,0,Ee,oe.width,oe.height,oe.depth,0,le,ue,oe.data);else if(_.isFramebufferTexture){if(he)if(O)t.texStorage2D(r.TEXTURE_2D,Pe,Ee,oe.width,oe.height);else{let ce=oe.width,se=oe.height;for(let Me=0;Me<Pe;Me++)t.texImage2D(r.TEXTURE_2D,Me,Ee,ce,se,0,le,ue,null),ce>>=1,se>>=1}}else if(We.length>0){if(O&&he){const ce=pe(We[0]);t.texStorage2D(r.TEXTURE_2D,Pe,Ee,ce.width,ce.height)}for(let ce=0,se=We.length;ce<se;ce++)Se=We[ce],O?de&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,le,ue,Se):t.texImage2D(r.TEXTURE_2D,ce,Ee,le,ue,Se);_.generateMipmaps=!1}else if(O){if(he){const ce=pe(oe);t.texStorage2D(r.TEXTURE_2D,Pe,Ee,ce.width,ce.height)}de&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,ue,oe)}else t.texImage2D(r.TEXTURE_2D,0,Ee,le,ue,oe);m(_)&&p(ie),xe.__version=Y.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function k(A,_,F){if(_.image.length!==6)return;const ie=q(A,_),K=_.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+F);const Y=s.get(K);if(K.version!==Y.__version||ie===!0){t.activeTexture(r.TEXTURE0+F);const xe=rt.getPrimaries(rt.workingColorSpace),_e=_.colorSpace===Kn?null:rt.getPrimaries(_.colorSpace),ye=_.colorSpace===Kn||xe===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Re=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,le=[];for(let se=0;se<6;se++)!Re&&!oe?le[se]=v(_.image[se],!0,n.maxCubemapSize):le[se]=oe?_.image[se].image:_.image[se],le[se]=ae(_,le[se]);const ue=le[0],Ee=i.convert(_.format,_.colorSpace),Se=i.convert(_.type),We=b(_.internalFormat,Ee,Se,_.colorSpace),O=_.isVideoTexture!==!0,he=Y.__version===void 0||ie===!0,de=K.dataReady;let Pe=y(_,ue);H(r.TEXTURE_CUBE_MAP,_);let ce;if(Re){O&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,We,ue.width,ue.height);for(let se=0;se<6;se++){ce=le[se].mipmaps;for(let Me=0;Me<ce.length;Me++){const Ne=ce[Me];_.format!==fn?Ee!==null?O?de&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,0,0,Ne.width,Ne.height,Ee,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,We,Ne.width,Ne.height,0,Ne.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,0,0,Ne.width,Ne.height,Ee,Se,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,We,Ne.width,Ne.height,0,Ee,Se,Ne.data)}}}else{if(ce=_.mipmaps,O&&he){ce.length>0&&Pe++;const se=pe(le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,We,se.width,se.height)}for(let se=0;se<6;se++)if(oe){O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,le[se].width,le[se].height,Ee,Se,le[se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,We,le[se].width,le[se].height,0,Ee,Se,le[se].data);for(let Me=0;Me<ce.length;Me++){const Oe=ce[Me].image[se].image;O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,0,0,Oe.width,Oe.height,Ee,Se,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,We,Oe.width,Oe.height,0,Ee,Se,Oe.data)}}else{O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ee,Se,le[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,We,Ee,Se,le[se]);for(let Me=0;Me<ce.length;Me++){const Ne=ce[Me];O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,0,0,Ee,Se,Ne.image[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,We,Ee,Se,Ne.image[se])}}}m(_)&&p(r.TEXTURE_CUBE_MAP),Y.__version=K.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function J(A,_,F,ie,K,Y){const xe=i.convert(F.format,F.colorSpace),_e=i.convert(F.type),ye=b(F.internalFormat,xe,_e,F.colorSpace),Re=s.get(_),oe=s.get(F);if(oe.__renderTarget=_,!Re.__hasExternalTextures){const le=Math.max(1,_.width>>Y),ue=Math.max(1,_.height>>Y);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,Y,ye,le,ue,_.depth,0,xe,_e,null):t.texImage2D(K,Y,ye,le,ue,0,xe,_e,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),we(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,K,oe.__webglTexture,0,U(_)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,K,oe.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(A,_,F){if(r.bindRenderbuffer(r.RENDERBUFFER,A),_.depthBuffer){const ie=_.depthTexture,K=ie&&ie.isDepthTexture?ie.type:null,Y=M(_.stencilBuffer,K),xe=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;we(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U(_),Y,_.width,_.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,U(_),Y,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,Y,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,A)}else{const ie=_.textures;for(let K=0;K<ie.length;K++){const Y=ie[K],xe=i.convert(Y.format,Y.colorSpace),_e=i.convert(Y.type),ye=b(Y.internalFormat,xe,_e,Y.colorSpace);we(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U(_),ye,_.width,_.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,U(_),ye,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,ye,_.width,_.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(A,_,F){const ie=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=s.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ie){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),H(r.TEXTURE_CUBE_MAP,_.depthTexture);const Re=i.convert(_.depthTexture.format),oe=i.convert(_.depthTexture.type);let le;_.depthTexture.format===Nn?le=r.DEPTH_COMPONENT24:_.depthTexture.format===hi&&(le=r.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,le,_.width,_.height,0,Re,oe,null)}}else V(_.depthTexture,0);const Y=K.__webglTexture,xe=U(_),_e=ie?r.TEXTURE_CUBE_MAP_POSITIVE_X+F:r.TEXTURE_2D,ye=_.depthTexture.format===hi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(_.depthTexture.format===Nn)we(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,_e,Y,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,ye,_e,Y,0);else if(_.depthTexture.format===hi)we(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,_e,Y,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,ye,_e,Y,0);else throw new Error("Unknown depthTexture format")}function me(A){const _=s.get(A),F=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const ie=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ie){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ie.removeEventListener("dispose",K)};ie.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=ie}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let ie=0;ie<6;ie++)fe(_.__webglFramebuffer[ie],A,ie);else{const ie=A.texture.mipmaps;ie&&ie.length>0?fe(_.__webglFramebuffer[0],A,0):fe(_.__webglFramebuffer,A,0)}else if(F){_.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[ie]),_.__webglDepthbuffer[ie]===void 0)_.__webglDepthbuffer[ie]=r.createRenderbuffer(),ve(_.__webglDepthbuffer[ie],A,!1);else{const K=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[ie];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Y)}}else{const ie=A.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=r.createRenderbuffer(),ve(_.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Y)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ge(A,_,F){const ie=s.get(A);_!==void 0&&J(ie.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&me(A)}function Ie(A){const _=A.texture,F=s.get(A),ie=s.get(_);A.addEventListener("dispose",T);const K=A.textures,Y=A.isWebGLCubeRenderTarget===!0,xe=K.length>1;if(xe||(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=_.version,a.memory.textures++),Y){F.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[_e]=[];for(let ye=0;ye<_.mipmaps.length;ye++)F.__webglFramebuffer[_e][ye]=r.createFramebuffer()}else F.__webglFramebuffer[_e]=r.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let _e=0;_e<_.mipmaps.length;_e++)F.__webglFramebuffer[_e]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(xe)for(let _e=0,ye=K.length;_e<ye;_e++){const Re=s.get(K[_e]);Re.__webglTexture===void 0&&(Re.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&we(A)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let _e=0;_e<K.length;_e++){const ye=K[_e];F.__webglColorRenderbuffer[_e]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[_e]);const Re=i.convert(ye.format,ye.colorSpace),oe=i.convert(ye.type),le=b(ye.internalFormat,Re,oe,ye.colorSpace,A.isXRRenderTarget===!0),ue=U(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,le,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,F.__webglColorRenderbuffer[_e])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),H(r.TEXTURE_CUBE_MAP,_);for(let _e=0;_e<6;_e++)if(_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)J(F.__webglFramebuffer[_e][ye],A,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ye);else J(F.__webglFramebuffer[_e],A,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(_)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let _e=0,ye=K.length;_e<ye;_e++){const Re=K[_e],oe=s.get(Re);let le=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,oe.__webglTexture),H(le,Re),J(F.__webglFramebuffer,A,Re,r.COLOR_ATTACHMENT0+_e,le,0),m(Re)&&p(le)}t.unbindTexture()}else{let _e=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_e=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(_e,ie.__webglTexture),H(_e,_),_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)J(F.__webglFramebuffer[ye],A,_,r.COLOR_ATTACHMENT0,_e,ye);else J(F.__webglFramebuffer,A,_,r.COLOR_ATTACHMENT0,_e,0);m(_)&&p(_e),t.unbindTexture()}A.depthBuffer&&me(A)}function De(A){const _=A.textures;for(let F=0,ie=_.length;F<ie;F++){const K=_[F];if(m(K)){const Y=E(A),xe=s.get(K).__webglTexture;t.bindTexture(Y,xe),p(Y),t.unbindTexture()}}}const Ue=[],Te=[];function ke(A){if(A.samples>0){if(we(A)===!1){const _=A.textures,F=A.width,ie=A.height;let K=r.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=s.get(A),_e=_.length>1;if(_e)for(let Re=0;Re<_.length;Re++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const ye=A.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Re=0;Re<_.length;Re++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),_e){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Re]);const oe=s.get(_[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,oe,0)}r.blitFramebuffer(0,0,F,ie,0,0,F,ie,K,r.NEAREST),l===!0&&(Ue.length=0,Te.length=0,Ue.push(r.COLOR_ATTACHMENT0+Re),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ue.push(Y),Te.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Te)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),_e)for(let Re=0;Re<_.length;Re++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Re]);const oe=s.get(_[Re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,oe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_])}}}function U(A){return Math.min(n.maxSamples,A.samples)}function we(A){const _=s.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function be(A){const _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function ae(A,_){const F=A.colorSpace,ie=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Xi&&F!==Kn&&(rt.getTransfer(F)===ct?(ie!==fn||K!==Jt)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",F)),_}function pe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=R,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=ge,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=J,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ug(r,e){function t(s,n=Kn){let i;const a=rt.getTransfer(n);if(s===Jt)return r.UNSIGNED_BYTE;if(s===fo)return r.UNSIGNED_SHORT_4_4_4_4;if(s===po)return r.UNSIGNED_SHORT_5_5_5_1;if(s===mc)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===gc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===dc)return r.BYTE;if(s===pc)return r.SHORT;if(s===vr)return r.UNSIGNED_SHORT;if(s===ho)return r.INT;if(s===bn)return r.UNSIGNED_INT;if(s===Sn)return r.FLOAT;if(s===Fn)return r.HALF_FLOAT;if(s===_c)return r.ALPHA;if(s===vc)return r.RGB;if(s===fn)return r.RGBA;if(s===Nn)return r.DEPTH_COMPONENT;if(s===hi)return r.DEPTH_STENCIL;if(s===xc)return r.RED;if(s===mo)return r.RED_INTEGER;if(s===Wi)return r.RG;if(s===go)return r.RG_INTEGER;if(s===_o)return r.RGBA_INTEGER;if(s===ns||s===is||s===rs||s===ss)if(a===ct)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(s===ns)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===is)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===rs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ss)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(s===ns)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===is)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===rs)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ss)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ya||s===Ea||s===ba||s===Ta)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(s===ya)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ea)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ba)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ta)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Aa||s===wa||s===Ca||s===Ra||s===Pa||s===Da||s===Ua)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(s===Aa||s===wa)return a===ct?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(s===Ca)return a===ct?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ra)return i.COMPRESSED_R11_EAC;if(s===Pa)return i.COMPRESSED_SIGNED_R11_EAC;if(s===Da)return i.COMPRESSED_RG11_EAC;if(s===Ua)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===La||s===Ia||s===Fa||s===Na||s===Oa||s===Ba||s===ka||s===Ga||s===za||s===Va||s===Ha||s===Wa||s===Xa||s===Ya)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(s===La)return a===ct?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ia)return a===ct?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fa)return a===ct?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Na)return a===ct?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Oa)return a===ct?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ba)return a===ct?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ka)return a===ct?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ga)return a===ct?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===za)return a===ct?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Va)return a===ct?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ha)return a===ct?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wa)return a===ct?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xa)return a===ct?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ya)return a===ct?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ja||s===qa||s===Ka)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(s===ja)return a===ct?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qa)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ka)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Za||s===Ja||s===Qa||s===$a)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(s===Za)return i.COMPRESSED_RED_RGTC1_EXT;if(s===Ja)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qa)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$a)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xr?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new Dc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Tn({vertexShader:hg,fragmentShader:fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new vi(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pg extends gi{constructor(e,t){super();const s=this;let n=null,i=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new dg,p={},E=t.getContextAttributes();let b=null,M=null;const y=[],w=[],T=new je;let P=null;const x=new Zt;x.viewport=new pt;const S=new Zt;S.viewport=new pt;const D=[x,S],R=new Mh;let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let k=y[G];return k===void 0&&(k=new Zs,y[G]=k),k.getTargetRaySpace()},this.getControllerGrip=function(G){let k=y[G];return k===void 0&&(k=new Zs,y[G]=k),k.getGripSpace()},this.getHand=function(G){let k=y[G];return k===void 0&&(k=new Zs,y[G]=k),k.getHandSpace()};function V(G){const k=w.indexOf(G.inputSource);if(k===-1)return;const J=y[k];J!==void 0&&(J.update(G.inputSource,G.frame,c||a),J.dispatchEvent({type:G.type,data:G.inputSource}))}function B(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",z);for(let G=0;G<y.length;G++){const k=w[G];k!==null&&(w[G]=null,y[G].disconnect(k))}I=null,N=null,m.reset();for(const G in p)delete p[G];e.setRenderTarget(b),d=null,f=null,h=null,n=null,M=null,ee.stop(),s.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){i=G,s.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,s.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(n,t)),h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(b=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",B),n.addEventListener("inputsourceschange",z),E.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,ve=null,fe=null;E.depth&&(fe=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=E.stencil?hi:Nn,ve=E.stencil?xr:bn);const me={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:i};h=this.getBinding(),f=h.createProjectionLayer(me),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new En(f.textureWidth,f.textureHeight,{format:fn,type:Jt,depthTexture:new Mr(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const J={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(n,t,J),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new En(d.framebufferWidth,d.framebufferHeight,{format:fn,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ee.setContext(n),ee.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(G){for(let k=0;k<G.removed.length;k++){const J=G.removed[k],ve=w.indexOf(J);ve>=0&&(w[ve]=null,y[ve].disconnect(J))}for(let k=0;k<G.added.length;k++){const J=G.added[k];let ve=w.indexOf(J);if(ve===-1){for(let me=0;me<y.length;me++)if(me>=w.length){w.push(J),ve=me;break}else if(w[me]===null){w[me]=J,ve=me;break}if(ve===-1)break}const fe=y[ve];fe&&fe.connect(J)}}const $=new Q,j=new Q;function W(G,k,J){$.setFromMatrixPosition(k.matrixWorld),j.setFromMatrixPosition(J.matrixWorld);const ve=$.distanceTo(j),fe=k.projectionMatrix.elements,me=J.projectionMatrix.elements,ge=fe[14]/(fe[10]-1),Ie=fe[14]/(fe[10]+1),De=(fe[9]+1)/fe[5],Ue=(fe[9]-1)/fe[5],Te=(fe[8]-1)/fe[0],ke=(me[8]+1)/me[0],U=ge*Te,we=ge*ke,be=ve/(-Te+ke),ae=be*-Te;if(k.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ae),G.translateZ(be),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),fe[10]===-1)G.projectionMatrix.copy(k.projectionMatrix),G.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const pe=ge+be,A=Ie+be,_=U-ae,F=we+(ve-ae),ie=De*Ie/A*pe,K=Ue*Ie/A*pe;G.projectionMatrix.makePerspective(_,F,ie,K,pe,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function L(G,k){k===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(k.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;let k=G.near,J=G.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(J=m.depthFar)),R.near=S.near=x.near=k,R.far=S.far=x.far=J,(I!==R.near||N!==R.far)&&(n.updateRenderState({depthNear:R.near,depthFar:R.far}),I=R.near,N=R.far),R.layers.mask=G.layers.mask|6,x.layers.mask=R.layers.mask&3,S.layers.mask=R.layers.mask&5;const ve=G.parent,fe=R.cameras;L(R,ve);for(let me=0;me<fe.length;me++)L(fe[me],ve);fe.length===2?W(R,x,S):R.projectionMatrix.copy(x.projectionMatrix),H(G,R,ve)};function H(G,k,J){J===null?G.matrix.copy(k.matrixWorld):(G.matrix.copy(J.matrixWorld),G.matrix.invert(),G.matrix.multiply(k.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(k.projectionMatrix),G.projectionMatrixInverse.copy(k.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=eo*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(G){return p[G]};let q=null;function ne(G,k){if(u=k.getViewerPose(c||a),g=k,u!==null){const J=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let ve=!1;J.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ie=0;Ie<J.length;Ie++){const De=J[Ie];let Ue=null;if(d!==null)Ue=d.getViewport(De);else{const ke=h.getViewSubImage(f,De);Ue=ke.viewport,Ie===0&&(e.setRenderTargetTextures(M,ke.colorTexture,ke.depthStencilTexture),e.setRenderTarget(M))}let Te=D[Ie];Te===void 0&&(Te=new Zt,Te.layers.enable(Ie),Te.viewport=new pt,D[Ie]=Te),Te.matrix.fromArray(De.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(De.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Ie===0&&(R.matrix.copy(Te.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(Te)}const fe=n.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){h=s.getBinding();const Ie=h.getDepthInformation(J[0]);Ie&&Ie.isValid&&Ie.texture&&m.init(Ie,n.renderState)}if(fe&&fe.includes("camera-access")&&v){e.state.unbindTexture(),h=s.getBinding();for(let Ie=0;Ie<J.length;Ie++){const De=J[Ie].camera;if(De){let Ue=p[De];Ue||(Ue=new Dc,p[De]=Ue);const Te=h.getCameraImage(De);Ue.sourceTexture=Te}}}}for(let J=0;J<y.length;J++){const ve=w[J],fe=y[J];ve!==null&&fe!==void 0&&fe.update(ve,k,c||a)}q&&q(G,k),k.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:k}),g=null}const ee=new Nc;ee.setAnimationLoop(ne),this.setAnimationLoop=function(G){q=G},this.dispose=function(){}}}const ai=new On,mg=new mt;function gg(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function s(m,p){p.color.getRGB(m.fogColor.value,Ac(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,E,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),h(m,p)):p.isMeshPhongMaterial?(i(m,p),u(m,p)):p.isMeshStandardMaterial?(i(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(i(m,p),g(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),v(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),b=E.envMap,M=E.envMapRotation;b&&(m.envMap.value=b,ai.copy(M),ai.x*=-1,ai.y*=-1,ai.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(ai)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:n}}function _g(r,e,t,s){let n={},i={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const M=b.program;s.uniformBlockBinding(E,M)}function c(E,b){let M=n[E.id];M===void 0&&(g(E),M=u(E),n[E.id]=M,E.addEventListener("dispose",m));const y=b.program;s.updateUBOMapping(E,y);const w=e.render.frame;i[E.id]!==w&&(f(E),i[E.id]=w)}function u(E){const b=h();E.__bindingPointIndex=b;const M=r.createBuffer(),y=E.__size,w=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,y,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,M),M}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const b=n[E.id],M=E.uniforms,y=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let w=0,T=M.length;w<T;w++){const P=Array.isArray(M[w])?M[w]:[M[w]];for(let x=0,S=P.length;x<S;x++){const D=P[x];if(d(D,w,x,y)===!0){const R=D.__offset,I=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let V=0;V<I.length;V++){const B=I[V],z=v(B);typeof B=="number"||typeof B=="boolean"?(D.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,R+N,D.__data)):B.isMatrix3?(D.__data[0]=B.elements[0],D.__data[1]=B.elements[1],D.__data[2]=B.elements[2],D.__data[3]=0,D.__data[4]=B.elements[3],D.__data[5]=B.elements[4],D.__data[6]=B.elements[5],D.__data[7]=0,D.__data[8]=B.elements[6],D.__data[9]=B.elements[7],D.__data[10]=B.elements[8],D.__data[11]=0):(B.toArray(D.__data,N),N+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,R,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(E,b,M,y){const w=E.value,T=b+"_"+M;if(y[T]===void 0)return typeof w=="number"||typeof w=="boolean"?y[T]=w:y[T]=w.clone(),!0;{const P=y[T];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return y[T]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(E){const b=E.uniforms;let M=0;const y=16;for(let T=0,P=b.length;T<P;T++){const x=Array.isArray(b[T])?b[T]:[b[T]];for(let S=0,D=x.length;S<D;S++){const R=x[S],I=Array.isArray(R.value)?R.value:[R.value];for(let N=0,V=I.length;N<V;N++){const B=I[N],z=v(B),$=M%y,j=$%z.boundary,W=$+j;M+=j,W!==0&&y-W<z.storage&&(M+=y-W),R.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=M,M+=z.storage}}}const w=M%y;return w>0&&(M+=y-w),E.__size=M,E.__cache={},this}function v(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(n[b.id]),delete n[b.id],delete i[b.id]}function p(){for(const E in n)r.deleteBuffer(n[E]);a=[],n={},i={}}return{bind:l,update:c,dispose:p}}const vg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _n=null;function xg(){return _n===null&&(_n=new ch(vg,16,16,Wi,Fn),_n.name="DFG_LUT",_n.minFilter=At,_n.magFilter=At,_n.wrapS=Un,_n.wrapT=Un,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}class Sg{constructor(e={}){const{canvas:t=Nu(),context:s=null,depth:n=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Jt}=e;this.isWebGLRenderer=!0;let g;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=s.getContextAttributes().alpha}else g=a;const v=d,m=new Set([_o,go,mo]),p=new Set([Jt,bn,vr,xr,fo,po]),E=new Uint32Array(4),b=new Int32Array(4);let M=null,y=null;const w=[],T=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=en;let D=0,R=0,I=null,N=-1,V=null;const B=new pt,z=new pt;let $=null;const j=new et(0);let W=0,L=t.width,H=t.height,q=1,ne=null,ee=null;const G=new pt(0,0,L,H),k=new pt(0,0,L,H);let J=!1;const ve=new bo;let fe=!1,me=!1;const ge=new mt,Ie=new Q,De=new pt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function ke(){return I===null?q:1}let U=s;function we(C,X){return t.getContext(C,X)}try{const C={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uo}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),U===null){const X="webgl2";if(U=we(X,C),U===null)throw we(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw it("WebGLRenderer: "+C.message),C}let be,ae,pe,A,_,F,ie,K,Y,xe,_e,ye,Re,oe,le,ue,Ee,Se,We,O,he,de,Pe,ce;function se(){be=new xp(U),be.init(),de=new ug(U,be),ae=new up(U,be,e,de),pe=new lg(U,be),ae.reversedDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),A=new yp(U),_=new jm,F=new cg(U,be,pe,_,ae,de,A),ie=new fp(x),K=new vp(x),Y=new Th(U),Pe=new lp(U,Y),xe=new Sp(U,Y,A,Pe),_e=new bp(U,xe,Y,A),We=new Ep(U,ae,F),ue=new hp(_),ye=new Ym(x,ie,K,be,ae,Pe,ue),Re=new gg(x,_),oe=new Km,le=new tg(be),Se=new op(x,ie,K,pe,_e,g,l),Ee=new ag(x,_e,ae),ce=new _g(U,A,ae,pe),O=new cp(U,be,A),he=new Mp(U,be,A),A.programs=ye.programs,x.capabilities=ae,x.extensions=be,x.properties=_,x.renderLists=oe,x.shadowMap=Ee,x.state=pe,x.info=A}se(),v!==Jt&&(P=new Ap(v,t.width,t.height,n,i));const Me=new pg(x,U);this.xr=Me,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=be.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=be.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(L,H,!1))},this.getSize=function(C){return C.set(L,H)},this.setSize=function(C,X,re=!0){if(Me.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}L=C,H=X,t.width=Math.floor(C*q),t.height=Math.floor(X*q),re===!0&&(t.style.width=C+"px",t.style.height=X+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(L*q,H*q).floor()},this.setDrawingBufferSize=function(C,X,re){L=C,H=X,q=re,t.width=Math.floor(C*re),t.height=Math.floor(X*re),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(v===Jt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(G)},this.setViewport=function(C,X,re,te){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,X,re,te),pe.viewport(B.copy(G).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(k)},this.setScissor=function(C,X,re,te){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,X,re,te),pe.scissor(z.copy(k).multiplyScalar(q).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(C){pe.setScissorTest(J=C)},this.setOpaqueSort=function(C){ne=C},this.setTransparentSort=function(C){ee=C},this.getClearColor=function(C){return C.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,re=!0){let te=0;if(C){let Z=!1;if(I!==null){const Ae=I.texture.format;Z=m.has(Ae)}if(Z){const Ae=I.texture.type,Fe=p.has(Ae),Ce=Se.getClearColor(),Be=Se.getClearAlpha(),Ge=Ce.r,Ye=Ce.g,Ve=Ce.b;Fe?(E[0]=Ge,E[1]=Ye,E[2]=Ve,E[3]=Be,U.clearBufferuiv(U.COLOR,0,E)):(b[0]=Ge,b[1]=Ye,b[2]=Ve,b[3]=Be,U.clearBufferiv(U.COLOR,0,b))}else te|=U.COLOR_BUFFER_BIT}X&&(te|=U.DEPTH_BUFFER_BIT),re&&(te|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),Se.dispose(),oe.dispose(),le.dispose(),_.dispose(),ie.dispose(),K.dispose(),_e.dispose(),Pe.dispose(),ce.dispose(),ye.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",rn),Me.removeEventListener("sessionend",mn),wt.stop()};function Ne(C){C.preventDefault(),jo("WebGLRenderer: Context Lost."),S=!0}function Oe(){jo("WebGLRenderer: Context Restored."),S=!1;const C=A.autoReset,X=Ee.enabled,re=Ee.autoUpdate,te=Ee.needsUpdate,Z=Ee.type;se(),A.autoReset=C,Ee.enabled=X,Ee.autoUpdate=re,Ee.needsUpdate=te,Ee.type=Z}function Xe(C){it("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ht(C){const X=C.target;X.removeEventListener("dispose",ht),ft(X)}function ft(C){gt(C),_.remove(C)}function gt(C){const X=_.get(C).programs;X!==void 0&&(X.forEach(function(re){ye.releaseProgram(re)}),C.isShaderMaterial&&ye.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,re,te,Z,Ae){X===null&&(X=Ue);const Fe=Z.isMesh&&Z.matrixWorld.determinant()<0,Ce=xs(C,X,re,te,Z);pe.setMaterial(te,Fe);let Be=re.index,Ge=1;if(te.wireframe===!0){if(Be=xe.getWireframeAttribute(re),Be===void 0)return;Ge=2}const Ye=re.drawRange,Ve=re.attributes.position;let Je=Ye.start*Ge,tt=(Ye.start+Ye.count)*Ge;Ae!==null&&(Je=Math.max(Je,Ae.start*Ge),tt=Math.min(tt,(Ae.start+Ae.count)*Ge)),Be!==null?(Je=Math.max(Je,0),tt=Math.min(tt,Be.count)):Ve!=null&&(Je=Math.max(Je,0),tt=Math.min(tt,Ve.count));const dt=tt-Je;if(dt<0||dt===1/0)return;Pe.setup(Z,te,Ce,re,Be);let lt,st=O;if(Be!==null&&(lt=Y.get(Be),st=he,st.setIndex(lt)),Z.isMesh)te.wireframe===!0?(pe.setLineWidth(te.wireframeLinewidth*ke()),st.setMode(U.LINES)):st.setMode(U.TRIANGLES);else if(Z.isLine){let He=te.linewidth;He===void 0&&(He=1),pe.setLineWidth(He*ke()),Z.isLineSegments?st.setMode(U.LINES):Z.isLineLoop?st.setMode(U.LINE_LOOP):st.setMode(U.LINE_STRIP)}else Z.isPoints?st.setMode(U.POINTS):Z.isSprite&&st.setMode(U.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Sr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))st.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const He=Z._multiDrawStarts,nt=Z._multiDrawCounts,Ke=Z._multiDrawCount,Ft=Be?Y.get(Be).bytesPerElement:1,sn=_.get(te).currentProgram.getUniforms();for(let xt=0;xt<Ke;xt++)sn.setValue(U,"_gl_DrawID",xt),st.render(He[xt]/Ft,nt[xt])}else if(Z.isInstancedMesh)st.renderInstances(Je,dt,Z.count);else if(re.isInstancedBufferGeometry){const He=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,nt=Math.min(re.instanceCount,He);st.renderInstances(Je,dt,nt)}else st.render(Je,dt)};function Ot(C,X,re){C.transparent===!0&&C.side===xn&&C.forceSinglePass===!1?(C.side=Ht,C.needsUpdate=!0,Qn(C,X,re),C.side=Jn,C.needsUpdate=!0,Qn(C,X,re),C.side=xn):Qn(C,X,re)}this.compile=function(C,X,re=null){re===null&&(re=C),y=le.get(re),y.init(X),T.push(y),re.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),C!==re&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),y.setupLights();const te=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let Fe=0;Fe<Ae.length;Fe++){const Ce=Ae[Fe];Ot(Ce,re,Z),te.add(Ce)}else Ot(Ae,re,Z),te.add(Ae)}),y=T.pop(),te},this.compileAsync=function(C,X,re=null){const te=this.compile(C,X,re);return new Promise(Z=>{function Ae(){if(te.forEach(function(Fe){_.get(Fe).currentProgram.isReady()&&te.delete(Fe)}),te.size===0){Z(C);return}setTimeout(Ae,10)}be.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Qt=null;function nn(C){Qt&&Qt(C)}function rn(){wt.stop()}function mn(){wt.start()}const wt=new Nc;wt.setAnimationLoop(nn),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(C){Qt=C,Me.setAnimationLoop(C),C===null?wt.stop():wt.start()},Me.addEventListener("sessionstart",rn),Me.addEventListener("sessionend",mn),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const re=Me.enabled===!0&&Me.isPresenting===!0,te=P!==null&&(I===null||re)&&P.begin(x,I);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(X),X=Me.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,X,I),y=le.get(C,T.length),y.init(X),T.push(y),ge.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ve.setFromProjectionMatrix(ge,Mn,X.reversedDepth),me=this.localClippingEnabled,fe=ue.init(this.clippingPlanes,me),M=oe.get(C,w.length),M.init(),w.push(M),Me.enabled===!0&&Me.isPresenting===!0){const Fe=x.xr.getDepthSensingMesh();Fe!==null&&vt(Fe,X,-1/0,x.sortObjects)}vt(C,X,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(ne,ee),Te=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,Te&&Se.addToRenderList(M,C),this.info.render.frame++,fe===!0&&ue.beginShadows();const Z=y.state.shadowsArray;if(Ee.render(Z,C,X),fe===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&P.hasRenderPass())===!1){const Fe=M.opaque,Ce=M.transmissive;if(y.setupLights(),X.isArrayCamera){const Be=X.cameras;if(Ce.length>0)for(let Ge=0,Ye=Be.length;Ge<Ye;Ge++){const Ve=Be[Ge];Ki(Fe,Ce,C,Ve)}Te&&Se.render(C);for(let Ge=0,Ye=Be.length;Ge<Ye;Ge++){const Ve=Be[Ge];gn(M,C,Ve,Ve.viewport)}}else Ce.length>0&&Ki(Fe,Ce,C,X),Te&&Se.render(C),gn(M,C,X)}I!==null&&R===0&&(F.updateMultisampleRenderTarget(I),F.updateRenderTargetMipmap(I)),te&&P.end(x),C.isScene===!0&&C.onAfterRender(x,C,X),Pe.resetDefaultState(),N=-1,V=null,T.pop(),T.length>0?(y=T[T.length-1],fe===!0&&ue.setGlobalState(x.clippingPlanes,y.state.camera)):y=null,w.pop(),w.length>0?M=w[w.length-1]:M=null};function vt(C,X,re,te){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ve.intersectsSprite(C)){te&&De.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ge);const Fe=_e.update(C),Ce=C.material;Ce.visible&&M.push(C,Fe,Ce,re,De.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ve.intersectsObject(C))){const Fe=_e.update(C),Ce=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),De.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),De.copy(Fe.boundingSphere.center)),De.applyMatrix4(C.matrixWorld).applyMatrix4(ge)),Array.isArray(Ce)){const Be=Fe.groups;for(let Ge=0,Ye=Be.length;Ge<Ye;Ge++){const Ve=Be[Ge],Je=Ce[Ve.materialIndex];Je&&Je.visible&&M.push(C,Fe,Je,re,De.z,Ve)}}else Ce.visible&&M.push(C,Fe,Ce,re,De.z,null)}}const Ae=C.children;for(let Fe=0,Ce=Ae.length;Fe<Ce;Fe++)vt(Ae[Fe],X,re,te)}function gn(C,X,re,te){const{opaque:Z,transmissive:Ae,transparent:Fe}=C;y.setupLightsView(re),fe===!0&&ue.setGlobalState(x.clippingPlanes,re),te&&pe.viewport(B.copy(te)),Z.length>0&&Bn(Z,X,re),Ae.length>0&&Bn(Ae,X,re),Fe.length>0&&Bn(Fe,X,re),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Ki(C,X,re,te){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[te.id]===void 0){const Je=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[te.id]=new En(1,1,{generateMipmaps:!0,type:Je?Fn:Jt,minFilter:ui,samples:ae.samples,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const Ae=y.state.transmissionRenderTarget[te.id],Fe=te.viewport||B;Ae.setSize(Fe.z*x.transmissionResolutionScale,Fe.w*x.transmissionResolutionScale);const Ce=x.getRenderTarget(),Be=x.getActiveCubeFace(),Ge=x.getActiveMipmapLevel();x.setRenderTarget(Ae),x.getClearColor(j),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Te&&Se.render(re);const Ye=x.toneMapping;x.toneMapping=yn;const Ve=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),y.setupLightsView(te),fe===!0&&ue.setGlobalState(x.clippingPlanes,te),Bn(C,re,te),F.updateMultisampleRenderTarget(Ae),F.updateRenderTargetMipmap(Ae),be.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let tt=0,dt=X.length;tt<dt;tt++){const lt=X[tt],{object:st,geometry:He,material:nt,group:Ke}=lt;if(nt.side===xn&&st.layers.test(te.layers)){const Ft=nt.side;nt.side=Ht,nt.needsUpdate=!0,Tr(st,re,te,He,nt,Ke),nt.side=Ft,nt.needsUpdate=!0,Je=!0}}Je===!0&&(F.updateMultisampleRenderTarget(Ae),F.updateRenderTargetMipmap(Ae))}x.setRenderTarget(Ce,Be,Ge),x.setClearColor(j,W),Ve!==void 0&&(te.viewport=Ve),x.toneMapping=Ye}function Bn(C,X,re){const te=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,Ae=C.length;Z<Ae;Z++){const Fe=C[Z],{object:Ce,geometry:Be,group:Ge}=Fe;let Ye=Fe.material;Ye.allowOverride===!0&&te!==null&&(Ye=te),Ce.layers.test(re.layers)&&Tr(Ce,X,re,Be,Ye,Ge)}}function Tr(C,X,re,te,Z,Ae){C.onBeforeRender(x,X,re,te,Z,Ae),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(x,X,re,te,C,Ae),Z.transparent===!0&&Z.side===xn&&Z.forceSinglePass===!1?(Z.side=Ht,Z.needsUpdate=!0,x.renderBufferDirect(re,X,te,Z,C,Ae),Z.side=Jn,Z.needsUpdate=!0,x.renderBufferDirect(re,X,te,Z,C,Ae),Z.side=xn):x.renderBufferDirect(re,X,te,Z,C,Ae),C.onAfterRender(x,X,re,te,Z,Ae)}function Qn(C,X,re){X.isScene!==!0&&(X=Ue);const te=_.get(C),Z=y.state.lights,Ae=y.state.shadowsArray,Fe=Z.state.version,Ce=ye.getParameters(C,Z.state,Ae,X,re),Be=ye.getProgramCacheKey(Ce);let Ge=te.programs;te.environment=C.isMeshStandardMaterial?X.environment:null,te.fog=X.fog,te.envMap=(C.isMeshStandardMaterial?K:ie).get(C.envMap||te.environment),te.envMapRotation=te.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Ge===void 0&&(C.addEventListener("dispose",ht),Ge=new Map,te.programs=Ge);let Ye=Ge.get(Be);if(Ye!==void 0){if(te.currentProgram===Ye&&te.lightsStateVersion===Fe)return xi(C,Ce),Ye}else Ce.uniforms=ye.getUniforms(C),C.onBeforeCompile(Ce,x),Ye=ye.acquireProgram(Ce,Be),Ge.set(Be,Ye),te.uniforms=Ce.uniforms;const Ve=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=ue.uniform),xi(C,Ce),te.needsLights=Si(C),te.lightsStateVersion=Fe,te.needsLights&&(Ve.ambientLightColor.value=Z.state.ambient,Ve.lightProbe.value=Z.state.probe,Ve.directionalLights.value=Z.state.directional,Ve.directionalLightShadows.value=Z.state.directionalShadow,Ve.spotLights.value=Z.state.spot,Ve.spotLightShadows.value=Z.state.spotShadow,Ve.rectAreaLights.value=Z.state.rectArea,Ve.ltc_1.value=Z.state.rectAreaLTC1,Ve.ltc_2.value=Z.state.rectAreaLTC2,Ve.pointLights.value=Z.state.point,Ve.pointLightShadows.value=Z.state.pointShadow,Ve.hemisphereLights.value=Z.state.hemi,Ve.directionalShadowMap.value=Z.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ve.spotShadowMap.value=Z.state.spotShadowMap,Ve.spotLightMatrix.value=Z.state.spotLightMatrix,Ve.spotLightMap.value=Z.state.spotLightMap,Ve.pointShadowMap.value=Z.state.pointShadowMap,Ve.pointShadowMatrix.value=Z.state.pointShadowMatrix),te.currentProgram=Ye,te.uniformsList=null,Ye}function $n(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=os.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function xi(C,X){const re=_.get(C);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function xs(C,X,re,te,Z){X.isScene!==!0&&(X=Ue),F.resetTextureUnits();const Ae=X.fog,Fe=te.isMeshStandardMaterial?X.environment:null,Ce=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Xi,Be=(te.isMeshStandardMaterial?K:ie).get(te.envMap||Fe),Ge=te.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ye=!!re.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ve=!!re.morphAttributes.position,Je=!!re.morphAttributes.normal,tt=!!re.morphAttributes.color;let dt=yn;te.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(dt=x.toneMapping);const lt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,st=lt!==void 0?lt.length:0,He=_.get(te),nt=y.state.lights;if(fe===!0&&(me===!0||C!==V)){const bt=C===V&&te.id===N;ue.setState(te,C,bt)}let Ke=!1;te.version===He.__version?(He.needsLights&&He.lightsStateVersion!==nt.state.version||He.outputColorSpace!==Ce||Z.isBatchedMesh&&He.batching===!1||!Z.isBatchedMesh&&He.batching===!0||Z.isBatchedMesh&&He.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&He.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&He.instancing===!1||!Z.isInstancedMesh&&He.instancing===!0||Z.isSkinnedMesh&&He.skinning===!1||!Z.isSkinnedMesh&&He.skinning===!0||Z.isInstancedMesh&&He.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&He.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&He.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&He.instancingMorph===!1&&Z.morphTexture!==null||He.envMap!==Be||te.fog===!0&&He.fog!==Ae||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ue.numPlanes||He.numIntersection!==ue.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==Ye||He.morphTargets!==Ve||He.morphNormals!==Je||He.morphColors!==tt||He.toneMapping!==dt||He.morphTargetsCount!==st)&&(Ke=!0):(Ke=!0,He.__version=te.version);let Ft=He.currentProgram;Ke===!0&&(Ft=Qn(te,X,Z));let sn=!1,xt=!1,kn=!1;const at=Ft.getUniforms(),St=He.uniforms;if(pe.useProgram(Ft.program)&&(sn=!0,xt=!0,kn=!0),te.id!==N&&(N=te.id,xt=!0),sn||V!==C){pe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),at.setValue(U,"projectionMatrix",C.projectionMatrix),at.setValue(U,"viewMatrix",C.matrixWorldInverse);const Ct=at.map.cameraPosition;Ct!==void 0&&Ct.setValue(U,Ie.setFromMatrixPosition(C.matrixWorld)),ae.logarithmicDepthBuffer&&at.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&at.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),V!==C&&(V=C,xt=!0,kn=!0)}if(He.needsLights&&(nt.state.directionalShadowMap.length>0&&at.setValue(U,"directionalShadowMap",nt.state.directionalShadowMap,F),nt.state.spotShadowMap.length>0&&at.setValue(U,"spotShadowMap",nt.state.spotShadowMap,F),nt.state.pointShadowMap.length>0&&at.setValue(U,"pointShadowMap",nt.state.pointShadowMap,F)),Z.isSkinnedMesh){at.setOptional(U,Z,"bindMatrix"),at.setOptional(U,Z,"bindMatrixInverse");const bt=Z.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),at.setValue(U,"boneTexture",bt.boneTexture,F))}Z.isBatchedMesh&&(at.setOptional(U,Z,"batchingTexture"),at.setValue(U,"batchingTexture",Z._matricesTexture,F),at.setOptional(U,Z,"batchingIdTexture"),at.setValue(U,"batchingIdTexture",Z._indirectTexture,F),at.setOptional(U,Z,"batchingColorTexture"),Z._colorsTexture!==null&&at.setValue(U,"batchingColorTexture",Z._colorsTexture,F));const Dt=re.morphAttributes;if((Dt.position!==void 0||Dt.normal!==void 0||Dt.color!==void 0)&&We.update(Z,re,Ft),(xt||He.receiveShadow!==Z.receiveShadow)&&(He.receiveShadow=Z.receiveShadow,at.setValue(U,"receiveShadow",Z.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(St.envMap.value=Be,St.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&X.environment!==null&&(St.envMapIntensity.value=X.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=xg()),xt&&(at.setValue(U,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Ar(St,kn),Ae&&te.fog===!0&&Re.refreshFogUniforms(St,Ae),Re.refreshMaterialUniforms(St,te,q,H,y.state.transmissionRenderTarget[C.id]),os.upload(U,$n(He),St,F)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(os.upload(U,$n(He),St,F),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&at.setValue(U,"center",Z.center),at.setValue(U,"modelViewMatrix",Z.modelViewMatrix),at.setValue(U,"normalMatrix",Z.normalMatrix),at.setValue(U,"modelMatrix",Z.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const bt=te.uniformsGroups;for(let Ct=0,ei=bt.length;Ct<ei;Ct++){const Yt=bt[Ct];ce.update(Yt,Ft),ce.bind(Yt,Ft)}}return Ft}function Ar(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Si(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,X,re){const te=_.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),_.get(C.texture).__webglTexture=X,_.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:re,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const re=_.get(C);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0};const Zi=U.createFramebuffer();this.setRenderTarget=function(C,X=0,re=0){I=C,D=X,R=re;let te=null,Z=!1,Ae=!1;if(C){const Ce=_.get(C);if(Ce.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(U.FRAMEBUFFER,Ce.__webglFramebuffer),B.copy(C.viewport),z.copy(C.scissor),$=C.scissorTest,pe.viewport(B),pe.scissor(z),pe.setScissorTest($),N=-1;return}else if(Ce.__webglFramebuffer===void 0)F.setupRenderTarget(C);else if(Ce.__hasExternalTextures)F.rebindTextures(C,_.get(C.texture).__webglTexture,_.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ye=C.depthTexture;if(Ce.__boundDepthTexture!==Ye){if(Ye!==null&&_.has(Ye)&&(C.width!==Ye.image.width||C.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(C)}}const Be=C.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ae=!0);const Ge=_.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ge[X])?te=Ge[X][re]:te=Ge[X],Z=!0):C.samples>0&&F.useMultisampledRTT(C)===!1?te=_.get(C).__webglMultisampledFramebuffer:Array.isArray(Ge)?te=Ge[re]:te=Ge,B.copy(C.viewport),z.copy(C.scissor),$=C.scissorTest}else B.copy(G).multiplyScalar(q).floor(),z.copy(k).multiplyScalar(q).floor(),$=J;if(re!==0&&(te=Zi),pe.bindFramebuffer(U.FRAMEBUFFER,te)&&pe.drawBuffers(C,te),pe.viewport(B),pe.scissor(z),pe.setScissorTest($),Z){const Ce=_.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,re)}else if(Ae){const Ce=X;for(let Be=0;Be<C.textures.length;Be++){const Ge=_.get(C.textures[Be]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Be,Ge.__webglTexture,re,Ce)}}else if(C!==null&&re!==0){const Ce=_.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ce.__webglTexture,re)}N=-1},this.readRenderTargetPixels=function(C,X,re,te,Z,Ae,Fe,Ce=0){if(!(C&&C.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=_.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be){pe.bindFramebuffer(U.FRAMEBUFFER,Be);try{const Ge=C.textures[Ce],Ye=Ge.format,Ve=Ge.type;if(!ae.textureFormatReadable(Ye)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Ve)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-te&&re>=0&&re<=C.height-Z&&(C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ce),U.readPixels(X,re,te,Z,de.convert(Ye),de.convert(Ve),Ae))}finally{const Ge=I!==null?_.get(I).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,X,re,te,Z,Ae,Fe,Ce=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=_.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be)if(X>=0&&X<=C.width-te&&re>=0&&re<=C.height-Z){pe.bindFramebuffer(U.FRAMEBUFFER,Be);const Ge=C.textures[Ce],Ye=Ge.format,Ve=Ge.type;if(!ae.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.bufferData(U.PIXEL_PACK_BUFFER,Ae.byteLength,U.STREAM_READ),C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ce),U.readPixels(X,re,te,Z,de.convert(Ye),de.convert(Ve),0);const tt=I!==null?_.get(I).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,tt);const dt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ou(U,dt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ae),U.deleteBuffer(Je),U.deleteSync(dt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,re=0){const te=Math.pow(2,-re),Z=Math.floor(C.image.width*te),Ae=Math.floor(C.image.height*te),Fe=X!==null?X.x:0,Ce=X!==null?X.y:0;F.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,re,0,0,Fe,Ce,Z,Ae),pe.unbindTexture()};const Ji=U.createFramebuffer(),ze=U.createFramebuffer();this.copyTextureToTexture=function(C,X,re=null,te=null,Z=0,Ae=null){Ae===null&&(Z!==0?(Sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Z,Z=0):Ae=0);let Fe,Ce,Be,Ge,Ye,Ve,Je,tt,dt;const lt=C.isCompressedTexture?C.mipmaps[Ae]:C.image;if(re!==null)Fe=re.max.x-re.min.x,Ce=re.max.y-re.min.y,Be=re.isBox3?re.max.z-re.min.z:1,Ge=re.min.x,Ye=re.min.y,Ve=re.isBox3?re.min.z:0;else{const Dt=Math.pow(2,-Z);Fe=Math.floor(lt.width*Dt),Ce=Math.floor(lt.height*Dt),C.isDataArrayTexture?Be=lt.depth:C.isData3DTexture?Be=Math.floor(lt.depth*Dt):Be=1,Ge=0,Ye=0,Ve=0}te!==null?(Je=te.x,tt=te.y,dt=te.z):(Je=0,tt=0,dt=0);const st=de.convert(X.format),He=de.convert(X.type);let nt;X.isData3DTexture?(F.setTexture3D(X,0),nt=U.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(F.setTexture2DArray(X,0),nt=U.TEXTURE_2D_ARRAY):(F.setTexture2D(X,0),nt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment);const Ke=U.getParameter(U.UNPACK_ROW_LENGTH),Ft=U.getParameter(U.UNPACK_IMAGE_HEIGHT),sn=U.getParameter(U.UNPACK_SKIP_PIXELS),xt=U.getParameter(U.UNPACK_SKIP_ROWS),kn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,lt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ge),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ye),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve);const at=C.isDataArrayTexture||C.isData3DTexture,St=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const Dt=_.get(C),bt=_.get(X),Ct=_.get(Dt.__renderTarget),ei=_.get(bt.__renderTarget);pe.bindFramebuffer(U.READ_FRAMEBUFFER,Ct.__webglFramebuffer),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let Yt=0;Yt<Be;Yt++)at&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_.get(C).__webglTexture,Z,Ve+Yt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_.get(X).__webglTexture,Ae,dt+Yt)),U.blitFramebuffer(Ge,Ye,Fe,Ce,Je,tt,Fe,Ce,U.DEPTH_BUFFER_BIT,U.NEAREST);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||_.has(C)){const Dt=_.get(C),bt=_.get(X);pe.bindFramebuffer(U.READ_FRAMEBUFFER,Ji),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,ze);for(let Ct=0;Ct<Be;Ct++)at?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.__webglTexture,Z,Ve+Ct):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Dt.__webglTexture,Z),St?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.__webglTexture,Ae,dt+Ct):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bt.__webglTexture,Ae),Z!==0?U.blitFramebuffer(Ge,Ye,Fe,Ce,Je,tt,Fe,Ce,U.COLOR_BUFFER_BIT,U.NEAREST):St?U.copyTexSubImage3D(nt,Ae,Je,tt,dt+Ct,Ge,Ye,Fe,Ce):U.copyTexSubImage2D(nt,Ae,Je,tt,Ge,Ye,Fe,Ce);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else St?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(nt,Ae,Je,tt,dt,Fe,Ce,Be,st,He,lt.data):X.isCompressedArrayTexture?U.compressedTexSubImage3D(nt,Ae,Je,tt,dt,Fe,Ce,Be,st,lt.data):U.texSubImage3D(nt,Ae,Je,tt,dt,Fe,Ce,Be,st,He,lt):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ae,Je,tt,Fe,Ce,st,He,lt.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ae,Je,tt,lt.width,lt.height,st,lt.data):U.texSubImage2D(U.TEXTURE_2D,Ae,Je,tt,Fe,Ce,st,He,lt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ke),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ft),U.pixelStorei(U.UNPACK_SKIP_PIXELS,sn),U.pixelStorei(U.UNPACK_SKIP_ROWS,xt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,kn),Ae===0&&X.generateMipmaps&&U.generateMipmap(nt),pe.unbindTexture()},this.initRenderTarget=function(C){_.get(C).__webglFramebuffer===void 0&&F.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?F.setTextureCube(C,0):C.isData3DTexture?F.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?F.setTexture2DArray(C,0):F.setTexture2D(C,0),pe.unbindTexture()},this.resetState=function(){D=0,R=0,I=null,pe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const Gl={type:"change"},To={type:"start"},zc={type:"end"},Qr=new Mo,zl=new qn,Mg=Math.cos(70*ku.DEG2RAD),Mt=new Q,zt=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sa=1e-6;class yg extends Eh{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:Bi.ROTATE,TWO:Bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new mi,this._lastTargetPosition=new Q,this._quat=new mi().setFromUnitVectors(e.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ml,this._sphericalDelta=new ml,this._scale=1,this._panOffset=new Q,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new Q,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bg.bind(this),this._onPointerDown=Eg.bind(this),this._onPointerUp=Tg.bind(this),this._onContextMenu=Ug.bind(this),this._onMouseWheel=Cg.bind(this),this._onKeyDown=Rg.bind(this),this._onTouchStart=Pg.bind(this),this._onTouchMove=Dg.bind(this),this._onMouseDown=Ag.bind(this),this._onMouseMove=wg.bind(this),this._interceptControlDown=Lg.bind(this),this._interceptControlUp=Ig.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gl),this.update(),this.state=ut.NONE}update(e=null){const t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(s)&&isFinite(n)&&(s<-Math.PI?s+=zt:s>Math.PI&&(s-=zt),n<-Math.PI?n+=zt:n>Math.PI&&(n-=zt),s<=n?this._spherical.theta=Math.max(s,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+n)/2?Math.max(s,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=a!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Mt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),i=!!l}else if(this.object.isOrthographicCamera){const o=new Q(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=l!==this.object.zoom;const c=new Q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Qr.origin.copy(this.object.position),Qr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qr.direction))<Mg?this.object.lookAt(this.target):(zl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qr.intersectPlane(zl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>sa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sa||this._lastTargetPosition.distanceToSquared(this.target)>sa?(this.dispatchEvent(Gl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?zt/60*this.autoRotateSpeed*e:zt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;Mt.copy(n).sub(this.target);let i=Mt.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/s.clientHeight,this.object.matrix),this._panUp(2*t*i/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),n=e-s.left,i=t-s.top,a=s.width,o=s.height;this._mouse.x=n/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(s,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(s,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,n=e.pageY-t.y,i=Math.sqrt(s*s+n*n);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),n=.5*(e.pageX+s.x),i=.5*(e.pageY+s.y);this._rotateEnd.set(n,i)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(s,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,n=e.pageY-t.y,i=Math.sqrt(s*s+n*n);this._dollyEnd.set(0,i),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function Eg(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function bg(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Tg(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zc),this.state=ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ag(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ut.DOLLY;break;case ki.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ut.ROTATE}break;case ki.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(To)}function wg(r){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Cg(r){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(r.preventDefault(),this.dispatchEvent(To),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(zc))}function Rg(r){this.enabled!==!1&&this._handleKeyDown(r)}function Pg(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Bi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ut.TOUCH_ROTATE;break;case Bi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case Bi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ut.TOUCH_DOLLY_PAN;break;case Bi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(To)}function Dg(r){switch(this._trackPointer(r),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ut.NONE}}function Ug(r){this.enabled!==!1&&r.preventDefault()}function Lg(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ig(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Vl=class{target;name;intersected;wasIntersected=!1;wasIntersectedOnMouseDown=!1;distance;constructor(r,e){this.target=r,this.name=e,this.intersected=!1,this.distance=0}},Vt=class{type;cancelBubble;originalEvent;coords=new je(0,0);distance=0;intersected=!1;wasIntersected=!1;wasIntersectedOnMouseDown=!1;constructor(r,e=null){this.cancelBubble=!1,this.type=r,this.originalEvent=e}stopPropagation(){this.cancelBubble=!0}},Fg=class{renderer;camera;domElement;bindEventsOnBodyElement;autoAdd;scene;mouse;supportsPointerEvents;interactiveObjects;closestObject;raycaster;treatTouchEventsAsMouseEvents;constructor(r,e,t,s){this.renderer=r,this.camera=e,this.domElement=t,this.bindEventsOnBodyElement=s&&typeof s.bindEventsOnBodyElement<"u"?s.bindEventsOnBodyElement:!0,this.scene=s&&typeof s.scene<"u"?s.scene:null,this.scene&&(this.scene.onBeforeRender=()=>{this.autoAdd&&this.scene!==null&&this.scene.traverse(n=>{this.add(n),n.addEventListener("removed",i=>{this.remove(i.target)})}),this.update()}),this.autoAdd=s&&typeof s.autoAdd<"u"?s.autoAdd:!1,this.autoAdd&&this.scene===null&&console.error("Attention: Options.scene needs to be set when using options.autoAdd"),this.mouse=new je(-1,1),this.supportsPointerEvents=!!window.PointerEvent,this.interactiveObjects=[],this.closestObject=null,this.raycaster=new yh,t.addEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("pointermove",this.onDocumentPointerMove):t.addEventListener("pointermove",this.onDocumentPointerMove),t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("mousemove",this.onDocumentMouseMove):t.addEventListener("mousemove",this.onDocumentMouseMove),t.addEventListener("mousedown",this.onMouseDown),t.addEventListener("mouseup",this.onMouseUp),t.addEventListener("touchstart",this.onTouchStart,{passive:!0}),t.addEventListener("touchmove",this.onTouchMove,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.treatTouchEventsAsMouseEvents=!0}dispose=()=>{this.domElement.removeEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("pointermove",this.onDocumentPointerMove):this.domElement.removeEventListener("pointermove",this.onDocumentPointerMove),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("mousemove",this.onDocumentMouseMove):this.domElement.removeEventListener("mousemove",this.onDocumentMouseMove),this.domElement.removeEventListener("mousedown",this.onMouseDown),this.domElement.removeEventListener("mouseup",this.onMouseUp),this.domElement.removeEventListener("touchstart",this.onTouchStart),this.domElement.removeEventListener("touchmove",this.onTouchMove),this.domElement.removeEventListener("touchend",this.onTouchEnd)};add=(r,e=[])=>{if(r&&!this.interactiveObjects.find(t=>t.target===r))if(e.length>0)e.forEach(t=>{let s=r.getObjectByName(t);if(s){let n=new Vl(s,t);this.interactiveObjects.push(n)}});else{let t=new Vl(r,r.name);this.interactiveObjects.push(t)}};remove=(r,e=[])=>{!r||(e.length>0?e.forEach(t=>{let s=r.getObjectByName(t);s&&(this.interactiveObjects=this.interactiveObjects.filter(n=>n.target!==s))}):this.interactiveObjects=this.interactiveObjects.filter(t=>t.target!==r))};update=()=>{this.raycaster.setFromCamera(this.mouse,this.camera),this.interactiveObjects.forEach(s=>{s.target&&this.checkIntersection(s)}),this.interactiveObjects.sort(function(s,n){return s.distance-n.distance});let r=this.interactiveObjects.find(s=>s.intersected)??null;if(r!=this.closestObject){if(this.closestObject){let s=new Vt("mouseout");this.dispatch(this.closestObject,s)}if(r){let s=new Vt("mouseover");this.dispatch(r,s)}this.closestObject=r}let e;this.interactiveObjects.forEach(s=>{!s.intersected&&s.wasIntersected&&(e||(e=new Vt("mouseleave")),this.dispatch(s,e))});let t;this.interactiveObjects.forEach(s=>{s.intersected&&!s.wasIntersected&&(t||(t=new Vt("mouseenter")),this.dispatch(s,t))})};checkIntersection=r=>{let e=this.raycaster.intersectObjects([r.target],!0);if(r.wasIntersected=r.intersected,e.length>0){let t=e[0].distance;e.forEach(s=>{s.distance<t&&(t=s.distance)}),r.intersected=!0,r.distance=t}else r.intersected=!1};onDocumentMouseMove=r=>{this.mapPositionToPoint(this.mouse,r.clientX,r.clientY);let e=new Vt("mousemove",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onDocumentPointerMove=r=>{this.mapPositionToPoint(this.mouse,r.clientX,r.clientY);let e=new Vt("pointermove",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onTouchMove=r=>{r.touches.length>0&&this.mapPositionToPoint(this.mouse,r.touches[0].clientX,r.touches[0].clientY);let e=new Vt(this.treatTouchEventsAsMouseEvents?"mousemove":"touchmove",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onMouseClick=r=>{this.update();let e=new Vt("click",r);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})};onMouseDown=r=>{this.mapPositionToPoint(this.mouse,r.clientX,r.clientY),this.update();let e=new Vt("mousedown",r);this.interactiveObjects.forEach(t=>{t.intersected?(t.wasIntersectedOnMouseDown=!0,this.dispatch(t,e)):t.wasIntersectedOnMouseDown=!1})};onPointerDown=r=>{this.mapPositionToPoint(this.mouse,r.clientX,r.clientY),this.update();let e=new Vt("pointerdown",r);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})};onTouchStart=r=>{r.touches.length>0&&this.mapPositionToPoint(this.mouse,r.touches[0].clientX,r.touches[0].clientY),this.update();let e=new Vt(this.treatTouchEventsAsMouseEvents?"mousedown":"touchstart",r);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})};onMouseUp=r=>{let e=new Vt("mouseup",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onPointerUp=r=>{let e=new Vt("pointerup",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};onTouchEnd=r=>{r.touches.length>0&&this.mapPositionToPoint(this.mouse,r.touches[0].clientX,r.touches[0].clientY),this.update();let e=new Vt(this.treatTouchEventsAsMouseEvents?"mouseup":"touchend",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})};dispatch=(r,e)=>{r.target&&!e.cancelBubble&&(e.coords=this.mouse,e.distance=r.distance,e.intersected=r.intersected,e.wasIntersected=r.wasIntersected,e.wasIntersectedOnMouseDown=r.wasIntersectedOnMouseDown,r.target.dispatchEvent(e))};mapPositionToPoint=(r,e,t)=>{let s=this.renderer.domElement.getBoundingClientRect();r.x=(e-s.left)/s.width*2-1,r.y=-((t-s.top)/s.height)*2+1}},fi=Object.freeze({Linear:Object.freeze({None:function(r){return r},In:function(r){return r},Out:function(r){return r},InOut:function(r){return r}}),Quadratic:Object.freeze({In:function(r){return r*r},Out:function(r){return r*(2-r)},InOut:function(r){return(r*=2)<1?.5*r*r:-.5*(--r*(r-2)-1)}}),Cubic:Object.freeze({In:function(r){return r*r*r},Out:function(r){return--r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r:.5*((r-=2)*r*r+2)}}),Quartic:Object.freeze({In:function(r){return r*r*r*r},Out:function(r){return 1- --r*r*r*r},InOut:function(r){return(r*=2)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2)}}),Quintic:Object.freeze({In:function(r){return r*r*r*r*r},Out:function(r){return--r*r*r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2)}}),Sinusoidal:Object.freeze({In:function(r){return 1-Math.sin((1-r)*Math.PI/2)},Out:function(r){return Math.sin(r*Math.PI/2)},InOut:function(r){return .5*(1-Math.sin(Math.PI*(.5-r)))}}),Exponential:Object.freeze({In:function(r){return r===0?0:Math.pow(1024,r-1)},Out:function(r){return r===1?1:1-Math.pow(2,-10*r)},InOut:function(r){return r===0?0:r===1?1:(r*=2)<1?.5*Math.pow(1024,r-1):.5*(-Math.pow(2,-10*(r-1))+2)}}),Circular:Object.freeze({In:function(r){return 1-Math.sqrt(1-r*r)},Out:function(r){return Math.sqrt(1- --r*r)},InOut:function(r){return(r*=2)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1)}}),Elastic:Object.freeze({In:function(r){return r===0?0:r===1?1:-Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI)},Out:function(r){return r===0?0:r===1?1:Math.pow(2,-10*r)*Math.sin((r-.1)*5*Math.PI)+1},InOut:function(r){return r===0?0:r===1?1:(r*=2,r<1?-.5*Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI):.5*Math.pow(2,-10*(r-1))*Math.sin((r-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(r){var e=1.70158;return r===1?1:r*r*((e+1)*r-e)},Out:function(r){var e=1.70158;return r===0?0:--r*r*((e+1)*r+e)+1},InOut:function(r){var e=2.5949095;return(r*=2)<1?.5*(r*r*((e+1)*r-e)):.5*((r-=2)*r*((e+1)*r+e)+2)}}),Bounce:Object.freeze({In:function(r){return 1-fi.Bounce.Out(1-r)},Out:function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},InOut:function(r){return r<.5?fi.Bounce.In(r*2)*.5:fi.Bounce.Out(r*2-1)*.5+.5}}),generatePow:function(r){return r===void 0&&(r=4),r=r<Number.EPSILON?Number.EPSILON:r,r=r>1e4?1e4:r,{In:function(e){return Math.pow(e,r)},Out:function(e){return 1-Math.pow(1-e,r)},InOut:function(e){return e<.5?Math.pow(e*2,r)/2:(1-Math.pow(2-e*2,r))/2+.5}}}}),pr=function(){return performance.now()},Vc=(function(){function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return r.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},r.prototype.removeAll=function(){this._tweens={}},r.prototype.add=function(){for(var e,t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];for(var n=0,i=t;n<i.length;n++){var a=i[n];(e=a._group)===null||e===void 0||e.remove(a),a._group=this,this._tweens[a.getId()]=a,this._tweensAddedDuringUpdate[a.getId()]=a}},r.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var s=0,n=e;s<n.length;s++){var i=n[s];i._group=void 0,delete this._tweens[i.getId()],delete this._tweensAddedDuringUpdate[i.getId()]}},r.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},r.prototype.update=function(e,t){e===void 0&&(e=pr()),t===void 0&&(t=!0);var s=Object.keys(this._tweens);if(s.length!==0)for(;s.length>0;){this._tweensAddedDuringUpdate={};for(var n=0;n<s.length;n++){var i=this._tweens[s[n]],a=!t;i&&i.update(e,a)===!1&&!t&&this.remove(i)}s=Object.keys(this._tweensAddedDuringUpdate)}},r})(),ro={Linear:function(r,e){var t=r.length-1,s=t*e,n=Math.floor(s),i=ro.Utils.Linear;return e<0?i(r[0],r[1],s):e>1?i(r[t],r[t-1],t-s):i(r[n],r[n+1>t?t:n+1],s-n)},Utils:{Linear:function(r,e,t){return(e-r)*t+r}}},Hc=(function(){function r(){}return r.nextId=function(){return r._nextId++},r._nextId=0,r})(),so=new Vc,Hl=(function(){function r(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=fi.Linear.None,this._interpolationFunction=ro.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Hc.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=so,so.add(this))}return r.prototype.getId=function(){return this._id},r.prototype.isPlaying=function(){return this._isPlaying},r.prototype.isPaused=function(){return this._isPaused},r.prototype.getDuration=function(){return this._duration},r.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},r.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},r.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},r.prototype.start=function(e,t){if(e===void 0&&(e=pr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var s in this._valuesStartRepeat)this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var n={};for(var i in this._valuesEnd)n[i]=this._valuesEnd[i];this._valuesEnd=n}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},r.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},r.prototype._setupProperties=function(e,t,s,n,i){for(var a in s){var o=e[a],l=Array.isArray(o),c=l?"array":typeof o,u=!l&&Array.isArray(s[a]);if(!(c==="undefined"||c==="function")){if(u){var h=s[a];if(h.length===0)continue;for(var f=[o],d=0,g=h.length;d<g;d+=1){var v=this._handleRelativeValue(o,h[d]);if(isNaN(v)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(v)}u&&(s[a]=f)}if((c==="object"||l)&&o&&!u){t[a]=l?[]:{};var m=o;for(var p in m)t[a][p]=m[p];n[a]=l?[]:{};var h=s[a];if(!this._isDynamic){var E={};for(var p in h)E[p]=h[p];s[a]=h=E}this._setupProperties(m,t[a],h,n[a],i)}else(typeof t[a]>"u"||i)&&(t[a]=o),l||(t[a]*=1),u?n[a]=s[a].slice().reverse():n[a]=t[a]||0}}},r.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},r.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},r.prototype.pause=function(e){return e===void 0&&(e=pr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},r.prototype.resume=function(e){return e===void 0&&(e=pr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},r.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},r.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},r.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},r.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},r.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},r.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},r.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},r.prototype.easing=function(e){return e===void 0&&(e=fi.Linear.None),this._easingFunction=e,this},r.prototype.interpolation=function(e){return e===void 0&&(e=ro.Linear),this._interpolationFunction=e,this},r.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},r.prototype.onStart=function(e){return this._onStartCallback=e,this},r.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},r.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},r.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},r.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},r.prototype.onStop=function(e){return this._onStopCallback=e,this},r.prototype.update=function(e,t){var s=this,n;if(e===void 0&&(e=pr()),t===void 0&&(t=r.autoStartOnUpdate),this._isPaused)return!0;var i;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=e-this._startTime,o=this._duration+((n=this._repeatDelayTime)!==null&&n!==void 0?n:this._delayTime),l=this._duration+this._repeat*o,c=function(){if(s._duration===0||a>l)return 1;var v=Math.trunc(a/o),m=a-v*o,p=Math.min(m/s._duration,1);return p===0&&a===s._duration?1:p},u=c(),h=this._easingFunction(u);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,h),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),this._duration===0||a>=this._duration)if(this._repeat>0){var f=Math.min(Math.trunc((a-this._duration)/o)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=f);for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=o*f,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var d=0,g=this._chainedTweens.length;d<g;d++)this._chainedTweens[d].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},r.prototype._updateProperties=function(e,t,s,n){for(var i in s)if(t[i]!==void 0){var a=t[i]||0,o=s[i],l=Array.isArray(e[i]),c=Array.isArray(o),u=!l&&c;u?e[i]=this._interpolationFunction(o,n):typeof o=="object"&&o?this._updateProperties(e[i],a,o,n):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(e[i]=a+(o-a)*n))}},r.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},r.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],s=this._valuesEnd[e];typeof s=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(s):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},r.autoStartOnUpdate=!1,r})();Hc.nextId;var An=so;An.getAll.bind(An);An.removeAll.bind(An);An.add.bind(An);An.remove.bind(An);An.update.bind(An);const Ng={};function Og(){var r=Object.create(null);function e(n,i){var a=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!r[a])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=r[f.id].value),f}),c=s("<"+o+">.init",c),u&&(u=s("<"+o+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),r[a]={id:a,value:h,getTransferables:u},i(h)}catch(f){f&&f.noLog||console.error(f),i(f)}}function t(n,i){var a,o=n.id,l=n.args;(!r[o]||typeof r[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=r[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(u,function(h){return i(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){i(h)}function u(h){try{var f=r[o].getTransferables&&r[o].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),i(h,f)}catch(d){console.error(d),i(d)}}}function s(n,i){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(n){var i=n.data,a=i.messageId,o=i.action,l=i.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function Bg(r){var e=function(){for(var t=[],s=arguments.length;s--;)t[s]=arguments[s];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=r.dependencies,s=r.init;t=Array.isArray(t)?t.map(function(i){return i&&(i=i.onMainThread||i,i._getInitResult&&(i=i._getInitResult())),i}):[];var n=Promise.all(t).then(function(i){return s.apply(null,i)});return e._getInitResult=function(){return n},n},e}var Wc=function(){var r=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),r=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Wc=function(){return r},r},kg=0,Gg=0,aa=!1,gr=Object.create(null),_r=Object.create(null),ao=Object.create(null);function qi(r){if((!r||typeof r.init!="function")&&!aa)throw new Error("requires `options.init` function");var e=r.dependencies,t=r.init,s=r.getTransferables,n=r.workerId,i=Bg(r);n==null&&(n="#default");var a="workerModule"+ ++kg,o=r.name||a,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(aa=!0,u=qi({workerId:n,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+ls(u)+`
)}`}),aa=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],h=arguments.length;h--;)u[h]=arguments[h];if(!Wc())return i.apply(void 0,u);if(!l){l=Wl(n,"registerModule",c.workerModuleData);var f=function(){l=null,_r[n].delete(f)};(_r[n]||(_r[n]=new Set)).add(f)}return l.then(function(d){var g=d.isCallable;if(g)return Wl(n,"callModule",{id:a,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:a,name:o,dependencies:e,init:ls(t),getTransferables:s&&ls(s)},c.onMainThread=i,c}function zg(r){_r[r]&&_r[r].forEach(function(e){e()}),gr[r]&&(gr[r].terminate(),delete gr[r])}function ls(r){var e=r.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function Vg(r){var e=gr[r];if(!e){var t=ls(Og);e=gr[r]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+r.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(s){var n=s.data,i=n.messageId,a=ao[i];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete ao[i],a(n)}}return e}function Wl(r,e,t){return new Promise(function(s,n){var i=++Gg;ao[i]=function(a){a.success?s(a.result):n(new Error("Error in worker "+e+" call: "+a.error))},Vg(r).postMessage({messageId:i,action:e,data:t})})}function Xc(){var r=(function(e){function t(j,W,L,H,q,ne,ee,G){var k=1-ee;G.x=k*k*j+2*k*ee*L+ee*ee*q,G.y=k*k*W+2*k*ee*H+ee*ee*ne}function s(j,W,L,H,q,ne,ee,G,k,J){var ve=1-k;J.x=ve*ve*ve*j+3*ve*ve*k*L+3*ve*k*k*q+k*k*k*ee,J.y=ve*ve*ve*W+3*ve*ve*k*H+3*ve*k*k*ne+k*k*k*G}function n(j,W){for(var L=/([MLQCZ])([^MLQCZ]*)/g,H,q,ne,ee,G;H=L.exec(j);){var k=H[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(J){return parseFloat(J)});switch(H[1]){case"M":ee=q=k[0],G=ne=k[1];break;case"L":(k[0]!==ee||k[1]!==G)&&W("L",ee,G,ee=k[0],G=k[1]);break;case"Q":{W("Q",ee,G,ee=k[2],G=k[3],k[0],k[1]);break}case"C":{W("C",ee,G,ee=k[4],G=k[5],k[0],k[1],k[2],k[3]);break}case"Z":(ee!==q||G!==ne)&&W("L",ee,G,q,ne);break}}}function i(j,W,L){L===void 0&&(L=16);var H={x:0,y:0};n(j,function(q,ne,ee,G,k,J,ve,fe,me){switch(q){case"L":W(ne,ee,G,k);break;case"Q":{for(var ge=ne,Ie=ee,De=1;De<L;De++)t(ne,ee,J,ve,G,k,De/(L-1),H),W(ge,Ie,H.x,H.y),ge=H.x,Ie=H.y;break}case"C":{for(var Ue=ne,Te=ee,ke=1;ke<L;ke++)s(ne,ee,J,ve,fe,me,G,k,ke/(L-1),H),W(Ue,Te,H.x,H.y),Ue=H.x,Te=H.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(j,W){var L=j.getContext?j.getContext("webgl",c):j,H=l.get(L);if(!H){let Ue=function(ae){var pe=ne[ae];if(!pe&&(pe=ne[ae]=L.getExtension(ae),!pe))throw new Error(ae+" not supported");return pe},Te=function(ae,pe){var A=L.createShader(pe);return L.shaderSource(A,ae),L.compileShader(A),A},ke=function(ae,pe,A,_){if(!ee[ae]){var F={},ie={},K=L.createProgram();L.attachShader(K,Te(pe,L.VERTEX_SHADER)),L.attachShader(K,Te(A,L.FRAGMENT_SHADER)),L.linkProgram(K),ee[ae]={program:K,transaction:function(xe){L.useProgram(K),xe({setUniform:function(ye,Re){for(var oe=[],le=arguments.length-2;le-- >0;)oe[le]=arguments[le+2];var ue=ie[Re]||(ie[Re]=L.getUniformLocation(K,Re));L["uniform"+ye].apply(L,[ue].concat(oe))},setAttribute:function(ye,Re,oe,le,ue){var Ee=F[ye];Ee||(Ee=F[ye]={buf:L.createBuffer(),loc:L.getAttribLocation(K,ye),data:null}),L.bindBuffer(L.ARRAY_BUFFER,Ee.buf),L.vertexAttribPointer(Ee.loc,Re,L.FLOAT,!1,0,0),L.enableVertexAttribArray(Ee.loc),q?L.vertexAttribDivisor(Ee.loc,le):Ue("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ee.loc,le),ue!==Ee.data&&(L.bufferData(L.ARRAY_BUFFER,ue,oe),Ee.data=ue)}})}}}ee[ae].transaction(_)},U=function(ae,pe){k++;try{L.activeTexture(L.TEXTURE0+k);var A=G[ae];A||(A=G[ae]=L.createTexture(),L.bindTexture(L.TEXTURE_2D,A),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MIN_FILTER,L.NEAREST),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MAG_FILTER,L.NEAREST)),L.bindTexture(L.TEXTURE_2D,A),pe(A,k)}finally{k--}},we=function(ae,pe,A){var _=L.createFramebuffer();J.push(_),L.bindFramebuffer(L.FRAMEBUFFER,_),L.activeTexture(L.TEXTURE0+pe),L.bindTexture(L.TEXTURE_2D,ae),L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ae,0);try{A(_)}finally{L.deleteFramebuffer(_),L.bindFramebuffer(L.FRAMEBUFFER,J[--J.length-1]||null)}},be=function(){ne={},ee={},G={},k=-1,J.length=0};var ve=Ue,fe=Te,me=ke,ge=U,Ie=we,De=be,q=typeof WebGL2RenderingContext<"u"&&L instanceof WebGL2RenderingContext,ne={},ee={},G={},k=-1,J=[];L.canvas.addEventListener("webglcontextlost",function(ae){be(),ae.preventDefault()},!1),l.set(L,H={gl:L,isWebGL2:q,getExtension:Ue,withProgram:ke,withTexture:U,withTextureFramebuffer:we,handleContextLoss:be})}W(H)}function h(j,W,L,H,q,ne,ee,G){ee===void 0&&(ee=15),G===void 0&&(G=null),u(j,function(k){var J=k.gl,ve=k.withProgram,fe=k.withTexture;fe("copy",function(me,ge){J.texImage2D(J.TEXTURE_2D,0,J.RGBA,q,ne,0,J.RGBA,J.UNSIGNED_BYTE,W),ve("copy",a,o,function(Ie){var De=Ie.setUniform,Ue=Ie.setAttribute;Ue("aUV",2,J.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),De("1i","image",ge),J.bindFramebuffer(J.FRAMEBUFFER,G||null),J.disable(J.BLEND),J.colorMask(ee&8,ee&4,ee&2,ee&1),J.viewport(L,H,q,ne),J.scissor(L,H,q,ne),J.drawArrays(J.TRIANGLES,0,3)})})})}function f(j,W,L){var H=j.width,q=j.height;u(j,function(ne){var ee=ne.gl,G=new Uint8Array(H*q*4);ee.readPixels(0,0,H,q,ee.RGBA,ee.UNSIGNED_BYTE,G),j.width=W,j.height=L,h(ee,G,0,0,H,q)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function g(j,W,L,H,q,ne){ne===void 0&&(ne=1);var ee=new Uint8Array(j*W),G=H[2]-H[0],k=H[3]-H[1],J=[];i(L,function(Ue,Te,ke,U){J.push({x1:Ue,y1:Te,x2:ke,y2:U,minX:Math.min(Ue,ke),minY:Math.min(Te,U),maxX:Math.max(Ue,ke),maxY:Math.max(Te,U)})}),J.sort(function(Ue,Te){return Ue.maxX-Te.maxX});for(var ve=0;ve<j;ve++)for(var fe=0;fe<W;fe++){var me=Ie(H[0]+G*(ve+.5)/j,H[1]+k*(fe+.5)/W),ge=Math.pow(1-Math.abs(me)/q,ne)/2;me<0&&(ge=1-ge),ge=Math.max(0,Math.min(255,Math.round(ge*255))),ee[fe*j+ve]=ge}return ee;function Ie(Ue,Te){for(var ke=1/0,U=1/0,we=J.length;we--;){var be=J[we];if(be.maxX+U<=Ue)break;if(Ue+U>be.minX&&Te-U<be.maxY&&Te+U>be.minY){var ae=p(Ue,Te,be.x1,be.y1,be.x2,be.y2);ae<ke&&(ke=ae,U=Math.sqrt(ke))}}return De(Ue,Te)&&(U=-U),U}function De(Ue,Te){for(var ke=0,U=J.length;U--;){var we=J[U];if(we.maxX<=Ue)break;var be=we.y1>Te!=we.y2>Te&&Ue<(we.x2-we.x1)*(Te-we.y1)/(we.y2-we.y1)+we.x1;be&&(ke+=we.y1<we.y2?1:-1)}return ke!==0}}function v(j,W,L,H,q,ne,ee,G,k,J){ne===void 0&&(ne=1),G===void 0&&(G=0),k===void 0&&(k=0),J===void 0&&(J=0),m(j,W,L,H,q,ne,ee,null,G,k,J)}function m(j,W,L,H,q,ne,ee,G,k,J,ve){ne===void 0&&(ne=1),k===void 0&&(k=0),J===void 0&&(J=0),ve===void 0&&(ve=0);for(var fe=g(j,W,L,H,q,ne),me=new Uint8Array(fe.length*4),ge=0;ge<fe.length;ge++)me[ge*4+ve]=fe[ge];h(ee,me,k,J,j,W,1<<3-ve,G)}function p(j,W,L,H,q,ne){var ee=q-L,G=ne-H,k=ee*ee+G*G,J=k?Math.max(0,Math.min(1,((j-L)*ee+(W-H)*G)/k)):0,ve=j-(L+J*ee),fe=W-(H+J*G);return ve*ve+fe*fe}var E=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:v,generateIntoFramebuffer:m}),b="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",M="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",y="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),T=null,P=!1,x={},S=new WeakMap;function D(j){if(!P&&!V(j))throw new Error("WebGL generation not supported")}function R(j,W,L,H,q,ne,ee){if(ne===void 0&&(ne=1),ee===void 0&&(ee=null),!ee&&(ee=T,!ee)){var G=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!G)throw new Error("OffscreenCanvas or DOM canvas not supported");ee=T=G.getContext("webgl",{depth:!1})}D(ee);var k=new Uint8Array(j*W*4);u(ee,function(me){var ge=me.gl,Ie=me.withTexture,De=me.withTextureFramebuffer;Ie("readable",function(Ue,Te){ge.texImage2D(ge.TEXTURE_2D,0,ge.RGBA,j,W,0,ge.RGBA,ge.UNSIGNED_BYTE,null),De(Ue,Te,function(ke){N(j,W,L,H,q,ne,ge,ke,0,0,0),ge.readPixels(0,0,j,W,ge.RGBA,ge.UNSIGNED_BYTE,k)})})});for(var J=new Uint8Array(j*W),ve=0,fe=0;ve<k.length;ve+=4)J[fe++]=k[ve];return J}function I(j,W,L,H,q,ne,ee,G,k,J){ne===void 0&&(ne=1),G===void 0&&(G=0),k===void 0&&(k=0),J===void 0&&(J=0),N(j,W,L,H,q,ne,ee,null,G,k,J)}function N(j,W,L,H,q,ne,ee,G,k,J,ve){ne===void 0&&(ne=1),k===void 0&&(k=0),J===void 0&&(J=0),ve===void 0&&(ve=0),D(ee);var fe=[];i(L,function(me,ge,Ie,De){fe.push(me,ge,Ie,De)}),fe=new Float32Array(fe),u(ee,function(me){var ge=me.gl,Ie=me.isWebGL2,De=me.getExtension,Ue=me.withProgram,Te=me.withTexture,ke=me.withTextureFramebuffer,U=me.handleContextLoss;if(Te("rawDistances",function(we,be){(j!==we._lastWidth||W!==we._lastHeight)&&ge.texImage2D(ge.TEXTURE_2D,0,ge.RGBA,we._lastWidth=j,we._lastHeight=W,0,ge.RGBA,ge.UNSIGNED_BYTE,null),Ue("main",b,M,function(ae){var pe=ae.setAttribute,A=ae.setUniform,_=!Ie&&De("ANGLE_instanced_arrays"),F=!Ie&&De("EXT_blend_minmax");pe("aUV",2,ge.STATIC_DRAW,0,w),pe("aLineSegment",4,ge.DYNAMIC_DRAW,1,fe),A.apply(void 0,["4f","uGlyphBounds"].concat(H)),A("1f","uMaxDistance",q),A("1f","uExponent",ne),ke(we,be,function(ie){ge.enable(ge.BLEND),ge.colorMask(!0,!0,!0,!0),ge.viewport(0,0,j,W),ge.scissor(0,0,j,W),ge.blendFunc(ge.ONE,ge.ONE),ge.blendEquationSeparate(ge.FUNC_ADD,Ie?ge.MAX:F.MAX_EXT),ge.clear(ge.COLOR_BUFFER_BIT),Ie?ge.drawArraysInstanced(ge.TRIANGLES,0,3,fe.length/4):_.drawArraysInstancedANGLE(ge.TRIANGLES,0,3,fe.length/4)})}),Ue("post",a,y,function(ae){ae.setAttribute("aUV",2,ge.STATIC_DRAW,0,w),ae.setUniform("1i","tex",be),ge.bindFramebuffer(ge.FRAMEBUFFER,G),ge.disable(ge.BLEND),ge.colorMask(ve===0,ve===1,ve===2,ve===3),ge.viewport(k,J,j,W),ge.scissor(k,J,j,W),ge.drawArrays(ge.TRIANGLES,0,3)})}),ge.isContextLost())throw U(),new Error("webgl context lost")})}function V(j){var W=!j||j===T?x:j.canvas||j,L=S.get(W);if(L===void 0){P=!0;var H=null;try{var q=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],ne=R(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,j);L=ne&&q.length===ne.length&&ne.every(function(ee,G){return ee===q[G]}),L||(H="bad trial run results",console.info(q,ne))}catch(ee){L=!1,H=ee.message}H&&console.warn("WebGL SDF generation not supported:",H),P=!1,S.set(W,L)}return L}var B=Object.freeze({__proto__:null,generate:R,generateIntoCanvas:I,generateIntoFramebuffer:N,isSupported:V});function z(j,W,L,H,q,ne){q===void 0&&(q=Math.max(H[2]-H[0],H[3]-H[1])/2),ne===void 0&&(ne=1);try{return R.apply(B,arguments)}catch(ee){return console.info("WebGL SDF generation failed, falling back to JS",ee),g.apply(E,arguments)}}function $(j,W,L,H,q,ne,ee,G,k,J){q===void 0&&(q=Math.max(H[2]-H[0],H[3]-H[1])/2),ne===void 0&&(ne=1),G===void 0&&(G=0),k===void 0&&(k=0),J===void 0&&(J=0);try{return I.apply(B,arguments)}catch(ve){return console.info("WebGL SDF generation failed, falling back to JS",ve),v.apply(E,arguments)}}return e.forEachPathCommand=n,e.generate=z,e.generateIntoCanvas=$,e.javascript=E,e.pathToLineSegments=i,e.webgl=B,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return r}function Hg(){var r=(function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},s={},n={};s.L=1,n[1]="L",Object.keys(t).forEach(function(U,we){s[U]=1<<we+1,n[s[U]]=U}),Object.freeze(s);var i=s.LRI|s.RLI|s.FSI,a=s.L|s.R|s.AL,o=s.B|s.S|s.WS|s.ON|s.FSI|s.LRI|s.RLI|s.PDI,l=s.BN|s.RLE|s.LRE|s.RLO|s.LRO|s.PDF,c=s.S|s.WS|s.B|i|s.PDI|l,u=null;function h(){if(!u){u=new Map;var U=function(be){if(t.hasOwnProperty(be)){var ae=0;t[be].split(",").forEach(function(pe){var A=pe.split("+"),_=A[0],F=A[1];_=parseInt(_,36),F=F?parseInt(F,36):0,u.set(ae+=_,s[be]);for(var ie=0;ie<F;ie++)u.set(++ae,s[be])})}};for(var we in t)U(we)}}function f(U){return h(),u.get(U.codePointAt(0))||s.L}function d(U){return n[f(U)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(U,we){var be=36,ae=0,pe=new Map,A=we&&new Map,_;return U.split(",").forEach(function F(ie){if(ie.indexOf("+")!==-1)for(var K=+ie;K--;)F(_);else{_=ie;var Y=ie.split(">"),xe=Y[0],_e=Y[1];xe=String.fromCodePoint(ae+=parseInt(xe,be)),_e=String.fromCodePoint(ae+=parseInt(_e,be)),pe.set(xe,_e),we&&A.set(_e,xe)}}),{map:pe,reverseMap:A}}var m,p,E;function b(){if(!m){var U=v(g.pairs,!0),we=U.map,be=U.reverseMap;m=we,p=be,E=v(g.canonical,!1).map}}function M(U){return b(),m.get(U)||null}function y(U){return b(),p.get(U)||null}function w(U){return b(),E.get(U)||null}var T=s.L,P=s.R,x=s.EN,S=s.ES,D=s.ET,R=s.AN,I=s.CS,N=s.B,V=s.S,B=s.ON,z=s.BN,$=s.NSM,j=s.AL,W=s.LRO,L=s.RLO,H=s.LRE,q=s.RLE,ne=s.PDF,ee=s.LRI,G=s.RLI,k=s.FSI,J=s.PDI;function ve(U,we){for(var be=125,ae=new Uint32Array(U.length),pe=0;pe<U.length;pe++)ae[pe]=f(U[pe]);var A=new Map;function _(Bt,on){var kt=ae[Bt];ae[Bt]=on,A.set(kt,A.get(kt)-1),kt&o&&A.set(o,A.get(o)-1),A.set(on,(A.get(on)||0)+1),on&o&&A.set(o,(A.get(o)||0)+1)}for(var F=new Uint8Array(U.length),ie=new Map,K=[],Y=null,xe=0;xe<U.length;xe++)Y||K.push(Y={start:xe,end:U.length-1,level:we==="rtl"?1:we==="ltr"?0:Oo(xe,!1)}),ae[xe]&N&&(Y.end=xe,Y=null);for(var _e=q|H|L|W|i|J|ne|N,ye=function(Bt){return Bt+(Bt&1?1:2)},Re=function(Bt){return Bt+(Bt&1?2:1)},oe=0;oe<K.length;oe++){Y=K[oe];var le=[{_level:Y.level,_override:0,_isolate:0}],ue=void 0,Ee=0,Se=0,We=0;A.clear();for(var O=Y.start;O<=Y.end;O++){var he=ae[O];if(ue=le[le.length-1],A.set(he,(A.get(he)||0)+1),he&o&&A.set(o,(A.get(o)||0)+1),he&_e)if(he&(q|H)){F[O]=ue._level;var de=(he===q?Re:ye)(ue._level);de<=be&&!Ee&&!Se?le.push({_level:de,_override:0,_isolate:0}):Ee||Se++}else if(he&(L|W)){F[O]=ue._level;var Pe=(he===L?Re:ye)(ue._level);Pe<=be&&!Ee&&!Se?le.push({_level:Pe,_override:he&L?P:T,_isolate:0}):Ee||Se++}else if(he&i){he&k&&(he=Oo(O+1,!0)===1?G:ee),F[O]=ue._level,ue._override&&_(O,ue._override);var ce=(he===G?Re:ye)(ue._level);ce<=be&&Ee===0&&Se===0?(We++,le.push({_level:ce,_override:0,_isolate:1,_isolInitIndex:O})):Ee++}else if(he&J){if(Ee>0)Ee--;else if(We>0){for(Se=0;!le[le.length-1]._isolate;)le.pop();var se=le[le.length-1]._isolInitIndex;se!=null&&(ie.set(se,O),ie.set(O,se)),le.pop(),We--}ue=le[le.length-1],F[O]=ue._level,ue._override&&_(O,ue._override)}else he&ne?(Ee===0&&(Se>0?Se--:!ue._isolate&&le.length>1&&(le.pop(),ue=le[le.length-1])),F[O]=ue._level):he&N&&(F[O]=Y.level);else F[O]=ue._level,ue._override&&he!==z&&_(O,ue._override)}for(var Me=[],Ne=null,Oe=Y.start;Oe<=Y.end;Oe++){var Xe=ae[Oe];if(!(Xe&l)){var ht=F[Oe],ft=Xe&i,gt=Xe===J;Ne&&ht===Ne._level?(Ne._end=Oe,Ne._endsWithIsolInit=ft):Me.push(Ne={_start:Oe,_end:Oe,_level:ht,_startsWithPDI:gt,_endsWithIsolInit:ft})}}for(var Ot=[],Qt=0;Qt<Me.length;Qt++){var nn=Me[Qt];if(!nn._startsWithPDI||nn._startsWithPDI&&!ie.has(nn._start)){for(var rn=[Ne=nn],mn=void 0;Ne&&Ne._endsWithIsolInit&&(mn=ie.get(Ne._end))!=null;)for(var wt=Qt+1;wt<Me.length;wt++)if(Me[wt]._start===mn){rn.push(Ne=Me[wt]);break}for(var vt=[],gn=0;gn<rn.length;gn++)for(var Ki=rn[gn],Bn=Ki._start;Bn<=Ki._end;Bn++)vt.push(Bn);for(var Tr=F[vt[0]],Qn=Y.level,$n=vt[0]-1;$n>=0;$n--)if(!(ae[$n]&l)){Qn=F[$n];break}var xi=vt[vt.length-1],xs=F[xi],Ar=Y.level;if(!(ae[xi]&i)){for(var Si=xi+1;Si<=Y.end;Si++)if(!(ae[Si]&l)){Ar=F[Si];break}}Ot.push({_seqIndices:vt,_sosType:Math.max(Qn,Tr)%2?P:T,_eosType:Math.max(Ar,xs)%2?P:T})}}for(var Zi=0;Zi<Ot.length;Zi++){var Ji=Ot[Zi],ze=Ji._seqIndices,C=Ji._sosType,X=Ji._eosType,re=F[ze[0]]&1?P:T;if(A.get($))for(var te=0;te<ze.length;te++){var Z=ze[te];if(ae[Z]&$){for(var Ae=C,Fe=te-1;Fe>=0;Fe--)if(!(ae[ze[Fe]]&l)){Ae=ae[ze[Fe]];break}_(Z,Ae&(i|J)?B:Ae)}}if(A.get(x))for(var Ce=0;Ce<ze.length;Ce++){var Be=ze[Ce];if(ae[Be]&x)for(var Ge=Ce-1;Ge>=-1;Ge--){var Ye=Ge===-1?C:ae[ze[Ge]];if(Ye&a){Ye===j&&_(Be,R);break}}}if(A.get(j))for(var Ve=0;Ve<ze.length;Ve++){var Je=ze[Ve];ae[Je]&j&&_(Je,P)}if(A.get(S)||A.get(I))for(var tt=1;tt<ze.length-1;tt++){var dt=ze[tt];if(ae[dt]&(S|I)){for(var lt=0,st=0,He=tt-1;He>=0&&(lt=ae[ze[He]],!!(lt&l));He--);for(var nt=tt+1;nt<ze.length&&(st=ae[ze[nt]],!!(st&l));nt++);lt===st&&(ae[dt]===S?lt===x:lt&(x|R))&&_(dt,lt)}}if(A.get(x))for(var Ke=0;Ke<ze.length;Ke++){var Ft=ze[Ke];if(ae[Ft]&x){for(var sn=Ke-1;sn>=0&&ae[ze[sn]]&(D|l);sn--)_(ze[sn],x);for(Ke++;Ke<ze.length&&ae[ze[Ke]]&(D|l|x);Ke++)ae[ze[Ke]]!==x&&_(ze[Ke],x)}}if(A.get(D)||A.get(S)||A.get(I))for(var xt=0;xt<ze.length;xt++){var kn=ze[xt];if(ae[kn]&(D|S|I)){_(kn,B);for(var at=xt-1;at>=0&&ae[ze[at]]&l;at--)_(ze[at],B);for(var St=xt+1;St<ze.length&&ae[ze[St]]&l;St++)_(ze[St],B)}}if(A.get(x))for(var Dt=0,bt=C;Dt<ze.length;Dt++){var Ct=ze[Dt],ei=ae[Ct];ei&x?bt===T&&_(Ct,T):ei&a&&(bt=ei)}if(A.get(o)){var Yt=P|x|R,wo=Yt|T,wr=[];{for(var Mi=[],yi=0;yi<ze.length;yi++)if(ae[ze[yi]]&o){var Qi=U[ze[yi]],Co=void 0;if(M(Qi)!==null)if(Mi.length<63)Mi.push({char:Qi,seqIndex:yi});else break;else if((Co=y(Qi))!==null)for(var $i=Mi.length-1;$i>=0;$i--){var Ss=Mi[$i].char;if(Ss===Co||Ss===y(w(Qi))||M(w(Ss))===Qi){wr.push([Mi[$i].seqIndex,yi]),Mi.length=$i;break}}}wr.sort(function(Bt,on){return Bt[0]-on[0]})}for(var Ms=0;Ms<wr.length;Ms++){for(var Ro=wr[Ms],Cr=Ro[0],ys=Ro[1],Po=!1,an=0,Es=Cr+1;Es<ys;Es++){var Do=ze[Es];if(ae[Do]&wo){Po=!0;var Uo=ae[Do]&Yt?P:T;if(Uo===re){an=Uo;break}}}if(Po&&!an){an=C;for(var bs=Cr-1;bs>=0;bs--){var Lo=ze[bs];if(ae[Lo]&wo){var Io=ae[Lo]&Yt?P:T;Io!==re?an=Io:an=re;break}}}if(an){if(ae[ze[Cr]]=ae[ze[ys]]=an,an!==re){for(var er=Cr+1;er<ze.length;er++)if(!(ae[ze[er]]&l)){f(U[ze[er]])&$&&(ae[ze[er]]=an);break}}if(an!==re){for(var tr=ys+1;tr<ze.length;tr++)if(!(ae[ze[tr]]&l)){f(U[ze[tr]])&$&&(ae[ze[tr]]=an);break}}}}for(var Gn=0;Gn<ze.length;Gn++)if(ae[ze[Gn]]&o){for(var Fo=Gn,Ts=Gn,As=C,nr=Gn-1;nr>=0;nr--)if(ae[ze[nr]]&l)Fo=nr;else{As=ae[ze[nr]]&Yt?P:T;break}for(var No=X,ir=Gn+1;ir<ze.length;ir++)if(ae[ze[ir]]&(o|l))Ts=ir;else{No=ae[ze[ir]]&Yt?P:T;break}for(var ws=Fo;ws<=Ts;ws++)ae[ze[ws]]=As===No?As:re;Gn=Ts}}}for(var jt=Y.start;jt<=Y.end;jt++){var tu=F[jt],Rr=ae[jt];if(tu&1?Rr&(T|x|R)&&F[jt]++:Rr&P?F[jt]++:Rr&(R|x)&&(F[jt]+=2),Rr&l&&(F[jt]=jt===0?Y.level:F[jt-1]),jt===Y.end||f(U[jt])&(V|N))for(var Pr=jt;Pr>=0&&f(U[Pr])&c;Pr--)F[Pr]=Y.level}}return{levels:F,paragraphs:K};function Oo(Bt,on){for(var kt=Bt;kt<U.length;kt++){var zn=ae[kt];if(zn&(P|j))return 1;if(zn&(N|T)||on&&zn===J)return 0;if(zn&i){var Bo=nu(kt);kt=Bo===-1?U.length:Bo}}return 0}function nu(Bt){for(var on=1,kt=Bt+1;kt<U.length;kt++){var zn=ae[kt];if(zn&N)break;if(zn&J){if(--on===0)return kt}else zn&i&&on++}return-1}}var fe="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",me;function ge(){if(!me){var U=v(fe,!0),we=U.map,be=U.reverseMap;be.forEach(function(ae,pe){we.set(pe,ae)}),me=we}}function Ie(U){return ge(),me.get(U)||null}function De(U,we,be,ae){var pe=U.length;be=Math.max(0,be==null?0:+be),ae=Math.min(pe-1,ae==null?pe-1:+ae);for(var A=new Map,_=be;_<=ae;_++)if(we[_]&1){var F=Ie(U[_]);F!==null&&A.set(_,F)}return A}function Ue(U,we,be,ae){var pe=U.length;be=Math.max(0,be==null?0:+be),ae=Math.min(pe-1,ae==null?pe-1:+ae);var A=[];return we.paragraphs.forEach(function(_){var F=Math.max(be,_.start),ie=Math.min(ae,_.end);if(F<ie){for(var K=we.levels.slice(F,ie+1),Y=ie;Y>=F&&f(U[Y])&c;Y--)K[Y]=_.level;for(var xe=_.level,_e=1/0,ye=0;ye<K.length;ye++){var Re=K[ye];Re>xe&&(xe=Re),Re<_e&&(_e=Re|1)}for(var oe=xe;oe>=_e;oe--)for(var le=0;le<K.length;le++)if(K[le]>=oe){for(var ue=le;le+1<K.length&&K[le+1]>=oe;)le++;le>ue&&A.push([ue+F,le+F])}}}),A}function Te(U,we,be,ae){var pe=ke(U,we,be,ae),A=[].concat(U);return pe.forEach(function(_,F){A[F]=(we.levels[_]&1?Ie(U[_]):null)||U[_]}),A.join("")}function ke(U,we,be,ae){for(var pe=Ue(U,we,be,ae),A=[],_=0;_<U.length;_++)A[_]=_;return pe.forEach(function(F){for(var ie=F[0],K=F[1],Y=A.slice(ie,K+1),xe=Y.length;xe--;)A[K-xe]=Y[xe]}),A}return e.closingToOpeningBracket=y,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=w,e.getEmbeddingLevels=ve,e.getMirroredCharacter=Ie,e.getMirroredCharactersMap=De,e.getReorderSegments=Ue,e.getReorderedIndices=ke,e.getReorderedString=Te,e.openingToClosingBracket=M,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return r}const Yc=/\bvoid\s+main\s*\(\s*\)\s*{/g;function oo(r){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(s,n){let i=Qe[n];return i?oo(i):s}return r.replace(e,t)}const Rt=[];for(let r=0;r<256;r++)Rt[r]=(r<16?"0":"")+r.toString(16);function Wg(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[s&255]+Rt[s>>8&255]+Rt[s>>16&255]+Rt[s>>24&255]).toUpperCase()}const oi=Object.assign||function(){let r=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let s=arguments[e];if(s)for(let n in s)Object.prototype.hasOwnProperty.call(s,n)&&(r[n]=s[n])}return r},Xg=Date.now(),Xl=new WeakMap,Yl=new Map;let Yg=1e10;function lo(r,e){const t=Zg(e);let s=Xl.get(r);if(s||Xl.set(r,s=Object.create(null)),s[t])return new s[t];const n=`_onBeforeCompile${t}`,i=function(c,u){r.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=Yl[h];if(!f){const d=jg(this,c,e,t);f=Yl[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,oi(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Xg}}),this[n]&&this[n](c)},a=function(){return o(e.chained?r:r.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:r}),Object.defineProperty(u,"id",{value:Yg++}),u.uuid=Wg(),u.uniforms=oi({},c.uniforms,e.uniforms),u.defines=oi({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=oi({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:a},isDerivedMaterial:{value:!0},type:{get:()=>r.type,set:c=>{r.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return r.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return r.copy.call(this,c),!r.isShaderMaterial&&!r.isDerivedMaterial&&(oi(this.extensions,c.extensions),oi(this.defines,c.defines),oi(this.uniforms,wc.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new r.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=lo(r.isDerivedMaterial?r.getDepthMaterial():new Uc({depthPacking:Cu}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=lo(r.isDerivedMaterial?r.getDistanceMaterial():new Lc,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),r.dispose.call(this)}}};return s[t]=a,new a}function jg(r,{vertexShader:e,fragmentShader:t},s,n){let{vertexDefs:i,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=s;if(i=i||"",a=a||"",o=o||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=oo(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=oo(t)),d){let v=d({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(f){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(v.push(m),"")),h=`${f}
${v.join(`
`)}
${h}`}if(g){const v=`
uniform float ${g};
`;i=v+i,c=v+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,a=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,m,p,E)=>/\battribute\s+vec[23]\s+$/.test(E.substr(0,p))?m:`troika_${m}_${n}`),r.map&&r.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=jl(e,n,i,a,o),t=jl(t,n,c,u,h),{vertexShader:e,fragmentShader:t}}function jl(r,e,t,s,n){return(s||n||t)&&(r=r.replace(Yc,`
${t}
void troikaOrigMain${e}() {`),r+=`
void main() {
  ${s}
  troikaOrigMain${e}();
  ${n}
}`),r}function qg(r,e){return r==="uniforms"?void 0:typeof e=="function"?e.toString():e}let Kg=0;const ql=new Map;function Zg(r){const e=JSON.stringify(r,qg);let t=ql.get(e);return t==null&&ql.set(e,t=++Kg),t}function Jg(){return typeof window>"u"&&(self.window=self),(function(r){var e={parse:function(n){var i=e._bin,a=new Uint8Array(n);if(i.readASCII(a,0,4)=="ttcf"){var o=4;i.readUshort(a,o),o+=2,i.readUshort(a,o),o+=2;var l=i.readUint(a,o);o+=4;for(var c=[],u=0;u<l;u++){var h=i.readUint(a,o);o+=4,c.push(e._readFont(a,h))}return c}return[e._readFont(a,0)]},_readFont:function(n,i){var a=e._bin,o=i;a.readFixed(n,i),i+=4;var l=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},h={},f=0;f<l;f++){var d=a.readASCII(n,i,4);i+=4,a.readUint(n,i),i+=4;var g=a.readUint(n,i);i+=4;var v=a.readUint(n,i);i+=4,h[d]={offset:g,length:v}}for(f=0;f<c.length;f++){var m=c[f];h[m]&&(u[m.trim()]=e[m.trim()].parse(n,h[m].offset,h[m].length,u))}return u},_tabOffset:function(n,i,a){for(var o=e._bin,l=o.readUshort(n,a+4),c=a+12,u=0;u<l;u++){var h=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var f=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,h==i)return f}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(n,i+2*l));return o},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(n[i+l]);return o},readUnicode:function(n,i,a){for(var o="",l=0;l<a;l++){var c=n[i++]<<8|n[i++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,a){var o=e._bin._tdec;return o&&i==0&&a==n.length?o.decode(n):e._bin.readASCII(n,i,a)},readBytes:function(n,i,a){for(var o=[],l=0;l<a;l++)o.push(n[i+l]);return o},readASCIIArray:function(n,i,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(n[i+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,a,o,l){var c=e._bin,u={},h=i;c.readFixed(n,i),i+=4;var f=c.readUshort(n,i);i+=2;var d=c.readUshort(n,i);i+=2;var g=c.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,h+f),u.featureList=e._lctf.readFeatureList(n,h+d),u.lookupList=e._lctf.readLookupList(n,h+g,l),u},e._lctf.readLookupList=function(n,i,a){var o=e._bin,l=i,c=[],u=o.readUshort(n,i);i+=2;for(var h=0;h<u;h++){var f=o.readUshort(n,i);i+=2;var d=e._lctf.readLookupTable(n,l+f,a);c.push(d)}return c},e._lctf.readLookupTable=function(n,i,a){var o=e._bin,l=i,c={tabs:[]};c.ltype=o.readUshort(n,i),i+=2,c.flag=o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;for(var h=c.ltype,f=0;f<u;f++){var d=o.readUshort(n,i);i+=2;var g=a(n,h,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var i=0,a=0;a<32;a++)(n>>>a&1)!=0&&i++;return i},e._lctf.readClassDef=function(n,i){var a=e._bin,o=[],l=a.readUshort(n,i);if(i+=2,l==1){var c=a.readUshort(n,i);i+=2;var u=a.readUshort(n,i);i+=2;for(var h=0;h<u;h++)o.push(c+h),o.push(c+h),o.push(a.readUshort(n,i)),i+=2}if(l==2){var f=a.readUshort(n,i);for(i+=2,h=0;h<f;h++)o.push(a.readUshort(n,i)),i+=2,o.push(a.readUshort(n,i)),i+=2,o.push(a.readUshort(n,i)),i+=2}return o},e._lctf.getInterval=function(n,i){for(var a=0;a<n.length;a+=3){var o=n[a],l=n[a+1];if(n[a+2],o<=i&&i<=l)return a}return-1},e._lctf.readCoverage=function(n,i){var a=e._bin,o={};o.fmt=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);return i+=2,o.fmt==1&&(o.tab=a.readUshorts(n,i,l)),o.fmt==2&&(o.tab=a.readUshorts(n,i,3*l)),o},e._lctf.coverageIndex=function(n,i){var a=n.tab;if(n.fmt==1)return a.indexOf(i);if(n.fmt==2){var o=e._lctf.getInterval(a,i);if(o!=-1)return a[o+2]+(i-a[o])}return-1},e._lctf.readFeatureList=function(n,i){var a=e._bin,o=i,l=[],c=a.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=a.readASCII(n,i,4);i+=4;var f=a.readUshort(n,i);i+=2;var d=e._lctf.readFeatureTable(n,o+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,i){var a=e._bin,o=i,l={},c=a.readUshort(n,i);i+=2,c>0&&(l.featureParams=o+c);var u=a.readUshort(n,i);i+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(a.readUshort(n,i+2*h));return l},e._lctf.readScriptList=function(n,i){var a=e._bin,o=i,l={},c=a.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=a.readASCII(n,i,4);i+=4;var f=a.readUshort(n,i);i+=2,l[h.trim()]=e._lctf.readScriptTable(n,o+f)}return l},e._lctf.readScriptTable=function(n,i){var a=e._bin,o=i,l={},c=a.readUshort(n,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=a.readUshort(n,i);i+=2;for(var h=0;h<u;h++){var f=a.readASCII(n,i,4);i+=4;var d=a.readUshort(n,i);i+=2,l[f.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,i){var a=e._bin,o={};a.readUshort(n,i),i+=2,o.reqFeature=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);return i+=2,o.features=a.readUshorts(n,i,l),o},e.CFF={},e.CFF.parse=function(n,i,a){var o=e._bin;(n=new Uint8Array(n.buffer,i,a))[i=0],n[++i],n[++i],n[++i],i++;var l=[];i=e.CFF.readIndex(n,i,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,i+l[u],l[u+1]-l[u]));i+=l[l.length-1];var h=[];i=e.CFF.readIndex(n,i,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(n,i+h[u],i+h[u+1]));i+=h[h.length-1];var d=f[0],g=[];i=e.CFF.readIndex(n,i,g);var v=[];for(u=0;u<g.length-1;u++)v.push(o.readASCII(n,i+g[u],g[u+1]-g[u]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,d),d.CharStrings){i=d.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var m=[];for(u=0;u<g.length-1;u++)m.push(o.readBytes(n,i+g[u],g[u+1]-g[u]));d.CharStrings=m}if(d.ROS){i=d.FDArray;var p=[];for(i=e.CFF.readIndex(n,i,p),d.FDArray=[],u=0;u<p.length-1;u++){var E=e.CFF.readDict(n,i+p[u],i+p[u+1]);e.CFF._readFDict(n,E,v),d.FDArray.push(E)}i+=p[p.length-1],i=d.FDSelect,d.FDSelect=[];var b=n[i];if(i++,b!=3)throw b;var M=o.readUshort(n,i);for(i+=2,u=0;u<M+1;u++)d.FDSelect.push(o.readUshort(n,i),n[i+2]),i+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,v),d},e.CFF._readFDict=function(n,i,a){var o;for(var l in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(n,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=a[i[l]-426+35])},e.CFF.readSubrs=function(n,i,a){var o=e._bin,l=[];i=e.CFF.readIndex(n,i,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var h=0;h<l.length-1;h++)a.Subrs.push(o.readBytes(n,i+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var a=0;a<n.charset.length;a++)if(n.charset[a]==i)return a;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,a){e._bin;var o=[".notdef"],l=n[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=n[i];i++;for(var u=0;u<c;u++)o.push(n[i+u]);return o},e.CFF.readCharset=function(n,i,a){var o=e._bin,l=[".notdef"],c=n[i];if(i++,c==0)for(var u=0;u<a;u++){var h=o.readUshort(n,i);i+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){h=o.readUshort(n,i),i+=2;var f=0;for(c==1?(f=n[i],i++):(f=o.readUshort(n,i),i+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(n,i,a){var o=e._bin,l=o.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var u=0;u<l;u++)a.push(n[i+u]);else if(c==2)for(u=0;u<l;u++)a.push(o.readUshort(n,i+2*u));else if(c==3)for(u=0;u<l;u++)a.push(16777215&o.readUint(n,i+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(n,i,a){var o=e._bin,l=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=o.readShort(n,i+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=o.readInt(n,i+1)/65535,u=5),a.val=f??"o"+h,a.size=u},e.CFF.readCharString=function(n,i,a){for(var o=i+a,l=e._bin,c=[];i<o;){var u=n[i],h=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,g=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(g=l.readShort(n,i+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255&&(g=l.readInt(n,i+1)/65535,f=5),c.push(g??"o"+d),i+=f}return c},e.CFF.readDict=function(n,i,a){for(var o=e._bin,l={},c=[];i<a;){var u=n[i],h=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,g=null;if(u==28&&(g=o.readShort(n,i+1),f=3),u==29&&(g=o.readInt(n,i+1),f=5),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255)throw g=o.readInt(n,i+1)/65535,f=5,"unknown number";if(u==30){var v=[];for(f=1;;){var m=n[i+f];f++;var p=m>>4,E=15&m;if(p!=15&&v.push(p),E!=15&&v.push(E),E==15)break}for(var b="",M=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],y=0;y<v.length;y++)b+=M[v[y]];g=parseFloat(b)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),i+=f}return l},e.cmap={},e.cmap.parse=function(n,i,a){n=new Uint8Array(n.buffer,i,a),i=0;var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=o.readUshort(n,i);i+=2;var d=o.readUshort(n,i);i+=2;var g=o.readUint(n,i);i+=4;var v="p"+f+"e"+d,m=u.indexOf(g);if(m==-1){var p;m=l.tables.length,u.push(g);var E=o.readUshort(n,g);E==0?p=e.cmap.parse0(n,g):E==4?p=e.cmap.parse4(n,g):E==6?p=e.cmap.parse6(n,g):E==12?p=e.cmap.parse12(n,g):console.debug("unknown format: "+E,f,d,g),l.tables.push(p)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=m}return l},e.cmap.parse0=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[i+c]);return o},e.cmap.parse4=function(n,i){var a=e._bin,o=i,l={};l.format=a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2;var u=a.readUshort(n,i);i+=2;var h=u/2;l.searchRange=a.readUshort(n,i),i+=2,l.entrySelector=a.readUshort(n,i),i+=2,l.rangeShift=a.readUshort(n,i),i+=2,l.endCount=a.readUshorts(n,i,h),i+=2*h,i+=2,l.startCount=a.readUshorts(n,i,h),i+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(a.readShort(n,i)),i+=2;for(l.idRangeOffset=a.readUshorts(n,i,h),i+=2*h,l.glyphIdArray=[];i<o+c;)l.glyphIdArray.push(a.readUshort(n,i)),i+=2;return l},e.cmap.parse6=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,o.firstCode=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(n,i)),i+=2;return o},e.cmap.parse12=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2,i+=2,a.readUint(n,i),i+=4,a.readUint(n,i),i+=4;var l=a.readUint(n,i);i+=4,o.groups=[];for(var c=0;c<l;c++){var u=i+12*c,h=a.readUint(n,u+0),f=a.readUint(n,u+4),d=a.readUint(n,u+8);o.groups.push([h,f,d])}return o},e.glyf={},e.glyf.parse=function(n,i,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,i){var a=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(a.readUshort(o,l)),l+=2;var h=a.readUshort(o,l);if(l+=2,o.length-l<h)return null;c.instructions=a.readBytes(o,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var g=o[l];l++;for(var v=0;v<g;v++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var m=(2&c.flags[u])!=0,p=(16&c.flags[u])!=0;m?(c.xs.push(p?o[l]:-o[l]),l++):p?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)m=(4&c.flags[u])!=0,p=(32&c.flags[u])!=0,m?(c.ys.push(p?o[l]:-o[l]),l++):p?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var E=0,b=0;for(u=0;u<f;u++)E+=c.xs[u],b+=c.ys[u],c.xs[u]=E,c.ys[u]=b}else{var M;c.parts=[];do{M=a.readUshort(o,l),l+=2;var y={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(y),y.glyphIndex=a.readUshort(o,l),l+=2,1&M){var w=a.readShort(o,l);l+=2;var T=a.readShort(o,l);l+=2}else w=a.readInt8(o,l),l++,T=a.readInt8(o,l),l++;2&M?(y.m.tx=w,y.m.ty=T):(y.p1=w,y.p2=T),8&M?(y.m.a=y.m.d=a.readF2dot14(o,l),l+=2):64&M?(y.m.a=a.readF2dot14(o,l),l+=2,y.m.d=a.readF2dot14(o,l),l+=2):128&M&&(y.m.a=a.readF2dot14(o,l),l+=2,y.m.b=a.readF2dot14(o,l),l+=2,y.m.c=a.readF2dot14(o,l),l+=2,y.m.d=a.readF2dot14(o,l),l+=2)}while(32&M);if(256&M){var P=a.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<P;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,i,a,o){var l=i;i+=4;var c=e._bin.readUshort(n,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,i,a,o){return e._lctf.parse(n,i,a,o,e.GPOS.subt)},e.GPOS.subt=function(n,i,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(n,a),a+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var h=l.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,h+c)}if(i==1&&u.fmt==1){var f=l.readUshort(n,a);a+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(n,a,f))}else if(i==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(n,a),a+=2;var d=l.readUshort(n,a);a+=2;var g=e._lctf.numOfOnes(f),v=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(n,a);a+=2;for(var p=0;p<m;p++){var E=c+l.readUshort(n,a);a+=2;var b=l.readUshort(n,E);E+=2;for(var M=[],y=0;y<b;y++){var w=l.readUshort(n,E);E+=2,f!=0&&(R=e.GPOS.readValueRecord(n,E,f),E+=2*g),d!=0&&(I=e.GPOS.readValueRecord(n,E,d),E+=2*v),M.push({gid2:w,val1:R,val2:I})}u.pairsets.push(M)}}if(u.fmt==2){var T=l.readUshort(n,a);a+=2;var P=l.readUshort(n,a);a+=2;var x=l.readUshort(n,a);a+=2;var S=l.readUshort(n,a);for(a+=2,u.classDef1=e._lctf.readClassDef(n,c+T),u.classDef2=e._lctf.readClassDef(n,c+P),u.matrix=[],p=0;p<x;p++){var D=[];for(y=0;y<S;y++){var R=null,I=null;f!=0&&(R=e.GPOS.readValueRecord(n,a,f),a+=2*g),d!=0&&(I=e.GPOS.readValueRecord(n,a,d),a+=2*v),D.push({val1:R,val2:I})}u.matrix.push(D)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),u.markClassCount=l.readUshort(n,a+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),u.markClassCount=l.readUshort(n,a+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,u.markClassCount);else{if(i==9&&u.fmt==1){var N=l.readUshort(n,a);a+=2;var V=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=N;else if(o.ltype!=N)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+V)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(n,i):0),i+=1&a?2:0,l.push(2&a?o.readShort(n,i):0),i+=2&a?2:0,l.push(4&a?o.readShort(n,i):0),i+=4&a?2:0,l.push(8&a?o.readShort(n,i):0),i+=8&a?2:0,l},e.GPOS.readBaseArray=function(n,i,a){var o=e._bin,l=[],c=i,u=o.readUshort(n,i);i+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<a;d++)f.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,i))),i+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(n,i){var a=e._bin,o=[],l=i,c=a.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(n,a.readUshort(n,i+2)+l);h.markClass=a.readUshort(n,i),o.push(h),i+=4}return o},e.GPOS.readAnchorRecord=function(n,i){var a=e._bin,o={};return o.fmt=a.readUshort(n,i),o.x=a.readShort(n,i+2),o.y=a.readShort(n,i+4),o},e.GSUB={},e.GSUB.parse=function(n,i,a,o){return e._lctf.parse(n,i,a,o,e.GSUB.subt)},e.GSUB.subt=function(n,i,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(n,a),a+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var h=l.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,c+h)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,a),a+=2;else if(u.fmt==2){var f=l.readUshort(n,a);a+=2,u.newg=l.readUshorts(n,a,f),a+=2*u.newg.length}}else if(i==2&&u.fmt==1){f=l.readUshort(n,a),a+=2,u.seqs=[];for(var d=0;d<f;d++){var g=l.readUshort(n,a)+c;a+=2;var v=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,v))}}else if(i==4)for(u.vals=[],f=l.readUshort(n,a),a+=2,d=0;d<f;d++){var m=l.readUshort(n,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+m))}else if(i==5&&u.fmt==2){if(u.fmt==2){var p=l.readUshort(n,a);a+=2,u.cDef=e._lctf.readClassDef(n,c+p),u.scset=[];var E=l.readUshort(n,a);for(a+=2,d=0;d<E;d++){var b=l.readUshort(n,a);a+=2,u.scset.push(b==0?null:e.GSUB.readSubClassSet(n,c+b))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,a),a+=2;for(var M=[],y=0;y<f;y++)M.push(e._lctf.readCoverage(n,c+l.readUshort(n,a+2*y)));a+=2*f,d==0&&(u.backCvg=M),d==1&&(u.inptCvg=M),d==2&&(u.ahedCvg=M)}f=l.readUshort(n,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,a,f)}}else{if(i==7&&u.fmt==1){var w=l.readUshort(n,a);a+=2;var T=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=w;else if(o.ltype!=w)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+T)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var a=e._bin.readUshort,o=i,l=[],c=a(n,i);i+=2;for(var u=0;u<c;u++){var h=a(n,i);i+=2,l.push(e.GSUB.readSubClassRule(n,o+h))}return l},e.GSUB.readSubClassRule=function(n,i){var a=e._bin.readUshort,o={},l=a(n,i),c=a(n,i+=2);i+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(a(n,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),o},e.GSUB.readSubstLookupRecords=function(n,i,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(n,i),o(n,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(n,i){var a=e._bin,o=i,l=[],c=a.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,i);i+=2,l.push(e.GSUB.readChainSubClassRule(n,o+h))}return l},e.GSUB.readChainSubClassRule=function(n,i){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=a.readUshort(n,i);i+=2,c==1&&u--,o[l[c]]=a.readUshorts(n,i,u),i+=2*o[l[c]].length}return u=a.readUshort(n,i),i+=2,o.subst=a.readUshorts(n,i,2*u),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,i){var a=e._bin,o=i,l=[],c=a.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,i);i+=2,l.push(e.GSUB.readLigature(n,o+h))}return l},e.GSUB.readLigature=function(n,i){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(n,i)),i+=2;return o},e.head={},e.head.parse=function(n,i,a){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.fontRevision=o.readFixed(n,i),i+=4,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4,l.flags=o.readUshort(n,i),i+=2,l.unitsPerEm=o.readUshort(n,i),i+=2,l.created=o.readUint64(n,i),i+=8,l.modified=o.readUint64(n,i),i+=8,l.xMin=o.readShort(n,i),i+=2,l.yMin=o.readShort(n,i),i+=2,l.xMax=o.readShort(n,i),i+=2,l.yMax=o.readShort(n,i),i+=2,l.macStyle=o.readUshort(n,i),i+=2,l.lowestRecPPEM=o.readUshort(n,i),i+=2,l.fontDirectionHint=o.readShort(n,i),i+=2,l.indexToLocFormat=o.readShort(n,i),i+=2,l.glyphDataFormat=o.readShort(n,i),i+=2,l},e.hhea={},e.hhea.parse=function(n,i,a){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.ascender=o.readShort(n,i),i+=2,l.descender=o.readShort(n,i),i+=2,l.lineGap=o.readShort(n,i),i+=2,l.advanceWidthMax=o.readUshort(n,i),i+=2,l.minLeftSideBearing=o.readShort(n,i),i+=2,l.minRightSideBearing=o.readShort(n,i),i+=2,l.xMaxExtent=o.readShort(n,i),i+=2,l.caretSlopeRise=o.readShort(n,i),i+=2,l.caretSlopeRun=o.readShort(n,i),i+=2,l.caretOffset=o.readShort(n,i),i+=2,i+=8,l.metricDataFormat=o.readShort(n,i),i+=2,l.numberOfHMetrics=o.readUshort(n,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(n,i,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,i),i+=2,h=l.readShort(n,i),i+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(n,i,a,o){var l=e._bin,c=l.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,a,o);var u=l.readUshort(n,i);i+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){i+=2,a=l.readUshort(n,i),i+=2;var d=l.readUshort(n,i);i+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,h)}return h},e.kern.parseV1=function(n,i,a,o){var l=e._bin;l.readFixed(n,i),i+=4;var c=l.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(n,i),i+=4;var f=l.readUshort(n,i);i+=2,l.readUshort(n,i),i+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,a){var o=e._bin,l=-1,c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,i);i+=2;var f=o.readUshort(n,i);i+=2;var d=o.readShort(n,i);i+=2,h!=l&&(a.glyph1.push(h),a.rval.push({glyph2:[],vals:[]}));var g=a.rval[a.rval.length-1];g.glyph2.push(f),g.vals.push(d),l=h}return i},e.loca={},e.loca.parse=function(n,i,a,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(n,i+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(n,i+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,a){var o=e._bin,l={},c=o.readUint(n,i);return i+=4,l.numGlyphs=o.readUshort(n,i),i+=2,c==65536&&(l.maxPoints=o.readUshort(n,i),i+=2,l.maxContours=o.readUshort(n,i),i+=2,l.maxCompositePoints=o.readUshort(n,i),i+=2,l.maxCompositeContours=o.readUshort(n,i),i+=2,l.maxZones=o.readUshort(n,i),i+=2,l.maxTwilightPoints=o.readUshort(n,i),i+=2,l.maxStorage=o.readUshort(n,i),i+=2,l.maxFunctionDefs=o.readUshort(n,i),i+=2,l.maxInstructionDefs=o.readUshort(n,i),i+=2,l.maxStackElements=o.readUshort(n,i),i+=2,l.maxSizeOfInstructions=o.readUshort(n,i),i+=2,l.maxComponentElements=o.readUshort(n,i),i+=2,l.maxComponentDepth=o.readUshort(n,i),i+=2),l},e.name={},e.name.parse=function(n,i,a){var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=i+=2,d=0;d<c;d++){var g=o.readUshort(n,i);i+=2;var v=o.readUshort(n,i);i+=2;var m=o.readUshort(n,i);i+=2;var p=o.readUshort(n,i);i+=2;var E=o.readUshort(n,i);i+=2;var b=o.readUshort(n,i);i+=2;var M,y=h[p],w=f+12*c+b;if(g==0)M=o.readUnicode(n,w,E/2);else if(g==3&&v==0)M=o.readUnicode(n,w,E/2);else if(v==0)M=o.readASCII(n,w,E);else if(v==1)M=o.readUnicode(n,w,E/2);else if(v==3)M=o.readUnicode(n,w,E/2);else{if(g!=1)throw"unknown encoding "+v+", platformID: "+g;M=o.readASCII(n,w,E),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var T="p"+g+","+m.toString(16);l[T]==null&&(l[T]={}),l[T][y!==void 0?y:p]=M,l[T]._lang=m}for(var P in l)if(l[P].postScriptName!=null&&l[P]._lang==1033)return l[P];for(var P in l)if(l[P].postScriptName!=null&&l[P]._lang==0)return l[P];for(var P in l)if(l[P].postScriptName!=null&&l[P]._lang==3084)return l[P];for(var P in l)if(l[P].postScriptName!=null)return l[P];for(var P in l){u=P;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,a){var o=e._bin.readUshort(n,i);i+=2;var l={};if(o==0)e["OS/2"].version0(n,i,l);else if(o==1)e["OS/2"].version1(n,i,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,i,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,i,l)}return l},e["OS/2"].version0=function(n,i,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(n,i),i+=2,a.usWeightClass=o.readUshort(n,i),i+=2,a.usWidthClass=o.readUshort(n,i),i+=2,a.fsType=o.readUshort(n,i),i+=2,a.ySubscriptXSize=o.readShort(n,i),i+=2,a.ySubscriptYSize=o.readShort(n,i),i+=2,a.ySubscriptXOffset=o.readShort(n,i),i+=2,a.ySubscriptYOffset=o.readShort(n,i),i+=2,a.ySuperscriptXSize=o.readShort(n,i),i+=2,a.ySuperscriptYSize=o.readShort(n,i),i+=2,a.ySuperscriptXOffset=o.readShort(n,i),i+=2,a.ySuperscriptYOffset=o.readShort(n,i),i+=2,a.yStrikeoutSize=o.readShort(n,i),i+=2,a.yStrikeoutPosition=o.readShort(n,i),i+=2,a.sFamilyClass=o.readShort(n,i),i+=2,a.panose=o.readBytes(n,i,10),i+=10,a.ulUnicodeRange1=o.readUint(n,i),i+=4,a.ulUnicodeRange2=o.readUint(n,i),i+=4,a.ulUnicodeRange3=o.readUint(n,i),i+=4,a.ulUnicodeRange4=o.readUint(n,i),i+=4,a.achVendID=[o.readInt8(n,i),o.readInt8(n,i+1),o.readInt8(n,i+2),o.readInt8(n,i+3)],i+=4,a.fsSelection=o.readUshort(n,i),i+=2,a.usFirstCharIndex=o.readUshort(n,i),i+=2,a.usLastCharIndex=o.readUshort(n,i),i+=2,a.sTypoAscender=o.readShort(n,i),i+=2,a.sTypoDescender=o.readShort(n,i),i+=2,a.sTypoLineGap=o.readShort(n,i),i+=2,a.usWinAscent=o.readUshort(n,i),i+=2,a.usWinDescent=o.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,a){var o=e._bin;return i=e["OS/2"].version0(n,i,a),a.ulCodePageRange1=o.readUint(n,i),i+=4,a.ulCodePageRange2=o.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,a){var o=e._bin;return i=e["OS/2"].version1(n,i,a),a.sxHeight=o.readShort(n,i),i+=2,a.sCapHeight=o.readShort(n,i),i+=2,a.usDefault=o.readUshort(n,i),i+=2,a.usBreak=o.readUshort(n,i),i+=2,a.usMaxContext=o.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,a){var o=e._bin;return i=e["OS/2"].version2(n,i,a),a.usLowerOpticalPointSize=o.readUshort(n,i),i+=2,a.usUpperOpticalPointSize=o.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,a){var o=e._bin,l={};return l.version=o.readFixed(n,i),i+=4,l.italicAngle=o.readFixed(n,i),i+=4,l.underlinePosition=o.readShort(n,i),i+=2,l.underlineThickness=o.readShort(n,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var a=n.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(i<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=i&&i<=h[1])return h[2]+(i-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,i){var a={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var o=n.SVG.entries[i];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[i]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=i;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],l,c,u,a)}else n.glyf&&e.U._drawGlyf(i,n,a);return a},e.U._drawGlyf=function(n,i,a){var o=i.glyf[n];o==null&&(o=i.glyf[n]=e.glyf._parseGlyf(i,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,i,a))},e.U._simpleGlyph=function(n,i){for(var a=0;a<n.noc;a++){for(var o=a==0?0:n.endPts[a-1]+1,l=n.endPts[a],c=o;c<=l;c++){var u=c==o?l:c-1,h=c==l?o:c+1,f=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[h],v=n.xs[c],m=n.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(i,v,m);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+v)/2,(n.ys[u]+m)/2);f?d&&e.U.P.lineTo(i,v,m):g?e.U.P.qcurveTo(i,v,m,n.xs[h],n.ys[h]):e.U.P.qcurveTo(i,v,m,(v+n.xs[h])/2,(m+n.ys[h])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,a){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,i,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];a.crds.push(f*u.a+d*u.b+u.tx),a.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)a.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(n,i){var a=e._lctf.getInterval(i,n);return a==-1?0:i[a+2]},e.U._applySubs=function(n,i,a,o){for(var l=n.length-i-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var u,h=a.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[i]))!=-1){if(a.ltype==1)n[i],h.fmt==1?n[i]=n[i]+h.delta:n[i]=h.newg[u];else if(a.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var g=f[d],v=g.chain.length;if(!(v>l)){for(var m=!0,p=0,E=0;E<v;E++){for(;n[i+p+(1+E)]==-1;)p++;g.chain[E]!=n[i+p+(1+E)]&&(m=!1)}if(m){for(n[i]=g.nglyph,E=0;E<v+p;E++)n[i+E+1]=-1;break}}}else if(a.ltype==5&&h.fmt==2)for(var b=e._lctf.getInterval(h.cDef,n[i]),M=h.cDef[b+2],y=h.scset[M],w=0;w<y.length;w++){var T=y[w],P=T.input;if(!(P.length>l)){for(m=!0,E=0;E<P.length;E++){var x=e._lctf.getInterval(h.cDef,n[i+1+E]);if(b==-1&&h.cDef[x+2]!=P[E]){m=!1;break}}if(m){var S=T.substLookupRecords;for(d=0;d<S.length;d+=2)S[d],S[d+1]}}}else if(a.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,i-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,i)||!e.U._glsCovered(n,h.ahedCvg,i+h.inptCvg.length))continue;var D=h.lookupRec;for(w=0;w<D.length;w+=2){b=D[w];var R=o[D[w+1]];e.U._applySubs(n,i+b,R,o)}}}}},e.U._glsCovered=function(n,i,a){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],n[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var u=i[c];if(u!=-1){for(var h=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,f=e.U.glyphToPath(n,u),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);a&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<i.length-1&&(l+=e.U.getPairAdjustment(n,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(n,i,a){n.cmds.push("M"),n.crds.push(i,a)},e.U.P.lineTo=function(n,i,a){n.cmds.push("L"),n.crds.push(i,a)},e.U.P.curveTo=function(n,i,a,o,l,c,u){n.cmds.push("C"),n.crds.push(i,a,o,l,c,u)},e.U.P.qcurveTo=function(n,i,a,o,l){n.cmds.push("Q"),n.crds.push(i,a,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,a,o,l){for(var c=i.stack,u=i.nStems,h=i.haveWidth,f=i.width,d=i.open,g=0,v=i.x,m=i.y,p=0,E=0,b=0,M=0,y=0,w=0,T=0,P=0,x=0,S=0,D={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,D);var R=D.val;if(g+=D.size,R=="o1"||R=="o18")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(R=="o3"||R=="o23")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(R=="o4")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),d&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,v,m),d=!0;else if(R=="o5")for(;c.length>0;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);else if(R=="o6"||R=="o7")for(var I=c.length,N=R=="o6",V=0;V<I;V++){var B=c.shift();N?v+=B:m+=B,N=!N,e.U.P.lineTo(l,v,m)}else if(R=="o8"||R=="o24"){I=c.length;for(var z=0;z+6<=I;)p=v+c.shift(),E=m+c.shift(),b=p+c.shift(),M=E+c.shift(),v=b+c.shift(),m=M+c.shift(),e.U.P.curveTo(l,p,E,b,M,v,m),z+=6;R=="o24"&&(v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m))}else{if(R=="o11")break;if(R=="o1234"||R=="o1235"||R=="o1236"||R=="o1237")R=="o1234"&&(E=m,b=(p=v+c.shift())+c.shift(),S=M=E+c.shift(),w=M,P=m,v=(T=(y=(x=b+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,p,E,b,M,x,S),e.U.P.curveTo(l,y,w,T,P,v,m)),R=="o1235"&&(p=v+c.shift(),E=m+c.shift(),b=p+c.shift(),M=E+c.shift(),x=b+c.shift(),S=M+c.shift(),y=x+c.shift(),w=S+c.shift(),T=y+c.shift(),P=w+c.shift(),v=T+c.shift(),m=P+c.shift(),c.shift(),e.U.P.curveTo(l,p,E,b,M,x,S),e.U.P.curveTo(l,y,w,T,P,v,m)),R=="o1236"&&(p=v+c.shift(),E=m+c.shift(),b=p+c.shift(),S=M=E+c.shift(),w=M,T=(y=(x=b+c.shift())+c.shift())+c.shift(),P=w+c.shift(),v=T+c.shift(),e.U.P.curveTo(l,p,E,b,M,x,S),e.U.P.curveTo(l,y,w,T,P,v,m)),R=="o1237"&&(p=v+c.shift(),E=m+c.shift(),b=p+c.shift(),M=E+c.shift(),x=b+c.shift(),S=M+c.shift(),y=x+c.shift(),w=S+c.shift(),T=y+c.shift(),P=w+c.shift(),Math.abs(T-v)>Math.abs(P-m)?v=T+c.shift():m=P+c.shift(),e.U.P.curveTo(l,p,E,b,M,x,S),e.U.P.curveTo(l,y,w,T,P,v,m));else if(R=="o14"){if(c.length>0&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),c.length==4){var $=c.shift(),j=c.shift(),W=c.shift(),L=c.shift(),H=e.CFF.glyphBySE(a,W),q=e.CFF.glyphBySE(a,L);e.U._drawCFF(a.CharStrings[H],i,a,o,l),i.x=$,i.y=j,e.U._drawCFF(a.CharStrings[q],i,a,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(R=="o19"||R=="o20")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(R=="o21")c.length>2&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),m+=c.pop(),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),d=!0;else if(R=="o22")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),d=!0;else if(R=="o25"){for(;c.length>6;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);p=v+c.shift(),E=m+c.shift(),b=p+c.shift(),M=E+c.shift(),v=b+c.shift(),m=M+c.shift(),e.U.P.curveTo(l,p,E,b,M,v,m)}else if(R=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)p=v,E=m+c.shift(),v=b=p+c.shift(),m=(M=E+c.shift())+c.shift(),e.U.P.curveTo(l,p,E,b,M,v,m);else if(R=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)E=m,b=(p=v+c.shift())+c.shift(),M=E+c.shift(),v=b+c.shift(),m=M,e.U.P.curveTo(l,p,E,b,M,v,m);else if(R=="o10"||R=="o29"){var ne=R=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var ee=c.pop(),G=ne.Subrs[ee+ne.Bias];i.x=v,i.y=m,i.nStems=u,i.haveWidth=h,i.width=f,i.open=d,e.U._drawCFF(G,i,a,o,l),v=i.x,m=i.y,u=i.nStems,h=i.haveWidth,f=i.width,d=i.open}}else if(R=="o30"||R=="o31"){var k=c.length,J=(z=0,R=="o31");for(z+=k-(I=-3&k);z<I;)J?(E=m,b=(p=v+c.shift())+c.shift(),m=(M=E+c.shift())+c.shift(),I-z==5?(v=b+c.shift(),z++):v=b,J=!1):(p=v,E=m+c.shift(),b=p+c.shift(),M=E+c.shift(),v=b+c.shift(),I-z==5?(m=M+c.shift(),z++):m=M,J=!0),e.U.P.curveTo(l,p,E,b,M,v,m),z+=4}else{if((R+"").charAt(0)=="o")throw console.debug("Unknown operation: "+R,n),R;c.push(R)}}}i.x=v,i.y=m,i.nStems=u,i.haveWidth=h,i.width=f,i.open=d};var t=e,s={Typr:t};return r.Typr=t,r.default=s,Object.defineProperty(r,"__esModule",{value:!0}),r})({}).Typr}function Qg(){return(function(r){var e=Uint8Array,t=Uint16Array,s=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(R,I){for(var N=new t(31),V=0;V<31;++V)N[V]=I+=1<<R[V-1];var B=new s(N[30]);for(V=1;V<30;++V)for(var z=N[V];z<N[V+1];++z)B[z]=z-N[V]<<5|V;return[N,B]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=o(i,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var v=function(R,I,N){for(var V=R.length,B=0,z=new t(I);B<V;++B)++z[R[B]-1];var $,j=new t(I);for(B=0;B<I;++B)j[B]=j[B-1]+z[B-1]<<1;{$=new t(1<<I);var W=15-I;for(B=0;B<V;++B)if(R[B])for(var L=B<<4|R[B],H=I-R[B],q=j[R[B]-1]++<<H,ne=q|(1<<H)-1;q<=ne;++q)$[f[q]>>>W]=L}return $},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new e(32);for(d=0;d<32;++d)p[d]=5;var E=v(m,9),b=v(p,5),M=function(R){for(var I=R[0],N=1;N<R.length;++N)R[N]>I&&(I=R[N]);return I},y=function(R,I,N){var V=I/8|0;return(R[V]|R[V+1]<<8)>>(7&I)&N},w=function(R,I){var N=I/8|0;return(R[N]|R[N+1]<<8|R[N+2]<<16)>>(7&I)},T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],P=function(R,I,N){var V=new Error(I||T[R]);if(V.code=R,Error.captureStackTrace&&Error.captureStackTrace(V,P),!N)throw V;return V},x=function(R,I,N){var V=R.length;if(!V||N&&!N.l&&V<5)return I||new e(0);var B=!I||N,z=!N||N.i;N||(N={}),I||(I=new e(3*V));var $,j=function(ue){var Ee=I.length;if(ue>Ee){var Se=new e(Math.max(2*Ee,ue));Se.set(I),I=Se}},W=N.f||0,L=N.p||0,H=N.b||0,q=N.l,ne=N.d,ee=N.m,G=N.n,k=8*V;do{if(!q){N.f=W=y(R,L,1);var J=y(R,L+1,3);if(L+=3,!J){var ve=R[(be=(($=L)/8|0)+(7&$&&1)+4)-4]|R[be-3]<<8,fe=be+ve;if(fe>V){z&&P(0);break}B&&j(H+ve),I.set(R.subarray(be,fe),H),N.b=H+=ve,N.p=L=8*fe;continue}if(J==1)q=E,ne=b,ee=9,G=5;else if(J==2){var me=y(R,L,31)+257,ge=y(R,L+10,15)+4,Ie=me+y(R,L+5,31)+1;L+=14;for(var De=new e(Ie),Ue=new e(19),Te=0;Te<ge;++Te)Ue[a[Te]]=y(R,L+3*Te,7);L+=3*ge;var ke=M(Ue),U=(1<<ke)-1,we=v(Ue,ke);for(Te=0;Te<Ie;){var be,ae=we[y(R,L,U)];if(L+=15&ae,(be=ae>>>4)<16)De[Te++]=be;else{var pe=0,A=0;for(be==16?(A=3+y(R,L,3),L+=2,pe=De[Te-1]):be==17?(A=3+y(R,L,7),L+=3):be==18&&(A=11+y(R,L,127),L+=7);A--;)De[Te++]=pe}}var _=De.subarray(0,me),F=De.subarray(me);ee=M(_),G=M(F),q=v(_,ee),ne=v(F,G)}else P(1);if(L>k){z&&P(0);break}}B&&j(H+131072);for(var ie=(1<<ee)-1,K=(1<<G)-1,Y=L;;Y=L){var xe=(pe=q[w(R,L)&ie])>>>4;if((L+=15&pe)>k){z&&P(0);break}if(pe||P(2),xe<256)I[H++]=xe;else{if(xe==256){Y=L,q=null;break}var _e=xe-254;if(xe>264){var ye=n[Te=xe-257];_e=y(R,L,(1<<ye)-1)+c[Te],L+=ye}var Re=ne[w(R,L)&K],oe=Re>>>4;if(Re||P(3),L+=15&Re,F=h[oe],oe>3&&(ye=i[oe],F+=w(R,L)&(1<<ye)-1,L+=ye),L>k){z&&P(0);break}B&&j(H+131072);for(var le=H+_e;H<le;H+=4)I[H]=I[H-F],I[H+1]=I[H+1-F],I[H+2]=I[H+2-F],I[H+3]=I[H+3-F];H=le}}N.l=q,N.p=Y,N.b=H,q&&(W=1,N.m=ee,N.d=ne,N.n=G)}while(!W);return H==I.length?I:(function(ue,Ee,Se){(Se==null||Se>ue.length)&&(Se=ue.length);var We=new(ue instanceof t?t:ue instanceof s?s:e)(Se-Ee);return We.set(ue.subarray(Ee,Se)),We})(I,0,H)},S=new e(0),D=typeof TextDecoder<"u"&&new TextDecoder;try{D.decode(S,{stream:!0})}catch{}return r.convert_streams=function(R){var I=new DataView(R),N=0;function V(){var me=I.getUint16(N);return N+=2,me}function B(){var me=I.getUint32(N);return N+=4,me}function z(me){ve.setUint16(fe,me),fe+=2}function $(me){ve.setUint32(fe,me),fe+=4}for(var j={signature:B(),flavor:B(),length:B(),numTables:V(),reserved:V(),totalSfntSize:B(),majorVersion:V(),minorVersion:V(),metaOffset:B(),metaLength:B(),metaOrigLength:B(),privOffset:B(),privLength:B()},W=0;Math.pow(2,W)<=j.numTables;)W++;W--;for(var L=16*Math.pow(2,W),H=16*j.numTables-L,q=12,ne=[],ee=0;ee<j.numTables;ee++)ne.push({tag:B(),offset:B(),compLength:B(),origLength:B(),origChecksum:B()}),q+=16;var G,k=new Uint8Array(12+16*ne.length+ne.reduce((function(me,ge){return me+ge.origLength+4}),0)),J=k.buffer,ve=new DataView(J),fe=0;return $(j.flavor),z(j.numTables),z(L),z(W),z(H),ne.forEach((function(me){$(me.tag),$(me.origChecksum),$(q),$(me.origLength),me.outOffset=q,(q+=me.origLength)%4!=0&&(q+=4-q%4)})),ne.forEach((function(me){var ge,Ie=R.slice(me.offset,me.offset+me.compLength);if(me.compLength!=me.origLength){var De=new Uint8Array(me.origLength);ge=new Uint8Array(Ie,2),x(ge,De)}else De=new Uint8Array(Ie);k.set(De,me.outOffset);var Ue=0;(q=me.outOffset+me.origLength)%4!=0&&(Ue=4-q%4),k.set(new Uint8Array(Ue).buffer,me.outOffset+me.origLength),G=q+Ue})),J.slice(0,G)},Object.defineProperty(r,"__esModule",{value:!0}),r})({}).convert_streams}function $g(r,e){const t={M:2,L:2,Q:4,C:6,Z:0},s={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,a=4,o=8,l=16,c=32;let u;function h(T){if(!u){const P={R:i,L:n,D:a,C:l,U:c,T:o};u=new Map;for(let x in s){let S=0;s[x].split(",").forEach(D=>{let[R,I]=D.split("+");R=parseInt(R,36),I=I?parseInt(I,36):0,u.set(S+=R,P[x]);for(let N=I;N--;)u.set(++S,P[x])})}}return u.get(T)||c}const f=1,d=2,g=3,v=4,m=[null,"isol","init","fina","medi"];function p(T){const P=new Uint8Array(T.length);let x=c,S=f,D=-1;for(let R=0;R<T.length;R++){const I=T.codePointAt(R);let N=h(I)|0,V=f;N&o||(x&(n|a|l)?N&(i|a|l)?(V=g,(S===f||S===g)&&P[D]++):N&(n|c)&&(S===d||S===v)&&P[D]--:x&(i|c)&&(S===d||S===v)&&P[D]--,S=P[R]=V,x=N,D=R,I>65535&&R++)}return P}function E(T,P){const x=[];for(let D=0;D<P.length;D++){const R=P.codePointAt(D);R>65535&&D++,x.push(r.U.codeToGlyph(T,R))}const S=T.GSUB;if(S){const{lookupList:D,featureList:R}=S;let I;const N=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,V=[];R.forEach(B=>{if(N.test(B.tag))for(let z=0;z<B.tab.length;z++){if(V[B.tab[z]])continue;V[B.tab[z]]=!0;const $=D[B.tab[z]],j=/^(isol|init|fina|medi)$/.test(B.tag);j&&!I&&(I=p(P));for(let W=0;W<x.length;W++)(!I||!j||m[I[W]]===B.tag)&&r.U._applySubs(x,W,$,D)}})}return x}function b(T,P){const x=new Int16Array(P.length*3);let S=0;for(;S<P.length;S++){const N=P[S];if(N===-1)continue;x[S*3+2]=T.hmtx.aWidth[N];const V=T.GPOS;if(V){const B=V.lookupList;for(let z=0;z<B.length;z++){const $=B[z];for(let j=0;j<$.tabs.length;j++){const W=$.tabs[j];if($.ltype===1){if(r._lctf.coverageIndex(W.coverage,N)!==-1&&W.pos){I(W.pos,S);break}}else if($.ltype===2){let L=null,H=D();if(H!==-1){const q=r._lctf.coverageIndex(W.coverage,P[H]);if(q!==-1){if(W.fmt===1){const ne=W.pairsets[q];for(let ee=0;ee<ne.length;ee++)ne[ee].gid2===N&&(L=ne[ee])}else if(W.fmt===2){const ne=r.U._getGlyphClass(P[H],W.classDef1),ee=r.U._getGlyphClass(N,W.classDef2);L=W.matrix[ne][ee]}if(L){L.val1&&I(L.val1,H),L.val2&&I(L.val2,S);break}}}}else if($.ltype===4){const L=r._lctf.coverageIndex(W.markCoverage,N);if(L!==-1){const H=D(R),q=H===-1?-1:r._lctf.coverageIndex(W.baseCoverage,P[H]);if(q!==-1){const ne=W.markArray[L],ee=W.baseArray[q][ne.markClass];x[S*3]=ee.x-ne.x+x[H*3]-x[H*3+2],x[S*3+1]=ee.y-ne.y+x[H*3+1];break}}}else if($.ltype===6){const L=r._lctf.coverageIndex(W.mark1Coverage,N);if(L!==-1){const H=D();if(H!==-1){const q=P[H];if(M(T,q)===3){const ne=r._lctf.coverageIndex(W.mark2Coverage,q);if(ne!==-1){const ee=W.mark1Array[L],G=W.mark2Array[ne][ee.markClass];x[S*3]=G.x-ee.x+x[H*3]-x[H*3+2],x[S*3+1]=G.y-ee.y+x[H*3+1];break}}}}}}}}else if(T.kern&&!T.cff){const B=D();if(B!==-1){const z=T.kern.glyph1.indexOf(P[B]);if(z!==-1){const $=T.kern.rval[z].glyph2.indexOf(N);$!==-1&&(x[B*3+2]+=T.kern.rval[z].vals[$])}}}}return x;function D(N){for(let V=S-1;V>=0;V--)if(P[V]!==-1&&(!N||N(P[V])))return V;return-1}function R(N){return M(T,N)===1}function I(N,V){for(let B=0;B<3;B++)x[V*3+B]+=N[B]||0}}function M(T,P){const x=T.GDEF&&T.GDEF.glyphClassDef;return x?r.U._getGlyphClass(P,x):0}function y(...T){for(let P=0;P<T.length;P++)if(typeof T[P]=="number")return T[P]}function w(T){const P=Object.create(null),x=T["OS/2"],S=T.hhea,D=T.head.unitsPerEm,R=y(x&&x.sTypoAscender,S&&S.ascender,D),I={unitsPerEm:D,ascender:R,descender:y(x&&x.sTypoDescender,S&&S.descender,0),capHeight:y(x&&x.sCapHeight,R),xHeight:y(x&&x.sxHeight,R),lineGap:y(x&&x.sTypoLineGap,S&&S.lineGap),supportsCodePoint(N){return r.U.codeToGlyph(T,N)>0},forEachGlyph(N,V,B,z){let $=0;const j=1/I.unitsPerEm*V,W=E(T,N);let L=0;const H=b(T,W);return W.forEach((q,ne)=>{if(q!==-1){let ee=P[q];if(!ee){const{cmds:G,crds:k}=r.U.glyphToPath(T,q);let J="",ve=0;for(let De=0,Ue=G.length;De<Ue;De++){const Te=t[G[De]];J+=G[De];for(let ke=1;ke<=Te;ke++)J+=(ke>1?",":"")+k[ve++]}let fe,me,ge,Ie;if(k.length){fe=me=1/0,ge=Ie=-1/0;for(let De=0,Ue=k.length;De<Ue;De+=2){let Te=k[De],ke=k[De+1];Te<fe&&(fe=Te),ke<me&&(me=ke),Te>ge&&(ge=Te),ke>Ie&&(Ie=ke)}}else fe=ge=me=Ie=0;ee=P[q]={index:q,advanceWidth:T.hmtx.aWidth[q],xMin:fe,yMin:me,xMax:ge,yMax:Ie,path:J}}z.call(null,ee,$+H[ne*3]*j,H[ne*3+1]*j,L),$+=H[ne*3+2]*j,B&&($+=B*V)}L+=N.codePointAt(L)>65535?2:1}),$}};return I}return function(P){const x=new Uint8Array(P,0,4),S=r._bin.readASCII(x,0,4);if(S==="wOFF")P=e(P);else if(S==="wOF2")throw new Error("woff2 fonts not supported");return w(r.parse(P)[0])}}const e_=qi({name:"Typr Font Parser",dependencies:[Jg,Qg,$g],init(r,e,t){const s=r(),n=e();return t(s,n)}});function t_(){return(function(r){var e=function(){this.buckets=new Map};e.prototype.add=function(b){var M=b>>5;this.buckets.set(M,(this.buckets.get(M)||0)|1<<(31&b))},e.prototype.has=function(b){var M=this.buckets.get(b>>5);return M!==void 0&&(M&1<<(31&b))!=0},e.prototype.serialize=function(){var b=[];return this.buckets.forEach((function(M,y){b.push((+y).toString(36)+":"+M.toString(36))})),b.join(",")},e.prototype.deserialize=function(b){var M=this;this.buckets.clear(),b.split(",").forEach((function(y){var w=y.split(":");M.buckets.set(parseInt(w[0],36),parseInt(w[1],36))}))};var t=Math.pow(2,8),s=t-1,n=~s;function i(b){var M=(function(w){return w&n})(b).toString(16),y=(function(w){return(w&n)+t-1})(b).toString(16);return"codepoint-index/plane"+(b>>16)+"/"+M+"-"+y+".json"}function a(b,M){var y=b&s,w=M.codePointAt(y/6|0);return((w=(w||48)-48)&1<<y%6)!=0}function o(b,M){var y;(y=b,y.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(w){return w.split("-").map((function(T){return parseInt(T.trim(),16)}))}))).forEach((function(w){var T=w[0],P=w[1];P===void 0&&(P=T),M(T,P)}))}function l(b,M){o(b,(function(y,w){for(var T=y;T<=w;T++)M(T)}))}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(b){var M=h.get(b);return M||(M=new e,l(b.ranges,(function(y){return M.add(y)})),h.set(b,M)),M}var g,v=new Map;function m(b,M,y){return b[M]?M:b[y]?y:(function(w){for(var T in w)return T})(b)}function p(b,M){var y=M;if(!b.includes(y)){y=1/0;for(var w=0;w<b.length;w++)Math.abs(b[w]-M)<Math.abs(y-M)&&(y=b[w])}return y}function E(b){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(M){g.add(M)}))),g.has(b)}return r.CodePointSet=e,r.clearCache=function(){c={},u={}},r.getFontsForString=function(b,M){M===void 0&&(M={});var y,w=M.lang;w===void 0&&(w=new RegExp("\\p{Script=Hangul}","u").test(y=b)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(y)?"ja":"en");var T=M.category;T===void 0&&(T="sans-serif");var P=M.style;P===void 0&&(P="normal");var x=M.weight;x===void 0&&(x=400);var S=(M.dataUrl||f).replace(/\/$/g,""),D=new Map,R=new Uint8Array(b.length),I={},N={},V=new Array(b.length),B=new Map,z=!1;function $(L){var H=v.get(L);return H||(H=fetch(S+"/"+L).then((function(q){if(!q.ok)throw new Error(q.statusText);return q.json().then((function(ne){if(!Array.isArray(ne)||ne[0]!==1)throw new Error("Incorrect schema version; need 1, got "+ne[0]);return ne[1]}))})).catch((function(q){if(S!==f)return z||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+S+'", trying default CDN. '+q.message),z=!0),S=f,v.delete(L),$(L);throw q})),v.set(L,H)),H}for(var j=function(L){var H=b.codePointAt(L),q=i(H);V[L]=q,c[q]||B.has(q)||B.set(q,$(q).then((function(ne){c[q]=ne}))),H>65535&&(L++,W=L)},W=0;W<b.length;W++)j(W);return Promise.all(B.values()).then((function(){B.clear();for(var L=function(q){var ne=b.codePointAt(q),ee=null,G=c[V[q]],k=void 0;for(var J in G){var ve=N[J];if(ve===void 0&&(ve=N[J]=new RegExp(J).test(w||"en")),ve){for(var fe in k=J,G[J])if(a(ne,G[J][fe])){ee=fe;break}break}}if(!ee){e:for(var me in G)if(me!==k){for(var ge in G[me])if(a(ne,G[me][ge])){ee=ge;break e}}}ee||(console.debug("No font coverage for U+"+ne.toString(16)),ee="latin"),V[q]=ee,u[ee]||B.has(ee)||B.set(ee,$("font-meta/"+ee+".json").then((function(Ie){u[ee]=Ie}))),ne>65535&&(q++,H=q)},H=0;H<b.length;H++)L(H);return Promise.all(B.values())})).then((function(){for(var L,H=null,q=0;q<b.length;q++){var ne=b.codePointAt(q);if(H&&(E(ne)||d(H).has(ne)))R[q]=R[q-1];else{H=u[V[q]];var ee=I[H.id];if(!ee){var G=H.typeforms,k=m(G,T,"sans-serif"),J=m(G[k],P,"normal"),ve=p((L=G[k])===null||L===void 0?void 0:L[J],x);ee=I[H.id]=S+"/font-files/"+H.id+"/"+k+"."+J+"."+ve+".woff"}var fe=D.get(ee);fe==null&&(fe=D.size,D.set(ee,fe)),R[q]=fe}ne>65535&&(q++,R[q]=R[q-1])}return{fontUrls:Array.from(D.keys()),chars:R}}))},Object.defineProperty(r,"__esModule",{value:!0}),r})({})}function n_(r,e){const t=Object.create(null),s=Object.create(null);function n(a,o){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=r(c.response);u.src=a,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(a,o){let l=t[a];l?o(l):s[a]?s[a].push(o):(s[a]=[o],n(a,c=>{c.src=a,t[a]=c,s[a].forEach(u=>u(c)),delete s[a]}))}return function(a,o,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(a.length),g=[];a.length||E();const v=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(M=>!M.lang||M.lang.test(l)).reverse(),c.length){let T=0;(function P(x=0){for(let S=x,D=a.length;S<D;S++){const R=a.codePointAt(S);if(T===1&&g[d[S-1]].supportsCodePoint(R)||S>0&&/\s/.test(a[S]))d[S]=d[S-1],T===2&&(m[m.length-1][1]=S);else for(let I=d[S],N=c.length;I<=N;I++)if(I===N){const V=T===2?m[m.length-1]:m[m.length]=[S,S];V[1]=S,T=2}else{d[S]=I;const{src:V,unicodeRange:B}=c[I];if(!B||b(R,B)){const z=t[V];if(!z){i(V,()=>{P(S)});return}if(z.supportsCodePoint(R)){let $=v.get(z);typeof $!="number"&&($=g.length,g.push(z),v.set(z,$)),d[S]=$,T=1;break}}}R>65535&&S+1<D&&(d[S+1]=d[S],S++,T===2&&(m[m.length-1][1]=S))}p()})()}else m.push([0,a.length-1]),p();function p(){if(m.length){const M=m.map(y=>a.substring(y[0],y[1]+1)).join(`
`);e.getFontsForString(M,{lang:l||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:y,chars:w})=>{const T=g.length;let P=0;m.forEach(S=>{for(let D=0,R=S[1]-S[0];D<=R;D++)d[S[0]+D]=w[P++]+T;P++});let x=0;y.forEach((S,D)=>{i(S,R=>{g[D+T]=R,++x===y.length&&E()})})})}else E()}function E(){o({chars:d,fonts:g})}function b(M,y){for(let w=0;w<y.length;w++){const[T,P=T]=y[w];if(T<=M&&M<=P)return!0}return!1}}}const i_=qi({name:"FontResolver",dependencies:[n_,e_,t_],init(r,e,t){return r(e,t())}});function r_(r,e){const s=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:g,lang:v,fonts:m,style:p,weight:E,preResolvedFonts:b,unicodeFontsURL:M},y){const w=({chars:T,fonts:P})=>{let x,S;const D=[];for(let R=0;R<T.length;R++)T[R]!==S?(S=T[R],D.push(x={start:R,end:R,fontObj:P[T[R]]})):x.end=R;y(D)};b?w(b):r(g,w,{lang:v,fonts:m,style:p,weight:E,unicodeFontsURL:M})}function o({text:g="",font:v,lang:m,sdfGlyphSize:p=64,fontSize:E=400,fontWeight:b=1,fontStyle:M="normal",letterSpacing:y=0,lineHeight:w="normal",maxWidth:T=1/0,direction:P,textAlign:x="left",textIndent:S=0,whiteSpace:D="normal",overflowWrap:R="normal",anchorX:I=0,anchorY:N=0,metricsOnly:V=!1,unicodeFontsURL:B,preResolvedFonts:z=null,includeCaretPositions:$=!1,chunkedBoundsSize:j=8192,colorRanges:W=null},L){const H=h(),q={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),E=+E,y=+y,T=+T,w=w||"normal",S=+S,a({text:g,lang:m,style:M,weight:b,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:B,preResolvedFonts:z},ne=>{q.fontLoad=h()-H;const ee=isFinite(T);let G=null,k=null,J=null,ve=null,fe=null,me=null,ge=null,Ie=null,De=0,Ue=0,Te=D!=="nowrap";const ke=new Map,U=h();let we=S,be=0,ae=new f;const pe=[ae];ne.forEach(K=>{const{fontObj:Y}=K,{ascender:xe,descender:_e,unitsPerEm:ye,lineGap:Re,capHeight:oe,xHeight:le}=Y;let ue=ke.get(Y);if(!ue){const he=E/ye,de=w==="normal"?(xe-_e+Re)*he:w*E,Pe=(de-(xe-_e)*he)/2,ce=Math.min(de,(xe-_e)*he),se=(xe+_e)/2*he+ce/2;ue={index:ke.size,src:Y.src,fontObj:Y,fontSizeMult:he,unitsPerEm:ye,ascender:xe*he,descender:_e*he,capHeight:oe*he,xHeight:le*he,lineHeight:de,baseline:-Pe-xe*he,caretTop:se,caretBottom:se-ce},ke.set(Y,ue)}const{fontSizeMult:Ee}=ue,Se=g.slice(K.start,K.end+1);let We,O;Y.forEachGlyph(Se,E,y,(he,de,Pe,ce)=>{de+=be,ce+=K.start,We=de,O=he;const se=g.charAt(ce),Me=he.advanceWidth*Ee,Ne=ae.count;let Oe;if("isEmpty"in he||(he.isWhitespace=!!se&&new RegExp(n).test(se),he.canBreakAfter=!!se&&i.test(se),he.isEmpty=he.xMin===he.xMax||he.yMin===he.yMax||s.test(se)),!he.isWhitespace&&!he.isEmpty&&Ue++,Te&&ee&&!he.isWhitespace&&de+Me+we>T&&Ne){if(ae.glyphAt(Ne-1).glyphObj.canBreakAfter)Oe=new f,we=-de;else for(let ht=Ne;ht--;)if(ht===0&&R==="break-word"){Oe=new f,we=-de;break}else if(ae.glyphAt(ht).glyphObj.canBreakAfter){Oe=ae.splitAt(ht+1);const ft=Oe.glyphAt(0).x;we-=ft;for(let gt=Oe.count;gt--;)Oe.glyphAt(gt).x-=ft;break}Oe&&(ae.isSoftWrapped=!0,ae=Oe,pe.push(ae),De=T)}let Xe=ae.glyphAt(ae.count);Xe.glyphObj=he,Xe.x=de+we,Xe.y=Pe,Xe.width=Me,Xe.charIndex=ce,Xe.fontData=ue,se===`
`&&(ae=new f,pe.push(ae),we=-(de+Me+y*E)+S)}),be=We+O.advanceWidth*Ee+y*E});let A=0;pe.forEach(K=>{let Y=!0;for(let xe=K.count;xe--;){const _e=K.glyphAt(xe);Y&&!_e.glyphObj.isWhitespace&&(K.width=_e.x+_e.width,K.width>De&&(De=K.width),Y=!1);let{lineHeight:ye,capHeight:Re,xHeight:oe,baseline:le}=_e.fontData;ye>K.lineHeight&&(K.lineHeight=ye);const ue=le-K.baseline;ue<0&&(K.baseline+=ue,K.cap+=ue,K.ex+=ue),K.cap=Math.max(K.cap,K.baseline+Re),K.ex=Math.max(K.ex,K.baseline+oe)}K.baseline-=A,K.cap-=A,K.ex-=A,A+=K.lineHeight});let _=0,F=0;if(I&&(typeof I=="number"?_=-I:typeof I=="string"&&(_=-De*(I==="left"?0:I==="center"?.5:I==="right"?1:c(I)))),N&&(typeof N=="number"?F=-N:typeof N=="string"&&(F=N==="top"?0:N==="top-baseline"?-pe[0].baseline:N==="top-cap"?-pe[0].cap:N==="top-ex"?-pe[0].ex:N==="middle"?A/2:N==="bottom"?A:N==="bottom-baseline"?-pe[pe.length-1].baseline:c(N)*A)),!V){const K=e.getEmbeddingLevels(g,P);G=new Uint16Array(Ue),k=new Uint8Array(Ue),J=new Float32Array(Ue*2),ve={},ge=[1/0,1/0,-1/0,-1/0],Ie=[],$&&(me=new Float32Array(g.length*4)),W&&(fe=new Uint8Array(Ue*3));let Y=0,xe=-1,_e=-1,ye,Re;if(pe.forEach((oe,le)=>{let{count:ue,width:Ee}=oe;if(ue>0){let Se=0;for(let ce=ue;ce--&&oe.glyphAt(ce).glyphObj.isWhitespace;)Se++;let We=0,O=0;if(x==="center")We=(De-Ee)/2;else if(x==="right")We=De-Ee;else if(x==="justify"&&oe.isSoftWrapped){let ce=0;for(let se=ue-Se;se--;)oe.glyphAt(se).glyphObj.isWhitespace&&ce++;O=(De-Ee)/ce}if(O||We){let ce=0;for(let se=0;se<ue;se++){let Me=oe.glyphAt(se);const Ne=Me.glyphObj;Me.x+=We+ce,O!==0&&Ne.isWhitespace&&se<ue-Se&&(ce+=O,Me.width+=O)}}const he=e.getReorderSegments(g,K,oe.glyphAt(0).charIndex,oe.glyphAt(oe.count-1).charIndex);for(let ce=0;ce<he.length;ce++){const[se,Me]=he[ce];let Ne=1/0,Oe=-1/0;for(let Xe=0;Xe<ue;Xe++)if(oe.glyphAt(Xe).charIndex>=se){let ht=Xe,ft=Xe;for(;ft<ue;ft++){let gt=oe.glyphAt(ft);if(gt.charIndex>Me)break;ft<ue-Se&&(Ne=Math.min(Ne,gt.x),Oe=Math.max(Oe,gt.x+gt.width))}for(let gt=ht;gt<ft;gt++){const Ot=oe.glyphAt(gt);Ot.x=Oe-(Ot.x+Ot.width-Ne)}break}}let de;const Pe=ce=>de=ce;for(let ce=0;ce<ue;ce++){const se=oe.glyphAt(ce);de=se.glyphObj;const Me=de.index,Ne=K.levels[se.charIndex]&1;if(Ne){const Oe=e.getMirroredCharacter(g[se.charIndex]);Oe&&se.fontData.fontObj.forEachGlyph(Oe,0,0,Pe)}if($){const{charIndex:Oe,fontData:Xe}=se,ht=se.x+_,ft=se.x+se.width+_;me[Oe*4]=Ne?ft:ht,me[Oe*4+1]=Ne?ht:ft,me[Oe*4+2]=oe.baseline+Xe.caretBottom+F,me[Oe*4+3]=oe.baseline+Xe.caretTop+F;const gt=Oe-xe;gt>1&&u(me,xe,gt),xe=Oe}if(W){const{charIndex:Oe}=se;for(;Oe>_e;)_e++,W.hasOwnProperty(_e)&&(Re=W[_e])}if(!de.isWhitespace&&!de.isEmpty){const Oe=Y++,{fontSizeMult:Xe,src:ht,index:ft}=se.fontData,gt=ve[ht]||(ve[ht]={});gt[Me]||(gt[Me]={path:de.path,pathBounds:[de.xMin,de.yMin,de.xMax,de.yMax]});const Ot=se.x+_,Qt=se.y+oe.baseline+F;J[Oe*2]=Ot,J[Oe*2+1]=Qt;const nn=Ot+de.xMin*Xe,rn=Qt+de.yMin*Xe,mn=Ot+de.xMax*Xe,wt=Qt+de.yMax*Xe;nn<ge[0]&&(ge[0]=nn),rn<ge[1]&&(ge[1]=rn),mn>ge[2]&&(ge[2]=mn),wt>ge[3]&&(ge[3]=wt),Oe%j===0&&(ye={start:Oe,end:Oe,rect:[1/0,1/0,-1/0,-1/0]},Ie.push(ye)),ye.end++;const vt=ye.rect;if(nn<vt[0]&&(vt[0]=nn),rn<vt[1]&&(vt[1]=rn),mn>vt[2]&&(vt[2]=mn),wt>vt[3]&&(vt[3]=wt),G[Oe]=Me,k[Oe]=ft,W){const gn=Oe*3;fe[gn]=Re>>16&255,fe[gn+1]=Re>>8&255,fe[gn+2]=Re&255}}}}}),me){const oe=g.length-xe;oe>1&&u(me,xe,oe)}}const ie=[];ke.forEach(({index:K,src:Y,unitsPerEm:xe,ascender:_e,descender:ye,lineHeight:Re,capHeight:oe,xHeight:le})=>{ie[K]={src:Y,unitsPerEm:xe,ascender:_e,descender:ye,lineHeight:Re,capHeight:oe,xHeight:le}}),q.typesetting=h()-U,L({glyphIds:G,glyphFontIndices:k,glyphPositions:J,glyphData:ve,fontData:ie,caretPositions:me,glyphColors:fe,chunkedBounds:Ie,fontSize:E,topBaseline:F+pe[0].baseline,blockBounds:[_,F-A,_+De,F],visibleBounds:ge,timings:q})})}function l(g,v){o({...g,metricsOnly:!0},m=>{const[p,E,b,M]=m.blockBounds;v({width:b-p,height:M-E})})}function c(g){let v=g.match(/^([\d.]+)%$/),m=v?parseFloat(v[1]):NaN;return isNaN(m)?0:m/100}function u(g,v,m){const p=g[v*4],E=g[v*4+1],b=g[v*4+2],M=g[v*4+3],y=(E-p)/m;for(let w=0;w<m;w++){const T=(v+w)*4;g[T]=p+y*w,g[T+1]=p+y*(w+1),g[T+2]=b,g[T+3]=M}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let v=f.flyweight;return v.data=this.data,v.index=g,v},splitAt(g){let v=new f;return v.data=this.data.splice(g*d.length),v}},f.flyweight=d.reduce((g,v,m,p)=>(Object.defineProperty(g,v,{get(){return this.data[this.index*d.length+m]},set(E){this.data[this.index*d.length+m]=E}}),g),{data:null,index:0}),{typeset:o,measure:l}}const di=()=>(self.performance||Date).now(),vs=Xc();let Kl;function s_(r,e,t,s,n,i,a,o,l,c,u=!0){return u?o_(r,e,t,s,n,i,a,o,l,c).then(null,h=>(Kl||(console.warn("WebGL SDF generation failed, falling back to JS",h),Kl=!0),Jl(r,e,t,s,n,i,a,o,l,c))):Jl(r,e,t,s,n,i,a,o,l,c)}const cs=[],a_=5;let co=0;function jc(){const r=di();for(;cs.length&&di()-r<a_;)cs.shift()();co=cs.length?setTimeout(jc,0):0}const o_=(...r)=>new Promise((e,t)=>{cs.push(()=>{const s=di();try{vs.webgl.generateIntoCanvas(...r),e({timing:di()-s})}catch(n){t(n)}}),co||(co=setTimeout(jc,0))}),l_=4,c_=2e3,Zl={};let u_=0;function Jl(r,e,t,s,n,i,a,o,l,c){const u="TroikaTextSDFGenerator_JS_"+u_++%l_;let h=Zl[u];return h||(h=Zl[u]={workerModule:qi({name:u,workerId:u,dependencies:[Xc,di],init(f,d){const g=f().javascript.generate;return function(...v){const m=d();return{textureData:g(...v),timing:d()-m}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(r,e,t,s,n,i).then(({textureData:f,timing:d})=>{const g=di(),v=new Uint8Array(f.length*4);for(let m=0;m<f.length;m++)v[m*4+c]=f[m];return vs.webglUtils.renderImageData(a,v,o,l,r,e,1<<3-c),d+=di()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{zg(u)},c_)),{timing:d}})}function h_(r){r._warm||(vs.webgl.isSupported(r),r._warm=!0)}const f_=vs.webglUtils.resizeWebGLCanvasWithoutClearing,mr={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},d_=new et;function Oi(){return(self.performance||Date).now()}const Ql=Object.create(null);function p_(r,e){r=g_({},r);const t=Oi(),s=[];if(r.font&&s.push({label:"user",src:__(r.font)}),r.font=s,r.text=""+r.text,r.sdfGlyphSize=r.sdfGlyphSize||mr.sdfGlyphSize,r.unicodeFontsURL=r.unicodeFontsURL||mr.unicodeFontsURL,r.colorRanges!=null){let f={};for(let d in r.colorRanges)if(r.colorRanges.hasOwnProperty(d)){let g=r.colorRanges[d];typeof g!="number"&&(g=d_.set(g).getHex()),f[d]=g}r.colorRanges=f}Object.freeze(r);const{textureWidth:n,sdfExponent:i}=mr,{sdfGlyphSize:a}=r,o=n/a*4;let l=Ql[a];if(!l){const f=document.createElement("canvas");f.width=n,f.height=a*256/o,l=Ql[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:f,sdfTexture:new It(f,void 0,void 0,void 0,At,At),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,m_(l)}const{sdfTexture:c,sdfCanvas:u}=l;Zc(r).then(f=>{const{glyphIds:d,glyphFontIndices:g,fontData:v,glyphPositions:m,fontSize:p,timings:E}=f,b=[],M=new Float32Array(d.length*4);let y=0,w=0;const T=Oi(),P=v.map(I=>{let N=l.glyphsByFont.get(I.src);return N||l.glyphsByFont.set(I.src,N=new Map),N});d.forEach((I,N)=>{const V=g[N],{src:B,unitsPerEm:z}=v[V];let $=P[V].get(I);if(!$){const{path:q,pathBounds:ne}=f.glyphData[B][I],ee=Math.max(ne[2]-ne[0],ne[3]-ne[1])/a*(mr.sdfMargin*a+.5),G=l.glyphCount++,k=[ne[0]-ee,ne[1]-ee,ne[2]+ee,ne[3]+ee];P[V].set(I,$={path:q,atlasIndex:G,sdfViewBox:k}),b.push($)}const{sdfViewBox:j}=$,W=m[w++],L=m[w++],H=p/z;M[y++]=W+j[0]*H,M[y++]=L+j[1]*H,M[y++]=W+j[2]*H,M[y++]=L+j[3]*H,d[N]=$.atlasIndex}),E.quads=(E.quads||0)+(Oi()-T);const x=Oi();E.sdf={};const S=u.height,D=Math.ceil(l.glyphCount/o),R=Math.pow(2,Math.ceil(Math.log2(D*a)));R>S&&(console.info(`Increasing SDF texture size ${S}->${R}`),f_(u,n,R),c.dispose()),Promise.all(b.map(I=>qc(I,l,r.gpuAccelerateSDF).then(({timing:N})=>{E.sdf[I.atlasIndex]=N}))).then(()=>{b.length&&!l.contextLost&&(Kc(l),c.needsUpdate=!0),E.sdfTotal=Oi()-x,E.total=Oi()-t,e(Object.freeze({parameters:r,sdfTexture:c,sdfGlyphSize:a,sdfExponent:i,glyphBounds:M,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||h_(u)})}function qc({path:r,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:s,sdfCanvas:n,contextLost:i},a){if(i)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=mr,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/s)*s,f=Math.floor(u/(o/s))*s,d=e%4;return s_(s,s,r,t,c,l,n,h,f,d,a)}function m_(r){const e=r.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),r.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),r.contextLost=!1;const s=[];r.glyphsByFont.forEach(n=>{n.forEach(i=>{s.push(qc(i,r,!0))})}),Promise.all(s).then(()=>{Kc(r),r.sdfTexture.needsUpdate=!0})})}function g_(r,e){for(let t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);return r}let $r;function __(r){return $r||($r=typeof document>"u"?{}:document.createElement("a")),$r.href=r,$r.href}function Kc(r){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=r,{width:s,height:n}=e,i=r.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==s*n*4)&&(a=new Uint8Array(s*n*4),t.image={width:s,height:n,data:a},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,s,n,i.RGBA,i.UNSIGNED_BYTE,a)}}const v_=qi({name:"Typesetter",dependencies:[r_,i_,Hg],init(r,e,t){return r(e,t())}}),Zc=qi({name:"Typesetter",dependencies:[v_],init(r){return function(e){return new Promise(t=>{r.typeset(e,t)})}},getTransferables(r){const e=[];for(let t in r)r[t]&&r[t].buffer&&e.push(r[t].buffer);return e}});Zc.onMainThread;const $l={};function x_(r){let e=$l[r];return e||(e=$l[r]=new vi(1,1,r,r).translate(.5,.5,0)),e}const S_="aTroikaGlyphBounds",ec="aTroikaGlyphIndex",M_="aTroikaGlyphColor";class y_ extends Sh{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new ms,this.boundingBox=new _i}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=x_(e);["position","normal","uv"].forEach(s=>{this.attributes[s]=t.attributes[s].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,s,n,i){this.updateAttributeData(S_,e,4),this.updateAttributeData(ec,t,1),this.updateAttributeData(M_,i,3),this._blockBounds=s,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:s}=this;if(t){const{PI:n,floor:i,min:a,max:o,sin:l,cos:c}=Math,u=n/2,h=n*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,v=i((d+u)/h)!==i((g+u)/h)?-f:a(l(d)*f,l(g)*f),m=i((d-u)/h)!==i((g-u)/h)?f:o(l(d)*f,l(g)*f),p=i((d+n)/h)!==i((g+n)/h)?f*2:o(f-c(d)*f,f-c(g)*f);s.min.set(v,e[1],t<0?-p:0),s.max.set(m,e[3],t<0?0:p)}else s.min.set(e[0],e[1],0),s.max.set(e[2],e[3],0);s.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(ec).count,s=this._chunkedBounds;if(s)for(let n=s.length;n--;){t=s[n].end;let i=s[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,s){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new uh(t,s)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const E_=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,b_=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,T_=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,A_=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function w_(r){const e=lo(r,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new je},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new pt(0,0,0,0)},uTroikaClipRect:{value:new pt(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new je},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new et},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ze},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:E_,vertexTransform:b_,fragmentDefs:T_,fragmentColorTransform:A_,customRewriter({vertexShader:t,fragmentShader:s}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(s)&&(s=s.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(Yc,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:s}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Ao=new Eo({color:16777215,side:xn,transparent:!0}),tc=8421504,nc=new mt,es=new Q,oa=new Q,hr=[],C_=new Q,la="+x+y";function ic(r){return Array.isArray(r)?r[0]:r}let Jc=()=>{const r=new Xt(new vi(1,1),Ao);return Jc=()=>r,r},Qc=()=>{const r=new Xt(new vi(1,1,32,1),Ao);return Qc=()=>r,r};const R_={type:"syncstart"},P_={type:"synccomplete"},$c=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],D_=$c.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class eu extends Xt{constructor(){const e=new y_;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=tc,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=la,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(R_),p_({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const s=this._queuedSyncs;s&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{s.forEach(n=>n&&n())})),this.dispatchEvent(P_),e&&e()})))}onBeforeRender(e,t,s,n,i,a){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return w_(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Ao.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function s(){t.removeEventListener("dispose",s),e.dispose()})),this.hasOutline()){let s=e._outlineMtl;return s||(s=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),s.isTextOutlineMaterial=!0,s.depthWrite=!1,s.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),s.dispose()})),[s,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return ic(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return ic(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,s=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;s.uTroikaSDFTexture.value=o,s.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),s.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,s.uTroikaSDFExponent.value=n.sdfExponent,s.uTroikaTotalBounds.value.fromArray(l),s.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,h=0,f,d,g,v=0,m=0;if(t){let{outlineWidth:E,outlineOffsetX:b,outlineOffsetY:M,outlineBlur:y,outlineOpacity:w}=this;c=this._parsePercent(E)||0,u=Math.max(0,this._parsePercent(y)||0),f=w,v=this._parsePercent(b)||0,m=this._parsePercent(M)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,s.uTroikaStrokeColor.value.set(g??tc),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;s.uTroikaEdgeOffset.value=c,s.uTroikaPositionOffset.value.set(v,m),s.uTroikaBlurRadius.value=u,s.uTroikaStrokeWidth.value=h,s.uTroikaStrokeOpacity.value=d,s.uTroikaFillOpacity.value=f??1,s.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)s.uTroikaClipRect.value.fromArray(p);else{const E=(this.fontSize||.1)*100;s.uTroikaClipRect.value.set(l[0]-E,l[1]-E,l[2]+E,l[3]+E)}this.geometry.applyClipRect(s.uTroikaClipRect.value)}s.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new et;(i!==o._input||typeof i=="object")&&o.set(o._input=i)}let a=this.orientation||la;if(a!==e._orientation){let o=s.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==la&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;es.set(0,0,0)[u]=c==="-"?1:-1,oa.set(0,0,0)[f]=h==="-"?-1:1,nc.lookAt(C_,es.cross(oa),oa),o.setFromMatrix4(nc)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),s=t?parseFloat(t[1]):NaN;e=(isNaN(s)?0:s/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new je){t.copy(e);const s=this.curveRadius;return s&&(t.x=Math.atan2(e.x,Math.abs(s)-Math.abs(e.z))*Math.abs(s)),t}worldPositionToTextCoords(e,t=new je){return es.copy(e),this.localPositionToTextCoords(this.worldToLocal(es),t)}raycast(e,t){const{textRenderInfo:s,curveRadius:n}=this;if(s){const i=s.blockBounds,a=n?Qc():Jc(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let h=i[0]+c.getX(u)*(i[2]-i[0]);const f=i[1]+c.getY(u)*(i[3]-i[1]);let d=0;n&&(d=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),l.setXYZ(u,h,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,hr.length=0,a.raycast(e,hr);for(let u=0;u<hr.length;u++)hr[u].object=this,t.push(hr[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,D_.forEach(s=>{this[s]=e[s]}),this}clone(){return new this.constructor().copy(this)}}$c.forEach(r=>{const e="_private_"+r;Object.defineProperty(eu.prototype,r,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new _i;new et;class ot{constructor(e,t,s){this.x=e,this.y=t,this.z=s}distanceTo(e){return Math.sqrt((this.x-e.x)**2+(this.y-e.y)**2+(this.z-e.z)**2)}}function U_(){function r(y,w,T,P){const x=new ds(w),S=new ul({color:T}),D=new Xt(x,S);return y.add(D),D.position.x=P.x,D.position.y=P.y,D.position.z=P.z,D.radius=w,D.cameraPos=new ot(D.position.x,D.position.y,D.position.z+1.6*w),D}function e(y,w,T,P){const x=new ds(y),S=new ul({color:w}),D=new Xt(x,S);g.add(D),D.position.x=T.x,D.position.y=T.y,D.position.z=T.z,D.radius=y,D.textElement=document.getElementById(P),D.cameraPos=new ot(D.position.x,D.position.y,D.position.z+1.6*y),D.addEventListener("click",I=>{I.stopPropagation(),console.log(`${P} was clicked, moving to ${D.position.x}, ${D.position.y}`),t(D.cameraPos,D.position),D.textElement.style.display="block"}),v.add(D);const R=new eu;return g.add(R),R.text=P,R.fontSize=.2,R.position.z=D.position.z,R.color=10053375,R.position.x=D.position.x,R.anchorX=-D.radius*1.1,R.position.y=D.position.y,R.font="assets/ia-writer-quattro-latin-700-normal-DX555wpQ.ttf",R.fontSize=D.radius/4,R.sync(),D.label=R,D}function t(y,w){M.enabled=!1,new Hl(M.target).to(w).onUpdate(()=>M.update()).easing(fi.Quadratic.InOut).group(o).onComplete(()=>M.enabled=!0).start(),new Hl(f.position).to(y).onUpdate(()=>{M.update()}).easing(fi.Quadratic.InOut).group(o).start()}function s(y){const w=y.domElement,T=w.clientWidth,P=w.clientHeight,x=w.width!==T||w.height!==P;return x&&y.setSize(T,P,!1),x}function n(y){if(y*=.001,s(u)){const w=u.domElement,T=w.clientWidth,P=w.clientHeight;f.aspect=T/P,f.updateProjectionMatrix()}m.forEach((w,T)=>{const P=.1+T*.01,x=y*P;w.rotation.x=x,w.rotation.y=x,w.label&&w.label.lookAt(f.position)}),p.forEach((w,T)=>{const P=.1+T*.01,x=y*P;w.rotation.x=x,w.rotation.y=x,w.label&&w.label.lookAt(f.position)}),u.render(g,f),requestAnimationFrame(n),i(),M.update(),v.update(),o.update()}function i(){m.forEach((y,w)=>{M.target.distanceTo(y.position)<=.5*y.radius&&f.position.distanceTo(y.position)<=2.6*y.radius&&f.position.distanceTo(y.position)>=y.radius?(y.textElement.style.display="block",y.textElement.style.opacity=Math.min(1.5-f.position.distanceTo(y.position)/(y.radius*2.6),1)):y.textElement.style.display="None"})}function a(){const T=new vh(16777215,10,0,1);T.position.set(10,10,10),g.add(T);const P=new xh(4210752,1);g.add(P)}const o=new Vc,l=[3414879,15471524,16115218,6830571,6216178],c=document.querySelector("#c"),u=new Sg({antialias:!0,canvas:c});let f=new Zt(50,1,.1,1e3);const d=new ot(0,0,45);f.position.set(d.x,d.y,d.z);const g=new lh;g.background=new et(l[0]);const v=new Fg(u,f,u.domElement),m=[e(4,l[0],new ot(0,0,0),"about me"),e(2,l[1],new ot(10,15,-20),"coursework"),e(1,l[1],new ot(20,12,-30),"freshman"),e(1,l[1],new ot(12,20,-6),"sophomore"),e(2,l[2],new ot(-13,6,5),"projects"),e(1,l[2],new ot(-17,1,6),"dbf"),e(1,l[2],new ot(-5,8,15),"ssp"),e(1,l[2],new ot(-20,10,-10),"fca"),e(1,l[2],new ot(-10,5,6),"techrise"),e(2,l[3],new ot(14,-8,3),"experience"),e(1,l[3],new ot(5,-15,1),"seagrant"),e(1,l[3],new ot(20,-7,-5),"tasan"),e(1,l[3],new ot(21,-3,5),"mrl"),e(1,l[3],new ot(12,-13,15),"nasa"),e(1,l[3],new ot(17,-2,2),"relativity"),e(2,l[4],new ot(-15,-7,-15),"contact")],p=[r(m[0],.5,l[1],new ot(5,0,5)),r(m[0],.5,l[2],new ot(-1,7,0)),r(m[1],.5,l[3],new ot(-5,2,-5)),r(m[1],.5,l[0],new ot(-1,7,5)),r(m[2],.5,l[2],new ot(5,7,-5)),r(m[4],.5,l[1],new ot(-7,0,2)),r(m[4],.5,l[3],new ot(-1,2,5)),r(m[9],.5,l[0],new ot(-4,0,3)),r(m[9],.5,l[2],new ot(-1,2,5)),r(m[9],.5,l[3],new ot(-5,5,-6)),r(m[15],.5,l[1],new ot(-1,-1,-5))];(document.getElementById("home_button")??Ng.fail("did not find home button")).addEventListener("click",y=>{t(d,new ot(0,0,0))}),a();let M=new yg(f,u.domElement);requestAnimationFrame(n)}U_();
