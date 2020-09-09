const toggleNavLinks=()=>{
    document.querySelector('.nav-links').classList.toggle('open-nav-bar');
    document.querySelector('.nav-search-icon').toggleAttribute('hidden');
}
const showsearchbar=()=>{
    document.querySelector('.nav-search-bar').classList.add('fade-in');
    document.querySelector('.nav-search-icon.open').classList.toggle('show');
    document.querySelector('.nav-search-icon.clse').classList.toggle('show');
    setTimeout(()=>{document.querySelector('.nav-search-bar input[type=search]').focus()},500);
}
const hidesearchbar=()=>{
    document.querySelector('.nav-search-bar').classList.remove('fade-in');
    document.querySelector('.nav-search-icon.clse').classList.toggle('show');
    document.querySelector('.nav-search-icon.open').classList.toggle('show');
}
export default function NavMenu(){
    return(
        <div className="nav-menu">
            <div className="nav-search-icon open show" onClick={showsearchbar}>
                <span className="fa fa-search"/>
            </div>
            <div className="nav-search-icon clse" onClick={hidesearchbar}>
                <span className="fa fa-xing"/>
            </div>
            <div className="nav-hamburger-icon" onClick={toggleNavLinks}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}