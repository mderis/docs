import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt, faBullseye, faClock, faCode, faCogs, faCube, faCubes, faDatabase, faDesktop, faFileAlt, faFileCode, faGrinTears, faHandHolding, faHandshake, faHandshakeAltSlash, faHashtag, faHdd, faKey, faLanguage, faMagic, faMap, faMedkit, faMoneyBill, faPaperPlane, faRocket, faSitemap, faStop, faStopCircle, faTags, faTimes, faUnlock, faUnlockAlt, faUser, faUserMinus, faUserSecret, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFonticonsFi, faPagelines, faWpexplorer } from '@fortawesome/free-brands-svg-icons';


const features = [
  {
    icon: faKey,
    description: (
      <>
        Authentication with OAuth2.0 for first/third-party clients (using Laravel Passport).
      </>
    ),
  },
  {
    icon: faUser,
    description: (
      <>
        Role-Based Access Control (RBAC), seeded with a Super Admin, Roles and Permissions.
      </>
    ),
  },
  {
    icon: faDatabase,
    description: (
      <>
        Query Parameters support (orderBy, sortedBy and filter) with full-text search.
      </>
    ),
  },
  {
    icon: faPaperPlane,
    description: (
      <>
        Useful Endpoints for managing users, roles/permissions, tokens and more.
      </>
    ),
  },
  {
    icon: faFileCode,
    description: (
      <>
        API Documentations generator, to generate API docs from PHP Docblock (using ApiDocJS).
      </>
    ),
  },
  {
    icon: faArrowsAlt,
    description: (
      <>
        Supports CORS (Cross-Origin Resource Sharing) and JSONP (JSON with padding).
      </>
    ),
  },
  {
    icon: faHashtag,
    description: (
      <>
        Auto encoding/decoding of real ID's, to prevent exposing real ID's to the outer world.
      </>
    ),
  },
  {
    icon: faStopCircle,
    description: (
      <>
        API Throttling (rate limiting to control the rate of traffic received and protect your server).
      </>
    ),
  },
  {
    icon: faWpexplorer,
    description: (
      <>
        Support "include" request parameter to load nested relationships.
      </>
    ),
  },
  {
    icon: faHdd,
    description: (
      <>
        Support Data Caching (with auto clearing on Create, Update and Delete).
      </>
    ),
  },
  {
    icon: faBullseye,
    description: (
      <>
        API versioning in the URL or Header (versioning based on the route file name).
      </>
    ),
  },
  {
    icon: faTimes,
    description: (
      <>
        Exception handleing with custom JSON errors responses (using Exceptions Formatters).
      </>
    ),
  },
  {
    icon: faTags,
    description: (
      <>
        Support Shallow ETag HTTP Header, to reduce client bandwidth.
      </>
    ),
  },
  {
    icon: faLanguage,
    description: (
      <>
        Localization (easily switch between languages via request header field).
      </>
    ),
  },
  {
    icon: faPagelines,
    description: (
      <>
        Automatic Data Pagination (meta links to the next and previous data).
      </>
    ),
  },
  {
    icon: faUnlockAlt,
    description: (
      <>
        WEB and API Auth Middlewares. With Proxy endpoints for safer authentication of first-party Apps.
      </>
    ),
  },
  {
    icon: faMedkit,
    description: (
      <>
        Http Requests/Response Monitor and DB Query Debugger (from the Debugger Container).
      </>
    ),
  },
  {
    icon: faWrench,
    description: (
      <>
        Profiler, to display profiling data in the response (using Laravel Debugbar).
      </>
    ),
  },
  {
    icon: faFacebook,
    description: (
      <>
        Social Authentication supported out of the box "Facebook, Twitter, Google+" (Using Socalite).
      </>
    ),
  },
  {
    icon: faMagic,
    description: (
      <>
        Type-Casting JSON responses and pagination results with Transformers (using Fractal).
      </>
    ),
  },
  {
    icon: faHandshake,
    description: (
      <>
        Useful Tests Helpers for faster and more enjoyable automated testing (using PHPUnit).
      </>
    ),
  },
  {
    icon: faFileAlt,
    description: (
      <>
        Support multiple response payload formats (JSON API spec v1.0, Data Array & pure Data).
      </>
    ),
  },
  {
    icon: faClock,
    description: (
      <>
        Automatic dates conversion to ISO format in responses, from the Transformers.
      </>
    ),
  },
  {
    icon: faMoneyBill,
    description: (
      <>
        Support Stripe and WePay payment gateways (extandable to support other payment gatways).
      </>
    ),
  },
  {
    icon: faCogs,
    description: (
      <>
        System and user level settings out of the box (by the Settings Container).
      </>
    ),
  },
  {
    icon: faUnlock,
    description: (
      <>
        Easy Validation and Authorization (for User data, accessibility and ownership) with Requests objects.
      </>
    ),
  },
  {
    icon: faSitemap,
    description: (
      <>
        Maintainable and scalable Software Architectural Pattern (using the Porto SAP).
      </>
    ),
  },
  {
    icon: faRocket,
    description: (
      <>
        Code generator commands, for generating full CRUD operations, and other useful Commands.
      </>
    ),
  },
  {
    icon: faCubes,
    description: (
      <>
        Separation of UI's (Web, API and CLI) components (routes, controllers, requests, tests...).
      </>
    ),
  },
  {
    icon: faDesktop,
    description: (
      <>
        Ready Admin dashboard infrastructure with Login view (at admin.apiato.dev).
      </>
    ),
  },
  {
    icon: faMap,
    description: (
      <>
        Fully detailed documentation, with code samples, principles, definitions and guidelines.
      </>
    ),
  },
  {
    icon: faCode,
    description: (
      <>
        100% customizable and open code. Using greatest frameworks, tools, packages and standards.
      </>
    ),
  },

];

function Feature({ icon, description }) {
  return (
    <div className={clsx('col col--3', styles.feature)}>
      <div className="text--center">

        <FontAwesomeIcon
          icon={icon}
          size={"3x"}
          color={"#4457C1"}
        />


      </div>
      <p className="text--center">{description}</p>
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
