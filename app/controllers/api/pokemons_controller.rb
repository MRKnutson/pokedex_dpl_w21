class Api::PokemonsController < ApplicationController

def index
  render json: Pokemon.all
end

def create
end

def show
render json: @pokemon
end

def update
end


def destroy
end

private

pokemon_params
  params.require(:pokemon).permit( :name, :location, :move, :poketype )
end

def set_pokemon
  @pokemon = Pokemon.find(params[:id])
end

end
