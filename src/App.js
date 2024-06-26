
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setProgress] = useState(0);

  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
          />
          <Routes>
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}   key="general" pageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="in" category="technology" />} />
            <Route exact path="/" element={<Navigate key="" to="/general" />} />
          </Routes>
        </Router>
      </div>
    )
  
}

export default App;




// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <Switch>
//             <Route exact path="/general"> <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="general" /> </Route>
//             <Route exact path="/business"> <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="business" /> </Route>
//             <Route exact path="/entertainment"> <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="entertainment" /> </Route>
//             <Route exact path="/health"> <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="health" /> </Route>
//             <Route exact path="/science"> <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="science" /> </Route>
//             <Route exact path="/sports"> <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="sports" /> </Route>
//             <Route exact path="/technology"> <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="spotechnologyrts" /> </Route>
        
//         </Switch>
//         </Router>
//       </div>
//     )
//   }
// }









/************************************************************* Class Based Component ***************************************************/

// import './App.css';
// import React, { Component } from 'react'
// import Navbar from './components/Navbar';
// import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

// export default class App extends Component {
  
//   pageSize = 6;
//   apiKey = process.env.REACT_APP_NEWS_API_KEY;

//   state = {
//     progress: 0
//   }
//   setProgress = (progress) => {
//     setState({progress: progress})
//   }
  
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <LoadingBar
//             color='#f11946'
//             height={3}
//             progress={state.progress}
//           />
//           <Routes>
//             <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}   key="general" pageSize={pageSize} country="in" category="general" />} />
//             <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country="in" category="business" />} />
//             <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
//             <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="in" category="health" />} />
//             <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="in" category="science" />} />
//             <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="sports" />} />
//             <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="in" category="technology" />} />
//             <Route exact path="/" element={<Navigate key="" to="/general" />} />
//           </Routes>
//         </Router>
//       </div>
//     )
//   }
// }






// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <Switch>
//             <Route exact path="/general"> <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="general" /> </Route>
//             <Route exact path="/business"> <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="business" /> </Route>
//             <Route exact path="/entertainment"> <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="entertainment" /> </Route>
//             <Route exact path="/health"> <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="health" /> </Route>
//             <Route exact path="/science"> <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="science" /> </Route>
//             <Route exact path="/sports"> <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="sports" /> </Route>
//             <Route exact path="/technology"> <News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="spotechnologyrts" /> </Route>
        
//         </Switch>
//         </Router>
//       </div>
//     )
//   }
// }
