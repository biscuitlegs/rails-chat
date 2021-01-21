class MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @message.user = current_user
    @message.save

    message_data = { message: {
                      body: @message.body,
                      user: @message.user
                      }
                    }
    ActionCable.server.broadcast("room", message_data)
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
