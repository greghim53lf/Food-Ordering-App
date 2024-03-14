import { useGetUser, useUpdateUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile/UserProfileForm";

export default function UserProflePage() {
  const { currentUser, isLoading: isLoadingGet } = useGetUser();
  const { updateUser, isLoading: isLoadingUpdate } = useUpdateUser();

  if (isLoadingGet) {
    return <span>Loading...</span>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  return (
    <UserProfileForm
      onSave={updateUser}
      isLoading={isLoadingUpdate}
      currentUser={currentUser}
    />
  );
}
