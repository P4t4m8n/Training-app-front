import { Link, LinkProps } from "react-router";

interface Props extends LinkProps {
  children: React.ReactNode;
}

export default function LinkCmp({ children, ...props }: Props) {
  //   const STYLE = "";
  return (
    <Link {...props} >
      {children}
    </Link>
  );
}
