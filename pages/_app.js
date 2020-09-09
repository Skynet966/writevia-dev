import '../styles/style.sass'
import Layout from '../components/layout/Layout'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
function MyApp({ Component, pageProps }){
  return (
    <>
    <Layout/>
    <Header/>
    <Component {...pageProps}/>
    <Footer/>
    </>
  )
}

export default MyApp
