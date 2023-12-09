import { Outlet, Navigate } from "react-router-dom";

const Authlayout = () => {
  const isAuth = false;
  return (
    <>
      {isAuth ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex py-10 flex-1 flex-col items-center justify-center">
            <Outlet />
          </section>
        </>
      )}
    </>
  );
};

export default Authlayout;
