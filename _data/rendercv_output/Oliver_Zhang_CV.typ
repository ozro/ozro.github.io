// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.1.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Oliver Zhang",
  footer: context { [#emph[Oliver Zhang -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in Jan 2026] ],
  locale-catalog-language: "en",
  page-size: "a4",
  page-top-margin: 0.7in,
  page-bottom-margin: 0.7in,
  page-left-margin: 0.7in,
  page-right-margin: 0.7in,
  page-show-footer: true,
  page-show-top-note: true,
  colors-body: rgb(0, 0, 0),
  colors-name: rgb(0, 79, 144),
  colors-headline: rgb(0, 79, 144),
  colors-connections: rgb(0, 79, 144),
  colors-section-titles: rgb(0, 79, 144),
  colors-links: rgb(0, 79, 144),
  colors-footer: rgb(128, 128, 128),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 0.6em,
  typography-alignment: "justified",
  typography-date-and-location-column-alignment: right,
  typography-font-family-body: "Raleway",
  typography-font-family-name: "Raleway",
  typography-font-family-headline: "Raleway",
  typography-font-family-connections: "Raleway",
  typography-font-family-section-titles: "Raleway",
  typography-font-size-body: 10pt,
  typography-font-size-name: 30pt,
  typography-font-size-headline: 10pt,
  typography-font-size-connections: 10pt,
  typography-font-size-section-titles: 1.4em,
  typography-small-caps-name: false,
  typography-small-caps-headline: false,
  typography-small-caps-connections: false,
  typography-small-caps-section-titles: false,
  typography-bold-name: false,
  typography-bold-headline: false,
  typography-bold-connections: false,
  typography-bold-section-titles: false,
  links-underline: false,
  links-show-external-link-icon: false,
  header-alignment: left,
  header-photo-width: 3.5cm,
  header-space-below-name: 0.7cm,
  header-space-below-headline: 0.7cm,
  header-space-below-connections: 0.7cm,
  header-connections-hyperlink: true,
  header-connections-show-icons: true,
  header-connections-display-urls-instead-of-usernames: false,
  header-connections-separator: "",
  header-connections-space-between-connections: 0.5cm,
  section-titles-type: "with_full_line",
  section-titles-line-thickness: 0.5pt,
  section-titles-space-above: 0.5cm,
  section-titles-space-below: 0.3cm,
  sections-allow-page-break: true,
  sections-space-between-text-based-entries: 0.3em,
  sections-space-between-regular-entries: 1.2em,
  entries-date-and-location-width: 4.15cm,
  entries-side-space: 0.2cm,
  entries-space-between-columns: 0.1cm,
  entries-allow-page-break: false,
  entries-short-second-row: false,
  entries-summary-space-left: 0cm,
  entries-summary-space-above: 0.12cm,
  entries-highlights-bullet:  "•" ,
  entries-highlights-nested-bullet:  "•" ,
  entries-highlights-space-left: 0cm,
  entries-highlights-space-above: 0.12cm,
  entries-highlights-space-between-items: 0.12cm,
  entries-highlights-space-between-bullet-and-text: 0.5em,
  date: datetime(
    year: 2026,
    month: 1,
    day: 25,
  ),
)


= Oliver Zhang

#connections(
  [#connection-with-icon("location-dot")[San Francisco, USA]],
  [#link("mailto:oliverzhang1@yahoo.com", icon: false, if-underline: false, if-color: false)[#connection-with-icon("envelope")[oliverzhang1\@yahoo.com]]],
  [#link("https://oliverzzhang.com/", icon: false, if-underline: false, if-color: false)[#connection-with-icon("link")[oliverzzhang.com]]],
  [#link("https://linkedin.com/in/oliverzzhang", icon: false, if-underline: false, if-color: false)[#connection-with-icon("linkedin")[oliverzzhang]]],
  [#link("https://github.com/ozro", icon: false, if-underline: false, if-color: false)[#connection-with-icon("github")[ozro]]],
)


== Summary

I'm a versatile engineer with extensive experience building highly integrated electro-mechanical systems. I thrive when working in highly collaborative cross-disciplinary teams. I love finding elegant solutions that bring innovative ideas to life.

== Education

#education-entry(
  [
    #strong[Carnegie Mellon University], BS in Mechanical Engineering with an additional major in Robotics with University Honors -- Pittsburgh, USA

  ],
  [
    Aug 2015 – May 2019

  ],
  main-column-second-row: [
    - Completed a wide range of course work from mechanical engineering fundamentals to computer vision, artificial intelligence, and systems engineering.

    - Worked with cross-disciplinary teams on multiple projects, including building an amphibious vehicle, a self-navigating drone, and an autonomous delivery robot.

  ],
)

== Experience

#regular-entry(
  [
    #strong[Senior Mechanical Engineer], PA Consulting -- San Francisco, USA

  ],
  [
    July 2019 – present

  ],
  main-column-second-row: [
    #summary[Collaborating with diverse engineers and designers to find the path through complex challenges and turn inventive ideas into innovative products.]

    - The team's go-to expert for robotics, systems engineering, and analysis.

    - Delivering projects across many different industries, from medical robotics to industrial food production.

    - Collaborating with a wide range of clients from tech startups to Fortune 500 companies.

    - Coordinating highly disciplinary teams spread across multiple geographies.

    - Breaking complex problems down into key interactions and applying first principles analysis and modelling.

    - Building prototypes at the right fidelity to rapidly drive to the optimal design.

    - Growing the team's capabilities through weekly forums and training sessions, covering topics like analysis, sketching, or programming.

  ],
)

#regular-entry(
  [
    #strong[Project Engineer Intern], Autel Robotics -- Pittsburgh, USA

  ],
  [
    May 2017 – Aug 2017

  ],
  main-column-second-row: [
    #summary[Implemented tracking and gesture recognition algorithms for embedded execution on a quadcopter.]

  ],
)

== Skills

#strong[Programming:] Python, C\/C++, MATLAB, ROS, Unity

#strong[Mechanical Engineering:] Concept development and prototyping, Analysis of complex systems, DfM, SolidWorks

#strong[Systems Engineering:] Requirements development, System architecture design, Risk management

#strong[Robotics:] Feedback control, Sensor integration, Motion planning

#strong[Languages:] English (native speaker), Mandarin (native speaker)

== Patents

#regular-entry(
  [
    #strong[#link("https://patents.google.com/patent/WO2021087161A1/en")[US11058204B2]]

  ],
  [
    July 2021

  ],
  main-column-second-row: [
    #summary[Automated total nail care systems, devices, and methods]

  ],
)

== Projects

#regular-entry(
  [
    #strong[Novel Electromechanical Machine]

  ],
  [
    Aug 2025 – present

  ],
  main-column-second-row: [
    #summary[Developing a consumer facing electromechanical machine for a Fortune 500 company.]

    - Owned design of an Alpha prototype system with 7 actuated degrees of freedom.

    - Designed complex motion systems in heavily space constrained and finish constrained environment.

    - Balanced stringent industrial design intent with mechanical reliability, while meeting aggressive schedule.

    - Interfaced with a diverse team of systems engineers, electrical engineers, software engineers, and industrial designers.

    - Led prototype build effort and ensured successful delivery to client.

  ],
)

