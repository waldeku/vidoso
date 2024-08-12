import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { FaSearch } from "react-icons/fa";

import {
  iconStyles,
  inputStyles,
  inputWrapperStyles,
  wrapperStyles,
} from "./SearchInput.styles";

interface SearchInputProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  onValueChange: (value: string) => void;
}

const SearchInput = ({
  value,
  className,
  onValueChange,
  ...props
}: SearchInputProps) => {
  return (
    <div {...props} className={twMerge(wrapperStyles(), className)}>
      <div className={inputWrapperStyles()}>
        <FaSearch className={iconStyles()} />
        <input
          type="text"
          placeholder="Search..."
          value={value}
          className={inputStyles()}
          onChange={(e) => {
            onValueChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export { SearchInput };
