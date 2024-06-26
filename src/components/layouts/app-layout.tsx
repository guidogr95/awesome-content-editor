"use client";
import { AuthContext } from "@/context";
import { PropsWithChildren } from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import RouteGuard from "../auth/route-guard/route-guard";

const queryClient = new QueryClient();

const AppLayout = ({ children }: PropsWithChildren<{}>) => {
	return (
		<QueryClientProvider client={queryClient}>
      <AuthContext>
        <body>
          <RouteGuard>
            {children}
          </RouteGuard>
        </body>
      </AuthContext>
    </QueryClientProvider>
	);
};

export default AppLayout;