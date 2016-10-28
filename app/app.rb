require 'sinatra/base'
require_relative 'models/thermostat_state'
require 'open-uri'
require 'json'

class Thermostat < Sinatra::Base
  get '/' do
    erb(:index)
  end

  post '/thermostat/update' do
    request.body.rewind  # in case someone already read it
    data = request.body.read
    p data
  end

=begin
$.ajax({ type: 'POST', dataType: 'json', url: '/thermostat/update', data : { temp: 10},
      success: function(json) {
        alert('all done');
      } })
=end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
