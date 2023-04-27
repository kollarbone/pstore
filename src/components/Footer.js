export default function Footer() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className=" flex flex-col p-10 w-full mt-32 m-auto justify-between items-center bg-zinc-800 text-white">
      <div className="flex flex-row m-auto flex-wrap justify-between items-center">
        <p className="m-3 hover:border-b cursor-pointer" onClick={goToTop}>
          About
        </p>
        <p className="m-3 hover:border-b cursor-pointer" onClick={goToTop}>
          Store locator
        </p>
        <p className="m-3 hover:border-b cursor-pointer" onClick={goToTop}>
          FAQs
        </p>
        <p className="m-3 hover:border-b cursor-pointer" onClick={goToTop}>
          News
        </p>
        <p className="m-3 hover:border-b cursor-pointer" onClick={goToTop}>
          Careers
        </p>
        <p className="m-3 hover:border-b cursor-pointer" onClick={goToTop}>
          Contact Us
        </p>
      </div>
      <p className="m-3">Design by Kollar_bone</p>
    </div>
  );
}
