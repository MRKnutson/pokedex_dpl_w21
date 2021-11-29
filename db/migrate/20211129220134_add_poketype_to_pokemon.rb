class AddPoketypeToPokemon < ActiveRecord::Migration[6.1]
  def change
    add_column :pokemons, :poketype, :string
  end
end
