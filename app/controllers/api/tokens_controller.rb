module Api
  class TokensController < ApplicationController
    def create
      user = User
        .create_with(user_params)
        .find_or_create_by!(email: user_params[:email])

      payload = {
        id: user.id,
        name: user.name,
        email: user.email
      }

      token = JWT.encode payload, nil, 'none'

      render json: { token: token, user: { name: user.name, email: user.email } }, status: :ok
    rescue ActiveRecord::RecordInvalid => ex
      render json: { error: "Invalid Request" }, status: :unprocessable_entity
    end

    private

    def user_params
      params.require(:token).permit(:name, :email)
    end
  end
end
