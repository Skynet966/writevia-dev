import Weather from "../components/widgets/weather/Weather";
import Social from "../components/widgets/social/Social";
import Categories from "../components/widgets/categories/Categories";

export default class Side extends React.Component{
    constructor(props){
        super(props);
        this.state={
            aside:null
        }
    }
    alignside(){
        if(this.state.aside!==null){  
            if (window.innerWidth <= 767){
                this.state.aside.classList.add('order-last');
            }else{
                this.state.aside.classList.remove('order-last');
            }
        }
    }
    componentDidMount(){
        let el = document.querySelector('aside');
        this.setState({aside:el});
        window.addEventListener('resize',()=>{
            this.alignside();
        });
        window.addEventListener('load',()=>{
            this.alignside();
        });
    }
    componentWillUnmount(){
        this.setState({aside:null});
    }
    render(){
        return (
            <aside className="col-md-4 section">
                <div className="row section-row">
                    <section className="col-md-12">
                        <Social/>
                        <Categories/>
                        <Weather/>
                    </section>
                </div>
            </aside>
        )
    }
}