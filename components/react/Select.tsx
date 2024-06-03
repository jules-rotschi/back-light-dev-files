import { ChangeEvent, useState } from "react";
import { Chevron } from "../../icons/react/Chevron";

export interface Option {
  label: string;
  value: string;
  isEnabled: boolean;
}

interface SelectProps {
  name: string;
  options: Option[];
  value?: string;
  onChange?: Function;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const Select = (props: SelectProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    if (!props.disabled) {
      setIsOpen((c) => !c)
    }
  }

  const close = () => {
    setIsOpen(false);
  }

  const openClassName = isOpen ? " select--open" : "";

  const [currentValue, setCurrentValue] = useState(props.defaultValue || props.value);

  const selectOption = (optionValue: Option["value"]) => {
    setCurrentValue(optionValue);
    if (props.onChange) props.onChange(optionValue);
    close();
  }

  const handleOptionClick = (e: ChangeEvent) => {
    selectOption(e.target.attributes[4].value);        
  }

  const currentOption = props.options.find((option) => option.value === currentValue)
  const label = currentOption?.label || props.placeholder || props.options[0].label || "Select";

  return (
    <div className={"select" + openClassName} aria-disabled={props.disabled}>
      <button
        type="button"
        className="select__button"
        onClick={() => toggleIsOpen()}
        role="combobox"
        aria-controls="select-dropdown"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="select__label">{label}</span>
        <span className="select__arrow"><Chevron size={16} /></span>
      </button>
      <ul className="select__dropdown" role="listbox" id="select-dropdown">
        {
          props.options.map((option) => {
            return (
              <li className="select__option" key={option.value} role="option" aria-disabled={!option.isEnabled}>
                <input
                  type="radio"
                  id={props.name + "-" + option.value}
                  className="select__option"
                  name={props.name}
                  value={option.value}
                  onChange={handleOptionClick}
                  defaultChecked={currentValue === option.value}
                />
                <label htmlFor={props.name + "-" + option.value}>{option.label}</label>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}