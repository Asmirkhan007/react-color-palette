(this["webpackJsonpreact-color-palette"]=this["webpackJsonpreact-color-palette"]||[]).push([[0],{211:function(e,t,a){},222:function(e,t,a){},343:function(e,t,a){"use strict";a.r(t);var o,n=a(0),r=a(10),l=a.n(r),i=a(42),c=(a(211),a(57)),s=a(89),d=a(21),m=a(22),h=a(12),u=a(27),b=a(26),p=a(30),j=a(410),g=a(408),f=a(13),x=a(178),O=a(18),v=a.n(O),C=a(347),y=a(47),w=a.n(y),k=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1600px"}[e],")")},S={ColorBox:(o={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:1}},Object(f.a)(o,k("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.3333%"}}),Object(f.a)(o,k("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(f.a)(o,k("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),o),copyText:{color:function(e){return w()(e.background).luminance()>=.7?"black":"white"}},colorName:{color:function(e){return w()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return w()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return w()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:0},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":Object(f.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},k("xs"),{fontSize:"6rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},N=a(3),P=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).state={copied:!1},o.changeCopyState=o.changeCopyState.bind(Object(h.a)(o)),o}return Object(m.a)(a,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.background,o=e.moreUrl,n=e.showingFullPalette,r=e.classes,l=this.state.copied;return Object(N.jsx)(x.CopyToClipboard,{text:a,onCopy:this.changeCopyState,children:Object(N.jsxs)("div",{style:{background:a},className:r.ColorBox,children:[Object(N.jsx)("div",{style:{background:a},className:v()(r.copyOverlay,Object(f.a)({},r.showOverlay,l))}),Object(N.jsxs)("div",{className:v()(r.copyMessage,Object(f.a)({},r.showMessage,l)),children:[Object(N.jsx)("h1",{children:"copied!"}),Object(N.jsx)("p",{className:r.copyText,children:a})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:r.boxContent,children:Object(N.jsx)("span",{className:r.colorName,children:t})}),Object(N.jsx)("button",{className:r.copyButton,children:"Copy"})]}),n&&Object(N.jsx)(i.b,{to:o,onClick:function(e){return e.stopPropagation()},children:Object(N.jsx)("span",{className:r.seeMore,children:"MORE"})})]})})}}]),a}(n.Component),F=Object(C.a)(S)(P),B=a(407),D=a(393),I=a(409),A=a(394),E=a(109),T=a.n(E),L=a(189),R=(a(221),{Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:Object(f.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},k("xs"),{display:"none"}),slider:Object(f.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},k("sm"),{width:"150px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem"}}),G=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).state={format:"hex",open:!1},o.handleFormatChange=o.handleFormatChange.bind(Object(h.a)(o)),o.closeSnackbar=o.closeSnackbar.bind(Object(h.a)(o)),o}return Object(m.a)(a,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,t=e.level,a=e.changeLevel,o=e.showingAllColors,n=e.classes,r=this.state.format;return Object(N.jsxs)("header",{className:n.Navbar,children:[Object(N.jsx)("div",{className:n.logo,children:Object(N.jsx)(i.b,{to:"/",children:"reactcolorpicker"})}),o&&Object(N.jsxs)("div",{children:[Object(N.jsxs)("span",{children:["Level: ",t]}),Object(N.jsx)("div",{className:n.slider,children:Object(N.jsx)(L.a,{defaultValue:t,min:100,max:900,step:100,onAfterChange:a})})]}),Object(N.jsx)("div",{className:n.selectContainer,children:Object(N.jsxs)(B.a,{value:r,onChange:this.handleFormatChange,children:[Object(N.jsx)(D.a,{value:"hex",children:"HEX - #ffffff"}),Object(N.jsx)(D.a,{value:"rgb",children:"RGB - rgb(255,255,255)"}),Object(N.jsx)(D.a,{value:"rgba",children:"RGBA - rgba(255,255,255, 1.0)"})]})}),Object(N.jsx)(I.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:Object(N.jsxs)("span",{id:"message-id",children:["Format Changed To ",r.toUpperCase()]}),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[Object(N.jsx)(A.a,{onClick:this.closeSnackbar,color:"inherit","aria-label":"close",children:Object(N.jsx)(T.a,{})},"close")]})]})}}]),a}(n.Component),M=Object(C.a)(R)(G);var z,U,H,V=Object(C.a)({PaletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})((function(e){var t=e.paletteName,a=e.emoji,o=e.classes;return Object(N.jsxs)("footer",{className:o.PaletteFooter,children:[t,Object(N.jsx)("span",{className:o.emoji,children:a})]})})),q={Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:(z={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:1,backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}},Object(f.a)(z,k("lg"),{width:"25%",height:"33.3333%"}),Object(f.a)(z,k("md"),{width:"50%",height:"20%"}),Object(f.a)(z,k("xs"),{width:"100%",height:"10%"}),z)},W=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).state={level:500,format:"hex"},o.changeLevel=o.changeLevel.bind(Object(h.a)(o)),o.changeFormat=o.changeFormat.bind(Object(h.a)(o)),o}return Object(m.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,t=e.colors,a=e.paletteName,o=e.emoji,n=e.id,r=this.props.classes,l=this.state,i=l.level,c=l.format,s=t[i].map((function(e){return Object(N.jsx)(F,{background:e[c],name:e.name,moreUrl:"/palette/".concat(n,"/").concat(e.id),showingFullPalette:!0},e.id)}));return Object(N.jsxs)("div",{className:r.Palette,children:[Object(N.jsx)(M,{level:i,changeLevel:this.changeLevel,handleChange:this.changeFormat,showingAllColors:!0}),Object(N.jsx)("div",{className:r.colors,children:s}),Object(N.jsx)(V,{paletteName:a,emoji:o})]})}}]),a}(n.Component),J=Object(C.a)(q)(W),Y=a(395),K=a(392),_=a(345),Q=a(397),X=a(411),$=a(398),Z=a(180),ee=a.n(Z),te=a(396),ae=a(110),oe=a.n(ae),ne=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).deletePalette=o.deletePalette.bind(Object(h.a)(o)),o.handleClick=o.handleClick.bind(Object(h.a)(o)),o}return Object(m.a)(a,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.openDialog(this.props.id)}},{key:"handleClick",value:function(){this.props.goToPalette(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.paletteName,o=e.emoji,n=e.colors.map((function(e){return Object(N.jsx)("div",{className:t.miniColor,style:{backgroundColor:e.color}},e.name)}));return Object(N.jsxs)("div",{className:t.root,onClick:this.handleClick,children:[Object(N.jsx)(oe.a,{className:t.deleteIcon,style:{transition:"all 0.3s ease-in-out"},onClick:this.deletePalette}),Object(N.jsx)("div",{className:t.colors,children:n}),Object(N.jsxs)("h5",{className:t.title,children:[a," ",Object(N.jsx)("span",{className:t.emoji,children:o})]})]})}}]),a}(n.PureComponent),re=Object(C.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:10,opacity:0}})(ne),le=a(138),ie=a.n(le),ce=a(139),se=a.n(ce),de=a.p+"static/media/bg.c99d9e1b.svg",me={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#394bad",backgroundImage:"url(".concat(de,")"),overflow:"scroll"},heading:{fontSize:"2rem"},container:(U={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(f.a)(U,k("xl"),{width:"80%"}),Object(f.a)(U,k("xs"),{width:"75%"}),U),nav:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",color:"white","& a":{color:"white"}},palettes:(H={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2.5rem"},Object(f.a)(H,k("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(f.a)(H,k("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1.4rem"}),H)},he=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).state={openDeleteDialog:!1,deletingId:""},o.openDialog=o.openDialog.bind(Object(h.a)(o)),o.closeDialog=o.closeDialog.bind(Object(h.a)(o)),o.handleDelete=o.handleDelete.bind(Object(h.a)(o)),o.goToPalette=o.goToPalette.bind(Object(h.a)(o)),o}return Object(m.a)(a,[{key:"openDialog",value:function(e){this.setState({openDeleteDialog:!0,deletingId:e})}},{key:"closeDialog",value:function(){this.setState({openDeleteDialog:!1,deletingId:""})}},{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"handleDelete",value:function(){this.props.deletePalette(this.state.deletingId),this.closeDialog()}},{key:"render",value:function(){var e=this,t=this.props,a=t.palettes,o=t.classes,r=this.state.openDeleteDialog;return Object(N.jsxs)("div",{className:o.root,children:[Object(N.jsxs)("div",{className:o.container,children:[Object(N.jsxs)("nav",{className:o.nav,children:[Object(N.jsx)("h1",{className:o.heading,children:"React Colors"}),Object(N.jsx)(i.b,{to:"/palette/new",children:"Create Palette"})]}),Object(N.jsx)(j.a,{className:o.palettes,children:a.map((function(t){return Object(N.jsx)(g.a,{classNames:"fade",timeout:500,children:Object(n.createElement)(re,Object(c.a)(Object(c.a)({},t),{},{goToPalette:e.goToPalette,openDialog:e.openDialog,key:t.id,id:t.id}))},t.id)}))})]}),Object(N.jsxs)(Y.a,{open:r,"aria-labelledby":"delete-dialog-title",onClose:this.closeDialog,children:[Object(N.jsx)(te.a,{id:"delete-dialog-title",children:"Delete This Palette?"}),Object(N.jsxs)(K.a,{children:[Object(N.jsxs)(_.a,{button:!0,onClick:this.handleDelete,children:[Object(N.jsx)(Q.a,{children:Object(N.jsx)(X.a,{style:{backgroundColor:ie.a[100],color:ie.a[600]},children:Object(N.jsx)(ee.a,{})})}),Object(N.jsx)($.a,{primary:"Delete"})]}),Object(N.jsxs)(_.a,{button:!0,onClick:this.closeDialog,children:[Object(N.jsx)(Q.a,{children:Object(N.jsx)(X.a,{style:{backgroundColor:se.a[100],color:se.a[600]},children:Object(N.jsx)(T.a,{})})}),Object(N.jsx)($.a,{primary:"Cancel"})]})]})]})]})}}]),a}(n.Component),ue=Object(C.a)(me)(he),be=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e))._shades=o.gatherShades(o.props.palette,o.props.colorId),o.state={format:"hex"},o.changeFormat=o.changeFormat.bind(Object(h.a)(o)),o}return Object(m.a)(a,[{key:"gatherShades",value:function(e,t){var a=[],o=e.colors;for(var n in o)a=a.concat(o[n].filter((function(e){return e.id===t})));return a.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state.format,t=this.props.palette,a=t.paletteName,o=t.emoji,n=t.id,r=this.props.classes,l=this._shades.map((function(t){return Object(N.jsx)(F,{name:t.name,background:t[e],showingFullPalette:!1},t.name)}));return Object(N.jsxs)("div",{className:r.Palette,children:[Object(N.jsx)(M,{handleChange:this.changeFormat,showingAllColors:!1}),Object(N.jsxs)("div",{className:r.colors,children:[l,Object(N.jsx)("div",{className:r.goBack,children:Object(N.jsx)(i.b,{to:"/palette/".concat(n),children:"GO BACK"})})]}),Object(N.jsx)(V,{paletteName:a,emoji:o})]})}}]),a}(n.Component),pe=Object(C.a)(q)(be);a(222);var je,ge=function(e){var t=e.children;return Object(N.jsx)("section",{className:"page",children:t})},fe=a(8),xe=a(402),Oe=a(401),ve=a(399),Ce=a(400),ye=a(60),we=a(190),ke=(a(236),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).handleClickOpen=function(){o.setState({open:!0})},o.handleClose=function(){o.setState({open:!1})},o.state={stage:"form",newPaletteName:""},o.handleChange=o.handleChange.bind(Object(h.a)(o)),o.showEmojiPicker=o.showEmojiPicker.bind(Object(h.a)(o)),o.savePalette=o.savePalette.bind(Object(h.a)(o)),o}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;ye.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(t){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==t.toLowerCase()}))}))}},{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"showEmojiPicker",value:function(){this.setState({stage:"emoji"})}},{key:"savePalette",value:function(e){var t={paletteName:this.state.newPaletteName,emoji:e.native};this.props.handleSubmit(t),this.setState({stage:""})}},{key:"render",value:function(){var e=this.state,t=e.newPaletteName,a=e.stage,o=this.props.hideForm;return Object(N.jsxs)("div",{children:[Object(N.jsxs)(Y.a,{open:"emoji"===a,onClose:o,children:[Object(N.jsx)(te.a,{id:"form-dialog-title",children:"Choose a Palette Emoji"}),Object(N.jsx)(we.a,{title:"Pick a Palette Emoji",onSelect:this.savePalette})]}),Object(N.jsxs)(Y.a,{open:"form"===a,"aria-labelledby":"form-dialog-title",onClose:o,children:[Object(N.jsx)(te.a,{id:"form-dialog-title",children:"Choose a Palette Name"}),Object(N.jsxs)(ye.ValidatorForm,{onSubmit:this.showEmojiPicker,children:[Object(N.jsxs)(ve.a,{children:[Object(N.jsx)(Ce.a,{children:"Please enter a name for your new beautiful palette. Make sure it's unique!"}),Object(N.jsx)(ye.TextValidator,{label:"Palette Name",value:t,name:"newPaletteName",onChange:this.handleChange,fullWidth:!0,margin:"normal",validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Name already used"]})]}),Object(N.jsxs)(Oe.a,{children:[Object(N.jsx)(xe.a,{onClick:o,color:"primary",children:"Cancel"}),Object(N.jsx)(xe.a,{variant:"contained",color:"primary",type:"submit",children:"Save Palette"})]})]})]})]})}}]),a}(n.Component)),Se=a(403),Ne=a(404),Pe=a(405),Fe=a(80),Be=a(182),De=a.n(Be),Ie=function(e){return{root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navBtns:Object(f.a)({marginRight:"1rem","& a":{textDecoration:"none"}},k("xs"),{marginRight:"0.5rem"}),button:Object(f.a)({margin:"0 0.5rem"},k("xs"),{margin:"0 0.2rem",padding:"0.3rem"})}},Ae=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).state={newPaletteName:"",formShowing:!1},o.handleChange=o.handleChange.bind(Object(h.a)(o)),o.showForm=o.showForm.bind(Object(h.a)(o)),o.hideForm=o.hideForm.bind(Object(h.a)(o)),o}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.open,o=e.palettes,n=e.handleSubmit,r=e.handleDrawerOpen,l=this.state.formShowing;return Object(N.jsxs)("div",{className:t.root,children:[Object(N.jsx)(Se.a,{}),Object(N.jsxs)(Ne.a,{position:"fixed",color:"default",className:v()(t.appBar,Object(f.a)({},t.appBarShift,a)),children:[Object(N.jsxs)(Pe.a,{disableGutters:!a,children:[Object(N.jsx)(A.a,{color:"inherit","aria-label":"Open drawer",onClick:r,className:v()(t.menuButton,Object(f.a)({},t.hide,a)),children:Object(N.jsx)(De.a,{})}),Object(N.jsx)(Fe.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Create A Palette"})]}),Object(N.jsxs)("div",{className:t.navBtns,children:[Object(N.jsx)(i.b,{to:"/",children:Object(N.jsx)(xe.a,{variant:"contained",color:"secondary",className:t.button,children:"Go Back"})}),Object(N.jsx)(xe.a,{variant:"contained",color:"primary",onClick:this.showForm,className:t.button,children:"Save"})]})]}),l&&Object(N.jsx)(ke,{palettes:o,handleSubmit:n,hideForm:this.hideForm})]})}}]),a}(n.Component),Ee=Object(fe.a)(Ie,{withTheme:!0})(Ae),Te=a(188),Le={picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"}},Re=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).state={currentColor:"teal",newColorName:""},o.updateCurrentColor=o.updateCurrentColor.bind(Object(h.a)(o)),o.handleChange=o.handleChange.bind(Object(h.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(h.a)(o)),o}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;ye.ValidatorForm.addValidationRule("isColorNameUnique",(function(t){return e.props.colors.every((function(e){return e.name.toLowerCase()!==t.toLowerCase()}))})),ye.ValidatorForm.addValidationRule("isColorUnique",(function(t){return e.props.colors.every((function(t){return t.color!==e.state.currentColor}))}))}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"render",value:function(){var e=this.props,t=e.paletteIsFull,a=e.classes,o=this.state,n=o.currentColor,r=o.newColorName;return Object(N.jsxs)("div",{children:[Object(N.jsx)(Te.a,{color:n,onChangeComplete:this.updateCurrentColor,className:a.picker}),Object(N.jsxs)(ye.ValidatorForm,{onSubmit:this.handleSubmit,ref:"form",instantValidate:!1,children:[Object(N.jsx)(ye.TextValidator,{value:r,className:a.colorNameInput,placeholder:"Color Name",name:"newColorName",variant:"filled",margin:"normal",onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique","Color already used!"]}),Object(N.jsx)(xe.a,{variant:"contained",type:"submit",color:"primary",disabled:t,className:a.addColor,style:{backgroundColor:t?"grey":n},children:t?"Palette Full":"Add Color"})]})]})}}]),a}(n.Component),Ge=Object(fe.a)(Le)(Re),Me=a(412),ze=a(406),Ue=a(187),He=a.n(Ue),Ve=a(77),qe={root:(je={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(f.a)(je,k("lg"),{width:"25%",height:"20%"}),Object(f.a)(je,k("md"),{width:"50%",height:"10%"}),Object(f.a)(je,k("sm"),{width:"100%",height:"5%"}),je),boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:function(e){return w()(e.color).luminance()<=.08?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.6)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.3s ease-in-out"}},We=Object(Ve.b)((function(e){var t=e.classes,a=e.handleClick,o=e.name,n=e.color;return Object(N.jsx)("div",{className:t.root,style:{backgroundColor:n},children:Object(N.jsxs)("div",{className:t.boxContent,children:[Object(N.jsxs)("span",{children:[" ",o]}),Object(N.jsx)(oe.a,{className:t.deleteIcon,onClick:a})]})})})),Je=Object(C.a)(qe)(We),Ye=Object(Ve.a)((function(e){var t=e.colors,a=e.removeColor;return Object(N.jsx)("div",{style:{height:"100%"},children:t.map((function(e,t){return Object(N.jsx)(Je,{index:t,color:e.color,name:e.name,handleClick:function(){return a(e.name)}},e.name)}))})})),Ke=function(e){return{root:{display:"flex"},drawer:{width:400,flexShrink:0,height:"100vh"},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(c.a)(Object(c.a)({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}},_e=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Qe=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).handleDrawerOpen=function(){o.setState({open:!0})},o.handleDrawerClose=function(){o.setState({open:!1})},o.onSortEnd=function(e){var t=e.oldIndex,a=e.newIndex;o.setState((function(e){var o=e.colors;return{colors:Object(Ve.c)(o,t,a)}}))},o.state={open:!0,colors:_e[0].colors},o.addNewColor=o.addNewColor.bind(Object(h.a)(o)),o.handleChange=o.handleChange.bind(Object(h.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(h.a)(o)),o.removeColor=o.removeColor.bind(Object(h.a)(o)),o.clearColors=o.clearColors.bind(Object(h.a)(o)),o.addRandomColor=o.addRandomColor.bind(Object(h.a)(o)),o}return Object(m.a)(a,[{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(s.a)(this.state.colors),[e]),newColorName:""})}},{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){for(var e,t,a=this.props.palettes.map((function(e){return e.colors})).flat(),o=!0;o;)e=Math.floor(Math.random()*a.length),t=a[e],o=this.state.colors.some((function(e){return e.name===t.name}));this.setState({colors:[].concat(Object(s.a)(this.state.colors),[t])})}},{key:"handleSubmit",value:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=this.state.colors,this.props.savePalette(e),this.props.history.push("/")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter((function(t){return t.name!==e}))})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.maxColors,o=e.palettes,n=this.state,r=n.open,l=n.colors,i=l.length>=a;return Object(N.jsxs)("div",{className:t.root,children:[Object(N.jsx)(Ee,{open:r,palettes:o,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),Object(N.jsxs)(Me.a,{className:t.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:t.drawerPaper},children:[Object(N.jsx)("div",{className:t.drawerHeader,children:Object(N.jsx)(A.a,{onClick:this.handleDrawerClose,children:Object(N.jsx)(He.a,{})})}),Object(N.jsx)(ze.a,{}),Object(N.jsxs)("div",{className:t.container,children:[Object(N.jsx)(Fe.a,{variant:"h4",gutterBottom:!0,children:"Design Your Palette"}),Object(N.jsxs)("div",{className:t.buttons,children:[Object(N.jsx)(xe.a,{variant:"contained",color:"secondary",onClick:this.clearColors,className:t.button,children:"Clear Palette"}),Object(N.jsx)(xe.a,{variant:"contained",className:t.button,color:"primary",onClick:this.addRandomColor,disabled:i,children:"Random Color"})]}),Object(N.jsx)(Ge,{paletteIsFull:i,addNewColor:this.addNewColor,colors:l})]})]}),Object(N.jsxs)("main",{className:v()(t.content,Object(f.a)({},t.contentShift,r)),children:[Object(N.jsx)("div",{className:t.drawerHeader}),Object(N.jsx)(Ye,{colors:l,removeColor:this.removeColor,axis:"xy",onSortEnd:this.onSortEnd,distance:20})]})]})}}]),a}(n.Component);Qe.defaultProps={maxColors:20};var Xe=Object(fe.a)(Ke,{withTheme:!0})(Qe),$e=a(141),Ze=[50,100,200,300,400,500,600,700,800,900];function et(e){var t,a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object($e.a)(Ze);try{for(o.s();!(t=o.n()).done;){var n=t.value;a.colors[n]=[]}}catch(h){o.e(h)}finally{o.f()}var r,l,i,c=Object($e.a)(e.colors);try{for(c.s();!(r=c.n()).done;){var s=r.value,d=(l=s.color,i=10,w.a.scale(function(e){var t="#fff";return[w()(e).darken(1.4).hex(),e,t]}(l)).mode("lab").colors(i)).reverse();for(var m in d)a.colors[Ze[m]].push({name:"".concat(s.name," ").concat(Ze[m]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:d[m],rgb:w()(d[m]).css(),rgba:w()(d[m]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(h){c.e(h)}finally{c.f()}return a}var tt=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var o;Object(d.a)(this,a),o=t.call(this,e);var n=JSON.parse(window.localStorage.getItem("palettes"));return o.state={palettes:n||_e},o.savePalette=o.savePalette.bind(Object(h.a)(o)),o.findPalette=o.findPalette.bind(Object(h.a)(o)),o.deletePalette=o.deletePalette.bind(Object(h.a)(o)),o}return Object(m.a)(a,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(t){return t.id===e}))}},{key:"deletePalette",value:function(e){this.setState((function(t){return{palettes:t.palettes.filter((function(t){return t.id!==e}))}}),this.syncLocalStorage)}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(s.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return Object(N.jsx)(p.a,{render:function(t){var a=t.location;return Object(N.jsx)(j.a,{children:Object(N.jsx)(g.a,{classNames:"page",timeout:500,children:Object(N.jsxs)(p.c,{location:a,children:[Object(N.jsx)(p.a,{exact:!0,path:"/palette/new",render:function(t){return Object(N.jsx)(ge,{children:Object(N.jsx)(Xe,Object(c.a)({savePalette:e.savePalette,palettes:e.state.palettes},t))})}}),Object(N.jsx)(p.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(t){return Object(N.jsx)(ge,{children:Object(N.jsx)(pe,{colorId:t.match.params.colorId,palette:et(e.findPalette(t.match.params.paletteId))})})}}),Object(N.jsx)(p.a,{exact:!0,path:"/",render:function(t){return Object(N.jsx)(ge,{children:Object(N.jsx)(ue,Object(c.a)({palettes:e.state.palettes,deletePalette:e.deletePalette},t))})}}),Object(N.jsx)(p.a,{exact:!0,path:"/palette/:id",render:function(t){return Object(N.jsx)(ge,{children:Object(N.jsx)(J,{palette:et(e.findPalette(t.match.params.id))})})}}),Object(N.jsx)(p.a,{render:function(t){return Object(N.jsx)(ge,{children:Object(N.jsx)(ue,Object(c.a)({palettes:e.state.palettes,deletePalette:e.deletePalette},t))})}})]})},a.key)})}})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(N.jsx)(i.a,{children:Object(N.jsx)(tt,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[343,1,2]]]);
//# sourceMappingURL=main.567ebe4e.chunk.js.map