import HeaderMain from "../../headers/HeaderMain";

export default function Social(){
    return (
        <>
            <HeaderMain title="Social Media"/>
            <div className="social-widget">
                <ul>
                    <li>
                        <a href="#" className="social-facebook">
                        <i className="fa fa-facebook" aria-hidden="true"/>
                        <span>21.2K<br/>Followers</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="social-twitter">
                        <i className="fa fa-twitter" aria-hidden="true"/>
                        <span>10.2K<br/>Followers</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="social-instagram">
                        <i className="fa fa-instagram" aria-hidden="true"/>
                        <span>5K<br/>Followers</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}