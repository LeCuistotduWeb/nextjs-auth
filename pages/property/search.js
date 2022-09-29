import React, {useEffect, useState} from 'react';
import DefaultLayout from "../../components/layout/DefaultLayout";
import {useRouter} from "next/router";
import SearchFilter from "../../components/search-filter/SearchFilter";
import PropertyCard from "../../components/properties/PropertyCard";
import api from "../../auth/axios";

const SearchPage = (props) => {
  const router = useRouter();
  const [properties, setProperties] = useState("")

  useEffect(()=>{
    async function getProperty(){
      const {data} = await api.post('/api/property/list/search', {
        filters: {
          title: router.query.title,
          category: router.query.category
        }
      })
      setProperties(data);
    }
    getProperty();
  },[router.query.title, router.query.category])

  return (
    <DefaultLayout>
      <div className="row">
        <SearchFilter/>
      </div>

      <div className="row">
        <div className="col">
          <p>Nombre de propriété : {properties.size}</p>
        </div>
      </div>

      <div className="row">
        {router.query.category || router.query.title ? (
          properties && properties.data.map(property =>(
            <div className="col-12" key={property.id}>
              <PropertyCard property={property}/>
            </div>
          ))
        ) : null}

      </div>
    </DefaultLayout>
  )
}

export default SearchPage