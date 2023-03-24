import { Dialog } from "@progress/kendo-react-dialogs";
import {
  Field,
  Form,
  FormElement,
  FormRenderProps,
} from "@progress/kendo-react-form";
import moment from "moment";
import userApi from "../../../api/userApi";

import { CustomInput } from "../../CustomForm/CustomInput";
import { FormTextArea } from "../../CustomForm/CustomTextArea";
import { FormDatePicker } from "../../CustomForm/FromDatePicker";
import {
  addressValidator,
  DateValidator,
  emailValidator,
  nameValidator,
  phoneValidator,
} from "../../ValidatorForm";

import { Button } from "@progress/kendo-react-buttons";
import { DEFAULT_VALUE, TIME_FORMAT } from "../../../constant/constant";
import "./style.scss";

function AddUser(props: any) {
  const { onToggleDialog, noticeDialog } = props;
  const minTime = new Date(1900, 1, 1);
  const maxTime = new Date();

  const handleSubmit = (dataItem: { [name: string]: any }) => {
    if (!dataItem) return;
    const { fullName, email, phone, address, birthDay } = dataItem;
    const timeNow = Date.now();
    var localDate = new Date(birthDay.toString());
    const dateTimeAction = moment(timeNow)
      .format(TIME_FORMAT.FORMAT_TIME_ACTION)
      .toString();
    const newData = {
      fullName: fullName,
      email: email,
      phone: phone,
      address: address,
      birthDay: JSON.stringify(localDate),
      createdAt: dateTimeAction,
      updatedAt: dateTimeAction,
      status: DEFAULT_VALUE.DEFAULT_STATUS,
      isAdmin: DEFAULT_VALUE.DEFAULT_ADMIN,
    };
    userApi
      .create(newData)
      .then(() => {
        onToggleDialog(false);
        noticeDialog({
          titleNotice: "Successfully",
          infoNotice: "Created user successfully",
        });
      })
      .catch((error) => {
        console.log("error", error);
        noticeDialog({
          titleNotice: "Failed",
          infoNotice: "Created user failed",
        });
      });
  };

  return (
    <div>
      <Dialog title={"Add New User"} onClose={() => onToggleDialog(false)}>
        <Form
          onSubmit={handleSubmit}
          render={(formRenderProps: FormRenderProps) => (
            <FormElement className="form" style={{ minWidth: 1200 }}>
              <fieldset className={"k-form-fieldset"}>
                <div className="form__field">
                  <Field
                    name={"fullName"}
                    label={"Full name"}
                    component={CustomInput}
                    validator={nameValidator}
                  />
                </div>

                <div className="form__field">
                  <Field
                    name={"email"}
                    type={"email"}
                    label={"Email"}
                    component={CustomInput}
                    validator={emailValidator}
                  />
                </div>

                <div className="form__field">
                  <Field
                    name={"phone"}
                    label={"Phone"}
                    component={CustomInput}
                    validator={phoneValidator}
                  />
                </div>

                <div className="form__field">
                  <Field
                    name={"birthDay"}
                    label={"Birthday"}
                    min={minTime}
                    max={maxTime}
                    component={FormDatePicker}
                    validator={DateValidator}
                  />
                </div>

                <div className="form__field">
                  <Field
                    name={"address"}
                    label={"Address"}
                    component={FormTextArea}
                    validator={addressValidator}
                  />
                </div>
              </fieldset>
              <div className="k-form-buttons">
                <Button
                  type={"submit"}
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base form__btn--add"
                  disabled={!formRenderProps.allowSubmit}
                >
                  Add User
                </Button>
              </div>
            </FormElement>
          )}
        />
      </Dialog>
    </div>
  );
}

export default AddUser;
