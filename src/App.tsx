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
  planIndex: number;
  monthlyPlanTime: boolean;
  addons: number[];
  total: number;
};

function App() {
  const emptyInfo: Info = {
    name: "",
    email: "",
    phoneNumber: "",
    planIndex: 0,
    monthlyPlanTime: true,
    addons: [],
    total: 0,
  };

  const [activeStep, setActiveStep] = useState(1);
  const [isFinished, setIsFinished] = useState(false);
  // const [isMonthly, setYearly] = useState(true);
  // const [planIndex, setPlanIndex] = useState(0);
  // const [selectedAddonsIndex, setSelectedAddonsIndex] = useState<number[]>([]);
  const [formInfo, setFormInfo] = useState<Info>(emptyInfo);

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
        ? planParams[formInfo.planIndex].monthlyCost
        : planParams[formInfo.planIndex].yearlyCost;

      formInfo.monthlyPlanTime
        ? formInfo.addons.forEach((index) => {
            totalPrice = totalPrice + addonsParams[index].monthlyCost;
          })
        : formInfo.addons.forEach((index) => {
            totalPrice = totalPrice + addonsParams[index].yearlyCost;
          });
      return { ...prevV, total: totalPrice };
    });
  }, [formInfo.monthlyPlanTime, formInfo.planIndex, formInfo.addons]);

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

  function selectOption(index: number) {
    // setPlanIndex(index);
    setFormInfo((prevV) => ({ ...prevV, plan: planParams[index].title }));
  }

  function changeActiveStep() {
    setActiveStep(2);
  }

  // function toggleAddons(index: number) {
  //   if (selectedAddonsIndex.includes(index)) {
  //     setSelectedAddonsIndex((prevV) =>
  //       prevV.filter((prevVel, prevIndex) => prevVel !== index)
  //     );
  //   } else {
  //     setSelectedAddonsIndex((prevV) => [...prevV, index]);
  //   }
  //   setFormInfo((prevV) => ({
  //     ...prevV,
  //     addons: selectedAddonsIndex.map((i) => addonsParams[i].title),
  //   }));
  // }

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
    console.log(nameInput.validity);
    setFormInfo((prevV) => ({ ...prevV, name: (event.target as any).value }));
  }

  function handleEmailChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    setFormInfo((prevV) => ({ ...prevV, email: (event.target as any).value }));
  }

  function handlePhoneNumberChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    setFormInfo((prevV) => ({
      ...prevV,
      phoneNumber: (event.target as any).value,
    }));
  }

  // useEffect(() => {
  //   console.log(formInfo);
  // }, [formInfo]);

  return (
    <div className="App bg-blue-50 h-full relative pt-8 md:justify-center md:flex">
      <div className="absolute bg-steps-background-mobile bg-no-repeat bg-cover h-[172px] w-full top-0 md:bg-steps-background-desktop md:h-[568px] md:w-[274px]"></div>
      <div className="steps-container flex flex-row gap-4 relative justify-center pb-[34px]">
        {steps.map((step) => (
          <Step
            index={step.index}
            title={step.title}
            active={step.index === activeStep}
          />
        ))}
      </div>

      {activeStep === 1 && (
        <PersonalInfo
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handlePhoneNumberChange={handlePhoneNumberChange}
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
          planIndex={formInfo.planIndex}
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
          planIndex={formInfo.planIndex}
          planParams={planParams}
          addonsParams={addonsParams}
          changeActiveStep={changeActiveStep}
          selectedAddonsKeys={formInfo.addons}
          totalPrice={formInfo.total}
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
// 2. wjebac do obiektu formInfo plan, czas planu i addony /// done
// 3. nie pozwolic na zmiane activestepa jezeli nie ma wpisanych danych na 1 stronie (walidacja)
// 4. przeleciec po komponentach, nazewnictwo funkcji i propsow (changeState, onChange) /// done
// 5. wyjebac reszte logiki do apptsxa (tabselect, selectedaddonsinput, chyba finishingup) /// done
// 6. jeden obiekt ktorzy przetrzymuje cale info o stanie formularza // done
// 7. ugenerycznienie komponentow (toggle) (*tabselect) /// done
// 8. zmienic nazwe selectedaddonsindex na keye // done
// 9. wyjebac niepotrzebne stejty na rzecz stanow z forminfo (isMonthly na przyklad - dokonczyc)
// 10. ogarnac wysypujacy sie pickaddons jak wybierzesz wszystkie 3 addonsy (powiazane z tym ze jest index grany dalej w najwyzszym useeffecie)
// 11. planindex tez pozmieniac na keye chyba mimo ze to nie arrayka jak addony
// 12. selectoption tam ma dalej uzycie chyba .plan i cos z tym kminic jeszcze

// .... zaczac kminic jak wysylac info do serwera
// .... potem dekstop
