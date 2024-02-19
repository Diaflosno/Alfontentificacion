import FormsFirebase from "./page/FormsFirebase";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div>
      <AuthProvider>
        <h1>Alfontentificacion</h1>
        <h2>La aplicacion para verificar autentificaciones</h2>

        <FormsFirebase />
      </AuthProvider>
    </div>
  );
}

export default App;
