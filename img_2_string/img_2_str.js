function img2str(event) {
    event.preventDefault();

    let fileInput = document.getElementById("imgInput");
    let file = fileInput.files[0];

    if (!file) {
        alert("Please select an image");
        return;
    }

    let reader = new FileReader();

    reader.onload = function () {
        let base64String = reader.result;

        // 🔥 Show image instead of text
        document.getElementById("preview").src = base64String;
    };

    reader.readAsDataURL(file);
}