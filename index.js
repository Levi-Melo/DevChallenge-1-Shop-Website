function sub() {
    var result = document.querySelector("input");
    result.value--;
}
function add() {
    var result = document.querySelector("input");
    result.value++;

}
function color() {
    document.addEventListener('click', function (e) {
        var id = (e.target.id);
        var elemento = id;
        document.getElementById(id).style.border = 'solid 2px #e67e34';
        return elemento;
    });
}