// app.js - Vanilla JS Data Rendering Engine

document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderProjects();
    renderAwards();
    renderFooter();
});

/**
 * Render the Hero Section
 */
function renderHero() {
    const container = document.getElementById('hero-section');
    if (!container || !resumeData.hero) return;

    const { name, title, email, github, phone } = resumeData.hero;

    container.innerHTML = `
    <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">${name}</h1>
    <p class="text-xl md:text-2xl text-gray-600 font-medium mb-8">${title}</p>
    
    <div class="flex flex-wrap gap-4 text-sm font-medium">
      <a href="${github}" target="_blank" rel="noopener noreferrer" 
         class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
        <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        GitHub
      </a>
      <a href="mailto:${email}" 
         class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200">
        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        ${email}
      </a>
      <span class="inline-flex items-center text-gray-500">
        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        ${phone}
      </span>
    </div>
  `;
}

/**
 * Render the Projects Section
 */
function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container || !resumeData.projects) return;

    const html = resumeData.projects.map(project => {
        // 渲染 Tech Tags
        const tagsHtml = project.techStack
            .map(tech => `<span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">${tech}</span>`)
            .join('');

        // 渲染 Description Bullets
        const descHtml = project.description
            .map(desc => `<li class="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">${desc}</li>`)
            .join('');

        return `
      <article class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
        <header class="mb-4">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-bold text-gray-900 leading-tight">${project.title}</h3>
            ${project.githubLink && project.githubLink !== '#' ? `
              <a href="${project.githubLink}" target="_blank" class="text-gray-400 hover:text-blue-600 transition-colors">
                 <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            ` : ''}
          </div>
          <div class="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-y-1">
            <span class="font-medium text-gray-700 mr-3">${project.role}</span>
            <span class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              ${project.date}
            </span>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            ${tagsHtml}
          </div>
        </header>
        <ul class="text-sm text-gray-600 space-y-2 flex-grow">
          ${descHtml}
        </ul>
      </article>
    `;
    }).join('');

    container.innerHTML = html;
}

/**
 * Render the Awards Section
 */
function renderAwards() {
    const container = document.getElementById('awards-list');
    if (!container || !resumeData.awards) return;

    const html = resumeData.awards.map(award => `
    <article class="flex flex-col sm:flex-row gap-2 sm:gap-6 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-100 hover:shadow-md transition-all duration-300">
      <div class="flex-shrink-0 sm:w-24 text-sm font-semibold text-blue-600 pt-1">
        ${award.date}
      </div>
      <div class="flex-grow">
        <h3 class="text-base font-bold text-gray-900 mb-1">${award.name}</h3>
        <p class="text-sm text-gray-600">${award.description}</p>
      </div>
    </article>
  `).join('');

    container.innerHTML = html;
}

/**
 * Render the Footer
 */
function renderFooter() {
    const container = document.getElementById('footer-section');
    if (!container) return;

    const year = new Date().getFullYear();
    container.innerHTML = `
    <span>&copy; ${year} ${resumeData.hero?.name || 'Portfolio'}. All rights reserved.</span>
    <span class="mt-2 md:mt-0">Built with Vanilla JS & Tailwind CSS</span>
  `;
}
