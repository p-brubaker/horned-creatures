import React, { Component } from 'react';

class CreatureOptions extends Component {
    render() { 
        return ( 
            [...this.props.options.map((option, i) => {
                return (
                    <option value={option} key={i}>
                        {option}
                    </option>
                );
            }),
            <option value="none" selected disabled hidden key="display">
                Filter by {this.props.criterion}
            </option>
            ]
         );
    }
}
 
export default CreatureOptions;