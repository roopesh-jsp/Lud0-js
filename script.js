let dice = 0;
const spin = document.querySelector(".spin");
const dicedisply = document.querySelector(".dicedisplay");

var yellowpath = [];
for (let i = 0; i <= 50; i++) {
  yellowpath.push(i);
}
for (let i = 1; i <= 5; i++) {
  yellowpath.push(`y${i}`);
}
yellowpath.push("win");

var greenpath = [];
for (let i = 13; i <= 51; i++) {
  greenpath.push(i);
}
for (let i = 0; i <= 11; i++) {
  greenpath.push(i);
}
for (let i = 1; i <= 5; i++) {
  greenpath.push(`g${i}`);
}
greenpath.push("win");

var redpath = [];
for (let i = 28; i <= 51; i++) {
  redpath.push(i);
}
for (let i = 0; i <= 24; i++) {
  redpath.push(i);
}
for (let i = 1; i <= 5; i++) {
  redpath.push(`r${i}`);
}
redpath.push("win");

var bluepath = [];
for (let i = 39; i <= 51; i++) {
  bluepath.push(i);
}
for (let i = 0; i <= 37; i++) {
  bluepath.push(i);
}
for (let i = 1; i <= 5; i++) {
  bluepath.push(`b${i}`);
}
bluepath.push("win");

// icons

var blue1 = document.getElementById("bi1");

var blue2 = document.getElementById("bi2");

var blue3 = document.getElementById("bi3");

var blue4 = document.getElementById("bi4");

var green1 = document.getElementById("gi1");

var green2 = document.getElementById("gi2");

var green3 = document.getElementById("gi3");

var green4 = document.getElementById("gi4");

let bp1 = 0;
let bp2 = 0;
let bp3 = 0;
let bp4 = 0;

let gp1 = 0;
let gp2 = 0;
let gp4 = 0;
let gp3 = 0;

let flag = 0;
let i = 0;
console.log(i);
spin.addEventListener("click", () => {
  if (flag == 0) {
    dice = 0;
    dice = Math.floor(Math.random() * 6 + 1);
    dicedisply.innerHTML = dice;

    flag = 1;
    console.log(i);
    blue1.addEventListener("click", () => {
      if (i % 2 == 0) {
        i++;
        console.log(i);
        bp1 = bp1 + dice;
        var temp = document.getElementById(bluepath[`${bp1}`]);
        temp.innerHTML = "X";
        temp.classList.add("icons");
        temp.style.color = "rgb(0, 0, 145)";
        blue1.removeAttribute("id");
        blue1.innerHTML = "";
        blue1.classList.remove("icons");
        temp.setAttribute("id", "bi1");
        blue1 = temp;
        flag = 0;
      }
    });

    blue2.addEventListener("click", () => {
      if (i % 2 == 0) {
        i++;
        bp2 += dice;
        const temp = document.getElementById(bluepath[`${bp2}`]);
        temp.innerHTML = "X";
        temp.classList.add("icons");
        temp.style.color = "rgb(0, 0, 145)";
        blue2.removeAttribute("id");
        blue2.innerHTML = "";
        blue2.classList.remove("icons");
        temp.setAttribute("id", "bi2");
        blue2 = temp;
        flag = 0;
      }
    });

    blue3.addEventListener("click", () => {
      if (i % 2 == 0) {
        i++;
        bp3 += dice;
        const temp = document.getElementById(bluepath[`${bp3}`]);
        temp.innerHTML = "X";
        temp.classList.add("icons");
        temp.style.color = "rgb(0, 0, 145)";
        blue3.removeAttribute("id");
        blue3.innerHTML = "";
        blue3.classList.remove("icons");
        temp.setAttribute("id", "bi3");
        blue3 = temp;
        flag = 0;
      }
    });

    blue4.addEventListener("click", () => {
      if (i % 2 == 0) {
        i++;
        bp4 += dice;
        const temp = document.getElementById(bluepath[`${bp4}`]);
        temp.innerHTML = "X";
        temp.classList.add("icons");
        temp.style.color = "rgb(0, 0, 145)";
        blue4.removeAttribute("id");
        blue4.innerHTML = "";
        blue4.classList.remove("icons");
        temp.setAttribute("id", "bi4");
        blue4 = temp;
        flag = 0;
      }
    });

    green1.addEventListener("click", () => {
      if (i % 2 != 0) {
        console.log(i);
        i++;
        console.log(i);
        gp1 = gp1 + dice;
        var temp = document.getElementById(greenpath[`${gp1}`]);
        temp.innerHTML = "X";
        temp.classList.add("icons");
        temp.style.color = "rgb(126, 245, 126)";
        green1.removeAttribute("id");
        green1.innerHTML = "";
        green1.classList.remove("icons");
        temp.setAttribute("id", "gi1");
        green1 = temp;
        flag = 0;
      }
    });

    green2.addEventListener("click", () => {
      if (i % 2 != 0) {
        i++;
        gp2 = gp2 + dice;
        var temp = document.getElementById(greenpath[`${gp2}`]);
        temp.innerHTML = "X";
        temp.classList.add("icons");
        temp.style.color = "rgb(126, 245, 126)";
        green2.removeAttribute("id");
        green2.innerHTML = "";
        green2.classList.remove("icons");
        temp.setAttribute("id", "gi2");
        green2 = temp;
        flag = 0;
      }
    });

    green3.addEventListener("click", () => {
      if (i % 2 != 0) {
        i++;
        gp3 = gp3 + dice;
        var temp = document.getElementById(greenpath[`${gp3}`]);
        temp.innerHTML = "X";
        temp.classList.add("icons");
        temp.style.color = "rgb(126, 245, 126)";
        green3.removeAttribute("id");
        green3.innerHTML = "";
        green3.classList.remove("icons");
        temp.setAttribute("id", "gi3");
        green3 = temp;
        flag = 0;
      }
    });

    green4.addEventListener("click", () => {
      if (i % 2 != 0) {
        i++;
        gp4 = gp4 + dice;
        var temp = document.getElementById(greenpath[`${gp4}`]);
        temp.innerHTML = "X";
        temp.classList.add("icons");
        temp.style.color = "rgb(126, 245, 126)";
        green4.removeAttribute("id");
        green4.innerHTML = "";
        green4.classList.remove("icons");
        temp.setAttribute("id", "gi4");
        green4 = temp;
        flag = 0;
      }
    });
  }
});
