import javaImage from '../assets/java.png'

function Card() {
    return (
        <div className="card">
            <img src={javaImage} className="CardImage" />
            <h2 className='cardTitle'>Java Programming</h2>
            <p className='cardDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus beatae iusto rem!</p>
        </div>
    );
}

export default Card;