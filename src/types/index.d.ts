import { ReactElement } from "react";

interface IInput {
  leftIcon?: string;
  type: string;
  rightIcon?: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IButton {
  variant: string;
  name: string;
  isLoading?: boolean;
  onClick?: () => void;
  icon?: string;
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
