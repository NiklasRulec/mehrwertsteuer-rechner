// ! +++++++++++++++ calcFunction

const calcFunction = () => {
  let nettoInput = document.querySelector(".netto-input").checked;
  console.log({ nettoInput });
  let bruttoInput = document.querySelector(".brutto-input").checked;
  console.log({ bruttoInput });
  let prozent19 = document.querySelector(".neunzehn-prozent").checked;
  console.log({ prozent19 });
  let prozent7 = document.querySelector(".sieben-prozent").checked;
  console.log({ prozent7 });
  let moneyInput = Number(document.querySelector(".netto-brutto-input").value);
  console.log({ moneyInput });
  let moneyLabel = document.querySelector(".netto-brutto-label");
  let mwstOutput = document.querySelector(".mwst-output");
  let endbetragOutput = document.querySelector(".endbetrag-output");

  if (nettoInput == true && prozent19 == true) {
    moneyLabel.innerText =
      "Nettobetrag (Preis ohne 19 % Mehrwertsteuer) in Euro";
    let bruttoBetrag = moneyInput * 1.19;
    console.log({ bruttoBetrag });
    let bruttoBetragFixed = bruttoBetrag.toFixed(2);
    endbetragOutput.innerText = bruttoBetragFixed;
    let differenz = bruttoBetrag - moneyInput;
    console.log({ differenz });
    let differenzFixed = differenz.toFixed(2);
    console.log({ differenzFixed });
    mwstOutput.innerText = differenzFixed;

    // ! ####################################################
  } else if (nettoInput == true && prozent7 == true) {
    moneyLabel.innerText =
      "Nettobetrag (Preis ohne 7 % Mehrwertsteuer) in Euro";
    let bruttoBetrag = moneyInput * 1.07;
    console.log({ bruttoBetrag });
    let bruttoBetragFixed = bruttoBetrag.toFixed(2);
    endbetragOutput.innerText = bruttoBetragFixed;
    let differenz = bruttoBetrag - moneyInput;
    console.log({ differenz });
    let differenzFixed = differenz.toFixed(2);
    console.log({ differenzFixed });
    mwstOutput.innerText = differenzFixed;

    // ! ####################################################
  } else if (bruttoInput == true && prozent19 == true) {
    moneyLabel.innerText =
      "Bruttobetrag (Preis inklusive 19 % Mehrwertsteuer) in Euro";
    let nettoBetrag = moneyInput / 1.19;
    console.log({ nettoBetrag });
    let nettoBetragFixed = nettoBetrag.toFixed(2);
    endbetragOutput.innerText = nettoBetragFixed;
    let differenz = moneyInput - nettoBetrag;
    console.log({ differenz });
    let differenzFixed = differenz.toFixed(2);
    console.log({ differenzFixed });
    mwstOutput.innerText = differenzFixed;
    // ! ####################################################
  } else if (bruttoInput == true && prozent7 == true) {
    moneyLabel.innerText =
      "Bruttobetrag (Preis inklusive 7 % Mehrwertsteuer) in Euro";
    let nettoBetrag = moneyInput / 1.07;
    console.log({ nettoBetrag });
    let nettoBetragFixed = nettoBetrag.toFixed(2);
    endbetragOutput.innerText = nettoBetragFixed;
    let differenz = moneyInput - nettoBetrag;
    console.log({ differenz });
    let differenzFixed = differenz.toFixed(2);
    console.log({ differenzFixed });
    mwstOutput.innerText = differenzFixed;
    // ! ####################################################
  }
};
