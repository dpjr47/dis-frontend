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


