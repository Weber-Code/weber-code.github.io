import{D as fi,F as mi,G as ui,H as hi,J as pi,K as Ee,L as Ce,M as gi,N as bi,O as Se,P as _i,Q as vi,R as yi,S as xi,c as ai,g as X,i as Qe,k as li,m as di,q as J,r as si,s as Me,x as Ye,y as ci,z as ee}from"./chunk-IULBWH5T.js";import{i as oi}from"./chunk-ATPFZGXW.js";import{$b as V,Ab as T,Ba as F,Bb as f,Cb as m,D as Bt,Db as z,E as ve,Ea as Ut,Eb as Zt,Fb as Qt,Gb as Ke,Ib as se,Jb as A,Kb as B,Lb as Ue,Mb as S,Nb as Yt,Ob as Ge,P as Vt,Pb as y,Qb as x,R as Ht,Rb as Xt,Sb as Jt,T as jt,Tb as We,Ub as $e,V as ye,Va as c,Wb as I,Yb as D,Z as g,Zb as ce,_b as ei,a as M,aa as Z,ab as Gt,b as ae,ba as Q,bb as q,c as _n,cc as ti,d as vn,da as v,e as Ve,eb as je,f as Pt,fa as l,fb as qe,fc as u,gc as d,h as Lt,hc as U,i as N,ja as He,jc as ii,kb as K,kc as fe,lb as Y,lc as ni,m as Ot,ma as le,mb as w,nc as ri,oa as qt,ob as Wt,pc as Ze,qb as xe,ra as C,rc as we,sb as $t,va as E,w as zt,xa as O,xb as de,yb as b,za as Kt,zb as _}from"./chunk-GGQSFUA7.js";var cn=_n(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});oe.make=oe.identity=void 0;function sn(i){return i}oe.identity=sn;function zr(i){return i?function(e){return i(e),e}:sn}oe.make=zr});var Xe=0;function yn(){return Xe}function H(i,e){return(...t)=>{try{return Xe=e,i(...t)}finally{Xe=0}}}function xn(i){return!i}function wi(i){return i}function k(i){return Array.isArray(i)}function te(i){return(typeof i=="object"||typeof i=="function")&&i!=null}var G=Symbol(),ke=Symbol(),ue=class{predicates;fns=[];constructor(e){this.predicates=e}push(e){this.fns.push(Mi(this.predicates,e))}mergeIn(e){let t=this.predicates?e.fns.map(n=>Mi(this.predicates,n)):e.fns;this.fns.push(...t)}},Te=class extends ue{get defaultValue(){return!1}compute(e){return this.fns.some(t=>{let n=t(e);return n&&n!==ke})}},ie=class i extends ue{ignore;static ignoreNull(e){return new i(e,t=>t===null)}constructor(e,t){super(e),this.ignore=t}get defaultValue(){return[]}compute(e){return this.fns.reduce((t,n)=>{let r=n(e);return r===void 0||r===ke?t:k(r)?[...t,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?t:[...t,r]},[])}},Je=class extends ie{constructor(e){super(e,void 0)}},et=class extends ue{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(e,t){super(e),this.key=t}compute(e){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let n=0;n<this.fns.length;n++){let r=this.fns[n](e);r!==ke&&(t=this.key.reducer.reduce(t,r))}return t}};function Mi(i,e){return i.length===0?e:t=>{for(let n of i){let r=t.stateOf(n.path),o=u(r.structure.pathKeys).length-n.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!n.fn(r.context))return ke}return e(t)}}var ne=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(e){this.predicates=e,this.hidden=new Te(e),this.disabledReasons=new Je(e),this.readonly=new Te(e),this.syncErrors=ie.ignoreNull(e),this.syncTreeErrors=ie.ignoreNull(e),this.asyncErrors=ie.ignoreNull(e)}hasMetadata(e){return this.metadata.has(e)}getMetadataKeys(){return this.metadata.keys()}getMetadata(e){return this.metadata.has(e)||this.metadata.set(e,new et(this.predicates,e)),this.metadata.get(e)}mergeIn(e){this.hidden.mergeIn(e.hidden),this.disabledReasons.mergeIn(e.disabledReasons),this.readonly.mergeIn(e.readonly),this.syncErrors.mergeIn(e.syncErrors),this.syncTreeErrors.mergeIn(e.syncTreeErrors),this.asyncErrors.mergeIn(e.asyncErrors);for(let t of e.getMetadataKeys()){let n=e.metadata.get(t);this.getMetadata(t).mergeIn(n)}}},De=class{depth;constructor(e){this.depth=e}build(){return new Re(this,[],0)}},re=class i extends De{constructor(e){super(e)}current;all=[];addHiddenRule(e){this.getCurrent().addHiddenRule(e)}addDisabledReasonRule(e){this.getCurrent().addDisabledReasonRule(e)}addReadonlyRule(e){this.getCurrent().addReadonlyRule(e)}addSyncErrorRule(e){this.getCurrent().addSyncErrorRule(e)}addSyncTreeErrorRule(e){this.getCurrent().addSyncTreeErrorRule(e)}addAsyncErrorRule(e){this.getCurrent().addAsyncErrorRule(e)}addMetadataRule(e,t){this.getCurrent().addMetadataRule(e,t)}getChild(e){if(e===G){let t=this.getCurrent().children;t.size>(t.has(G)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(e)}hasLogic(e){return this===e?!0:this.all.some(({builder:t})=>t.hasLogic(e))}mergeIn(e,t){t?this.all.push({builder:e,predicate:{fn:H(t.fn,this.depth),path:t.path}}):this.all.push({builder:e}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new he(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new i(0)}},he=class extends De{logic=new ne([]);children=new Map;constructor(e){super(e)}addHiddenRule(e){this.logic.hidden.push(H(e,this.depth))}addDisabledReasonRule(e){this.logic.disabledReasons.push(H(e,this.depth))}addReadonlyRule(e){this.logic.readonly.push(H(e,this.depth))}addSyncErrorRule(e){this.logic.syncErrors.push(H(e,this.depth))}addSyncTreeErrorRule(e){this.logic.syncTreeErrors.push(H(e,this.depth))}addAsyncErrorRule(e){this.logic.asyncErrors.push(H(e,this.depth))}addMetadataRule(e,t){this.logic.getMetadata(e).push(H(t,this.depth))}getChild(e){return this.children.has(e)||this.children.set(e,new re(this.depth+1)),this.children.get(e)}hasLogic(e){return this===e}},Re=class i{builder;predicates;depth;logic;constructor(e,t,n){this.builder=e,this.predicates=t,this.depth=n,this.logic=e?wn(e,t,n):new ne([])}getChild(e){let t=this.builder?Si(this.builder,e):[];if(t.length===0)return new i(void 0,[],this.depth+1);if(t.length===1){let{builder:n,predicates:r}=t[0];return new i(n,[...this.predicates,...r.map(o=>it(o,this.depth))],this.depth+1)}else{let n=t.map(({builder:r,predicates:o})=>new i(r,[...this.predicates,...o.map(a=>it(a,this.depth))],this.depth+1));return new tt(n)}}hasLogic(e){return this.builder?.hasLogic(e)??!1}},tt=class i{all;logic;constructor(e){this.all=e,this.logic=new ne([]);for(let t of e)this.logic.mergeIn(t.logic)}getChild(e){return new i(this.all.flatMap(t=>t.getChild(e)))}hasLogic(e){return this.all.some(t=>t.hasLogic(e))}};function Si(i,e){if(i instanceof re)return i.all.flatMap(({builder:t,predicate:n})=>{let r=Si(t,e);return n?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,n]})):r});if(i instanceof he)return[...e!==G&&i.children.has(G)?[{builder:i.getChild(G),predicates:[]}]:[],...i.children.has(e)?[{builder:i.getChild(e),predicates:[]}]:[]];throw new g(1909,!1)}function wn(i,e,t){let n=new ne(e);if(i instanceof re){let r=i.all.map(({builder:o,predicate:a})=>new Re(o,a?[...e,it(a,t)]:e,t));for(let o of r)n.mergeIn(o.logic)}else if(i instanceof he)n.mergeIn(i.logic);else throw new g(1909,!1);return n}function it(i,e){return ae(M({},i),{depth:e})}var Fi=Symbol("PATH"),P=class i{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Mn);logicBuilder;constructor(e,t,n,r){this.keys=e,this.parent=n,this.keyInParent=r,this.root=t??this,n||(this.logicBuilder=re.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(e){return this.children.has(e)||this.children.set(e,new i([...this.keys,e],this.root,this,e)),this.children.get(e)}mergeIn(e,t){let n=e.compile();this.builder.mergeIn(n.builder,t)}static unwrapFieldPath(e){return e[Fi]}static newRoot(){return new i([],void 0,void 0,void 0)}},Mn={get(i,e){return e===Fi?i:i.getChild(e).fieldPathProxy}},Fe,me=new Map,Ne=class i{schemaFn;constructor(e){this.schemaFn=e}compile(){if(me.has(this))return me.get(this);let e=P.newRoot();me.set(this,e);let t=Fe;try{Fe=e,this.schemaFn(e.fieldPathProxy)}finally{Fe=t}return e}static create(e){return e instanceof i?e:new i(e)}static rootCompile(e){try{return me.clear(),e===void 0?P.newRoot():e instanceof i?e.compile():new i(e).compile()}finally{me.clear()}}};function En(i){return i instanceof Ne||typeof i=="function"}function ht(i){if(Fe!==P.unwrapFieldPath(i).root)throw new g(1908,!1)}function pt(i,e,t){return ht(i),P.unwrapFieldPath(i).builder.addMetadataRule(e,t),e}var j={list(){return{reduce:(i,e)=>e===void 0?i:[...i,e],getInitial:()=>[]}},min(){return{reduce:(i,e)=>i===void 0||e===void 0?i??e:Math.min(i,e),getInitial:()=>{}}},max(){return{reduce:(i,e)=>i===void 0||e===void 0?i??e:Math.max(i,e),getInitial:()=>{}}},or(){return{reduce:(i,e)=>i||e,getInitial:()=>!1}},and(){return{reduce:(i,e)=>i&&e,getInitial:()=>!0}},override:Cn};function Cn(i){return{reduce:(e,t)=>t,getInitial:()=>i?.()}}var Ae=class{reducer;create;brand;constructor(e,t){this.reducer=e,this.create=t}};function L(i){return new Ae(i??j.override())}var gt=L(j.or()),Ti=L(j.max()),Di=L(j.min()),Ri=L(j.max()),Ni=L(j.min()),Ai=L(j.list());function Sn(i){return i.errors().length>0?"invalid":i.pending()?"unknown":"valid"}var nt=class{node;constructor(e){this.node=e}rawSyncTreeErrors=d(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=d(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Fn(this.node.submitState.submissionErrors())]);syncValid=d(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(e,t)=>t&&e.validationState.syncValid(),xn));syncTreeErrors=d(()=>this.rawSyncTreeErrors().filter(e=>e.fieldTree===this.node.fieldTree));rawAsyncErrors=d(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=d(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(e=>e==="pending"||e.fieldTree===this.node.fieldTree));parseErrors=d(()=>this.node.formFieldBindings().flatMap(e=>e.parseErrors()));errors=d(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(e=>e!=="pending")]);errorSummary=d(()=>{let e=this.node.structure.reduceChildren(this.errors(),(t,n)=>[...n,...t.errorSummary()]);return u(()=>e.sort(Tn)),e});pending=d(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(e,t)=>t||e.validationState.asyncErrors().includes("pending")));status=d(()=>{if(this.shouldSkipValidation())return"valid";let e=Sn(this);return this.node.structure.reduceChildren(e,(t,n)=>n==="invalid"||t.validationState.status()==="invalid"?"invalid":n==="unknown"||t.validationState.status()==="unknown"?"unknown":"valid",t=>t==="invalid")});valid=d(()=>this.status()==="valid");invalid=d(()=>this.status()==="invalid");shouldSkipValidation=d(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function Fn(i){return i===void 0?[]:k(i)?i:[i]}function Ii(i,e){if(k(i))for(let t of i)t.fieldTree??=e;else i&&(i.fieldTree??=e);return i}function Ei(i){return i.formField?i.formField.element:i.fieldTree().formFieldBindings().reduce((e,t)=>!e||!t.element?e??t.element:e.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:e,void 0)}function Tn(i,e){let t=Ei(i),n=Ei(e);return t===n?0:t===void 0||n===void 0?t===void 0?1:-1:t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var rt=L(),ot=class{node;cache=new WeakMap;constructor(e){this.node=e}resolve(e){if(!this.cache.has(e)){let t=d(()=>{let n=P.unwrapFieldPath(e),r=this.node,o=yn();for(;o>0||!r.structure.logic.hasLogic(n.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new g(1900,!1);for(let a of n.keys)if(r=r.structure.getChild(a),r===void 0)throw new g(1901,!1);return r.fieldTree});this.cache.set(e,t)}return this.cache.get(e)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=d(()=>{let e=this.key();if(!k(u(this.node.structure.parent.value)))throw new g(1906,!1);return Number(e)});fieldTreeOf=e=>this.resolve(e);stateOf=e=>this.resolve(e)();valueOf=e=>{let t=this.resolve(e)().value();if(t instanceof bi)throw new g(1907,!1);return t}},at=class{node;metadata=new Map;constructor(e){this.node=e;for(let t of this.node.logicNode.logic.getMetadataKeys())if(t.create){let n=this.node.logicNode.logic.getMetadata(t),r=u(()=>He(this.node.structure.injector,()=>t.create(d(()=>n.compute(this.node.context)))));this.metadata.set(t,r)}}get(e){if(this.has(e)&&!this.metadata.has(e)){if(e.create)throw new g(1912,!1);let t=this.node.logicNode.logic.getMetadata(e);this.metadata.set(e,d(()=>t.compute(this.node.context)))}return this.metadata.get(e)}has(e){return this.node.logicNode.logic.hasMetadata(e)}},Dn={get(i,e,t){let n=i(),r=n.structure.getChild(e);if(r!==void 0)return r.fieldTree;let o=u(n.value);if(k(o)){if(e==="length")return n.value().length;if(e===Symbol.iterator)return()=>(n.value(),Array.prototype[Symbol.iterator].apply(n.fieldTree))}if(te(o)&&e===Symbol.iterator)return function*(){for(let a in t)yield[a,t[a]]}},getOwnPropertyDescriptor(i,e){let t=u(i().value),n=Reflect.getOwnPropertyDescriptor(t,e);return n&&!n.configurable&&(n.configurable=!0),n},ownKeys(i){let e=u(i().value);return typeof e=="object"&&e!==null?Reflect.ownKeys(e):[]}};function Rn(i,e){let t=d(()=>i()[e()]);return t[Ve]=i[Ve],t.set=n=>{i.update(r=>Nn(r,n,e()))},t.update=n=>{t.set(n(u(t)))},t.asReadonly=()=>t,t}function Nn(i,e,t){if(k(i)){let n=[...i];return n[t]=e,n}else return ae(M({},i),{[t]:e})}var Ie=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=le.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(e,t,n){this.logic=e,this.node=t,this.createChildNode=n}children(){let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>u(t.reader))}getChild(e){let t=e.toString(),n=u(this.childrenMap)?.byPropertyKey.get(t)?.reader;return n||(n=this.createReader(t)),n()}reduceChildren(e,t,n){let r=this.childrenMap();if(!r)return e;let o=e;for(let a of r.byPropertyKey.values()){if(n?.(o))break;o=t(u(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyInParent(e,t,n){if(e.kind==="root")return ki;if(t===void 0){let r=n;return d(()=>{if(this.parent.structure.getChild(r)!==this.node)throw new g(-1902,!1);return r})}else{let r=n;return d(()=>{let o=this.parent.structure.value();if(!k(o))throw new g(1903,!1);let a=o[r];if(te(a)&&a.hasOwnProperty(this.parent.structure.identitySymbol)&&a[this.parent.structure.identitySymbol]===t)return r;for(let s=0;s<o.length;s++){let h=o[s];if(te(h)&&h.hasOwnProperty(this.parent.structure.identitySymbol)&&h[this.parent.structure.identitySymbol]===t)return r=s.toString()}throw new g(1904,!1)})}}createChildrenMap(){return U({source:this.value,computation:(e,t)=>{if(!te(e))return;let n=t?.value??{byPropertyKey:new Map},r,o=k(e);n!==void 0&&(o?r=In(n,e,this.identitySymbol):r=kn(n,e));for(let a of Object.keys(e)){let s,h=e[a];if(h===void 0){n.byPropertyKey.has(a)&&(r??=M({},n),r.byPropertyKey.delete(a));continue}o&&te(h)&&!k(h)&&(s=h[this.identitySymbol]??=Symbol(""));let p;s&&(n.byTrackingKey?.has(s)||(r??=M({},n),r.byTrackingKey??=new Map,r.byTrackingKey.set(s,this.createChildNode(a,s,o))),p=(r??n).byTrackingKey.get(s));let R=n.byPropertyKey.get(a);R===void 0?(r??=M({},n),r.byPropertyKey.set(a,{reader:this.createReader(a),node:p??this.createChildNode(a,s,o)})):p&&p!==R.node&&(r??=M({},n),R.node=p)}return r??n}})}createReader(e){return d(()=>this.childrenMap()?.byPropertyKey.get(e)?.node)}},lt=class extends Ie{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return An}get keyInParent(){return ki}childrenMap;constructor(e,t,n,r,o){super(t,e,o),this.fieldManager=n,this.value=r,this.childrenMap=this.createChildrenMap()}},dt=class extends Ie{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(e,t,n,r,o,a){super(t,e,a),this.logic=t,this.parent=n,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:n,pathNode:void 0,logic:t,initialKeyInParent:o,identityInParent:r,fieldAdapter:void 0},r,o),this.pathKeys=d(()=>[...n.structure.pathKeys(),this.keyInParent()]),this.value=Rn(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var An=d(()=>[]),ki=d(()=>{throw new g(1905,!1)});function In(i,e,t){let n,r=new Set(i.byPropertyKey.keys()),o=new Set(i.byTrackingKey?.keys());for(let a=0;a<e.length;a++){let s=e[a];r.delete(a.toString()),te(s)&&s.hasOwnProperty(t)&&o.delete(s[t])}if(r.size>0){n??=M({},i);for(let a of r)n.byPropertyKey.delete(a)}if(o.size>0){n??=M({},i);for(let a of o)n.byTrackingKey?.delete(a)}return n}function kn(i,e){let t;for(let n of i.byPropertyKey.keys())e.hasOwnProperty(n)||(t??=M({},i),t.byPropertyKey.delete(n));return t}var st=class{node;selfSubmitting=E(!1);submissionErrors;constructor(e){this.node=e,this.submissionErrors=U({source:this.node.structure.value,computation:()=>[]})}submitting=d(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},pe=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new ot(this)}fieldProxy=new Proxy(()=>this,Dn);pathNode;constructor(e){this.pathNode=e.pathNode,this.fieldAdapter=e.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,e),this.validationState=this.fieldAdapter.createValidationState(this,e),this.nodeState=this.fieldAdapter.createNodeState(this,e),this.metadataState=new at(this),this.submitState=new st(this),this.controlValue=this.controlValueSignal()}focusBoundControl(e){this.getBindingForFocus()?.focus(e)}getBindingForFocus(){let e=this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(Ci,void 0);return e||this.structure.children().map(t=>t.getBindingForFocus()).reduce(Ci,void 0)}pendingSync=U({source:()=>this.value(),computation:(e,t)=>{t?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata(Di)}get maxLength(){return this.metadata(Ni)}get min(){return this.metadata(Ti)}get minLength(){return this.metadata(Ri)}get pattern(){return this.metadata(Ai)??Pn}get required(){return this.metadata(gt)??Ln}metadata(e){return this.metadataState.get(e)}hasMetadata(e){return this.metadataState.has(e)}markAsTouched(){u(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(e){u(()=>this._reset(e))}_reset(e){e!==void 0&&this.value.set(e),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let t of this.structure.children())t._reset()}controlValueSignal(){let e=U(this.value),{set:t,update:n}=e;return e.set=r=>{t(r),this.markAsDirty(),this.debounceSync()},e.update=r=>{n(r),this.markAsDirty(),this.debounceSync()},e}sync(){this.value.set(this.controlValue())}flushSync(){let e=this.pendingSync();e&&!e.signal.aborted&&(e.abort(),this.sync())}async debounceSync(){let e=u(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(e){let t=new AbortController,n=e(t.signal);if(n&&(this.pendingSync.set(t),await n,t.signal.aborted))return}this.sync()}static newRoot(e,t,n,r){return r.newRoot(e,t,n,r)}createStructure(e){return e.kind==="root"?new lt(this,e.logic,e.fieldManager,e.value,this.newChild.bind(this)):new dt(this,e.logic,e.parent,e.identityInParent,e.initialKeyInParent,this.newChild.bind(this))}newChild(e,t,n){let r,o;return n?(r=this.pathNode.getChild(G),o=this.structure.logic.getChild(G)):(r=this.pathNode.getChild(e),o=this.structure.logic.getChild(e)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:e,identityInParent:t,fieldAdapter:this.fieldAdapter})}},Pn=d(()=>[]),Ln=d(()=>!1);function Ci(i,e){return i?e&&i.element.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e:i:e}var ct=class{node;selfTouched=E(!1);selfDirty=E(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=E([]);constructor(e){this.node=e}dirty=d(()=>{let e=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,n)=>n||t.nodeState.dirty(),wi)});touched=d(()=>{let e=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,n)=>n||t.nodeState.touched(),wi)});disabledReasons=d(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=d(()=>!!this.disabledReasons().length);readonly=d(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=d(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=d(()=>{let e=this.node.structure.parent;return e?`${e.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=d(()=>{if(this.node.logicNode.logic.hasMetadata(rt)){let t=this.node.logicNode.logic.getMetadata(rt).compute(this.node.context);if(t)return n=>t(this.node.context,n)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=d(()=>this.hidden()||this.disabled()||this.readonly())},ft=class{newRoot(e,t,n,r){return new pe({kind:"root",fieldManager:e,value:t,pathNode:n,logic:n.builder.build(),fieldAdapter:r})}newChild(e){return new pe(e)}createNodeState(e){return new ct(e)}createValidationState(e){return new nt(e)}createStructure(e,t){return e.createStructure(t)}},mt=class{injector;rootName;submitOptions;constructor(e,t,n){this.injector=e,this.rootName=t??`${this.injector.get(Ut)}.form${On++}`,this.submitOptions=n}structures=new Set;createFieldManagementEffect(e){O(()=>{let t=new Set;this.markStructuresLive(e,t);for(let n of this.structures)t.has(n)||(this.structures.delete(n),u(()=>n.destroy()))},{injector:this.injector})}markStructuresLive(e,t){t.add(e);for(let n of e.children())this.markStructuresLive(n.structure,t)}},On=0;function zn(i){let e,t,n;return i.length===3?[e,t,n]=i:i.length===2?En(i[1])?[e,t]=i:[e,n]=i:[e]=i,[e,t,n]}function bt(...i){let[e,t,n]=zn(i),r=n?.injector??l(le),o=He(r,()=>Ne.rootCompile(t)),a=new mt(r,n?.name,n?.submission),s=n?.adapter??new ft,h=pe.newRoot(a,e,o,s);return a.createFieldManagementEffect(h.structure),h.fieldTree}var ut=class{kind="compat";control;fieldTree;context;message;constructor({context:e,kind:t,control:n}){this.context=e,this.kind=t,this.control=n}};function Pi(i){if(i.length===0)return null;let e={};for(let t of i)e[t.kind]=t instanceof ut?t.context:t;return e}var Bn=new v("");function Pe(i,e){return i instanceof Function?i(e):i}function zi(i){return typeof i=="number"?isNaN(i):i===""||i===!1||i==null}function Li(i){return i===void 0?[]:Array.isArray(i)?i:[i]}function Bi(i,e){ht(i),P.unwrapFieldPath(i).builder.addSyncErrorRule(n=>Ii(e(n),n.fieldTree))}function Vn(i){return new _t(i)}function Hn(i){return new vt(i)}var ge=class{__brand=void 0;kind="";fieldTree;message;constructor(e){e&&Object.assign(this,e)}},_t=class extends ge{kind="required"};var vt=class extends ge{kind="email"},yt=class extends ge{kind="parse"};var jn=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function Vi(i,e){Bi(i,t=>{if(!zi(t.value())&&!jn.test(t.value()))return e?.error?Pe(e.error,t):Hn({message:Pe(e?.message,t)})})}function Mt(i,e){let t=pt(i,L(),n=>e?.when?e.when(n):!0);pt(i,gt,({state:n})=>n.metadata(t)()),Bi(i,n=>{if(n.state.metadata(t)()&&zi(n.value()))return e?.error?Pe(e.error,n):Vn({message:Pe(e?.message,n)})})}var qn=new v("");function Kn(i,e,t){let n=U({source:i,computation:()=>[]}),r=o=>{let a=t(o);n.set(Li(a.error)),a.value!==void 0&&e(a.value),n.set(Li(a.error))};return{errors:n.asReadonly(),setRawValue:r}}var xt=class{field;constructor(e){this.field=e}control=this;get value(){return this.field().value()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return Pi(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new g(1910,!1)}valueAccessor=null;hasValidator(e){return e===Ee.required?this.field().required():!1}updateValueAndValidity(){}},wt={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},Un=(()=>{let i={};for(let e of Object.keys(wt))i[wt[e]]=e;return i})();function Et(i,e){let t=Un[e];return i[t]?.()}var Ct=Object.values(wt);function Le(){return{}}function W(i,e,t){return i[e]!==t?(i[e]=t,!0):!1}function Gn(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"}function Wn(i){if(i.tagName!=="INPUT")return!1;let e=i.type;return e==="date"||e==="datetime-local"||e==="month"||e==="number"||e==="range"||e==="time"||e==="week"}function $n(i){return i.tagName==="INPUT"||i.tagName==="TEXTAREA"}function Zn(i,e){let t;if(i.validity.badInput)return{error:new yt};switch(i.type){case"checkbox":return{value:i.checked};case"number":case"range":case"datetime-local":if(t=u(e),typeof t=="number"||t===null)return{value:i.value===""?null:i.valueAsNumber};break;case"date":case"month":case"time":case"week":if(t=u(e),t===null||t instanceof Date)return{value:i.valueAsDate};if(typeof t=="number")return{value:i.valueAsNumber};break}return{value:i.value}}function Qn(i,e){switch(i.type){case"checkbox":i.checked=e;return;case"radio":i.checked=e===i.value;return;case"number":case"range":case"datetime-local":if(typeof e=="number"){Oi(i,e);return}else if(e===null){i.value="";return}break;case"date":case"month":case"time":case"week":if(e===null||e instanceof Date){i.valueAsDate=e;return}else if(typeof e=="number"){Oi(i,e);return}}i.value=e}function Oi(i,e){isNaN(e)?i.value="":i.valueAsNumber=e}function St(i,e,t,n){switch(t){case"name":i.setAttribute(e,t,n);break;case"disabled":case"readonly":case"required":n?i.setAttribute(e,t,""):i.removeAttribute(e,t);break;case"max":case"min":case"minLength":case"maxLength":n!==void 0?i.setAttribute(e,t,n.toString()):i.removeAttribute(e,t);break}}function Yn(i,e){i.listenToCustomControlModel(n=>e.state().controlValue.set(n)),i.listenToCustomControlOutput("touchedChange",()=>e.state().markAsTouched()),e.registerAsBinding(i.customControl);let t=Le();return()=>{let n=e.state(),r=n.controlValue();W(t,"controlValue",r)&&i.setCustomControlModelInput(r);for(let o of Ct){let a;o==="errors"?a=e.errors():a=Et(n,o),W(t,o,a)&&(i.setInputOnDirectives(o,a),e.elementAcceptsNativeProperty(o)&&!i.customControlHasInput(o)&&St(e.renderer,e.nativeFormElement,o,a))}}}function Xn(i,e){e.controlValueAccessor.registerOnChange(n=>e.state().controlValue.set(n)),e.controlValueAccessor.registerOnTouched(()=>e.state().markAsTouched()),e.registerAsBinding();let t=Le();return()=>{let n=e.state(),r=n.value();W(t,"controlValue",r)&&u(()=>e.controlValueAccessor.writeValue(r));for(let o of Ct){let a=Et(n,o);if(W(t,o,a)){let s=i.setInputOnDirectives(o,a);o==="disabled"&&e.controlValueAccessor.setDisabledState?u(()=>e.controlValueAccessor.setDisabledState(a)):!s&&e.elementAcceptsNativeProperty(o)&&St(e.renderer,e.nativeFormElement,o,a)}}}}function Jn(i,e,t){if(typeof MutationObserver!="function")return;let n=new MutationObserver(r=>{r.some(o=>er(o))&&e()});n.observe(i,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),t.onDestroy(()=>n.disconnect())}function er(i){if(i.type==="childList"||i.type==="characterData"){if(i.target instanceof Comment)return!1;for(let e of i.addedNodes)if(!(e instanceof Comment))return!0;for(let e of i.removedNodes)if(!(e instanceof Comment))return!0;return!1}return i.type==="attributes"&&i.target instanceof HTMLOptionElement}function tr(i,e,t){let n=!1,r=e.nativeFormElement,o=Kn(()=>e.state().value(),s=>e.state().controlValue.set(s),()=>Zn(r,e.state().value));t.set(o.errors),i.listenToDom("input",()=>o.setRawValue(void 0)),i.listenToDom("blur",()=>e.state().markAsTouched()),e.registerAsBinding(),r.tagName==="SELECT"&&Jn(r,()=>{n&&(r.value=e.state().controlValue())},e.destroyRef);let a=Le();return()=>{let s=e.state(),h=s.controlValue();W(a,"controlValue",h)&&Qn(r,h);for(let p of Ct){let R=Et(s,p);W(a,p,R)&&(i.setInputOnDirectives(p,R),e.elementAcceptsNativeProperty(p)&&St(e.renderer,r,p,R))}n=!0}}var ir=Symbol(),nr=new v(""),Hi=(()=>{class i{field=ii.required({alias:"formField"});renderer=l(q);destroyRef=l(qt);state=d(()=>this.field()());injector=l(le);element=l(F).nativeElement;elementIsNativeFormElement=Gn(this.element);elementAcceptsNumericValues=Wn(this.element);elementAcceptsTextualValues=$n(this.element);nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=l(pi,{optional:!0,self:!0});config=l(Bn,{optional:!0});parseErrorsSource=E(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new xt(this.state)}parseErrors=d(()=>this.parseErrorsSource()?.().map(t=>ae(M({},t),{fieldTree:u(this.state).fieldTree,formField:this}))??[]);errors=d(()=>this.state().errors().filter(t=>!t.formField||t.formField===this));isFieldBinding=!1;get controlValueAccessor(){return this.controlValueAccessors?.[0]??this.interopNgControl?.valueAccessor??void 0}installClassBindingEffect(){let t=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,d(()=>o(this))]);if(t.length===0)return;let n=Le();we({write:()=>{for(let[r,o]of t){let a=o();W(n,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(t){this.focuser(t)}registerAsBinding(t){if(this.isFieldBinding)throw new g(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),t?.focus&&(this.focuser=n=>t.focus(n)),O(n=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),n(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[ir];\u0275ngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=Xn(t,this);else if(t.customControl)this.\u0275ngControlUpdate=Yn(t,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=tr(t,this,this.parseErrorsSource);else throw new g(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return!1;switch(t){case"min":case"max":return this.elementAcceptsNumericValues;case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(n){return new(n||i)};static \u0275dir=w({type:i,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[V([{provide:nr,useExisting:i},{provide:Ce,useFactory:()=>l(i).interopNgControl},{provide:qn,useFactory:()=>l(i).parseErrorsSource}]),Wt("formField")]})}return i})();var Ft=class{_box;_destroyed=new N;_resizeSubject=new N;_resizeObserver;_elementObservables=new Map;constructor(e){this._box=e,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new Lt(t=>{let n=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),n.unsubscribe(),this._elementObservables.delete(e)}}).pipe(ve(t=>t.some(n=>n.target===e)),Ht({bufferSize:1,refCount:!0}),ye(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},ji=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=l(C);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,n){let r=n?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Ft(r)),this._observers.get(r).observe(t)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Z({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var rr=["notch"],or=["matFormFieldNotchedOutline",""],ar=["*"],qi=["iconPrefixContainer"],Ki=["textPrefixContainer"],Ui=["iconSuffixContainer"],Gi=["textSuffixContainer"],lr=["textField"],dr=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],sr=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function cr(i,e){i&1&&z(0,"span",21)}function fr(i,e){if(i&1&&(f(0,"label",20),S(1,1),b(2,cr,1,0,"span",21),m()),i&2){let t=B(2);T("floating",t._shouldLabelFloat())("monitorResize",t._hasOutline())("id",t._labelId),de("for",t._control.disableAutomaticLabeling?null:t._control.id),c(2),_(!t.hideRequiredMarker&&t._control.required?2:-1)}}function mr(i,e){if(i&1&&b(0,fr,3,5,"label",20),i&2){let t=B();_(t._hasFloatingLabel()?0:-1)}}function ur(i,e){i&1&&z(0,"div",7)}function hr(i,e){}function pr(i,e){if(i&1&&xe(0,hr,0,0,"ng-template",13),i&2){B(2);let t=$e(1);T("ngTemplateOutlet",t)}}function gr(i,e){if(i&1&&(f(0,"div",9),b(1,pr,1,1,null,13),m()),i&2){let t=B();T("matFormFieldNotchedOutlineOpen",t._shouldLabelFloat()),c(),_(t._forceDisplayInfixLabel()?-1:1)}}function br(i,e){i&1&&(f(0,"div",10,2),S(2,2),m())}function _r(i,e){i&1&&(f(0,"div",11,3),S(2,3),m())}function vr(i,e){}function yr(i,e){if(i&1&&xe(0,vr,0,0,"ng-template",13),i&2){B();let t=$e(1);T("ngTemplateOutlet",t)}}function xr(i,e){i&1&&(f(0,"div",14,4),S(2,4),m())}function wr(i,e){i&1&&(f(0,"div",15,5),S(2,5),m())}function Mr(i,e){i&1&&z(0,"div",16)}function Er(i,e){i&1&&(f(0,"div",18),S(1,6),m())}function Cr(i,e){if(i&1&&(f(0,"mat-hint",22),D(1),m()),i&2){let t=B(2);T("id",t._hintLabelId),c(),ce(t.hintLabel)}}function Sr(i,e){if(i&1&&(f(0,"div",19),b(1,Cr,2,2,"mat-hint",22),S(2,7),z(3,"div",23),S(4,8),m()),i&2){let t=B();c(),_(t.hintLabel?1:-1)}}var be=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=w({type:i,selectors:[["mat-label"]]})}return i})(),Ji=new v("MatError"),Dt=(()=>{class i{id=l(J).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275dir=w({type:i,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(n,r){n&2&&se("id",r.id)},inputs:{id:"id"},features:[V([{provide:Ji,useExisting:i}])]})}return i})(),Tt=(()=>{class i{align="start";id=l(J).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||i)};static \u0275dir=w({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,r){n&2&&(se("id",r.id),de("align",null),I("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),Fr=new v("MatPrefix");var en=new v("MatSuffix"),Rt=(()=>{class i{set _isTextSelector(t){this._isText=!0}_isText=!1;static \u0275fac=function(n){return new(n||i)};static \u0275dir=w({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[V([{provide:en,useExisting:i}])]})}return i})(),tn=new v("FloatingLabelParent"),Wi=(()=>{class i{_elementRef=l(F);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(ji);_ngZone=l(C);_parent=l(tn);_resizeSubscription=new Pt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Tr(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||i)};static \u0275dir=w({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,r){n&2&&I("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function Tr(i){let e=i;if(e.offsetParent!==null)return e.scrollWidth;let t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let n=t.scrollWidth;return t.remove(),n}var $i="mdc-line-ripple--active",Oe="mdc-line-ripple--deactivating",Zi=(()=>{class i{_elementRef=l(F);_cleanupTransitionEnd;constructor(){let t=l(C),n=l(q);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(Oe),t.add($i)}deactivate(){this._elementRef.nativeElement.classList.add(Oe)}_handleTransitionEnd=t=>{let n=this._elementRef.nativeElement.classList,r=n.contains(Oe);t.propertyName==="opacity"&&r&&n.remove($i,Oe)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||i)};static \u0275dir=w({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Qi=(()=>{class i{_elementRef=l(F);_ngZone=l(C);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,n=t.querySelector(".mdc-floating-label");n?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):t.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(t){let n=this._notch.nativeElement;!this.open||!t?n.style.width="":n.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=K({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,r){if(n&1&&Ge(rr,5),n&2){let o;y(o=x())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,r){n&2&&I("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:or,ngContentSelectors:ar,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,r){n&1&&(Ue(),Ke(0,"div",1),Zt(1,"div",2,0),S(3),Qt(),Ke(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),Nt=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||i)};static \u0275dir=w({type:i})}return i})();var At=new v("MatFormField"),Dr=new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Yi="fill",Rr="auto",Xi="fixed",Nr="translateY(-50%)",ze=(()=>{class i{_elementRef=l(F);_changeDetectorRef=l(ri);_platform=l(X);_idGenerator=l(J);_ngZone=l(C);_defaults=l(Dr,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=fe("iconPrefixContainer");_textPrefixContainerSignal=fe("textPrefixContainer");_iconSuffixContainerSignal=fe("iconSuffixContainer");_textSuffixContainerSignal=fe("textSuffixContainer");_prefixSuffixContainers=d(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=ni(be);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=ee(t)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Rr}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let n=t||this._defaults?.appearance||Yi;this._appearanceSignal.set(n)}_appearanceSignal=E(Yi);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Xi}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||Xi}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new N;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ci();constructor(){let t=this._defaults,n=l(si);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),O(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=d(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(t){let n=this._control,r="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(r+t.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(jt([void 0,void 0]),zt(()=>[n.errorState,n.userAriaDescribedBy]),Vt(),ve(([[o,a],[s,h]])=>o!==s||a!==h)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(ye(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Bt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t)}_syncOutlineLabelOffset(){we({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=d(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let n=this._control?this._control.ngControl:null;return n&&n[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?t.push(o.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||t;r=t.concat(n.filter(a=>a&&!o.includes(a)))}else r=t;this._control.setDescribedByIds(r),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,s=n?.getBoundingClientRect().width??0,h=r?.getBoundingClientRect().width??0,p=o?.getBoundingClientRect().width??0,R=this._currentDirection==="rtl"?"-1":"1",hn=`${a+s}px`,pn=`calc(${R} * (${hn} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,gn=`var(--mat-mdc-form-field-label-transform, ${Nr} translateX(${pn}))`,bn=a+s+h+p;return[gn,bn]}_writeOutlinedLabelStyles(t){if(t!==null){let[n,r]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let n=t.getRootNode();return n&&n!==t}return document.documentElement.contains(t)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=K({type:i,selectors:[["mat-form-field"]],contentQueries:function(n,r,o){if(n&1&&(Xt(o,r._labelChild,be,5),Yt(o,Nt,5)(o,Fr,5)(o,en,5)(o,Ji,5)(o,Tt,5)),n&2){We();let a;y(a=x())&&(r._formFieldControl=a.first),y(a=x())&&(r._prefixChildren=a),y(a=x())&&(r._suffixChildren=a),y(a=x())&&(r._errorChildren=a),y(a=x())&&(r._hintChildren=a)}},viewQuery:function(n,r){if(n&1&&(Jt(r._iconPrefixContainerSignal,qi,5)(r._textPrefixContainerSignal,Ki,5)(r._iconSuffixContainerSignal,Ui,5)(r._textSuffixContainerSignal,Gi,5),Ge(lr,5)(qi,5)(Ki,5)(Ui,5)(Gi,5)(Wi,5)(Qi,5)(Zi,5)),n&2){We(4);let o;y(o=x())&&(r._textField=o.first),y(o=x())&&(r._iconPrefixContainer=o.first),y(o=x())&&(r._textPrefixContainer=o.first),y(o=x())&&(r._iconSuffixContainer=o.first),y(o=x())&&(r._textSuffixContainer=o.first),y(o=x())&&(r._floatingLabel=o.first),y(o=x())&&(r._notchedOutline=o.first),y(o=x())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,r){n&2&&I("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[V([{provide:At,useExisting:i},{provide:tn,useExisting:i}])],ngContentSelectors:sr,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,r){if(n&1&&(Ue(dr),xe(0,mr,1,1,"ng-template",null,0,ti),f(2,"div",6,1),A("click",function(a){return r._control.onContainerClick(a)}),b(4,ur,1,0,"div",7),f(5,"div",8),b(6,gr,2,2,"div",9),b(7,br,3,0,"div",10),b(8,_r,3,0,"div",11),f(9,"div",12),b(10,yr,1,1,null,13),S(11),m(),b(12,xr,3,0,"div",14),b(13,wr,3,0,"div",15),m(),b(14,Mr,1,0,"div",16),m(),f(15,"div",17),b(16,Er,2,0,"div",18)(17,Sr,5,1,"div",19),m()),n&2){let o;c(2),I("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),c(2),_(!r._hasOutline()&&!r._control.disabled?4:-1),c(2),_(r._hasOutline()?6:-1),c(),_(r._hasIconPrefix?7:-1),c(),_(r._hasTextPrefix?8:-1),c(2),_(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),c(2),_(r._hasTextSuffix?12:-1),c(),_(r._hasIconSuffix?13:-1),c(),_(r._hasOutline()?-1:14),c(),I("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();c(),_((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Wi,Qi,oi,Zi,Tt],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return i})();var _e=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Y({type:i});static \u0275inj=Q({imports:[di,ze,Me]})}return i})();var Ir=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=K({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return i})(),kr={passive:!0},nn=(()=>{class i{_platform=l(X);_ngZone=l(C);_renderer=l(Gt).createRenderer(null,null);_styleLoader=l(li);_monitoredElements=new Map;constructor(){}monitor(t){if(!this._platform.isBrowser)return Ot;this._styleLoader.load(Ir);let n=Qe(t),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new N,a="cdk-text-field-autofilled",s=p=>{p.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:p.target,isAutofilled:!0}))):p.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:p.target,isAutofilled:!1})))},h=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",s,kr)));return this._monitoredElements.set(n,{subject:o,unlisten:h}),o}stopMonitoring(t){let n=Qe(t),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((t,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Z({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var rn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Y({type:i});static \u0275inj=Q({})}return i})();var on=new v("MAT_INPUT_VALUE_ACCESSOR");var an=(()=>{class i{isErrorState(t,n){return!!(t&&t.invalid&&(t.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Z({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Be=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(e,t,n,r,o){this._defaultMatcher=e,this.ngControl=t,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=o}updateErrorState(){let e=this.errorState,t=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=n?.isErrorState(r,t)??!1;o!==e&&(this.errorState=o,this._stateChanges.next())}};var Pr=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Lr=new v("MAT_INPUT_CONFIG"),ln=(()=>{class i{_elementRef=l(F);_platform=l(X);ngControl=l(Ce,{optional:!0,self:!0});_autofillMonitor=l(nn);_ngZone=l(C);_formField=l(At,{optional:!0});_renderer=l(q);_uid=l(J).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(Lr,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new N;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=ee(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Ee.required)??!1}set required(t){this._required=ee(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&Ye().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=ee(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>Ye().has(t));constructor(){let t=l(Se,{optional:!0}),n=l(vi,{optional:!0}),r=l(an),o=l(on,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?$t(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Be(r,this.ngControl,n,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&O(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=t,t?n.setAttribute("placeholder",t):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Pr.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,n=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let n=this._elementRef.nativeElement;t.length?n.setAttribute("aria-describedby",t.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let n=t.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||i)};static \u0275dir=w({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,r){n&1&&A("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),n&2&&(se("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),de("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),I("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ze]},exportAs:["matInput"],features:[V([{provide:Nt,useExisting:i}]),Kt]})}return i})(),dn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Y({type:i});static \u0275inj=Q({imports:[_e,_e,rn,Me]})}return i})();var It=vn(cn()),fn=(0,It.make)(),mn=(0,It.make)();function Br(i,e){i&1&&(f(0,"mat-error"),D(1),m()),i&2&&(c(),ce(e.message))}function Vr(i,e){i&1&&(f(0,"mat-error"),D(1),m()),i&2&&(c(),ce(e.message))}var kt=class i{appAuth=l(hi);router=l(ai);passwordMode=E("password");loginModel=E({email:fn(""),password:mn("")});loginForm=bt(this.loginModel,e=>{Mt(e.email,{message:"Email is required"}),Vi(e.email,{message:"Email is invalid"}),Mt(e.password,{message:"Password is required"})});emailError=un(this.loginForm.email);passwordError=un(this.loginForm.password);async signIn(){let e=this.loginForm();if(e.invalid())return;let t=e.value();await this.appAuth.signIn(t)&&await this.router.navigate(["/"])}togglePasswordVisible(){this.passwordMode.update(e=>e==="password"?"text":"password")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=K({type:i,selectors:[["hm-login"]],decls:19,vars:7,consts:[[3,"ngSubmit"],[1,"form-fields"],["matInput","","type","text",3,"formField"],["matInput","",3,"formField","type"],["aria-label","Toggle Password Visibility","matIconButton","","matSuffix","","type","button",3,"click"],["mat-flat-button","","type","submit",3,"disabled"]],template:function(t,n){if(t&1&&(f(0,"h1"),D(1,"Please Sign In"),m(),f(2,"form",0),A("ngSubmit",function(){return n.signIn()}),f(3,"div",1)(4,"mat-form-field")(5,"mat-label"),D(6,"Email"),m(),z(7,"input",2),je(),b(8,Br,2,1,"mat-error"),m(),f(9,"mat-form-field")(10,"mat-label"),D(11,"Password"),m(),z(12,"input",3),je(),f(13,"button",4),A("click",function(){return n.togglePasswordVisible()}),f(14,"mat-icon"),D(15),m()(),b(16,Vr,2,1,"mat-error"),m()(),f(17,"button",5),D(18," Sign In "),m()()),t&2){let r,o;c(7),T("formField",n.loginForm.email),qe(),c(),_((r=n.emailError())?8:-1,r),c(4),T("formField",n.loginForm.password)("type",n.passwordMode()),qe(),c(3),ei(" ",n.passwordMode()==="password"?"visibility":"visibility_off"," "),c(),_((o=n.passwordError())?16:-1,o),c(),T("disabled",n.loginForm().invalid())}},dependencies:[Hi,yi,_i,gi,Se,ui,mi,fi,_e,ze,be,Dt,Rt,xi,dn,ln],styles:[".form-fields[_ngcontent-%COMP%]{display:flex;gap:1rem;align-items:center}"],changeDetection:0})};function un(i){return d(()=>i().errors().at(0))}export{kt as default};
