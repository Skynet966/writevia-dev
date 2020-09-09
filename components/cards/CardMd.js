export default function CardMd(){
    return (
        <div className="post-card-md">
            <figure className="post-card-img">
                <img src="https://writevia.gumlet.io/Upload/1595243037.jpg?ar=3%3A2&w=360&dpr=1.3" alr="Drug Abuse"/>
            </figure>
            <div className="post-card-body">
                <div className="post-card-top">
                    <div className="post-card-category">
                        <a>Trending</a>
                    </div>
                    <div className="post-card-share">
                        <ul>
                            <li className="fa fa-facebook social-facebook-color"/>
                            <li className="fa fa-twitter social-twitter-color"/>
                            <li className="fa fa-whatsapp social-whatsapp-color"/>
                            <li className="fa fa-pinterest-p social-pinterest-color"/>
                        </ul>
                    </div>
                </div>
                <div className="post-card-title">
                    <a>What is the truth behind Chinese apps? All you need to know about them before you install any app</a>
                </div>
                <div className="post-card-meta">
                    <ul>
                        <li><span className="fa fa-user-o"/><a>Satish Kumar Yadav</a></li>
                        <li><span className="fa fa-calendar-o"/>JULY-20-2020</li>
                        <li><span className="fa fa-heart-o"/>2K</li>
                        <li><span className="fa fa-comments-o"/>15M</li>
                        <li><span className="fa fa-clock-o"/>5 Min Read</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}