// let selects = document.querySelectorAll('.img-items');
// let cpuSelects = document.querySelectorAll(".img-cpu-choosed");

// for(let i = 0; i <= selects.length -1 ; i++){
//     selects[i].addEventListener('click',()=>{
//        hiddenCpuSelectors();
//        for(let j = 0; j <= selects.length -1 ; j++){
//            if(j != i){
//                selects[j].classList.add("hidden");
//            }
//         }
//         let choosed = '';
//         if (i == 0){
//             choosed = 'Paper';
//         }else if(i == 1){
//             choosed = 'Rock';
//         }else{
//             choosed = 'Scissors';
//         }
//         document.querySelector('.items_box > h1').innerHTML = `You choosed ${choosed}`
//         let randChoosed = Number(Math.floor((Math.random()*10)/4));
//         cpuSelects[randChoosed].classList.remove('hidden');
//         gameLogic(i,randChoosed)
//     });
// }

// document.querySelector('button').addEventListener('click', refresh);

// function refresh () {
//     for(let i = 0; i <= selects.length -1 ; i++){
//         cpuSelects[i].classList.add('hidden');
//         selects[i].classList.remove('hidden');
//     }
//     document.querySelector('.items_box > h1').innerHTML = "Choose your weapon";
// }

// function hiddenCpuSelectors(){
//     for(let i = 0; i <= selects.length -1 ; i++){
//         cpuSelects[i].classList.add('hidden');
//     }
// }

// function gameLogic(userSelect,cpuSelect){

//     if (userSelect !== cpuSelect){
//         if(userSelect == 0){
//             if(cpuSelect == 1){
//                 document.querySelector('#user-point').innerHTML = Number(document.querySelector('#user-point').innerHTML) + 1;
//             }else{
//                 document.querySelector('#cpu-point').innerHTML = Number(document.querySelector('#cpu-point').innerHTML) + 1;
//             }
//         }
//         if(userSelect == 1){
//             if(cpuSelect == 2){
//                 document.querySelector('#user-point').innerHTML = Number(document.querySelector('#user-point').innerHTML) + 1;
//             }else{
//                 document.querySelector('#cpu-point').innerHTML = Number(document.querySelector('#cpu-point').innerHTML) + 1;
//             }
//         }
//         if(userSelect == 2){
//             if(cpuSelect == 0){
//                 document.querySelector('#user-point').innerHTML = Number(document.querySelector('#user-point').innerHTML) + 1;
//             }else{
//                 document.querySelector('#cpu-point').innerHTML = Number(document.querySelector('#cpu-point').innerHTML) + 1;
//             }
//         }
//     }else{
//       alert("ok")
//     }
// }

// document.addEventListener('keydown',(e)=>{
//     if (e.key = 'R'){
//         refresh();
//     }
// })

/*--------------------------------------------------my code------------------------------------------------------------*/

// let images = document.querySelectorAll('.img-items');

// for (let i = 0; i <= images.length-1;i++){
//     images[i].addEventListener('click', () => hidden (i));
// }

// function hidden (i){
//     for (let j = 0; j <= images.length-1; j++ ){
//         if (j !== i){
//             images[j].classList.add('hidden');
//         }
//     }
// }

// var images = document.querySelectorAll(".img-items");

// for (let i = 0; i <= images.length-1; i++){
//     images[i].addEventListener('click',()=> hide(i));
// }

// function hide (i){
//     for (let j = 0; j <= images.length-1; j++){
//         if (j !== i){
//             images[j].classList.add("hidden");
//         }
//     }
// }

// var test = document.querySelectorAll('.img-items');

// test[1].classList.toggle('hidden');

/*-----------------------------------------*/

//                                                        //

// var images = document.querySelectorAll(".img-items");
// var cpuImages = document.querySelectorAll(".img-cpu-choosed");

// for (let i = 0; i <= images.length - 1; i++) {
//   images[i].addEventListener("click", () => {
//     hide(i);
//     let cpuRandom = Math.floor((Math.random() * 10) / 4);
//     cpuImages[cpuRandom].classList.remove("hidden");
//     result(i, cpuRandom);
//   });
// }

// function hide(i) {
//   for (let j = 0; j <= images.length - 1; j++) {
//     if (j !== i) {
//       images[j].classList.add("hidden");
//     }
//   }
// }

// function refresh (){
//   for (let i = 0; i <= images.length - 1; i++){
//     images[i].classList.remove('hidden');
//     cpuImages[i].classList.add('hidden');
//   }
// }

// document.querySelector("button").addEventListener("click",()=>{
//   refresh ();
// });

// document.addEventListener('keydown', (e)=> {
//   if (e.key == "r"){
//     refresh();
//   }
// } );

// function result(user, cpu) {

//   let userPoint = document.querySelector('#user-point');
//   let cpuPoint = document.querySelector('#cpu-point');

