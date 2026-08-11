import React, { useState, useEffect } from 'react';
import CanvasBg from './components/CanvasBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Events from './components/Events';
import EventModal from './components/EventModal';
import Timeline from './components/Timeline';
import Brochure from './components/Brochure';
import Team from './components/Team';
import Location from './components/Location';
import AboutAssociation from './components/AboutAssociation';
import FAQ from './components/FAQ';

import AdminModal from './components/AdminModal';
import Footer from './components/Footer';

import { eventsData } from './data/eventsData';

function App() {
  const [events, setEvents] = useState(eventsData);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [initialEventId, setInitialEventId] = useState(null);
  const [stats, setStats] = useState({ totalRegistrations: 284 });

  useEffect(() => {
    // Keep local eventsData as the source of truth
    // If you want to use remote events later, re-enable this fetch.

    // Fetch stats
    fetch('/api/registrations/stats')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStats(data.data);
        }
      })
      .catch((e) => console.log('Stats offline fallback'));
  }, []);

  const handleOpenRegister = () => {
    window.open('https://forms.gle/ULqwLTu2izgfYckC9', '_blank');
  };

  const handleSuccessRegistration = () => {
    setStats((prev) => ({
      ...prev,
      totalRegistrations: prev.totalRegistrations + 1
    }));
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-amber-500 selection:text-black overflow-x-hidden">
      {/* Interactive Background Canvas */}
      <CanvasBg />

      {/* Navigation Header */}
      <Navbar
        onOpenRegister={() => handleOpenRegister(null)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenRegister={() => handleOpenRegister(null)}
          stats={stats}
        />

        <Countdown
          onOpenRegister={() => handleOpenRegister(null)}
        />

        <Events
          events={events}
          onSelectEvent={(ev) => setSelectedEvent(ev)}
          onOpenRegister={() => handleOpenRegister(null)}
        />

        <Timeline />

        <Brochure />

        <Team />

        <Location />

        <FAQ />

        <AboutAssociation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Dialogs */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onRegisterForEvent={(eventId) => handleOpenRegister(eventId)}
        />
      )}



      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  );
}

export default App;
