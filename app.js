 const projectList = document.querySelectorAll(".project-list")
 const paragraphList = document.querySelectorAll(".dis-none")





 for(let i = 0;i<projectList.length; i++){

projectList[i].addEventListener("mouseover",function(){
    projectList[i].classList.toggle("add");
    paragraphList[i].style.display = "block";

})

}

for(let i = 0;i<projectList.length; i++){

    projectList[i].addEventListener("mouseout",function(){
        projectList[i].classList.toggle("add");
        paragraphList[i].style.display = "none";
    
    })
    
    }







