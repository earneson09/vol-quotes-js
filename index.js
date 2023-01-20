const neylandMaxims = [
    {
      quote : "The team that makes the fewest mistakes will win.", 
     author: " - Gen. Robert Neyland"
    },{
      quote : "Play for and make the breaks and when one comes your way - SCORE.", 
      author: " - Gen. Robert Neyland"
    },{
      quote : "If at first the game - or the breaks - go against you, don't let up... put on more steam.", 
      author: " - Gen. Robert Neyland"
    },{
      quote : "Protect our kickers, our QB, our lead and our ball game.", 
      author: " - Gen. Robert Neyland"
    },{
      quote : "Ball, oskie, cover, block, cut and slice, pursue and gang tackle... for this is the WINNING EDGE.", 
      author: " - Gen. Robert Neyland"
    },{
      quote : "Press the kicking game. Here is where the breaks are made.", 
      author: " - Gen. Robert Neyland"
    },{
      quote : "Carry the fight to our opponent and keep it there for 60 minutes.",
      author: " - Gen. Robert Neyland"
    },{
      quote: "You can't always be the strongest or most talented or most gifted person in the room, but you can be the most competitive",
      author: " - Pat Summit"
    },{
      quote: "Attitude is a choice. What you think you can do, whether positive or negative, confident or scared, will most likely happen",
      author:" - Pat Summit"
    },{
      quote:"Confidence is what happens when you've done the hard work that entitles you to succeed",
      author:" - Pat Summit"
    },{
      quote:"There is always someone better than you. Whatever it is that you do for a living, chances are, you will run into a situation in which you are not as talented as the person next to you. That’s when being a competitor can make a difference in your fortunes",
      author: " - Pat Summit"
    }, {
      quote:"Nothing great was ever achieved without pride and enthusiasm.",
      author: " - Johnny Majors"
    },{
      quote: "Live in your hopes and not in your fears",
      author: " - Johnny Majors"
    }, {
      quote: "Never doubt the heart of a Volunteer",
      author: " - Phillip Fulmer"
    }
  ];
  
  window.onload = init();
  
  function init() {
    generateQuote(); 
  };
  
  function generateQuote(){
    let arrSize = neylandMaxims.length;
    let randomIndex = Math.floor(Math.random() * arrSize);
    let displayQuote = neylandMaxims[randomIndex];
    
    document.getElementById("text").innerText = displayQuote.quote; 
    document.getElementById("author").innerText = displayQuote.author; 
  };  