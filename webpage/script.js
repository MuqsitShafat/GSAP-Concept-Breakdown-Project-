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
function page2Animation(){
    
gsap.from(".services h3", {
    x:-100,
    opacity:0,
    duration: 0.5,
    scrollTrigger : {
        trigger: ".services h3",
        start: "top 70%",
        scroller: "body",
        markers: true
    }
})
// timeline for scrollTrigger
const tl2 = gsap.timeline(
    {
        scrollTrigger : {
            trigger: ".section2",
            start: "top 50%",
            end: "top 0%",
            scrub: 3,
            markers: true
        }
    }
);
tl2.from(".services ",{
    y:30,
    opacity: 0,  
    duration:0.5,  
})
tl2.from(".elem.line1.left",{
    x:-300,
    duration:1,
    opacity:0
},"start1")
tl2.from(".elem.line1.right",{
    x:300,
    duration:1,
    opacity:0
},"start1")
tl2.from(".elem.line2.left",{
    x:-300,
    duration:1,
    opacity:0
},"start2")
tl2.from(".elem.line2.right",{
    x:300,
    duration:1,
    opacity:0
},"start2")
}

page1Animation();
page2Animation();