//   if (user !== cpu) {
//     if (user == 0) {
//       if (cpu == 1) {
//         console.log("user win");
//         userPoint.innerHTML = Number(userPoint.innerHTML)+1;
//       } else {
//         console.log("cpu win");
//         cpuPoint.innerHTML = Number(cpuPoint.innerHTML)+1;
//       }
//     } else if (user == 1) {
//       if (cpu == 0) {
//         console.log("cpu win");
//         cpuPoint.innerHTML = Number(cpuPoint.innerHTML)+1;
//       } else {
//         console.log("user win");
//         userPoint.innerHTML = Number(userPoint.innerHTML)+1;
//       }
//     } else {
//       if (cpu == 0) {
//         console.log("user win");
//         userPoint.innerHTML = Number(userPoint.innerHTML)+1;
//       } else {
//         console.log("cpu win");
//         cpuPoint.innerHTML = Number(cpuPoint.innerHTML)+1;
//       }
//     }
//   } else {
//     console.log("equal");
//   }
// }

// var images = document.querySelectorAll(".img-items");
// var cpuImages = document.querySelectorAll(".img-cpu-choosed");

// for (let i = 0; i <= images.length - 1; i++) {
//   images[i].addEventListener("click", () => {
//     hidden(i);
//     let random = Math.floor(Math.random() * 2.5);
//     cpuImages[random].classList.remove("hidden");
//     game(i, random);
//   });
// }

// function hidden(i) {
//   for (let j = 0; j <= images.length - 1; j++) {
//     if (j !== i) {
//       images[j].classList.add("hidden");
//     }
//   }
// }

// document.querySelector("button").addEventListener("click", () => refresh());

// function refresh() {
//   for (let i = 0; i <= images.length - 1; i++) {
//     images[i].classList.remove("hidden");
//     cpuImages[i].classList.add("hidden");
//   }
// }

// document.addEventListener("keyup", (e) => {
//   if (e.key == "r") {
//     refresh();
//   }
// });

// function game(user, cpu) {
//   var userPoint = document.querySelector("#user-point");
//   var cpuPoint = document.querySelector("#cpu-point");

//   if (user !== cpu) {
//     if (user == 0) {
//       if (cpu == 1) {
//         userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
//       } else {
//         cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
//       }
//     } else if (user == 1) {
//       if (cpu == 0) {
//         cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
//       } else {
//         userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
//       }
//     } else {
//       if (cpu == 0) {
//         userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
//       } else {
//         cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
//       }
//     }
//   } else {
//     alert("equal");
//   }
// }

// document.addEventListener('keydown', (e)=> {
//   if (e.key == "r"){
//     refresh();
//   }
// } );

// function refresh (){
//   for (let i = 0; i <= images.length - 1; i++){
//     images[i].classList.remove('hidden');
//     cpuImages[i].classList.add('hidden');
//   }
// }





// 
// 
// 
// 
// 



var images = document.querySelectorAll(".img-items");

var cpuImages = document.querySelectorAll(".img-cpu-choosed ");

for (let i = 0; i <= images.length - 1; i++) {
  images[i].addEventListener("click", () => {
    hidden(i);

    let choosed = '';
    if (i == 0) {
      choosed = 'Paper';
    } else if (i == 1) {
      choosed = 'Rock';
    } else {
      choosed = 'Scissors';
    }

    document.querySelector('.items_box > h1').innerHTML = `You choosed ${choosed}`;
    document.querySelector('.items_box > h1').style.color = "red";

    let random = Math.floor(Math.random() * 2.5);
    cpuImages[random].classList.remove("hidden");

    let cpuChoosed = '';
    if (random == 0) {
      cpuChoosed = 'Paper';
    } else if (random == 1) {
      cpuChoosed = 'Rock';
    } else {
      cpuChoosed = 'Scissors';
    }

    document.querySelector('.items_box > h2').innerHTML = `Cpu choosed ${cpuChoosed}`;
    document.querySelector('.items_box > h2').style.color = "green";

    game(i, random);
  });
}

function hidden(i) {
  for (let j = 0; j <= images.length - 1; j++) {
    if (j !== i) {
      images[j].classList.add("hidden");
    }
  }
}

function game(user, cpu) {
  let userPoint = document.querySelector("#user-point");
  let cpuPoint = document.querySelector("#cpu-point");


  if (user !== cpu) {
    if (user == 0) {
      if (cpu == 1) {
        userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
      } else {
        cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
      }

    } else if (user == 1) {
      if (cpu == 0) {
        cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
      } else {
        userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
      }

    } else {
      if (cpu == 0) {
        userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
      } else {
        cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
      }
    }
    
  } else {
    alert("equal !");
  }
}

function refresh() {
  for (let i = 0; i <= images.length - 1; i++) {
    images[i].classList.remove("hidden");
    cpuImages[i].classList.add("hidden");
    document.querySelector(".items_box > h1").innerHTML = "Choose your weapon";
    document.querySelector(".items_box > h1").style.color = "rgb(0,0,0)";
    document.querySelector(".items_box > h2").innerHTML = "cpu choosed :";
    document.querySelector(".items_box > h2").style.color = "rgb(0,0,0)";
  }
}

document.querySelector("button").addEventListener("click", () => refresh());

document.addEventListener("keydown", (e) => {
  if (e.key == "r") {
    refresh();
  }
});
