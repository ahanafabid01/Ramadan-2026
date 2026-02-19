const BANGLADESH_TIMEZONE = "Asia/Dhaka";
const BANGLADESH_UTC_OFFSET_MINUTES = 6 * 60;
const BANGLADESH_UTC_OFFSET_MS = BANGLADESH_UTC_OFFSET_MINUTES * 60 * 1000;

// Base schedule is Dhaka reference; district-level shifts are applied per zilla.
const baseRamadanData = [
  { day: 1, date: "2026-02-19", sehri: "5:12", fajr: "5:15", iftar: "5:58" },
  { day: 2, date: "2026-02-20", sehri: "5:11", fajr: "5:14", iftar: "5:58" },
  { day: 3, date: "2026-02-21", sehri: "5:11", fajr: "5:14", iftar: "5:59" },
  { day: 4, date: "2026-02-22", sehri: "5:10", fajr: "5:13", iftar: "5:59" },
  { day: 5, date: "2026-02-23", sehri: "5:09", fajr: "5:12", iftar: "6:00" },
  { day: 6, date: "2026-02-24", sehri: "5:08", fajr: "5:11", iftar: "6:00" },
  { day: 7, date: "2026-02-25", sehri: "5:08", fajr: "5:11", iftar: "6:01" },
  { day: 8, date: "2026-02-26", sehri: "5:07", fajr: "5:10", iftar: "6:01" },
  { day: 9, date: "2026-02-27", sehri: "5:06", fajr: "5:09", iftar: "6:02" },
  { day: 10, date: "2026-02-28", sehri: "5:05", fajr: "5:08", iftar: "6:02" },
  { day: 11, date: "2026-03-01", sehri: "5:05", fajr: "5:08", iftar: "6:03" },
  { day: 12, date: "2026-03-02", sehri: "5:04", fajr: "5:07", iftar: "6:03" },
  { day: 13, date: "2026-03-03", sehri: "5:03", fajr: "5:06", iftar: "6:04" },
  { day: 14, date: "2026-03-04", sehri: "5:02", fajr: "5:05", iftar: "6:04" },
  { day: 15, date: "2026-03-05", sehri: "5:01", fajr: "5:04", iftar: "6:05" },
  { day: 16, date: "2026-03-06", sehri: "5:00", fajr: "5:03", iftar: "6:05" },
  { day: 17, date: "2026-03-07", sehri: "4:59", fajr: "5:02", iftar: "6:06" },
  { day: 18, date: "2026-03-08", sehri: "4:58", fajr: "5:01", iftar: "6:06" },
  { day: 19, date: "2026-03-09", sehri: "4:57", fajr: "5:00", iftar: "6:07" },
  { day: 20, date: "2026-03-10", sehri: "4:57", fajr: "4:59", iftar: "6:07" },
  { day: 21, date: "2026-03-11", sehri: "4:56", fajr: "4:58", iftar: "6:07" },
  { day: 22, date: "2026-03-12", sehri: "4:55", fajr: "4:57", iftar: "6:08" },
  { day: 23, date: "2026-03-13", sehri: "4:54", fajr: "4:57", iftar: "6:08" },
  { day: 24, date: "2026-03-14", sehri: "4:53", fajr: "4:56", iftar: "6:09" },
  { day: 25, date: "2026-03-15", sehri: "4:52", fajr: "4:55", iftar: "6:09" },
  { day: 26, date: "2026-03-16", sehri: "4:51", fajr: "4:54", iftar: "6:10" },
  { day: 27, date: "2026-03-17", sehri: "4:50", fajr: "4:53", iftar: "6:10" },
  { day: 28, date: "2026-03-18", sehri: "4:49", fajr: "4:52", iftar: "6:10" },
  { day: 29, date: "2026-03-19", sehri: "4:48", fajr: "4:50", iftar: "6:11" },
  { day: 30, date: "2026-03-20", sehri: "4:47", fajr: "4:49", iftar: "6:11" },
];

const divisionZillaAssets = {
  "Barishal Division": [
    { name: "Barishal Zilla", image: "Barishal Division/Barishal Zilla.jpg" },
    { name: "Borguna Zilla", image: "Barishal Division/Borguna Zilla.jpg" },
    { name: "Jhalkathi Zilla", image: "Barishal Division/Jhalkathi Zilla.jpg" },
    { name: "Pirojpur Zilla", image: "Barishal Division/Pirojpur Zilla.jpg" },
    { name: "Potuakhali Zilla", image: "Barishal Division/Potuakhali Zilla.jpg" },
    { name: "Vola Zilla", image: "Barishal Division/Vola Zilla.jpg" },
  ],
  "Chittagong Division": [
    { name: "Bandarban Zilla", image: "Chittagong Division/Bandarban Zilla.jpg" },
    { name: "Bramhanbaria Zilla", image: "Chittagong Division/Bramhanbaria Zilla.jpg" },
    { name: "Chadpur Zilla", image: "Chittagong Division/Chadpur Zilla.jpg" },
    { name: "Chittagong Zilla", image: "Chittagong Division/Chittagong Zilla.jpg" },
    { name: "Cox Bazar Zilla", image: "Chittagong Division/Cox Bazar Zilla.jpg" },
    { name: "Cumilla Zilla", image: "Chittagong Division/Cumilla Zilla.jpg" },
    { name: "Feni Zilla", image: "Chittagong Division/Feni Zilla.jpg" },
    { name: "Khagrachori Zilla", image: "Chittagong Division/Khagrachori Zilla.jpg" },
    { name: "Lokkhipur Zilla", image: "Chittagong Division/Lokkhipur Zilla.jpg" },
    { name: "Noakhali Zilla", image: "Chittagong Division/Noakhali Zilla.jpg" },
    { name: "Rangamati Zilla", image: "Chittagong Division/Rangamati Zilla.jpg" },
  ],
  "Dhaka Division": [
    { name: "Dhaka Zilla", image: "Dhaka Division/Dhaka Zilla.jpg" },
    { name: "Faridpur Zilla", image: "Dhaka Division/Faridpur Zilla.jpg" },
    { name: "Gazipur Zilla", image: "Dhaka Division/Gazipur Zilla.jpg" },
    { name: "Gopalganj Zilla", image: "Dhaka Division/Gopalganj Zilla.jpg" },
    { name: "Kisoreganj Zilla", image: "Dhaka Division/Kisoreganj Zilla.jpg" },
    { name: "Madaripur Zilla", image: "Dhaka Division/Madaripur Zilla.jpg" },
    { name: "Manikganj Zilla", image: "Dhaka Division/Manikganj Zilla.jpg" },
    { name: "Munsiganj Zilla", image: "Dhaka Division/Munsiganj Zilla.jpg" },
    { name: "Narayanganj Zilla", image: "Dhaka Division/Narayanganj Zilla.jpg" },
    { name: "Narsingdi Zilla", image: "Dhaka Division/Narsingdi Zilla.jpg" },
    { name: "Rajbari Zilla", image: "Dhaka Division/Rajbari Zilla.jpg" },
    { name: "Sariatpur Zilla", image: "Dhaka Division/Sariatpur Zilla.jpg" },
    { name: "Tangail Zilla", image: "Dhaka Division/Tangail Zilla.jpg" },
  ],
  "Khulna Division": [
    { name: "Bagerhat Zilla", image: "Khulna Division/Bagerhat Zilla.jpg" },
    { name: "Cuyadanga Zilla", image: "Khulna Division/Cuyadanga Zilla.jpg" },
    { name: "Jessore Zilla", image: "Khulna Division/Jessore Zilla.jpg" },
    { name: "Jhinaidah Zilla", image: "Khulna Division/Jhinaidah Zilla.jpg" },
    { name: "Khulna Zilla", image: "Khulna Division/Khulna Zilla.jpg" },
    { name: "Kustia Zilla", image: "Khulna Division/Kustia Zilla.jpg" },
    { name: "Magura Zilla", image: "Khulna Division/Magura Zilla.jpg" },
    { name: "Meherpur Zilla", image: "Khulna Division/Meherpur Zilla.jpg" },
    { name: "Norail Zilla", image: "Khulna Division/Norail Zilla.jpg" },
    { name: "Satkhira Zilla", image: "Khulna Division/Satkhira Zilla.jpg" },
  ],
  "Mymensingh division": [
    { name: "Jamalpur Zilla", image: "Mymensingh division/Jamalpur Zilla.jpg" },
    { name: "Mymensingh Zilla", image: "Mymensingh division/Mymensingh Zilla.jpg" },
    { name: "Netrokona Zilla", image: "Mymensingh division/Netrokona Zilla.jpg" },
    { name: "Sherpur Zilla", image: "Mymensingh division/Sherpur Zilla.jpg" },
  ],
  "Rajshahi Division": [
    { name: "Bogura Zilla", image: "Rajshahi Division/Bogura Zilla.jpg" },
    { name: "Capainababganj Zilla", image: "Rajshahi Division/Capainababganj Zilla.jpg" },
    { name: "Joypurhat Zilla", image: "Rajshahi Division/Joypurhat Zilla.jpg" },
    { name: "Natore Zilla", image: "Rajshahi Division/Natore Zilla.jpg" },
    { name: "Nouga Zilla", image: "Rajshahi Division/Nouga Zilla.jpg" },
    { name: "Pabna Zilla", image: "Rajshahi Division/Pabna Zilla.jpg" },
    { name: "Rajshahi Zilla", image: "Rajshahi Division/Rajshahi Zilla.jpg" },
    { name: "Sirajganj Zilla", image: "Rajshahi Division/Sirajganj Zilla.jpg" },
  ],
  "Rangpur Division": [
    { name: "Dinajpur Zilla", image: "Rangpur Division/Dinajpur Zilla.jpg" },
    { name: "Gaibandha Zilla", image: "Rangpur Division/Gaibandha Zilla.jpg" },
    { name: "Kurigram Zilla", image: "Rangpur Division/Kurigram Zilla.jpg" },
    { name: "Lalmanirhat Zilla", image: "Rangpur Division/Lalmanirhat Zilla.jpg" },
    { name: "Nilfamari Zilla", image: "Rangpur Division/Nilfamari Zilla.jpg" },
    { name: "Panchgar Zilla", image: "Rangpur Division/Panchgar Zilla.jpg" },
    { name: "Rangpur Zilla", image: "Rangpur Division/Rangpur Zilla.jpg" },
    { name: "Thakurgao Zilla", image: "Rangpur Division/Thakurgao Zilla.jpg" },
  ],
  "Sylhet Division": [
    { name: "Hobiganj Zilla", image: "Sylhet Division/Hobiganj Zilla.jpg" },
    { name: "Moulovibazar Zilla", image: "Sylhet Division/Moulovibazar Zilla.jpg" },
    { name: "Sunamganj Zilla", image: "Sylhet Division/Sunamganj Zilla.jpg" },
    { name: "Sylhet Zilla", image: "Sylhet Division/Sylhet Zilla.jpg" },
  ],
};

const districtLongitudes = {
  Bagerhat: 89.785938,
  Bandarban: 92.2183773,
  Barguna: 90.1121,
  Barishal: 90.3535,
  Bhola: 90.648179,
  Bogura: 89.377755,
  Brahmanbaria: 91.1119286,
  Chandpur: 90.6712912,
  Chattogram: 91.834073,
  Chuadanga: 88.841841,
  "Cox's Bazar": 92.0058,
  Cumilla: 91.1788135,
  Dhaka: 90.4111451,
  Dinajpur: 88.6354504,
  Faridpur: 89.8429406,
  Feni: 91.3976,
  Gaibandha: 89.528088,
  Gazipur: 90.4264283,
  Gopalganj: 89.8266059,
  Habiganj: 91.41553,
  Jamalpur: 89.937775,
  Jashore: 89.2081126,
  Jhalokati: 90.1987,
  Jhenaidah: 89.1539213,
  Joypurhat: 89.0227,
  Khagrachari: 91.984663,
  Khulna: 89.568679,
  Kishoreganj: 90.776575,
  Kurigram: 89.636174,
  Kushtia: 89.120482,
  Lakshmipur: 90.841184,
  Lalmonirhat: 89.2847,
  Madaripur: 90.1896805,
  Magura: 89.419956,
  Manikganj: 90.0047,
  Maulvibazar: 91.777417,
  Meherpur: 88.631821,
  Munshiganj: 90.5305,
  Mymensingh: 90.4203,
  Naogaon: 88.9318,
  Narail: 89.512672,
  Narayanganj: 90.496482,
  Narsingdi: 90.71541,
  Natore: 89.000282,
  Nawabganj: 88.2775122,
  Netrokona: 90.727887,
  Nilphamari: 88.856006,
  Noakhali: 91.099398,
  Pabna: 89.233645,
  Panchagarh: 88.5541606,
  Patuakhali: 90.3298712,
  Pirojpur: 89.972,
  Rajbari: 89.6444665,
  Rajshahi: 88.6042,
  Rangamati: 92.2985,
  Rangpur: 89.244462,
  Satkhira: 89.0705,
  Shariatpur: 90.4348,
  Sherpur: 90.0152966,
  Sirajgonj: 89.7006815,
  Sunamganj: 91.3950115,
  Sylhet: 91.8697894,
  Tangail: 89.9167,
  Thakurgaon: 88.4616834,
};

