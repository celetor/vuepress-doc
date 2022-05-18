(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{575:function(t,a,s){"use strict";s.r(a);var e=s(56),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tap-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tap-模式"}},[t._v("#")]),t._v(" TAP 模式")]),t._v(" "),s("p",[t._v("对于不遵循系统代理的软件，TAP 模式可以接管其流量并交由 CFW 处理")]),t._v(" "),s("p",[t._v("对于 0.13.8 及以后版本，更推荐使用"),s("RouterLink",{attrs:{to:"/contents/tun.html"}},[t._v("TUN 模式")])],1),t._v(" "),s("h2",{attrs:{id:"安装-tap-网卡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-tap-网卡"}},[t._v("#")]),t._v(" 安装 TAP 网卡")]),t._v(" "),s("p",[t._v("点击"),s("code",[t._v("General")]),t._v("页面中"),s("code",[t._v("TAP Device")]),t._v("选项的"),s("code",[t._v("Manage")]),t._v("按钮，在弹出对话框中选择"),s("code",[t._v("Install")]),t._v("将会安装 TAP 网卡，此网卡用于接管系统流量，安装完成可在系统网络连接中看到名为"),s("code",[t._v("cfw-tap")]),t._v("的网卡")]),t._v(" "),s("h2",{attrs:{id:"启动-tap-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-tap-模式"}},[t._v("#")]),t._v(" 启动 TAP 模式")]),t._v(" "),s("p",[t._v("使用的 Profile 中包含 listen 设置：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enhanced-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("host "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 fake-ip")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.0.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nameserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 223.5.5.5\n")])])]),s("h2",{attrs:{id:"工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[t._v("#")]),t._v(" 工作原理")]),t._v(" "),s("p",[t._v("此版本可以通过设置 Interface Name (自动识别) 属性避免回环，并且支持了 UDP 及 IP 类请求，请在"),s("code",[t._v("Settings")]),t._v("页面"),s("code",[t._v("Interface Name")]),t._v("选项中选择出站网卡（通常为本机物理网卡）")]),t._v(" "),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("p",[t._v("当"),s("code",[t._v("enhanced-mode")]),t._v("设置为"),s("code",[t._v("fake-ip")]),t._v("时，会出现系统检测到网卡无法联网，微软系 APP 无法登陆使用等问题，可以通过添加"),s("code",[t._v("fake-ip-filter")]),t._v("解决：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enhanced-mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fake"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ip\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.0.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nameserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 223.5.5.5\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fake-ip-filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dns.msftncsi.com"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.msftncsi.com"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.msftconnecttest.com"')]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("TAP 模式更推荐使用 redir-host 模式")])])])}),[],!1,null,null,null);a.default=n.exports}}]);