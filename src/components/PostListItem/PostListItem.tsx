import { Post } from "src/types";
import { ListItem, type ListItemProps } from "../ListItem";

type PostListItemProps = ListItemProps & Pick<Post, "title">;

const PostListItem = ({ title, ...props }: PostListItemProps) => {
  return (
    <ListItem {...props}>
      <span>Title: {title}</span>
    </ListItem>
  );
};

export { PostListItem };
