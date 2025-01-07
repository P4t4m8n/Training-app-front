import { useEffect } from "react";
import { redirect } from "react-router";

export default function Redirect() {
  useEffect(() => {
    redirect("");
  }, []);
  return <></>;
}
