export const projects = [
  {
    id: 'magic-missiles',
    title: 'Magic Missiles',
    summary:
      'HackNC 2024 Best Gaming Hack: campus-scale location strategy built with Swift client and a TypeScript/Express backend.',
    image: '/images/projects/magic-missiles.png',
    tech: ['Swift', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Push Notifications'],
    repo: 'https://github.com/rydklein/missile-app',
    content: `
      <p>
        Magic Missiles is a campus-wide game where wizards duel their friends in real time, planning spells during the night and
        sprinting out of blast zones during daytime action phases.
      </p>
      <h2>Inspiration</h2>
      <p>
        The idea stems from an old App Store game that let friends "launch missiles" at each other's locations. Reimagining the
        concept for a college campus felt natural; getting classmates to drop backpacks and sprint across the quad made for a
        compelling pitch, so a team quickly formed around the vision.
      </p>
      <h2>What It Does</h2>
      <ul>
        <li>Players join lobbies, receive three lives, and compete to be the last wizard standing.</li>
        <li>Daily cycles split into planning phases overnight and eight-hour action phases from 10 AM to 6 PM.</li>
        <li>During planning, wizards queue a missile target zone and reserve a warded safe space for themselves.</li>
        <li>When action starts, missiles can be launched anytime; caught players get a map, notification, and a one-minute timer to escape.</li>
        <li>Because spells affect everyone, strategic placement is critical; obvious zones risk getting cancelled by counterplay.</li>
      </ul>
      <h2>How We Built It</h2>
      <p>
        The frontend iOS app is written in Swift, while a TypeScript Express backend with Prisma and PostgreSQL tracks games,
        wizards, and spell targets. Radius checks happen client-side, avoiding storage of real-time location data.
      </p>
      <h2>Accomplishments</h2>
      <p>
        The team used Apple's push notification flow on the first full end-to-end test and kept collaboration smooth enough to
        ship within the HackNC weekend, earning Best Gaming Hack honors in 2024.
      </p>
      <h2>What We Learned</h2>
      <ul>
        <li>Organized planning and shared design patterns keep cross-disciplinary teams in sync.</li>
        <li>Device haptics and thoughtful feedback loops heighten immersion.</li>
        <li>Prisma can drive time-sensitive push notification workflows.</li>
        <li>Fun fact discovered along the way: San Marino is the oldest country in Europe.</li>
      </ul>
      <h2>What's Next</h2>
      <p>
        The team plans to keep polishing Magic Missiles into a regular campus pastime, and they expect more creative twists and, likely,
        exhausted friends sprinting across UNC soon.
      </p>
      <h2>Built With</h2>
      <ul>
        <li>Swift</li>
        <li>TypeScript</li>
        <li>Express</li>
        <li>Prisma</li>
        <li>PostgreSQL</li>
        <li>Postman</li>
      </ul>
    `,
  },
  {
    id: 'chain-game',
    title: 'Chain Game',
    summary:
      'Solo-built word chain game with a React front end, FastAPI backend, and OpenAI-powered validation deployed on DigitalOcean.',
    image: '/images/projects/chain-game.png',
    tech: ['React', 'FastAPI', 'Python', 'OpenAI API', 'DigitalOcean', 'Nginx'],
    repo: 'https://github.com/wbenchesser/chain-game',
    content: `
      <p>
        Chain Game is a web-based word game where players build the longest possible chain of English words. Each new entry must
        logically follow the previous word, challenging players to think creatively while avoiding repeats.
      </p>
      <h2>How to Play</h2>
      <ul>
        <li><strong>Start with a word:</strong> Enter a valid English word that continues the chain.</li>
        <li><strong>Examples:</strong> Up -> Town -> Hall -> Pass.</li>
        <li><strong>No repeats:</strong> Once a word is used, it stays locked for the rest of the session.</li>
        <li><strong>Challenge:</strong> Keep the streak alive by linking as many words as possible.</li>
      </ul>
      <h2>Demo</h2>
      <p>Watch a walkthrough of the gameplay in the accompanying demo video (<code>demo.mov</code>).</p>
      <h2>Technology Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> React for a responsive, real-time experience.</li>
        <li><strong>Backend:</strong> Python with FastAPI managing validation logic and chain state.</li>
        <li><strong>Hosting:</strong> DigitalOcean droplet running an Nginx reverse proxy.</li>
        <li><strong>Validation:</strong> OpenAI API evaluates word legitimacy and contextual fit.</li>
      </ul>
      <h2>Setup Guide</h2>
      <ol>
        <li>Clone the repository: <code>git clone https://github.com/wbenchesser/chain-game</code>.</li>
        <li>Backend: install dependencies with <code>pip install -r requirements.txt</code> and add <code>OPENAI_API_KEY</code> to a <code>.env</code> file.</li>
        <li>Frontend: install dependencies with <code>npm install</code> and configure the API endpoint if deploying elsewhere.</li>
        <li>Deploy: run FastAPI with Uvicorn, serve the React build through Nginx, and secure the droplet with HTTPS.</li>
      </ol>
      <h2>Acknowledgments</h2>
      <ul>
        <li>OpenAI for providing the validation API.</li>
        <li>DigitalOcean for reliable student hosting.</li>
        <li>Namecheap for the student domain program.</li>
        <li>
          Playtesters
          <a href="https://github.com/noahsmiths" target="_blank" rel="noreferrer">Noah</a>,
          <a href="https://github.com/ukpabik" target="_blank" rel="noreferrer">Kelechi</a>,
          <a href="https://www.linkedin.com/in/nicholas-roberts-b37639254/" target="_blank" rel="noreferrer">Nick</a>,
          and
          <a href="https://github.com/alexandramarum" target="_blank" rel="noreferrer">Alexandra</a>
          for feedback.
        </li>
      </ul>
    `,
  },
  {
    id: 'whisker',
    title: 'Whisker',
    summary:
      'iOS adoption app that matches users with pets using RescueGroups API, frictionless swipe-to-save, and offline persistence.',
    image: '/images/projects/whisker.png',
    tech: ['Swift', 'SwiftUI', 'SwiftData', 'RescueGroups API', 'MVVM'],
    repo: 'https://github.com/appteamcarolina/s24-apprenticeship-finalproject-pettinder',
    content: `
      <p>
        Whisker is an adoption app that helps match users with the right pet. By tapping into the RescueGroups API, it streamlines
        the search experience with tailored filters and a playful swipe interface.
      </p>
      <h2>Features</h2>
      <ul>
        <li><strong>Filter by Zip Code and Radius:</strong> Enter your desired zip code and radius in miles to surface nearby pets.</li>
        <li><strong>Swipe to Save:</strong> Swipe through animal profiles and save favorites with a quick gesture.</li>
        <li><strong>Detailed Animal Information:</strong> See each pet's name, breed, age, about-me section, contact details, and city.</li>
        <li><strong>Saved Animals Page:</strong> Review every animal you saved in a dedicated tab.</li>
        <li><strong>Settings Tab:</strong> Update your zip code and radius at any time to refine results.</li>
        <li><strong>Local Storage:</strong> Saved pets persist locally so they remain available when you return.</li>
        <li><strong>MVVM Architecture:</strong> Organized code that stays maintainable and scalable.</li>
      </ul>
      <h2>Tools &amp; Collaboration</h2>
      <p>
        Built with user stories and wireframes to guide development and managed via Git and GitHub alongside three teammates.
      </p>
      <h2>Role &amp; Impact</h2>
      <p>
        I worked with a team to deliver an adoption workflow that matches users with pets based on location, description, age, and breed.
        We integrated LocationManager to pull available pets within a selected radius and used SwiftData for local persistence.
        Whisker earned the Design Award at the Spring 2024 App Team Gala.
      </p>
    `,
  },
  {
    id: 'csxl-academic-planner',
    title: 'CSXL Academic Planner',
    summary:
      'Angular-powered planner that tracks UNC CS courses, prerequisites, and requirements, keeping students on top of their degree path.',
    image: '/images/projects/csxl-academic-planner.png',
    tech: ['Angular', 'TypeScript', 'FastAPI', 'Python', 'SQLite', 'Pytest'],
    repo: 'https://github.com/wbenchesser/csxl-academic-planner',
    content: `
      <p>
        CSXL Academic Planner replaces ad-hoc spreadsheets with a single interactive view of UNC Chapel Hill Computer Science
        coursework. Students can log completed classes, explore requirements, and immediately see what they are eligible to take next.
      </p>
      <h2>Features</h2>
      <ul>
        <li>One-click add/remove for completed courses.</li>
        <li>Dynamic availability indicators driven by prerequisite logic.</li>
        <li>Course details including descriptions, credit hours, and quick hover tooltips.</li>
        <li>Requirement tags covering BS, BA, and elective categories.</li>
        <li>Filtering and sorting by requirement type.</li>
        <li>Responsive layout with clear affordances for add/remove actions.</li>
      </ul>
      <h2>Tech Stack</h2>
      <ul>
        <li>Angular front end with planner, course card, and info widget components.</li>
        <li>FastAPI backend powering add/remove actions, prerequisites, and availability checks.</li>
        <li>SQLite database mirroring the CSXL catalog and core non-COMP prerequisites (MATH 231/232).</li>
        <li>Pytest coverage across backend services.</li>
      </ul>
      <h2>User Story</h2>
      <p>As a student, I want to:</p>
      <ul>
        <li>Track my completed courses.</li>
        <li>See which courses I can and cannot take based on prerequisites.</li>
        <li>Filter available courses by requirement type.</li>
      </ul>
      <h2>Future Work</h2>
      <ul>
        <li>Expand beyond CS to include remaining non-COMP requirements.</li>
        <li>Add semester-by-semester scheduling for a visual degree map.</li>
      </ul>
      <h2>About CSXL</h2>
      <p>
        The Computer Science Experience Labs (CSXL) is UNC’s technical accelerator and community hub that offers workshops,
        peer learning, and project-based growth opportunities.
      </p>
    `,
  },
  {
    id: 'cd-art-creator',
    title: 'CD Art Creator',
    summary:
      'Generates pixelated CD sleeve artwork from any Spotify playlist using Spotipy, Pillow, and custom design rules.',
    image: '/images/projects/cd-art-creator.PNG',
    tech: ['Python', 'Spotipy', 'Pillow', 'Spotify API'],
    repo: 'https://github.com/wbenchesser/cd-art-creator',
    content: `
      <p>
        CD Art Creator is a personal tool that transforms a Spotify playlist into a printable CD sleeve. It combines a
        pixelated gradient, playlist typography, two-column tracklist, and an album cover collage to produce a finished layout.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Fetch playlist information directly from Spotify.</li>
        <li>Create a pixelated gradient background from custom RGB inputs.</li>
        <li>Overlay the playlist title with a white text treatment outlined in black.</li>
        <li>Generate a two-column tracklist image with artist names under each song.</li>
        <li>Assemble a collage of playlist album covers for the back sleeve.</li>
        <li>Combine all layers into a final CD sleeve image ready for print.</li>
      </ul>
      <h2>Requirements</h2>
      <p>Python 3.x, Spotipy, Pillow, and Spotify API credentials.</p>
      <h2>Usage</h2>
      <ol>
        <li>Run <code>cd-art-creator.py</code>.</li>
        <li>Provide the playlist link and RGB values for the gradient.</li>
        <li>Review generated assets: <code>gradient.png</code>, <code>gradient_with_text.png</code>, <code>tracklist.png</code>, <code>collage.png</code>, and the final <code>cd_sleeve_art.png</code>.</li>
      </ol>
      <p>
        Note: the tracklist layer is flipped upside down in the finished sleeve so it prints correctly when folded behind the
        cover art.
      </p>
      <h2>Example Output</h2>
      <p>
        Example playlist:
        <a href="https://open.spotify.com/playlist/3XVb3rK5NuwVD1RxsM2XVS?si=fea328b212f1479e" target="_blank" rel="noreferrer">rivers and lakes and ponds</a><br/>
        Gradient colors: RGB(255, 255, 255) to RGB(0, 76, 153)
      </p>
      <h2>Acknowledgments</h2>
      <ul>
        <li>Spotipy for the lightweight Spotify Web API client.</li>
        <li>Pillow for image generation and manipulation.</li>
        <li>My dad for leaving stacks of blank CDs in the garage since the 90s.</li>
      </ul>
    `,
  },
];
