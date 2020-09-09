import React from 'react';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import NavSearch from './NavSearch';
import NavLinks from './NavLinks';
export default class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={flag:true};
    }
    collapseNavbar(){
        document.querySelector('.nav-bar').classList.add('collapse-nav-bar');
        document.querySelector('.top-nav-bar').classList.add('collapse-top-nav');
        document.querySelector('.nav-links').classList.add('collapse-nav-links');
    }
    expendNavbar(){
        document.querySelector('.nav-bar').classList.remove('collapse-nav-bar');
        document.querySelector('.top-nav-bar').classList.remove('collapse-top-nav');
        document.querySelector('.nav-links').classList.remove('collapse-nav-links');
    }
    componentDidMount() {
        window.addEventListener('scroll',()=>{
            if (window.innerWidth > 768 && window.scrollY > 100 && this.state.flag) {
                this.collapseNavbar();
                this.setState({flag:false});
            } else if (window.innerWidth > 768 && window.scrollY < 100 && !this.state.flag) {
                this.expendNavbar();
                this.setState({flag:true});
            }
        });
        window.addEventListener('resize',()=>{
            if (window.innerWidth <= 768) {
                this.expendNavbar();
            } else if (window.innerWidth > 768 && window.scrollY > 100) {
                this.collapseNavbar();
            }
        });
    }
    render(){
        return (
            <>
                <nav className="nav-bar">
                    <div className="top-nav-bar">
                        <NavLogo/>
                        <NavMenu/>
                    </div>
                    <NavSearch/>
                    <NavLinks/>
                </nav>
                <div className="container-fluid nav-bar-relative-strip"/>
            </>
        )
    }
}