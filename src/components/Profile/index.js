import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImage } from '../../actions';
import ReactSVG from 'react-svg';
import './profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  handleClick(e) {
    e.preventDefault();
    const data = new FormData();
    const input = document.querySelector('.file-field').files[0];
    this.setState({ loading: true });
    data.append('file', input);

    fetch('/api/v1/image', {
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then(imageUrl => {
        this.setState({ loading: false });
        this.props.handleImage(imageUrl);
        fetch('/api/v1/updateImage', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: this.props.user.userID._id,
            image: imageUrl
          })
        })
          .then(data => data.json())
          .then(mongoResponse => {
            if (mongoResponse == 'Success') {
              console.log(mongoResponse);
              return;
            }
            console.log('ERRORWITHMONGO');
          })
          .catch(err => {
            console.log(err, 'ERRROR');
          });
      })
      .catch(err => console.log(err));
  }

  profileImgDisplay() {
    return this.props.user.userID.image ? (
      <div
        className="account-profile-image"
        style={{ backgroundImage: `url(${this.props.user.userID.image})` }}
      />
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
          {this.state.loading ? (
            <ReactSVG path="loading.svg" style={{ width: 200 }} />
          ) : null}
        </form>
      </div>
    );
  }

  render() {
    return (
      <div id="profile-container">
        <div>{this.profileImgDisplay()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleImage: input => {
      dispatch(loadImage(input));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
