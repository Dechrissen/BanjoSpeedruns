//var url = window.location.href;
var url = "https://banjospeedruns.com/btcategories/nodcwbc"; // test url
var game = url.split("/")[3];
var gamename;
switch (game) {
  case "bkcategories":
    gamename = "Banjo-Kazooie";
    break;
  case "btcategories":
    gamename = "Banjo-Tooie";
    break;
}
var category;
var categorycode = url.split("/").pop();

async function injectCategoryData () {
  category = await fetch("/"+game+"/"+categorycode+".json");

  // check if category code JSON exists, and return 404 if not
  if (category.ok == false) {
    return errorPage();
  }

  category = await category.json();

  // set page name, title, description, and add Speedrun.com link for current category
  document.title = gamename + " " + category.title + " – Banjo Speedruns";
  document.getElementById("gamename").innerHTML = gamename;
  document.getElementById("categoryname").innerHTML = category.title;
  document.getElementById("description").innerHTML = category.description;
  document.getElementById("leaderboard").innerHTML = "Speedrun.com Leaderboard for " + category.title;
  document.getElementById("form").setAttribute("action", category.leaderboard);
  document.getElementById("form").setAttribute("method", "get");
  document.getElementById("form").setAttribute("target", "_blank");


  // create 'Documents' section
  if (category["routedocuments"].length > 0) {
    var section = document.createElement("p");
    section.classList.add("section");
    section.setAttribute("id", "routedocuments");
    var content = document.createTextNode("Documents & Route Videos");
    section.appendChild(content);
    currentP = document.getElementById("last");
    document.body.insertBefore(section, currentP);
    //var hr = document.createElement("hr");
    //document.body.insertBefore(hr, currentP);

    var i;
    for (i = 0; i < category["routedocuments"].length; i++) {
      last = document.getElementById("last");

      // create p element for document name
      var doc = document.createElement("p");
      doc.classList.add("doc");
      doc.classList.add("tab");
      var doc_name = category["routedocuments"][i].name;
      var name = document.createTextNode("• " + doc_name);
      document.body.insertBefore(doc, last);

      // create link to document
      var link = document.createElement("a");
      link.setAttribute("href", category["routedocuments"][i].link);
      link.setAttribute("target", "_blank");
      link.appendChild(name);
      doc.appendChild(link);
      doc.setAttribute("id", doc_name.replace(/ /g, "_").replace(/'/g, ""));
    }
  }

  // create 'Videos' section
  if (category["videos"].length > 0) {
    var section = document.createElement("p");
    section.classList.add("section");
    section.setAttribute("id", "videos");
    var content = document.createTextNode("Helpful Videos");
    section.appendChild(content);
    currentP = document.getElementById("last");
    document.body.insertBefore(section, currentP);
    //var hr = document.createElement("hr");
    //document.body.insertBefore(hr, currentP);

    var i;
    for (i = 0; i < category["videos"].length; i++) {
      last = document.getElementById("last");

      // create p element for video name
      var video = document.createElement("p");
      video.setAttribute("style", "font-weight: bold;");
      video.classList.add("vid");
      video.classList.add("tab");
      var vid_name = category["videos"][i].name;
      var name = document.createTextNode(vid_name);

      // create link to video, and add it to video title p element
      var link = document.createElement("a");
      var link_name = category["videos"][i].video.replace('embed', 'watch');
      link.setAttribute("href", link_name);
      link.setAttribute("target", "_blank");
      link.appendChild(name);
      video.appendChild(link);
      video.setAttribute("id", vid_name.replace(/ /g, "_").replace(/'/g, ""));
      document.body.insertBefore(video, last);

      // create iframe element for video embed
      var videoP = document.createElement("p");
      videoP.classList.add("tab");
      var iframe = document.createElement("iframe");
      iframe.width = "352";
      iframe.height = "198";
      iframe.src = category["videos"][i].video;
      iframe.frameborder = "0";
      iframe.allowfullscreen = "true";
      videoP.appendChild(iframe);
      document.body.insertBefore(videoP, last);
    }
  }
}


function errorPage () {
  window.location.replace("/404.html");
}
