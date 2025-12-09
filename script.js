// Simple theme toggle and small UI helpers
(function(){
  const root = document.documentElement;
  const toggleKey = 'prefers-theme';

  function applyTheme(theme){
    if(theme === 'dark'){
      root.style.setProperty('--bg','#1A2328');
      root.style.setProperty('--primary','#4FC6CE');
      root.style.setProperty('--glass','#26333A');
      root.style.setProperty('--accent','#DBDBDB');
      document.body.classList.add('is-dark');
    } else {
      root.style.setProperty('--bg','#FFFFFF');
      root.style.setProperty('--primary','#f30000ff');
      root.style.setProperty('--glass','#000000');
      root.style.setProperty('--accent','#FFFFFF');
      document.body.classList.remove('is-dark');
    }
  }

  function toggleTheme(){
    const cur = localStorage.getItem(toggleKey) || 'light';
    const next = cur === 'light' ? 'dark' : 'light';
    localStorage.setItem(toggleKey, next);
    applyTheme(next);

    // Update icon
    const themeIcon = document.querySelector('.navbar .theme .item ion-icon');
    if(themeIcon){
      themeIcon.setAttribute('name', next === 'dark' ? 'moon-outline' : 'sunny-outline');
    }
  }

  // initialize
  const saved = localStorage.getItem(toggleKey) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(saved);

  // attach to ion-icon inside .theme box if present
  document.addEventListener('DOMContentLoaded', ()=>{
    const themeIcon = document.querySelector('.navbar .theme .item ion-icon');
    if(themeIcon){
      themeIcon.style.cursor = 'pointer';
      themeIcon.setAttribute('name', saved === 'dark' ? 'moon-outline' : 'sunny-outline');
      themeIcon.addEventListener('click', toggleTheme);
    }
  });
})();

