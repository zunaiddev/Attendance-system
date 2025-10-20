import {RouterProvider} from "react-router-dom";
import router from "./routes/AppRoutes.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import Toaster2 from "./components/Toaster2/Toaster2";

function App() {
    const client: QueryClient = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <RouterProvider router={router}/>
            <ReactQueryDevtools initialIsOpen={false}/>
            <Toaster2/>
        </QueryClientProvider>
    );
}

export default App
