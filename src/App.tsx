import { useEffect, useState } from "react";
import "./App.css";
import { EndPage } from "./components/EndPage";
import { FinishingUp } from "./components/FinishingUp";
import { Footer } from "./components/Footer";
import { PersonalInfo } from "./components/PersonalInfo";
import { PickAddons } from "./components/PickAddons";
import { SelectYourPlan } from "./components/SelectYourPlan";
import { Step } from "./components/Step";

type Info = {
  name: string;
  email: string;
  phoneNumber: string;
  planKey: number;
  monthlyPlanTime: boolean;
  addons: number[];
  total: number;
};

type Validity = {
  begin: boolean | null,
  name: boolean;
  email: boolean;
  phoneNumber: boolean;
}

function App() {
  const emptyInfo: Info = {
    name: "",
    email: "",
    phoneNumber: "",
    planKey: 1,
    monthlyPlanTime: true,
    addons: [],
    total: 0,
  };

  const beginValidity: Validity = {
    begin: true,
    name: false,
    email: false,
    phoneNumber: false
  }

  const [activeStep, setActiveStep] = useState(1);
  const [isFinished, setIsFinished] = useState(false);
  // const [isMonthly, setYearly] = useState(true);
  // const [planIndex, setPlanIndex] = useState(0);
  // const [selectedAddonsIndex, setSelectedAddonsIndex] = useState<number[]>([]);
  const [formInfo, setFormInfo] = useState<Info>(emptyInfo);
  const [validity, setValidity] = useState<Validity>(beginValidity)
  const [validityPass, SetValidityPass] = useState(false)

  const steps = [
    {
      index: 1,
      title: "YOUR INFO",
    },
    {
      index: 2,
      title: "SELECT PLAN",
    },
    {
      index: 3,
      title: "ADD-ONS",
    },
    {
      index: 4,
      title: "SUMMARY",
    },
  ];

  const planParams = [
    {
      key: 1,
      image: "/src/assets/images/icon-arcade.svg",
      title: "Arcade",
      monthlyCost: 9,
      yearlyCost: 90,
      yearlyText: "2 months free",
    },
    {
      key: 2,
      image: "/src/assets/images/icon-advanced.svg",
      title: "Advanced",
      monthlyCost: 12,
      yearlyCost: 120,
      yearlyText: "2 months free",
    },
    {
      key: 3,
      image: "/src/assets/images/icon-pro.svg",
      title: "Pro",
      monthlyCost: 15,
      yearlyCost: 150,
      yearlyText: "2 months free",
    },
  ];

  const addonsParams = [
    {
      key: 1,
      title: "Online service",
      description: "Access to multiplayer games",
      monthlyCost: 1,
      yearlyCost: 10,
    },
    {
      key: 2,
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthlyCost: 2,
      yearlyCost: 20,
    },
    {
      key: 3,
      title: "Customizable profile",
      description: "Custom theme on your profile",
      monthlyCost: 2,
      yearlyCost: 20,
    },
  ];

  useEffect(() => {
    setFormInfo((prevV) => {
      let totalPrice = formInfo.monthlyPlanTime
        ? planParams[formInfo.planKey - 1].monthlyCost
        : planParams[formInfo.planKey - 1].yearlyCost;

      formInfo.monthlyPlanTime
        ? formInfo.addons.forEach((index) => {
            totalPrice = totalPrice + addonsParams[index - 1].monthlyCost;
          })
        : formInfo.addons.forEach((index) => {
            totalPrice = totalPrice + addonsParams[index - 1].yearlyCost;
          });
      return { ...prevV, total: totalPrice };
    });
  }, [formInfo.monthlyPlanTime, formInfo.planKey, formInfo.addons]);

  function nextStep() {
    setActiveStep((prevValue) => {
      return prevValue + 1;
    });
  }

  function goBack() {
    setActiveStep((prevValue) => {
      return prevValue - 1;
    });
  }

  function confirmButton() {
    setIsFinished((prevValue) => {
      prevValue = true;
      return prevValue;
    });
  }

  function changePlanTime() {
    // setYearly((prevV) => !prevV);
    setFormInfo((prevV) => ({
      ...prevV,
      monthlyPlanTime: !formInfo.monthlyPlanTime,
    }));
  }

  function selectOption(key: number) {
    // setPlanIndex(index);
    setFormInfo((prevV) => ({ ...prevV, planKey: key }));
  }

  function changeActiveStep() {
    setActiveStep(2);
  }


  function toggleAddons(key: number) {
    setFormInfo((prevV) => ({
      ...prevV,
      addons: prevV.addons.includes(key)
        ? prevV.addons.filter((prevVel) => prevVel !== key)
        : [...prevV.addons, key],
    }));
  }

  function isSelected(key: number) {
    if (formInfo.addons.includes(key)) {
      return true;
    } else {
      return false;
    }
  }

  function handleNameChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    const nameInput = event.target as HTMLInputElement;
    // console.log(nameInput.validity);
    setFormInfo((prevV) => ({ ...prevV, name: (nameInput as any).value }))
  }

  function handleNameValidity(event: React.FormEvent<HTMLInputElement>) {
    const nameInput = event.target as HTMLInputElement;
    if (nameInput.value === "") {
      setValidity((prevV) => ({...prevV, name: false}))
    } else {
    setValidity((prevV) => ({...prevV, name: nameInput.validity.valid}))
  }
  }

  function handleEmailChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    setFormInfo((prevV) => ({ ...prevV, email: (event.target as any).value }));
  }

  function handleEmailValidity(event: React.FormEvent<HTMLInputElement>) {
    const emailInput = event.target as HTMLInputElement;
    setValidity((prevV) => ({...prevV, email: emailInput.validity.valid}))
  }

  function handlePhoneNumberChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    setFormInfo((prevV) => ({
      ...prevV,
      phoneNumber: (event.target as any).value,
    }));
  }

  function handlePhoneNumberValidity(event: React.FormEvent<HTMLInputElement>) {
    const phoneNumberInput = event.target as HTMLInputElement;
    setValidity((prevV) => ({...prevV, phoneNumber: phoneNumberInput.validity.valid}))
  }

  function validityCheck() {
    if (validity.name && validity.email && validity.phoneNumber) {
      nextStep();
    } else undefined;
    // } else if (!validity.name) {
    //   setValidity((prevV) => ({...prevV, name: false}))
    //   SetValidityPass(false)
    // } else if (!validity.email) {
    //   setValidity((prevV) => ({...prevV, email: false}))
    //   SetValidityPass(false)
    // } else if (!validity.phoneNumber) {
    //   setValidity((prevV) => ({...prevV, phoneNumber: false}))
    //   SetValidityPass(false)
    // } else SetValidityPass(false)
    
  }


  useEffect(() => {
    console.log(formInfo);
  }, [formInfo]);


  return (
    <div className="App bg-blue-50 h-full relative pt-8 md:w-full md:justify-center md:flex md:pt-0 md:self-center md:items-center">
      <div className="md:border md:flex md:flex-row md:bg-white md:rounded-xl md:p-4 md:w-[940px]">
      <div className="absolute bg-steps-background-mobile bg-no-repeat bg-cover h-[172px] w-full top-0 md:bg-none md:h-auto"></div>
      <div className="md:flex md:w-full">
      <div className="steps-container flex flex-row gap-4 relative justify-center pb-[34px] md:flex-col md:bg-steps-background-desktop md:bg-no-repeat md:h-[568px] md:w-[385px] md:justify-start md:pl-6 md:pt-10 md:pr-32">
        {steps.map((step) => (
          <Step
            index={step.index}
            title={step.title}
            active={step.index === activeStep}
          />
        ))}
      </div>
      <div className="card relative bg-white mx-4 rounded-lg md:mx-0 md:h-auto md:flex md:flex-col">
      {activeStep === 1 && (
        <PersonalInfo
          handleNameChange={handleNameChange}
          handleNameValidity={handleNameValidity}
          handleEmailChange={handleEmailChange}
          handleEmailValidity={handleEmailValidity}
          handlePhoneNumberChange={handlePhoneNumberChange}
          handlePhoneNumberValidity={handlePhoneNumberValidity}
          name={formInfo.name}
          email={formInfo.email}
          phoneNumber={formInfo.phoneNumber}
        />
      )}
      {activeStep === 2 && (
        <SelectYourPlan
          planParams={planParams}
          isMonthly={formInfo.monthlyPlanTime}
          changePlanTime={changePlanTime}
          selectOption={(index) => selectOption(index)}
          planKey={formInfo.planKey}
        />
      )}
      {activeStep === 3 && (
        <PickAddons
          addonsParams={addonsParams}
          isMonthly={formInfo.monthlyPlanTime}
          toggleAddons={toggleAddons}
          selectedAddonsKeys={formInfo.addons}
          isSelected={(key) => isSelected(key)}
        />
      )}
      {activeStep === 4 && !isFinished && (
        <FinishingUp
          isMonthly={formInfo.monthlyPlanTime}
          planKey={formInfo.planKey}
          planParams={planParams}
          addonsParams={addonsParams}
          changeActiveStep={changeActiveStep}
          selectedAddonsKeys={formInfo.addons}
          totalPrice={formInfo.total}
        />
      )}
      {activeStep === 4 && isFinished && <EndPage />}
      </div>
      <div>
      {isFinished ? undefined : (
        <Footer
          index={activeStep}
          nextStep={nextStep}
          goBack={goBack}
          confirmButton={confirmButton}
          validityPass={validityPass}
          validityCheck={validityCheck}
        />
      )}
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;

// TASKI
// 2. wjebac do obiektu formInfo plan, czas planu i addony /// done
// 3. nie pozwolic na zmiane activestepa jezeli nie ma wpisanych danych na 1 stronie (walidacja)
// 4. przeleciec po komponentach, nazewnictwo funkcji i propsow (changeState, onChange) /// done
// 5. wyjebac reszte logiki do apptsxa (tabselect, selectedaddonsinput, chyba finishingup) /// done
// 6. jeden obiekt ktorzy przetrzymuje cale info o stanie formularza // done
// 7. ugenerycznienie komponentow (toggle) (*tabselect) /// done
// 8. zmienic nazwe selectedaddonsindex na keye // done
// 9. wyjebac niepotrzebne stejty na rzecz stanow z forminfo (isMonthly na przyklad - dokonczyc) // done
// 10. ogarnac wysypujacy sie pickaddons jak wybierzesz wszystkie 3 addonsy (powiazane z tym ze jest index grany dalej w najwyzszym useeffecie) // done
// 11. planindex tez pozmieniac na keye chyba mimo ze to nie arrayka jak addony // done
// 12. selectoption tam ma dalej uzycie chyba .plan i cos z tym kminic jeszcze // done

// .... zaczac kminic jak wysylac info do serwera
// .... potem dekstop
