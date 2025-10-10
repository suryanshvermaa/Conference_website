import { useParams } from "react-router-dom"
import { useState } from "react";

const TechnicalSession = () => {
    const { ts } = useParams();
    const technicalSessionForComponent = ts.split("-").join(" ");
    const [imgError, setImgError] = useState({});

    const tss = {
        "evs and emerging technologies": {
            workshopTitle: "Next-Gen Transportation: EVs & Emerging Technologies",
            introduction: "In the context of rising global emissions and climate change, the focus is on safeguarding the planet. Extensive research is being conducted globally to mitigate emissions, the primary contributor to global warming. Electric and hybrid vehicles are essentials that not only demonstrate reduced emissions but also utilize renewable energy sources, thereby mitigating the depletion of fossil resources. Despite extensive global research on electric and hybrid vehicle technology, significant gaps remain in the field. The program elucidates existing electric and hybrid vehicle technologies while enabling attendees to understand future market and technological developments. This will allow participants to pinpoint their areas of study interest. This is a platform for the sharing of ideas that can lead to sustainable industrial development.",
            speakers: [
                {
                    name: "Dr. Rajeev Kumar Singh",
                    image: '/technicalSession/RajeevKumar.png',
                    title: "Professor",
                    department: "Department of Electrical Engineering",
                    institution: "Indian Institute of Technology (BHU), Varanasi, Uttar Pradesh, India",
                    bio: "Dr. Rajeev Kumar Singh is a distinguished Professor in the Department of Electrical Engineering at IIT (BHU) Varanasi. His research expertise spans power electronics, electric drives, renewable energy systems, and energy storage technologies. He has extensive experience in developing innovative solutions for electric vehicle technologies and grid integration of renewable energy sources. Dr. Singh has published numerous research papers in international journals and conferences, and has been actively involved in various national and international research projects focused on sustainable energy systems."
                },
                {
                    name: "Dr. Ranjan Kumar Behera",
                    image: '/technicalSession/RanjanKumar.png',
                    title: "Associate Professor",
                    department: "Department of Electrical Engineering",
                    institution: "Indian Institute of Technology, Patna, Bihar, India",
                    bio: "Dr. Ranjan Kumar Behera is an Associate Professor in the Department of Electrical Engineering at IIT Patna. His research interests include power electronics, motor drives, renewable energy systems, and electric vehicle technologies. He has made significant contributions to the field of power conversion systems and energy management in electric vehicles. Dr. Behera has authored several publications in reputed journals and has been involved in multiple research projects related to sustainable transportation and energy systems."
                },
                {
                    name: "Dr. Avanish Tripathi",
                    image: '/technicalSession/AvnishTripathi.png',
                    title: "Assistant Professor",
                    department: "Department of Energy Science and Engineering",
                    institution: "Indian Institute of Technology, Delhi, India",
                    bio: "Dr. Avanish Tripathi is an Assistant Professor in the Department of Energy Science and Engineering at IIT Delhi. His research focuses on energy storage systems, battery management systems, and electric vehicle technologies. He has expertise in developing advanced battery technologies and energy management solutions for electric and hybrid vehicles. Dr. Tripathi has published extensively in the field of energy storage and has been involved in several industry collaborations for developing next-generation energy storage solutions."
                }
            ],
            coordinators: [
                {
                    name: "Chinmay Bera",
                    image: '/technicalSession/ChinayBera.png',
                    title: "Research Scholar, Nextgen Adaptive Systems Group",
                    department: "Department of Electrical Engineering",
                    institution: "National Institute of Technology Patna, Bihar, India",
                    email: "chinmayb.ph21.ee@nitp.ac.in"
                },
                {
                    name: "Mr. Md Inayat Ali",
                    title: "Assistant Professor",
                    image: '/technicalSession/InayatAli.png',
                    department: "Department of Electrical and Electronics Engineering",
                    institution: "Maulana Azad College of Engineering and Technology, Patna, Bihar, India",
                    email: "mda.ph21.ee@nitp.ac.in"
                },
                {
                    name: "Chandra Shekhar Singh Chandal",
                    image: '/technicalSession/CSS.png',
                    title: "Assistant Professor",
                    department: "Department of Electrical & Electronics Engineering",
                    institution: "Motihari College of Engineering Motihari, Bihar India",
                    email: "chandrac.ph21.ee@nitp.ac.in"
                }
            ]
        },
        "renewable energy": {
            workshopTitle: "Next-Gen Energy sources: Renewable Energy Technologies",
            introduction: "The rapid advancement of renewable energy technologies is opening new frontiers in power generation, sustainability, and intelligent energy systems. Renewable sources such as solar, wind, hydro, and biomass, which harness natural resources and convert them into usable energy, are playing a vital role in reducing carbon emissions, ensuring energy security, and driving the global transition to clean energy. On the other hand, smart energy systems, enabled by advanced control strategies, storage solutions, and digital technologies, are revolutionizing the way energy is produced, distributed, and consumed by making it more efficient, adaptive, and resilient. This workshop aims to bring together researchers, students, and professionals to explore the synergy between renewable energy sources and smart energy management systems. By integrating advanced generation technologies with intelligent control and storage solutions, future power systems can achieve real-time energy optimization, improved grid stability, and transformative applications in sectors ranging from microgrids and electric mobility to sustainable cities and industrial automation. Participants will gain insights into the fundamentals, recent advancements, and emerging challenges in these areas, while also engaging in discussions on future opportunities for interdisciplinary innovation in the renewable energy domain.",
            speakers: [
                {
                    name: "Dr Sanjoy Kumar Parida",
                    image: '/technicalSession/sanjoyKumar.png',
                    title: "Associate Professor",
                    department: "Department of Electrical Engineering",
                    institution: "Indian Institute of Technology, Patna, Bihar, India",
                    bio: "Dr. Sanjoy Kumar Parida is an Associate Professor in the Department of Electrical Engineering at IIT Patna. His research expertise includes renewable energy systems, power electronics, smart grid technologies, and energy management systems. He has made significant contributions to the development of intelligent energy systems and grid integration of renewable sources. Dr. Parida has published numerous research papers in prestigious international journals and has been involved in various funded research projects related to sustainable energy technologies and smart grid applications."
                },
                {
                    name: "Dr PESN Raju",
                    image: '/technicalSession/PESNRaju.png',
                    title: "Assistant Professor",
                    department: "Department of Energy Science and Engineering",
                    institution: "Indian Institute of Technology Guwahati, Assam, India",
                    bio: "Dr. PESN Raju is an Assistant Professor in the Department of Energy Science and Engineering at IIT Guwahati. His research interests include renewable energy systems, energy storage technologies, power electronics, and sustainable energy solutions. He has expertise in developing innovative energy conversion systems and energy management strategies for renewable energy applications. Dr. Raju has authored several publications in reputed journals and has been actively involved in research projects focused on clean energy technologies and energy system optimization."
                },
                {
                    name: "Dr. Saurabh Dutta",
                    image: '/technicalSession/SaurabhDatta.png',
                    title: "Research Associate",
                    department: "High Voltage Lab",
                    institution: "University of Manchester , UK",
                    bio: "Dr. Saurabh Dutta is a Research Associate at the High Voltage Lab, University of Manchester, UK. His research focuses on high voltage engineering, power system protection, renewable energy integration, and smart grid technologies. He has extensive experience in developing advanced protection schemes for renewable energy systems and grid-connected applications. Dr. Dutta has contributed to several international research projects and has published widely in the areas of power systems and renewable energy technologies."
                }
            ],
            coordinators: [
                {
                    name: "Rohan Kumar Gupta",
                    image: '/technicalSession/RohanKumarGupta.png',
                    title: "Research Scholar, Nextgen Adaptive Systems Group",
                    department: "Department of Electrical Engineering",
                    institution: "National Institute of Technology Patna, Bihar, India",
                    email: "rohang.ph21.ee@nitp.ac.in"
                },
                {
                    name: "Rahul Kumar",
                    image: '/technicalSession/RahulKumar.png',
                    title: "", // Title not specified in the source document
                    department: "Department of Electrical Engineering",
                    institution: "National Institute of Technology Patna, Bihar, India",
                    email: "rahulk.ph21.ee@nitp.ac.in"
                },
                {
                    name: "Balmukund Kumar",
                    image: '/technicalSession/BalMukund.png',
                    title: "Assistant Professor",
                    department: "Department of Electrical Engineering",
                    institution: "Government Engineering College, Munger, Bihar, India",
                    email: "balmukundk.ph21.ee@nitp.ac.in"
                }
            ]
        },
        "photovoltaic cell": {
            workshopTitle: "Photovoltaic Cells",
            introduction: "The workshop on Photovoltaic Cells aims to bring together researchers, academicians, industry experts, and policymakers to discuss the latest advancements and future directions in solar energy technologies. Covering three major tracks—Thin-film Photovoltaics and Modules, Perovskite, Tandems and Emerging Photovoltaics, and Wafer-based Silicon Photovoltaics and Integrated PV. The workshop will highlight innovations in materials, device architectures, and system integration. Special emphasis will be given to emerging materials, high-efficiency devices, AI-driven PV development, advanced applications, field performance, and strategies for grid integration, storage, and deployment. This platform will foster collaboration and knowledge exchange, bridging fundamental research with practical solutions for a sustainable energy future.",
            speakers: [
                {
                    name: "Dr. Vivek Garg",
                    image: '/technicalSession/vevekGarg.png',
                    title: "Assistant Professor",
                    institution: "ECE Dept., SVNIT Surat",
                    bio: "Dr. Vivek Garg’s professional journey spans teaching, research, and academic leadership, with expertise in optoelectronic devices, quantum technologies, nanoscale device modeling, energy storage systems, and optical communication. He gained rich research experience as a Junior and Senior Research Fellow at IIT Indore and teaching experience as an Assistant Professor at DIAT Pune before joining SVNIT Surat. At SVNIT, he has taken on significant administrative and institutional roles, including Coordinator for national capacity-building programs (INUP i2i, LAM–IISc, and EICT Academy), Member of the DCC Sub-Committee on Quantum Technology Division, DoT, Govt. of India, and Digital Content Chair of IEEE Nanotechnology Council, Gujarat Chapter. His contributions extend to fostering research forums, student mentorship, and infrastructure development, reflecting his commitment to advancing both academic excellence and institutional growth."
                },
                {
                    name: "Dr. Brajendra Singh Sengar",
                    image: '/technicalSession/brajendra.png',
                    title: "Assistant Professor",
                    institution: "ECE Dept., NIT Srinagar",
                    bio: "Dr. Brajendra Singh Sengar’s research interests include semiconductor device simulation and fabrication, thin-film solar cells, and the application of machine learning in semiconductor-based devices. He earned his Ph.D. in Electrical Engineering from IIT Indore (2014–2019), where he was a CSIR Junior and Senior Research Fellow, and also received the prestigious BASE Inter Fellowship to work at the University of Nevada, Las Vegas, USA. He gained industry experience as a Network Engineer at the National Informatics Centre (2012–2014) before pursuing doctoral research. He later served as an Assistant Professor at the Centre for Advanced Studies, Lucknow (2019–2021) before moving to his current academic role."
                },
                {
                    name: "Dr. Gaurav Sidddharth",
                    image: '/technicalSession/gauravSiddharth.png',
                    title: "Assistant Professor",
                    institution: "ECE Dept., NIT Calicut",
                    bio: "Dr. Gaurav Siddharth received his Ph.D. in Electrical Engineering from IIT Indore. His research focuses on simulating, modeling, characterizing, and fabricating photoelectronic materials and devices, with particular emphasis on solar cells and photodetectors. He has served as Assistant Professor at IIIT Ranchi and SVNIT Surat before joining NIT Calicut, where he continues to contribute to research and teaching in advanced optoelectronic device technologies."
                }
            ],
            coordinators: [
                {
                    name: "Dr. Pritam Kumar",
                    image: '/technicalSession/pritamKumar.png',
                    title: "Assistant Professor",
                    department: "EE Dept.",
                    institution: "Government Engineering College, Madhubani (DSTTE, Bihar)",
                    email: "pritamk.phd20.ee@nitp.ac.in"
                },
                {
                    name: "Dr. Parshuram Singh",
                    image: '/technicalSession/parsuramSingh.png',
                    title: "Assistant Professor",
                    department: "EEE Dept.",
                    institution: "Vignan's Foundation for Science, Technology and Research (Deemed to be University), Vadlamudi, (Andhra Pradesh)",
                    email: "parshurams.ph21.ee@nitp.ac.in"
                }
            ]
        }
    }
    const session = tss[technicalSessionForComponent];

    if (!session) return (
        <div className="mt-20 text-center text-red-600">Session not found</div>
    )

    const handleImgError = (key) => {
        setImgError(prev => ({ ...prev, [key]: true }));
    }

    const renderPerson = (person, index, type) => {
        const imgPath = person.image;

        if (type === 'speaker') {
            return (
                <div key={`${type}-${index}`} className="bg-white rounded-lg shadow-lg p-8 mb-8 min-h-[400px]">
                    <div className="flex flex-col md:flex-row gap-8 h-full">
                        <div className="flex flex-col items-center md:w-64 flex-shrink-0">
                            <img
                                src={imgPath}
                                alt={person.name}
                                onError={() => handleImgError(`${type}-${index}`)}
                                className="w-48 h-48 object-cover rounded-full shadow-md mb-6"
                            />
                            <div className="text-center space-y-2">
                                <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                                <p className="text-lg text-indigo-600 font-semibold">{person.title}</p>
                                {person.department && (
                                    <p className="text-sm text-gray-600 leading-relaxed">{person.department}</p>
                                )}
                                <p className="text-sm text-gray-600 leading-relaxed">{person.institution}</p>
                            </div>
                        </div>
                        {person.bio && (
                            <div className="flex-1 flex flex-col">
                                <h4 className="text-lg font-semibold text-gray-800 mb-4">About:</h4>
                                <p className="text-sm text-gray-700 leading-relaxed text-justify flex-1">{person.bio}</p>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        // For coordinators, keep the original compact layout
        return (
            <div key={`${type}-${index}`} className="flex flex-col items-center text-center p-4">
                <img
                    src={imgPath}
                    alt={person.name}
                    onError={() => handleImgError(`${type}-${index}`)}
                    className="w-32 h-32 object-cover rounded-full mb-2 shadow"
                />
                <div className="font-semibold">{person.name}</div>
                <div className="text-sm text-gray-600">{person.title}</div>
                {person.department && <div className="text-sm text-gray-600">{person.department}</div>}
                {person.institution && <div className="text-sm text-gray-600">{person.institution}</div>}
                {person.email && <div className="text-sm text-indigo-600">{person.email}</div>}
            </div>
        );
    }

    return (
        <div className="mt-20 text-gray-700 max-w-6xl mx-auto px-4">
            <h1 className="text-center text-3xl font-bold mb-6">
                {session.workshopTitle}
            </h1>

            <p className="mb-8 text-justify">{session.introduction}</p>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Speakers</h2>
                <div className="space-y-6">
                    {session.speakers.map((s, i) => renderPerson(s, i, 'speaker'))}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Coordinators</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {session.coordinators.map((c, i) => renderPerson(c, i, 'coordinator'))}
                </div>
            </section>
        </div>
    )
}

export default TechnicalSession
