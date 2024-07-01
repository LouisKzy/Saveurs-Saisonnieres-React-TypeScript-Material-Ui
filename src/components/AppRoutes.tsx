
// import { useSelector } from "react-redux";
import { Paper  } from "@mui/material";

import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
// import ResetPasswordPage from "../pages/ResetPasswordPage";
// import EditPasswordPage from "../pages/EditPasswordPage";
// import ShowCart from "../pages/ShowCart";
// import ShowProduct from "./ShowProduct";
// import AdminPage from "../pages/AdminPage";
// import AddProductForm from "./AddProductForm";
// import EditProductForm from "./EditProductForm";
// import LegumesPage from "../pages/LegumesPage";
// import FruitsPage from "../pages/FruitsPage";
// import IndexProducts from "./IndexProducts";
// import SuccessPayment from "../pages/SuccessPayment";
// import NotFoundPage from "../pages/NotFoundPage";
import NavBar from "./NavBar";
import Footer from "./Footer";
// import UserPage from "../pages/UserPage";
import CguCgv from "../pages/CguCgv";
import LegalNotice from "../pages/LegalNotice";
import PrivacyPolicy from "../pages/PrivacyPolicy";
// import PanierPage from "../pages/PaniersPage";

// Typage du state
// interface RootState {
//   auth: {
//     isAdmin: boolean;
//   };
// }

function AppRoutes() {


  // const isAdmin = useSelector((state: RootState) => state.auth.isAdmin);

  // console.log(isAdmin);




  return (
    <Paper
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* 
          <Route path="/password/reset" element={<ResetPasswordPage />} />
          <Route path="/users/password/edit" element={<EditPasswordPage />} />
          <Route path="/cart" element={<ShowCart />} />
          <Route path="/product/:id" element={<ShowProduct />} />
          <Route path="/products" element={<IndexProducts />} /> */}
          {/* {isAdmin && (
            <>
              <Route path="/admin/page" element={<AdminPage />} />
              <Route path="/admin/products/add" element={<AddProductForm />} />
              <Route
                path="/admin/products/edit/:productId"
                element={<EditProductForm />}
              />
            </>
          )} */}
          {/* <Route path="/legumes" element={<LegumesPage />} />
          <Route path="/fruits" element={<FruitsPage />} />
          <Route path="/paniers" element={<PanierPage />} /> */}
          {/* <Route path="/payment/success" element={<SuccessPayment />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} />
          <Route path="/profil" element={<UserPage />} /> */}
          <Route path="/cgu-cgv" element={<CguCgv />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

      <Footer />
    </Paper>
  );
}

export default AppRoutes;
