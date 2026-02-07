import { useState } from 'react';

export default function useForm(initialValue) {
  const [formData, setFormData] = useState(initialValue);

  function handleChange(e) {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const [parent, child] = name.split('.');

      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
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
