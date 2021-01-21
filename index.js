const result = document.querySelector("input");

function sub() {
    result.value--;
}
function add() {
    result.value++;
}

let controles = ['S', 'M', 'L']

const standardBorder = 'lightgray'

const selectedBorder = '#e67e34'

function color(objeto) {
    controles.forEach(e => {
        setBorder(e, standardBorder)
        return;
    });
    let elemento = controles.find(e => e == objeto.id);
    setBorder(elemento, selectedBorder)
}

function setBorder(idElement, borderColor) {
    document.getElementById(idElement).style.border = `solid 2px ${borderColor}`;
}

