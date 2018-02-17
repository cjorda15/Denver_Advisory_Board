import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import moment from 'moment';
import { connect } from 'react-redux';
import '../../../node_modules/react-dropzone-component/styles/filepicker.css';
import '../../../node_modules/dropzone/dist/min/dropzone.min.css';
import './add_event.scss';

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      location: '',
      date: '',
      summary: '',
      filesToBeSent: [],
      filesUrl: [],
      loading: false
    };
  }

  handleInputChange(e, type) {
    e.preventDefault();
    this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    this.state.filesToBeSent.map((file, index) => {
      const data = new FormData();
      data.append('file', file);
      fetch('api/v1/cloudload', {
        method: 'POST',
        body: data
      })
        .then(res => res.json())
        .then(res => this.handleCloudResponse(res, index))
        .catch(err => console.log(err));
    });
  }

  handleCloudResponse(res, index) {
    let filesUrl = this.state.filesUrl;
    filesUrl.push(res);
    this.setState({ filesUrl });
    if (index == this.state.filesToBeSent.length - 1) {
      this.handleMongoSubmit();
      return;
    }
  }

  handleMongoSubmit() {
    const { title, location, date, summary, filesUrl } = this.state;
    const time = moment().format('MMMM Do YYYY, h:mm:ss a');
    const id = this.props.user.userID._id;
    fetch('/api/v1/events', {
      method: 'post',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        location: location,
        date: date,
        time: time,
        summary: summary,
        images: filesUrl,
        organizer: id
      })
    })
      .then(res => res.json())
      .then(res => console.log(res, 'MONGO'))
      .catch(err => console.log(err, 'ERROR'));
  }

  handleDrop(file) {
    const filesToBeSent = this.state.filesToBeSent;
    filesToBeSent.push(file[0]);
    this.setState({ filesToBeSent });
  }

  removeFile(e, index) {
    let filesToBeSent = this.state.filesToBeSent;
    let updatedFiles = filesToBeSent.filter((file, i) => {
      return i != index;
    });
    this.setState({ filesToBeSent: updatedFiles });
  }

  showPreview() {
    return this.state.filesToBeSent.map((file, index) => {
      return (
        <div key={index} className="file-preview-item">
          <p>{file.name}</p>
          <img width="100px" height="100px" src={file.preview} />
          <button
            onClick={e => {
              this.removeFile(e, index);
            }}
          >
            remove
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div id="add-event-container">
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
          id="testForm"
          encType="multipart/form-data"
        >
          <input
            type="input"
            value={this.state.title}
            className="add-event-input"
            onChange={e => {
              this.handleInputChange(e, 'title');
            }}
          />
          <input
            type="input"
            value={this.state.location}
            className="add-event-input"
            onChange={e => {
              this.handleInputChange(e, 'location');
            }}
          />
          <input
            type="date"
            value={this.state.date}
            className="add-event-input"
            onChange={e => {
              this.handleInputChange(e, 'date');
            }}
          />
          <input
            type="input"
            value={this.state.summary}
            className="add-event-input"
            onChange={e => {
              this.handleInputChange(e, 'summary');
            }}
          />
          <button>submit</button>
          <Dropzone onDrop={files => this.handleDrop(files)}>
            <div>
              Try dropping some files here, or click to select files to upload.
            </div>
          </Dropzone>
          <div className="file-preview-container">{this.showPreview()}</div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(AddEvent);
