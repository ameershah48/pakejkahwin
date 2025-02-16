import { Service } from "./types";

export const locations = [
  {
    state: "Selangor",
    district: [
      "Ampang",
      "Bandar Baru Bangi",
      "Bandar Puncak Alam",
      "Bangi",
      "Banting",
      "Batang Berjuntai",
      "Batang Kali",
      "Batu Caves",
      "Beranang",
      "Bukit Rotan",
      "Cheras",
      "Cyberjaya",
      "Dengkil",
      "Gombak",
      "Hulu Langat",
      "Jenjarom",
      "Jeram",
      "Kajang",
      "Kapar",
      "Kerling",
      "Klang",
      "Klia",
      "Kuala Kubu Baru",
      "Kuala Selangor",
      "Pelabuhan Klang",
      "Petaling Jaya",
      "Puchong",
      "Pulau Carey",
      "Pulau Indah",
      "Pulau Ketam",
      "Rasa",
      "Rawang",
      "Sabak Bernam",
      "Sekinchan",
      "Semenyih",
      "Sepang",
      "Serdang",
      "Serendah",
      "Seri Kembangan",
      "Shah Alam",
      "Subang Airport",
      "Subang Jaya",
      "Sungai Ayer Tawar",
      "Sungai Besar",
      "Sungai Buloh",
      "Sungai Pelek",
      "Tanjong Karang",
      "Tanjong Sepat",
      "Telok Panglima Garang",
    ],
  },
  {
    state: "WP Kuala Lumpur",
    district: ["Kuala Lumpur", "Setapak"],
  },
  {
    state: "WP Putrajaya",
    district: ["Putrajaya"],
  },
  {
    state: "Johor",
    district: [
      "Ayer Baloi",
      "Ayer Hitam",
      "Ayer Tawar 2",
      "Bandar Penawar",
      "Bandar Tenggara",
      "Batu Anam",
      "Batu Pahat",
      "Bekok",
      "Benut",
      "Bukit Gambir",
      "Bukit Pasir",
      "Chaah",
      "Endau",
      "Gelang Patah",
      "Gerisek",
      "Gugusan Taib Andak",
      "Jementah",
      "Johor Bahru",
      "Kahang",
      "Kluang",
      "Kota Tinggi",
      "Kukup",
      "Kulai",
      "Labis",
      "Layang-Layang",
      "Masai",
      "Mersing",
      "Muar",
      "Nusajaya",
      "Pagoh",
      "Paloh",
      "Panchor",
      "Parit Jawa",
      "Parit Raja",
      "Parit Sulong",
      "Pasir Gudang",
      "Pekan Nenas",
      "Pengerang",
      "Pontian",
      "Rengam",
      "Rengit",
      "Segamat",
      "Semerah",
      "Senai",
      "Senggarang",
      "Seri Gading",
      "Seri Medan",
      "Simpang Rengam",
      "Sungai Mati",
      "Tangkak",
      "Tioman",
      "Ulu Choh",
      "Ulu Tiram",
      "Yong Peng",
    ],
  },
  {
    state: "Kedah",
    district: [
      "Alor Setar",
      "Ayer Hitam",
      "Baling",
      "Bandar Baharu",
      "Bandar Bahru",
      "Bedong",
      "Bukit Kayu Hitam",
      "Changloon",
      "Gurun",
      "Jeniang",
      "Jitra",
      "Karangan",
      "Kepala Batas",
      "Kodiang",
      "Kota Kuala Muda",
      "Kota Sarang Semut",
      "Kuala Kedah",
      "Kuala Ketil",
      "Kuala Nerang",
      "Kuala Pegang",
      "Kulim",
      "Kupang",
      "Langgar",
      "Langkawi",
      "Lunas",
      "Merbok",
      "Padang Serai",
      "Pendang",
      "Pokok Sena",
      "Serdang",
      "Sik",
      "Simpang Empat",
      "Sungai Petani",
      "Yan",
    ],
  },
  {
    state: "Kelantan",
    district: [
      "Ayer Lanas",
      "Bachok",
      "Cherang Ruku",
      "Dabong",
      "Gua Musang",
      "Jeli",
      "Kem Desa Pahlawan",
      "Ketereh",
      "Kota Bharu",
      "Kuala Balah",
      "Kuala Krai",
      "Machang",
      "Melor",
      "Pasir Mas",
      "Pasir Puteh",
      "Pulai Chondong",
      "Rantau Panjang",
      "Selising",
      "Tanah Merah",
      "Temangan",
      "Tumpat",
      "Wakaf Bharu",
    ],
  },
  {
    state: "Melaka",
    district: [
      "Alor Gajah",
      "Asahan",
      "Ayer Keroh",
      "Bemban",
      "Durian Tunggal",
      "Jasin",
      "Kem Trendak",
      "Kuala Sungai Baru",
      "Lubok China",
      "Masjid Tanah",
      "Melaka",
      "Merlimau",
      "Selandar",
      "Sungai Rambai",
      "Sungai Udang",
      "Tanjong Kling",
    ],
  },
  {
    state: "Negeri Sembilan",
    district: [
      "Bahau",
      "Bandar Baru Enstek",
      "Bandar Baru Serting",
      "Bandar Seri Jempol",
      "Batu Kikir",
      "Gemas",
      "Gemencheh",
      "Johol",
      "Kota",
      "Kuala Klawang",
      "Kuala Pilah",
      "Labu",
      "Linggi",
      "Mantin",
      "Nilai",
      "Port Dickson",
      "Pusat  Bandar Palong",
      "Rantau",
      "Rembau",
      "Rompin",
      "Seremban",
      "Si Rusa",
      "Simpang Durian",
      "Simpang Pertang",
      "Tampin",
      "Tanjong Ipoh",
    ],
  },
  {
    state: "Pahang",
    district: [
      "Balok",
      "Bandar Pusat  Jengka",
      "Bandar Tun Abdul Razak",
      "Benta",
      "Bentong",
      "Brinchang",
      "Bukit Fraser",
      "Bukit Goh",
      "Chenor",
      "Chini",
      "Damak",
      "Dong",
      "Gambang",
      "Genting Highlands",
      "Jaya Gading",
      "Jerantut",
      "Karak",
      "Kemayan",
      "Kuala Krau",
      "Kuala Lipis",
      "Kuala Rompin",
      "Kuantan",
      "Lanchang",
      "Lurah Bilut",
      "Maran",
      "Mentakab",
      "Muadzam Shah",
      "Padang Tengku",
      "Pekan",
      "Raub",
      "Ringlet",
      "Sega",
      "Sungai Koyan",
      "Sungai Lembing",
      "Sungai Ruan",
      "Tanah Rata",
      "Temerloh",
      "Triang",
    ],
  },
  {
    state: "Perak",
    district: [
      "Ayer Tawar",
      "Bagan Datoh",
      "Bagan Serai",
      "Bandar Seri Iskandar",
      "Batu Gajah",
      "Batu Kurau",
      "Behrang Stesen",
      "Bidor",
      "Bota",
      "Bruas",
      "Changkat Jering",
      "Changkat Keruing",
      "Chemor",
      "Chenderiang",
      "Chenderong Balai",
      "Chikus",
      "Enggor",
      "Gerik",
      "Gopeng",
      "Hutan Melintang",
      "Intan",
      "Ipoh",
      "Jeram",
      "Kampar",
      "Kampung Gajah",
      "Kampung Kepayang",
      "Kamunting",
      "Kuala Kangsar",
      "Kuala Kurau",
      "Kuala Sepetang",
      "Lambor Kanan",
      "Langkap",
      "Lenggong",
      "Lumut",
      "Malim Nawar",
      "Mambang Di Awan",
      "Manong",
      "Matang",
      "Padang Rengas",
      "Pangkor",
      "Pantai Remis",
      "Parit",
      "Parit Buntar",
      "Pengkalan Hulu",
      "Pusing",
      "Rantau Panjang",
      "Sauk",
      "Selama",
      "Selekoh",
      "Seri Manjong",
      "Simpang",
      "Simpang Ampat Semanggol",
      "Sitiawan",
      "Slim River",
      "Sungai Siput",
      "Sungai Sumun",
      "Sungkai",
      "Taiping",
      "Tanjong Malim",
      "Tanjong Piandang",
      "Tanjong Rambutan",
      "Tanjong Tualang",
      "Tapah",
      "Tapah Road",
      "Teluk Intan",
      "Temoh",
      "Tldm Lumut",
      "Trolak",
      "Trong",
      "Tronoh",
      "Ulu Bernam",
      "Ulu Kinta",
    ],
  },
  {
    state: "Perlis",
    district: [
      "Arau",
      "Kaki Bukit",
      "Kangar",
      "Kuala Perlis",
      "Padang Besar",
      "Simpang Ampat",
    ],
  },
  {
    state: "Pulau Pinang",
    district: [
      "Ayer Itam",
      "Balik Pulau",
      "Batu Ferringhi",
      "Batu Maung",
      "Bayan Lepas",
      "Bukit Mertajam",
      "Butterworth",
      "Gelugor",
      "Jelutong",
      "Kepala Batas",
      "Kubang Semang",
      "Nibong Tebal",
      "Penaga",
      "Penang Hill",
      "Perai",
      "Permatang Pauh",
      "Pulau Pinang",
      "Simpang Ampat",
      "Sungai Jawi",
      "Tanjong Bungah",
      "Tasek Gelugor",
      "Usm Pulau Pinang",
    ],
  },
  {
    state: "Sarawak",
    district: [
      "Asajaya",
      "Balingian",
      "Baram",
      "Bau",
      "Bekenu",
      "Belaga",
      "Belawai",
      "Betong",
      "Bintangor",
      "Bintulu",
      "Dalat",
      "Daro",
      "Debak",
      "Engkilili",
      "Julau",
      "Kabong",
      "Kanowit",
      "Kapit",
      "Kota Samarahan",
      "Kuching",
      "Lawas",
      "Limbang",
      "Lingga",
      "Long Lama",
      "Lubok Antu",
      "Lundu",
      "Lutong",
      "Matu",
      "Miri",
      "Mukah",
      "Nanga Medamit",
      "Niah",
      "Pusa",
      "Roban",
      "Saratok",
      "Sarikei",
      "Sebauh",
      "Sebuyau",
      "Serian",
      "Sibu",
      "Siburan",
      "Simunjan",
      "Song",
      "Spaoh",
      "Sri Aman",
      "Sundar",
      "Tatau",
    ],
  },
  {
    state: "Terengganu",
    district: [
      "Ajil",
      "Al Muktatfi Billah Shah",
      "Ayer Puteh",
      "Bukit Besi",
      "Bukit Payong",
      "Ceneh",
      "Chalok",
      "Cukai",
      "Dungun",
      "Jerteh",
      "Kampung Raja",
      "Kemasek",
      "Kerteh",
      "Ketengah Jaya",
      "Kijal",
      "Kuala Berang",
      "Kuala Besut",
      "Kuala Terengganu",
      "Marang",
      "Paka",
      "Permaisuri",
      "Sungai Tong",
    ],
  },
  {
    state: "WP Labuan",
    district: ["Labuan"],
  },
  {
    state: "Sabah",
    district: [
      "Beaufort",
      "Beluran",
      "Beverly",
      "Bongawan",
      "Inanam",
      "Keningau",
      "Kota Belud",
      "Kota Kinabalu",
      "Kota Kinabatangan",
      "Kota Marudu",
      "Kuala Penyu",
      "Kudat",
      "Kunak",
      "Lahad Datu",
      "Likas",
      "Membakut",
      "Menumbok",
      "Nabawan",
      "Pamol",
      "Papar",
      "Penampang",
      "Putatan",
      "Ranau",
      "Sandakan",
      "Semporna",
      "Sipitang",
      "Tambunan",
      "Tamparuli",
      "Tanjung Aru",
      "Tawau",
      "Tenom",
      "Tuaran",
    ],
  },
];

export const servicesType = [
  { id: 1, label: "Venue", color: "green" },
  { id: 2, label: "Makeup Artist", color: "purple" },
  { id: 3, label: "Photographer", color: "blue" },
  { id: 4, label: "Dress Rental", color: "orange" },
  { id: 5, label: "Door Gift", color: "teal" },
  { id: 6, label: "Pelamin & Deco", color: "fuchsia" },
  { id: 7, label: "Softwares", color: "yellow" },
  { id: 8, label: "Invitation Card", color: "sky" },
  // { id: 9, label: "Entertainment", color: "rose" },
] as Service[];
