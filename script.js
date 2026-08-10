/* =========================================================
   RYVONEXA '26 STANDALONE INTERACTIVE SCRIPT
   ========================================================= */

// Event Data matching P.S.R. Engineering College Brochure Poster
const eventsData = [
  {
    id: 'techtalk-arena',
    title: '1. TechTalk Arena',
    category: 'technical',
    tagline: 'Technical Paper & Oral Presentation Arena',
    shortDesc: 'Present your paper and research breakthroughs in Computer Science & Engineering before expert judges.',
    fullDesc: 'TechTalk Arena is the flagship paper presentation event of RYVONEXA-26 by P.S.R. Engineering College. Showcase your technological innovations, research papers, and technical slide decks.',
    rules: [
      'Team Size: Max 3 Members.',
      'Topic domain: AI/ML, Cloud, Cyber Security, IoT, Data Science & Web Tech.',
      'Presentation Time: 7 Mins + 2 Mins Q&A.'
    ],
    teamSize: '1 - 3 Members',
    time: '10:30 AM - 1:00 PM',
    venue: 'Seminar Hall 1 (CSE Block)',
    icon: 'mic',
    coordinators: [
      { name: 'Staff Coordinators', phone: '6369045590' },
      { name: 'Student Coordinators', phone: '7904832661' }
    ]
  },
  {
    id: 'code-relay',
    title: '2. Code Relay',
    category: 'technical',
    tagline: 'Team Relay Coding & Algorithmic Relay Battle',
    shortDesc: 'Pass the code baton! Teammates take turns coding solutions to complex algorithmic problems in real-time.',
    fullDesc: 'Code Relay tests team coordination and rapid problem solving. Teammates swap places at specified intervals without verbal communication to solve competitive programming sets.',
    rules: [
      'Team Size: 2 Members per team.',
      'Baton Swap every 5 minutes.',
      'Languages allowed: C, C++, Java, Python.'
    ],
    teamSize: '2 Members',
    time: '11:00 AM - 1:00 PM',
    venue: 'Computer Lab 2 (CSE Block)',
    icon: 'code-2',
    coordinators: [
      { name: 'Staff Coordinators', phone: '6369045590' },
      { name: 'Student Coordinators', phone: '7904832661' }
    ]
  },
  {
    id: 'prompt-cipher',
    title: '3. Prompt Cipher',
    category: 'technical',
    tagline: 'AI Prompt Engineering & Code Decryption',
    shortDesc: 'Craft precise AI prompts to crack code ciphers and synthesize target outputs using generative models.',
    fullDesc: 'Prompt Cipher puts your AI mastery to test. Formulate optimal prompts to solve logic ciphers and generate precise visual or code targets.',
    rules: [
      'Individual Participation.',
      'Round 1: Code Decryption via Prompting.',
      'Round 2: Generative Output Matching.'
    ],
    teamSize: '1 Member',
    time: '11:30 AM - 1:00 PM',
    venue: 'AI & Data Science Lab',
    icon: 'cpu',
    coordinators: [
      { name: 'Staff Coordinators', phone: '6369045590' },
      { name: 'Student Coordinators', phone: '7904832661' }
    ]
  },
  {
    id: 'frontend-fixit',
    title: '4. Frontend Fix-It',
    category: 'technical',
    tagline: 'UI Bug Fixing & Glassmorphic Layout Challenge',
    shortDesc: 'Fix broken web layouts, CSS bugs, and transform buggy templates into responsive web interfaces.',
    fullDesc: 'Frontend Fix-It challenges web developers to diagnose layout breaks, missing flex/grid properties, and styling bugs to craft a pixel-perfect responsive web page.',
    rules: [
      'Individual or Duo teams.',
      'Duration: 60 Minutes.',
      'Tech stack: HTML5, Vanilla CSS3, JavaScript.'
    ],
    teamSize: '1 - 2 Members',
    time: '2:00 PM - 3:30 PM',
    venue: 'Web Development Lab',
    icon: 'layout',
    coordinators: [
      { name: 'Staff Coordinators', phone: '6369045590' },
      { name: 'Student Coordinators', phone: '7904832661' }
    ]
  },
  {
    id: 'tech-gamble',
    title: '1. Tech Gamble',
    category: 'non-technical',
    tagline: 'High-Stakes Technical Quiz & Bidding Battle',
    shortDesc: 'Bet your points on your technical knowledge! A thrill-filled quiz game with strategic point bidding.',
    fullDesc: 'Tech Gamble combines technical trivia with risk management. Teams bid points on question categories before revealing the question.',
    rules: [
      'Team Size: 2 Members.',
      'Round 1: Rapid Fire Qualification.',
      'Round 2: Point Bidding & Gamble Auction.'
    ],
    teamSize: '2 Members',
    time: '11:00 AM - 12:30 PM',
    venue: 'CSE Seminar Hall 2',
    icon: 'dices',
    coordinators: [
      { name: 'Staff Coordinators', phone: '6369045590' },
      { name: 'Student Coordinators', phone: '7904832661' }
    ]
  },
  {
    id: 'crack-the-vault',
    title: '2. Crack The Vault',
    category: 'non-technical',
    tagline: 'Escape Room & Technical Riddle Cracking',
    shortDesc: 'Decipher cryptic clues, solve visual puzzles, and unlock vault codes before time runs out.',
    fullDesc: 'Crack The Vault is an immersive puzzle hunt where teams decipher sequential logic locks and hidden clues scattered across technical riddles.',
    rules: [
      'Team Size: 2 to 3 Members.',
      'Time Limit: 45 Minutes.',
      'No external internet access allowed during vault attempts.'
    ],
    teamSize: '2 - 3 Members',
    time: '11:30 AM - 1:00 PM',
    venue: 'Network Lab',
    icon: 'lock',
    coordinators: [
      { name: 'Staff Coordinators', phone: '6369045590' },
      { name: 'Student Coordinators', phone: '7904832661' }
    ]
  },
  {
    id: 'memory-wall',
    title: '3. Memory Wall',
    category: 'non-technical',
    tagline: 'Visual Observation & Tech Flash Memory Challenge',
    shortDesc: 'Test your photographic memory by recalling complex tech patterns, logos, and hidden visual details.',
    fullDesc: 'Memory Wall presents fast-moving technical slides and visual grids for a brief period. Participants must recall exact detail sequences and answer memory queries.',
    rules: [
      'Individual Participation.',
      'Visual Grid exposure: 30 Seconds.',
      'Highest accuracy wins.'
    ],
    teamSize: '1 Member',
    time: '2:00 PM - 3:00 PM',
    venue: 'Audio Visual Hall',
    icon: 'eye',
    coordinators: [
      { name: 'Staff Coordinators', phone: '6369045590' },
      { name: 'Student Coordinators', phone: '7904832661' }
    ]
  },
  {
    id: 'aura-unlocked',
    title: '4. Aura Unlocked',
    category: 'non-technical',
    tagline: 'Talent Showcase & Personality Hunt',
    shortDesc: 'Unleash your charismatic persona, stage presence, and unique creative talents in the flagship stage arena.',
    fullDesc: 'Aura Unlocked is the ultimate stage spotlight for creative expression, talent presentation, and quick-witted situational responses.',
    rules: [
      'Individual or Pair Performance.',
      'Stage Time: 3 to 5 Minutes.',
      'Props allowed (must be declared prior).'
    ],
    teamSize: '1 - 2 Members',
    time: '2:30 PM - 4:00 PM',
    venue: 'Main College Auditorium Stage',
    icon: 'sparkles',
    coordinators: [
      { name: 'Staff Coordinators', phone: '6369045590' },
      { name: 'Student Coordinators', phone: '7904832661' }
    ]
  }
];

