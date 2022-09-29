import React, {} from 'react';
import api from "../../auth/axios";
import {priceFormatted, surfaceFormatted} from "../../utils/helpers";
import DefaultLayout from "../../components/layout/DefaultLayout";
import CustomCarousel from "../../components/carousel/Carousel";
import PropertiesVip from "../../components/properties/PropertiesVip";
import PropertiesRelated from "../../components/properties/PropertiesRelated";

const SingleProperty = ({property,propertiesVip, propertiesRelated}) => {

  const {title, description, pictures, price, category, surface, vip, bedrooms, city, address, createdAt} = property;
  const {name: categoryName} = category
  return (
    <DefaultLayout>
      <section className="py-20 overflow-hidden mb-5">
        <div className="container">
          <div className="row mb-24">
            <div className="col-12 col-md-6 mb-8 mb-md-0">
              <div className="position-relative mb-10">
                {pictures && pictures.length > 1 ? (
                  <CustomCarousel slides={pictures}/>
                ) : (
                  <img className="img-fluid w-100 h-100" src={pictures[0]} alt={title}/>
                )}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="ps-lg-20">
                <div className="mb-10 pb-10">
                  <span className="text-secondary">{categoryName}</span>
                  <h1 className="mt-2 mb-6 mw-xl">{title}</h1>
                  <p className="d-inline-block mb-8 h5 text-info">
                    <span>{priceFormatted(price)}</span>
                  </p>
                  <p className="mb-0"><strong>Address:</strong> {address} - {city}</p>
                  <p className="mb-0"><strong>Surface:</strong> {surfaceFormatted(surface)}</p>
                  <p className="mb-8"><strong>Bedrooms:</strong> {bedrooms}</p>
                  <p className="mb-8"><strong>created at:</strong> {createdAt}</p>
                  <p>{description}</p>
                </div>
                <div className="row mb-14">
                  <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                    <a className="btn w-100 btn-primary" href="#">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PropertiesVip properties={propertiesVip}/>
      <PropertiesRelated properties={propertiesRelated}/>
    </DefaultLayout>
  )
}

export const getStaticPaths = async () => {
  const {data} = await api.get(`/api/properties?limit=100`)
  const properties = data.data
  const paths = properties.map(p => ({
    params: {slug: p.slug}
  }))
  return {
    paths,
    fallback: true
  };
}

export const getStaticProps = async ({params}) => {
  const {slug} = params
  const {data: property} = await api.get(`/api/property/${slug}`)
  const {data: propertiesVip} = await api.get(`/api/properties/vip`)
  const {data: propertiesRelated} = await api.get(`/api/properties/related/${property._id}`)

  return {
    props: {
      property,
      propertiesVip,
      propertiesRelated
    }
  }
}

export default SingleProperty