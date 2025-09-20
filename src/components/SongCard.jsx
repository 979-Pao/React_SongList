function formatDuration(totalSeconds){
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${m}:${s.toString().padStart(2,'0')}`
}

export default function SongCard({ titulo, album, imagenAlbum, duracion, valoracion }){
  const stars = '★'.repeat(valoracion) + '☆'.repeat(Math.max(0, 5 - valoracion))
  return (
    <article className="song">
      <img src={imagenAlbum} alt={`Portada del álbum ${album}`} loading="lazy" />
      <div style={{display:'flex', flexDirection:'column', gap:6}}>
        <h3>{titulo}</h3>
        <div className="meta">{album} • {formatDuration(duracion)}</div>
        <div className="stars" aria-label={`Valoración: ${valoracion} de 5`}>{stars}</div>
      </div>
    </article>
  )
}
