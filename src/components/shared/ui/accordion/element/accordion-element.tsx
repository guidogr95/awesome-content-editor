import { useTogglePopup } from "@/hooks";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
	title: string
	content: ReactNode
}

const AccordionElement = ({
	title,
	content
}: Props) => {
	const {
		isOpen,
		handleToggle
	} = useTogglePopup();
  return (
		<div>
			<h2>
				<button
					type="button"
					className={cn("flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200", {
						"text-gray-500": !isOpen,
						"text-gray-900": isOpen
					})}
					aria-expanded={isOpen}
					onClick={handleToggle}
					>
					<span>{title}</span>
					<svg
						className={cn("w-6 h-6 shrink-0", { "rotate-180": isOpen })}
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"/>
					</svg>
				</button>
			</h2>
			<div
				id="accordion-flush-body-1"
				className={cn({ "hidden": !isOpen })}
				aria-labelledby="accordion-flush-heading-1"
				>
				<div className="py-5 border-b border-gray-200">
					<p className="text-gray-500">
						{content}
					</p>
				</div>
			</div>
		</div>
	);
};

export default AccordionElement;
