//components
import AccountProfile from "@/components/forms/AccountProfile";

//Clerk
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

const page = async () => {
  //Clerk provide us with current user option, so we can collect from it the data as the current user logged in
  const user = await currentUser();

  const userInfo = {} as any;

  const userData = {
    id: user?.id || "",
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user?.username,
    name: userInfo ? userInfo?.name : user?.firstName ?? "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : user?.imageUrl,
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <div className="flex flex-row items-center justify-between">
        <h1 className="head-text">onBoarding</h1>
        <Link
          href="/"
          className="font-semibold underline text-white cursor-pointer"
        >
          Back Home
        </Link>
      </div>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now, to use Threads.
      </p>

      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
};

export default page;
