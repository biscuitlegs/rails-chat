import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const messagesContainer = document.querySelector('#messages-container');
    messagesContainer.insertAdjacentHTML("beforeend", this.message_from_data(data))
  },

  message_from_data(data) {
  return  `<article class="message is-dark">
            <div class="message-header">
                <p>${data.message.user.email}</p>
            </div>
            <div class="message-body">
                <p>${data.message.body}</p>
            </div>
          </article>`

  }
});
