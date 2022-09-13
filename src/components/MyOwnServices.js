/**
 *
 * @param {*} username
 * @param {*} password
 *
 * shape of returned object:
 * {
 *   widget: STRING,
 *   clientname: STRING,
 *   loginmessage: STRING,
 *   clientcode: STRING
 * }
 *
 * OR throw an error with a login message
 */

//import react from "react";

export const login = (username, password) => {
  var requestoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;",
    },
    body: JSON.stringify({
      clientname: username,
      clientpassword: password,
    }),
  };

  const url = `${process.env.REACT_APP_BASE_URL}/validateuser`;

  return fetch(url, requestoptions) // Request fish
    .then((response) => {
      if (!response.ok) {
        return {
          clientname: "System did not respond",
          loginmessage: " ",
          clientcode: "",
          authorized: "N",
          administrator: "",
          unavailable: "Y",
        };
      }
      return response.json();
    })
    .then((json) => {
      console.log(json);
      if (json.user_response.ReturnClientName !== "invalid user") {
        // localStorage.setItem("user", json.user_response.ReturnClientName);
        // localStorage.setItem("clientcode", json.user_response.ReturnClientCode);
        // localStorage.setItem("widget", json.user_response.ReturnWidget);
        // localStorage.setItem("loginmessage", "");
        return {
          clientname: json.user_response.ReturnClientName,
          loginmessage: " ",
          clientcode: json.user_response.ReturnClientCode,
          authorized: "Y",
          administrator: json.user_response.Returnadministrator,
          unavailable: "N",
        };
      } else {
        //throw new Error("invalid username/password");
        return {
          clientname: "",
          error: "Invalid username/password",
          loginmessage: " ",
          clientcode: "",
          authorized: "N",
          administrator: "",
          unavailable: "N",
        };
      }
    })
    .catch((err) => {
      console.log(err.message);
      return {
        clientname: "",
        error: "System Not Available",
        loginmessage: " ",
        clientcode: "",
        authorized: "N",
        administrator: "",
        unavailable: "Y",
      };
    });
};

export const loginwtf = (username, password) => {
  var requestoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;",
    },
    body: JSON.stringify({
      clientname: username,
      clientpassword: password,
    }),
  };

  const url = `${process.env.REACT_APP_BASE_URL}/ValidateUser`;

  return fetch(url, requestoptions) // Request fish
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        console.log(response);
        throw new Error("wtf?");
      }
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      if (json.user_response.returnguid !== "invalid user") {
        return {
          clientname: json.user_response.ReturnClientName,
          administrator: json.user_response.Returnadministrator,
          companynumber: json.user_response.Returnedcompanynumber,
          useruniqueid: json.user_response.ReturnUniqueID,
          loginmessage: " ",
          authorized: "Y",
        };
      } else {
        return { loginmessage: "Invalid username/password" };
      }
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject();
    });
};

export const loginx = (username, password) => {
  var requestoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;",
    },
    body: JSON.stringify({
      clientname: username,
      clientpassword: password,
    }),
  };

  const url = `${process.env.REACT_APP_BASE_URL}/validateuser`;

  return fetch(url, requestoptions) // Request fish
    .then((response) => {
      if (!response.ok) {
        throw new Error("wtf?");
      }
      console.log(response.json);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      if (json.user_response.returnguid !== "invalid user") {
        // localStorage.setItem("user", json.user_response.ReturnClientName);
        // localStorage.setItem("clientcode", json.user_response.ReturnClientCode);
        // localStorage.setItem("widget", json.user_response.ReturnWidget);
        // localStorage.setItem("loginmessage", "");
        return {
          clientname: json.user_response.ReturnClientName,
          administrator: json.user_response.Returnadministrator,
          companynumber: json.user_response.Returnedcompanynumber,
          useruniqueid: json.user_response.ReturnUniqueID,
          loginmessage: " ",
          authorized: "Y",
        };
      } else {
        //throw new Error("invalid username/password");
        return { loginmessage: "Invalid username/password" };
      }
    });
};

