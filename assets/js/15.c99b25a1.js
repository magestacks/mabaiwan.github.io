(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{787:function(t,s,a){"use strict";a.r(s);var e=a(118),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"火遍全网的-hutool-如何使用-builder-模式创建线程池"}},[t._v("火遍全网的 Hutool，如何使用 Builder 模式创建线程池？ "),a("a",{staticClass:"header-anchor",attrs:{href:"#火遍全网的-hutool-如何使用-builder-模式创建线程池"}},[t._v("#")])]),t._v(" "),a("p",[t._v("Builder 设计模式也叫做 "),a("strong",[t._v("构建者模式或者建造者模式")]),t._v("，名字只是一种叫法，当聊起三种名称的时候知道是怎么回事就行")]),t._v(" "),a("p",[t._v("Builder 设计模式在作者编码过程中，"),a("strong",[t._v("属于比较常用的模式之一")]),t._v("。优秀的设计模式总是会受到广大开发者的青睐，Hutool 也是其中之一")]),t._v(" "),a("p",[t._v("因为上周编写的业务需要用到线程池，就去 Hutool thread 包下看了看，还真有惊喜，学习到了一种之前编码中没用过的 Builder 模式实现")]),t._v(" "),a("p",[t._v("这里必须提一句："),a("strong",[t._v("设计模式重要的是思想")]),t._v("，一种设计模式可能不止一种实现方式")]),t._v(" "),a("p",[t._v("Builder 模式文章大纲如下：")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("Builder 模式应用场景")]),t._v(" "),a("li",[t._v("Hutool 线程池如何应用 Builder 模式")]),t._v(" "),a("li",[t._v("Builder 模式不同的实现方式")]),t._v(" "),a("li",[t._v("Builder 模式总结")])])]),t._v(" "),a("h2",{attrs:{id:"builder-模式应用场景"}},[t._v("Builder 模式应用场景 "),a("a",{staticClass:"header-anchor",attrs:{href:"#builder-模式应用场景"}},[t._v("#")])]),t._v(" "),a("p",[t._v("Builder 模式作用域："),a("strong",[t._v("如果类的属性之间有一定的依赖关系或者约束条件（源自设计模式之美）")]),t._v("，那么就可以考虑使用 Builer 设计模式")]),t._v(" "),a("p",[t._v("我们依照线程池来举例，默认创建的线程池，构造方法最多有七个参数，核心线程数、最大线程数、阻塞队列、线程存活时间...")]),t._v(" "),a("p",[t._v("日常使用创建线程池时，大家想一下为什么要这么设计？一起来看下源码注释中如何解释此行为")]),t._v(" "),a("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210206115411020.png",referrerPolicy:"no-referrer"}}),t._v(" "),a("p",[t._v("线程池之所以设置如此之多的构造参数，"),a("strong",[t._v("是因为对这些参数会有一定规则的校验")]),t._v("，如果不满足线程池的规则，将不允许创建线程池，"),a("strong",[t._v("通过抛异常的方式终止程序")])]),t._v(" "),a("p",[t._v("终止规则大概有七点，这里列举一下：")]),t._v(" "),a("ol",[a("li",[t._v("核心线程数不可以小于 0")]),t._v(" "),a("li",[t._v("线程存活时间不可以小于 0")]),t._v(" "),a("li",[t._v("最大线程数不可以小于等于 0，同时也不可以小于核心线程数")]),t._v(" "),a("li",[t._v("阻塞队列、线程工厂、拒绝策略参数均不可为空")])]),t._v(" "),a("p",[t._v("上述七点有两个作用，其一是为了让核心参数满足线程池运行流程，其二是为了保障运行时的稳定性")]),t._v(" "),a("p",[t._v("小伙伴想一哈线程池创建是不是灰常灰常适合 Builder 模式，"),a("strong",[t._v("构造器函数过多以及属性之间存在依赖关系和约束条件")])]),t._v(" "),a("h2",{attrs:{id:"hutool-builder-创建线程池"}},[t._v("Hutool Builder 创建线程池 "),a("a",{staticClass:"header-anchor",attrs:{href:"#hutool-builder-创建线程池"}},[t._v("#")])]),t._v(" "),a("p",[t._v("Hutool 线程池相关使用 Builder 设计模式有两处，一个是创建线程池，另一个是创建线程工厂，我们重点围绕线程池说")]),t._v(" "),a("p",[t._v("创建 Hutool 线程池比较简单且优雅，笔者较喜欢这种链式风格，所以抽象公共业务时都会使用此模式，如图所示")]),t._v(" "),a("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210206115740217.png",referrerPolicy:"no-referrer"}}),t._v(" "),a("p",[t._v("这个时候跟下源码，先从 "),a("code",[t._v("ExecutorBuilder#create")]),t._v(" 入手，小伙伴就明白 Hutool 是如何玩 Builder 模式了")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecutorBuilder")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecutorBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("What？ 自己创建自己？这是要搞啥子")]),t._v(" "),a("p",[t._v("小伙伴想一下，如果你想要对一个类中属性进行约束，前提是不是先应该把属性搞到手")]),t._v(" "),a("p",[t._v("没错，"),a("code",[t._v("ExecutorBuilder#create")]),t._v(" 方法返回自己本身，然后通过 set 方法 "),a("strong",[t._v("把数据填充到创建出来的对象上")]),t._v("，最后再进行依赖关系整理和条件约束")]),t._v(" "),a("p",[t._v("看一下 "),a("code",[t._v("ExecutorBuilder#build")]),t._v(" 方法内部做了什么事情")]),t._v(" "),a("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210206121519267.png",referrerPolicy:"no-referrer"}}),t._v(" "),a("p",[t._v("这里有个知识点，也是 B 格之一，大家看到 build 方法上有 @Override 注解，证明它是实现了接口方法")]),t._v(" "),a("img",{attrs:{src:"https://images-machen.oss-cn-beijing.aliyuncs.com/image-20210206121721509.png",referrerPolicy:"no-referrer"}}),t._v(" "),a("p",[t._v("Hutool 定义了 Builder 接口，实现此接口即可完成 Builder 模式，泛型 T 代表需要返回的构造对象类型，比如刚才线程池 Builder 泛型就是 ThreadPoolExecutor")]),t._v(" "),a("p",[t._v("在实现 build 方法上调用真正管理依赖和约束的方法 build(ExecutorBuilder builder)，将刚才创建好并且已经赋过值的构建对象传入")]),t._v(" "),a("p",[t._v("最后 build(ExecutorBuilder builder) 返回的就是我们所需要的线程池对象，这一块大家可以自己跟下源码，学会就可以套用自己写的业务代码")]),t._v(" "),a("blockquote",[a("p",[t._v("Hutool Version：5.0.6")]),t._v(" "),a("p",[t._v("源码包路径：cn.hutool.core.thread")])]),t._v(" "),a("h2",{attrs:{id:"builder-模式不同的实现方式"}},[t._v("Builder 模式不同的实现方式 "),a("a",{staticClass:"header-anchor",attrs:{href:"#builder-模式不同的实现方式"}},[t._v("#")])]),t._v(" "),a("p",[t._v("上文说过，设计模式重思想，就像 Builder 模式，强调的是 "),a("strong",[t._v("管理依赖关系或者约束条件")])]),t._v(" "),a("p",[t._v("刚才 Hutool Builder 只是一种实现方式，之前还用过静态内部类的实现方式")]),t._v(" "),a("p",[t._v("代码经过精剪，并且为了阅读体验感，把部分缩进去除了。不过笔者测试过粘贴到 IDEA 中编译是可以的")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Getter")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpParameters")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Builder")]),t._v(" builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Builder")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpParameters")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Builder")]),t._v(" builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("builder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Getter")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Builder")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" parameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" httpType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Builder")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parameter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" parameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parameter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Builder")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Builder")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("httpType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" httpType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("httpType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" httpType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpParameters")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isBlank")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RuntimeException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"URL不允许为空 "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpParameters")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如果后面要获取 HttpParameters 参数就需要先获取 Builder 对象")]),t._v(" "),a("p",[t._v("可能有些小伙伴不习惯这种方式，也可以把 Builder 对象属性在 Parameters 里也定义一份，方式都很灵活")]),t._v(" "),a("h2",{attrs:{id:"结言"}},[t._v("结言 "),a("a",{staticClass:"header-anchor",attrs:{href:"#结言"}},[t._v("#")])]),t._v(" "),a("p",[t._v('本文通过创建线程池为引，讲述了 Builder 设计模式的场景以及实际用途，并引用 Hutool Builder 模式创建线程池进行讲解。相信大家看完之后对 Builder 模式的场景以及应用有了更深入的了解，另外我们可以将 Builder 模式引入到自己代码中，实际操练一下，相信你也会对它 "爱不释手"')]),t._v(" "),a("p",[t._v("另外，早之前笔者使用线程池都是自己封装，同时用到了 "),a("strong",[t._v("Builder、模版方法")]),t._v(" 两种模式，"),a("strong",[t._v("并且重写了部分线程池方法")]),t._v("，使用以及排查问题都比较顺手。因为篇幅有限这里就不贴了，需要的小伙伴可以添加微信自取")]),t._v(" "),a("p",[t._v("关于 Builder 设计模式本文就讲到这里，后面会陆续输出策略、工厂、责任链等模式；"),a("strong",[t._v("如果文章对你有帮助那就点个关注支持下吧，祝好。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);