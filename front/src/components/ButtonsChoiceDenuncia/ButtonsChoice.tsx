import React from "react";
import { Button } from "./styles";
type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title: string;
};

function ButtonsChoice({ title, ...rest }: Props) {
  return <Button {...(rest as any)}>{title}</Button>;
}
export default ButtonsChoice;
/* React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement 
> */
