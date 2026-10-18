/* Faculty information for the ESED IIT Bombay faculty profiles.
   Photo paths match those used in faculty.html. */

const facultyProfiles = {
  'prof-munish-chandel': {
    name: 'Prof. Munish Chandel',
    role: 'Head Of Department & Professor, ESED',
    photo: './photos/munish.chandel.jpg',
    room: '411, Environmental Research Laboratory (ERL), ESED-DESE Building',
    phone: '+91-22-25767856',
    email: 'munish.chandel@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/munish-chandel',
    education: [
      'Ph.D. in Environmental Engineering, IIT Delhi (2006)',
      'M.E. in Environmental Engineering, M.N. National Institute of Technology, Allahabad (2001)',
      'B.Tech. in Civil Engineering, NIT Hamirpur (1999)'
    ],
    research: [
      'Chemical looping combustion',
      'Carbon capture and storage',
      'Greenhouse gas mitigation',
      'Fluidized-bed combustion',
      'Solid-waste management',
      'Waste to energy',
      'Water and energy nexus'
    ]
  },

  'prof-anurag-garg': {
    name: 'Prof. Anurag Garg',
    role: 'Institute Chair Professor in Sciences and Engineering',
    photo: './photos/Photo_Prof_Anurag_Garg.jpeg',
    room: '311, ESED-DESE Building',
    phone: '+91-22-25767861',
    email: 'a.garg@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/anurag-garg',
    education: [
      'B.E. in Civil Engineering, University of Roorkee (1995)',
      'M.E. in Chemical Engineering, University of Roorkee (1999)',
      'Ph.D. in Environmental Engineering, IIT Roorkee (2005)'
    ],
    research: [
      'Environmental engineering',
      'Industrial pollution abatement',
      'Wastewater treatment and resource recovery',
      'Environmental systems and sustainability'
    ],
    
  },

  'prof-v-s-vamsi-botlaguduru': {
    name: 'Prof. V. S. Vamsi Botlaguduru',
    role: 'Assistant Professor',
    photo: './photos/vamsi.jpg',
    room: '306, Environmental Process Engineering Laboratory (EPEL), ESED-DESE Building',
    phone: '+91-22-25765855',
    email: 'vamsi.bvs@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/v-s-vamsi-botlaguduru',
    education: [
      'Ph.D. in Civil Engineering, Texas A&M University (2016)',
      'M.S. in Biological & Agricultural Engineering, Texas A&M University (2009)',
      'B.Tech. in Civil Engineering, Acharya Nagarjuna University (2007)'
    ],
    research: [
      'Air quality trends analysis',
      'UV-based advanced redox processes for water and wastewater treatment',
      'Removal of emerging contaminants from water and wastewater'
    ]
  },

  'prof-srinidhi-balasubramanian': {
    name: 'Prof. Srinidhi Balasubramanian',
    role: 'Assistant Professor',
    photo: './photos/Balasubramanian, Srinidhi_photo.jpg',
    room: '310, Climate and Air Quality Research Laboratory (CARES), ESED-DESE Building',
    phone: '+91-22-25765856',
    email: 'srinidhi@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/srinidhi-balasubramanian',
    education: [
      'Postdoctoral Research Associate, University of Minnesota Twin Cities (2018–2021)',
      'Ph.D. in Environmental Engineering, University of Illinois Urbana-Champaign (2018)',
      'M.Tech. in Environmental Science and Engineering, IIT Bombay (2010)',
      'B.E. in Civil Engineering, Sardar Patel College of Engineering (2008)'
    ],
    research: [
      'Air quality modeling',
      'Air-quality impacts on human and environmental health',
      'Reactive nitrogen flows',
      'Sustainability of agriculture, biofuels and food systems'
    ]
  },

  'prof-abhishek-chakraborty': {
    name: 'Prof. Abhishek Chakraborty',
    role: 'Assistant Professor',
    photo: './photos/AC_0.jpg',
    room: '408, Chemistry of Atmospheric Pollutants Laboratory (CAP), ESED-DESE Building',
    phone: '+91-22-25765853',
    email: 'abhishekc@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/abhishek-chakraborty',
    education: [
      'Ph.D. in Civil & Environmental Engineering, IIT Kanpur',
      'M.Tech. in Environmental Engineering, IIT Kanpur',
      'B.E. in Civil Engineering, Bengal Engineering and Science University (now IIEST)'
    ],
    research: [
      'Air-pollution control technologies',
      'Atmospheric processing of organic aerosols',
      'Fog–smog–aerosol interactions',
      'Physicochemical characterization of aerosols',
      'Real-time air-pollution monitoring',
      'Source apportionment'
    ]
  },

  'prof-indrajit-chakraborty': {
    name: 'Prof. Indrajit Chakraborty',
    role: 'Assistant Professor',
    photo: './photos/IC.jpg',
    room: '208, Environmental Recovery, Surveillance and Treatment Laboratory (EnReST), ESED-DESE Building',
    phone: '+91-22-25767143',
    email: 'indra.esed@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/indrajit-chakraborty',
    education: [
      'Ph.D. in Environmental Engineering, IIT Kharagpur (2017–2021)',
      'M.Tech. in Environmental Engineering, IIT Kharagpur (2015–2017)',
      'B.Tech. in Civil Engineering, NIT Durgapur (2006–2010)'
    ],
    research: [
      'Environmental bioremediation of wastewater',
      'Microbial roles in treatment of emerging contaminants',
      'Antimicrobial-resistance spread',
      'Resource recovery from wastewater and organic waste',
      'Waste-derived materials for environmental applications'
    ]
  },

  'prof-sanjeev-chaudhari': {
    name: 'Prof. Sanjeev Chaudhari',
    role: 'Professor',
    photo: './photos/SKC.jpg',
    room: '305, Water Research Laboratory (WRL), ESED-DESE Building',
    phone: '+91-22-25767855',
    email: 'sanjeev@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/sanjeev-chaudhari',
    education: [
      'Ph.D. in Environmental Engineering, IIT Kanpur (1993)',
      'Postgraduate Diploma in Sanitary Engineering, IHE Delft',
      'M.Tech. in Environmental Engineering, IIT Kanpur',
      'B.E. in Civil Engineering, SGSITS Indore'
    ],
    research: [
      'Biological nutrient removal',
      'Treatment of textile wastewater',
      'Arsenic removal from water',
      'Natural coagulants for water and wastewater treatment'
    ]
  },

  'prof-anil-kumar-dikshit': {
    name: 'Prof. Anil Kumar Dikshit',
    role: 'Professor',
    photo: './photos/AKD.jpg',
    room: '410, Environmental Infrastructure and Clean Tech Laboratory (EICT), ESED-DESE Building',
    phone: '+91-22-25767862',
    email: 'dikshit@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/anil-kumar-dikshit',
    education: [
      'Ph.D. in Environmental Systems Engineering, Cornell University (1994)',
      'M.Tech. in Civil Engineering, IIT Kanpur (1987)',
      'B.Tech. in Civil Engineering, HBTI Kanpur (1985)'
    ],
    research: [
      'GIS for environment',
      'Environmental management and systems modelling',
      'Optimization',
      'Industrial effluent and sludge management',
      'Water supply and water/wastewater treatment'
    ]
  },

  'prof-pradip-kalbar': {
    name: 'Prof. Pradip Kalbar',
    role: 'Professor',
    photo: './photos/Pradip-Kalbar_0.jpg',
    room: '308, SRISHTI, ESED-DESE Building',
    phone: '+91-22-25769330',
    email: 'kalbar@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/pradip-kalbar',
    education: [
      'Ph.D., Centre for Environmental Science & Engineering, IIT Bombay (2013)',
      'M.Tech. in Environmental Engineering, VJTI Mumbai (2007)',
      'B.E. in Environmental Engineering, Shivaji University (2005)'
    ],
    research: [
      'Water supply systems and hydraulic modelling',
      'Wastewater management, reuse and resource recovery',
      'Life-cycle assessment and material-flow analysis',
      'Circular economy',
      'Infrastructure resilience',
      'Climate-change mitigation and adaptation',
      'Water and environmental policy'
    ]
  },

  'prof-subhankar-karmakar': {
    name: 'Prof. Subhankar Karmakar',
    role: 'Professor; Vinaya & Samir Kapoor Chair in Climate Studies',
    photo: './photos/SK.jpg',
    room: '207, Environmental Systems Research Laboratory (ESRL), ESED-DESE Building',
    phone: '+91-22-25767857',
    email: 'skarmakar@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/subhankar-karmakar',
    education: [
      'Ph.D. in Water Resources & Environmental Engineering, Indian Institute of Science, Bengaluru (2006)',
      'B.E. in Civil Engineering, Jalpaiguri Government Engineering College (1998)'
    ],
    research: [
      'Hydro-climatic extremes, vulnerability and risk',
      'Environmental and water-resources systems',
      'Environmetrics',
      'Uncertainty modelling and decision science for environmental systems'
    ]
  },

  'prof-suparna-mukherji': {
    name: 'Prof. Suparna Mukherji',
    role: 'Professor',
    photo: './photos/Suparna_photo.jpg',
    room: '513, Treatment Remediation and Applied Microbiology Laboratory (TRAM), ESED-DESE Building',
    phone: '+91-22-25767854',
    email: 'mitras@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/suparna-mukherji',
    education: [
      'Ph.D. in Environmental Engineering, University of Michigan (1997)',
      'M.S. in Civil and Environmental Engineering, Clarkson University (1991)',
      'B.Tech. in Energy Engineering, IIT Kharagpur (1989)'
    ],
    research: [
      'Antimicrobial-resistance monitoring and abatement',
      'Algal–bacterial systems',
      'Bioremediation and biotransformation',
      'Environmental nanotechnology',
      'Fate and transport of pollutants',
      'Monitoring and removal of microorganisms and micropollutants',
      'Resource recovery and water treatment'
    ]
  },

  'prof-harish-phuleria': {
    name: 'Prof. Harish Phuleria',
    role: 'Professor',
    photo: './photos/HarishPhuleria1.jpg',
    room: '406, Air and Noise Exposure Research Group (ANERG), ESED-DESE Building',
    phone: '+91-22-25765851',
    email: 'phuleria@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/harish-phuleria',
    education: [
      'Ph.D. in Environmental Engineering, University of Southern California (2007)',
      'M.Tech. in Environmental Science & Engineering, IIT Bombay (2003)',
      'M.Sc. in Chemistry, IIT Delhi (2001)'
    ],
    research: [
      'Air quality and particulate matter',
      'Air pollution exposure and health',
      'Indoor and outdoor air pollution',
      'Vehicle emissions and source characterization'
    ],
    note: 'Research topics are summarized from the official faculty page and available CV.'
  },

  'prof-manoranjan-sahu': {
    name: 'Prof. Manoranjan Sahu',
    role: 'Associate Professor',
    photo: './photos/MS.jpg',
    room: '507, Aerosol and Nanoparticle Technology Laboratory (ANT), ESED-DESE Building',
    phone: '+91-22-25765852',
    email: 'mrsahu@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/manoranjan-sahu',
    education: [
      'Postdoctoral Fellow, University of Illinois Urbana-Champaign',
      'Ph.D. and M.S. in Energy, Environmental and Chemical Engineering, Washington University in St. Louis',
      'M.Tech. in Environmental Science and Engineering, IIT Bombay',
      'B.E. in Civil Engineering, IGIT, Utkal University'
    ],
    research: [
      'Air-pollution control technologies',
      'Aerosol and air quality source apportionment',
      'Low-cost sensors, satellite data and forecasting',
      'Data-science applications in environmental engineering',
      'Nanomaterial synthesis for water treatment',
      'Bioaerosol disinfection',
      'Process development and technology scale-up'
    ]
  },

  'prof-amritanshu-shriwastav': {
    name: 'Prof. Amritanshu Shriwastav',
    role: 'Associate Professor',
    photo: './photos/as_0.jpg',
    room: '512, ESED-DESE Building',
    phone: '+91-22-25767858',
    email: 'amritan@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/amritanshu-shriwastav',
    education: [
      'Ph.D. in Civil Engineering, IIT Kanpur (2008–2014)',
      'M.Tech. in Environmental Engineering and Management, IIT Kanpur (2005–2007)',
      'B.Tech. in Mechanical Engineering, Hindustan College of Science & Technology (2000–2004)'
    ],
    research: [
      'Advanced oxidation processes',
      'Biological nutrient removal',
      'Occurrence of microplastics in the environment',
      'Fate and transport of pollutants in the natural environment'
    ]
  },

  'prof-renuka-verma': {
    name: 'Prof. Renuka Verma',
    role: 'Assistant Professor',
    photo: './photos/renukaverma.jpg',
    room: '506, RESILIENT Laboratory, ESED-DESE Building',
    phone: '+91-22-25765857',
    email: 'renukaverma@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/renuka-verma',
    education: [
      'Ph.D. in Civil Engineering (Environmental Engineering), IIT Roorkee (2022)',
      'M.Tech. in Civil Engineering (Environmental Engineering), IIT Roorkee (2015)',
      'B.Tech. in Civil Engineering, Jamia Millia Islamia (2013)'
    ],
    research: [
      'Water and wastewater treatment',
      'Nutrient recovery from wastewater',
      'Ion exchange, adsorption and reactive sorption',
      'Materials for water and wastewater remediation'
    ]
  },

  'prof-swatantra-pratap-singh': {
    name: 'Prof. Swatantra Pratap Singh',
    role: 'Associate Professor',
    photo: './photos/SPS.jpg',
    room: '405, Environmental Nanotechnology Research Laboratory (EnNano), ESED-DESE Building',
    phone: '+91-22-25767859',
    email: 'swatantra@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/swatantra-pratap-singh',
    education: [
      'Postdoctoral Scholar, Zuckerberg Institute of Water Research, Ben-Gurion University of the Negev (2016–2018)',
      'Ph.D. in Civil Engineering, IIT Kanpur (2010–2015)',
      'M.Tech. in Environmental Engineering and Management, IIT Kanpur (2007–2009)',
      'M.Sc. in Organic Chemistry, Deen Dayal Upadhyaya Gorakhpur University (2004–2006)'
    ],
    research: [
      'Environmental nanotechnology',
      'Environmental quantum-chemical modelling',
      'Fate and transport of organic and emerging contaminants',
      'Membrane desalination and wastewater treatment',
      'Biofouling control by nanomaterials',
      'Biological and physicochemical treatment processes'
    ]
  },

  'prof-tabish-nawaz': {
    name: 'Prof. Tabish Nawaz',
    role: 'Associate Professor',
    photo: './photos/TN.jpg',
    room: '605, Wastewater & Resource-Recovery Lab (WRRL), ESED-DESE Building',
    phone: '+91-22-25765854',
    email: 'tnawaz@iitb.ac.in',
    official: 'https://www.esed.iitb.ac.in/faculty/tabish-nawaz',
    education: [
      'Ph.D. in Environmental Engineering, University of Massachusetts Dartmouth (2013–2017)',
      'M.Tech. in Chemical Engineering, IIT Kharagpur (2006–2011)',
      'B.Tech. in Chemical Engineering, IIT Kharagpur (2006–2011)'
    ],
    research: [
      'Electrochemical disinfection',
      'Ion-exchange and adsorption systems',
      'Landfill-leachate treatment',
      'Bioremediation',
      'Metal recovery from waste streams',
      'Wastewater treatment and resource recovery',
      'PFAS removal and degradation',
      'Membrane and nanoparticle synthesis'
    ]
  },
  "prof-sharada-navada": {
  name: "Prof. Sharada Navada",
  designation: "Assistant Professor",
  department: "Environmental Science and Engineering",
  category: "Core Faculty",

  photo: "./photos/SN.jpg",

  location: "510, ESED-DESE Building",
  phone: "+91-22-21593809",
  email: "sharada.navada@iitb.ac.in",

 education: [
  'Industrial Ph.D. (Department of Chemistry), Norwegian University of Science and Technology (NTNU), Trondheim, Norway (2017–2021). Thesis: Salinity acclimation strategies for nitrifying bioreactors in recirculating aquaculture systems',
  'M.Sc. in Civil & Environmental Engineering, Carnegie Mellon University, Pittsburgh, PA, USA (2012–2013)',
  'B.Tech. in Chemical Engineering (Honors) with Minor in Computer Science, IIT Bombay, Mumbai, India (2008–2012)'
],

research: [
  'Recirculating aquaculture systems',
  'Biofilms',
  'Water treatment',
  'Microbial ecology'
],

  homepage: "https://www.esed.iitb.ac.in/faculty/sharada-navada#personal"
},

};

