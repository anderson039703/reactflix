import React from 'react';
import Logo from '../../assers/img/Logo.png';
import '../Menu/Menu.css'
import Button from '../Button'

//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src ={Logo} alt="Aluraflix logo"></img>
            </a>

            <Button className="ButtonLink" href="/">
                Novo vídeo 
            </Button>
        </nav>
    );
}

export default Menu;