import { useState } from "react";
export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState();
  const onChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onEnter=(event)=>{ 
    event.preventDefault();
    if (inputValue.trim().length<=1) return;
    //setCategories(categories=> [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  }
  return (
    <form onSubmit={onEnter}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onChange}
      ></input>
    </form>
  );
};
