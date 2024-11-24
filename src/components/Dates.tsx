"use client";

import React, { useState, FormEvent } from "react";
import SubmitButton from "./SubmitButton";
import Image from "next/image";

interface DatesProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Dates: React.FC<DatesProps> = ({ onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    setSelectedDate(newDate);
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

  return (
    <div className="font-montserrat w-full space-y-6">
      <h2 className="font-semibold text-[13px]">Please choose your preferred consultation dates</h2>

      <div className="w-full">
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="flex gap-2 items-center justify-between">
            <div className="relative">
              <input
                type="date"
                name="date"
                className="w-[198px] h-[33px] px-2 py-1 border rounded border-stroke-line text-sm bg-transparent"
                onChange={handleDateChange}
              />
            </div>

            <div className="flex gap-2 items-center">
              {["AM", "PM"].map((time) => (
                <label key={time} className="flex justify-center items-center gap-1">
                  <input
                    type="checkbox"
                    name="time"
                    value={time.toLowerCase()}
                    checked={selectedTime === time.toLowerCase()}
                    onChange={() => setSelectedTime(selectedTime === time.toLowerCase() ? "" : time.toLowerCase())}
                    className="peer w-5 h-5 border-2 border-gray-300 cursor-pointer"
                  />
                  <span className="text-sm">{time}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pb-16">
            <div className="flex gap-2 mb-1">
              <Image
                src="/images/Plus-Icon.svg"
                alt="Plus Icon"
                width={18} 
                height={18}
              />
              <p className="font-semibold text-[12px] text-letter-grey">Added date:</p>
            </div>
            <p className="pb-1 font-montserrat text-base">
              {selectedDate
                ? selectedDate.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Please select the date"
              }
            </p>
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default Dates;
