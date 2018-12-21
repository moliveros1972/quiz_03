var randomContain = document.querySelector(".randomContainer");



function randomQuote() {
    // console.log("Running single Quote");
    fetch(`http://api.techlaunch.io:88/random`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            randomContainer.innerHTML +=
                `<div class="randomContainer"></div>
                <p>${data.text}</p>
                <p>${data[i].author}</p>
                <p>${data[i].author}</p>
                <p>${data[i].author}</p>
                </div>
                `
        })
}

.catch (function (error) {
    console.log("Error!")
}

randomQuote();



function randomAuthor() {
    return Math.round();
}





