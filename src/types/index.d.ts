import { ReactElement } from "react";

interface IInput {
  leftIcon?: string;
  type: string;
  rightIcon?: string;
  label: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IButton {
  variant: string;
  name: string;
  isLoading?: boolean;
  onClick?: () => void;
  icon?: string;
  type?: any;
}

interface ITextArea {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

interface IDashboardMenu {
  name: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

interface IAuthLayout {
  header: string;
  description: string;
  children: ReactElement;
}

interface IDashboardLayout {
  header: string;
  children: ReactElement;
}

interface IDashboardMenuBar {
  setActiveMenu: (value: React.SetStateAction<string>) => void;
  activeMenu: string;
}
