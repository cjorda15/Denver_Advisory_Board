import React, { Component } from 'react';
import './home.scss';
const cloudinary = require('cloudinary');

class Home extends Component {
  constructor() {
    super();
  }

  handleClick(e) {
    e.preventDefault();
    const data = new FormData();
    const input = document.querySelector('.file-field').files[0];

    data.append('file', input);

    fetch('/api/v1/image', {
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="home-container">
        <form
          onSubmit={e => {
            this.handleClick(e);
          }}
          action="/api/v1/image"
          method="post"
          encType="multipart/form-data"
          className="ui form"
        >
          <div className="field">
            <label>Title</label>
            <input name="title" type="text" placeholder="Title" />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea rows="4" name="description" placeholder="Description" />
          </div>
          <div>
            <label>Image</label>
            <input className="file-field" name="recfile" type="file" />
          </div>
          <button type="submit">post</button>
        </form>
      </div>
    );
  }
}
export default Home;
