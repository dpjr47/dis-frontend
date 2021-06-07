//date and time
const dateDiv = document.getElementById("clock");

function myDateFunction() {
  const now = new Date();
  const nowStr = now.toLocaleString("en-US");
  dateDiv.innerHTML = nowStr;
}
setInterval(myDateFunction, 1);

//logout-popup

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
  setTimeout("Redirect()", 5000);
}

function Redirect() {
  window.location = "logout.html";
}

//buttons on sidebarmanagement

function mainshow1() {
  document.getElementById("main1").style.display = "inline";
  document.getElementById("main2").style.display = "none";
  document.getElementById("main3").style.display = "none";
}
function mainshow2() {
  document.getElementById("main1").style.display = "none";
  document.getElementById("main2").style.display = "inline";
  document.getElementById("main3").style.display = "none";
}
function mainshow3() {
  document.getElementById("main1").style.display = "none";
  document.getElementById("main2").style.display = "none";
  document.getElementById("main3").style.display = "inline";
}

//selectdropdown

var libraryObject = {
  "Civil Engineering": {
    "Scheme 2015": [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
    "Scheme 2019": [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
  },
  "Computer Science & Engineering": {
    "Scheme 2015": [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
    "Scheme 2019": [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
  },
  "Electronics & Communication Engineering": {
    "Scheme 2015": [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
    "Scheme 2019": [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
  },
  "Electrical & Electronics Engineering": {
    "Scheme 2015": [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
    "Scheme 2019": [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
  },
  "Information Technology": {
    "Scheme 2015": [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
    "Scheme 2019": [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
  },
  "Mechanical Engineering": {
    "Scheme 2015": [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
    "Scheme 2019": [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
  },
  "Safety & Fire Engineering": {
    "Scheme 2015": [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
    "Scheme 2019": [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
  },
};

window.onload = function () {
  var branchSel = document.getElementById("branch");
  var schemeSel = document.getElementById("scheme");
  var semesterSel = document.getElementById("semester");
  for (var x in libraryObject) {
    branchSel.options[branchSel.options.length] = new Option(x, x);
  }
  branchSel.onchange = function () {
    semesterSel.length = 1;
    schemeSel.length = 1;
    for (var y in libraryObject[this.value]) {
      schemeSel.options[schemeSel.options.length] = new Option(y, y);
    }
  };
  schemeSel.onchange = function () {
    semesterSel.length = 1;
    var z = libraryObject[branchSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      semesterSel.options[semesterSel.options.length] = new Option(z[i], z[i]);
    }
  };

  var branchSela = document.getElementById("brancha");
  var schemeSela = document.getElementById("schemea");
  var semesterSela = document.getElementById("semestera");
  for (var x in libraryObject) {
    branchSela.options[branchSela.options.length] = new Option(x, x);
  }
  branchSela.onchange = function () {
    semesterSela.length = 1;
    schemeSela.length = 1;
    for (var y in libraryObject[this.value]) {
      schemeSela.options[schemeSela.options.length] = new Option(y, y);
    }
  };
  schemeSela.onchange = function () {
    semesterSela.length = 1;
    var z = libraryObject[branchSela.value][this.value];
    for (var i = 0; i < z.length; i++) {
      semesterSela.options[semesterSela.options.length] = new Option(
        z[i],
        z[i]
      );
    }
  };

  var branchSelb = document.getElementById("branchb");
  var schemeSelb = document.getElementById("schemeb");
  var semesterSelb = document.getElementById("semesterb");
  for (var x in libraryObject) {
    branchSelb.options[branchSelb.options.length] = new Option(x, x);
  }
  branchSelb.onchange = function () {
    semesterSelb.length = 1;
    schemeSelb.length = 1;
    for (var y in libraryObject[this.value]) {
      schemeSelb.options[schemeSelb.options.length] = new Option(y, y);
    }
  };
  schemeSelb.onchange = function () {
    semesterSelb.length = 1;
    var z = libraryObject[branchSelb.value][this.value];
    for (var i = 0; i < z.length; i++) {
      semesterSelb.options[semesterSelb.options.length] = new Option(
        z[i],
        z[i]
      );
    }
  };
};
