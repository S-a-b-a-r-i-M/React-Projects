import profilePic from '../assets/sabari.jpeg'
import '../index.css'

const Card = () => {

    return (
        <>
            <div className="card">
                <img src={profilePic} alt="My image" className="card-img"/>
                <h3 className="card-tit">Sabari Swag</h3>
                <p className="description">I'm a professional software developer</p>
            </div>
        </>
    )
}


export default Card