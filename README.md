# Rails Chat

## About
* Group Chat App made with Rails.
* Devise manages authentication of users.

## How ActionCable is integrated
* Uses ActionCable to integrate Websockets into the app.
* Requires user sign in to authorize connection.
* User is automatically subscribed to the `room` channel.
* Messages are sent to the server-side `room` channel when a user creates one.
* The message is rebroadcast to the client of all subscribed users of the `room` channel.
* DOM manipulation is used to display the new message in the browser.