
// function changeText(){
// let fpara = document.getElementById('fpara');
// fpara.textContent = "Hello mayank";
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click',changeText);

// let paras = document.querySelectorAll('p');

function alertpara( event){
   alert("You have clicked on the : "+event.target.textContent);
}

// for(let i = 0 ; i < paras.length ; i++){
//     let para = paras[i];
//     para.addEventListener('click', alertpara);
// }



let mydiv = document.getElementById('wrapper');

document.addEventListener('click',alertpara);