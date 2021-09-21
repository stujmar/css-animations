const postPartial = document.createElement('template');

postPartial.innerHTML = `
<div class="body-col-center-section" x-data="{ count: 0, likes: 0, comments: 0, shares: 0 }">
    <div class="body-col-center-section-name">
        <div class="body-col-center-section-name-left">
            <div class="body-col-center-section-name-left-avatar"></div>
            <div>
                <div class="body-col-center-section-name-left-name">Name</div>
                <div class="body-col-center-section-name-left-time">Time</div>
            </div>
        </div>
        <div class="body-col-center-section-name-mm">
            <svg xmlns="http://www.w3.org/2000/svg" class="meat-ball" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
        </div>
    </div>
    <div class="body-col-center-section-content"></div>
    <div>Description</div>
    <div class="body-col-center-section-metrics">
        <div class="body-col-center-section-metrics-left">
            <div x-show="likes > 0" class="body-col-center-section-metrics-left-icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
            </div>
            <span  x-show="likes > 1" x-text="likes"></span>
        </div>
        <div class="body-col-center-section-metrics-right">
            <div x-show="comments >= 1" >
                <span x-text="comments"></span>
                <span x-show="comments == 1">Comment</span>
                <span x-show="comments > 1">Comments</span>
            </div>
            <div x-show="shares >= 1" >
                <span x-text="shares"></span>
                <span x-show="shares == 1">Share</span>
                <span x-show="shares > 1">Shares</span>
            </div>
        </div>

    </div>
    <div class="body-col-center-section-buttons">
        <button x-on:click="likes++">  
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            Like
        </button>
        <button x-on:click="comments++">  
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
            Comment
        </button>
        <button x-on:click="shares++">  
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
            Share
        </button>
    </div>
    <div class="body-col-center-section-comments">Comments</div>
</div>
`;

document.body.insertBefore(postPartial.content, document.body.firstChild);