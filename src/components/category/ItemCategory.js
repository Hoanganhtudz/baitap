import React from 'react';
import style from './Category.module.css';
import clsx from 'clsx';

class ItemCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() { 
        return ( 
            <li onClick={this.props.clickHandle} className={clsx({ [style.active]: this.props.data.status})}>{this.props.date.name}</li>
         );
    }
}
 
export default ItemCategory;