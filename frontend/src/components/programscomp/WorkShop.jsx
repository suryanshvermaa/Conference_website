import React from 'react'
import { ToastContainer } from 'react-toastify'
const workshop_data=[{id:1,imageUrl:"http://res.cloudinary.com/dt35ytobp/image/upload/v1744916844/u4kollliios8jjwqp862.jpg"
,name:"workshop1",description:"    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates alias quia in ab fugit quod maxime odio quidem incidunt esse voluptas sint dolorum velit dolores corporis veritatis cum, culpa qui reiciendis numquam magni. Nobis aperiam repudiandae est illum ipsa fuga quidem nisi dolore! Ipsam ipsum enim itaque accusamus quae. Porro libero consequatur, nostrum vitae necessitatibus deserunt officiis suscipit, quis pariatur deleniti dignissimos accusantium sint veritatis delectus atque laborum provident exercitationem facilis odit sunt? Ullam dicta qui dolorem voluptatem quos aperiam impedit esse officia, possimus quam, iusto suscipit delectus, earum excepturi quae reprehenderit totam! Consectetur repellat repellendus culpa ut ipsam debitis saepe temporibus sint mollitia non laborum, excepturi inventore atque sit maiores. Odit et veniam architecto voluptatem doloremque provident nobis, iure ab porro minus error? Id eius labore praesentium error voluptates ipsa, numquam minima optio laboriosam ullam inventore dolore sapiente totam enim, sint sit maiores ex! Nihil exercitationem quisquam vel explicabo!"},
    {id:1,imageUrl:"http://res.cloudinary.com/dt35ytobp/image/upload/v1744916844/u4kollliios8jjwqp862.jpg"
,name:"workshop1",description:"    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates alias quia in ab fugit quod maxime odio quidem incidunt esse voluptas sint dolorum velit dolores corporis veritatis cum, culpa qui reiciendis numquam magni. Nobis aperiam repudiandae est illum ipsa fuga quidem nisi dolore! Ipsam ipsum enim itaque accusamus quae. Porro libero consequatur, nostrum vitae necessitatibus deserunt officiis suscipit, quis pariatur deleniti dignissimos accusantium sint veritatis delectus atque laborum provident exercitationem facilis odit sunt? Ullam dicta qui dolorem voluptatem quos aperiam impedit esse officia, possimus quam, iusto suscipit delectus, earum excepturi quae reprehenderit totam! Consectetur repellat repellendus culpa ut ipsam debitis saepe temporibus sint mollitia non laborum, excepturi inventore atque sit maiores. Odit et veniam architecto voluptatem doloremque provident nobis, iure ab porro minus error? Id eius labore praesentium error voluptates ipsa, numquam minima optio laboriosam ullam inventore dolore sapiente totam enim, sint sit maiores ex! Nihil exercitationem quisquam vel explicabo!"},
    {id:1,imageUrl:"http://res.cloudinary.com/dt35ytobp/image/upload/v1744916844/u4kollliios8jjwqp862.jpg"
,name:"workshop1",description:"    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates alias quia in ab fugit quod maxime odio quidem incidunt esse voluptas sint dolorum velit dolores corporis veritatis cum, culpa qui reiciendis numquam magni. Nobis aperiam repudiandae est illum ipsa fuga quidem nisi dolore! Ipsam ipsum enim itaque accusamus quae. Porro libero consequatur, nostrum vitae necessitatibus deserunt officiis suscipit, quis pariatur deleniti dignissimos accusantium sint veritatis delectus atque laborum provident exercitationem facilis odit sunt? Ullam dicta qui dolorem voluptatem quos aperiam impedit esse officia, possimus quam, iusto suscipit delectus, earum excepturi quae reprehenderit totam! Consectetur repellat repellendus culpa ut ipsam debitis saepe temporibus sint mollitia non laborum, excepturi inventore atque sit maiores. Odit et veniam architecto voluptatem doloremque provident nobis, iure ab porro minus error? Id eius labore praesentium error voluptates ipsa, numquam minima optio laboriosam ullam inventore dolore sapiente totam enim, sint sit maiores ex! Nihil exercitationem quisquam vel explicabo!"}]
const WorkShop = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-8 mt-14">
            <h2 className="text-3xl font-semibold text-center mb-8">Workshops</h2>
            <div className="grid  gap-8">
                {workshop_data.map((speaker) => (
                    <div key={speaker.id} className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden mb-6">
                        {/* Speaker Photo and Info */}
                        <div className="w-[30%] flex flex-col  p-4 bg-gray-100">
                            <img
                                src={speaker.imageUrl}
                                alt={speaker.name}
                                className="w-full h-[250px] object-cover rounded-lg mb-4"
                            />
                            <div className="text-center">
                                <h3 className="text-xl font-semibold uppercase">{speaker.name}</h3>
                            </div>
                        </div>

                        {/* Talk Details */}
                        <div className="w-[70%] p-6">
                            <h2 className="text-xl font-bold text-red-600 mb-2">
                                {/* {speaker.sessionTitle} */}
                            </h2>
                            <p className="text-sm font-semibold mb-1">
                                {/* {speaker.time} | Room: {speaker.room} */}
                            </p>
                            <p className="text-gray-800 text-sm   mb-4">
                                {speaker.description||"            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam ullam, necessitatibus odit corporis tenetur in neque iste qui, aliquam fugit iusto eaque fuga deleniti quisquam ut ea molestias officia eos assumenda ratione! Consequuntur nobis molestias quasi similique autem qui nulla. Ipsum amet aut consectetur tenetur ratione, enim, voluptatibus consequuntur quo delectus laboriosam autem quod eaque animi labore. Accusamus perferendis tenetur esse dolores sit nostrum maiores alias rem, assumenda fuga ab, eum quibusdam ex, sapiente perspiciatis? Inventore eius quidem maxime, molestias praesentium iure est ad ab similique ratione minima ipsa quibusdam veniam id at repudiandae odio modi. Alias quam enim vero consectetur esse natus tempora molestiae odit ratione, voluptas, aspernatur eius architecto sint expedita maxime voluptatibus dolore nisi suscipit sequi necessitatibus explicabo minus sunt? Adipisci molestiae eligendi pariatur corporis recusandae! Quos, repellendus quaerat libero eius quibusdam, sint ducimus animi, recusandae assumenda blanditiis aut labore saepe ipsa iure sequi veniam corrupti?"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer position="bottom-center" />
        </div>
    </div>
  )
}

export default WorkShop
