const mainModal = document.getElementById("main-modal");
const closeMainModal = document.getElementsByClassName("close-button")[0];
const emailModal = document.getElementsByClassName("email-modal")[0];
const closeEmailModal = document.getElementById("close-email-modal");
const inputs = document.getElementsByTagName("input");

function addErrorMessageIfNeeded(input, condition, errorMessage) {
  if (condition) {
    input.placeholder = errorMessage;
    input.value = "";
    input.classList.add("red-place-holder");
  }
}

function addEventListeners() {
  const talkWithMeButton = document.getElementById("submit-contact");
  talkWithMeButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      inputs[5].value.length > 2 &&
      inputs[6].value.length === 10 &&
      inputs[7].value.includes("@")
    ) {
      emailModal.style.display = "flex";
    } else {
      addErrorMessageIfNeeded(
        inputs[5],
        inputs[5].value.length < 2 || inputs[5] == null,
        "נא להכניס שם חוקי "
      );
      addErrorMessageIfNeeded(
        inputs[6],
        inputs[6].value.length !== 10,
        "נא להכניס מספר טלפון תקין"
      );
      addErrorMessageIfNeeded(
        inputs[7],
        !inputs[7].value.includes("@"),
        "נא להכניס אימייל חוקי"
      );
    }
  });
  const footerTalkWithMeButton = document.getElementById(
    "submit-contact-footer"
  );
  footerTalkWithMeButton.onclick = (event) => {
    if (
      inputs[9].value.length > 2 &&
      inputs[10].value.length === 10 &&
      inputs[11].value.includes("@")
    ) {
      event.preventDefault();
      emailModal.style.display = "flex";
    } else {
      event.preventDefault();
      addErrorMessageIfNeeded(
        inputs[9],
        inputs[9].value.length < 2 || inputs[9] == null,
        "נא להכניס שם חוקי "
      );
      addErrorMessageIfNeeded(
        inputs[10],
        inputs[10].value.length !== 10,
        "נא להכניס מספר טלפון תקין"
      );
      addErrorMessageIfNeeded(
        inputs[11],
        !inputs[11].value.includes("@"),
        "נא להכניס אימייל חוקי"
      );
    }
  };
  const mainModalButton = document.getElementsByClassName("modal-button")[0];
  mainModalButton.onclick = (event) => {
    if (
      inputs[1].value.length > 2 &&
      inputs[2].value.length === 10 &&
      inputs[3].value.includes("@")
    ) {
      event.preventDefault();
      mainModal.classList.add("hide-main-modal");
      emailModal.style.display = "flex";
    } else {
      event.preventDefault();
      addErrorMessageIfNeeded(
        inputs[1],
        inputs[1].value.length < 2 || inputs[1] == null,
        "נא להכניס שם חוקי "
      );
      addErrorMessageIfNeeded(
        inputs[2],
        inputs[2].value.length !== 10,
        "נא להכניס מספר טלפון תקין"
      );
      addErrorMessageIfNeeded(
        inputs[3],
        !inputs[3].value.includes("@"),
        "נא להכניס אימייל חוקי"
      );
    }
  };
  const hamburgerButtonCheckbox = document.getElementById("checkbox");
  const navBar = document.getElementById("inner-nav-container");
  hamburgerButtonCheckbox.onclick = () => {
    navBar.classList.toggle("show-inner-nav-container");
  };
  const careers = document.getElementById("careers");
  const careersDropDown = document.getElementById("careers-dropdown");

  careers.onclick = () => {
    if (window.innerWidth < 925) {
      careersDropDown.classList.toggle("show-careers-dropdown");
    }
  };
}
addEventListeners();

function printImages() {
  const logos = document.getElementById("logos");

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 5; j++) {
      const img = document.createElement("img");
      switch (j) {
        case 1:
          img.setAttribute("src", "../photos/companies/bezeq.png");
          break;
        case 2:
          img.setAttribute("src", "../photos/companies/checkpoint.png");
          break;
        case 3:
          img.setAttribute("src", "../photos/companies/cisco.jpg");
          break;
        case 4:
          img.setAttribute("src", "../photos/companies/leumi.jpeg");
          break;
        case 0:
          img.setAttribute("src", "../photos/companies/microsoft.jpg");
          break;
        default:
          break;
      }
      img.classList.add("company-logo");
      logos.appendChild(img);
    }
  }
}

printImages();
const categories = document.getElementsByClassName("category-container");
const categoryInfo = document.getElementsByClassName("category-info");
const pluses = document.getElementsByClassName("fa-plus");

for (let i = 0; i < categories.length; i++) {
  categories[i].onclick = () => {
    categoryInfo[i].classList.toggle("open-category");
    pluses[i].classList.toggle("rotate");
  };
}
const question = document.getElementsByClassName("question");
const answer = document.getElementsByClassName("answer");
for (let i = 0; i < question.length; i++) {
  question[i].onclick = () => {
    answer[i].classList.toggle("show-answer");
    question[i].lastElementChild.classList.toggle("fa-arrow-circle-down");
    question[i].lastElementChild.classList.toggle("fa-arrow-circle-up");
  };
}
setTimeout(() => {
  mainModal.classList.add("show-main-modal");
}, 2000);
closeMainModal.onclick = () => {
  mainModal.classList.add("hide-main-modal");
};
closeEmailModal.onclick = () => {
  emailModal.style.display = "none";
};
