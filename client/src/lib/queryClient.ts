import { QueryClient } from "@tanstack/react-query";

// In frontend-only app, we're using in-memory data without actual API calls
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
