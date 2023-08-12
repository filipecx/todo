import { NavLink } from 'react-router-dom'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Home } from '../pages/Home'
import { Compartilhado } from '../pages/Compartilhado'

export function Navegacao(){
    return(
        <Navbar className='Nav'>
            <Container>
                <Nav>
                    <Nav.Link to={'/'} as={NavLink}>
                       <p>Home</p>
                    </Nav.Link>
                    <Nav.Link to={'/compartilhado'} as={NavLink} >
                        <p>Compartilhado</p>
                    </Nav.Link>
                    <Nav.Link to={'#'} as={NavLink}>
                        <p>Logout</p>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}