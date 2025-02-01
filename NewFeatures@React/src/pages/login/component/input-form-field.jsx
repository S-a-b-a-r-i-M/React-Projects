import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import propTypes from "prop-types";
import { CLASS_NAMES } from "../constant";

function InputFormField({ control, uniqueName, labelName, placeholder, inputType="text" }) {
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
            <Input
              {...field}
              className={CLASS_NAMES.input}
              type={inputType}
              placeholder={placeholder}
            />
					</FormControl>
					<FormMessage className={CLASS_NAMES.formMessage} />
				</FormItem>
			)}
		/>
	)
}

InputFormField.propTypes = {
	control: propTypes.object,
	uniqueName: propTypes.string,
	labelName: propTypes.string,
	placeholder: propTypes.string,
	inputType: propTypes.string
}

export default InputFormField