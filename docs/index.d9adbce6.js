// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== "undefined"
      ? globalThis
      : typeof self !== "undefined"
      ? self
      : typeof window !== "undefined"
      ? window
      : typeof global !== "undefined"
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === "function" &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== "undefined" &&
    typeof module.require === "function" &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === "function" &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === "string") {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = "MODULE_NOT_FOUND";
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, "root", {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})(
  {
    fAbN0: [
      function (require, module, exports) {
        var global = arguments[3];
        var HMR_HOST = null;
        var HMR_PORT = null;
        var HMR_SECURE = false;
        var HMR_ENV_HASH = "d6ea1d42532a7575";
        module.bundle.HMR_BUNDLE_ID = "f6af16e8d9adbce6";
        ("use strict");
        /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
        var OldModule = module.bundle.Module;
        function Module(moduleName) {
          OldModule.call(this, moduleName);
          this.hot = {
            data: module.bundle.hotData[moduleName],
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function (fn) {
              this._acceptCallbacks.push(fn || function () {});
            },
            dispose: function (fn) {
              this._disposeCallbacks.push(fn);
            },
          };
          module.bundle.hotData[moduleName] = undefined;
        }
        module.bundle.Module = Module;
        module.bundle.hotData = {};
        var checkedAssets /*: {|[string]: boolean|} */,
          assetsToDispose /*: Array<[ParcelRequire, string]> */,
          assetsToAccept /*: Array<[ParcelRequire, string]> */;
        function getHostname() {
          return (
            HMR_HOST ||
            (location.protocol.indexOf("http") === 0
              ? location.hostname
              : "localhost")
          );
        }
        function getPort() {
          return HMR_PORT || location.port;
        }
        // eslint-disable-next-line no-redeclare
        var parent = module.bundle.parent;
        if (
          (!parent || !parent.isParcelRequire) &&
          typeof WebSocket !== "undefined"
        ) {
          var hostname = getHostname();
          var port = getPort();
          var protocol =
            HMR_SECURE ||
            (location.protocol == "https:" &&
              !/localhost|127.0.0.1|0.0.0.0/.test(hostname))
              ? "wss"
              : "ws";
          var ws;
          try {
            ws = new WebSocket(
              protocol + "://" + hostname + (port ? ":" + port : "") + "/"
            );
          } catch (err) {
            if (err.message) console.error(err.message);
            ws = {};
          }
          // Web extension context
          var extCtx =
            typeof browser === "undefined"
              ? typeof chrome === "undefined"
                ? null
                : chrome
              : browser;
          // Safari doesn't support sourceURL in error stacks.
          // eval may also be disabled via CSP, so do a quick check.
          var supportsSourceURL = false;
          try {
            (0, eval)('throw new Error("test"); //# sourceURL=test.js');
          } catch (err) {
            supportsSourceURL = err.stack.includes("test.js");
          }
          // $FlowFixMe
          ws.onmessage = async function (event /*: {data: string, ...} */) {
            checkedAssets = {} /*: {|[string]: boolean|} */;
            assetsToAccept = [];
            assetsToDispose = [];
            var data /*: HMRMessage */ = JSON.parse(event.data);
            if (data.type === "update") {
              // Remove error overlay if there is one
              if (typeof document !== "undefined") removeErrorOverlay();
              let assets = data.assets.filter(
                (asset) => asset.envHash === HMR_ENV_HASH
              );
              // Handle HMR Update
              let handled = assets.every((asset) => {
                return (
                  asset.type === "css" ||
                  (asset.type === "js" &&
                    hmrAcceptCheck(
                      module.bundle.root,
                      asset.id,
                      asset.depsByBundle
                    ))
                );
              });
              if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (
                  typeof window !== "undefined" &&
                  typeof CustomEvent !== "undefined"
                )
                  window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {}; /*: {|[string]: boolean|} */
                for (let i = 0; i < assetsToDispose.length; i++) {
                  let id = assetsToDispose[i][1];
                  if (!processedAssets[id]) {
                    hmrDispose(assetsToDispose[i][0], id);
                    processedAssets[id] = true;
                  }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for (let i = 0; i < assetsToAccept.length; i++) {
                  let id = assetsToAccept[i][1];
                  if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                  }
                }
              } else fullReload();
            }
            if (data.type === "error") {
              // Log parcel errors to console
              for (let ansiDiagnostic of data.diagnostics.ansi) {
                let stack = ansiDiagnostic.codeframe
                  ? ansiDiagnostic.codeframe
                  : ansiDiagnostic.stack;
                console.error(
                  "\uD83D\uDEA8 [parcel]: " +
                    ansiDiagnostic.message +
                    "\n" +
                    stack +
                    "\n\n" +
                    ansiDiagnostic.hints.join("\n")
                );
              }
              if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
              }
            }
          };
          ws.onerror = function (e) {
            if (e.message) console.error(e.message);
          };
          ws.onclose = function () {
            console.warn(
              "[parcel] \uD83D\uDEA8 Connection to the HMR server was lost"
            );
          };
        }
        function removeErrorOverlay() {
          var overlay = document.getElementById(OVERLAY_ID);
          if (overlay) {
            overlay.remove();
            console.log("[parcel] \u2728 Error resolved");
          }
        }
        function createErrorOverlay(diagnostics) {
          var overlay = document.createElement("div");
          overlay.id = OVERLAY_ID;
          let errorHTML =
            '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
          for (let diagnostic of diagnostics) {
            let stack = diagnostic.frames.length
              ? diagnostic.frames.reduce((p, frame) => {
                  return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(
                    frame.location
                  )}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${
                    frame.location
                  }</a>
${frame.code}`;
                }, "")
              : diagnostic.stack;
            errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints
            .map((hint) => "<div>\uD83D\uDCA1 " + hint + "</div>")
            .join("")}
        </div>
        ${
          diagnostic.documentation
            ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>`
            : ""
        }
      </div>
    `;
          }
          errorHTML += "</div>";
          overlay.innerHTML = errorHTML;
          return overlay;
        }
        function fullReload() {
          if ("reload" in location) location.reload();
          else if (extCtx && extCtx.runtime && extCtx.runtime.reload)
            extCtx.runtime.reload();
        }
        function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
          var modules = bundle.modules;
          if (!modules) return [];
          var parents = [];
          var k, d, dep;
          for (k in modules)
            for (d in modules[k][1]) {
              dep = modules[k][1][d];
              if (
                dep === id ||
                (Array.isArray(dep) && dep[dep.length - 1] === id)
              )
                parents.push([bundle, k]);
            }
          if (bundle.parent)
            parents = parents.concat(getParents(bundle.parent, id));
          return parents;
        }
        function updateLink(link) {
          var href = link.getAttribute("href");
          if (!href) return;
          var newLink = link.cloneNode();
          newLink.onload = function () {
            if (link.parentNode !== null)
              // $FlowFixMe
              link.parentNode.removeChild(link);
          };
          newLink.setAttribute(
            "href", // $FlowFixMe
            href.split("?")[0] + "?" + Date.now()
          );
          // $FlowFixMe
          link.parentNode.insertBefore(newLink, link.nextSibling);
        }
        var cssTimeout = null;
        function reloadCSS() {
          if (cssTimeout) return;
          cssTimeout = setTimeout(function () {
            var links = document.querySelectorAll('link[rel="stylesheet"]');
            for (var i = 0; i < links.length; i++) {
              // $FlowFixMe[incompatible-type]
              var href /*: string */ = links[i].getAttribute("href");
              var hostname = getHostname();
              var servedFromHMRServer =
                hostname === "localhost"
                  ? new RegExp(
                      "^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" +
                        getPort()
                    ).test(href)
                  : href.indexOf(hostname + ":" + getPort());
              var absolute =
                /^https?:\/\//i.test(href) &&
                href.indexOf(location.origin) !== 0 &&
                !servedFromHMRServer;
              if (!absolute) updateLink(links[i]);
            }
            cssTimeout = null;
          }, 50);
        }
        function hmrDownload(asset) {
          if (asset.type === "js") {
            if (typeof document !== "undefined") {
              let script = document.createElement("script");
              script.src = asset.url + "?t=" + Date.now();
              if (asset.outputFormat === "esmodule") script.type = "module";
              return new Promise((resolve, reject) => {
                var _document$head;
                script.onload = () => resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null ||
                  _document$head === void 0 ||
                  _document$head.appendChild(script);
              });
            } else if (typeof importScripts === "function") {
              // Worker scripts
              if (asset.outputFormat === "esmodule")
                return import(asset.url + "?t=" + Date.now());
              else
                return new Promise((resolve, reject) => {
                  try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                  } catch (err) {
                    reject(err);
                  }
                });
            }
          }
        }
        async function hmrApplyUpdates(assets) {
          global.parcelHotUpdate = Object.create(null);
          let scriptsToRemove;
          try {
            // If sourceURL comments aren't supported in eval, we need to load
            // the update from the dev server over HTTP so that stack traces
            // are correct in errors/logs. This is much slower than eval, so
            // we only do it if needed (currently just Safari).
            // https://bugs.webkit.org/show_bug.cgi?id=137297
            // This path is also taken if a CSP disallows eval.
            if (!supportsSourceURL) {
              let promises = assets.map((asset) => {
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null ||
                  _hmrDownload === void 0
                  ? void 0
                  : _hmrDownload.catch((err) => {
                      // Web extension fix
                      if (
                        extCtx &&
                        extCtx.runtime &&
                        extCtx.runtime.getManifest().manifest_version == 3 &&
                        typeof ServiceWorkerGlobalScope != "undefined" &&
                        global instanceof ServiceWorkerGlobalScope
                      ) {
                        extCtx.runtime.reload();
                        return;
                      }
                      throw err;
                    });
              });
              scriptsToRemove = await Promise.all(promises);
            }
            assets.forEach(function (asset) {
              hmrApply(module.bundle.root, asset);
            });
          } finally {
            delete global.parcelHotUpdate;
            if (scriptsToRemove)
              scriptsToRemove.forEach((script) => {
                if (script) {
                  var _document$head2;
                  (_document$head2 = document.head) === null ||
                    _document$head2 === void 0 ||
                    _document$head2.removeChild(script);
                }
              });
          }
        }
        function hmrApply(bundle /*: ParcelRequire */, asset /*:  HMRAsset */) {
          var modules = bundle.modules;
          if (!modules) return;
          if (asset.type === "css") reloadCSS();
          else if (asset.type === "js") {
            let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
            if (deps) {
              if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for (let dep in oldDeps)
                  if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                  }
              }
              if (supportsSourceURL)
                // Global eval. We would use `new Function` here but browser
                // support for source maps is better with eval.
                (0, eval)(asset.output);
              // $FlowFixMe
              let fn = global.parcelHotUpdate[asset.id];
              modules[asset.id] = [fn, deps];
            } else if (bundle.parent) hmrApply(bundle.parent, asset);
          }
        }
        function hmrDelete(bundle, id) {
          let modules = bundle.modules;
          if (!modules) return;
          if (modules[id]) {
            // Collect dependencies that will become orphaned when this module is deleted.
            let deps = modules[id][1];
            let orphans = [];
            for (let dep in deps) {
              let parents = getParents(module.bundle.root, deps[dep]);
              if (parents.length === 1) orphans.push(deps[dep]);
            }
            // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
            delete modules[id];
            delete bundle.cache[id];
            // Now delete the orphans.
            orphans.forEach((id) => {
              hmrDelete(module.bundle.root, id);
            });
          } else if (bundle.parent) hmrDelete(bundle.parent, id);
        }
        function hmrAcceptCheck(
          bundle /*: ParcelRequire */,
          id /*: string */,
          depsByBundle /*: ?{ [string]: { [string]: string } }*/
        ) {
          if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
          // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
          let parents = getParents(module.bundle.root, id);
          let accepted = false;
          while (parents.length > 0) {
            let v = parents.shift();
            let a = hmrAcceptCheckOne(v[0], v[1], null);
            if (a)
              // If this parent accepts, stop traversing upward, but still consider siblings.
              accepted = true;
            else {
              // Otherwise, queue the parents in the next level upward.
              let p = getParents(module.bundle.root, v[1]);
              if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
              }
              parents.push(...p);
            }
          }
          return accepted;
        }
        function hmrAcceptCheckOne(
          bundle /*: ParcelRequire */,
          id /*: string */,
          depsByBundle /*: ?{ [string]: { [string]: string } }*/
        ) {
          var modules = bundle.modules;
          if (!modules) return;
          if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
            // If we reached the root bundle without finding where the asset should go,
            // there's nothing to do. Mark as "accepted" so we don't reload the page.
            if (!bundle.parent) return true;
            return hmrAcceptCheck(bundle.parent, id, depsByBundle);
          }
          if (checkedAssets[id]) return true;
          checkedAssets[id] = true;
          var cached = bundle.cache[id];
          assetsToDispose.push([bundle, id]);
          if (!cached || (cached.hot && cached.hot._acceptCallbacks.length)) {
            assetsToAccept.push([bundle, id]);
            return true;
          }
        }
        function hmrDispose(bundle /*: ParcelRequire */, id /*: string */) {
          var cached = bundle.cache[id];
          bundle.hotData[id] = {};
          if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
          if (cached && cached.hot && cached.hot._disposeCallbacks.length)
            cached.hot._disposeCallbacks.forEach(function (cb) {
              cb(bundle.hotData[id]);
            });
          delete bundle.cache[id];
        }
        function hmrAccept(bundle /*: ParcelRequire */, id /*: string */) {
          // Execute the module.
          bundle(id);
          // Run the accept callbacks in the new version of the module.
          var cached = bundle.cache[id];
          if (cached && cached.hot && cached.hot._acceptCallbacks.length)
            cached.hot._acceptCallbacks.forEach(function (cb) {
              var assetsToAlsoAccept = cb(function () {
                return getParents(module.bundle.root, id);
              });
              if (assetsToAlsoAccept && assetsToAccept.length) {
                assetsToAlsoAccept.forEach(function (a) {
                  hmrDispose(a[0], a[1]);
                });
                // $FlowFixMe[method-unbinding]
                assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
              }
            });
        }
      },
      {},
    ],
    fgDBQ: [
      function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        var _anchorLink = require("./modules/AnchorLink");
        var _anchorLinkDefault = parcelHelpers.interopDefault(_anchorLink);
        var _demo6 = require("./modules/Demo6");
        var _demo6Default = parcelHelpers.interopDefault(_demo6);
        var _viewChange = require("./modules/ViewChange");
        var _viewChangeDefault = parcelHelpers.interopDefault(_viewChange);
        document.addEventListener("DOMContentLoaded", (event) => {
          const anchorLink = new (0, _anchorLinkDefault.default)();
          anchorLink.init();
          const demo6 = new (0, _demo6Default.default)();
          demo6.init();
          const viewChange = new (0, _viewChangeDefault.default)();
          viewChange.init();
        });
      },
      {
        "./modules/AnchorLink": "8jkx6",
        "./modules/Demo6": "7mR3k",
        "./modules/ViewChange": "9MqmP",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    "8jkx6": [
      function (require, module, exports) {
        /**
         * AnchorLink :
         *   アンカーリンクのスムーススクロール
         */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        var _smoothScroll = require("smooth-scroll");
        var _smoothScrollDefault = parcelHelpers.interopDefault(_smoothScroll);
        class AnchorLink {
          constructor() {
            this.body = document.querySelector("body");
            this.anchorLink = document.querySelectorAll('a[href^="#"]');
            this.scroll = new (0, _smoothScrollDefault.default)();
            this.offset = 0;
          }
          init() {
            if (!this.anchorLink) return;
            this.attachEvent();
          }
          attachEvent() {
            [...this.anchorLink].forEach((elem) => {
              elem.addEventListener(
                "click",
                (event) => {
                  const offset =
                    event.target.getAttribute("data-offset") || this.offset;
                  const anchor = event.target.getAttribute("href");
                  this.scroll.animateScroll(
                    document.querySelector(anchor),
                    false,
                    {
                      offset: offset,
                    }
                  );
                },
                false
              );
            });
          }
        }
        exports.default = AnchorLink;
      },
      {
        "smooth-scroll": "kATLk",
        "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
      },
    ],
    kATLk: [
      function (require, module, exports) {
        /*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */ var global =
          arguments[3];
        window.Element &&
          !Element.prototype.closest &&
          (Element.prototype.closest = function (e) {
            var t,
              n = (this.document || this.ownerDocument).querySelectorAll(e),
              o = this;
            do {
              for (t = n.length; 0 <= --t && n.item(t) !== o; );
            } while (t < 0 && (o = o.parentElement));
            return o;
          }),
          (function () {
            if ("function" == typeof window.CustomEvent) return;
            function e(e, t) {
              t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0,
              };
              var n = document.createEvent("CustomEvent");
              return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
            }
            (e.prototype = window.Event.prototype), (window.CustomEvent = e);
          })(),
          (function () {
            for (
              var r = 0, e = ["ms", "moz", "webkit", "o"], t = 0;
              t < e.length && !window.requestAnimationFrame;
              ++t
            )
              (window.requestAnimationFrame =
                window[e[t] + "RequestAnimationFrame"]),
                (window.cancelAnimationFrame =
                  window[e[t] + "CancelAnimationFrame"] ||
                  window[e[t] + "CancelRequestAnimationFrame"]);
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function (e, t) {
                var n = new Date().getTime(),
                  o = Math.max(0, 16 - (n - r)),
                  a = window.setTimeout(function () {
                    e(n + o);
                  }, o);
                return (r = n + o), a;
              }),
              window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (e) {
                  clearTimeout(e);
                });
          })(),
          (function (e, t) {
            "function" == typeof define && define.amd
              ? define([], function () {
                  return t(e);
                })
              : (module.exports = t(e));
          })(
            "undefined" != typeof global
              ? global
              : "undefined" != typeof window
              ? window
              : this,
            function (M) {
              "use strict";
              var q = {
                  ignore: "[data-scroll-ignore]",
                  header: null,
                  topOnEmptyHash: !0,
                  speed: 500,
                  speedAsDuration: !1,
                  durationMax: null,
                  durationMin: null,
                  clip: !0,
                  offset: 0,
                  easing: "easeInOutCubic",
                  customEasing: null,
                  updateURL: !0,
                  popstate: !0,
                  emitEvents: !0,
                },
                I = function () {
                  var n = {};
                  return (
                    Array.prototype.forEach.call(arguments, function (e) {
                      for (var t in e) {
                        if (!e.hasOwnProperty(t)) return;
                        n[t] = e[t];
                      }
                    }),
                    n
                  );
                },
                r = function (e) {
                  "#" === e.charAt(0) && (e = e.substr(1));
                  for (
                    var t,
                      n = String(e),
                      o = n.length,
                      a = -1,
                      r = "",
                      i = n.charCodeAt(0);
                    ++a < o;

                  ) {
                    if (0 === (t = n.charCodeAt(a)))
                      throw new InvalidCharacterError(
                        "Invalid character: the input contains U+0000."
                      );
                    (1 <= t && t <= 31) ||
                    127 == t ||
                    (0 === a && 48 <= t && t <= 57) ||
                    (1 === a && 48 <= t && t <= 57 && 45 === i)
                      ? (r += "\\" + t.toString(16) + " ")
                      : (r +=
                          128 <= t ||
                          45 === t ||
                          95 === t ||
                          (48 <= t && t <= 57) ||
                          (65 <= t && t <= 90) ||
                          (97 <= t && t <= 122)
                            ? n.charAt(a)
                            : "\\" + n.charAt(a));
                  }
                  return "#" + r;
                },
                F = function () {
                  return Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.offsetHeight,
                    document.body.clientHeight,
                    document.documentElement.clientHeight
                  );
                },
                L = function (e) {
                  var t;
                  return e
                    ? ((t = e),
                      parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop)
                    : 0;
                },
                x = function (e, t, n) {
                  0 === e && document.body.focus(),
                    n ||
                      (e.focus(),
                      document.activeElement !== e &&
                        (e.setAttribute("tabindex", "-1"),
                        e.focus(),
                        (e.style.outline = "none")),
                      M.scrollTo(0, t));
                },
                H = function (e, t, n, o) {
                  if (t.emitEvents && "function" == typeof M.CustomEvent) {
                    var a = new CustomEvent(e, {
                      bubbles: !0,
                      detail: {
                        anchor: n,
                        toggle: o,
                      },
                    });
                    document.dispatchEvent(a);
                  }
                };
              return function (o, e) {
                var b,
                  a,
                  A,
                  O,
                  C = {};
                (C.cancelScroll = function (e) {
                  cancelAnimationFrame(O),
                    (O = null),
                    e || H("scrollCancel", b);
                }),
                  (C.animateScroll = function (a, r, e) {
                    C.cancelScroll();
                    var i = I(b || q, e || {}),
                      c =
                        "[object Number]" === Object.prototype.toString.call(a),
                      t = c || !a.tagName ? null : a;
                    if (c || t) {
                      var s = M.pageYOffset;
                      i.header && !A && (A = document.querySelector(i.header));
                      var n,
                        o,
                        u,
                        l,
                        m,
                        d,
                        f,
                        h,
                        p = L(A),
                        g = c
                          ? a
                          : (function (e, t, n, o) {
                              var a = 0;
                              if (e.offsetParent)
                                for (
                                  ;
                                  (a += e.offsetTop), (e = e.offsetParent);

                                );
                              return (
                                (a = Math.max(a - t - n, 0)),
                                o && (a = Math.min(a, F() - M.innerHeight)),
                                a
                              );
                            })(
                              t,
                              p,
                              parseInt(
                                "function" == typeof i.offset
                                  ? i.offset(a, r)
                                  : i.offset,
                                10
                              ),
                              i.clip
                            ),
                        y = g - s,
                        v = F(),
                        w = 0,
                        S =
                          ((n = y),
                          (u = (o = i).speedAsDuration
                            ? o.speed
                            : Math.abs((n / 1e3) * o.speed)),
                          o.durationMax && u > o.durationMax
                            ? o.durationMax
                            : o.durationMin && u < o.durationMin
                            ? o.durationMin
                            : parseInt(u, 10)),
                        E = function (e) {
                          var t, n, o;
                          l || (l = e),
                            (w += e - l),
                            (d =
                              s +
                              y *
                                ((n = m =
                                  1 < (m = 0 === S ? 0 : w / S) ? 1 : m),
                                "easeInQuad" === (t = i).easing && (o = n * n),
                                "easeOutQuad" === t.easing && (o = n * (2 - n)),
                                "easeInOutQuad" === t.easing &&
                                  (o =
                                    n < 0.5 ? 2 * n * n : (4 - 2 * n) * n - 1),
                                "easeInCubic" === t.easing && (o = n * n * n),
                                "easeOutCubic" === t.easing &&
                                  (o = --n * n * n + 1),
                                "easeInOutCubic" === t.easing &&
                                  (o =
                                    n < 0.5
                                      ? 4 * n * n * n
                                      : (n - 1) * (2 * n - 2) * (2 * n - 2) +
                                        1),
                                "easeInQuart" === t.easing &&
                                  (o = n * n * n * n),
                                "easeOutQuart" === t.easing &&
                                  (o = 1 - --n * n * n * n),
                                "easeInOutQuart" === t.easing &&
                                  (o =
                                    n < 0.5
                                      ? 8 * n * n * n * n
                                      : 1 - 8 * --n * n * n * n),
                                "easeInQuint" === t.easing &&
                                  (o = n * n * n * n * n),
                                "easeOutQuint" === t.easing &&
                                  (o = 1 + --n * n * n * n * n),
                                "easeInOutQuint" === t.easing &&
                                  (o =
                                    n < 0.5
                                      ? 16 * n * n * n * n * n
                                      : 1 + 16 * --n * n * n * n * n),
                                t.customEasing && (o = t.customEasing(n)),
                                o || n)),
                            M.scrollTo(0, Math.floor(d)),
                            (function (e, t) {
                              var n = M.pageYOffset;
                              if (
                                e == t ||
                                n == t ||
                                (s < t && M.innerHeight + n) >= v
                              )
                                return (
                                  C.cancelScroll(!0),
                                  x(a, t, c),
                                  H("scrollStop", i, a, r),
                                  (O = l = null),
                                  true
                                );
                            })(d, g) ||
                              ((O = M.requestAnimationFrame(E)), (l = e));
                        };
                      0 === M.pageYOffset && M.scrollTo(0, 0),
                        (f = a),
                        (h = i),
                        c ||
                          (history.pushState &&
                            h.updateURL &&
                            history.pushState(
                              {
                                smoothScroll: JSON.stringify(h),
                                anchor: f.id,
                              },
                              document.title,
                              f === document.documentElement
                                ? "#top"
                                : "#" + f.id
                            )),
                        "matchMedia" in M &&
                        M.matchMedia("(prefers-reduced-motion)").matches
                          ? x(a, Math.floor(g), !1)
                          : (H("scrollStart", i, a, r),
                            C.cancelScroll(!0),
                            M.requestAnimationFrame(E));
                    }
                  });
                var t = function (e) {
                    if (
                      !e.defaultPrevented &&
                      !(
                        0 !== e.button ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey
                      ) &&
                      "closest" in e.target &&
                      (a = e.target.closest(o)) &&
                      "a" === a.tagName.toLowerCase() &&
                      !e.target.closest(b.ignore) &&
                      a.hostname === M.location.hostname &&
                      a.pathname === M.location.pathname &&
                      /#/.test(a.href)
                    ) {
                      var t, n;
                      try {
                        t = r(decodeURIComponent(a.hash));
                      } catch (e) {
                        t = r(a.hash);
                      }
                      if ("#" === t) {
                        if (!b.topOnEmptyHash) return;
                        n = document.documentElement;
                      } else n = document.querySelector(t);
                      (n = n || "#top" !== t ? n : document.documentElement) &&
                        (e.preventDefault(),
                        (function (e) {
                          if (
                            history.replaceState &&
                            e.updateURL &&
                            !history.state
                          ) {
                            var t = M.location.hash;
                            (t = t || ""),
                              history.replaceState(
                                {
                                  smoothScroll: JSON.stringify(e),
                                  anchor: t || M.pageYOffset,
                                },
                                document.title,
                                t || M.location.href
                              );
                          }
                        })(b),
                        C.animateScroll(n, a));
                    }
                  },
                  n = function (e) {
                    if (
                      null !== history.state &&
                      history.state.smoothScroll &&
                      history.state.smoothScroll === JSON.stringify(b)
                    ) {
                      var t = history.state.anchor;
                      ("string" == typeof t &&
                        t &&
                        !(t = document.querySelector(
                          r(history.state.anchor)
                        ))) ||
                        C.animateScroll(t, null, {
                          updateURL: !1,
                        });
                    }
                  };
                C.destroy = function () {
                  b &&
                    (document.removeEventListener("click", t, !1),
                    M.removeEventListener("popstate", n, !1),
                    C.cancelScroll(),
                    (O = A = a = b = null));
                };
                return (
                  (function () {
                    if (
                      !(
                        "querySelector" in document &&
                        "addEventListener" in M &&
                        "requestAnimationFrame" in M &&
                        "closest" in M.Element.prototype
                      )
                    )
                      throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                    C.destroy(),
                      (b = I(q, e || {})),
                      (A = b.header ? document.querySelector(b.header) : null),
                      document.addEventListener("click", t, !1),
                      b.updateURL &&
                        b.popstate &&
                        M.addEventListener("popstate", n, !1);
                  })(),
                  C
                );
              };
            }
          );
      },
      {},
    ],
    gkKU3: [
      function (require, module, exports) {
        exports.interopDefault = function (a) {
          return a && a.__esModule
            ? a
            : {
                default: a,
              };
        };
        exports.defineInteropFlag = function (a) {
          Object.defineProperty(a, "__esModule", {
            value: true,
          });
        };
        exports.exportAll = function (source, dest) {
          Object.keys(source).forEach(function (key) {
            if (
              key === "default" ||
              key === "__esModule" ||
              dest.hasOwnProperty(key)
            )
              return;
            Object.defineProperty(dest, key, {
              enumerable: true,
              get: function () {
                return source[key];
              },
            });
          });
          return dest;
        };
        exports.export = function (dest, destName, get) {
          Object.defineProperty(dest, destName, {
            enumerable: true,
            get: get,
          });
        };
      },
      {},
    ],
    "7mR3k": [
      function (require, module, exports) {
        /**
         * Demo6
         */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        class Demo6 {
          constructor() {
            this.toggler = document.querySelector("#hamburger");
            this.opnendName = "-opened";
            this.opened = false;
          }
          init() {
            if (!this.toggler) return;
            this.attachEvent();
          }
          attachEvent() {
            this.toggler.addEventListener("click", (e) => {
              this.opened = !this.opened;
              this.toggleState();
            });
          }
          toggleState() {
            // クラスの付け外し
            if (this.opened) this.toggler.classList.add(this.opnendName);
            else this.toggler.classList.remove(this.opnendName);
            // ariaの切り替え
            if (this.opened)
              this.toggler.setAttribute(
                "aria-label",
                "\u30E1\u30CB\u30E5\u30FC\u3092\u9589\u3058\u308B"
              );
            else
              this.toggler.setAttribute(
                "aria-label",
                "\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F"
              );
          }
        }
        exports.default = Demo6;
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
    "9MqmP": [
      function (require, module, exports) {
        /**
         * ViewChange
         */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        class ViewChange {
          constructor() {
            this.body = document.querySelector("body");
            this.toggler = document.querySelector("#toggleViewMode");
            this.demoViewName = "-demoView";
            this.demoView = false;
          }
          init() {
            if (!this.toggler) return;
            this.attachEvent();
          }
          attachEvent() {
            this.toggler.addEventListener("click", (e) => {
              this.demoView = !this.demoView;
              this.toggleState();
            });
          }
          toggleState() {
            // クラスの付け外し
            if (this.demoView) this.body.classList.add(this.demoViewName);
            else this.body.classList.remove(this.demoViewName);
            // ariaの切り替え
            if (this.demoView)
              this.toggler.textContent =
                "\u30C7\u30E2\u30E2\u30FC\u30C9\u3092\u3084\u3081\u308B";
            else
              this.toggler.textContent =
                "\u30C7\u30E2\u30E2\u30FC\u30C9\u306B\u3059\u308B";
          }
        }
        exports.default = ViewChange;
      },
      { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" },
    ],
  },
  ["fAbN0", "fgDBQ"],
  "fgDBQ",
  "parcelRequire9a08"
);

//# sourceMappingURL=index.d9adbce6.js.map
