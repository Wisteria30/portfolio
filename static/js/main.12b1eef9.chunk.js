(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,a){},142:function(e,a,t){e.exports=t(316)},147:function(e,a,t){},316:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(22),l=t.n(i),o=(t(147),t(23)),c=t(46),s=t(11),m=t(48),u=t(47),p=t(49),d=t(124),h=t(36),g=t(41),E=t(26),f=t(25),b=t.n(f),y=t(20),k=t.n(y),w=t(24),x=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={name:"Kazuma Fujioka",university:"\u8fd1\u757f\u5927\u5b66 \u7406\u5de5\u5b66\u90e8 \u60c5\u5831\u5b66\u79d1",birthday:"1999/03/27",GitHub:"https://github.com/Wisteria30",Qiita:"https://qiita.com/Wisteria30",Twitter:"https://twitter.com/ji_o_k",AtCoder:"https://atcoder.jp/users/wisteria30",Facebook:"https://www.facebook.com/profile.php?id=100018025867411",Mail:"skymars0327[at]yahoo.co.jp",Experience1:"\u8fd1\u757f\u5927\u5b66 \u96fb\u5b50\u8a08\u7b97\u6a5f\u7814\u7a76\u4f1a \u4f1a\u9577",Experience2:"TGL-College2018 DevCon \u30d0\u30ea\u30e5\u30fc\u8cde",Experience3:"\u51acKC3 2019 \u30e2\u30d0\u30a4\u30eb\u30d5\u30a1\u30af\u30c8\u30ea\u30fc\u8cde"},t.handleChange=function(e){return function(a){t.setState(Object(o.a)({},e,a.target.value))}},t.linkTo=function(e){return function(a){window.open(e,"_blank")}},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("main",null,r.a.createElement("div",{className:e.heroUnit},r.a.createElement("div",{className:e.heroContent},r.a.createElement(k.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Profile"),r.a.createElement(k.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0},"\u81ea\u5df1\u7d39\u4ecb"))),r.a.createElement("form",{className:e.layout,noValidate:!0,autoComplete:"off"},r.a.createElement(w.unstable_Box,{display:"flex",className:e.container,justifyContent:"center"},r.a.createElement(b.a,{required:!0,id:"name",label:"Name",className:e.textField,value:this.state.name,onChange:this.handleChange("name"),margin:"normal",InputProps:{readOnly:!0}}),r.a.createElement(b.a,{required:!0,id:"university",label:"University",defaultValue:"\u8fd1\u757f\u5927\u5b66 \u7406\u5de5\u5b66\u90e8 \u60c5\u5831\u5b66\u79d1",className:e.textField,margin:"normal",InputProps:{readOnly:!0}}),r.a.createElement(b.a,{required:!0,id:"birthday",label:"BirthDay",value:this.state.birthday,className:e.textField,margin:"normal",InputProps:{readOnly:!0}})),r.a.createElement(w.unstable_Box,{display:"flex",className:e.container,justifyContent:"center"},r.a.createElement(b.a,{error:!0,id:"github",label:"GitHub",value:"Wisteria30",className:e.textField,margin:"normal",onClick:this.linkTo(this.state.GitHub),InputProps:{readOnly:!0}}),r.a.createElement(b.a,{error:!0,id:"qiita",label:"Qiita",defaultValue:"Wisteria30",className:e.textField,margin:"normal",onClick:this.linkTo(this.state.Qiita),InputProps:{readOnly:!0}}),r.a.createElement(b.a,{error:!0,id:"atcoder",label:"AtCoder",defaultValue:"wisteria30",className:e.textField,margin:"normal",onClick:this.linkTo(this.state.AtCoder),InputProps:{readOnly:!0}})),r.a.createElement(w.unstable_Box,{display:"flex",className:e.container,justifyContent:"center"},r.a.createElement(b.a,{error:!0,id:"twitter",label:"Twitter",defaultValue:"\u30b8\u30aa\u30f3",className:e.textField,margin:"normal",onClick:this.linkTo(this.state.Twitter),InputProps:{readOnly:!0}}),r.a.createElement(b.a,{error:!0,id:"facebook",label:"Facebook",defaultValue:"\u85e4\u5ca1\u548c\u771f",className:e.textField,margin:"normal",onClick:this.linkTo(this.state.Facebook),InputProps:{readOnly:!0}}),r.a.createElement(b.a,{id:"mail",label:"Mail",defaultValue:this.state.Mail,className:e.textField,margin:"normal",InputProps:{readOnly:!0}})),r.a.createElement(w.unstable_Box,{display:"flex",className:e.container,justifyContent:"center"},r.a.createElement(b.a,{id:"experience1",label:"Experience1",defaultValue:this.state.Experience1,fullWidth:!0,margin:"normal",InputProps:{readOnly:!0}})),r.a.createElement(w.unstable_Box,{display:"flex",className:e.container,justifyContent:"center"},r.a.createElement(b.a,{id:"experience2",label:"Experience2",defaultValue:this.state.Experience2,fullWidth:!0,margin:"normal",InputProps:{readOnly:!0}})),r.a.createElement(w.unstable_Box,{display:"flex",className:e.container,justifyContent:"center"},r.a.createElement(b.a,{id:"experience3",label:"Experience3",defaultValue:this.state.Experience3,fullWidth:!0,margin:"normal",InputProps:{readOnly:!0}}))))}}]),a}(r.a.Component),C=Object(E.withStyles)(function(e){return{heroUnit:{backgroundColor:e.palette.background.paper},heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},heroButtons:{marginTop:4*e.spacing.unit},layout:Object(o.a)({width:"auto",marginLeft:6*e.spacing.unit,marginRight:6*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:2*e.spacing.unit,marginRight:2*e.spacing.unit,marginBottom:2*e.spacing.unit,width:200},dense:{marginTop:19},menu:{width:200}}})(x),v=t(6),O=t.n(v),j=t(135),N=t.n(j),B=t(35),P=t.n(B),S=t(132),F=t.n(S),T=t(133),W=t.n(T),L=t(87),I=t.n(L),R=t(91),V=t.n(R),G=t(134),U=t.n(G),_=t(136),A=t.n(_),D=t(137),K=t.n(D),H=t(54),M=t.n(H),q=t(55),J=t.n(q),Q=t(56),z=t.n(Q),Y=t(139),$=t.n(Y),X=t(140),Z=t.n(X),ee=t(138),ae=t.n(ee),te=t(141),ne=t.n(te),re=t(88),ie=t.n(re),le=t(68),oe=t.n(le),ce=t(130),se=t.n(ce),me=t(69),ue=t.n(me),pe=t(129),de=t.n(pe),he=t(51),ge=t.n(he),Ee=[["images/works/key-valu.jpg","KEY-VALU","\u4eba\u306e\u9854\u304b\u3089\u8cc7\u7523\u4fa1\u5024\u3092BTC\u63db\u7b97\u3067\u5272\u308a\u51fa\u3059\u30a2\u30d7\u30ea\u3067\u3059\u3002How-Old.net \xd7 VALU\u3068\u3044\u3046\u30e2\u30c1\u30fc\u30d5\u3067\u4f5c\u308a\u307e\u3057\u305f\u3002VALU\u3092\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0\u3057\u305f\u753b\u50cf\u304b\u3089Keras \xd7 sckit-learn\u3067\u30e2\u30c7\u30eb\u3092\u751f\u6210\u3057\u307e\u3057\u305f\u3002","https://github.com/Wisteria30/key-valu"],["images/works/reiwa.png","\u5143\u53f7\u5224\u5225\u6a5f","word2vec\u3092\u7528\u3044\u305f\u5143\u53f7\u5224\u5225\u3002\u5358\u8a9e\u306e\u30d9\u30af\u30c8\u30eb\u3060\u3051\u3067\u306f\u6c7a\u3081\u308c\u306a\u3044\u306e\u3067\u3001\u5143\u53f7\u306e\u30eb\u30fc\u30eb\u3084\u904e\u53bb\u306e\u5143\u53f7\u304b\u3089\u7d71\u8a08\u3092\u3068\u3063\u3066\u7d5e\u308a\u307e\u3057\u305f\u3002\u4ee4\u548c\u306f\u5143\u53f7\u3068\u3057\u3066\u3061\u3083\u3093\u3068\u5224\u5225\u3055\u308c\u307e\u3057\u305f\u3002","https://qiita.com/Wisteria30/items/ba6ced1d55d12ce79943"],["images/works/ametyan.jpg","\u30a2\u30e1\u3061\u3083\u3093","\u51acKC3\u3067\u4f5c\u6210\u3057\u305f\u30a2\u30d7\u30ea\u3002\u30ab\u30fc\u30c9\u3092\u9078\u3076\u3053\u3068\u3067\u3001\u95a2\u897f\u306e\u304a\u3059\u3059\u3081\u30b9\u30dd\u30c3\u30c8\u3092\u7d39\u4ecb\u3057\u3066\u304f\u308c\u307e\u3059\u3002puppetter\u3067\u3058\u3083\u3089\u3093\u3092\u30b9\u30af\u30ec\u30d4\u30f3\u30b0\u3001Firebase\u306b\u4fdd\u5b58\u3059\u308b\u3068\u3053\u308d\u3092\u62c5\u5f53\u3057\u307e\u3057\u305f\u3002","https://github.com/winter-kc3/team-8-scraping"],["images/works/kokoiko.jpg","\u30b3\u30b3\u30a4\u30b3","HACK-U\u3067\u4f5c\u6210\u3057\u305f\u30a2\u30d7\u30ea\u3002GPS\u6a5f\u80fd\u3092\u7528\u3044\u3066\u30e6\u30fc\u30b6\u30fc\u306e\u8fd1\u304f\u306b\u767b\u9332\u3057\u305f\u300c\u304a\u5e97\u300d\u304c\u3042\u308c\u3070\u3001\u901a\u77e5\u3057\u307e\u3059\u3002GCP NL\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u89e3\u6790\u3068Auto NL\u306e\u6587\u66f8\u5206\u985e\u3092\u4f7f\u3063\u3066\u3001Twitter\u9023\u643a\u304b\u3089\u304a\u5e97\u306e\u30ec\u30b3\u30e1\u30f3\u30c9\u3092\u884c\u3046\u90e8\u5206\u3092\u62c5\u5f53\u3057\u307e\u3057\u305f\u3002",""],["images/works/library.jpg","\u96fb\u7b97\u30e9\u30a4\u30d6\u30e9\u30ea","\u6240\u5c5e\u3057\u3066\u3044\u308b\u7814\u7a76\u4f1a\u306e\u66f8\u7c4d\u7ba1\u7406\u30a2\u30d7\u30ea\u3067\u3059\u3002Ruby on Rails + booststrap\u3067\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002","https://github.com/Wisteria30/KindaiDensanLib"],["images/works/portfolio.jpg","Portfolio","\u3053\u306e\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u3067\u3059\u3002\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306bReact\u3068Material-UI\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002","#"]],fe=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,null),r.a.createElement("main",null,r.a.createElement("div",{className:e.heroUnit},r.a.createElement("div",{className:e.heroContent},r.a.createElement(k.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Works"),r.a.createElement(k.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0},"\u5236\u4f5c\u7269"))),r.a.createElement("div",{className:O()(e.layout,e.cardGrid)},r.a.createElement(ge.a,{container:!0,spacing:40},Ee.map(function(a,t){return r.a.createElement(ge.a,{item:!0,key:a[0],sm:6,md:3,lg:4},r.a.createElement(oe.a,{className:e.card[0]},r.a.createElement(de.a,{className:e.cardMedia,image:a[0],title:a[0]}),r.a.createElement(ue.a,{className:e.cardContent},r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},a[1]),r.a.createElement(k.a,null,a[2])),3!=t?r.a.createElement(se.a,null,r.a.createElement(ie.a,{size:"small",color:"primary",onClick:function(){window.open(a[3])}},"View")):r.a.createElement("unstable_Box",null)))}))))))}}]),a}(r.a.Component),be=Object(E.withStyles)(function(e){return{heroUnit:{backgroundColor:e.palette.background.paper},heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},heroButtons:{marginTop:4*e.spacing.unit},layout:Object(o.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),cardGrid:{padding:"".concat(8*e.spacing.unit,"px 0")},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1}}})(fe),ye=[["Python","\u6a5f\u68b0\u5b66\u7fd2\u3001Web\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0\u3001\u7af6\u6280\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306a\u3069\u69d8\u3005\u306a\u7528\u9014\u3067\u30e1\u30a4\u30f3\u30a6\u30a7\u30dd\u30f3\u3068\u3057\u3066\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"],["JavaScript","React\u3084Firebase\u3001API\u3092\u53e9\u304f\u306a\u3069Web\u304c\u7d61\u3080\u3068\u304d\u306b\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002async,await\u3067\u3046\u3063\u304b\u308aPromise\u8fd4\u3059\u3050\u3089\u3044\u306b\u306f\u5f97\u610f\u3067\u3059\u3002"],["Keras","KEY-VALU\u306e\u30e2\u30c7\u30eb\u3092\u4f5c\u308b\u969b\u306b\u4f5c\u308a\u307e\u3057\u305f\u3002\u56de\u5e30\u554f\u984c\u3060\u3063\u305f\u306e\u3067scikit-learn\u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u3044\u307e\u3057\u305f\u3002"],["Java","\u57fa\u672c\u7684\u306b\u5b66\u6821\u306e\u6388\u696d\u3067\u4f7f\u7528\u3057\u307e\u3059\u3002\u7c21\u5358\u306a\u30b3\u30f3\u30d1\u30a4\u30e9\u3084CUI\u306e\u4eba\u72fc\u30b2\u30fc\u30e0\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002"],["Ruby","Ruby on Rails\u3092\u4f7f\u3046\u969b\u306b\u899a\u3048\u307e\u3057\u305f\u3002Ruby on Rails\u3067\u306f\u672c\u306e\u66f8\u7c4d\u7ba1\u7406\u30b5\u30a4\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002"],["C++","\u7af6\u6280\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u969b\u306e\u30b5\u30d6\u30a6\u30a7\u30dd\u30f3\u3067\u3059\u3002Python\u3060\u3068\u8a08\u7b97\u91cf\u304c\u5fae\u5999\u306a\u3068\u304d\u306b\u4f7f\u3044\u307e\u3059\u3002"]];var ke=Object(E.withStyles)(function(e){return{heroUnit:{backgroundColor:e.palette.background.paper},heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},heroButtons:{marginTop:4*e.spacing.unit},layout:Object(o.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),cardGrid:{padding:"".concat(8*e.spacing.unit,"px 0")},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1}}})(function(e){var a=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,null),r.a.createElement("main",null,r.a.createElement("div",{className:a.heroUnit},r.a.createElement("div",{className:a.heroContent},r.a.createElement(k.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Skill"),r.a.createElement(k.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0},"\u4f7f\u7528\u3057\u305f\u3053\u3068\u306e\u3042\u308b\u30fb\u4f7f\u3048\u308b\u6280\u8853"))),r.a.createElement("div",{className:O()(a.layout,a.cardGrid)},r.a.createElement(ge.a,{container:!0,spacing:40},ye.map(function(e){return r.a.createElement(ge.a,{item:!0,key:e[0],sm:6,md:3,lg:4},r.a.createElement(oe.a,{className:a.card[0]},r.a.createElement(ue.a,{className:a.cardContent},r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},e[0]),r.a.createElement(k.a,null,e[1]))))})))))});var we=Object(E.withStyles)(function(e){return{hoge:{padding:0,margin:0},text:{marginTop:50*e.spacing.unit}}})(function(e){var a=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.unstable_Box,{height:100},r.a.createElement(P.a,null),r.a.createElement("div",{className:a.hoge},r.a.createElement(w.unstable_Box,{height:"100%"},r.a.createElement(k.a,{className:a.text,component:"h1",variant:"h1",align:"center",color:"textPrimary",gutterBottom:!0},"Welcome to my Portfolio")))))}),xe=t(131),Ce=t.n(xe),ve=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1,color:!0},t.handleDrawerOpen=function(){t.setState({open:!0})},t.handleDrawerClose=function(){t.setState({open:!1})},t.handleClickTop=function(){t.setState({color:!0,open:!1})},t.handleClickElse=function(){t.setState({color:!1,open:!1})},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e,a=this.props,t=a.classes,n=a.theme,i=this.state.open,l=this.state.color;return r.a.createElement(h.a,{basename:"/portfolio"},r.a.createElement(w.unstable_Box,{height:100},r.a.createElement(w.unstable_Box,{height:"100%"},r.a.createElement("div",{className:t.root},r.a.createElement(P.a,null),r.a.createElement(F.a,{position:"fixed",className:O()(t.appBar,Object(o.a)({},t.appBarShift,i))},r.a.createElement(W.a,{disableGutters:!i},r.a.createElement(V.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:O()(t.menuButton,i&&t.hide)},r.a.createElement(U.a,null)),r.a.createElement(k.a,{variant:"h5",color:"inherit",noWrap:!0},"Portfolio"))),r.a.createElement(N.a,{className:t.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:t.drawerPaper}},r.a.createElement("div",{className:t.drawerHeader},r.a.createElement(V.a,{onClick:this.handleDrawerClose},"ltr"===n.direction?r.a.createElement(A.a,null):r.a.createElement(K.a,null))),r.a.createElement(I.a,null,r.a.createElement(h.b,{to:"/",onClick:this.handleClickTop},r.a.createElement(M.a,{button:!0,key:"Top"},r.a.createElement(J.a,null,r.a.createElement(ae.a,null)),r.a.createElement(z.a,{primary:"Top"}))),r.a.createElement(h.b,{to:"/profile",onClick:this.handleClickElse},r.a.createElement(M.a,{button:!0,key:"Profile"},r.a.createElement(J.a,null,r.a.createElement($.a,null)),r.a.createElement(z.a,{primary:"Profile"}))),r.a.createElement(h.b,{to:"/works",onClick:this.handleClickElse},r.a.createElement(M.a,{button:!0,key:"Works"},r.a.createElement(J.a,null,r.a.createElement(Z.a,null)),r.a.createElement(z.a,{primary:"Works"}))),r.a.createElement(h.b,{to:"/skill",onClick:this.handleClickElse},r.a.createElement(M.a,{button:!0,key:"Skill"},r.a.createElement(J.a,null,r.a.createElement(ne.a,null)),r.a.createElement(z.a,{primary:"Skill"}))))),r.a.createElement("main",{className:O()(t.content,(e={},Object(o.a)(e,t.contentShift,i),Object(o.a)(e,t.top,l),e)),onClick:this.handleDrawerClose},r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:we}),r.a.createElement(g.a,{path:"/profile",component:C}),r.a.createElement(g.a,{path:"/works",component:be}),r.a.createElement(g.a,{path:"/skill",component:ke}),r.a.createElement(g.a,{path:"/modal",component:Ce.a}),r.a.createElement(g.a,{component:we})))))))}}]),a}(r.a.Component),Oe=Object(E.withStyles)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),background:"#FFA000"},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(d.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-front"}),content:{flexGrow:1,padding:3*e.spacing.unit,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},top:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}}},{withTheme:!0})(ve);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[142,1,2]]]);
//# sourceMappingURL=main.12b1eef9.chunk.js.map