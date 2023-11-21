import { categories , order } from "./savedInLocalstorage";

export default (function () {
    if (!window.location.pathname.includes("/settings")) return 

    const CHECKLIST = document.querySelector(".categoriesChecklist")
    
    function createChecklist() {
        CHECKLIST.innerHTML = ""
        order.forEach(category => {
            const LABEL = document.createElement("label")
            LABEL.innerHTML = `${category}<input type="checkbox" name="${category}" ${localStorage.getItem("SavedCategories").includes(category) ? "checked" : ""}><span class="slider"></span><i class="fa-solid fa-bars"></i>`
            CHECKLIST.append(LABEL)

            lissen(LABEL, category)
        })
    }
    createChecklist()

    function lissen(LABEL, category) {
        let dragger = LABEL.querySelector(".fa-bars")

        dragger.addEventListener("touchmove", function (event) {
            document.body.style.overflow = "hidden"
            LABEL.style.position = "absolute"
            LABEL.style.opacity = ".5"
            LABEL.style.zIndex = "1"
            LABEL.style.top = event.changedTouches[0].pageY - CHECKLIST.offsetTop - LABEL.scrollHeight * 1.5 + "px"
        })

        dragger.addEventListener("touchend", function(event) {
            document.body.removeAttribute("style")
            const CHECKLIST_LIST = CHECKLIST.childNodes
            CHECKLIST_LIST.forEach((object, i) => {
                if (object === LABEL) {
                    let top = event.changedTouches[0].pageY - CHECKLIST.offsetTop - LABEL.scrollHeight * 1.5
                    let height = LABEL.scrollHeight

                    let splicePoint = Math.ceil(top/height) < 0 ? 0 : Math.ceil(top/height)
                    
                    order.splice(i, 1)
                    order.splice(splicePoint, 0, category)
                    
                    LABEL.removeAttribute("style")
                    localStorage.setItem("CategoriesOrder", order)
                    sortAndSaveCategories()
                    
                    createChecklist()
                }
            })
        })
    }
    
    const INPUT = CHECKLIST.querySelectorAll("input")

    INPUT.forEach(input => {
        input.addEventListener("click", checkHandler)

        function checkHandler() {
            if (input.checked === false) {
                let start = categories.slice(0, categories.indexOf(input.name))
                let end = categories.slice(categories.indexOf(input.name) + 1, categories.length)
                categories = start.concat(end)
                sortAndSaveCategories()
                }
            else {
                categories.push(input.name)
                sortAndSaveCategories()
            }
        }
    })
    
    function sortAndSaveCategories() {
        categories.sort()
        let newCategories = []
        
        if (localStorage.getItem("CategoriesOrder")){
            localStorage.getItem("CategoriesOrder").split(",").forEach(element => {
                categories.forEach(object => {
                    if (element === object) {
                        newCategories.push(object)            
                    }
                });
            })
            localStorage.setItem("SavedCategories", newCategories)
            categories = newCategories
        } else {
            localStorage.setItem("SavedCategories", categories)
        }
    }

})()