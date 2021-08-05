import React, { Component } from 'react';

class ImageItem extends Component {
    render() { 
        return ( 
            <div className="image-item">
            <img src={this.props.creature.url} alt="creature"/>
            <label>{this.props.creature.title}</label>
            </div>
         );
    }
}
 
export default ImageItem;