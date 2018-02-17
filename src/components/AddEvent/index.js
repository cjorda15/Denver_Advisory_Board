import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component';
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
      fileLoaded: false,
      loading: false
    };

    this.userFiles = [];

    this.componentConfig = {
      iconFiletypes: ['.jpg', '.png', '.gif', '.webm', '.mp4'],
      showFiletypeIcon: true,
      postUrl: 'no-url'
    };

    this.djsConfig = { autoProcessQueue: false };
    //
    // this.eventHandlers = {
    //   // This one receives the dropzone object as the first parameter
    //   // and can be used to additional work with the dropzone.js
    //   // object
    //   init: null,
    //   // All of these receive the event as first parameter:
    //   drop: this.userFiles,
    //   dragstart: null,
    //   dragend: null,
    //   dragenter: null,
    //   dragover: null,
    //   dragleave: null,
    //   // All of these receive the file as first parameter:
    //   addedfile: this.simpleCallBack,
    //   removedfile: null,
    //   thumbnail: null,
    //   error: null,
    //   processing: null,
    //   uploadprogress: null,
    //   sending: null,
    //   success: null,
    //   complete: null,
    //   canceled: null,
    //   maxfilesreached: null,
    //   maxfilesexceeded: null,
    //   // All of these receive a list of files as first parameter
    //   // and are only called if the uploadMultiple option
    //   // in djsConfig is true:
    //   processingmultiple: null,
    //   sendingmultiple: null,
    //   successmultiple: null,
    //   completemultiple: null,
    //   canceledmultiple: null,
    //   // Special Events
    //   totaluploadprogress: null,
    //   reset: null,
    //   queuecomplete: null
    // };
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleInputChange(e, type) {
    e.preventDefault();
    this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(document.querySelector('#add-event-file').value);
    // let formData = new FormData();
  }

  handleDrop(file) {
    console.log(file, '!#$!@#$');
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
          <DropzoneComponent
            config={this.componentConfig}
            djsConfig={this.djsConfig}
            onDrop={e => {
              this.handleDrop(e);
            }}
          />

          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default AddEvent;
