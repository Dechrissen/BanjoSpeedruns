var f = document.getElementsByTagName("footer");
var footer = f[0];


// footer list
var footer_list = document.createElement("ul");
footer_list.setAttribute("style", "line-height: 75%;");

// legal page link
var legal = document.createElement("p");
var legalLink = document.createElement("a");
legalLink.setAttribute("href", "/legal");
var legalText = document.createTextNode("Legal");
legalLink.appendChild(legalText);
legal.appendChild(legalLink);
var legalLi = document.createElement("li");
legalLi.appendChild(legal);

// GitHub repo link
var gh = document.createElement("p");
var ghLink = document.createElement("a");
ghLink.setAttribute("href", "https://github.com/Dechrissen/BanjoSpeedruns");
ghLink.setAttribute("target", "_blank");
var ghText = document.createTextNode("GitHub");
ghLink.appendChild(ghText);
gh.appendChild(ghLink);
var ghLi = document.createElement("li");
ghLi.appendChild(gh);

// add links to footer_list

footer_list.appendChild(legalLi); // legal
footer_list.appendChild(ghLi); // GitHub

// add footer_list to footer
footer.appendChild(footer_list);
