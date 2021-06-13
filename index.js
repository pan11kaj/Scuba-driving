let man = document.getElementById("control");
    let position = man.getAttribute("position");
    window.addEventListener("keydown", (e)=>{
        if(e.key == "w"){
            position.y+=0.03
            man.setAttribute("position",position.y)
        }
        if(e.key == "s"){
            position.y-=0.03
            man.setAttribute("position",position.y)
        }
        if(e.key == "a"){
            position.x+=0.03
            man.setAttribute("position",position.y)
        }
        if(e.key == "d"){
            position.y-=0.03
            man.setAttribute("position",position.y)
        }
    })
