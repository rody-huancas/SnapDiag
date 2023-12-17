import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full h-20 flex justify-center items-center">
      <div className="w-[1200px] mx-auto px-10">
        <Link className="font-extrabold text-4xl text-gray-600">
          <img src="/logo.png" alt="Logo SnapDiag" className="w-60 h-[80px]" />
        </Link>
      </div>
    </header>
  );
};
