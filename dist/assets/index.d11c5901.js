var be=Object.defineProperty,pe=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var oe=(t,r,c)=>r in t?be(t,r,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[r]=c,s=(t,r)=>{for(var c in r||(r={}))Se.call(r,c)&&oe(t,c,r[c]);if(ce)for(var c of ce(r))Ce.call(r,c)&&oe(t,c,r[c]);return t},a=(t,r)=>pe(t,xe(r));import{R as ue,j as ge,r as o,u as Ne,i as we,g as je,P as ye,a as Ae,G as De,s as Le,b as Re}from"./vendor.0945d6ec.js";const Te=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))h(d);new MutationObserver(d=>{for(const n of d)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&h(m)}).observe(document,{childList:!0,subtree:!0});function c(d){const n={};return d.integrity&&(n.integrity=d.integrity),d.referrerpolicy&&(n.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?n.credentials="include":d.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function h(d){if(d.ep)return;d.ep=!0;const n=c(d);fetch(d.href,n)}};Te();const te=ue.createContext({isSelected:!1,renderSection:!1}),Fe="_header_1jbne_27",Ie="_navigation_1jbne_58",Me="_logo_1jbne_84",Oe="_nav_1jbne_58",Ee="_nav__item_1jbne_114",He="_google_1jbne_239";var _={header:Fe,"header-wrapper":"_header-wrapper_1jbne_35",navigation:Ie,logo:Me,"logo-item":"_logo-item_1jbne_91",nav:Oe,nav__item:Ee,"hamburger-button":"_hamburger-button_1jbne_137","hamburger-icon":"_hamburger-icon_1jbne_146","close-icon":"_close-icon_1jbne_147","nav-mobile":"_nav-mobile_1jbne_176","hamburger-not-active":"_hamburger-not-active_1jbne_192","hamburger-active":"_hamburger-active_1jbne_217",google:He};const e=ge.exports.jsx,i=ge.exports.jsxs,Be=t=>i("svg",a(s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),{children:[e("title",{children:"Menu"}),e("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:32,d:"M80 160h352M80 256h352M80 352h352"})]})),Pe=t=>i("svg",a(s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),{children:[e("title",{children:"Close"}),e("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32,d:"M368 368 144 144m224 0L144 368"})]})),de=t=>i("svg",a(s({width:46,height:46,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},t),{children:[e("title",{children:"btn_google_light_normal_ios"}),i("defs",{children:[i("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"a",children:[e("feOffset",{dy:1,in:"SourceAlpha",result:"shadowOffsetOuter1"}),e("feGaussianBlur",{stdDeviation:.5,in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),e("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.168 0",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}),e("feOffset",{in:"SourceAlpha",result:"shadowOffsetOuter2"}),e("feGaussianBlur",{stdDeviation:.5,in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),e("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.084 0",in:"shadowBlurOuter2",result:"shadowMatrixOuter2"}),i("feMerge",{children:[e("feMergeNode",{in:"shadowMatrixOuter1"}),e("feMergeNode",{in:"shadowMatrixOuter2"}),e("feMergeNode",{in:"SourceGraphic"})]})]}),e("rect",{id:"b",x:0,y:0,width:40,height:40,rx:2})]}),i("g",{fill:"none",fillRule:"evenodd",children:[i("g",{transform:"translate(3 3)",filter:"url(#a)",children:[e("use",{fill:"#FFF",xlinkHref:"#b"}),e("use",{xlinkHref:"#b"}),e("use",{xlinkHref:"#b"}),e("use",{xlinkHref:"#b"})]}),e("path",{d:"M31.64 23.205c0-.639-.057-1.252-.164-1.841H23v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z",fill:"#4285F4"}),e("path",{d:"M23 32c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711h-3.007v2.332A8.997 8.997 0 0 0 23 32Z",fill:"#34A853"}),e("path",{d:"M17.964 24.71a5.41 5.41 0 0 1-.282-1.71c0-.593.102-1.17.282-1.71v-2.332h-3.007A8.996 8.996 0 0 0 14 23c0 1.452.348 2.827.957 4.042l3.007-2.332Z",fill:"#FBBC05"}),e("path",{d:"M23 17.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C27.463 14.891 25.426 14 23 14a8.997 8.997 0 0 0-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71Z",fill:"#EA4335"}),e("path",{d:"M14 14h18v18H14V14Z"})]})]})),$e=t=>{const[r,c]=o.exports.useState(!1),h=()=>{r?(c(!1),console.log("hamburger closed")):(c(!0),console.log("hamburger opened"))};return e("header",{className:_.header,children:i("div",{className:`${_["header-wrapper"]} card-glass ${r?_["hamburger-active"]:_["hamburger-not-active"]}`,children:[i("div",{className:_.navigation,children:[e("div",{className:_["logo-item"],children:e("a",{className:_.logo,href:"#",children:e("img",{src:"src/resources/logo.svg",alt:""})})}),i("nav",{className:_.nav,children:[e("a",{href:"#",className:_.nav__item,children:"SECTION1"}),e("a",{href:"#",className:_.nav__item,children:"SECTION2"}),e("a",{href:"#",className:_.nav__item,children:"SECTION3"}),e("a",{href:"#",className:_.nav__item,children:"SECTION4"}),!t.data.google.user&&i("button",{className:`${_.nav__item} ${_.google}`,onClick:t.data.google.signInWithGoogle,id:"login",children:[e(de,{}),e("p",{children:"Sign in with Google"})]}),t.data.google.auth.currentUser&&i("button",{className:`${_.nav__item} ${_.google}`,onClick:()=>t.data.google.auth.signOut(),id:"login",children:[e(de,{}),e("p",{children:"Sign Out"})]})]}),i("button",{className:_["hamburger-button"],onClick:h,children:[e(Be,{className:`${_["hamburger-icon"]} ${r?_["hidden-btn"]:""} `,alt:"hamburger icon"}),e(Pe,{className:`${_["close-icon"]} ${r?"":_["hidden-btn"]}`,alt:"close icon"})]})]}),i("nav",{className:_["nav-mobile"],children:[e("a",{href:"#",className:_.nav__item,children:"SECTION1"}),e("a",{href:"#",className:_.nav__item,children:"SECTION2"}),e("a",{href:"#",className:_.nav__item,children:"SECTION3"}),e("a",{href:"#",className:_.nav__item,children:"SECTION4"})]})]})})};var se={"section-hero":"_section-hero_1vm92_27","character-selection":"_character-selection_1vm92_48"};const qe="_character_1gbzr_27",ze="_character__name_1gbzr_44",Xe="_character__front_1gbzr_57",Ue="_character__right_1gbzr_65",Ve="_character__left_1gbzr_70",Ge="_selected_1gbzr_84";var W={character:qe,character__name:ze,character__front:Xe,character__right:Ue,character__left:Ve,selected:Ge},We="/assets/character.3ea10162.png";const U=t=>{const c=W[`character__${(h=>{if(h===0)return"left";if(h===1)return"front";if(h===2)return"right"})(t.data)}`];return i("div",{className:`${W.character} ${c||""} ${t.selected?W.selected:""}`,onClick:h=>{t.onRotateCharacters(h)},children:[i("div",{className:W.character__name,children:[t.name,t.data]}),e("img",{"data-const-pos":t.dataConstPos,"data-character":t.data,src:We,alt:"character image"})]})};const Qe="_flicker2_1p1kb_1",Je="_cta__text_1p1kb_103",Ze="_absolute_1p1kb_107";var Q={"button-big":"_button-big_1p1kb_27",flicker2:Qe,"button-text":"_button-text_1p1kb_59",cta__text:Je,absolute:Ze};const V=t=>e("button",{type:t.type?t.type:"",className:`${Q["button-big"]}
    ${t.isAbsolute&&t.isAbsolute.isAbsolute?Q.absolute:""}

     card--glass`,style:t.style,onClick:t.onClick,children:t.type!=="submit"?e("a",{className:Q["button-text"],href:`#${t.moveTo?t.moveTo:""}`,children:t.text}):e("p",{className:Q["button-text"],children:t.text})},Math.random()),Ke="_characters_1l2gm_27",Ye="_hidden_1l2gm_41",et="_character__overlay_1l2gm_77",tt="_cta_1l2gm_96",lt="_cta__text_1l2gm_104",st="_shine4_1l2gm_1";var M={characters:Ke,hidden:Ye,"character-col":"_character-col_1l2gm_46",character__overlay:et,"character__overlay--hidden":"_character__overlay--hidden_1l2gm_91",cta:tt,cta__text:lt,shine4:st,"character-level":"_character-level_1l2gm_121","character-level__level-title":"_character-level__level-title_1l2gm_143","character-level__level-number":"_character-level__level-number_1l2gm_146","character-levels":"_character-levels_1l2gm_170"};const at=t=>{const[r,c]=o.exports.useState(0),[h,d]=o.exports.useState(1),[n,m]=o.exports.useState(2),[g,C]=o.exports.useState("false"),S=o.exports.useContext(te),N=()=>{C(!g),D(),t.onCtaButtonChange({clicked:g}),A.current.ondragstart=()=>!1},f=o.exports.useRef(null),A=o.exports.useRef(null);o.exports.useEffect(()=>{const k={leftChar:r,frontChar:h,rightChar:n};t.charState(k)},[r,h,n]);const T=[0,1,2],I=((k,y=300)=>{let L;return(...R)=>{clearTimeout(L),L=setTimeout(()=>{k.apply(globalThis,R)},y)}})(()=>D()),D=()=>{let k;f.current&&(k=f.current.offsetWidth);let y=k*.4;document.documentElement.style.setProperty("--characters-width",y+"px")};window.addEventListener("resize",I);const q=function(k,y=-1){if(y==1)return(k+1)%3;if(y==-1)return k==0?k+2:(k-1)%3},H=k=>{t.selectedState.setWhichSelected(k)},B=k=>{const y=u=>{c(q(r,u)),d(q(h,u)),m(q(n,u))};let L=0,R=+k.target.dataset.character;R===1&&(t.selectedState.setSelected(!0),H(+k.target.dataset.constPos)),R===0&&(L=1,y(L),t.selectedState.setSelected(!1),H(null),S.setRenderSection(!1)),R===2&&(L=-1,y(L),t.selectedState.setSelected(!1),H(null),S.setRenderSection(!1)),k.target===f.current&&(t.selectedState.setSelected(!1),H(null),S.setRenderSection(!1))};let z=r===1&t.selectedState.isSelected,X=h===1&t.selectedState.isSelected,G=n===1&t.selectedState.isSelected;const P=()=>z?{isSelected:!0,text:"Create character",moveTo:"creator"}:X?{isSelected:!0,text:"Level me up",moveTo:"about-me"}:{isSelected:!1},le=()=>{S.setRenderSection(!0)};return i("div",{ref:A,className:M["character-col"],children:[e("div",{className:`${M.character__overlay} ${g?"":M["character__overlay--hidden"]}`,children:i("div",{className:M.cta,children:[e(V,{isAbsolute:!1,onClick:N,text:"Select Character"}),e("div",{className:`${M.cta__text}  shine`,children:"And let your adventure begin..."})]})}),i("div",{ref:f,onClick:B,className:`${M.characters} ${g?M.hidden:""}`,children:[P().isSelected?e(V,{onClick:le,moveTo:P().moveTo,isAbsolute:{isAbsolute:!0},text:P().text}):"",e(U,{dataConstPos:T[0],data:r,selected:z,name:"Left",onRotateCharacters:B}),e(U,{dataConstPos:T[1],data:h,selected:X,name:"Front",onRotateCharacters:B}),e(U,{dataConstPos:T[2],selected:G,data:n,name:"Right",onRotateCharacters:B})]})]})};var J={"skill-tile":"_skill-tile_1ur3i_27","skill-tile-level":"_skill-tile-level_1ur3i_67","skill-tile-name":"_skill-tile-name_1ur3i_68","skill-tile-icon":"_skill-tile-icon_1ur3i_95"};const rt=t=>e(o.exports.Fragment,{children:i("button",{className:J["skill-tile"],children:[e("div",{className:J["skill-tile-level"],children:e("p",{children:t.skill.lvl})}),e("div",{className:J["skill-tile-icon"],children:e("img",{src:t.skill.icon})}),e("div",{className:J["skill-tile-name"],children:e("p",{children:t.skill.name})})]})});var he="/assets/1.0a434083.svg",Z="/assets/2.ba6bedbc.svg",it="/assets/3.81ee32fd.svg",nt="/assets/4.8b3dfa56.svg",ct="/assets/5.788b8660.svg",ot="/assets/6.7ca4c8b5.svg",dt="/assets/7.72b012cb.svg",_e="/assets/8.27088f9a.svg",ht="/assets/9.dfb74367.svg",_t="/assets/10.8e7123e0.svg",mt="/assets/13.3cd30d38.svg",vt="/assets/14.767ba50a.svg",ut="/assets/15.970f2fd9.svg",gt="/assets/17.f36a900e.svg",kt="/assets/18.7aa314f8.svg",ft="/assets/19.8b027b20.svg",bt="/assets/20.27d96244.svg",pt="/assets/22.9022d9e8.svg",xt="/assets/23.43620640.svg",K="/assets/26.b2af9f3f.svg",St="/assets/25.8a1cb3ce.png",Ct="/assets/27.194350df.svg",Nt="/assets/28.cf7f6481.svg",wt="/assets/29.89936136.svg",me="/assets/30.6999bf32.svg",jt="/assets/31.799a5318.svg",yt="/assets/32.b9aa9c6a.svg",ve="/assets/33.686df6a8.svg",At="/assets/35.07788d6d.svg",Dt="/assets/36.7b13e3c5.svg",Lt="/assets/37.f67cdf26.svg",Rt="/assets/38.57544037.svg",Tt="/assets/39.3fef0fab.svg",Ft="/assets/40.020cbe20.svg",It="/assets/41.0aafdd10.svg",Mt="data:image/png;base64,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",Ot="/assets/43.4e1bd9ad.svg",Et="/assets/45.cc6523e8.svg",Ht="/assets/46.06b0bca0.svg",Bt="/assets/47.d424469c.svg",Pt="/assets/48.f47543d0.svg",$t="/assets/49.cc3faffd.svg",qt="/assets/50.13f479e2.svg",zt="/assets/51.7f9483f2.svg",Xt="/assets/52.13b7da21.png",Ut="/assets/54.fd352404.svg",Vt="/assets/55.5e0c52e1.svg",Gt="/assets/56.9b6f04d4.svg",Wt="/assets/57.c4b08fe6.svg",Qt="/assets/58.32995831.svg",Jt="/assets/59.3c1981fd.png",Zt="/assets/60.a3c92e92.svg",Kt="/assets/61.4274306b.svg",Yt="/assets/62.d33268da.svg",el="/assets/63.933f991d.svg",tl="/assets/65.7a16d51d.svg",ll="/assets/66.f80df3f0.svg",sl="/assets/67.0b623229.svg",al="/assets/68.f025d683.svg",rl="/assets/69.dc3bc1b9.svg";const il=[he,he,Z,it,nt,ct,ot,dt,_e,ht,_t,Z,Z,mt,vt,ut,_e,gt,kt,ft,bt,pt,xt,Z,K,St,K,Ct,Nt,wt,me,jt,yt,ve,ve,At,Dt,Lt,Rt,Tt,Ft,It,Mt,Ot,K,Et,Ht,Bt,Pt,$t,qt,zt,Xt,me,Ut,Vt,Gt,Wt,Qt,Jt,Zt,Kt,Yt,el,K,tl,ll,sl,al,rl],l=[{id:0,name:"DUMMY"},{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JavaScript"},{id:4,name:"Git"},{id:5,name:"GitHub"},{id:6,name:"GitLab"},{id:7,name:"Bitbucket"},{id:8,name:"npm"},{id:9,name:"yarn"},{id:10,name:"BEM"},{id:11,name:"OOCSS"},{id:12,name:"SMACSS"},{id:13,name:"Sass"},{id:14,name:"PostCSS"},{id:15,name:"Less"},{id:16,name:"npm scripts"},{id:17,name:"Webpack"},{id:18,name:"esbuild"},{id:19,name:"Rollup"},{id:20,name:"Parcel"},{id:21,name:"Vite"},{id:22,name:"Styled Components"},{id:23,name:"CSS Modules"},{id:24,name:"Styled JSX"},{id:25,name:"Emotion"},{id:26,name:"React"},{id:27,name:"Redux"},{id:28,name:"MobX"},{id:29,name:"Recoil"},{id:30,name:"Angular"},{id:31,name:"RxJS"},{id:32,name:"NgRx"},{id:33,name:"Vue.js"},{id:34,name:"VueX"},{id:35,name:"Bootstrap"},{id:36,name:"Bulma"},{id:37,name:"Tailwind CSS"},{id:38,name:"Chakra UI"},{id:39,name:"Material UI"},{id:40,name:"Radix UI"},{id:41,name:"Jest"},{id:42,name:"react-testing-library"},{id:43,name:"Cypress"},{id:44,name:"Enzyme"},{id:45,name:"Mocha"},{id:46,name:"Chai"},{id:47,name:"Ava"},{id:48,name:"Jasmine"},{id:49,name:"TypeScript"},{id:50,name:"Flow"},{id:51,name:"Next.js"},{id:52,name:"After.js"},{id:53,name:"Universal"},{id:54,name:"Nuxt.js"},{id:55,name:"GraphQL"},{id:56,name:"Apollo"},{id:57,name:"Relay Modern"},{id:58,name:"GatsbyJS"},{id:59,name:"Vuepress"},{id:60,name:"Jekyll"},{id:61,name:"Hugo"},{id:62,name:"Gridsome"},{id:63,name:"Eleventy"},{id:64,name:"React Native"},{id:65,name:"NativeScript"},{id:66,name:"Flutter"},{id:67,name:"Ionic"},{id:68,name:"Electron"},{id:69,name:"Proton Native"}];for(let t=1;t<l.length;t++)l[t].icon||(l[t].icon=il[t]);const nl="_blink_1i5rg_1",cl="_lineheight_1i5rg_1",ol="_shine3_1i5rg_1",dl="_shine4_1i5rg_1",hl="_lineheight2_1i5rg_1";var b={"skills-list":"_skills-list_1i5rg_27",blink:nl,"skills-list-name":"_skills-list-name_1i5rg_58","character-skills":"_character-skills_1i5rg_73","skills-col":"_skills-col_1i5rg_89","skills-window":"_skills-window_1i5rg_111","skills-window__header":"_skills-window__header_1i5rg_169","skills-text":"_skills-text_1i5rg_198",lineheight:cl,shine3:ol,"abs-up":"_abs-up_1i5rg_239",shine4:dl,lineheight2:hl,"skills-card":"_skills-card_1i5rg_248","character-level":"_character-level_1i5rg_259","character-level__level-title":"_character-level__level-title_1i5rg_281","character-level__level-number":"_character-level__level-number_1i5rg_284","character-levels":"_character-levels_1i5rg_308","abs-down":"_abs-down_1i5rg_315","selected--skills":"_selected--skills_1i5rg_323"};const _l=t=>{const r=o.exports.useRef(),c=o.exports.useRef(null),h=o.exports.useContext(te),d=N=>{const f=N.reduce((I=0,D)=>I+=D.lvl,0),A=(l.length-1)*10;function T(I,D){return 100*I/D}const E=T(f,A);return Math.floor(E)};o.exports.useEffect(()=>{h.isSelected?r.current.classList.add(`${b["selected--skills"]}`):r.current.classList.remove(`${b["selected--skills"]}`)},[h]);const n=[a(s({},l[3]),{lvl:2}),a(s({},l[4]),{lvl:1}),a(s({},l[5]),{lvl:4})],m=[a(s({},l[1]),{lvl:6}),a(s({},l[2]),{lvl:7}),a(s({},l[3]),{lvl:7}),a(s({},l[4]),{lvl:4}),a(s({},l[5]),{lvl:3}),a(s({},l[13]),{lvl:7}),a(s({},l[8]),{lvl:5}),a(s({},l[23]),{lvl:5}),a(s({},l[26]),{lvl:5}),a(s({},l[10]),{lvl:5})],g=[a(s({},l[1]),{lvl:9}),a(s({},l[2]),{lvl:9}),a(s({},l[3]),{lvl:9}),a(s({},l[4]),{lvl:9}),a(s({},l[5]),{lvl:9}),a(s({},l[6]),{lvl:9}),a(s({},l[7]),{lvl:9}),a(s({},l[8]),{lvl:9}),a(s({},l[9]),{lvl:9}),a(s({},l[10]),{lvl:9}),a(s({},l[11]),{lvl:9}),a(s({},l[12]),{lvl:9}),a(s({},l[13]),{lvl:9}),a(s({},l[14]),{lvl:9}),a(s({},l[15]),{lvl:9}),a(s({},l[16]),{lvl:9}),a(s({},l[17]),{lvl:9}),a(s({},l[18]),{lvl:9}),a(s({},l[19]),{lvl:9}),a(s({},l[20]),{lvl:9}),a(s({},l[21]),{lvl:9}),a(s({},l[22]),{lvl:9}),a(s({},l[23]),{lvl:9}),a(s({},l[24]),{lvl:9}),a(s({},l[25]),{lvl:9}),a(s({},l[26]),{lvl:9}),a(s({},l[27]),{lvl:9}),a(s({},l[28]),{lvl:9}),a(s({},l[29]),{lvl:9}),a(s({},l[30]),{lvl:9}),a(s({},l[31]),{lvl:9}),a(s({},l[32]),{lvl:9}),a(s({},l[33]),{lvl:9}),a(s({},l[34]),{lvl:9}),a(s({},l[35]),{lvl:9}),a(s({},l[36]),{lvl:9}),a(s({},l[37]),{lvl:9}),a(s({},l[38]),{lvl:9}),a(s({},l[39]),{lvl:9}),a(s({},l[40]),{lvl:9}),a(s({},l[41]),{lvl:9}),a(s({},l[42]),{lvl:9}),a(s({},l[43]),{lvl:9}),a(s({},l[44]),{lvl:9}),a(s({},l[45]),{lvl:9}),a(s({},l[46]),{lvl:9}),a(s({},l[47]),{lvl:9}),a(s({},l[48]),{lvl:9}),a(s({},l[49]),{lvl:9}),a(s({},l[50]),{lvl:9}),a(s({},l[51]),{lvl:9}),a(s({},l[52]),{lvl:9}),a(s({},l[53]),{lvl:9}),a(s({},l[54]),{lvl:9}),a(s({},l[55]),{lvl:9}),a(s({},l[56]),{lvl:9}),a(s({},l[57]),{lvl:9}),a(s({},l[58]),{lvl:9}),a(s({},l[59]),{lvl:9}),a(s({},l[60]),{lvl:9}),a(s({},l[61]),{lvl:9}),a(s({},l[62]),{lvl:9}),a(s({},l[63]),{lvl:9}),a(s({},l[64]),{lvl:9}),a(s({},l[65]),{lvl:9}),a(s({},l[66]),{lvl:9}),a(s({},l[67]),{lvl:9}),a(s({},l[68]),{lvl:9}),a(s({},l[69]),{lvl:9})],C=[[...n],[...m],[...g]],S=(N,f)=>(c.current&&(c.current.scrollTop=0),e("ul",{className:b["skills-list"],"data-character":f,children:C[N].map(A=>e(rt,{skill:A},A.id))}));return e("div",{className:b["skills-col"],children:i("div",{ref:r,className:`card--glass ${b["skills-window"]} ${t.onCtaButtonChange.clicked?"":"not-started"} `,children:[i("div",{className:`${b["skills-text"]} shine ${t.onCtaButtonChange.clicked?b["abs-up"]:""}`,children:[e("p",{children:"Choose"}),e("p",{children:"and"}),e("p",{children:e("strong",{className:"shine",children:" level up"})}),e("p",{children:"your"}),e("p",{children:"developer!"})]}),i("div",{className:`${b["skills-card"]} ${t.onCtaButtonChange.clicked?"":b["abs-down"]}`,children:[i("header",{className:b["skills-window__header"],children:[e("div",{className:b["skills-list-name"],children:e("h2",{children:"Skills"})}),i("div",{className:b["character-level"],children:[e("div",{className:b["character-level__level-title"],children:"level"}),i("div",{className:b["character-levels"],children:[e("div",{className:b["character-level__level-number"],"data-character":t.charStateData.leftChar,children:d(n)}),e("div",{className:b["character-level__level-number"],"data-character":t.charStateData.frontChar,children:d(m)}),e("div",{className:b["character-level__level-number"],"data-character":t.charStateData.rightChar,children:d(g)})]})]})]}),i("div",{ref:c,className:`${b["character-skills"]} `,children:[S(0,t.charStateData.leftChar),S(1,t.charStateData.frontChar),S(2,t.charStateData.rightChar)]})]})]})})},ml=t=>{const r=o.exports.useContext(te),[c,h]=o.exports.useState(!1),[d,n]=o.exports.useState({},f=>{console.log(f)}),[m,g]=o.exports.useState("false"),C=f=>{n(f)},S=f=>{g(f)},N=f=>{h(f)};return e("section",{className:se["section-hero"],children:i("div",{className:se["character-selection"],children:[e(at,{onCtaButtonChange:S,onSelectedChange:N,selectedState:r,charState:C}),e(_l,{className:se["character-skills"],onCtaButtonChange:m,charStateData:d,onReceivedSelectState:c})]})})},vl="_shine_7kkbx_232",ul="_dummy_7kkbx_1",gl="_shine2_7kkbx_1",kl="_flicker_7kkbx_1",fl="_flicker2_7kkbx_1",bl="_shine3_7kkbx_1",pl="_shine4_7kkbx_1",xl="_blink_7kkbx_1",Sl="_blink2_7kkbx_1",Cl="_pxmove_7kkbx_1",Nl="_lineheight_7kkbx_1",wl="_lineheight2_7kkbx_1",jl="_popzoom_7kkbx_1",yl="_cardmove_7kkbx_1",Al="_cardmoverev_7kkbx_1";var Dl={"absolute-center":"_absolute-center_7kkbx_219","cancel-absolute":"_cancel-absolute_7kkbx_228",shine:vl,"card--glass":"_card--glass_7kkbx_239","not-started":"_not-started_7kkbx_246","hidden-btn":"_hidden-btn_7kkbx_263","slide-right-left":"_slide-right-left_7kkbx_1","slide-left-right":"_slide-left-right_7kkbx_1","rotate-left-right":"_rotate-left-right_7kkbx_1",dummy:ul,shine2:gl,flicker:kl,flicker2:fl,shine3:bl,shine4:pl,blink:xl,blink2:Sl,pxmove:Cl,lineheight:Nl,lineheight2:wl,popzoom:jl,cardmove:yl,cardmoverev:Al};const ne=t=>e("div",{className:`${Dl["card--glass"]} ${t.className?t.className:""}`,children:t.children}),Ll="_container_1yktx_44",Rl="_labels_1yktx_51",Tl="_name_1yktx_58",Fl="_email_1yktx_60",Il="_textfield_1yktx_134";var j={"contact-me":"_contact-me_1yktx_27",container:Ll,labels:Rl,"name-email":"_name-email_1yktx_58",name:Tl,email:Fl,"error-corner":"_error-corner_1yktx_101",textfield:Il,"input-error":"_input-error_1yktx_198","form-error":"_form-error_1yktx_201"};const Ml=t=>{const r={};return t.name?t.name.length<2&&(r.name="More than 1 characters"):r.name="Required",t.text?t.text.length<2&&(r.text="More than 2 characters"):r.text="Required",t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(r.email="Invalid email address"):r.email="Required",r},Ol=t=>{Email.send({Host:"smtp.gmail.com",Username:"portfoliod3s@gmail.com",Password:"ZAQ!2wsx",To:"damiansobierajdev@gmail.com",From:t.email,Subject:"Contact from Portfolio",Body:`${t.email} ${t.text}`}).then(r=>alert(r))},El=t=>{const r=Ne({initialValues:{name:"",email:"",text:""},validate:Ml,onSubmit:async n=>{Ol(n),await(await fetch("https://portfolio-27cdd-default-rtdb.europe-west1.firebasedatabase.app/emails.json",{method:"POST",body:JSON.stringify(n,null,2),headers:{"Content-Type":"application/json"}})).json()}}),c=n=>r.errors[n]&&r.touched[n]?e("div",{className:j["form-error"],children:r.errors[n]}):null,h=n=>r.errors[n]&&r.touched[n]?j["input-error"]:null,d=n=>r.errors[n]&&r.touched[n]?j["error-corner"]:null;return e("div",{id:"contact-me",className:j["contact-me"],children:e("div",{className:j.container,children:i("form",{onSubmit:r.handleSubmit,children:[i("div",{className:j["name-email"],children:[i("div",{className:`${j.name} ${d("name")}`,children:[i("div",{className:j.labels,children:[e("label",{htmlFor:"name",children:"Your Name"}),c("name")]}),e("input",{className:h("name"),id:"name",type:"text",name:"name",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.name})]}),i("div",{className:`${j.email} ${d("email")}`,children:[i("div",{className:j.labels,children:[e("label",{htmlFor:"email",children:"Your Email"}),c("email")]}),e("input",{className:`${h("email")}`,id:"email",type:"email",name:"email",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.email})]})]}),i("div",{className:`${j.textfield} ${d("text")}`,children:[i("div",{className:j.labels,children:[e("label",{htmlFor:"text",children:"Your Message"}),c("text")]}),e("textarea",{className:h("text"),id:"text",type:"text",name:"text",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.text})]}),e(V,{type:"submit",text:"Send"})]})})})},Hl="_projects_hhgso_27",Bl="_title_hhgso_36",Pl="_scene_hhgso_50",$l="_project_hhgso_27",ql="_links_hhgso_187",zl="_skill_hhgso_227";var p={projects:Hl,title:Bl,"my-projects":"_my-projects_hhgso_40",scene:Pl,project:$l,"project-image-window":"_project-image-window_hhgso_106","project-link":"_project-link_hhgso_109","project-image":"_project-image_hhgso_106","project-description":"_project-description_hhgso_137","project-title":"_project-title_hhgso_146","project-overview":"_project-overview_hhgso_155","used-skills":"_used-skills_hhgso_170","used-skills-title":"_used-skills-title_hhgso_182",links:ql,skill:zl,"skill-title":"_skill-title_hhgso_258"},ae="/assets/project1.ab6f645b.png",Xl="/assets/logo-github.002bb576.svg";const Ul=t=>i("div",{className:p.projects,children:[e("p",{className:p.title,children:"My Projects"}),i("div",{className:p["my-projects"],children:[e("div",{className:p.scene,children:e(re,{projectData:{image:ae,title:"portfolio",overview:i(o.exports.Fragment,{children:["Frontend game-like character ",e("strong",{children:"selector"})," and"," ",e("strong",{children:"creator"})," , create your own character or contact me and ",e("strong",{children:"LEVEL ME UP!"})]}),skills:[l[1],l[2],l[3],l[26],l[13],l[23],l[5],l[21]],link:"https://portfolio-27cdd.web.app/",repo:"https://github.com/Dant3s15/portfoliov3"}})}),e("div",{className:p.scene,children:e(re,{projectData:{image:ae,title:"portfolio",overview:i(o.exports.Fragment,{children:["Frontend game-like character ",e("strong",{children:"selector"})," and"," ",e("strong",{children:"creator"})," , create your own character or contact me and ",e("strong",{children:"LEVEL ME UP!"})]}),skills:[l[1],l[2],l[3],l[26],l[13],l[23],l[5],l[21]],link:"https://portfolio-27cdd.web.app/",repo:"https://github.com/Dant3s15/portfoliov3"}})}),e("div",{className:p.scene,children:e(re,{projectData:{image:ae,title:"portfolio",overview:i(o.exports.Fragment,{children:["Frontend game-like character ",e("strong",{children:"selector"})," and"," ",e("strong",{children:"creator"})," , create your own character or contact me and ",e("strong",{children:"LEVEL ME UP!"})]}),skills:[l[1],l[2],l[3],l[26],l[13],l[23],l[5],l[21]],link:"https://portfolio-27cdd.web.app/",repo:"https://github.com/Dant3s15/portfoliov3"}})})]})]}),re=t=>{var h,d,n,m,g,C,S;const r=(h=t.projectData)==null?void 0:h.skills,c=r==null?void 0:r.map(N=>i("li",{className:p.skill,children:[e("img",{src:N.icon,alt:""}),e("p",{className:p["skill-title"],children:N.name})]},Math.random()));return i(ne,{className:`${p.project}`,children:[e("div",{className:p.links,children:e("a",{href:(d=t.projectData)==null?void 0:d.repo,target:"_blank",children:e("img",{src:Xl,alt:"github"})})}),e("div",{className:p["project-image-window"],children:e("a",{className:p["project-link"],href:(n=t.projectData)==null?void 0:n.link,target:"_blank",children:e("img",{src:(m=t.projectData)==null?void 0:m.image,className:p["project-image"]})})}),i("div",{className:p["project-description"],children:[e("h3",{className:p["project-title"],children:(C=(g=t.projectData)==null?void 0:g.title)!=null?C:"Title"}),e("div",{className:p["project-overview"],children:e("p",{children:(S=t.projectData)==null?void 0:S.overview})}),e("h3",{className:p["used-skills-title"],children:"Skills Used:"}),e("ul",{className:p["used-skills"],children:c})]})]})},Vl="_title_j8hhk_45",Gl="_text_j8hhk_41",Wl="_char__container_j8hhk_60";var O={"about-me":"_about-me_j8hhk_27","about-me-text":"_about-me-text_j8hhk_34","text-container":"_text-container_j8hhk_41",title:Vl,text:Gl,"about-me-char":"_about-me-char_j8hhk_52",char__container:Wl};const Ql=t=>i(o.exports.Fragment,{children:[i("div",{id:"about-me",className:O["about-me"],children:[e("div",{className:O["about-me-text"],children:e("div",{className:`${O["text-container"]}`,children:i(ne,{children:[e("h2",{className:O.title,children:"About Me"}),e("p",{className:O.text,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure provident quae assumenda consequatur rem minus animi, voluptatem, quisquam nihil fugiat ea dignissimos, similique eum porro atque. Vitae est delectus numquam fugiat quidem. Ab, culpa reiciendis dolorum obcaecati laudantium excepturi cupiditate?"})]})})}),i("div",{className:O["about-me-char"],children:[e(V,{isAbsolute:{isAbsolute:!0},style:{top:"80%"},text:"Contact Me",moveTo:"contact-me"}),e("div",{className:`${O.char__container} cancel-absolute`,children:e(U,{onRotateCharacters:()=>{},data:"1",name:"Front"})})]})]}),e(Ul,{}),e(El,{})]}),Jl="_shine_tho8d_266",Zl="_skill_tho8d_301",Kl="_icon_tho8d_326",Yl="_name_tho8d_340",es="_level_tho8d_353",ts="_dummy_tho8d_1",ls="_shine2_tho8d_1",ss="_flicker_tho8d_1",as="_flicker2_tho8d_1",rs="_shine3_tho8d_1",is="_shine4_tho8d_1",ns="_blink_tho8d_1",cs="_blink2_tho8d_1",os="_pxmove_tho8d_1",ds="_lineheight_tho8d_1",hs="_lineheight2_tho8d_1",_s="_popzoom_tho8d_1",ms="_cardmove_tho8d_1",vs="_cardmoverev_tho8d_1";var $={"absolute-center":"_absolute-center_tho8d_253","cancel-absolute":"_cancel-absolute_tho8d_262",shine:Jl,"card--glass":"_card--glass_tho8d_273","not-started":"_not-started_tho8d_280","hidden-btn":"_hidden-btn_tho8d_297",skill:Zl,icon:Kl,name:Yl,"manage-skill":"_manage-skill_tho8d_345",level:es,"level-title":"_level-title_tho8d_364","slide-right-left":"_slide-right-left_tho8d_1","slide-left-right":"_slide-left-right_tho8d_1","rotate-left-right":"_rotate-left-right_tho8d_1",dummy:ts,shine2:ls,flicker:ss,flicker2:as,shine3:rs,shine4:is,blink:ns,blink2:cs,pxmove:os,lineheight:ds,lineheight2:hs,popzoom:_s,cardmove:ms,cardmoverev:vs};const ke=t=>{const r=i("div",{className:$.level,children:[e("p",{className:$["level-title"],children:"LVL"}),e("p",{children:t.data.level})]});return i("div",{className:$.skill,children:[e("div",{className:$.icon,children:e("img",{src:t.data.icon,alt:"skill icon"})}),i("div",{className:$.name,children:[t.data.name," ",t.data.id]}),t.data.level?r:"",e("button",{onClick:()=>{t.onSkillChange(t.data)},className:$["manage-skill"],children:t.sign})]})},us="_blur_13wk8_27",gs="_levels_13wk8_45";var Y={blur:us,"skill-add-window":"_skill-add-window_13wk8_39",levels:gs};const ks=t=>{const[r,c]=o.exports.useState(null),h=o.exports.useRef(),d=m=>(c(m),t.skillData.level=m,t.onSetLevel(!0),m),n=()=>{t.skillData.level=void 0,t.onSetLevel(!1),t.onCancel()};return e("div",{className:Y.blur,onClick:n,children:i("div",{className:Y["skill-add-window"],onClick:m=>{m.stopPropagation()},children:[e("div",{className:Y.title,children:"Adding Skill"}),e(ke,{onSkillChange:t.onSkillAdd,data:t.skillData,sign:"+"}),e("div",{className:Y.levels,children:e("input",{onChange:()=>{d(h.current.value)},ref:h,type:"range",min:"1",max:"10"})})]})})};var F={"skill-selector":"_skill-selector_1zpu9_27","skills-selector__grid":"_skills-selector__grid_1zpu9_36","title-row":"_title-row_1zpu9_44","skills-menu":"_skills-menu_1zpu9_51"};const fs=t=>{const[r,c]=o.exports.useState(l),[h,d]=o.exports.useState(r),[n,m]=o.exports.useState(!1),[g,C]=o.exports.useState([]),[S,N]=o.exports.useState(g),[f,A]=o.exports.useState(!1),[T,E]=o.exports.useState(!1),[I,D]=o.exports.useState(!1),[q,H]=o.exports.useState(l[0]),[B,z]=o.exports.useState(!1),X=o.exports.useRef(""),G=o.exports.useRef(""),P=()=>{const u=X.current.value.toLowerCase(),w=G.current.value.toLowerCase();if(u!==""){const v=r.filter(x=>x.name.toLowerCase().includes(u));m(!0),d(v)}else m(!1);if(w!==""){const v=g.filter(x=>x.name.toLowerCase().includes(w));A(!0),N(v)}else A(!1)},le=u=>{E(!1),D(!1)},k=u=>{const w=v=>v.sort((x,fe)=>x.name.localeCompare(fe.name));r.some(v=>v===u)?(E(!0),H(u),T&!I&&(c(v=>w(v.filter(x=>x!==u))),d(v=>w(v.filter(x=>x!==u))),C(v=>w([...r.filter(x=>x===u),...v])),E(!1),D(!1))):r.some(v=>v!==u)&&(T||(C(v=>w(v.filter(x=>x!==u))),N(v=>w(v.filter(x=>x!==u))),c(v=>w([...g.filter(x=>(u.level=void 0,x===u)),...v])))),z(!1)},y=u=>{B?(D(!0),k(u)):console.log("scroll")},L=async()=>{if(g.length===0){console.log("add Skills");return}else{const w=await(await fetch("https://portfolio-27cdd-default-rtdb.europe-west1.firebasedatabase.app/saved-characters.json",{method:"POST",body:JSON.stringify(g),headers:{"Content-Type":"application/json"}})).json();console.log(w.name)}},R=(u,w)=>u.map(v=>e(ke,{onSkillChange:k,data:v,sign:w},v.id));return e(o.exports.Fragment,{children:e(ne,{children:i("div",{className:F["skill-selector"],children:[T&&e(ks,{onSetLevel:z,onCancel:le,onSkillAdd:y,skillData:q}),i("div",{className:F["skills-selector__grid"],children:[i("div",{className:F["title-row"],children:["All Skills",i("div",{className:F["search-field"],children:[e("label",{htmlFor:"search-all",children:"Search"}),e("input",{onChange:P,ref:X,id:"search-all",type:"text"})]})]}),i("div",{className:F["title-row"],children:["Added Skills",i("div",{className:F["search-field"],children:[e("label",{htmlFor:"search-added",children:"Search"}),e("input",{onChange:P,ref:G,id:"search-added",type:"text"})]})]}),e("div",{className:F["skills-menu"],children:R(n===!1?r:h,"+")}),e("div",{className:F["skills-menu"],children:R(f===!1?g:S,"-")})]}),e(V,{onClick:L,type:"submit",text:"Save Character"})]})})})},bs="_creator_pbkkc_27";var ee={creator:bs,"skill-selector__col":"_skill-selector__col_pbkkc_35","image-selector__col":"_image-selector__col_pbkkc_43","image-selector":"_image-selector_pbkkc_43"};const ps=t=>i("div",{id:"creator",className:ee.creator,children:[e("div",{className:ee["skill-selector__col"],children:e(fs,{})}),e("div",{className:ee["image-selector__col"],children:e("div",{className:`${ee["image-selector"]} cancel-absolute`,children:e(U,{onRotateCharacters:()=>{},data:"1",name:"Front"})})})]}),xs="_footer_1ftr8_1";var Ss={footer:xs};const Cs=t=>e("div",{className:Ss.footer,children:"Footer"}),Ns=t=>e("h1",{children:"FUTURE"}),ws={apiKey:"AIzaSyA4Biu3C9D3pJF7f3cOgNfMYG4OtewhwNY",authDomain:"portfolio-27cdd.firebaseapp.com",databaseURL:"https://portfolio-27cdd-default-rtdb.europe-west1.firebasedatabase.app",projectId:"portfolio-27cdd",storageBucket:"portfolio-27cdd.appspot.com",messagingSenderId:"156569045681",appId:"1:156569045681:web:7e9b36b440d0a31ac3f090",measurementId:"G-B13VR57PZH"},js=we(ws),ie=je(js);ye();function ys(){const[t,r]=o.exports.useState(!1),[c,h]=o.exports.useState(null),[d,n]=o.exports.useState(!1),[m]=Ae(ie),g=()=>{const C=new De;Le(ie,C)};return i(o.exports.Fragment,{children:[i(te.Provider,{value:{isSelected:t,setSelected:r,whichIsSelected:c,setWhichSelected:h,renderSection:d,setRenderSection:n},children:[e($e,{data:{google:{user:m,auth:ie,signInWithGoogle:g}}}),i("main",{children:[e(ml,{}),c===0&&d?e(ps,{}):"",c===1&&d?e(Ql,{}):"",c===2&&d?e(Ns,{}):""]})]}),e(Cs,{})]})}Re.render(e(ue.StrictMode,{children:e(ys,{})}),document.getElementById("root"));
