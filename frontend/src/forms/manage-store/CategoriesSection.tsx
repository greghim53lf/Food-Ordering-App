import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { categoriesList } from "@/config/StoreOptionsConfig";
import { useFormContext } from "react-hook-form";
import CategorCheckbox from "./CategoryCheckbox";

export default function CategoriesSection() {
  const { control } = useFormContext();

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Categories</h2>
        <FormDescription>Select categories your store offers</FormDescription>
      </div>
      <FormField
        control={control}
        name="categories"
        render={({ field }) => {
          return (
            <FormItem>
              <div className="grid md:grid-cols-5 gap-1">
                {categoriesList.map((categoryItem) => {
                  return (
                    <CategorCheckbox
                      key={categoryItem.id}
                      category={categoryItem.name}
                      field={field}
                    />
                  );
                })}
              </div>
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </div>
  );
}
