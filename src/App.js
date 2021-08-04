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

    handleRemoveHornFilter = () => {
        this.setState({
            keyword: this.state.keyword,
            numHorns: false
        })
    }

    handleRemoveKeywordFilter = () => {
        this.setState({
            keyword: false,
            numHorns: this.state.numHorns
        })
    }

    render() { 
            const options = [...new Set(creatures.map(creature => creature.keyword))];
            return ( 
                <>
                <select name="creature-select" value="none" onChange={this.updateKeyword}>
                    <CreatureOptions 
                        options={options}
                        criterion={'keyword'}
                    />
                </select>
                <label htmlFor="creature-select">{this.state.keyword || ''}</label>
                <button onClick={this.handleRemoveKeywordFilter}>Remove keyword Filter</button>
                <select name="horn-select" value="none" onChange={this.updateHorns}>
                    <CreatureOptions
                        options={[1, 2, 3, 100]}
                        criterion={'Horns'}
                    />
                </select>
                <label htmlFor="horn-select">{this.state.numHorns || ''}</label>
                <button onClick={this.handleRemoveHornFilter}>Remove Horn Filter</button>
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
