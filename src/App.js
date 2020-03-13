import React from 'react';
import './App.css';

function RenderJoke (props) {
  console.log(props);
  return (
      <div>
        {props.jokes.map(el=><li key={el.id}>{el.joke}</li>)}
      </div>
  )
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      jokes : []
    }
  }

  getJoke(){
    const link = 'https://api.icndb.com/jokes/random/';
    fetch(link).then(data => data.json()).then(d => {
      const jokes = this.state.jokes.slice();
      jokes.unshift(d.value);
      console.log(jokes);
      this.setState({ jokes });
    });
  }
  render(){
    return (
        <div className='container'>
          <div>
            <button className='gen' onClick={()=>this.getJoke()}>Next joke</button>
          </div>
          <ul>
            <RenderJoke jokes={this.state.jokes}/>
          </ul>
        </div>
    );
  }
}

export default App;

