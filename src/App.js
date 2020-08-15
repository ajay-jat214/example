import React,{useState} from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

var cardstyle={
 height:'200px',
 width:'auto',
 margin:'2px'
}
var card={
 height:'200px',
}
export default class App extends React.Component{
render(){

   return (
    <div className="">
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    >
    <Grid item xs={9}>

     <h1 className="tc pb4">CODING FOR KIDS</h1>
     <Card style={card}>
     <div className="flex flex-row">
     <Card style={cardstyle} >
      <h1>What is coding?</h1>
      <p>Coding helps kids develop problem solviing skills such as preservance,trail,and error and understanding of cause and effect.They use analytical thinking and reasoning skills,and math and literacy skills.coding challenges children to think ceativity and to pursue innovative solutions.</p>
     </Card>

      <div className="cf ">
        <img class="bottom" src={"/assets/coding.jpg"} alt="hi er" height="200px" width="auto"/>
        <img class="top" src={"/assets/coding5.jpg"} alt="hi"  height="200px" width="auto"/>
      </div>
         
     </div>
     </Card>

     <h1 className="tc pt4">WHY CODING FOR KIDS?</h1>
     
     <Card>
     <div className="flex items-center pt4">
     <img src={"/assets/coding5.jpg"} alt="why coding for kids" height="190px" width="360px"/>
     <Card style={cardstyle}>
      <p>Coding helps kids develop problem solviing skills such as preservance,trail,and error and understanding of cause and effect.They use analytical thinking and reasoning skills,and math and literacy skills.coding challenges children to think ceativity and to pursue innovative solutions.</p>
     </Card>
     </div>
     </Card>

     <h1 className="tc pt4 pb4">KIDS WILL LOVE LEARNING CODE WITH FLAMINGO</h1>

     <Card>
     <div className=" flex justify-between  tc pointer">
       <div>
       <img src={"/assets/courses.png"} className="br-100" height="100px" width="100px"/>
       <h5 className="">READY TO GO COURSES</h5>
       <p>With Flamingo and it's instructors, anyone can learn coding</p>
       </div>
       <div>
       <img src={"/assets/clang.jpg"} className="br-100" height="100px" width="100px"/>
       <h5 className=" ">REAL CODING LANGUAGES</h5>
       <p>Flamingo's courses teach text-based coding so students learn to program like a real developer</p>
       </div>
       <div>
       <img src={"/assets/rewards.jpg"} className="br-100" height="100px" width="100px"/>
       <h5 className=" ">REWARD-BASED LEARNING</h5>

       <p>Kids learn coding in an engaging and rewarding environments with Flamingo and will love to learn</p>
       </div>
     </div>
     </Card>

     <h1 className="tc pt4 pb4">ALL YOU NEED IN ONE PLACE</h1>
     
     <div className="mb6">
     <Card>
     <div className="flex flex-row ">
     <Card style={cardstyle}>
      <h2>Classroom Room Management</h2>
      <p>Equipped with student solutions,automatic grading,and curriculum management,Flamingo's user dashboard allows you to effortlessly review your performances concerning other kids .Fully-detailed coding lessons will help you more easily understand the concepts through engaging quizzes and assignments</p>
     </Card>
     <img src={"/assets/classroommanagement.jpg"}/>
    
     </div>
     </Card>
     </div>
     
     <div className="mb6">
     <Card>
     <div className="flex flex-row">
     <img src={"/assets/pd.jpg"}/>
     <Card style={cardstyle}>
      <h1>Professional developement</h1>
      <p>Whether you just starting or are ready to learn advanced courses,Flamingo live sessions,video tutorials,quizzes, and assignments will guide you every step of the way. </p>
     </Card>
     </div>
     </Card>
     </div>

     <div className="mb6">
     <Card>
     <div className="flex flex-row">
     <Card style={cardstyle}>
      <h1>Standards Alignment</h1>
      <p>Flamingo places a high emphasis on content that aligns to today's standards.With online chanllenges and assignments,kids not only develop coding skills, but also computational thinking, collaboration, reasoning and logic</p>
     </Card>
     <img src={"/assets/coding2.jpg"}/>
     </div>
     </Card>
     </div>

     <h1 className="tc">YOUR KIDS WILL GAIN KNOWLEDGE IN</h1>
     <Card>
     <div className=" flex justify-between  tc pointer">
       <div><img src={"/assets/cl.jpg"} className="br-100" height='100px' width="100px"/><h5 className="">COMPUTATIONAL THINKING</h5></div>
       <div><img src={"/assets/creativity.png"}  className="br-100" height='100px' width="100px"/><h5 className=" ">CREATIVITY</h5></div>
       <div><img src={"/assets/mr.png"}  className="br-100" height='100px' width="100px"/><h5 className=" ">REASONING</h5></div>
       <div><img src={"/assets/logic.png"}  className="br-100" height='100px' width="100px"/><h5 className="">LOGIC</h5></div>
     </div>
     </Card>

    </Grid>
    </Grid>


  <Grid >
  <footer >
    <div className="box links">
      <h2>Useful Links</h2>
      <a href="#">Terms and Conditions</a> 
      <a href="#">Privacy Policy</a>
      <a href="#">Contact</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
    </div>   
    <div class="box social">
      <h2>Follow Us On Social Media</h2>
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-youtube"></a>
      <a href="#" class="fa fa-instagram"></a>
      <hr class="hr"/>
      <p id="copyright">&copy; 2020 Made by AntonGeorge</p>
    </div>
    <div class="box subscribe">
      <h2>Subscribe To Our Newsletter</h2>
      <form action="submit">
        <input type="email" required placeholder="Your email here..." />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </footer>
  </Grid>

    </div>
   );
 }
 }