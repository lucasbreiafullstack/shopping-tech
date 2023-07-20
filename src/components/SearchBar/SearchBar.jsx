import React, { useState, useContext } from "react";
import { BiSearchAlt } from 'react-icons/bi';

import './SearchBar.css'
import fetchProducts from "../../api/fetchProudcts";
import AppContext from "../../context/AppContext";

const SearchBar = () =>{

    const { setProducts, setLoading } = useContext(AppContext)
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = async (event) =>{
        event.preventDefault();
        setLoading(true);
        const products = await fetchProducts(searchValue);
        setProducts(products);
        setLoading(false);
        setSearchValue('');
    }

    return (
        <form className="search-bar" onSubmit={handleSearch}>
          <input 
            type="search"
            value={searchValue} 
            placeholder="Buscar produtos" 
            className="search_input"
            onChange={({target}) => setSearchValue(target.value)} 
            required
            />
            <button type='submit' className='search_button'>
                <BiSearchAlt/>
            </button>
        </form>
    )
}

export default SearchBar;