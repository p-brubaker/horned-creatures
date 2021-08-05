import React, { Component } from 'react';
import ImageList from './Components/ImageList.js';
import creatures from './horned-creatures';
import Dropdown from './Components/Dropdown';
import { either } from './helpers.js';
import { removeDuplicates } from './helpers.js';
import './App.css';

class App extends Component {
    state = { 
                keyword: 'All',
                numHorns: 'All'
            }

    handleChangeKeyword = (e) => {
        this.setState({
            keyword: e.target.value,
        })
    }

    handleChangeNumHorns = (e) => {
        this.setState({
            numHorns: e.target.value
        })
    }

    render() { 
            const numHorns = this.state.numHorns;
            const keyword = this.state.keyword;

            const filteredCreatures = creatures.filter(creature => (
                either(keyword, creature.keyword, 'All')
                )).filter(creature => (
                either(numHorns, String(creature.horns), 'All')
                ));

            let keywordOptions = creatures.filter(creature => (
                either(numHorns, String(creature.horns), 'All')
            )).map(creature => creature.keyword);

            let hornOptions = creatures.filter(creature => (
                either(keyword, creature.keyword, 'All')
            )).map(creature => creature.horns);

            hornOptions = removeDuplicates(hornOptions);
            keywordOptions = removeDuplicates(keywordOptions);

            return ( 
                <div className="page">
                    <section className="dropdowns">
                        <Dropdown 
                            handleChange={this.handleChangeKeyword}
                            label='Filter by keyword'
                            options = {keywordOptions}
                        />
                        <Dropdown
                            handleChange={this.handleChangeNumHorns}
                            label='Filter by number of horns'
                            options={hornOptions}
                        />
                    </section>
                    <section className="images-container">
                        <ImageList 
                            creatureImages={filteredCreatures}
                        />
                    </section>
                </div> 
        );
    }
}
 
export default App;