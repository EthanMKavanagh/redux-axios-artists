import axios from 'axios';
import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddArtist extends Component {

    addArtist = (event) => {
        axios({
            method: 'POST',
            url: '/addArtist',
            data: event.target.value
        }).then(response => {
            console.log('POST response:', response);
            this.props.refreshArtists();
        }).catch(err => {
            console.error('POST err:', err);
        });
    }

    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='Name' />
                    <button onClick={this.addArtist}>Add Artist</button>
                </form>
            </section>
        );
    }
}

export default connect()(AddArtist);