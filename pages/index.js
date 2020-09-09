import Head from 'next/head'
import CarouselLg from '../components/carousels/CarouselLg'
import HeaderMain from '../components/headers/HeaderMain'
import Side from '../containers/Side'
import CardMd from '../components/cards/CardMd'
import CardSm from '../components/cards/CardSm'
import CardXs from '../components/cards/CardXs'
import CardLg from '../components/cards/CardLg'
import GoTop from '../components/widgets/gototop/GoTop'
export default function Home() {
  return (
      <>
      <GoTop/>
      <section className="container">
            <section className="row">
                <div className="col-sm-12">
                    <CarouselLg/>
                </div>
            </section>
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
                    <HeaderMain title="Fashion & LifeStyle"/>
                    <section className="row section-row">
                        <article className="col-lg-4 col-md-6">
                            <CardSm/>
                        </article>
                        <article className="col-lg-4 col-md-6">
                            <CardSm/>
                        </article>
                        <article className="col-lg-4 col-md-6">
                            <CardSm/>
                        </article>
                    </section>
                </main>
                <Side/>
                <section className="col-sm-12 section">
                  <HeaderMain title="Gameing & Technology"/>
                    <section className="row section-row">
                        <article className="col-lg-4 col-md-6">
                            <CardXs/>
                        </article>
                        <article className="col-lg-4 col-md-6">
                            <CardXs/>
                        </article>
                        <article className="col-lg-4 col-md-6">
                            <CardXs/>
                        </article>
                        <article className="col-lg-4 col-md-6">
                            <CardXs/>
                        </article>
                        <article className="col-lg-4 col-md-6">
                            <CardXs/>
                        </article>
                        <article className="col-lg-4 col-md-6">
                            <CardXs/>
                        </article>
                        <article className="col-lg-4 col-md-6">
                            <CardXs/>
                        </article>
                        <article className="col-lg-4 col-md-6">
                            <CardXs/>
                        </article>
                        <article className="col-lg-4 col-md-6">
                            <CardXs/>
                        </article>
                    </section>
                </section>
                <section className="col-sm-12 section">
                  <HeaderMain title="Fashion & Designing"/>
                    <section className="row section-row">
                        <article className="col-12">
                            <CardLg/>
                        </article>
                        <article className="col-12">
                            <CardLg/>
                        </article>
                        <article className="col-12">
                            <CardLg/>
                        </article>
                        <article className="col-12">
                            <CardLg/>
                        </article>
                        <article className="col-12">
                            <CardLg/>
                        </article>
                        <article className="col-12">
                            <CardLg/>
                        </article>
                        <article className="col-12">
                            <CardLg/>
                        </article>
                        <article className="col-12">
                            <CardLg/>
                        </article>
                        <article className="col-12">
                            <CardLg/>
                        </article>
                    </section>
                </section>
            </div>
        </section>
    </>
  )
}
