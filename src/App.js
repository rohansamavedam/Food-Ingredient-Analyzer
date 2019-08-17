import React, {Component} from 'react';
import Clarifai from 'clarifai';
import ProgressBar from './components/ProgressBar/ProgressBar'
import ImageDisplay from './components/ImageDisplay/ImageDisplay'
import ImageForm from './components/ImageForm/ImageForm'
import ContentDisplay from './components/ContentDisplay/ContentDisplay'
import MatchedContentDisplay from './components/MatchedContentDisplay/MatchedContentDisplay'
import './App.css';

const app = new Clarifai.App({
  apiKey: '5a6c66eeeebc4fe9bfbe9fe32a438309'
 });

 const userContents = ['gum', 'beef', 'mango', 'chickpeas', 'pickel']

class App extends Component{
  constructor(){
    super()
    this.state = {
      color: '',
      value: 0,
      input: '',
      imageUrl: '',
      contents: [],
      matchedContents: [],
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onMatch = () => {
    this.state.contents.forEach((item) => {
      if(userContents.includes(item.name)){
        this.setState({matchedContents: [...this.state.matchedContents, item]})
      }
    })

  }

  matchPercentageCalc = () => {
    let sum = 0;
    for(let i = 0; i < this.state.matchedContents.length; i++){
      sum = sum + this.state.matchedContents[i].value
    }
    const average = sum/this.state.matchedContents.length
    this.setState({value: average})
  }

  onButtonSubmit = () => {
      this.setState({imageUrl: this.state.input})

      app.models.predict(Clarifai.FOOD_MODEL, this.state.input).then((response) => {
        this.setState({contents: response.outputs[0].data.concepts})
        this.onMatch()
        console.log(this.state.matchedContents)
        this.matchPercentageCalc()
      },
      function(err) {
        alert('Please enter a valid image URL ' + err)
      }
    );

  }

  onClearSubmit = () => {
    this.setState({value: 0})
    this.setState({input: ''})
    this.setState({imageUrl: ''})
    this.setState({contents: []})
    this.setState({matchedContents: []})
    document.getElementById("myForm").reset(); 
  }

  render(){
    const { color, value, imageUrl, contents, matchedContents } = this.state

    return (
      <div className="App">
        <h1>Allergic Ingredient Analyzer</h1>
        <ImageForm onInputChange = { this.onInputChange }  onButtonSubmit = { this.onButtonSubmit } onClearSubmit = { this.onClearSubmit } />
          <br/>
        <div className="container">
          <div className="row">
            <div className="col center tc">
              <ImageDisplay imageUrl = {imageUrl}/>
            </div>
            <div className="col tc">
              <ProgressBar percentage={(value*100).toFixed(2)} color={color}/>
              <br/>
              <MatchedContentDisplay matchedContents = {matchedContents}/>
            </div>
          </div>
        </div>

        <div className="container center tc">
          <ContentDisplay contents = { contents } />
        </div>
        

        
      </div>
    );
  }

}

export default App;

//Colors: Red, Yellow, Green