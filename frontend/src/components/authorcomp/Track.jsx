import React from 'react'
import { useParams } from 'react-router-dom';

const Track = () => {
    const {track}=useParams();
    const data = [
        {
          trackName: "Biosensing and Neuromorphic Computing",
          tracks: [
            {
                title:"Track 1: Advanced Biosensing Technologies",
                topics:[
                    "Novel TFET-, FET-, and Nanowire-based Biosensors",
                    "Dielectric Modulation and Junctionless Biosensing Techniques",
                    "Sensitivity, Selectivity, and Noise Performance in Biosensors",
                    "AI and Machine Learning for Biosensing Data Interpretation",
                    "Point-of-Care and Wearable Biosensors"
                ],
                image:"https://res.cloudinary.com/dt35ytobp/image/upload/v1743770486/oej24zlcvw8rd5zdw4xx.png"
            },
            {
              title: "Track 2: Neuromorphic Computing, Bioelectronics and Hybrid Systems",
              topics: [
                "Brain-Inspired Computing and Spiking Neural Networks (SNNs)",
                "Memristors and Ferroelectric Devices for Neuromorphic Systems",
                "AI-driven Biosensing and Real-time Signal Processing",
                "Low-power Computing for Wearable and Implantable Devices",
                "Bio-hybrid and Bio-inspired Sensing Technologies",
                "Synergies between Biosensing and Neuromorphic Circuits",
                "Flexible, Organic and Biocompatible Electronics",
                "Brain-computer Interfaces (BCIs) and Neuroprosthetics",
                "Next-generation Bio-electronic and Implantable Devices"
              ],
              image: "http://res.cloudinary.com/dt35ytobp/image/upload/v1743770534/yktjtinv61ali04s6q07.png"
            },
            {
              title: "Track 3: Materials, Fabrication and Emerging Technologies",
              topics: [
                "2D Materials (MoS₂, Graphene) for High-performance Biosensors",
                "Quantum and Spintronics-based Biosensors and Neuromorphic Devices",
                "Nanoengineering for Improved Biomolecule Capture and Sensitivity",
                "Additive Manufacturing and 3D Printing in Bioelectronics",
                "Industrial and Clinical Translation of Biosensing Technologies"
              ],
              image: "http://res.cloudinary.com/dt35ytobp/image/upload/v1743770566/bkbdkdfjf9l5v7iecgtd.png"
            }
          ]
        },
        {
          trackName: "EVs and Sustainable Transportation",
          tracks: [
            {
              title: "Track 1: Energy Storage, Management and Integration for Sustainable Transportation",
              topics: [
                "Energy Storage Technologies for EVs (Li-ion, Fuel cell, Solid-state, Hybrid Storage)",
                "Battery Management Systems (BMS) and State Estimation (SOC, SOH, SOP)",
                "Thermal Management of Batteries and Supercapacitors",
                "Charging Infrastructure: Fast Charging, Wireless Charging, and Smart Grids",
                "Renewable Energy Integration for EV Charging (Solar, Wind, and Hybrid Systems)",
                "Vehicle-to-Grid (V2G) and Grid-to-Vehicle (G2V) Technologies",
                "Advanced Control Strategies for Battery Energy Storage Systems (BESS)",
                "Second-life Applications and Recycling of EV Batteries"
              ],
              image: "http://res.cloudinary.com/dt35ytobp/image/upload/v1743771444/nimr4k8hebifeapaecis.png"
            },
            {
              title: "Track 2: Power Conversion, Control and Sustainable Electrification",
              topics: [
                "Power Electronics for EVs: Converters, Inverters, and Motor Drives",
                "Electric Propulsion Systems: Design, Control, and Optimization",
                "Energy-Efficient Power Conversion for EVs and Hybrid Vehicles",
                "Smart Grid Integration and Load Management for EVs",
                "AI and Machine Learning Applications in EV Power Systems",
                "Charging Systems and Infrastructure for Sustainable Transportation",
                "Advanced Control and Optimization of Renewable Energy in EV Systems",
                "Policy, Standards and Future Trends in Transportation Electrification"
              ],
              image: "http://res.cloudinary.com/dt35ytobp/image/upload/v1743771538/gqeudgfhocgsvvpv4bil.png"
            }
          ]
        },
        {
          trackName: "Renewable Energy",
          tracks: [
            {
              title: "Track 1: Advanced Solar/Wind Energy and Circular Economy",
              topics: [
                "Next-generation Photovoltaic Materials (Perovskite, Tandem and Organic Solar Cells)",
                "AI and IOT-driven Solar Energy Optimization",
                "Solar-powered Hydrogen Production",
                "Performance Optimization of Solar Panels Using Deep Learning",
                "Solar Energy Forecasting with Advanced AI Techniques",
                "Solar Thermal Energy Systems and Hybrid Renewable Solutions",
                "Offshore And Floating Wind Turbine Advancements",
                "AI And Machine Learning in Wind Energy Forecasting and Maintenance",
                "Hybrid Wind-Solar Energy Systems",
                "Aerodynamic And Structural Innovations in Wind Turbine Design",
                "Recycling And Repurposing Renewable Energy Components",
                "Energy Efficiency in Industrial and Residential Applications",
                "Blockchain And Decentralized Energy Markets",
                "Lifecycle Assessment of Renewable Energy Technologies"
              ],
              image: "http://res.cloudinary.com/dt35ytobp/image/upload/v1743772019/xgkcoiwgsytre06kgvub.png"
            },
            {
              title: "Track 2: Bioenergy, Hydropower and Geothermal and Hydrogen Economy",
              topics: [
                "Advanced Biofuels and Synthetic Fuels",
                "Algae-based Bioenergy Solutions",
                "Waste-to-Energy Technologies",
                "Carbon Capture and Utilization in Bioenergy Production",
                "Tidal, Wave and Ocean Thermal Energy Conversion (OTEC) Innovations",
                "Small-Scale And Micro-hydropower Technologies",
                "Environmental Impact and Sustainability of Hydropower",
                "AI-Based Predictive Analytics for Hydropower Optimization",
                "Enhanced Geothermal Systems (EGS) And Deep Drilling Technologies",
                "Hybrid Geothermal-Solar and Geothermal-Wind Energy Systems",
                "AI-Based Geothermal Exploration and Reservoir Management",
                "Low-Temperature and Direct-Use Geothermal Applications",
                "Green Hydrogen Production Using Renewable Sources",
                "Fuel Cell Advancements for Energy and Transportation",
                "Hydrogen Storage and Distribution Challenges",
                "Policy Frameworks for Scaling up the Hydrogen Economy"
              ],
              image: "http://res.cloudinary.com/dt35ytobp/image/upload/v1743772060/u6iasbwoymi01zueiiz0.png"
            }
          ]
        },
        {
          trackName: "Photovoltaic Cells",
          tracks: [
            {
              title: "Track 1: Thin-film Photovoltaics and Modules",
              topics: [
                "Organic and Inorganic Photovoltaics",
                "Compound Thin-film Photovoltaics",
                "III-V High-efficiency Devices"
              ],
              image: "http://res.cloudinary.com/dt35ytobp/image/upload/v1743772575/cyh5rv5cvyazbodfqzao.png"
            },
            {
              title: "Track 2: Perovskite, Tandems and Emerging Photovoltaics",
              topics: [
                "Perovskite Photovoltaics",
                "Emerging Materials and New Concepts",
                "Perovskite Tandems",
                "Artificial Intelligence in PV Development"
              ],
              image: "http://res.cloudinary.com/dt35ytobp/image/upload/v1743772613/yzibksobiwa09h8akxvp.png"
            },
            {
              title: "Track 3: Wafer-based Silicon Photovoltaics and Integrated PV",
              topics: [
                "Materials, Processes, Fundamentals",
                "Cells and Modules",
                "Integrated PV and Advanced Applications of Photovoltaics",
                "Field Performance of Photovoltaic Systems",
                "Grid Integration and Energy Management",
                "Green Energy Carriers and Storage",
                "Policy, Market, Finance and Deployment"
              ],
              image: "http://res.cloudinary.com/dt35ytobp/image/upload/v1743772649/ih5lcrqeboilvcjr7aoa.png"
            }
          ]
        }
      ];
      
  return (
    <div>
        <div className='mt-20'>
           <h1 className='text-center md:text-5xl text-3xl font-semibold text-gray-700 underline'> Track: {data[track].trackName}</h1>
        </div>
        {
            data[track].tracks.map((track,index)=>(
                <div className="p-6 bg-white shadow-lg rounded-2xl px-10 w-full" key={index} >
                <h4 className="text-2xl font-semibold mt-8 text-gray-800">
                    {track.title}
                </h4>
                <div className="flex flex-col md:flex-row items-start w-full gap-8 mt-4">
                <img
                    src={track.image}
                    alt={track.title}
                    className="w-full md:w-[30%] rounded-xl shadow-md"
                />
                <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed">
                    {
                        track.topics.map((topic,index)=>(
                            <li key={index}>{topic}</li>
                        ))
                    }
                </ul>
                </div>
                </div>
            ))
        }
    </div>
  )
}

export default Track;