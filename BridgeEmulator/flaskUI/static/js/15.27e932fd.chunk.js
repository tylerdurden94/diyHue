(this.webpackJsonpdiyhue=this.webpackJsonpdiyhue||[]).push([[15],{171:function(e,c,t){"use strict";t.d(c,"a",(function(){return a}));var n=t(32),s=t(172),r=t.n(s),o=t(7);function a(e){var c=e.type,t=e.message,s=e.duration,a=e.setType;return Object(o.jsx)(r.a,{duration:s,persistOnHover:!0,children:Object(o.jsx)("div",{className:"notificationContainer",children:Object(o.jsxs)("div",{className:"notification ".concat(c),children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)("div",{className:"icon",children:Object(o.jsx)(n.q,{onClick:function(){return a("none")}})})]})})})}},227:function(e,c,t){"use strict";t.r(c);var n=t(37),s=t(2),r=t(61),o=t.n(r),a=t(89),i=t(32),l=t(211),j=t(173),d=(t(174),t(7)),b=function(e){var c=e.HOST_IP,t=e.api_key,n=e.id,s=e.device,r=e.setType,b=e.setMessage,u=function(){o.a.delete("".concat(c,"/api/").concat(t,"/sensors/").concat(n)).then((function(e){b("Device successfully deleted"),r("none"),r("success")})).catch((function(e){console.error(e),b("Error occured, check browser console"),r("none"),r("error")}))};return Object(d.jsxs)("div",{className:"devicecard device",children:[Object(d.jsxs)("div",{className:"row1",children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)(i.m,{})}),Object(d.jsx)("div",{className:"text",children:s.name}),Object(d.jsx)("div",{className:"switchContainer",children:Object(d.jsxs)("label",{className:"switch",children:[Object(d.jsx)("input",{type:"checkbox",defaultChecked:s.config.on,onChange:function(e){return a=e.currentTarget.checked,void o.a.put("".concat(c,"/api/").concat(t,"/sensors/").concat(n,"/config"),{on:a}).then((function(e){b(s.name+" successfully "+(a?"enabled":"disabled")),r("none"),r("success")})).catch((function(e){console.error(e),b("Error occured, check browser console"),r("none"),r("error")}));var a}}),Object(d.jsx)("span",{className:"slider"})]})})]}),Object(d.jsx)("div",{className:"row2",children:Object(d.jsxs)("div",{className:"text",children:["ModelID: ",s.modelid," ",Object(d.jsx)("br",{}),"Type: ",s.type," ",Object(d.jsx)("br",{}),"Protocol: ",s.protocol," ",Object(d.jsx)("br",{})]})}),Object(d.jsxs)("div",{className:"row3",children:[Object(d.jsx)("div",{className:"battery",children:"battery"in s.config&&function(){var e=s.config.battery,c=e+"%";return e>90?Object(d.jsx)(l.a,{color:"#27ae60",title:c}):e>70?Object(d.jsx)(l.b,{color:"#1abc9c",title:c}):e>40?Object(d.jsx)(l.d,{color:"#e67e22",title:c}):Object(d.jsx)(l.c,{color:"#e74c3c",title:c})}()}),Object(d.jsx)("div",{className:"iconbtn red",children:Object(d.jsx)(a.a,{title:"Delete",onClick:function(){Object(j.confirmAlert)({title:"Delete device "+s.name,message:"Are you sure to do this?",buttons:[{label:"Yes",onClick:function(){return u()}},{label:"No"}]})}})})]})]})},u=t(171);c.default=function(e){var c=e.HOST_IP,t=e.API_KEY,r=Object(s.useState)({}),a=Object(n.a)(r,2),i=a[0],l=a[1],j=Object(s.useState)("none"),O=Object(n.a)(j,2),h=O[0],v=O[1],x=Object(s.useState)("no message"),f=Object(n.a)(x,2),m=f[0],p=f[1];return Object(s.useEffect)((function(){var e=function(){void 0!==t&&o.a.get("".concat(c,"/sensors")).then((function(e){console.log(e.data),l(e.data)})).catch((function(e){console.error(e)}))};e();var n=setInterval((function(){e()}),2e3);return function(){return clearInterval(n)}}),[c,t]),Object(d.jsx)("div",{className:"content",children:Object(d.jsx)("div",{className:"inner",children:Object(d.jsxs)("div",{className:"devicecontainer",children:["none"!==h&&Object(d.jsx)(u.a,{type:h,message:m,duration:"5000",setType:v}),Object(d.jsx)("div",{className:"cardGrid",children:Object.entries(i).map((function(e){var s=Object(n.a)(e,2),r=s[0],o=s[1];return"none"!==o.protocol&&Object(d.jsx)(b,{HOST_IP:c,api_key:t,id:r,device:o,setType:v,setMessage:p},r)}))})]})})})}}}]);
//# sourceMappingURL=15.27e932fd.chunk.js.map