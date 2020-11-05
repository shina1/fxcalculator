const content = () => {
  return `
    <div class="container">
    <div class="head"><h1>ZERONE <br> <span>FX CALCULATOR</span> </h1></div>
    <div class="body">
      <form action="#">
        <input type="number" id="amount" placeholder="Enter your capital" required/>
        <input
          type="number"
          id="circle"
          placeholder="Enter number of circles" required
        />
        <input type="submit" value="Submit" id="submit" />
      </form>
      <div class="output">
        <div class="box">
          <h3>#<span id="result"></span></h3>
        </div>
        <button id="clear">Clear</button>
      </div>
    </div>
    <div class="foot">
      <p>Developed by <a href="cypherdevs.co">Cypherdevs Technologies</a>  <span>09031217041</span></p>
    </div>
  </div>
    `;
};

export default content;
