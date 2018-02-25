import React, { Component } from 'react';
import { connect } from 'react-redux';
import './profile_events_list.scss';

class ProfileEventsList extends Component {
  constructor(props) {
    super(props);
  }

  renderEvents() {
    return this.props.events && this.props.events.length ? (
      <section className="profile-events-list-container">
        {this.props.events.map((event, index) => {
          return (
            <div className="events-card-holder" key={index}>
              <div>hello</div>
            </div>
          );
        })}
      </section>
    ) : null;
  }

  render() {
    return <div className="profile-events-list">{this.renderEvents()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

export default connect(mapStateToProps)(ProfileEventsList);
