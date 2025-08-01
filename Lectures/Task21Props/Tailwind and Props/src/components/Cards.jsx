function Card({ location }) {

  return (
    <div className="card">
      <img src={location.imgSrc} alt="destination-image" />
      <p className="title">{location.title}</p>
      <p className="desc">{location.desc}</p>
    </div>
  )
}

export default Card;