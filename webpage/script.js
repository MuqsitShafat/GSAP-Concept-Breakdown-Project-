function page1Animation (){
    const tl = gsap.timeline();
tl.from("nav h1, nav h4, nav button", {
    y:-30,
    duration: 0.4,
    delay: 0.2,
    opacity: 0,
    stagger : 0.1
})
tl.addLabel("heroStart", "-=0.7")
tl.from(".center-part1 h1",{
    x:-300,
    duration: 0.5,
    opacity: 0,  
},"heroStart")

tl.from(".center-part1 p",{
    x:-100,
    duration: 0.4,
    opacity: 0,  
})
tl.from(".center-part1 button",{
    opacity: 0,
    duration: 0.5
})
tl.from(".center-part2 img",{
    duration: 0.3,
    opacity: 0,
},"heroStart") //! This -=1 is used to make the delay a bit fast in the timeline for 1 secound before 

tl.from(".sectionbottom img",{
    y:30,
    duration: 0.4,
    opacity: 0,
    stagger: 0.14
})
}
