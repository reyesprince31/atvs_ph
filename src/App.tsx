import { Route, Routes } from "react-router-dom";
import Authlayout from "./_auth/Authlayout";
import SigninForm from "./_auth/forms/SigninForm";
import RootLayout from "./_root/RootLayout";
import { Home } from "lucide-react";
import "./globals.css";

export default function App() {
  return (
    <main>
      <Routes>
        <Route element={<Authlayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-in" element={<SigninForm />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}
