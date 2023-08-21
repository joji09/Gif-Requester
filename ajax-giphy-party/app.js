
// Giphy Token: KdOCM5UkYTUKhWuBqr9rbII6bYE1jPFt

const gifArea = document.getElementById("gif-area");
const searchInput = document.getElementById("search");
const searchForm = document.getElementById("search-form");

function addGif(data){
    const numResults = data.length;
    if (numResults){
        const randomId = Math.floor(Math.random() * numResults);
        const newDiv = document.createElement("div");
        const newGif = document.createElement("img");
        newGif.src = data[randomId].images.original.url
        newDiv.appendChild(newGif);
        gifArea.appendChild(newDiv);
    }
}

searchForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const searchKeyword = searchInput.value;
    searchInput.value = "";

    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchKeyword,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });

    addGif(response.data.data)
})
