import { Routes, Route, NavLink } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";

function Page() {
  return (
    <>
      <Tabs.Root>
        <Tabs.List className="flex">
          <Tabs.Trigger value="posts" asChild>
            <NavLink to="posts">Posts</NavLink>
          </Tabs.Trigger>
          <Tabs.Trigger value="users" asChild>
            <NavLink to="users">Users</NavLink>
          </Tabs.Trigger>
        </Tabs.List>
        <Routes>
          <Route
            path="users"
            element={<Tabs.Content value="users">users</Tabs.Content>}
          />
          <Route
            path="posts"
            element={<Tabs.Content value="posts">posts</Tabs.Content>}
          />
        </Routes>
      </Tabs.Root>
      <br /> <br /> <br /> <br />
      <div className="tabs">
        <NavLink to="1">Tab 1</NavLink>
        <NavLink to="2">Tab 2</NavLink>
        <NavLink to="3">Tab 3</NavLink>
      </div>
      <Routes>
        <Route path="1" element="Tab 1 content" />
        <Route path="2" element="Tab 2 content" />
        <Route path="3" element="Tab 3 content" />
      </Routes>
    </>
  );
}

export { Page };
