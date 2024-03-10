import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-lime-700 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link
          to="/"
          className="text-xl text-white font-bold font-serif italic tracking-tight "
        >
          Greenie
        </Link>
        <span className="text-white text-sm font-bold tracking-tight flex gap-4">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
        </span>
      </div>
    </footer>
  );
}
