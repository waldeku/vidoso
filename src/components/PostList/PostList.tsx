import { HTMLAttributes } from "react";
import { useQuery } from "@tanstack/react-query";
import { twMerge } from "tailwind-merge";

import { Post } from "src/types";
import { JSON_PLACEHOLDER_URL } from "src/constants";

import { Loader } from "../Loader";
import { Error } from "../Error";
import { PostListItem } from "../PostListItem";
import { useFilter } from "src/hooks/useFilter";

import { listStyles, loaderStyles, errorStyles } from "./PostList.styles";

interface PostListProps extends HTMLAttributes<HTMLDivElement> {
  searchText: string;
}

const PostList = ({ searchText }: PostListProps) => {
  const { filterValue } = useFilter();
  const { isPending, error, data } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(`${JSON_PLACEHOLDER_URL}/posts`);
      return await response.json();
    },
  });

  if (isPending) {
    return <Loader className={loaderStyles()} />;
  }

  if (error) {
    return (
      <Error
        message="Something went wrong when fetching posts list"
        className={errorStyles()}
      />
    );
  }

  if (data) {
    return (
      <ul className={twMerge(listStyles())}>
        {data
          .filter(({ title }) => filterValue(title, searchText))
          .map(({ title, id }) => (
            <PostListItem key={id} title={title} />
          ))}
      </ul>
    );
  }

  return null;
};

export { PostList };
