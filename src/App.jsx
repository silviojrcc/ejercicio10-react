import './App.css'
import Formulario from './components/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <>
      <div>
      <Container>
        <h1 className='text-light m-3'>Administrador películas</h1>
        <Formulario></Formulario>

      </Container>
    </div>
    </>
  )
}

export default App;
