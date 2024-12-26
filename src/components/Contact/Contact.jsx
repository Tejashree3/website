import React, { useRef } from "react";
import "../Contact/Contact.css";
import contact from "../../assets/images/contact.jpg";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import styles

const Contact = () => {


  const formRef = useRef(); // Reference for the form

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Append access key for Web3Forms API
    formData.append("access_key", "535e7e68-b370-4e2f-bc42-d695f019d5ef");

    // Convert FormData to an object
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Submit the form data to Web3Forms API
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    // Handle success response
    if (res.success) {
      console.log("Success", res);
      toast.success("Your message has been sent successfully!"); // Success toast
      formRef.current.reset(); // Reset the form fields
    } else {
      console.error("Error", res);
      toast.error("There was an error submitting your message."); // Error toast
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-left">
          <h2>Let's Chat, Reach Out to Us</h2>
          <p>
            Have questions or feedback? We’re here to help. Send us a message,
            and we’ll respond within 24 hours.
          </p>

          <form className="contact-form" onSubmit={onSubmit} ref={formRef}>
            <div className="form-group first">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="form-input"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group first">
              <input
                type="text"
                name="country"
                placeholder="Country/Region"
                className="form-input"
                required
              />
              <input
                type="text"
                name="contact_number"
                placeholder="Contact Number"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Leave us a message"
                className="form-textarea"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="contact-right">
          <div className="contact-right-img">
            <img
              src={contact}
              alt="Contact Illustration"
              className="contact-image"
            />
          </div>

          <div className="contact-box">
            <div className="contact-info-box">
              <div className="contact-info-content">
                <FaEnvelope
                  size={30}
                  style={{
                    marginRight: "10px",
                    backgroundColor: "#d4d4d4",
                    padding: "5px",
                    borderRadius: "4px",
                  }}
                />
                <div>
                  <h3 className="mb-2">Email:</h3>
                  <h5> info@fernsrealty.com</h5>
                </div>
              </div>
            </div>

            <div className="contact-info-box">
              <div className="contact-info-content">
                <FaPhone
                  size={30}
                  style={{
                    marginRight: "10px",
                    backgroundColor: "#d4d4d4",
                    padding: "5px",
                    borderRadius: "4px",
                  }}
                />
                <div>
                  <h3 className="mb-2">Phone:</h3>
                  <h5> +971 50 923 6017</h5>
                </div>
              </div>
            </div>

            <div className="contact-info-box">
              <div className="contact-info-content">
                <FaPhone
                  size={30}
                  style={{
                    marginRight: "10px",
                    backgroundColor: "#d4d4d4",
                    padding: "5px",
                    borderRadius: "4px",
                  }}
                />
                <div>
                  <h3 className="mb-2">Working hour:</h3>
                  <h5>
                    <span className="mb-2">Monday to Thursday: 8am – 5pm</span>{" "}
                    <br />
                    <span>Friday, Saturday: 8am – 12pm</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;









// import React from "react";
// import "../Contact/Contact.css";
// import contact from "../../assets/images/contact.jpg";
// import { FaEnvelope, FaPhone } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
// import "react-toastify/dist/ReactToastify.css"; // Import styles

// const Contact = () => {
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     // Convert FormData to an object
//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     // Send the form data to your backend API
//     try {
//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: json,
//       });

//       const data = await res.json();

//       // Handle response from the backend
//       if (data.success) {
//         toast.success("Your message has been sent successfully!");
//       } else {
//         toast.error("There was an error submitting your message.");
//       }
//     } catch (error) {
//       console.error("Error submitting form: ", error);
//       toast.error("Network error. Please try again.");
//     }
//   };

//   return (
//     <div className="contact-container">
//       <div className="contact-content">
//         <div className="contact-left">
//           <h2>Let's Chat, Reach Out to Us</h2>
//           <p>
//             Have questions or feedback? We’re here to help. Send us a message,
//             and we’ll respond within 24 hours.
//           </p>

//           <form className="contact-form" onSubmit={onSubmit}>
//             <div className="form-group first">
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name"
//                 className="form-input"
//                 required
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last Name"
//                 className="form-input"
//                 required
//               />
//             </div>
//             <div className="form-group first">
//               <input
//                 type="text"
//                 name="country"
//                 placeholder="Country/Region"
//                 className="form-input"
//                 required
//               />
//               <input
//                 type="text"
//                 name="contactNumber"
//                 placeholder="Contact Number"
//                 className="form-input"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 className="form-input"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <textarea
//                 name="message"
//                 placeholder="Leave us a message"
//                 className="form-textarea"
//                 required
//               ></textarea>
//             </div>
//             <div className="form-group">
//               <button type="submit" className="submit-button">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>

//         <div className="contact-right">
//           <div className="contact-right-img">
//             <img
//               src={contact}
//               alt="Contact Illustration"
//               className="contact-image"
//             />
//           </div>

//           <div className="contact-box">
//             <div className="contact-info-box">
//               <div className="contact-info-content">
//                 <FaEnvelope
//                   size={30}
//                   style={{
//                     marginRight: "10px",
//                     backgroundColor: "#d4d4d4",
//                     padding: "5px",
//                     borderRadius: "4px",
//                   }}
//                 />
//                 <div>
//                   <h3 className="mb-2">Email:</h3>
//                   <h5> info@fernsrealty.com</h5>
//                 </div>
//               </div>
//             </div>

//             <div className="contact-info-box">
//               <div className="contact-info-content">
//                 <FaPhone
//                   size={30}
//                   style={{
//                     marginRight: "10px",
//                     backgroundColor: "#d4d4d4",
//                     padding: "5px",
//                     borderRadius: "4px",
//                   }}
//                 />
//                 <div>
//                   <h3 className="mb-2">Phone:</h3>
//                   <h5> +971 50 923 6017</h5>
//                 </div>
//               </div>
//             </div>

//             <div className="contact-info-box">
//               <div className="contact-info-content">
//                 <FaPhone
//                   size={30}
//                   style={{
//                     marginRight: "10px",
//                     backgroundColor: "#d4d4d4",
//                     padding: "5px",
//                     borderRadius: "4px",
//                   }}
//                 />
//                 <div>
//                   <h3 className="mb-2">Working hour:</h3>
//                   <h5>
//                     <span className="mb-2">Monday to Thursday: 8am – 5pm</span>{" "}
//                     <br />
//                     <span>Friday, Saturday: 8am – 12pm</span>
//                   </h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Toast Container */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default Contact;


