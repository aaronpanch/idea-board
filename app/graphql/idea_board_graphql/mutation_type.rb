module IdeaBoardGraphql
  class MutationType < GraphQL::Schema::Object
    ###############################################
    # Sample/Test API
    ###############################################
    field :ping, String, null: false, description: "Test Mutation"

    def ping
      "pong"
    end
  end
end
