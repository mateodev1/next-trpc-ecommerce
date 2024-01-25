import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "~/components";
import { MyInputProps } from "~/schemas/UiSchemas";

export function MyInput<T>({
  fieldName,
  label,
  showLabel = true,
  valueAsNumber = false,
  valueAsDate = false,
  type = "text",
  placeholder,
ClassName,
  searchFn = false,
  triggerUpdate = false,
  showIf,
}: MyInputProps<T>) {
  const {
    getValues,
    setValue,
    formState: { errors },
    register,
    watch,
  } = useFormContext();

  const handleSearch = () => {
    const fieldValue = getValues(fieldName as string);
    if (typeof searchFn === "function") {
      searchFn(fieldValue);
    }
  };

  const registerOptions = valueAsNumber ? { valueAsNumber } : { valueAsDate };
  const FinalInput = (
    <Input
      // size={size}
      type={type}
      placeholder={placeholder || label}
      {...register(fieldName as string, registerOptions)}
      onChange={(e: any) => {
        register(fieldName as string, registerOptions).onChange(e);
        triggerUpdate && setValue("trigger_update", Math.random());
      }}
    />
  );

  if (type === "hidden") return FinalInput;

  let show = typeof showIf === "boolean" ? showIf : true;
  if (showIf && Array.isArray(showIf)) {
    show = watch(showIf[0] as string) === showIf[1];
  }

  if (!show) return <></>;
  // console.log({ errors });6

  return (
    <FormControl  >
      <FormItem className={ClassName}>
        {!!showLabel && <FormLabel>{label}</FormLabel>}
        <FormControl>{FinalInput}</FormControl>
        {/* <FormDescription>This is your public display name.</FormDescription> */}
        <FormMessage />
      </FormItem>
    </FormControl>
  );
}

// <FormControl
//       mb={mb}
//       mt={mt}
//       isInvalid={!!errors[fieldName as string]}
//       flex={flex}
//     >
//       {!!showLabel && <FormLabel mb={1}>{label}</FormLabel>}
//       <Flex gap={2}>
//         {searchFn && (
//           <IconButton
//             aria-label="Search database"
//             icon={<SearchIcon />}
//             onClick={handleSearch}
//           />
//         )}
//         {FinalInput}
//       </Flex>
//       <FormErrorMessage mt={1}>
//         {errors[fieldName]?.message as ReactNode}
//       </FormErrorMessage>
//     </FormControl>
