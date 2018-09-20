module Api
  module V1
    class GiphyController < ActionController::Base

      def search
        api_instance = GiphyClient::DefaultApi.new

        api_key = "dc6zaTOxFJmzC" # String | Giphy API Key.

        query = params[:query] # String | Search query term or prhase.

        opts = {
          limit: 25, # Integer | The maximum number of records to return.
          offset: 0, # Integer | An optional results offset. Defaults to 0.
          rating: "g", # String | Filters results by specified rating.
          lang: "en", # String | Specify default country for regional content; use a 2-letter ISO 639-1 country code. See list of supported languages <a href = \"../language-support\">here</a>.
          fmt: "json" # String | Used to indicate the expected response format. Default is Json.
        }

        begin
          #Search Endpoint
          result = api_instance.gifs_search_get(api_key, query, opts)

        rescue GiphyClient::ApiError => e
          puts "Exception when calling DefaultApi->gifs_search_get: #{e}"
        end
        render json: {output: result}
      end

      def random
        api_instance = GiphyClient::DefaultApi.new

        api_key = "dc6zaTOxFJmzC" # String | Giphy API Key.

        query = params[:query] # String | Search query term or prhase.

        opts = {
          tag: query, # String | Filters results by specified tag.
          rating: "g", # String | Filters results by specified rating.
          fmt: "json" # String | Used to indicate the expected response format. Default is Json.
        }

        begin
          #Search Endpoint
          random = api_instance.gifs_random_get(api_key, opts)
          result = api_instance.gifs_gif_id_get(api_key, random.data.id)


        rescue GiphyClient::ApiError => e
          puts "Exception when calling DefaultApi->gifs_search_get: #{e}"
        end
        render json: {output: result}
      end

    end
  end
end
