var LCFManager=new function(){var e,t=this,n=!1,r="/tb/img/CrossPageSWF_526e765.swf";this.API={msgStatus:function(){$(t).trigger("sendStatus",arguments)},bindServer:function(){$(t).trigger("bindServer")},closeServer:function(){$(t).trigger("closeServer")},newClient:function(){$(t).trigger("newClient",arguments)},onReady:function(){$(t).trigger("ready")},onHost:function(){$(t).trigger("bindHost",arguments)},onMessage:function(){$(t).trigger("message",arguments)},inGroup:function(){$(t).trigger("joinGroup",arguments)},console:function(e,t){t&&t in $.console?$.console[t](e):$.console.debug(e)},jsCheck:function(){return!0}};var s=function(t){e=new $.swf(r,{container:o(),width:1,height:1,params:{allowScriptAccess:"always",wmode:"window"},vars:{userName:t,browser:$.getBrowser().name,new_version:!0,debugMode:$.debug}})},o=function(){var e="local_flash_cnt";if(document.getElementById(e))return $("#"+e);var t=$('<div id="'+e+'"></div>');return $("body").prepend(t),t};this.init=function(e){n||(s(e),$.console.debug("LCF \u5F00\u59CB\u521D\u59CB\u5316!"),n=!0)},this.checkSWFReady=function(){try{return e.remote("checkSWF")}catch(t){return!1}},this.sendMsg=function(t){var n=t.target,r=t.group;""==n||"all"==n?e.remote("sendMsg",t.id,t.content,r,t.client,t.saveAble):"own"==n?e.remote("sendOwnMsg",t.id,t.content,t.saveAble):"other"==n?e.remote("sendOtherMsg",t.id,t.content,r,t.saveAble):"host"==n&&e.remote("sendMsgToHost",t.id,t.content,r,t.saveAble)},this.getMsg=function(t){return t&&""!=t?e.remote("getMsg",t):e.remote("getAllMsg")},this.removeMsg=function(t){t&&""!=t?e.remote("removeMsg",t):e.remote("removeAllMsg")},this.createRequest=function(t){var n=e.remote("createRequest",t);return n},this.sendRequest=function(t,n){e.remote("sendRequest",t,n)},this.createListen=function(t){var n=e.remote("createListen",t);return n},this.startListen=function(t){e.remote("sendListen",t)},this.stopListen=function(t){e.remote("cancelListen",t)},this.setServer=function(t){switch(t){case"open":e.remote("startServer");break;case"close":e.remote("stopServer");break;case"restart":e.remote("restartServer")}},this.setClient=function(t,n){"bindHost"==t?e.remote("bindHost",n):"insertGroup"==t&&e.remote("bindHost",n)},this.so=function(t,n){return t&&""!=t?n&&""!=n?e.remote("sharedObjectWrite",t,n):e.remote("sharedObjectRead",t):null},this.addEvent=function(){return $(t).bind.apply($(t),arguments)},this.removeEvent=function(){return $(t).unbind.apply($(t),arguments)}};
;var SWFRequest=function(){var o,r,n={},e=(new Date).getTime()+"_"+Math.floor(100*Math.random()),t=this,i=function(i){var s='window.SWFRequest.API["'+e+'"]';r=LCFManager,n.url=i.url||"",n.method=i.method||"get",n.data=i.data||{},n.onComplete=s+'["onComplete"]',n.onProgress=s+'["onProgress"]',n.onOpen=s+'["onOpen"]',n.onIOError=s+'["onIOError"]',n.onSecurityError=s+'["onSecurityError"]',u(),o=r.createRequest(n),i&&(i.onComplete&&"function"==typeof i.onComplete&&$(t).bind("complete",i.onComplete),i.onProgress&&"function"==typeof i.onProgress&&$(t).bind("progress",i.onProgress),i.onOpen&&"function"==typeof i.onOpen&&$(t).bind("open",i.onOpen),i.onIOError&&"function"==typeof i.onIOError&&$(t).bind("IOError",i.onIOError),i.onSecurityError&&"function"==typeof i.onSecurityError&&$(t).bind("securityError",i.onSecurityError))},u=function(){window.SWFRequest=window.SWFRequest||{},window.SWFRequest.API=window.SWFRequest.API||{},window.SWFRequest.API[e]={onComplete:s,onProgress:p,onOpen:c,onIOError:g,onSecurityError:d}},s=function(o){$(t).trigger("complete",o)},p=function(o){$(t).trigger("progress",o)},c=function(){$(t).trigger("open")},g=function(){$(t).trigger("IOError")},d=function(){$(t).trigger("securityError")};this.send=function(n){r.sendRequest(o,n)},this.addEvent=function(){$(t).bind.apply($(t),arguments)},this.removeEvent=function(){$(t).unbind.apply($(t),arguments)},i.apply(this,arguments)};
;var SWFListen=function(){var n,o,t={},r=(new Date).getTime()+"_"+Math.floor(100*Math.random()),e=this,i=function(i){var u='window.SWFListen.API["'+r+'"]';o=LCFManager,t.url=i.url||"",t.method=i.method||"get",t.data=i.data||{},t.onComplete=u+'["onComplete"]',t.onProgress=u+'["onProgress"]',t.onOpen=u+'["onOpen"]',t.onIOError=u+'["onIOError"]',t.onSecurityError=u+'["onSecurityError"]',t.onListenStatus=u+'["onListenStatus"]',s(),n=o.createListen(t),i&&(i.onComplete&&"function"==typeof i.onComplete&&$(e).bind("complete",i.onComplete),i.onProgress&&"function"==typeof i.onProgress&&$(e).bind("progress",i.onProgress),i.onOpen&&"function"==typeof i.onOpen&&$(e).bind("open",i.onOpen),i.onIOError&&"function"==typeof i.onIOError&&$(e).bind("IOError",i.onIOError),i.onSecurityError&&"function"==typeof i.onSecurityError&&$(e).bind("securityError",i.onSecurityError),i.onListenStatusChange&&"function"==typeof i.onListenStatusChange&&$(e).bind("statusChange",i.onListenStatusChange))},s=function(){window.SWFListen=window.SWFListen||{},window.SWFListen.API=window.SWFListen.API||{},window.SWFListen.API[r]={onComplete:u,onProgress:a,onOpen:g,onIOError:p,onSecurityError:c,onListenStatus:f}},u=function(n){$(e).trigger("complete",n)},a=function(n){$(e).trigger("progress",n)},g=function(){$(e).trigger("open")},p=function(){$(e).trigger("IOError")},c=function(){$(e).trigger("securityError")},f=function(n){n?$(e).trigger("statusChange",!0):$(e).trigger("statusChange",!1)};this.start=function(){o.startListen(n)},this.stop=function(){o.stopListen(n)},this.addEvent=function(){$(e).bind.apply($(e),arguments)},this.removeEvent=function(){$(e).unbind.apply($(e),arguments)},i.apply(this,arguments)};
;var MessageProxy={receiveMsg:function(e,n,t){var r=null,c=e,l=c.indexOf("_"),s="custom",u="";return-1==l?u=c:(s=c.slice(0,l),u=c.slice(l+1)),r={},r.mod=s,r.type=u,r.content=n,r.time=t,r},createMsgId:function(e,n){return e&&n?e+"_"+n:(e?e:"")+(n?n:"")},createMsg:function(e,n,t,r,c,l,s){var u={},a=MessageProxy.createMsgId(n,t);return u.target=e,u.id=a,u.content=r?r:null,u.group=c?c:null,u.client=l?l:null,u.saveAble=!!s,u}};
;!new function(){TbICom.call(this);var e,n,t,o,s=this,r=!1,i=3e5,a="/messagepool/online",c="/messagepool/listen",u=!1,d=!1,l=Math.floor(100*Math.random())+"_"+(new Date).getTime(),g=function(){e=LCFManager;var n=TbCom.process("User","getUserInfo");n.is_login&&n.portrait?(o=n.portrait,v(n.portrait)):TbCom.process("User","getUserInfoByRequest",function(e){n=e,o=n.portrait,v(o)})},v=function(n){e.addEvent("ready",y),e.addEvent("bindServer",E),e.addEvent("closeServer",M),e.addEvent("bindHost",w),e.addEvent("newClient",S),e.addEvent("message",b),e.addEvent("joinGroup",_);var t=$.getBrowser().name;if($.inArray(t,["ie","chrome","firefox","safari"])<0)try{window.addEventListener("beforeunload",function(){e.setServer("close")},!1)}catch(o){window.attachEvent("onbeforeunload",function(){e.setServer("close")})}else try{window.addEventListener("unload",function(){e.setServer("close")},!1)}catch(o){window.attachEvent("onunload",function(){e.setServer("close")})}e.init("TBMSG_"+n),$.console.debug("\u6D88\u606F\u7CFB\u7EDF\u5F00\u59CB\u542F\u52A8 [ TBMSG_"+n+" ]")},f=function(){var e=new SWFListen({url:c+"?user="+o+"&c="+l});return e},p=function(){var e=(new Date).getTime(),n=a+"?user="+o+"&t="+e,t=new Image;window.tb_online_stats=t,t.src=n},m=function(){h(),p(),n=setInterval(p,i)},h=function(){n&&(clearInterval(n),n=null)},y=function(){$.console.debug("\u6D88\u606F\u7CFB\u7EDF\u51C6\u5907\u5B8C\u6BD5\uFF01"),r=!0,s.dispatchEvent("ready")},E=function(){d=!0,m(),t||(t=f()),t.addEvent("statusChange",C),t.addEvent("complete",I),t.start(),$.console.debug("\u6210\u4E3Aserver\uFF01"),s.dispatchEvent("bindServer")},M=function(){d=!1,h(),t&&(t.removeEvent("statusChange",C),t.removeEvent("complete",I),t.stop()),$.console.debug("server\u5173\u95ED\uFF01"),s.dispatchEvent("closeServer")},w=function(e,n,t){$.console.debug(n+"\u6CE8\u518C\u6210\u4E3A["+t+"]\u7684host client\uFF01"),s.dispatchEvent("bindHost",n,t)},S=function(e,n){if($.console.debug("\u6709\u65B0\u7684\u5BA2\u6237\u7AEF\u8FDE\u63A5 ["+n+"]"),d){var o=t?"1":"0";T({id:"chat_command_listen",content:o,group:"default",client:_newClient,saveAble:!1}),$.console.debug("MsgSystem : tell new client listen status - "+_islistening)}s.dispatchEvent("newClient",n)},b=function(e,n,t,o){$.console.debug("\u6536\u5230\u65B0\u7684\u6D88\u606F [ "+n+"; "+t+"; "+o+" ]");var r=MessageProxy.receiveMsg(n,t,o);s.dispatchEvent(r.mod+"_message",r)},_=function(e,n){$.console.debug("\u52A0\u5165\u4E00\u4E2A\u6D88\u606F\u7EC4 [ "+n+" ]"),s.dispatchEvent("joinGroup",n)},C=function(e){u=!!e,$.console.debug("@MsgSystem : Listen status change - "+u),s.dispactchEvent("listenStatusChange",e)},I=function(e,n){$.console.warn(n);var t=n.replace(/^TbNet.dataHandler\(|\)\;?$/g,"");t=t.replace(/\:\'\[/g,":["),t=t.replace(/\]\'\}/g,"]}"),s.dispatchEvent("listenComplete",$.json.decode(t))},T=function(n,t,o,s,r,i,a){P(function(){var c=MessageProxy.createMsg(n,t,o,s,r,i,a);e.sendMsg(c)})},L=function(n,t){P(function(){if(n&&t){var o=MessageProxy.createMsgId(n,t);return e.getMsg(o)}return e.getMsg()})},x=function(n,t){P(function(){var o=MessageProxy.createMsgId(n,t);e.removeMsg(o)})},F=function(e,n){P(function(){var t=L();for(var o in t)0==o.indexOf(e)&&(msg_type=o.slice(e.length+1),msg_type!=n&&x(e,msg_type))})},B=function(e){return new SWFRequest(e)},R=function(e){return new SWFListen(e)},U=function(n){P(function(){e.setServer(n)})},W=function(n,t){P(function(){e.setClient(n,t)})},A=function(n,t){P(function(){return e.so(n,t)})},G=function(){return r},P=function(){var e=arguments[0];if(e&&"function"==typeof e){for(var n=new Array,t=1;t<arguments.length;t++)n.push(arguments[t]);G()?e.apply(s,n):s.addEvent("ready",function(){e.apply(s,n)})}};this.initSys("MsgSystem",["User"],{init:g,sendMsg:T,getMsg:L,removeMsg:x,removeMsgByMod:F,createSWFRequest:B,createSWFListen:R,setServer:U,setClient:W,so:A,getIsReady:G,doSomethingAfterReady:P})};