export const loginxx = (username, password) => {
  return new Promise((resolve, reject) => {
    resolve({
      widget: "http://whatever.fake.com",
      clientname: "Ryan Nickel",
      loginmessage: "This is my login message",
      clientcode: "123abc",
      authorized: "Y",
    });
  });
};

export const whateverFunction = () => {
  return fetch("http://fakeapi.jsonparseronline.com/posts").then((response) =>
    response.json()
  );
};

//export const updateMyBankdataCheck = (uniqueid, description) => {
//  console.log("i am gonna update my bank checkbox data", uniqueid, description);
//};

export const getBankData = (clientcode, administrator) => {
  // TODO: Need to update this to pull from your own service. URL will look something like
  // const url = `${process.env.REACT_APP_BASE_URL}/returnbankdata`;
  var passedclient = "";
  if (clientcode !== "") {
    passedclient = clientcode;
  } else {
    passedclient = "X";
  }

  var requestoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;",
    },
    body: JSON.stringify({
      sentclientcode: passedclient,
      sentadministrator: administrator,
    }),
  };
  const url = `${process.env.REACT_APP_BASE_URL}/returnbankdata`;

  return fetch(url, requestoptions) // Request fish
    .then((bankdata) => {
      if (!bankdata.ok) {
        console.log(bankdata);
        throw new Error("wtf?");
      }
      return bankdata.json();
    })
    .then((bankrecords) => {
      //bankdata = JSON.parse(chips.responseText.FPClientBankAccount);
      console.log(bankrecords);
      return bankrecords.user_response.bankq;
    });
};

export const updateMyBankdata = (uniqueid, value) => {
  // TODO: Need to update this to pull from your own service. URL will look something like
  // const url = `${process.env.REACT_APP_BASE_URL}/returnbankdata`;
  var requestoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;",
    },
    body: JSON.stringify({
      returneduniqueid: uniqueid,
      returnedaccountdescription: value,
      ReturnedUpdateType: "AccountDescription",
      returnedimportmx: 0,
    }),
  };
  const url = `${process.env.REACT_APP_BASE_URL}/updatebankdata`;
  return fetch(url, requestoptions) // Request fish
    .then((bankdata2) => {
      if (!bankdata2.ok) {
        console.log(bankdata2);
        throw new Error("wtf?");
      }
      return bankdata2.json();
    })
    .then((bankmessage) => {
      //bankdata = JSON.parse(chips.responseText.FPClientBankAccount);
      console.log(bankmessage.user_response.usermessage);
      console.log(uniqueid);
    });
};
export const updateMyBankdata2 = (uniqueid, value) => {
  var passedvalue = value === true ? "1" : "0";
  // TODO: Need to update this to pull from your own service. URL will look something like
  // const url = `${process.env.REACT_APP_BASE_URL}/returnbankdata`;
  var requestoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;",
    },
    body: JSON.stringify({
      returneduniqueid: uniqueid,
      ReturnedUpdateType: "ImportMX",
      returnedaccountdescription: "",
      returnedimportmx: passedvalue,
    }),
  };
  const url = `${process.env.REACT_APP_BASE_URL}/updatebankdata`;
  return fetch(url, requestoptions) // Request fish
    .then((bankdata2) => {
      if (!bankdata2.ok) {
        console.log(bankdata2);
        throw new Error("wtf?");
      }
      return bankdata2.json();
    })
    .then((bankmessage) => {
      //bankdata = JSON.parse(chips.responseText.FPClientBankAccount);
      console.log(bankmessage.user_response.usermessage);
      console.log(uniqueid);
    });
};

