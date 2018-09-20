import React from 'react';

const GiphySearch = ({onRandomNewGif = f => f}) => {
  let query;

  const submit = e => {
    e.preventDefault()
    onRandomNewGif(query.value)

  }

  return (
    <div className="form-container">
      <form onSubmit={submit}>
        <input  ref={input => query = input}
                type="text"
                placeholder="Search" required />
        <button className="btn btn-primary">Search</button>
      </form>
    </div>
  )
}

export default GiphySearch;
