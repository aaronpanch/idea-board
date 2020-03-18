Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphqlPlayground::Rails::Engine, at: "/playground", graphql_path: "/api/graphql"
  end

  namespace :api do
    resources :tokens, only: :create
    post "/graphql", to: "graphql#execute"
  end

  get "*path", to: 'client#index'
  root 'client#index'
end
