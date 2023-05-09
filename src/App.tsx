import { useState } from "react";
import "./App.css";
import { EndPage } from "./components/EndPage";
import { FinishingUp } from "./components/FinishingUp";
import { Footer } from "./components/Footer";
import { PersonalInfo } from "./components/PersonalInfo";
import { PickAddons } from "./components/PickAddons";
import { SelectYourPlan } from "./components/SelectYourPlan";
import { Step } from "./components/Step";

function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [isFinished, setIsFinished] = useState(false);
  const [isMonthly, setYearly] = useState(true);
  const [planIndex, setPlanIndex] = useState(0);
  const [selectedAddonsIndex, setSelectedAddonsIndex] = useState<number[]>([]);

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
      image: "/src/assets/images/icon-arcade.svg",
      title: "Arcade",
      monthlyCost: 9,
      yearlyCost: 90,
      yearlyText: "2 months free",
    },
    {
      image: "/src/assets/images/icon-advanced.svg",
      title: "Advanced",
      monthlyCost: 12,
      yearlyCost: 120,
      yearlyText: "2 months free",
    },
    {
      image: "/src/assets/images/icon-pro.svg",
      title: "Pro",
      monthlyCost: 15,
      yearlyCost: 150,
      yearlyText: "2 months free",
    },
  ];

  const addonsParams = [
    {
      title: "Online service",
      description: "Access to multiplayer games",
      monthlyCost: 1,
      yearlyCost: 10,
    },
    {
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthlyCost: 2,
      yearlyCost: 20,
    },
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      monthlyCost: 2,
      yearlyCost: 20,
    },
  ];

  let totalPrice = isMonthly
    ? planParams[planIndex].monthlyCost
    : planParams[planIndex].yearlyCost;

  isMonthly
    ? selectedAddonsIndex.forEach((index) => {
        totalPrice = totalPrice + addonsParams[index].monthlyCost;
      })
    : selectedAddonsIndex.forEach((index) => {
        totalPrice = totalPrice + addonsParams[index].yearlyCost;
      });

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
    setYearly((prevV) => !prevV);
  }

  function selectOption(index: number) {
    setPlanIndex(index);
  }

  function changeActiveStep() {
    setActiveStep(2);
  }

  function toggleAddons(index: number) {
    if (selectedAddonsIndex.includes(index)) {
      setSelectedAddonsIndex((prevV) =>
        prevV.filter((prevVel, prevIndex) => prevVel !== index)
      );
    } else {
      setSelectedAddonsIndex((prevV) => [...prevV, index]);
    }
  }

  function isSelected(index: number) {
    if (selectedAddonsIndex.includes(index)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="App bg-blue-50 h-full relative pt-8">
      <div className="absolute bg-steps-background-mobile bg-no-repeat bg-cover h-[172px] w-full top-0"></div>
      <div className="steps-container flex flex-row gap-4 relative justify-center pb-[34px]">
        {steps.map((step) => (
          <Step
            index={step.index}
            title={step.title}
            active={step.index === activeStep}
          />
        ))}
      </div>

      {activeStep === 1 && <PersonalInfo />}
      {activeStep === 2 && (
        <SelectYourPlan
          planParams={planParams}
          isMonthly={isMonthly}
          changePlanTime={changePlanTime}
          selectOption={(index) => selectOption(index)}
          planIndex={planIndex}
        />
      )}
      {activeStep === 3 && (
        <PickAddons
          addonsParams={addonsParams}
          isMonthly={isMonthly}
          toggleAddons={toggleAddons}
          selectedAddonsIndex={selectedAddonsIndex}
          isSelected={(index) => isSelected(index)}
        />
      )}
      {activeStep === 4 && !isFinished && (
        <FinishingUp
          isMonthly={isMonthly}
          planIndex={planIndex}
          planParams={planParams}
          addonsParams={addonsParams}
          changeActiveStep={changeActiveStep}
          selectedAddonsIndex={selectedAddonsIndex}
          totalPrice={totalPrice}
        />
      )}
      {activeStep === 4 && isFinished && <EndPage />}

      {isFinished ? undefined : (
        <Footer
          index={activeStep}
          nextStep={nextStep}
          goBack={goBack}
          confirmButton={confirmButton}
        />
      )}
    </div>
  );
}

export default App;

// TASKI
// 3. nie pozwolic na zmiane activestepa jezeli nie ma wpisanych danych na 1 stronie (walidacja)
// 4. przeleciec po komponentach, nazewnictwo funkcji i propsow (changeState, onChange) /// done
// 5. wyjebac reszte logiki do apptsxa (tabselect, selectedaddonsinput, chyba finishingup) /// done
// 6. jeden obiekt ktorzy przetrzymuje cale info o stanie formularza
// 7. ugenerycznienie komponentow (toggle) (*tabselect)

// .... zaczac kminic jak wysylac info do serwera
// .... potem dekstop