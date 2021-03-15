// Get all the html content so no need to query the dom anymore.
const buttons = Array.from(document.getElementsByClassName("button"));

// Map because I love how tidy it looks. If I was worried about browser compatibility
// the scipt would be pushed through babel. With huge data set your best bet is reverse for.
buttons.map((elem, index) => {
    elem.innerHTML = index;
    elem.style.backgroundColor = index % 2 ? "red" : "green";
    elem.addEventListener("click", () => {
        alert(index);
    });
});
