import React from 'react'
import '../SearchToken/search.css'
import Token from '../Token/token';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    
  const navigate = useNavigate();

  return (
    <div>
      <div className='contanierS'>
        <div className='search-token'>
          <text className='head1'>Select a Token</text>
          <text className='close1' onClick={() =>navigate('/')}>x</text>
          
          <div className="search" >
                    <input className="Search-input" placeholder="Search name or paste address..." type="text" /><div className='S-icon'>
           <span className="glyphicon
                glyphicon-search"></span>
           </div>
                </div>  
           
              
          <button className='manage'><i className='fa fa-edit'></i>Manager</button>
        </div>
      </div>
    </div>
  )
}

export default Search
