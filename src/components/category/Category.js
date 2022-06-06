import React from 'react';
import ItemCategory from './ItemCategory';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [
                {id: 1, name: 'Menu 1', status: false},
                {id: 1, name: 'Menu 2', status: false},
                {id: 1, name: 'Menu 3', status: false},
                {id: 1, name: 'Menu 4', status: false},
            ]
        }
    }
    clickHandle=(key) => {
        let _state = this.state.category;
        _state.map((item) => {
            item.status = false;

        });
        _state[key].status = !_state[key].status;
        this.setState({
            category: _state
        });
    }
    render() { 
        return ( 
            <div>
                <ul>
                    {
                        this.state.category.map((item,key) => {
                           return (<ItemCategory key ={key} data={item} clickHandle={(e) => this.clickHandle(key,e)}/>)
                            // return <li key = {key} className={clsx({[style.active]: item.status})} onClick={(e) => this.itemActive(key,e)}>{item.name}</li>
                        })
                    }
                </ul>
            </div>
         );
    }
}
 
export default Category;