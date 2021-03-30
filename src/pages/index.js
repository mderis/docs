import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import features from './features'


function Feature({ icon, description }) {
  return (
    <div className={clsx('col col--3', styles.feature)}>
      <div className={styles.featureIcon}>

        <FontAwesomeIcon
          icon={icon}
          size={"3x"}
          color={"#4457C1"}
        />

      </div>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>

        <h1 className={styles.title}>What is Apiato?</h1>
        <p className={styles.description}>An <b>open source</b> flawless framework for building scalable and testable API-Centric Apps with <b>PHP</b> and <b>Laravel</b><br />Designed to help building scalable API's faster. It uses the best frameworks, tools and conventions in a creative way, to deliver a rich set of features and functionalities, that facilitates the development of modern API-Centric Apps.</p>
        <h1 className={styles.title}>Features</h1>

        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
