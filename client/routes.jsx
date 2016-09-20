import React , { Component } from 'react';
import {render } from 'react-dom';
import {mount } from 'react-mounter';
import { MainLayout }  from './layouts/MainLayout.jsx'
import App from './components/App.jsx'
import About from './components/About.jsx'
import ResolutionDetail from './components/ResolutionDetail.jsx'

FlowRouter.route('/',{
    action(){
        mount(
            MainLayout, {
                content : (<App/>)
            }
        )
    }
});

FlowRouter.route('/about',{
    action(){
        mount(
            MainLayout, {
                content : (<About/>)
            }
        )
    }
});

FlowRouter.route('/resolution/:id',{
    action(params){
        mount(
            MainLayout, {
                content : (<ResolutionDetail id={params.id}/>)
            }
        )
    }
});