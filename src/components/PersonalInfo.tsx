import { useState } from "react";

export type PersonalInfoProps = {
  handleNameChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handleEmailChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handlePhoneNumberChange: (event: React.FormEvent<HTMLInputElement>) => void;
  name: string;
  email: string;
  phoneNumber: string;
};

export const PersonalInfo = (props: PersonalInfoProps) => {
  
  const [nameValid, setNameValid] = useState(true)

  return (
    <div>
      <div className="card bg-white relative mx-4 rounded-lg drop-shadow-lg">
        <div className="title px-6 pt-8">
          <h1 className="text-2xl font-bold text-[#022959] pb-2">
            Personal Info
          </h1>
          <p className="font-normal text-[#9699AA] mb-6">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <div className="options">
          <form name="personalInfoForm">
            <div className="relative mx-6">
              <label className="text-[#022959] text-sm pl-1">Name</label>
              <input
                type="text"
                placeholder="e.g. Stephen King"
                className={`border w-full p-2 rounded-md ${nameValid ? "" : "invalid"}`}
                name="name"
                onChange={(event) => {
                  props.handleNameChange(event)
                  const nameInput = event.target as HTMLInputElement;
                  console.log(nameInput.validity);
                  setNameValid(nameInput.validity.valid)
                }}
                value={props.name}
                required
              />
            </div>
            <div className="relative mx-6 mt-2">
              <label className="text-[#022959] text-sm pl-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                className="border w-full p-2 rounded-md"
                name="email"
                onChange={(event) => props.handleEmailChange(event)}
                value={props.email}
              />
            </div>
            <div className="relative mx-6 mt-2 pb-8">
              <label className="text-[#022959] text-sm pl-1">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="e.g. +1 234 567 890"
                className="border w-full p-2 rounded-md"
                name="phoneNumber"
                onChange={(event) => props.handlePhoneNumberChange(event)}
                value={props.phoneNumber}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
