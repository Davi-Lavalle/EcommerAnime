import Header from  "../../componetes/Header";
import Navigation from  "../../componetes/Navigation";
import Container from  "../../componetes/Container";
import Footer from  "../../componetes/Footer"
import styles from './Page404.module.css'




function Page404(){
    return(
        <>
        <Header/>
        <Navigation/>
        <Container>
            <h2 className={styles.titulo2}>Algo de errado não está certo</h2>
            <div className={styles.textos}>
                <span className={styles.texto_grande}>404</span><br/>
                <strong className={styles.texto_vermelho}>Pagina Não Localizada</strong>
            </div>
        </Container>
        <Footer/>
        </>
    )
}
export default Page404