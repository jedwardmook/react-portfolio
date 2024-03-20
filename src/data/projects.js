import scc_main from '../images/spot_check_chicago/SCC-main.jpg'
import scc_home from '../images/spot_check_chicago/SCC-home.jpg'
import scc_spot_page from '../images/spot_check_chicago/SCC-spot_page.jpg'
import scc_reviews from '../images/spot_check_chicago/SCC-reviews.jpg'
import scc_addspot from '../images/spot_check_chicago/SCC-addspot.jpg'
import hbnb_main from '../images/heir_bnb/HBNB-main.jpg'
import hbnb_home from '../images/heir_bnb/HBNB-home.jpg'
import hbnb_location from '../images/heir_bnb/HBNB-location.jpg'
import hbnb_profile from '../images/heir_bnb/HBNB-profile.jpg'
import hbnb_edit_profile from '../images/heir_bnb/HBNB-editprofile.jpg'
import flw_main from '../images/4lw_notes/4LW-main.jpg'
import flw_home from '../images/4lw_notes/4LW-home.jpg'
import flw_note from '../images/4lw_notes/4LW-note.jpg'
import flw_employee from '../images/4lw_notes/4LW-employee.jpg'
import sc_main from '../images/spot_check_v1/SC-main.jpg'
import sc_home from '../images/spot_check_v1/SC-home.jpg'
import sc_spot from '../images/spot_check_v1/SC-spot.jpg'
import sc_add from '../images/spot_check_v1/SC-add.jpg'
import src_home from '../images/src/SRC-home.jpg'
import src_add from '../images/src/SRC-add.jpg'
import src_search from '../images/src/SRC-search.jpg'


const projects = [
  {
    projectName: "Spot Check: Chicago",
    links: [
      {
        link: "https://spotcheckchicago.onrender.com/",
        type: "Website"
      },
      {
        link: "https://www.youtube.com/watch?v=QobCGprINfw&t=10s",
        type: "Walkthrough"
      },
      {
        link: "https://github.com/jedwardmook/spot-check-app-clone",
        type: "Repo"
      }
    ],
    description: "Application that utilizes google-maps-api to allow users to add, favorite, and review skatespots usings their real lattitude and longitude.",
    technologiesUsed: [" Javascript", " React", " Ruby on Rails", " Sass", " Google Maps Api"],
    images: [
      {
        link: scc_main,
        description: "Collage of components of Spot Check - Chicago"
      },
      {
        link: scc_home,
        description: "Home page featuring spot markers and spot info div"
      },
      {
        link: scc_spot_page,
        description: "Spot page featuring info and images of spot"
      },
      {
        link: scc_reviews,
        description: "Close up of review section of spot page"
      },
      {
        link: scc_addspot,
        description: "UI of the add spot form"
      }
    ]
  },
  {
    projectName: "HeirBnb",
    links: [
      {
        link: "https://www.youtube.com/watch?v=TOzLQ-lzTz8",
        type: "Walkthrough"
      },
      {
        link: "https://github.com/jedwardmook/phase-4-project",
        type: "Repo"
      }
    ],
    description: "HeirBnb is a full-stack project spoofing AirBnb through the lens of A Song of Ice and Fire by George RR Martin.",
    technologiesUsed: [" Javascript", " React", " Ruby on Rails"],
    images: [
      {
        link: hbnb_main,
        description: "Collage of components for HeirBnb"
      },
      {
        link: hbnb_home,
        description: "Home pages featuring for cards for castle locations"
      },
      {
        link: hbnb_location,
        description: "A location's page featuring its amenities and reviews"
      },
      {
        link: hbnb_profile,
        description: "A user's profile page"
      },
      {
        link: hbnb_edit_profile,
        description: "UI for editing a user's profile page"
      }
    ]
  },
  {
    projectName: "4LW Notes",
    links: [
      {
        link: "https://www.youtube.com/watch?v=--u0uSF--3I&t=25s",
        type: "Walkthrough"
      },
      {
        link: "https://github.com/jedwardmook/phase-3-sinatra-react-project-frontend",
        type: "Repo"
      }
    ],
    description: "An application to keep daily notes at 4LW coffee shop. Employees can create and log notes of day to day activities at a coffee shop.",
    technologiesUsed: [" Javascript", " React", " Sinatra"],
    images: [
      {
        link: flw_main,
        description: "Collage of components for 4LW Notes"
      },
      {
        link: flw_home,
        description: "Home page showing most recent notes and filtering abilities"
      },
      {
        link: flw_note,
        description: "Form for adding a note to the database"
      },
      {
        link: flw_employee,
        description: "Form for adding an employee to the database"
      },
    ]
  },
  {
    projectName: "Spot Check",
    links: [
      {
        link: "https://www.youtube.com/watch?v=hpDgLU6HpMg&t=1s",
        type: "Walkthrough"
      },
      {
        link: "https://github.com/jedwardmook/phase-2-project",
        type: "Repo"
      }
    ],
    description: "Application that utilizes google-maps-api to allow users to add, favorite, and review skatespots usings their real lattitude and longitude.",
    technologiesUsed: [" Javascript", " React"],
    images: [
      {
        link: sc_main,
        description: "Home page and logo"
      },
      {
        link: sc_home,
        description: "Home page showing spots and filter options"
      },
      {
        link: sc_spot,
        description: "Detailed view of a spot's page"
      },
      {
        link: sc_add,
        description: "Add form for adding a spot"
      },
    ]
  },
  {
    projectName: "Simple Record Collector",
    links: [
      {
        link: "https://www.youtube.com/watch?v=v9wsrlNCvCo&t=1s",
        type: "Walkthrough"
      },
      {
        link: "https://github.com/jedwardmook/phase-1-project",
        type: "Repo"
      }
    ],
    description: "Simple Record Collector allows users to add albums to a virtual collection using the album's name, cover image, artist, genre, and year released. Users can search through their collection using the same attributes.",
    technologiesUsed: [" Vanilla Javascript", " HTML", " CSS"],
    images: [
      {
        link: src_home,
        description: "Home page showing record collection"
      },
      {
        link: src_add,
        description: "Home page featuring the add album component"
      },
      {
        link: src_search,
        description: "Home page featuring the search component"
      },
    ]
  }
]

export default projects;