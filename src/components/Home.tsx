import { useEffect, useRef, useState } from 'react'
import { type Characters } from '../types/api'
import { UseData } from '../hook/useData'
import { Navbar } from './Navbar'
import { CharactersCard } from './CharactersCard'

export function Home () {
  const { getCharacters } = UseData()
  const firstCharacters = useRef<Characters[]>([])
  const [character, setCharacters] = useState<Characters[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getCharacters(currentPage)
      .then(data => {
        setCharacters(prevCharacters => {
          const newCharacters = prevCharacters.concat(data)
          firstCharacters.current = newCharacters
          return newCharacters
        })
      })
  }, [currentPage])

  return (
    <section>
      <header>
        <h1>Personajes</h1>
        <Navbar />
      </header>

      <div className='players-container'>
        {
          character.map((item) => <CharactersCard character={item} key={item.id} />)
        }
      </div>
      <div className='button-container'>
        <button className='see-more-button' onClick={() => setCurrentPage(currentPage + 1)}>Mostrar más personajes</button>
      </div>
    </section>
  )
}
