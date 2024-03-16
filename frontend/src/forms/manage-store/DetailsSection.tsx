import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export default function DetailsSection() {
  const { control } = useFormContext();

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Details</h2>
        <FormDescription>Enter the details about your store</FormDescription>
      </div>

      <FormField
        control={control}
        name="name"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />

      <div className="flex gap-4">
        <FormField
          control={control}
          name="city"
          render={({ field }) => {
            return (
              <FormItem className="flex-1">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={control}
          name="country"
          render={({ field }) => {
            return (
              <FormItem className="flex-1">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      </div>

      <FormField
        control={control}
        name="deliveryPrice"
        render={({ field }) => {
          return (
            <FormItem className="max-w-[25%]">
              <FormLabel>Delivery Price (₦)</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" placeholder="3000" />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />

      <FormField
        control={control}
        name="estimatedDeliveryTime"
        render={({ field }) => {
          return (
            <FormItem className="max-w-[25%]">
              <FormLabel>Estimated Delivery Time (minutes)</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" placeholder="30" />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </div>
  );
}
