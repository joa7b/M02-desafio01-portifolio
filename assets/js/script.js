const btnDark = document.querySelector("#darkMode");

btnDark.addEventListener("click", () => {
    const white = document.querySelectorAll(".white");
    const black = document.querySelectorAll(".black");

    for(let n of white) {
        n.style.backgroundColor = "white";
    }

    for(let n of black) {
        n.style.color = "black";
    }
})