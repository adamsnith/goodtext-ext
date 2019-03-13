console.log("GoodText loaded.");

chrome.runtime.onMessage.addListener(changePreset);
paragraphs = document.getElementsByTagName("p");

/*if (localStorage.getItem("preset")) {
  changePreset(localStorage.getItem("preset"));
} else {
  localStorage.setItem("preset", "none");
}*/

function changePreset(preset, sender, sendResponse) {
  console.log(preset.preset);
  switch (preset.preset) {
    case "standard":
      for (elt of paragraphs) {
        elt.style["max-width"] = "700px";
        elt.style["font-size"] = "18px";
        elt.style["line-height"] = "1.5";
        elt.style["letter-spacing"] = "0.12";
        elt.style["padding"] = "15px 30px";
      }
      break;
    case "dyslexi":
      console.log("Dyslexi loaded.");
      for (elt of paragraphs) {
        elt.style["letter-spacing"] = "0.12";
        elt.style["max-width"] = "600px";
        elt.style["font-size"] = "20px";
        elt.style["padding"] = "15px 30px";
        elt.style["line-height"] = "2.0";
      }
      dyslexia();
      break;
    case "extra":
      console.log("Extra loaded.");
      for (elt of paragraphs) {
        elt.style["max-width"] = "600px";
        elt.style["font-size"] = "20px";
        elt.style["line-height"] = "1.6";
        elt.style["letter-spacing"] = "0.12";
        elt.style["padding"] = "15px 30px";
      }
      break;
    case "none":
      console.log("Nothing loaded.");
      break;
    default:
      console.log("Default loaded.");
      location.reload();
      break;
  }
  localStorage.setItem("preset", preset.preset);
}

function dyslexia() {
  $("body").css("background", "rgba(250, 250, 250, 1)");

  var topDiv = $('<div id="top"></div>');
  $("body").append(topDiv);

  $("head").prepend(
    '<style type="text/css">' +
      "@font-face {\n" +
      "\tfont-family: 'open';\n" +
      "\tsrc: url('chrome-extension://noikammcmakiebpkjnfafddeejmhfeik/open.otf');}\n" +
      "\t* {font-family: 'open';}\n" +
      "</style>"
  );

  var bottomDiv = $('<div id="bottom"></div>');
  $("body").append(bottomDiv);

  $("body").mousemove(function(event) {
    var h = window.innerHeight;
    var y = event.clientY;
    var top = y - 60;
    var bottom = h - (y + 60);

    console.log("h: " + h);
    console.log("y: " + y);
    console.log("top: " + top);
    console.log("bottom: " + bottom);

    topDiv.css("position", "absolute");
    topDiv.css("z-index", 999);
    topDiv.css("width", "100%");
    topDiv.css("top", "0");
    topDiv.css("height", top + "px");
    topDiv.css("background", "rgba(80, 80, 80, 0.8)");

    bottomDiv.css("position", "absolute");
    bottomDiv.css("z-index", 999);
    bottomDiv.css("width", "100%");
    bottomDiv.css("bottom", "0");
    bottomDiv.css("height", bottom + "px");
    bottomDiv.css("background", "rgba(80, 80, 80, 0.8)");
  });
}
