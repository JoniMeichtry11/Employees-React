import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    characters: []
  }

  render() {
    const characters = this.state
    let formShow = false;

    if(this.state.characters.length !== 0){
      formShow = true;
    }

    return (
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <Form handleSubmit={this.handleSubmit}/>
        {formShow? <Table characterData={characters} removeCharacter={this.removeCharacter}/> : <div></div>}      
      </div>
    )
  }

  removeCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }
}

export default App