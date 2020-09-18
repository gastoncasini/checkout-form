import React, { useState } from "react";
import Input from "../Input";
import { ReactComponent as Visalogo } from "../../assets/visa.svg";

type changeEvent = React.ChangeEvent<HTMLInputElement>;
type FormEvent = React.FormEvent<HTMLFormElement>;

interface IFormData {
  cardNumber: string;
  cardName: string;
  cardID: string;
  cardExpDate: string;
  cardCode: string;
}

const initialState: IFormData = {
  cardNumber: "",
  cardName: "",
  cardID: "",
  cardExpDate: "",
  cardCode: "",
};

function Form(): JSX.Element {
  const [formData, setFormData] = useState<IFormData>(initialState);

  const checkConditionalRender = (value: string): void => {};

  const handleChange = (e: changeEvent): void => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      checkConditionalRender(value);
    }

    const newFormData: IFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(newFormData);
  };
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col p-2 bg-white"
    >
      <div className="justify-between rounded-lg h-32 w-8/12 mx-auto h-30 bg-gradient-to-r from-teal-400 to-blue-500 flex flex-col">
        <div className="w-16 h-16 self-end mr-4">
          <Visalogo />
        </div>

        <div className=" text-white ml-2 mb-2 ">
          <p className="tracking-widest">4500725******4567</p>
          <p className="tracking-widest">Demo user</p>
        </div>
      </div>

      <p className="text-center">o</p>
      <Input
        value={formData.cardNumber}
        handleChange={handleChange}
        name="cardNumber"
        marginClass="my-2"
      />
      <Input
        value={formData.cardName}
        handleChange={handleChange}
        name="cardName"
        marginClass="my-2"
      />
      <Input
        value={formData.cardID}
        handleChange={handleChange}
        name="cardID"
        marginClass="my-2"
      />

      <div className="container mx-auto flex  box-border">
        <Input
          value={formData.cardExpDate}
          handleChange={handleChange}
          name="cardExpDate"
          widthClass="w-1/2 "
          marginClass="my-2 mr-1"
        />
        <Input
          value={formData.cardCode}
          handleChange={handleChange}
          name="cardCode"
          widthClass="w-1/2 "
          marginClass="my-2"
        />
      </div>

      <button
        type="submit"
        className="mt-4 text-xs bg-purple-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-200 ease-in-out transform  hover:scale-105 active:scale-1 "
      >
        Procesar
      </button>
    </form>
  );
}

export default Form;
