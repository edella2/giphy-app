import React from 'react';
const Giphy = ({gif, onNextRandomGif = f => f}) => {

  const click = e => {
    e.preventDefault()
    onNextRandomGif()
  }


  return (
    <div className='gif'>
        <div className='gif-row'>
            <img className="gif" src={gif.images.original.url} alt="" />
        </div>
        <div className='gif-next-row'>
            <button onClick={click} className="btn btn-primary">New Gif</button>
        </div>
    </div>



  )
}
export default Giphy;
