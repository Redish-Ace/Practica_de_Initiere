const mainSection = document.getElementById("main-section");
const categorySelect = document.getElementById("category-dropdown");
const viewCategoryBtn = document.getElementById("view-category-button");
const addBookmarkBtn = document.getElementById("add-bookmark-button");

const categoryName = document.getElementsByClassName("category-name");
const formSection = document.getElementById("form-section");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkFormBtn = document.getElementById("add-bookmark-button-form");

const listSection = document.getElementById("bookmark-list-section");
const listDiv = document.getElementById("category-list");
const closeListBtn = document.getElementById("close-list-button");
const deleteBtn = document.getElementById("delete-bookmark-button");

const getBookmarks = () => {
    try{
        const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        for(const obj of bookmarks){
            const keys = Object.keys(obj);
            if(!(keys.includes("name") && !keys.includes("category") && !keys.includes("url"))){
                return [];
            }
        }
        return bookmarks;
    }catch(er){
        return []
    }
}

const displayOrCloseForm = () =>{   
    if(formSection.classList.contains("hidden")){
        mainSection.classList.add("hidden");
        formSection.classList.remove("hidden");
        return;
    }
    if(mainSection.classList.contains("hidden")){
        formSection.classList.add("hidden");
        mainSection.classList.remove("hidden");
        return;
    }
}

addBookmarkBtn.addEventListener("click", () => {
    displayOrCloseForm();
    categoryName[0].textContent = categorySelect.value.toUpperCase();

});

closeFormBtn.addEventListener("click", () => {
    displayOrCloseForm();
});

addBookmarkFormBtn.addEventListener("click", () => {
    const bookmarks = getBookmarks();

    const newBookmark = {
        name: nameInput.value,
        category: categorySelect.value,
        url: urlInput.value
    }

    bookmarks.push(newBookmark);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    nameInput.value = "";
    urlInput.value = "";

    displayOrCloseForm();
});
