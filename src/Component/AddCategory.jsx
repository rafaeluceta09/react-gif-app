import {useState} from 'react';

export const AddCategory = ({onNewCategory}) =>{

    const [imputValue, setImputValue] = useState('')


    const onChangeText = ({target}) =>{

        setImputValue(target.value);

    }

    const onSubmit = (e) => {
        //esta opcion es para que no recarguue la pagina cada vez que el form hace un submit
        e.preventDefault();
        
        if(imputValue.trim().length <= 1 ) return;

        onNewCategory(imputValue.trim());

        setImputValue('');
        

    }

    return (
        <form onSubmit={onSubmit}>
            <div> Add Category</div>
            <input type='text'
                value={imputValue}
                onChange={onChangeText}
                placeholder='agregue la categoria'
                className="imput-text-01"
            />
            <button>
                agregar
            </button>

        </form>


    );



};