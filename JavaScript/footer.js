var f = document.getElementsByTagName("footer");
var footer = f[0];

var legal = document.createElement("p");
var legalLink = document.createElement("a");
legalLink.setAttribute("href", "./legal.html");
var legalText = document.createTextNode("Legal");
legalLink.appendChild(legalText);
legal.appendChild(legalLink);
// add to footer
footer.appendChild(legal);