const teamData = [
  {
    name: 'Dr. C. Balasubramanian',
    role: 'Prof & Head / CSE',
    tag: 'Convenor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Dr. A. Ramathilagam',
    role: 'Prof / CSE',
    tag: 'Convenor',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Dr. S. Priyadarsini',
    role: 'Prof / CSE',
    tag: 'Staff Co-Ordinator',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Ms. C. Sakthi Lakshmi Priya',
    role: 'AP / CSE',
    tag: 'Staff Co-Ordinator',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Mr. S.K. Abishek Muthaiah',
    role: 'Student Co-Ordinator',
    tag: 'Student Lead',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Mr. P. Sathees Kumar',
    role: 'Student Co-Ordinator',
    tag: 'Student Lead',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  }
];

const faqsData = [
  {
    q: 'Who is eligible to participate in RYVONEXA 2026?',
    a: 'Students pursuing B.E / B.Tech (CSE, IT, AI-DS, ECE, EEE, Mech, Civil) or PG degrees (M.E, MCA, M.Sc) from any accredited engineering college are eligible.'
  },
  {
    q: 'Is spot registration available on the day of the event?',
    a: 'While online registration is strongly recommended to reserve lab seats and hackathon slots, spot registration desk will be open from 8:30 AM to 9:30 AM.'
  },
  {
    q: 'What is the registration fee structure?',
    a: 'General Symposium Registration fee is ₹150 per head, which unlocks access to up to 2 events, official welcome kit, participation certificates, and complimentary lunch.'
  },
  {
    q: 'Will participation certificates be issued to everyone?',
    a: 'Yes, all registered candidates who attend events will receive physical & digital certificates of participation signed by the HOD and Dean.'
  }
];

