import React from'react';
import './App.scss';
import logo from './logo.svg';
import Contact from './components/contact';
import { Login , Register} from './components/login/index';

class App extends  React.Component{
  constructor(props){
    super(props);
    this.state={
      isLogginActive: true,
    }
  }

  

  changeState(){
    const{ isLogginActive } = this.state;
    if(isLogginActive){
      this.rightside.clasList.remove('right');
      this.rightside.clasList.add('left');
    }else{
      this.rightside.clasList.remove('left');
      this.rightside.clasList.add('right');
    }

    this.setState(prevState => ({isLogginActive: !prevState.isLogginActive }));
  }

  render(){
    const{ isLogginActive } = this.state;
    const current = isLogginActive ? 'Register' : 'Login';
    const currenActive = isLogginActive ? 'login' : 'register';
    return(
      <div className="App">
        <div className="login">
          <div className="container">
            {isLogginActive && (<Login containerRef={(ref)=> this.current=ref}/>)}
            {isLogginActive && (<Register containerRef={(ref)=> this.current=ref}/>)}
          </div>
          <RightSide current={current} containerRef={ref => this.rightside = ref} onClick={this.changeState.bind(this)}/>
        </div>
      </div>
    );
  }
}

const RightSide = props =>{
  return (
    <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
}

export default App;
