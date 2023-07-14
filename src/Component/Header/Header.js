import React from 'react'
import '../Header/Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='container'>
                <div className='Nav-bar'>
                    <text className='HeaderJ'>J$WAP</text>
                    <text className='Header-Swap' onClick={() =>navigate('/swap')}>Swap</text>
                    <text className='Header-Pool'>Pool</text>
                    <text className='Header-aboutJ'>About J$WAP</text>
                    <text className='Header-vote'>vote</text>
                    <div className='SQA'>
                        <text className='text-SQA'>0 SQA</text>
                    </div>
                    <div className='connect'>
                        <text className='connect-text'>Connect to Wallet</text>
                    </div>

                    <div className='dark-mode'>
                        <text className='image-moon'></text>
                    </div>
                    <div className='more-info'>
                        <text className='dots'>...</text>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default Header
