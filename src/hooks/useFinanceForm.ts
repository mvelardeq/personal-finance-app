import { useState } from "react";

type initialFinanceFormType = {
  typeOperation: string;
  concept: string;
  note: string;
  price: number;
  date: string;
};

export const useFinanceForm = (initialFormData: initialFinanceFormType) => {
  const [formData, setFormData] = useState(initialFormData);

  const onInputChange = ({
    target,
  }:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>
    | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormData(initialFormData);
  };


  return {
    ...formData,
    formData,
    onInputChange,
    onResetForm
  };
};
