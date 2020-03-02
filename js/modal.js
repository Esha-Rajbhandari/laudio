const modalBt = document.querySelector(".hashtag-block__footer .btn");
const teamMember = document.querySelector("#team_member");
const subject = document.querySelector("#subject");
const sendMsg = document.querySelector(".send");
const modalContainer = document.querySelector(".modal-container");
const modalClose = document.querySelector(".modal__headerRight");

modalClose.addEventListener("click", () => {
  modalContainer.style.display = "none";
  document.body.classList.remove("modal-open");
});

sendMsg.addEventListener("click", () => {
  modalContainer.style.display = "block";
  document.body.classList.add("modal-open");
});

teamMember.addEventListener("keyup", () => {
  if (teamMember.value === "" || teamMember.value === "null") {
    const msg = teamMember.getAttribute("msg");
    teamMember.parentElement.nextElementSibling.innerHTML = msg;
    teamMember.parentElement.nextElementSibling.style.display = "block";
    teamMember.parentElement.style.border = "1px solid #EF5350";
  } else {
    teamMember.parentElement.nextElementSibling.style.display = "none";
    teamMember.parentElement.style.border = "1px solid #D8DBE0";
  }
});

subject.addEventListener("keyup", () => {
  if (subject.value === "") {
    const msg = subject.getAttribute("msg");
    subject.parentElement.nextElementSibling.innerHTML = msg;
    subject.parentElement.nextElementSibling.style.display = "block";
    subject.parentElement.style.border = "1px solid #EF5350";
  } else {
    subject.parentElement.nextElementSibling.style.display = "none";
    subject.parentElement.style.border = "1px solid #D8DBE0";
  }
});

const hashtag = document.querySelectorAll(".hashtag");
const category = document.querySelector(".category");
hashtag.forEach(element => {
  let selected = false;
  element.addEventListener("click", () => {
    if (!element.classList.contains("hashtag--selected")) {
      element.classList.add("hashtag--selected");
      hashtag.forEach(e => {
        e.style.border = "1px solid #D8DBE0";
      });
      document.querySelector(".error-msg--cat").style.display = "none";
    } else {
      element.classList.remove("hashtag--selected");
      hashtag.forEach(ele => {
        if (ele.classList.contains("hashtag--selected")) {
          selected = true;
        }
      });
      if (!selected) {
        document.querySelector(".error-msg--cat").style.display = "block";
        hashtag.forEach(el => {
          el.style.border = "1px solid #EF5350";
        });
      }
      //   document.querySelector(".error-msg--cat").style.display = "block";
    }
    category.style.display = "block";
  });
});

modalBt.addEventListener("click", () => {
  hashtag.forEach(element => {
    if (!element.classList.contains("hashtag--selected")) {
      document.querySelector(".error-msg--cat").style.display = "block";
    }
  });
});
