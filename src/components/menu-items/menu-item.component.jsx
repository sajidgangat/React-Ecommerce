import React from 'react';
import './menu-item.style.scss';

const MenuItem = ({title,id,imageUrl,size}) =>(

    <div  style={{
      backgroundImage: `url(${imageUrl})` 
    }}
        className ={`${size} menu-item`}>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle"> Shop Now </span>
    </div>
  </div>

);

export default MenuItem;