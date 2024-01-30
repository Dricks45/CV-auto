import Nav from "./components/Nav";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <header className="header_app">
        <h1 className="title_app">CVExpresso</h1>
        <Nav />
      </header>
      <main className="place_desc_app">
        <p className="desc_app">
          À la recherche d'un moyen simple et efficace pour créer votre CV
          professionnel en ligne? Bienvenue sur <span>CVExpresso</span>, votre
          allié pour mettre en valeur votre parcours de manière unique et
          personnalisée.
          <hr />
          <h4>Designs Personnalisables :</h4> Choisissez parmi une gamme de
          modèles de CV élégants.
          <hr />
          <h4>Sections Dédiées :</h4> Facilitez la saisie de vos informations
          avec des sections dédiées pour les expériences professionnelles, les
          formations, les loisirs et les compétences linguistiques.
          <hr />
          <h4>Sauvegardez et Imprimez :</h4> Enregistrez votre CV en ligne pour
          y accéder à tout moment. Téléchargez-le ou imprimez-le en un clic.
          <hr /> Relevez le défi de créer un CV qui vous représente vraiment.
          Inscrivez-vous sur <span>CVExpresso</span> dès aujourd'hui et
          transformez votre expérience professionnelle en opportunités
          concrètes!
        </p>
      </main>
      <footer>
        <p className="foot_app">&copy; Cédric 2024</p>
      </footer>
    </div>
  );
}

export default App;
