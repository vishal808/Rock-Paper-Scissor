import logo from './logo.svg';
import paper from './Assest/paper.png';
import rock from './Assest/rock.jpg';
import scissor from './Assest/scissor.png';
import blank from './Assest/Blank.png';
import './App.css';
import React, {Component} from "react";
var _pScore = 0;
var _cScore = 0;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {pScore:0,cScore:0};
  }

 ClickHandle =(action)=>{
  console.log(action); 
  var choise;
  var pic = document.getElementById('playerImg');
  if (action === 'paper'){
    pic.src = paper;
    choise = 0;
  }
  if (action === 'rock'){
    pic.src = rock;
    choise = 1;
  }
  if (action === 'scissor'){
    pic.src = scissor;
    choise = 2;
  }
  var compChoise = Math.floor(Math.random() *3);
  var compPic = document.getElementById('coumpterImg');
  if (compChoise === 0){
    compPic.src = paper;
  }
  if (compChoise === 1){
    compPic.src = rock;
  }
  if (compChoise === 2){
    compPic.src = scissor;
  }
  if(choise===0){
    if(compChoise===2)
    {
      
      this.setState({
        cScore:this.state.cScore+1
      })
    }
    if(compChoise===1){
      this.setState({
        pScore:this.state.pScore+1
      })
    }
  }

  if(choise===1){
    if(compChoise===0)
    {
      this.setState({
        cScore:this.state.cScore+1
      })
    }
    if(compChoise===2){
      this.setState({
        pScore:this.state.pScore+1
      })
    }
  }

  if(choise===2){
    if(compChoise===1)
    {
      
      this.setState({
        cScore:this.state.cScore+1
      })
    }
    if(compChoise===0){
      
      this.setState({
        pScore:this.state.pScore+1
      })
    }
  }
}


  
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Rock Paper Scissor
        </p>
        </header>
        <div className='gameContainer'>
          <div className='Player'>
            <p>You</p>
            <img src={blank} id='playerImg' className='App-logo'></img>
            <p id='playerScore'>Score:{this.state.pScore}</p>
          </div>
          <div className='Coumpter'>
          <p>Computer</p>
          <img src={blank} id='coumpterImg' className='App-logo'></img>
          <p id='computerScore'>Score:{this.state.cScore}</p>
          </div>
        </div>
          <div className='selectContainer'>
            <img src={paper} className='selectImg' onClick={()=>this.ClickHandle('paper')}></img>
            <img src={rock} className='selectImg' onClick={()=>this.ClickHandle('rock')}></img>
            <img src={scissor} className='selectImg' onClick={()=>this.ClickHandle('scissor')}></img>
          </div>
    </div>
  );
}
}
export default App;
