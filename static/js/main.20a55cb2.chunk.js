(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{11:function(e,a,t){e.exports=t(21)},16:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(8),s=t.n(r),c=(t(16),t(3)),l=t(4),i=t(2),d=t(6),m=t(5);var u=function(e){var a=e.data;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col pt-3"},o.a.createElement("form",null,a.name&&o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Name"),o.a.createElement("input",{type:"text",className:"form-control",value:a.name,disabled:!0})),a.address&&o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Address"),o.a.createElement("textarea",{type:"text",className:"form-control",value:a.address,disabled:!0})),a.postcode&&o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Postcode"),o.a.createElement("input",{type:"text",className:"form-control",value:a.postcode,disabled:!0}))))))},p=t(10);var h=function(e){var a=e.onLogin,t=e.loading,n=e.setPassword,r=e.password,s=e.errorMessage,c=e.captchaChange,l=e.valid;return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row justify-content-md-center pt-5 text-center"},o.a.createElement("div",{className:"col-sm col-md-6 col-lg-4 col-xl-3"},o.a.createElement("form",{onSubmit:a},s&&o.a.createElement("div",{className:"alert alert-danger",role:"alert"},s),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"password",className:"form-control form-control-lg",disabled:t,onChange:n,value:r,placeholder:"Password"})),o.a.createElement("div",{className:"form-group"},o.a.createElement(p.a,{sitekey:Object({NODE_ENV:"production",PUBLIC_URL:"/open-medical-alert",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_CAPTCHA_SITE_KEY,onChange:c,onExpired:function(){c()}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"submit",className:"btn btn-success btn-lg",disabled:!l,value:"Login"}))))))},v=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={password:""},e.setPassword=e.setPassword.bind(Object(i.a)(e)),e.onLogin=e.onLogin.bind(Object(i.a)(e)),e.captchaChange=e.captchaChange.bind(Object(i.a)(e)),e}return Object(l.a)(t,[{key:"setPassword",value:function(e){this.setState({password:e.target.value})}},{key:"onLogin",value:function(e){this.valid()?this.props.onLogin({password:this.state.password,captcha:this.state.captcha}):console.log(this.state),e.preventDefault()}},{key:"captchaChange",value:function(e){this.setState({captcha:e})}},{key:"valid",value:function(){return!!this.state.captcha&!!this.state.password}},{key:"render",value:function(){var e=this.state.password,a=this.valid();return o.a.createElement(h,Object.assign({password:e,setPassword:this.setPassword},this.props,{onLogin:this.onLogin,captchaChange:this.captchaChange,valid:a}))}}]),t}(o.a.Component),g=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={data:null},e.loadData=e.loadData.bind(Object(i.a)(e)),e}return Object(l.a)(t,[{key:"loadData",value:function(e){var a=this;this.setState({loading:!0}),fetch(Object({NODE_ENV:"production",PUBLIC_URL:"/open-medical-alert",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_DATA_URL,{method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json().then((function(t){200===e.status?a.setState({data:t,loading:!1}):a.setState({errorMessage:t.message,loading:!1})}))})).catch((function(e){console.error(e),a.setState({errorMessage:"Unknown error"})}))}},{key:"render",value:function(){var e=this.state,a=e.data,t=e.loading,n=e.errorMessage;return o.a.createElement("div",null,null==a&&o.a.createElement(v,{onLogin:this.loadData,loading:t,errorMessage:n}),null!=a&&o.a.createElement(u,{data:a}))}}]),t}(o.a.Component);var E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.20a55cb2.chunk.js.map