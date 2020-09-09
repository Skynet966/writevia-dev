export default function LikePost() {
    return (
        <div className="like-content">
            <div className="card text-center pt-2" >
                <div className="card-body">
                    <i className="fa fa-heart fa-3x heart" aria-hidden="true"></i>
                    <p id="likeCountb">4</p>
                    <p>People like this post</p>
                </div>
            </div>
            <button className="btn-secondary like-review">
                <i className="fa fa-heart animate-unlike" aria-hidden="true"/> You liked this post
            </button>
        </div>
    )
}

