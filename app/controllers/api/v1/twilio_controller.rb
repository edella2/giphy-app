module Api
  module V1
    class TwilioController < ActionController::Base

      def send
        # Your Account Sid and Auth Token from twilio.com/console
        account_sid = ENV["TWILIO_ID"]
        auth_token = ENV["TWILIO_AUTH_TOKEN"]
        @client = Twilio::REST::Client.new(account_sid, auth_token)
        # body = params[:body]
        body = "test message"
        message = @client.messages.create(
                                     from: ENV["TWILIO_PHONE"],
                                     body: 'body',
                                     to: '+15558675310'
                                   )

        puts message.sid
      end

    end
  end
end
