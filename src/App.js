import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import Question from './question';
import ImageSection from './imageSection';
import InputArea from './inputArea';
import Audio from './audio';


class App extends React.Component{
 constructor(){
  super()
  this.state={
    ans:'',
    recording:'',
    ansf:[],
    recordingf:[]
  }

 }

recorder=(obj)=>{
  this.setState({recording:obj});
 }
 answer=(event)=>{
   this.setState({ans:event.target.value});
  
 }

 onSubmit=()=>{
  console.log('yeah')
  let ans,recording;
  recording=this.state.recording
  ans=this.state.ans;
   this.state.ansf=[...this.state.ansf,ans]
   this.forceUpdate();
   this.state.recordingf=[...this.state.recordingf,recording];
   console.log(this.state.ansf,this.state.recordingf)
 }

render(){

   return (
    <div className="App tc ma2 pa2 ">
       <Particles className='particles'
         params={
                  {
                particles: {
                      number:{
                      value:250,
                      density:{
                      enable:true,
                      value_area:800
                    }
                    }
                  }
                 ,
                repulse: {
                distance: 200,
                duration: 0.4
                },
       
                onhover: {
                enable: true,
                mode:' repulse'
                },
                  interactivity: {
                events: {
                onhover: {
                enable: true,
                mode: 'repulse'
                  }
                }
              }
           }
         }    
        />

       <Question/>
       <ImageSection/>
       <InputArea answ={this.answer}/>
       <Audio recorder={this.recorder} />
       <button onClick={()=>this.onSubmit()}>onSubmit</button>
    </div>
   );
 }
 }


export default App;
