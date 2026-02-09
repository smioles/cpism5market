import "./Signin.css"
import { useFormik } from "formik";
import { number, object, string } from "yup";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";


import TopBanner from "../src/components/TopBanner";
import NavComponent from "../src/components/NavComponent";
const Signin = () => {

  const navigate = useNavigate();

  const userValidationSchema = object({
    
  
    email: string(),
    password: string(),
  
  });
  const formik = useFormik({
    initialValues: {
    
      email: "",
      password: "",
  
    },
    onSubmit: (newUser) => {
      console.log("submitted");
      addUser(newUser);
    },
    validationSchema: userValidationSchema,
  });

   const addUser = (newUser) => {
      alert("clicked");
      fetch(`https://691aef532d8d78557570c53e.mockapi.io/api/v1/users/`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          navigate('/')
        });
  
      toast.success("User created successfully!");
      navigate("/");
    };
  
  return (
    <div className="signin">
            <TopBanner/>
            <NavComponent/>

      
      <div className="signin-content">
        <img src="/src/assets/signupimage.png" />

        <div className="form-wrapper">
          <form onSubmit={formik.handleSubmit}>
                      <h4>Log in to Market</h4>
                      <h5>Enter your details below</h5>

            

           
                      
              <div className="form-group">
             
              <input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="error">{formik.errors.email}</p>
              ) : null}
            </div>
           
              <div className="form-group">
              {/* <label>Last Name:</label> */}
              <input
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                              placeholder="Password"
                
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="error">{formik.errors.password}</p>
              ) : null}
            </div>
           
           
            <div className="lower-button-wrapper">
              
         
            <button type="submit" className="submit-update-button">
              Log in
            </button>

              <Link to="/">forgot password?</Link>
                </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Signin