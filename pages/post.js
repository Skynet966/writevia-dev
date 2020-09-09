import Link from 'next/link'
import Side from '../containers/Side'
import LikePost from '../components/widgets/like/LikePost'
import PostTags from '../components/widgets/tags/PostTags'
import CardNav from '../components/cards/CardNav'
import AuthorPost from '../components/widgets/authors/AuthorPost'
import HeaderMain from '../components/headers/HeaderMain'
import CardSm from '../components/cards/CardSm'
export default function Post() {
    return (
        <>
            <div id="post-header" className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: 'url(/header-1.jpg)' }} data-stellar-ratio="2" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="post-category">
                                <Link href="blogs"><a>Lifestyle</a></Link>
                            </div>
                            <h1>The challenges faced by Indian start-ups during the Corona Virus Pandemic.</h1>
                            <ul className="post-meta">
                                <li><span className="fa fa-user-o" /><Link href="team"><a>Satish Kumar Yadav</a></Link></li>
                                <li><span className="fa fa-calendar-o" />JULY-20-2020</li>
                                <li><span className="fa fa-heart-o" />2K</li>
                                <li><span className="fa fa-comments-o" />15M</li>
                                <li><span className="fa fa-eye" />24M</li>
                                <li><span className="fa fa-clock-o" />5 Min Read</li>
                                <li><span className="fa fa-picture-o" /><Link href="/"><a>Writevia</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="container">
                <div className="row">
                    <main className="col-md-8 section order-first">
                        <article className="section-row">
                            <h3>Ea vix periculis sententiae, ea blandit pericula abhorreant pri.</h3>
                            <p>Lorem ipsum dolor sit amet, mea ad idque detraxit, cu soleat graecis invenire eam. Vidisse suscipit liberavisse has ex, vocibus patrioque vim et, sed ex tation reprehendunt. Mollis volumus no vix, ut qui clita habemus, ipsum senserit est et. Ut has soluta epicurei mediocrem, nibh nostrum his cu, sea clita electram reformidans an.</p>
                            <p>Est in saepe accusam luptatum. Purto deleniti philosophia eum ea, impetus copiosae id mel. Vis at ignota delenit democritum, te summo tamquam delicata pro. Utinam concludaturque et vim, mei ullum intellegam ei. Eam te illum nostrud, suas sonet corrumpit ea per. Ut sea regione posidonium. Pertinax gubergren ne qui, eos an harum mundi quaestio.</p>
                            <p>Nihil persius id est, iisque tincidunt abhorreant no duo. Eripuit placerat mnesarchum ius at, ei pro laoreet invenire persecuti, per magna tibique scriptorem an. Aeque oportere incorrupte ius ea, utroque erroribus mel in, posse dolore nam in. Per veniam vulputate intellegam et, id usu case reprimique, ne aperiam scaevola sed. Veritus omnesque qui ad. In mei admodum maiorum iracundia, no omnis melius eum, ei erat vivendo his. In pri nonumes suscipit.</p>
                            <p>Sit nulla quidam et, eam ea legimus deserunt neglegentur. Et veri nostrud vix, meis minimum atomorum ex sea, stet case habemus mea no. Ut dignissim dissentiet his, mei ea delectus delicatissimi, debet dissentiunt te duo. Sonet partiendo et qui, pro et veri solet singulis. Vidit viderer eleifend ad nam. Minimum eligendi suscipit ius et, vis ex laoreet detracto scripserit, at sumo sale solum pro.</p>
                            <p>Mei cu diam sonet audiam, his ad impetus fuisset indoctum. Te sit altera qualisque, stet suavitate ne vel. Euismod suavitate duo eu, habemus rationibus neglegentur ei qui. Debet omittam ad usu, ex vero feugait oporteat eos, id usu sint numquam sententiae.</p>
                            <h3>Sit nulla quidam et, eam ea legimus deserunt neglegentur.</h3>
                            <p>No possim singulis sea, dolores salutatus interpretaris eam ad. An singulis postulant his, an inermis urbanitas mel. Wisi veri noster eu est, diam ridens eum in. Omnium imperdiet patrioque quo in, est sumo persecuti abhorreant ei. Sed feugiat iracundia id, inermis percipit eu has.</p>
                            <p>In vidit homero ullamcorper his, ea mea senserit constituto, et alia idque congue sit. Postea percipit his ne. Probo movet noluisse in nam, sed ex utroque inermis corrumpit, oratio tation vix at. Usu aperiri assentior at, eam et melius iudicabit pertinacia.</p>
                        </article>
                        <LikePost/>
                        <PostTags/>
                        <CardNav/>
                        <AuthorPost name="satish kumar yadav"/>
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
                </div>
            </section>
        </>
    )
}