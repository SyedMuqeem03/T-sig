import {createBrowserRouter} from 'react-router-dom'
import ErrorPage from '../components/ErrorPage'
import App from '../App'
import BillQR from '../components/BillQR';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "bill/:value",
        element: <BillQR />,
      },
    ],
  },
]);
export default router;
