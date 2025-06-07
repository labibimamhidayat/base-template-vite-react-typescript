import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

type ReactQueryProviderType = PropsWithChildren;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

export { useQuery };

const ReactQueryProvider = ({ children }: ReactQueryProviderType) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
