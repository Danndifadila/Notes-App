(() => {
  var n = {
      30: () => {
        class n extends HTMLElement {
          constructor() {
            super(), this.attachShadow({ mode: "open" });
            const n = document.createElement("template");
            (n.innerHTML =
              '\n        <style>\n            :host {\n                display: flex;\n                justify-content: center;\n                width: 60px;\n                height: 60px;\n                background-color: #dc3545;\n                border-radius: 1.1rem;\n                font-size: 2rem;\n                cursor: pointer;\n                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);\n                transition: transform 0.3s ease, background-color 0.3 ease;\n            }\n\n            :host(:hover) {\n                transform: scale(1.1);\n            }\n\n            :host([button-state="active"]) {\n                background-color: #2ecc40;\n            }\n        </style>\n        <slot>+</slot>\n        '),
              this.shadowRoot.appendChild(n.content.cloneNode(!0));
          }
          connectedCallback() {
            this.addEventListener("click", () => {
              const n = new CustomEvent("add-note", {
                bubbles: !0,
                composed: !0,
              });
              this.dispatchEvent(n),
                this.setAttribute("button-state", "active"),
                setTimeout(() => {
                  this.setAttribute("button-state", "idle");
                }, 300);
            });
          }
        }
        customElements.define("add-button", n);
      },
      56: (n, t, e) => {
        "use strict";
        n.exports = function (n) {
          var t = e.nc;
          t && n.setAttribute("nonce", t);
        };
      },
      72: (n) => {
        "use strict";
        var t = [];
        function e(n) {
          for (var e = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === n) {
              e = o;
              break;
            }
          return e;
        }
        function o(n, o) {
          for (var a = {}, i = [], s = 0; s < n.length; s++) {
            var c = n[s],
              d = o.base ? c[0] + o.base : c[0],
              l = a[d] || 0,
              u = "".concat(d, " ").concat(l);
            a[d] = l + 1;
            var m = e(u),
              p = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== m) t[m].references++, t[m].updater(p);
            else {
              var f = r(p, o);
              (o.byIndex = s),
                t.splice(s, 0, { identifier: u, updater: f, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function r(n, t) {
          var e = t.domAPI(t);
          return (
            e.update(n),
            function (t) {
              if (t) {
                if (
                  t.css === n.css &&
                  t.media === n.media &&
                  t.sourceMap === n.sourceMap &&
                  t.supports === n.supports &&
                  t.layer === n.layer
                )
                  return;
                e.update((n = t));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, r) {
          var a = o((n = n || []), (r = r || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var s = e(a[i]);
              t[s].references--;
            }
            for (var c = o(n, r), d = 0; d < a.length; d++) {
              var l = e(a[d]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            a = c;
          };
        };
      },
      106: (n, t, e) => {
        "use strict";
        e.d(t, { A: () => s });
        var o = e(601),
          r = e.n(o),
          a = e(314),
          i = e.n(a)()(r());
        i.push([
          n.id,
          ':root {\n  --primary-color: #4b0082;\n  --secondary-color: #9932cc;\n  --text-color: #ffffff;\n  --card-bg: #9932cc;\n  --add-button-bg: #dc3545;\n  --error-color: #ff3c00;\n  --delete-color: #ff1100;\n  --success-color: #2ecc40;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Arial", sans-serif;\n}\n\nbody {\n  background-color: var(--primary-color);\n  color: var(--text-color);\n  min-height: 100vh;\n  padding: 2rem;\n}\n\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n\nheader {\n  text-align: left;\n  margin-bottom: 2rem;\n}\n\nh1 {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n}\n\n.notes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n\nnote-card {\n  display: block;\n  background-color: var(--card-bg);\n  border-radius: 10px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease;\n  cursor: pointer;\n}\n\nnote-card:hover {\n  transform: translateY(-5px);\n}\n\nnote-card[note-status="invalid"] {\n  border: 2px solid var(--error-color);\n}\n\nnote-card[note-status="valid"] {\n  border: 2px solid var(--success-color);\n}\n\n.note-title {\n  font-size: 1.25rem;\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n}\n\n.note-content {\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n\n.add-button-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\nadd-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  background-color: var(--add-button-bg);\n  border-radius: 1.1rem;\n  color: white;\n  font-size: 2rem;\n  cursor: pointer;\n  border: none;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s ease, background-color 0.3s ease;\n}\n\nadd-button:hover {\n  transform: scale(1.1);\n}\n\nadd-button[button-state="active"] {\n  background-color: var(--success-color);\n}\n\n.floating-form-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1000;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  animation: fadeIn 0.3s ease forwards;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.floating-form {\n  background-color: var(--primary-color);\n  width: 90%;\n  max-width: 550px;\n  border-radius: 10px;\n  padding: 2rem;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);\n}\n\n.form-header {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n\n.form-header h2 {\n  font-size: 1.8rem;\n  color: var(--text-color);\n}\n\n.note-input-container {\n  background-color: var(--form-bg);\n  border-radius: 10px;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  min-height: 200px;\n}\n\n.note-input-title {\n  font-size: 1.5rem;\n  color: var(--form-text);\n  background: transparent;\n  border: none;\n  width: 100%;\n  padding: 0.5rem 0;\n  font-weight: bold;\n  outline: none;\n}\n\n.note-input-title::placeholder {\n  color: #777;\n  font-weight: normal;\n}\n\n.note-input-content {\n  font-size: 1rem;\n  color: var(--form-text);\n  background: transparent;\n  border: none;\n  width: 100%;\n  min-height: 120px;\n  resize: none;\n  outline: none;\n  padding: 0.5rem 0;\n  font-family: Arial, sans-serif;\n}\n\n.note-input-content::placeholder {\n  color: #777;\n}\n\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-start;\n}\n\n.save-button,\n.cancel-button {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 5px;\n  border: none;\n  color: white;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: transform 0.2s ease, opacity 0.2s ease;\n}\n\n.save-button {\n  background-color: var(--success-color);\n}\n\n.cancel-button {\n  background-color: var(--error-color);\n}\n\n#deleteButton {\n  background-color: var(--delete-color);\n}\n\n.save-button:hover,\n.cancel-button:hover {\n  transform: translateY(-2px);\n}\n\n.save-button:active,\n.cancel-button:active {\n  transform: translateY(0);\n  opacity: 0.9;\n}\n\n.validation-message {\n  color: var(--error-color);\n  font-size: 0.8rem;\n  padding: 0.25rem;\n  min-height: 1rem;\n}\n\nfooter {\n  text-align: center;\n  margin-top: 2rem;\n  padding-top: 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n',
          "",
        ]);
        const s = i;
      },
      113: (n) => {
        "use strict";
        n.exports = function (n, t) {
          if (t.styleSheet) t.styleSheet.cssText = n;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n));
          }
        };
      },
      152: () => {
        document.addEventListener("DOMContentLoaded", function () {
          const n = document.getElementById("notesGrid"),
            t = document.getElementById("addNoteBtn"),
            e = document.getElementById("floatingForm"),
            o = document.getElementById("noteForm"),
            r = document.getElementById("noteTitle"),
            a = document.getElementById("noteContent"),
            i = document.getElementById("deleteButton"),
            s = document.getElementById("saveButton"),
            c = document.getElementById("cancelButton"),
            d = document.getElementById("loading");
          let l = null;
          const u = "https://notes-api.dicoding.dev/v2";
          async function m() {
            var t;
            (undefined.style.display = "block"), (n.innerHTML = "");
            try {
              const o = await fetch(`${u}/notes`);
              if (!o.ok) throw new Error("Failed to fetch notes");
              const { data: d } = await o.json();
              (t = d),
                (n.innerHTML = ""),
                t.forEach((t) => {
                  const o = document.createElement("note-card");
                  o.setAttribute("note-id", t.id),
                    o.setAttribute("note-title", t.title),
                    o.setAttribute("note-content", t.body),
                    o.setAttribute(
                      "note-status",
                      t.archived ? "Archived" : "Active",
                    ),
                    o.addEventListener("click", () =>
                      (function (n) {
                        (r.value = n.title),
                          (a.value = n.body),
                          (l = n.id),
                          (e.style.display = "flex"),
                          (s.style.display = "none"),
                          (i.style.display = "inline-block"),
                          (c.style.display = "inline-block");
                      })(t),
                    ),
                    n.appendChild(o);
                });
            } catch (n) {
              console.error("Error fetching notes:", n);
            } finally {
              p();
            }
          }
          function p(n) {
            n.style.display = "none";
          }
          function f() {
            (e.style.display = "none"), (l = null);
          }
          t.addEventListener("click", function () {
            o.reset(),
              (l = null),
              (e.style.display = "flex"),
              (s.textContent = "Save"),
              (s.style.display = "inline-block"),
              (i.style.display = "none"),
              (c.style.display = "inline-block");
          }),
            s.addEventListener("click", s),
            i.addEventListener("click", async function () {
              if (l)
                try {
                  if (
                    !(await fetch(`${u}/notes/${l}`, { method: "DELETE" })).ok
                  )
                    throw new Error("Failed to delete note");
                  await m(), f();
                } catch (n) {
                  console.error("Error deleting note:", n);
                }
            }),
            c.addEventListener("click", f),
            o.addEventListener("submit", async function (n) {
              n.preventDefault();
              const t = r.value.trim(),
                e = a.value.trim();
              if (t && e)
                try {
                  if (
                    !(
                      await fetch(`${u}/notes`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ title: t, body: e }),
                      })
                    ).ok
                  )
                    throw new Error(result.message || "Failed to add note");
                  p(d), await m(), f();
                } catch (n) {
                  console.error("Error adding note:", n);
                }
              else console.log("Title or body empty!");
            }),
            e.addEventListener("click", (n) => {
              n.target === e && f();
            }),
            e.addEventListener("click", (n) => {
              n.target === e && f();
            }),
            m();
        });
      },
      179: (n, t, e) => {
        "use strict";
        e.d(t, { A: () => s });
        var o = e(601),
          r = e.n(o),
          a = e(314),
          i = e.n(a)()(r());
        i.push([
          n.id,
          "/* Media queries for responsiveness */\n@media (max-width: 768px) {\n  .notes-grid {\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  }\n}\n\n@media (max-width: 480px) {\n  body {\n    padding: 1rem;\n  }\n\n  .notes-grid {\n    grid-template-columns: 1fr;\n  }\n\n  h1 {\n    font-size: 2rem;\n  }\n\n  .floating-form {\n    width: 95%;\n    padding: 1.5rem;\n  }\n\n  .form-actions {\n    flex-direction: column;\n  }\n}\n",
          "",
        ]);
        const s = i;
      },
      314: (n) => {
        "use strict";
        n.exports = function (n) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = "",
                  o = void 0 !== t[5];
                return (
                  t[4] && (e += "@supports (".concat(t[4], ") {")),
                  t[2] && (e += "@media ".concat(t[2], " {")),
                  o &&
                    (e += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {",
                    )),
                  (e += n(t)),
                  o && (e += "}"),
                  t[2] && (e += "}"),
                  t[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (t.i = function (n, e, o, r, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (o)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var d = 0; d < n.length; d++) {
                var l = [].concat(n[d]);
                (o && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  e &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = e))
                      : (l[2] = e)),
                  r &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = r))
                      : (l[4] = "".concat(r))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      540: (n) => {
        "use strict";
        n.exports = function (n) {
          var t = document.createElement("style");
          return n.setAttributes(t, n.attributes), n.insert(t, n.options), t;
        };
      },
      591: () => {
        class n extends HTMLElement {
          constructor() {
            super(), this.attachShadow({ mode: "open" });
            const n = document.createElement("template");
            (n.innerHTML =
              '\n            <style>\n            :host {\n                display: block;\n                background-color: #9932cc;\n                border-radius: 10px;\n                padding: 1.5rem;\n                box-shadow: 0 4px 6px rgba(0, 0, 0, 0, 0.1);\n                transition: transform 0.3s ease;\n                cursor: pointer;\n                color: white;\n            }\n\n            :host(:hover) {\n                transform: translateY(-5px);\n            }\n\n            :host([note-status="invalid"]){\n                border: 2px solid #ff4136;\n            }\n\n            .note-title {\n                font-size: 1.25rem;\n                margin-bottom: 0.5rem;\n                font-weight: bold;\n            }\n\n            .note-content {\n                font-size: 0.9rem;\n                line-height: 1.5;\n            }\n            </style>\n            <div class="note-title"></div>\n            <div class="note-content"></div>\n        '),
              this.shadowRoot.appendChild(n.content.cloneNode(!0));
          }
          connectedCallback() {
            this.render(),
              this.addEventListener("click", () => {
                this.editNote();
              });
          }
          static get observedAttributes() {
            return ["note-title", "note-content", "note-status", "note-id"];
          }
          attributeChandeCallback(n, t, e) {
            this.render();
          }
          render() {
            const n = this.shadowRoot.querySelector(".note-title"),
              t = this.shadowRoot.querySelector(".note-content");
            n &&
              t &&
              ((n.textContent = this.getAttribute("note-title") || "Untilted"),
              (t.textContent =
                this.getAttribute("note-content") || "No Content"));
          }
          editNote() {
            const n = this.getAttribute("note-title"),
              t = this.getAttribute("note-content"),
              e = new CustomEvent("edit-note", {
                detail: { title: n, body: t },
                bubbles: !0,
                composed: !0,
              });
            this.dispatchEvent(e);
          }
        }
        customElements.define("note-card", n);
      },
      601: (n) => {
        "use strict";
        n.exports = function (n) {
          return n[1];
        };
      },
      659: (n) => {
        "use strict";
        var t = {};
        n.exports = function (n, e) {
          var o = (function (n) {
            if (void 0 === t[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              t[n] = e;
            }
            return t[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          o.appendChild(e);
        };
      },
      821: () => {
        class n extends HTMLElement {
          constructor() {
            super(),
              (this.innerHTML =
                "\n        <h1>\n            My Notes \n        </h1>\n        ");
          }
        }
        customElements.define("main-header", n);
      },
      825: (n) => {
        "use strict";
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, t, e) {
                var o = "";
                e.supports && (o += "@supports (".concat(e.supports, ") {")),
                  e.media && (o += "@media ".concat(e.media, " {"));
                var r = void 0 !== e.layer;
                r &&
                  (o += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {",
                  )),
                  (o += e.css),
                  r && (o += "}"),
                  e.media && (o += "}"),
                  e.supports && (o += "}");
                var a = e.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  t.styleTagTransform(o, n, t.options);
              })(t, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(t);
            },
          };
        };
      },
    },
    t = {};
  function e(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var a = (t[o] = { id: o, exports: {} });
    return n[o](a, a.exports, e), a.exports;
  }
  (e.n = (n) => {
    var t = n && n.__esModule ? () => n.default : () => n;
    return e.d(t, { a: t }), t;
  }),
    (e.d = (n, t) => {
      for (var o in t)
        e.o(t, o) &&
          !e.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: t[o] });
    }),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (e.nc = void 0),
    (() => {
      "use strict";
      e(591), e(30), e(152), e(821);
      var n = e(72),
        t = e.n(n),
        o = e(825),
        r = e.n(o),
        a = e(659),
        i = e.n(a),
        s = e(56),
        c = e.n(s),
        d = e(540),
        l = e.n(d),
        u = e(113),
        m = e.n(u),
        p = e(106),
        f = {};
      (f.styleTagTransform = m()),
        (f.setAttributes = c()),
        (f.insert = i().bind(null, "head")),
        (f.domAPI = r()),
        (f.insertStyleElement = l()),
        t()(p.A, f),
        p.A && p.A.locals && p.A.locals;
      var h = e(179),
        b = {};
      (b.styleTagTransform = m()),
        (b.setAttributes = c()),
        (b.insert = i().bind(null, "head")),
        (b.domAPI = r()),
        (b.insertStyleElement = l()),
        t()(h.A, b),
        h.A && h.A.locals && h.A.locals;
    })();
})();
