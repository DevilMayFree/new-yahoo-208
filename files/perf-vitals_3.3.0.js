!function(){"use strict";var e,t=-1,n=function(e){addEventListener("pageshow",(function(n){n.persisted&&(t=n.timeStamp,e(n))}),!0)},r=function(){var e=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(e&&e.responseStart>0&&e.responseStart<performance.now())return e},i=function(){var e=r();return e&&e.activationStart||0},a=function(e,n){var a=r(),o="navigate";return t>=0?o="back-forward-cache":a&&(document.prerendering||i()>0?o="prerender":document.wasDiscarded?o="restore":a.type&&(o=a.type.replace(/_/g,"-"))),{name:e,value:void 0===n?-1:n,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:o}},o=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},c=function(e,t,n,r){var i,a;return function(o){t.value>=0&&(o||r)&&((a=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=a,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},u=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},s=function(e){document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&e()}))},f=function(e){var t=!1;return function(){t||(e(),t=!0)}},d=-1,l=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},p=function(e){"hidden"===document.visibilityState&&d>-1&&(d="visibilitychange"===e.type?e.timeStamp:0,m())},v=function(){addEventListener("visibilitychange",p,!0),addEventListener("prerenderingchange",p,!0)},m=function(){removeEventListener("visibilitychange",p,!0),removeEventListener("prerenderingchange",p,!0)},h=function(){return d<0&&(d=l(),v(),n((function(){setTimeout((function(){d=l(),v()}),0)}))),{get firstHiddenTime(){return d}}},g=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},y=[1800,3e3],T=function(e,t){t=t||{},g((function(){var r,s=h(),f=a("FCP"),d=o("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(d.disconnect(),e.startTime<s.firstHiddenTime&&(f.value=Math.max(e.startTime-i(),0),f.entries.push(e),r(!0)))}))}));d&&(r=c(e,f,y,t.reportAllChanges),n((function(n){f=a("FCP"),r=c(e,f,y,t.reportAllChanges),u((function(){f.value=performance.now()-n.timeStamp,r(!0)}))})))}))},b=[.1,.25],E=0,C=1/0,w=0,A=function(e){e.forEach((function(e){e.interactionId&&(C=Math.min(C,e.interactionId),w=Math.max(w,e.interactionId),E=w?(w-C)/7+1:0)}))},L=function(){"interactionCount"in performance||e||(e=o("event",A,{type:"event",buffered:!0,durationThreshold:0}))},P=[],S=new Map,I=0,R=function(){return(e?E:performance.interactionCount||0)-I},M=[],k=function(e){if(M.forEach((function(t){return t(e)})),e.interactionId||"first-input"===e.entryType){var t=P[P.length-1],n=S.get(e.interactionId);if(n||P.length<10||e.duration>t.latency){if(n)e.duration>n.latency?(n.entries=[e],n.latency=e.duration):e.duration===n.latency&&e.startTime===n.entries[0].startTime&&n.entries.push(e);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};S.set(r.id,r),P.push(r)}P.sort((function(e,t){return t.latency-e.latency})),P.length>10&&P.splice(10).forEach((function(e){return S.delete(e.id)}))}}},_=function(e){var t=self.requestIdleCallback||self.setTimeout,n=-1;return e=f(e),"hidden"===document.visibilityState?e():(n=t(e),s(e)),n},F=[200,500],O=[2500,4e3],x={},B=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"};var D,N,q=/\s+/g,H=window,j=[],z={};function G(){var e=H.rapidInstance;if(e&&e.getRapidAttribute)for(D=D||e.getRapidAttribute("keys"),N=N||e.getRapidAttribute("spaceid");j.length;)J(j.shift())}function J(e){var t=H.rapidInstance;if(t&&t.beaconPerformanceData&&t.getRapidAttribute&&t.setRapidAttribute){for(var n=e.entries,r=void 0===n?[]:n,i=e.name,a=e.rating,o=e.value,c="CLS"===i?parseFloat(o.toFixed(3)):Math.round(o),u="perf_".concat(i.toLowerCase()),s=r.length,f=r[s-1]||{},d=s-2;d>=0;d--)r[d].value>f.value&&(f=r[d]);var l=f.element||f.target||f.sources&&f.sources[0]&&f.sources[0].node,p={};p[u]=c,p["".concat(u,"_rating")]=a,l&&(p["".concat(u,"_elmt")]=(l.nodeName||"").toLowerCase(),p["".concat(u,"_id")]=l.id||l.className||"",p["".concat(u,"_slk")]=(l.innerText||l.alt||l.title||"").replace(q," ").substr(0,150)),f.url&&(p["".concat(u,"_url")]=f.url);var v=t.getRapidAttribute("keys"),m=t.getRapidAttribute("spaceid");if(v&&D)for(var h in v)v.hasOwnProperty(h)&&!D.hasOwnProperty(h)&&(D[h]="");t.setRapidAttribute({spaceid:N}),t.beaconPerformanceData({perf_usertime:{utm:p}},D),t.setRapidAttribute({spaceid:m})}}function K(e){H.rapidInstance?(G(),J(e)):j.push(e)}function Q(e){z[e.name]=e}T(K),function(e,t){t=t||{},g((function(){var r,d=h(),l=a("LCP"),p=function(e){t.reportAllChanges||(e=e.slice(-1)),e.forEach((function(e){e.startTime<d.firstHiddenTime&&(l.value=Math.max(e.startTime-i(),0),l.entries=[e],r())}))},v=o("largest-contentful-paint",p);if(v){r=c(e,l,O,t.reportAllChanges);var m=f((function(){x[l.id]||(p(v.takeRecords()),v.disconnect(),x[l.id]=!0,r(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,(function(){return _(m)}),!0)})),s(m),n((function(n){l=a("LCP"),r=c(e,l,O,t.reportAllChanges),u((function(){l.value=performance.now()-n.timeStamp,x[l.id]=!0,r(!0)}))}))}}))}(K),function(e,t,n,r){try{var i=window.performance;if(!i)return;var a=i.getEntriesByType&&i.getEntriesByType("navigation")[0]||{entryType:"navigation",startTime:0},o=i.timing||{};!a[n]&&o[n]&&(a[n]=Math.max(o[n]-o.navigationStart,0));var c=a[n];if(c<0||c>i.now())return;e({delta:c,entries:[a],id:t,name:t,rating:B(c,r),value:c,navigationType:"navigate"})}catch(e){}}(K,"TTFB","responseStart",[800,1800]),function(e,t){t=t||{},T(f((function(){var r,i=a("CLS",0),f=0,d=[],l=function(e){e.forEach((function(e){if(!e.hadRecentInput){var t=d[0],n=d[d.length-1];f&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(f+=e.value,d.push(e)):(f=e.value,d=[e])}})),f>i.value&&(i.value=f,i.entries=d,r())},p=o("layout-shift",l);p&&(r=c(e,i,b,t.reportAllChanges),s((function(){l(p.takeRecords()),r(!0)})),n((function(){f=0,i=a("CLS",0),r=c(e,i,b,t.reportAllChanges),u((function(){return r()}))})),setTimeout(r,0))})))}(Q),function(e,t){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(t=t||{},g((function(){var r;L();var i,u=a("INP"),f=function(e){_((function(){e.forEach(k);var t,n=(t=Math.min(P.length-1,Math.floor(R()/50)),P[t]);n&&n.latency!==u.value&&(u.value=n.latency,u.entries=n.entries,i())}))},d=o("event",f,{durationThreshold:null!==(r=t.durationThreshold)&&void 0!==r?r:40});i=c(e,u,F,t.reportAllChanges),d&&(d.observe({type:"first-input",buffered:!0}),s((function(){f(d.takeRecords()),i(!0)})),n((function(){I=0,P.length=0,S.clear(),u=a("INP"),i=c(e,u,F,t.reportAllChanges)})))})))}(Q),H.addEventListener&&(H.addEventListener("DOMContentLoaded",G),H.addEventListener("pagehide",(function(){for(var e in z)z.hasOwnProperty(e)&&j.push(z[e]);z={},G()})))}();