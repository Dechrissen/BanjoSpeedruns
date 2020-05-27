//var url = window.location.href;
var url = "https://banjowiki.com/btcategories/100";
var game = url.split("/")[3];
var category;
var categorycode = url.split("/").pop();

async function injectCategoryData () {
  category = await fetch("./"+game+"/"+categorycode+".json");

  // check if category code JSON exists, and return 404 if not
  if (category.ok == false) {
    return errorPage();
  }

  category = await category.json();

  // set page name, title and description to current category
  document.title = category.title;
  document.getElementById("categoryname").innerHTML = category.title;
  document.getElementById("description").innerHTML = category.description;
  document.getElementById("leaderboard").innerHTML = "Speedrun.com Leaderboard for " + category.title;
  document.getElementById("leaderboard").setAttribute("href", category.leaderboard);
  document.getElementById("leaderboard").setAttribute("target", "_blank");

  // create 'Documents' section
  if (category["documents"].length > 0) {
    var section = document.createElement("p");
    section.classList.add("section");
    section.setAttribute("id", "documents");
    var content = document.createTextNode("Documents");
    section.appendChild(content);
    currentP = document.getElementById("last");
    document.body.insertBefore(section, currentP);
    var hr = document.createElement("hr");
    document.body.insertBefore(hr, currentP);

    var i;
    for (i = 0; i < category["documents"].length; i++) {
      last = document.getElementById("last");
      //
      var doc = document.createElement("p");
      doc.classList.add("doc");
      var doc_name = category["documents"][i].name;
      var name = document.createTextNode(doc_name);
      document.body.insertBefore(doc, last);
      //
      var link = document.createElement("a");
      link.setAttribute("href", category["documents"][i].link);
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
    var content = document.createTextNode("Videos");
    section.appendChild(content);
    currentP = document.getElementById("last");
    document.body.insertBefore(section, currentP);
    var hr = document.createElement("hr");
    document.body.insertBefore(hr, currentP);

    var i;
    for (i = 0; i < category["videos"].length; i++) {
      last = document.getElementById("last");
      //
      var video = document.createElement("p");
      video.classList.add("vid");
      var vid_name = category["videos"][i].name;
      var name = document.createTextNode(vid_name);
      video.appendChild(name);
      video.setAttribute("id", vid_name.replace(/ /g, "_").replace(/'/g, ""));
      document.body.insertBefore(video, last);

      var videoP = document.createElement("p");
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
  window.location.replace("./404.html");
}
