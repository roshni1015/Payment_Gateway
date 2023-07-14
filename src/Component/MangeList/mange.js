import React from 'react'
import '../MangeList/mange.css'
import { useNavigate } from 'react-router-dom';

const Mange = () => {
  const navigate = useNavigate();


  return (
    <div>
      <div className='contanierS'>
        <div className='search-token'>
          <text className='head12'>Manage</text>
          <text className='close12'onClick={() =>navigate('/')}>x</text>
          <div className='options'>
            <text className='List'>Lists</text>
            <text className='Token'>Token</text>

          </div>

          <div className="search" >
            <input className="Search-input" placeholder="http:// or ipfs:// orENS name" type="text" /><div className='S-icon'>
              <span className="glyphicon
              glyphicon-search"></span>
            </div>
          </div>
          <div className='token-type'>
            <button className='inch'>Game Token List
              <label class="switch">
                <input class="switch-input" type="checkbox" />
                <span class="switch-label" ></span> 
                <span class="switch-handle"></span> 
            </label></button>
            <button className='APY'>APY Governance Token
            <label class="switch1">
                <input class="switch-input" type="checkbox" />
                <span class="switch-label" ></span> 
                <span class="switch-handle"></span> 
            </label></button>
            <button className='basic'>Basic Attention Token
            <label class="switch2">
                <input class="switch-input" type="checkbox" />
                <span class="switch-label" ></span> 
                <span class="switch-handle"></span> 
            </label></button>
            <button className='atomic'>Atomic Wallet Token
            <label class="switch3">
                <input class="switch-input" type="checkbox" />
                <span class="switch-label" ></span> 
                <span class="switch-handle"></span> 
            </label></button>
            <button className='algo'>Algorand
            <label class="switch4">
                <input class="switch-input" type="checkbox" />
                <span class="switch-label" ></span> 
                <span class="switch-handle"></span> 
            </label></button>
            
          </div>

        </div>
      </div>
    </div>
  )

}

export default Mange
