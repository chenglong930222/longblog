$(function(){var a;$("#go-up").parent().append("<button type='button' title='看我看我' id='look-me'>                <img id='upj' class='upj' style='max-width: 200%;' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607067753274&di=8d442456739788b76b5631188631509b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F0f3c1871303e4e3604ba8b6655837b4a5a40337c614fe-aptSvN_fw658'>                </button>"),(a=jQuery).fn.circleMagic=function(t){var o,n,i,r,e=!0,c=[],d=a.extend({color:"rgba(255,0,0,.5)",radius:10,density:.3,clearOffset:.2},t),s=this[0];function l(){if(e)for(var t in r.clearRect(0,0,o,n),c)c[t].draw();requestAnimationFrame(l)}function h(){var t=this;function e(){t.pos.x=Math.random()*o,t.pos.y=n+100*Math.random(),t.alpha=.1+Math.random()*d.clearOffset,t.scale=.1+.3*Math.random(),t.speed=Math.random(),"random"===d.color?t.color="rgba("+Math.floor(255*Math.random())+", "+Math.floor(0*Math.random())+", "+Math.floor(0*Math.random())+", "+Math.random().toPrecision(2)+")":t.color=d.color}t.pos={},e(),this.draw=function(){t.alpha<=0&&e(),t.pos.y-=t.speed,t.alpha-=5e-4,r.beginPath(),r.arc(t.pos.x,t.pos.y,t.scale*d.radius,0,2*Math.PI,!1),r.fillStyle=t.color,r.fill(),r.closePath()}}!function(){var t;o=s.offsetWidth,n=s.offsetHeight,(t=document.createElement("canvas")).id="canvas",t.style.top=0,t.style.zIndex=0,t.style.position="absolute",s.appendChild(t),t.parentElement.style.overflow="hidden",(i=document.getElementById("canvas")).width=o,i.height=n,r=i.getContext("2d");for(var e=0;e<o*d.density;e++){var a=new h;c.push(a)}l()}(),window.addEventListener("scroll",function(){e=!(document.body.scrollTop>n)},!1),window.addEventListener("resize",function(){o=s.clientWidth,n=s.clientHeight,s.height=n+"px",i.width=o,i.height=n},!1)},$("#page-header").circleMagic({radius:10,density:.2,color:"rgba(255,255,255,.4)",clearOffset:.99})});