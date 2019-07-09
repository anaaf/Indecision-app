import React from 'react';
import {Component} from 'react'  
import Header from './Header'
import Options from './Options'
import Action from './Action'
import AddOption from './AddOption'
// import logo from './logo.svg';


class IndecisionApp extends Component {
  constructor(props){
    super(props)
    this.hasOption = this.hasOption.bind(this)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
    options: [],
    title : 'Indecision',
    subTitle : 'Put Your life in the hands in the hands of computer'
  }
  }

  componentDidMount() {
    const json = localStorage.getItem('options')
    const options = JSON.parse(json)
    if(options){
      this.setState(() =>({options}))
      console.log('fetching data')
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const jsonOptions = JSON.stringify(this.state.options)
    if(prevState.options.length !== this.state.options.length){
      localStorage.setItem('options', jsonOptions)
      console.log('saving data')
    }
  }
 
  hasOption() {
    const options = this.state.options
    return options != 0
  }

  handleDeleteOption(option) {
    const optionA = option
    const newOptions = this.state.options.filter((optionB) => {
      return optionB !== optionA 
    }
    )
    this.setState(() => ({
      options: newOptions
    }))

  }

  handleDeleteOptions() {
    this.setState( () =>( { options : [] } ) )  
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  handleAddOption(option) {
    if(!option){
      return 'Enter a valid option'
    } else if(this.state.options.indexOf(option) > -1) {
      return 'Enter a unique option'
    }
    this.setState((prevState) => ({ options : prevState.options.concat(option)}))
  }

  render() {
    return (
      <div>
      <Header title = {this.state.title} subTitle = {this.state.subTitle} />
      <Action 
      handlePick={this.handlePick} 
      hasOption = {this.hasOption} 
        />
      <Options options = {this.state.options}
       handleDeleteOptions = {this.handleDeleteOptions}
       handleDeleteOption = {this.handleDeleteOption}
       />
      <AddOption 
      handleAddOption = {this.handleAddOption}
      />
      </div>
    )
  }
}

// App.defaultProps = {
//   options: []
// }

export default IndecisionApp;


