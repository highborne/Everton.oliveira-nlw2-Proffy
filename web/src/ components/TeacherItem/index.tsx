import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://pbs.twimg.com/profile_images/1156684597045936135/_YxF_DY4_400x400.jpg"
            alt="Everton Cardoso"/>
            <div>
                <strong>Everton Cardoso</strong>
                <span>Matematica</span>
               
            </div>
        </header>

        <p>
            Testo auqi e aquir tbm
            <br /><br />
            dasdasa alooeiaoklkasdklkklanqmndaksdkla
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;