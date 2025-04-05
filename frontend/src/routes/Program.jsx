export default function Programs() {
    return <h1 className="text-center text-2xl mt-5">Our Programs</h1>;
  }
  
import React from "react";


export const Tours = () => {
  const tourSpots = [
    {
      title: "Mahabodhi Temple, Bodh Gaya",
      image: "tour/Mahabodhi_Temple.png",
      description: `The Mahabodhi Temple Complex at Bodh Gaya is one of the four holy sites related to the life of the Lord Buddha, and particularly to the attainment of Enlightenment. The first temple was built by Emperor Asoka in the 3rd century B.C., and the present temple dates from the 5th or 6th centuries. It is one of the earliest Buddhist temples built entirely in brick that still survives today. The Mahabodhi Temple is constructed of brick and is considered to be one of the oldest brick structures in eastern India. The temple’s central tower rises to a height of 55 meters and is surrounded by four smaller towers, built in the same style. It is one of the earliest and most imposing structures built entirely in brick, still standing in India, from the late Gupta period. The temple is surrounded on all four sides by stone railings, about two meters high and more than 100 meters long.`
    },
    {
      title: "Takhat Sri Harimandir Ji, Patna Sahib",
      image: "tour/Takhat_Sri_Harimandir_Ji.png",
      description: `Takhat Sri Harimandir Ji, also known as Patna Sahib Gurudwara, is one of the holiest pilgrimages for Sikhs. This is the birthplace of Guru Gobind Singh, the tenth Guru of the Sikhs. The Gurudwara was built in 1666 by Maharaja Ranjit Singh and stands as a symbol of Sikhism’s strong historical roots in Bihar. It houses sacred relics of Guru Gobind Singh, including his weapons, and is visited by lakhs of devotees annually. The architecture reflects a blend of Mughal and Rajput styles, with a spacious prayer hall and a sanctum with the Guru Granth Sahib. Patna Sahib is one of the five Takhts (seats of authority) in Sikhism.`
    },
    {
      title: "Nalanda Mahavihara",
      image: "tour/Nalanda_Mahavihara.png",
      description: `Nalanda was a renowned Mahavihara, a large Buddhist monastery in the ancient kingdom of Magadha (modern-day Bihar), in India. It served as a center of learning from the 5th century CE to 1200 CE and is considered one of the first residential universities in the world. Nalanda attracted scholars and students from as far away as Tibet, China, Korea, and Central Asia. The site has impressive ruins of temples, monasteries, and stupas, spread over 14 hectares. It was supported by various rulers like the Guptas, Harshavardhana, and the Palas. Xuanzang, the famous Chinese traveler, studied and taught here. In 2016, it was declared a UNESCO World Heritage Site.`
    },
    {
      title: "Vishwa Shanti Stupa",
      image: "tour/Vishwa_Shanti_Stupa.png",
      description: `The Vishwa Shanti Stupa (World Peace Pagoda) is a white stupa located in Rajgir, built in 1969 through Indo-Japanese collaboration. It is 125 feet tall and 103 feet in diameter. The stupa is built at the top of Ratnagiri Hill and can be reached via a ropeway offering panoramic views of the valley below. The stupa is surrounded by four golden statues of Buddha representing four important events of his life: birth, enlightenment, first sermon, and death. A pond and peaceful gardens enhance its serenity. Near the stupa, one can also visit the Japanese Buddhist temple and monastery built by the Nipponzan Myohoji sect.`
    },
    {
      title: "Valmiki National Park",
      image: "tour/Valmiki_National_Park.png",
      description: `Valmiki National Park is located in the West Champaran district of Bihar and is the only national park in the state. Spread over 880 square kilometers, the park lies on the Indo-Nepal border in the Himalayan Terai landscape. It forms a part of the Valmiki Tiger Reserve and is home to Bengal tigers, Indian leopards, wild dogs, and several species of deer and birds. The park is also home to Tharu tribe communities. It is known for its rich biodiversity and unique landscape, which includes grasslands, wetlands, and dense forests. Eco-tourism activities include jungle safaris, tribal village visits, and nature camps.`
    },
    {
      title: "Vikramshila University",
      image: "tour/Ruins_of_Vikramshila.png",
      description: `Vikramshila was one of the two most important centers of Buddhist learning in India during the Pala Empire, along with Nalanda. It was established by King Dharampala in the 8th century and became a prominent destination for scholars of Buddhist philosophy, particularly Vajrayana Buddhism. Located in present-day Bhagalpur district, the site includes the ruins of a large monastery, stupa, votive stupas, and numerous Buddhist sculptures. It is situated on the banks of the river Ganga, offering a spiritual and scenic setting. Excavations have revealed a central shrine, mandapas, and elaborately carved Buddhist artifacts, some of which are displayed in the museum nearby.`
    },
    {
      title: "Vikramshila Gangetic Dolphin Sanctuary",
      image: "tour/Vikramshila_Gangetic_Dolphin_Sanctuary.png",
      description: `The Vikramshila Gangetic Dolphin Sanctuary is located in the Bhagalpur district of Bihar. It stretches for about 50 km along the Ganges River, from Sultanganj to Kahalgaon. Established in 1991 to protect the endangered Gangetic Dolphin (Platanista gangetica), the sanctuary also supports rich aquatic biodiversity, including turtles, gharials, otters, and many migratory birds. The best time to visit is from October to June. Boat safaris and eco-tourism activities are promoted here, providing opportunities to observe dolphins in their natural habitat. The sanctuary also plays a vital role in the conservation of the river ecosystem.`
    },
    {
      title: "Pawapuri",
      image: "tour/Pawapuri.png",
      description: `Pawapuri is a sacred Jain pilgrimage site in Nalanda district, Bihar. It is the place where Lord Mahavira, the 24th Tirthankara of Jainism, attained Nirvana and was cremated around 500 BC. The Jal Mandir (Water Temple), a white marble temple located in the middle of a lotus pond, marks the spot of his cremation. It is connected by a stone bridge and is visited by Jains from around the world. Another temple, Samosharan, commemorates the place where Mahavira delivered his final sermons. The site is known for its tranquility and architectural beauty. The Rajgir Dance Festival is also held nearby.`
    },
    {
      title: "Lauriya Nandangarh",
      image: "tour/Lauriya_Nandangarh.png",
      description: `Lauriya Nandangarh, in the West Champaran district, is famous for its Ashokan Pillar and a group of 20 burial mounds or stupas. The pillar, made of polished sandstone, is over 10 meters high and has an inscription in the Brahmi script containing the edicts of Ashoka from 244 BC. The Nandangarh Stupa, a 24-meter-high mound, is believed to be one of the eight original stupas containing Buddha’s relics. The area is of immense archaeological significance and attracts historians and tourists alike. The site is well-maintained and reflects the grandeur of Mauryan architecture.`
    },
    {
      title: "Tomb of Sher Shah Suri",
      image: "tour/Tomb_of_Sher_Shah_Suri.png",
      description: `The Tomb of Sher Shah Suri is located in Sasaram, Bihar. Built between 1545 and 1548, it is one of the finest examples of Indo-Islamic architecture. Constructed of red sandstone, the mausoleum stands in the middle of an artificial lake and is connected by a causeway. The structure is octagonal, about 46 meters high, and features beautiful arches and domes. It was designed by architect Alawal Khan and is considered a precursor to the Mughal architectural style. Often referred to as the ‘Second Taj Mahal of India,’ the tomb showcases the grandeur of the Sur dynasty.`
    },
    {
      title: "Navlakha Palace",
      image: "tour/Navlakha_Palace.png",
      description: `Navlakha Palace, also known as Rajnagar Palace, is located near Madhubani in Bihar. It was built by Maharaja Rameshwar Singh of Darbhanga in the 19th century. Though partially in ruins due to the 1934 earthquake, the palace complex remains a popular tourist attraction. It originally included gardens, temples, ponds, and courtyards. The palace exhibits a blend of Mughal and Rajput architectural styles. While many structures are no longer intact, remnants of intricate carvings and architectural elements reflect the grandeur of the Mithila region’s royal history.`
    }
  ];
  
      
  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 lg:px-8 py-10 mt-10">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Tours</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {tourSpots.map((spot, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
          >
            {spot.image && (
              <img
                src={`/${spot.image}`}
                alt={spot.title}
                className="w-full h-48 sm:h-56 object-cover"
              />
            )}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">{spot.title}</h2>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                {spot.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

