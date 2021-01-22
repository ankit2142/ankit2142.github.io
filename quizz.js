
window.onload=function()
{
   show(0);
}
let Q = [
{
    id:1,
    que:"Which of the following is not the member of class?",
    ans:"B.	Friend function",
    options:["A.	Static function",
    "B.	Friend function",
    "C.	Const function",
    "D.	Virtual function"]

},
{
    id:2,
    que:"Which of the following is not a type of constructor?",
    ans:"B.	Friend constructor",
    options:["A.	Copy constructor",
    "B.	Friend constructor",
    "C.	Default constructor",
    "D.	Parameterized constructor"]

},
{
    id:3,
    que:"Which of the following concepts of OOPS means exposing only necessary information to client?",
    ans:"C.	Data hiding",
    options:["A.	Encapsulation",
    "B.	Abstraction",
    "C.	Data hiding",
    "D.	Data binding"]

},
{
    id:4,
    que:"Which of the following concepts is used to implement late binding?",
    ans:"A.	Virtual function",
    options:["A.	Virtual function",
    "B.	Operator function",
    "C.	Const function",
    "D.	Static function"]

},{
    id:5,
    que:"Which of the following is not a type of inheritance?",
    ans:"C.	Distributive",
    options:["A.	Multiple",
    "B.	Multilevel",
    "C.	Distributive",
    "D.	Hierarchical"]

},
{
    id:6,
    que:"Which of the following term is used for a function defined inside a class?",
    ans:"B.	Member function",
    options:["A.	Member Variable",
    "B.	Member function",
    "C.	Class function",
    "D.	Classic function"]

}
];

function submitform(e)
{
    e.preventDefault();
    let Name=document.forms["welcome_form"]["name"].value;
    sessionStorage.setItem("name",Name);
    location.href="quizQuest.html";

}

let count=0;
let score=0;
function next()
{   
    
    let user_ans=document.querySelector("li.option.active").innerHTML;
    // answer checking
    if(user_ans==Q[count].ans)
      {
        score=score+10;
        console.log(score);
        sessionStorage.setItem("score",score);
      }
     count++;
     if(count==Q.length)
      {
        sessionStorage.setItem("time", `${min} minutes and ${sec} seconds`);
        location.href="finalpage.html";

          return;
      }
    show(count);
}

function show(count)
{
    let question=document.getElementById("Question");
    question.innerHTML =`<h2>Q(${count+1}) ${Q[count].que}</h2>
     <ul class="option_group"> 
                     <li class="option">${Q[count].options[0]}</li>
                     <li class="option">${Q[count].options[1]}</li>
                     <li class="option">${Q[count].options[2]}</li>
                     <li class="option">${Q[count].options[3]}</li>

     </ul>
     `;
     toactive();
     
}

function toactive()
{
    let option=document.querySelectorAll("li.option");
    for(let i=0;i<option.length;i++)
    {
        option[i].onclick=function()
        {
             for(let j=0;j<option.length;j++)
             {
                 if(option[j].classList.contains("active"))
                 {
                     option[j].classList.remove("active");
                 }
             }
             option[i].classList.add("active");
        }
    }
}
// fisrt loop four option per jane ke liye
// second loop me check kiya ki if already user ne option per click kar rakha hai to
// use remove karna hoga
//then user ke click karte hi effect lag jayega
