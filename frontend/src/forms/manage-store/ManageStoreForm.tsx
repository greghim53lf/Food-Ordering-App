import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CategoriesSection from "./CategoriesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";

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
  categories: z.array(z.string()).nonempty({
    message: "Please select at least one item",
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "required"),
      price: z.coerce.number().min(1, "required"),
    })
  ),
  imageFile: z.instanceof(File, { message: "Image is required" }),
});

type StoreFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (storeFormData: StoreFormData) => void;
  isLoading: boolean;
};

export default function ManageStoreForm({ onSave, isLoading }: Props) {
  const form = useForm<StoreFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categories: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  const handleSubmit = () => {
    //
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 bg-gray-50 rounded-lg p-10"
      >
        <DetailsSection />
        <Separator />
        <CategoriesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  );
}
