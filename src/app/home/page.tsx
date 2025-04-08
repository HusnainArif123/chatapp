"use client";
import Footer from "../components/footer";
import HeaderItem from "../components/header";

const Home = () => {
  return (
    <div>
      <HeaderItem phoneNo={"042-3567474"} />
      <Footer
        address={"500 Flock Cow-Working Space Johar Town LHR PK"}
        phoneNo={"042-3939393"}
        email={"talktown@gmail.com"}
      />
    </div>
  );
};

export default Home;
