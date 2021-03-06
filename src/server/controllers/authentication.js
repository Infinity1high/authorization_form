const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
  const timeStamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iad: timeStamp, }, config.secret);
}

exports.signin = function(req, res, next) {
  res.send({ token: tokenForUser(req.user)});
}


exports.signup = function(req, res, next) {
  console.log(req.body.email);
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and pass'})
  }

  User.findOne({ email: email }, (err, existingUser) => {

    if (err) { return next(err); }
    if (existingUser) {
      return res.status(422).send({ error: 'email is in use' });
    }
    const user = new User({
      email: email,
      password: password
    });

    user.save(err => {
      if (err) {
        return next(err);
      }
      res.json({ token: tokenForUser(user) });
    });
  });
}
