//Components
import PostThread from "@/components/forms/PostThread";

//Actions
import { fetchUser } from "@/lib/actions/user.actions";

//Clerk function
import { currentUser } from "@clerk/nextjs";

//Navigation
import { redirect } from "next/navigation";

const CreateThread = async () => {
  //Clerk provide us with current user option, so we can collect from it the data as the current user logged in
  const user = await currentUser();
  if (!user) return null;

  // fetch organization list created by user
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <>
      <h1 className="head-text">Create Thread</h1>

      <PostThread userId={userInfo._id} />
    </>
  );
};

export default CreateThread;
