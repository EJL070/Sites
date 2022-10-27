((i = 0) => {
    document.querySelector(".menu").addEventListener("click", () => {
        if (i === 0) {

    
            document.querySelector(".menu").children[0].style.animation = "down 1s forwards";
            document.querySelector(".menu").children[1].style.animation = "up 1s forwards";
            
          

            const koe = (i=0) => {
                if(parseInt(window.getComputedStyle(cover).height)>=window.innerHeight - (parseInt(window.getComputedStyle(header).height))){
                    cover.innerHTML = `<div class="coverTitle"><h2>Over</h2></div><div class="coverContent">Trials</div>
                    <div class="coverFooter"><div>Contact</div><div><a href="dots.html">Dots</a></div></div>`;
                    header.style.background = `var(--jet)`;
                } else {
                    cover.style.height = parseInt(window.getComputedStyle(cover).height) + 10 + "px";
                
                    setTimeout(()=>koe(),2);
                }
            };
            koe();
   
            i = 1;
        }
        else {
            cover.innerHTML = "";
            document.querySelector(".menu").children[0].style.animation = "backup 1s forwards";
            document.querySelector(".menu").children[1].style.animation = "backdown 1s forwards";
            
            const down = () => {
                header.style.background = "";
                if(parseInt(window.getComputedStyle(cover).height) > 0){
                    
                    cover.style.height = parseInt(window.getComputedStyle(cover).height) - 10 + 'px';
                    setTimeout(()=>down(),2);
                }
                else{
                
                }
            };
            down();
            i = 0;
        }

    })})()