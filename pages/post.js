import Link from 'next/link';
import Side from '../containers/Side';
import LikePost from '../components/widgets/like/LikePost';
import PostTags from '../components/widgets/tags/PostTags';
import CardNav from '../components/cards/CardNav';
import AuthorPost from '../components/widgets/authors/AuthorPost';
import HeaderMain from '../components/headers/HeaderMain';
import CardSm from '../components/cards/CardSm';
import Blocks from 'editorjs-blocks-react-renderer';
import { PureComponent } from 'react';

export default class Post extends PureComponent{
    constructor(){
        super();
        this.state={
            post:''
        }
    }
    getPostData(){
        fetch('http://localhost:5000/post').then(data=>{
            data.json().then(post=>{
                this.setState({post:post[0]});
                console.log(post[0]);
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err))
    }
    componentDidMount(){
        this.getPostData();
    }
    render(){
        return (
            <>
                <div id="post-header" className="page-header">
                    <div className="page-header-bg" style={{ backgroundImage: `url(${this.state.post.image})` }} data-stellar-ratio="2" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="post-category">
                                    <Link href="blogs"><a>{this.state.post.category}</a></Link>
                                </div>
                                <h1>{this.state.post.title}</h1>
                                <ul className="post-meta">
                                    <li><span className="fa fa-user-o" /><Link href="team"><a>{this.state.post.created_by}</a></Link></li>
                                    <li><span className="fa fa-calendar-o" />{this.state.post.created_at}</li>
                                    <li><span className="fa fa-heart-o" />{this.state.post.likes}</li>
                                    <li><span className="fa fa-comments-o" />{this.state.post.comments}</li>
                                    <li><span className="fa fa-eye" />{this.state.post.views}</li>
                                    <li><span className="fa fa-clock-o" />{this.state.post.read_time} Min Read</li>
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
                                <Blocks data={this.state.post.title?this.state.post.content:{blocks:[]}}/>
                            </article>
                            <LikePost/>
                            <PostTags tags={this.state.post.tags}/>
                            <CardNav/>
                            <AuthorPost name={this.state.post.created_by}/>
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
}