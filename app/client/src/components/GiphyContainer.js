import React, { Component } from 'react';
import axios from 'axios';
import Giphy from './Giphy'
import GiphySearch from './GiphySearch'
import TwilioForm from './TwilioForm'


class GiphyContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            gifs: [],
            query: "",

        }
        this.searchNewGifs = this.searchNewGifs.bind(this);
        this.twilioSubmit = this.twilioSubmit.bind(this);
        this.randomNewGif = this.randomNewGif.bind(this);
        this.nextRandomGif = this.nextRandomGif.bind(this);
    }

    componentDidMount() {
    }

    searchNewGifs(query) {
      this.setState({query})
      axios.post( '/api/v1/giphy', { query: query })
      .then(response => {
        const gifs = response.data.output.data
        this.setState({gifs})
      })
      .catch(error => {
        console.log(error)
      })
    }

    randomNewGif(query) {
      this.setState({query})
      axios.post( '/api/v1/giphy_random', { query: query })
      .then(response => {
        const gifs = [response.data.output.data]
        this.setState({gifs})
      })
      .catch(error => {
        console.log(error)
      })
    }

    nextRandomGif(){
      let query = this.state.query
      axios.post( '/api/v1/giphy_random', { query: query })
      .then(response => {
        const gifs = [response.data.output.data]
        this.setState({gifs})
      })
      .catch(error => {
        console.log(error)
      })
    }

    twilioSubmit(gif, body, phone) {
      axios.post( '/api/v1/twilio', { gif: gif, body: body, phone: phone })
      .then(response => {
        const gifs = response.data.output.data
        this.setState({gifs})
      })
      .catch(error => {
        console.log(error)
      })
    }


    render() {
        let gifs = this.state.gifs
        return (
            <div className="Lists-container">
            <GiphySearch onRandomNewGif={this.randomNewGif} />
            {gifs.map( gif => {
                return (
                  <div key={gif.id} className="gif-boxes" >
                      <Giphy gif={gif} onNextRandomGif={this.nextRandomGif} />
                      <div className="twil-form">
                          <TwilioForm gif={gif} onTwilioSubmit={this.twilioSubmit} />
                      </div>
                  </div>
              )
          })}
            </div>
        )
    }
}
export default GiphyContainer;
