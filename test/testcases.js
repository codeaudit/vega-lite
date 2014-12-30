var testcases = {
  "data/birdstrikes.json": [{
      n: "Bar",
      e: "bar.x-sum_Cost__Total_$-Q.y-Effect__Amount_of_damage-O"
    },{
      n: "Stack Bar",
      e: "bar.x-sum_Cost__Total_$-Q.y-Effect__Amount_of_damage-O.color-When__Phase_of_flight-O"
    },{
      n: "Small Multiples of Stack Bar",
      e: "bar.x-sum_Cost__Total_$-Q.y-Effect__Amount_of_damage-O.row-When__Phase_of_flight-O.col-When__Time_of_day-O.color-Wildlife__Size-O"
    },{
      n: "Small Multiples of Bar Chart",
      e: "bar.x-sum_Cost__Total_$-Q.y-Effect__Amount_of_damage-O.row-When__Phase_of_flight-O.col-Wildlife__Size-O"
  }],
  "data/movies.json": [{
    n:"Small Multiples without y-axes #82",
    e: "point.x-US_Gross-Q.row-Major_Genre-O",
    i: 82
  },{
    n: "table",
    e: "text.row-Major_Genre-O.col-Creative_Type-O.text-avg_US_Gross-Q"
  }]
}


module.exports = testcases;