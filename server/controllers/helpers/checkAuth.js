let jwt = require('jsonwebtoken')


const checkAuth = (req, res, next) => {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, 'secret', (error, decoded) => {
      if (error) {
        let err = new Error('Something Went Wrong Try To Signin Again')
        err.status = 500
        next(err)

      } else {
        next()
      }
    })
  } else {
    let err = new Error('You Need to Signin or Signup to Access This Endpoint')
    err.status = 403
    next(err)
  }
}

module.exports = checkAuth