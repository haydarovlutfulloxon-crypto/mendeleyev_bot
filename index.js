const { Telegraf } = require('telegraf');
const http = require('http');

// Tokeningiz joylangan
const bot = new Telegraf(8825421510:AAH8qlRNKgu8iHB7doAVj-WgUEJ5EGS3mGc);

const elements = [
    { number: 1, symbol: 'H', name: 'Vodorod', mass: 1.008, period: 1, group: 1 },
    { number: 2, symbol: 'He', name: 'Geliy', mass: 4.0026, period: 1, group: 18 },
    { number: 3, symbol: 'Li', name: 'Litiy', mass: 6.94, period: 2, group: 1 },
    { number: 4, symbol: 'Be', name: 'Berilliy', mass: 9.0122, period: 2, group: 2 },
    { number: 5, symbol: 'B', name: 'Bor', mass: 10.81, period: 2, group: 13 },
    { number: 6, symbol: 'C', name: 'Uglerod', mass: 12.011, period: 2, group: 14 },
    { number: 7, symbol: 'N', name: 'Azot', mass: 14.007, period: 2, group: 15 },
    { number: 8, symbol: 'O', name: 'Oksigen', mass: 15.999, period: 2, group: 16 },
    { number: 9, symbol: 'F', name: 'Ftor', mass: 18.998, period: 2, group: 17 },
    { number: 10, symbol: 'Ne', name: 'Neon', mass: 20.180, period: 2, group: 18 },
    { number: 11, symbol: 'Na', name: 'Natriy', mass: 22.990, period: 3, group: 1 },
    { number: 12, symbol: 'Mg', name: 'Magniy', mass: 24.305, period: 3, group: 2 },
    { number: 13, symbol: 'Al', name: 'Alyuminiy', mass: 26.982, period: 3, group: 13 },
    { number: 14, symbol: 'Si', name: 'Silisium', mass: 28.085, period: 3, group: 14 },
    { number: 15, symbol: 'P', name: 'Phosphor', mass: 30.974, period: 3, group: 15 },
    { number: 16, symbol: 'S', name: 'Oltingugurt', mass: 32.06, period: 3, group: 16 },
    { number: 17, symbol: 'Cl', name: 'Xlor', mass: 35.45, period: 3, group: 17 },
    { number: 18, symbol: 'Ar', name: 'Argon', mass: 39.948, period: 3, group: 18 },
    { number: 19, symbol: 'K', name: 'Kaliy', mass: 39.098, period: 4, group: 1 },
    { number: 20, symbol: 'Ca', name: 'Kalsiy', mass: 40.078, period: 4, group: 2 },
    { number: 21, symbol: 'Sc', name: 'Skandiy', mass: 44.956, period: 4, group: 3 },
    { number: 22, symbol: 'Ti', name: 'Titan', mass: 47.867, period: 4, group: 4 },
    { number: 23, symbol: 'V', name: 'Vanadiy', mass: 50.942, period: 4, group: 5 },
    { number: 24, symbol: 'Cr', name: 'Xrom', mass: 51.996, period: 4, group: 6 },
    { number: 25, symbol: 'Mn', name: 'Marganets', mass: 54.938, period: 4, group: 7 },
    { number: 26, symbol: 'Fe', name: 'Temir', mass: 55.845, period: 4, group: 8 },
    { number: 27, symbol: 'Co', name: 'Kobalt', mass: 58.933, period: 4, group: 9 },
    { number: 28, symbol: 'Ni', name: 'Nikel', mass: 58.693, period: 4, group: 10 },
    { number: 29, symbol: 'Cu', name: 'Mis', mass: 63.546, period: 4, group: 11 },
    { number: 30, symbol: 'Zn', name: 'Sink', mass: 65.38, period: 4, group: 12 },
    { number: 31, symbol: 'Ga', name: 'Galliy', mass: 69.723, period: 4, group: 13 },
    { number: 32, symbol: 'Ge', name: 'Germaniy', mass: 72.630, period: 4, group: 14 },
    { number: 33, symbol: 'As', name: 'Mishyak', mass: 74.922, period: 4, group: 15 },
    { number: 34, symbol: 'Se', name: 'Selen', mass: 78.971, period: 4, group: 16 },
    { number: 35, symbol: 'Br', name: 'Brom', mass: 79.904, period: 4, group: 17 },
    { number: 36, symbol: 'Kr', name: 'Kripton', mass: 83.798, period: 4, group: 18 },
    { number: 37, symbol: 'Rb', name: 'Rubidiy', mass: 85.468, period: 5, group: 1 },
    { number: 38, symbol: 'Sr', name: 'Stronsiy', mass: 87.62, period: 5, group: 2 },
    { number: 39, symbol: 'Y', name: 'Ittriy', mass: 88.906, period: 5, group: 3 },
    { number: 40, symbol: 'Zr', name: 'Tsirkoniy', mass: 91.224, period: 5, group: 4 },
    { number: 41, symbol: 'Nb', name: 'Niobiy', mass: 92.906, period: 5, group: 5 },
    { number: 42, symbol: 'Mo', name: 'Molibden', mass: 95.95, period: 5, group: 6 },
    { number: 43, symbol: 'Tc', name: 'Texnetsiy', mass: 98, period: 5, group: 7 },
    { number: 44, symbol: 'Ru', name: 'Ruteniy', mass: 101.07, period: 5, group: 8 },
    { number: 45, symbol: 'Rh', name: 'Rodiy', mass: 102.91, period: 5, group: 9 },
    { number: 46, symbol: 'Pd', name: 'Palladiy', mass: 106.42, period: 5, group: 10 },
    { number: 47, symbol: 'Ag', name: 'Kumush', mass: 107.87, period: 5, group: 11 },
    { number: 48, symbol: 'Cd', name: 'Kadmiy', mass: 112.41, period: 5, group: 12 },
    { number: 49, symbol: 'In', name: 'Indiy', mass: 114.82, period: 5, group: 13 },
    { number: 50, symbol: 'Sn', name: 'Qalay', mass: 118.71, period: 5, group: 14 },
    { number: 51, symbol: 'Sb', name: 'Surma', mass: 121.76, period: 5, group: 15 },
    { number: 52, symbol: 'Te', name: 'Tellur', mass: 127.60, period: 5, group: 16 },
    { number: 53, symbol: 'I', name: 'Yod', mass: 126.90, period: 5, group: 17 },
    { number: 54, symbol: 'Xe', name: 'Ksenon', mass: 131.29, period: 5, group: 18 },
    { number: 55, symbol: 'Cs', name: 'Tseziy', mass: 132.91, period: 6, group: 1 },
    { number: 56, symbol: 'Ba', name: 'Bariy', mass: 137.33, period: 6, group: 2 },
    { number: 57, symbol: 'La', name: 'Lantan', mass: 138.91, period: 6, group: 3 },
    { number: 58, symbol: 'Ce', name: 'Tseriy', mass: 140.12, period: 6, group: 3 },
    { number: 59, symbol: 'Pr', name: 'Prazeodim', mass: 140.91, period: 6, group: 3 },
    { number: 60, symbol: 'Nd', name: 'Neodim', mass: 144.24, period: 6, group: 3 },
    { number: 61, symbol: 'Pm', name: 'Prometiy', mass: 145, period: 6, group: 3 },
    { number: 62, symbol: 'Sm', name: 'Samariy', mass: 150.36, period: 6, group: 3 },
    { number: 63, symbol: 'Eu', name: 'Yevropiy', mass: 151.96, period: 6, group: 3 },
    { number: 64, symbol: 'Gd', name: 'Gadoliniy', mass: 157.25, period: 6, group: 3 },
    { number: 65, symbol: 'Tb', name: 'Terbiy', mass: 158.93, period: 6, group: 3 },
    { number: 66, symbol: 'Dy', name: 'Disproziy', mass: 162.50, period: 6, group: 3 },
    { number: 67, symbol: 'Ho', name: 'Golmiy', mass: 164.93, period: 6, group: 3 },
    { number: 68, symbol: 'Er', name: 'Erbiy', mass: 167.26, period: 6, group: 3 },
    { number: 69, symbol: 'Tm', name: 'Tuliy', mass: 168.93, period: 6, group: 3 },
    { number: 70, symbol: 'Yb', name: 'Itterbiy', mass: 173.05, period: 6, group: 3 },
    { number: 71, symbol: 'Lu', name: 'Lyutetsiy', mass: 174.97, period: 6, group: 3 },
    { number: 72, symbol: 'Hf', name: 'Gafniy', mass: 178.49, period: 6, group: 4 },
    { number: 73, symbol: 'Ta', name: 'Tantal', mass: 180.95, period: 6, group: 5 },
    { number: 74, symbol: 'W', name: 'Volfram', mass: 183.84, period: 6, group: 6 },
    { number: 75, symbol: 'Re', name: 'Reniy', mass: 186.21, period: 6, group: 7 },
    { number: 76, symbol: 'Os', name: 'Osmiy', mass: 190.23, period: 6, group: 8 },
    { number: 77, symbol: 'Ir', name: 'Iridiy', mass: 192.22, period: 6, group: 9 },
    { number: 78, symbol: 'Pt', name: 'Platina', mass: 195.08, period: 6, group: 10 },
    { number: 79, symbol: 'Au', name: 'Oltin', mass: 196.97, period: 6, group: 11 },
    { number: 80, symbol: 'Hg', name: 'Simob', mass: 200.59, period: 6, group: 12 },
    { number: 81, symbol: 'Tl', name: 'Talliy', mass: 204.38, period: 6, group: 13 },
    { number: 82, symbol: 'Pb', name: 'Qurgoshin', mass: 207.2, period: 6, group: 14 },
    { number: 83, symbol: 'Bi', name: 'Bismut', mass: 208.98, period: 6, group: 15 },
    { number: 84, symbol: 'Po', name: 'Poloniy', mass: 209, period: 6, group: 16 },
    { number: 85, symbol: 'At', name: 'Astat', mass: 210, period: 6, group: 17 },
    { number: 86, symbol: 'Rn', name: 'Radon', mass: 222, period: 6, group: 18 },
    { number: 87, symbol: 'Fr', name: 'Fransiy', mass: 223, period: 7, group: 1 },
    { number: 88, symbol: 'Ra', name: 'Radiy', mass: 226, period: 7, group: 2 },
    { number: 89, symbol: 'Ac', name: 'Aktiniy', mass: 227, period: 7, group: 3 },
    { number: 90, symbol: 'Th', name: 'Toriy', mass: 232.04, period: 7, group: 3 },
    { number: 91, symbol: 'Pa', name: 'Protaktiniy', mass: 231.04, period: 7, group: 3 },
    { number: 92, symbol: 'U', name: 'Uran', mass: 238.03, period: 7, group: 3 },
    { number: 93, symbol: 'Np', name: 'Neptuniy', mass: 237, period: 7, group: 3 },
    { number: 94, symbol: 'Pu', name: 'Plutoniy', mass: 244, period: 7, group: 3 },
    { number: 95, symbol: 'Am', name: 'Ameritsiy', mass: 243, period: 7, group: 3 },
    { number: 96, symbol: 'Cm', name: 'Kyuriy', mass: 247, period: 7, group: 3 },
    { number: 97, symbol: 'Bk', name: 'Berkliy', mass: 247, period: 7, group: 3 },
    { number: 98, symbol: 'Cf', name: 'Kaliforniy', mass: 251, period: 7, group: 3 },
    { number: 99, symbol: 'Es', name: 'Eynshteyniy', mass: 252, period: 7, group: 3 },
    { number: 100, symbol: 'Fm', name: 'Fermiy', mass: 257, period: 7, group: 3 },
    { number: 101, symbol: 'Md', name: 'Mendeleviy', mass: 258, period: 7, group: 3 },
    { number: 102, symbol: 'No', name: 'Nobeliy', mass: 259, period: 7, group: 3 },
    { number: 103, symbol: 'Lr', name: 'Lourensiy', mass: 266, period: 7, group: 3 },
    { number: 104, symbol: 'Rf', name: 'Rezerfordiy', mass: 267, period: 7, group: 4 },
    { number: 105, symbol: 'Db', name: 'Dubniy', mass: 268, period: 7, group: 5 },
    { number: 106, symbol: 'Sg', name: 'Siborgiy', mass: 269, period: 7, group: 6 },
    { number: 107, symbol: 'Bh', name: 'Boriy', mass: 270, period: 7, group: 7 },
    { number: 108, symbol: 'Hs', name: 'Hassiy', mass: 277, period: 7, group: 8 },
    { number: 109, symbol: 'Mt', name: 'Maytneriy', mass: 278, period: 7, group: 9 },
    { number: 110, symbol: 'Ds', name: 'Darmshtadtiy', mass: 281, period: 7, group: 10 },
    { number: 111, symbol: 'Rg', name: 'Rentgeniy', mass: 282, period: 7, group: 11 },
    { number: 112, symbol: 'Cn', name: 'Kopernikiy', mass: 285, period: 7, group: 12 },
    { number: 113, symbol: 'Nh', name: 'Nixoniy', mass: 286, period: 7, group: 13 },
    { number: 114, symbol: 'Fl', name: 'Fleroviy', mass: 289, period: 7, group: 14 },
    { number: 115, symbol: 'Mc', name: 'Moskoviy', mass: 290, period: 7, group: 15 },
    { number: 116, symbol: 'Lv', name: 'Livermoriy', mass: 293, period: 7, group: 16 },
    { number: 117, symbol: 'Ts', name: 'Tennessin', mass: 294, period: 7, group: 17 },
    { number: 118, symbol: 'Og', name: 'Oganeson', mass: 294, period: 7, group: 18 }
];