// Dynamic Content Loading
(function(){
  const contentContainer = document.getElementById('box-content');
  const navButtons = document.querySelectorAll('.nav button[data-section]');

  // Content for each section - EDIT TEXT BELOW
  // You can customize the content for each section below
  const sections = {
    about: `
      <!-- EDIT GREETING TEXT HERE -->
      <h2>Hello!<span class="colored">Waazzuupp!</span>👋</h2>
      <div class="divider ltr"></div>
      <!-- EDIT ABOUT PARAGRAPH HERE -->
      <p>I’m a third-year BSIT student, and I’ve been deep in the world of technology—exploring, creating, and leveling up my skills
                 one project at a time. With every semester, I’m not just learning systems and code; I’m discovering how innovation can shape 
                 communities, solve real problems, and open doors to endless opportunities. My journey so far has been a mix of challenge and growth, 
                 and I’m committed to pushing even further as I build my path in the ever-evolving field of Information Technology.
      </p>

      <!-- EDIT ACHIEVEMENTS NUMBERS AND TEXT HERE -->
      <section class="achivements">
        <div>
          <h3><ion-icon name="layers-outline"></ion-icon>4</h3>
          <p>Website Design</p>
        </div>
        <div>
          <h3><ion-icon name="briefcase-outline"></ion-icon>4</h3>
          <p>Years of Experiene</p>
        </div>
        <div>
          <h3><ion-icon name="rocket-outline"></ion-icon>6</h3>
          <p>Completed Projects</p>
        </div>
      </section>

       <h1>My <span class="colored">Certificates</span></h1>
        <div class="divider ltr"></div>

        <!-- EDIT EXPERIENCE DETAILS HERE -->
        <section class="certificates">
          <div class="certificates-gallery">
            <img src="assets/IM.png" alt="Bohol Experience">
            <img src="assets/JST.png" alt="Bohol Experience">
            <img src="assets/C++.png" alt="Bohol Experience">
            <img src="assets/WATT.png" >
         
          </div>
        </section>
      </div>

      <!-- NEW WRAPPER START -->
      <div class="skills-experience-box">
        <h2>My <span class="colored">Skills</span></h2>
        <div class="divider ltr"></div>

        <!-- EDIT SKILLS LIST HERE -->
        <section class="skills">
          <div><ion-icon name="logo-html5"></ion-icon><P>HTML</P></div>
          <div><ion-icon name="logo-css3"></ion-icon><P>CSS</P></div>
          <div><ion-icon name="logo-react"></ion-icon><P>REACT</P></div>
          <div><ion-icon name="logo-python"></ion-icon><P>PYTHON</P></div>
          <div><ion-icon name="logo-javascript"></ion-icon><P>JAVA</P></div>
          <div><P>PHP</P></div>
          <div><P>C++</P></div>
          <div><P>C#</P></div>

          <div>
            <div class="circle" style="--percent:65%">
              <h4>65 <small>%</small></h4>
            </div>
            <p>MySQL</p>
          </div>

          <div>
            <div class="circle" style="--percent:85%">
              <h4>85 <small>%</small></h4>
            </div>
            <p>MySQL</p>
          </div>

          <div>
            <div class="progress-bar">
              <p>Node JS <span>90%</span></p>
              <progress max="100" value="90"></progress>
            </div>

            <div class="progress-bar">
              <p>PostgressSQL <span>75%</span></p>
              <progress max="100" value="75"></progress>
            </div>
          </div>
        </section>


      </div>
      <!-- NEW WRAPPER END -->
    `,
    resume: `
      <h2>My <span class="colored">Resume</span></h2>
      <div class="divider ltr"></div>
      <!-- EDIT RESUME TEXT HERE -->
      <p>Soon</p>
    `,
    // EDIT PROJECTS CONTENT HERE
    projects: `
      <h2>My <span class="colored">Projects</span></h2>
      <div class="divider ltr"></div>
      <section class="projects-grid">
        <!-- EDIT PROJECT 1 DETAILS HERE -->
        <div class="project-card">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%2330c7b8' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EProject 1%3C/text%3E%3C/svg%3E" alt="Project 1">
          <h3>SOON</h3>
          <p>SOON</p>
        </div>
        <!-- EDIT PROJECT 2 DETAILS HERE -->
        <div class="project-card">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%2330c7b8' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EProject 2%3C/text%3E%3C/svg%3E" alt="Project 2">
          <h3>SOON</h3>
          <p>SOON</p>
        </div>
        <!-- EDIT PROJECT 3 DETAILS HERE -->
        <div class="project-card">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%2330c7b8' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EProject 3%3C/text%3E%3C/svg%3E" alt="Project 3">
          <h3>SOON</h3>
          <p>SOON</p>
        </div>
      </section>
    `,
    // EDIT PLACE PHOTO CONTENT HERE
    tour: `
      <h2>My <span class="colored">Place Photo Gallery</span></h2>
      <div class="divider ltr"></div>
      <section class="places-grid">
        <!-- EDIT CEBU PLACE DETAILS HERE -->
        <div class="place-card" data-place="cebu">
          <img src="assets/cebubg.png">
          <h3>Cebu</h3>
        </div>
        <div class="place-card" data-place="bohol">
          <img src="assets/boholbg.png">
          <h3>Bohol</h3>
        </div>
      </section>
    `,
    contact: `
      <h2>Contact <span class="colored">Me</span></h2>
      <div class="divider ltr"></div>
      <section class="contact-section">
        <!-- EDIT CONTACT INFO HERE -->
        <div class="contact-info">
          <div class="contact-item">
            <ion-icon name="mail-outline"></ion-icon>
            <div>
              <h4>Email</h4>
              <p>monleonjohnlawrence@gmail.com</p>
            </div>
          </div>
          <div class="contact-item">
            <ion-icon name="call-outline"></ion-icon>
            <div>
              <h4>Phone</h4>
              <p>+63 942 401 4826</p>
            </div>
          </div>
          <div class="contact-item">
            <ion-icon name="location-outline"></ion-icon>
            <div>
              <h4>Location</h4>
              <p>Philippines</p>
            </div>
          </div>
        </div>
        <form class="contact-form">
          <input type="text" placeholder="Your Name" required>
          <input type="email" placeholder="Your Email" required>
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message <ion-icon name="send-outline"></ion-icon></button>
        </form>
      </section>
    `,
    'cebu-gallery': `
      <button class="back-button" data-section="tour">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Places
      </button>
      <section class="photo-gallery-grid">
        <img src="../UP1.png">
        <img src="../UP2.png">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3ECebu Photo 3%3C/text%3E%3C/svg%3E" alt="Cebu Photo 3">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3ECebu Photo 4%3C/text%3E%3C/svg%3E" alt="Cebu Photo 4">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3ECebu Photo 5%3C/text%3E%3C/svg%3E" alt="Cebu Photo 5">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3ECebu Photo 6%3C/text%3E%3C/svg%3E" alt="Cebu Photo 6">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3ECebu Photo 7%3C/text%3E%3C/svg%3E" alt="Cebu Photo 7">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3ECebu Photo 8%3C/text%3E%3C/svg%3E" alt="Cebu Photo 8">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3ECebu Photo 9%3C/text%3E%3C/svg%3E" alt="Cebu Photo 9">
      </section>
    `,
    'bohol-gallery': `
      <button class="back-button" data-section="tour">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Places
      </button>
      <section class="photo-gallery-grid">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EBohol Photo 1%3C/text%3E%3C/svg%3E" alt="Bohol Photo 1">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EBohol Photo 2%3C/text%3E%3C/svg%3E" alt="Bohol Photo 2">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EBohol Photo 3%3C/text%3E%3C/svg%3E" alt="Bohol Photo 3">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EBohol Photo 4%3C/text%3E%3C/svg%3E" alt="Bohol Photo 4">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EBohol Photo 5%3C/text%3E%3C/svg%3E" alt="Bohol Photo 5">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EBohol Photo 6%3C/text%3E%3C/svg%3E" alt="Bohol Photo 6">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EBohol Photo 7%3C/text%3E%3C/svg%3E" alt="Bohol Photo 7">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EBohol Photo 8%3C/text%3E%3C/svg%3E" alt="Bohol Photo 8">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EBohol Photo 9%3C/text%3E%3C/svg%3E" alt="Bohol Photo 9">
      </section>
    `,
    'cebu-gallery-1': `
      <button class="back-button" data-section="cebu">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Place
      </button>
      <section class="photo-gallery-grid">
       
        <img src="assets/MATAPH1.png">
        <img src="assets/MATAPH2.png">
        <img src="assets/MATAPH3.png"assets
      </section>
    `,
    'cebu-gallery-2': `
      <button class="back-button" data-section="cebu">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Place
      </button>
      <section class="photo-gallery-grid">
        <img src="assets/DYNATA1.png" alt="Cebu Gallery 2 - 1">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 2%3C/text%3E%3C/svg%3E" alt="Photo 2">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 3%3C/text%3E%3C/svg%3E" alt="Photo 3">
      </section>
    `,
    'cebu-gallery-3': `
      <button class="back-button" data-section="cebu">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Place
      </button>
      <section class="photo-gallery-grid">
        <img src="assets/UP1.png">
        <img src="assets/UP2.png">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 2%3C/text%3E%3C/svg%3E" alt="Photo 2">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 3%3C/text%3E%3C/svg%3E" alt="Photo 3">
      </section>
    `,
    'cebu-gallery-4': `
      <button class="back-button" data-section="cebu">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Place
      </button>
      <section class="photo-gallery-grid">
        <img src="assets/RIVAN1.JPG" alt="Cebu Gallery 4 - 1">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 2%3C/text%3E%3C/svg%3E" alt="Photo 2">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 3%3C/text%3E%3C/svg%3E" alt="Photo 3">
      </section>
    `,
    'cebu-gallery-5': `
      <button class="back-button" data-section="cebu">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Place
      </button>
      <section class="photo-gallery-grid">
        <img src="../UP1.png" alt="Cebu Gallery 5 - 1">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 2%3C/text%3E%3C/svg%3E" alt="Photo 2">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 3%3C/text%3E%3C/svg%3E" alt="Photo 3">
      </section>
    `,
    'cebu-gallery-6': `
      <button class="back-button" data-section="cebu">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Place
      </button>
      <section class="photo-gallery-grid">
        <img src="../UP2.png" alt="Cebu Gallery 6 - 1">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 2%3C/text%3E%3C/svg%3E" alt="Photo 2">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 3%3C/text%3E%3C/svg%3E" alt="Photo 3">
      </section>
    `,
    'cebu-gallery-7': `
      <button class="back-button" data-section="cebu">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Place
      </button>
      <section class="photo-gallery-grid">
        <img src="../MATAPH1.png" alt="Cebu Gallery 7 - 1">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 2%3C/text%3E%3C/svg%3E" alt="Photo 2">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 3%3C/text%3E%3C/svg%3E" alt="Photo 3">
      </section>
    `,
    'cebu-gallery-8': `
      <button class="back-button" data-section="cebu">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Place
      </button>
      <section class="photo-gallery-grid">
        <img src="../MATAPH2.png" alt="Cebu Gallery 8 - 1">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 2%3C/text%3E%3C/svg%3E" alt="Photo 2">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 3%3C/text%3E%3C/svg%3E" alt="Photo 3">
      </section>
    `,
    'cebu-gallery-9': `
      <button class="back-button" data-section="cebu">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Place
      </button>
      <section class="photo-gallery-grid">
        <img src="../MATAPH3.png" alt="Cebu Gallery 9 - 1">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 2%3C/text%3E%3C/svg%3E" alt="Photo 2">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 3%3C/text%3E%3C/svg%3E" alt="Photo 3">
      </section>
    `,
    'bohol-gallery-1': `
      <button class="back-button" data-section="bohol">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Place
      </button>
      <section class="photo-gallery-grid">
        <img src="assets/TARSIER1.JPG">
        <img src="assets/TARSIER2.JPG">
        <img src="assets/TARSIER3.JPG">

        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 2%3C/text%3E%3C/svg%3E" alt="Photo 2">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 3%3C/text%3E%3C/svg%3E" alt="Photo 3">
      </section>
    `,
    'bohol-gallery-2': `
      <button class="back-button" data-section="bohol">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Place
      </button>
      <section class="photo-gallery-grid">
        <img src="../MATAPH.jpg" alt="Bohol Gallery 2 - 1">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 2%3C/text%3E%3C/svg%3E" alt="Photo 2">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 3%3C/text%3E%3C/svg%3E" alt="Photo 3">
      </section>
    `,
    'bohol-gallery-3': `
      <button class="back-button" data-section="bohol">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Place
      </button>
      <section class="photo-gallery-grid">
        <img src="../UP.png" alt="Bohol Gallery 3 - 1">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 2%3C/text%3E%3C/svg%3E" alt="Photo 2">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 3%3C/text%3E%3C/svg%3E" alt="Photo 3">
      </section>
    `,
    'cebu1-gallery': `
      <button class="back-button" data-section="cebu1">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Place
      </button>
      <section class="photo-gallery-grid">
        <img src="../MATAPH.jpg" alt="Cebu Photo Place 1 - 1">
        <img src="../MATAPH1.png" alt="Cebu Photo Place 1 - 2">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 3%3C/text%3E%3C/svg%3E" alt="Photo 3">
      </section>
    `,
    'cebu2-gallery': `
      <button class="back-button" data-section="cebu2">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Place
      </button>
      <section class="photo-gallery-grid">
        <img src="../DYNATA.jpg" alt="Cebu Photo Place 2 - 1">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 2%3C/text%3E%3C/svg%3E" alt="Photo 2">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 3%3C/text%3E%3C/svg%3E" alt="Photo 3">
      </section>
    `,
    'cebu3-gallery': `
      <button class="back-button" data-section="cebu3">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Place
      </button>
      <section class="photo-gallery-grid">
        <img src="../UP.png" alt="Cebu Photo Place 3 - 1">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 2%3C/text%3E%3C/svg%3E" alt="Photo 2">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 3%3C/text%3E%3C/svg%3E" alt="Photo 3">
      </section>
    `,
    'cebu4-gallery': `
      <button class="back-button" data-section="cebu4">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Place
      </button>
      <section class="photo-gallery-grid">
        <img src="../RIVANIT.png" alt="Cebu Photo Place 4 - 1">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 2%3C/text%3E%3C/svg%3E" alt="Photo 2">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2330c7b8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3EPhoto 3%3C/text%3E%3C/svg%3E" alt="Photo 3">
      </section>
    `
  };

  // Place detail content - EDIT PLACE DETAILS HERE
  // You can customize the place details for each location below
  const placeDetails = {
    // EDIT CEBU PLACE DETAILS HERE
    cebu: `
      <div class="place-detail">
        <button class="back-button">
          <ion-icon name="arrow-back-outline"></ion-icon> Back
        </button>
        <section class="place-gallery">
          <div class="place-photo">
            <img src="assets/MATAPH.jpg" data-gallery="cebu-gallery-1" alt="Cebu Company Photo 1">
            <p>Description here</p>
            
          </div>
          <div class="place-photo">
            <img src="assets/DYNATA.jpg" data-gallery="cebu-gallery-2" alt="Cebu Company Photo 2">
            <p>Description here</p>
            
          </div>
          <div class="place-photo">
            <img src="assets/UP.png" data-gallery="cebu-gallery-3" alt="Cebu Company Photo 3">
            <p>Description here</p>
            
          </div>
          <div class="place-photo">
            <img src="assets/RIVANIT.png" data-gallery="cebu-gallery-4" alt="Cebu Company Photo 4">
            <p>Description here</p>
            
          </div>
        </section>
      </div>
    `,
    // EDIT BOHOL PLACE DETAILS HERE
    bohol: `
      <div class="place-detail">
        <button class="back-button">
          <ion-icon name="arrow-back-outline"></ion-icon> Back
        </button>
        <section class="place-gallery">
          <div class="place-photo">
            <img src="assets/TARSIER.png" data-gallery="bohol-gallery-1" alt="Bohol Company Photo 1">
            <p>Description here</p>
          </div>
        </section>
      </div>
    `
  };



  function loadContent(section) {
    if (!sections[section]) return;

    // Fade out
    contentContainer.style.opacity = '0';
    contentContainer.style.transform = 'translateY(20px)';

    setTimeout(() => {
      contentContainer.innerHTML = sections[section];
      // Fade in
      contentContainer.style.opacity = '1';
      contentContainer.style.transform = 'translateY(0)';

      // Add event listeners for back button in galleries
      const backButton = contentContainer.querySelector('.back-button');
      if (backButton) {
        backButton.addEventListener('click', () => {
          const targetSection = backButton.getAttribute('data-section');
          if (placeDetails[targetSection]) {
            loadPlaceDetail(targetSection);
          } else {
            loadContent(targetSection);
          }
        });
      }

      // Add event listeners for gallery images to open lightbox
      const galleryImages = contentContainer.querySelectorAll('.photo-gallery-grid img');
      galleryImages.forEach(img => {
        img.addEventListener('click', () => {
          const place = backButton ? backButton.getAttribute('data-section') : null;
          openLightbox(img.src, img.alt, place);
        });
      });

      // Make place names editable on double-click
      if (section === 'tour') {
        const placeTitles = contentContainer.querySelectorAll('.place-card h3');
        placeTitles.forEach(h3 => {
          h3.addEventListener('dblclick', () => {
            h3.setAttribute('contenteditable', 'true');
            h3.focus();
          });
          h3.addEventListener('blur', () => {
            h3.setAttribute('contenteditable', 'false');
          });
          h3.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              h3.blur();
            }
          });
        });
      }

    }, 300);
  }

  function loadPlaceDetail(place) {
    if (!placeDetails[place]) return;

    // Fade out
    contentContainer.style.opacity = '0';
    contentContainer.style.transform = 'translateY(20px)';

    setTimeout(() => {
      contentContainer.innerHTML = placeDetails[place];
      // Fade in
      contentContainer.style.opacity = '1';
      contentContainer.style.transform = 'translateY(0)';

      // Add event listeners for back button
      const backButton = contentContainer.querySelector('.back-button');
      if (backButton) {
        backButton.addEventListener('click', () => {
          loadContent('tour');
        });
      }

      // Add event listeners for gallery images
      const galleryImages = contentContainer.querySelectorAll('img[data-gallery]');
      galleryImages.forEach(img => {
        img.addEventListener('click', () => {
          const gallery = img.getAttribute('data-gallery');
          loadContent(gallery);
        });
      });
    }, 300);
  }

  // Event listeners for nav buttons
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const section = button.getAttribute('data-section');
      loadContent(section);

      // Update active state
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // Event listeners for place cards (added dynamically)
  document.addEventListener('click', (e) => {
    if (e.target.closest('.place-card')) {
      const placeCard = e.target.closest('.place-card');
      const place = placeCard.getAttribute('data-place');
      loadPlaceDetail(place);
    }
  });

  // Event listeners for profile footer links
  document.addEventListener('click', (e) => {
    if (e.target.closest('a[href="#"]')) {
      const link = e.target.closest('a[href="#"]');
      const text = link.textContent.trim().toLowerCase();
      if (text.includes('resume')) {
        loadContent('resume');
        navButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('button[data-section="resume"]').classList.add('active');
      } else if (text.includes('contact')) {
        loadContent('contact');
        navButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('button[data-section="contact"]').classList.add('active');
      }
      e.preventDefault();
    }
  });

  // Initialize with about section
  document.addEventListener('DOMContentLoaded', () => {
    loadContent('about');
    document.querySelector('button[data-section="about"]').classList.add('active');
  });
})();

