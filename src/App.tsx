/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { WelcomeStory } from './components/WelcomeStory';
import { GoogleReviews } from './components/GoogleReviews';
import { LocationMap } from './components/LocationMap';
import { BookSection } from './components/BookSection';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      {/* Preloader with Logo */}
      <Preloader />

      {/* Fixed Topbar */}
      <Header />

      {/* Main Content Sections strictly in Greek */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Marquee */}
        <Marquee />

        {/* Services Split */}
        <Services />

        {/* The Shop (About) */}
        <WelcomeStory />

        {/* Reviews */}
        <GoogleReviews />

        {/* Visit (Hours & Contact) */}
        <LocationMap />

        {/* Book */}
        <BookSection />

        {/* Gallery */}
        <Gallery />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
