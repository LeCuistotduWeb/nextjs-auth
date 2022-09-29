import React, {} from 'react';
import {priceFormatted} from "../../utils/helpers";
import Link from "next/link";
import PropertyCard from "./PropertyCard";

const PropertiesRelated = ({properties}) => {
  return (
    <section className="mb-5">
      <div className="row">
        <div className="col-12 mb-3">
          <h2>Biens Similaires</h2>
        </div>
        {properties && properties.map(property => (
          <div key={property.id} className="col col-md-3 mb-3">
            <PropertyCard property={property}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PropertiesRelated