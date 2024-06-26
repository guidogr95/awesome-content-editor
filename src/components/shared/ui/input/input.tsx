import { cn } from "@/lib/utils";
import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	label?: string
	error?: string
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
			className,
			error,
      ...props
    },
    ref
  ) => {
    return (
			<label className={cn("block text-sm font-medium text-gray-900", className)}>
				{label}
				<input
					ref={ref}
					aria-label={label}
					className={cn(
						"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
					)}
					{...props}
				/>
				{error && <span>{error}</span>}
			</label>
    );
  }
);

Input.displayName = "Input";

export default Input;