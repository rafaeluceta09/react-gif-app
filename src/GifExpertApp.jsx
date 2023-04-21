import {useState} from 'react';
import { AddCategory } from './Component/AddCategory';
import { GifGrid } from './Component/GifGrid';


export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['autos']);

    const onAddCategory = (newCategory) =>{

        //si el arreglo categories tiene la cateogia ya registrada , la retorno para que no se duuplique
        if(categories.includes(newCategory)) return ;
        setcategories(cats=> [newCategory,...cats]);

        //esta linea de codigo hace lo mismo que la anterior
        //setcategories([...categories,newCategory]);
    }

  return (
    <>
        <div>GifExpertApp</div>
        <AddCategory 
            onNewCategory={onAddCategory} 
        />
      
        <ol>
            {
                categories.map(category => (
                    <GifGrid newCategory={category} key={category} />                  
                ))
                
            }
            
        </ol>
    </>
  )
}
