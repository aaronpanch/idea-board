module Api
  class GraphqlController < ApplicationController
    def execute
      context = {
        current_user: current_user
      }

      result = IdeaBoardGraphql::Schema.execute(
        params[:query],
        variables: params[:variables] || {},
        context: context,
        operation_name: params[:operationName]
      )

      render json: result
    rescue => e
      raise e unless Rails.env.development?
      handle_error_in_development e
    end

    private

    def current_user
      id = if Rails.env.development?
        request.headers['User-Id'] || token_payload && token_payload["id"]
      else
        token_payload["id"]
      end

      id && User.find_by_id(id)
    end

    def token_payload
      authenticate_with_http_token do |token|
        JWT.decode(token, nil, false)[0]
      end
    end

    def handle_error_in_development(e)
      logger.error e.message
      logger.error e.backtrace.join("\n")

      render json: { error: { message: e.message, backtrace: e.backtrace }, data: {} }, status: 500
    end
  end
end
