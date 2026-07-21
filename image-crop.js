let cropper;

const image = document.getElementById("image");
const input = document.getElementById("imageInput");

input.addEventListener("change", function (e) {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (event) {

        image.src = event.target.result;

        if (cropper) {
            cropper.destroy();
        }

        image.onload = function () {

            cropper = new Cropper(image, {

                viewMode: 1,

                dragMode: "move",

                autoCropArea: 1,

                responsive: true,

                background: false,

                movable: true,

                zoomable: true,

                scalable: true,

                rotatable: true,

                cropBoxResizable: true,

                cropBoxMovable: true,

                toggleDragModeOnDblclick: false,

                preview: ".preview"

            });

        };

    };

    reader.readAsDataURL(file);

});

document.getElementById("zoomIn").onclick = () => {
    if (cropper) cropper.zoom(0.1);
};

document.getElementById("zoomOut").onclick = () => {
    if (cropper) cropper.zoom(-0.1);
};

document.getElementById("rotateLeft").onclick = () => {
    if (cropper) cropper.rotate(-90);
};

document.getElementById("rotateRight").onclick = () => {
    if (cropper) cropper.rotate(90);
};

document.getElementById("reset").onclick = () => {
    if (cropper) cropper.reset();
};

document.getElementById("cropBtn").onclick = () => {

    if (!cropper) return;

    const canvas = cropper.getCroppedCanvas({

        imageSmoothingQuality: "high"

    });

    image.src = canvas.toDataURL("image/png");

    cropper.destroy();

    cropper = new Cropper(image, {

        viewMode:1,

        preview:".preview"

    });

};

document.getElementById("downloadBtn").addEventListener("click", () => {

    if (!cropper) {
        alert("Please select an image first.");
        return;
    }

    const canvas = cropper.getCroppedCanvas({
        imageSmoothingQuality: "high"
    });

    if (!canvas) {
        alert("Crop image first.");
        return;
    }

    canvas.toBlob(function(blob){

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;

        a.download = "SabkaMitra-Cropped.png";

        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);

        URL.revokeObjectURL(url);

    });

});