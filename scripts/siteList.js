function updateLinks(storedNames) {
  localStorage.setItem("savedSites", JSON.stringify(storedNames));
}

function addSite() {
  var storedNames = JSON.parse(localStorage.getItem("savedSites"));
  var newSite = document.getElementById("newSite").value;
  var newSiteLink = document.getElementById("newSiteLink").value;

  if (newSite.length > 0 && newSiteLink.length) {
    storedNames.push([newSite, newSiteLink]);
    updateLinks(storedNames);
    document.location.reload();
  }
}

function removeSite() {
  var storedNames = JSON.parse(localStorage.getItem("savedSites"));
  console.log(storedNames.length);
  var siteToRm = document.getElementById("removeLink").value;

  for (var i = 0; i < storedNames.length; i++) {
    if (storedNames[i][0] == siteToRm) {
      storedNames.splice(i, 1);
      console.log(storedNames.length);
      document.location.reload();
      break;
    }
  }
  updateLinks(storedNames);
}
//
var storedNames = JSON.parse(localStorage.getItem("savedSites"));
var result = "";
for (var i = 0; i < storedNames.length; i++) {
    result = result + "<a href='" + storedNames[i][1] + "'>"+ storedNames[i][0] + "</a><br>";
}
document.getElementById('siteList').innerHTML = result;
