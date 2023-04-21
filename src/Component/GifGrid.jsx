import { GridItems } from './GridItems';
import { useFetchGifs } from '../Huks/useFetchGifs';



export const GifGrid = ({ newCategory }) => {
    const { images, isLoader } = useFetchGifs(newCategory);

    
    return (
        <>
            <h3>{ newCategory }</h3>
                { isLoader  &&  
                    <div>   cargando ....</div>
                }
            <div className='card-grid'>
                {
                    
                        images.map(( img ) => (
                            <GridItems 
                                key={img.id}
                                { ...img } //esta opcion le pasa todas las propiedades de img al componente
                                />
                            ))
                        
                }
            </div>


        </>
    )

}