// Folder names include a few transliteration variants; normalize to coordinate dataset keys.
const districtNameFixes = {
  Borguna: "Barguna",
  Jhalkathi: "Jhalokati",
  Potuakhali: "Patuakhali",
  Vola: "Bhola",
  Bramhanbaria: "Brahmanbaria",
  Chadpur: "Chandpur",
  Chittagong: "Chattogram",
  "Cox Bazar": "Cox's Bazar",
  Khagrachori: "Khagrachari",
  Lokkhipur: "Lakshmipur",
  Kisoreganj: "Kishoreganj",
  Munsiganj: "Munshiganj",
  Sariatpur: "Shariatpur",
  Cuyadanga: "Chuadanga",
  Jessore: "Jashore",
  Jhinaidah: "Jhenaidah",
  Kustia: "Kushtia",
  Norail: "Narail",
  Capainababganj: "Nawabganj",
  Nouga: "Naogaon",
  Sirajganj: "Sirajgonj",
  Lalmanirhat: "Lalmonirhat",
  Nilfamari: "Nilphamari",
  Panchgar: "Panchagarh",
  Thakurgao: "Thakurgaon",
  Hobiganj: "Habiganj",
  Moulovibazar: "Maulvibazar",
};

const divisionDisplayNameFixes = {
  "Mymensingh division": "Mymensingh Division",
};

// Explicit corrections from the provided district timetable images.
const zillaTimeOverrides = {
  "Mymensingh Zilla": { sehri: -1, fajr: -1, iftar: -1, source: "image" },
  "Sherpur Zilla": { sehri: -2, fajr: -2, iftar: -1, source: "image" },
};

