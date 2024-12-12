import { FieldError, UseFormRegister } from "react-hook-form";

type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  label: string
};

type ValidFieldNames =
  | "id"
  | "name"
  | "email"
  | "phoneNumber"
  | "address"
  | "preferred_date"
  | "preferred_timeslot"
  | "request_status";

  type FormData = {
    id: string,
    name: string,
    email: string,
    phoneNumber:string,
    address:string,
    preferred_date:string,
    preferred_timeslot:string,
    request_status:string
  };

export default function FormField({
    type,
    placeholder,
    name,
    register,
    error,
    valueAsNumber,
    label
  }: FormFieldProps) {
    return (
        <label className="flex flex-col">{label}
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, { valueAsNumber })}
          className="outline outline-1 max-w-96 pl-3 mt-1"
          disabled
        />
        {error && <span className="error-message">{error.message}</span>}
        </label>
    );
  }