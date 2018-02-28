import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactSVG from 'react-svg';
import Scroll from 'react-scroll';
import $ from 'jquery';
import { loadImage } from '../../actions';
import ProfileEventsList from './ProfileEventsList';
import {
  updateUser,
  updatePersonalEvents,
  generatePersonalEvents
} from '../../actions';
import './profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      edit: false,
      imageLoaded: '',
      name: '',
      organization: '',
      title: '',
      summary: ''
    };
  }

  componentWillMount() {
    let options = {
      delay: '0',
      duration: '0'
    };
    Scroll.animateScroll.scrollToTop(options);
    fetch('/api/v1/user', {
      method: 'GET',
      credentials: 'include'
    })
      .then(data => data.json())
      .then(data => {
        if (data.name === 'JsonWebTokenError') {
          window.location.href = '/';
          return;
        }
        let { name, title, organization, summary } = data;
        name = name || '';
        title = title || '';
        organization = organization || '';
        summary = summary || '';
        this.setState({
          name: name,
          organization: organization,
          title: title,
          summary: summary
        });
        this.props.handleUser(data);
      })
      .catch(err => console.log(err));

    fetch(`/api/v1/events/${this.props.user.userID._id}`, {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(data => data.json())
      .then(events => {
        this.props.handleGeneratePersonalEvents(events);
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.scrollAfterLoad();
  }

  scrollAfterLoad() {
    setTimeout(() => {
      return Scroll.scroller.scrollTo('profile-container', {
        duration: 750,
        delay: 0,
        smooth: true
      });
    }, 750);
  }

  handleImageLoad(e) {
    e.preventDefault();
    const data = new FormData();
    const input = document.querySelector('.file-field').files[0];
    this.setState({ loading: true });
    data.append('file', input);

    fetch('/api/v1/cloudload', {
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then(imageUrl => {
        this.closeEdit();
        this.setState({ loading: false });
        this.props.handleImage(imageUrl);
        fetch('/api/v1/updateImage', {
          method: 'POST',
          credentials: 'include',
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

  determineImage() {

    return this.props.user.userID.image
      ? this.props.user.userID.image.url
      : 'https://res.cloudinary.com/hdfmst19a/image/upload/v1519598001/rp2tjf5ftdpmfhetgoyf.png';
  }

  profileBasicDetails() {
    return (
      <div className="account-profile-basic-details">
        <p>{this.props.user.userID.name || 'add your name'}</p>
        <p>{this.props.user.userID.organization || 'add your organization'}</p>
        <p>{this.props.user.userID.title || 'add your title'}</p>
      </div>
    );
  }

  profileSummaryDetails() {
    return (
      <pre className="account-profile-summary">
        {this.props.user.userID.summary || 'add a summary'}
      </pre>
    );
  }

  handleEditBasicInfo(e) {
    e.preventDefault();
    const { name, organization, title, summary } = this.state;
    const id = this.props.user.userID._id;
    fetch('/api/v1/user/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        organization: organization,
        title: title,
        summary: summary,
        id: id
      })
    })
      .then(res => res.json())
      .then(data => this.handleUserUpdate(data))
      .catch(err => console.log(err, 'ERROR'));
  }

  handleUserUpdate(data) {
    if (data.message === 'Success') {
      this.props.handleUser(data.user);
      this.closeEdit();
      return;
    }
  }

  handleImagePath(e) {
    let imagePath = e.target.value.split('');
    let cleanImageName = imagePath
      .splice(imagePath.indexOf('h') + 2, imagePath.length)
      .join('');

    this.setState({ imageLoaded: cleanImageName });
  }

  determineImageFile() {
    return this.state.imageLoaded ? (
      <span>{this.state.imageLoaded}</span>
    ) : null;
  }

  showEditProfile() {
    return this.state.edit ? (
      <div className="edit-profile-container">
        <button
          className="edit-profile-details-btn"
          onClick={() => {
            this.closeEdit();
          }}
        >
          cancel
        </button>
        <div className="edit-image-form-container">
          <form
            className="edit-image-form"
            onSubmit={e => {
              this.handleImageLoad(e);
            }}
            action="/api/v1/image"
            method="post"
            encType="multipart/form-data"
          >
            <div>Load Image</div>
            <label htmlFor="upload-photo">Choose Image</label>
            <input
              onChange={e => {
                this.handleImagePath(e);
              }}
              className="file-field"
              name="recfile"
              type="file"
              id="upload-photo"
            />
            <button type="submit">Submit</button>
            <div className="edit-image-bottom-container">
              <div className="image-file-name-container">
                {this.determineImageFile()}
              </div>
              <div className="image-loading-svg-container">
                {this.state.loading ? (
                  <ReactSVG
                    className="image-loading-svg"
                    path="loading.svg"
                    style={{ width: 200 }}
                  />
                ) : null}
              </div>
            </div>
          </form>
        </div>
        <div className="edit-basic-form-container">
          <div>Basic Info</div>
          <input
            placeholder="name"
            value={this.state.name}
            onChange={e => {
              this.editBasicInfo(e, 'name');
            }}
          />
          <input
            placeholder="organization"
            value={this.state.organization}
            onChange={e => {
              this.editBasicInfo(e, 'organization');
            }}
          />
          <input
            placeholder="title"
            value={this.state.title}
            onChange={e => {
              this.editBasicInfo(e, 'title');
            }}
          />
          <textarea
            placeholder="summary"
            value={this.state.summary}
            onChange={e => {
              this.editBasicInfo(e, 'summary');
            }}
          />
          <button
            onClick={e => {
              this.handleEditBasicInfo(e);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    ) : null;
  }

  editProfile(e) {
    e.preventDefault();
    $('body').addClass('no-scroll');
    this.setState({ edit: true });
  }

  closeEdit() {
    this.setState({ imageLoaded: '' });
    $('body').removeClass('no-scroll');
    this.setState({ edit: false });
  }

  editBasicInfo(e, type) {
    this.setState({ [type]: e.target.value });
  }

  render() {
    return (
      <div id="profile-container">
        <section className="account-profile-card-container">
          <div className="account-profile-card-top">
            <button
              onClick={e => {
                this.editProfile(e);
              }}
              className="edit-profile-details-btn"
            >
              edit profile
            </button>
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
          {this.showEditProfile()}
        </section>
        <ProfileEventsList
          handleUpdateParticipant={this.props.handleUpdateParticipant}
          user={this.props.user}
          events={this.props.events}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    events: state.personalEvents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleImage: input => {
      dispatch(loadImage(input));
    },
    handleUser: input => {
      dispatch(updateUser(input));
    },
    handleGeneratePersonalEvents: input => {
      dispatch(generatePersonalEvents(input));
    },
    handleUpdateParticipant: input => {
      dispatch(updatePersonalEvents(input));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
