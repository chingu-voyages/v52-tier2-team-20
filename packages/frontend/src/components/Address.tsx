import SubmitButton from "./SubmitButton";
import { useAddressForm } from "../utils/useAddressForm";

export default function Address({ onSubmit }: { onSubmit: () => void }) {
  const { formData, errors, handleChange, handleSubmit } = useAddressForm(onSubmit);

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
              placeholder="W Mulholland Dr"
              className={`mt-1 px-2 py-1 w-full h-[24px] border rounded border-stroke-line text-sm ${
                errors.street_address ? "border-red-500" : ""
              }`}
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
              className={`mt-1 px-2 py-1 w-full h-[24px] border rounded border-stroke-line text-sm ${
                errors.house_number ? "border-red-500" : ""
              }`}
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
              className={`mt-1 px-2 py-1 w-1/3 h-[24px] border rounded border-stroke-line text-sm ${
                errors.zip_code ? "border-red-500" : ""
              }`}
            />
          </div>
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
