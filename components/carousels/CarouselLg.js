export default function CarouselLg(){
    return (
        <div id="mainCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#mainCarousel" data-slide-to="0" className="active"/>
                <li data-target="#mainCarousel" data-slide-to="1"/>
                <li data-target="#mainCarousel" data-slide-to="2"/>
            </ol>
            <div className="carousel-inner rounded">
                <div className="carousel-item active" style={{height:'70vh'}}>
                    <img src="https://writevia.gumlet.io/Upload/1593888427.jpg?mode=fill" style={{height:'auto'}} className="d-block" alt="first" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}