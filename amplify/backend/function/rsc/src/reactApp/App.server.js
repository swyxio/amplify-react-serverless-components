
// import {Suspense} from 'react';
import Temp from './Temp.client';

export default function App({selectedId, isEditing, searchText}) {
  return (
    <div className="main">
      Hello from App.server.js
      <Temp />
    </div>
  );
}
