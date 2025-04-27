import './styles/header.css';
import HeaderView from './components/header.jsx'; // Assurez-vous que ce fichier existe et contient le composant HeaderView
import FonctionnaliteView from './components/fonctionnalite.jsx';
import UtilisateurView from './components/utilisateur.jsx'; // Assurez-vous que ce fichier existe et contient le composant UtilisateurView
function App() {
  return (
    <><div>
      <HeaderView />
    </div><div>
        <FonctionnaliteView />
        </div>
        <div>
          <UtilisateurView />
        </div>
      </>
  );
}

export default App;
