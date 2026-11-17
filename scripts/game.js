//Add game to library
let addGameToLibraryForm = document.getElementById("add-to-library-game-form");

if (addGameToLibraryForm) {
    addGameToLibraryForm.addEventListener("submit", addGameToLibrary);
}

function addGameToLibrary(e) {
    e.preventDefault();

    let playtime = document.getElementById("playtime").value;
    let status = document.getElementById("status").value;
    let platform = document.getElementById("platform").value;
    let rating = document.getElementById("rating").value;
    let comment = document.getElementById("comment").value;

    const game = {
        playtime: playtime,
        status: status,
        platform: platform,
        rating: rating,
        comment: comment
    }
    console.log(game);
}

