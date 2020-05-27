//var url = window.location.href;
var url = "https://banjowiki.com/btcategories/100";
var game = url.split("/")[3];
var gametitle;
var sections = ["description", "documents", "videos"];
var sectionNames = ["Description", "Documents", "Videos"];
switch (game) {
  case "bkcategories":
    gametitle = "Banjo-Kazooie";
    break;
  case "btcategories":
    gametitle = "Banjo-Tooie";
    break;
}
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
}



function errorPage () {
  window.location.replace("./404.html");
}
