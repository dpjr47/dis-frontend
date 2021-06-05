function teacher()
{
document.getElementById("teacher").style.display="inline";
document.getElementById("student").style.display="none";
document.getElementById("switchbutton2").style.display="inline";
document.getElementById("switchbutton1").style.display="none";

}
function student()
{
document.getElementById("student").style.display="inline";
document.getElementById("teacher").style.display="none";
document.getElementById("switchbutton1").style.display="inline";
document.getElementById("switchbutton2").style.display="none";
}


function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
 }

  