const zillaDailyTimeOverrides = {
  "Jamalpur Zilla": [
    { sehri: "5:14", fajr: "5:17", iftar: "5:58" },
    { sehri: "5:13", fajr: "5:16", iftar: "5:59" },
    { sehri: "5:12", fajr: "5:15", iftar: "5:59" },
    { sehri: "5:11", fajr: "5:15", iftar: "6:00" },
    { sehri: "5:11", fajr: "5:14", iftar: "6:00" },
    { sehri: "5:10", fajr: "5:13", iftar: "6:01" },
    { sehri: "5:09", fajr: "5:12", iftar: "6:02" },
    { sehri: "5:08", fajr: "5:12", iftar: "6:02" },
    { sehri: "5:07", fajr: "5:11", iftar: "6:03" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:03" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:04" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:04" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:05" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:05" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:06" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:06" },
    { sehri: "5:00", fajr: "5:04", iftar: "6:07" },
    { sehri: "4:59", fajr: "5:03", iftar: "6:07" },
    { sehri: "4:58", fajr: "5:02", iftar: "6:08" },
    { sehri: "4:57", fajr: "5:01", iftar: "6:08" },
    { sehri: "4:56", fajr: "5:00", iftar: "6:09" },
    { sehri: "4:55", fajr: "4:59", iftar: "6:09" },
    { sehri: "4:54", fajr: "4:58", iftar: "6:10" },
    { sehri: "4:53", fajr: "4:57", iftar: "6:10" },
    { sehri: "4:52", fajr: "4:56", iftar: "6:11" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:11" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:11" },
    { sehri: "4:49", fajr: "5:52", iftar: "6:12" },
    { sehri: "4:48", fajr: "4:51", iftar: "6:12" },
    { sehri: "4:47", fajr: "4:50", iftar: "6:13" },
  ],
  "Mymensingh Zilla": [
    { sehri: "5:11", fajr: "5:15", iftar: "5:57" },
    { sehri: "5:10", fajr: "5:14", iftar: "5:57" },
    { sehri: "5:10", fajr: "5:14", iftar: "5:58" },
    { sehri: "5:09", fajr: "5:13", iftar: "5:58" },
    { sehri: "5:08", fajr: "5:12", iftar: "5:59" },
    { sehri: "5:07", fajr: "5:11", iftar: "5:59" },
    { sehri: "5:07", fajr: "5:11", iftar: "6:00" },
    { sehri: "5:06", fajr: "5:10", iftar: "6:01" },
    { sehri: "5:05", fajr: "5:09", iftar: "6:01" },
    { sehri: "5:04", fajr: "5:08", iftar: "6:02" },
    { sehri: "5:03", fajr: "5:07", iftar: "6:02" },
    { sehri: "5:02", fajr: "5:06", iftar: "6:03" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:03" },
    { sehri: "5:01", fajr: "5:05", iftar: "6:04" },
    { sehri: "5:00", fajr: "5:04", iftar: "6:04" },
    { sehri: "4:59", fajr: "5:03", iftar: "6:05" },
    { sehri: "4:58", fajr: "5:02", iftar: "6:05" },
    { sehri: "4:57", fajr: "5:01", iftar: "6:06" },
    { sehri: "4:56", fajr: "5:00", iftar: "6:06" },
    { sehri: "4:55", fajr: "4:59", iftar: "6:07" },
    { sehri: "4:54", fajr: "4:58", iftar: "6:07" },
    { sehri: "4:53", fajr: "4:57", iftar: "6:07" },
    { sehri: "4:52", fajr: "4:56", iftar: "6:08" },
    { sehri: "4:51", fajr: "4:55", iftar: "6:08" },
    { sehri: "4:50", fajr: "4:54", iftar: "6:09" },
    { sehri: "4:49", fajr: "4:53", iftar: "6:09" },
    { sehri: "4:48", fajr: "4:52", iftar: "6:10" },
    { sehri: "4:47", fajr: "4:51", iftar: "6:10" },
    { sehri: "4:46", fajr: "4:50", iftar: "6:11" },
    { sehri: "4:45", fajr: "4:49", iftar: "6:11" },
  ],
  "Netrokona Zilla": [
    { sehri: "5:09", fajr: "5:14", iftar: "5:55" },
    { sehri: "5:09", fajr: "5:13", iftar: "5:55" },
    { sehri: "5:08", fajr: "5:12", iftar: "5:56" },
    { sehri: "5:07", fajr: "5:11", iftar: "5:57" },
    { sehri: "5:06", fajr: "5:11", iftar: "5:57" },
    { sehri: "5:06", fajr: "5:10", iftar: "5:58" },
    { sehri: "5:05", fajr: "5:09", iftar: "5:58" },
    { sehri: "5:04", fajr: "5:08", iftar: "5:59" },
    { sehri: "5:03", fajr: "5:07", iftar: "5:59" },
    { sehri: "5:02", fajr: "5:07", iftar: "6:00" },
    { sehri: "5:02", fajr: "5:06", iftar: "6:00" },
    { sehri: "5:01", fajr: "5:05", iftar: "6:01" },
    { sehri: "5:00", fajr: "5:04", iftar: "6:01" },
    { sehri: "4:59", fajr: "5:03", iftar: "6:02" },
    { sehri: "4:58", fajr: "5:02", iftar: "6:02" },
    { sehri: "4:57", fajr: "5:01", iftar: "6:03" },
    { sehri: "4:56", fajr: "5:00", iftar: "6:03" },
    { sehri: "4:55", fajr: "4:59", iftar: "6:04" },
    { sehri: "4:54", fajr: "4:58", iftar: "6:04" },
    { sehri: "4:53", fajr: "4:57", iftar: "6:05" },
    { sehri: "4:52", fajr: "4:56", iftar: "6:05" },
    { sehri: "4:51", fajr: "4:55", iftar: "6:06" },
    { sehri: "4:50", fajr: "4:54", iftar: "6:06" },
    { sehri: "4:49", fajr: "4:53", iftar: "6:07" },
    { sehri: "4:48", fajr: "4:52", iftar: "6:07" },
    { sehri: "4:47", fajr: "4:51", iftar: "6:08" },
    { sehri: "4:46", fajr: "4:50", iftar: "6:08" },
    { sehri: "4:45", fajr: "4:49", iftar: "6:09" },
    { sehri: "4:44", fajr: "4:48", iftar: "6:09" },
    { sehri: "4:43", fajr: "4:47", iftar: "6:09" },
  ],
  "Sherpur Zilla": [
    { sehri: "5:13", fajr: "5:16", iftar: "5:57" },
    { sehri: "5:13", fajr: "5:15", iftar: "5:58" },
    { sehri: "5:12", fajr: "5:14", iftar: "5:58" },
    { sehri: "5:11", fajr: "5:14", iftar: "5:59" },
    { sehri: "5:10", fajr: "5:13", iftar: "5:59" },
    { sehri: "5:10", fajr: "5:12", iftar: "6:00" },
    { sehri: "5:09", fajr: "5:11", iftar: "6:01" },
    { sehri: "5:08", fajr: "5:11", iftar: "6:01" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:02" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:02" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:03" },
    { sehri: "5:05", fajr: "5:07", iftar: "6:03" },
    { sehri: "5:04", fajr: "5:06", iftar: "6:04" },
    { sehri: "5:03", fajr: "5:05", iftar: "6:04" },
    { sehri: "5:02", fajr: "5:04", iftar: "6:05" },
    { sehri: "5:01", fajr: "5:03", iftar: "6:05" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:06" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:06" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:07" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:07" },
    { sehri: "4:56", fajr: "4:59", iftar: "6:08" },
    { sehri: "4:55", fajr: "4:58", iftar: "6:08" },
    { sehri: "4:54", fajr: "4:57", iftar: "6:09" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:09" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:10" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:10" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:10" },
    { sehri: "4:49", fajr: "4:51", iftar: "6:11" },
    { sehri: "4:48", fajr: "4:50", iftar: "6:11" },
    { sehri: "4:47", fajr: "4:49", iftar: "6:12" },
  ],

  "Dhaka Zilla": [
    { sehri: "5:12", fajr: "5:15", iftar: "5:58" },
    { sehri: "5:11", fajr: "5:14", iftar: "5:58" },
    { sehri: "5:11", fajr: "5:14", iftar: "5:59" },
    { sehri: "5:10", fajr: "5:13", iftar: "5:59" },
    { sehri: "5:09", fajr: "5:12", iftar: "6:00" },
    { sehri: "5:08", fajr: "5:11", iftar: "6:00" },
    { sehri: "5:08", fajr: "5:11", iftar: "6:01" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:01" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:02" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:02" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:03" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:03" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:04" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:04" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:05" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:05" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:06" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:06" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:07" },
    { sehri: "4:57", fajr: "4:59", iftar: "6:07" },
    { sehri: "4:56", fajr: "4:58", iftar: "6:07" },
    { sehri: "4:55", fajr: "4:57", iftar: "6:08" },
    { sehri: "4:54", fajr: "4:57", iftar: "6:08" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:09" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:09" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:10" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:10" },
    { sehri: "4:49", fajr: "4:52", iftar: "6:10" },
    { sehri: "4:48", fajr: "4:50", iftar: "6:11" },
    { sehri: "4:47", fajr: "4:49", iftar: "6:11" },
  ],
  "Faridpur Zilla": [
    { sehri: "5:13", fajr: "5:17", iftar: "6:00" },
    { sehri: "5:12", fajr: "5:16", iftar: "6:00" },
    { sehri: "5:12", fajr: "5:16", iftar: "6:01" },
    { sehri: "5:11", fajr: "5:15", iftar: "6:01" },
    { sehri: "5:10", fajr: "5:14", iftar: "6:02" },
    { sehri: "5:09", fajr: "5:13", iftar: "6:02" },
    { sehri: "5:09", fajr: "5:13", iftar: "6:03" },
    { sehri: "5:08", fajr: "5:12", iftar: "6:03" },
    { sehri: "5:07", fajr: "5:11", iftar: "6:04" },
    { sehri: "5:06", fajr: "5:10", iftar: "6:04" },
    { sehri: "5:06", fajr: "5:10", iftar: "6:05" },
    { sehri: "5:05", fajr: "5:09", iftar: "6:05" },
    { sehri: "5:04", fajr: "5:08", iftar: "6:06" },
    { sehri: "5:03", fajr: "5:07", iftar: "6:06" },
    { sehri: "5:02", fajr: "5:06", iftar: "6:07" },
    { sehri: "5:01", fajr: "5:05", iftar: "6:07" },
    { sehri: "5:00", fajr: "5:04", iftar: "6:08" },
    { sehri: "4:59", fajr: "5:03", iftar: "6:08" },
    { sehri: "4:58", fajr: "5:02", iftar: "6:09" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:09" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:09" },
    { sehri: "4:56", fajr: "4:59", iftar: "6:10" },
    { sehri: "4:55", fajr: "4:59", iftar: "6:10" },
    { sehri: "4:54", fajr: "4:58", iftar: "6:11" },
    { sehri: "4:53", fajr: "4:57", iftar: "6:11" },
    { sehri: "4:52", fajr: "4:56", iftar: "6:12" },
    { sehri: "4:51", fajr: "4:55", iftar: "6:12" },
    { sehri: "4:50", fajr: "4:54", iftar: "6:12" },
    { sehri: "4:49", fajr: "4:52", iftar: "6:13" },
    { sehri: "4:48", fajr: "4:51", iftar: "6:13" },
  ],
  "Gazipur Zilla": [
    { sehri: "5:11", fajr: "5:14", iftar: "5:57" },
    { sehri: "5:10", fajr: "5:13", iftar: "5:57" },
    { sehri: "5:10", fajr: "5:13", iftar: "5:58" },
    { sehri: "5:09", fajr: "5:12", iftar: "5:58" },
    { sehri: "5:08", fajr: "5:11", iftar: "5:59" },
    { sehri: "5:07", fajr: "5:10", iftar: "5:59" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:00" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:00" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:01" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:01" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:02" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:02" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:03" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:03" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:04" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:04" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:05" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:05" },
    { sehri: "4:56", fajr: "4:59", iftar: "6:06" },
    { sehri: "4:56", fajr: "4:58", iftar: "6:06" },
    { sehri: "4:55", fajr: "4:57", iftar: "6:06" },
    { sehri: "4:54", fajr: "4:56", iftar: "6:07" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:07" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:08" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:08" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:09" },
    { sehri: "4:49", fajr: "4:52", iftar: "6:09" },
    { sehri: "4:48", fajr: "4:51", iftar: "6:09" },
    { sehri: "4:47", fajr: "4:49", iftar: "6:10" },
    { sehri: "4:46", fajr: "4:48", iftar: "6:10" },
  ],
  "Gopalganj Zilla": [
    { sehri: "5:13", fajr: "5:16", iftar: "6:00" },
    { sehri: "5:12", fajr: "5:15", iftar: "6:00" },
    { sehri: "5:12", fajr: "5:15", iftar: "6:01" },
    { sehri: "5:11", fajr: "5:14", iftar: "6:01" },
    { sehri: "5:10", fajr: "5:13", iftar: "6:02" },
    { sehri: "5:09", fajr: "5:12", iftar: "6:02" },
    { sehri: "5:09", fajr: "5:12", iftar: "6:03" },
    { sehri: "5:08", fajr: "5:11", iftar: "6:03" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:04" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:04" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:05" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:05" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:06" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:06" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:07" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:07" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:08" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:08" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:09" },
    { sehri: "4:58", fajr: "5:00", iftar: "6:09" },
    { sehri: "4:57", fajr: "4:59", iftar: "6:09" },
    { sehri: "4:56", fajr: "4:58", iftar: "6:10" },
    { sehri: "4:55", fajr: "4:58", iftar: "6:10" },
    { sehri: "4:54", fajr: "4:57", iftar: "6:11" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:11" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:12" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:12" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:12" },
    { sehri: "4:49", fajr: "4:51", iftar: "6:13" },
    { sehri: "4:48", fajr: "4:50", iftar: "6:13" },
  ],
  "Kisoreganj Zilla": [
    { sehri: "5:12", fajr: "5:15", iftar: "5:59" },
    { sehri: "5:11", fajr: "5:14", iftar: "5:59" },
    { sehri: "5:11", fajr: "5:14", iftar: "6:00" },
    { sehri: "5:10", fajr: "5:13", iftar: "6:00" },
    { sehri: "5:09", fajr: "5:12", iftar: "6:01" },
    { sehri: "5:08", fajr: "5:11", iftar: "6:01" },
    { sehri: "5:08", fajr: "5:11", iftar: "6:02" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:02" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:03" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:03" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:04" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:04" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:05" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:05" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:06" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:06" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:07" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:07" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:08" },
    { sehri: "4:57", fajr: "4:59", iftar: "6:08" },
    { sehri: "4:56", fajr: "4:58", iftar: "6:08" },
    { sehri: "4:55", fajr: "4:57", iftar: "6:09" },
    { sehri: "4:54", fajr: "4:57", iftar: "6:09" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:10" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:10" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:11" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:11" },
    { sehri: "4:49", fajr: "4:52", iftar: "6:11" },
    { sehri: "4:48", fajr: "4:50", iftar: "6:12" },
    { sehri: "4:47", fajr: "4:49", iftar: "6:12" },
  ],
  "Madaripur Zilla": [
    { sehri: "5:09", fajr: "5:13", iftar: "5:55" },
    { sehri: "5:08", fajr: "5:12", iftar: "5:55" },
    { sehri: "5:08", fajr: "5:12", iftar: "5:56" },
    { sehri: "5:07", fajr: "5:11", iftar: "5:56" },
    { sehri: "5:06", fajr: "5:10", iftar: "5:57" },
    { sehri: "5:05", fajr: "5:09", iftar: "5:57" },
    { sehri: "5:05", fajr: "5:09", iftar: "5:58" },
    { sehri: "5:04", fajr: "5:08", iftar: "5:58" },
    { sehri: "5:03", fajr: "5:07", iftar: "5:59" },
    { sehri: "5:02", fajr: "5:06", iftar: "5:59" },
    { sehri: "5:02", fajr: "5:06", iftar: "6:00" },
    { sehri: "5:01", fajr: "5:05", iftar: "6:00" },
    { sehri: "5:00", fajr: "5:04", iftar: "6:01" },
    { sehri: "4:59", fajr: "5:03", iftar: "6:01" },
    { sehri: "4:58", fajr: "5:02", iftar: "6:02" },
    { sehri: "4:57", fajr: "5:01", iftar: "6:02" },
    { sehri: "4:56", fajr: "5:00", iftar: "6:03" },
    { sehri: "4:55", fajr: "4:59", iftar: "6:03" },
    { sehri: "4:54", fajr: "4:58", iftar: "6:04" },
    { sehri: "4:54", fajr: "4:57", iftar: "6:04" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:04" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:05" },
    { sehri: "4:51", fajr: "4:55", iftar: "6:05" },
    { sehri: "4:50", fajr: "4:54", iftar: "6:06" },
    { sehri: "4:49", fajr: "4:53", iftar: "6:06" },
    { sehri: "4:48", fajr: "4:52", iftar: "6:07" },
    { sehri: "4:47", fajr: "4:51", iftar: "6:07" },
    { sehri: "4:46", fajr: "4:50", iftar: "6:07" },
    { sehri: "4:45", fajr: "4:48", iftar: "6:08" },
    { sehri: "4:44", fajr: "4:47", iftar: "6:08" },
  ],
  "Manikganj Zilla": [
    { sehri: "5:11", fajr: "5:14", iftar: "5:57" },
    { sehri: "5:10", fajr: "5:13", iftar: "5:57" },
    { sehri: "5:10", fajr: "5:13", iftar: "5:58" },
    { sehri: "5:09", fajr: "5:12", iftar: "5:58" },
    { sehri: "5:08", fajr: "5:11", iftar: "5:59" },
    { sehri: "5:07", fajr: "5:10", iftar: "5:59" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:00" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:00" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:01" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:01" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:02" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:02" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:03" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:03" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:04" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:04" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:05" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:05" },
    { sehri: "4:56", fajr: "4:59", iftar: "6:06" },
    { sehri: "4:56", fajr: "4:58", iftar: "6:06" },
    { sehri: "4:55", fajr: "4:57", iftar: "6:06" },
    { sehri: "4:54", fajr: "4:56", iftar: "6:07" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:07" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:08" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:08" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:09" },
    { sehri: "4:49", fajr: "4:52", iftar: "6:09" },
    { sehri: "4:48", fajr: "4:51", iftar: "6:09" },
    { sehri: "4:47", fajr: "4:49", iftar: "6:10" },
    { sehri: "4:46", fajr: "4:48", iftar: "6:10" },
  ],
  "Munsiganj Zilla": [
    { sehri: "5:13", fajr: "5:16", iftar: "5:59" },
    { sehri: "5:12", fajr: "5:15", iftar: "5:59" },
    { sehri: "5:12", fajr: "5:15", iftar: "6:00" },
    { sehri: "5:11", fajr: "5:14", iftar: "6:00" },
    { sehri: "5:10", fajr: "5:13", iftar: "6:01" },
    { sehri: "5:09", fajr: "5:12", iftar: "6:01" },
    { sehri: "5:09", fajr: "5:12", iftar: "6:02" },
    { sehri: "5:08", fajr: "5:11", iftar: "6:02" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:03" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:03" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:04" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:04" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:05" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:05" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:06" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:06" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:07" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:07" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:08" },
    { sehri: "4:58", fajr: "5:00", iftar: "6:08" },
    { sehri: "4:57", fajr: "4:59", iftar: "6:08" },
    { sehri: "4:56", fajr: "4:58", iftar: "6:09" },
    { sehri: "4:55", fajr: "4:58", iftar: "6:09" },
    { sehri: "4:54", fajr: "4:57", iftar: "6:10" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:10" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:11" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:11" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:11" },
    { sehri: "4:49", fajr: "4:51", iftar: "6:12" },
    { sehri: "4:48", fajr: "4:50", iftar: "6:12" },
  ],
  "Narayanganj Zilla": [
    { sehri: "5:11", fajr: "5:13", iftar: "5:56" },
    { sehri: "5:10", fajr: "5:12", iftar: "5:56" },
    { sehri: "5:10", fajr: "5:12", iftar: "5:57" },
    { sehri: "5:09", fajr: "5:11", iftar: "5:57" },
    { sehri: "5:08", fajr: "5:10", iftar: "5:58" },
    { sehri: "5:07", fajr: "5:09", iftar: "5:58" },
    { sehri: "5:07", fajr: "5:09", iftar: "5:59" },
    { sehri: "5:06", fajr: "5:08", iftar: "5:59" },
    { sehri: "5:05", fajr: "5:07", iftar: "6:00" },
    { sehri: "5:04", fajr: "5:06", iftar: "6:00" },
    { sehri: "5:04", fajr: "5:06", iftar: "6:01" },
    { sehri: "5:03", fajr: "5:05", iftar: "6:01" },
    { sehri: "5:02", fajr: "5:04", iftar: "6:02" },
    { sehri: "5:01", fajr: "5:03", iftar: "6:02" },
    { sehri: "5:00", fajr: "5:02", iftar: "6:03" },
    { sehri: "4:59", fajr: "5:01", iftar: "6:03" },
    { sehri: "4:58", fajr: "5:00", iftar: "6:04" },
    { sehri: "4:57", fajr: "4:59", iftar: "6:04" },
    { sehri: "4:56", fajr: "4:58", iftar: "6:05" },
    { sehri: "4:56", fajr: "4:57", iftar: "6:05" },
    { sehri: "4:55", fajr: "4:56", iftar: "6:05" },
    { sehri: "4:54", fajr: "4:55", iftar: "6:06" },
    { sehri: "4:53", fajr: "4:55", iftar: "6:06" },
    { sehri: "4:52", fajr: "4:54", iftar: "6:07" },
    { sehri: "4:51", fajr: "4:53", iftar: "6:07" },
    { sehri: "4:50", fajr: "4:52", iftar: "6:08" },
    { sehri: "4:49", fajr: "4:51", iftar: "6:08" },
    { sehri: "4:48", fajr: "4:50", iftar: "6:08" },
    { sehri: "4:47", fajr: "4:48", iftar: "6:09" },
    { sehri: "4:46", fajr: "4:47", iftar: "6:09" },
  ],
  "Narsingdi Zilla": [
    { sehri: "5:11", fajr: "5:14", iftar: "5:57" },
    { sehri: "5:10", fajr: "5:13", iftar: "5:57" },
    { sehri: "5:10", fajr: "5:13", iftar: "5:58" },
    { sehri: "5:09", fajr: "5:12", iftar: "5:58" },
    { sehri: "5:08", fajr: "5:11", iftar: "5:59" },
    { sehri: "5:07", fajr: "5:10", iftar: "5:59" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:00" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:00" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:01" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:01" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:02" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:02" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:03" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:03" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:04" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:04" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:05" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:05" },
    { sehri: "4:56", fajr: "4:59", iftar: "6:06" },
    { sehri: "4:56", fajr: "4:58", iftar: "6:06" },
    { sehri: "4:55", fajr: "4:57", iftar: "6:06" },
    { sehri: "4:54", fajr: "4:56", iftar: "6:07" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:07" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:08" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:08" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:09" },
    { sehri: "4:49", fajr: "4:52", iftar: "6:09" },
    { sehri: "4:48", fajr: "4:51", iftar: "6:09" },
    { sehri: "4:47", fajr: "4:49", iftar: "6:10" },
    { sehri: "4:46", fajr: "4:48", iftar: "6:10" },
  ],
  "Rajbari Zilla": [
    { sehri: "5:15", fajr: "5:18", iftar: "6:01" },
    { sehri: "5:14", fajr: "5:17", iftar: "6:01" },
    { sehri: "5:14", fajr: "5:17", iftar: "6:02" },
    { sehri: "5:13", fajr: "5:16", iftar: "6:02" },
    { sehri: "5:12", fajr: "5:15", iftar: "6:03" },
    { sehri: "5:11", fajr: "5:14", iftar: "6:03" },
    { sehri: "5:11", fajr: "5:14", iftar: "6:04" },
    { sehri: "5:10", fajr: "5:13", iftar: "6:04" },
    { sehri: "5:09", fajr: "5:12", iftar: "6:05" },
    { sehri: "5:08", fajr: "5:11", iftar: "6:05" },
    { sehri: "5:08", fajr: "5:11", iftar: "6:06" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:06" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:07" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:07" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:08" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:08" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:09" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:09" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:10" },
    { sehri: "5:00", fajr: "5:02", iftar: "6:10" },
    { sehri: "4:59", fajr: "5:01", iftar: "6:10" },
    { sehri: "4:58", fajr: "5:00", iftar: "6:11" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:11" },
    { sehri: "4:56", fajr: "4:59", iftar: "6:12" },
    { sehri: "4:55", fajr: "4:58", iftar: "6:12" },
    { sehri: "4:54", fajr: "4:57", iftar: "6:13" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:13" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:13" },
    { sehri: "4:51", fajr: "4:53", iftar: "6:14" },
    { sehri: "4:50", fajr: "4:52", iftar: "6:14" },
  ],
  "Sariatpur Zilla": [
    { sehri: "5:10", fajr: "5:13", iftar: "5:55" },
    { sehri: "5:09", fajr: "5:12", iftar: "5:55" },
    { sehri: "5:09", fajr: "5:12", iftar: "5:56" },
    { sehri: "5:08", fajr: "5:11", iftar: "5:56" },
    { sehri: "5:07", fajr: "5:10", iftar: "5:57" },
    { sehri: "5:06", fajr: "5:09", iftar: "5:57" },
    { sehri: "5:06", fajr: "5:09", iftar: "5:58" },
    { sehri: "5:05", fajr: "5:08", iftar: "5:58" },
    { sehri: "5:04", fajr: "5:07", iftar: "5:59" },
    { sehri: "5:03", fajr: "5:06", iftar: "5:59" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:00" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:00" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:01" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:01" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:02" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:02" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:03" },
    { sehri: "4:56", fajr: "4:59", iftar: "6:03" },
    { sehri: "4:55", fajr: "4:58", iftar: "6:04" },
    { sehri: "4:55", fajr: "4:57", iftar: "6:04" },
    { sehri: "4:54", fajr: "4:56", iftar: "6:04" },
    { sehri: "4:53", fajr: "4:55", iftar: "6:05" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:05" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:06" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:06" },
    { sehri: "4:49", fajr: "4:52", iftar: "6:07" },
    { sehri: "4:48", fajr: "4:51", iftar: "6:07" },
    { sehri: "4:47", fajr: "4:50", iftar: "6:07" },
    { sehri: "4:46", fajr: "4:48", iftar: "6:08" },
    { sehri: "4:45", fajr: "4:47", iftar: "6:08" },
  ],
  "Tangail Zilla": [
    { sehri: "5:13", fajr: "5:16", iftar: "5:58" },
    { sehri: "5:12", fajr: "5:15", iftar: "5:58" },
    { sehri: "5:12", fajr: "5:15", iftar: "5:59" },
    { sehri: "5:11", fajr: "5:14", iftar: "5:59" },
    { sehri: "5:10", fajr: "5:13", iftar: "6:00" },
    { sehri: "5:09", fajr: "5:12", iftar: "6:00" },
    { sehri: "5:09", fajr: "5:12", iftar: "6:01" },
    { sehri: "5:08", fajr: "5:11", iftar: "6:01" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:02" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:02" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:03" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:03" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:04" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:04" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:05" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:05" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:06" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:06" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:07" },
    { sehri: "4:58", fajr: "5:00", iftar: "6:07" },
    { sehri: "4:57", fajr: "4:59", iftar: "6:07" },
    { sehri: "4:56", fajr: "4:58", iftar: "6:08" },
    { sehri: "4:55", fajr: "4:58", iftar: "6:08" },
    { sehri: "4:54", fajr: "4:57", iftar: "6:09" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:09" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:10" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:10" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:10" },
    { sehri: "4:49", fajr: "4:51", iftar: "6:11" },
    { sehri: "4:48", fajr: "4:50", iftar: "6:11" },
  ],

  "Bandarban Zilla": [
    { sehri: "5:09", fajr: "5:12", iftar: "5:55" },
    { sehri: "5:08", fajr: "5:11", iftar: "5:55" },
    { sehri: "5:08", fajr: "5:11", iftar: "5:56" },
    { sehri: "5:07", fajr: "5:10", iftar: "5:56" },
    { sehri: "5:06", fajr: "5:09", iftar: "5:57" },
    { sehri: "5:05", fajr: "5:08", iftar: "5:57" },
    { sehri: "5:05", fajr: "5:08", iftar: "5:58" },
    { sehri: "5:04", fajr: "5:07", iftar: "5:58" },
    { sehri: "5:03", fajr: "5:06", iftar: "5:59" },
    { sehri: "5:02", fajr: "5:05", iftar: "5:59" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:00" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:00" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:01" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:01" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:02" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:02" },
    { sehri: "4:56", fajr: "4:59", iftar: "6:03" },
    { sehri: "4:55", fajr: "4:58", iftar: "6:03" },
    { sehri: "4:54", fajr: "4:57", iftar: "6:04" },
    { sehri: "4:54", fajr: "4:56", iftar: "6:04" },
    { sehri: "4:53", fajr: "4:55", iftar: "6:04" },
    { sehri: "4:52", fajr: "4:54", iftar: "6:05" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:05" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:06" },
    { sehri: "4:49", fajr: "4:52", iftar: "6:06" },
    { sehri: "4:48", fajr: "4:51", iftar: "6:07" },
    { sehri: "4:47", fajr: "4:50", iftar: "6:07" },
    { sehri: "4:46", fajr: "4:49", iftar: "6:07" },
    { sehri: "4:45", fajr: "4:47", iftar: "6:08" },
    { sehri: "4:44", fajr: "4:46", iftar: "6:08" },
  ],
  "Bramhanbaria Zilla": [
    { sehri: "5:02", fajr: "5:06", iftar: "5:51" },
    { sehri: "5:01", fajr: "5:05", iftar: "5:51" },
    { sehri: "5:01", fajr: "5:05", iftar: "5:52" },
    { sehri: "5:00", fajr: "5:04", iftar: "5:52" },
    { sehri: "4:59", fajr: "5:03", iftar: "5:53" },
    { sehri: "4:58", fajr: "5:02", iftar: "5:53" },
    { sehri: "4:58", fajr: "5:02", iftar: "5:54" },
    { sehri: "4:57", fajr: "5:01", iftar: "5:54" },
    { sehri: "4:56", fajr: "5:00", iftar: "5:55" },
    { sehri: "4:55", fajr: "4:59", iftar: "5:55" },
    { sehri: "4:55", fajr: "4:59", iftar: "5:56" },
    { sehri: "4:54", fajr: "4:58", iftar: "5:56" },
    { sehri: "4:53", fajr: "4:57", iftar: "5:57" },
    { sehri: "4:52", fajr: "4:56", iftar: "5:57" },
    { sehri: "4:51", fajr: "4:55", iftar: "5:58" },
    { sehri: "4:50", fajr: "4:54", iftar: "5:58" },
    { sehri: "4:49", fajr: "4:53", iftar: "5:59" },
    { sehri: "4:48", fajr: "4:52", iftar: "5:59" },
    { sehri: "4:47", fajr: "4:51", iftar: "6:00" },
    { sehri: "4:47", fajr: "4:50", iftar: "6:00" },
    { sehri: "4:46", fajr: "4:49", iftar: "6:00" },
    { sehri: "4:45", fajr: "4:48", iftar: "6:01" },
    { sehri: "4:44", fajr: "4:48", iftar: "6:01" },
    { sehri: "4:43", fajr: "4:47", iftar: "6:02" },
    { sehri: "4:42", fajr: "4:46", iftar: "6:02" },
    { sehri: "4:41", fajr: "4:45", iftar: "6:03" },
    { sehri: "4:40", fajr: "4:44", iftar: "6:03" },
    { sehri: "4:39", fajr: "4:43", iftar: "6:03" },
    { sehri: "4:38", fajr: "4:41", iftar: "6:04" },
    { sehri: "4:37", fajr: "4:40", iftar: "6:04" },
  ],
  "Chadpur Zilla": [
    { sehri: "5:05", fajr: "5:09", iftar: "5:53" },
    { sehri: "5:04", fajr: "5:08", iftar: "5:53" },
    { sehri: "5:04", fajr: "5:08", iftar: "5:54" },
    { sehri: "5:03", fajr: "5:07", iftar: "5:54" },
    { sehri: "5:02", fajr: "5:06", iftar: "5:55" },
    { sehri: "5:01", fajr: "5:05", iftar: "5:55" },
    { sehri: "5:01", fajr: "5:05", iftar: "5:56" },
    { sehri: "5:00", fajr: "5:04", iftar: "5:56" },
    { sehri: "4:59", fajr: "5:03", iftar: "5:57" },
    { sehri: "4:58", fajr: "5:02", iftar: "5:57" },
    { sehri: "4:58", fajr: "5:02", iftar: "5:58" },
    { sehri: "4:57", fajr: "5:01", iftar: "5:58" },
    { sehri: "4:56", fajr: "5:00", iftar: "5:59" },
    { sehri: "4:55", fajr: "4:59", iftar: "5:59" },
    { sehri: "4:54", fajr: "4:58", iftar: "6:00" },
    { sehri: "4:53", fajr: "4:57", iftar: "6:00" },
    { sehri: "4:52", fajr: "4:56", iftar: "6:01" },
    { sehri: "4:51", fajr: "4:55", iftar: "6:01" },
    { sehri: "4:50", fajr: "4:54", iftar: "6:02" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:02" },
    { sehri: "4:49", fajr: "4:52", iftar: "6:02" },
    { sehri: "4:48", fajr: "4:51", iftar: "6:03" },
    { sehri: "4:47", fajr: "4:51", iftar: "6:03" },
    { sehri: "4:46", fajr: "4:50", iftar: "6:04" },
    { sehri: "4:45", fajr: "4:49", iftar: "6:04" },
    { sehri: "4:44", fajr: "4:48", iftar: "6:05" },
    { sehri: "4:43", fajr: "4:47", iftar: "6:05" },
    { sehri: "4:42", fajr: "4:46", iftar: "6:05" },
    { sehri: "4:41", fajr: "4:44", iftar: "6:06" },
    { sehri: "4:40", fajr: "4:43", iftar: "6:06" },
  ],
  "Chittagong Zilla": [
    { sehri: "5:10", fajr: "5:13", iftar: "5:56" },
    { sehri: "5:09", fajr: "5:12", iftar: "5:56" },
    { sehri: "5:09", fajr: "5:12", iftar: "5:57" },
    { sehri: "5:08", fajr: "5:11", iftar: "5:57" },
    { sehri: "5:07", fajr: "5:10", iftar: "5:58" },
    { sehri: "5:06", fajr: "5:09", iftar: "5:58" },
    { sehri: "5:06", fajr: "5:09", iftar: "5:59" },
    { sehri: "5:05", fajr: "5:08", iftar: "5:59" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:00" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:00" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:01" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:01" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:02" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:02" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:03" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:03" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:04" },
    { sehri: "4:56", fajr: "4:59", iftar: "6:04" },
    { sehri: "4:55", fajr: "4:58", iftar: "6:05" },
    { sehri: "4:55", fajr: "4:57", iftar: "6:05" },
    { sehri: "4:54", fajr: "4:56", iftar: "6:05" },
    { sehri: "4:53", fajr: "4:55", iftar: "6:06" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:06" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:07" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:07" },
    { sehri: "4:49", fajr: "4:52", iftar: "6:08" },
    { sehri: "4:48", fajr: "4:51", iftar: "6:08" },
    { sehri: "4:47", fajr: "4:50", iftar: "6:08" },
    { sehri: "4:46", fajr: "4:48", iftar: "6:09" },
    { sehri: "4:45", fajr: "4:47", iftar: "6:09" },
  ],
  "Cox Bazar Zilla": [
    { sehri: "5:03", fajr: "5:07", iftar: "5:52" },
    { sehri: "5:02", fajr: "5:06", iftar: "5:52" },
    { sehri: "5:02", fajr: "5:06", iftar: "5:53" },
    { sehri: "5:01", fajr: "5:05", iftar: "5:53" },
    { sehri: "5:00", fajr: "5:04", iftar: "5:54" },
    { sehri: "4:59", fajr: "5:03", iftar: "5:54" },
    { sehri: "4:59", fajr: "5:03", iftar: "5:55" },
    { sehri: "4:58", fajr: "5:02", iftar: "5:55" },
    { sehri: "4:57", fajr: "5:01", iftar: "5:56" },
    { sehri: "4:56", fajr: "5:00", iftar: "5:56" },
    { sehri: "4:56", fajr: "5:00", iftar: "5:57" },
    { sehri: "4:55", fajr: "4:59", iftar: "5:57" },
    { sehri: "4:54", fajr: "4:58", iftar: "5:58" },
    { sehri: "4:53", fajr: "4:57", iftar: "5:58" },
    { sehri: "4:52", fajr: "4:56", iftar: "5:59" },
    { sehri: "4:51", fajr: "4:55", iftar: "5:59" },
    { sehri: "4:50", fajr: "4:54", iftar: "6:00" },
    { sehri: "4:49", fajr: "4:53", iftar: "6:00" },
    { sehri: "4:48", fajr: "4:52", iftar: "6:01" },
    { sehri: "4:48", fajr: "4:51", iftar: "6:01" },
    { sehri: "4:47", fajr: "4:50", iftar: "6:01" },
    { sehri: "4:46", fajr: "4:49", iftar: "6:02" },
    { sehri: "4:45", fajr: "4:49", iftar: "6:02" },
    { sehri: "4:44", fajr: "4:48", iftar: "6:03" },
    { sehri: "4:43", fajr: "4:47", iftar: "6:03" },
    { sehri: "4:42", fajr: "4:46", iftar: "6:04" },
    { sehri: "4:41", fajr: "4:45", iftar: "6:04" },
    { sehri: "4:40", fajr: "4:44", iftar: "6:04" },
    { sehri: "4:39", fajr: "4:42", iftar: "6:05" },
    { sehri: "4:38", fajr: "4:41", iftar: "6:05" },
  ],
  "Cumilla Zilla": [
    { sehri: "5:08", fajr: "5:12", iftar: "5:55" },
    { sehri: "5:07", fajr: "5:11", iftar: "5:55" },
    { sehri: "5:07", fajr: "5:11", iftar: "5:56" },
    { sehri: "5:06", fajr: "5:10", iftar: "5:56" },
    { sehri: "5:05", fajr: "5:09", iftar: "5:57" },
    { sehri: "5:04", fajr: "5:08", iftar: "5:57" },
    { sehri: "5:04", fajr: "5:08", iftar: "5:58" },
    { sehri: "5:03", fajr: "5:07", iftar: "5:58" },
    { sehri: "5:02", fajr: "5:06", iftar: "5:59" },
    { sehri: "5:01", fajr: "5:05", iftar: "5:59" },
    { sehri: "5:01", fajr: "5:05", iftar: "6:00" },
    { sehri: "5:00", fajr: "5:04", iftar: "6:00" },
    { sehri: "4:59", fajr: "5:03", iftar: "6:01" },
    { sehri: "4:58", fajr: "5:02", iftar: "6:01" },
    { sehri: "4:57", fajr: "5:01", iftar: "6:02" },
    { sehri: "4:56", fajr: "5:00", iftar: "6:02" },
    { sehri: "4:55", fajr: "4:59", iftar: "6:03" },
    { sehri: "4:54", fajr: "4:58", iftar: "6:03" },
    { sehri: "4:53", fajr: "4:57", iftar: "6:04" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:04" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:04" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:05" },
    { sehri: "4:50", fajr: "4:54", iftar: "6:05" },
    { sehri: "4:49", fajr: "4:53", iftar: "6:06" },
    { sehri: "4:48", fajr: "4:52", iftar: "6:06" },
    { sehri: "4:47", fajr: "4:51", iftar: "6:07" },
    { sehri: "4:46", fajr: "4:50", iftar: "6:07" },
    { sehri: "4:45", fajr: "4:49", iftar: "6:07" },
    { sehri: "4:44", fajr: "4:47", iftar: "6:08" },
    { sehri: "4:43", fajr: "4:46", iftar: "6:08" },
  ],
  "Feni Zilla": [
    { sehri: "5:07", fajr: "5:10", iftar: "5:54" },
    { sehri: "5:06", fajr: "5:09", iftar: "5:54" },
    { sehri: "5:06", fajr: "5:09", iftar: "5:55" },
    { sehri: "5:05", fajr: "5:08", iftar: "5:55" },
    { sehri: "5:04", fajr: "5:07", iftar: "5:56" },
    { sehri: "5:03", fajr: "5:06", iftar: "5:56" },
    { sehri: "5:03", fajr: "5:06", iftar: "5:57" },
    { sehri: "5:02", fajr: "5:05", iftar: "5:57" },
    { sehri: "5:01", fajr: "5:04", iftar: "5:58" },
    { sehri: "5:00", fajr: "5:03", iftar: "5:58" },
    { sehri: "5:00", fajr: "5:03", iftar: "5:59" },
    { sehri: "4:59", fajr: "5:02", iftar: "5:59" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:00" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:00" },
    { sehri: "4:56", fajr: "4:59", iftar: "6:01" },
    { sehri: "4:55", fajr: "4:58", iftar: "6:01" },
    { sehri: "4:54", fajr: "4:57", iftar: "6:02" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:02" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:03" },
    { sehri: "4:52", fajr: "4:54", iftar: "6:03" },
    { sehri: "4:51", fajr: "4:53", iftar: "6:03" },
    { sehri: "4:50", fajr: "4:52", iftar: "6:04" },
    { sehri: "4:49", fajr: "4:52", iftar: "6:04" },
    { sehri: "4:48", fajr: "4:51", iftar: "6:05" },
    { sehri: "4:47", fajr: "4:50", iftar: "6:05" },
    { sehri: "4:46", fajr: "4:49", iftar: "6:06" },
    { sehri: "4:45", fajr: "4:48", iftar: "6:06" },
    { sehri: "4:44", fajr: "4:47", iftar: "6:06" },
    { sehri: "4:43", fajr: "4:45", iftar: "6:07" },
    { sehri: "4:42", fajr: "4:44", iftar: "6:07" },
  ],
  "Khagrachori Zilla": [
    { sehri: "5:05", fajr: "5:08", iftar: "5:52" },
    { sehri: "5:04", fajr: "5:07", iftar: "5:52" },
    { sehri: "5:04", fajr: "5:07", iftar: "5:53" },
    { sehri: "5:03", fajr: "5:06", iftar: "5:53" },
    { sehri: "5:02", fajr: "5:05", iftar: "5:54" },
    { sehri: "5:01", fajr: "5:04", iftar: "5:54" },
    { sehri: "5:01", fajr: "5:04", iftar: "5:55" },
    { sehri: "5:00", fajr: "5:03", iftar: "5:55" },
    { sehri: "4:59", fajr: "5:02", iftar: "5:56" },
    { sehri: "4:58", fajr: "5:01", iftar: "5:56" },
    { sehri: "4:58", fajr: "5:01", iftar: "5:57" },
    { sehri: "4:57", fajr: "5:00", iftar: "5:57" },
    { sehri: "4:56", fajr: "4:59", iftar: "5:58" },
    { sehri: "4:55", fajr: "4:58", iftar: "5:58" },
    { sehri: "4:54", fajr: "4:57", iftar: "5:59" },
    { sehri: "4:53", fajr: "4:56", iftar: "5:59" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:00" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:00" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:01" },
    { sehri: "4:50", fajr: "4:52", iftar: "6:01" },
    { sehri: "4:49", fajr: "4:51", iftar: "6:01" },
    { sehri: "4:48", fajr: "4:50", iftar: "6:02" },
    { sehri: "4:47", fajr: "4:50", iftar: "6:02" },
    { sehri: "4:46", fajr: "4:49", iftar: "6:03" },
    { sehri: "4:45", fajr: "4:48", iftar: "6:03" },
    { sehri: "4:44", fajr: "4:47", iftar: "6:04" },
    { sehri: "4:43", fajr: "4:46", iftar: "6:04" },
    { sehri: "4:42", fajr: "4:45", iftar: "6:04" },
    { sehri: "4:41", fajr: "4:43", iftar: "6:05" },
    { sehri: "4:40", fajr: "4:42", iftar: "6:05" },
  ],
  "Lokkhipur Zilla": [
    { sehri: "5:10", fajr: "5:12", iftar: "5:56" },
    { sehri: "5:09", fajr: "5:11", iftar: "5:56" },
    { sehri: "5:09", fajr: "5:11", iftar: "5:57" },
    { sehri: "5:08", fajr: "5:10", iftar: "5:57" },
    { sehri: "5:07", fajr: "5:09", iftar: "5:58" },
    { sehri: "5:06", fajr: "5:08", iftar: "5:58" },
    { sehri: "5:06", fajr: "5:08", iftar: "5:59" },
    { sehri: "5:05", fajr: "5:07", iftar: "5:59" },
    { sehri: "5:04", fajr: "5:06", iftar: "6:00" },
    { sehri: "5:03", fajr: "5:05", iftar: "6:00" },
    { sehri: "5:03", fajr: "5:05", iftar: "6:01" },
    { sehri: "5:02", fajr: "5:04", iftar: "6:01" },
    { sehri: "5:01", fajr: "5:03", iftar: "6:02" },
    { sehri: "5:00", fajr: "5:02", iftar: "6:02" },
    { sehri: "4:59", fajr: "5:01", iftar: "6:03" },
    { sehri: "4:58", fajr: "5:00", iftar: "6:03" },
    { sehri: "4:57", fajr: "4:59", iftar: "6:04" },
    { sehri: "4:56", fajr: "4:58", iftar: "6:04" },
    { sehri: "4:55", fajr: "4:57", iftar: "6:05" },
    { sehri: "4:55", fajr: "4:56", iftar: "6:05" },
    { sehri: "4:54", fajr: "4:55", iftar: "6:05" },
    { sehri: "4:53", fajr: "4:54", iftar: "6:06" },
    { sehri: "4:52", fajr: "4:54", iftar: "6:06" },
    { sehri: "4:51", fajr: "4:53", iftar: "6:07" },
    { sehri: "4:50", fajr: "4:52", iftar: "6:07" },
    { sehri: "4:49", fajr: "4:51", iftar: "6:08" },
    { sehri: "4:48", fajr: "4:50", iftar: "6:08" },
    { sehri: "4:47", fajr: "4:49", iftar: "6:08" },
    { sehri: "4:46", fajr: "4:47", iftar: "6:09" },
    { sehri: "4:45", fajr: "4:46", iftar: "6:09" },
  ],
  "Noakhali Zilla": [
    { sehri: "5:08", fajr: "5:11", iftar: "5:55" },
    { sehri: "5:07", fajr: "5:10", iftar: "5:55" },
    { sehri: "5:07", fajr: "5:10", iftar: "5:56" },
    { sehri: "5:06", fajr: "5:09", iftar: "5:56" },
    { sehri: "5:05", fajr: "5:08", iftar: "5:57" },
    { sehri: "5:04", fajr: "5:07", iftar: "5:57" },
    { sehri: "5:04", fajr: "5:07", iftar: "5:58" },
    { sehri: "5:03", fajr: "5:06", iftar: "5:58" },
    { sehri: "5:02", fajr: "5:05", iftar: "5:59" },
    { sehri: "5:01", fajr: "5:04", iftar: "5:59" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:00" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:00" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:01" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:01" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:02" },
    { sehri: "4:56", fajr: "4:59", iftar: "6:02" },
    { sehri: "4:55", fajr: "4:58", iftar: "6:03" },
    { sehri: "4:54", fajr: "4:57", iftar: "6:03" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:04" },
    { sehri: "4:53", fajr: "4:55", iftar: "6:04" },
    { sehri: "4:52", fajr: "4:54", iftar: "6:04" },
    { sehri: "4:51", fajr: "4:53", iftar: "6:05" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:05" },
    { sehri: "4:49", fajr: "4:52", iftar: "6:06" },
    { sehri: "4:48", fajr: "4:51", iftar: "6:06" },
    { sehri: "4:47", fajr: "4:50", iftar: "6:07" },
    { sehri: "4:46", fajr: "4:49", iftar: "6:07" },
    { sehri: "4:45", fajr: "4:48", iftar: "6:07" },
    { sehri: "4:44", fajr: "4:46", iftar: "6:08" },
    { sehri: "4:43", fajr: "4:45", iftar: "6:08" },
  ],
  "Rangamati Zilla": [
    { sehri: "5:03", fajr: "5:07", iftar: "5:51" },
    { sehri: "5:02", fajr: "5:06", iftar: "5:51" },
    { sehri: "5:02", fajr: "5:06", iftar: "5:52" },
    { sehri: "5:01", fajr: "5:05", iftar: "5:52" },
    { sehri: "5:00", fajr: "5:04", iftar: "5:53" },
    { sehri: "4:59", fajr: "5:03", iftar: "5:53" },
    { sehri: "4:59", fajr: "5:03", iftar: "5:54" },
    { sehri: "4:58", fajr: "5:02", iftar: "5:54" },
    { sehri: "4:57", fajr: "5:01", iftar: "5:55" },
    { sehri: "4:56", fajr: "5:00", iftar: "5:55" },
    { sehri: "4:56", fajr: "5:00", iftar: "5:56" },
    { sehri: "4:55", fajr: "4:59", iftar: "5:56" },
    { sehri: "4:54", fajr: "4:58", iftar: "5:57" },
    { sehri: "4:53", fajr: "4:57", iftar: "5:57" },
    { sehri: "4:52", fajr: "4:56", iftar: "5:58" },
    { sehri: "4:51", fajr: "4:55", iftar: "5:58" },
    { sehri: "4:50", fajr: "4:54", iftar: "5:59" },
    { sehri: "4:49", fajr: "4:53", iftar: "5:59" },
    { sehri: "4:48", fajr: "4:52", iftar: "6:00" },
    { sehri: "4:48", fajr: "4:51", iftar: "6:00" },
    { sehri: "4:47", fajr: "4:50", iftar: "6:00" },
    { sehri: "4:46", fajr: "4:49", iftar: "6:01" },
    { sehri: "4:45", fajr: "4:49", iftar: "6:01" },
    { sehri: "4:44", fajr: "4:48", iftar: "6:02" },
    { sehri: "4:43", fajr: "4:47", iftar: "6:02" },
    { sehri: "4:42", fajr: "4:46", iftar: "6:03" },
    { sehri: "4:41", fajr: "4:45", iftar: "6:03" },
    { sehri: "4:40", fajr: "4:44", iftar: "6:03" },
    { sehri: "4:39", fajr: "4:42", iftar: "6:04" },
    { sehri: "4:38", fajr: "4:41", iftar: "6:04" },
  ],

  "Barishal Zilla": [
    { sehri: "5:11", fajr: "5:14", iftar: "5:59" },
    { sehri: "5:10", fajr: "5:13", iftar: "5:59" },
    { sehri: "5:10", fajr: "5:13", iftar: "6:00" },
    { sehri: "5:09", fajr: "5:12", iftar: "6:00" },
    { sehri: "5:08", fajr: "5:11", iftar: "6:01" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:01" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:02" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:02" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:03" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:03" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:04" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:04" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:05" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:05" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:06" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:06" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:07" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:07" },
    { sehri: "4:56", fajr: "4:59", iftar: "6:08" },
    { sehri: "4:56", fajr: "4:58", iftar: "6:08" },
    { sehri: "4:55", fajr: "4:57", iftar: "6:08" },
    { sehri: "4:54", fajr: "4:56", iftar: "6:09" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:09" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:10" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:10" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:11" },
    { sehri: "4:49", fajr: "4:52", iftar: "6:11" },
    { sehri: "4:48", fajr: "4:51", iftar: "6:11" },
    { sehri: "4:47", fajr: "4:49", iftar: "6:12" },
    { sehri: "4:46", fajr: "4:48", iftar: "6:12" },
  ],
  "Borguna Zilla": [
    { sehri: "5:12", fajr: "5:15", iftar: "6:00" },
    { sehri: "5:11", fajr: "5:14", iftar: "6:00" },
    { sehri: "5:11", fajr: "5:14", iftar: "6:01" },
    { sehri: "5:10", fajr: "5:13", iftar: "6:01" },
    { sehri: "5:09", fajr: "5:12", iftar: "6:02" },
    { sehri: "5:08", fajr: "5:11", iftar: "6:02" },
    { sehri: "5:08", fajr: "5:11", iftar: "6:03" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:03" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:04" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:04" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:05" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:05" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:06" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:06" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:07" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:07" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:08" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:08" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:09" },
    { sehri: "4:57", fajr: "4:59", iftar: "6:09" },
    { sehri: "4:56", fajr: "4:58", iftar: "6:09" },
    { sehri: "4:55", fajr: "4:57", iftar: "6:10" },
    { sehri: "4:54", fajr: "4:57", iftar: "6:10" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:11" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:11" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:12" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:12" },
    { sehri: "4:49", fajr: "4:52", iftar: "6:12" },
    { sehri: "4:48", fajr: "4:50", iftar: "6:13" },
    { sehri: "4:47", fajr: "4:49", iftar: "6:13" },
  ],
  "Jhalkathi Zilla": [
    { sehri: "5:12", fajr: "5:14", iftar: "5:59" },
    { sehri: "5:11", fajr: "5:13", iftar: "5:59" },
    { sehri: "5:11", fajr: "5:13", iftar: "6:00" },
    { sehri: "5:10", fajr: "5:12", iftar: "6:00" },
    { sehri: "5:09", fajr: "5:11", iftar: "6:01" },
    { sehri: "5:08", fajr: "5:10", iftar: "6:01" },
    { sehri: "5:08", fajr: "5:10", iftar: "6:02" },
    { sehri: "5:07", fajr: "5:09", iftar: "6:02" },
    { sehri: "5:06", fajr: "5:08", iftar: "6:03" },
    { sehri: "5:05", fajr: "5:07", iftar: "6:03" },
    { sehri: "5:05", fajr: "5:07", iftar: "6:04" },
    { sehri: "5:04", fajr: "5:06", iftar: "6:04" },
    { sehri: "5:03", fajr: "5:05", iftar: "6:05" },
    { sehri: "5:02", fajr: "5:04", iftar: "6:05" },
    { sehri: "5:01", fajr: "5:03", iftar: "6:06" },
    { sehri: "5:00", fajr: "5:02", iftar: "6:06" },
    { sehri: "4:59", fajr: "5:01", iftar: "6:07" },
    { sehri: "4:58", fajr: "5:00", iftar: "6:07" },
    { sehri: "4:57", fajr: "4:59", iftar: "6:08" },
    { sehri: "4:57", fajr: "4:58", iftar: "6:08" },
    { sehri: "4:56", fajr: "4:57", iftar: "6:08" },
    { sehri: "4:55", fajr: "4:56", iftar: "6:09" },
    { sehri: "4:54", fajr: "4:56", iftar: "6:09" },
    { sehri: "4:53", fajr: "4:55", iftar: "6:10" },
    { sehri: "4:52", fajr: "4:54", iftar: "6:10" },
    { sehri: "4:51", fajr: "4:53", iftar: "6:11" },
    { sehri: "4:50", fajr: "4:52", iftar: "6:11" },
    { sehri: "4:49", fajr: "4:51", iftar: "6:11" },
    { sehri: "4:48", fajr: "4:49", iftar: "6:12" },
    { sehri: "4:47", fajr: "4:48", iftar: "6:12" },
  ],
  "Pirojpur Zilla": [
    { sehri: "5:13", fajr: "5:15", iftar: "5:59" },
    { sehri: "5:12", fajr: "5:14", iftar: "5:59" },
    { sehri: "5:12", fajr: "5:14", iftar: "6:00" },
    { sehri: "5:11", fajr: "5:13", iftar: "6:00" },
    { sehri: "5:10", fajr: "5:12", iftar: "6:01" },
    { sehri: "5:09", fajr: "5:11", iftar: "6:01" },
    { sehri: "5:09", fajr: "5:11", iftar: "6:02" },
    { sehri: "5:08", fajr: "5:10", iftar: "6:02" },
    { sehri: "5:07", fajr: "5:09", iftar: "6:03" },
    { sehri: "5:06", fajr: "5:08", iftar: "6:03" },
    { sehri: "5:06", fajr: "5:08", iftar: "6:04" },
    { sehri: "5:05", fajr: "5:07", iftar: "6:04" },
    { sehri: "5:04", fajr: "5:06", iftar: "6:05" },
    { sehri: "5:03", fajr: "5:05", iftar: "6:05" },
    { sehri: "5:02", fajr: "5:04", iftar: "6:06" },
    { sehri: "5:01", fajr: "5:03", iftar: "6:06" },
    { sehri: "5:00", fajr: "5:02", iftar: "6:07" },
    { sehri: "4:59", fajr: "5:01", iftar: "6:07" },
    { sehri: "4:58", fajr: "5:00", iftar: "6:08" },
    { sehri: "4:58", fajr: "4:59", iftar: "6:08" },
    { sehri: "4:57", fajr: "4:58", iftar: "6:08" },
    { sehri: "4:56", fajr: "4:57", iftar: "6:09" },
    { sehri: "4:55", fajr: "4:57", iftar: "6:09" },
    { sehri: "4:54", fajr: "4:56", iftar: "6:10" },
    { sehri: "4:53", fajr: "4:55", iftar: "6:10" },
    { sehri: "4:52", fajr: "4:54", iftar: "6:11" },
    { sehri: "4:51", fajr: "4:53", iftar: "6:11" },
    { sehri: "4:50", fajr: "4:52", iftar: "6:11" },
    { sehri: "4:49", fajr: "4:50", iftar: "6:12" },
    { sehri: "4:48", fajr: "4:49", iftar: "6:12" },
  ],
  "Potuakhali Zilla": [
    { sehri: "5:09", fajr: "5:12", iftar: "5:59" },
    { sehri: "5:08", fajr: "5:11", iftar: "5:59" },
    { sehri: "5:08", fajr: "5:11", iftar: "6:00" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:00" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:01" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:01" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:02" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:02" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:03" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:03" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:04" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:04" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:05" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:05" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:06" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:06" },
    { sehri: "4:56", fajr: "4:59", iftar: "6:07" },
    { sehri: "4:55", fajr: "4:58", iftar: "6:07" },
    { sehri: "4:54", fajr: "4:57", iftar: "6:08" },
    { sehri: "4:54", fajr: "4:56", iftar: "6:08" },
    { sehri: "4:53", fajr: "4:55", iftar: "6:08" },
    { sehri: "4:52", fajr: "4:54", iftar: "6:09" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:09" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:10" },
    { sehri: "4:49", fajr: "4:52", iftar: "6:10" },
    { sehri: "4:48", fajr: "4:51", iftar: "6:11" },
    { sehri: "4:47", fajr: "4:50", iftar: "6:11" },
    { sehri: "4:46", fajr: "4:49", iftar: "6:11" },
    { sehri: "4:45", fajr: "4:47", iftar: "6:12" },
    { sehri: "4:44", fajr: "4:46", iftar: "6:12" },
  ],
  "Vola Zilla": [
    { sehri: "5:11", fajr: "5:14", iftar: "5:59" },
    { sehri: "5:10", fajr: "5:13", iftar: "5:59" },
    { sehri: "5:10", fajr: "5:13", iftar: "6:00" },
    { sehri: "5:09", fajr: "5:12", iftar: "6:00" },
    { sehri: "5:08", fajr: "5:11", iftar: "6:01" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:01" },
    { sehri: "5:07", fajr: "5:10", iftar: "6:02" },
    { sehri: "5:06", fajr: "5:09", iftar: "6:02" },
    { sehri: "5:05", fajr: "5:08", iftar: "6:03" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:03" },
    { sehri: "5:04", fajr: "5:07", iftar: "6:04" },
    { sehri: "5:03", fajr: "5:06", iftar: "6:04" },
    { sehri: "5:02", fajr: "5:05", iftar: "6:05" },
    { sehri: "5:01", fajr: "5:04", iftar: "6:05" },
    { sehri: "5:00", fajr: "5:03", iftar: "6:06" },
    { sehri: "4:59", fajr: "5:02", iftar: "6:06" },
    { sehri: "4:58", fajr: "5:01", iftar: "6:07" },
    { sehri: "4:57", fajr: "5:00", iftar: "6:07" },
    { sehri: "4:56", fajr: "4:59", iftar: "6:08" },
    { sehri: "4:56", fajr: "4:58", iftar: "6:08" },
    { sehri: "4:55", fajr: "4:57", iftar: "6:08" },
    { sehri: "4:54", fajr: "4:56", iftar: "6:09" },
    { sehri: "4:53", fajr: "4:56", iftar: "6:09" },
    { sehri: "4:52", fajr: "4:55", iftar: "6:10" },
    { sehri: "4:51", fajr: "4:54", iftar: "6:10" },
    { sehri: "4:50", fajr: "4:53", iftar: "6:11" },
    { sehri: "4:49", fajr: "4:52", iftar: "6:11" },
    { sehri: "4:48", fajr: "4:51", iftar: "6:11" },
    { sehri: "4:47", fajr: "4:49", iftar: "6:12" },
    { sehri: "4:46", fajr: "4:48", iftar: "6:12" },
  ],
};

const state = {
  division: "Dhaka Division",
  zilla: "Dhaka Zilla",
  image: "",
  offsetMinutes: 0,
  offsets: { sehri: 0, fajr: 0, iftar: 0, source: "auto" },
  schedule: [],
};

const elements = {};
let latestTimerSnapshot = null;

function cacheElements() {
  elements.divisionSelect = document.getElementById("divisionSelect");
  elements.zillaSelect = document.getElementById("zillaSelect");
  elements.offsetNote = document.getElementById("offsetNote");
  elements.currentClock = document.getElementById("currentClock");
  elements.downloadImageBtn = document.getElementById("downloadImageBtn");
  elements.downloadTimerBtn = document.getElementById("downloadTimerBtn");
  elements.zillaTimetableImage = document.getElementById("zillaTimetableImage");
  elements.timetableTitle = document.getElementById("timetableTitle");
  elements.locationSubtitle = document.getElementById("locationSubtitle");
  elements.footerLocationText = document.getElementById("footerLocationText");
  elements.scheduleBody = document.getElementById("scheduleBody");
  elements.todayDayName = document.getElementById("todayDayName");
  elements.todayDateFull = document.getElementById("todayDateFull");
  elements.todayRamadanDay = document.getElementById("todayRamadanDay");
  elements.todaySehri = document.getElementById("todaySehri");
  elements.todayFajr = document.getElementById("todayFajr");
  elements.todayIftar = document.getElementById("todayIftar");
  elements.timerDisplay = document.getElementById("timerDisplay");
  elements.timerEvent = document.getElementById("timerEvent");
  elements.timerBar = document.getElementById("timerBar");
}

function buildStars() {
  const starfield = document.getElementById("starfield");
  if (!starfield) return;

  for (let i = 0; i < 120; i += 1) {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 2.5 + 0.5;
    star.style.cssText = `width:${size}px;height:${size}px;top:${Math.random() * 100}%;left:${Math.random() * 100}%;--d:${(Math.random() * 4 + 2).toFixed(1)}s;--min:${(Math.random() * 0.3).toFixed(2)};--max:${(0.5 + Math.random() * 0.5).toFixed(2)};animation-delay:${(Math.random() * 5).toFixed(1)}s`;
    starfield.appendChild(star);
  }
}

function getBanglaNumber(value) {
  return new Intl.NumberFormat("bn-BD").format(value);
}

function getDhakaNowParts() {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: BANGLADESH_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });

  const parsed = {};
  formatter.formatToParts(new Date()).forEach((part) => {
    if (part.type !== "literal") {
      parsed[part.type] = part.value;
    }
  });

  return {
    year: Number(parsed.year),
    month: Number(parsed.month),
    day: Number(parsed.day),
    hour: Number(parsed.hour),
    minute: Number(parsed.minute),
    second: Number(parsed.second),
    dateStr: `${parsed.year}-${parsed.month}-${parsed.day}`,
  };
}

function toDhakaSafeDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  // Noon UTC ensures the same calendar date when formatted in Bangladesh timezone.
  return new Date(Date.UTC(year, month - 1, day, 6, 0, 0));
}

function formatBanglaDay(dateStr) {
  return new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    timeZone: BANGLADESH_TIMEZONE,
  }).format(toDhakaSafeDate(dateStr));
}

function formatBanglaDate(dateStr) {
  return new Intl.DateTimeFormat("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: BANGLADESH_TIMEZONE,
  }).format(toDhakaSafeDate(dateStr));
}

function formatBanglaShortDate(dateStr) {
  return new Intl.DateTimeFormat("bn-BD", {
    day: "numeric",
    month: "long",
    timeZone: BANGLADESH_TIMEZONE,
  }).format(toDhakaSafeDate(dateStr));
}

function encodeAssetPath(path) {
  return path.split("/").map((segment) => encodeURIComponent(segment)).join("/");
}

function cleanZillaName(zillaName) {
  return zillaName.replace(/\s+Zilla$/i, "").trim();
}

function toCanonicalDistrictName(zillaName) {
  const baseName = cleanZillaName(zillaName);
  const mappedName = districtNameFixes[baseName] || baseName;
  return districtLongitudes[mappedName] ? mappedName : "Dhaka";
}

function getOffsetForZilla(zillaName) {
  const canonical = toCanonicalDistrictName(zillaName);
  const dhakaLongitude = districtLongitudes.Dhaka;
  const targetLongitude = districtLongitudes[canonical];
  return Math.round((dhakaLongitude - targetLongitude) * 4);
}

function getOffsetsForZilla(zillaName) {
  if (zillaTimeOverrides[zillaName]) {
    return { ...zillaTimeOverrides[zillaName] };
  }

  const autoOffset = getOffsetForZilla(zillaName);
  return {
    sehri: autoOffset,
    fajr: autoOffset,
    iftar: autoOffset,
    source: "auto",
  };
}

function getDailyScheduleForZilla(zillaName) {
  const rows = zillaDailyTimeOverrides[zillaName];
  if (!rows || rows.length !== baseRamadanData.length) {
    return null;
  }

  return baseRamadanData.map((entry, index) => ({
    day: entry.day,
    date: entry.date,
    sehri: rows[index].sehri,
    fajr: rows[index].fajr,
    iftar: rows[index].iftar,
  }));
}

function shiftTimeString(timeStr, offsetMinutes, isPm) {
  const [hourPart, minutePart] = timeStr.split(":").map(Number);
  const hour24 = isPm ? (hourPart % 12) + 12 : hourPart % 12;

  let totalMinutes = (hour24 * 60) + minutePart + offsetMinutes;
  totalMinutes = ((totalMinutes % 1440) + 1440) % 1440;

  let displayMinutes = totalMinutes % 720;
  if (displayMinutes === 0) displayMinutes = 720;

  const outHour = Math.floor(displayMinutes / 60);
  const outMinute = displayMinutes % 60;
  return `${outHour}:${String(outMinute).padStart(2, "0")}`;
}

function buildAdjustedSchedule(offsets) {
  return baseRamadanData.map((entry) => ({
    day: entry.day,
    date: entry.date,
    sehri: shiftTimeString(entry.sehri, offsets.sehri, false),
    fajr: shiftTimeString(entry.fajr, offsets.fajr, false),
    iftar: shiftTimeString(entry.iftar, offsets.iftar, true),
  }));
}

function dhakaDateStartUtcMs(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return Date.UTC(year, month - 1, day, 0, 0, 0, 0) - BANGLADESH_UTC_OFFSET_MS;
}

function dhakaClockToUtcMs(dateStr, timeStr, isPm) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const [hourPart, minutePart] = timeStr.split(":").map(Number);
  const hour24 = isPm ? (hourPart % 12) + 12 : (hourPart % 12);
  return Date.UTC(year, month - 1, day, hour24, minutePart, 0, 0) - BANGLADESH_UTC_OFFSET_MS;
}

function clampPercent(value) {
  return Math.max(0, Math.min(100, value));
}

function formatCountdown(ms) {
  const safeMs = Math.max(0, ms);
  const h = Math.floor(safeMs / 3600000);
  const m = Math.floor((safeMs % 3600000) / 60000);
  const s = Math.floor((safeMs % 60000) / 1000);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function formatDivisionDisplayName(rawName) {
  return divisionDisplayNameFixes[rawName] || rawName;
}

function sanitizeForFilename(value) {
  return value.replace(/[^a-z0-9_-]+/gi, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}

function getSelectedAsset() {
  const list = divisionZillaAssets[state.division] || [];
  return list.find((item) => item.name === state.zilla) || list[0] || null;
}

function populateDivisionOptions() {
  const divisions = Object.keys(divisionZillaAssets);
  elements.divisionSelect.innerHTML = "";

  divisions.forEach((divisionName) => {
    const option = document.createElement("option");
    option.value = divisionName;
    option.textContent = formatDivisionDisplayName(divisionName);
    elements.divisionSelect.appendChild(option);
  });
}

function populateZillaOptions(divisionName, preferredZilla) {
  const zillas = divisionZillaAssets[divisionName] || [];
  elements.zillaSelect.innerHTML = "";

  zillas.forEach((zilla) => {
    const option = document.createElement("option");
    option.value = zilla.name;
    option.textContent = cleanZillaName(zilla.name);
    elements.zillaSelect.appendChild(option);
  });

  const hasPreferred = zillas.some((item) => item.name === preferredZilla);
  if (hasPreferred) {
    elements.zillaSelect.value = preferredZilla;
  } else if (zillas[0]) {
    elements.zillaSelect.value = zillas[0].name;
  }
}

function saveLocationSelection() {
  try {
    localStorage.setItem("ramadanDivision", state.division);
    localStorage.setItem("ramadanZilla", state.zilla);
  } catch (error) {
    // Ignore storage issues in restricted contexts.
  }
}

function loadSavedLocation() {
  try {
    return {
      division: localStorage.getItem("ramadanDivision"),
      zilla: localStorage.getItem("ramadanZilla"),
    };
  } catch (error) {
    return { division: null, zilla: null };
  }
}

function renderScheduleTable() {
  const dhakaNow = getDhakaNowParts();
  elements.scheduleBody.innerHTML = "";

  state.schedule.forEach((entry) => {
    const row = document.createElement("tr");
    if (entry.date === dhakaNow.dateStr) {
      row.className = "today-row";
    }

    row.innerHTML = `
      <td><span class="${entry.date === dhakaNow.dateStr ? "day-num" : ""}">${getBanglaNumber(entry.day)}</span></td>
      <td class="col-day">${formatBanglaShortDate(entry.date)}</td>
      <td class="col-sehri">${entry.sehri}</td>
      <td class="col-fajr">${entry.fajr}</td>
      <td class="col-iftar">${entry.iftar}</td>
    `;

    elements.scheduleBody.appendChild(row);
  });

  setTimeout(() => {
    const todayRow = document.querySelector(".today-row");
    if (todayRow) {
      todayRow.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 300);
}

function renderTodayCard() {
  const dhakaNow = getDhakaNowParts();
  const todayEntry = state.schedule.find((item) => item.date === dhakaNow.dateStr) || null;

  elements.todayDayName.textContent = formatBanglaDay(dhakaNow.dateStr);
  elements.todayDateFull.textContent = formatBanglaDate(dhakaNow.dateStr);

  if (!todayEntry) {
    elements.todayRamadanDay.textContent = "রমজান নেই";
    elements.todaySehri.textContent = "—";
    elements.todayFajr.textContent = "—";
    elements.todayIftar.textContent = "—";
    return;
  }

  elements.todayRamadanDay.textContent = `রমজান ${getBanglaNumber(todayEntry.day)}`;
  elements.todaySehri.textContent = todayEntry.sehri;
  elements.todayFajr.textContent = todayEntry.fajr;
  elements.todayIftar.textContent = todayEntry.iftar;
}

function renderLocationTexts() {
  const zillaLabel = cleanZillaName(state.zilla);

  elements.locationSubtitle.textContent = `পবিত্র মাহে রমযান — ২০২৬ খ্রিস্টাব্দ | ${zillaLabel} জেলা`;
  elements.footerLocationText.textContent = `ইসলামিক ফাউন্ডেশন বাংলাদেশ | ${zillaLabel} জেলার সময়সূচি`;
  document.title = `রমজান ২০২৬ - সেহরি ও ইফতারের সময়সূচি | ${zillaLabel}`;

  if (state.offsets.source === "hardcoded") {
    elements.offsetNote.textContent = "ছবি থেকে দিনভিত্তিক নির্ভুল সময় প্রয়োগ করা হয়েছে";
  } else if (state.offsets.source === "image") {
    const sehriSign = state.offsets.sehri > 0 ? "+" : "";
    const iftarSign = state.offsets.iftar > 0 ? "+" : "";
    elements.offsetNote.textContent = `ছবি অনুযায়ী সমন্বয়: সেহরি/ফজর ${sehriSign}${state.offsets.sehri}, ইফতার ${iftarSign}${state.offsets.iftar} মিনিট`;
  } else if (state.offsetMinutes === 0) {
    elements.offsetNote.textContent = "ঢাকা রেফারেন্স সময়";
  } else {
    const sign = state.offsetMinutes > 0 ? "+" : "";
    elements.offsetNote.textContent = `ঢাকা থেকে সময় পার্থক্য: ${sign}${state.offsetMinutes} মিনিট`;
  }
}

function updateTimetableImageAndDownloads() {
  const asset = getSelectedAsset();
  if (!asset) return;

  state.image = asset.image;
  const zillaLabel = cleanZillaName(state.zilla);
  const encodedPath = encodeAssetPath(state.image);

  elements.timetableTitle.textContent = `${zillaLabel} জেলার পূর্ণ সময়সূচি`;
  elements.zillaTimetableImage.src = encodedPath;
  elements.zillaTimetableImage.alt = `${zillaLabel} zilla Ramadan timetable`;

  elements.downloadImageBtn.href = encodedPath;
  elements.downloadImageBtn.download = `${sanitizeForFilename(state.division)}-${sanitizeForFilename(state.zilla)}-ramadan-2026.jpg`;
}

function downloadLiveTimerSnapshot() {
  const todayEntry = state.schedule.find((item) => item.date === getDhakaNowParts().dateStr) || null;
  const generatedAt = new Intl.DateTimeFormat("en-GB", {
    timeZone: BANGLADESH_TIMEZONE,
    dateStyle: "full",
    timeStyle: "medium",
  }).format(new Date());

  const snapshot = latestTimerSnapshot || {
    countdown: elements.timerDisplay.textContent,
    event: elements.timerEvent.textContent,
  };

  const lines = [
    "Ramadan 2026 Live Timer Snapshot",
    `Division: ${formatDivisionDisplayName(state.division)}`,
    `Zilla: ${cleanZillaName(state.zilla)}`,
    `Generated (BST): ${generatedAt}`,
    `Countdown: ${snapshot.countdown}`,
    `Current Event: ${snapshot.event}`,
    state.offsets.source === "hardcoded"
      ? "Timing Source: Hardcoded day-by-day from timetable image"
      : `Time Offset From Dhaka (Sehri/Fajr): ${state.offsets.sehri} minute(s)`,
    state.offsets.source === "hardcoded"
      ? "Time Offset From Dhaka (Iftar): N/A (hardcoded)"
      : `Time Offset From Dhaka (Iftar): ${state.offsets.iftar} minute(s)`,
    "",
    "Today's Timings",
    `Sehri End: ${todayEntry ? todayEntry.sehri : "N/A"}`,
    `Fajr Azaan: ${todayEntry ? todayEntry.fajr : "N/A"}`,
    `Iftar: ${todayEntry ? todayEntry.iftar : "N/A"}`,
  ];

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${sanitizeForFilename(state.division)}-${sanitizeForFilename(state.zilla)}-live-timer.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function updateTimer() {
  const dhakaNow = getDhakaNowParts();
  const nowUtcMs = Date.now();
  elements.currentClock.textContent = `BST ${String(dhakaNow.hour).padStart(2, "0")}:${String(dhakaNow.minute).padStart(2, "0")}:${String(dhakaNow.second).padStart(2, "0")}`;

  const entry = state.schedule.find((item) => item.date === dhakaNow.dateStr) || null;

  if (!entry) {
    const scheduleSource = state.schedule.length ? state.schedule : baseRamadanData;
    const firstDayStartMs = dhakaDateStartUtcMs(scheduleSource[0].date);
    const lastDay = scheduleSource[scheduleSource.length - 1];
    const lastIftarMs = dhakaClockToUtcMs(lastDay.date, lastDay.iftar, true);

    if (nowUtcMs < firstDayStartMs) {
      const diff = firstDayStartMs - nowUtcMs;
      elements.timerDisplay.textContent = formatCountdown(diff);
      elements.timerDisplay.style.color = "#c9a84c";
      elements.timerEvent.textContent = "রমজান শুরু হতে বাকি";
      elements.timerEvent.style.color = "#c9a84c";
      elements.timerBar.style.background = "linear-gradient(90deg, #c9a84c, #e8c97a)";
      elements.timerBar.style.width = `${clampPercent(100 - ((diff / (24 * 60 * 60 * 1000)) * 100))}%`;
    } else if (nowUtcMs > lastIftarMs) {
      elements.timerDisplay.textContent = "রমজান শেষ";
      elements.timerDisplay.style.color = "#c9a84c";
      elements.timerEvent.textContent = "ঈদ মোবারক";
      elements.timerEvent.style.color = "#c9a84c";
      elements.timerBar.style.background = "#c9a84c";
      elements.timerBar.style.width = "100%";
    } else {
      elements.timerDisplay.textContent = "--:--:--";
      elements.timerDisplay.style.color = "#e8e0d0";
      elements.timerEvent.textContent = "আজকের ডাটা লোড হচ্ছে";
      elements.timerEvent.style.color = "#e8e0d0";
      elements.timerBar.style.width = "0%";
    }

    latestTimerSnapshot = {
      countdown: elements.timerDisplay.textContent,
      event: elements.timerEvent.textContent,
    };
    return;
  }

  const sehriMs = dhakaClockToUtcMs(entry.date, entry.sehri, false);
  const iftarMs = dhakaClockToUtcMs(entry.date, entry.iftar, true);
  const dayStartMs = dhakaDateStartUtcMs(entry.date);

  if (nowUtcMs < sehriMs) {
    const diff = sehriMs - nowUtcMs;
    const total = sehriMs - dayStartMs;
    const passed = nowUtcMs - dayStartMs;
    elements.timerDisplay.textContent = formatCountdown(diff);
    elements.timerDisplay.style.color = "#4a9eff";
    elements.timerEvent.textContent = "সাহরীর শেষ সময় পর্যন্ত বাকি";
    elements.timerEvent.style.color = "#4a9eff";
    elements.timerBar.style.background = "linear-gradient(90deg, #4a9eff, #a0cfff)";
    elements.timerBar.style.width = `${clampPercent((passed / total) * 100)}%`;
  } else if (nowUtcMs < iftarMs) {
    const diff = iftarMs - nowUtcMs;
    const total = iftarMs - sehriMs;
    const passed = nowUtcMs - sehriMs;
    elements.timerDisplay.textContent = formatCountdown(diff);
    elements.timerDisplay.style.color = "#ff7a45";
    elements.timerEvent.textContent = "ইফতার পর্যন্ত বাকি";
    elements.timerEvent.style.color = "#ff7a45";
    elements.timerBar.style.background = "linear-gradient(90deg, #ff7a45, #ffb088)";
    elements.timerBar.style.width = `${clampPercent((passed / total) * 100)}%`;
  } else {
    elements.timerDisplay.textContent = "ইফতার হয়েছে";
    elements.timerDisplay.style.color = "#3ddc84";
    elements.timerEvent.textContent = "আলহামদুলিল্লাহ";
    elements.timerEvent.style.color = "#3ddc84";
    elements.timerBar.style.background = "linear-gradient(90deg, #3ddc84, #a0ffcc)";
    elements.timerBar.style.width = "100%";
  }

  latestTimerSnapshot = {
    countdown: elements.timerDisplay.textContent,
    event: elements.timerEvent.textContent,
  };
}

function applyLocationSelection(divisionName, zillaName) {
  const zillaList = divisionZillaAssets[divisionName] || [];
  if (!zillaList.length) return;

  const chosen = zillaList.find((item) => item.name === zillaName) || zillaList[0];

  state.division = divisionName;
  state.zilla = chosen.name;
  const hardcodedSchedule = getDailyScheduleForZilla(chosen.name);
  if (hardcodedSchedule) {
    state.schedule = hardcodedSchedule;
    state.offsets = { sehri: 0, fajr: 0, iftar: 0, source: "hardcoded" };
    state.offsetMinutes = 0;
  } else {
    state.offsets = getOffsetsForZilla(chosen.name);
    state.offsetMinutes = state.offsets.sehri;
    state.schedule = buildAdjustedSchedule(state.offsets);
  }

  elements.divisionSelect.value = state.division;
  populateZillaOptions(state.division, state.zilla);
  elements.zillaSelect.value = state.zilla;

  renderLocationTexts();
  updateTimetableImageAndDownloads();
  renderTodayCard();
  renderScheduleTable();
  updateTimer();
  saveLocationSelection();
}

function initLocationSelectors() {
  populateDivisionOptions();
  const saved = loadSavedLocation();

  const divisions = Object.keys(divisionZillaAssets);
  const defaultDivision = divisions.includes(saved.division) ? saved.division : "Dhaka Division";

  elements.divisionSelect.addEventListener("change", (event) => {
    const newDivision = event.target.value;
    populateZillaOptions(newDivision);
    applyLocationSelection(newDivision, elements.zillaSelect.value);
  });

  elements.zillaSelect.addEventListener("change", (event) => {
    applyLocationSelection(elements.divisionSelect.value, event.target.value);
  });

  elements.downloadTimerBtn.addEventListener("click", downloadLiveTimerSnapshot);

  const initialZillaList = divisionZillaAssets[defaultDivision] || [];
  const defaultZilla = initialZillaList.some((item) => item.name === saved.zilla)
    ? saved.zilla
    : initialZillaList[0]?.name;

  applyLocationSelection(defaultDivision, defaultZilla);
}

window.showTab = function showTab(name, btn) {
  document.querySelectorAll(".tab-content").forEach((tab) => tab.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach((tabBtn) => tabBtn.classList.remove("active"));
  document.getElementById(`tab-${name}`).classList.add("active");
  btn.classList.add("active");
};

function init() {
  cacheElements();
  buildStars();
  initLocationSelectors();
  setInterval(updateTimer, 1000);
}

init();
