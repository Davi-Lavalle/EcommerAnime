import Header from  "../../componetes/Header";
import Navigation from  "../../componetes/Navigation";
import Container from  "../../componetes/Container";
import Footer from  "../../componetes/Footer"
import styles from './Home.module.css'

function Home(){
    return(
        <>
        <Header/>
        <Navigation/>
        <Container>
            <section className={styles.home}>
            <div>
                <img src="/imagens/anime.jpeg" alt=""/>
            </div>
            <div>
                <h1>Oque é a Anime shop?</h1>
                <span>
                    Nós da Anime shop temos como principal missão <br/> 
                    trazer para você que é fã de anime <br/>
                    os melhores produtos do seu anime preferido <br/> 
                    de uma forma fácil e segura.
                </span>
            </div>
        </section>
        </Container>
        <Footer/>
        </>
    )
}

export default Home