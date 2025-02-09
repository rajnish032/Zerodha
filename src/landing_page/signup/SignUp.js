import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      setSubmitted(true);
    },
  });

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f3f3f3" }}>
      <div style={{ width: "400px", padding: "20px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center" }}>Signup</h2>
        {submitted ? (
          <p style={{ color: "green", textAlign: "center" }}>Signup successful!</p>
        ) : (
          <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
              {formik.touched.name && formik.errors.name && (
                <p style={{ color: "red", fontSize: "12px" }}>{formik.errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
              {formik.touched.email && formik.errors.email && (
                <p style={{ color: "red", fontSize: "12px" }}>{formik.errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
              {formik.touched.password && formik.errors.password && (
                <p style={{ color: "red", fontSize: "12px" }}>{formik.errors.password}</p>
              )}
            </div>
            <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;
