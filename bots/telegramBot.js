
const BOT_TOKEN = '6438008387:AAGcabwv4RGXVbNpssbqXK4Mz3VioNvTb3E';

async function sendMessage(chatId, text) {
    const apiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const params = { chat_id: chatId, text };

    await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
    });
}

module.exports = { sendMessage };