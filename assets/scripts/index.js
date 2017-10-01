'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const appEvents = require('../scripts/app/events.js')
const getFormFields = require('../../lib/get-form-fields')

$(() => {
  $('#registration').on('submit', appEvents.registerUser)
  $('#login').on('submit', appEvents.loginUser)
  $('#log-out-btn').on('click', appEvents.logoutUser)
  $('#log-out-btn2').on('click', appEvents.logoutUser)
  $('#passChange').on('submit', appEvents.resetPassword)

  $('#create-listing').on('submit', appEvents.onCreateNewListing)
  $('.showAllListings').on('click', appEvents.onGetUsersListings)

  $(document).on('click', ".deleteListing", appEvents.onDeleteListing)

// onGetListings to show ALL listings
   $('#listingsShow').click(function () {
     const myDiv = $('#listingsShow')
     myDiv.clearQueue()
     $(this).on('submit', appEvents.onGetListings)
     console.log('hit index.js')
     $('#message').empty()
     $('#message').show()
     // console.log('this one')
     // appEvents.onCreateNewEvent()
   })

  })
