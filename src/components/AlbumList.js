import React, { Component } from 'react'
import {ScrollView, Text} from 'react-native'
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

export default class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: [] };
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                console.log(response);
                this.setState({ albums: response.data })
            });
    }


    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    //when state is changed. Component is re rendered
    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