const page = document.getElementById('profilePage');
const id = new URLSearchParams(window.location.search).get('id');
const person = facultyProfiles[id];

const esc = (value = '') =>
  String(value).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[c]);

const listItems = (items = []) =>
  items.map(item => `<li>${esc(item)}</li>`).join('');

if (!page) {
  console.error('Profile page container #profilePage was not found.');
} else if (!person) {
  page.innerHTML = `
    <div class="error-state">
      <h1>Faculty profile not found</h1>
      <p>The requested profile ID is missing or invalid.</p>
      <a href="./faculty.html">Return to faculty directory</a>
    </div>
  `;
} else {
  document.title = `${person.name} | ESED, IIT Bombay`;

  const initials = person.name
    .replace(/^Prof\.\s*/, '')
    .split(/\s+/)
    .map(part => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const contact = [
    person.room && ['Office / Lab', person.room],
    person.phone && ['Phone', person.phone],
    person.email && ['Email', person.email]
  ];

  const contactRows = contact
    .filter(Boolean)
    .map(([label, value]) => `
      <li>
        <span class="detail-label">${esc(label)}</span>
        <span class="detail-value">
          ${
            label === 'Phone'
              ? `<a href="tel:${esc(value.replace(/[^+\d]/g, ''))}">${esc(value)}</a>`
              : label === 'Email'
                ? `<a href="mailto:${esc(value)}">${esc(value)}</a>`
                : esc(value)
          }
        </span>
      </li>
    `)
    .join('');

  page.innerHTML = `
    <section class="profile-hero">
      <div class="portrait-wrap">
        ${
          person.photo
            ? `<img
                src="${esc(person.photo)}"
                alt="${esc(person.name)}"
                onerror="this.remove();this.parentElement.innerHTML='<div class=&quot;portrait-fallback&quot;>${esc(initials)}</div>'"
              >`
            : `<div class="portrait-fallback">${esc(initials)}</div>`
        }
      </div>

      <div class="profile-intro">
        <div class="eyebrow">
          Environmental Science &amp; Engineering · IIT Bombay
        </div>

        <h1 class="profile-name">${esc(person.name)}</h1>
        <p class="profile-role">${esc(person.role)}</p>

        <div class="profile-pills">
          <span class="pill">Core Faculty</span>
          <span class="pill">IIT Bombay</span>
        </div>

        <div class="profile-actions">
          <a
            class="action-link primary"
            href="${esc(person.official)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official IITB profile ↗
          </a>

          ${
            person.email
              ? `<a class="action-link secondary" href="mailto:${esc(person.email)}">
                  Contact faculty ↗
                </a>`
              : ''
          }
        </div>
      </div>
    </section>

    <section class="profile-content">
      <article class="info-panel">
        <h2 class="section-title">Contact &amp; location</h2>
        <ul class="detail-list">${contactRows}</ul>
      </article>

      <article class="info-panel">
        <h2 class="section-title">Education &amp; background</h2>
        <ul class="detail-list">${listItems(person.education || [])}</ul>
      </article>

      <article class="info-panel wide">
        <h2 class="section-title">Research areas</h2>

        <div class="research-tags">
          ${(person.research || [])
            .map(item => `<span class="research-tag">${esc(item)}</span>`)
            .join('')}
        </div>

        ${
          person.note
            ? `<p class="profile-note">${esc(person.note)}</p>`
            : ''
        }

        <p class="profile-note">
          
        </p>
      </article>
    </section>
  `;
}