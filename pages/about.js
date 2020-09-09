import HeaderMain from "../components/headers/HeaderMain";
import HeaderMax from "../components/headers/HeaderMax";

export default function About(){
    return (
        <>
        <HeaderMax title="About Us" subtitle="We love exploring!"/>
        <section className="section container">
            <main className="row">
                <section className="col-md-5">
                    <HeaderMain title="Our Story"/>
                    <p>This started during the terrible time of the Coronavirus pandemic. As you may have guessed it right, the WFH saved us too much time on the commuting front, so much, that we were spending hours surfing the web, but it only added to our disappointment of finding some interesting stuff.</p>
                    <p>It was only then Nitish came up with a self-made website, with some pending modifications done by him and Abhay, and pitched the idea of starting our own blogging site. Rahul, the content guy, was ready even before knowing it. So, the excess time coupled with the lack of good content online led to the start of this online blogging venture.</p>
                </section>
                <section className="col-md-7">
                    <HeaderMain title="Our Vision"/>
                    <p>We at Writevia bring the most relevant, informative and, yet, the most catchy and interesting stories related to sports, technology, trending topics, movies, culture, travel etc., to you. Your struggle to find quality content stops here. Unlike the other prominent and big players, we bring to you the most unbiased and a rational view of almost everything under the sun that matters to you. Through our posts, we intent to empower you with the “power of information”.</p>
                </section>
            </main>
        </section>
        </>
    )
}