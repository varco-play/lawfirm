"use client";

import { ArrowRight } from "lucide-react";
import {
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactNode,
  type AnchorHTMLAttributes,
  useState,
} from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className,
  showArrow = true,
  disabled,
  type = "button",
  ...props
}: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (
    event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    setOffset({
      x: (event.clientX - rect.left - rect.width / 2) * 0.12,
      y: (event.clientY - rect.top - rect.height / 2) * 0.12,
    });
  };

  const sharedClassName = cn("magnetic-button", `button-${variant}`, className);
  const style = {
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
  };

  if (href) {
    return (
      <a
        className={sharedClassName}
        href={href}
        style={style}
        onMouseMove={handleMove}
        onMouseLeave={() => setOffset({ x: 0, y: 0 })}
        {...props}
      >
        <span>{children}</span>
        {showArrow ? <ArrowRight aria-hidden="true" size={18} /> : null}
      </a>
    );
  }

  return (
    <button
      className={sharedClassName}
      disabled={disabled}
      style={style}
      type={type}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      {...props}
    >
      <span>{children}</span>
      {showArrow ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </button>
  );
}
