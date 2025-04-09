"use client";
import { toast } from "react-toastify";
import Footer from "../components/footer";
import HeaderItem from "../components/header";
import axios from "axios";
import AddFriendModal from "../components/AddFriendModal";
import { useEffect, useState } from "react";

const Home = () => {
  const [isModal, setIsModal] = useState(false);
  const [friendData, setFriendData] = useState<any>();

  const handleGetFriends = async () => {
    try {
      const response = await axios.get("/api/userFriends");
      console.log(response, "api get resp");

      setFriendData(response.data.friends);

      if (response.data.friends.length === 0) {
        toast.error("No Friends Found");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Something went wrong");
    }
  };
  const handleAddFriend = async ({
    name,
    phoneNo,
  }: {
    name: string;
    phoneNo: number;
  }) => {
    try {
      if (!name || !phoneNo) {
        return toast.error("All fields are required");
      }
      const response = await axios.post("/api/addUserFriends", {
        name,
        phoneNo,
      });
      console.log(response.data, "api post resp");
      toast.success("Friend Added Successfully");
      await handleGetFriends();
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Something went wrong");
    }
    setIsModal(false);
  };

  useEffect(() => {
    handleGetFriends();
    console.log(friendData, "friendData in useEffect");
  }, []);

  return (
    <div>
      <HeaderItem
        phoneNo={"042-3567474"}
        handleAddFriend={() => setIsModal(true)}
        fiendsData={friendData}
      />
      <Footer
        address={"500 Flock Cow-Working Space Johar Town LHR PK"}
        phoneNo={"042-3939393"}
        email={"talktown@gmail.com"}
      />
      <AddFriendModal
        isOpen={isModal}
        onClose={() => setIsModal(false)}
        onAdd={handleAddFriend}
      />
    </div>
  );
};

export default Home;
