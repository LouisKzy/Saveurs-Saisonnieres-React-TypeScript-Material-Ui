// App.tsx
import AppRoutes from "./components/AppRoutes";
import { BrowserRouter as Router } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
