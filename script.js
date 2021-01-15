function openNav(){
  document.getElementById("container-sidenav").style.width = "250px";
}
function closeNav(){
  document.getElementById("container-sidenav").style.width = "0";
}
function dropFunction(){
  document.getElementById("dropdownHold").classList.toggle("show");
}

window.onclick = function(e){
  if (!e.target.matches('.dropdown-button')){
  var dropdownHold = document.getElementById("dropdownHold");
    if (dropdownHold.classList.contains('show')){
      dropdownHold.classList.remove('show');
    }
  }
}

function postPopup(){
  window.alert("Silahkan masuk terlebih dahulu!");
  window.location.href = "login.html";
  };

function categoryPopup(){
  window.alert("Sedang tahap proses");
  };

function replyPopup(){
  window.alert("Sedang tahap proses");
  };