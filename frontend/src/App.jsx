import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import Authors from "./routes/Authors"
import { Tours } from "./routes/Program"
import Contact from "./routes/Contact"
import Admin from "./routes/Admin"
import Login from "./routes/Login"
import Footer from "./components/Footer"
import { ToastContainer } from "react-toastify"; // Import Toastify
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
import Papersub from "./components/authorcomp/Papersub"
import Registrations from "./components/authorcomp/Registrations"
import Aboutconf from "./components/aboutcomp/Aboutconf"
import Accomodations from "./components/aboutcomp/Accomodations"
import {BenefitsOfBecomeSponser } from "./routes/Sponsors"
import AllMessages from "./components/GetAllContact"
import SponsorshipPage from "./components/aboutcomp/SponsorshipPage"
import AllSpeakerprog from "./components/programscomp/AllSpeakersprog"
import WorkShop from "./components/programscomp/WorkShop"
import BestStuden from "./components/authorcomp/BestStuden"
import FinancialSupp from "./components/authorcomp/FinancialSupp"
import Culturalevents from "./components/programscomp/Culturalevents"
import Allphotosgallery from "./components/Allphotosgallery"
import AddOrganisingCommitteeMember from "./components/OrganisingCommittee/AddOrganisingCommitteeMember"
import AllOrganisingCommitteeMembers from "./components/OrganisingCommittee/AllOrganisingCommitteeMembers"
import CallforPapers from "./components/authorcomp/CallforPapers"
import Track from "./components/authorcomp/Track"
import UpdateMember from "./components/OrganisingCommittee/UpdateMember"
import UpdateSpeaker from "./components/UpdateSpeaker"
import CMTAcknowledgement from "./components/authorcomp/CMTAcknowledgement"
import TechnicalProgrammeCommittee from "./components/aboutcomp/TechnicalProgrammeCommittee"
import InternationalAdvisoryCommittee from "./components/aboutcomp/InternationalAdvisoryCommittee"
import InternationalMember from "./components/InternationalCommittee/AddMember"
import AllInternationalAdvisoryCommitteeMembers from "./components/InternationalCommittee/AllMembers"
import UpdateInternationalMember from "./components/InternationalCommittee/UpdateMember"
import AddTechnicalCommitteeMember from "./components/TechnicalCommittee/AddMember"
import UpdateTechnicalMember from "./components/TechnicalCommittee/UpdateMember"
import AllTechnicalCommitteeMembers from "./components/TechnicalCommittee/AllMembers"

function App() {
  const [fetch,setfetch]=useState(false)
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar fetch={fetch} setfetch={setfetch}/>
      <main className="flex-grow mt-6">
      < ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* About routes */}
        <Route path="/about" element={<Aboutnit />} />
        <Route path="/about/about-the-conference" element={<Aboutconf/>} />
        <Route path="/about/about-nit-patna" element={<Aboutnit />} />
        <Route path="/about/organising-committee" element={<OrganisingCom />} />
        <Route path="/about/venue-and-travels" element={<Venue />} />
        <Route path="/about/accomodations" element={<Accomodations />} />
        <Route path="/about/about-nit-patna-(bihta-campus)" element={<Abounithistory/>} />
        <Route path="/about/photogallery" element={<AllImages />} />
        <Route path="/about/technical-programme-committee" element={<TechnicalProgrammeCommittee />} />
        <Route path="/about/international-advisory-committee" element={<InternationalAdvisoryCommittee />} />

        {/* Authors routes */}
        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/call-for-papers" element={<CallforPapers />} />
        <Route path="/authors/call-for-papers/:track" element={<Track />} />
        <Route path="/authors/guidelines-to-authors" element={<Guidelines />} />
        <Route path="/authors/paper-submissions" elemetechnicalnt={<Papersub/>} />
        <Route path="/authors/registrations" element={<Registrations/>} />
        <Route path="/authors/best-student-paper-award" element={<BestStuden/>} />
        <Route path="/authors/financial-support" element={<FinancialSupp/>} />
        <Route path="/authors/cmt-acknowledgement" element={<CMTAcknowledgement/>} />

        {/* Program routes */}
        <Route path="/programs/speakers" element={<AllSpeakerprog/>} />
        <Route path="/programs/tours" element={<Tours />} />
        <Route path="/programs/workshops" element={<WorkShop />} />
        <Route path="/programs/cultural-event" element={<Culturalevents />} />

        {/* Sponser routes */}
        <Route path="/sponsors" element={<SponsorshipPage/>}></Route>
        <Route path="/sponsors/become-a-sponsor" element={<SponsorshipPage />} />
        <Route path="/sponsors/benefits-of-sponsorship" element={<BenefitsOfBecomeSponser />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allpapers" element={<AllPapersUser />} />
        <Route path="/allupdates" element={<AllUpdatesUser />} />
        <Route path="/login" element={<Login setfetch={setfetch}/>} />
        <Route element={<ProtectedRoute />}>
        {/* Admin routes */}
          <Route path="/admin" element={<Admin setfetch={setfetch}/>} />
          <Route path="/admin/add-speakers" element={<AddSpeakers />} />
          <Route path="/admin/add-papers" element={<AddPapers />} />
          <Route path="/admin/add-recent-updates" element={<AddRecentUpdates />} />
          <Route path="/admin/add-admin" element={<AddAdmin />} />
          <Route path="/admin/all-papers" element={<AllPapers />} />
          <Route path="/admin/all-speakers" element={<AllSpeakers />} />
          <Route path="/admin/all-speakers/update/:id" element={<UpdateSpeaker />} />
          <Route path="/admin/all-updates" element={<AllUpdates />} />
          <Route path="/admin/photogalleryupload" element={<AddPhotoGallery />} />
          <Route path="/admin/contact-messages" element={<AllMessages />} />
          <Route path="/admin/deletephoto" element={<Allphotosgallery />} />
          <Route path="/admin/add-organising-member" element={<AddOrganisingCommitteeMember />} />
          <Route path="/admin/all-organising-members" element={<AllOrganisingCommitteeMembers />} />
          <Route path="/admin/all-organising-members/:id" element={<UpdateMember />} />
          <Route path="/admin/add-international-member" element={<InternationalMember />} />
          <Route path="/admin/all-international-members" element={<AllInternationalAdvisoryCommitteeMembers />} />
          <Route path="/admin/all-international-members/:id" element={<UpdateInternationalMember />} />
          <Route path="/admin/add-technical-member" element={<AddTechnicalCommitteeMember />} />
          <Route path="/admin/all-technical-members" element={<AllTechnicalCommitteeMembers />} />
          <Route path="/admin/all-technical-members/:id" element={<UpdateTechnicalMember />} />
        </Route>
      </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
