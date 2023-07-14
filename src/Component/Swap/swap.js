import React from 'react'
import '../Swap/swap.css'
import { useNavigate } from 'react-router-dom';

const Swap = () => {
    const navigate = useNavigate();
    return (
        <div className='container-swap'>
            <div className='swap-container'>
                <text className='name'>Swap</text>
                <text className='swap-form'>Swap from</text>
                <text className='ETH'>ETH</text>
                <button class="dropbtn">
                    <i class="fa fa-caret-down"></i>
                </button>
                <text className='balance'>Balance 70.42</text>
                <h2><span> &#8645;</span></h2>
                <text className='swap-to'>Swap to</text>
                <text className='balance2'>Balance:-</text>
                <button class="dropbtn1" onClick={() =>navigate('/token')}>Select a Token <i class="fa fa-caret-down"></i></button>
                <button className='amount'>Enter an Amount</button>
            </div>
        </div>

    )
}

export default Swap
