import React from 'react';

const TwilioForm = ({gif, onTwilioSubmit = f => f}) => {
  let body, phone;


  const submit = e => {
    e.preventDefault()
    onTwilioSubmit(gif.images.original.mp4, body.value, phone.value)

  }

  return (
    <div className="form-group">
      <form onSubmit={submit}>
        <label for="comment">Message:</label>
        <textarea  ref={input => body = input}
                rows="5"
                className="twil-text-area form-control"
                type="textarea"
                placeholder="Message" required />
        <label for="comment">Recipient Phone:</label>
        <input  ref={input => phone = input}
                className="twil-text-area form-control"
                type="text"
                placeholder="Recipient Phone" required />
        <button className="btn btn-primary twil-send">Send</button>
      </form>
    </div>
  )
}

export default TwilioForm;
