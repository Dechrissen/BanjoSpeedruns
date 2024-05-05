var f = document.getElementsByTagName("footer");
var footer = f[0];


// footer list
var footer_list = document.createElement("ul");
footer_list.setAttribute("style", "line-height: 75%; list-style-type: none;");

// legal page link
var legal = document.createElement("p");
var legalLink = document.createElement("a");
legalLink.setAttribute("href", "/legal");
var legalText = document.createTextNode(" Legal");
// begin font awesoe stuff
var legalLogo = document.createElement("i");
legalLogo.setAttribute("class", "fa fa-gavel");
legalLink.appendChild(legalLogo);
// end font awesome stuff
legalLink.appendChild(legalText);
legal.appendChild(legalLink);
var legalLi = document.createElement("li");
legalLi.appendChild(legal);

// GitHub repo link
var gh = document.createElement("p");
var ghLink = document.createElement("a");
ghLink.setAttribute("href", "https://github.com/Dechrissen/BanjoSpeedruns");
ghLink.setAttribute("target", "_blank");
var ghText = document.createTextNode(" GitHub");
// begin font awesoe stuff
var ghLogo = document.createElement("i");
ghLogo.setAttribute("class", "fa fa-github");
ghLink.appendChild(ghLogo);
// end font awesome stuff
ghLink.appendChild(ghText);
gh.appendChild(ghLink);
var ghLi = document.createElement("li");
ghLi.appendChild(gh);

// BanjoSpeedruns current version number
var ver = document.createElement("p");
var verLink = document.createElement("a");
verLink.setAttribute("href", "/updates/1.3");
var verText = document.createTextNode("BanjoSpeedruns v1.3");
verLink.appendChild(verText);
ver.appendChild(verLink);
var verLi = document.createElement("li");
verLi.appendChild(ver);

// add links to footer_list
footer_list.appendChild(legalLi); // legal
footer_list.appendChild(ghLi); // GitHub
footer_list.appendChild(verLi); // version


// add footer_list to footer
footer.appendChild(footer_list);
