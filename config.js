const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Kaluthara,Srilanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0. t1 wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/BxXB834YgV8JorX5tCDEEM";
global.website=process.env.GURL || "https://chat.whatsapp.com/BxXB834YgV8JorX5tCDEEM"; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "94772042523" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null"94772042523";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94772042523";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_30_04_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg3LFxuICAgICAgICA3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTExLFxuICAgICAgICA2LFxuICAgICAgICAxODksXG4gICAgICAgIDY0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxODUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4OSxcbiAgICAgICAgNCxcbiAgICAgICAgODYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDQsXG4gICAgICAgIDksXG4gICAgICAgIDQ5LFxuICAgICAgICAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDksXG4gICAgICAgIDg3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSVpMNEhGZWEvV2tMam5EaGhwKzVXdkFXWjZ1NDRqU1B0WThqVHY4TG1Nbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRE1relVzVWtRcm1NcEMwUUU4NnNzZ1wiLFxuICBcInBob25lSWRcIjogXCI1Nzc0YjlmZS03ODQ2LTRmNDktYjE3Yi1kZTY2YzI4NjZiZmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgMTM3LFxuICAgICAgMjUsXG4gICAgICA5MCxcbiAgICAgIDk1LFxuICAgICAgMTMxLFxuICAgICAgMTYwLFxuICAgICAgOTUsXG4gICAgICAxMzMsXG4gICAgICAxODgsXG4gICAgICAxODEsXG4gICAgICAxMjAsXG4gICAgICA3MCxcbiAgICAgIDE5OCxcbiAgICAgIDExMSxcbiAgICAgIDM3LFxuICAgICAgMTkxLFxuICAgICAgNDcsXG4gICAgICAyMTQsXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICA2NyxcbiAgICAgIDMyLFxuICAgICAgNzQsXG4gICAgICAyNDIsXG4gICAgICA2OSxcbiAgICAgIDcsXG4gICAgICAxMjAsXG4gICAgICA4MyxcbiAgICAgIDEzMixcbiAgICAgIDEwNCxcbiAgICAgIDE3NCxcbiAgICAgIDE2MixcbiAgICAgIDIwOSxcbiAgICAgIDExNCxcbiAgICAgIDU5LFxuICAgICAgMjMyLFxuICAgICAgMTU5LFxuICAgICAgNTMsXG4gICAgICAxMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjJUQzhFUU5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzcyMDQyNTIzOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTYxMTkxMjE3NDgwNzU6MjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi6qeB8J2TnfCdk7jwnZO98J2Tsl/wnZOc8J2TqvCdk73wnZOx8J2TsvCdlILwnZOq6qeCXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzZIOHZnRUVKei9uYkVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJReTZsc29KWVRjWVZvSkZpOHJJa1VpeUF0Y3ZvREJBSm1aTUVTU3dkZndRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInU0VElQOVF5SzJHQVo0ZGt2WEhjWTc2cmxZRnBHS243cEdzV1dWcHgvOElZdnFkTUQ3bHBlR3VmeitLNE5hQkd0R3VzNnRHVXJhK0p4NkNBa1Ava0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9HUHRkdFRBYUxvUEcxQ3hPTktBVDc1SERJMVphazU2czUzZElRRk5Qcm8zREh6Z3EzenkzVldDaXJlaFA5d2sxb0NGOGloejkxaEJ4Q0xTUUYwL0NnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzcyMDQyNTIzOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxMzg2NDYwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUkySFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTJILmpzb24iOiAie1wia2V5RGF0YVwiOlwiUm91eUFGVjc4ZkppMHRYaE05ZFYyUG9xRFdTM1NoZk16YWNDS1E3cm4zWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzI3MjY4Nzc5LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©MATHISHA" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "DARK-SHADOW",
  packname: process.env.PACK_NAME || "DARK-SHADOW",
  botname : process.env.BOT_NAME  || "DARK-SHADOW",
  ownername:process.env.OWNER_NAME|| "MATHISHA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
