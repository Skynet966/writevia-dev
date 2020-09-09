const scrollTop=()=>{
    window.scrollTo(0,0);
}
export default function GoTop(){
    return (
        <div className="go-to-top">
          <a onClick={scrollTop} className="fa fa-caret-up"></a>
        </div>
    )
}