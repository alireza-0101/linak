import './TeamBox.css'

function TeamBox(props) {
    return (
        <div className='box-wrapper'>
            <div className="img-and-social-wrapper">
                <img src={props.img} alt="our team" />
                <ul>
                    <li>
                        <a href={props.socialLink.linkedin}><i className="bi bi-linkedin"></i></a>
                    </li>
                    <li>
                        <a href={props.socialLink.github}><i className="bi bi-github"></i></a>
                    </li>
                    <li>
                        <a href={props.socialLink.telegram}><i className="bi bi-telegram"></i></a>
                    </li>
                    <li>
                        <a href={props.socialLink.instagram}><i className="bi bi-instagram"></i></a>
                    </li>
                </ul>
            </div>
            <h3>{props.name}</h3>
            <span>{props.responsibility}</span>
        </div>
    )
}

export default TeamBox