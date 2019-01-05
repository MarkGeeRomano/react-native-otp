const twilio = require('twilio')

const accountSid = 'AC53ed963e27da4ba1ba560c7fa524b247'
const authToken = '3663ae479d933237b7887e0e61c4234f'

module.exports =  twilio(accountSid, authToken)