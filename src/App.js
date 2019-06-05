import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/home';


class App extends Component {
  constructor(){
    super()
    this.state={
      headerText: "Header",
    }
  }

    printIt(){
      alert('i am passed here')
    }

    onChangeHeader(newName){
      this.setState({
        headerText:newName
      })

    }

  render() {
    let user={
      name:'manoj kumar',
      hobbies:['Cricket','football','Story Writing']
    }

    return (
      <div className="App">
        <header className="App-header">
         
          <p><Header  headerText={this.state.headerText}  /></p>

        </header>

        <p><Home 
             name={'mano'} 
             age={27} 
             user={user}  
             print={this.printIt}  
             changeText={this.onChangeHeader.bind(this)}
             initialName={this.state.headerText}
             
             /></p>
      </div>
    );
  }
}
export default App;
