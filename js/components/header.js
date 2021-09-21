const headerPartial = document.createElement('template');

headerPartial.innerHTML = `

<div class="alpine-header">
    <div class="alpine-header-search">
        <a class="back" href="./index.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </a>
        <button class="mobile-search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
        <div class="search">
            <div class="search-icon">
                <svg class="search-icon-svg" xmlns="http://www.w3.org/2000/svg" width="25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input type="text" placeholder="Search Alpinebook" class="search-input">
        </div>
    </div>
    <div class="alpine-header-links">
        <div class="alpine-header-links-link active-tab">
            <div class="alpine-header-links-link-button">
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </div>
        </div>
        <div class="alpine-header-links-link">
            <div class="alpine-header-links-link-button">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
        <div class="alpine-header-links-link">
            <div class="alpine-header-links-link-button">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </div>
        </div>
        <div class="alpine-header-links-link">
            <div class="alpine-header-links-link-button">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </div>
        </div>
    </div>
    <div class="alpine-header-profile">
        <div class="alpine-header-profile-account">
            <div class="alpine-header-profile-account-avatar"></div>
            <div class="alpine-header-profile-account-name">Stuart Marsh</div>
        </div>
        <div class="alpine-header-profile-item">
            <svg class="bento-box" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="7.5" fill="#fff"/>
                <circle cx="7.5" cy="32.5" r="7.5" fill="#fff"/>
                <circle cx="7.5" cy="57.5" r="7.5" fill="#fff"/>
                <circle cx="32.5" cy="57.5" r="7.5" fill="#fff"/>
                <circle cx="57.5" cy="57.5" r="7.5" fill="#fff"/>
                <circle cx="32.5" cy="7.5" r="7.5" fill="#fff"/>
                <circle cx="32.5" cy="32.5" r="7.5" fill="#fff"/>
                <circle cx="57.5" cy="7.5" r="7.5" fill="#fff"/>
                <circle cx="57.5" cy="32.5" r="7.5" fill="#fff"/>
            </svg>
                
        </div>
        <div class="alpine-header-profile-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        </div>
        <div class="alpine-header-profile-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
        </div>
        <div class="alpine-header-profile-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    </div>
</div>

`;

document.body.insertBefore(headerPartial.content, document.body.firstChild);