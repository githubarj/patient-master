import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Routes/Layouts/Layout";
import PatientsTable from "./Routes/PatientsTable/PatientsTable";
import PatientsForm from "./Routes/PatientsForm/PatientsForm";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PatientsTable />,
      },
      {
        path: "patient-form",
        element: <PatientsForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
