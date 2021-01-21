class HomeController < ApplicationController
  def index
    @message = Message.new
    @message
    @messages = Message.all.includes(:user)
  end
end
