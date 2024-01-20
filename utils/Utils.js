const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const msg91 = require('msg91').default;



// All global function

 // signing JWT
function  create_Jwt (payload, key) {
  const token = jwt.sign(payload, key,{expiresIn:'7d'});
  // const token = jwt.sign(payload, key);
  return token;
}

  // verifing JWT
function  verifying_Jwt (token, key){
  const verify_token = jwt.verify(token, key);
  return verify_token;
}

  // Creating hash password
function Hashing_Password (password) {
  const createHash = bcrypt.hash(password, 12);
  return createHash;
}

  //comparing hashed password
function  compare_Password (password, hashedPassword) {
  const checkPassword = bcrypt.compare(password, hashedPassword);
  return checkPassword;
}

// creating regex 
function createRegex(value){
    let createdRegex = new RegExp(value?.toLowerCase(),'i')
    
    return createdRegex;
}

// get previous date
  function getDateXDaysAgo(numOfDays, date = new Date()) {
  const daysAgo = new Date(date.getTime());
          
  daysAgo.setDate(date.getDate() - numOfDays);

  return daysAgo;
}

// CONVERT DATE 
 function convertDate(date){
  let currentDate = new Date(date).toJSON().slice(0, 10);
  console.log(currentDate); // "2022-06-17"
  const customDate =  new Date(currentDate);
  
  // console.log("Custom Date",customDate)
  // return customDate;
  return customDate;

}

// ==========ADIOGENT======
// get current date & renew date for plans           
function getCurrentAndRenewDate(month) {
  let d = new Date();
  const currentDate = d.toUTCString()
  console.log("currentDate->",currentDate )

    d.setMonth(d.getMonth() + month);
    const renewDate = d.toUTCString().slice(0,16)
        console.log("renewDate",renewDate)
        return {current_date:currentDate.slice(0,16),renew_date:renewDate}
}


module.exports = {
  getCurrentAndRenewDate,
  convertDate,
  create_Jwt,
  verifying_Jwt,
  getDateXDaysAgo,
  Hashing_Password,
  compare_Password,
  createRegex,
  // sendOtp,
  // verifyOtp
}



