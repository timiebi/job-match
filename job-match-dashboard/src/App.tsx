import { RouterProvider } from "react-router-dom";
import { router } from "./routes/main.tsx";

const App = () => <RouterProvider router={router} />;

export default App;