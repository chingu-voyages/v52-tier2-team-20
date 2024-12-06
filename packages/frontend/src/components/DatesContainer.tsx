"use client";

import React from "react";
import { useDatesForm } from "../utils/useDatesForm";
import Dates from "./Dates";

interface DatesContainerProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const DatesContainer: React.FC<DatesContainerProps> = ({ onSubmit }) => {
  const {
    selectedDate,
    selectedTime,
    handleDateChange,
    handleTimeChange,
    handleSubmit,
  } = useDatesForm(onSubmit);

  return (
    <Dates
      selectedDate={selectedDate}
      selectedTime={selectedTime}
      onDateChange={handleDateChange}
      onTimeChange={handleTimeChange}
      onSubmit={handleSubmit}
    />
  );
};

export default DatesContainer;
