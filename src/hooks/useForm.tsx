import { useState } from "react";

export const useForm = (initialFormData = {}) => {
  const [formData, setFormData] = useState(initialFormData);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(target.value);

    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return {
    ...formData,
    formData,
    onInputChange,
  };
};
