import { Route, Routes, useLocation } from "react-router-dom"
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
import AdminRouteLayout from "./components/AdminRouteLayout"
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
import TechnicalSession from "./components/programscomp/TechnicalSession"
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
import IndustryProgrammeCommittee from "./components/aboutcomp/IndustryProgrammeCommittee"
import InternationalAdvisoryCommittee from "./components/aboutcomp/InternationalAdvisoryCommittee"
import InternationalMember from "./components/InternationalCommittee/AddMember"
import AllInternationalAdvisoryCommitteeMembers from "./components/InternationalCommittee/AllMembers"
import UpdateInternationalMember from "./components/InternationalCommittee/UpdateMember"
import AddTechnicalCommitteeMember from "./components/TechnicalCommittee/AddMember"
import UpdateTechnicalMember from "./components/TechnicalCommittee/UpdateMember"
import AllTechnicalCommitteeMembers from "./components/TechnicalCommittee/AllMembers"
import AddIndustryProgrammeCommitteeMember from "./components/IndustryProgrammeCommittee/AddMember"
import UpdateIndustryProgrammeMember from "./components/IndustryProgrammeCommittee/UpdateMember"
import AllIndustryProgrammeCommitteeMembers from "./components/IndustryProgrammeCommittee/AllMembers"
import Publication from "./components/authorcomp/Publication"

function App() {
  const [fetch,setfetch]=useState(false)
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isLoginRoute = location.pathname === "/login";
  const showPublicChrome = !(isAdminRoute || isLoginRoute);
  return (
    <div className="flex flex-col min-h-screen">
      {showPublicChrome ? <Navbar fetch={fetch} setfetch={setfetch}/> : null}
      <main className={showPublicChrome ? "flex-grow mt-6" : "flex-grow"}>
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
        <Route path="/about/industry-programme-committee" element={<IndustryProgrammeCommittee />} />
        <Route path="/about/international-advisory-committee" element={<InternationalAdvisoryCommittee />} />

        {/* Authors routes */}
        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/call-for-papers" element={<CallforPapers />} />
        <Route path="/authors/paper-publication" element={<Publication />} />
        <Route path="/authors/call-for-papers/:track" element={<Track />} />
        <Route path="/authors/guidelines-to-authors" element={<Guidelines />} />
        <Route path="/authors/paper-submissions" element={<Papersub/>} />
        <Route path="/authors/registrations" element={<Registrations/>} />
        <Route path="/authors/best-student-paper-award" element={<BestStuden/>} />
        <Route path="/authors/financial-support" element={<FinancialSupp/>} />
        <Route path="/authors/cmt-acknowledgement" element={<CMTAcknowledgement/>} />

        {/* Program routes */}
        <Route path="/programs/speakers" element={<AllSpeakerprog/>} />
        <Route path="/programs/tours" element={<Tours />} />
        <Route path="/programs/technical-session/:ts" element={<TechnicalSession />} />
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
          <Route path="/admin" element={<AdminRouteLayout setfetch={setfetch} />}>
            <Route index element={<Admin />} />
            <Route path="add-speakers" element={<AddSpeakers />} />
            <Route path="add-papers" element={<AddPapers />} />
            <Route path="add-recent-updates" element={<AddRecentUpdates />} />
            <Route path="add-admin" element={<AddAdmin />} />
            <Route path="all-papers" element={<AllPapers />} />
            <Route path="all-speakers" element={<AllSpeakers />} />
            <Route path="all-speakers/update/:id" element={<UpdateSpeaker />} />
            <Route path="all-updates" element={<AllUpdates />} />
            <Route path="photogalleryupload" element={<AddPhotoGallery />} />
            <Route path="contact-messages" element={<AllMessages />} />
            <Route path="deletephoto" element={<Allphotosgallery />} />
            <Route path="add-organising-member" element={<AddOrganisingCommitteeMember />} />
            <Route path="all-organising-members" element={<AllOrganisingCommitteeMembers />} />
            <Route path="all-organising-members/:id" element={<UpdateMember />} />
            <Route path="add-international-member" element={<InternationalMember />} />
            <Route path="all-international-members" element={<AllInternationalAdvisoryCommitteeMembers />} />
            <Route path="all-international-members/:id" element={<UpdateInternationalMember />} />
            <Route path="add-technical-member" element={<AddTechnicalCommitteeMember />} />
            <Route path="all-technical-members" element={<AllTechnicalCommitteeMembers />} />
            <Route path="all-technical-members/:id" element={<UpdateTechnicalMember />} />
            <Route path="add-industry-programme-member" element={<AddIndustryProgrammeCommitteeMember />} />
            <Route path="all-industry-programme-members" element={<AllIndustryProgrammeCommitteeMembers />} />
            <Route path="all-industry-programme-members/:id" element={<UpdateIndustryProgrammeMember />} />
          </Route>
        </Route>
      </Routes>
      </main>
      {showPublicChrome ? <Footer/> : null}
    </div>
  )
}

export default App
