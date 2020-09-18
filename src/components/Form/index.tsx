import React, { useState } from "react";
import Input from "../Input";
import Card from "../Card";
import List from "../List";

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
  const [renderList, setRenderList] = useState(false);

  const checkConditionalRender = (value: string): void => {
    if (value.length > 6) {
      setRenderList(true);
    } else {
      setRenderList(false);
    }
  };

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
      className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col  p-4 bg-white"
    >
      <Card />

      <p className="text-center text-grey-300">o</p>
      <Input
        value={formData.cardNumber}
        handleChange={handleChange}
        name="cardNumber"
        placeholder="4500725******4567"
        marginClass="my-2"
      />
      <List render={renderList} />
      <Input
        value={formData.cardName}
        handleChange={handleChange}
        name="cardName"
        placeholder="Nombre Completo"
        marginClass="my-2"
      />
      <Input
        value={formData.cardID}
        handleChange={handleChange}
        name="cardID"
        placeholder="Numero de Documento"
        marginClass="my-2"
      />

      <div className="container mx-auto flex  box-border">
        <Input
          value={formData.cardExpDate}
          handleChange={handleChange}
          name="cardExpDate"
          placeholder="Vencimiento"
          widthClass="w-1/2 "
          marginClass="my-2 mr-1"
        />
        <Input
          value={formData.cardCode}
          handleChange={handleChange}
          name="cardCode"
          placeholder="Cod. de Seguridad"
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
