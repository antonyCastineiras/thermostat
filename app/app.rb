require 'sinatra/base'
require_relative 'models/thermostat_state'
require 'open-uri'
require 'json'

class Thermostat < Sinatra::Base
  get '/' do
    erb(:index)
  end

  post '/thermostat/update' do
  	request.body.rewind
  	data = JSON.parse(request.body.read)
  	"the data is: #{request.body}"
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
