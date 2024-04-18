import styles from "../../styles/about.module.scss";

import Link from "next/link";

import Header from "../../components/header";
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";

export default function about({ session }) {
  return (
    <>
      <Header userType={session?.user?.type} />
      <h1 className={styles.AboutTitle}>#CB8 | Team E</h1>
      <div className={styles.AboutWrapper}>
        <div className={styles.CardAbout}>
          <img
            src="/images/ad.jpg"
            alt="Alessandro Dominici"
            className={styles.ProfileAbout}
          />
          <div className={styles.TextArea}>
            <h3>Alessandro Dominici</h3>
            <h4>Ing. Informatico - Full Stack Developer</h4>
            <p>
              Sin da piccolo ho sempre avuto la passione per l’informatica, in
              terza media iniziai con il primo libro di HTML e da quel giorno
              non mi sono più fermato. Mi piace studiare le nuove tecnlogie web
              e far sì sia tutto perfetto nei minimi dettagli, dalla più piccola
              funzionalità alla UI del software.
            </p>
          </div>
          <div className={styles.Social}>
            <Link href="https://github.com/Raukros00">
              <img src="/github-logo.png" alt="github logo" />
            </Link>
            <Link href="https://www.linkedin.com/in/alessandro-dominici-6bb900184/">
              <img src="/linkedin-logo.jpg" alt="linkedin logo" />
            </Link>
          </div>
        </div>

        <div className={styles.CardAbout}>
          <img
            src="/images/sb.jpg"
            alt="Simona Badagliacca"
            className={styles.ProfileAbout}
          />
          <div className={styles.TextArea}>
            <h3>Simona Badagliacca</h3>
            <h4>Jr Full Stack Developer</h4>
            <p>
              Sono da sempre alla ricerca di nuove sfide che mi permettano di
              crescere e contribuire in modo significativo. Sono entusiasta di
              trasferire le mie competenze nel campo dello sviluppo, dove posso
              applicare la mia dedizione al servizio e la mia determinazione per
              raggiungere standard elevati.
            </p>
          </div>
          <div className={styles.Social}>
            <Link href="https://github.com/SimonaSunrise">
              <img src="/github-logo.png" alt="github logo" />
            </Link>
            <Link href="https://www.linkedin.com/in/simonabadagliacca/">
              <img src="/linkedin-logo.jpg" alt="linkedin logo" />
            </Link>
          </div>
        </div>

        <div className={styles.CardAbout}>
          <img
            src="/images/ga.png"
            alt="Giuseppe Anzalone"
            className={styles.ProfileAbout}
          />
          <div className={styles.TextArea}>
            <h3>Giuseppe Anzalone</h3>
            <h4>Jr Full Stack Developer</h4>
            <p>
              Dopo anni di esperienza nella gestione di un e-commerce ho deciso
              di approcciarmi al mondo dello sviluppo web, per il quale ho
              sempre nutrito una forte passione. Sono convinto che alla base del
              successo ci sia la formazione continua, motivo per cui ho
              intrapreso questo viaggio nel coding bootcamp di Edgemony.
            </p>
          </div>
          <div className={styles.Social}>
            <Link href="https://github.com/giuseppeAnzalone">
              <img src="/github-logo.png" alt="github logo" />
            </Link>
            <Link href="https://www.linkedin.com/in/giuseppe-anzalone-web-dev/">
              <img src="/linkedin-logo.jpg" alt="linkedin logo" />
            </Link>
          </div>
        </div>

        <div className={styles.CardAbout}>
          <img
            src="/images/ca.jpg"
            alt="Carlo Salamone"
            className={styles.ProfileAbout}
          />
          <div className={styles.TextArea}>
            <h3>Carlo Salamone</h3>
            <h4>Jr Full Stack Developer</h4>
            <p>
              Sono sempre stato attratto dal mondo dell'informatica e della
              programmazione. Grazie al viaggio compiuto nel coding bootcamp di
              Edgemony sono finamlente riuscito ad acquisire i mezzi e le
              conoscenze per poterne far parte.
            </p>
          </div>
          <div className={styles.Social}>
            <Link href="https://github.com/CarloSalamone">
              <img src="/github-logo.png" alt="github logo" />
            </Link>
            <Link href="https://www.linkedin.com/in/carlo-salamone-78b142295/">
              <img src="/linkedin-logo.jpg" alt="linkedin logo" />
            </Link>
          </div>
        </div>

        <div className={styles.CardAbout}>
          <img
            src="/images/gn.jpg"
            alt="Giuseppe Nicotra"
            className={styles.ProfileAbout}
          />
          <div className={styles.TextArea}>
            <h3>Giuseppe Nicotra</h3>
            <h4>Jr Full Stack Developer</h4>
            <p>
              Da quando mi sono laureato in Disegno Industriale, ho maturato
              esperienze diverse che mi hanno sempre portato a dovermi
              reinventare. La curiosità verso le novità e la ricerca di una
              metodologia da applicare alle contingenze mi ha portato ad
              avventurarmi nella programmazione di software.
            </p>
          </div>
          <div className={styles.Social}>
            <Link href="https://github.com/pepni">
              <img src="/github-logo.png" alt="github logo" />
            </Link>
            <Link href="https://www.linkedin.com/in/giuseppe-nicotra-577ab049/">
              <img src="/linkedin-logo.jpg" alt="linkedin logo" />
            </Link>
          </div>
        </div>
      </div>

      <NavBar userType={session?.user?.type} />
      <Footer />
    </>
  );
}
