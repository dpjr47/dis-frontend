// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
var ctxL = document.getElementById("lineChart").getContext('2d');
  var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
      labels: ["Jan-Mar", "Apr-Jun", "Jul-Sep", "Oct-Dec"],
      datasets: [{
          label: "CE",
          data: [81, 56, 55, 40],
          backgroundColor: [
            'rgba(0, 0, 0, 0)',
          ],
          borderColor: [
            'rgb(255, 0, 0)',
          ],
          borderWidth: 2
        },
        {
          label: "CSE",
          data: [28, 48, 40, 90],
          backgroundColor: [
            'rgba(0, 0, 0, 0)',
          ],
          borderColor: [
            'rgb(0,0,255)',
          ],
          borderWidth: 2
        },

        {
          label: "EC",
          data: [40, 25, 55, 40],
          backgroundColor: [
            'rgba(0, 0, 0, 0)',
          ],
          borderColor: [
            'rgb(255,0,255)',
          ],
          borderWidth: 2
        },
        {
          label: "EEE",
          data: [40, 25, 48, 52],
          backgroundColor: [
            'rgba(0, 0, 0, 0)',
          ],
          borderColor: [
            'rgb(255,165,0)',
          ],
          borderWidth: 2
        },
        {
          label: "IT",
          data: [10, 78, 40, 50],
          backgroundColor: [
            'rgba(0, 0, 0, 0)',
          ],
          borderColor: [
            'rgb(0,128,0)',
          ],
          borderWidth: 2
        },

        {
          label: "ME",
          data: [8, 35, 20, 26],
          backgroundColor: [
            'rgba(0, 0, 0, 0)',
          ],
          borderColor: [
            'rgb(128,128,0)',
          ],
          borderWidth: 2
        },

        {
          label: "SF",
          data: [33, 49, 75, 50],
          backgroundColor: [
            'rgba(0, 0, 0, 0)',
          ],
          borderColor: [
            'rgb(112,128,144)',
          ],
          borderWidth: 2
        }

      ]
    },
    options: {
      responsive: true
    }
  });
  chart.render();

// Sidebar Toggle Codes;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar_responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar_responsive");
    sidebarOpen = false;
  }
}

//logout-popup

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
  setTimeout('Redirect()', 2000);  
}

function Redirect() 
  {  
      window.location="logout.html"; 
  } 


//buttons on admin management

function sh1()
{
  document.getElementById("main1").style.display="inline";
  document.getElementById("main2").style.display="none";
  document.getElementById("main3").style.sidebar="none";
}
function sh2()
{
  document.getElementById("main2").style.display="inline";
  document.getElementById("main1").style.display="none";
  document.getElementById("main3").style.sidebar="none";
}
function sh3()
{
  document.getElementById("main3").style.display="inline";
  document.getElementById("main1").style.display="none";
  document.getElementById("main2").style.sidebar="none";
}


function show_hide1()
{
document.getElementById("one").style.display="inline";
document.getElementById("two").style.display="none";
document.getElementById("three").style.display="none";
document.getElementById("four").style.display="none";

}

function show_hide2()
{
document.getElementById("one").style.display="none";
document.getElementById("two").style.display="inline";
document.getElementById("three").style.display="none";
document.getElementById("four").style.display="none";
}

function show_hide3()
{
document.getElementById("one").style.display="none";
document.getElementById("two").style.display="none";
document.getElementById("three").style.display="inline";
document.getElementById("four").style.display="none";
}

function show_hide4()
{
document.getElementById("one").style.display="none";
document.getElementById("two").style.display="none";
document.getElementById("three").style.display="none";
document.getElementById("four").style.display="inline";
}