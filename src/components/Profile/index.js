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
      .then(res => {
        this.props.handleImage(res);
        this.setState({ loading: false });
      })
      .catch(err => console.log(err));
  }

  profileImgDisplay() {
    return this.props.user.image ? (
      <div
        className="account-profile-image"
        style={{ backgroundImage: `url(${this.props.user.image})` }}
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
