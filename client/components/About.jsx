import React , { Component } from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group'

export default class About extends Component{
    setVar(){
        Session.set('Meteor.loginButtons.dropdownVisible',true)
    }

    render(){
        return(
            <ReactCssTransitionGroup
                component="div"
                className="resolutions"
                transitionName="route"
                transitionEnterTimeout={600}
                transitionAppearTimeout={600}
                transitionLeaveTimeout={400}
                transitionAppear={true}>
               <h1>About Us</h1>
               <p>The "to do" collaboration mechanism has the following advantages:

                   the list of tasks is permanently visible in the talk page of the article, i.e. where most editors will see it.
                   articles with To-dos are automatically listed in the list of articles with To dos, so that additional editors unaware of the article are also attracted to it. More specialized sub-categories can be defined for specific purposes (e.g. for a WikiProject).
                   Feel free to discuss to-do lists in the talk page of articles, to add new tasks, or to work on pending tasks. We also encourage you to contribute to other articles by visiting the list of "articles with To-dos", at Category:Wikipedia pages with to-do lists.

                   Please note that the to-do list is edited in a special to-do page which is separate from the talk page of the article. However, its content automatically appears at the top of the talk page. Therefore, you cannot edit the normal talk page to modify the to-do list, as you may have expected. This is further explained in the detailed procedures below.</p>
               <button onClick={this.setVar}>Sign Up</button>
           </ReactCssTransitionGroup>
        )
    }
}