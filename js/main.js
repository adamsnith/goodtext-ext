document.addEventListener("DOMContentLoaded", function(event) {
  let buttons = document.getElementsByClassName("btn");
  console.log("hej");
  for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
      selectedButton(event.target.getAttribute("id"));
    });
  }
  console.log("hej");
});

function selectedButton(id) {
  mid = parseInt(id);
  let preset = { preset: "" };
  if (document.getElementById(id).checked == true) {
    switch (mid) {
      case 1:
        document.getElementById("2").checked = false;
        document.getElementById("3").checked = false;
        preset.preset = "standard";
        break;
      case 2:
        document.getElementById("1").checked = false;
        document.getElementById("3").checked = false;
        preset.preset = "dyslexi";
        break;
      case 3:
        document.getElementById("1").checked = false;
        document.getElementById("2").checked = false;
        preset.preset = "extra";
        break;
      default:
        preset.preset = "none";
    }
  }
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, preset);
  });
}
