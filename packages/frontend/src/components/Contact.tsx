"use client";

import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

interface ContactProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (event: React.FormEvent, formData: any) => void;
}

const Contact: React.FC<ContactProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (value.trim() !== "") {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      phone: formData.phone.trim() === "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);

    if (hasErrors) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    try {
      console.log(formData);
      onSubmit(event, formData);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center flex-col w-full">
      <form onSubmit={handleSubmit} className="w-full space-y-10">
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="text-base text-letter-grey font-inter">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 px-2 py-1 w-full h-[24px] border rounded border-stroke-line text-sm ${
                errors.name ? "border-red-500" : ""
              }`}
            />
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
              className={`mt-1 px-2 py-1 w-1/2 h-[24px] border rounded border-stroke-line text-sm ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
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
              className={`mt-1 px-2 py-1 w-1/2 h-[24px] border rounded border-stroke-line text-sm ${
                errors.email ? "border-red-500" : ""
              }`}
            />
          </div>
        </div>
        

        <SubmitButton />
      </form>
    </div>
  );
};

export default Contact;
