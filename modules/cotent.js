const content = () => {
  return `
    <div class="container">
    <div class="head"><h1>FX CALCULATOR</h1></div>
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
      </div>
    </div>
  </div>
    `;
};

export default content;
