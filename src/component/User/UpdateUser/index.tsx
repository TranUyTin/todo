import {
  Form,
  FormElement,
  FormRenderProps,
  FormSubmitClickEvent,
} from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Stepper } from "@progress/kendo-react-layout";

import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import { useState, useCallback } from "react";

const stepPages = [ContactDetails, PersonalDetails];

interface stepsInterface {
  isValid: boolean | undefined;
  label: string;
}

export const UpdateUser = () => {
  const [step, setStep] = useState<number>(0);
  const [formState, setFormState] = useState<Object>({});
  const [steps, setSteps] = useState<Array<stepsInterface>>([
    { label: "Contact Details", isValid: undefined },
    { label: "Personal Details", isValid: undefined },
  ]);

  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;

  const onStepSubmit = useCallback(
    (event: FormSubmitClickEvent) => {
      const { isValid, values } = event;

      const currentSteps = steps.map(
        (currentStep: stepsInterface, index: number) => ({
          ...currentStep,
          isValid: index === step ? isValid : currentStep.isValid,
        })
      );

      setSteps(currentSteps);

      if (!isValid) {
        return;
      }

      setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);

      if (isLastStep) {
        alert(JSON.stringify(values));
      }
    },
    [steps, isLastStep, step, lastStepIndex]
  );

  const onPrevClick = useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
    },
    [step, setStep]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Stepper value={step} items={steps} />
      <Form
        initialValues={formState}
        onSubmitClick={onStepSubmit}
        render={(formRenderProps: FormRenderProps) => (
          <div style={{ alignSelf: "center" }}>
            <FormElement style={{ width: 480 }}>
              {stepPages[step]}
              <span
                style={{ marginTop: "40px" }}
                className={"k-form-separator"}
              />
              <div
                style={{
                  justifyContent: "space-between",
                  alignContent: "center",
                }}
                className={
                  "k-form-buttons k-button k-button-md k-rounded-md k-button-solid k-button-solid-bases-end"
                }
              >
                <span style={{ alignSelf: "center" }}>
                  Step {step + 1} of 3
                </span>
                <div>
                  {step !== 0 ? (
                    <Button
                      style={{ marginRight: "16px" }}
                      onClick={onPrevClick}
                    >
                      Previous
                    </Button>
                  ) : undefined}
                  <Button
                    themeColor={"primary"}
                    disabled={!formRenderProps.allowSubmit}
                    onClick={formRenderProps.onSubmit}
                  >
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
                </div>
              </div>
            </FormElement>
          </div>
        )}
      />
    </div>
  );
};
