const buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((elem, index) => {
    elem.innerHTML = index;
    elem.style.backgroundColor = index % 2 ? "red" : "green";
    elem.addEventListener("click", () => {
        alert(index);
    });
});
