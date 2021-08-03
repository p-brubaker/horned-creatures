import React, { Component } from 'react';
import ImageList from './Components/ImageList.js';
import creatures from './horned-creatures';
import CreatureOptions from './Components/CreatureOptions';
import './App.css';

class App extends Component {
    state = { 
                keyword: false,
                numHorns: false
            }

    updateKeyword = (e) => {
        this.setState({
            keyword: e.target.value,
            numHorns: this.state.numHorns
        })
    }

    updateHorns = (e) => {
        this.setState({
            keyword: this.state.keyword,
            numHorns: +e.target.value
        })
    }

    handleRemoveFilters = () => {
        this.setState({
            keyword: false,
            numHorns: false
        })
    }

    render() { 
            const options = [...new Set(creatures.map(creature => creature.keyword))];
            return ( 
                <>
                <select name="creature-select" onChange={this.updateKeyword}>
                    <CreatureOptions 
                        options={options}
                    />
                </select>
                <select name="horn-select" onChange={this.updateHorns}>
                    <CreatureOptions
                        options={[1, 2, 3, 100]}
                    />
                </select>
                <button onClick={this.handleRemoveFilters}>Remove Filters</button>
                <ImageList 
                    creatureImages={creatures.filter(
                        (creature) => {
                            return this.state.keyword ? creature.keyword === this.state.keyword : true;
                        }).filter(
                        (creature) => {
                            return this.state.numHorns ? creature.horns === this.state.numHorns : true;
                        }
                    )}
                />
            </> 
        );
    }
}
 
export default App;
