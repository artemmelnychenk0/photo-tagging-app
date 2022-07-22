import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import kratos from '../assets/kratos.png'
import nathan from '../assets/nathan-drake.png'
import arthur from '../assets/arthur-morgan.png'


const Header = () => {

    return (
        <Navbar sticky="top" bg="dark" variant="dark" >
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#">
                        <div className='kratoss'>
                            <img src={kratos} alt='kratos'></img>
                            <h3>Kratos</h3>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="#">
                        <div className='kratoss'>
                            <img src={nathan} alt='kratos'></img>
                            <h3>Nathan Drake</h3>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="#">
                        <div className='arthur'>
                            <img src={arthur} alt='kratos'></img>
                            <h3>Arthur Morgan</h3>
                        </div>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Header