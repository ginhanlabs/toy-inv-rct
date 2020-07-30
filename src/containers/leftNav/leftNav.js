import React from 'react';

const leftNav = (props) => (
    <div>
        {props.category} <span>{props.category ? " menu" : ""}</span>
    </div>

);

export default leftNav;