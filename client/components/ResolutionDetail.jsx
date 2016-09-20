import React , { Component } from 'react';
import  TrackerReact  from 'meteor/ultimatejs:tracker-react'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'


export default class ResolutionDetail extends TrackerReact(Component){
    constructor(){
        super();
        this.state={
            subscription : {
                resolution : Meteor.subscribe('userResolution')
            }
        }
    }

    resolution(){
            return Resolution.findOne({_id:this.props.id});
    }

    componentWillUnmount(){
        this.state.subscription.resolution.stop();
    }


    render(){
        let res=(this.resolution());
        if(!res){
            return <div>Loading ...</div>
        }
        return(
            <ReactCssTransitionGroup
                component="div"
                className="resolutions"
                transitionName="route"
                transitionEnterTimeout={600}
                transitionAppearTimeout={600}
                transitionLeaveTimeout={400}
                transitionAppear={true}>
               <li>TEXT : {res.text}</li>
               <li>CREATED ON : {res.created.toDateString()}</li>
               <li>STATUS : {res.complete.toString()}</li>

           </ReactCssTransitionGroup>
        )
    }
}