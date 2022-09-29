import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import api from "../auth/axios";
import PropertiesVip from "../components/properties/PropertiesVip";
import Properties from "../components/properties/Properties";
import CustomCarousel from "/components/carousel/Carousel";
import Banner from "../components/banners/Banner";

export default function HomePage({propertiesVip, properties}) {
  return (
    <DefaultLayout>
      <CustomCarousel/>
      <br/>
      <PropertiesVip properties={propertiesVip}/>
      <Properties properties={properties}/>
      <Banner/>
    </DefaultLayout>
  )
}

export const getStaticProps = async (ctx) => {
  const {data: propertiesVip} = await api.get('/api/properties/vip')
  const {data: properties} = await api.get('/api/properties?limit=6')
  return {
    props: {
      propertiesVip,
      properties: properties.data
    }
  }
}
