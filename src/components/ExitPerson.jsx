import React, { useState } from "react";
import ExitModal from "./ExitModal";

const ExitPerson = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [isExitConfirmed, setIsExitConfirmed] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleTimeExit = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    setNewDate(formattedDate);
    console.log("Success");
    setIsExitConfirmed(true);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isExitConfirmed ? (
        <div>{newDate}</div>
      ) : (
        <>
          <div>{newDate}</div>
          <button onClick={toggleModal} disabled={isExitConfirmed}>
            Open Modal
          </button>
        </>
      )}

      {isOpen && (
        <ExitModal
          toggleModal={toggleModal}
          setNewDate={setNewDate}
          handleTimeExit={handleTimeExit}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
};

export default ExitPerson;
