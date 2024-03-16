import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  remove: () => void;
};

export default function MenuItemInput({ index, remove }: Props) {
  const { control } = useFormContext();

  return (
    <div className="flex flex-row items-end gap-4">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel className="flex justify-between items-center gap-1">
                <span>Name</span>
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white"
                  placeholder="Veggie Salad"
                />
              </FormControl>
            </FormItem>
          );
        }}
      />
      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel className="flex justify-between items-center gap-1">
                <span>Price (₦)</span>
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" placeholder="20000" />
              </FormControl>
            </FormItem>
          );
        }}
      />

      <Button type="button" onClick={remove} className="bg-red-500 max-h-fit">
        Remove
      </Button>
    </div>
  );
}
