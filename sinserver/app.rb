require 'sinatra/base'

class ThermoServer < Sinatra::Base
  enable :sessions

  get '/temperature' do
    response.headers['Access-Control-Allow-Origin'] = '*'
    puts "here session"
    p session
    p session[:current_temp]
    session[:current_temp].to_s
  end

  post '/temperature' do
    response.headers['Access-Control-Allow-Origin'] = '*'
    session[:current_temp] = params["temperature"]
    puts "now session"
    p session
    'dummy'
  end

end
