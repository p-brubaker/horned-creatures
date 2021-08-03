import React, { Component } from 'react';
import ImageList from './Components/ImageList.js';
import creatureImages from './horned-creatures';
import './App.css';

class App extends Component {
    state = {  }
    render() { 
            return ( 
                <>
                <ImageList 
                    data={creatureImages}
                />
            </> 
        );
    }
}
 
export default App;
