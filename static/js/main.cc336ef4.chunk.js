(this.webpackJsonppersonal_page=this.webpackJsonppersonal_page||[]).push([[0],{355:function(e,t,a){},356:function(e,t,a){"use strict";a.r(t);var s=a(89),n=a(371),g=a(19),r=a(0),v=a.n(r),l=a(35),i=a.n(l),o=a(382),c=a(6),m=a(373),p=a(15),u=a.n(p),d=a(381),f=a(372),x=a(37),h=a.n(x),b=a(384);function k(){return Object(b.a)().t}var E=a(383),y=a(27);function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}var w=u()((function(){return{link:{textDecoration:"none"}}}));function N(e){var t=w(),a=e.index===e.pathArray.length-1,s="/"+e.pathArray.slice(0,e.index+1).join("/");return a?v.a.createElement(f.a,{variant:"h5",color:"textPrimary",key:s},j(e.pathValue)):v.a.createElement(y.a,{className:t.link,color:"inherit",to:s,key:s},v.a.createElement(f.a,{variant:"h5",color:"textPrimary",key:s},j(e.pathValue)))}function C(){var e=w(),t=Object(c.f)().pathname.split("/").filter((function(e){return e}));return v.a.createElement(E.a,{"aria-label":"breadcrumb"},v.a.createElement(y.a,{className:e.link,color:"inherit",to:"/"},v.a.createElement(f.a,{variant:"h5",color:"textPrimary"},"> Home")),t.map((function(e,a){return v.a.createElement(N,{pathValue:e,index:a,pathArray:t})})))}var z=a(90),S=(a(354),u()((function(e){return{select:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,padding:"7px",borderRadius:"5px","& *":{backgroundColor:e.palette.background.paper,color:e.palette.text.primary}}}})));function D(){var e=h()(),t=S(e),a=Object(b.a)().i18n;return v.a.createElement(z.a,{className:t.select,countries:["US","BR"],customLabels:{US:"English",BR:"Portugu\xeas"},placeholder:"Select Language",onSelect:function(e){return a.changeLanguage(e)}})}var P=a(385),O=u()((function(e){return{header:{backgroundColor:e.palette.background.paper,padding:"40px 20px",justifyContent:"flex-start",flexDirection:"column",display:"flex",margin:"10px 0px 20px 0px",borderRadius:"10px"},nav:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"0px"}}}));function R(){var e=k(),t=h()(),a=O(t);return v.a.createElement(r.Fragment,null,v.a.createElement(m.a,{className:a.nav},v.a.createElement(C,null),v.a.createElement(D,null)),v.a.createElement(P.a,{className:a.header},v.a.createElement(f.a,{variant:"h2"},"Guilherme Toshio Miyake"),v.a.createElement(f.a,{variant:"h4"},e("Job Title"))))}function A(){var e=Object(c.g)().tag;return v.a.createElement(r.Fragment,null,e)}var T=a(92),I=u()((function(e){return{title:{padding:"0px",justifyContent:"flex-start",flexDirection:"row",alignItems:"flex-end",display:"flex",margin:"2px 0px"},text:{margin:"0px 0px 10px 0px"},icon:{fontSize:"80px",margin:"0px 10px 0px 0px"},line:{backgroundColor:e.palette.text.primary,display:"flex",height:"8px",padding:"0",borderRadius:"5px"}}}));function U(e){var t=h()(),a=I(t);return v.a.createElement(r.Fragment,null,v.a.createElement(m.a,{className:a.title},v.a.createElement(T.a,{className:a.icon,component:e.icon}),v.a.createElement(f.a,{className:a.text,variant:"h4"},e.title)),v.a.createElement(m.a,{className:a.line}))}var L=a(374),F=a(375),J=a(376),q=a(377),B=a(378),M=a(379),V=a(380),W=a(386),_=u()((function(){return{card:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"},box:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"},link:{width:"30%",minWidth:"300px",height:"300px",margin:"10px 10px",textDecoration:"none"},text:{textAlign:"center",wordWrap:"normal",width:"240px"},icon:{fontSize:"120px",margin:"15px"}}}));function G(e){var t=_(),a=v.a.createElement(P.a,{className:t.card},v.a.createElement(W.a,{className:t.box},v.a.createElement(T.a,{className:t.icon,component:e.icon}),v.a.createElement(f.a,{className:t.text,variant:"h4"},e.title)));return e.to.indexOf("http")>=0?v.a.createElement("a",{href:e.to,className:t.link},a):v.a.createElement(y.a,{to:e.to,className:t.link},a)}var H=u()((function(){return{links:{justifyContent:"space-evenly",flexDirection:"row",display:"flex",flexWrap:"wrap"}}}));function Q(){var e=k(),t=H();return v.a.createElement(r.Fragment,null,v.a.createElement(U,{title:"Pages",icon:L.a}),v.a.createElement(W.a,{className:t.links},v.a.createElement(G,{to:"/about",title:e("about"),icon:F.a}),v.a.createElement(G,{to:"/resume",title:e("resume"),icon:J.a}),v.a.createElement(G,{to:"/projects",title:e("projects"),icon:q.a}),v.a.createElement(G,{to:"https://www.linkedin.com/in/guilhermemiyake/",title:"LinkedIn",icon:B.a}),v.a.createElement(G,{to:"https://github.com/guilherme-miyake/personal-page",title:e("repo link"),icon:M.a}),v.a.createElement(G,{to:"https://thedungeonbackstage.com",title:e("tdb link"),icon:V.a})))}var K=u()((function(){return{app:{height:"100%",display:"flex",flexDirection:"column",padding:"10px",justifyContent:"center"}}}));var X=function(){var e=K();return v.a.createElement(m.a,{className:e.app},v.a.createElement(d.a,null),v.a.createElement(R,null),v.a.createElement(c.c,null,v.a.createElement(c.a,{exact:!0,path:"/"},v.a.createElement(Q,null)),v.a.createElement(c.a,{path:"/projects/:tag"},v.a.createElement(A,null))))},Y=a(71),Z=a(88);Y.a.use(Z.a).init({resources:{US:{translations:{"Job Title":"Software Engineer \u2022 Data Engineer \u2022 Civil Engineer",about:"About Me",resume:"Resume",projects:"Projects","repo link":"This Page Repository","tdb link":"RPG WebApp (In Progress...)"}},BR:{translations:{"Job Title":"Engenheiro de Software \u2022 Engenheiro de Dados \u2022 Engenheiro Civil",about:"Quem sou eu?",resume:"Curr\xedculo",projects:"Projetos","repo link":"Reposit\xf3rio desta Pagina","tdb link":"App de RPG (Construindo...)"}}},fallbackLng:"US",debug:!0,ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}});var $=Y.a,ee=(a(355),Object(s.a)({palette:{type:"dark",primary:{light:"#718792",main:"#455a64",dark:"#1c313a",contrastText:"#fff"},secondary:{light:"#63a3ff",main:"#1875d1",dark:"#004a9f",contrastText:"#000"}}})),te=Object(g.a)();i.a.render(v.a.createElement(v.a.StrictMode,null,v.a.createElement(o.a,{i18n:$},v.a.createElement(n.a,{theme:ee},v.a.createElement(c.b,{history:te},v.a.createElement(X,null))))),document.getElementById("root"))},84:function(e,t,a){var s={"./ad.svg":132,"./ae.svg":133,"./af.svg":134,"./ag.svg":135,"./ai.svg":136,"./al.svg":137,"./am.svg":138,"./ao.svg":139,"./ar.svg":140,"./as.svg":141,"./at.svg":142,"./au.svg":143,"./aw.svg":144,"./az.svg":145,"./ba.svg":146,"./bb.svg":147,"./bd.svg":148,"./be.svg":149,"./bf.svg":150,"./bg.svg":151,"./bh.svg":152,"./bi.svg":153,"./bj.svg":154,"./bm.svg":155,"./bo.svg":156,"./br.svg":157,"./bs.svg":158,"./bt.svg":159,"./bw.svg":160,"./by.svg":161,"./bz.svg":162,"./ca.svg":163,"./cd.svg":164,"./cf.svg":165,"./cg.svg":166,"./ch.svg":167,"./ci.svg":168,"./ck.svg":169,"./cl.svg":170,"./cm.svg":171,"./cn.svg":172,"./co.svg":173,"./cr.svg":174,"./cu.svg":175,"./cv.svg":176,"./cw.svg":177,"./cy.svg":178,"./cz.svg":179,"./de.svg":180,"./dj.svg":181,"./dk.svg":182,"./dm.svg":183,"./do.svg":184,"./dz.svg":185,"./ec.svg":186,"./ee.svg":187,"./eg.svg":188,"./er.svg":189,"./es.svg":190,"./et.svg":191,"./fi.svg":192,"./fj.svg":193,"./fk.svg":194,"./fm.svg":195,"./fo.svg":196,"./fr.svg":197,"./ga.svg":198,"./gb.svg":199,"./gd.svg":200,"./ge.svg":201,"./gg.svg":202,"./gh.svg":203,"./gi.svg":204,"./gl.svg":205,"./gm.svg":206,"./gn.svg":207,"./gq.svg":208,"./gr.svg":209,"./gt.svg":210,"./gu.svg":211,"./gw.svg":212,"./hk.svg":213,"./hn.svg":214,"./hr.svg":215,"./ht.svg":216,"./hu.svg":217,"./id.svg":218,"./ie.svg":219,"./il.svg":220,"./im.svg":221,"./in.svg":222,"./io.svg":223,"./iq.svg":224,"./ir.svg":225,"./is.svg":226,"./it.svg":227,"./je.svg":228,"./jm.svg":229,"./jo.svg":230,"./jp.svg":231,"./ke.svg":232,"./kg.svg":233,"./kh.svg":234,"./ki.svg":235,"./km.svg":236,"./kn.svg":237,"./kp.svg":238,"./kr.svg":239,"./kw.svg":240,"./ky.svg":241,"./kz.svg":242,"./la.svg":243,"./lb.svg":244,"./li.svg":245,"./lk.svg":246,"./lr.svg":247,"./ls.svg":248,"./lt.svg":249,"./lu.svg":250,"./lv.svg":251,"./ly.svg":252,"./ma.svg":253,"./mc.svg":254,"./md.svg":255,"./me.svg":256,"./mg.svg":257,"./mh.svg":258,"./mk.svg":259,"./ml.svg":260,"./mm.svg":261,"./mn.svg":262,"./mo.svg":263,"./mp.svg":264,"./mq.svg":265,"./mr.svg":266,"./ms.svg":267,"./mt.svg":268,"./mu.svg":269,"./mv.svg":270,"./mw.svg":271,"./mx.svg":272,"./my.svg":273,"./mz.svg":274,"./na.svg":275,"./nato.svg":276,"./ne.svg":277,"./nf.svg":278,"./ng.svg":279,"./ni.svg":280,"./nl.svg":281,"./no.svg":282,"./np.svg":283,"./nr.svg":284,"./nu.svg":285,"./nz.svg":286,"./om.svg":287,"./pa.svg":288,"./pe.svg":289,"./pf.svg":290,"./pg.svg":291,"./ph.svg":292,"./pk.svg":293,"./pl.svg":294,"./pn.svg":295,"./pr.svg":296,"./ps.svg":297,"./pt.svg":298,"./pw.svg":299,"./py.svg":300,"./qa.svg":301,"./ro.svg":302,"./rs.svg":303,"./ru.svg":304,"./rw.svg":305,"./sa.svg":306,"./sb.svg":307,"./sc.svg":308,"./sd.svg":309,"./se.svg":310,"./sg.svg":311,"./si.svg":312,"./sk.svg":313,"./sl.svg":314,"./sm.svg":315,"./sn.svg":316,"./so.svg":317,"./sr.svg":318,"./ss.svg":319,"./st.svg":320,"./sv.svg":321,"./sx.svg":322,"./sy.svg":323,"./sz.svg":324,"./tc.svg":325,"./td.svg":326,"./tg.svg":327,"./th.svg":328,"./tibet.svg":329,"./tj.svg":330,"./tk.svg":331,"./tm.svg":332,"./tn.svg":333,"./to.svg":334,"./tr.svg":335,"./tt.svg":336,"./tv.svg":337,"./tw.svg":338,"./tz.svg":339,"./ua.svg":340,"./ug.svg":341,"./us.svg":342,"./uy.svg":343,"./uz.svg":344,"./ve.svg":345,"./vi.svg":346,"./vn.svg":347,"./vu.svg":348,"./ws.svg":349,"./ye.svg":350,"./za.svg":351,"./zm.svg":352,"./zw.svg":353};function n(e){var t=g(e);return a(t)}function g(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=g,e.exports=n,n.id=84},97:function(e,t,a){e.exports=a(356)}},[[97,1,2]]]);
//# sourceMappingURL=main.cc336ef4.chunk.js.map