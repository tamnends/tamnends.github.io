var gdjs;(function(u){let p;(function(g){let d;(function(r){r.sendAsyncRequest=function(n,s,i,o,c,a){const e=t=>{t instanceof ProgressEvent&&t.currentTarget&&t.currentTarget instanceof XMLHttpRequest&&t.currentTarget.status===0?a.setString("REQUEST_NOT_SENT"):a.setString(""+t)};try{const t=new XMLHttpRequest;t.onerror=e,t.ontimeout=e,t.onabort=e,t.onreadystatechange=()=>{t.readyState===4&&(t.status>=400&&e(""+t.status),c.setString(t.responseText))},t.open(i,n),t.setRequestHeader("Content-Type",o===""?"application/x-www-form-urlencoded":o),t.send(s)}catch(t){e(t)}},r.sendAwaitableAsyncRequest=(n,s,i,o,c,a)=>new u.PromiseTask(fetch(n,{body:i!=="GET"?s:void 0,method:i,headers:{"Content-Type":o||"application/x-www-form-urlencoded"}}).then(async e=>{const t=await e.text();e.status>=400&&a.setString(""+e.status),c.setString(t)},e=>{a.setString(""+e)})),r.sendDeprecatedSynchronousRequest=function(n,s,i,o,c,a){try{let e;if(typeof XMLHttpRequest!="undefined")e=new XMLHttpRequest;else{const t=["MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"];for(let l=0,b=t.length;l<b;l++)try{e=new ActiveXObject(t[l]);break}catch{}}if(e===void 0)return;e.open(o,n+s,!1),e.setRequestHeader("Content-Type",c===""?"application/x-www-form-urlencoded":c),e.send(i),a.setString(e.responseText)}catch{}},r.enableMetrics=function(n,s){n.getGame().enableMetrics(s)},r.variableStructureToJSON=function(n){return JSON.stringify(n.toJSObject())},r.objectVariableStructureToJSON=function(n,s){return JSON.stringify(s.toJSObject())},r._objectToVariable=function(n,s){s.fromJSObject(n)},r.jsonToVariableStructure=function(n,s){s.fromJSON(n)},r.jsonToObjectVariableStructure=function(n,s,i){i.fromJSON(n)}})(d=g.network||(g.network={}))})(p=u.evtTools||(u.evtTools={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=networktools.js.map
