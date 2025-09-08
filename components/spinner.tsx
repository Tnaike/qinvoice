import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";

export const spinnerVariants = cva("relative animate-spin", {
  variants: {
    size: {
      small: "w-6 h-6",
      medium: "w-10 h-10",
      big: "w-[9.75rem] h-[9.75rem]",
    },
    position: {
      center: "mx-auto",
      default: "",
    },
  },
  defaultVariants: {
    size: "small",
    position: "default",
  },
});

function Spinner({ size, position }: VariantProps<typeof spinnerVariants>) {
  return (
    <div className={spinnerVariants({ size, position })}>
      <Image
        width={80}
        height={80}
        alt="spinner"
        src="/assets/spinner.svg"
        className="object-fit"
      />
    </div>
  );
}

export default Spinner;
