import React, { Component } from 'react';
import ImageItem from './ImageItem';

class ImageList extends Component {
    state = {  }
    render() { 
        return ( 
            <p>{this.props.creatureImages.map(
                (creature) => {
                    return <ImageItem creature={creature} key={creature.id}/>
                }
            )}</p>
         );
    }
}
 
export default ImageList;