#regular-entry(
  [
    #strong[#link("https://oliverzzhang.com/projects/splice/")[Novel Cable Splicing Machine]]

  ],
  [
    Aug 2024 – Aug 2025

  ],
  main-column-second-row: [
    #summary[Developing an underground cable splicing machine that automates a complex process typically done by a trained technician.]

    - Built complex set of system requirements drawn from multiple different stakeholders, and managed key risks.

    - Designed system architecture to maximise reliability while meeting stringent weight and space constraints.

    - Created system workflows to validate concept of operation.

    - Developed multiple electromechanical mechanisms that each perform dexterous operations that previously required highly coordinated human actions.

  ],
)

#regular-entry(
  [
    #strong[Novel Smart Fitness Machine]

  ],
  [
    Aug 2022 – Aug 2024

  ],
  main-column-second-row: [
    #summary[Developed a novel fitness machine that is controllable wirelessly and can report data from multiple integrated sensors.]

    - Implemented and refined controls algorithms to realistically simulate inertia with an electric motor.

    - Built custom dynamometer rig with custom software which simulates human motion and displays metrics in real-time.

    - Led systems engineering effort to manage the integration and testing of the prototype across multiple locations globally.

    - Coordinated a highly cross-functional team with industrial designers, electrical engineers, firmware engineers, and mechanical engineers

  ],
)

