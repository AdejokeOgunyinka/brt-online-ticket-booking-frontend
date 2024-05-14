import { ReactElement } from "react";

interface IInput {
  leftIcon?: string;
  type: string;
  rightIcon?: string;
  label?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  error?: string;
  value?: string;
  showError?: boolean;
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
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  error?: string;
  value?: string;
  showError?: boolean | string;
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

interface IInterceptor {
  component: ReactElement;
}
interface ILogin {
  identifier: string;
  password: string;
}

interface ICreateAccount {
  firstname: string;
  lastname: string;
  email: string;
  brt_card_number: string;
  password: string;
  username: string;
  phone_number: string;
}

interface IErrorResponse {
  response: {
    data: {
      status: string;
      code: number;
      message: string;
    };
  };
}

interface IProfile {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  firstname: string;
  lastname: string;
  phone_number: string;
  brt_card_number: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}
