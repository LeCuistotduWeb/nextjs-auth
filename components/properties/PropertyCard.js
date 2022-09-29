import React, {} from 'react';
import {priceFormatted, surfaceFormatted} from "../../utils/helpers";
import Link from "next/link";

const PropertyCard = ({property}) => {
  const {title, description, pictures, price, category, surface, vip} = property;
  const {name: categoryName} = category
  return (
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
      <div className="col-auto">
        <Link href={`/property/${property.slug}`}>
          <a>
            <img style={{maxWidth: '450px'}} className="img-fluid" src={pictures[0]} alt={title}/>
          </a>
        </Link>
      </div>
      <div className="col p-4 position-static">
        <strong className="d-inline-block mb-2 text-primary">{categoryName}</strong>
        <h3 className="mb-0">{title}</h3>
        <p className="mb-0">{description.substring(0,150)}</p>
        <p className="mb-0">Surface: {surfaceFormatted(surface)}</p>
        <p className="mb-0">Price: {priceFormatted(price)}</p>
        <Link href={`/property/${property.slug}`}>
          <a className="btn btn-primary mt-3">Voir l'annonce</a>
        </Link>
      </div>
    </div>
  )
}

export default PropertyCard