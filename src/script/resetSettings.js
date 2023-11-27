export default(function() {
    if (!window.location.pathname.includes("/settings")) return 

    const RESET_BUTTON = document.querySelector(".resetButton")

    RESET_BUTTON.addEventListener("click", function () {
        localStorage.clear()
        // console.log(window.location);
        // // window.location.pathname = "/"
        // // location.reload()
        // // window.location.reload(root)
    })
})()