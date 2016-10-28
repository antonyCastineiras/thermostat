require 'sinatra/base'
require_relative 'models/thermostat_state'
require 'open-uri'
require 'json'
require 'ostruct'

class Thermostat < Sinatra::Base
  get '/' do
    erb(:index)
  end

  post '/thermostat/update' do
    request.body.rewind  # in case someone already read it
    data = request.body.read
    data = JSON.parse(data, object_class: OpenStruct)
    thermostat_state = ThermostatState.first_or_create
    thermostat_state.update(:temperature => data['temp'], :city => data['city'], :power_saving => data['power_saving']) #temp=10
    p data['temp']
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
