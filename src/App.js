import "./styles.css";

export default function App() {
  return (
    <div className="whiteBox">
      <p className="whiteBoxTitle">Wat je vooraf moet weten</p>
      <p className="whiteBoxText">
        De volgende punten zijn belangrijk om te weten voor je aan de slag gaat
        als vrije werker:
      </p>
      <p className="whiteBoxCyanText">
        Klik op de groene 'verder' knop als je de tekst gelezen hebt.
      </p>
      <div className="whiteBoxImage"></div>
      <p className="whiteBoxSubtitle">1. Eigen baas</p>
      <p className="whiteBoxText2">
        Als vrije werker ben je een freelancer (zonder inschrijving bij de KvK).
      </p>
      <p className="whiteBoxText2">
        Je bepaalt dus zelf welke klussen je aanneemt!
      </p>
      <button className="whiteBoxButton">Verder</button>
    </div>
  );
}
