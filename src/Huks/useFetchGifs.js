import { useState, useEffect } from "react";
import { GetGifs } from "../Helpers/GetGifs";


export const useFetchGifs = (category) => {

        const [images, setImages] = useState([]);
        const [isLoader, setIsloader] = useState(true);
    
        const getNewCategory = async()=>{
            const newImages = await GetGifs(category);
            setImages(newImages);
            setIsloader(false);
        }
    
    
        //este state es para que no cargue todo cuando cambia alguna parte del componente
        useEffect(()=>{
    
            getNewCategory();
    
        }, [ ]);

        return {
            images ,
            isLoader
        };
}
