import { DatePicker } from "@progress/kendo-react-dateinputs";
import { FieldRenderProps, FieldWrapper } from "@progress/kendo-react-form";
import { Label, Error } from "@progress/kendo-react-labels";

export const FormDatePicker = (fieldRenderProps: FieldRenderProps) => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    wrapperStyle,
    hintDirection,
    ...others
  } = fieldRenderProps;

  const showValidationMessage: string | false | null =
    touched && validationMessage;
  const errorId: string = showValidationMessage ? `${id}_error` : "";
  const labelId: string = label ? `${id}_label` : "";

  return (
    <FieldWrapper style={wrapperStyle}>
      <Label
        id={labelId}
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
      >
        {label}
      </Label>
      <div className={"k-form-field-wrap"}>
        <DatePicker
          ariaLabelledBy={labelId}
          valid={valid}
          id={id}
          disabled={disabled}
          {...others}
        />
        {showValidationMessage && (
          <Error id={errorId}>{validationMessage}</Error>
        )}
      </div>
    </FieldWrapper>
  );
};
