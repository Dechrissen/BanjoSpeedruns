var sections = ["general", "cwkshots", "cwkwarps", "outofbounds"];
var sectionNames = ["General Tricks", "Clockwork Shots", "Clockwork Warps", "Out of Bounds"];
var level;

async function injectLevelData () {
  // get current level from URL
  level = await fetch("./btlevels/mt.json");
  level = await level.json();
  // set page name, title and description to current level
  document.title = level.title;
  document.getElementById("levelname").innerHTML = level.title;
  document.getElementById("description").innerHTML = level.description;

  var index;
  for (index = 0; index < sections.length; index++) {
    if (level[sections[index]].length > 0) {
      var section = document.createElement("p");
      section.classList.add("section");
      section.setAttribute("id", sections[index]);
      var content = document.createTextNode(sectionNames[index]);
      section.appendChild(content);
      currentP = document.getElementById("last");
      document.body.insertBefore(section, currentP);

      var i;
      for (i = 0; i < level[sections[index]].length; i++) {
        last = document.getElementById("last");
        //
        var trick = document.createElement("p");
        trick.classList.add("trick");
        var name = document.createTextNode(level[sections[index]][i].name);
        trick.appendChild(name);
        document.body.insertBefore(trick, last);
        //
        var description = document.createElement("p");
        var des = document.createTextNode(level[sections[index]][i].description);
        description.appendChild(des);
        document.body.insertBefore(description, last);
        //
        if (level.general[i].video != "") {
          var videoP = document.createElement("p");
          var iframe = document.createElement("iframe");
          iframe.width = "560";
          iframe.height = "315";
          iframe.src = level[sections[index]][i].video;
          iframe.frameborder = "0";
          iframe.allowfullscreen = "true";
          videoP.appendChild(iframe);
          document.body.insertBefore(videoP, last);
        }
      }
    }
  }
}

function populateNavBox () {
  var index;
  for (index = 0; index < sections.length; index++) {
    if (level[sections[index]].length > 0) {
      var li = document.createElement("li");
      var link = document.createElement("a");
      link.setAttribute("href", "#" + sections[index]);
      var name = document.createTextNode(sectionNames[index]);
      link.appendChild(name);
      li.appendChild(link);
      ol = document.getElementById("boxlist");
      ol.appendChild(li);
    }
  }
}
