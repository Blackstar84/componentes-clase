import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types'
class App extends React.Component{

    static defaultProps = {
        name: "Cody Default"
    }

    static propTypes = {
        name: PropTypes.string
    }

    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }
    }

    componentDidMount(){
        console.log('Fui Creado!')
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState, this.state)
        console.log('Fui Actualizado!')
    }

    updateCounter = ()=>{
        this.setState({contador: this.state.contador + 1})
    }

  render(){
    console.log(this.props);
        return(
            <div>
                
                <p>Contador: {this.state.contador} </p>
                <button onClick={this.updateCounter }>Sumar</button>                
                {/* <button onClick={()=> this.setState({contador: this.state.contador + 1 }) }>Sumar</button> */}
            </div>
        ) 
    
    /* console.log(this.props);
    return <p>Hola Mundo! </p> */
    
  }
}
/* export default App; */
//render (<App name={2} />);
export default App;