export const submitcompany = (companyname, address) => {
  var requestoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;",
    },
    body: JSON.stringify({
      returnedcompanyname: companyname,
      returnedaddress: address,
    }),
  };
  const url = `${process.env.REACT_APP_BASE_URL}/updatecompanydata`;
  return fetch(url, requestoptions) // Request fish
    .then((bankdata2) => {
      if (!bankdata2.ok) {
        console.log(bankdata2);
        throw new Error("wtf?");
      }
      return bankdata2.json();
    })
    .then((bankmessage) => {
      //bankdata = JSON.parse(chips.responseText.FPClientBankAccount);
      console.log(bankmessage.user_response.usermessage);
    });
};

export const fetchcompany = (companynumber) => {
  var requestoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;",
    },
    body: JSON.stringify({
      requestedcompanynumber: companynumber,
    }),
  };
  const url = `${process.env.REACT_APP_BASE_URL}/fetchcompanydata`;
  return fetch(url, requestoptions) // Request fish
    .then((bankdata2) => {
      if (!bankdata2.ok) {
        console.log(bankdata2);
        throw new Error("wtf?");
      }
      return bankdata2.json();
    })
    .then((bankmessage) => {
      console.log(bankmessage);
      //bankdata = JSON.parse(chips.responseText.FPClientBankAccount);
      return {
        companyname: bankmessage.user_response.returnedcompanyname,
        returnedaddress: bankmessage.user_response.returnedaddress,
      };
    });
};

export const UpdateBankListMX = (sentuserguid) => {
  var requestoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;",
    },
    body: JSON.stringify({
      userguid: sentuserguid,
    }),
  };

  const url = `${process.env.REACT_APP_BASE_URL}/updateverifiedbanks`;

  return fetch(url, requestoptions) // Request fish
    .then((response) => {
      if (!response.ok) {
        console.log(response);
        throw new Error("wtf?");
      }
      return response.json();
    })
    .then((bankrecords) => {
      //bankdata = JSON.parse(chips.responseText.FPClientBankAccount);
      console.log(bankrecords);
      return bankrecords.user_response.sendq;
    });
};

export const UpdateBankAccountListMX = (sentuserguid) => {
  var requestoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;",
    },
    body: JSON.stringify({
      userguid: sentuserguid,
    }),
  };

  const url = `${process.env.REACT_APP_BASE_URL}/updateverifiedbanksAccounts`;

  return fetch(url, requestoptions) // Request fish
    .then((response) => {
      if (!response.ok) {
        console.log(response);
        throw new Error("wtf?");
      }
      return response.json();
    })
    .then((bankrecords) => {
      //bankdata = JSON.parse(chips.responseText.FPClientBankAccount);
      console.log(bankrecords);
      return bankrecords.user_response.verifiedbankaccounteq;
    });
};

// export const UpdateBankListMX = (sentuserguid) => {
//   var requestoptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json;",
//     },
//     body: JSON.stringify({
//       userguid: sentuserguid,
//     }),
//   };

//   const url = `${process.env.REACT_APP_BASE_URL}/updateverifiedbanks`;

//   return fetch(url, requestoptions) // Request fish
//     .then((response) => {
//       if (!response.ok) {
//         console.log(response);
//         throw new Error("wtf?");
//       }
//       return response.json();
//     })
//     .then((json) => {
//       console.log(json);
//       if (json.user_response.returnguid !== "invalid user") {
//         // localStorage.setItem("user", json.user_response.ReturnClientName);
//         // localStorage.setItem("clientcode", json.user_response.ReturnClientCode);
//         // localStorage.setItem("widget", json.user_response.ReturnWidget);
//         // localStorage.setItem("loginmessage", "");
//         return {
//           returnguid: json.user_response.returnguid,
//         };
//       } else {
//         //throw new Error("invalid username/password");
//         return { returnguid: json.user_response.returnguid };
//       }
//     });
// };
export const getBankTransactionData = (clientcode) => {
  // TODO: Need to update this to pull from your own service. URL will look something like
  // const url = `${process.env.REACT_APP_BASE_URL}/returnbankdata`;
  var passedclient = "";
  if (clientcode !== "") {
    passedclient = clientcode;
  } else {
    passedclient = "X";
  }

  var requestoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;",
    },
    body: JSON.stringify({
      sentclientcode: passedclient,
    }),
  };
  const url = `${process.env.REACT_APP_BASE_URL}/returnbanklistdata`;

  return fetch(url, requestoptions) // Request fish
    .then((bankdata) => {
      if (!bankdata.ok) {
        console.log(bankdata);
        throw new Error("wtf?");
      }
      return bankdata.json();
    })
    .then((bankrecords) => {
      //bankdata = JSON.parse(chips.responseText.FPClientBankAccount);
      console.log(bankrecords);
      return bankrecords.user_response.bankq;
    });
};

