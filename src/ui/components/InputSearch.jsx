import { useNavigate } from "react-router-dom";
import { useForm } from "../../pokemon/hooks/useForm";



export const InputSearch = () => {
    const { searchText, onInputChange, onResetForm } = useForm({searchText: ''});
    const navigate = useNavigate();
    
    const onSearchSubmit = (e) => {
        e.preventDefault();
        
        if(searchText.trim().length < 1) return;

        navigate(`/pokemon/${searchText}`);
        
        onResetForm();
    }

    return (
        <form onSubmit={onSearchSubmit}>
            <input 
                type="text" 
                className="form-control ms-2" 
                placeholder="Search a Pokemon" 
                autoComplete="off" 
                name="searchText" 
                value={searchText} 
                onChange={onInputChange}
            />
        </form>
    )
}
