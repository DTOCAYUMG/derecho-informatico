import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Módulo I: Fundamentos',
    Svg: require('@site/static/img/derecho_informatico.svg').default,
    description: (
      <>
        Análisis de la relación entre el Derecho tradicional y las tecnologías globales, 
        explorando la infraestructura de los nombres de dominio y los fundamentos de la 
        informática jurídica.
      </>
    ),
  },
  {
    title: 'Módulo II: Contratos y Propiedad',
    Svg: require('@site/static/img/contrato.svg').default,
    description: (
      <>
        Análisis de la protección del software (Copyright y Copyleft), la 
        equivalencia funcional en contratos electrónicos (EULA y SLA) y la validez 
        probatoria de la firma electrónica avanzada mediante criptografía asimétrica.
      </>
    ),
  },
  {
    title: 'Módulo III: E-Commerce y Seguridad',
    Svg: require('@site/static/img/ecommerce.svg').default,
    description: (
      <>
        Regulación de modelos comerciales digitales, la garantía constitucional del 
        Habeas Data para la autodeterminación informativa y el marco 
        penal contra delitos informáticos frente a auditorías de ciberseguridad.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
