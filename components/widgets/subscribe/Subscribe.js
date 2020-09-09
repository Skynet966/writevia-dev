export default function Subscribe(){
    return (
        <div className="footer-widget">
            <h3 className="footer-title">Newsletter</h3>
            <div className="newsletter-widget">
                <div>
                    <p>Get the latest News and article Notification on your email.</p>
                    <input className="input" name="newsletter" placeholder="Enter Your Email"/>
                    <button className="primary-button">Subscribe</button>
                </div>
            </div>
        </div>
    )
}