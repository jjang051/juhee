Splitting();
let w = $(window).width();
let h = $(window).height();
function moveBalloon(mc) {
    gsap.fromTo(mc,{
        left:"50%",
        top:"110%",
        scale:1
    },{
        duration:()=> {
            return Math.random()*10+10;
        },
        left:()=> {
            console.log(w/2);
            return w/2+Math.random()*600-300;
        },
        top:()=> {
            return -200;
        },
        scale:()=>{
            return Math.random()*0.5+0.1;
        },
        onComplete:()=> {
            moveBalloon(mc);
        }
    })
}
let balloonNum = 0;
let balloonTotal = $(".balloons li").length;

const clearID = setInterval(()=>{
    let mc = $(".balloons li").eq(balloonNum);
    moveBalloon(mc);
    if(balloonNum>=balloonTotal-1) {
        clearInterval(clearID);
    } else {
        balloonNum++;
        console.log(balloonNum);
    }
},1000);


particlesJS.load("particle", "../js/particlesjs-config.json", function() {
    //console.log('callback - particles.js config loaded');
});


gsap.from(".slogan .character",{
    opacity:0,
    duration:1,
    stagger:{
        each:0.2,
    }
});
