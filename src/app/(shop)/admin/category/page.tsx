import { Title } from "~/components";
import { CategoryForm } from "./ui/CategoryForm";
import { CategoryList } from "./ui/CategoryList";

export default function () {
  return (
    <>
      <Title title="Agregar categoria" />
      <CategoryForm/>
      <CategoryList/>
    </>
  );
}
