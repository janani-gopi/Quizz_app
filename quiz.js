const TOKEN = "WZRw8HthLEGdsoi2LnZRVTsil00QkP7rh16Mla7h"


const userName_ = document.getElementById("user_name")
const questions_display = document.getElementById("questions")
const options_display = document.getElementById("options")
const name_display = localStorage.getItem("name")
const limit_display = localStorage.getItem("limit")
const submitAllAnswers = document.getElementById("submit_all_answers")
const score_display = document.getElementById("score")



userName_.innerText = `Welcome ${name_display}\n
                       No of questions displayed : ${limit_display}`

async function gettingQuestions(){
   let score = 0
   const URL = `https://quizapi.io/api/v1/questions?apiKey=${TOKEN}&category=sql&difficulty=Easy&limit=${limit_display}`
   const data = await fetch(URL).then(res => res.json()).catch(err => console.log("error: ",err))
   console.log(data)
   data.map((each_data) => {
    const options = each_data.answers   
    console.log("options:" , options)
    const options_array = Object.values(options) 
    console.log("options_array:",options_array)                            
       questions_display.innerHTML += `<p>${each_data.question}</p>
                                     ${options_array.map(option => {
                                       console.log("each_option:",option)
                                       
                                       if(option != null){
                                         const value = option.split(" ").join("")
                                         console.log("space_removed:", value)
                                         return `<input type="radio"  value=${value} name=${each_data.id}/><label>${option == null ? "" : option}</label><br>`
   }})}`

      const answer = options[each_data.correct_answer]                           

       submitAllAnswers.addEventListener("click", ()=>{
         const ele = document.getElementsByName(`${each_data.id}/`)
         for (i = 0; i < ele.length; i++) {
               if (ele[i].checked){ 
                  const correct_answer = answer.split(" ").join("")
                  const selected_answer = ele[i].value
                  console.log("The correct answer:",correct_answer)
                  console.log("selected answer:",selected_answer)  
                  if(correct_answer == selected_answer){
                     console.log("correct")
                     score = score + 1
                     score_display.innerText = score
                     console.log("score_update:", score)
                     }
                  else(console.log("wrong"))
                 }                    
         
               }})
                                     
   })
  
}


gettingQuestions()

