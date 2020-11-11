import React from 'react';
import HeaderMain from '../../headers/HeaderMain';
export default class Weather extends React.Component{
    constructor(props){
        super(props);
        this.options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        this.state ={city:null,country:null,temp:null,desc:null,icon:null,lat:null,lon:null};
    }
    getWeather(lat,lon){
        if(lat&&lon){
            console.log(lat,lon)
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=7d0aef1d6da83a6ba6a6cb629993f2f3`;
            const promise = fetch(url);
            promise.then(response=>{
                response.json().then(weather=>{
                    this.setState({city:weather.name,country:weather.sys.country,temp:weather.main.temp,desc:weather.weather[0].main,icon:'https://openweathermap.org/img/wn/'+weather.weather[0].icon+'.png'});
                }).catch(err=>{
                    console.log('There is an error in paring json!');
                })
            }).catch(err=>{
                console.log('There is some error in fetching weather!');
            });
            document.querySelector('.weather-widget').classList.add('show');
        }
    }
    getLocation(){
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(pos=>this.getWeather(pos.coords.latitude,pos.coords.longitude));
        } else {
            console.log("Not Available");
        }
        // const url = `http://api.ipstack.com/check?access_key=1b898153ec3106e7861abe88bb76ee61&format=1`;
    }
    componentDidMount(){
        this.getLocation();
    }
    render(){
        return (
            <>
                <HeaderMain title="Weather"/>
                <div className="weather-widget">
                    <figure className="art">
                        <img src="https://writevia.gumlet.io/assets/vendor/weather/dist/weather.png?w=200&dpr=1.3" alt="place art"/>
                    </figure>
                    <div className="date">
                        <p>{Intl.DateTimeFormat('en-US', this.options).format()}</p>
                    </div>
                    <div className="location">
                        <div className="city">
                            <p>{this.state.city}</p>
                        </div>
                        <div className="country">
                            <p>{this.state.country}</p>
                        </div>
                    </div>
                    <div className="weather">
                        <div className="imgage">
                            <img src={this.state.icon} alt="weather graphic"/>
                        </div>
                        <div className="temp">
                            <p>{Math.round(this.state.temp)}</p>
                        </div>
                        <div className="desc">
                            <p>{this.state.desc}</p>
                        </div>
                    </div>
                </div>
        </>
        )
    }
}