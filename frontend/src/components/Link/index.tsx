import React, { forwardRef, Ref } from "react";
import { styled } from "@mui/material/styles";

import Link, { LinkProps } from "next/link";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

type Props = Omit<MuiLinkProps, "href" | "classes"> &
  Pick<LinkProps, "href" | "as" | "prefetch"> & {
    openInNewTab?: boolean | false;
  };

/**
 * Via https://gist.github.com/kachar/028b6994eb6b160e2475c1bb03e33e6a - Link.tsx
 */

const NavLink = ({ href, as, prefetch, openInNewTab, ...props }: Props, ref: Ref<HTMLAnchorElement>) => {
  return openInNewTab ? (
    <Link href={href} as={as} prefetch={prefetch} passHref>
      <MuiLink ref={ref} target="_blank" rel="noopener noreferrer" {...props} />
    </Link>
  ) : (
    <Link href={href} as={as} prefetch={prefetch} passHref>
      <StyledLink ref={ref} {...props} />
    </Link>
  );
};

export default forwardRef<HTMLAnchorElement, Props>(NavLink);

const StyledLink = styled(MuiLink)`
  color: black;
  display: inherit;
  text-decoration: none;
  height: 100%;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
    text-decoration: none;
  }
`;
