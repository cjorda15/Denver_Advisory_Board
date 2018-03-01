import React, { Component } from 'react';
import { connect } from 'react-redux';
import './members.scss';

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      members: []
    };
  }

  componentWillMount() {
    fetch('/api/v1/members', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ members: json });
      })
      .catch(err => console.log('Error loading members: ', err));
  }

  renderMembers() {
    if (!this.state.members.length) return;
    return this.state.members.map((member, i) => {
      if (!member.name || !member.image) return;
      return (
        <div key={i} className="member-container">
          <img src={member.image.url} className="member-img" />
          <div className="member-info">
            <p>{member.name}</p>
            <p>{member.title}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div id="members-container">{this.renderMembers()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    events: state.personalEvents
  };
};

export default connect(mapStateToProps, null)(Members);
