const { Telegraf } = require('telegraf');
const http = require('http');

const bot = new Telegraf('8825421510:AAGB3kzkZCj6cYb9Rdj9ZG9MQ6J3ui39EEI');

const elements = [
    { number: 1, symbol: 'H', name: 'Vodorod', mass: 1.008, group: '1-guruh', period: '1-davr', discoverer: 'G. Kavendish (1766)' },
    { number: 2, symbol: 'He', name: 'Geliy', mass: 4.0026, group: '18-guruh', period: '1-davr', discoverer: 'P. Jansen (1868)' },
    { number: 3, symbol: 'Li', name: 'Litiy', mass: 6.94, group: '1-guruh', period: '2-davr', discoverer: 'A. Arfvedson (1817)' },
    { number: 4, symbol: 'Be', name: 'Berilliy', mass: 9.0122, group: '2-guruh', period: '2-davr', discoverer: 'L. Voklen (1798)' },
    { number: 5, symbol: 'B', name: 'Bor', mass: 10.81, group: '13-guruh', period: '2-davr', discoverer: 'J. Gey-Lyussak (1808)' },
    { number: 6, symbol: 'C', name: 'Uglerod', mass: 12.011, group: '14-guruh', period: '2-davr', discoverer: 'Qadim zamonlardan ma\'lum' },
    { number: 7, symbol: 'N', name: 'Azot', mass: 14.007, group: '15-guruh', period: '2-davr', discoverer: 'D. Rezerford (1772)' },
    { number: 8, symbol: 'O', name: 'Oksigen', mass: 15.999, group: '16-guruh', period: '2-davr', discoverer: 'J. Pristli (1774)' },
    { number: 9, symbol: 'F', name: 'Ftor', mass: 18.998, group: '17-guruh', period: '2-davr', discoverer: 'A. Muassan (1886)' },
    { number: 10, symbol: 'Ne', name: 'Neon', mass: 20.180, group: '18-guruh', period: '2-davr', discoverer: 'U. Ramzay (1898)' },
    { number: 11, symbol: 'Na', name: 'Natriy', mass: 22.990, group: '1-guruh', period: '3-davr', discoverer: 'G. Devi (1807)' },
    { number: 12, symbol: 'Mg', name: 'Magniy', mass: 24.305, group: '2-guruh', period: '3-davr', discoverer: 'G. Devi (1808)' },
    { number: 13, symbol: 'Al', name: 'Alyuminiy', mass: 26.982, group: '13-guruh', period: '3-davr', discoverer: 'X. Ersted (1825)' },
    { number: 14, symbol: 'Si', name: 'Silisium', mass: 28.085, group: '14-guruh', period: '3-davr', discoverer: 'Y. Berselius (1823)' },
    { number: 15, symbol: 'P', name: 'Phosphor', mass: 30.974, group: '15-guruh', period: '3-davr', discoverer: 'X. Brand (1669)' },
    { number: 16, symbol: 'S', name: 'Oltingugurt', mass: 32.06, group: '16-guruh', period: '3-davr', discoverer: 'Qadim zamonlardan ma\'lum' },
    { number: 17, symbol: 'Cl', name: 'Xlor', mass: 35.45, group: '17-guruh', period: '3-davr', discoverer: 'K. Sheele (1774)' },
    { number: 18, symbol: 'Ar', name: 'Argon', mass: 39.948, group: '18-guruh', period: '3-davr', discoverer: 'U. Ramzay (1894)' },
    { number: 19, symbol: 'K', name: 'Kaliy', mass: 39.098, group: '1-guruh', period: '4-davr', discoverer: 'G. Devi (1807)' },
    { number: 20, symbol: 'Ca', name: 'Kalsiy', mass: 40.078, group: '2-guruh', period: '4-davr', discoverer: 'G. Devi (1808)' },
    { number: 26, symbol: 'Fe', name: 'Temir', mass: 55.845, group: '8-guruh', period: '4-davr', discoverer: 'Qadim zamonlardan ma\'lum' }
];

bot.start((ctx) => {
    ctx.reply(`Salom ${ctx.from.first_name}! Mendeleyev davriy jadvali botiga xush kelibsiz. 😊\n\nMa'lumot olish uchun element belgisini (masalan: O, Fe, Na) yoki tartib raqamini (masalan: 8, 26, 11) yozib yuboring.`);
});

bot.on('text', (ctx) => {
    const userInput = ctx.message.text.trim().toLowerCase();
    const foundElement = elements.find(el => 
        el.symbol.toLowerCase() === userInput || 
        el.name.toLowerCase() === userInput || 
        el.number.toString() === userInput
    );

    if (foundElement) {
        const response = `🧪 *${foundElement.name} (${foundElement.symbol})*\n\n• *Tartib raqami:* ${foundElement.number}\n• *Atom massasi:* ${foundElement.mass} g/mol\n• *Joylashuvi:* ${foundElement.group}, ${foundElement.period}\n• *Kashf etilishi:* ${foundElement.discoverer}`;
        ctx.replyWithMarkdown(response);
    } else {
        ctx.reply("❌ Kechirasiz, bunday element topilmadi. Qaytadan tekshirib ko'ring (Masalan: H, Vodorod yoki 1).");
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
});
     
