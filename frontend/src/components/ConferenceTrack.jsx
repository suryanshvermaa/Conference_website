import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConferenceTrack = () => {
  const [visibleTrack, setVisibleTrack] = useState(null);

  const toggleTrack = (track) => {
    setVisibleTrack(visibleTrack === track ? null : track);
  };

  return (
    <div className="mx-auto px-4 py-8">
      <div className="flex flex-col gap-6 items-start">
        <section className="p-6 bg-white shadow-lg rounded-xl w-full">
          <p className="text-gray-700 text-3xl">
            Different themes and topics covered in the conference.
          </p>

          {/* Biosensing Track */}
          <button
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg w-full text-left font-semibold hover:bg-gray-200 mt-4 text-3xl"
            onClick={() => toggleTrack("biosensing")}
          >
            Tracks for Biosensing and Neuromorphic Computing
          </button>
          {visibleTrack === "biosensing" && (
            <div className="p-6 bg-white shadow-lg rounded-2xl w-full mt-6">
              

              {/* Track 1 */}
              <h4 className="text-2xl font-semibold mt-6 text-gray-800">
                Track 1: Advanced Biosensing Technologies
              </h4>
              <div className="flex flex-col md:flex-row items-start w-full gap-8 mt-4">
                <img
                  src="http://res.cloudinary.com/dt35ytobp/image/upload/v1743770486/oej24zlcvw8rd5zdw4xx.png"
                  alt="Advanced Biosensing Technologies"
                  className="w-full md:w-[30%] rounded-xl shadow-md"
                />
                <ul className="list-disc pl-6 text-gray-700  leading-relaxed text-lg">
                  <li>Novel TFET-, FET-, and Nanowire-based Biosensors</li>
                  <li>Dielectric Modulation and Junctionless Biosensing Techniques</li>
                  <li>Sensitivity, Selectivity, and Noise Performance in Biosensors</li>
                  <li>AI and Machine Learning for Biosensing Data Interpretation</li>
                  <li>Point-of-Care and Wearable Biosensors</li>
                </ul>
              </div>

              {/* Track 2 */}
              <h4 className="text-2xl font-semibold mt-8 text-gray-800">
                Track 2: Neuromorphic Computing, Bioelectronics and Hybrid Systems
              </h4>
              <div className="flex flex-col md:flex-row items-start w-full gap-8 mt-4">
                <img
                  src="http://res.cloudinary.com/dt35ytobp/image/upload/v1743770534/yktjtinv61ali04s6q07.png"
                  alt="Neuromorphic Computing"
                  className="w-full md:w-[30%] rounded-xl shadow-md"
                />
                <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed">
                  <li>Brain-Inspired Computing and Spiking Neural Networks (SNNs)</li>
                  <li>Memristors and Ferroelectric Devices for Neuromorphic Systems</li>
                  <li>AI-driven Biosensing and Real-time Signal Processing</li>
                  <li>Low-power Computing for Wearable and Implantable Devices</li>
                  <li>Bio-hybrid and Bio-inspired Sensing Technologies</li>
                  <li>Synergies between Biosensing and Neuromorphic Circuits</li>
                  <li>Flexible, Organic and Biocompatible Electronics</li>
                  <li>Brain-computer Interfaces (BCIs) and Neuroprosthetics</li>
                  <li>Next-generation Bio-electronic and Implantable Devices</li>
                </ul>
              </div>

              {/* Track 3 */}
              <h4 className="text-2xl font-semibold mt-8 text-gray-800">
                Track 3: Materials, Fabrication and Emerging Technologies
              </h4>
              <div className="flex flex-col md:flex-row items-start w-full gap-8 mt-4">
                <img
                  src="http://res.cloudinary.com/dt35ytobp/image/upload/v1743770566/bkbdkdfjf9l5v7iecgtd.png"
                  alt="Materials and Fabrication"
                  className="w-full md:w-[30%] rounded-xl shadow-md"
                />
                <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed">
                  <li>2D Materials (MoS₂, Graphene) for High-performance Biosensors</li>
                  <li>Quantum and Spintronics-based Biosensors and Neuromorphic Devices</li>
                  <li>Nanoengineering for Improved Biomolecule Capture and Sensitivity</li>
                  <li>Additive Manufacturing and 3D Printing in Bioelectronics</li>
                  <li>Industrial and Clinical Translation of Biosensing Technologies</li>
                </ul>
              </div>
            </div>
          )}

          {/* EV + Sustainability */}
          <button
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg w-full text-left font-semibold hover:bg-gray-200 mt-4 text-3xl"
            onClick={() =>
              toggleTrack("TracksforElectricVehicles,SustainableEnergyandTransportation")
            }
          >
            Tracks for Electric Vehicles, Sustainable Energy and Transportation
          </button>
          {visibleTrack === "TracksforElectricVehicles,SustainableEnergyandTransportation" && (
            <div className="p-6 bg-white shadow-lg rounded-2xl w-full mt-6">
              {/* Track 1 */}
              <h4 className="text-2xl font-semibold mt-6 text-gray-800">
                Track 1: Energy Storage, Management and Integration for Sustainable Transportation
              </h4>
              <div className="flex flex-col md:flex-row items-start w-full gap-8 mt-4">
                <img
                  src="http://res.cloudinary.com/dt35ytobp/image/upload/v1743771444/nimr4k8hebifeapaecis.png"
                  alt="Energy Storage"
                  className="w-full md:w-[30%] h-[300px] rounded-xl shadow-md"
                />
                <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed">
                  <li>Energy Storage Technologies for EVs (Li-ion, Fuel cell, Solid-state, Hybrid Storage)</li>
                  <li>Battery Management Systems (BMS) and State Estimation (SOC, SOH, SOP)</li>
                  <li>Thermal Management of Batteries and Supercapacitors</li>
                  <li>Charging Infrastructure: Fast Charging, Wireless Charging, and Smart Grids</li>
                  <li>Renewable Energy Integration for EV Charging (Solar, Wind, and Hybrid Systems)</li>
                  <li>Vehicle-to-Grid (V2G) and Grid-to-Vehicle (G2V) Technologies</li>
                  <li>Advanced Control Strategies for Battery Energy Storage Systems (BESS)</li>
                  <li>Second-life Applications and Recycling of EV Batteries</li>
                </ul>
              </div>

              {/* Track 2 */}
              <h4 className="text-2xl font-semibold mt-8 text-gray-800">
                Track 2: Power Conversion, Control and Sustainable Electrification
              </h4>
              <div className="flex flex-col md:flex-row items-start w-full gap-8 mt-4">
                <img
                  src="http://res.cloudinary.com/dt35ytobp/image/upload/v1743771538/gqeudgfhocgsvvpv4bil.png"
                  alt="Power Conversion"
                  className="w-full md:w-[30%] h-[300px] rounded-xl shadow-md"
                />
                <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed">
                  <li>Power Electronics for EVs: Converters, Inverters, and Motor Drives</li>
                  <li>Electric Propulsion Systems: Design, Control, and Optimization</li>
                  <li>Energy-Efficient Power Conversion for EVs and Hybrid Vehicles</li>
                  <li>Smart Grid Integration and Load Management for EVs</li>
                  <li>AI and Machine Learning Applications in EV Power Systems</li>
                  <li>Charging Systems and Infrastructure for Sustainable Transportation</li>
                  <li>Advanced Control and Optimization of Renewable Energy in EV Systems</li>
                  <li>Policy, Standards and Future Trends in Transportation Electrification</li>
                </ul>
              </div>
            </div>
          )}

          {/* Renewable Energy */}
          <button
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg w-full text-left font-semibold hover:bg-gray-200 mt-4 text-3xl"
            onClick={() => toggleTrack("renewableEnergy")}
          >
            Tracks for Renewable Energy
          </button>
          {visibleTrack === "renewableEnergy" && (
            <div className="p-6 bg-white shadow-lg rounded-2xl w-full mt-6">
              <h3 className="text-3xl font-semibold">Tracks for Renewable Energy</h3>
              {/* Track 1 */}
              <h4 className="text-2xl font-semibold mt-6 text-gray-800">
                Track 1: Advanced Solar/Wind Energy and Circular Economy
              </h4>
              <div className="flex flex-col md:flex-row items-start w-full gap-8 mt-4">
                <img
                  src="http://res.cloudinary.com/dt35ytobp/image/upload/v1743772019/xgkcoiwgsytre06kgvub.png"
                  alt="Renewable Energy"
                  className="w-full md:w-[30%] rounded-xl shadow-md"
                />
                <ul className="list-disc pl-6 text-gray-700  leading-relaxed text-lg ">
                  <li>Next-generation Photovoltaic Materials (Perovskite, Tandem and Organic Solar Cells)</li>
                  <li>AI and IOT-driven Solar Energy Optimization</li>
                  <li>Solar-powered Hydrogen Production</li>
                  <li>Performance Optimization of Solar Panels Using Deep Learning</li>
                  <li>Solar Energy Forecasting with Advanced AI Techniques</li>
                  <li>Solar Thermal Energy Systems and Hybrid Renewable Solutions</li>
                  <li>Offshore And Floating Wind Turbine Advancements</li>
                  <li>AI And Machine Learning in Wind Energy Forecasting and Maintenance</li>
                  <li>Hybrid Wind-Solar Energy Systems</li>
                  <li>Aerodynamic And Structural Innovations in Wind Turbine Design</li>
                  <li>Recycling And Repurposing Renewable Energy Components</li>
                  <li>Energy Efficiency in Industrial and Residential Applications</li>
                  <li>Blockchain And Decentralized Energy Markets</li>
                  <li>Lifecycle Assessment of Renewable Energy Technologies</li>
                </ul>
              </div>

              {/* Track 2 */}
              <h4 className="text-2xl font-semibold mt-8 text-gray-800">
                Track 2: Bioenergy, Hydropower and Geothermal and Hydrogen Economy
              </h4>
              <div className="flex flex-col md:flex-row items-start w-full gap-8 mt-4">
                <img
                  src="http://res.cloudinary.com/dt35ytobp/image/upload/v1743772060/u6iasbwoymi01zueiiz0.png"
                  alt="Smart Grids"
                  className="w-full md:w-[30%]  rounded-xl shadow-md"
                />
                <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed">
                  <li>Advanced Biofuels and Synthetic Fuels</li>
                  <li>Algae-based Bioenergy Solutions</li>
                  <li>Waste-to-Energy Technologies</li>
                  <li>Carbon Capture and Utilization in Bioenergy Production</li>
                  <li>Tidal, Wave and Ocean Thermal Energy Conversion (OTEC) Innovations</li>
                  <li>Small-Scale And Micro-hydropower Technologies</li>
                  <li>Environmental Impact and Sustainability of Hydropower</li>
                  <li>AI-Based Predictive Analytics for Hydropower Optimization</li>
                  <li>Enhanced Geothermal Systems (EGS) And Deep Drilling Technologies</li>
                  <li>Hybrid Geothermal-Solar and Geothermal-Wind Energy Systems</li>
                  <li>AI-Based Geothermal Exploration and Reservoir Management</li>
                  <li>Low-Temperature and Direct-Use Geothermal Applications</li>
                  <li>Green Hydrogen Production Using Renewable Sources</li>
                  <li>Fuel Cell Advancements for Energy and Transportation</li>
                  <li>Hydrogen Storage and Distribution Challenges</li>
                  <li>Policy Frameworks for Scaling up the Hydrogen Economy</li>
                </ul>
              </div>
            </div>
          )}
          <button
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg w-full text-left font-semibold hover:bg-gray-200 mt-4 text-3xl"
            onClick={() => toggleTrack("photovoltaic")}
          >
            Tracks for Photovoltaic Cells
          </button>
          {visibleTrack === "photovoltaic" && (
            <div className="p-6 bg-white shadow-md rounded-lg w-full mt-6">
              <h3 className="text-2xl font-semibold text-blue-800">Tracks for Photovoltaic Cells</h3>

              {/* Track 1 */}
              <h4 className="text-xl font-semibold mt-6 text-gray-800">Track 1: Thin-film Photovoltaics and Modules</h4>
              <div className="flex flex-col md:flex-row items-start w-full gap-6 mt-4">
                <img
                  src="http://res.cloudinary.com/dt35ytobp/image/upload/v1743772575/cyh5rv5cvyazbodfqzao.png"
                  alt="Advanced Biosensing Technologies"
                  className="w-full md:w-[30%] h-[300px] rounded-xl shadow-md"
                />
                <ul className="list-disc pl-6 text-gray-700 text-2xl leading-relaxed">
                  <li>Organic and Inorganic Photovoltaics</li>
                  <li>Compound Thin-film Photovoltaics</li>
                  <li>III-V High-efficiency Devices</li>
                </ul>
              </div>

              {/* Track 2 */}
              <h4 className="text-xl font-semibold mt-8 text-gray-800">Track 2: Perovskite, Tandems and Emerging Photovoltaics</h4>
              <div className="flex flex-col md:flex-row items-start w-full gap-6 mt-4">
                <img
                  src="http://res.cloudinary.com/dt35ytobp/image/upload/v1743772613/yzibksobiwa09h8akxvp.png"
                  alt="Materials and Fabrication"
                  className="w-full md:w-[30%] h-[300px] rounded-xl shadow-md"
                />
                <ul className="list-disc pl-6 text-gray-700 text-2xl leading-relaxed">
                  <li>Perovskite Photovoltaics</li>
                  <li>Emerging Materials and New Concepts</li>
                  <li>Perovskite Tandems</li>
                  <li>Artificial Intelligence in PV Development</li>
                </ul>
              </div>

              {/* Track 3 */}
              <h4 className="text-xl font-semibold mt-8 text-gray-800">Track 3: Wafer-based Silicon Photovoltaics and Integrated PV</h4>
              <div className="flex flex-col md:flex-row items-start w-full gap-6 mt-4">
                <img
                  src="http://res.cloudinary.com/dt35ytobp/image/upload/v1743772649/ih5lcrqeboilvcjr7aoa.png"
                  alt="Neuromorphic Computing"
                  className="w-full md:w-[30%] h-[300px] rounded-xl shadow-md"
                />
                <ul className="list-disc pl-6 text-gray-700 text-2xl leading-relaxed">
                  <li>Materials, Processes, Fundamentals</li>
                  <li>Cells and Modules</li>
                  <li>Integrated PV and Advanced Applications of Photovoltaics</li>
                  <li>Field Performance of Photovoltaic Systems</li>
                  <li>Grid Integration and Energy Management</li>
                  <li>Green Energy Carriers and Storage</li>
                  <li>Policy, Market, Finance and Deployment</li>
                </ul>
              </div>
            </div>
          )}


        </section>
      </div>
    </div>
  );
};

export default ConferenceTrack;

