require 'data_mapper'
require 'dm-postgres-adapter'

class ThermostatState
  include DataMapper::Resource

  property :id, Serial
  property :temperature, Text
  property :city, String
  property :power_saving, Boolean
end

DataMapper.setup(:default, ENV['DATABSE_URL'] || "postgres://localhost/thermostat_development")
DataMapper.finalize
DataMapper.auto_upgrade!
