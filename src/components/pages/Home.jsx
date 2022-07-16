import styles from './home.module.css'

import savings from "../../img/savings.svg"
import LinkButtom from '../layout/LinkButtom'

function Home() {
    return (
        <section className={styles.homeContainer}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButtom to="/newproject" text="Criar Projeto" />
            <img src={savings} alt="Costs" />
        </section>
    )
}
export default Home