export const getransactionCodes = () => {
  // TODO: Need to update this to pull from your own service. URL will look something like
  // const url = `${process.env.REACT_APP_BASE_URL}/returnbankdata`;

  var requestoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;",
    },
    body: JSON.stringify({}),
  };
  const url = `${process.env.REACT_APP_BASE_URL}/returnbankcodes`;

  return fetch(url, requestoptions) // Request fish
    .then((bankdata) => {
      if (!bankdata.ok) {
        console.log(bankdata);
        throw new Error("wtf?");
      }
      return bankdata.json();
    })
    .then((bankrecords) => {
      //bankdata = JSON.parse(chips.responseText.FPClientBankAccount);
      console.log(bankrecords);
      return { returncode: bankrecords.user_response.bankq };
    });
};

export const updateBankTranactions = (uniqueid, myvalue) => {
  var requestoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;",
    },
    body: JSON.stringify({
      returneduniqueid: uniqueid,
      returnedFPTransactionCode: myvalue,
    }),
  };
  const url = `${process.env.REACT_APP_BASE_URL}/updatebanktransactions`;
  return fetch(url, requestoptions) // Request fish
    .then((bankdata2) => {
      if (!bankdata2.ok) {
        console.log(bankdata2);
        throw new Error("wtf?");
      }
      return bankdata2.json();
    })
    .then((bankmessage) => {
      //bankdata = JSON.parse(chips.responseText.FPClientBankAccount);
      console.log(bankmessage.user_response.usermessage);
      console.log(uniqueid);
    });
};

export const returnbankGraph = async (clientcode, selecteddate) => {
  // TODO: Need to update this to pull from your own service. URL will look something like
  // const url = `${process.env.REACT_APP_BASE_URL}/returnbankdata`;
  var passedclient = "";
  if (clientcode !== "") {
    passedclient = clientcode;
  } else {
    passedclient = "X";
  }

  var requestoptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;",
    },
    body: JSON.stringify({
      sentclientcode: passedclient,
      sentstartyear: selecteddate,
    }),
  };
  const url = `${process.env.REACT_APP_BASE_URL}/returnbankGraph`;

  const bankdata = await fetch(url, requestoptions); // Request fish
  if (!bankdata.ok) {
    console.log(bankdata);
    throw new Error("wtf?");
  }
  const bankrecords = await bankdata.json();
  //bankdata = JSON.parse(chips.responseText.FPClientBankAccount);
  //console.log(bankrecords);
  return bankrecords.user_response.bankq;
};

export const getexcelfile = async (excelfilename) => {
  // TODO: Need to update this to pull from your own service. URL will look something like
  // const url = `${process.env.REACT_APP_BASE_URL}/returnbankdata`;
  var requestoptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;",
    },
    body: JSON.stringify({
      filename: excelfilename,
    }),
  };
  const url = `${process.env.REACT_APP_BASE_URL}/returnbankGraph`;

  const bankdata = await fetch(url, requestoptions); // Request fish
  if (!bankdata.ok) {
    console.log(bankdata);
    throw new Error("wtf?");
  }
  const bankrecords = await bankdata.json();
  //bankdata = JSON.parse(chips.responseText.FPClientBankAccount);
  //console.log(bankrecords);
  return bankrecords.user_response.bankq;
};

//GET /ServeDocument?name=bank.xlsx HTTP/1.1
