import React from "react";

//Recibo los parametros por spread desde el componente padre GifGrid
export const GifGridItem = ({id, title, url}) => {

  //console.log(id, title, url);

  return (
      
      <div className="col">
        <div className="card bg-secondary text-white">
          <div className="card-body">

          <img className="img-fluid" src={url} alt={title}></img>
            <p>{title}</p>
          </div>
        </div>

      </div>
  ) 

};
