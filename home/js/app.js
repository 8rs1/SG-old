let $ = document;

let datetime = new Date();

let menuBar = $.getElementById("menubar");
let menuBarIcon = $.getElementById("menubaricon");
let menu = $.getElementById("menu");
let menuFlag = false;

let contactus = $.getElementById("contactUs");
let footerText = $.getElementsByName("footertoggle");
let aboutus = $.getElementById("aboutUs");
let aboutText = $.getElementById("abouttext");
let contactText = $.getElementById("contacttxt");
let footerFlag = false;

let supportButton = $.getElementById("support");
let supportClose = $.getElementById("supportClose");
let supportDialog = $.getElementById("supportdialog");
let supportFlag = false;
let chatSection = $.getElementById("chatsection");
let msgSupportTime = $.getElementById("supportmsgtime");
let newMessage = $.getElementById("newmessage");
let sendMessage = $.getElementById("sendmessage");

$.body.addEventListener("keyup", function (isESC) {
  if (isESC.code === "Escape") {
    if (supportClose.classList.contains("visible")) {
      supportButton.click();
    }
  }
});

menuBar.addEventListener("click", function () {
  if (menuFlag) {
    menu.classList.add("-right-[100vw]");
    menu.classList.remove("right-0");
    menuBarIcon.classList.add("fa-bars");
    menuBarIcon.classList.remove("fa-close");
    menuFlag = false;
  } else {
    menu.classList.add("right-0");
    menu.classList.remove("-right-[100vw]");
    menuBarIcon.classList.add("fa-close");
    menuBarIcon.classList.remove("fa-bars");
    menuFlag = true;
  }
});

supportButton.addEventListener("click", function () {
  if (supportFlag) {
    supportClose.classList.remove("opacity-1");
    supportClose.classList.remove("visible");
    supportClose.classList.add("opacity-0");
    supportClose.classList.add("rotate-180");
    supportClose.classList.add("invisible");
    supportDialog.classList.add("invisible");
    supportDialog.classList.remove("visible");
    supportDialog.classList.add("opacity-0");
    supportDialog.classList.remove("opacity-1");
    supportButton.classList.remove("rounded-tr-none");
    supportButton.classList.remove("sm:rounded-bl-none");
    supportButton.classList.add("sm:rounded-tr-full");
    supportFlag = false;
  } else {
    supportClose.classList.add("opacity-1");
    supportClose.classList.add("visible");
    supportClose.classList.remove("opacity-0");
    supportClose.classList.remove("rotate-180");
    supportClose.classList.remove("invisible");
    supportDialog.classList.add("visible");
    supportDialog.classList.remove("invisible");
    supportDialog.classList.add("opacity-1");
    supportDialog.classList.remove("opacity-0");
    supportButton.classList.add("rounded-tr-none");
    supportButton.classList.add("sm:rounded-bl-none");
    supportButton.classList.add("sm:rounded-tr-full");
    supportFlag = true;
  }
  supportButton.classList.add("rounded-full");
});


contactText.style.right = 0;
contactus.classList.add("after:w-full");
aboutus.classList.remove("after:w-full");
aboutText.style.right = "100vw";
footerFlag = true;

contactus.addEventListener("click", function () {
  footerFlag = false;
  if (!footerFlag) {
    contactText.style.right = 0;
    contactus.classList.add("after:w-full");
    aboutus.classList.remove("after:w-full");
    aboutText.style.right = "100vw";
    footerFlag = true;
  }
});
aboutus.addEventListener("click", function () {
  footerFlag = true;
  if (footerFlag) {
    aboutText.style.right = 0;
    contactText.style.right = "-100vw";
    aboutus.classList.add("after:w-full");
    contactus.classList.remove("after:w-full");
    footerFlag = false;
  }
});

sendMessage.addEventListener("click", sendMSG);
newMessage.addEventListener("keyup", sendkey);

function sendMSG(enter) {
  newMessage = $.getElementById("newmessage");
  if (newMessage.value.trim().length) {
    let msg = $.createElement("div");
    let msgChild = $.createElement("div");
    let nowTime = new Date();
    let msgTime = $.createElement("div");
    msg.className = "w-full";
    msg.id = "nmsg";
    setTimeout(() => {
      msg.removeAttribute("id");
      newMessage.focus();
    }, 1);
    msgChild.className =
      "bg-emerald-900 text-emerald-50 text-ellipsis overflow-hidden rounded-xl rounded-br-none w-fit max-w-full py-1 px-2";
    //   "bg-[#F1FAEE]",
    //   "text-ellipsis",
    //   "overflow-hidden",
    //   "rounded-lg",
    //   "rounded-br-none",
    //   "w-fit",
    //   "max-w-full",
    //   "py-1",
    //   "px-2"
    msgTime.classList.add("text-xs", "text-emerald-100");
    msgChild.innerHTML = newMessage.value;
    msgTime.innerHTML = nowTime.getHours() + ":" + nowTime.getMinutes();
    msg.append(msgChild);
    chatSection.append(msg);
    msgChild.append(msgTime);
    newMessage.value = "";
  }
}
function sendkey(keyup) {
  if (keyup.code === "Enter") {
    sendMessage.click();
  }
}
newMessage.value = "";
msgSupportTime.innerHTML =
  new Date().getHours() + ":" + new Date().getMinutes();
