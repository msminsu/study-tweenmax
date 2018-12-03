var text1 = document.getElementById('text1'),
    text2 = document.getElementById('text2'),
    text3 = document.getElementById('text3'),
    tomato = document.getElementById('tomato'),
    banana = document.getElementById('banana');

    tl = new TimelineMax({repeat:0, repeatDelay:1});

    tl.to(tomato,1 ,{left:50, ease:Back.easeOut})
    /* .add("up", "+=1")
    .to(tomato,1,{top:70}, "up")
    .to(banana, 1,{top:167}, "up")
    .from([text1,text2], 1,{left:200}, "up+=0.6")
    .from(text3,1, {left:400}, "up")
    .to(text3, 0.2,{scaleX:-1}, "+=1")
    .staggerTo([text3,text2,text1],1,{left:600}, 0.5, "menOut")
    .to(banana,1,{top:297}, "down")
    .to(tomato,1,{top:200}, "down")
    .to(tomato,1,{left:500,ease:Power1.easeIn},"out")
 */
    // tl.timeScale(4);
    // tl.seek("out")
    // tl.seek("menOut")
