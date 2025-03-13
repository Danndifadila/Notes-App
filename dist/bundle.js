(()=>{var n={30:()=>{class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const n=document.createElement("template");n.innerHTML='\n        <style>\n            :host {\n                display: flex;\n                justify-content: center;\n                width: 60px;\n                height: 60px;\n                background-color: #dc3545;\n                border-radius: 1.1rem;\n                font-size: 2rem;\n                cursor: pointer;\n                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);\n                transition: transform 0.3s ease, background-color 0.3 ease;\n            }\n\n            :host(:hover) {\n                transform: scale(1.1);\n            }\n\n            :host([button-state="active"]) {\n                background-color: #2ecc40;\n            }\n        </style>\n        <slot>+</slot>\n        ',this.shadowRoot.appendChild(n.content.cloneNode(!0))}connectedCallback(){this.addEventListener("click",(()=>{const n=new CustomEvent("add-note",{bubbles:!0,composed:!0});this.dispatchEvent(n),this.setAttribute("button-state","active"),setTimeout((()=>{this.setAttribute("button-state","idle")}),300)}))}}customElements.define("add-button",n)},56:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},72:n=>{"use strict";var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],c=o.base?d[0]+o.base:d[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var m=e(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var h=r(p,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);t[s].references--}for(var d=o(n,r),c=0;c<i.length;c++){var l=e(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},106:(n,t,e)=>{"use strict";e.d(t,{A:()=>s});var o=e(601),r=e.n(o),i=e(314),a=e.n(i)()(r());a.push([n.id,':root {\n  --primary-color: #4b0082;\n  --secondary-color: #9932cc;\n  --text-color: #ffffff;\n  --card-bg: #9932cc;\n  --add-button-bg: #dc3545;\n  --error-color: #ff4136;\n  --success-color: #2ecc40;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Arial", sans-serif;\n}\n\nbody {\n  background-color: var(--primary-color);\n  color: var(--text-color);\n  min-height: 100vh;\n  padding: 2rem;\n}\n\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n\nheader {\n  text-align: left;\n  margin-bottom: 2rem;\n}\n\nh1 {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n}\n\n.notes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n\nnote-card {\n  display: block;\n  background-color: var(--card-bg);\n  border-radius: 10px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease;\n  cursor: pointer;\n}\n\nnote-card:hover {\n  transform: translateY(-5px);\n}\n\nnote-card[note-status="invalid"] {\n  border: 2px solid var(--error-color);\n}\n\nnote-card[note-status="valid"] {\n  border: 2px solid var(--success-color);\n}\n\n.note-title {\n  font-size: 1.25rem;\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n}\n\n.note-content {\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n\n.add-button-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\nadd-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  background-color: var(--add-button-bg);\n  border-radius: 1.1rem;\n  color: white;\n  font-size: 2rem;\n  cursor: pointer;\n  border: none;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s ease, background-color 0.3s ease;\n}\n\nadd-button:hover {\n  transform: scale(1.1);\n}\n\nadd-button[button-state="active"] {\n  background-color: var(--success-color);\n}\n\n.floating-form-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1000;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  animation: fadeIn 0.3s ease forwards;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.floating-form {\n  background-color: var(--primary-color);\n  width: 90%;\n  max-width: 550px;\n  border-radius: 10px;\n  padding: 2rem;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);\n}\n\n.form-header {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n\n.form-header h2 {\n  font-size: 1.8rem;\n  color: var(--text-color);\n}\n\n.note-input-container {\n  background-color: var(--form-bg);\n  border-radius: 10px;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  min-height: 200px;\n}\n\n.note-input-title {\n  font-size: 1.5rem;\n  color: var(--form-text);\n  background: transparent;\n  border: none;\n  width: 100%;\n  padding: 0.5rem 0;\n  font-weight: bold;\n  outline: none;\n}\n\n.note-input-title::placeholder {\n  color: #777;\n  font-weight: normal;\n}\n\n.note-input-content {\n  font-size: 1rem;\n  color: var(--form-text);\n  background: transparent;\n  border: none;\n  width: 100%;\n  min-height: 120px;\n  resize: none;\n  outline: none;\n  padding: 0.5rem 0;\n  font-family: Arial, sans-serif;\n}\n\n.note-input-content::placeholder {\n  color: #777;\n}\n\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-start;\n}\n\n.save-button,\n.cancel-button {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 5px;\n  border: none;\n  color: white;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: transform 0.2s ease, opacity 0.2s ease;\n}\n\n.save-button {\n  background-color: var(--success-color);\n}\n\n.cancel-button {\n  background-color: var(--error-color);\n}\n\n.save-button:hover,\n.cancel-button:hover {\n  transform: translateY(-2px);\n}\n\n.save-button:active,\n.cancel-button:active {\n  transform: translateY(0);\n  opacity: 0.9;\n}\n\n.validation-message {\n  color: var(--error-color);\n  font-size: 0.8rem;\n  padding: 0.25rem;\n  min-height: 1rem;\n}\n\nfooter {\n  text-align: center;\n  margin-top: 2rem;\n  padding-top: 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n',""]);const s=a},113:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},152:()=>{document.addEventListener("DOMContentLoaded",(function(){const n=document.getElementById("notesGrid"),t=document.getElementById("addNoteBtn"),e=document.getElementById("floatingForm"),o=document.getElementById("cancelButton"),r=document.getElementById("noteForm"),i=document.getElementById("noteTitle"),a=document.getElementById("noteContent"),s=document.getElementById("titleValidation"),d=document.getElementById("contentValidation");let c=null;const l=[{id:"notes-jT-jjsyz61J8XKiI",title:"Welcome to Notes, Dimas!",body:"Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",createdAt:"2022-07-28T10:03:12.594Z",archived:!1},{id:"notes-aB-cdefg12345",title:"Meeting Agenda",body:"Discuss project updates and assign tasks for the upcoming week.",createdAt:"2022-08-05T15:30:00.000Z",archived:!1},{id:"notes-XyZ-789012345",title:"Shopping List",body:"Milk, eggs, bread, fruits, and vegetables.",createdAt:"2022-08-10T08:45:23.120Z",archived:!1},{id:"notes-1a-2b3c4d5e6f",title:"Personal Goals",body:"Read two books per month, exercise three times a week, learn a new language.",createdAt:"2022-08-15T18:12:55.789Z",archived:!1},{id:"notes-LMN-456789",title:"Recipe: Spaghetti Bolognese",body:"Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",createdAt:"2022-08-20T12:30:40.200Z",archived:!1},{id:"notes-QwErTyUiOp",title:"Workout Routine",body:"Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",createdAt:"2022-08-25T09:15:17.890Z",archived:!1},{id:"notes-abcdef-987654",title:"Book Recommendations",body:"1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",createdAt:"2022-09-01T14:20:05.321Z",archived:!1},{id:"notes-zyxwv-54321",title:"Daily Reflections",body:"Write down three positive things that happened today and one thing to improve tomorrow.",createdAt:"2022-09-07T20:40:30.150Z",archived:!1},{id:"notes-poiuyt-987654",title:"Travel Bucket List",body:"1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",createdAt:"2022-09-15T11:55:44.678Z",archived:!1},{id:"notes-asdfgh-123456",title:"Coding Projects",body:"1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",createdAt:"2022-09-20T17:10:12.987Z",archived:!1},{id:"notes-5678-abcd-efgh",title:"Project Deadline",body:"Complete project tasks by the deadline on October 1st.",createdAt:"2022-09-28T14:00:00.000Z",archived:!1},{id:"notes-9876-wxyz-1234",title:"Health Checkup",body:"Schedule a routine health checkup with the doctor.",createdAt:"2022-10-05T09:30:45.600Z",archived:!1},{id:"notes-qwerty-8765-4321",title:"Financial Goals",body:"1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",createdAt:"2022-10-12T12:15:30.890Z",archived:!1},{id:"notes-98765-54321-12345",title:"Holiday Plans",body:"Research and plan for the upcoming holiday destination.",createdAt:"2022-10-20T16:45:00.000Z",archived:!1},{id:"notes-1234-abcd-5678",title:"Language Learning",body:"Practice Spanish vocabulary for 30 minutes every day.",createdAt:"2022-10-28T08:00:20.120Z",archived:!1}];function u(){n.innerHTML="",l.forEach((t=>{const e=document.createElement("note-card");e.setAttribute("note-id",t.id),e.setAttribute("note-title",t.title),e.setAttribute("note-content",t.body),e.setAttribute("note-status",function(n){return n.title.trim().lenght>0&&n.body.trim().lenght>0}(t)?"valid":"invalid"),n.appendChild(e)}))}function m(){e.style.display="none"}i.addEventListener("input",(function(){const n=i.value.trim();return 0===n.lenght?(s.textContent="Title is required",!1):n.lenght<4?(s.textContent="Title must be at least 4 characters",!1):(s.textContent="",!0)})),a.addEventListener("input",(function(){const n=a.value.trim();return 0===n.lenght?(d.textCOntent="Content is required",!1):n.lenght<10?(d.textContent="Content must be at least 10 character",!1):(d.textContent="",!0)})),t.addEventListener("add-note",(function(){r.reset(),c=null,e.style.display="flex",s.textContent="",d.textContent="",i.focus()})),document.addEventListener("edit-note",(n=>{const{id:t,title:o,body:r}=n.detail;var u;l.find((n=>n.id==t)),u=n.detail,i.value=u.title,a.value=u.body,c=u.id,e.style.display="flex",s.textContent="",d.textContent="",i.focus()})),o.addEventListener("click",m),r.addEventListener("submit",(function(n){console.log("Saving Note..."),n.preventDefault();const t=i.value.trim(),e=a.value.trim();if(t&&e){if(c){console.log("Editing existing note, ID:",c);const n=l.findIndex((n=>n.id===c));-1!==n&&(l[n]={...l[n],title:t,body:e})}else l.length>0&&Math.max(...l.map((n=>n.id)));u(),m()}else console.log("Title or body is empty!")})),e.addEventListener("click",(n=>{n.target===e&&m()})),u()}))},179:(n,t,e)=>{"use strict";e.d(t,{A:()=>s});var o=e(601),r=e.n(o),i=e(314),a=e.n(i)()(r());a.push([n.id,"/* Media queries for responsiveness */\n@media (max-width: 768px) {\n  .notes-grid {\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  }\n}\n\n@media (max-width: 480px) {\n  body {\n    padding: 1rem;\n  }\n\n  .notes-grid {\n    grid-template-columns: 1fr;\n  }\n\n  h1 {\n    font-size: 2rem;\n  }\n\n  .floating-form {\n    width: 95%;\n    padding: 1.5rem;\n  }\n\n  .form-actions {\n    flex-direction: column;\n  }\n}\n",""]);const s=a},314:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},540:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},591:()=>{class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const n=document.createElement("template");n.innerHTML='\n            <style>\n            :host {\n                display: block;\n                background-color: #9932cc;\n                border-radius: 10px;\n                padding: 1.5rem;\n                box-shadow: 0 4px 6px rgba(0, 0, 0, 0, 0.1);\n                transition: transform 0.3s ease;\n                cursor: pointer;\n                color: white;\n            }\n\n            :host(:hover) {\n                transform: translateY(-5px);\n            }\n\n            :host([note-status="invalid"]){\n                border: 2px solid #ff4136;\n            }\n\n            .note-title {\n                font-size: 1.25rem;\n                margin-bottom: 0.5rem;\n                font-weight: bold;\n            }\n\n            .note-content {\n                font-size: 0.9rem;\n                line-height: 1.5;\n            }\n            </style>\n            <div class="note-title"></div>\n            <div class="note-content"></div>\n        ',this.shadowRoot.appendChild(n.content.cloneNode(!0))}connectedCallback(){this.render(),this.addEventListener("click",(()=>{this.editNote()}))}static get observedAttributes(){return["note-title","note-content","note-status","note-id"]}attributeChandeCallback(n,t,e){this.render()}render(){const n=this.shadowRoot.querySelector(".note-title"),t=this.shadowRoot.querySelector(".note-content");n&&t&&(n.textContent=this.getAttribute("note-title")||"Untilted",t.textContent=this.getAttribute("note-content")||"No Content")}editNote(){const n=this.getAttribute("note-title"),t=this.getAttribute("note-content"),e=new CustomEvent("edit-note",{detail:{title:n,body:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}}customElements.define("note-card",n)},601:n=>{"use strict";n.exports=function(n){return n[1]}},659:n=>{"use strict";var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},821:()=>{class n extends HTMLElement{constructor(){super(),this.innerHTML="\n        <h1>\n            My Notes \n        </h1>\n        "}}customElements.define("main-header",n)},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{"use strict";e(591),e(30),e(152),e(821);var n=e(72),t=e.n(n),o=e(825),r=e.n(o),i=e(659),a=e.n(i),s=e(56),d=e.n(s),c=e(540),l=e.n(c),u=e(113),m=e.n(u),p=e(106),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),t()(p.A,h),p.A&&p.A.locals&&p.A.locals;var f=e(179),b={};b.styleTagTransform=m(),b.setAttributes=d(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=l(),t()(f.A,b),f.A&&f.A.locals&&f.A.locals})()})();