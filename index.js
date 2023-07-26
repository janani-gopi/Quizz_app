const button = document.getElementById("btn")
const userName = document.getElementById("name")
const noOfQuestions = document.getElementById("limit")
const userName_ = document.getElementById("user_name")

button.addEventListener("click", ()=>{
    window.open("http://127.0.0.1:5500/quiz.html")
    localStorage.setItem("name", userName.value)
    localStorage.setItem("limit" , noOfQuestions.value)
    
    
})