     // old code

const smsApiKey = import.meta.env.VITE_SMS_API_KEY;
const smsSenderId = import.meta.env.VITE_SMS_SENDER_ID;


export const sendSms = async (mobileNo, message) => {
  const url = `http://bulksmsbd.net/api/smsapi?api_key=${smsApiKey}&type=text&number=${mobileNo}&senderid=${smsSenderId}&message=${message}`;

  const response = await fetch(url);

  const result = await response.json();

  return result;
};


// import  twilio from "twilio"
// const accountSid = import.meta.env.VITE_TWILIO_ACCOUNT_SID;
// const authToken = import.meta.env.VITE_TWILIO_AUTH_TOKEN;
// const client = twilio(accountSid, authToken);
//
// export const sendSms = async (mobileNo, message) => {
//   try {
//     const result = await client.messages.create({
//       body: message,
//       from: import.meta.env.VITE_TWILIO_PHONE_NUMBER,
//       to: mobileNo,
//     });
//
//     return { success_message: result.sid };
//   } catch (error) {
//     return { error_message: error.message };
//   }
// };
