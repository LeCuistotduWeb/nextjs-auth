import React, {useState, useEffect} from 'react';
import useAuth from "../auth/context";
import DefaultLayout from "../components/layout/DefaultLayout";
import {useRouter} from "next/router";
import {redirectFromServer} from "../auth/cookies";

const LoginPage = (props) => {
  const [values, setValues] = useState({username: '', password: ''});
  const {login, isAuthenticated} = useAuth();
  const router = useRouter();

  const handleChange = (name) => event => {
    setValues({...values, [name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    login(values.username, values.password)
  }

  useEffect(() => {
    if(isAuthenticated) router.push('/')
  }, [isAuthenticated]);

  return (
    <DefaultLayout>
      <div className="row">
        <div className="col-12">
          <h1>Login page</h1>
        </div>

        <div className="col-md-6">
          <div className="bg-info text-bg-dark p-3 my-3">
            <pre>
              user: johndoe <br/>
              password: secret
            </pre>
            <pre>
              user: johndoe <br/>
              password: secret
            </pre>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="col-md-7 col-lg-8">
            <div className="row">
              <div className="col-6 mb-3">
                <div className="form-group">
                  <label htmlFor="username" className="form-label">Username:</label>
                    <input className="form-control" type="text" placeholder="username" id="username" name="username" onChange={handleChange("username")}/>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password:</label>
                    <input className="form-control" type="text" placeholder="password" id="password" name="password" onChange={handleChange("password")}/>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">Login</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </DefaultLayout>
  )
}

export async function getServerSideProps(context) {
  redirectFromServer(context);
  return {
    props: {}
  }
}

export default LoginPage