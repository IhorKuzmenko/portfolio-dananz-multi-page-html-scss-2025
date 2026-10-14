# Dananz — Interior Design Website

A responsive, multi-page website for an interior design and furniture agency, developed using **HTML5, SCSS, and JavaScript**.

The project focuses on clean and modern layouts, semantic HTML, responsive design, and a consistent user experience across mobile, tablet, and desktop devices.

## Live Demo

🌐 **[View Live Website](https://ihorkuzmenko.github.io/portfolio-dananz-multi-page-html-scss-2025/)**

## GitHub Repository

💻 **[View Source Code on GitHub](https://github.com/IhorKuzmenko/portfolio-dananz-multi-page-html-scss-2025)**

## Features

- Fully responsive multi-page website
- Mobile-first approach to responsive styling
- Interactive mobile navigation menu
- Seven interconnected pages
- Flexible layouts using CSS Flexbox and Grid
- Responsive images and project galleries
- Contact form interface with HTML validation
- Interactive hover and focus effects
- Modular SCSS architecture
- Reusable design elements and consistent styling
- Cross-device layouts for mobile, tablet, and desktop

## Pages

| Page            | Description                                                              |
| --------------- | ------------------------------------------------------------------------ |
| Home            | Introduction to Dananz, services, products, and interior design projects |
| About Us        | Company overview, achievements, and services                             |
| Services        | Interior design services and company achievements                        |
| Our Teams       | Team members and company values                                          |
| Portfolio       | Interior design projects and project previews                            |
| Contact Us      | Contact form, contact details, and company locations                     |
| Minimalist Room | Detailed project overview, design process, and image gallery             |

## Technologies Used

- **HTML5** — Semantic markup and page structure
- **CSS3** — Flexbox, Grid, transitions, and responsive layouts
- **SCSS (Sass)** — Variables, nesting, modular styles, and media queries
- **JavaScript (Vanilla JS)** — Interactive mobile navigation
- **Modern Normalize** — Consistent styling across browsers
- **Git & GitHub** — Version control and source code management
- **GitHub Pages** — Website deployment

## Responsive Design

The website was adapted using a mobile-first approach to ensure comfortable viewing on different screen sizes.

| Device       | Screen Width     |
| ------------ | ---------------- |
| Small Mobile | 320–374px        |
| Mobile       | 375–767px        |
| Tablet       | 768–1439px       |
| Desktop      | 1440px and above |

Responsive improvements include:

- Flexible containers and spacing
- Adaptive typography
- Responsive navigation with a hamburger menu
- Single-column layouts for smaller screens
- Multi-column layouts for tablets and desktops
- Responsive image galleries
- Improved positioning of content and project cards

## Project Structure

```text
portfolio-dananz-multi-page-html-scss-2025/
├── images/
├── js/
│   └── menu.js
├── sass/
│   ├── components/
│   │   ├── _about.scss
│   │   ├── _contact.scss
│   │   ├── _home.scss
│   │   ├── _minimalist_room.scss
│   │   ├── _portfolio.scss
│   │   ├── _services.scss
│   │   └── _team.scss
│   ├── utils/
│   │   └── _variables.scss
│   ├── main.scss
│   └── main.css
├── index.html
├── about.html
├── services.html
├── team.html
├── portfolio.html
├── contact.html
├── minimalist_room.html
└── README.md
```

## Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/IhorKuzmenko/portfolio-dananz-multi-page-html-scss-2025.git
```

**2. Navigate to the project directory**

```bash
cd portfolio-dananz-multi-page-html-scss-2025
```

**3. Run the project**

Open `index.html` in your browser or use the **Live Server** extension in Visual Studio Code.

**4. Compile SCSS (optional)**

If you want to modify the SCSS styles, install Sass and compile the source file:

```bash
npm install -g sass
sass sass/main.scss sass/main.css --watch
```

## Project Highlights

### Responsive Layout

The original desktop-oriented website was extended with responsive layouts for smaller devices while preserving its visual design.

### Mobile Navigation

A responsive hamburger menu was implemented using Vanilla JavaScript, providing navigation between the website's pages on mobile devices.

### Interior Design Portfolio

The portfolio showcases interior design projects with images, descriptions, and project details.

### Project Gallery

The Minimalist Room page includes a responsive image gallery that adjusts its layout according to the available screen width.

### Contact Page

The Contact Us page features a responsive contact form and information about company locations.

The form currently demonstrates the frontend interface and browser validation. It is not connected to a backend or email delivery service.

## Author

**Ihor Kuzmenko**

- **GitHub Profile:** [IhorKuzmenko](https://github.com/IhorKuzmenko)
- **Project Repository:** [Dananz — GitHub](https://github.com/IhorKuzmenko/portfolio-dananz-multi-page-html-scss-2025)
- **Live Website:** [Dananz — Live Demo](https://ihorkuzmenko.github.io/portfolio-dananz-multi-page-html-scss-2025/)

## License

This project was created for educational and portfolio purposes.
