import React from 'react';
 import classnames from 'classnames';
 import Layout from '@theme/Layout';
 import Link from '@docusaurus/Link';
 import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
 import useBaseUrl from '@docusaurus/useBaseUrl';
 import styles from './styles.module.css';

 const features = [
   {
     title: <>Easy to Use Project Management App</>,
     imageUrl: 'img/undraw_docusaurus_mountain.svg',
     description: (
       <>
         Focus on what matters, save time and work more efficiently
         through the Project management application that helps you create new plans, organize and assign tasks. 
         It can be used as a task manager tool and/or calendar.
       </>
     ),
   },
   {
     title: <>Social Media Marketing</>,
     imageUrl: 'img/undraw_docusaurus_tree.svg',
     description: (
       <>
         Let us help you add a little creative magic to your social media profiles and brand identity through our specialized brand solution.
       </>
     ),
   },
   {
     title: <>Turn-Key Web Development Services</>,
     imageUrl: 'img/undraw_docusaurus_react.svg',
     description: (
       <>
         Get a fully stacked team and tackle your organisations end to end design needs.[Click Here](https://gumroad.com/l/opbDH)
       </>
     ),
   },
 ];

 function Feature({imageUrl, title, description}) {
   const imgUrl = useBaseUrl(imageUrl);
   return (
     <div className={classnames('col col--4', styles.feature)}>
       {imgUrl && (
         <div className="text--center">
           <img className={styles.featureImage} src={imgUrl} alt={title} />
         </div>
       )}
       <h3>{title}</h3>
       <p>{description}</p>
     </div>
   );
 }

 function Home() {
   const context = useDocusaurusContext();
   const {siteConfig = {}} = context;
   return (
     <Layout
       title={`Hello from ${siteConfig.title}`}
       description="Description will go into a meta tag in <head />">
       <header className={classnames('hero hero--primary', styles.heroBanner)}>
         <div className="container">
           <h1 className="hero__title">{siteConfig.title}</h1>
           <p className="hero__subtitle">{siteConfig.tagline}</p>
           <div className={styles.buttons}>
             <Link
               className={classnames(
                 'button button--outline button--secondary button--lg',
                 styles.getStarted,
               )}
               to={useBaseUrl('docs/doc1')}>
               Get Started
             </Link>
           </div>
         </div>
       </header>
       <main>
         {features && features.length && (
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

 export default Home;
