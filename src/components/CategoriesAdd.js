import { useState } from "react";
import PropTypes from 'prop-types';

const CategoriesAdd = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(categories => [inputValue, ...categories]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputValue}
      />
    </form>
  );
}

CategoriesAdd.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

export default CategoriesAdd;