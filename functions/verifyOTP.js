const admin = require('firebase-admin')

module.exports = (req, res) => {
  if (!req.body.phone || !req.body.code) {
    return res.status(422).send({ error: 'No phone or code ' })
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '')
  const code = parseInt(req.body.code)

  admin.auth().getUser(phone)
    .then(() => {
      const ref = admin.database().ref('users/' + phone)
      ref.on('value', (snapshot) => {
      ref.off()
        const user = snapshot.val()
        if (user.code !== code || user.codeValid === false) {
          return res.status(422).send({ error: 'code invalid' })
        }

        ref.update({ codeValid: false })
        admin.auth().createCustomToken(phone)
          .then(token => res.send({ token }))
      })
    })
    .catch(error => res.status(422).send({ error }))
}