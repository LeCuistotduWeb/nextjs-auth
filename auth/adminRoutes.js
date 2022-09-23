import React, { useEffect } from "react";
import useAuth from "./context";
import { useRouter } from "next/router";

export function AdminRoutes(Component) {
  return () => {
    const { isAuthenticated, loading, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (isAuthenticated && !loading && user.role !== "admin") {
        router.push("/");
      }
    }, [isAuthenticated, loading, user]);

    return <Component {...arguments} />;
  };
}