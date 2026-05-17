async function mencStatus(texto) {
   try {
      if (isQuotedImage) {
         const imgB = await getFileBuffer(info?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage, 'image')
         await conn.sendMessage(from, {
            image: imgB, caption: texto || "oikk", contextInfo: {
               isGroupStatus: true
            }
         });
         DLT_FL(imgB);
      } else if (isQuotedVideo) {
         const videoB = await getFileBuffer(info?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage, 'video')
         await conn.sendMessage(from, {
            video: videoB, caption: texto || "oikk", contextInfo: {
               isGroupStatus: true
            }
         });
         DLT_FL(videoB)
      } else {
         await conn.sendMessage(from, {
            text: texto || "oikk", contextInfo: {
               isGroupStatus: true
            }
         });
      }
   } catch (e) {
      console.log(e)
      reply("erro: " + e)
   }
}