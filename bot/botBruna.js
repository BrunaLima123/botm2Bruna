const env = require('../.env')
const { Telegraf, Markup } = require('telegraf')
const bot = new Telegraf(env.token)

  bot.start(async ctx => {
    const from = ctx.update.message.from
    if (from.id == ' 1351450134' || from.id == '5416120477') {
      
   await ctx.replyWithHTML(`<b>Seja bem vindo(a)</b> ${from.first_name}! 
        Eu sou o botLivros de Nicholas Sparks! Prazer em conhecer você!`)
        
        await ctx.reply(
            'Primeiramente, me diga, o que deseja fazer? Conversar, ou Livros? Pode clicar na opção se preferir, ou digitar.',
            Markup.keyboard(['Livros', 'Conversar']).resize().oneTime()
          )
      
      } else {
        ctx.reply(
          `SAI ${from.first_name} ${from.last_name}!! Só falo com a Bruna ou o professor Emerson u.u`
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
        await ctx.reply(
          'Se quiser também, me diga através do teclado usando os emojis indicados, qual bebida você gosta para acompanhar uma leitura?',
          Markup.keyboard(['☕', '🥛','🍺','🍷']).resize().oneTime()
        )

        bot.hears('☕', ctx=>{ ctx.replyWithHTML('<b>Café! Show, ótima combinação!</b> Sabia que ambos são bons para a memória e a leitura, em particular, previne doenças mentais que envolvem, sobretudo, o esquecimento (como o Alzheimer)? Legal né?! Agora, digite o que deseja novamente: Livros, Conversar ou me diga mais uma bebida que você gosta!')
        })
        bot.hears('🥛', ctx=>{ ctx.replyWithHTML('<b>Leite! Legal!</b> Sabia que Leite e produtos lácteos são fontes de cálcio, fósforo, magnésio e proteínas, que são essenciais para o crescimento e o desenvolvimento saudável dos ossos. O consumo adequado destas substâncias desde a infância e na vida adulta pode ajudar a tornar os ossos mais fortes e protegê-los contra doenças como a osteoporose? Legal né?! Agora, digite o que deseja novamente: Livros, Conversar ou me diga mais uma bebida que você gosta!')
        })
        bot.hears('🍺', ctx=>{ ctx.replyWithHTML('<b>Cerveja! Hummmm, interessante!</b> Sabia que a cerveja tem vários beneficios, e alguns deles são: Protege o cérebro, combate o estresse, aumenta a imunidade, fortalece os ossos, mantém os rins saudáveis, entre outros.... Legal né?! Agora, digite o que deseja novamente: Livros, Conversar ou me diga mais uma bebida que você gosta!')
        })
        bot.hears('🍷', ctx=>{ ctx.replyWithHTML('<b>Vinho! Que chique!</b> Sabia que Pesquisadores apontam que o consumo moderado de vinho tinto, duas taças ao dia, pode reduzir em até 20% o risco de doenças cardíacas? Isso porque, o vinho tinto é rico em polifenóis, substâncias presentes na casca da uva, que aumentam os níveis de colesterol bom!! Legal né?! Agora, digite o que deseja novamente: Livros, Conversar ou me diga mais uma bebida que você gosta!')
        })
        
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