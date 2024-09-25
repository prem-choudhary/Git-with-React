// import { useState } from "react";

// const Vaildataion = () =>{
//     const [firstName , setFirstName] = useState('')
//     const [lasttName , setLastName] = useState('')
//     const [mobile , setMobile] = useState('')
//     const [age , setAge] = useState('')
//     const [email , setEmail] = useState('')
//     const [password , setPassword] = useState('')
//     return(
//         <>
//         <div className="main div">
//             <form>
//                 <h1>Vaildataion from</h1>
//                 <input
//                     placeholder="First Name"
//                     required
//                     onChange={(e) => setFirstName(e.target.value)}
//                 />
//                 <input
//                     placeholder="Last Name"
//                     required
//                     onChange={(e) => setLastName(e.target.value)}
//                 />
//                 <input
//                     placeholder="Mobile Number"
//                     required
//                     onChange={(e) => setMobile(e.target.value)}
//                 />
//                 <input
//                     placeholder="Age"
//                     required
//                     onChange={(e) => setAge(e.target.value)}
//                 />
//                 <input
//                     placeholder="Email"
//                     required
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     placeholder="Password"
//                     required
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <br/>
//                 <button type="submit">submit </button>
//             </form>

//         </div>
//         </>
//     )
// }
// export default Vaildataion

// import  { useState } from 'react';

// const Vaildataion = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         age: '',
//         mobile: '',
//         email: '',
//         password: ''
//     });

//     const [errors, setErrors] = useState({});

//     const validate = () => {
//         let tempErrors = {};
//         let isValid = true;

//         if (!formData.firstName) {
//             tempErrors.firstName = "First name is required";
//             isValid = false;
//         }
//         if (!formData.lastName) {
//             tempErrors.lastName = "Last name is required";
//             isValid = false;
//         }
//         if (!formData.age || isNaN(formData.age) || formData.age < 1) {
//             tempErrors.age = "Valid age is required";
//             isValid = false;
//         }
//         if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
//             tempErrors.mobile = "Valid 10-digit mobile number is required";
//             isValid = false;
//         }
//         if (!formData.email && !formData.password) {
//             tempErrors.email = "Either email or password is required";
//             tempErrors.password = "Either email or password is required";
//             isValid = false;
//         } else if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
//             tempErrors.email = "Valid email is required";
//             isValid = false;
//         }

//         setErrors(tempErrors);
//         return isValid;
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             alert('Form is valid!');
//             // Submit form or perform desired actions
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>First Name</label>
//                 <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
//                 {errors.firstName && <p>{errors.firstName}</p>}
//             </div>
//             <div>
//                 <label>Last Name</label>
//                 <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
//                 {errors.lastName && <p>{errors.lastName}</p>}
//             </div>
//             <div>
//                 <label>Age</label>
//                 <input type="text" name="age" value={formData.age} onChange={handleChange} />
//                 {errors.age && <p>{errors.age}</p>}
//             </div>
//             <div>
//                 <label>Mobile</label>
//                 <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
//                 {errors.mobile && <p>{errors.mobile}</p>}
//             </div>
//             <div>
//                 <label>Email</label>
//                 <input type="text" name="email" value={formData.email} onChange={handleChange} />
//                 {errors.email && <p>{errors.email}</p>}
//             </div>
//             <div>
//                 <label>Password</label>
//                 <input type="password" name="password" value={formData.password} onChange={handleChange} />
//                 {errors.password && <p>{errors.password}</p>}
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default Vaildataion;
import { useState } from "react";
function Vaildation() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    Gander: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.username.trim()) {
      errors.username = "Username is required";
    } else if (data.username.length < 4) {
      errors.username = "Username must be at least 4 characters long";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
      console.error(data);
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Username:</label>
          <input
            className="form-input"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <span className="error-message">{errors.username}</span>
          )}
        </div>
        <div>
          <label className="form-label">Email:</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <div>
          <label className="form-label">Password:</label>
          <input
            className="form-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>
        <div>
          <label className="form-label">Confirm Password:</label>
          <input
            className="form-input"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="error-message">{errors.confirmPassword}</span>
          )}
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Vaildation;