bot.start((ctx) => {
    try {
        ctx.reply(`Salom ${ctx.from.first_name}! Mendeleyev davriy jadvali botiga xush kelibsiz. 😊\n\nIstalgan element belgisini (masalan: H, O, Zn), nomini (masalan: Sink) yoki tartib raqamini yozib yuboring.`);
    } catch (e) {
        console.error(e);
    }
});

bot.on('text', (ctx) => {
    try {
        const userInput = ctx.message.text.trim().toLowerCase();
        const foundElement = elements.find(el => 
            el.symbol.toLowerCase() === userInput || 
            el.name.toLowerCase() === userInput || 
            el.number.toString() === userInput
        );

        if (foundElement) {
            const groupText = foundElement.group ? `• *Joylashuvi:* ${foundElement.group}-guruh, ${foundElement.period}-davr` : `• *Joylashuvi:* ${foundElement.period}-davr (Lantanoid/Aktinoid)`;
            const response = `🧪 *${foundElement.name} (${foundElement.symbol})*\n\n• *Tartib raqami:* ${foundElement.number}\n• *Atom massasi:* ${foundElement.mass} g/mol\n${groupText}`;
            ctx.replyWithMarkdown(response);
        } else {
            ctx.reply("❌ Kechirasiz, bunday element topilmadi. Qaytadan tekshirib ko'ring (Masalan: Zn, Sink yoki 30).");
        }
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        ctx.reply("⚠️ Ma'lumot qidirishda texnik xatolik yuz berdi.");
    }
});

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot ishlamoqda...\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server ${PORT}-portda ishlamoqda`);
});

bot.launch().then(() => {
    console.log('Bot muvaffaqiyatli ishga tushdi!');
}).catch((err) => {
    console.error("Botni ishga tushirishda xato:", err);
});
        
