// function that is called upon loading a level page
async function injectLevelData () {
  // get current level from URL
  var level = await fetch("./btlevels/mt.json");
  level = await level.json();
  // set page name, title and description to current level
  document.title = level.title;
  document.getElementById("levelname").innerHTML = level.title;
  document.getElementById("description").innerHTML = level.description;

  // GENERAL TRICKS
  if (level.general.length > 0) {
    var section = document.createElement("p");
    section.classList.add("section");
    section.setAttribute("id", "general");
    var content = document.createTextNode("General Tricks");
    section.appendChild(content);
    currentP = document.getElementById("last");
    document.body.insertBefore(section, currentP);

    var i;
    for (i = 0; i < level.general.length; i++) {
      last = document.getElementById("last");
      //
      var trick = document.createElement("p");
      trick.classList.add("trick");
      var name = document.createTextNode(level.general[i].name);
      trick.appendChild(name);
      document.body.insertBefore(trick, last);
      //
      var description = document.createElement("p");
      var des = document.createTextNode(level.general[i].description);
      description.appendChild(des);
      document.body.insertBefore(description, last);
      //
      if (level.general[i].video != "") {
        var videoP = document.createElement("p");
        var iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = level.general[i].video;
        iframe.frameborder = "0";
        iframe.allowfullscreen = "true";
        videoP.appendChild(iframe);
        document.body.insertBefore(videoP, last);
      }
    }
  }

  // CLOCKWORK SHOTS
  if (level.cwkshots.length > 0) {
    var section = document.createElement("p");
    section.classList.add("section");
    section.setAttribute("id", "cwkshots");
    var content = document.createTextNode("Clockwork Shots");
    section.appendChild(content);
    currentP = document.getElementById("last");
    document.body.insertBefore(section, currentP);

    var i;
    for (i = 0; i < level.cwkshots.length; i++) {
      last = document.getElementById("last");
      //
      var trick = document.createElement("p");
      trick.classList.add("trick");
      var name = document.createTextNode(level.cwkshots[i].name);
      trick.appendChild(name);
      document.body.insertBefore(trick, last);
      //
      var description = document.createElement("p");
      var des = document.createTextNode(level.cwkshots[i].description);
      description.appendChild(des);
      document.body.insertBefore(description, last);
      //
      if (level.cwkshots[i].video != "") {
        var videoP = document.createElement("p");
        var iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = level.cwkshots[i].video;
        iframe.frameborder = "0";
        iframe.allowfullscreen = "true";
        videoP.appendChild(iframe);
        document.body.insertBefore(videoP, last);
      }
    }
  }

  // CLOCKWORK WARPS
  if (level.cwkwarps.length > 0) {
    var section = document.createElement("p");
    section.classList.add("section");
    section.setAttribute("id", "cwkwarps");
    var content = document.createTextNode("Clockwork Warps");
    section.appendChild(content);
    currentP = document.getElementById("last");
    document.body.insertBefore(section, currentP);

    var i;
    for (i = 0; i < level.cwkwarps.length; i++) {
      last = document.getElementById("last");
      //
      var trick = document.createElement("p");
      trick.classList.add("trick");
      var name = document.createTextNode(level.cwkwarps[i].name);
      trick.appendChild(name);
      document.body.insertBefore(trick, last);
      //
      var description = document.createElement("p");
      var des = document.createTextNode(level.cwkwarps[i].description);
      description.appendChild(des);
      document.body.insertBefore(description, last);
      //
      if (level.cwkwarps[i].video != "") {
        var videoP = document.createElement("p");
        var iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = level.cwkwarps[i].video;
        iframe.frameborder = "0";
        iframe.allowfullscreen = "true";
        videoP.appendChild(iframe);
        document.body.insertBefore(videoP, last);
      }
    }
  }

  // OUT OF BOUNDS
  if (level.outofbounds.length > 0) {
    var section = document.createElement("p");
    section.classList.add("section");
    section.setAttribute("id", "outofbounds");
    var content = document.createTextNode("Out of Bounds");
    section.appendChild(content);
    currentP = document.getElementById("last");
    document.body.insertBefore(section, currentP);

    var i;
    for (i = 0; i < level.outofbounds.length; i++) {
      last = document.getElementById("last");
      //
      var trick = document.createElement("p");
      trick.classList.add("trick");
      var name = document.createTextNode(level.outofbounds[i].name);
      trick.appendChild(name);
      document.body.insertBefore(trick, last);
      //
      var description = document.createElement("p");
      var des = document.createTextNode(level.outofbounds[i].description);
      description.appendChild(des);
      document.body.insertBefore(description, last);
      //
      if (level.outofbounds[i].video != "") {
        var videoP = document.createElement("p");
        var iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = level.outofbounds[i].video;
        iframe.frameborder = "0";
        iframe.allowfullscreen = "true";
        videoP.appendChild(iframe);
        document.body.insertBefore(videoP, last);
      }
    }
  }
}
