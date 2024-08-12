import { HTMLAttributes } from "react";
import { useQuery } from "@tanstack/react-query";
import { twMerge } from "tailwind-merge";

import { User } from "src/types";
import { JSON_PLACEHOLDER_URL } from "src/constants";

import { Loader } from "../Loader";
import { Error } from "../Error";
import { UserListItem } from "../UserListItem";
import { useFilter } from "src/hooks/useFilter";

import { listStyles, loaderStyles, errorStyles } from "./UserList.styles";

interface UserListProps extends HTMLAttributes<HTMLDivElement> {
  searchText: string;
}

const UserList = ({ searchText }: UserListProps) => {
  const { filterValue } = useFilter();
  const { isPending, error, data } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(`${JSON_PLACEHOLDER_URL}/users`);
      return await response.json();
    },
  });

  if (isPending) {
    return <Loader className={loaderStyles()} />;
  }

  if (error) {
    return (
      <Error
        message="Something went wrong when fetching users list"
        className={errorStyles()}
      />
    );
  }

  if (data) {
    return (
      <ul className={twMerge(listStyles())}>
        {data
          .filter(({ name }) => filterValue(name, searchText))
          .map(({ name, username, id }) => (
            <UserListItem key={id} name={name} username={username} />
          ))}
      </ul>
    );
  }

  return null;
};

export { UserList };
