import { useState } from "react";

const Vaildataion = () =>{
    const [firstName , setFirstName] = useState('')
    const [lasttName , setLastName] = useState('')
    const [mobile , setMobile] = useState('')
    const [age , setAge] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    return(
        <>
        <div className="main div">
            <form>
                <h1>Vaildataion from</h1>
                <input
                    placeholder="First Name"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input 
                    placeholder="Last Name"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    placeholder="Mobile Number"
                    required
                    onChange={(e) => setMobile(e.target.value)}
                />
                <input
                    placeholder="Age"
                    required
                    onChange={(e) => setAge(e.target.value)}
                />
                <input
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <button type="submit">submit </button>
            </form>

        </div>
        </>
    )
}
export default Vaildataion


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
