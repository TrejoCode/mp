/**
 *  @name: properties.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Componente de Properties
*/


import React from 'react';

const Properties = (props) => {

    const { data, images } = props;

    return(
        <div className="row wrap justify-center full">
        { data.map((property, key) => (
                <div className="property column" key = { key } >
                    <div className="image">
                        <img src = { images[key] } alt = "Property" />
                    </div>
                    <div className="title full justify-center">
                        <p className="color-white text-center weight-medium uppercase font-mini">
                            { property.title }
                        </p>
                    </div>
                    <div className="buttons full">
                        <button className="btn btn-secondary color-white weight-bold font-mini">
                            BOOK NOW
                        </button>
                        <button className="btn btn-warning weight-bold color-white">
                            VISIT SITE
                        </button>
                    </div>
                </div>
            ))
          }
        </div>
    );

};

export default Properties;