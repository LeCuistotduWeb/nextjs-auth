import React, {} from 'react';
import {priceFormatted} from "../../utils/helpers";

const Properties = ({properties}) => {
  return (
    <section className="mb-5">
      <div className="row">
        <div className="col-12">
          <h2>Les Propriétés</h2>
        </div>
        {properties && properties.map(property => {
          const {title, description, pictures, price, id} = property;
          return (
          <div key={id} className="col col-4">
            <div className="card">
              <img className="card-img-top" src={pictures[0]} alt={title}/>
              <div className="card-body">
                <div>{title}</div>
                <div className="">{description.substring(0,45)}</div>
                <div className="">{priceFormatted(price)}</div>
              </div>
            </div>
          </div>
        )})}
      </div>

      <div className="row mt-3">
        <div className="col text-center">
          <button className="btn btn-primary">Voir plus</button>
        </div>
      </div>

    </section>
  )
}

export default Properties