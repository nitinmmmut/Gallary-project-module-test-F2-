const img1Element = document.getElementById("img1");
const img2Element = document.getElementById("img2");
const img3Element = document.getElementById("img3");
const img4Element = document.getElementById("img4");
const userDetailsElement = document.querySelector(".user-details");
const formContainerElement = document.querySelector(".form-container");
let diceElement = document.querySelector("#dice");
let name;
let username;
let email;


img1Element.addEventListener(
    "click",
    () => {
        console.log("from 1");
        formContainerElement.classList.remove("hide");
        name = formContainerElement.querySelector("#name").value;
        username = formContainerElement.querySelector("#username").value;
        email = formContainerElement.querySelector("#email").value;
        hanldeImg2();
    },
    { once: true }
);

function hanldeImg2() {
    img2Element.addEventListener("click", function a() {
        console.log("from 2");
        name = formContainerElement.querySelector("#name").value;
        username = formContainerElement.querySelector("#username").value;
        email = formContainerElement.querySelector("#email").value;
        if (name === "" || username === "" || email === "") {
            alert("please fill the form details");
        } else {
            formContainerElement.classList.add("hide");
            userDetailsElement.innerHTML += `
      <h1> Username: ${username} </h1>
        <h1>name: ${name} </h1>`;
            formContainerElement.querySelector("#name").value = "";
            formContainerElement.querySelector("#username").value = "";
            formContainerElement.querySelector("#email").value = "";
            handelImg3();
            img2El.removeEventListener("click", a);
        }
    });
}


let sum = 0;
let count = 0;
let times = 0;


diceElement.addEventListener("click", handleClick);
function handleClick() {
    console.log("from dice");
    if (count < 3) {
        sum += getRandom();
        document.querySelector(".p").innerHTML = `
    Total sum is ${sum}`;
        count++;
    } else if (count === 3 && sum <= 10 && times != 1) {
        count = 0;
        sum = 0;
        times++;
        diceElement.classList.toggle("hide");
        alert("sum is below 10 please try again by click  image 3");
    } else {
        if (sum < 10) {
            alert("Bad luck you cannot click 4th image");
        }
        if (sum > 10) {
            document.querySelector(".p").innerHTML = `
    Total sum is ${sum} you can click img 4`;

            img4Element.addEventListener("click", () => {
                console.log("from 4");
                let random = crypto.randomUUID();
                random = random.slice(-12, -1);
                document.querySelector(".p").innerHTML = `
    The coupon code  ${"#" + random}
      <img src="./cng.jpg" id="img4" />
    `;
            });
        }
        diceElement.classList.toggle("hide");

        diceElement.removeEventListener("click", handleClick);
        img3Element.removeEventListener("click", img3Func);
    }
}


function handelImg3() {
    img3Element.addEventListener("click", img3Func);
}

function img3Func() {
    console.log("from 3");
    userDetailsElement.innerHTML = "";
    diceElement.classList.toggle("hide");
}

function getRandom() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}