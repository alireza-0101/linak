import './SiteIntroduction.css'

function SiteIntroduction(props) {
    return (
        <div className='introduction-box'>
            {props.children}
        </div>
    )
}

export default SiteIntroduction