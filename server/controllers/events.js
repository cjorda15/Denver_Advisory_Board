const Event = require('../models/events');
const User = require('../models/users');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  Event.find()
    .populate('organizer', 'name _id')
    .populate('participants', 'name _id')
    .exec((err, results) => {
      if (err) {
        return next(err);
      } else {
        res.json(results);
      }
    });
};

exports.put = (req, res) => {
  let { title, summary, location, date, time } = req.body;
  Event.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title   : title,
        summary : summary,
        location: location,
        date    : date
      }
    },
    { new: true },
    (err, event) => {
      err ? res.status(500).json(err) : res.json(event);
    }
  );
};

exports.deleteevents = (req, res) => {
  Event.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Something went wrong' });
    res.json({ message: 'Success' });
  });
};

exports.post = (req, res) => {
  // may need to get organizers ID from jwt cookie but for now I'm assuming you're including it in the request
  let newEvent = new Event(req.body);
  newEvent.save((err, event) => {
    err ? res.send(err) : res.json(event);
  });
};


exports.patch = (req, res) => {
  const token = req.cookies.jwt
  jwt.verify(token, 'secret', (error, decoded) => {
    if (error) {
      return res.status(403).json({ message: 'Not authorized' })
    } else {
      let id = decoded._id
      Event.find({ _id: req.body.event, participants: { $in: [id] } }, (err, docs) => {
        if (err) return res.json(err)
        if (!docs.length) {
          Event.findByIdAndUpdate(
            req.body.event,
            { $push: { participants: id } },
            { new  : true },
            (err, results) => {
              if (!results) return res.status(404).json({ message: 'No event by that ID found.' })
              res.json({ message: 'Success' })
            }
          )
        } else {
          Event.findByIdAndUpdate(
            req.body.event,
            { $pull: { participants: id } },
            { new  : true },
            (err, results) => {
              if (err) return res.json({ message: err })
              res.json(results)
            }
          )
        }
      })
    }
  })
}

exports.FindUsersEvents = (req, res) => {
  Event.find({ participants: { $in: req.params.userID } }, (err, events) => {
    if (err) return res.json(err)
    res.json(events)
  })
}
