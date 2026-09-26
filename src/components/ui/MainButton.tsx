"use client";

import { forwardRef } from "react";
import { Button as AntButton } from "antd";
import type { ButtonProps as AntButtonProps } from "antd";
import { twMerge } from "tailwind-merge";
import { useRouter } from "@/i18n/navigation";

export type MainButtonPreset =
  | "solid"
  | "outline"
  | "navLink"
  | "toggle"
  | "floatingIcon"
  | "Link";

const presetClasses: Record<MainButtonPreset, string> = {
  solid: "",

  // White pill with an orange border/text — the "Request Prices" style.
  // Pairs with resolvedType below (forced to antd's "default" type so
  // antd doesn't fill it with the primary color).
  outline:
    "!flex !h-12 !items-center !justify-center !border-2 !border-clay-500 !bg-white !px-8 !font-semibold !text-clay-500 !shadow-none hover:!border-clay-600 hover:!text-clay-600 hover:!bg-clay-50",

  navLink:
    "!flex !h-auto !items-center !gap-1 !border-none !bg-transparent !px-0 !font-semibold !text-navy-600 !shadow-none hover:!text-clay-500",

  toggle:
    "!flex !size-10 !items-center !justify-center !border-none !text-sm !font-semibold !shadow-none",

  floatingIcon:
    "!flex !h-14 !w-14 !items-center !justify-center !border-none !bg-white !shadow-lg !shadow-black/10",

  Link: "!flex   !gap-1 !border-none !bg-transparent !px-0 !font-semibold !shadow-none font-bold! text-base! !text-clay-700 hover:!text-clay-650",
};

export interface MainButtonProps extends AntButtonProps {
  href?: string;
  preset?: MainButtonPreset;
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

    const resolvedType =
      preset === "outline" ? "default" : preset === "solid" ? type : "text";
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
