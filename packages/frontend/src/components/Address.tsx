import SubmitButton from "./SubmitButton";
import { useAddressForm } from "../utils/useAddressForm";

interface AddressProps {
  onSubmit: (addressData: {
    street_address: string;
    house_number: string;
    zip_code: string;
    lat: string;
    lon: string;
  }) => void;
}

export default function Address({ onSubmit }: AddressProps) {
  const { formData, errors, handleChange, handleSubmit } = useAddressForm(onSubmit);
  
  return (
    <div className="text-sm w-full">
      <form onSubmit={handleSubmit} className="w-full space-y-10">
        <div className="space-y-6">
          <div className="relative">
            <label htmlFor="street_address" className="text-base text-letter-grey font-inter">
              Street address
            </label>
            <input
              type="text"
              id="street_address"
              name="street_address"
              value={formData.address.street_address}
              onChange={handleChange}
              placeholder="Mulholland / Edwin / etc.."
              className={`font-montserrat mt-1 px-2 py-1 w-full h-[28px] border rounded text-sm max-[482px]:bg-black max-[482px]:text-white ${
                errors.street_address ? "border-red-500" : "border-stroke-line"
              }`}
            />
            {errors.street_address && (
              <p className="text-red-500 text-[10px] absolute font-montserrat">Please enter a valid address</p>
            )}
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
              placeholder="12345"
              className={`font-montserrat mt-1 px-2 py-1 w-full h-[28px] border rounded text-sm max-[482px]:bg-black max-[482px]:text-white ${
                errors.house_number ? "border-red-500" : "border-stroke-line"
              }`}
            />
            {errors.house_number && (
              <p className="text-red-500 text-[10px] absolute font-montserrat">Please enter a valid house number</p>
            )}
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
              placeholder="78910"
              className={`font-montserrat mt-1 px-2 py-1 w-full h-[28px] border rounded text-sm max-[482px]:bg-black max-[482px]:text-white ${
                errors.zip_code ? "border-red-500" : "border-stroke-line"
              }`}
            />
            {errors.zip_code && (
              <p className="text-red-500 text-[10px] absolute font-montserrat">Please enter a valid zip code</p>
            )}
          </div>
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
