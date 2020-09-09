export default function FooterNav(){
    return (
        <div className="footer-bottom row">
            <div className="col-md-6 order-md-last mb-2">
                <ul className="footer-nav">
                    <li><a href="index.php">Home</a></li>
                    <li><a href="all-blogs.php">Blogs</a></li>
                    <li><a href="contact.php">Contact Us</a></li>
                    <li><a href="about.php">About Us</a></li>
                    <li><a href="team.php">Our Team</a></li>
                </ul>
            </div>
            <div className="col-md-6 order-md-first text-sm-center text-md-left">
                <div className="footer-copyright">
                    Copyright ©{new Date().getFullYear()} All rights reserved | by <a href="https://writevia.com">Writevia</a>
                </div>
            </div>
        </div>
    )
}