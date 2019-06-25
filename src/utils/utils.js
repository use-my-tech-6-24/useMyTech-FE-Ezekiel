import jwt_decode from "jwt-decode";
import { css } from "glamor";

export const decodeToken = token => {
  return jwt_decode(token);
};

export const successOption = () => {
  return {
    className: css({
      background: "#1cae9e !important"
    })
  };
};

export const errorOption = () => {
  return {
    className: css({
      background: "#e8145c !important"
    })
  };
};
