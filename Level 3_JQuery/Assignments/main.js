const imgInput = document.querySelector("#imgInput");
const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#bottomText");

const canvas = document.querySelector("#memes"); 

let image;

imgInput.addEventListener("change", (e) => {
    const imageDataUrl = URL.createObjectURL(e.target.files[0]);

    image = new Image();
    image.src = imageDataUrl;

    image.addEventListener("load", () => {
        updateCanvas( canvas, image, topText.value, bottomText.value);
    }, { once : true }); 
})

topText.addEventListener("change", () => {
    updateCanvas(canvas, image, topText.value, bottomText.value);
});

bottomText.addEventListener("change", () => {
    updateCanvas(canvas, image, topText.value, bottomText.value);
});

function updateCanvas (canvas, image, topText, bottomText){
    const context = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width/10);
    const yOffSet = height/25;

    canvas.width = width;
    canvas.height = height;
    context.drawImage(image, 0, 0);
}

context.strokStyle = "black";
context.lineWidth = Math.floor(fontSize/4);
context.fillStyle = "white";
context.textAlign = "center";
context.lineJoin = "round";
context.font = `${fontSize}px sans-serif`;

context.textBaseline = "top";
context.strokText (topText, width/2, yOffSet);
context.fillText (topText, width/2, yOffSet);

context.textBaseline = "bottom";
context.strokText (bottomText, width/2, height - yOffSet);
context.fillText (bottomText, width/2, height - yOffSet);
