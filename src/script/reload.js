export default (function () {
    const MAIN = document.querySelector("main")
    MAIN.addEventListener("touchstart", touchHandler)
    MAIN.addEventListener("touchend", touchHandler)
    let y
    const LOADER = document.createElement("i")
    LOADER.classList.add("fa-solid")
    LOADER.classList.add("fa-spinner")
    LOADER.classList.add("fa-spin-pulse")
    
    function touchHandler(event) {
        const TOUCH__EVENT = event.changedTouches[0].clientY
        if (event.type === "touchstart") {
            y = TOUCH__EVENT
            setTimeout(() => {
                y = null
            }, 500);
        }
        else if (event.type === "touchend" && window.scrollY === 0 && y) {

            let Direction
            const TOLERANCE = window.innerHeight / 3
            if (y + TOLERANCE < TOUCH__EVENT) Direction = "Down"
            else Direction = null
            
            if(Direction) {
                LOADER.style.animation = `fa-spin 1s steps(8) infinite, move${Direction} .2s ease`
                MAIN.prepend(LOADER)
                setTimeout(() => {
                    location.reload()
                }, 1000);
                Direction = null
            }

            y = null
        }
    }
})()