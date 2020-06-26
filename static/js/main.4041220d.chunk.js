(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},16:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),l=a.n(r),o=(a(16),a(3)),c=a(4),i=a(2),m=a(6),u=a(5);function d(e){var t=e.name,a=e.number;return n.createElement("div",{className:"form-group"},n.createElement("label",null,t),n.createElement("div",{className:"input-group"},n.createElement("div",{className:"input-group-prepend"},n.createElement("div",{className:"input-group-text"},n.createElement("a",{href:"tel:".concat(a)},n.createElement("span",{role:"img","aria-label":"phone"},"\ud83d\udcde")))),n.createElement("input",{type:"text",value:a,readonly:!0,className:"form-control"})),n.createElement("small",{className:"form-text text-muted"},"Click the phone icon to call"))}function h(e){return e.phoneNumbers.map((function(e){return n.createElement(d,e)}))}var p=function(e){var t=e.name,a=e.address,n=e.postcode,r=e.phoneNumbers;return s.a.createElement("div",null,t&&s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Name"),s.a.createElement("input",{type:"text",className:"form-control",value:t,readonly:!0})),a&&s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Address"),s.a.createElement("textarea",{className:"form-control",value:a,readonly:!0})),n&&s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Postcode"),s.a.createElement("input",{type:"text",className:"form-control",value:n,readonly:!0})),r&&s.a.createElement(h,{phoneNumbers:r}))};var v=function(e){var t=e.emergencyContacts;return s.a.createElement("div",null,s.a.createElement("h3",null,"Emergency Contacts"),s.a.createElement("div",{className:"row pt-2"},t.map((function(e){return s.a.createElement("div",{className:"col-6 pb-3"},s.a.createElement("div",{className:"col card pt-3 pb-2"},s.a.createElement(p,e)))}))))};var g=function(e){var t=e.message,a=e.link;return s.a.createElement("div",{className:"alert alert-danger"},t,a&&s.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"close"},s.a.createElement("span",{"aria-hidden":"true"},"\u24d8")))};function E(e){var t=e.data;return n.createElement("div",null,t.asthma&&n.createElement(g,{message:"I have asthma",link:"https://www.nhs.uk/conditions/asthma/"}),t.diabetes1&&n.createElement(g,{message:"I have diabetes (Type 1)",link:"https://www.nhs.uk/conditions/type-1-diabetes/"}),t.diabetes2&&n.createElement(g,{message:"I have diabetes (Type 2)",link:"https://www.nhs.uk/conditions/type-2-diabetes/"}),t.epilepsy&&n.createElement(g,{message:"I have epilepsy",link:"https://www.nhs.uk/conditions/epilepsy/"}),t.seizures&&n.createElement(g,{message:"I have seizures",link:"https://www.nhs.uk/conditions/what-to-do-if-someone-has-a-seizure-fit/"}),t.hypertension&&n.createElement(g,{message:"I have hypertension",link:"https://www.nhs.uk/conditions/high-blood-pressure-hypertension/"}),t.strokeHistory&&n.createElement(g,{message:"I have a stroke history",link:"https://www.nhs.uk/conditions/stroke/"}),t.hearingLoss&&n.createElement(g,{message:"I have hearing loss",link:"https://www.nhs.uk/conditions/hearing-loss/"}),t.alzheimers&&n.createElement(g,{message:"I have Alzheimer's",link:"https://www.nhs.uk/conditions/alzheimers-disease/"}))}var f=function(e){var t=e.data;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col pt-3"},s.a.createElement("form",null,s.a.createElement(E,{data:t}),s.a.createElement(p,t),t.emergencyContacts&&s.a.createElement(v,{emergencyContacts:t.emergencyContacts})))))},w=a(10);var b=function(e){var t=e.onLogin,a=e.loading,n=e.setPassword,r=e.password,l=e.errorMessage,o=e.captchaChange,c=e.valid;return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row justify-content-md-center pt-5 text-center"},s.a.createElement("div",{className:"col-sm col-md-6 col-lg-4 col-xl-3"},s.a.createElement("form",{onSubmit:t},l&&s.a.createElement("div",{className:"alert alert-danger",role:"alert"},l),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"password",className:"form-control form-control-lg",disabled:a,onChange:n,value:r,placeholder:"Password"})),s.a.createElement("div",{className:"form-group"},s.a.createElement(w.a,{sitekey:"6Les7aYZAAAAAOQwP4YOn4nNPEsHoH7qfnHxEXlx",onChange:o,onExpired:function(){o()}})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"submit",className:"btn btn-success btn-lg",disabled:!c,value:"Login"}))))))},y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={password:""},e.setPassword=e.setPassword.bind(Object(i.a)(e)),e.onLogin=e.onLogin.bind(Object(i.a)(e)),e.captchaChange=e.captchaChange.bind(Object(i.a)(e)),e}return Object(c.a)(a,[{key:"setPassword",value:function(e){this.setState({password:e.target.value})}},{key:"onLogin",value:function(e){this.valid()?this.props.onLogin({password:this.state.password,captcha:this.state.captcha}):console.log(this.state),e.preventDefault()}},{key:"captchaChange",value:function(e){this.setState({captcha:e})}},{key:"valid",value:function(){return!!this.state.captcha&!!this.state.password}},{key:"render",value:function(){var e=this.state.password,t=this.valid();return s.a.createElement(b,Object.assign({password:e,setPassword:this.setPassword},this.props,{onLogin:this.onLogin,captchaChange:this.captchaChange,valid:t}))}}]),a}(s.a.Component),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={data:null},e.loadData=e.loadData.bind(Object(i.a)(e)),e}return Object(c.a)(a,[{key:"loadData",value:function(e){var t=this;this.setState({loading:!0}),fetch("https://5vmdfnknql.execute-api.us-east-1.amazonaws.com/dev/hello",{method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json().then((function(a){200===e.status?t.setState({data:a,loading:!1}):t.setState({errorMessage:a.message,loading:!1})}))})).catch((function(e){console.error(e),t.setState({errorMessage:"Unknown error"})}))}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.loading,n=e.errorMessage;return s.a.createElement("div",null,null==t&&s.a.createElement(y,{onLogin:this.loadData,loading:a,errorMessage:n}),null!=t&&s.a.createElement(f,{data:t}))}}]),a}(s.a.Component);var N=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.4041220d.chunk.js.map