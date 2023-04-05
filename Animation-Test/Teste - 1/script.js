document.addEventListener("keypress", () => {

    document.getElementById("char").className = "jump"
    setTimeout(() => {
        document.getElementById("char").className = "nil"

    }, 450)
})
