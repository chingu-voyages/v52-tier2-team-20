"use client";

import React from "react";
import { useContactForm, ContactFormData } from "../utils/useContactForm";
import SubmitButton from "./SubmitButton";

interface ContactProps {
  onSubmit: (formData: ContactFormData) => void;
}

const Contact: React.FC<ContactProps> = ({ onSubmit }) => {
  const { formData, errors, handleChange, handleSubmit } = useContactForm(onSubmit);

  return (
    <div className="flex items-center justify-center flex-col w-full">
      <form onSubmit={handleSubmit} className="w-full space-y-10">
        <div className="space-y-5">
          <div className="relative">
            <label htmlFor="name" className="text-base text-letter-grey font-inter">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`font-montserrat mt-1 px-2 py-1 w-full h-[28px] border rounded text-sm max-[482px]:bg-black ${
                errors.name ? "border-red-500" : "border-stroke-line"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-[10px] font-montserrat absolute">Please enter your name</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="text-base text-letter-grey font-inter block">
              Phone number
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
<<<<<<< feature/styling
              className={`font-montserrat mt-1 px-2 py-1 w-full h-[28px] border rounded text-sm max-[482px]:bg-black ${
=======
              className={`[&::-webkit-inner-spin-button]:appearance-none mt-1 px-2 py-1 w-full h-[28px] border rounded text-sm max-[482px]:bg-black ${
>>>>>>> main
                errors.phone ? "border-red-500" : "border-stroke-line"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-[10px] font-montserrat absolute">Please enter your phone number</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-base text-letter-grey font-inter block">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`font-montserrat mt-1 px-2 py-1 w-full h-[28px] border rounded text-sm max-[482px]:bg-black ${
                errors.email ? "border-red-500" : "border-stroke-line"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-[10px] font-montserrat absolute">Please enter your email address</p>
            )}
          </div>
        </div>

        <SubmitButton />
      </form>
    </div>
  );
};

export default Contact;
