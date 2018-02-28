import  React,{ Component } from 'react'
import { connect } from 'react-redux'
import './members.scss'

class Members extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      loading: false,
      members: []
    }
  }

  componentWillMount() {
    fetch('/api/v1/members', {
      method: 'GET',
    }).then(res => res.json())
    .then(json => {
      console.log(json)
      this.setState({ members: json })
    }).catch(err => console.log('Error loading members: ', err))
  }

  renderMembers() {
    if (!this.state.members.length) return 
    return this.state.members.map((member, i) => {
      if (!member.name || !member.image) return 
      return (
        <div key={i} className="member">
          <img src={member.image.url} className="member-img"/>
          <p>{member.name}</p>
          <p>{member.title}</p>
        </div>
      )
    })
  }

  render() {
    return (
      <div id="members">
        {this.renderMembers()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    events: state.personalEvents
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     handleImage: input => {
//       dispatch(loadImage(input));
//     },
//     handleUser: input => {
//       dispatch(updateUser(input));
//     },
//     handleGeneratePersonalEvents: input => {
//       dispatch(generatePersonalEvents(input));
//     },
//     handleUpdateParticipant: input => {
//       dispatch(updatePersonalEvents(input));
//     }
//   };
// };


export default connect(mapStateToProps, null)(Members) 
