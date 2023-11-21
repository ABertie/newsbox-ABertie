export default (function createTutorial() {
    const BODY = document.querySelector("body")
    
    const TUTORIAL = document.createElement("div")
    TUTORIAL.classList.add("tutorial")

    if (!window.location.pathname.includes("/archive") 
    && !window.location.pathname.includes("/settings") 
    && !localStorage.getItem("inboxTutorial")) createIcon("archive", "inbox")
    else createIcon("back", "chevron-left")

    TUTORIAL.addEventListener("click", function nextHandler() {
        if (TUTORIAL.innerHTML.includes("tutorial__archive")) {
            TUTORIAL.removeChild(TUTORIAL.querySelector(".tutorial__archive"))
            createIcon("settings", "gear")
        } 
        else if (TUTORIAL.innerHTML.includes("tutorial__settings") 
        && !window.location.pathname.includes("/archive")) {
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
            <i class="fa-solid fa-hand-pointer tutorial__movement" style="color: var(--darkest);"></i>
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
        else if (TUTORIAL.innerHTML.includes("tutorial__back") 
        && window.location.pathname.includes("/settings")) {
            TUTORIAL.style.gridTemplateRows = "1fr 1fr"
            TUTORIAL.removeChild(TUTORIAL.querySelector(".tutorial__back"))
            createLabel("checked", true, '<i class="fa-solid fa-hand-pointer tutorial__movement"></i>')
        }
        else if (TUTORIAL.innerHTML.includes("tutorial__checked")) {
            TUTORIAL.removeChild(TUTORIAL.querySelector(".tutorial__checked"))
            createLabel("undchecked", false)
        }
        else if (TUTORIAL.innerHTML.includes("tutorial__undchecked")) {
            TUTORIAL.removeChild(TUTORIAL.querySelector(".tutorial__undchecked"))
            createLabel("order", true, '<i class="fa-solid fa-hand-pointer tutorial__movement"></i><i class="fa-solid fa-up-down tutorial__movement"></i>')
        }
        else if (TUTORIAL.innerHTML.includes("tutorial__order")) {
            TUTORIAL.removeChild(TUTORIAL.querySelector(".tutorial__order"))
            const BUTTON = document.createElement("button")
            BUTTON.classList.add("themeButton")
            BUTTON.classList.add("tutorial__theme")
            BUTTON.innerHTML = `Toggle ${localStorage.getItem("theme") === "darkTheme" ? "light" : "dark"} mode`
            TUTORIAL.prepend(BUTTON)
        }
        else if (TUTORIAL.innerHTML.includes("tutorial__theme")) {
            TUTORIAL.removeChild(TUTORIAL.querySelector(".tutorial__theme"))
            const BUTTON = document.createElement("button")
            BUTTON.classList.add("resetButton")
            BUTTON.classList.add("tutorial__reset")
            BUTTON.innerHTML = "Reset settings"
            TUTORIAL.prepend(BUTTON)
        }
        else if (TUTORIAL.innerHTML.includes("tutorial__back") 
        && window.location.pathname.includes("/archive")) {
            TUTORIAL.removeChild(TUTORIAL.querySelector(".tutorial__back"))
            createIcon("settings", "gear")
        }
        else if (TUTORIAL.innerHTML.includes("tutorial__settings") && window.location.pathname.includes("/archive")) {
            TUTORIAL.style.gridTemplateRows = "1fr 1fr"
            TUTORIAL.removeChild(TUTORIAL.querySelector(".tutorial__settings"))
            createSection("sectionFifth", `
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
                        <button class="deleteButton"><i class="fa-solid fa-trash"></i></button>
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
        else if (TUTORIAL.innerHTML.includes("tutorial__sectionFifth")) {
            TUTORIAL.removeChild(TUTORIAL.querySelector(".tutorial__sectionFifth"))
            createSection("sectionSixth", `
            <i class="fa-solid fa-hand-pointer tutorial__movement" style="color: var(--darkest);"></i>
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
                        <button class="deleteButton"><i class="fa-solid fa-trash"></i></button>
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
        else if (TUTORIAL.innerHTML.includes("tutorial__sectionFourth") 
        || TUTORIAL.innerHTML.includes("tutorial__reset")
        || TUTORIAL.innerHTML.includes("tutorial__sectionSixth")) {
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

    function createLabel(className, checked, icon) {
        const SECTION = document.createElement("sesction")
        SECTION.classList.add("categoriesChecklist")
        SECTION.classList.add(`tutorial__${className}`)
        SECTION.innerHTML = `
        <label>
            ${icon? icon : ""}
            category
            <input type="checkbox" ${checked === true ? 'checked=""' : ""}>
            <span class="slider"></span>
            <i class="fa-solid fa-bars"></i>
        </label>`
        TUTORIAL.prepend(SECTION)
    }

    TUTORIAL.prepend(SKIP)
    if (!window.location.pathname.includes("/settings") 
    && !window.location.pathname.includes("/archive") 
    && !localStorage.getItem("inboxTutorial") 
    || window.location.pathname.includes("/settings") 
    && !localStorage.getItem("settingsTutorial") 
    || window.location.pathname.includes("/archive") 
    && !localStorage.getItem("archiveTutorial")) BODY.prepend(TUTORIAL)
    
    function checkForTutorial() {
        if (BODY.innerHTML.includes('<div class="tutorial">')) BODY.style.overflow = "hidden"
        else {
            BODY.removeAttribute("style")
            if (!window.location.pathname.includes("/settings") 
            && !window.location.pathname.includes("/archive")) localStorage.setItem("inboxTutorial", "done")
            if (window.location.pathname.includes("/settings")) localStorage.setItem("settingsTutorial", "done")
            if (window.location.pathname.includes("/archive")) localStorage.setItem("archiveTutorial", "done")
        }
    }

    checkForTutorial()
})()
