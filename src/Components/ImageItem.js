import React, { Component } from 'react';

class ImageItem extends Component {
    render() { 
        return ( 
            <img src={this.props.creature.url} alt="creature"/>
         );
    }
}
 
export default ImageItem;