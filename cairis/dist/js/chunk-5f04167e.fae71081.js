(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f04167e","chunk-f72b1efa","chunk-69e66498"],{1864:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:t.is_disabled,size:t.display_size,options:t.filteredItems},on:{change:function(e){return t.onChange(e)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})},i=[],a=(o("6762"),o("2fdb"),o("cadf"),o("551c"),o("f751"),o("097d"),o("bc3a")),n=o.n(a),l=o("61da"),r={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var t=this;return this.items.length>0?this.items.filter(function(e){if(!t.existing.includes(e))return e}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(t){this.$emit("dimension-select-change",t)},updateSelector:function(){var t=this;if((void 0!=this.dimension||""!=this.dimensionUrl)&&""!=this.$store.state.session){var e=this.dimensionUrl;0==this.dimensionUrl.length&&(e="/api/dimensions/table/"+this.dimension,""!=this.environment&&(e+="/environment/"+this.environment));var o=this;n.a.get(e,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(e){o.items=e.data,o.items=o.items.length>0?o.items.filter(function(t){if(!o.existing.includes(t))return t}):[],1==o.items.length&&o.$emit("dimension-select-change",o.items[0]),o.includeall&&("dfd_filter"==o.dimension?o.items.unshift("None"):"persona_characteristic"==o.dimension?o.items.unshift("All"):o.items.unshift("all")),t.selected=t.initial}).catch(function(t){l["a"].$emit("operation-failure","Error updating selector:"+t)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},u=r,h=o("2877"),c=Object(h["a"])(u,s,i,!1,null,null,null);e["default"]=c.exports},"2fdb":function(t,e,o){"use strict";var s=o("5ca1"),i=o("d2c8"),a="includes";s(s.P+s.F*o("5147")(a),"String",{includes:function(t){return!!~i(this,t,a).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"3f53":function(t,e,o){"use strict";var s=o("bc3a"),i=o.n(s),a=o("61da");e["a"]={methods:{commitObject:function(t,e,o,s,n){var l=this;"undefined"==typeof s&&(s={post:{},put:{}}),"Update"==this.commitLabel?i.a.put(t,{session_id:this.$store.state.session,object:this.objt}).then(function(t){a["a"].$emit("operation-success",t.data.message),void 0!=n?l.$router.push({name:o,params:{dimension:n}}):l.$router.push({name:o})}).catch(function(t){a["a"].$emit("operation-failure",t)}):i.a.post(e,{session_id:this.$store.state.session,object:this.objt},{params:s["post"]}).then(function(t){a["a"].$emit("operation-success",t.data.message),void 0!=n?l.$router.push({name:o,params:{dimension:n}}):l.$router.push({name:o})}).catch(function(t){a["a"].$emit("operation-failure",t)})}},postImage:function(t){var e="/api/upload/image?session_id="+this.$store.state.session;i.a.post(e,t).then(function(t){a["a"].$emit("operation-success",t.data.message)}).catch(function(t){a["a"].$emit("operation-failure",t)})}}},5147:function(t,e,o){var s=o("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(o){try{return e[s]=!1,!"/./"[t](e)}catch(i){}}return!0}},6762:function(t,e,o){"use strict";var s=o("5ca1"),i=o("c366")(!0);s(s.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("9c6c")("includes")},"94cc":function(t,e,o){"use strict";var s=o("bc3a"),i=o.n(s),a=o("61da");e["a"]={methods:{commitObject:function(t,e,o,s){var n=this;"Update"==this.commitLabel?i.a.put(t,{session_id:this.$store.state.session,object:this.objt}).then(function(t){a["a"].$emit("operation-success",t.data.message),void 0!=s?n.$router.push({name:o,params:{dimension:s}}):n.$router.push({name:o})}).catch(function(t){a["a"].$emit("operation-failure",t)}):i.a.post(e,{session_id:this.$store.state.session,object:this.objt}).then(function(t){a["a"].$emit("operation-success",t.data.message),void 0!=s?n.$router.push({name:o,params:{dimension:s}}):n.$router.push({name:o})}).catch(function(t){a["a"].$emit("operation-failure",t)})}}}},aae3:function(t,e,o){var s=o("d3f4"),i=o("2d95"),a=o("2b4c")("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},b10e:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"kaosassociationview"},[o("b-breadcrumb",{attrs:{items:t.bcItems}}),o("kaos-association",{attrs:{object:this.objt,label:this.commitLabel},on:{"kaos-association-commit":t.commitKaosAssociation}})],1)},i=[],a=o("bc3a"),n=o.n(a),l=o("3f53"),r=o("db8f"),u=o("4360"),h=o("61da"),c={props:{envName:String,goalName:String,subGoalName:String},mixins:[l["a"]],computed:{bcItems:function(){return[{text:"Home",to:{name:"home"}},{text:"KAOS associations",to:{name:"objectsview",params:{dimension:"kaosassociation"}}},{text:this.objt.theEnvironmentName+" / "+this.objt.theGoal+" / "+this.objt.theSubGoal,to:{name:"kaosassociation"}}]}},components:{KaosAssociation:r["default"]},data:function(){return{objt:{theEnvironmentName:"",theGoalDimension:"goal",theAssociationType:"and",theGoal:"",theRationale:"None",theSubGoalDimension:"goal",theAlternativeId:0,theSubGoal:""},commitLabel:"Create"}},beforeRouteEnter:function(t,e,o){if("To set"==t.params.goalName)n.a.get("/api/dimensions/table/environment",{baseURL:u["a"].state.url,params:{session_id:u["a"].state.session}}).then(function(t){o(function(e){e.objt.theEnvironmentName=t.data[0]})}).catch(function(t){h["a"].$emit("operation-failure",t)});else{var s="/api/goals/association/environment/"+t.params.envName+"/goal/"+t.params.goalName+"/subgoal/"+t.params.subGoalName;n.a.get(s,{baseURL:u["a"].state.url,params:{session_id:u["a"].state.session}}).then(function(t){o(function(e){e.commitLabel="Update",e.objt=t.data})}).catch(function(t){h["a"].$emit("operation-failure",t)})}},methods:{commitKaosAssociation:function(t){this.objt=t;var e=this.$store.state.url+"/api/goals/association/environment/"+this.envName+"/goal/"+this.goalName+"/subgoal/"+this.subGoalName+"?session_id="+this.$store.state.session,o=this.$store.state.url+"/api/goals/association";this.commitObject(e,o,"objectsview",void 0,"kaosassociation")}}},p=c,b=o("2877"),d=Object(b["a"])(p,s,i,!1,null,null,null);e["default"]=d.exports},d2c8:function(t,e,o){var s=o("aae3"),i=o("be13");t.exports=function(t,e,o){if(s(e))throw TypeError("String#"+o+" doesn't accept regex!");return String(i(t))}},db8f:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"kaosassociation"},[t.errors.length?o("p",[o("b",[t._v("Please correct the following error(s):")]),o("ul",t._l(t.errors,function(e){return o("li",{key:e},[t._v(t._s(e))])}),0)]):t._e(),o("b-form",[o("b-container",{attrs:{fluid:""}},[o("b-card",{attrs:{"bg-variant":"light",no:"",body:""}},[o("b-row",[o("b-col",{attrs:{md:"12"}},[void 0!=t.objt?o("b-container",{attrs:{fluid:""}},[o("b-row",[o("b-col",{attrs:{md:"12"}},[o("b-form-group",{attrs:{label:"Environment","label-class":"font-weight-bold text-sm-left","label-cols":"2","label-for":"theEnvironmentSelect"}},[o("dimension-select",{attrs:{id:"theEnvironmentSelect",dimension:"environment",is_disabled:t.disable,initial:t.objt.theEnvironmentName},on:{"dimension-select-change":t.environmentSelected}})],1)],1)],1),o("b-row",[o("b-col",{attrs:{md:"12"}},[o("b-form-group",{attrs:{label:"Head","label-class":"font-weight-bold text-md-left","label-for":"theGoalRadio"}},[o("b-form-radio-group",{staticClass:"mb-3",attrs:{disabled:t.disable,buttons:"","button-variant":"outline-primary",size:"md",id:"theGoalRadio",options:t.goalTypeOptions,required:"",name:"theGoalRadio"},model:{value:t.theGoalType,callback:function(e){t.theGoalType=e},expression:"theGoalType"}})],1)],1)],1),o("b-row",[o("b-col",{attrs:{md:"12"}},[o("dimension-select",{attrs:{id:"theGoalSelect",is_disabled:t.disable,environment:t.objt.theEnvironmentName,dimension:t.theGoalType,initial:t.objt.theGoal},on:{"dimension-select-change":t.goalSelected}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"12"}},[o("b-form-group",{attrs:{label:"Tail","label-class":"font-weight-bold text-md-left","label-for":"theSubGoalRadio"}},[o("b-form-radio-group",{staticClass:"mb-3",attrs:{disabled:t.disable,buttons:"","button-variant":"outline-primary",size:"md",id:"theSubGoalRadio",options:t.subGoalTypeOptions,required:"",name:"theSubGoalRadio"},model:{value:t.theSubGoalType,callback:function(e){t.theSubGoalType=e},expression:"theSubGoalType"}})],1)],1)],1),o("b-row",[o("b-col",{attrs:{md:"12"}},[o("dimension-select",{attrs:{id:"theSubGoalSelect",is_disabled:t.disable,environment:t.objt.theEnvironmentName,dimension:t.objt.theSubGoalDimension,initial:t.objt.theSubGoal},on:{"dimension-select-change":t.subGoalSelected}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"2"}},[o("b-form-group",{attrs:{label:"Association","label-class":"font-weight-bold text-md-left","label-for":"theAssociationRadio"}},[o("b-form-radio-group",{staticClass:"mb-3",attrs:{buttons:"","button-variant":"outline-primary",size:"md",id:"theAssociationRadio",options:t.refTypeOptions,required:"",name:"theAssociationRadio"},model:{value:t.objt.theAssociationType,callback:function(e){t.$set(t.objt,"theAssociationType",e)},expression:"objt.theAssociationType"}})],1)],1),o("b-col",{attrs:{md:"2"}},[o("b-form-group",{attrs:{label:"Alternative","label-class":"font-weight-bold text-md-left","label-for":"theHeadNryInput"}},[o("b-form-radio-group",{attrs:{buttons:"","button-variant":"outline-primary",size:"md"},model:{value:t.objt.theAlternativeId,callback:function(e){t.$set(t.objt,"theAlternativeId",e)},expression:"objt.theAlternativeId"}},[o("b-form-radio",{attrs:{value:"0"}},[t._v("No")]),o("b-form-radio",{attrs:{value:"1"}},[t._v("Yes")])],1)],1)],1),o("b-col",{attrs:{md:"8"}},[o("b-form-group",{attrs:{label:"Rationale","label-class":"font-weight-bold text-md-left","label-for":"theRationaleInput"}},[o("b-form-input",{attrs:{id:"theRationaleInput",size:"md"},model:{value:t.objt.theRationale,callback:function(e){t.$set(t.objt,"theRationale",e)},expression:"objt.theRationale"}})],1)],1)],1)],1):t._e()],1)],1)],1)],1),o("b-container",{attrs:{fluid:""}},[o("b-form-row",[o("b-col",{attrs:{md:"4","offset-md":"5"}},[o("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:t.onCommit}},[t._v(t._s(t.commitLabel))]),o("b-button",{attrs:{type:"submit",variant:"secondary"},on:{click:t.onCancel}},[t._v("Cancel")])],1)],1)],1)],1)],1)},i=[],a=(o("cadf"),o("551c"),o("f751"),o("097d"),o("94cc")),n=o("1864"),l={name:"kaos-association",props:{object:Object,label:String,isUpdating:Boolean},watch:{object:"setObject",theGoalType:"setSubGoalTypes",theSubGoalType:"setAssociationTypes"},mixins:[a["a"]],components:{DimensionSelect:n["default"]},computed:{disable:function(){return 1==this.isUpdating}},data:function(){return{errors:[],objt:this.object,commitLabel:"Create",theGoalType:"goal",theSubGoalType:"goal",goalTypeOptions:[{text:"Goal",value:"goal"},{text:"Obstacle",value:"obstacle"},{text:"Domain Property",value:"domainproperty"},{text:"Requirement",value:"requirement"},{text:"Countermeasure",value:"countermeasure"}],subGoalTypeOptions:[{text:"Goal",value:"goal"},{text:"Obstacle",value:"obstacle"},{text:"Task",value:"task"},{text:"Use Case",value:"usecase"},{text:"Domain Property",value:"domainproperty"},{text:"Role",value:"role"},{text:"Requirement",value:"requirement"}],refTypeOptions:[{text:"And",value:"and"},{text:"Or",value:"or"}]}},methods:{setObject:function(){this.objt=this.object,this.theGoalType=this.object.theGoalDimension,this.theSubGoalType=this.object.theSubGoalDimension,this.commitLabel=this.label},setSubGoalTypes:function(){this.objt.theGoalDimension=this.theGoalType,"goal"==this.theGoalType?(this.subGoalTypeOptions=[{text:"Goal",value:"goal"},{text:"Obstacle",value:"obstacle"},{text:"Task",value:"task"},{text:"Use Case",value:"usecase"},{text:"Domain Property",value:"domainproperty"},{text:"Role",value:"role"},{text:"Requirement",value:"requirement"}],this.theSubGoalType="goal"):"obstacle"==this.theGoalType?(this.subGoalTypeOptions=[{text:"Obstacle",value:"obstacle"},{text:"Threat",value:"threat"},{text:"Vulnerability",value:"vulnerability"},{text:"Goal",value:"goal"},{text:"Domain Property",value:"domainproperty"},{text:"Misuse Case",value:"misusecase"},{text:"Task",value:"task"},{text:"Use Case",value:"usecase"},{text:"Requirement",value:"requirement"},{text:"Role",value:"role"}],this.theSubGoalType="obstacle"):"domainproperty"==this.theGoalType?(this.subGoalTypeOptions=[{text:"Obstacle",value:"obstacle"}],this.theSubGoalType="obstacle"):"requirement"==this.theGoalType?(this.subGoalTypeOptions=[{text:"Goal",value:"goal"},{text:"Requirement",value:"requirement"},{text:"Role",value:"role"},{text:"Obstacle",value:"obstacle"}],this.theSubGoalType="goal"):"countermeasure"==this.theGoalType&&(this.subGoalTypeOptions=[{text:"Task",value:"task"}],this.theSubGoalType="task"),this.setAssociationTypes()},setAssociationTypes:function(){this.objt.theSubGoalDimension=this.theSubGoalType,"goal"==this.theGoalType&&"domainproperty"==this.theSubGoalType?(this.refTypeOptions=[{text:"And",value:"and"},{text:"Or",value:"or"}],this.objt.theAssociationType="and"):"goal"==this.theGoalType&&"goal"==this.theSubGoalType?(this.refTypeOptions=[{text:"And",value:"and"},{text:"Or",value:"or"}],this.objt.theAssociationType="and"):"goal"==this.theGoalType&&"obstacle"==this.theSubGoalType?(this.refTypeOptions=[{text:"Obstruct",value:"obstruct"}],this.objt.theAssociationType="obstruct"):"goal"==this.theGoalType&&"requirement"==this.theSubGoalType?(this.refTypeOptions=[{text:"And",value:"and"},{text:"Or",value:"or"}],this.objt.theAssociationType="and"):"goal"==this.theGoalType&&"role"==this.theSubGoalType?(this.refTypeOptions=[{text:"Responsible",value:"responsible"}],this.objt.theAssociationType="responsible"):"goal"==this.theGoalType&&"task"==this.theSubGoalType?(this.refTypeOptions=[{text:"And",value:"and"}],this.objt.theAssociationType="and"):"goal"==this.theGoalType&&"usecase"==this.theSubGoalType?(this.refTypeOptions=[{text:"And",value:"and"}],this.objt.theAssociationType="and"):"obstacle"==this.theGoalType&&"domainproperty"==this.theSubGoalType?(this.refTypeOptions=[{text:"Resolve",value:"resolve"}],this.objt.theAssociationType="resolve"):"obstacle"==this.theGoalType&&"goal"==this.theSubGoalType?(this.refTypeOptions=[{text:"Resolve",value:"resolve"}],this.objt.theAssociationType="resolve"):"obstacle"==this.theGoalType&&"task"==this.theSubGoalType?(this.refTypeOptions=[{text:"And",value:"and"}],this.objt.theAssociationType="and"):"obstacle"==this.theGoalType&&"misusecase"==this.theSubGoalType?(this.refTypeOptions=[{text:"And",value:"and"}],this.objt.theAssociationType="and"):"obstacle"==this.theGoalType&&"obstacle"==this.theSubGoalType?(this.refTypeOptions=[{text:"And",value:"and"},{text:"Or",value:"or"}],this.objt.theAssociationType="and"):"obstacle"==this.theGoalType&&"requirement"==this.theSubGoalType?(this.refTypeOptions=[{text:"Resolve",value:"resolve"}],this.objt.theAssociationType="resolve"):"obstacle"==this.theGoalType&&"role"==this.theSubGoalType?(this.refTypeOptions=[{text:"Responsible",value:"responsible"}],this.objt.theAssociationType="responsible"):"obstacle"==this.theGoalType&&"threat"==this.theSubGoalType?(this.refTypeOptions=[{text:"And",value:"and"}],this.objt.theAssociationType="and"):"obstacle"==this.theGoalType&&"usecase"==this.theSubGoalType?(this.refTypeOptions=[{text:"And",value:"and"}],this.objt.theAssociationType="and"):"obstacle"==this.theGoalType&&"vulnerability"==this.theSubGoalType?(this.refTypeOptions=[{text:"And",value:"and"}],this.objt.theAssociationType="and"):"domainproperty"==this.theGoalType&&"obstacle"==this.theSubGoalType?(this.refTypeOptions=[{text:"Obstruct",value:"obstruct"}],this.objt.theAssociationType="obstruct"):"requirement"==this.theGoalType&&"goal"==this.theSubGoalType?(this.refTypeOptions=[{text:"And",value:"and"},{text:"Or",value:"or"}],this.objt.theAssociationType="and"):"requirement"==this.theGoalType&&"requirement"==this.theSubGoalType?(this.refTypeOptions=[{text:"And",value:"and"},{text:"Or",value:"or"}],this.objt.theAssociationType="and"):"requirement"==this.theGoalType&&"role"==this.theSubGoalType?(this.refTypeOptions=[{text:"Responsible",value:"responsible"}],this.objt.theAssociationType="responsible"):"requirement"==this.theGoalType&&"obstacle"==this.theSubGoalType?(this.refTypeOptions=[{text:"Obstruct",value:"obstruct"}],this.objt.theAssociationType="obstruct"):"countermeasure"==this.theGoalType&&"task"==this.theSubGoalType&&(this.refTypeOptions=[{text:"And",value:"and"}],this.objt.theAssociationType="and")},onCommit:function(t){t.preventDefault(),this.checkForm()&&this.$emit("kaos-association-commit",this.objt)},onCancel:function(t){t.preventDefault(),this.$router.push({name:"objectsview",params:{dimension:"kaosassociation"}})},checkForm:function(){return this.errors=[],0==this.objt.theEnvironmentName.length&&this.errors.push("Environment is required"),0==this.objt.theGoalDimension.length&&this.errors.push("Goal Type is required"),0==this.objt.theGoal.length&&this.errors.push("Goal is required"),0==this.objt.theAssociationType.length&&this.errors.push("Association Type is required"),0==this.objt.theSubGoalDimension.length&&this.errors.push("Sub Goal Type is required"),0==this.objt.theSubGoal.length&&this.errors.push("Sub Goal is required"),0==this.objt.theRationale.length&&this.errors.push("Rationale is required"),!this.errors.length},environmentSelected:function(t){void 0!=t&&(this.objt.theEnvironmentName=t)},goalSelected:function(t){void 0!=t&&(this.objt.theGoal=t)},subGoalSelected:function(t){void 0!=t&&(this.objt.theSubGoal=t)}}},r=l,u=o("2877"),h=Object(u["a"])(r,s,i,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-5f04167e.fae71081.js.map