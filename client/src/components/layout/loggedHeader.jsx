import NavItem from "./navItem";
import logo from "../../assets/logo.png";
import MenuSelection from "../containers/menuSelection";
import { NavLink } from "react-router-dom";

//Icones
import { ArrowLeftToLine } from 'lucide-react';
import { ArrowRightLeft } from 'lucide-react';
import { Headset } from 'lucide-react';
import { Users } from 'lucide-react';
import { Mail } from 'lucide-react';

import { useAuthContext } from "../../context/authContext";

const Header = () => {
    const { logout} = useAuthContext();

    return (
      <>
        <nav className="top-0 w-full flex justify-start items-center py-2 px-5 text-white bg-red-500">

          <a className="flex gap-2 text-sm items-center font-semibold cursor-pointer" onClick={() => {logout()}}><ArrowLeftToLine /> Encerrar sessão</a>

        </nav>
        <header className="w-full flex items-center justify-around text-black py-2 px-8 md:px-0 bg-white drop-shadow-md">
          <NavLink to="/">
            <img className="h-12" src={logo} alt="/" />
          </NavLink>
      
                {/*Janela Pop-up de cadastro*/}
                <NavItem>
                  <MenuSelection /> 
                </NavItem>    
                
                <NavItem to="/liberações" icon={ArrowRightLeft}>Liberações</NavItem>
                <NavItem to="/usuarios" icon={Users}>Usúarios</NavItem>
                <NavItem to="/suporte" icon={Headset}>Suporte</NavItem>
                <NavItem to="/mensagens" icon={Mail}>Mensagens</NavItem>

        </header>
      </>
    );
}

export default Header;