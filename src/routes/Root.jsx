import { Outlet } from "react-router-dom"
import MainSection from "../components/MainSection";
// import Projects  from '../components/Projects.jsx'

const Root = () => {
  return (
    <>
      <main>
		{/* <Projects/> */}
        <Outlet />
      </main>
    </>
  );
}

export default Root
