function setup(){
    XD=createCanvas(500,400)
    vid=createCapture(VIDEO)
    vid.hide()
}

rangm_namm="";

function draw(){
image (vid, 0,0,500,400)
tint (rangm_namm)
}

function change_shade(){
rangm_namm=document.getElementById("rang_naam").value
}

function take_snapshot(){
save ("chitra.png")
    
}