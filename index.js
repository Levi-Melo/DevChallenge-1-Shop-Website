function sub() {
    let result = document.querySelector("input");
    result.value--;
}
function add() {
    let result = document.querySelector("input");
    result.value++;

}

let controles = [
    {
        idElement: "S",
        isSelected: 1,
    },
    {
        idElement: "M",
        isSelected: 1,
    },
    {
        idElement: "L",
        isSelected: 1,
    }
]


function color(objeto) {

    let elemento = controles.find(e => e.idElement == objeto.id);

    this.alterColor(elemento);

    controles.forEach(e => {
        if (e.idElement != objeto.id) {
            e.isSelected = 0;
            alterColor(e);
            return;
        }
        e.isSelected = 1;
        alterColor(e);
    });
}


function alterColor(elemento) {
    if (elemento.isSelected == 0) {
        gray(elemento);
        return;
    }
    orange(elemento);
}

function orange(element) {
    document.getElementById(element.idElement).style.border = 'solid 2px #e67e34';
    element.isSelected = 1;
}

function gray(element) {
    document.getElementById(element.idElement).style.border = 'solid 2px lightgray';
    element.isSelected = 0;

}