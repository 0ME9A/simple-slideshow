        const img_container = document.getElementsByClassName("img-container");
        const next = document.getElementById("next");
        const prev = document.getElementById("prev");
        img_container[0].style.left=0

        var up = 1;
        var down = 0;


        next.addEventListener("click", function () {
            if (up<=5) {
                img_container[up].style.left=0
                up++
                down++
            }
        })
        prev.addEventListener("click", function () {
            if (down>=1) {
                img_container[down].style.left="-100%"
                down=down-1
                up--
            }
        })
