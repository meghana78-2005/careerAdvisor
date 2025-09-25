quizQuestions = [
    {
        question: "Which subjects interest you the most?",
        options: [
            { text: "Mathematics and Physics", icon: "fas fa-calculator", value: "science" },
            { text: "Accounting and Economics", icon: "fas fa-chart-line", value: "commerce" },
            { text: "Psychology and Literature", icon: "fas fa-book", value: "arts" },
            { text: "Biology and Chemistry", icon: "fas fa-flask", value: "science" }
        ]
    },
    {
        question: "What kind of activities do you enjoy?",
        options: [
            { text: "Solving complex problems", icon: "fas fa-puzzle-piece", value: "science" },
            { text: "Managing money and budgets", icon: "fas fa-money-bill-wave", value: "commerce" },
            { text: "Helping and understanding people", icon: "fas fa-hands-helping", value: "arts" },
            { text: "Research and experiments", icon: "fas fa-microscope", value: "science" }
        ]
    }
];

const coursesData = [
    { id: 1, name: "B.Sc. Computer Science", stream: "science", college: "Delhi University", location: "delhi", duration: "3 years", eligibility: "12th Science with Math", facilities: ["Hostel", "Library", "Lab"] },
    { id: 2, name: "B.Com (Hons)", stream: "commerce", college: "Sri Venkateswara College", location: "delhi", duration: "3 years", eligibility: "12th Commerce", facilities: ["Library", "Cafeteria"] }
];

const careerPaths = {
    science: [
        { 
            name: "Software Engineer", 
            path: "12th Science → B.Tech/B.Sc CS → M.Tech/MCA → Job", 
            outlook: "Excellent growth potential", 
            salary: "₹6-15 LPA starting",
            description: "Design, develop, and test software applications for various platforms."
        }
    ],
    commerce: [
        { 
            name: "Chartered Accountant", 
            path: "12th Commerce → CA Foundation → CA Intermediate → CA Final", 
            outlook: "Prestigious career", 
            salary: "₹6-12 LPA starting",
            description: "Manage financial accounts, audit, and provide tax advice to clients."
        }
    ],
    arts: [
        { 
            name: "Clinical Psychologist", 
            path: "12th Arts → B.A Psychology → M.A Psychology → M.Phil/PhD", 
            outlook: "Growing field", 
            salary: "₹4-8 LPA starting",
            description: "Diagnose and treat mental, emotional, and behavioral disorders."
        }
    ]
};

// Global variables
let currentQuestion = 0;
let userAnswers = [];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing app');
    
    // Initialize all components
    initializeNavigation();
    initializeModals();
    initializeQuiz();
    initializeColleges();
    initializeTimeline();
    
    // Show home section by default
    showSection('home');
});

