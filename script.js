
const canvas = document.getElementById('bubbles');
const ctx = canvas.getContext('2d');

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize',resize);

let bubbles=[];
for(let i=0;i<200;i++){
  bubbles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*3+1,
    speed:Math.random()*1+0.2
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  bubbles.forEach(b=>{
    ctx.beginPath();
    ctx.arc(b.x,b.y,b.r,0,Math.PI*2);
    ctx.fillStyle="rgba(255,255,255,0.2)";
    ctx.fill();
    b.y-=b.speed;
    if(b.y<0){b.y=canvas.height; b.x=Math.random()*canvas.width;}
  });
  requestAnimationFrame(animate);
}
animate();
