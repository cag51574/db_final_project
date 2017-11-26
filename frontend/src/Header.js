import React from 'react'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar,Tabs,Tab} from 'material-ui';

// Nicolas Burgess
// The Header creates links in the navbar that can be used to navigate
// between different routes.

const Header = () => (
<MuiThemeProvider>
  <AppBar
    title="Restaurant Creator"
  >
	<Tabs>
		<Tab label = "&nbsp;Home&nbsp; |"
			containerElement={<Link to = '/'></Link>}
		/>
		<Tab label = "&nbsp;Owner&nbsp;&nbsp; |"
			containerElement={<Link to='/owner'></Link>}
		/>
		<Tab label = "&nbsp;&nbsp;&nbsp; Customer&nbsp;"
			containerElement={<Link to='/customer'></Link>}
		/>
	</Tabs>
  </AppBar>
</MuiThemeProvider>
)

export default Header
