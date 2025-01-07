import Link from "../components/UI/Link";

export default function Trainer() {
  return (
    <div className="p-4 h-full w-full flex">
      <Link
        className="p-2 border w-fit h-fit rounded bg-black text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300"
        to="/trainer/trainee/edit"
      >
        Create
      </Link>
    </div>
  );
}
