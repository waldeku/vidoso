import { User } from "src/types";
import { Avatar } from "../Avatar";
import { ListItem, type ListItemProps } from "../ListItem";

type UserListItemProps = ListItemProps & Pick<User, "name" | "username">;

const UserListItem = ({ name, username, ...props }: UserListItemProps) => {
  return (
    <ListItem {...props}>
      <Avatar username={username} />
      <span>{name}</span>
    </ListItem>
  );
};

export { UserListItem };
