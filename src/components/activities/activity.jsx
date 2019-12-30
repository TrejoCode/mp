/**
 *  @name: activity.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Componente de Actividad
*/


import React from 'react';

const Activity = (props) => {

    const { data, images } = props;

    return(
        <div className="row full wrap">
        { data.map((activity, key) => (
                <div className="activity" key = { key } >
                    <div className="image">
                        <img src = { images[key] } alt = "Activity" />
                    </div>
                    <div className="link justify-center align-end cursor-pointer">
                        <a href = "https://www.moonpalacecancun.com/es" className="text-center color-white" >
                            { activity.title }
                        </a>
                    </div>
                </div>
            ))
          }
        </div>
    );

};

export default Activity;