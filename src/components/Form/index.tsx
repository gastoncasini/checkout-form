import React, { useState } from "react";
import Input from "../Input";

type changeEvent = React.ChangeEvent<HTMLInputElement>;

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

  return (
    <form>
      <p>Hello from TS</p>
      <Input
        value={formData.cardNumber}
        handleChange={handleChange}
        name="cardNumber"
      />
      <Input
        value={formData.cardName}
        handleChange={handleChange}
        name="cardName"
      />
      <Input
        value={formData.cardID}
        handleChange={handleChange}
        name="cardID"
      />

      <div>
        <Input
          value={formData.cardExpDate}
          handleChange={handleChange}
          name="cardExpDate"
        />
        <Input
          value={formData.cardCode}
          handleChange={handleChange}
          name="cardCode"
        />
      </div>
    </form>
  );
}

export default Form;
