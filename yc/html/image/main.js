function changeImage(name) {
    // console.log(document.getElementById("image1").src);
    document.getElementById("image1").src=name;
}

function toggleImage() {
    let img = document.getElementById("image1")
    let src = img.src
    if (src.endsWith("webp")) {
        img.src="traineeships.jpg"
    } else {
        img.src = "joost.webp";
    }
}