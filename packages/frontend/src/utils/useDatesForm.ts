import { useState, FormEvent } from "react";

export function useDatesForm(onSubmit: (event: FormEvent<HTMLFormElement>) => void) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    setSelectedDate(newDate);
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime((prev) => (prev === time ? null : time));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedDate || !selectedTime) {
      alert("Please select both a date and a time before submitting.");
      return;
    }

    if (selectedDate < new Date()) {
      alert("Selected date cannot be in the past. Please choose a valid date.");
      return;
    }

    onSubmit(event);
    console.log("Form submitted with selected date and time:", { selectedDate, selectedTime });
  };

  return {
    selectedDate,
    selectedTime,
    handleDateChange,
    handleTimeChange,
    handleSubmit,
  };
}
