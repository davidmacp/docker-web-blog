const openWebsite = require('../support/openWebsite')
const checkTitle = require('../support/checkTitle')

module.exports = function () {
  this.Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
  )

  this.Then(
    /^I expect that the title is( not)* "([^"]*)?"$/,
    checkTitle
  )
}
