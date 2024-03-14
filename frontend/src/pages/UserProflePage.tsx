import { useUpdateUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile/UserProfileForm";

export default function UserProflePage() {
  const { updateUser, isLoading } = useUpdateUser();

  return (
    <>
      <UserProfileForm onSave={updateUser} isLoading={isLoading} />
    </>
  );
}