// Initialize LocalStorage state for registrations
let storedRegistrations = JSON.parse(localStorage.getItem('ryvonexa_registrations') || '[]');

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 1. Canvas Constellation Engine
  initCanvas();

  // 2. Navbar Scroll Listener & Mobile Drawer
  initNavbar();

  // 3. Countdown Timer
  initCountdown();

  // 4. Render Events & Filter Tabs
  renderEvents('all');
  initEventFilters();

  // 5. Render Team Grid
  renderTeam();

  // 6. Render FAQs
  renderFAQs();

  // 7. Modals Setup
  initModals();

  // 8. Brochure PDF Download
  initBrochureDownload();

  // Update live registration counter
  updateParticipantCounter();
});

// Canvas Engine Implementation
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const mouse = { x: null, y: null, radius: 140 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  const particleCount = Math.min(Math.floor(width / 16), 80);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: (Math.random() - 0.5) * 0.8,
      color: Math.random() > 0.4 ? '#D4AF37' : '#FF2D2D'
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > width) p.speedX *= -1;
      if (p.y < 0 || p.y > height) p.speedY *= -1;

      // Mouse magnet
      if (mouse.x && mouse.y) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 2;
          p.y -= (dy / dist) * force * 2;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        let p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.strokeStyle = `rgba(229, 193, 88, ${0.25 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// Navbar Handler
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        if (mobileDrawer) mobileDrawer.classList.remove('open');
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Countdown Handler
function initCountdown() {
  const targetDate = new Date('2026-09-16T09:00:00').getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('timer-days').innerText = String(days).padStart(2, '0');
      document.getElementById('timer-hours').innerText = String(hours).padStart(2, '0');
      document.getElementById('timer-mins').innerText = String(mins).padStart(2, '0');
      document.getElementById('timer-secs').innerText = String(secs).padStart(2, '0');
    }
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// Render Events Grid
function renderEvents(categoryFilter) {
  const grid = document.getElementById('events-grid');
  if (!grid) return;

  const filtered = eventsData.filter(e => categoryFilter === 'all' || e.category === categoryFilter);

  grid.innerHTML = filtered.map(ev => {
    const isTech = ev.category === 'technical';
    return `
      <div class="glass-card event-card" onclick="openEventDetails('${ev.id}')">
        <div class="event-card-stripe ${isTech ? 'event-stripe-tech' : 'event-stripe-nontech'}"></div>
        <div>
          <div class="event-card-header">
            <div class="event-icon">
              <i data-lucide="${ev.icon}" class="${isTech ? 'cyan-text' : 'purple-text'}"></i>
            </div>
            <span class="event-category-tag ${isTech ? 'tag-tech' : 'tag-nontech'}">${ev.category}</span>
          </div>

          <h3 class="event-title">${ev.title}</h3>
          <div class="event-tagline">${ev.tagline}</div>
          <p class="event-desc">${ev.shortDesc}</p>
        </div>

        <div>
          <div class="event-meta">
            <span class="cyan-text">🕒 ${ev.time}</span>
            <span>👥 ${ev.teamSize}</span>
          </div>

          <button class="btn-secondary w-full text-xs py-2">
            View Details <i data-lucide="arrow-up-right"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function initEventFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderEvents(e.target.dataset.filter);
    });
  });
}

// Open Event Details Modal
window.openEventDetails = function(eventId) {
  const ev = eventsData.find(e => e.id === eventId);
  if (!ev) return;

  const modal = document.getElementById('event-modal');
  const content = document.getElementById('event-modal-content');

  content.innerHTML = `
    <div class="section-badge">${ev.category} Event</div>
    <h2 class="section-title mb-1">${ev.title}</h2>
    <div class="cyan-text font-code text-sm mb-4">${ev.tagline}</div>

    <div class="timer-grid mb-4 text-xs font-code" style="grid-template-columns: repeat(3, 1fr);">
      <div class="timer-box"><span>Team Size</span><strong class="cyan-text text-sm">${ev.teamSize}</strong></div>
      <div class="timer-box"><span>Time Slot</span><strong class="purple-text text-sm">${ev.time}</strong></div>
      <div class="timer-box"><span>Venue</span><strong class="pink-text text-sm">${ev.venue}</strong></div>
    </div>

    <h4 class="font-bold text-white mb-2">Overview</h4>
    <p class="text-sm text-gray-300 mb-4">${ev.fullDesc}</p>

    <h4 class="font-bold text-white mb-2">Rules</h4>
    <ul class="brochure-list mb-6">
      ${ev.rules.map(r => `<li><i data-lucide="check-circle" class="cyan-icon"></i> ${r}</li>`).join('')}
    </ul>
  `;

  modal.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
};

