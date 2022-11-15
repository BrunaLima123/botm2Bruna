const env = require('../.env')
const { Telegraf, Markup } = require('telegraf')
const bot = new Telegraf(env.token)

  bot.start(async ctx => {
    const from = ctx.update.message.from
    if (from.id != ' 1351450134') {
      ctx.reply(
        `SAI ${from.first_name} ${from.last_name}!! Só falo com a Bruna ou o professor Emerson u.u`
      )
    } else {
   await ctx.replyWithHTML(`<b>Seja bem vindo(a)</b> ${from.first_name}! 
        Eu sou o botLivros de Nicholas Sparks! Prazer em conhecer você!`)
        
        await ctx.reply(
            'Primeiramente, me diga, o que deseja fazer?',
            Markup.keyboard(['Livros', 'Conversar']).resize().oneTime()
          )
        }})

        bot.hears(['Livros'], async ctx => {
        await ctx.replyWithHTML(`Posso pesquisar livros do autor, por título! Basta me dizer qual livro da lista você deseja pesquisar.
        <i> Ei, para facilitar, favor digitar certinho como está escrito na lista, pois estou na fase de aprendizagem ainda, valeu :) </i> 
        Segue os top 10!
        <code>     Querido John
        Um amor para recordar
        Diário de uma paixão
        A última música
        O melhor de mim
        Uma longa jornada
        Um porto seguro
        Uma escolha por amor
        Uma carta de amor
        O guardião
        </code>      `)
        
        bot.hears('Querido John', ctx => {
            ctx.replyWithHTML('<b> Ótima escolha, leia agora mesmo! </b> <a href="https://www.amazon.com.br/Querido-John-Sparks-Nicholas/dp/8563219022"> Querido John </a>')
          })
          bot.hears('Um amor para recordar', ctx => {
            ctx.replyWithHTML('<b> Legal, veja! </b> <a href="https://www.amazon.com.br/amor-para-recordar-Nicholas-Sparks/dp/8580419816"> Um amor para recordar </a>')
          })
          bot.hears('Diário de uma paixão', ctx => {
            ctx.replyWithHTML('<b> Show, teve uma ótima escolha! Leia agora mesmo! </b> <a href="amazon.com.br/Diário-uma-paixão-Nicholas-Sparks/dp/8580416701"> Diário de uma paixão </a>')
          })
          bot.hears('A última música', ctx => {
            ctx.replyWithHTML('<b> Hummm... boa escolha! Leia agora mesmo! </b> <a href="https://www.amazon.com.br/%C3%9Altima-M%C3%BAsica-Sparks-Nicholas/dp/8563219073"> A ultima música </a>')
          })
          bot.hears('O melhor de mim', ctx => {
            ctx.replyWithHTML('<b> Isso ai, esse é de deixar o coração quentinho! </b> <a href="https://www.amazon.com.br/melhor-mim-Nicholas-Sparks/dp/8580413346"> O melhor de mim </a>')
          })
          bot.hears('Uma longa jornada', ctx => {
            ctx.replyWithHTML('<b> Legal, veja! </b> <a href="https://www.amazon.com.br/Uma-longa-jornada-Nicholas-Sparks/dp/8580413885"> Uma longa jornada </a>')
          })
          bot.hears('Um porto seguro', ctx => {
            ctx.replyWithHTML('<b> Show! Ótima escolha, leia! </b> <a href="https://www.amazon.com.br/Um-porto-seguro-Nicholas-Sparks/dp/8580416086"> Um porto seguro </a>')
          })
          bot.hears('Uma escolha por amor', ctx => {
            ctx.replyWithHTML('<b> Show, veja! </b> <a href="https://www.amazon.com.br/Uma-Escolha-Amor-Edi%C3%A7%C3%A3o-Portugu%C3%AAs/dp/9892334345"> Uma escolha por amor </a>')
          })
          bot.hears('Uma carta de amor', ctx => {
            ctx.replyWithHTML('<b> Hummm... Esse é um dos melhores! Veja! </b> <a href="https://www.amazon.com.br/Uma-carta-amor-Nicholas-Sparks/dp/8580412471"> Uma carta de amor </a>')
          })
          bot.hears('O guardião', ctx => {
            ctx.replyWithHTML('<b> Legal! Veja! </b> <a href="https://www.amazon.com.br/guardi%C3%A3o-Nicholas-Sparks/dp/8580416124"> O guardião </a>')
          })

    
  })

  bot.hears(['Conversar'], async ctx => {
    await ctx.reply(`Legal! Você quer apenas ${ctx.match}!
                  Você poderá me enviar: fotos, vídeos, aúdios, stickers, contatos ou sua localização. Irei responder tudo!!
                   
                   Vamos lá! Me envie algo...`)
  })
  bot.on('location', ctx => {
    const loc = ctx.update.message.location
    console.log(loc)
    ctx.reply(`Olha só! Você está em:
              Latitude: ${loc.latitude},
              Longitude: ${loc.longitude}
              Legal, né?!`)
  })
  
  bot.on('contact', ctx => {
    const cont = ctx.update.message.contact
    console.log(cont)
    ctx.reply(`O telefone de ${cont.first_name} 
              é: ${cont.phone_number}`)
  })
  
  bot.on('voice', ctx => {
    const voz = ctx.update.message.voice
    console.log(voz)
    ctx.reply(`Esse áudio que você me enviou tem ${voz.duration} segundos! Logo irei aprender a falar, e vou te enviar áudios também! :)`)
  })
  
  bot.on('photo', ctx => {
    const foto = ctx.update.message.photo
    console.log(foto)
    console.log(foto.length)
    foto.forEach((photo, i) => {
      ctx.reply(`Sua foto tem resolução de:
                ${photo.width} x ${photo.height}`)
    })
  })
  
  bot.on('sticker', ctx => {
    const stic = ctx.update.message.sticker
    console.log(stic)
    ctx.reply(`Essa figurinha é ${stic.emoji} 
              do conjunto ${stic.set_name}`)
  })






  bot.startPolling()