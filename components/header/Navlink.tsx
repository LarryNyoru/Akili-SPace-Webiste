import {  Link as A } from "theme-ui";
import { Link as MenuLink } from "react-scroll";
import NextLink from "next/link";

type IProps = {
  path: string;
  label: any;

  onClick: any;
};

export function NavLink({ path, label, ...rest }: IProps) {
  return (
    <MenuLink
      to={path}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      className="nav-item"
      activeClass="active"
      {...rest}
    >
      {label}
    </MenuLink>
  );
}
// export function NavLink({ path, label, children, ...rest }) {
//   return (
//     <NextLink href={path}>
//       <MenuLink {...rest}>{children ? children : label}</MenuLink>
//     </NextLink>
//   );
// }
export function Link({ path, label, ...rest }: IProps) {
  return (
    <NextLink href={path}>
      <A {...rest}>{label}</A>
    </NextLink>
  );
}
