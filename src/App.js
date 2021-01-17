// import logo from './logo.svg';
// import './App.css';
import TronWeb from "tronweb";

function App() {
  let connection;
  let mainAccount;
  // let lastvalue = 0;
  const contractAddress = "TRpndMFBy2Xn38PvYfRNmUfKxBZt4svSiH";


  window.addEventListener("message", (e) => {
    setInterval(async function checkConnection() {

      if (window.tronWeb && window.tronWeb.defaultAddress.base58 === "undefined") {
        connection = "TROn LINK is not available";
        console.log("not available")
        alert(connection);
        // jQuery("#metamaskConnection").text(connection);
      } else {
        connection = "Connected to Tron LINK.";
        console.log("connections : ", connection);
        // jQuery("#metamaskConnection").text(connection);

        mainAccount = await window.tronWeb.defaultAddress.base58
        console.log("MAINNACCOUNt : ", mainAccount)
        

        isLocked();

      }

      if (e.data.message && e.data.message.action == "setNode") {
        console.log("setNode event", e.data.message)
        if (e.data.message.data.node.chain == '_') {
          console.log("tronLink currently selects the main chain")
        } else {
          console.log("tronLink currently selects the side chain")
        }

      }
    }, 500);

    if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
      // clearInterval(obj)
      // let tronweb = window.tronWeb
      const add = window.tronWeb.defaultAddress.base58;
      console.log("ADDDAREASS", +add);
    }
  });

  async function isLocked() {

    // web3.eth.getAccounts(function (err, accounts) {
    if (window.tronWeb.defaultAddress.base58 == null) {
      alert("TRON LINK  error");
      // console.log(err);
      // jQuery("#lock").text(err);
    } else if (window.tronWeb.defaultAddress.base58 === 0) {
      console.log("TRON LINK is locked");
      alert("TRON LINK is locked");
      // jQuery("#lock").text("TRON LINK is locked.");
    } else {
      console.log("TRON LINK is unlocked");
      alert("TRON LINK is unlocked");
      // jQuery("#lock").text("TRON LINK is unlocked.");
    }
    // });
  }




  // const initTron = async () => {
  //   // tronWeb = null;
  //   // isInstalled = !!window.tronWeb;
  //   // if (isInstalled) {
  //   const HttpProvider = TronWeb.providers.HttpProvider;
  //   const fullNode = new HttpProvider("https://api.trongrid.io");
  //   const solidityNode = new HttpProvider("https://api.trongrid.io");
  //   const eventServer = "https://api.trongrid.io/";
  //   const gettronWeb = new TronWeb(fullNode, solidityNode, eventServer);
  //   this.tronWeb = gettronWeb;

  //   const tronLoader = setInterval(() => {
  //     if (window.tronWeb && window.tronWeb.ready) {
  //       this.tronWeb = window.tronWeb;
  //       clearInterval(tronLoader)
  //     } else {
  //       this.tronWeb = gettronWeb
  //     }
  //   }, 500)
  //   // }
  // };



  function gettronweb() {
    // let contractAddress = "TSGP1fYFzUSsTHXXRuNpTAubzFpa1Qkk4q";
    if (window.tronWeb) {
      if (window.tronWeb.defaultAddress.base58 === "undefined") {
        // document.write("Not Available:", window.tronWeb.defaultAddress.base58)
      } else if (window.tronWeb.defaultAddress.base58) {
        // document.write("Yes, catch it:", window.tronWeb.defaultAddress.base58)
      } else if (window.tronWeb.defaultAddress.base58 == null) {
        // document.write("error");
      } else if (window.tronWeb.defaultAddress.base58 === 0) {
        // console.log("TRON LINK is locked");
        // document.write("TRON LINK is locked.");
      } else {
        // document.write("TRON LINK is not Avaialable");
      }
    }
  };

  async function Read() {
    // const tronWeb = window.TronWeb;
    // if(web3 == ){
    // let contract = await tronWeb.contract().at(contractAddress);
    let contract = await window.tronWeb.contract().at(contractAddress);
    let rewards = await contract.methods.turnover().call();
    // document.write(rewards);
    // console.log(parseInt(JSON.stringify(rewards)));
    console.log(parseInt(rewards));
  };;

//   async function register() {

//     try {
//       let contract = await window.tronWeb.contract().at(contractAddress);
//       let value = value * 1000000;

//       contract.register(uplineaddress).send({
//         feeLimit: 100000000,
//         callValue: value
//       }).then((output) => {
//         console.log("- Output:", output, "\n");
//         // jQuery("#register").text(output);
//       });
//     }catch (error) {
//     // User denied account access...
//     console.log("sss", error);
//   }
// }

return (
  <div>
    <header>


      <button id="btn-ID" onClick={gettronweb} > accounts </button>
      <br>
      </br>
      <button onClick={Read} >Read</button>
      <br>
      </br>
      {/* <button onClick={Write} >Write</button> */}
    </header>
  </div>
);
}

export default App;
