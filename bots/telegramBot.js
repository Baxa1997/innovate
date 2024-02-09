
const PARTNERSHIP_BOT_TOKEN = '6438008387:AAGcabwv4RGXVbNpssbqXK4Mz3VioNvTb3E';
const CHAT_BOT_TOKEN = '6646957552:AAEZeZtU5bjezF0kU0rxDbgSuE_njOAo4xo';

async function sendPartnerShipMessage(chatId, text) {
    const apiUrl = `https://api.telegram.org/bot${PARTNERSHIP_BOT_TOKEN}/sendMessage`;
    const params = { chat_id: chatId, text };

    await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
    });
}
async function sendChatMessage(chatId, text) {
    const apiUrl = `https://api.telegram.org/bot${CHAT_BOT_TOKEN}/sendMessage`;
    const params = { chat_id: chatId, text };

    await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
    });
}

module.exports = { sendPartnerShipMessage, sendChatMessage };