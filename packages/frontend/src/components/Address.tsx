import { useState } from "react";
import SubmitButton from "./SubmitButton";

export default function Address({ onSubmit }: { onSubmit: () => void }) {
  const [formData, setFormData] = useState({
    address: {
      street_address: "",
      house_number: "",
      zip_code: "",
    },
  });

  const [errors, setErrors] = useState({
    street_address: false,
    house_number: false,
    zip_code: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = {
      street_address: formData.address.street_address.trim() === "",
      house_number: formData.address.house_number.trim() === "",
      zip_code: formData.address.zip_code.trim() === "",
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) {
      alert("Please fill in all fields.");
      return;
    }

    const addressInUpperCase = {
      house_number: formData.address.house_number.trim().toUpperCase(),
      street_address: formData.address.street_address.trim().toUpperCase(),
      zip_code: formData.address.zip_code.trim().toUpperCase(),
    };

    const { house_number, street_address, zip_code } = addressInUpperCase;
    const apiUrl = `https://data.lacity.org/resource/4ca8-mxuh.json?str_nm=${encodeURIComponent(
      street_address
    )}&hse_nbr=${encodeURIComponent(house_number)}&zip_cd=${encodeURIComponent(
      zip_code
    )}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok && data.length > 0) {
        console.log("Address verified successfully:", data[0]);
        console.log(formData);
        onSubmit();
      } else {
        alert("Address verification failed. Please check the details.");
      }
    } catch (error) {
      console.error("Error verifying address:", error);
      alert("An error occurred while verifying the address. Please try again.");
    }
  };

  return (
    <div className="text-sm w-full">
      <form onSubmit={handleSubmit} className="w-full space-y-10">
        <div className="space-y-5">
          <div>
            <label htmlFor="street_address" className="text-base text-letter-grey font-inter">
              Street address
            </label>
            <input
              type="text"
              id="street_address"
              name="street_address"
              value={formData.address.street_address}
              onChange={handleChange}
              className={`mt-1 px-2 py-1 w-full h-[24px] border rounded border-stroke-line text-sm ${errors.street_address ? 'border-red-500' : ''}`}
            />
          </div>

          <div>
            <label htmlFor="house_number" className="text-base text-letter-grey font-inter">
              Apt/suite number
            </label>
            <input
              type="text"
              id="house_number"
              name="house_number"
              value={formData.address.house_number}
              onChange={handleChange}
              className={`mt-1 px-2 py-1 w-full h-[24px] border rounded border-stroke-line text-sm ${errors.house_number ? 'border-red-500' : ''}`}
            />
          </div>

          <div>
            <label htmlFor="zip_code" className="text-base text-letter-grey font-inter block">
              ZIP/Postcode
            </label>
            <input
              type="text"
              id="zip_code"
              name="zip_code"
              value={formData.address.zip_code}
              onChange={handleChange}
              className={`mt-1 px-2 py-1 w-1/3 h-[24px] border rounded border-stroke-line text-sm ${errors.zip_code ? 'border-red-500' : ''}`}
            />
          </div>
        </div>
        

        <SubmitButton />
      </form>
    </div>
  );
}
