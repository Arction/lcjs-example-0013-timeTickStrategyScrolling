(self.webpackChunk=self.webpackChunk||[]).push([[143],{138:(e,t,a)=>{const s=a(475),r=a(27),{lightningChart:i,AxisScrollStrategies:n,AxisTickStrategies:o,Themes:l}=s,{createProgressiveTraceGenerator:g}=r,c=i().ChartXY({}).setTitle("Scrolling TimeTickStrategy example").setPadding({right:40}),d=(c.getDefaultAxisX().setTickStrategy(o.Time).setScrollStrategy(n.progressive).setInterval({start:-6e4,end:0,stopAxisAfter:!1}).setAnimationScroll(!1),c.getDefaultAxisY().setAnimationScroll(!1),new Array(3).fill(0).map(((e,t)=>c.addLineSeries({dataPattern:{pattern:"ProgressiveX"}})))),m=(c.addLegendBox().add(c).setAutoDispose({type:"max-width",maxWidth:.3}),Date.now());Promise.all(d.map((e=>g().setNumberOfPoints(6e4).generate().toPromise()))).then((e=>{let t=0;const a=()=>{d.forEach(((a,s)=>{const r=e[s],i=[];for(let e=0;e<1;e+=1)i.push({x:Date.now()-m,y:r[(t+e)%r.length].y});a.add(i)})),t+=1,requestAnimationFrame(a)};a()}))}},e=>{e.O(0,[736],(()=>(138,e(e.s=138)))),e.O()}]);