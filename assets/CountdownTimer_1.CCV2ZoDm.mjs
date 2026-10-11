import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{F as t,M as n,N as r,O as i,_ as a,j as ee,l as o,s,u as c,w as l}from"./react.N6WDMTqS.mjs";import{M as u,Q as d,r as f}from"./framer.joQoGTny.mjs";function p(e){let{targetDate:s=``,showDays:l=!0,showHours:u=!0,showMinutes:d=!0,showSeconds:f=!0,isDarkMode:p=!0,primaryColor:m=`#FFFFFF`,accentColor:te=`#00D4FF`,lightModeNumberColor:h=`#000000`,lightModeAccentColor:g=`#0066CC`,numberFont:_,labelFont:ne,numberFontSize:v=48,labelFontSize:y=12,padding:b=24,gap:x=16,numberToLabelPadding:S=4,showLabels:C=!0,unitBackgroundColor:w=`#1A1A1A`,lightModeUnitBackgroundColor:T=`#F5F5F5`,completedMessage:E=`Time's Up!`,showCompletedMessage:D=!0,animationType:O=`fade`,borderWidth:k=0,borderColor:re=`#333333`,lightModeBorderColor:ie=`#CCCCCC`,daysLabel:A=`Days`,hoursLabel:j=`Hours`,minutesLabel:M=`Minutes`,secondsLabel:N=`Seconds`}=e,P=p?m:h,F=p?te:g,I=p?w:T,L=p?re:ie,[R,z]=t({days:0,hours:0,minutes:0,seconds:0,isCompleted:!1}),[B,V]=t({days:0,hours:0,minutes:0,seconds:0}),[H,U]=t(new Set),[W,G]=t(null),K=i(null),q=n(()=>{let e=new Date(s).getTime()-new Date().getTime();if(e<=0)return{days:0,hours:0,minutes:0,seconds:0,isCompleted:!0};let t=Math.floor(e/1e3),n=Math.floor(t/(3600*24)),r=Math.floor(t%(3600*24)/3600),i=Math.floor(t%3600/60),a=t%60;return!l&&u&&(r+=n*24,n=0),!l&&!u&&d&&(i+=n*24*60+r*60,n=0,r=0),!l&&!u&&!d&&f&&(a+=n*24*60*60+r*60*60+i*60,n=0,r=0,i=0),{days:n,hours:r,minutes:i,seconds:a,isCompleted:!1}},[s,l,u,d,f]);r(()=>{K.current&&=(clearInterval(K.current),null);let e=()=>{let e=q();a(()=>{z(t=>{if(t.days!==e.days||t.hours!==e.hours||t.minutes!==e.minutes||t.seconds!==e.seconds||t.isCompleted!==e.isCompleted){if(O!==`none`){let n=new Set;t.days!==e.days&&n.add(`days`),t.hours!==e.hours&&n.add(`hours`),t.minutes!==e.minutes&&n.add(`minutes`),t.seconds!==e.seconds&&n.add(`seconds`),n.size>0&&(V({days:t.days,hours:t.hours,minutes:t.minutes,seconds:t.seconds}),U(n),setTimeout(()=>{U(new Set)},600))}return e}return t})})};return e(),K.current=setInterval(e,1e3),()=>{K.current&&=(clearInterval(K.current),null)}},[q,O]);let J=ee(()=>{let e=[];return l&&e.push({value:R.days,label:A,key:`days`}),u&&e.push({value:R.hours,label:j,key:`hours`}),d&&e.push({value:R.minutes,label:M,key:`minutes`}),f&&e.push({value:R.seconds,label:N,key:`seconds`}),e},[R,l,u,d,f,A,j,M,N]),Y={...e.style,position:`relative`,width:`100%`,height:`100%`,backgroundColor:`transparent`,padding:b,display:`flex`,alignItems:`center`,justifyContent:`center`,overflow:`hidden`},X=()=>({display:`grid`,gridTemplateColumns:`repeat(${J.length}, 1fr)`,gap:x,width:`100%`}),ae={display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,width:`${e.unitFrameSize}px`,height:`${e.unitFrameSize}px`,backgroundColor:I,borderRadius:12,padding:`16px 12px`,position:`relative`,overflow:`hidden`,flex:`0 0 auto`,transition:`all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,cursor:`pointer`,border:k>0?`${k}px solid ${L}`:`none`},Z=e=>({...ae,transform:W===e?`translateY(-2px) scale(1.02)`:`translateY(0) scale(1)`}),Q=e=>({..._,fontSize:`${v}px`,color:P,fontVariantNumeric:`tabular-nums`,lineHeight:1,position:`relative`}),$={...ne,fontSize:`${y}px`,color:F,marginTop:S,textTransform:`uppercase`},oe=e=>{if(O!==`none`&&H.has(e.key)){let t=B[e.key];if(O===`fade`)return c(`div`,{style:{position:`relative`,height:`${v}px`},children:[o(`div`,{style:{...Q(e.key),position:`absolute`,top:0,left:`50%`,transform:`translateX(-50%)`,opacity:0,animation:`fadeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`},children:e.value.toString().padStart(2,`0`)}),o(`div`,{style:{...Q(e.key),position:`absolute`,top:0,left:`50%`,transform:`translateX(-50%)`,animation:`fadeOut 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`},children:t.toString().padStart(2,`0`)})]});if(O===`flip`)return c(`div`,{style:{position:`relative`,height:`${v}px`},children:[o(`div`,{style:{...Q(e.key),position:`absolute`,top:0,left:`50%`,animation:`flipInX 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`},children:e.value.toString().padStart(2,`0`)}),o(`div`,{style:{...Q(e.key),position:`absolute`,top:0,left:`50%`,animation:`flipOutX 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`},children:t.toString().padStart(2,`0`)})]})}return o(`div`,{style:Q(e.key),children:e.value.toString().padStart(2,`0`)})};return R.isCompleted?c(`div`,{style:Y,children:[o(`style`,{children:`
                        @keyframes analogClockRotate {
                            0% { transform: rotateY(0deg); }
                            50% { transform: rotateY(90deg); }
                            100% { transform: rotateY(0deg); }
                        }
                        
                        @keyframes analogFadeIn {
                            0% { 
                                opacity: 0; 
                                transform: translateX(-50%) rotateY(90deg) scale(0.8);
                            }
                            100% { 
                                opacity: 1; 
                                transform: translateX(-50%) rotateY(0deg) scale(1);
                            }
                        }
                        
                        @keyframes analogFadeOut {
                            0% { 
                                opacity: 1; 
                                transform: translateX(-50%) rotateY(0deg) scale(1);
                            }
                            100% { 
                                opacity: 0; 
                                transform: translateX(-50%) rotateY(-90deg) scale(0.8);
                            }
                        }
                        @keyframes flipUp {
                            0% { 
                                transform: translateX(-50%) translateY(0%);
                                opacity: 1;
                            }
                            100% { 
                                transform: translateX(-50%) translateY(-100%);
                                opacity: 0;
                            }
                        }
                        
                        @keyframes flipDown {
                            0% { 
                                transform: translateX(-50%) translateY(100%);
                                opacity: 0;
                            }
                            100% { 
                                transform: translateX(-50%) translateY(0%);
                                opacity: 1;
                            }
                        }
                    `}),D?o(`div`,{style:{..._,fontSize:`${v}px`,color:F,textAlign:`center`},children:E}):o(`div`,{style:X(),children:J.map(e=>o(`div`,{children:c(`div`,{style:Z(e.key),onMouseEnter:()=>a(()=>G(e.key)),onMouseLeave:()=>a(()=>G(null)),children:[o(`div`,{style:Q(e.key),children:`00`}),C&&o(`div`,{style:$,children:e.label})]})},e.key))})]}):c(`div`,{style:Y,children:[o(`style`,{children:`
                    @keyframes analogClockRotate {
                        0% { transform: rotateY(0deg); }
                        50% { transform: rotateY(90deg); }
                        100% { transform: rotateY(0deg); }
                    }
                    
                    @keyframes analogFadeIn {
                        0% { 
                            opacity: 0; 
                            transform: translateX(-50%) rotateY(90deg) scale(0.8);
                        }
                        100% { 
                            opacity: 1; 
                            transform: translateX(-50%) rotateY(0deg) scale(1);
                        }
                    }
                    
                    @keyframes analogFadeOut {
                        0% { 
                            opacity: 1; 
                            transform: translateX(-50%) rotateY(0deg) scale(1);
                        }
                        100% { 
                            opacity: 0; 
                            transform: translateX(-50%) rotateY(-90deg) scale(0.8);
                        }
                    }
                    @keyframes flipUp {
                        0% { 
                            transform: translateX(-50%) translateY(0%);
                            opacity: 1;
                        }
                        100% { 
                            transform: translateX(-50%) translateY(-100%);
                            opacity: 0;
                        }
                    }
                    
                    @keyframes flipDown {
                        0% { 
                            transform: translateX(-50%) translateY(100%);
                            opacity: 0;
                        }
                        100% { 
                            transform: translateX(-50%) translateY(0%);
                            opacity: 1;
                        }
                    }
                    @keyframes fadeIn {
                        0% { 
                            opacity: 0; 
                            transform: translateX(-50%) scale(0.95) rotateY(15deg);
                            filter: blur(1px);
                        }
                        50% {
                            opacity: 0.7;
                            transform: translateX(-50%) scale(1.02) rotateY(0deg);
                            filter: blur(0.5px);
                        }
                        100% { 
                            opacity: 1; 
                            transform: translateX(-50%) scale(1) rotateY(0deg);
                            filter: blur(0px);
                        }
                    }
                    
                    @keyframes fadeOut {
                        0% { 
                            opacity: 1; 
                            transform: translateX(-50%) scale(1) rotateY(0deg);
                            filter: blur(0px);
                        }
                        50% {
                            opacity: 0.3;
                            transform: translateX(-50%) scale(0.98) rotateY(-15deg);
                            filter: blur(0.5px);
                        }
                        100% { 
                            opacity: 0; 
                            transform: translateX(-50%) scale(0.95) rotateY(-30deg);
                            filter: blur(1px);
                        }
                    }
                    
                    @keyframes slideUp {
                        0% { 
                            transform: translateX(-50%) translateY(100%);
                            opacity: 0;
                        }
                        100% { 
                            transform: translateX(-50%) translateY(0%);
                            opacity: 1;
                        }
                    }
                    
                    @keyframes slideDown {
                        0% { 
                            transform: translateX(-50%) translateY(0%);
                            opacity: 1;
                        }
                        100% { 
                            transform: translateX(-50%) translateY(-100%);
                            opacity: 0;
                        }
                    }
                    
                    @keyframes flipInX {
                        0% { 
                            transform: translateX(-50%) rotateX(90deg) scale(0.8);
                            opacity: 0;
                            transform-origin: center bottom;
                        }
                        25% {
                            transform: translateX(-50%) rotateX(45deg) scale(0.9);
                            opacity: 0.3;
                        }
                        75% {
                            transform: translateX(-50%) rotateX(-5deg) scale(1.05);
                            opacity: 0.9;
                        }
                        100% { 
                            transform: translateX(-50%) rotateX(0deg) scale(1);
                            opacity: 1;
                            transform-origin: center center;
                        }
                    }
                    
                    @keyframes flipOutX {
                        0% { 
                            transform: translateX(-50%) rotateX(0deg) scale(1);
                            opacity: 1;
                            transform-origin: center center;
                        }
                        25% {
                            transform: translateX(-50%) rotateX(-15deg) scale(1.05);
                            opacity: 0.9;
                        }
                        75% {
                            transform: translateX(-50%) rotateX(-75deg) scale(0.9);
                            opacity: 0.3;
                        }
                        100% { 
                            transform: translateX(-50%) rotateX(-90deg) scale(0.8);
                            opacity: 0;
                            transform-origin: center top;
                        }
                    }
                    
                    @keyframes bounceIn {
                        0% { 
                            transform: translateX(-50%) translateY(50px) scale(0.8);
                            opacity: 0;
                        }
                        50% { 
                            transform: translateX(-50%) translateY(-10px) scale(1.1);
                            opacity: 1;
                        }
                        100% { 
                            transform: translateX(-50%) translateY(0px) scale(1);
                            opacity: 1;
                        }
                    }
                    
                    @keyframes bounceOut {
                        0% { 
                            transform: translateX(-50%) translateY(0px) scale(1);
                            opacity: 1;
                        }
                        50% { 
                            transform: translateX(-50%) translateY(-10px) scale(1.1);
                            opacity: 1;
                        }
                        100% { 
                            transform: translateX(-50%) translateY(50px) scale(0.8);
                            opacity: 0;
                        }
                    }
                    
                    @keyframes zoomIn {
                        0% { 
                            transform: translateX(-50%) scale(0);
                            opacity: 0;
                        }
                        100% { 
                            transform: translateX(-50%) scale(1);
                            opacity: 1;
                        }
                    }
                    
                    @keyframes zoomOut {
                        0% { 
                            transform: translateX(-50%) scale(1);
                            opacity: 1;
                        }
                        100% { 
                            transform: translateX(-50%) scale(0);
                            opacity: 0;
                        }
                    }
                    
                    @keyframes moveInFromRight {
                        0% { 
                            transform: translateX(50%);
                            opacity: 0;
                        }
                        100% { 
                            transform: translateX(-50%);
                            opacity: 1;
                        }
                    }
                    
                    @keyframes moveOutToLeft {
                        0% { 
                            transform: translateX(-50%);
                            opacity: 1;
                        }
                        100% { 
                            transform: translateX(-150%);
                            opacity: 0;
                        }
                    }
                `}),o(`div`,{style:X(),children:J.map(e=>o(`div`,{children:c(`div`,{style:Z(e.key),onMouseEnter:()=>a(()=>G(e.key)),onMouseLeave:()=>a(()=>G(null)),children:[oe(e),C&&o(`div`,{style:$,children:e.label})]})},e.key))})]})}var m=e((()=>{s(),l(),d(),u(p,{targetDate:{type:f.Date,title:`Target Date`,displayTime:!0,defaultValue:new Date(Date.now()+10080*60*1e3).toISOString()},isDarkMode:{type:f.Boolean,title:`Dark Mode`,defaultValue:!0,enabledTitle:`Dark`,disabledTitle:`Light`},primaryColor:{type:f.Color,title:`Numbers Color (Dark)`,defaultValue:`#FFFFFF`,hidden:({isDarkMode:e})=>!e},accentColor:{type:f.Color,title:`Text Color (Dark)`,defaultValue:`#00D4FF`,hidden:({isDarkMode:e})=>!e},unitBackgroundColor:{type:f.Color,title:`Unit Background`,defaultValue:`#1A1A1A`,hidden:({isDarkMode:e})=>!e},lightModeNumberColor:{type:f.Color,title:`Numbers Color (Light)`,defaultValue:`#000000`,hidden:({isDarkMode:e})=>e},lightModeAccentColor:{type:f.Color,title:`Text Color (Light)`,defaultValue:`#0066CC`,hidden:({isDarkMode:e})=>e},lightModeUnitBackgroundColor:{type:f.Color,title:`Unit Background`,defaultValue:`#F5F5F5`,hidden:({isDarkMode:e})=>e},animationType:{type:f.Enum,title:`Animation Type`,defaultValue:`fade`,options:[`none`,`fade`,`flip`],optionTitles:[`None`,`Fade`,`Flip`]},showDays:{type:f.Boolean,title:`Show Days`,defaultValue:!0},showHours:{type:f.Boolean,title:`Show Hours`,defaultValue:!0},showMinutes:{type:f.Boolean,title:`Show Minutes`,defaultValue:!0},showSeconds:{type:f.Boolean,title:`Show Seconds`,defaultValue:!0},numberFont:{type:f.Font,title:`Numbers Font`,defaultValue:{variant:`Bold`,letterSpacing:`-0.02em`,lineHeight:`1em`},controls:`extended`,defaultFontType:`sans-serif`},numberFontSize:{type:f.Number,title:`Numbers Font Size`,defaultValue:48,min:12,max:120,unit:`px`},labelFont:{type:f.Font,title:`Labels Font`,defaultValue:{variant:`Medium`,letterSpacing:`0.1em`,lineHeight:`1em`},controls:`extended`,defaultFontType:`sans-serif`},labelFontSize:{type:f.Number,title:`Labels Font Size`,defaultValue:12,min:8,max:32,unit:`px`},padding:{type:f.Number,title:`Padding`,defaultValue:24,min:0,max:100,unit:`px`},gap:{type:f.Number,title:`Gap`,defaultValue:16,min:0,max:50,unit:`px`},numberToLabelPadding:{type:f.Number,title:`Number to Label Padding`,defaultValue:4,min:0,max:20,unit:`px`},showCompletedMessage:{type:f.Boolean,title:`Show Completed Message`,defaultValue:!0},completedMessage:{type:f.String,title:`Completed Message`,defaultValue:`Time's Up!`,hidden:({showCompletedMessage:e})=>!e},unitFrameSize:{type:f.Number,title:`Unit Frame Size`,defaultValue:120,min:60,max:200,unit:`px`},showLabels:{type:f.Boolean,title:`Show Labels`,defaultValue:!0},daysLabel:{type:f.String,title:`Days Label`,defaultValue:`Days`},hoursLabel:{type:f.String,title:`Hours Label`,defaultValue:`Hours`},minutesLabel:{type:f.String,title:`Minutes Label`,defaultValue:`Minutes`},secondsLabel:{type:f.String,title:`Seconds Label`,defaultValue:`Seconds`},borderWidth:{type:f.Number,title:`Border Width`,defaultValue:0,min:0,max:10,unit:`px`},borderColor:{type:f.Color,title:`Border Color (Dark)`,defaultValue:`#333333`,hidden:({isDarkMode:e})=>!e},lightModeBorderColor:{type:f.Color,title:`Border Color (Light)`,defaultValue:`#CCCCCC`,hidden:({isDarkMode:e})=>e}})}));export{m as n,p as t};
//# sourceMappingURL=CountdownTimer_1.CCV2ZoDm.mjs.map