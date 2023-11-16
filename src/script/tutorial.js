export default (function createTutorial() {
    const BODY = document.querySelector("body")
    
    const TUTORIAL = document.createElement("div")
    TUTORIAL.classList.add("tutorial")

    if (window.location.pathname === "/") createIcon("archive", "inbox")
    // if (window.location.pathname.includes("index.html")) createIcon("archive", "inbox")

    TUTORIAL.addEventListener("click", function nextHandler() {
        if (TUTORIAL.innerHTML.includes("tutorial__archive")) {
            TUTORIAL.removeChild(TUTORIAL.querySelector(".tutorial__archive"))
            createIcon("settings", "gear")
        } 
        else if (TUTORIAL.innerHTML.includes("tutorial__settings")) {
            TUTORIAL.style.gridTemplateRows = "1fr 1fr"
            TUTORIAL.removeChild(TUTORIAL.querySelector(".tutorial__settings"))
            createSection("sectionFirst", `
            <i class="fa-solid fa-hand-pointer tutorial__movement"></i>
            <button class="categoryButton">
                <i class="fa-solid fa-icons"></i>
                Category
                <i class="fa-solid fa-chevron-right"></i>
            </button>
            <ul></ul>`)
        } 
        else if (TUTORIAL.innerHTML.includes("tutorial__sectionFirst")) {
            TUTORIAL.removeChild(TUTORIAL.querySelector(".tutorial__sectionFirst"))
            createSection("sectionSecond", `
            <i class="fa-solid fa-hand-pointer tutorial__movement"></i>
            <button class="categoryButton">
                <i class="fa-solid fa-icons"></i>
                Category
                <i class="fa-solid fa-chevron-down"></i>
            </button>
            <ul>
                <li>
                    <article>
                        <a>
                            <img>
                            <h1>Headline</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quibusdam commodi rem adipisci eaque placeat.
                            </p>
                        </a>
                    </article>
                </li>
                <li>
                    <article>
                        <a>
                            <img>
                            <h1>Headline</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quibusdam commodi rem adipisci eaque placeat.
                            </p>
                        </a>
                    </article>
                </li>
            </ul>`)
        }
        else if (TUTORIAL.innerHTML.includes("tutorial__sectionSecond")) {
            TUTORIAL.removeChild(TUTORIAL.querySelector(".tutorial__sectionSecond"))
            createSection("sectionThird", `
            <i class="fa-solid fa-hand-pointer tutorial__movement"></i>
            <i class="fa-solid fa-left-long tutorial__movement"></i>
            <button class="categoryButton">
                <i class="fa-solid fa-icons"></i>
                Category
                <i class="fa-solid fa-chevron-down"></i>
            </button>
            <ul>
                <li>
                    <article style="left: -26vw;">
                        <a>
                            <img>
                            <h1>Headline</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quibusdam commodi rem adipisci eaque placeat.
                            </p>
                        </a>
                        <button class="saveButton"><i class="fa-solid fa-inbox"></i></button>
                    </article>
                </li>
                <li>
                    <article>
                        <a>
                            <img>
                            <h1>Headline</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quibusdam commodi rem adipisci eaque placeat.
                            </p>
                        </a>
                    </article>
                </li>
            </ul>`)
        }
        else if (TUTORIAL.innerHTML.includes("tutorial__sectionThird")) {
            TUTORIAL.removeChild(TUTORIAL.querySelector(".tutorial__sectionThird"))
            createSection("sectionFourth", `
            <i class="fa-solid fa-hand-pointer tutorial__movement"></i>
            <button class="categoryButton">
                <i class="fa-solid fa-icons"></i>
                Category
                <i class="fa-solid fa-chevron-down"></i>
            </button>
            <ul>
                <li>
                    <article style="left: -26vw;">
                        <a>
                            <img>
                            <h1>Headline</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quibusdam commodi rem adipisci eaque placeat.
                            </p>
                        </a>
                        <button class="saveButton"><i class="fa-solid fa-check-to-slot"></i></button>
                    </article>
                </li>
                <li>
                    <article>
                        <a>
                            <img>
                            <h1>Headline</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quibusdam commodi rem adipisci eaque placeat.
                            </p>
                        </a>
                    </article>
                </li>
            </ul>`)
        }
        else if (TUTORIAL.innerHTML.includes("tutorial__sectionFourth")) {
            TUTORIAL.removeAttribute("style")
            BODY.removeChild(TUTORIAL)
            checkForTutorial()
        }
    })
    
    const SKIP = document.createElement("button")
    SKIP.classList.add("skipButton")
    SKIP.innerHTML = "Skip"
    SKIP.addEventListener("click", function skipHandler() {
        BODY.removeChild(TUTORIAL)
        checkForTutorial()
    })

    function createSection(className, HTML) {
        const SECTION = document.createElement("section")
        SECTION.classList.add(`tutorial__${className}`)
            SECTION.innerHTML = HTML

        TUTORIAL.prepend(SECTION)
    }

    function createIcon(element, icon) {
        const DIV = document.createElement("div")
        DIV.classList.add(`tutorial__${element}`)
        DIV.innerHTML = `<i class="fa-solid fa-${icon}"></i>`
        TUTORIAL.append(DIV)   
    }

    TUTORIAL.prepend(SKIP)
    BODY.prepend(TUTORIAL)
    
    function checkForTutorial() {
        if (BODY.innerHTML.includes('<div class="tutorial">')) BODY.style.overflow = "hidden"
        else BODY.removeAttribute("style")
    }

    checkForTutorial()
})()
