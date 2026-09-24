// I have prior experience with javascript

let mainImage = document.getElementById("current");

for (let thumb of document.querySelectorAll(".thumb")) {
    let img = thumb.querySelector("img");
    thumb.addEventListener("click", () => {
        mainImage.src = img.src;
        mainImage.alt = img.alt;
        mainImage.width = img.naturalWidth;
        mainImage.height = img.naturalHeight;
    });
}
