import React, { Component } from 'react';
import ImageList from './Components/ImageList.js';
import creatures from './horned-creatures';
import CreatureOptions from './Components/CreatureOptions';
import './App.css';

class App extends Component {
    state = { keyword: 'chameleon' }

    upDateSelect = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }

    render() { 
            const options = [...new Set(creatures.map(creature => creature.keyword))];
            return ( 
                <>
                <select name="creature-select" onChange={this.upDateSelect}>
                    <CreatureOptions 
                        options={options}
                    />
                </select>
                <ImageList 
                    creatureImages={creatures.filter(
                        (creature) => {
                            return creature.keyword === this.state.keyword;
                        }
                    )}
                />
            </> 
        );
    }
}
 
export default App;
