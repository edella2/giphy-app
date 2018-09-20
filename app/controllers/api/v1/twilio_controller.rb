module Api
  module V1
    class TwilioController < ActionController::Base

      def send
        # Your Account Sid and Auth Token from twilio.com/console
        account_sid = ENV["TWILIO_ID"]
        auth_token = ENV["TWILIO_AUTH_TOKEN"]
        @client = Twilio::REST::Client.new(account_sid, auth_token)
        body = params[:body] + " " + params[:gif]
        phone = params[:phone]
        result = @client.messages.create( from: ENV["TWILIO_PHONE"], body: body, to: phone)
        if result
          render nothing: true, status: 200
        else
          render json: @client.errors, status: 422
        end

      end

    end
  end
end
