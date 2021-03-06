import React from 'react';
import Heading from "./components/layout/Heading";
import HomeContent from "./components/layout/HomeContent";
import NewsList from "./components/layout/NewsList";
import LayOut from "./components/layout/LayOut";
import Home from "./components/layout/Home";
import News from "./components/layout/News";
import Login from "./components/layout/Login";

function App() {
  return (
    <div className="App">
      <Heading title="React App" subtitle="Form" />
      
      <HomeContent>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
       </HomeContent>         
      
      <NewsList>
        <ul>
            <li />
            <li />
            <li />
      </ul>
      
      </NewsList>
      
      <Login />
      
    </div>
  );
}

export default App;
