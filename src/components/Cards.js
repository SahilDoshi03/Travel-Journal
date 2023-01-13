import '../css/Cards.css'

export default function Cards(props){
    return(
        <div className="card">
            <img src={`${props.item.img}`} alt="Destination" />
            <div className="content">
                <h2 className="country">{props.item.country}</h2>
                <span className="google-maps-link">View on Google Maps</span>
                <h3 className="place">{props.item.place}</h3>
                <div className="timeline">{props.item.timeline}</div>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
}