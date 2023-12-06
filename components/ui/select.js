import { forwardRef } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { twMerge } from "tailwind-merge";
import { ChevronDown } from "lucide-react";

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectGroup = SelectPrimitive.Group;

const SelectTrigger = forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={twMerge(
      "flex w-full items-center justify-between gap-4",
      "text-strong",
      "border-divider rounded-md border bg-default ",
      "h-10 px-3",
      "data-[placeholder]:text-disabled",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = forwardRef(
  ({ className, children, position = "popper", ...props }, ref) => (
    // <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={twMerge(
        "bg-default",
        "border-100 border-divider rounded-md border",
        "relative min-w-[12rem]",
        "z-50 overflow-hidden drop-shadow-md",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      //   className={cn(
      //     "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md
      //     data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      //     position === "popper" &&
      //       "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      //     className
      //   )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
      // className={cn(
      //   "p-1",
      //   position === "popper" &&
      //     "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
      // )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
    // </SelectPrimitive.Portal>
  ),
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={twMerge(
      "text-strong",
      "px-3 py-2",
      "cursor-pointer focus:bg-100",
      "outline-none",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "data-[state=checked]:bg-100",
      className,
    )}
    // className={cn(
    //   "relative flex w-full cursor-default select-none items-center rounded-sm
    // py-1.5 pl-8 pr-2 text-sm outline-none
    // focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    //   className
    // )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectLabel = forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={twMerge("text-weak", "select-none px-3 py-2", className)}
    // className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectSeparator = forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={twMerge("-mx-1 my-1 h-px", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
};
