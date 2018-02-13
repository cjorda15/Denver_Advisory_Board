import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImage } from '../../actions';
import ReactSVG from 'react-svg';
import './profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      edit: false
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

  profileDetails() {
    let { email, name, bio } = this.props.user.userID;
    name = name || 'Add your name';
    bio = bio || 'Add your bio';
    return (
      <div className="account-profile-details-basic-container">
        <div>{name}</div>
        <div>{email}</div>
        <div>{bio}</div>
      </div>
    );
  }

  profileBio() {
    let { bio } = this.props.user.userID;
    bio = bio || 'Add your bio';
    return <div className="account-profile-details-bio-container">{bio}</div>;
  }

  editProfile() {
    return this.state.edit ? <div className="edit-profile" /> : null;
  }

  //   render() {
  //     return (
  //       <div id="profile-container">
  //         <div className="account-profile-info-events-container">
  //           <div className="account-profile-info-container">
  //             <div className="account-profile-details-image-container">
  //               {this.profileImgDisplay()}
  //               {this.profileDetails()}
  //               <button id="edit-profile-details-btn">edit profile</button>
  //             </div>
  //           </div>
  //           <div className="account-profile-events-container">
  //             <p>EVENTS</p>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  // }

  determineImage() {
    return (
      this.props.user.userID.image ||
      'https://res.cloudinary.com/hdfmst19a/image/upload/v1518358978/placeholder_image_logo_jjtrzu.png'
    );
  }

  profileBasicDetails() {
    return (
      <div className="account-profile-basic-details">
        <p>{this.props.user.userID.name || 'add your name'}</p>
        <p>{this.props.user.userID.email}</p>
        <p>{this.props.user.userID.organization || 'add your organization'}</p>
        <p>{this.props.user.userID.title || 'add your title'}</p>
      </div>
    );
  }

  profileSummaryDetails() {
    return (
      <p className="account-profile-summary">
        {this.props.user.userID.summary || 'add a summary'}
      </p>
    );
  }

  render() {
    return (
      <div id="profile-container">
        <section className="account-profile-card-container">
          <div className="account-profile-card-top">
            <button id="edit-profile-details-btn">edit profile</button>
            <div className="profile-image-wrapper">
              <div
                className="profile-image"
                style={{
                  backgroundImage: `url(${this.determineImage()})`
                }}
              />
            </div>
          </div>
          <div className="account-profile-bottom-card">
            {this.profileBasicDetails()}
            {this.profileSummaryDetails()}
          </div>
        </section>
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
