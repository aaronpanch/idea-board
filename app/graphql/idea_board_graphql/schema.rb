module IdeaBoardGraphql
  class Schema < GraphQL::Schema
    use GraphQL::Pagination::Connections
    use GraphQL::Execution::Interpreter
    use GraphQL::Analysis::AST
    use GraphQL::Execution::Errors

    rescue_from(ActiveRecord::RecordNotFound) do |exception|
      scrubbed_message = exception.message.gsub(/\s+\[[^\]]+\]/, '')
      raise GraphQL::ExecutionError.new(scrubbed_message, extensions: { code: 'NOT_FOUND' })
    end

    mutation MutationType
    query QueryType
  end
end