// Render Team & FAQ
function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;

  grid.innerHTML = teamData.map(t => `
    <div class="glass-card team-card">
      <div class="team-avatar"><img src="${t.avatar}" alt="${t.name}"></div>
      <span class="team-tag">${t.tag}</span>
      <h3>${t.name}</h3>
      <div class="team-role">${t.role}</div>
      <div class="team-socials">
        <a href="#"><i data-lucide="linkedin"></i></a>
        <a href="#"><i data-lucide="github"></i></a>
        <a href="#"><i data-lucide="mail"></i></a>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function renderFAQs() {
  const container = document.getElementById('faq-list');
  if (!container) return;

  container.innerHTML = faqsData.map((f, idx) => `
    <div class="glass-card faq-item" onclick="toggleFAQ(${idx})">
      <div class="faq-question">
        <span>${f.q}</span>
        <i data-lucide="chevron-down" id="faq-icon-${idx}"></i>
      </div>
      <div id="faq-ans-${idx}" class="faq-answer hidden">${f.a}</div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

window.toggleFAQ = function(idx) {
  const ans = document.getElementById(`faq-ans-${idx}`);
  if (ans) ans.classList.toggle('hidden');
};

// Modals Handling
function initModals() {
  document.querySelectorAll('.open-register-modal').forEach(btn => {
    btn.addEventListener('click', () => openRegisterModal(null));
  });

  const adminTriggers = [document.getElementById('admin-trigger-btn'), document.getElementById('mobile-admin-btn')];
  adminTriggers.forEach(btn => {
    if (btn) btn.addEventListener('click', openAdminModal);
  });

  document.querySelectorAll('.close-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.target.closest('.modal-overlay').classList.add('hidden');
    });
  });

  const refreshBtn = document.getElementById('refresh-admin-btn');
  if (refreshBtn) refreshBtn.addEventListener('click', renderAdminTable);

  const searchInput = document.getElementById('admin-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => renderAdminTable(e.target.value));
  }
}

window.closeModal = function(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('hidden');
};

window.openRegisterModal = function(selectedEvId) {
  window.open('https://forms.gle/ULqwLTu2izgfYckC9', '_blank');
};


window.toggleEventCheck = function(cardEl, evId) {
  cardEl.classList.toggle('selected');
  const checkbox = cardEl.querySelector('input[type="checkbox"]');
  if (checkbox) checkbox.checked = !checkbox.checked;
};

function openAdminModal() {
  const modal = document.getElementById('admin-modal');
  renderAdminTable();
  modal.classList.remove('hidden');
}

function renderAdminTable(filterText = '') {
  const tbody = document.getElementById('admin-table-body');
  if (!tbody) return;

  const term = filterText.toLowerCase();
  const list = storedRegistrations.filter(r => 
    r.regId.toLowerCase().includes(term) ||
    r.fullName.toLowerCase().includes(term) ||
    r.college.toLowerCase().includes(term)
  );

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center p-4 text-gray-500">No registrations found yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(r => `
    <tr>
      <td class="cyan-text font-bold">${r.regId}</td>
      <td>${r.fullName}</td>
      <td>${r.college}</td>
      <td>${r.year}</td>
      <td class="purple-text font-bold">${r.selectedEvents.length || 1} Events</td>
      <td class="gold-text">₹${r.totalFee}</td>
      <td><span class="tag-tech font-bold">Confirmed</span></td>
    </tr>
  `).join('');
}

function updateParticipantCounter() {
  const el = document.getElementById('stat-participants');
  if (el) {
    el.innerText = `${284 + storedRegistrations.length}+`;
  }
}

// PDF Brochure Generator
function initBrochureDownload() {
  const btn = document.getElementById('download-brochure-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (!window.jspdf) {
      alert('PDF module loading, please retry in a second.');
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFillColor(5, 5, 5);
    doc.rect(0, 0, 210, 297, 'F');

    doc.setTextColor(229, 193, 88);
    doc.setFontSize(24);
    doc.text('RYVONEXA 2026', 105, 30, { align: 'center' });

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.text('NATIONAL LEVEL TECHNICAL SYMPOSIUM - DEPT OF CSE', 105, 40, { align: 'center' });

    doc.save('RYVONEXA_2026_Official_Brochure.pdf');
  });
}