#regular-entry(
  [
    #strong[Optimising Industrial Food Production]

  ],
  [
    Aug 2023 – Nov 2023

  ],
  main-column-second-row: [
    #summary[Analysed an industrial food production line to identify root causes of defects and improve throughput without changing line footprint.]

    - Analytically modelled complex dynamic behavior of key components in the production line leveraging high-speed camera footage collected on-site.

    - Developed several concepts for improvement, covering the full solution space.

    - Client implemented designs and achieved 47\% increased throughput without increasing line footprint.

  ],
)

#regular-entry(
  [
    #strong[Optimising Commercial Appliance]

  ],
  [
    Mar 2022 – Nov 2022

  ],
  main-column-second-row: [
    #summary[Analysed airflow through a commercial appliance to optimise efficiency.]

    - Built thermodynamic simulation of the system based on lab data collected from dozens of sensors.

    - Developed a feedback control system that dynamically adjusts air flow rate for best system performance.

    - Coordinated with firmware engineers and technicians to deploy and test control system.

  ],
)

#regular-entry(
  [
    #strong[Electromechanical Security Product]

  ],
  [
    Feb 2022 – Mar 2022

  ],
  main-column-second-row: [
    #summary[Rapidly developed concepts and prototypes for addressing a critical issue in a electromechanical security product.]

    - Analysed the existing design, identifying root causes of issues found in the field.

    - Brainstormed ideas and mapped the solution space with a dozen key architectures.

    - Built multiple prototypes that successfully demonstrated five leading concepts.

  ],
)

#regular-entry(
  [
    #strong[Medical Robot Arm]

  ],
  [
    Apr 2021 – Feb 2022

  ],
  main-column-second-row: [
    #summary[Developed mechanical designs for one of the arms in a medical robot.]

    - Optimised structural components with stringent weight and stiffness requirements.

    - Analysed and designed parts with extremely tight tolerances to ensure assemblability while minimising clearance.

    - Built comprehensive analytical model of a linkage mechanism to predict motion, loads, and deflection.

  ],
)

#regular-entry(
  [
    #strong[#link("https://oliverzzhang.com/projects/spool/")[Novel Subsystem Prototype]]

  ],
  [
    Sept 2020 – Apr 2021

  ],
  main-column-second-row: [
    #summary[Developed a proof-of-principle prototype to de-risk a key robotic subsystem.]

    - Developed a complex analytical model of the behavior of elastic materials fed from a spool.

    - Experimented with medical grade extruded tube materials, coatings, and cross-sectional profiles to generate desired properties such as bending stiffness, resilience, creep, and friction.

    - Designed and built a robotic system that process various sensor inputs to drive a custom control algorithm. The system uses clinical trial data to simulate real user motion, allowing high fidelity testing of expected behavior.

  ],
)

#regular-entry(
  [
    #strong[#link("https://oliverzzhang.com/projects/evolv-express/")[Evolv Express® Threat Detection System]]

  ],
  [
    Nov 2019 – Sept 2020

  ],
  main-column-second-row: [
    #summary[Developed manufacturable prototype in support of client electronics, addressing challenging structural, materials, mobility, and environmental requirements.]

    - Architected mechanical structure to improve stiffness, assemblability, and serviceability.

    - Converted fibreglass sheet-based design into structural foam\/RIM\/plastic extrusions.

    - Performed comprehensive Six sigma tolerance stack analysis and implemented GD&T tolerance controls.

  ],
)

#regular-entry(
  [
    #strong[Novel Chemical Treatment Prototype]

  ],
  [
    Aug 2019 – Nov 2019

  ],
  main-column-second-row: [
    #summary[Developed a prototype machine for temperature-controlled chemical treatment]

    - Developed Peltier cooling channels that maintain the temperature of a chemical being cycled through the system.

    - Designed sound dampening features to reduce the noise impact from vacuum pumps.

    - Built a portable sheet metal enclosure to hold sensitive chemicals and electronics.

  ],
)

#regular-entry(
  [
    #strong[Novel Human Machine Interface (HARMAN International)]

  ],
  [
    May 2018 – Aug 2018

  ],
  main-column-second-row: [
    #summary[Developed shape-shifting device to support client investigations into novel human-machine interfaces.]

    - Developed concepts through brainstorming, cross-pollination, and down-selection processes.\",

    - Built an integrated electromechanical prototype that was displayed at a major international trade show.\",

    - Built a graphics user interface to prove prototype usability and reliability.\"

  ],
)
