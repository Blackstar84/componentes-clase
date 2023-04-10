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
  render(){
    console.log(this.props);
    return <p>Hola Mundo! </p>
  }
}
/* export default App; */
render (<App name={2} />);
export default App;