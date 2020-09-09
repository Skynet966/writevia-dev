import HeaderMain from "../../headers/HeaderMain";

const Contact=(props)=>{
    return (
        <>
            <HeaderMain title="Contact Infromation"/>
            <p className="text-muted">Writevia is there <strong>24 X 7</strong> for you.</p>
            <ul className="contact">
                <li><a href="tel:+91-817-878-7041"><i className="fa fa-phone" aria-hidden="true"/>+91-817-878-7041</a></li>
                <li><a href = "mailto:support@writevia.com"><i className="fa fa-envelope" aria-hidden="true"/>support@writevia.com</a></li>
                <li><a href="https://goo.gl/maps/JWJDrEBC8aphHLGY6" target="_blank"><i className="fa fa-map-marker" aria-hidden="true"/>New Delhi, Delhi, India</a></li>
            </ul>
        </>
    )
}
export default Contact;