import { HTMLAttributes, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Routes, Route, Navigate } from "react-router-dom";

import { SearchTabs } from "../SearchTabs";
import { SearchInput } from "../SearchInput";
import { UserList } from "../UserList";
import { PostList } from "../PostList";

import { wrapperStyles } from "./SearchForm.styles";

const SearchForm = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchText(value);
    localStorage.setItem("searchText", value);
  };

  useEffect(() => {
    const savedSearchTerm = localStorage.getItem("searchText");
    if (savedSearchTerm) {
      setSearchText(savedSearchTerm);
    }
  }, []);

  return (
    <div {...props} className={twMerge(wrapperStyles(), className)}>
      <SearchInput value={searchText} onValueChange={handleSearchChange} />
      <SearchTabs />
      <Routes>
        <Route index element={<Navigate to="/users" />} />
        <Route path="/users" element={<UserList searchText={searchText} />} />
        <Route path="/posts" element={<PostList searchText={searchText} />} />
        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </div>
  );
};

export { SearchForm };
