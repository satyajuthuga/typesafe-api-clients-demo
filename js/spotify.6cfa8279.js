(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["spotify"],{3430:function(e,t,n){"use strict";var r=n("bd55"),o=n.n(r);o.a},"3b66":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Spotify",{attrs:{"access-token":e.accessToken}})},o=[],a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spotify"},[n("a",{attrs:{href:e.spotifyAuth}},[e._v("Authorize Spotify")])])},i=[],s=(n("99af"),n("a15b"),n("d81d"),n("b64b"),n("d3b7"),n("96cf"),n("41db")),u=a["a"].extend({name:"Spotify",props:{accessToken:{type:String,required:!0}},computed:{spotifyAuth:function(){var e="https://accounts.spotify.com/authorize",t={client_id:"48359bab79a948d695e46c37cbfe792b",redirect_uri:"https://localhost.jackkoppa.com:8080",response_type:"token",scope:"user-read-private user-read-email"},n=Object.keys(t).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(t[e]))})).join("&");return"".concat(e,"?").concat(n)}},created:function(){var e,t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(this.accessToken),e=new s["a"]({baseOptions:{headers:{Authorization:"Bearer ".concat(this.accessToken)}}}),n.next=4,regeneratorRuntime.awrap(e.meTracksGet(25));case 4:t=n.sent,console.log(t.data.items);case 6:case"end":return n.stop()}}),null,this)}}),p=u,f=(n("3430"),n("2877")),d=Object(f["a"])(p,c,i,!1,null,"63cce128",null),l=d.exports,b=a["a"].extend({name:"SpotifyPage",props:{accessToken:{type:String,default:""}},components:{Spotify:l}}),h=b,m=Object(f["a"])(h,r,o,!1,null,null,null);t["default"]=m.exports},"99af":function(e,t,n){"use strict";var r=n("23e7"),o=n("d039"),a=n("e8b5"),c=n("861d"),i=n("7b0b"),s=n("50c4"),u=n("8418"),p=n("65f0"),f=n("1dde"),d=n("b622"),l=n("60ae"),b=d("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",y=l>=51||!o((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),v=f("concat"),g=function(e){if(!c(e))return!1;var t=e[b];return void 0!==t?!!t:a(e)},k=!y||!v;r({target:"Array",proto:!0,forced:k},{concat:function(e){var t,n,r,o,a,c=i(this),f=p(c,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?c:arguments[t],g(a)){if(o=s(a.length),d+o>h)throw TypeError(m);for(n=0;n<o;n++,d++)n in a&&u(f,d,a[n])}else{if(d>=h)throw TypeError(m);u(f,d++,a)}return f.length=d,f}})},a15b:function(e,t,n){"use strict";var r=n("23e7"),o=n("44ad"),a=n("fc6a"),c=n("b301"),i=[].join,s=o!=Object,u=c("join",",");r({target:"Array",proto:!0,forced:s||u},{join:function(e){return i.call(a(this),void 0===e?",":e)}})},bd55:function(e,t,n){},d81d:function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").map,a=n("1dde");r({target:"Array",proto:!0,forced:!a("map")},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=spotify.6cfa8279.js.map