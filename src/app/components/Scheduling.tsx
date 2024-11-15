"use client";

import React, { useState, FormEvent } from "react";
import SubmitButton from "./SubmitButton";

interface SchedulingProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Scheduling: React.FC<SchedulingProps> = ({ onSubmit }) => {
  const generateDateRange = () => {
    const dates = [];
    for (let i = 1; i <= 28; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = generateDateRange();
  const [startIndex, setStartIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const datesPerPage = 7;

  const handleNext = () => {
    if (startIndex + datesPerPage < dates.length) {
      setStartIndex(startIndex + datesPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - datesPerPage >= 0) {
      setStartIndex(startIndex - datesPerPage);
    }
  };

  const handleSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const visibleDates = dates.slice(startIndex, startIndex + datesPerPage);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (!selectedDate || !selectedTime) {
      alert("Please select both a date and a time before submitting.");
      return;
    }
  
    onSubmit(event);
    console.log("Form submitted with selected date and time:", { selectedDate, selectedTime });
  };

  return (
    <div className="flex items-center justify-center flex-col h-full w-auto mb-3">
      <h2 className="font-bold text-center">What time works best?</h2>

      <div className="text-center w-full flex flex-col items-center">
        <p className="text-base">We&apos;ll try our best to find a match for your schedule.</p>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="my-5 w-full relative">
            <div className="mx-12 border-2 border-black relative z-20">
              <div className="grid grid-cols-7 border-b-2 bg-gray-300 border-black">
                {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
                  <p key={day} className="p-2 text-center text-black">
                    {day}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-7 w-full ">
                {visibleDates.map((date, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`p-2 text-center group 
                      ${selectedDate?.getDate() === date.getDate() && selectedDate?.getMonth() === date.getMonth() && selectedDate?.getFullYear() === date.getFullYear() ? 'bg-black text-white' : 'bg-white text-gray-600'}
                      hover:bg-black`}
                    onClick={() => handleSelect(date)}
                  >
                    <p className="text-xl group-hover:text-white font-bold">
                      {date.getDate()}
                    </p>
                    <p className="text-sm group-hover:text-white">
                      {date.toLocaleString("default", { month: "short" })}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full">
              <button
                type="button"
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="bg-gray-200 text-black border border-black rounded disabled:opacity-50 h-8 w-8 flex items-center justify-center"
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={startIndex + datesPerPage >= dates.length}
                className="bg-gray-200 text-black border border-black rounded disabled:opacity-50 h-8 w-8 flex items-center justify-center"
              >
                &rarr;
              </button>
            </div>
          </div>

          <div className="text-left w-full px-12 text-sm mb-6">
            <p className="font-bold text-gray-500 mb-3">Added:</p>
            <p className="pb-1">
              {selectedDate
                ? selectedDate.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Please select the date"}
            </p>

            <div className="flex gap-3 items-center">
              {["Morning", "Afternoon", "Evening"].map((time) => (
                <label key={time} className="flex justify-center items-center gap-1">
                  <input
                    type="radio"
                    name="time"
                    value={time.toLowerCase()}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    onChange={() => setSelectedTime(time.toLowerCase())} 
                  />
                  <span className="text-gray-700 text-sm">{time}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="w-full px-12">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Scheduling;