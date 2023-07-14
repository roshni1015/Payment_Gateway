import React from 'react'
import '../Token/token.css'
import { useNavigate } from 'react-router-dom';

const Token = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='contanier'>
        <div className='select-token'>
          <text className='head'>Select a Token</text>
          <text className='close'onClick={() =>navigate('/')}>x</text>
          <div className="search" >
                    <input className="Search-input" placeholder="Search name or paste address..." type="text" /><div className='S-icon'>
           <span className="glyphicon
                glyphicon-search"></span>
           </div>
                </div>                  
         <div className='token-type'>
         <button className='inch'>1INCH Token </button>
          <button className='APY'>APY Governance Token</button>
          <button className='basic'>Basic Attention Token</button>
          <button className='atomic'>Atomic Wallet Token</button>
          <button className='algo'>Algorand</button>
          <button className='aeter'>Aeternity</button>
          <button className='ella'>ELLAsset</button>
         </div>
      
        </div>
      </div>
    </div>
  )
}

export default Token
