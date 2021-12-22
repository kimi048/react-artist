import React,{Component} from 'react';
import axios from 'axios';

import Header from '../header';
import Banner from './banner';
import ArtistsList from './artistList';

const URL_ARTIST = 'http://localhost:3004/artists';

class Home extends Component{
  
  state = {
    artists:''
  }

  componentDidMount() {
    axios.get(URL_ARTIST)
      .then(response => {
        // console.log(response.data);
        this.setState({artists:response.data})
    })
  }
  render() {
    console.log(this.state.artists);
    return (
      <>
        <Header />
        <Banner />
        <ArtistsList allArtists={this.state.artists}/>
      </>
    )
  }

}
export default Home;