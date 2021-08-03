import React, { Component } from 'react';

class ImageList extends Component {
    state = {  }
    render() { 
        return ( 
            <p>{this.props.data.length}</p>
         );
    }
}
 
export default ImageList;