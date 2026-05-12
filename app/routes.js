//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/eligible-answer', function(req, res) {
  var over18 = req.session.data['over-18']
  if (over18 === 'yes') {
    res.redirect('/check-answers')
  } else {
    res.redirect('/ineligible')
  }
})