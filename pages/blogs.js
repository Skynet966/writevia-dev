import Head from 'next/head';
import CarouselXl from '../components/carousels/CarouselXl';
import HeaderMain from '../components/headers/HeaderMain';
import CardMd from '../components/cards/CardMd';
import Side from '../containers/Side';
export default function Blogs(){
    return( 
        <>
            <Head>
                <title>Blogs</title>
            </Head>
            <section className="container-fluid">
                <div className="row">
                    <CarouselXl/>
                </div>
            </section>
            <div className="container">
            <div className="row">
                <main className="col-md-8 section order-first">
                  <HeaderMain title="Trending"/>
                    <section className="row section-row ">
                        <article className="col-md-6">
                            <CardMd/>
                        </article>
                        <article className="col-md-6">
                            <CardMd/>
                        </article>
                        <article className="col-md-6">
                            <CardMd/>
                        </article>
                        <article className="col-md-6">
                            <CardMd/>
                        </article>
                        <article className="col-md-6">
                            <CardMd/>
                        </article>
                        <article className="col-md-6">
                            <CardMd/>
                        </article>
                    </section>
                </main>
                <Side/>
            </div>
            </div>
        </>
    )
}