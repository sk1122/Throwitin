import Second from "../components/home/second";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="font-poppins flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <Second />
    </div>
  );
}
