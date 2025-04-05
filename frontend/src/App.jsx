import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./routes/About"
import Home from "./routes/Home"
import Authors from "./routes/Authors"
import Programs from "./routes/Program"
import Contact from "./routes/Contact"
import Admin from "./routes/Admin"
import Login from "./routes/Login"
import Footer from "./components/Footer"
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; 
import ProtectedRoute from "./components/ProtectedRoutes"
import AddSpeakers from "./components/AddSpeakers"
import AddPapers from "./components/AddPapers"
import AddRecentUpdates from "./components/AddRecentUpdates"
import AddAdmin from "./components/AddAdmin"
import AllPapers from "./components/AllPapers"
import AllSpeakers from "./components/AllSpeakers"
import AllUpdates from "./components/AllUpdates"
import AddPhotoGallery from "./components/AddPhotoGallery"
import { useState } from "react"
import AllPapersUser from "./components/AllPapersUser"
import AllUpdatesUser from "./components/AllUpdatesUser"
import AllImages from "./components/AllImages"
import Aboutnit from "./components/aboutcomp/Aboutnit"
import OrganisingCom from "./components/aboutcomp/OrganisingCom"
import Venue from "./components/aboutcomp/Venue"
import Abounithistory from "./components/aboutcomp/Abounithistory"
import Guidelines from "./components/authorcomp/Guidelines"
import Conferencetracks from "./components/authorcomp/Conferencetracks"
import Papersub from "./components/authorcomp/Papersub"
import Registrations from "./components/authorcomp/Registrations"
import Aboutconf from "./components/aboutcomp/Aboutconf"
import Accomodations from "./components/aboutcomp/Accomodations"
import {BecomeSponsor, BenefitsOfBecomeSponser } from "./routes/Sponsors"

function App() {
  const [fetch,setfetch]=useState(false)
  return (
    <>
      <Navbar fetch={fetch} setfetch={setfetch}/>
      < ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutnit />} />
        <Route path="/about/about-the-conference" element={<Aboutconf/>} />
        <Route path="/about/about-nit-patna" element={<Aboutnit />} />
        <Route path="/about/organising-committee" element={<OrganisingCom />} />
        <Route path="/about/venue-and-travels" element={<Venue />} />
        <Route path="/about/accomodations" element={<Accomodations />} />
        <Route path="/about/about-nit-patna(bihta-campus)" element={<Abounithistory/>} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/guidelines-to-authors" element={<Guidelines />} />
        <Route path="/authors/conference-tracks" element={<Conferencetracks />} />
        <Route path="/authors/paper-submissions" element={<Papersub/>} />
        <Route path="/authors/registrations" element={<Registrations/>} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/sponsors/become-a-sponsor" element={<BecomeSponsor />} />
        <Route path="/sponsors/benefits-of-sponsorship" element={<BenefitsOfBecomeSponser />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allpapers" element={<AllPapersUser />} />
        <Route path="/allupdates" element={<AllUpdatesUser />} />
        <Route path="/login" element={<Login setfetch={setfetch}/>} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Admin setfetch={setfetch}/>} />
          <Route path="/admin/add-speakers" element={<AddSpeakers />} />
          <Route path="/admin/add-papers" element={<AddPapers />} />
          <Route path="/admin/add-recent-updates" element={<AddRecentUpdates />} />
          <Route path="/admin/add-admin" element={<AddAdmin />} />
          <Route path="/admin/all-papers" element={<AllPapers />} />
          <Route path="/admin/all-speakers" element={<AllSpeakers />} />
          <Route path="/admin/all-updates" element={<AllUpdates />} />
          <Route path="/admin/photogalleryupload" element={<AddPhotoGallery />} />
        </Route>
        <Route path="/all-images" element={<AllImages />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
