import HeaderMax from "../components/headers/HeaderMax";
import HeaderSuper from "../components/headers/HeaderSuper";
import HeaderMain from '../components/headers/HeaderMain'

export default function OurTeam(){
    return (
        <>
        <HeaderMax title="Our Team" subtitle="Writevia's digital warriors, ready to harness the Force for good."/>
        <section className="container section">
            <HeaderSuper title="Developers"/>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
						<div className="col-md-6">
							<div className="section-row">
								<HeaderMain title="Nitish Madan"/>
								<div className="author media">
									<div className="media-left">
										<a href="author.php?aname=Nitish Madan">
										<img className="author-img media-object gm-loaded gm-observing gm-observing-cb" data-src="./img/team/Nitish.jpg?ar=1:1&amp;crop=faces" alt="" src="https://writevia.gumlet.io/img/team/Nitish.jpg?ar=1%3A1&amp;crop=faces&amp;w=160&amp;dpr=1.3"/>
										</a>
									</div>
									<div className="media-body">
										<p>A pivotal person in this entrepreneurial venture, Nitish brings in the required technical expertise to help create this amazing platform. Always passionate about latest technologies, be it automobiles, electronic gadgets, etc., he has been leading from the front in running this venture.</p>
										<ul className="author-social">
											<li><a href="https://www.facebook.com/Nmadan20"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
											<li><a href="https://twitter.com/madan_nitish"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
											<li><a href="https://www.instagram.com/madan_nitish"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="section-row">
                                <HeaderMain title="Satish Kumar Yadav"/>
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
						</div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}