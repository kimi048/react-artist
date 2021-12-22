import React,{Component} from 'react';
import axios from 'axios';

import Header from '../header';
import Banner from './banner';

const URL_ARTIST = 'http://localhost:3004/artists';

class Home extends Component{
  
  state = {
    artists:''
  }

  componentDidMount() {
    axios.get(URL_ARTIST)
      .then(response => {
        this.setState({artists:response.data})
    })
  }
  render() {
    console.log(this.state);
    return (
      <>
        <Header />
        <Banner />
      </>
    )
  }

}
export default Home;