import SocialCircle from "../social/SocialCircle";

export default function Intro(){
    return (
        <div className="footer-widget">
            <div className="footer-logo">
                <a href="index.html" className="logo"><img width="150" src="https://writevia.gumlet.io/img/logo/writevia_name_logo_alt.png" alt=""/></a>
            </div>
            <p>We provide you with the latest and the trending updates from sport, current affairs, culture, politics, economy, etc., with a lot of other super interesting articles including, but not limited to, movie reviews, interviews, candid conversations.</p>
            <p>Join us in this noble quest, and write your heart out.</p>
            <SocialCircle/>
        </div>
    )
}