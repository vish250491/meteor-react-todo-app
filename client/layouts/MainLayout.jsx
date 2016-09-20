import React , { Component } from 'react';
import {Link} from 'react-router';
import AccountsUI from '../components/AccountsUi.jsx';

export const MainLayout=({content})=> (
    <div  className="main-layout">
             <header>
                <h2>My Resolution</h2>
                 <nav>
                     <a href="/">Resolutions</a>
                     <a href="/about">About</a>
                     <AccountsUI/>
                 </nav>
            </header>
                 <main>
                     { content }
                 </main>

    </div>
)