// Slideshow for profile header image
(function(){
  const headerImg = document.querySelector('.profile .header');
  if (!headerImg) return;

  const images = [
    'assets/P1.jpg',
    'assets/P2.jpg',
    'assets/P3.jpg',
    'assets/P4.jpg',
    'assets/P5.jpg',
    'assets/P6.jpg',
    'assets/P7.jpg',
    'assets/P8.jpg',
    'assets/P9.jpg'
   
    
  ];

  let currentIndex = 0;

  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    headerImg.src = images[currentIndex];
  }

  // Start slideshow after DOM loads
  document.addEventListener('DOMContentLoaded', () => {
    setInterval(changeImage, 3000); // Change every 3 seconds
  });
})();

// Lightbox functionality
(function(){
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const captionText = document.getElementById('caption');
  const closeBtn = document.getElementById('lightbox-close');
  const backBtn = document.getElementById('lightbox-back');

  // Open lightbox
  function openLightbox(src, alt, place) {
    lightbox.classList.add('active');
    lightboxImg.src = src;
    captionText.innerHTML = alt;

    // Set back button to go to place detail
    backBtn.onclick = () => {
      lightbox.classList.remove('active');
      loadPlaceDetail(place);
    };
  }

  // Close lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });

  // Expose openLightbox globally
  window.openLightbox = openLightbox;
})();
