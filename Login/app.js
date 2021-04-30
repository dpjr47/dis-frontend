const student_login_btn = document.querySelector("#student-login-btn")
const teacher_login_btn = document.querySelector("#teacher-login-btn")
const box = document.querySelector(".box");

teacher_login_btn.addEventListener('click', () =>{
  box.classList.add("teacher-login-mode");
});

student_login_btn.addEventListener('click', () =>{
  box.classList.remove("teacher-login-mode");
});
