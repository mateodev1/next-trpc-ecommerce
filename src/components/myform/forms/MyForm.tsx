'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { FormProvider } from "react-hook-form";
import { ReactNode } from "react";
import { DevTool } from "@hookform/devtools";
// import { Spinner } from "../../spinner/Spinner";

interface Props<T> {
  zodSchema: z.Schema;
  onSubmit: (data: T, reset: any) => Promise<void> | void;
  onError: (data: FieldValues) => void;
  children: ReactNode;
  defaultValues?: DefaultValues<FieldValues>;
  className?:string
}

export const MyForm = <T,>({
  defaultValues,
  zodSchema,
  onSubmit,
  onError,
  children,
  className
}: Props<T>) => {
  type EntityType = z.infer<typeof zodSchema>;
  const methods = useForm<EntityType>({
    resolver: zodResolver(zodSchema),
    defaultValues,
  });

  if (methods.formState.isLoading)
    return (
      <div className="flex h-20 items-center justify-center">
        {/* <Spinner /> */}
      </div>
    );
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(
          async (data) => await onSubmit(data, methods.reset),
          (errors) => onError(errors),
        )}
        className={className}
      >
        {children}
      </form>
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

