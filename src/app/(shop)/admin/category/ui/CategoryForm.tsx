"use client";

import { z } from "zod";
import { Button, MyForm, MyInput } from "~/components";
import useCategory from "../../../../../hooks/useCreateCategory";

const categorySchema = z.object({
  title: z.string(),
});

export const CategoryForm = () => {
  const { create } = useCategory();

  const onError = (error: any) => console.log({ error });
  
  const onSubmit = (e: z.infer<typeof categorySchema>) =>  create.mutate(e);

  return (
    <MyForm
      onError={onError}
      onSubmit={onSubmit}
      zodSchema={categorySchema}
      className="flex w-full flex-col gap-2"
    >
      <MyInput ClassName="w-1/3" label="Titulo" fieldName={"title"} />
      <Button className="w-max" type="submit">
        Agregar
      </Button>
    </MyForm>
  );
};
