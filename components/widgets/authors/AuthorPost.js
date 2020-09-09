import HeaderMain from "../../headers/HeaderMain";

export default function AuthorPost(props){
    return (
        <div className="section-row">
            <HeaderMain title={props.name}/>
            <div className="author media">
                <div className="media-left">
                    <a href="#">
                    <img className="author-img media-object gm-loaded gm-observing gm-observing-cb" data-src="./img/team/Satish.jpg?ar=1:1&amp;crop=faces" alt="" src="https://writevia.gumlet.io/img/team/Satish.jpg?ar=1%3A1&amp;crop=faces&amp;w=160&amp;dpr=1.3"/>
                    </a>
                </div>
                <div className="media-body">
                    <p>Didn’t you find our website engaging, catchy and dynamic? So, here is Satish, currently doing his MCA, who would always make you fall in love with the UI, which would otherwise give you the worst nightmares.</p>
                    <ul className="author-social">
                        <li><a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}