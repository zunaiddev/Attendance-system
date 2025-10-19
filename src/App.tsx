import {RouterProvider} from "react-router-dom";
import router from "./routes/AppRoutes.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
    const client: QueryClient = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    );
}

export default App
