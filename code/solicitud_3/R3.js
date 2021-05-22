
let modal = document.getElementById("modal-video");
let open = document.getElementById("modal-open");
let close = document.getElementsByClassName("close-modal")[0];

open.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
