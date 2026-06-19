interface CTAButtonProps {
  href: string;
  children: string;
  ariaLabel: string;
  variant?: "primary" | "secondary";
  /** Set when the link points to an external site. */
  external?: boolean;
}

export function CTAButton({
  href,
  children,
  ariaLabel,
  variant = "secondary",
  external = false,
}: CTAButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      className={`cta cta--${variant}`}
      href={href}
      aria-label={ariaLabel}
      {...externalProps}
    >
      {children}
    </a>
  );
}
