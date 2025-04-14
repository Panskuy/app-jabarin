import NavUser from "@/components/userPage/NavUser";

export default function Layout({ children }) {
  return (
    <>
      <main className="flex flex-col lg:flex-row  mt-20 w-full max-w-[1800px] mx-auto">
        <div className="w-full lg:w-1/3 ">
          <NavUser />
        </div>
        <div className="w-full">{children}</div>
      </main>
    </>
  );
}
