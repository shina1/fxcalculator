const calcEvent = () => {
  const amountInp = document.querySelector("#amount");
  const circleInp = document.querySelector("#circle");
  const resultOut = document.querySelector("#result");
  const button = document.querySelector("#submit");
  const clear = document.querySelector("#clear");

  button.addEventListener("click", (e) => {
    let amountInt = parseInt(amountInp.value);
    let circleInt = parseInt(circleInp.value);
    let total;
    function fxCalc(init, dur) {
      let time = 1;
      //   let perInc;
      do {
        let perInc = init * 0.15;
        init = init + perInc;
        total = init;
        time++;
      } while (time <= dur);

      return total;
    }
    fxCalc(amountInt, circleInt);

    resultOut.innerText = total;
    e.preventDefault();
  });
  clear.addEventListener("click", (e) => {
    resultOut.innerText = "";
    amountInp.value = "";
    circleInp.value = "";
    e.preventDefault();
  });
};

export default calcEvent;
