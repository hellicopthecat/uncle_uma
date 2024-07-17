import {FieldError, RegisterOptions, UseFormRegister} from "react-hook-form";
import {IJoinInputTypes} from "../../type/inputTypes";
import {HTMLInputTypeAttribute} from "react";
interface IJoinInputArgs {
  register: UseFormRegister<IJoinInputTypes>;
  registVal: keyof IJoinInputTypes;
  labelTxt: string;
  inputType?: HTMLInputTypeAttribute;
  registRule: RegisterOptions<IJoinInputTypes>;
  minLength?: number;
  maxLength?: number;
  placeHolder: string;
  error: FieldError | undefined;
}
export default function JoinInput({
  register,
  registVal,
  labelTxt,
  inputType = "text",
  registRule,
  minLength,
  maxLength,
  placeHolder,
  error,
}: IJoinInputArgs) {
  return (
    <div className="flex flex-col gap-2 w-96">
      <label className="block w-30" htmlFor={registVal}>
        {labelTxt}
      </label>
      <input
        {...register(registVal, registRule)}
        id={registVal}
        type={inputType}
        name={registVal}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeHolder}
        className="border-2 border-blue-200 focus:outline-orange-300 rounded-md transition ease-in-out duration-300 px-3 h-10"
        required
      />
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
}
