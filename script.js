// gsap.to is used for initial to final animaion
gsap.to("#box",{
    x:1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "yellow",
    scale : 2, 
    borderRadius : "50%",
});

// gsap.from is used for final to initial animation
gsap.from("#box1",{
    x:1000,
    duration: 2,
    delay: 1,
    repeat: -1, // repeat is used to repeat the animation for infinite times
    yoyo: true, // yoyo is used to reverse the animation after it completes so it moves back and forth
})
// applying gsap to tags
gsap.from("h3",{
    color: "red",
    duration: 2,
    delay: 1,
    opacity: 0,
    y: 20,
    stagger: 0.3, // stagger is used to apply animation to multiple same elements with same tags but if they are differently arranged a delay between them
    // if u give stagger : -1 then it makes element to animate in reverse order 

})
// This below tells u how timelines works synchronously where we adjust delays manually 
// gsap.to("#box2",{
//     x: 1000,
//     duration: 2,
//      delay: 1,
//      backgroundColor: "blue",
//      scale : 2,
// })

// gsap.to("#box3",{
//     x: 1000,
//     duration: 2,
//     borderRadius : "50%",
//      delay: 3,
// })
// gsap.to("#box4",{
//     x: 1000,
//     backgroundColor: "red",
//     duration: 2,
//      delay: 5,
// })
//  Now we will see how timelines works synchronously where we don't have to adjust delays manually
const tl = gsap.timeline({defaults:{duration: 2}}); // we can set default values for all the animations in timeline
tl.to("#box2",{
    x: 1000,
    backgroundColor: "blue",
    scale : 2,
})
tl.to("#box3",{
    x: 1000,
    borderRadius : "50%",
})
tl.to("#box4",{
    x: 1000,
    backgroundColor: "red",
})

// Timeline animation for the navbar created 
const navTl = gsap.timeline();
navTl.from("#logo",{
    y:-30,
    duration: 0.7,
    delay: 0.2,
    opacity: 0,
})  
navTl.from("h4",{
    y:-30,
    duration: 1,
    opacity: 0,
    stagger : 0.3   
})  
navTl.from("#name",{
    scale: 0.5,
    duration: 1,
    opacity: 0,
})