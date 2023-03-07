import './ServicesCard.css'

function ServicesCard(props) {
    return (
        <div className='service-card-box'>
            {props.children}
        </div>
    )
}

export default ServicesCard