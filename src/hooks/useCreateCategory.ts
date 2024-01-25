'use client'

import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useCategory = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  const create = api.category.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
    },
  });

  const getAll = api.category.getAll.useQuery();
  return { create, getAll };
};

export default useCategory;
