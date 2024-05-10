import { useState } from "react";
import { Button, DashboardMenu, Input, TextArea } from "../components";

export const Components = () => {
  const [activeMenu, setActiveMenu] = useState("schedules");
  return (
    <div className="w-full min-h-[100vh] text-center flex flex-col justify-center items-center py-10">
      <h1 className="text-4xl">My Cowry Components</h1>
      <div className="w-[90%] grid gap-10">
        <Input
          type="password"
          label="Password"
          rightIcon="uis:padlock"
          leftIcon="octicon:person-16"
        />

        <Input type="time" label="Time" leftIcon="subway:time-3" />
        <Input type="date" label="Date" leftIcon="fontisto:date" />

        <Button variant="primary" name="Create Account" isLoading />

        <TextArea label={"Suggestions"} />

        <DashboardMenu
          name="Dashboard"
          icon="radix-icons:dashboard"
          isActive={activeMenu === "dashboard"}
          onClick={() => setActiveMenu("dashboard")}
        />

        <DashboardMenu
          name={"Schedules"}
          icon="subway:time-3"
          isActive={activeMenu === "schedules"}
          onClick={() => setActiveMenu("schedules")}
        />
      </div>
    </div>
  );
};
