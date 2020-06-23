let numBoites = 6;
let colors = generateRandomColors(numBoites);
let boite = document.querySelectorAll(".boite");
let pickedColor = pickColor();
let codeCouleur = document.getElementById("codeCouleur");
let messageDisplay = document.querySelector("#message");
let h2 = document.querySelector("h2");
let resetButton = document.querySelector("#reset");
let btnFacile = document.querySelector("#btnFacile");
let btnDur = document.querySelector("#btnDur");


btnFacile.addEventListener("click", function () {
    btnDur.classList.remove("selected");
    btnFacile.classList.add("selected");
    numBoites = 3;
    colors = generateRandomColors(numBoites);
    pickedColor = pickColor();
    codeCouleur.textContent = pickedColor;
    for (let i = 0; i < boite.length; i++) {
        if (colors[i]) {
            boite[i].style.background = colors[i];
        } else {
            boite[i].style.display = "none";
        }
    }
});

btnDur.addEventListener("click", function () {
    btnFacile.classList.remove("selected");
    btnDur.classList.add("selected");
    numBoites = 6;
    colors = generateRandomColors(numBoites);
    pickedColor = pickColor();
    codeCouleur.textContent = pickedColor;
    for (let i = 0; i < boite.length; i++) {
        boite[i].style.background = colors[i];
        boite[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function () {
    //générer de nouvelles couleur
    colors = generateRandomColors(numBoites);
    //choisissez une nouvelle couleur aléatoire dans le tableau
    pickedColor = pickColor();
    //changer la couleur Affichage pour correspondre à la couleur choisie(AHS)
    codeCouleur.textContent = pickedColor;
    this.textContent = "Nouvelle Couleur";
    messageDisplay.textContent = "";
    //changer la couleur des boites
    for (let i = 0; i < boite.length; i++) {
        boite[i].style.background = colors[i];
    }
    h2.style.background = "teal";
})

codeCouleur.textContent = pickedColor;

for (let i = 0; i < boite.length; i++) {
    //ajouter des couleurs initiales aux boites
    boite[i].style.background = colors[i];
    //ajouter des options de clic aux boites
    boite[i].addEventListener("click", function () {
        //saisir la couleur de la boite cueillie
        let clickedColor = this.style.background;
        //comparer la couleur à la couleur choisie
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Félicitation!";
            resetButton.textContent = "Rejouer ?";
            changeColors(clickedColor);
            h2.style.background = clickedColor;
        } else {
            this.style.background = "#ffcdd2";
            messageDisplay.textContent = "Essayer Encore";
        }
    })
}

function changeColors(color) {
        //parcourir tous les boites
    for (let i = 0; i < boite.length; i++) {
        //changer chaque couleur pour correspondre à la couleur donnée
        boite[i].style.background = color;
    }

}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num) {
    //nouveau tableau
    let arr = []
    //add num random colors to array
    for (let i = 0; i < num; i++) {
        arr.push(randomColor())
        //get random color and push into array
    }
    //return that array
    return arr;
}

function randomColor() {
    //choisi le "rouge" from 0-255
    let r = Math.floor(Math.random() * 256)
    //choisi le "vert" from 0-255
    let g = Math.floor(Math.random() * 256)
    //choisi le "blue" from 0-255
    let b = Math.floor(Math.random() * 256)
    //code finale
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
