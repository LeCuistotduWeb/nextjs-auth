import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import api from "../auth/axios";
import PropertyCard from "../components/properties/PropertyCard";
import PaginationBasic from "../components/pagination/Pagination";

export default function HomePage(props) {
  const {properties, currentPage, pageCount, data} =  props
  return (
    <DefaultLayout>
      <div className="row">
        <div className="col-12">
          <div className="row">
            {properties.map(property =>(
              <div className="col-12" key={property.id}>
                <PropertyCard property={property}/>
              </div>
            ))}
          </div>

          <div className="row">
            <PaginationBasic currentPage={currentPage} pageCount={pageCount} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export const getServerSideProps = async (ctx) => {
  const {query} = ctx
  const {pages} = query
  const {data} = await api.get(`/api/properties${pages ? "?page="+pages : ''}`)

  return {
    props: {
      data: data,
      properties: data.data,
      currentPage: data.currentPage,
      pageCount: data.totalPages,
    }
  }
}
