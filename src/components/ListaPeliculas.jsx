import Pelicula from "./Pelicula";

const ListaPeliculas = () => {
    return (
        <div className={`rounded border border-dark p-3 my-5`}>
            <div className='d-flex row justify-content-around mt-4'>
                <Pelicula></Pelicula>
            </div>
        </div>
    );
};

export default ListaPeliculas;

