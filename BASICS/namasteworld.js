let namastebtn = document.querySelector('button');
namastebtn.addEventListener('click',showMsg);

function showMsg(){
    let name =prompt('enter name of user');
    namastebtn.textContent='NAMASTE 🫶'+ name;
    alert("namaste world !");
}