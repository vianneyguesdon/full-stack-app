import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {}
    };
  }

  componentDidMount("/api/users/all") {
    fetch(res => res.json())
    .then (data => {console.log(data.result)})
  }

  render() {
    if (Object.entries(this.state.users).length === 0 && this.state.hotel.constructor === Object) {
          return( 
            <div>
              <p>Loading data...</p>
            </div>
          )
        }
    return <div>USERS dashboard</div>;
  }
}

export default Dashboard;
