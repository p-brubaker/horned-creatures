import React, { Component } from 'react';

class CreatureOptions extends Component {
    render() { 
        return ( 
            this.props.options.map((option, i) => {
                return (
                    <option value={option} key={i}>
                        {option}
                    </option>
                );
            })
         );
    }
}
 
export default CreatureOptions;