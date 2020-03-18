module IdeaBoardGraphql
  class QueryType < GraphQL::Schema::Object
    ###############################################
    # Sample/Test API
    ###############################################
    field :ping, String, null: false, description: "Test Query"

    def ping
      "pong"
    end
  end
end
