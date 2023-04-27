
import Header from "../components/Header";
import Banner from "../components/Banner";
import BestSellers from "../components/BestSellers";
import PostOnline from "../components/PostOnline";
import ForYouProducts from "../components/ForYouProducts";
import Footer from "../components/Footer";

export default function Main() {
 
  return (
  <>
    <div className="bg-zinc-400 p-2 fixed top-0 left-0 w-full z-10">
      <Header/>
    </div>
    <div className="flex max-w-6xl m-auto flex-col mt-14">
      <Banner/>
    </div>
    <div className="flex max-w-6xl m-auto flex-col mt-5">
      <BestSellers/>
    </div>
    <div className="bg-zinc-400 flex max-w-6xl m-auto flex-col mt-10">
      <PostOnline/>
    </div>
    <div className=" flex max-w-6xl m-auto flex-col mt-10">
      <ForYouProducts/>
    </div>
    <Footer />
  </>
  );
}
