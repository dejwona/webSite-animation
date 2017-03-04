document.addEventListener("DOMContentLoaded", function(){
    console.log("dziala");

    var list = document.querySelectorAll("li img");
    var secondPage = document.querySelector(".secondPage");
    var selected = document.querySelectorAll(".selected");
    var active = document.querySelectorAll("#menu a");

    for (var j = 0; j < selected.length; j++) {
        selected[j].style.display = 'none';
    }
    for (var k = 0; k < active.length; k++) {
        active[k].addEventListener("click", function(e) {
            console.log("dziala2");
            var sibling = this.nextElementSibling;
            console.log(sibling);
            if (sibling !== null) {
                sibling.style.display = "block";
            }

        });
        
    }



    var listLength = list.length -1;
    var imageIndex = 0;

    

    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function(e) {

            var divNew = document.createElement("div");
            divNew.className = "fullScreen";

            var imgNew = document.createElement("img");
            imgNew.src = this.src;
            console.log(imgNew.src);

            var buttonNew = document.createElement("button");
            buttonNew.className = "close";
            buttonNew.innerText='Close';

            var nextPicture = document.createElement("button");
            nextPicture.className = "next";
            nextPicture.innerText='Next';

            var prevPicture = document.createElement("button");
            prevPicture.className = "prev";
            prevPicture.innerText='Prev';

            divNew.appendChild(imgNew);
            divNew.appendChild(buttonNew);
            divNew.appendChild(nextPicture);
            divNew.appendChild(prevPicture);

            secondPage.appendChild(divNew);

            buttonNew.addEventListener("click", function(e) {
                secondPage.removeChild(divNew);
            });

            

            nextPicture.addEventListener("click", function(e) {                 
                imageIndex++; 
          
                if (imageIndex > listLength) {
                    imageIndex = 0;                    
                }
                list[imageIndex];
                var nextImg = document.createElement("img");
                list[imageIndex] = this.src;
                console.log(list[imageIndex]); 
            });

            prevPicture.addEventListener("click", function(e) {
                imageIndex--;
                if (imageIndex < 0) {
                    imageIndex = listLength;
                }
                console.log(list[imageIndex]);
            });


        });
    }

    




    




});