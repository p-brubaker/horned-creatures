import React, { Component } from 'react';
import ImageList from './Components/ImageList.js';
import creatureImages from './horned-creatures';
import './App.css';

class App extends Component {
    state = { keyword: 'chameleon' }
    render() { 
            return ( 
                <>
                <ImageList 
                    creatureImages={creatureImages.filter(
                        (creature) => {
                            return creature.keyword === 'chameleon';
                        }
                    )}
                />
            </> 
        );
    }
}
 
export default App;
