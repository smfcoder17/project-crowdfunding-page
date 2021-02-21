
let bookmarkBtn = document.getElementById("bookmark-btn");

bookmarkBtn.addEventListener("click", () => {
    let textNode = bookmarkBtn.childNodes[bookmarkBtn.childNodes.length - 1];

    if(bookmarkBtn.classList.contains("active")) {
        bookmarkBtn.classList.remove("active");
        textNode.textContent = "Bookmark";
    }
    else {
        bookmarkBtn.classList.add("active");
        textNode.textContent = "Bookmarked";
    }
})