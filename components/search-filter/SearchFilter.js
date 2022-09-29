import React, {useState} from 'react';
import {useRouter} from "next/router";
import useSWR from 'swr';
import api from "../../auth/axios";

const fetcher = url => api.get(url).then(res => res.data);

const CategoryList = ({options}) => {
  return (
    options && options.map(option => (
      <option key={option.id} name={option.id} value={option.id}>{option.name}</option>
    ))
  )
}

const SearchFilter = (props) => {
  const router = useRouter();
  const [values, setValues] = useState({title: '', category: '',})

  const {data} = useSWR("/api/categories", fetcher)

  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value})
  }

  const onSubmit = event => {
    event.preventDefault();
    return router.push(`/property/search?${values.title && `title=${values.title}`}${values.category && `&category=${values.category}`}`)
  }

  return (
    <div className="py-5 rounded">
      <form action="" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-4">
            <select
              id="category"
              name="category"
              onChange={handleChange('category')}
              value={values.category}
              className="form-control form-field"
            >
              <option value="selected">Cagegorie</option>
              <CategoryList options={data}/>
            </select>
          </div>
          <div className="col-md-7">
            <input
              id="title"
              type="text"
              name="title"
              placeholder="search"
              className="form-control form-field"
              onChange={handleChange('title')}
              value={values.title}
            />
          </div>
          <div className="col-md-1">
            <button type="submit" className="btn btn-primary">rechercher</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchFilter