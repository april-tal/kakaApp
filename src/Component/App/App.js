import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import './app.css'
import HammerCp from '../HammerCp/HammerCp'
import Login from '../Login/Login'
import HomePage from '../HomePage/HomePage'
import Find from '../Find/Find'
import News from '../News/News'
import Personal from '../Personal/Personal'
import Account from '../Account/Account'
import Search from '../Search/Search'
import Card from '../Card/Card'
import Integral from '../Integral/Integral'
import Finish from '../Finish/Finish'
import Release from '../Release/Release'
import Collection from '../Collection/Collection'
import Opinion from '../Opinion/Opinion'
import About from '../About/About'
import SetUp from '../SetUp/SetUp'
import DetailsTask from '../DetailsTask/DetailsTask'
import Accept from '../Accept/Accept'
import CommentDetails from '../CommentDetails/CommentDetails'
import IntegralRecharge from '../IntegralRecharge/IntegralRecharge'
import Exchange from '../Exchange/Exchange'
import Modify from '../Modify/Modify'
import Password from '../Password/Password'


class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={HammerCp} />
          <Route path='/Login' component={Login} />
          <Route path='/HomePage' component={HomePage} />
          <Route path='/Find' component={Find} />
          <Route path='/News' component={News} />
          <Route path='/Personal' component={Personal} />
          <Route path='/Account' component={Account} />
          <Route path='/Search' component={Search} />
          <Route path='/Card' component={Card} />
          <Route path='/Integral' component={Integral} />
          <Route path='/Finish' component={Finish} />
          <Route path='/Release' component={Release} />
          <Route path='/Collection' component={Collection} />
          <Route path='/Opinion' component={Opinion} />
          <Route path='/About' component={About} />
          <Route path='/SetUp' component={SetUp} />
          <Route path='/DetailsTask' component={DetailsTask} />
          <Route path='/Accept' component={Accept} />
          <Route path='/CommentDetails' component={CommentDetails} />
          <Route path='/IntegralRecharge' component={IntegralRecharge} />
          <Route path='/Exchange' component={Exchange} />
          <Route path='/Modify' component={Modify} />
          <Route path='/Password' component={Password} />
        </Switch>
      </Router>
    )
  }
}

export default App;
