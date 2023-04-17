import { Layout } from "@/components/layouts"
import { FavoritePokemons } from "@/components/pokemon";
import { NoFavorites } from "@/components/ui";
import { pokemons } from "@/utils";
import { NextPage } from "next"
import { useState, useEffect } from "react";

const FavoritesPage: NextPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(pokemons())
  }, [])
  
  return (
    <Layout title="Pokemons Favoritos" >
      {favoritePokemons.length === 0 
        ? (<NoFavorites/>) 
        : (
          <FavoritePokemons pokemons={favoritePokemons} />
        ) }
    </Layout>
  )
}

export default FavoritesPage;
