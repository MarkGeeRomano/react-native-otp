const admin = require('firebase-admin')
const twilio = require('./twilio')

module.exports = (req, res) => {
  if (!req.body.phone) {
    res.status(422).send({ error: 'must provide phone' })
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '')

  admin.auth().getUser(phone)
    .then(user => {
      const code = Math.floor(Math.random() * 8999 + 1000)
      twilio.messages.create({
        body: 'Your code is ' + code,
        to: phone,
        from: '+14133142591'
      })
        .then(() => {
          admin.database().ref('users/' + phone)
            .update({ code, codeValid: true })
            .then(() => res.send({ success: true }))
        })
        .done()
    })
    .catch(error => res.status(422).send({ error }))
}
