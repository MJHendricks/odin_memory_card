function Cards(props) {

    return (
        <div className="card">
            <img className="cardimage" src={props.src} alt={props.alt} />
        </div>
    )
}

export default Cards