// Navigation Functions
function initializeNavigation() {
    console.log('Initializing navigation...');
    
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!hamburger) {
        console.error('Hamburger menu not found!');
        return;
    }
    
    // Mobile Menu Toggle
    hamburger.addEventListener('click', function() {
        console.log('Hamburger clicked');
        hamburger.classList.toggle('active');
        if (mobileMenu) {
            mobileMenu.classList.toggle('active');
        }
    });
    
    // Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('href').substring(1);
            console.log('Navigation clicked: ' + targetSection);
            
            showSection(targetSection);
            
            // Update active nav link
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu
            if (hamburger && mobileMenu) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });
    
    // Mobile menu buttons
    const mobileLoginBtn = document.getElementById('mobile-login-btn');
    const mobileSignupBtn = document.getElementById('mobile-signup-btn');
    
    if (mobileLoginBtn) {
        mobileLoginBtn.addEventListener('click', function() {
            showLoginModal();
            if (hamburger && mobileMenu) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }
    
    if (mobileSignupBtn) {
        mobileSignupBtn.addEventListener('click', function() {
            showSignupModal();
            if (hamburger && mobileMenu) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }
    
    console.log('Navigation initialized successfully');
}

// Modal Functions
function initializeModals() {
    console.log('Initializing modals...');
    
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const closeModals = document.querySelectorAll('.close-modal');
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToLogin = document.getElementById('switch-to-login');
    
    // Login button
    if (loginBtn) {
        loginBtn.addEventListener('click', showLoginModal);
    }
    
    // Signup button
    if (signupBtn) {
        signupBtn.addEventListener('click', showSignupModal);
    }
    
    // Close modals
    closeModals.forEach(btn => {
        btn.addEventListener('click', function() {
            if (loginModal) loginModal.style.display = 'none';
            if (signupModal) signupModal.style.display = 'none';
        });
    });
    
    // Switch between login and signup
    if (switchToSignup) {
        switchToSignup.addEventListener('click', function(e) {
            e.preventDefault();
            if (loginModal) loginModal.style.display = 'none';
            if (signupModal) signupModal.style.display = 'flex';
        });
    }
    
    if (switchToLogin) {
        switchToLogin.addEventListener('click', function(e) {
            e.preventDefault();
            if (signupModal) signupModal.style.display = 'none';
            if (loginModal) loginModal.style.display = 'flex';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (loginModal && e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (signupModal && e.target === signupModal) {
            signupModal.style.display = 'none';
        }
    });
    
    // Form Submissions
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login functionality would be implemented here!');
            if (loginModal) loginModal.style.display = 'none';
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Signup functionality would be implemented here!');
            if (signupModal) signupModal.style.display = 'none';
        });
    }
    
    console.log('Modals initialized successfully');
}

function showLoginModal() {
    const loginModal = document.getElementById('login-modal');
    if (loginModal) {
        loginModal.style.display = 'flex';
    }
}

function showSignupModal() {
    const signupModal = document.getElementById('signup-modal');
    if (signupModal) {
        signupModal.style.display = 'flex';
    }
}

// Show Section Function
function showSection(sectionId) {
    console.log('Showing section: ' + sectionId);
    
    const sections = document.querySelectorAll('.section');
    const targetSection = document.getElementById(sectionId);
    
    if (!targetSection) {
        console.error('Section not found: ' + sectionId);
        return;
    }
    
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    targetSection.classList.add('active');
    
    // Initialize section-specific content
    if (sectionId === 'assessment') {
        initializeQuiz();
    } else if (sectionId === 'colleges') {
        initializeColleges();
    } else if (sectionId === 'timeline') {
        initializeTimeline();
    }
}

// Quiz Functions
function initializeQuiz() {
    console.log('Initializing quiz...');
    currentQuestion = 0;
    userAnswers = [];
    displayQuestion(currentQuestion);
}

function displayQuestion(index) {
    const quizContent = document.getElementById('quiz-content');
    const progressBar = document.getElementById('progress-bar');
    
    if (!quizContent) {
        console.error('Quiz content element not found!');
        return;
    }
    
    if (index < quizQuestions.length) {
        const question = quizQuestions[index];
        const progress = ((index + 1) / quizQuestions.length) * 100;
        
        if (progressBar) {
            progressBar.style.width = ${progress}%;
        }
        
        quizContent.innerHTML = `
            <div class="quiz-question">
                <h3>${question.question}</h3>
                <div class="quiz-options">
                    ${question.options.map((option, i) => `
                        <div class="option" data-index="${i}" data-value="${option.value}">
                            <i class="${option.icon}"></i>
                            <span>${option.text}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="quiz-nav">
                <button class="btn btn-outline" ${index === 0 ? 'disabled' : ''} id="prev-btn">Previous</button>
                <span>Question ${index + 1} of ${quizQuestions.length}</span>
                <button class="btn btn-primary" ${index === quizQuestions.length - 1 ? 'style="display:none"' : ''} id="next-btn">Next</button>
                <button class="btn btn-primary" ${index < quizQuestions.length - 1 ? 'style="display:none"' : ''} id="results-btn">See Results</button>
            </div>
        `;
        
        // Add event listeners to options
        const options = quizContent.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', function() {
                selectOption(parseInt(this.getAttribute('data-index')), this.getAttribute('data-value'));
            });
        });
        
        // Add event listeners to navigation buttons
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const resultsBtn = document.getElementById('results-btn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', previousQuestion);
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', nextQuestion);
        }
        
        if (resultsBtn) {
            resultsBtn.addEventListener('click', showResults);
        }
    }
}

function selectOption(optionIndex, value) {
    // Remove selected class from all options
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    event.target.closest('.option').classList.add('selected');
    
    // Store answer
    userAnswers[currentQuestion] = value;
}

function nextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        displayQuestion(currentQuestion);
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion(currentQuestion);
    }
}

function showResults() {
    // Calculate results based on user answers
    const score = {
        science: userAnswers.filter(answer => answer === 'science').length,
        commerce: userAnswers.filter(answer => answer === 'commerce').length,
        arts: userAnswers.filter(answer => answer === 'arts').length
    };
    
    let recommendedStream = 'science';
    if (score.commerce > score.science && score.commerce > score.arts) {
        recommendedStream = 'commerce';
    } else if (score.arts > score.science && score.arts > score.commerce) {
        recommendedStream = 'arts';
    }
    
    // Show results section
    showSection('results');
    
    // Display results
    const resultsContainer = document.getElementById('results-container');
    if (resultsContainer) {
        resultsContainer.innerHTML = `
            <div class="result-card">
                <div class="result-header">
                    <i class="fas fa-chart-line"></i>
                    <div>
                        <h3>Your Career Assessment Results</h3>
                        <p>Based on your interests and strengths, we recommend exploring the following paths:</p>
                    </div>
                </div>
                
                <div class="stream-tags">
                    <span class="stream-tag ${recommendedStream}">${recommendedStream.toUpperCase()}</span>
                </div>
                
                <p>Your assessment shows a strong inclination towards ${recommendedStream} fields. This stream aligns with your interests and has excellent career prospects.</p>
                
                <div class="career-path">
                    <h4>Recommended Career Paths:</h4>
                    ${careerPaths[recommendedStream].map(career => `
                        <div class="path-step">
                            <i class="fas fa-arrow-right"></i>
                            <div>
                                <h5>${career.name}</h5>
                                <p><strong>Path:</strong> ${career.path}</p>
                                <p><strong>Outlook:</strong> ${career.outlook} | <strong>Starting Salary:</strong> ${career.salary}</p>
                                <p>${career.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="result-card">
                <div class="result-header">
                    <i class="fas fa-graduation-cap"></i>
                    <div>
                        <h3>Recommended Courses</h3>
                        <p>Based on your stream preference, here are some courses you might consider:</p>
                    </div>
                </div>
                
                <div class="colleges-grid">
                    ${coursesData.filter(course => course.stream === recommendedStream).map(course => `
                        <div class="college-card">
                            <div class="college-image">
                                <i class="fas fa-university"></i>
                            </div>
                            <div class="college-content">
                                <h3>${course.name}</h3>
                                <p>${course.college}</p>
                                <div class="college-meta">
                                    <span><i class="fas fa-clock"></i> ${course.duration}</span>
                                    <span><i class="fas fa-map-marker-alt"></i> ${course.location}</span>
                                </div>
                                <p><strong>Eligibility:</strong> ${course.eligibility}</p>
                                <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;">View Details</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

// Initialize Colleges Page
function initializeColleges() {
    console.log('Initializing colleges...');
    
    const collegesContainer = document.getElementById('colleges-container');
    const streamFilter = document.getElementById('stream-filter');
    
    if (!collegesContainer) {
        console.error('Colleges container not found!');
        return;
    }
    
    function displayColleges(stream = 'all') {
        const filteredCourses = stream === 'all' 
            ? coursesData 
            : coursesData.filter(course => course.stream === stream);
        
        collegesContainer.innerHTML = filteredCourses.map(course => `
            <div class="college-card">
                <div class="college-image">
                    <i class="fas fa-university"></i>
                </div>
                <div class="college-content">
                    <h3>${course.name}</h3>
                    <p>${course.college}</p>
                    <div class="college-meta">
                        <span><i class="fas fa-stream"></i> ${course.stream.toUpperCase()}</span>
                        <span><i class="fas fa-clock"></i> ${course.duration}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${course.location}</span>
                    </div>
                    <p><strong>Eligibility:</strong> ${course.eligibility}</p>
                    <p><strong>Facilities:</strong> ${course.facilities.join(', ')}</p>
                    <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;">View Details & Apply</button>
                </div>
            </div>
        `).join('');
    }
    
    if (streamFilter) {
        streamFilter.addEventListener('change', function(e) {
            displayColleges(e.target.value);
        });
    }
    
    displayColleges(); // Initial display
    console.log('Colleges initialized successfully');
}

// Initialize Timeline
function initializeTimeline() {
    console.log('Initializing timeline...');
    
    const timelineContainer = document.getElementById('timeline-container');
    
    if (!timelineContainer) {
        console.error('Timeline container not found!');
        return;
    }
    
    const timelineEvents = [
        { date: "May 2023", title: "Class 12 Board Exams End", description: "Board examinations for Class 12 conclude across most education boards." },
        { date: "June 2023", title: "Board Results Declaration", description: "Class 12 results are announced by various education boards." },
        { date: "July 2023", title: "University Entrance Exams", description: "Major university entrance exams like JEE, NEET, CUET are conducted." }
    ];
    
    timelineContainer.innerHTML = timelineEvents.map((event, index) => `
        <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}">
            <div class="timeline-content">
                <div class="timeline-date">${event.date}</div>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <button class="btn btn-outline" style="margin-top: 0.5rem;">Set Reminder</button>
            </div>
        </div>
    `).join('');
    
    console.log('Timeline initialized successfully');
}

// Add a simple function to handle the Start Assessment button on the home page
function setupHomePage() {
    const startAssessmentBtn = document.querySelector('.cta-button');
    if (startAssessmentBtn) {
        startAssessmentBtn.addEventListener('click', function() {
            showSection('assessment');
            
            // Update navigation
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(nav => nav.classList.remove('active'));
            const assessmentLink = document.querySelector('a[href="#assessment"]');
            if (assessmentLink) {
                assessmentLink.classList.add('active');
            }
        });
    }
}

// Initialize home page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupHomePage();
});