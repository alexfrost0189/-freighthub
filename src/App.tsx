import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ShipmentDetailsPage } from './components/pages/shipment-details/ShipmentDetailsPage'
import { NotFound } from './components/pages/NotFound'
import { ShipmentsPage } from './components/pages/shipments/ShipmentsPage'
import 'antd/dist/antd.css'
import { GeneralLayout } from './components/layout/Layout'

const App = () => {
  return (
    <Router>
      <Switch>
        <GeneralLayout>
          <Route path='/' component={ShipmentsPage} exact />
          <Route path='/:id' component={ShipmentDetailsPage} exact />
          <Route component={NotFound} />
        </GeneralLayout>
      </Switch>
    </Router>
  )
}

export default App
