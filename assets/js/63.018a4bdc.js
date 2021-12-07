(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{604:function(t,s,n){"use strict";n.r(s);var a=n(56),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"connex1-升级到-connex2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connex1-升级到-connex2"}},[t._v("#")]),t._v(" Connex1 升级到 Connex2")]),t._v(" "),n("p",[t._v("Connex2 是一个独立的 npm package，让 DApp 与 Sync2 变得更加独立。\nConnex2 随着 Sync2 的上线一同发布。")]),t._v(" "),n("h2",{attrs:{id:"connex1-与-2-区别概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connex1-与-2-区别概述"}},[t._v("#")]),t._v(" Connex1 与 2 区别概述")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Connex1 是内置于 Sync1 中的。基于 Connex1 的 DApp 强依赖于Sync1，需要在Sync1 中运行。DApp 使用 Connex1 的签名服务，且网络环境依赖于 Sync1。")])]),t._v(" "),n("li",[n("p",[t._v("Connex2 是独立的开发包，需要 Dapp 直接引入使用，且自行初始化网络环境；Connex2 非必须在 Sync 中运行。")])])]),t._v(" "),n("h2",{attrs:{id:"兼容模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#兼容模式"}},[t._v("#")]),t._v(" 兼容模式")]),t._v(" "),n("p",[t._v("基于 Connex2 编写的 Dapp 可以在 Sync1 中运行，但有如下的注意事项：")]),t._v(" "),n("ul",[n("li",[t._v("若 DApp 所期待的网络环境（例如初始化为连接主网的Dapp）与Sync1的环境不一致（例如 Sync1 运行于测试网），则 Sync1 环境失效，DApp会启动召唤 Sync2的流程；")]),t._v(" "),n("li",[t._v("若 DApp 所期待的网络环境（例如初始化为连接主网的Dapp）与Sync1的环境一致，则 DApp 运行在兼容模式下(Compat Mode)，大部分API都可正常使用；")]),t._v(" "),n("li",[t._v("兼容模式下，Connex2 独有的 API 将不能启用。")])]),t._v(" "),n("h2",{attrs:{id:"connex2-相关变动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connex2-相关变动"}},[t._v("#")]),t._v(" Connex2 相关变动")]),t._v(" "),n("h3",{attrs:{id:"安装-connex2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-connex2"}},[t._v("#")]),t._v(" 安装 Connex2")]),t._v(" "),n("ul",[n("li",[t._v("使用标签引入 Connex2")])]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- install the latest v2 --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/@vechain/connex@2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),n("ul",[n("li",[t._v("npm 安装")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("npm i @vechain/connex\n")])])]),n("h3",{attrs:{id:"创建-connex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建-connex"}},[t._v("#")]),t._v(" 创建 Connex")]),t._v(" "),n("p",[t._v("在 Sync1 中 connex 是内置于 window 上的且网络环境确定，但是 Connex2 是需要手动创建的并指定节点及网络。")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// connex v2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Connex "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vechain/connex'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a Connex object connects to VeChain mainnet")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" connex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    node"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://mainnet.veblocks.net/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// veblocks public node, use your own if needed")]),t._v("\n    network"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// defaults to mainnet, so it can be omitted here")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Connect to testnet")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" connex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    node"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://testnet.veblocks.net/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    network"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Or connect to private network")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" connex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    node"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<the API url of your node>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the genesis block of your private network")]),t._v("\n    network"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        id"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x...'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("h3",{attrs:{id:"创建-thor-filter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建-thor-filter"}},[t._v("#")]),t._v(" 创建 Thor.Filter")]),t._v(" "),n("p",[t._v("Connex2 Thor.Filter 创建方式变化")]),t._v(" "),n("div",{staticClass:"language-diff extra-class"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   const type: 'event' | 'transfer'\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   const criteria: Connex.Thor.Criteria<T extends 'event' | 'transfer'>\n")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   // Connex v1\n")])]),n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   const filter = new connex.thor.filter(type)\n")]),n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   filter.criteria(criteria).apply(offset, limit)\n")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   // Connex v2\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   const filter = new connex.thor.filter(type, criteria)\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   filter.apply(offset, limit)\n")])]),t._v("\n")])])]),n("h3",{attrs:{id:"创建-signingservice"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建-signingservice"}},[t._v("#")]),t._v(" 创建 SigningService")]),t._v(" "),n("p",[t._v("Connex2 SigningService 创建方式变化")]),t._v(" "),n("div",{staticClass:"language-diff extra-class"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   const txMsg: Vendor.TxMessage\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   const certMsg: Vendor.CertMessage\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   // Connex v1\n")])]),n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   const txSigningSvc = new connex.vendor.sign('tx')\n")]),n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   const certSigningSvc = new connex.vendor.sign('cert')\n")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   // Connex v2\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   const txSigningSvc = new connex.vendor.sign('tx', txMsg)\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   const certSigningSvc = new connex.vendor.sign('cert', certMsg)\n")])])])])]),n("h3",{attrs:{id:"tx-signingservice-delegate-参数变化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tx-signingservice-delegate-参数变化"}},[t._v("#")]),t._v(" TX SigningService.delegate 参数变化")]),t._v(" "),n("p",[n("RouterLink",{attrs:{to:"/connex/api.html#transaction-signing-service"}},[t._v("更多详情")])],1),t._v(" "),n("div",{staticClass:"language-diff extra-class"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   const txMsg: Vendor.TxMessage\n")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   // Connex1\n")])]),n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   const txSigningSvc = new connex.vendor.sign('tx')\n")]),n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   txSigningSvc.delegate( async (unsigned): Promise<string> => {})\n")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   // Connex2\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   const txSigningSvc = new connex.vendor.sign('tx', txMsg)\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[t._v("   txSigningSvc.delegate(url, signer?)\n")])])])])]),n("h2",{attrs:{id:"connex2-新增的-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connex2-新增的-api"}},[t._v("#")]),t._v(" Connex2 新增的 api")]),t._v(" "),n("p",[t._v("新增 API 仅在非 Compat mode 时起效")]),t._v(" "),n("p",[n("RouterLink",{attrs:{to:"/connex/api.html"}},[t._v("更多")])],1),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" address"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" abi"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" kind"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'event'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transfer'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" criteria"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Thor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Filter"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'event'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transfer'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Criteria"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" clauses"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Thor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Clause"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nthor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("account")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("gasPayer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nthor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("account")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transact")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...args => abi inputs")]),t._v("\n\nthor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("account")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cache")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nthor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" criteria"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cache")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nthor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("explain")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clauses"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cache")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nthor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("explain")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clauses"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("gasPayer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nvendor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sign"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("accepted")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);