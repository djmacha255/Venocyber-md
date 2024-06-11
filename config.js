//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255788213342";
global.sudo = process.env.SUDO || "255788213342";
global.owner = process.env.OWNER_NUMBER || "255788213342";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0hoNHAwWkZ4ZnNaR0N5S1dvRU1mYTBuaEgxM0t4YVZLV2Y4NUFHdkRYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnhrYVExQUJ4a2s3NGRtRi81WVRiL3Eyc1lUdXVQVTg4VW0vUVRkTzFXND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTjVpNi94YVowUFI5dEw5VG1Ebnl3WXh4S0NnVjZEUnprcXJQdmxzdEYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQR3RWTlcxZHAwUnFEOFdGdmV4NDB2ZlRvYXpaWkJBc3FSSzNnUGJuaHljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFFN1BCZmI5ZTZTY3Y0SUZrNmJUcDJ6MlkvUER0dTh4Qm5hQ2kxT1l3VnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV5a3prWkdGc21hZkk4UHhaTzlJcnRrZjZDSXJXeTcrUWdxWGhTeVlMU2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVA2OWtkdU9QaUE2L21tVE1KSG1nK0ErRUYyeEF5VGNYWjJnMzRUTWsyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1pSM3lQZ2tLUkdZeGw0ZGJFRUdsV2tCaXcwVmtiYTBvaTNDKzVLR1BpUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inc4RFBiampwWXVVRjR0U3A1aWxZdXV0aExDTDNycGxMdG0zOTZnaDQzTzFCRlFxVUdMQk1QL0Q1dnJvQXdFVzlGN2c1S2dGY0w3TlFMRjZoaXZhUmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6IjBkM2VzWDVOMGhqVkY3bEF1aDlod3h6ZlRGRUFKRzZwOHc4ZE84RUljRm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1Nzg4MjEzMzQyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk4RENFOURCNzI2QkNDMEFBQ0Y1QjQ3QjgwRjJGQjNCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTgxMjgyNjF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlR2SUI3cFY1VGhTV1dvc0NKZVlTNGciLCJwaG9uZUlkIjoiYWU0ZjFiY2UtYjdjMy00NmUwLThmNjYtYjFjOWQzYmY5MTY1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIwNjRnTlVncFhNMnFDMG9IYWlheXlsa1ZEaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQZWxmK0VLck0vK1Z6MWg1b3U4NjVXM1NkYjg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSjhNWFBKU1EiLCJtZSI6eyJpZCI6IjI1NTc4ODIxMzM0MjoyN0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHlvc2FzRkVQS2Nvck1HR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWHduVlcxc20vc0V2MXA0MktPUnlBazc2UkVBKzM1cXY3eFZibU5zNjNTaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidlRqMThJL1NDL2pITlRST2pZOEZPMmFmOWhHYjZabjcwcFFWZGdNTkZhY1pOSDl5ZmFUNW02NmtFb0dZYWZlMlVwNnI3Y1FNaHg2UFFrdllDK3duQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Ik9TUkVpSk5KSTE2MjE0NUtpRzEwd0xVL2pXU2lOSWo1RytnQXFnYkN5K2trMmFTY3czSHJhVjVRV3p2cFExejV0aE9JbGV1YlZ3YVNjbGxMOTBweGh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1Nzg4MjEzMzQyOjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlY4SjFWdGJKdjdCTDlhZU5pamtjZ0pPK2tSQVB0K2FyKzhWVzVqYk90MHAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTgxMjgyNTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQVM4In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝘨𝘳𝘦𝘢𝘵 𝘥𝘢𝘺 | DJ MACHA 255 PRO",
  author: process.env.PACK_AUTHER || "DJ MACHA 255 PRO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "DJ MACHA 255-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "DJ MACHA 255 PRO",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
