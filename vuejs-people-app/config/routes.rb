Rails.application.routes.draw do
  get '/' => 'peoples#index'
  get '/peoples' => 'peoples#index'


  namespace :api do
    namespace :v1 do
      get '/peoples' => 'peoples#index'
      post '/peoples' => 'peoples#create'
    end
  end

end
