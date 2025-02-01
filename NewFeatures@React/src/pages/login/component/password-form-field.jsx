import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import propTypes from "prop-types";
import { CLASS_NAMES } from "../constant";

function PasswordFormField({ control, uniqueName, labelName, placeholder }) {
	const [show, setShow] = useState(false);

	return (
		<FormField
			control={control}
			name={uniqueName}
			render={({ field, fieldState: { error } }) => (
				<FormItem>
					<FormLabel className={CLASS_NAMES.formLabel}>
						{labelName}<span className={`${error ? 'text-red-600' : 'text-violet-600'}`}>*</span>
					</FormLabel>
					<FormControl>
						<div className="relative">
							<Input
								{...field}
								className={CLASS_NAMES.input}
								type={show ? "text" : "password"}
								placeholder={placeholder}
							/>
							<Button
								variant="ghost"
								className="absolute top-1/2 -translate-y-1/2 right-3"
								onClick={(e) => {
									e.preventDefault();  // Prevent any form events
									e.stopPropagation(); // Stop event bubbling
									setShow(!show)
								}}
							>
								{show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
							</Button>
						</div>
					</FormControl>
					<FormMessage className={CLASS_NAMES.formMessage} />
				</FormItem>
			)}
		/>
	)
}

PasswordFormField.propTypes = {
	control: propTypes.object,
	uniqueName: propTypes.string,
	labelName: propTypes.string,
	placeholder: propTypes.string
}

export default PasswordFormField