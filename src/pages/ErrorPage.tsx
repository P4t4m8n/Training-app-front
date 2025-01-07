import { useSearchParams } from "react-router";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  return <div>error</div>;
}
