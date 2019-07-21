var containerNavBar = document.getElementById('containerNavBar');
var containerLinks = document.getElementById('containerLinks');
var collapsible = document.getElementById('collapsible');

function toggleClass(){
  if(containerNavBar.classList.contains('open')){
    containerNavBar.classList.remove('open');
    containerLinks.classList.remove('expandLinks');
    containerNavBar.style.maxHeight = null;
  } else {
    containerNavBar.classList.add('open');
    containerLinks.classList.add('expandLinks');
    containerNavBar.style.maxHeight = containerNavBar.scrollHeight + "px";
  }
}

collapsible.addEventListener("click", toggleClass);