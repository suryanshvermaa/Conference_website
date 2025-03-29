import PaperUpdates from "../components/Board";
import Header from "../components/Header";
import Slider from "../components/ImageSlider";
import EventTimeline from "../components/ImportantDates";
import PhotoGallery from "../components/PhotoGallery";
import RunningText from "../components/RunningText";
import SmallAbout from "../components/SmallAbout";

export default function Home() {
    return <h1 className="">
        <Header/>
        <Slider/>
        <RunningText/>
        <PaperUpdates/>
        <SmallAbout/>
        <PhotoGallery/>
        <EventTimeline/>
    </h1>;
  }
  