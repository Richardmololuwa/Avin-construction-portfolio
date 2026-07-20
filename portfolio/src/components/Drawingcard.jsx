function DrawingCard({
  title,
  description,
  tech,
  image,
}) {
  return (
    <div className="drawing-card">
      <img src={image} alt={title} />

      <div className="drawing-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <span>{tech}</span>

        <button>View Drawing</button>
      </div>
    </div>
  );
}

export default DrawingCard;