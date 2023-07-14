import React from 'react'
import '../Transaction/transaction.css'
import { useNavigate } from 'react-router-dom';

const Trans = () => {
    const navigate = useNavigate();
    return (
        <div className='container-trans'>
            <div className='trans'>
                <text className='cl' onClick={() =>navigate('/header')}>x</text>
                <div className='icon'></div>
                <div className='trans-text'> Transaction Submitted</div>
                <div className='para'>Swapping 0.22 ETH for 9.74 1INCH</div>
                <button className='view'>View on Etherscan</button>
            </div>
        </div>

    )
}

export default Trans
