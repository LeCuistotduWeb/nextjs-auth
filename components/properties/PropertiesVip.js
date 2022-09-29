import React, {} from 'react';
import {priceFormatted} from "../../utils/helpers";
import PropertyCard from "./PropertyCard";

const PropertiesVip = ({properties}) => {
  return (
    <section className="mb-5">
      <div className="row">
        <div className="col-12 mb-3">
          <h2>Biens Sponsorisés</h2>
        </div>
        {properties && properties.map(property => (
          <div key={property.id} className="col col-4">
            <PropertyCard property={property}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PropertiesVip