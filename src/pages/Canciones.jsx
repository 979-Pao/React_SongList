import songs from '../data/songs.json'
import SongCard from '../components/SongCard.jsx'

export default function Canciones(){
  return (
    <section>
      <h1>Top 5 canciones favoritas</h1>
      <div className="grid">
        {songs.map((s, idx) => (
          <div className="card" key={idx}>
            <SongCard {...s} />
          </div>
        ))}
      </div>
    </section>
  )
}
