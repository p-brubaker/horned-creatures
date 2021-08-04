import React, { Component } from 'react';

class Dropdown extends Component {
    
    render() { 
        const {handleChange, label, options} = this.props;

        return ( 
            <>
            <label>{label}</label>
            <select defaultValue="All" onChange={handleChange}>
                {options.map((option, i) => {
                return (
                    <option value={option} key={i}>
                        {option}
                    </option>
                )})}
            </select>
            </>
         );
    }
}
 
export default Dropdown;