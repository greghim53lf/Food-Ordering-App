import { useGetUser, useUpdateUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile/UserProfileForm";

export default function UserProflePage() {
  const { currentUser, isLoading: isLoadingGet } = useGetUser();
  const { updateUser, isLoading: isLoadingUpdate } = useUpdateUser();

  if (isLoadingGet) {
    return <span>Loading...</span>;
  }
  return (
    <>
      <UserProfileForm onSave={updateUser} isLoading={isLoadingUpdate} />
    </>
  );
}
