class Api::V1::PeopleController < ApplicationController
  def index
    @peoples = People.all
    @people = People.new(name: params[:name], bio: params[:bio])
    @person.save
    render 'show.json.jbuilder'
  end
end
