import React, {} from 'react';
import DefaultLayout from "../components/layout/DefaultLayout";
import {AdminRoutes} from '../auth/adminRoutes'
import api from "../auth/axios";
import useSWR from "swr";
import {priceFormatted} from "../utils/helpers";

const DashboardPage = (props) => {
  const fetcher = url => api.get(url).then(res => res.data);
  const {data} = useSWR("/api/properties", fetcher)

  if(!data) return null;
  const properties = data.data;

  return (
    <DefaultLayout>
      <h1>Dashboard page</h1>
      <table className="table">
        <thead className="thead-light">
        <tr>
          <th scope="col">Pictures</th>
          <th scope="col">Titre</th>
          <th scope="col">Description</th>
          <th scope="col">Prix</th>
        </tr>
        </thead>
        <tbody>
        {properties && properties.map(property => (
          <tr key={property.id}>
            <td>
              <img width={80} src={property.pictures[0]} alt={property.title}/>
            </td>
            <td>{property.title}</td>
            <td>
              <p>{property.description}</p>
            </td>
            <td>{priceFormatted(property.price)}</td>
          </tr>
        ))}
        </tbody>
      </table>

    </DefaultLayout>
  )
}

export default AdminRoutes(DashboardPage);