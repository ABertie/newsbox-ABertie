export default(function() {
    const RESET_BUTTON = document.querySelector(".resetButton")

    RESET_BUTTON.addEventListener("click", function () {
        localStorage.clear()
        // console.log(window.location);
        // // window.location.pathname = "/"
        // // location.reload()
        // // window.location.reload(root)
    })
})()