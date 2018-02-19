import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import DatePicker from 'react-datepicker';
import moment from 'moment-timezone';
import { connect } from 'react-redux';
import ReactSVG from 'react-svg';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../node_modules/react-dropzone-component/styles/filepicker.css';
import '../../../node_modules/dropzone/dist/min/dropzone.min.css';
import './add_event.scss';

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      location: '',
      summary: '',
      filesToBeSent: [],
      filesUrl: [],
      loading: false,
      startDate: moment().tz('America/Denver'),
      currentDay: moment().tz('America/Denver'),
      submitDate: moment().tz('America/Denver'),
      error: false,
      errorMessage: '',
      filesLoaded: 0
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  inspectSubmission() {
    const { title, location, summary, filesToBeSent } = this.state;
    if (!title || !location || !summary || !filesToBeSent.length) {
      this.handleError('Fill out all information please');
      return;
    }

    this.setState({ loading: true });
    this.state.filesToBeSent.map((file, index) => {
      const data = new FormData();
      data.append('file', file);
      fetch('api/v1/cloudload', {
        method: 'POST',
        body: data
      })
        .then(res => res.json())
        .then(res => {
          this.handleCloudResponse(res);
        })
        .catch(err => console.log(err));
    });
  }

  handleInputChange(e, type) {
    e.preventDefault();
    this.setState({ [type]: e.target.value });
  }

  handleDateChange(date) {
    let newDate = moment.tz(date, 'America/Denver').format('LLL');
    this.setState({ startDate: date, submitDate: newDate });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.inspectSubmission();
  }

  handleCloudResponse(res) {
    console.log(res, 'handleCLOUD');
    console.log(this.state.filesToBeSent, 'TO BE SENT');
    let filesUrl = [...this.state.filesUrl];
    let filesLoaded = this.state.filesLoaded + 1;
    filesUrl.push(res);

    this.setState({ filesUrl, filesLoaded });
    console.log(filesLoaded, this.state.filesToBeSent.length - 1);
    if (filesLoaded == this.state.filesToBeSent.length) {
      console.log(this.state.filesUrl, 'FILESURL CLoud RESPOnsE');
      this.handleMongoSubmit();
      return;
    }
  }

  handleMongoSubmit() {
    const { title, location, submitDate, summary, filesUrl } = this.state;
    const id = this.props.user.userID._id;
    console.log(filesUrl, 'TO BE SENT TO MONGO');
    fetch('/api/v1/events', {
      method: 'post',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        location: location,
        date: submitDate,
        summary: summary,
        images: filesUrl,
        organizer: id,
        today: moment()
      })
    })
      .then(res => res.json())
      .then(res => this.handleSuccessLoad())
      .catch(err => console.log(err, 'ERROR'));
  }

  handleDrop(file) {
    const filesToBeSent = this.state.filesToBeSent;
    filesToBeSent.push(file[0]);
    this.setState({ filesToBeSent });
  }

  handleSuccessLoad() {
    this.setState({
      title: '',
      location: '',
      summary: '',
      filesToBeSent: [],
      filesUrl: [],
      loading: false,
      startDate: moment().tz('America/Denver'),
      currentDay: moment().tz('America/Denver'),
      submitDate: '',
      filesLoaded: 0
    });
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

  handleLoading() {
    return this.state.loading ? (
      <ReactSVG
        className="image-loading-svg"
        path="loading.svg"
        style={{ width: 200 }}
      />
    ) : null;
  }

  handleError(message) {
    this.setState({ error: true, errorMessage: message });
    setTimeout(() => {
      this.setState({ error: false });
    }, 3000);
    return;
  }

  showError() {
    return this.state.error ? (
      <div className="add-event-error">{this.state.errorMessage}</div>
    ) : (
      <div className="add-event-error-placeholder" />
    );
  }

  render() {
    return (
      <div id="add-event-container">
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
          id="add-event-form"
          encType="multipart/form-data"
        >
          <input
            placeholder="title"
            type="input"
            value={this.state.title}
            className="add-event-input"
            onChange={e => {
              this.handleInputChange(e, 'title');
            }}
          />
          <input
            placeholder="location"
            type="input"
            value={this.state.location}
            className="add-event-input"
            onChange={e => {
              this.handleInputChange(e, 'location');
            }}
          />
          <DatePicker
            disabledDays={{ before: this.state.currentDay }}
            showTimeSelect={true}
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="LLL"
            timeCaption="time"
            selected={this.state.startDate}
            onChange={this.handleDateChange}
          />
          <textarea
            placeholder="summary"
            value={this.state.summary}
            className="add-event-input"
            onChange={e => {
              this.handleInputChange(e, 'summary');
            }}
          />
          <div className="add-event-file-container">
            <Dropzone
              id="add-event-dropzone"
              onDrop={files => this.handleDrop(files)}
            >
              <div>
                Try dropping some files here, or click to select files to
                upload.
              </div>
            </Dropzone>
            <div className="file-preview-container">{this.showPreview()}</div>
          </div>
          <button id="add-event-button">submit</button>
        </form>
        {this.handleLoading()}
        {this.showError()}
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
