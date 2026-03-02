import React from "react";

interface Tour {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

const tours: Tour[] = [
  {
    id: 1,
    title: "Golden Monkey Trekking",
    description: "Golden monkeys trekking takes place in Volcanoes national park and at the same time 7:00 just like gorillas. These rare species are also listed as endangered – and Volcanoes national park currently has two habituated golden monkeys' troops that are available for visiting by tourists in the park, both of which make about 80 members. Golden monkeys in Rwanda live in the bamboo vegetation towards the base of the volcanoes and habituation has helped them to overcome their initial shyness to accept their daily visit by researchers and tourists. Trekking golden monkeys and gorillas is a similar experience – in a small group of no more than eight people, and you can spend one hour with the monkeys once you find them. The endangered species are very active creatures, and jump from tree to tree which is really interesting and a little difficult to photograph!",
    image: "/images/golden.jpg",
    price: "$200/person"
  },
  {
    id: 2,
    title: "Dian Fossey Tomb",
    description: "Visit the grave of the legendary primatologist Dian Fossey, whose work with mountain gorillas was immortalized in the film 'Gorillas in the Mist'. This trek takes you through the beautiful Volcanoes National Park to her research center, Karisoke, and to her final resting place among the gorillas she loved and protected. Learn about her remarkable conservation legacy and the continuing efforts to protect these magnificent creatures.",
    image: "/images/dian.jpg",
    price: "$250/person"
  },
  {
    id: 3,
    title: "Kings Palace Museum - Nyanza",
    description: "Step back in time at the Kings Palace Museum in Nyanza District, the traditional seat of Rwanda's monarchy. Explore the meticulously reconstructed royal residence with its impressive traditional architecture, learn about the daily life of Rwanda's kings, and see the famous long-horned Inyambo cattle, descendants of the king's herd. This cultural treasure offers fascinating insights into Rwanda's pre-colonial history and royal traditions.",
    image: "/images/palace.jpg",
    price: "$100/person"
  },
  {
    id: 4,
    title: "Pilgrimage to Kibeho",
    description: "Visit the sacred site of Kibeho, where the Blessed Virgin Mary appeared to three young women in 1981. Experience the spiritual atmosphere of this significant religious destination that has drawn pilgrims from around the world.",
    image: "/images/pg.jpg",
    price: "$100/person"
  },
  {
    id: 5,
    title: "Akagera National Park Safari",
    description: "Akagera has an inspiring conservation story as it is now home to lions and rhinos, and is the only Big Five park in the country. Just two hours' drive from Kigali, it is a beautiful and convenient savannah landscape to visit, and an easy site to add on to before or after visiting the gorillas. For one park, the diversity of habitats is unique including lakes, marshes, savannah, mountains and woodland makes for spectacular scenery. A birders delight, Akagera offers an exceptional birding experience with more than 482 bird species documented including the rare and prehistoric shoebill and some Lake Victoria endemics. Tourism is growing. A Day visitor complex with coffee shop and gift shop has been developed in the south of the park. Accommodation options are also available including the park-operated Ruzizi Tented Lodge and Karenge Bush Camp. Other options include luxurious Magashi Camp, Akagera Game lodge and four campsites. Proceeds from tourism revenue are invested back into the park and the local community.",
    image: "/images/lake-kivu.jpg",
    price: "$200/person"
  },
  {
    id: 6,
    title: "Campaign Against Genocide & Richard Kandt Museums",
    description: "Visit these two significant museums in Kigali. The Campaign Against Genocide Museum showcases Rwanda's liberation struggle through powerful exhibitions and memorials, while the Richard Kandt Museum, former residence of the first German colonial resident, offers insights into Rwanda's colonial history and natural science.",
    image: "/images/lake-kivu.jpg",
    price: "$50/person"
  },
   {
    id: 7,
    title: "Kigali City Walking Tour",
    description: "Explore Kigali's highlights including the iconic KIGALI sign monument, Kigali Heights, Belgian Peacekeeper Memorial, and vibrant local art scenes. Experience the cleanest capital in Africa with its beautiful hills, friendly locals, and modern architecture seamlessly blending with traditional elements.",
    image: "/images/lake-kivu.jpg",
    price: "$20/person"
  },
  {
    id: 8,
    title: "Museums of Rwanda Tour",
    description: "VVisit the Ethnographic Museum and King's Palace Museum to explore Rwanda's rich cultural heritage.",
    image: "/images/lake-kivu.jpg",
    price: "$50/person"
  }
];

export default function TourPackages() {
  return (
    <section className="section-padding">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Tour Packages</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {tours.map((tour) => (
          <div key={tour.id} className="glass-card p-6 fade-in">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-48 object-cover rounded-base mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
            <p className="mb-4">{tour.description}</p>
            <p className="font-bold text-lg">{tour.price}</p>
            <a
              href="#booking"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
