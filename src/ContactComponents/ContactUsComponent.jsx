// import React from "react";

// const ContactComponent = () => {
//   const contactMethods = [
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//           />
//         </svg>
//       ),
//       contact: "rangijag84@gmail.com",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
//           />
//         </svg>
//       ),
//       contact: "+1 (905) 867-7502",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//           />
//         </svg>
//       ),
//       contact: "28 Brentwood dr Guelph Toronto Canada N1H 5M7.",
//     },
//   ];
//   return (
//     <>
//       <main className="py-20">
//         <div className="max-w-screen-xl px-20 air:px-12 m480:px-8 flex justify-between md:flex-col md:gap-4">
//           <div className="w-[55%] space-y-3 md:w-[100%]">
//             <h3
//               className=" text-[#28334a] font-mons
//            text-lg font-medium"
//             >
//               Contact
//             </h3>
//             <p className="text-black text-4xl sm:text-4xl font-int font-medium">
//               Contact us
//             </p>
//             <p className="font-mons">
//               Give us a call or drop by anytime, we endeavour to answer all
//               enquiries within 24 hours on business days. We will be happy to
//               answer your questions.
//             </p>
//             <div>
//               <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center font-mons">
//                 {contactMethods.map((item, idx) => (
//                   <li key={idx} className="flex items-center gap-x-3">
//                     <div className="flex-none text-[#28334a]">{item.icon}</div>
//                     <p>{item.contact}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className="w-[40%] mt-8 md:w-[60%] m480:w-[100%]">
//             <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//               <div>
//                 <label className="font-medium">Full name</label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                 />
//               </div>
//               <div>
//                 <label className="font-medium">Email</label>
//                 <input
//                   type="email"
//                   required
//                   className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                 />
//               </div>
//               <div>
//                 <label className="font-medium">Company</label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                 />
//               </div>
//               <div>
//                 <label className="font-medium">Message</label>
//                 <textarea
//                   required
//                   className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                 ></textarea>
//               </div>
//               <button className="w-full px-4 py-3 rounded-lg font-semibold text-base duration-150 text-white bg-[#28334a] font-mons">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };
// export default ContactComponent;
import React, { useState } from "react";

const ContactComponent = () => {
  const initialValues = { username: "", email: "", company: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = "";
    switch (name) {
      case "username":
        if (!value) {
          error = "Full Name is required";
        }
        break;
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Email address is invalid";
        }
        break;
      case "company":
        if (!value) {
          error = "Company is required";
        }
        break;
      case "message":
        if (!value) {
          error = "Message is required";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formValues).forEach((key) => {
      const error = validate(key, formValues[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!", formValues);
      // Form submission logic here
    } else {
      setErrors(newErrors);
    }
  };

  const contactMethods = [
    {
      icon: (
        <a href="mailto:support@example.com?subject=SendMail&body=Description">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </a>
      ),
      contact: "rangijag84@gmail.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+1 (905) 867-7502",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: "28 Brentwood dr Guelph Toronto Canada N1H 5M7.",
    },
  ];
  return (
    <>
      <main className="py-20">
        <div className="max-w-screen-xl px-20 air:px-12 m480:px-8 flex justify-between md:flex-col md:gap-4">
          <div className="w-[55%] space-y-3 md:w-[100%]">
            <h3
              className=" text-[#28334a] font-mons
           text-lg font-medium"
            >
              Contact
            </h3>
            <p className="text-black text-4xl sm:text-4xl font-int font-medium">
              Let us know how we can help
            </p>
            <p className="font-mons">
              We’re here to help and answer any question you might have, We look
              forward to hearing from you! Please fill out the form, or us the
              contact information bellow .
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center font-mons">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none text-[#28334a]">{item.icon}</div>
                    <p>{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[40%] mt-8 md:w-[60%] m480:w-[100%]">
            <form onSubmit={handleSubmit} method="POST" className="space-y-4">
              <div>
                <label className="font-medium">Full Name</label>
                <input
                  value={formValues.username}
                  onChange={handleChange}
                  name="username"
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-[#7f7f7f]500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">{errors.username}</p>
                )}
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  value={formValues.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-[#7f7f7f]500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="font-medium">Company</label>
                <input
                  value={formValues.company}
                  onChange={handleChange}
                  name="company"
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-[#7f7f7f]500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm">{errors.company}</p>
                )}
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  value={formValues.message}
                  onChange={handleChange}
                  name="message"
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg font-semibold text-base duration-150 text-white bg-[#28334a] font-mons"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactComponent;
