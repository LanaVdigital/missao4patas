require('dotenv').config(); // ← isso carrega as variáveis do .env
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*'
  }
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

app.use(bodyParser.raw({ type: 'application/json' }));

// Conexão do Socket.IO
io.on('connection', socket => {
  console.log('🚀 Novo frontend conectado ao Socket.io');
});

// ROTA DO WEBHOOK DO STRIPE
app.post('/webhook', (request, response) => {
  const sig = request.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    console.error('❌ Erro ao verificar assinatura!', err.message);
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const valor = session.amount_total / 100;

    console.log('✅ Doação recebida!', valor, 'R$');

    // 🔥 Dispara pro frontend
    io.emit('novaDoacao', {
      valor,
      email: session.customer_details?.email || 'anônimo',
    });
  }

  response.status(200).send('Recebido com sucesso');
});

server.listen(3000, () => {
  console.log('🔥 Webhook escutando na porta 3000 com Socket.IO ativado');
});
