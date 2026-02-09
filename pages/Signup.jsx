import "./Signup.css";
import { useFormik } from "formik";
import { number, object, string } from "yup";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";


import { FcGoogle } from "react-icons/fc";
import TopBanner from "../src/components/TopBanner";
import NavComponent from "../src/components/NavComponent";

const Signup = () => {
  const navigate = useNavigate();

  const userValidationSchema = object({
    firstname: string().required(),
    lastname: string().required(),
    image: string(),
    email: string().required(),
    password: string().required(),
    address: string(),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      image: "",
      email: "",
      password: "",
      address: "",
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
      .then((data) => console.log(data));

    toast.success("User created successfully!");
    navigate("/");
  };

  return (
    <div className="signup">
      <TopBanner />
      <NavComponent />

      <div className="signup-content">
        <img src="/src/assets/signupimage.png" />

        <div className="form-wrapper">
          <form onSubmit={formik.handleSubmit}>
                      <h4>Create an account</h4>
                      <h5>Enter your details below</h5>

            <div className="form-group">
              {/* <label>First Name:</label> */}

              <input
                name="firstname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                placeholder="First Name"
              />
              {formik.touched.firstname && formik.errors.firstname ? (
                <p className="error">{formik.errors.firstname}</p>
              ) : null}
            </div>

            <div className="form-group">
              {/* <label>Last Name:</label> */}
              <input
                name="lastname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                placeholder="Last Name"
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <p className="error">{formik.errors.lastname}</p>
              ) : null}
                      </div>
                      
                        <div className="form-group">
              {/* <label>Last Name:</label> */}
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
           
           
           
            <button type="submit" className="submit-update-button">
              Create Account
            </button>

            <button type="submit" className="submit-update-button google-signup">
              <FcGoogle />
               <span>Sign up with google</span>
            </button>

            <p className="already">Already have an account? <Link to='/signin'>Log in</Link></p>


          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;