import HeaderMax from "../components/headers/HeaderMax";
import HeaderMain from "../components/headers/HeaderMain";
import Contact from "../components/widgets/contact/Contact";
import InputBoxMessage from '../components/widgets/popups/Popups';

export default function ContactUs(){
    return (
        <>
        <HeaderMax title="Contact Us" subtitle="Give your valuable feedback to improve user experience and content on our website. We value your experience."/>
        <section className="section container">
            <div className="row">
                <div className="col-md-7">
                    <HeaderMain title="Write to us"/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 form-group">
                                <input className="input" type="text" placeholder="Name"/>
                                <InputBoxMessage status="" desc=""/>
                            </div>
                            <div className="col-md-12 form-group">
                                <input className="input" type="email" placeholder="Email"/>
                                
                            </div>
                            <div className="col-md-12 form-group">
                                <input className="input" type="number" placeholder="Contact number"/>
                                
                            </div>
                            <div className="col-md-12 form-group">
                                <textarea className="input" placeholder="Message..."/>
                                
                            </div>
                            <div className="col-md-4 form-group">
                                <button className="primary-button" >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <Contact/>
                </div>
            </div>
        </section>
        </> 
    )
}