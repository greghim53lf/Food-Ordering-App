import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  city: z.string({
    required_error: "City is required",
  }),
  deliveryPrice: z.coerce.number({
    required_error: "Delivery Price is required",
    invalid_type_error: "Must be a valid number",
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: "Estimated Delivery Time is required",
    invalid_type_error: "Must be a valid number",
  }),
  cuisines: z.array(z.string()).nonempty({
    message: "Please select at least one item",
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "Menu item name is required"),
      price: z.coerce.number().min(1, "Menu item price is required"),
    })
  ),
  imageFile: z.instanceof(File, { message: "Image is required" }),
});

type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: RestaurantFormData) => void;
  isLoading: boolean;
};

export default function ManageRestaurantForm({ onSave, isLoading }: Props) {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-8 bg-gray-50 rounded-lg p-10"
      ></form>
    </Form>
  );
}
