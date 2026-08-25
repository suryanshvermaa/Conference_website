import React, { useState } from 'react'

// ─── Data extracted from Best_Paper_Awards.docx ────────────────────────────

const travelGrantWinner = {
  track: "Track 1: Intelligent Renewable Energy Systems, Smart-Grids & Power Electronics",
  session: "Session 2: Smart Grids, Decentralized Control & Advanced OPF",
  paperId: "671",
  title: "Voltage Stability Analysis and Improvement in Smart Grids Using PMU Technology: A Comprehensive Survey",
  presenter: "Shubham Nagle",
  affiliation: "Shri Govindram Seksaria Institute of Technology and Science, Indore, India",
  image: "/best_paper_award/image5.JPG",
}

const trackAwards = [
  {
    trackNum: 1,
    trackTitle: "Track 1: Intelligent Renewable Energy Systems, Smart-Grids & Power Electronics",
    sessions: [
      {
        session: "Session 1: Intelligent Control & Optimisation in Renewable Energy Systems",
        paperId: "704",
        title: "Dynamic Carbon Aware Optimal Power Flow using SOO Algorithm",
        presenter: "Madhuri Kanjilal",
        affiliation: "Camellia School of Engineering & Technology, Barasat, West Bengal, India",
        image: "/best_paper_award/image4.jpg",
      },
      {
        session: "Session 3: Power Electronics & Grid-Connected Converter Technologies",
        paperId: "761",
        title: "Performance Analysis of PWM Techniques for a Solar PV-Fed 9-L Cascaded H-Bridge Inverter",
        presenter: "Md. Imran Rasid",
        affiliation: "Rajiv Gandhi Institute of Petroleum Technology",
        image: "/best_paper_award/image6.JPG",
      },
      {
        session: "Session 4: Renewable Energy Systems, Storage & Emerging Technologies",
        paperId: "67",
        title: "Development of Battery Management System for Hybrid Electric Vehicles using Battery and PV Source",
        presenter: "Dhinesh K R",
        affiliation: "Kumaraguru College of Technology, Coimbatore",
        image: "/best_paper_award/image7.jpeg",
      },
      {
        session: "Session 5: Power System Stability, Protection & Infrastructure Resilience",
        paperId: "731",
        title: "A Case Study on Lightning Overvoltage and Protection Measures of 400kV Gas Insulated Substation",
        presenter: "K. MARIMUTHU",
        affiliation: "CENTRAL POWER RESEARCH INSTITUTE, BENGALURU",
        image: "/best_paper_award/image8.jpg",
      },
    ],
  },
  {
    trackNum: 2,
    trackTitle: "Track 2: Smart Electric Mobility, Charging Infrastructure & Intelligent Transportation Systems",
    sessions: [
      {
        session: "Session 1: Smart & Solar-Integrated EV Charging Infrastructure",
        paperId: "370",
        title: "Flux-Guided Bidirectional Wireless Charging for V2G-Enabled EVS: A Graded-Permeability Ferrite Array Approach with Dynamic DAB Control",
        presenter: "Leo Raju",
        affiliation: "Sri Sivasubramaniya Nadar College of Engineering, Chennai",
        image: "/best_paper_award/image6.JPG",
      },
      {
        session: "Session 3: Advanced EV Motor Drives & Powertrain Control",
        paperId: "767",
        title: "Comparison of Three-Phase Distributed and Slot-by-Slot Winding of SLIM for Electromagnetic Launcher",
        presenter: "Prabhakar Kumar",
        affiliation: "Indian Institute of Technology BHU Varanasi",
        image: "/best_paper_award/image7.jpeg",
      },
      {
        session: "Session 5: EV Battery Modeling, Thermal Management & Health Monitoring",
        paperId: "850",
        title: "Cross-Cell State and Health Estimation for Electric Vehicles Using Machine Learning with SHAP Analysis",
        presenter: "Zainab Amin",
        affiliation: "National Institute of Technology Patna",
        image: "/best_paper_award/image8.jpg",
      },
      {
        session: "Session 6: Autonomous Vehicles, Intelligent Control & Safety Systems",
        paperId: "610",
        title: "QFT-Based Design of 2-DOF PID for Unstable Processes with Time Delay",
        presenter: "Akanksha Dwivedi",
        affiliation: "Indian Institute of Technology Patna",
        image: "/best_paper_award/image9.jpeg",
      },
      {
        session: "Session 7: Robotics, Actuation & Intelligent Mobility Platforms",
        paperId: "782",
        title: "Risk-Aware Linear Quadratic Regulator for a Two-Link Robotic Manipulator",
        presenter: "Anupam Raj Bhaskar",
        affiliation: "National Institute of Technology Patna",
        image: "/best_paper_award/image10.png",
      },
    ],
  },
  {
    trackNum: 3,
    trackTitle: "Track 3: Advanced Semiconductor Devices, Nanoelectronics & Energy Materials",
    sessions: [
      {
        session: "Session 1: Perovskite & Emerging Photovoltaic Device Engineering",
        paperId: "749",
        title: "Performance Investigation of High-Efficiency Perovskite Solar Cell with Eco-Viable CsGeI₃ Absorber",
        presenter: "Pritam Kumar",
        affiliation: "Government Engineering College, Madhubani (DSTTE), Bihar, India",
        image: "/best_paper_award/image11.jpg",
      },
      {
        session: "Session 2: Thin-Film Solar Cells & Molecular Photovoltaics",
        paperId: "540",
        title: "Exploration of low frequency and wide bandgap in dual resonator based locally resonant metamaterials",
        presenter: "Nitish Kumar",
        affiliation: "Manipal Institute of Technology, Manipal Academy of Higher Education, Manipal, India",
        image: "/best_paper_award/image12.jpg",
      },
      {
        session: "Session 3: Wide Bandgap & Advanced Semiconductor Devices",
        paperId: "797",
        title: "Device-Level Performance Assessment and Mixed-Mode Circuit Implementation of Vertically Stacked Nanosheet FETs",
        presenter: "Manisha Bharti",
        affiliation: "NIT Silchar",
        image: "/best_paper_award/image13.jpg",
      },
      {
        session: "Session 4: VLSI, Low-Power CMOS & Emerging Logic Devices",
        paperId: "857",
        title: "Modeling of Nonlinear Memristive Dynamics with a Sigmoid Based Window Function",
        presenter: "Harsh Ranjan",
        affiliation: "Indian Institute of Technology Patna",
        image: "/best_paper_award/image14.png",
      },
      {
        session: "Session 5: RF, Photonics & Nano-Sensor Technologies",
        paperId: "233",
        title: "High-Purity mm-Wave Signal Generation Based on an Optical Sagnac Loop Architecture",
        presenter: "Kajal Shiv Raj Meena",
        affiliation: "National Institute of Technology Karnataka (NITK), Surathkal",
        image: "/best_paper_award/image15.jpg",
      },
    ],
  },
  {
    trackNum: 4,
    trackTitle: "Track 4: Artificial Intelligence, Secure Computing & Intelligent Networked Systems",
    sessions: [
      {
        session: "Session 1: Secure & Trust-Aware Wireless Sensor Networks",
        paperId: "314",
        title: "A Multi-Modal Perspective toward Enhanced Source Code Clone Detection",
        presenter: "Zaira Bano",
        affiliation: "Jamia Millia Islamia, New Delhi",
        image: "/best_paper_award/image16.JPG",
      },
      {
        session: "Session 2: Blockchain, Federated Learning & Privacy-Preserving Systems",
        paperId: "349",
        title: "A Blockchain-Federated Learning Framework for Enhancing Security in Financial Transactions",
        presenter: "Roshan Kumar",
        affiliation: "Dr. Vishwanath Karad MIT World Peace University, Pune",
        image: "/best_paper_award/image17.jpg",
      },
      {
        session: "Session 6: Intelligent Routing, SDN & Network Optimization",
        paperId: "359",
        title: "Evaluating the Impact of Simulation Parameters on ONUs Placement Optimization Techniques for Fiber Wireless Access Network",
        presenter: "Neha Sharma",
        affiliation: "Medicaps University, Indore, India",
        image: "/best_paper_award/image18.jpg",
      },
    ],
  },
  {
    trackNum: 5,
    trackTitle: "Track 5: Biomedical Systems, Smart Healthcare & Bioelectronics",
    sessions: [
      {
        session: "Session 1: AI for Ophthalmology & Retinal Imaging",
        paperId: "37",
        title: "Fundus Image and Clinical Metadata Fusion for Enhanced Diabetic Retinopathy Severity Prediction",
        presenter: "A Binusha Sornil",
        affiliation: "Stella Mary's College of Engineering",
        image: "/best_paper_award/image19.jpg",
      },
      {
        session: "Session 3: AI in Clinical Diagnostics & Medical Imaging",
        paperId: "299",
        title: "Deep Neural Network Performance in IVF Embryo Classification: A Comparative Assessment of MLP and CNN",
        presenter: "Annapurna Kanakamedala",
        affiliation: "VIT-AP University",
        image: "/best_paper_award/image20.jpeg",
      },
      {
        session: "Session 2: Neurodegenerative & Neurological Disorder Diagnostics",
        paperId: "692",
        title: "Comparative Evaluation of Deep, Hybrid and Ensemble Models for Alzheimer's Disease Classification",
        presenter: "Jasmeet Kaur",
        affiliation: "SGSITS(IT)",
        image: "/best_paper_award/image21.jpg",
      },
      {
        session: "Session 5: Smart Wearables, Assistive Devices & Embedded Healthcare",
        paperId: "363",
        title: "Design and validation of a user-specific powered transfemoral prosthetic leg with minimal sensor integration",
        presenter: "Richa Sharma",
        affiliation: "Dr. B R Ambedkar National Institute of Technology Jalandhar, Punjab",
        image: "/best_paper_award/image22.jpg",
      },
      {
        session: "Session 6: AI Platforms, Federated Learning & Synthetic Health Data",
        paperId: "697",
        title: "MedSyn-GAN: DC-GAN and CTAB-GAN Framework for High-Fidelity Synthetic Medical Images and EHR Generation Using NIH, CheXpert, and MIMIC-IV Data",
        presenter: "Gudipati Rishi Kesava",
        affiliation: "Vignan's Foundation for Science, Technology and Research (Deemed to be University), Guntur, India",
        image: "/best_paper_award/image23.jpeg",
      },
      {
        session: "Session 6: AI Platforms, Federated Learning & Synthetic Health Data",
        paperId: "727",
        title: "Character Recognition and Translation of Digitized Historical Documents Using Deep Learning",
        presenter: "Ravneet Kaur",
        affiliation: "Thapar Institute of Engineering and Technology",
        image: "/best_paper_award/image24.jpg",
      },
      {
        session: "Session 7: AI for Agriculture, Drug Discovery & Bio-Inspired Optimization",
        paperId: "774",
        title: "Catastrophic Interference in Multi-Crop Weed Detection: A Performance Analysis of Faster R-CNN",
        presenter: "Deepthi G Pai",
        affiliation: "Manipal Institute of Technology, Manipal Academy of Higher Education, Manipal",
        image: "/best_paper_award/image25.jpg",
      },
    ],
  },
  {
    trackNum: 6,
    trackTitle: "Track 6: Environmental Intelligence, Sustainable Geo-Systems & Smart Agriculture",
    sessions: [
      {
        session: "Session 1: Smart Agriculture, IoT & Precision Irrigation Systems",
        paperId: "208",
        title: "Sustainable Smart Farming with AI: Transforming Irrigation for Enhanced Efficiency and Reliability",
        presenter: "Jailsingh Bhookya",
        affiliation: "National Institute of Technology Calicut",
        image: "/best_paper_award/image26.jpeg",
      },
      {
        session: "Session 2: Environmental Monitoring, Remote Sensing & Disaster Analytics",
        paperId: "153",
        title: "Rethinking Deep Learning Superiority: Feature-Engineered Classical Models for Air Quality Forecasting",
        presenter: "Pritam Taldhi",
        affiliation: "INSPIRIA KNOWLEDGE CAMPUS",
        image: "/best_paper_award/image27.jpeg",
      },
    ],
  },
  {
    trackNum: 7,
    trackTitle: "Track 7: Applied Artificial Intelligence, Smart Systems & Engineering Innovations",
    sessions: [
      {
        session: "Session 1: Natural Language Processing, Speech & Explainable AI",
        paperId: "354",
        title: "AutoPrompt-XAI: Explaining Methodology Pipelines from Research Figures",
        presenter: "P. Swetha",
        affiliation: "Thiagarajar College of Engineering, Madurai, Tamil Nadu",
        image: "/best_paper_award/image28.jpeg",
      },
      {
        session: "Session 2: Computer Vision & Intelligent Recognition Systems",
        paperId: "604",
        title: "XG-CNN model for Deepfake audio detection using MFCC and mel-spectrograms",
        presenter: "Jhil Chatterjee",
        affiliation: "Dr. BC Roy Engineering College, Durgapur, West Bengal",
        image: "/best_paper_award/image29.jpg",
      },
      {
        session: "Session 3: Intelligent Optimization & Swarm-Based Algorithms",
        paperId: "852",
        title: "Enhancing Speech Emotion Classification by Learning Emotion-Specific Frequency Sub-Bands with EWT",
        presenter: "DEVI PRASAD PATTNAIK",
        affiliation: "GITAM DEEMED TO BE UNIVERSITY, VISAKHAPATNAM",
        image: "/best_paper_award/image30.jpg",
      },
      {
        session: "Session 4: Smart IoT, Energy Systems & Digital Twins",
        paperId: "633",
        title: "Anti-Slip and Sustainable Materials in Footwear",
        presenter: "Krati Varshney",
        affiliation: "Dayalbagh Educational Institute (Deemed to be Univ.)",
        image: "/best_paper_award/image31.jpeg",
      },
      {
        session: "Session 6: Embedded Systems, Digital Design & Industrial AI",
        paperId: "634",
        title: "Digital Logic For MEMS Gyroscope",
        presenter: "TEERTHALA LOHITH KUMAR",
        affiliation: "Vardhaman College of Engineering",
        image: "/best_paper_award/image32.jpg",
      },
    ],
  },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

const PaperCard = ({ session, paperId, title, presenter, affiliation, image }) => (
  <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="flex flex-col md:flex-row">
      {/* Presenter photo */}
      <div className="md:w-48 md:min-w-[12rem] flex-shrink-0">
        <img
          src={image}
          alt={`${presenter}`}
          className="w-full h-48 md:h-full object-cover object-center"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>
      {/* Content */}
      <div className="p-5 flex flex-col gap-1">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{session}</span>
        <p className="text-gray-500 text-xs font-medium">Paper ID: <span className="text-gray-700 font-semibold">#{paperId}</span></p>
        <h4 className="text-base font-bold text-gray-900 leading-snug mt-1">{title}</h4>
        <div className="mt-2 flex items-start gap-2">
          <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-blue-700 text-xs font-bold">{presenter.trim().charAt(0)}</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">{presenter.trim()}</p>
            <p className="text-xs text-gray-500">{affiliation.trim()}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const TrackSection = ({ trackNum, trackTitle, sessions }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-bold flex-shrink-0">
            T{trackNum}
          </span>
          <span className="font-semibold text-gray-800 text-base leading-tight">{trackTitle}</span>
        </div>
        <span className={`text-blue-600 ml-4 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="p-5 bg-white flex flex-col gap-4">
          {sessions.map((s, i) => (
            <PaperCard key={i} {...s} />
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

const BestPaperAwards = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 mt-6">
      <div className="max-w-5xl mx-auto">

        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 border-b-4 border-blue-500 inline-block pb-2">
            Best Paper Awards
          </h1>
          <p className="text-gray-500 mt-3 text-base">
            Recognizing excellence in research and presentation at ICNARI 2026
          </p>
        </div>

        {/* ── Travel Grant Winner ─────────────────────────────── */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-1.5 rounded-full shadow">
              🏆 Best Paper Presentation Award (with Travel Grant)
            </span>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-56 md:min-w-[14rem] flex-shrink-0">
                <img
                  src={travelGrantWinner.image}
                  alt={travelGrantWinner.presenter}
                  className="w-full h-56 md:h-full object-cover object-top"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
              <div className="p-6 flex flex-col gap-2 justify-center">
                <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">{travelGrantWinner.track}</div>
                <div className="text-xs text-amber-600 font-medium">{travelGrantWinner.session}</div>
                <p className="text-gray-500 text-xs">Paper ID: <span className="font-semibold text-gray-700">#{travelGrantWinner.paperId}</span></p>
                <h3 className="text-lg font-bold text-gray-900 leading-snug mt-1">{travelGrantWinner.title}</h3>
                <div className="flex items-start gap-3 mt-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-800 font-bold text-sm">{travelGrantWinner.presenter.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{travelGrantWinner.presenter}</p>
                    <p className="text-xs text-gray-500">{travelGrantWinner.affiliation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Best Papers across Tracks ───────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-b-4 border-blue-500 inline-block pb-1">
            Best Papers across Technical Sessions / Tracks
          </h2>
          <div className="flex flex-col gap-4 mt-4">
            {trackAwards.map((track) => (
              <TrackSection key={track.trackNum} {...track} />
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default BestPaperAwards
