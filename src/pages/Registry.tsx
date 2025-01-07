import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { apiService } from "../services/api.service.";
import { storeSessionData } from "../utils/secureStore.util";

export default function Registry() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) return;

    const register = async () => {
      try {
        const { uniqueId } = await apiService.get<{ uniqueId: string }>(
          `auth/registry?token=${token}`
        );
        storeSessionData("uniqueId", uniqueId);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    register();
  }, []);

  return <div>registry</div>;
}
