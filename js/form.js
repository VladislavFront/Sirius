// Отправка форм в телеграм

const TOKEN = '7153007976:AAFq1JvopPBfB1uOUbmnOgm7S2bxVeKSg0s'
const CTHAT_ID = '-4755798771'
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault()

  let message = 'Звявка с сайта\n' + 'Имя: ' + this.name.value + '\n' + 'Телефон: ' + this.phone.value + '\n' + 'Сообщение: ' + this.message.value

  axios.post(URL_API, {
    chat_id: CTHAT_ID,
    parse_mode: 'html',
    text: message
  })

  .then((res) => {
    console.log('доставлено')
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('Завершилось')
    document.getElementById('contactForm').reset()
  })

})