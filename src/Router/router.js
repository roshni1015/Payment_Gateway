import React from 'react'
import Header from '../Component/Header/Header'
import Search from '../Component/SearchToken/search';
import Mange from '../Component/MangeList/mange';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Token from '../Component/Token/token';
import Swap from '../Component/Swap/swap';
import SelectToken from '../Component/SelectToken/selectToken';
import Trans from '../Component/Transaction/transaction';


const Navigate = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' Component={Header}></Route>
                    <Route path='/swap' Component={Swap}></Route>
                    <Route path='/token' Component={Token}></Route>
                    <Route path='/search' Component={Search}></Route>
                    <Route path='/manage' Component={Mange}></Route>
                    <Route path='/select' Component={SelectToken}></Route>
                    <Route path='/trans' Component={Trans}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Navigate
