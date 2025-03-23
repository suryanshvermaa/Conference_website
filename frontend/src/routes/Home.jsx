import PaperUpdates from "../components/Board";
import Header from "../components/Header";
import Slider from "../components/ImageSlider";
import EventTimeline from "../components/ImportantDates";
import RunningText from "../components/RunningText";
import SmallAbout from "../components/SmallAbout";

export default function Home() {
    return <h1 className="">
        <Header/>
        <Slider/>
        <RunningText/>
        <PaperUpdates/>
        <SmallAbout/>
        <EventTimeline/>
    </h1>;
  }
  