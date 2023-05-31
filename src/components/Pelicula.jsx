import { Card, Button, Badge } from "react-bootstrap";

const Pelicula = () => {
    return (
        <Card className="col-10 col-lg-3 mb-3 mx-1 p-1 bg-dark text-light">
            <Card.Header className='d-flex align-items-center'>
                <div className="circulo"></div>
                <div className='d-flex flex-column ms-3'>
                    <span>Nombre pelicula</span>
                    <Badge bg="primary">Genero</Badge>
                </div>
            </Card.Header>
            <div className='d-flex justify-content-around mt-3'>
                descripcion
            </div>
            <Card.Footer className='p-3'>
                <Button className='float-end' variant="danger">Borrar</Button>
            </Card.Footer>
        </Card>
    );
};

export default Pelicula;