import * as Tabs from "@radix-ui/react-tabs";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

import { triggerStyles, rootStyles } from "./SearchTabs.styles";

const SearchTabs = ({ ...props }: Tabs.TabsProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabChange = (value: string) => {
    navigate(value);
  };

  const currentTab = location.pathname === "/" ? "/" : location.pathname;

  return (
    <>
      <Tabs.Root
        {...props}
        className={rootStyles()}
        value={currentTab}
        defaultValue="/users"
        onValueChange={handleTabChange}
      >
        <Tabs.List className="flex">
          <Tabs.Trigger className={triggerStyles()} value="/users" asChild>
            <NavLink to="/users">Users</NavLink>
          </Tabs.Trigger>
          <Tabs.Trigger className={triggerStyles()} value="/posts" asChild>
            <NavLink to="/posts">Posts</NavLink>
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </>
  );
};

export { SearchTabs };
