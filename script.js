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

    document.querySelector('.person > h1').innerHTML = `You choosed ${choosed}`;
    document.querySelector('.person > h1').style.color = "#EA5455";

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

    document.querySelector('.cpu > h2').innerHTML = `Cpu choosed ${cpuChoosed}`;
    document.querySelector('.cpu > h2').style.color = "#FFD460";

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
    document.querySelector(".equal").style.visibility = "visible";
  }
}

function refresh() {
  for (let i = 0; i <= images.length - 1; i++) {
    images[i].classList.remove("hidden");
    cpuImages[i].classList.add("hidden");
    document.querySelector(".person > h1").innerHTML = "Choose your weapon";
    document.querySelector(".person > h1").style.color = "#000000";
    document.querySelector(".cpu > h2").innerHTML = "cpu choosed :";
    document.querySelector(".cpu > h2").style.color = "#000000";
    document.querySelector(".equal").style.visibility = "hidden";
  }
}

document.querySelector("button").addEventListener("click", () => refresh());

document.addEventListener("keydown", (e) => {
  if (e.key == "r") {
    refresh();
  }
});
