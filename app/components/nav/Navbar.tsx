import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });
const Navbar = () => {
  return (
    // Spiced Apple #783937
    <div className="sticky top-0 w-full bg-[#F1AC88] z-30 shadow-sm  ">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link
              className={`${redressed.className} text-2xl font-bold `}
              href="/"
            >
              Electroni-X
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center  gap-8 md:gap-12">
              <div>CartCount</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
