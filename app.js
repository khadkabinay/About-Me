      const divList         = document.querySelectorAll(".project-list");
      const paragraphList   = document.querySelectorAll(".dis-none");
      const headerUl        = document.querySelector("header");
      const greetElement    = document.getElementById("greet");
      const followBtn       = document.getElementById("follow");
      const listOfMonth     = ["Jan","Feb","March","April","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
      const greetedColors   = ["blue","red","yellow","black"]
      let newDate           = new Date()
      let hours             = newDate.getHours()
      
        



      // generate current date
        function dateGenerator(){
          let fullDate = [newDate.getMonth(),newDate.getDate(),newDate.getFullYear()]
          return `${listOfMonth[fullDate[0]]}-${fullDate[1]}-${fullDate[2]}`
      }




      // add an element into dom
      function showDate(){
        let dateElm = document.createElement("li")
        dateElm.classList.add("addDate")
        dateElm.textContent = `${dateGenerator()}`
        headerUl.appendChild(dateElm)
        
      }


      showDate()


      // greet the users 

      function greeting(hours){
          if(hours >= 6 && hours < 12){
            return "Good Morning !"
          }else if (hours >= 12 && hours < 17){
            return "Good Afternoon !"
          }else if(hours >= 17 && hours < 20){
            return "Good Evening !"
          }else if(hours >= 20 && hours < 24 || hours >= 1 && hours < 6 ){
            return "Good Night !"
          }
        
        }



      
        // insert text into DOM 

        function showGreet(){
            let greetText = `${greeting(hours)}`
            greetElement.textContent = greetText
            greetElement.setAttribute("style", "color: blue;")

        }
        showGreet()



      

        // change the color of greeting messege and date accordance with time
      function greetWithColor(){
        
        let  dateElement = document.querySelector(".addDate")
        
          if(greetElement.textContent === "Good Morning !"){
            greetElement.style.color = greetedColors[0]
            dateElement.style.color = greetedColors[0]

            

          }else if (greetElement.textContent ==="Good Afternoon !"){
            greetElement.style.color = greetedColors[1]
            dateElement.style.color = greetedColors[1]


          } else if(greetElement.textContent === "Good Evening !"){
            greetElement.style.color= greetedColors[2]
            dateElement.style.color = greetedColors[2]


          } else if (greetElement.textContent === "Good Night !"){
              greetElement.style.color = greetedColors[3]
              dateElement.style.color = greetedColors[3]

          }

        }

        greetWithColor()
      
        


        // change color for follow button
        function followedMe(){
            followBtn.style.backgroundColor = "blue"
            followBtn.style.color= "white"
            
        }

        followedMe()



        // add a class while scrolling 
      for(let i = 0;i<divList.length; i++){

        document.addEventListener("scroll",function(){
            divList[i].classList.add("add");
            paragraphList[i].style.display = "block";

        })

      }







