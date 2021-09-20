import { IState } from "../../core/types";

export const getAppState = ({ app }: IState) => app;
export const getLoginState = ({ login }: IState) => login;
export const getRegistrationState = ({ reg }: IState) => reg;
export const getResetPasswordState = ({ res }: IState) => res;
