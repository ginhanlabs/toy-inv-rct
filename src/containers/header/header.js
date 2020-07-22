import React from 'react';
// import classes from './header.module.css';

const header = (props) => {
    
    const headerStyle = {
        backgroundColor: 'grey',
        padding: '11px'
        
    }
    return (
        <div className="row" style={ headerStyle }>
            <div className ="col-sm-12" >
                <h2>Toys Inventory App (react version)</h2>
            </div>
        </div>
    );
}

export default header;