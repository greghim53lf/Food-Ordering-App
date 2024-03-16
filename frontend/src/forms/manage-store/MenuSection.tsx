import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";
import { Button } from "@/components/ui/button";

export default function MenuSection() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Menu</h2>
        <FormDescription>Create a menu</FormDescription>
      </div>
      <FormField
        control={control}
        name="menuItems"
        render={() => {
          return (
            <FormItem className="flex flex-col gap-2">
              {fields.map(({ id }, index) => {
                return (
                  <MenuItemInput
                    key={id}
                    index={index}
                    remove={() => remove(index)}
                  />
                );
              })}
            </FormItem>
          );
        }}
      />
      <Button
        className="bg-lime-600 hover:bg-lime-700"
        type="button"
        onClick={() => append({ name: "", price: 0 })}
      >
        Add Menu
      </Button>
    </div>
  );
}
