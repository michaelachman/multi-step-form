import { useState } from "react";
import { Validity } from "../App";


export type PersonalInfoProps = {
  handleNameChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handleNameValidity: (event: React.FormEvent<HTMLInputElement>) => void;
  handleEmailChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handleEmailValidity: (event: React.FormEvent<HTMLInputElement>) => void;
  handlePhoneNumberChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handlePhoneNumberValidity: (event: React.FormEvent<HTMLInputElement>) => void;
  name: string;
  email: string;
  phoneNumber: string;
  validity: Validity;
};

export const PersonalInfo = (props: PersonalInfoProps) => {
  
  const [nameInputTouched, setNameInputTouched] = useState(false);
  const [emailInputTouched, setEmailInputTouched] = useState(false);
  const [phoneNumberInputTouched, setPhoneNumberInputTouched] = useState(false);

  const validName = props.name !== "";
  const validEmail = props.validity.email && props.email !== "";
  const validPhoneNumber = props.phoneNumber !== "";
  

  return (
    <div>
      <div className="md:shadow-none shadow md:h-auto rounded-lg">
        <div className="title px-6 pt-8 md:px-0">
          <h1 className="text-2xl font-bold text-[#022959] pb-2">
            Personal Info
          </h1>
          <p className="font-normal text-[#9699AA] mb-6">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <div className="options">
          <form name="personalInfoForm">
            <div className="relative mx-6 mt-2 md:mx-0">
              <div className="flex justify-between">
              <label className="text-[#022959] text-sm pl-1">Name</label>
              {nameInputTouched ? (validName ? null : (<label className="text-sm place-self-end font-semibold text-red-500">This field is required</label>)) : null}
              </div>
              <input
                type="text"
                placeholder="e.g. Stephen King"
                className={`border-2 w-full p-2 rounded-md ${nameInputTouched ? (validName ? "" : "invalid") : null}`}
                name="name"
                onChange={(event) => {
                  props.handleNameChange(event)
                  props.handleNameValidity(event)
                  // const nameInput = event.target as HTMLInputElement;
                  // console.log(nameInput.validity);
                  // setNameValid(nameInput.validity.valid)
                }}
                onBlur={() => setNameInputTouched(true)}
                value={props.name}
                required
              />
            </div>
            <div className="relative mx-6 mt-4 md:mx-0">
              <div className="flex justify-between">
              <label className="text-[#022959] text-sm pl-1">
                Email Address
              </label>
              {emailInputTouched ? (validEmail ? null : (<label className="text-sm place-self-end font-semibold text-red-500">This field is required</label>)) : null}
              </div>
              <input
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                className={`border-2 w-full p-2 rounded-md ${emailInputTouched ? (validEmail ? "" : "invalid") : null}`}
                name="email"
                onChange={(event) => {
                  props.handleEmailChange(event)
                  props.handleEmailValidity(event)
                }}
                onBlur={() => setEmailInputTouched(true)}
                value={props.email}
                required
              />
            </div>
            <div className="relative mx-6 mt-4 pb-8 md:mx-0">
              <div className="flex justify-between">
              <label className="text-[#022959] text-sm pl-1">
                Phone number
              </label>
              {phoneNumberInputTouched ? (validPhoneNumber ? null : (<label className="text-sm place-self-end font-semibold text-red-500">This field is required</label>)) : null}
              </div>
              <input
                type="tel"
                placeholder="e.g. +1 234 567 890"
                className={`border-2 w-full p-2 rounded-md ${phoneNumberInputTouched ? (validPhoneNumber ? "" : "invalid") : null}`}
                name="phoneNumber"
                onChange={(event) => {
                  props.handlePhoneNumberChange(event)
                  props.handlePhoneNumberValidity(event)
                }}
                onBlur={() => setPhoneNumberInputTouched(true)}
                value={props.phoneNumber}
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
