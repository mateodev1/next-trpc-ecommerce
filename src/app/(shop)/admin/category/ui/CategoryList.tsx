'use client'
import { api } from "~/trpc/react";
import useCategory from "../../../../../hooks/useCreateCategory";

export const CategoryList = () => {
  const getAll = api.category.getAll.useQuery();
  return (
    <div>
      {getAll.data?
         getAll.data.map(({ id, title }) => <div key={id}>{title}</div>):<></>}
    </div>
  );
};
