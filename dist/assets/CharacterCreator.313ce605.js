import{j as t,T as K,a as v,r,L as Q,B as X,m as Y,C as Z}from"./index.9f8c8d3b.js";import{C as D}from"./CardGlass.5525fe1d.js";const T="_title_eaixj_505",ee="_level_eaixj_542",te="_all_eaixj_601",le="_skillout_eaixj_1",se="_added_eaixj_605",ie="_skillin_eaixj_1",oe="_dummy_eaixj_1",re="_shine_eaixj_1",ce="_shine2_eaixj_1",ne="_flicker_eaixj_1",_e="_flicker2_eaixj_1",ae="_flicker3_eaixj_1",de="_flickerrev_eaixj_1",me="_shine3_eaixj_1",he="_shine4_eaixj_1",ve="_blink_eaixj_1",ke="_blink2_eaixj_1",pe="_pxmove_eaixj_1",ue="_lineheight_eaixj_1",xe="_lineheight2_eaixj_1",fe="_popzoom_eaixj_1",je="_cardmove_eaixj_1",$e="_cardmoverev_eaixj_1",be="_jump_eaixj_1",ge="_jumpnorotate_eaixj_1",Se="_slidedown_eaixj_1",qe="_backdropblur_eaixj_1",we="_cardrotate_eaixj_1",Ne="_cardrotate2_eaixj_1",Ae="_fadein_eaixj_1",Ce="_opacity_eaixj_1",ye="_cursor_eaixj_1",ze="_cardslide_eaixj_1",Ie="_cardslidenotranslate_eaixj_1",Fe="_cardslideback_eaixj_1",Le="_zindex_eaixj_1",He="_zindexback_eaixj_1",Ee="_test_eaixj_1",Re="_slideinfromtop_eaixj_1",We="_levelblink_eaixj_1",Be="_tilepopup_eaixj_1",Oe="_dropshadow_eaixj_1";var a={"skill-selector--card":"_skill-selector--card_eaixj_477","skill-selector":"_skill-selector_eaixj_477","skills-selector__grid":"_skills-selector__grid_eaixj_498","title-row":"_title-row_eaixj_505",title:T,"skills-menu":"_skills-menu_eaixj_519",level:ee,"search-field":"_search-field_eaixj_545","search-label":"_search-label_eaixj_576",all:te,skillout:le,added:se,skillin:ie,"slide-right-left":"_slide-right-left_eaixj_1","slide-left-right":"_slide-left-right_eaixj_1","rotate-left-right":"_rotate-left-right_eaixj_1",dummy:oe,shine:re,shine2:ce,flicker:ne,flicker2:_e,flicker3:ae,flickerrev:de,shine3:me,shine4:he,blink:ve,blink2:ke,pxmove:pe,lineheight:ue,lineheight2:xe,popzoom:fe,cardmove:je,cardmoverev:$e,jump:be,jumpnorotate:ge,slidedown:Se,backdropblur:qe,cardrotate:we,cardrotate2:Ne,fadein:Ae,opacity:Ce,cursor:ye,cardslide:ze,cardslidenotranslate:Ie,cardslideback:Fe,zindex:Le,zindexback:He,test:Ee,slideinfromtop:Re,levelblink:We,tilepopup:Be,dropshadow:Oe};const Pe="_tooltip_1hrry_38";var Ve={tooltip:Pe};const Ge=({data:e})=>{const o=(c,d)=>{if(c)return c.length>d?`${c.slice(0,d)}...`:c};return t("div",{className:Ve.tooltip,children:o(e.description,230)})},Je="_skill_1dmov_477",Me="_icon_1dmov_516",Ue="_name_1dmov_536",Ke="_level_1dmov_599",Qe="_slideinfromtop_1dmov_1",Xe="_dummy_1dmov_1",Ye="_shine_1dmov_1",Ze="_shine2_1dmov_1",De="_flicker_1dmov_1",Te="_flicker2_1dmov_1",et="_flicker3_1dmov_1",tt="_flickerrev_1dmov_1",lt="_shine3_1dmov_1",st="_shine4_1dmov_1",it="_blink_1dmov_1",ot="_blink2_1dmov_1",rt="_pxmove_1dmov_1",ct="_lineheight_1dmov_1",nt="_lineheight2_1dmov_1",_t="_popzoom_1dmov_1",at="_cardmove_1dmov_1",dt="_cardmoverev_1dmov_1",mt="_jump_1dmov_1",ht="_jumpnorotate_1dmov_1",vt="_slidedown_1dmov_1",kt="_backdropblur_1dmov_1",pt="_cardrotate_1dmov_1",ut="_cardrotate2_1dmov_1",xt="_fadein_1dmov_1",ft="_opacity_1dmov_1",jt="_cursor_1dmov_1",$t="_cardslide_1dmov_1",bt="_cardslidenotranslate_1dmov_1",gt="_cardslideback_1dmov_1",St="_zindex_1dmov_1",qt="_zindexback_1dmov_1",wt="_test_1dmov_1",Nt="_skillin_1dmov_1",At="_skillout_1dmov_1",Ct="_levelblink_1dmov_1",yt="_tilepopup_1dmov_1",zt="_dropshadow_1dmov_1";var x={skill:Je,icon:Me,name:Ue,"manage-skill":"_manage-skill_1dmov_569",level:Ke,slideinfromtop:Qe,"level-number":"_level-number_1dmov_615","has-tooltip":"_has-tooltip_1dmov_640","slide-right-left":"_slide-right-left_1dmov_1","slide-left-right":"_slide-left-right_1dmov_1","rotate-left-right":"_rotate-left-right_1dmov_1",dummy:Xe,shine:Ye,shine2:Ze,flicker:De,flicker2:Te,flicker3:et,flickerrev:tt,shine3:lt,shine4:st,blink:it,blink2:ot,pxmove:rt,lineheight:ct,lineheight2:nt,popzoom:_t,cardmove:at,cardmoverev:dt,jump:mt,jumpnorotate:ht,slidedown:vt,backdropblur:kt,cardrotate:pt,cardrotate2:ut,fadein:xt,opacity:ft,cursor:jt,cardslide:$t,cardslidenotranslate:bt,cardslideback:gt,zindex:St,zindexback:qt,test:wt,skillin:Nt,skillout:At,levelblink:Ct,tilepopup:yt,dropshadow:zt};const R=({data:e,onTooltip:o,onSkillChange:c,sign:d})=>{const f=(n,k)=>n.length>k?`${n.slice(0,k)}...`:n,j=t(K,{placement:"top",title:`${e.name.toUpperCase()} Proficiency Level`,children:t("div",{className:x.level,children:t("p",{className:x["level-number"],children:e.level},Math.random())})});return v("div",{className:`${x.skill} ${(o==null?void 0:o.whichTooltip)===(e==null?void 0:e.id)?x["has-tooltip"]:""}`,onClick:()=>{console.log("click"),(e==null?void 0:e.id)!==(o==null?void 0:o.whichTooltip)?o==null||o.setWhichTooltip(e==null?void 0:e.id):o.setWhichTooltip(void 0)},children:[t("div",{className:x.icon,children:t("img",{src:e==null?void 0:e.icon,alt:`${e==null?void 0:e.names[0]} icon`})}),t("div",{className:x.name,children:f(e.names[0],12)}),e.level?j:"",t("button",{onClick:n=>{n.stopPropagation(),c(e)},className:x["manage-skill"],children:d}),t(Ge,{data:e})]})},It="_blur_x3tjq_477",Ft="_opacity_x3tjq_1",Lt="_title_x3tjq_499",Ht="_levelblink_x3tjq_1",Et="_levels_x3tjq_510",Rt="_dropshadow_x3tjq_1",Wt="_dummy_x3tjq_1",Bt="_shine_x3tjq_1",Ot="_shine2_x3tjq_1",Pt="_flicker_x3tjq_1",Vt="_flicker2_x3tjq_1",Gt="_flicker3_x3tjq_1",Jt="_flickerrev_x3tjq_1",Mt="_shine3_x3tjq_1",Ut="_shine4_x3tjq_1",Kt="_blink_x3tjq_1",Qt="_blink2_x3tjq_1",Xt="_pxmove_x3tjq_1",Yt="_lineheight_x3tjq_1",Zt="_lineheight2_x3tjq_1",Dt="_popzoom_x3tjq_1",Tt="_cardmove_x3tjq_1",el="_cardmoverev_x3tjq_1",tl="_jump_x3tjq_1",ll="_jumpnorotate_x3tjq_1",sl="_slidedown_x3tjq_1",il="_backdropblur_x3tjq_1",ol="_cardrotate_x3tjq_1",rl="_cardrotate2_x3tjq_1",cl="_fadein_x3tjq_1",nl="_cursor_x3tjq_1",_l="_cardslide_x3tjq_1",al="_cardslidenotranslate_x3tjq_1",dl="_cardslideback_x3tjq_1",ml="_zindex_x3tjq_1",hl="_zindexback_x3tjq_1",vl="_test_x3tjq_1",kl="_skillin_x3tjq_1",pl="_skillout_x3tjq_1",ul="_slideinfromtop_x3tjq_1",xl="_tilepopup_x3tjq_1";var b={blur:It,opacity:Ft,"skill-add-window":"_skill-add-window_x3tjq_489",title:Lt,levelblink:Ht,levels:Et,"click-me":"_click-me_x3tjq_564",dropshadow:Rt,"slide-right-left":"_slide-right-left_x3tjq_1","slide-left-right":"_slide-left-right_x3tjq_1","rotate-left-right":"_rotate-left-right_x3tjq_1",dummy:Wt,shine:Bt,shine2:Ot,flicker:Pt,flicker2:Vt,flicker3:Gt,flickerrev:Jt,shine3:Mt,shine4:Ut,blink:Kt,blink2:Qt,pxmove:Xt,lineheight:Yt,lineheight2:Zt,popzoom:Dt,cardmove:Tt,cardmoverev:el,jump:tl,jumpnorotate:ll,slidedown:sl,backdropblur:il,cardrotate:ol,cardrotate2:rl,fadein:cl,cursor:nl,cardslide:_l,cardslidenotranslate:al,cardslideback:dl,zindex:ml,zindexback:hl,test:vl,skillin:kl,skillout:pl,slideinfromtop:ul,tilepopup:xl};const fl=({skillData:e,onSetLevel:o,onCancel:c,onSkillAdd:d})=>{const[f,j]=r.exports.useState(null),n=r.exports.useRef(null);r.exports.useEffect(()=>{const _=n==null?void 0:n.current;_&&(_.value="5")},[]);const k=_=>{let p=+_;j(+_),e.level=p,o(!0)},h=()=>{e.level=0,o(!1),c()},g=()=>{var _;f?d(e):((_=n.current)==null||_.classList.add(b["click-me"]),setTimeout(()=>{var p;(p=n.current)==null||p.classList.remove(b["click-me"])},1e3))};return t("div",{className:b.blur,onClick:h,children:v("div",{className:b["skill-add-window"],onClick:_=>{_.stopPropagation()},children:[t("p",{className:b.title,children:"Adding Skill"}),t(R,{onSkillChange:g,data:e,sign:"+"}),t("div",{className:b.levels,children:t("input",{id:"level-bar",onChange:()=>{var _;k((_=n.current)==null?void 0:_.value)},ref:n,type:"range",min:"1",max:"10"})})]})})},jl=({allSkillsData:e,isLoading:o})=>{const[c,d]=r.exports.useState([]),[f,j]=r.exports.useState(c),[n,k]=r.exports.useState(!1),[h,g]=r.exports.useState([]),[_,p]=r.exports.useState(h),[W,y]=r.exports.useState(!1),[w,N]=r.exports.useState(!1),[B,A]=r.exports.useState(!1),[O,P]=r.exports.useState(e[0]),[V,z]=r.exports.useState(!1),[G,I]=r.exports.useState(void 0),F=r.exports.useRef(null),L=r.exports.useRef(null);r.exports.useEffect(()=>{d(e)},[o]),r.exports.useEffect(()=>{if(localStorage.getItem("leftChar")){const s=JSON.parse(localStorage.getItem("leftChar")||"");g(s);const l=s.map(i=>i.name);d(i=>i.filter(m=>!l.includes(m.name)))}},[]);const H=()=>{var i,m;const s=(i=F.current)==null?void 0:i.value.toLowerCase(),l=(m=L.current)==null?void 0:m.value.toLowerCase();if(s){const $=c.filter(C=>C.names[0].toLowerCase().includes(s));k(!0),j($)}else k(!1);if(l!==void 0){const $=h.filter(C=>C.names[0].toLowerCase().includes(l));y(!0),p($)}else y(!1)},J=()=>{N(!1),A(!1)},u=s=>s.sort((l,i)=>{var m,$;return($=l.names)==null?void 0:$[0].localeCompare((m=i.names)==null?void 0:m[0])}),E=s=>{c.some(l=>l===s)?(N(!0),P(s),w&&!B&&(d(l=>u(l.filter(i=>i!==s))),j(l=>u(l.filter(i=>i!==s))),g(l=>u([...c.filter(i=>i===s),...l])),N(!1),A(!1))):c.some(l=>l!==s)&&(w||(g(l=>u(l.filter(i=>i!==s))),p(l=>u(l.filter(i=>i!==s))),d(l=>u([...h.filter(i=>(s.level=0,i===s)),...l])))),z(!1)},M=s=>{V&&(I(void 0),A(!0),E(s))},U=()=>{if(h.length===0){console.log("add Skills");return}else localStorage.setItem("leftChar",JSON.stringify(h)),window.dispatchEvent(new Event("storage"))},S=(s,l)=>u(s).map(m=>{if(m.id!==0)return t(R,{onTooltip:{whichTooltip:G,setWhichTooltip:I},onSkillChange:E,data:m,sign:l},m.id)});return t(r.exports.Fragment,{children:t(D,{className:a["skill-selector--card"],children:o?t(Q,{}):v("div",{className:a["skill-selector"],children:[w&&t(fl,{onSetLevel:z,onCancel:J,onSkillAdd:M,skillData:O}),v("div",{className:a["skills-selector__grid"],children:[v("div",{className:a["title-row"],children:[t("p",{className:a.title,children:"All Skills"}),v("div",{className:a["search-field"],children:[t("label",{className:a["search-label"],htmlFor:"search-all",children:"Search"}),t("input",{onChange:H,ref:F,id:"search-all",type:"text"})]})]}),v("div",{className:a["title-row"],children:[t("p",{className:a.title,children:"Added Skills"}),v("div",{className:a["search-field"],children:[t("label",{className:a["search-label"],htmlFor:"search-added",children:"Search"}),t("input",{onChange:H,ref:L,id:"search-added",type:"text"})]})]}),t("div",{className:`${a["skills-menu"]} ${a.all}`,children:S(n===!1?c:f,"+")}),t("div",{className:`${a["skills-menu"]} ${a.added}`,children:S(W===!1?h:_,"-")})]}),t(X,{onClck:U,type:"submit",text:"Save Character",isGreyedOut:h.length===0})]})})})},$l="_creator_1aubq_38";var q={creator:$l,"skill-selector__col":"_skill-selector__col_1aubq_61","image-selector__col":"_image-selector__col_1aubq_78","image-selector":"_image-selector_1aubq_78"};const Sl=({allSkillsData:e,isLoading:o})=>v(Y.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},id:"creator",className:q.creator,children:[t("div",{className:q["skill-selector__col"],children:t(jl,{allSkillsData:e,isLoading:o},Math.random())}),t("div",{className:q["image-selector__col"],children:t("div",{className:`${q["image-selector"]} cancel-absolute`,children:t(Z,{onRotateCharacters:()=>{},data:3,name:"Front"})})})]});export{Sl as default};
