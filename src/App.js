import React, { Component } from 'react';
import ImageList from './Components/ImageList.js';
import creatures from './horned-creatures';
import CreatureOptions from './Components/CreatureOptions';
import './App.css';

class App extends Component {
    state = { 
                keyword: 'All',
                numHorns: 'All'
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
            numHorns: e.target.value
        })
    }

    render() { 
            const options = [...new Set(creatures.map(creature => creature.keyword))];
            return ( 
                <>
                <select name="creature-select" defaultValue="All" onChange={this.updateKeyword}>
                    <CreatureOptions 
                        options={options}
                    />
                </select>
                <label htmlFor="creature-select">Filter by keyword</label>
                <select name="horn-select" defaultValue="All" onChange={this.updateHorns}>
                    <CreatureOptions
                        options={[1, 2, 3, 100]}
                    />
                </select>
                <label htmlFor="horn-select">Filter by number of horns</label>
                <ImageList 
                    creatureImages={creatures.filter(
                        (creature) => {
                            return  creature.keyword === this.state.keyword || this.state.keyword === 'All';
                        }).filter(
                        (creature) => {
                            return +this.state.numHorns === creature.horns || this.state.numHorns === 'All';
                        }
                    )}
                />
            </> 
        );
    }
}
 
export default App;
