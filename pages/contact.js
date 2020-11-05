import HeaderMax from "../components/headers/HeaderMax";
import HeaderMain from "../components/headers/HeaderMain";
import Contact from "../components/widgets/contact/Contact";
import InputBoxMessage from '../components/widgets/popups/Popups';
import { PureComponent } from "react";
import validator from "validator";
import requestURL from "../helpers/requestURL";
import postRequestHeader from "../helpers/postRequestHeader";
import Swal from "sweetalert2";

export default class ContactUs extends PureComponent{
    constructor(){
        super();
        this.state={
            name:{
                value:'',
                status:'',
                desc:''
            },
            email:{
                value:'',
                status:'',
                desc:''
            },
            phone:{
                value:'',
                status:'',
                desc:''
            },
            message:{
                value:'',
                status:'',
                desc:''
            },
            code:'',
            countries:[]
        }
    }
    componentDidMount(){
        this.populatesCountries();
    }
    populatesCountries(){
        fetch(requestURL('countries')).then(res=>{
            res.json().then(data=>{
                this.setState({countries:data});
            }).catch(err=>{
                console.error(err);
            }).catch(err=>{
                console.log(err);
            })
        })
    }
    clearForm(){
        const form=document.querySelector('#contactForm');
        this.setState({
            name:{
                value:'',
                status:'',
                desc:''
            },
            email:{
                value:'',
                status:'',
                desc:''
            },
            phone:{
                code:'',
                value:'',
                status:'',
                desc:''
            },
            message:{
                value:'',
                status:'',
                desc:''
            },
            code:''
        });
        form.reset();
    }
    handleChange(e){
        e.preventDefault();
        let {name,value}=e.target;
        let success='';
        let error='';
        if(name==='name'&&(success='Your name is very nice')&&!validator.isAlpha(value.split(' ').join(''))){
            error='Enter a proper name';
        }else if(name==='email'&&(success='Email is looking fine')&&!validator.isEmail(value)){
            error='Enter a valid email';
        }else if(name==='phone'&&(success='Quite a nice phone number')&&!validator.isNumeric(value)&&value.length!==10){
            error='Enter valid phone number';
        }else if(name==='message'&&(success='It\'s looks perfect')&&value.length<11){
            error='Enter at least 10 character';
        }else if(name==='code'){
            console.log(value)
            this.setState({code:value});
            return;
        }
        if(validator.isEmpty(error)){
            this.setState({[name]:{value:value,status:'success',desc:success}});
        }else if(!validator.isEmpty(value)||name==='message'){
            this.setState({[name]:{value:'',status:'error',desc:error}});
        }
    }
    handleSubmit(e){
        e.preventDefault();
        const s=this.state;
        if(s.name.value&&s.email.value&&s.phone.value&&s.message.value){
            const url=requestURL('contact/create');
            const data={
                name:s.name.value,
                email:s.email.value,
                phone:'+'+s.code+s.phone.value,
                message:s.message.value
            }
            fetch(url,postRequestHeader(data)).then(res=>{
                res.json().then(doc=>{
                    if(doc.status===1){
                        Swal.fire({
                            icon:'success',
                            title:'Message sent Successfully',
                            text:'Dear '+doc.name+', Your message successfully sent to our team. Thank you',
                            footer:'Our Team contact with you soon (within 36 Hours)'
                        })
                        this.clearForm();
                    }else if(doc.status===409){
                        Swal.fire({
                            icon:'info',
                            title:'Alredy Submited!',
                            text:'Dear '+data.name+', Your message alredy save at our server. Thank you!.',
                            footer:'Our Team contact with you soon (within 36 Hours)'
                        })
                        this.clearForm();
                    }else{
                        Swal.fire({
                            icon:'error',
                            title:'Something went wrong!',
                            text:'Dear '+data.name+', Your message not sent due to server error!.',
                            footer:'Try after some time.'
                        })
                    }
                }).catch(err=>{
                    Swal.fire({
                        icon:'error',
                        title:'Something went wrong!',
                        text:'Dear '+data.name+', Your message not sent due to server error!.',
                        footer:'Try after some time.'
                    })
                    console.error('Something went wrong during json parsing, error::',err);
                })
            }).catch(err=>{
                Swal.fire({
                    icon:'error',
                    title:'Something went wrong!',
                    text:'Dear '+data.name+', Your message not sent due to server error!.',
                    footer:'Try after some time.'
                })
                console.error('There is some error occur::',err);
            })
        }
    }
    handleFocus(e){
        e.preventDefault();
        console.log(this.state)
        let {name,value}=e.target;
        let desc='';
        switch(name){
            case 'name': desc='Name only contains letters';
                        break;
            case 'email': desc='Email must have proper format';
                        break;
            case 'phone': desc='Require 10 digits only';
                        break;
            case 'message': desc='Write your message here';
                        break;
        }
        if(value==='')
            this.setState({[name]:{status:'info',desc:desc}});
    }
    render(){
        let countries=this.state.countries;
        let options=countries.map(val=>{return(<option key={val.country} value={val.country_code}>{val.country} (+{val.country_code})</option>)})
        return (
            <>
            <HeaderMax title="Contact Us" subtitle="Give your valuable feedback to improve user experience and content on our website. We value your experience."/>
            <section className="section container">
                <div className="row">
                    <div className="col-md-7">
                        <HeaderMain title="Write to us"/>
                        <form id="contactForm" onSubmit={this.handleSubmit.bind(this)} className="container">
                            <div className="row">
                                    <div className="col-md-12 form-group">
                                        <input className="input" name="name" onFocus={this.handleFocus.bind(this)} onBlur={this.handleChange.bind(this)} type="text" placeholder="Name" required/>
                                        <InputBoxMessage status={this.state.name.status} desc={this.state.name.desc}/>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input className="input" name="email" onFocus={this.handleFocus.bind(this)} onBlur={this.handleChange.bind(this)} type="email" placeholder="Email" required/>
                                        <InputBoxMessage status={this.state.email.status} desc={this.state.email.desc}/>
                                    </div>
                                    <div className="col-md-4 form-group">
                                        <select className="input" name="code" onChange={this.handleChange.bind(this)} placeholder="Country code" required>
                                            <option key="default" value="default">Country Code</option>
                                            {options}
                                        </select>
                                    </div>
                                    <div className="col-md-8 form-group">
                                        <input className="input" name="phone" onFocus={this.handleFocus.bind(this)} onBlur={this.handleChange.bind(this)} type="tel" placeholder="Contact number" required/>
                                        <InputBoxMessage status={this.state.phone.status} desc={this.state.phone.desc}/>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <textarea className="input" name="message" onFocus={this.handleFocus.bind(this)} onChange={this.handleChange.bind(this)} onBlur={this.handleChange.bind(this)} placeholder="Message..." required/>
                                        <InputBoxMessage status={this.state.message.status} desc={this.state.message.desc}/>
                                    </div>
                                    <div className="col-md-4 form-group">
                                        <button type="submit" className="primary-button">Submit</button>
                                    </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-5">
                        <Contact/>
                    </div>
                </div>
            </section>
            </> 
        )
    }
}
