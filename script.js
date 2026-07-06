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

gsap.to("#box2",{
    x: 1000,
    duration: 2,
     delay: 1,
     backgroundColor: "blue",
     scale : 2,
})

gsap.to("#box3",{
    x: 1000,
    duration: 2,
    borderRadius : "50%",
     delay: 3,
})
gsap.to("#box4",{
    x: 1000,
    backgroundColor: "red",
    duration: 2,
     delay: 5,
})
