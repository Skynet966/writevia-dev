export default function PostTags(props){
    let tags=props.tags+'';
    tags=tags.split(',');
    let tagsList=props.tags?tags.map(tag=>{
        return <li className="tag"><a>{tag}</a></li>
    }):'';
    return (
            <ul className="post-tags">
                {tagsList}
            </ul>
    )
}