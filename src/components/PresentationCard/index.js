import React from 'react';
import styles from './styles.module.css';

export default function PresentationCard() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageWrap}>
            <img
              src={require('@site/static/img/david_tocay.png').default}
              alt="David Tocay"
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <p className={styles.body}>Mi nombre es David Tocay</p>
            <p className={styles.body}>
              Actualmente estudio Ingeniería en Sistemas en la Universidad Mariano Gálvez de Guatemala, donde
              curso el tercer semestre de la carrera.
            </p>
            <p className={styles.body}>
              Además de mi formación académica, trabajo en el área de desarrollo de software, una de las
              disciplinas que más me apasiona dentro del ámbito tecnológico. Mi experiencia profesional se ha
              enfocado principalmente en el ecosistema .NET, lo que me ha permitido participar en el desarrollo
              de diferentes soluciones tecnológicas orientadas a satisfacer necesidades empresariales.
            </p>

            <h3 className={styles.sectionTitle}>Objetivos</h3>
            <p className={styles.body}>
              A mis 37 años, uno de mis principales objetivos es culminar con éxito la carrera de Ingeniería en
              Sistemas y continuar fortaleciendo mis conocimientos tanto en el ámbito académico como
              profesional. Por esta razón, procuro mantener una actitud constante de aprendizaje y aprovechar al
              máximo los conocimientos y experiencias compartidos por mis docentes en cada curso.
            </p>
            <p className={styles.body}>
              A mediano y largo plazo, mi meta es emprender y consolidar una empresa dedicada a ofrecer
              servicios y soluciones integrales de informática, contribuyendo al crecimiento tecnológico de las
              organizaciones y generando valor a través de la innovación y la mejora continua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
