import React ,{Component} from 'react';

export default class ResolutionSingle extends Component {
    constructor() {
        super();
        this.toggleClick = this.toggleClick.bind(this);
        this.deleteResolution = this.deleteResolution.bind(this);
    }

    toggleClick(item){
        console.log(item);
       Meteor.call('toggleResolution',item)
    }
    
    deleteResolution(item){
        Meteor.call('deleteResolution',item)
        Bert.alert( 'Item Deleted!', 'info', 'growl-bottom-right', 'fa-check' );
    }

    render() {

        return (
            <div>
                {this.props.resolution.map((item,i)=> {
                    const resolutionClass=item.complete ? "checked" :"unchecked";
                    const completed=item.complete?<span className="completed">completed</span> :"";
                    return <li key={i} className={resolutionClass}>
                        <input  type="checkbox" checked={item.complete} onClick={() => this.toggleClick(item)}/>
                        <a href={`resolution/${item._id}`}> {item.text} </a>{completed}
                        { " "+" " } <button className="btn-cancel" onClick={() => this.deleteResolution(item)}>X</button>

                    </li>
                })}
            </div>
        )
    }
}