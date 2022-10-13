import React from 'react'

export const PeticionApi = () => {

    const [personajes, setPersonajes] = React.useState([]);
    const [paginacion, setPaginacion] = React.useState(1);

    const obtenerPersonajes = async () => {
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${paginacion}`);
            const { results } = await res.json();
            setPersonajes(results);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

    const siguiente = async () => {
        await setPaginacion(paginacion + 1);
        obtenerPersonajes();
    }
    
    const anterior = async () => {
        await setPaginacion(paginacion - 1);
        obtenerPersonajes();
    }

    return (
        <div>
            <h1>PETICIÓN AL API DE RICK AND MORTY</h1>
            <button onClick={obtenerPersonajes}>Traer Personajes</button>
            <button onClick={siguiente}>Siguiente</button>
            <button onClick={anterior}>Anterior</button>
            {
                personajes.map(({ id, name, image }) => (
                    <div key = {id}>
                        <h4 key = {id}>{id} - {name}</h4>
                        <img src = {image} alt = {name} />
                    </div>
                ))
            }
        </div>
    )
}
