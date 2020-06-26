//var url = window.location.href;
var url = "https://banjospeedruns.com/bklevels/sm"; // test url
var game = url.split("/")[3];
switch (game) {
  case "btlevels":
    var sections = ["general", "cwkshots", "cwkwarps", "outofbounds"];
    var sectionNames = ["General Tricks", "Clockwork Shots", "Clockwork Warps", "Out of Bounds"];
    break;
  case "bklevels":
    var sections = ["general", "outofbounds"];
    var sectionNames = ["General Tricks", "Out of Bounds"];
    break;
}
var level;
var levelcode = url.split("/").pop().split("#")[0];

async function injectLevelData () {
  // get current level from URL
  level = await fetch("/"+game+"/"+levelcode+".json");

  // check if level code JSON exists, and return 404 if not
  if (level.ok == false) {
    return errorPage();
  }

  level = await level.json();

  // set page name, title and description to current level
  document.title = level.title + " – Banjo Speedruns";
  document.getElementById("levelname").innerHTML = level.title;
  document.getElementById("description").innerHTML = level.description;

  // create a section for each trick type if its list isn't empty
  var index;
  for (index = 0; index < sections.length; index++) {
    // check if the section is empty
    if (level[sections[index]].length > 0) {
      var section = document.createElement("p");
      section.classList.add("section");
      section.setAttribute("id", sections[index]);
      var content = document.createTextNode(sectionNames[index]);
      section.appendChild(content);
      currentP = document.getElementById("last");
      document.body.insertBefore(section, currentP);
      //var hr = document.createElement("hr");
      //document.body.insertBefore(hr, currentP);

      // add each trick from the section in order
      var i;
      for (i = 0; i < level[sections[index]].length; i++) {
        last = document.getElementById("last");

        // create p element for trick title
        var trick = document.createElement("p");
        trick.setAttribute("style", "font-weight: bold;");
        trick.classList.add("trick");
        trick.classList.add("tab");
        var trick_name = level[sections[index]][i].name;
        var name = document.createTextNode(trick_name);
        trick.appendChild(name);
        trick.setAttribute("id", trick_name.replace(/ /g, "_").replace(/'/g, ""));
        document.body.insertBefore(trick, last);

        // create p element for trick description
        var description = document.createElement("p");
        description.classList.add("tab");
        var des = document.createTextNode(level[sections[index]][i].description);
        description.appendChild(des);
        document.body.insertBefore(description, last);

        // create iframe element for trick video embed if it exists
        if (level[sections[index]][i].video) {
          var videoP = document.createElement("p");
          videoP.classList.add("tab");
          var iframe = document.createElement("iframe");
          iframe.width = "480";
          iframe.height = "270";
          iframe.src = level[sections[index]][i].video;
          iframe.frameborder = "0";
          iframe.allowfullscreen = "true";
          videoP.appendChild(iframe);
          document.body.insertBefore(videoP, last);
        }

        // create img element for image if it exists
        if (level[sections[index]][i].image) {
          var imgP = document.createElement("p");
          imgP.classList.add("tab");
          var img = document.createElement("img");
          img.setAttribute("src", level[sections[index]][i].image[0]);
          img.setAttribute("width", "400");
          imgP.appendChild(img);
          document.body.insertBefore(imgP, last);

          // then add alt text to the image if it's provided, or use trick name as default text
          var alt = level[sections[index]][i].image[1] || level[sections[index]][i].name;
          img.setAttribute("alt", alt);
        }
      }
    }
  }
  populateNavBox();
}


function populateNavBox () {
  var index;
  for (index = 0; index < sections.length; index++) {
    if (level[sections[index]].length > 0) {
      var li = document.createElement("li");
      li.setAttribute("id", "trick-list-section");
      var link = document.createElement("a");
      link.setAttribute("href", "#" + sections[index]);
      var name = document.createTextNode(sectionNames[index]);
      link.appendChild(name);
      li.appendChild(link);
      ul = document.getElementById("boxlist");
      ul.appendChild(li);
      // create sublist of tricks for current trick section
      var sub_ol = document.createElement("ol");
      var num;
      for (num = 0; num < level[sections[index]].length; num++) {
        var sub_li = document.createElement("li");
        var sub_link = document.createElement("a");
        var trick_name = level[sections[index]][num].name;
        // remove spaces and apostrophes from trick name, then make it a #bookmark
        sub_link.setAttribute("href", "#" + trick_name.replace(/ /g, "_").replace(/'/g, ""));
        var sub_name = document.createTextNode(trick_name);
        sub_link.appendChild(sub_name);
        sub_li.appendChild(sub_link);
        sub_ol.appendChild(sub_li);
      }
      // add bookmarked trick list under corresponding trick section in nav box
      ul.appendChild(sub_ol);
    }
  }
}


function errorPage () {
  window.location.replace("/404.html");
}
