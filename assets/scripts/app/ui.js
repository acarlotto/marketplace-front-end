'use strict'

const app = require('../app.js')
// const appEvents = require('./events.js')

// on sign up success -- this is the most recent
const onSignupSuccess = function () {
  console.log('success')
  }

const onSignupFailure = () => {
  console.log('There was problem signing up, please try again!')
}

const onSigninSuccess = function(data) {
  console.log(data.user)
  app.user = data.user
  console.log('sign in successful')
}

const onSigninFailure = (error) => {
console.log('Invalid username or password.')
  }

const onLogoutSuccess = function(app) {
  console.log('sign-out successful')
}

const onLogoutFailure = function() {
  console.log('error signing out')
}

const onResetSuccess = function () {
  console.log('password reset successful')
  }

const onResetFailure = function() {
  console.log('password reset failed')
  }


  // CREATE New Listing
  const newSuccess = function () {
    console.log('success')
      }

  const newFail = function () {
    console.log('fail')
  }

  const onSuccessGetListing = function (data) {
  const listings = data.listings
  const my_id = data.listings.id
  listings.forEach (function (listing) {
    console.log(listing.name)
    // console.log(event.id)
    // console.log(data.events.id)
    $('#message').append('<div class="row" style="text-align: center; color: black"> <h5> ' + listing.name + ' <a href="javascript:" id="' + listing.id + '" class="deleteEvent">delete</a>  <button type="Submit" id="' + listing.id + '" class="btn btn-info edit">edit</button></h5></p><p hidden id="my_id"> ' + listing.id + ' </p></div>')
  })
}

const onFailureGetListing = function (data) {
  console.error('error')
}

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onLogoutSuccess,
  onLogoutFailure,
  onResetSuccess,
  onResetFailure,
  newSuccess,
  newFail,
  onSuccessGetListing,
  onFailureGetListing
}
