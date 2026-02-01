import { useState } from 'react';

export default function useForm(initialValue) {
  const [formData, setFormData] = useState(initialValue);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function resetForm(newValues = initialValue) {
    setFormData(newValues);
  }

  return {
    setFormData,
    resetForm,
    handleChange,
    formData,
  };
}
