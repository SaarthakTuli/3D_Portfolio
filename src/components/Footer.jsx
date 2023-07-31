import { styles } from "../styles.js";

const Navbar = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full flex items-center py-5 bg-primary`}
    >
      <div
        className="w-full flex justify-center items-center max-w-7xl mx-auto flex-col"
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="w-[2px] h-[20px] bg-secondary" />
        <p className="text-white text-[18px] font-bold cursor-pointer flex">
          Scroll to Top
        </p>
      </div>
    </footer>
  );
};

export default Navbar;
