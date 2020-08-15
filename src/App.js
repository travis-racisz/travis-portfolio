import React, {useEffect} from 'react';
import "./styles.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import nobscooking from "./images/nobscookinghighres.gif"
import rockthevote from "./images/rockthevotehighres.gif"
import opvet from "./images/opvetpayment.gif"
import { WindupChildren, Pause, Pace } from "windups";
import Contactform from "./Contactform.js"



function App() {

  


  useEffect(() => { 
    Aos.init({duration: 1000, offset: 200})
  }, [])
 

  return (
    <div >
      <div>
        
        <div className = "intro-box">
          <WindupChildren>
            <Pace ms = {80}>
            <h1> 
              {
                "Travis Racisz"  
              } 
            </h1>
            </Pace>
            <Pause ms={600} />
            <h1>
              <Pace ms={100}>
              {
                " Full Stack Web Developer"
              }
              </Pace>
            </h1>
            <Pause ms={200} />
            {/* <p className = "review-text">
              <Pace ms={20} />
              {
                `"Wow honey that looks very good." -Mom`
              }
            </p> */}
            


            
          <div style = {{borderBottom: "1px solid ghostwhite"}}> 
            <a className = "links"  href="#projects">Projects</a><a className = "links" href = "#contact">Contact</a><a className = "links" href = "https://github.com/travis-racisz">Github</a>
          </div>
         
          </WindupChildren>
          </div>
        <div className = "container" id = "projects" style = {{backgroundColor: "#6d6866"}}>
          <div className = "title-text" data-aos = "fade-up-left"><h1>No BS Cooking</h1></div>
          <img className = "first-project left-div"  data-aos = "fade-right" alt="No BS Cooking" src={nobscooking}></img>
          <div className = "first-project left-div-description"><p>No BS Cooking is a recipe website that is designed for ease of use. There are no stories attached to the recipes only the ingredients and the instructions. The features include allowing the user to make an account to save their favorite recipes. The user can search for recipes by diet, ingredients, or they can exclude ingredients. The front end was built using React, React-Routing, and the spoonacular API. The backend was built using Express and Mongoose. 
          
 </p></div>
            
        </div>
        <div className = "container" style = {{backgroundColor: "#b7a56c"}}>
        <div className = "title-text" data-aos = "fade-up-right"><h1>Rock the Vote</h1></div>
          <div className = "first-project left-div-description"><p> Rock the Vote is a light social media mock project. It allows the user to log in using JSON Web Tokens. They are then routed to their profile page where they can make new posts or delete/edit the posts that already exist. The User and their posts are stored in MongoDB Atlas. On the public page the user can see other posts that people have made and they can like or comment on each post. The posts are sorted by likes. All routing was done through Express. </p></div>
          <img className = "first-project right-div" src = {rockthevote} alt = "Rock the Vote Gif"  data-aos = "fade-left"></img>
        </div>
        <div className = "container" style = {{backgroundColor: "#818656"}}>
        <div className = "title-text" data-aos = "fade-up-right" ><h1>OP Veteran Registraion Page</h1></div>
          <img className = "first-project right-div" src = {opvet} alt = "Rock the Vote Gif"  data-aos = "fade-right"></img>
          <div className = "first-project left-div-description"><p>Op Veteran is a registration page that was made for the OP Veteran Festival. This allows vendors to register a booth at the event. Features include allowing the vendors to login with Facebook or Google through Google Firebase. Allowing them to pick different levels of donations to the festival, and handling the payments with the square payment form. </p> </div>
        </div>
        {/* <div className = "container">
          <div className = "first-project left-div"  data-aos = "fade-right">Test</div>
          <div className = "first-project right-div"  data-aos = "fade-left">Box 3</div>
        </div> */}
      </div> 
      <div>
        <Contactform />
      </div>
    </div>
  );
}

export default App;
