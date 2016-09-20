import React , { Component } from 'react';
import {render } from 'react-dom'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'
import  TrackerReact  from 'meteor/ultimatejs:tracker-react'
import ResolutionSingle from './ResolutionSingle'


 Resolution=new Mongo.Collection("resolutions");

export default class App extends TrackerReact(Component){
    constructor(){
        super();
        this.state={
            subscription : {
                resolution : Meteor.subscribe('userResolution')
            }
        }
    }

    resolution(){
        return Resolution.find().fetch();
    }

    componentWillUnmount(){
        this.state.subscription.resolution.stop();
    }

    addResolution(event){
        event.preventDefault();
        var text=this.refs.resolution.value.trim();
        console.log('---------------',text);
        if(text){
            Meteor.call('addResolution',text,(error,data)=>{
                if(error){
                    Bert.alert('Please login before submitting','danger', 'growl-top-right');
                }
                else{
                    this.refs.resolution.value="";
                    Bert.alert({
                        type: 'success',
                        style: 'growl-bottom-right',
                        title: 'SuccessFully Saved',
                        message: 'ToDo Item SuccessFully Added',
                        icon: 'fa-check'
                    });
                }

            });
        }else{
            Bert.alert( 'Please Enter Some Text and Than Press Enter!', 'info', 'fixed-top', 'fa-info' );

        }


    }
    render(){

        console.log('----this.resolution()-----',this.resolution());
        return(
            <div>
                <h1>My Resolution</h1>
                <form className="new-resolutions" onSubmit={this.addResolution.bind(this)}>
                    <input
                        type="text"
                        ref="resolution"
                        placeholder="Finish React Meteor React Series"
                        />
                </form>
                <ReactCssTransitionGroup
                    component="ul"
                    className="resolutions"
                    transitionName="resolutionLoad"
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={400}>
                    {
                    this.resolution().length>0 &&  <ResolutionSingle resolution={this.resolution()}/>
                }

                </ReactCssTransitionGroup>
            </div>)
    }
}
