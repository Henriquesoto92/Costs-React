import styles from './style.module.css'

import { useLocation } from "react-router-dom"

import {
    Message, 
    Container, 
    LinkButtom
} from "../../layout/index"


function Projects() {

    const location = useLocation();
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>                
                <LinkButtom to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type='success' msg={message} />}
            <Container customClass="start">
                <p> Projetos...</p>
            </Container> 
        </div>
    )
}
export default Projects