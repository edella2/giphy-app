Rails.application.routes.draw do
  scope 'api' do
    scope '/v1' do
      post 'giphy', to: "api/v1/giphy#search"
      post 'giphy_random', to: "api/v1/giphy#random"

      post 'twilio', to: "api/v1/twilio#send"
    end

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
