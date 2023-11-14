let tl=gsap.timeline();
let a=0;
function time(){
    setInterval(function(){
        a=Math.floor(a=a+Math.random()*19);
        if(a<100){
        document.querySelector("#loader h1").innerHTML=a+"%";
        }else{
            a=100;
            document.querySelector("#loader h1").innerHTML=a+"%";
        }
    },100)
}
document.addEventListener("DOMContentLoaded", function () {
    tl.to("#loader h1",{
        scale:1.5,
        delay:0.5,
        duration:1,
        onStart:time(),

    })
    
    tl.to("#loader",{
        top:"-100vh",
        delay:0.5,
        duration:1,
    })

    
    tl.from("#nav img ,#nav h1 ,#nav h3,#nav button",{
        y:-80,
        opacity:0,
        duration:0.5,
        delay: 0.5,
        stagger:0.2,
    })

    tl.from("#left h1 ",{
        x:-1200,
        stagger:0.2,
        duration:0.1,
        delay:0.2,
        opacity:0,
    })

    tl.from("#right img",{
        stagger:0.2,
        duration:0.3,
        delay:0.2,
        opacity:0,
        scale:0.2,
    })

    gsap.from("#page2 #left1 img",{
        scale:0,
        opacity:0,
        duration:0.25,
        stagger:0.3,
        scrollTrigger:{
            trigger:"#page2",
            end:"top 1",
            scrub:2,
            scroller:"body"
            
        }
    })



    gsap.from("#page2 .box",{
        scale:0,
        opacity:0,
        duration:1,
        stagger:0.3,
        end:"top 0",
        scrollTrigger:{
            trigger:"#page2",
            end:"top 0",
            scrub:2, 
            scroller:"body"
        }
    })

    gsap.to("#page3 h1",{
        transform:"translate(-200%)",
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"top 0",
            end:"top -300",
            scrub:3,
            pin:true,
        }   
    })

    gsap.from("#page4 #page-vid ",{
        y:100,
        opacity:0,
        delay:0.5,
        scale:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"body",
            end:"top 10",
            scrub:2,
        }
    })

    // gsap.to("#page5 #r-img", {
    //     x: 600,
    //     duration:1,
    //     scrollTrigger: {
    //         trigger: "#page5",
    //         scroller: "body",
    //         end: "top 0",
    //         start:"top 100",
    //         scrub: 1,
    //         onUpdate: self => {
    //             const progress = self.progress;
    //             const rotation = 15 * progress;
    //             gsap.set("#page5 #r-img", { rotate: rotation });
    //         },
    //     }
    // });

    // gsap.to("#page5 #l-img", {
    //     x: -600,
    //     duration:2,
    //     scrollTrigger: {
    //         trigger: "#page5",
    //         scroller: "body",
    //         end: "top 0",
    //         start:"top 100",
    //         scrub: 1,
    //         onUpdate: self => {
    //             const progress = self.progress;
    //             const rotation = -15 * progress;
    //             gsap.set("#page5 #l-img", { rotate: rotation });
    //         },
    //     }
    // });


    gsap.from("#page5 #l-img,#page5 #r-img,#page5 #c-text",{
        y:100,
        opacity:0,
        delay:0.5,
        scale:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"body",
            end:"top 50",
            scrub:1,
        }
    })
    
    gsap.from("#page6 #left2",{
        x:-100,
        opacity:0,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"body",
            end:"bottom top",
            scrub:1,
        }
    })

    gsap.from("#page8 #left4",{
        x:-100,
        opacity:0,
        scrollTrigger:{
            trigger:"#page8",
            scroller:"body",
            end:"bottom top",
            scrub:1,
        }
    })

    gsap.from("#page10 #left6",{
        x:-100,
        opacity:0,
        scrollTrigger:{
            trigger:"#page10",
            scroller:"body",
            end:"bottom top",
            scrub:1,
        }
    })

    gsap.from("#page7 #left3",{
        x:100,
        opacity:0,
        scrollTrigger:{
            trigger:"#page7",
            scroller:"body",
            end:"bottom top",
            scrub:1,
        }
    })

    gsap.from("#page9 #left5",{
        x:100,
        opacity:0,
        scrollTrigger:{
            trigger:"#page9",
            scroller:"body",
            end:"bottom top",
            scrub:1,
        }
    })

    gsap.from("#page-12", {
        scrollTrigger: {
            trigger: ".gallery",
            start: "top top",
            end: "bottom -5",
            pin: ".rightu",
            onUpdate: function (self) {
                var progress = self.progress;
                var numImages = 5;
                var currentIndex = Math.floor(progress * numImages) + 1;

                for (var i = 1; i <= numImages; i++) {
                    gsap.to("#img-" + i, {
                        opacity: i === currentIndex ? 1 : 0,
                        zIndex: i === currentIndex ? 1 : -100,
                        duration: 0.1,
                        ease: "power2.inOut"
                    });
                }
            }
        }
    })
    



const leftyImages = document.querySelectorAll('.lefty img');

function cardAnimation(event) {
  const rect = this.getBoundingClientRect();
  const mouseX = (event.clientX - rect.left) / this.offsetWidth;
  const mouseY = (event.clientY - rect.top) / this.offsetHeight;

  gsap.to(this, {
    duration: 1.5,
    rotationY: 100 * (mouseX - 0.5),
    rotationX: 50 * (mouseY - 0.5),
    ease: 'power2.out',
  });
}

leftyImages.forEach((image) => {
  image.addEventListener('mousemove', cardAnimation);
});

leftyImages.forEach((image) => {
  image.addEventListener('mouseleave', function () {
    gsap.to(this, {
      duration: 0.5,
      rotationY: 0,
      rotationX: 0,
      ease: 'power2.out',
    });
  });
});


    
    // const scroll = new LocomotiveScroll({
    //   el: document.querySelector('body'),
    //   smooth: true
    // });
});
