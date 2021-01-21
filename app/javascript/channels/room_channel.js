import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const current_user = document.querySelector("meta[name='current_user']");
    const messagesContainer = document.querySelector('#messages-container');
    
    messagesContainer.insertAdjacentHTML("beforeend", this.message_from_data(data))
    if (data.message.user.id == current_user.id) {
      this.clear_input();
    }
    this.hide_notification();
  },

  message_from_data(data) {
    const current_user = document.querySelector("meta[name='current_user']");

    if (data.message.user.id == current_user.id) {
      return  `<article class="message is-primary">
            <div class="message-header">
                <p>${data.message.user.email}</p>
            </div>
            <div class="message-body">
                <p>${data.message.body}</p>
            </div>
          </article>`
    } else {
      return  `<article class="message is-dark">
            <div class="message-header">
                <p>${data.message.user.email}</p>
            </div>
            <div class="message-body">
                <p>${data.message.body}</p>
            </div>
          </article>`
    }
  },

  clear_input() {
    const messageInput = document.querySelector('#message-form textarea');
    messageInput.value = "";
  },

  hide_notification() {
    const noMessagesNotification = document.querySelector('#no-messages-notification');
    noMessagesNotification.style.display = 'none';
  }
});
