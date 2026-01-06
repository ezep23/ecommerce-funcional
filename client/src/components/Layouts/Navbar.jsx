import { NavLink } from "react-router"
import { Image } from "@unpic/react"

export default function Navbar(){


    return(
        <header>

            <NavLink to='/'>

                <Image 
                    src="/assets/logo.svg" 
                    alt="Logo"
                    layout='fixed'
                />

            </NavLink>

            <nav>
                <ul>
                    <li><NavLink to={'/productos'}>PRODUCTOS</NavLink></li>
                    <li><NavLink to={'/nosotros'}>NOSOTROS</NavLink></li>
                    <li><NavLink to={'/contacto'}>CONTACTO</NavLink></li>
                </ul>
            </nav>

            <nav>
                <ul>
                    <li>
                        <NavLink to={'/cart'}>
                            <Image 
                                src='./assets/icons/cart.svg'
                                alt="Carrito de compras"
                                layout='fixed'
                            />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/login'}>
                            <Image 
                                src='./assets/icons/user.svg'
                                alt="Ir al perfil"
                                layout='fixed'
                            />
                        </NavLink>
                    </li>
                </ul>
            </nav>



        </header>
    )

}