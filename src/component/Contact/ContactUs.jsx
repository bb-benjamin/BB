import React, { useState } from 'react';
import ProjectsComponent from '../resuseableComponents/ProjectsComponent';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email address";
    }
    if (!message.trim()) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length === 0) {
      // Form submission logic
      console.log('Form submitted successfully:', formData);
      setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    } else {
      setErrors(errors);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
   
    <div className=" font-SpaceGrotest mx-5 flex flex-col gap-3 text-center md:mx-28 lg:gap-20 lg:mx-5 lg:text-start lg:flex-row lg:justify-between text-centers items-center">
      <div className="contact_text text-white w-full mt-5">
        <ProjectsComponent text="Contact"/>
       
        <p className=" ">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
      </div>
        <form onSubmit={validate} className="contact_form font-medium  text-white whitespace-nowrap mt-5 w-full">
          <div className="">
          <label htmlFor="name" className="peer-focus:font-medium text-sm text-gray-500  peer-focus:text-[#4EE1A0]  "></label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="block  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#4EE1A0] w-full pl-2 "
              placeholder="NAME ( Frederick )"
              required
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div className="">
          
          <label htmlFor="email" className="peer-focus:font-mediumtext-sm text-gray-500  "></label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="block text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#FF6F5B] peer mt-5 w-full pl-2 "
              placeholder="EMAIL( you@gmail.com )"
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="textarea">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="block text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#4EE1A0]  peer mt-5 w-full pl-2"
              placeholder="MESSAGE"
              required
            />
            {errors.message && <div className="error">{errors.message}</div>}
          </div>
          <div className=" text-end ">
            <button type="submit" className="mt-5 border-b-2 border-[#4EE1A0] tracking-[1px] active:text-[#4EE1A0] leading-10 cursor-pointer">SEND MESSAGE</button>
          </div>
        </form>
    </div>
  );
};

export default ContactUs;
