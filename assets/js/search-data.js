// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of the cool things I&#39;ve built.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-sketches",
          title: "sketches",
          description: "Snippets from my learning adventures.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/sketches/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-evolv-express",
          title: 'Evolv Express',
          description: "Developed a first of its kind weapons detection system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/evolv-express/";
            },},{id: "projects-novel-subsystem-prototype",
          title: 'Novel Subsystem Prototype',
          description: "De-risking a key robotic subsystem by building a feedback controlled prototype that can simulate clinical trials.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spool/";
            },},{id: "projects-food-production-optimisation",
          title: 'Food Production Optimisation',
          description: "Optimised an industrial food production line, nearly doubling throughput without increase in footprint.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/food/";
            },},{id: "projects-novel-cable-splicing-machine",
          title: 'Novel Cable Splicing Machine',
          description: "Developing an underground cable splicing machine that automates a complex process typically done by a trained technician.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/splice/";
            },},{id: "sketches-curvepong",
          title: 'curvepong',
          description: "Pong with a twist...",
          section: "Sketches",handler: () => {
              window.location.href = "/sketches/curvepong/";
            },},{id: "sketches-snakeout",
          title: 'snakeout',
          description: "When Snake meets Breakout.",
          section: "Sketches",handler: () => {
              window.location.href = "/sketches/snakeout/";
            },},{id: "sketches-l-system",
          title: 'L-system',
          description: "A basic L-system renderer.",
          section: "Sketches",handler: () => {
              window.location.href = "/sketches/l_system/";
            },},{id: "sketches-sketch-book",
          title: 'Sketch Book',
          description: "Some of the sketches I&#39;ve drawn with pen or with stylus.",
          section: "Sketches",handler: () => {
              window.location.href = "/sketches/sketchbook/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ozro", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/oliverzzhang", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
