import { Card, Button, Badge } from "react-bootstrap";

const Pelicula = ({pelicula, borrarPelicula}) => {
    return (
        <Card className="col-10 col-lg-3 mb-3 mx-1 p-1 bg-dark text-light">
            <Card.Header className='d-flex align-items-center'>
                <div className="circulo"></div>
                <div className='d-flex flex-column ms-3'>
                    <h5>{pelicula.nombre}</h5>
                    <Badge bg="primary">{pelicula.genero}</Badge>
                </div>
            </Card.Header>
            <div className='p-3'>
                {pelicula.descripcion}
            </div>
            <Card.Footer className='p-3'>
                <Button className='float-end' variant="danger" onClick={() => {borrarPelicula(pelicula)}}>Borrar</Button>
            </Card.Footer>
        </Card>
    );
};

export default Pelicula;