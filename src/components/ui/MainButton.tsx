"use client";

import { forwardRef } from "react";
import { Button as AntButton } from "antd";
import type { ButtonProps as AntButtonProps } from "antd";
import { twMerge } from "tailwind-merge";
import { useRouter } from "@/i18n/navigation";

export type MainButtonPreset = "solid" | "navLink" | "toggle" | "floatingIcon";

// One shared className string per "type of button" you actually reuse
// across the app — add a new key here instead of repeating a long
// Tailwind string at every call site.
const presetClasses: Record<MainButtonPreset, string> = {
  // Default antd primary/round button — antd's own type/shape props
  // already handle the look, no extra classes needed.
  solid: "",

  // Plain text link living inside a white pill (e.g. the "Services"
  // dropdown trigger) — matches the <Link> nav items next to it.
  navLink:
    "!flex !h-auto !items-center !gap-1 !border-none !bg-transparent !px-0 !font-semibold !text-navy-600 !shadow-none hover:!text-clay-500",

  // Small circular pill segment — the EN/Ar language switch. Pair with
  // the `active` prop below to get the filled/unfilled state for free.
  toggle:
    "!flex !size-10 !items-center !justify-center !border-none !text-sm !font-semibold !shadow-none",

  // Large white circular icon button with a drop shadow — mobile
  // hamburger trigger, or any other floating icon action.
  floatingIcon:
    "!flex !h-14 !w-14 !items-center !justify-center !border-none !bg-white !shadow-lg !shadow-black/10",
};

export interface MainButtonProps extends AntButtonProps {
  /**
   * Internal route to navigate to on click, through next-intl's locale-aware
   * router. Pass a plain path ("/contact"), not a locale-prefixed one.
   */
  href?: string;
  /** Picks one of the shared style presets above instead of repeating the
   * same Tailwind string at every call site. Defaults to a normal antd
   * button. Distinct from antd's own `variant` prop (outlined/dashed/etc.),
   * which is still available and passed straight through. */
  preset?: MainButtonPreset;
  /** Only meaningful with preset="toggle": true renders the filled/active
   * segment (white bg, dark text), false the muted/inactive one — replaces
   * passing a background/color style object by hand at each call site. */
  active?: boolean;
}

const MainButton = forwardRef<HTMLButtonElement, MainButtonProps>(
  (
    {
      href,
      onClick,
      type = "primary",
      shape = "round",
      preset = "solid",
      active,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const router = useRouter();

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      onClick?.(e);
      if (href) {
        router.push(href);
      }
    }

    const resolvedType = preset === "solid" ? type : "text";
    const resolvedShape =
      preset === "toggle" || preset === "floatingIcon" ? "circle" : shape;

    const activeStyle: React.CSSProperties | undefined =
      preset === "toggle" && active !== undefined
        ? {
            background: active ? "#ffffff" : "transparent",
            color: active ? "#041338" : "#6D7A99",
          }
        : undefined;

    return (
      <AntButton
        ref={ref}
        type={resolvedType}
        shape={resolvedShape}
        onClick={handleClick}
        className={twMerge(presetClasses[preset], className)}
        style={{ ...activeStyle, ...style }}
        {...rest}
      />
    );
  },
);

MainButton.displayName = "MainButton";

export default MainButton;
