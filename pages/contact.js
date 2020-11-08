import HeaderMax from "../components/headers/HeaderMax";
import HeaderMain from "../components/headers/HeaderMain";
import Contact from "../components/widgets/contact/Contact";
import InputBoxMessage from '../components/widgets/popups/Popups';
import { PureComponent } from "react";
import validator from "validator";
import requestURL from "../helpers/requestURL";
import postRequestHeader from "../helpers/postRequestHeader";
import Swal from "sweetalert2";
import PhoneInput from "react-phone-input-2";

export default class ContactUs extends PureComponent{
    constructor(){
        super();
        this.state={
            loading:false,
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
                status:'info',
                desc:'Phone number is optional'
            },
            message:{
                value:'',
                status:'',
                desc:''
            }
        }
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
                value:''
            },
            message:{
                value:'',
                status:'',
                desc:''
            },
        });
        form.reset();
        document.querySelector('input[name=phone]').value='';
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
        }else if(name==='message'&&(success='It\'s looks perfect')&&value.length<11){
            error='Enter at least 10 character';
        }else if(name==='code'){
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
        if(s.name.value&&s.email.value&&s.message.value){
            const url=requestURL('contact/create');
            let data={
                name:s.name.value,
                email:s.email.value,
                message:s.message.value
            }
            console.log(this.state);
            if(s.phone.value){
                console.log(true)
                data.phone=s.phone.value;
            }else{
                console.log(s.phone.value)
            }
            this.setState({loading:true});
            fetch(url,postRequestHeader(data)).then(res=>{
                res.json().then(doc=>{
                    this.setState({loading:false});
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
    handlePhone(phone){
        let number=phone.target.value.substring(phone.target.value.indexOf(' ')+1);
        let len=(number.match(/\d/g) || []).length;
        if(len<10&&len>0){
            this.state.phone.status='error';
            this.state.phone.desc='Please enter a valid number';
        }else if(len>=10){
            this.state.phone.status='success';
            this.state.phone.desc='Nice phone number';
        }
    }
    handleFocus(e){
        e.preventDefault();
        let {name,value}=e.target;
        let desc='';
        switch(name){
            case 'name': desc='Name Contains only letters';
                        break;
            case 'email': desc='Email must have proper format';
                        break;
            case 'message': desc='Write your message here';
                        break;
        }
        if(value==='')
            this.setState({[name]:{status:'info',desc:desc}});
    }
    render(){
        return (
            <>
            <HeaderMax title="Contact Us" subtitle="Give your valuable feedback to improve user experience and content on our website. We value your experience."/>
            <section className="section container">
                <div className="row">
                    <div className="col-md-7">
                        <HeaderMain title="Write to us"/>
                        <form id="contactForm" onSubmit={this.handleSubmit.bind(this)} className={(this.state.loading)?'container loading':'container'}>
                            <div className="row">
                                    <div className="col-md-12 form-group">
                                        <input className="input" name="name" onFocus={this.handleFocus.bind(this)} onBlur={this.handleChange.bind(this)} type="text" placeholder="Name" required/>
                                        <InputBoxMessage status={this.state.name.status} desc={this.state.name.desc}/>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input className="input" name="email" onFocus={this.handleFocus.bind(this)} onBlur={this.handleChange.bind(this)} type="email" placeholder="Email" required/>
                                        <InputBoxMessage status={this.state.email.status} desc={this.state.email.desc}/>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <PhoneInput country="in" placeholder="Phone" inputProps={{name:'phone'}} onChange={phone=>this.setState({phone:{value:'+'+phone}})} onBlur={phone=>this.handlePhone(phone)} specialLabel=""/>
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
