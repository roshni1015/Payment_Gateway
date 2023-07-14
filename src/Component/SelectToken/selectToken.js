import React from 'react'
import '../SelectToken/selectToken.css'
import { useNavigate } from 'react-router-dom';


const SelectToken = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='contanier'>
                <div className='select-token'>
                    <text className='head14'>Select a Token</text>
                    <text className='close14' onClick={() =>navigate('/')}>x</text>
                    <div className="search" >
                        <input className="Search-input" placeholder="Search name or paste address..." type="text" /><div className='S-icon'>
                            <span className="glyphicon
                glyphicon-search"></span>
                        </div>
                    </div>
                    <div className='common'> Commom Bases<br></br>
                    <button className='inch1'>ETH </button>
                    <button className='inch1'>WETH</button>
                    <button className='inch1'>DAI </button>
                    <button className='inch2'>USDT </button>
                    <button className='inch2'>WBTC</button>
                    <button className='inch2'>USDC </button>

                    </div>

                    <div className='token-type'>
                        <button className='inch'>1INCH Token </button>
                        <button className='APY'>APY Governance Token</button>
                        <button className='basic'>Basic Attention Token</button>
                        <button className='atomic'>Atomic Wallet Token</button>
                      </div>
                    <button className='manage1'><i className='fa fa-edit'></i>Manager</button>

                </div>
            </div>
        </div>
    )
}

export default SelectToken
