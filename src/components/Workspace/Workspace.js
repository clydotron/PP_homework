import React from 'react';
import ViewSelector from '../ViewSelector/ViewSelector.js'

function Workspace({}) {

  const allViews = {
    'Roadmap' : 'roadmap',
    'Planning board' : 'planning_board',
    'Parking lot' : 'parking_lot'
};

  // import the different views
  const [view,setView] = React.useState('Roadmap');

  function renderCurrentView() {
    switch(view) {
      case 'Roadmap':
        break;
    }
  }

  return (
    <div className="Workspace">
      <div className="Workspace-viewSelector">
        <ViewSelector view={view} allViews={allViews} onViewSelected={view => setView(view)}/>
      </div>
      <div className="Workspace-view">
        {renderCurrentView()}
      </div>  
    </div>
  )
}

export default Workspace;