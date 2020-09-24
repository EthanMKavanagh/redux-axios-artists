import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddArtist extends Component {
    render() {
        return (
            <div>
                <input type='text' placeholder='Name'/>
            </div>
        );
    }
}

export default connect()(AddArtist);