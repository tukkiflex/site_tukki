 import HeaderView from './components/header.jsx';
import FonctionnaliteView from './components/fonctionnalite.jsx';
import UtilisateurView from './components/utilisateur.jsx';
import CompagnieView from './components/compagnie.jsx';
import FooterView from './components/footer.jsx';
import DashboardView from './components/dashboard.jsx';
function App() {
  return (
    <div>
     <HeaderView />
     <section id ='fonctionnalite'>
      <FonctionnaliteView />
      </section>
      <section id ='utilisateur'>
      <UtilisateurView />
      </section>
      <section id ='compagnie'>
      <CompagnieView />
      </section>
      <section >
      <DashboardView />
      </section>
      <section id ='footer'>
      <FooterView />
      </section>
      
      
    

    </div>
  );
}

export default App;