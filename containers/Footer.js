import React from 'react';
import Authors from '../components/widgets/authors/Authors';
import Tags from '../components/widgets/tags/Tags';
import Subscribe from '../components/widgets/subscribe/Subscribe';
import Intro from '../components/widgets/intro/Intro';
import Counter from '../components/widgets/counters/Counter';
import FooterNav from '../components/navbar/FooterNav';
export default function Footer(){
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <Intro/>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Authors/>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Tags/>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="row">
                            <div className="col-12">
                                <Subscribe/>
                            </div>
                            <div className="col-12">
                                <Counter/>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterNav/>
            </div>
        </footer>
    )
}