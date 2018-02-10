import React, { Component } from 'react';

class AccountManagement extends Component {
  constructor(props) {
    super(props);
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

  profileImgDisplay() {
    return this.state.profileImg ? (
      <div className="account-profile-image" />
    ) : (
      <div className="account-profile-image-placeholder">
        <form
          onSubmit={e => {
            this.handleClick(e);
          }}
          action="/api/v1/image"
          method="post"
          encType="multipart/form-data"
          className="ui form"
        >
          <input className="file-field" name="recfile" type="file" />
          <button type="submit">post</button>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div id="account-management-container">
        <div>{this.profileImgDisplay()}</div>
      </div>
    );
  }
}

export default AccountManagement;
