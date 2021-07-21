import Link from "next/link";

const isAppRoute = (href: string): boolean =>
  !href.startsWith("http://") && !href.startsWith("https://");

export const NextAnchor = ({
  href,
  children,
  ...props
}: JSX.IntrinsicElements["a"]): JSX.Element =>
  href && isAppRoute(href) ? (
    <Link href={href} passHref>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <a {...props}>{children}</a>
    </Link>
  ) : (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <a href={href} {...props}>
      {children}
    </a>
  );
