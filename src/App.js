import React,{useState} from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
var cardstyle1={
  position:'relative',
  left:'180px',
  width:'30%',
  margin:'40px'
}
var cardstyle2={
  position:'relative',
  left:'800px',
  width:'30%',
  margin:'40px'
}
var cardstyle3={
  position:'relative',
  left:'180px',
  width:'30%',
  margin:'40px'
}
var cardstyle4={
  position:'relative',
  left:'800px',
  width:'30%',
  margin:'40px'
}
var cardstyle5={
  position:'relative',
  left:'180px',
  width:'30%',
  margin:'40px'
}

class App extends React.Component{
 constructor(){
  super()
  this.state={

  }

 }

render(){

   return (
    <div className="">
     <h1 className="tc">CODING FOR KIDS</h1>
     <Card style={cardstyle1} >
      <h1>What is coding?</h1>
      <p>Coding helps kids develop problem solviing skills such as preservance,trail,and error and understanding of cause and effect.They use analytical thinking and reasoning skills,and math and literacy skills.coding challenges children to think ceativity and to pursue innovative solutions.</p>
     </Card>
     <h1 className="tc">WHY CODING FOR KIDS?</h1>
     <Card style={cardstyle2}>
      <p>Coding helps kids develop problem solviing skills such as preservance,trail,and error and understanding of cause and effect.They use analytical thinking and reasoning skills,and math and literacy skills.coding challenges children to think ceativity and to pursue innovative solutions.</p>
     </Card>
     <h1 className="tc">KIDS WILL LOVE LEARNING CODE WITH FLAMINGO</h1>
     <div className="pl7 pr7 flex justify-between  tc ">
       <div>
       <h5 className="">READY TO GO COURSES</h5>
       <p>With Flamingo and it's instructors, anyone can learn coding</p>
       </div>
       <div>
       <h5 className=" ">REAL CODING LANGUAGES</h5>
       <p>Flamingo's courses teach text-based coding so students learn to program like a real developer</p>
       </div>
       <div>
       <h5 className=" ">REWARD-BASED LEARNING</h5>
       <p>Kids learn coding in an engaging and rewarding environments with Flamingo and will love to learn</p>
       </div>
     </div>
     <h1 className="tc">ALL YOU NEED IN ONE PLACE</h1>
     <Card style={cardstyle3}>
      <h2>Classroom Room Management</h2>
      <p>Equipped with student solutions,automatic grading,and curriculum management,Flamingo's user dashboard allows you to effortlessly review your performances concerning other kids .Fully-detailed coding lessons will help you more easily understand the concepts through engaging quizzes and assignments</p>
     </Card>

     <Card style={cardstyle4}>
      <h1>Professional developement</h1>
      <p>Whether you just starting or are ready to learn advanced courses,Flamingo live sessions,video tutorials,quizzes, and assignments will guide you every step of the way. </p>
     </Card>

     <Card style={cardstyle5}>
      <h1>Standards Alignment</h1>
      <p>Flamingo places a high emphasis on content that aligns to today's standards.With online chanllenges and assignments,kids not only develop coding skills, but also computational thinking, collaboration, reasoning and logic</p>
     </Card>  
     <h1 className="tc">YOUR KIDS WILL GAIN KNOWLEDGE IN</h1>
     <div className="pl7 pr7 flex justify-between  tc ">
       <h5 className="">COMPUTATIONAL THINKING</h5>
       <h5 className=" ">CREATIVITY</h5>
       <h5 className=" ">REASONING</h5>
       <h5 className="">LOGIC</h5>
     </div>
     <Card><footer className="tc ">Copyright c 2020 Flamingo courses LLP.All rights reserved</footer></Card>
    </div>
   );
 }
 }


export default App;
