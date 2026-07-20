

function Card({ title, image, description }) {
    return (
        <div className="card">
            <img src={image} className="CardImage" />
            <h2 className='cardTitle'>{title}</h2>
            <p className='cardDes'>{description}</p>
        </div>
    );
}

export default Card;