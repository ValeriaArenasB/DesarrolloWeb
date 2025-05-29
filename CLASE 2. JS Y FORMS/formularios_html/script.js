const formUser = document.getElementById("formUser");
const txtnombre = document.getElementById("txtnombre");
const txtcorre = document.getElementById("txtcorreo");
const selectCiudad = document.getElementById("selectCiudad");

console.log(formUser);

formUser.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(txtnombre.value);
    console.log(txtcorreo.value);
    console.log(selectCiudad.value);
    console.log(selectPizza.value);
});

