"use client";

import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

interface ContactInfoProps {
  onSubmit: (event: React.FormEvent) => void; 
}

const ContactInfo: React.FC<ContactInfoProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    street_address: "",
    name: "",
    email: "",
    phone: "",
  });

  const [, setErrors] = useState({
    street_address: false,
    name: false,
    email: false,
    phone: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = {
      street_address: formData.street_address.trim() === "",
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      phone: formData.phone.trim() === "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);

    if (hasErrors) {
      alert("Please fill in all fields before submitting.")
      return;
    }

    onSubmit(event);
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="flex items-center justify-center flex-col h-full w-full mb-3">
      <form onSubmit={handleSubmit} className="space-y-2 w-full px-4">
        <div>
          <label htmlFor="street_address" className="text-sm text-gray-500">
            Street address
          </label>
          <input
            type="text"
            id="street_address"
            name="street_address"
            value={formData.street_address}
            onChange={handleChange}
            className="mt-1 px-2 py-1 w-full border rounded border-gray-500 text-sm"
          />
        </div>

        <div>
          <label htmlFor="name" className="text-sm text-gray-500">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 px-2 py-1 w-full border rounded border-gray-500 text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm text-gray-500">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 px-2 py-1 w-full border rounded border-gray-500 text-sm"
          />
        </div>

        <div className="pb-8">
          <label htmlFor="phone" className="text-sm text-gray-500">
            Phone number
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 px-2 py-1 w-full border rounded border-gray-500 text-sm"
          />
        </div>

        <SubmitButton />
      </form>
    </div>
  );
};

export default ContactInfo;
