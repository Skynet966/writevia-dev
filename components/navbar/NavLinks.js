import Link from 'next/link'
export default function NavLinks(){
    return(
        <ul className="nav-links">
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="post"><a>Blogs</a></Link></li>
            <li><Link href="contact"><a>Contact us</a></Link></li>
            <li><Link href="team"><a>Our team</a></Link></li>
            <li><Link href="about"><a>About us</a></Link></li>
        </ul>
    )
}