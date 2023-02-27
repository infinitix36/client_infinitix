import React from "react";
import { MDBContainer } from "mdbreact";
import { Doughnut } from "react-chartjs-2";
    
const Dough = () => {
    
  // Sample data
  const data = {
    labels: ["Java", "Python", "Javascript", "React"],
      datasets: [
        {
          label: "Programming Language used",
          data: [12, 45, 78, 32],
          backgroundColor: ["blue", "red", "green", "orange"],
        }
      ]
  }

  return (
    <MDBContainer>
      <Doughnut data={data} />
    </MDBContainer>
  );
}
    
export default Dough;