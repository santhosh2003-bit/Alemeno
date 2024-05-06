import fullstack from './asserts/Photos/webdevelopment.jpg'
import machinelearning from './asserts/Photos/machinelearning.jpg'
import projectmanagement from './asserts/Photos/projectmanager.jpg'
import digitalmark from './asserts/Photos/digitalmark.jpg'
import ai from './asserts/Photos/ai.jpg'
import advancemaths from './asserts/Photos/advancemaths.avif'
import writing from './asserts/Photos/writing.avif'
import graphic from './asserts/Photos/graphic.avif'
import cybersecurity from './asserts/Photos/cybersecurity.jpg'
import foodcourse from './asserts/Photos/foodcourse.jpg'
import environment from './asserts/Photos/environment.jpg'
import worldhistory from './asserts/Photos/worldhistory.jpg'
import economics from './asserts/Photos/economics.jpg'
const courseModel = [
    {
      id: 1,
      name: "Full-Stack Web Development",
      instructor: "Emily Rivera",
      description: "This course covers everything from HTML basics to advanced backend technologies, equipping students with the skills to build robust full-stack applications.",
      enrollmentStatus: "Open",
      thumbnail: fullstack,
      duration: "16 weeks",
      schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["Basic computer skills", "Understanding of fundamental web technologies"],
      syllabus: [
        {week: 1, topic: "HTML Essentials", content: "Introduction to HTML, basic tags, and building your first webpage."},
        {week: 2, topic: "CSS for Design", content: "Cascading Style Sheets (CSS) for styling web pages."},
        {week: 3, topic: "Advanced CSS", content: "Flexbox, Grid, and responsive design."},
        {week: 4, topic: "JavaScript Basics", content: "Variables, data types, functions, and control structures."},
        {week: 5, topic: "The Document Object Model (DOM)", content: "Manipulating webpage elements dynamically."},
        {week: 6, topic: "Advanced JavaScript", content: "ES6 features, asynchronous programming, and AJAX."},
        {week: 7, topic: "Version Control with Git", content: "Introduction to Git, repositories, commits, branches, and workflows."},
        {week: 8, topic: "Node.js and Express", content: "Setting up a backend server with Express."},
        {week: 9, topic: "Databases and MongoDB", content: "NoSQL database models, using MongoDB."},
        {week: 10, topic: "React Basics", content: "Creating interactive UIs with React."},
        {week: 11, topic: "React Advanced", content: "Hooks, context, and using Redux for state management."},
        {week: 12, topic: "Authentication and Authorization", content: "Implementing secure user authentication."},
        {week: 13, topic: "REST APIs", content: "Designing and consuming RESTful services."},
        {week: 14, topic: "Testing and Deployment", content: "Unit testing, integration testing, and deploying applications."},
        {week: 15, topic: "Final Project Workshop", content: "Planning and beginning the final project."},
        {week: 16, topic: "Final Project Presentation", content: "Final project completion and presentation."}
      ],
      students: [
        {id: 201, name: "Alice Johnson", email: "alice@example.com"},
        {id: 202, name: "Bob Smith", email: "bob@example.com"}
      ]
    },
    {
      id: 2,
      name: "Data Science and Machine Learning",
      instructor: "Carlos Mendez",
      description: "Learn the skills required to become a data scientist, including statistics, machine learning, and data visualization.",
      enrollmentStatus: "Open",
      thumbnail:machinelearning,
      duration: "20 weeks",
      schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
      location: "Online",
      prerequisites: ["Introductory programming knowledge, preferably in Python", "Basic understanding of algebra"],
      syllabus: [
        {week: 1, topic: "Introduction to Data Science", content: "What is Data Science? Core concepts and applications."},
        {week: 2, topic: "Statistics for Data Science", content: "Descriptive statistics, probability theory, and inferential statistics."},
        {week: 3, topic: "Python for Data Science", content: "Python essentials, libraries like NumPy and Pandas."},
        {week: 4, topic: "Data Cleaning and Preparation", content: "Handling missing data, data transformation, data reduction."},
        {week: 5, topic: "Data Visualization with Matplotlib and Seaborn", content: "Visualizing data with Python's most popular libraries."},
        {week: 6, topic: "Exploratory Data Analysis", content: "Understanding data through exploration techniques."},
        {week: 7, topic: "Introduction to Machine Learning", content: "Machine learning theories, types of learning."},
        {week: 8, topic: "Supervised Learning Models", content: "Linear regression, logistic regression, decision trees, and SVM."},
        {week: 9, topic: "Unsupervised Learning Models", content: "Clustering, dimensionality reduction techniques."},
        {week: 10, topic: "Neural Networks and Deep Learning", content: "Fundamentals of neural networks, deep learning frameworks."},
        {week: 11, topic: "Natural Language Processing", content: "Text processing, sentiment analysis, and machine translation."},
        {week: 12, topic: "Time Series Analysis", content: "Analyzing time-series data, forecasting."},
        {week: 13, topic: "Advanced Machine Learning Techniques", content: "Ensemble methods, boosting, and bagging."},
        {week: 14, topic: "Model Evaluation and Optimization", content: "Cross-validation, hyperparameter tuning."},
        {week: 15, topic: "Big Data Technologies", content: "Introduction to Hadoop and Spark."},
        {week: 16, topic: "Data Ethics and Privacy", content: "Ethical considerations in data science."},
        {week: 17, topic: "Industry Applications of Data Science", content: "Case studies from healthcare, finance, and marketing."},
        {week: 18, topic: "Capstone Project Part 1", content: "Planning and initial development of a capstone project."},
        {week: 19, topic: "Capstone Project Part 2", content: "Continued development and refinement of the capstone project."},
        {week: 20, topic: "Capstone Project Presentation", content: "Presentation of the final project to the class and invited guests."}
      ],
      students: [
        {id: 301, name: "Chloe Green", email: "chloe@example.com"},
        {id: 302, name: "Derek Lee", email: "derek@example.com"}
      ]
    },
    {
      id: 3,
      name: "Advanced Project Management",
      instructor: "Rebecca Moran",
      description: "Master advanced project management techniques, including risk management, stakeholder analysis, and resource allocation.",
      enrollmentStatus: "In Progress",
      thumbnail:projectmanagement,
      duration: "14 weeks",
      schedule: "Wednesdays and Fridays, 7:00 PM - 9:00 PM",
      location: "Online",
      prerequisites: ["Basic project management knowledge or experience", "Understanding of project lifecycle"],
      syllabus: [
        {week: 1, topic: "Advanced Project Planning", content: "Tools and techniques for detailed project planning."},
        {week: 2, topic: "Risk Management", content: "Identifying, analyzing, and mitigating project risks."},
        {week: 3, topic: "Stakeholder Analysis and Management", content: "Strategies for effective stakeholder engagement."},
        {week: 4, topic: "Resource Allocation", content: "Optimizing resource allocation across projects."},
        {week: 5, topic: "Project Leadership", content: "Leadership skills essential for project success."},
        {week: 6, topic: "Communication Strategies", content: "Effective communication in project environments."},
        {week: 7, topic: "Project Performance and Control", content: "Monitoring project performance against KPIs."},
        {week: 8, topic: "Change Management", content: "Managing change within projects."},
        {week: 9, topic: "Project Recovery Techniques", content: "Techniques for bringing troubled projects back on track."},
        {week: 10, topic: "Agile and Scrum Methodologies", content: "Implementing Agile and Scrum in project management."},
        {week: 11, topic: "Procurement and Contract Management", content: "Managing procurements and contracts effectively."},
        {week: 12, topic: "Project Closure and Post-Mortem Analysis", content: "Closing projects and learning from them."},
        {week: 13, topic: "Project Management Tools and Software", content: "Overview of popular PM tools and software."},
        {week: 14, topic: "Capstone Project", content: "Application of learned skills in a comprehensive project."}
      ],
      students: [
        {id: 401, name: "Ethan Martinez", email: "ethan@example.com"},
        {id: 402, name: "Fiona Nguyen", email: "fiona@example.com"}
      ]
    },
    {
        id: 4,
        name: "Digital Marketing 101",
        instructor: "Linda Gale",
        description: "Explore the fundamentals of digital marketing, including SEO, social media marketing, and email marketing to enhance your online presence.",
        enrollmentStatus: "Open",
        thumbnail: digitalmark,
        duration: "10 weeks",
        schedule: "Mondays and Fridays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: ["Basic computer skills", "Interest in marketing"],
        syllabus: [
          {week: 1, topic: "Introduction to Digital Marketing", content: "Overview of digital marketing, its importance and impact."},
          {week: 2, topic: "Search Engine Optimization (SEO)", content: "Fundamentals of SEO and best practices for improving page rank."},
          {week: 3, topic: "Content Marketing", content: "Strategies for creating engaging, effective content."},
          {week: 4, topic: "Social Media Marketing", content: "Using social platforms to enhance engagement and brand presence."},
          {week: 5, topic: "Email Marketing", content: "Techniques and tools for successful email campaigns."},
          {week: 6, topic: "Pay Per Click (PPC) Advertising", content: "Understanding PPC campaigns and conversions."},
          {week: 7, topic: "Affiliate Marketing", content: "How to build and benefit from affiliate networks."},
          {week: 8, topic: "Web Analytics", content: "Using analytics to drive marketing decisions and strategy."},
          {week: 9, topic: "Digital Marketing Tools", content: "Introduction to key tools and software in digital marketing."},
          {week: 10, topic: "Creating a Digital Marketing Plan", content: "Developing a comprehensive digital marketing plan as a final project."}
        ],
        students: [
            {id: 301, name: "Chloe Green", email: "chloe@example.com"},
            {id: 302, name: "Derek Lee", email: "derek@example.com"}
          ]
      },
      {
        id: 5,
        name: "Introduction to Artificial Intelligence",
        instructor: "Mohammed Ali",
        description: "Learn the basics of AI, including algorithms that drive machine learning and the ethics of artificial intelligence.",
        enrollmentStatus: "Open",
        thumbnail: ai,
        duration: "15 weeks",
        schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
        location: "Online",
        prerequisites: ["Basic programming knowledge", "Algebra and statistics"],
        syllabus: [
          {week: 1, topic: "What is AI?", content: "Defining artificial intelligence and its scope."},
          {week: 2, topic: "History of AI", content: "A brief history and significant milestones of AI."},
          {week: 3, topic: "Problem Solving and Search Strategies", content: "Techniques for problem-solving and optimization in AI."},
          {week: 4, topic: "Machine Learning Basics", content: "Introduction to machine learning concepts and algorithms."},
          {week: 5, topic: "Neural Networks", content: "Fundamentals of neural networks and their applications."},
          {week: 6, topic: "Deep Learning", content: "Exploring deeper into the layers of neural networks."},
          {week: 7, topic: "Natural Language Processing", content: "Understanding and implementing NLP in projects."},
          {week: 8, topic: "Robotics in AI", content: "Incorporating AI into robotic systems."},
          {week: 9, topic: "AI in Healthcare", content: "Applications of AI in modern healthcare systems."},
          {week: 10, topic: "Ethics in AI", content: "Discussing the ethical implications of artificial intelligence."},
          {week: 11, topic: "AI Tools and Libraries", content: "Overview of software and libraries used in AI."},
          {week: 12, topic: "Advanced Machine Learning", content: "Advanced techniques in machine learning including unsupervised learning."},
          {week: 13, topic: "AI Project Management", content: "Managing AI projects and understanding the lifecycle."},
          {week: 14, topic: "Emerging Trends in AI", content: "Latest trends and future directions in AI."},
          {week: 15, topic: "Capstone Project", content: "Developing a personal AI project integrating learned concepts."}
        ],
        students: [
            {id: 301, name: "Chloe Green", email: "chloe@example.com"},
            {id: 302, name: "Derek Lee", email: "derek@example.com"}
          ]
      },
      {
        id: 6,
        name: "Advanced Mathematics for Engineers",
        instructor: "Sarah Connor",
        description: "This course provides an in-depth exploration of mathematical techniques used in engineering contexts, including calculus, differential equations, and statistics.",
        enrollmentStatus: "Open",
        thumbnail: advancemaths,
        duration: "18 weeks",
        schedule: "Wednesdays and Fridays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: ["Calculus I", "Basic understanding of physics"],
        syllabus: [
          {week: 1, topic: "Advanced Calculus", content: "Exploring multivariable calculus and partial derivatives."},
          {week: 2, topic: "Linear Algebra", content: "Matrix operations, vector spaces, and linear transformations."},
          {week: 3, topic: "Differential Equations", content: "Formulating and solving differential equations."},
          {week: 4, topic: "Complex Variables", content: "Introduction to complex number theory and its applications."},
          {week: 5, topic: "Fourier Series and Transforms", content: "Analyzing periodic functions and signal processing."},
          {week: 6, topic: "Probability and Statistics for Engineers", content: "Statistical methods and data analysis in engineering."},
          {week: 7, topic: "Numerical Methods", content: "Techniques for numerical simulation and problem-solving."},
          {week: 8, topic: "Optimization Techniques", content: "Linear and nonlinear optimization problems."},
          {week: 9, topic: "Graph Theory", content: "Utilizing graphs in solving engineering problems."},
          {week: 10, topic: "Game Theory", content: "Strategic decision-making and economic behavior."},
          {week: 11, topic: "Tensor Analysis", content: "Applications of tensors in continuum mechanics."},
          {week: 12, topic: "Mathematical Modeling", content: "Creating mathematical models for real-world systems."},
          {week: 13, topic: "Operations Research", content: "Analytical methods to make better decisions."},
          {week: 14, topic: "Statistics and Quality Control", content: "Statistical quality control techniques."},
          {week: 15, topic: "Actuarial Mathematics", content: "Fundamentals of actuarial science."},
          {week: 16, topic: "Cryptography", content: "Mathematical underpinnings of cryptographic systems."},
          {week: 17, topic: "Computational Geometry", content: "Algorithmic aspects of geometry."},
          {week: 18, topic: "Capstone Project", content: "Application of mathematical principles in an engineering project."}
        ],
        students: [
            {id: 301, name: "Chloe Green", email: "chloe@example.com"},
            {id: 302, name: "Derek Lee", email: "derek@example.com"}
          ]
      },
      {
        id: 7,
        name: "Creative Writing: From Novice to Novelist",
        instructor: "Tom Blake",
        description: "This course will guide you through the process of creative writing, from the basics of character development to the completion of a full-length novel.",
        enrollmentStatus: "Open",
        thumbnail: writing,
        duration: "15 weeks",
        schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
        location: "Online",
        prerequisites: ["Interest in writing", "Proficiency in English"],
        syllabus: [
          {week: 1, topic: "The Art of Storytelling", content: "Exploring the elements of narrative and effective storytelling."},
          {week: 2, topic: "Character Development", content: "Techniques for creating compelling characters."},
          {week: 3, topic: "Setting and Atmosphere", content: "Crafting vivid settings and atmospheric details."},
          {week: 4, topic: "Plot and Structure", content: "Understanding plot mechanics and narrative structures."},
          {week: 5, topic: "Point of View and Voice", content: "Choosing the narrative perspective and unique authorial voice."},
          {week: 6, topic: "Dialogue and Interaction", content: "Writing realistic and engaging dialogue."},
          {week: 7, topic: "Pacing and Tension", content: "Managing narrative pace and building suspense."},
          {week: 8, topic: "Themes and Symbols", content: "Incorporating deeper meanings and symbols into your writing."},
          {week: 9, topic: "Revision Techniques", content: "The process of revising and refining your manuscript."},
          {week: 10, topic: "Publishing and Marketing", content: "Navigating the publishing industry and marketing your work."},
          {week: 11, topic: "Genre Writing", content: "Exploring and writing within different literary genres."},
          {week: 12, topic: "Writing Workshops", content: "Participating in peer reviews and workshops."},
          {week: 13, topic: "Guest Authors and Q&A Sessions", content: "Learning from established authors."},
          {week: 14, topic: "Short Stories", content: "Writing and completing several short stories."},
          {week: 15, topic: "Final Novel Project", content: "Completing a draft of a full-length novel."}
        ],
        students: [
            {id: 301, name: "Chloe Green", email: "chloe@example.com"},
            {id: 302, name: "Derek Lee", email: "derek@example.com"}
          ]
      },
      {
        id: 8,
        name: "Fundamentals of Graphic Design",
        instructor: "Diane Frost",
        description: "Learn the key concepts of graphic design including typography, layout, branding, and more, using industry-standard software.",
        enrollmentStatus: "Open",
        thumbnail: graphic,
        duration: "12 weeks",
        schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: ["Basic computer skills", "Creative aptitude"],
        syllabus: [
          {week: 1, topic: "Introduction to Graphic Design", content: "Overview of graphic design principles and history."},
          {week: 2, topic: "Design Tools and Software", content: "Mastering Adobe Photoshop, Illustrator, and InDesign."},
          {week: 3, topic: "Typography", content: "The art and technique of arranging type."},
          {week: 4, topic: "Color Theory", content: "Understanding and using color effectively in design."},
          {week: 5, topic: "Layout and Composition", content: "Techniques for effective visual arrangement."},
          {week: 6, topic: "Branding and Identity", content: "Creating cohesive brand identities."},
          {week: 7, topic: "Print Design", content: "Designing for print media, including brochures and posters."},
          {week: 8, topic: "Digital Design", content: "Web and mobile interface design."},
          {week: 9, topic: "Packaging Design", content: "Designing attractive and functional packaging."},
          {week: 10, topic: "Advertising Design", content: "Creating impactful advertising materials."},
          {week: 11, topic: "Project Management in Design", content: "Managing design projects and client relationships."},
          {week: 12, topic: "Final Portfolio Project", content: "Compiling a professional portfolio of your work."}
        ],
        students: [
            {id: 301, name: "Chloe Green", email: "chloe@example.com"},
            {id: 302, name: "Derek Lee", email: "derek@example.com"}
          ]
      },
      {
        id: 9,
        name: "Introduction to Cybersecurity",
        instructor: "Michael Chen",
        description: "Gain a foundational understanding of cybersecurity principles, practices, and threats to protect organizations and individuals.",
        enrollmentStatus: "Open",
        thumbnail: cybersecurity,
        duration: "14 weeks",
        schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: ["Basic computer skills", "Interest in security"],
        syllabus: [
          {week: 1, topic: "Overview of Cybersecurity", content: "Understanding the landscape of cyber threats and security."},
          {week: 2, topic: "Cryptography Basics", content: "Fundamentals of cryptographic systems and their applications in security."},
          {week: 3, topic: "Network Security", content: "Techniques and tools for securing computer networks."},
          {week: 4, topic: "Application Security", content: "Ensuring applications are built securely to fend off attacks."},
          {week: 5, topic: "Operating System Security", content: "Security considerations for Windows, Linux, and mobile operating systems."},
          {week: 6, topic: "Malware and Threats", content: "Understanding malware, its types, and how it spreads."},
          {week: 7, topic: "Security Policies and Implementation", content: "Developing and enforcing security policies within an organization."},
          {week: 8, topic: "Incident Response and Management", content: "Responding to and managing security incidents."},
          {week: 9, topic: "Disaster Recovery Planning", content: "Planning and executing disaster recovery strategies."},
          {week: 10, topic: "Ethical Hacking", content: "Introduction to ethical hacking and penetration testing."},
          {week: 11, topic: "Cloud Security", content: "Security challenges and strategies for cloud environments."},
          {week: 12, topic: "Data Privacy Laws", content: "Understanding GDPR, CCPA, and other data privacy regulations."},
          {week: 13, topic: "Emerging Security Technologies", content: "Latest trends and technologies in cybersecurity."},
          {week: 14, topic: "Capstone Project", content: "Students will plan and execute a security project."}
        ],
        students: [
            {id: 301, name: "Chloe Green", email: "chloe@example.com"},
            {id: 302, name: "Derek Lee", email: "derek@example.com"}
          ]
      },
      {
        id: 10,
        name: "Nutrition and Well-being",
        instructor: "Laura Jones",
        description: "Explore the science of nutrition and its impact on human health, developing practical skills to create balanced diets.",
        enrollmentStatus: "Open",
        thumbnail: foodcourse,
        duration: "12 weeks",
        schedule: "Wednesdays and Fridays, 5:00 PM - 7:00 PM",
        location: "Online",
        prerequisites: ["None"],
        syllabus: [
          {week: 1, topic: "Fundamentals of Nutrition", content: "Basic principles of diet and nutrition."},
          {week: 2, topic: "Macronutrients", content: "Roles and sources of carbohydrates, proteins, and fats."},
          {week: 3, topic: "Micronutrients", content: "Importance of vitamins and minerals."},
          {week: 4, topic: "Digestive System", content: "How the human body processes and utilizes food."},
          {week: 5, topic: "Healthy Eating Patterns", content: "Designing balanced diets based on dietary guidelines."},
          {week: 6, topic: "Weight Management", content: "Strategies for weight loss and preventing weight gain."},
          {week: 7, topic: "Nutrition Throughout the Life Cycle", content: "Nutritional needs from infancy to old age."},
          {week: 8, topic: "Sports Nutrition", content: "Dietary strategies to enhance athletic performance."},
          {week: 9, topic: "Diet and Chronic Diseases", content: "Impact of diet on diseases like diabetes and heart disease."},
          {week: 10, topic: "Food Safety", content: "Practices to ensure food safety in handling and preparation."},
          {week: 11, topic: "Global Nutrition Challenges", content: "Addressing malnutrition and food insecurity."},
          {week: 12, topic: "Capstone Project", content: "Developing a personalized nutrition plan for a community."}
        ],
        students: [
            {id: 301, name: "Chloe Green", email: "chloe@example.com"},
            {id: 302, name: "Derek Lee", email: "derek@example.com"}
          ]
      },
      {
        id: 11,
        name: "Environmental Science and Sustainability",
        instructor: "Derek Foster",
        description: "This course explores the interactions between natural environments and human societies, focusing on sustainability and conservation strategies.",
        enrollmentStatus: "Open",
        thumbnail: environment,
        duration: "15 weeks",
        schedule: "Tuesdays and Thursdays, 4:00 PM - 6:00 PM",
        location: "Online",
        prerequisites: ["Basic biology", "Interest in environmental issues"],
        syllabus: [
          {week: 1, topic: "Introduction to Environmental Science", content: "Exploring the scope and challenges of environmental science."},
          {week: 2, topic: "Ecosystems and Biodiversity", content: "Understanding ecosystems and the importance of biodiversity."},
          {week: 3, topic: "Population Dynamics", content: "The effects of human population on the environment."},
          {week: 4, topic: "Natural Resource Management", content: "Sustainable management of natural resources."},
          {week: 5, topic: "Energy Resources", content: "Traditional and renewable energy sources."},
          {week: 6, topic: "Pollution and Waste Management", content: "Strategies to reduce pollution and manage waste."},
          {week: 7, topic: "Climate Change", content: "Causes, impacts, and responses to climate change."},
          {week: 8, topic: "Water Resources and Management", content: "Issues surrounding water scarcity and water quality."},
          {week: 9, topic: "Sustainable Agriculture", content: "Practices for sustainable food production."},
          {week: 10, topic: "Urban Planning and Green Cities", content: "Designing sustainable urban environments."},
          {week: 11, topic: "Environmental Policies and Laws", content: "Review of major environmental policies and their impacts."},
          {week: 12, topic: "Conservation Practices", content: "Efforts to conserve critical habitats and species."},
          {week: 13, topic: "Environmental Ethics", content: "Philosophical approaches to environmental stewardship."},
          {week: 14, topic: "Global Environmental Issues", content: "Analyzing global challenges like deforestation and ocean pollution."},
          {week: 15, topic: "Capstone Project", content: "Developing a proposal for a local conservation or sustainability project."}
        ],
        students: [
            {id: 301, name: "Chloe Green", email: "chloe@example.com"},
            {id: 302, name: "Derek Lee", email: "derek@example.com"}
          ]
      },
      {
        id: 12,
        name: "Contemporary World History",
        instructor: "Patricia Kim",
        description: "Explore major global events from the 20th century to today, understanding their impact on the current geopolitical landscape.",
        enrollmentStatus: "Open",
        thumbnail:worldhistory,
        duration: "16 weeks",
        schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
        location: "Online",
        prerequisites: ["Interest in history", "Ability to read and analyze texts"],
        syllabus: [
          {week: 1, topic: "The World in 1900", content: "Overview of global powers and societies at the turn of the century."},
          {week: 2, topic: "The Great Wars", content: "Causes, events, and consequences of World Wars I and II."},
          {week: 3, topic: "The Cold War", content: "The ideological battle between the US and USSR and its global effects."},
          {week: 4, topic: "Decolonization and Independence", content: "The end of colonial empires and the emergence of new nations."},
          {week: 5, topic: "The Digital Revolution", content: "The technological advances and their transformation of societies."},
          {week: 6, topic: "The Global Economy", content: "Major economic events and crises from the 20th century to now."},
          {week: 7, topic: "Contemporary Political Movements", content: "Analysis of major political movements and their impacts."},
          {week: 8, topic: "Climate Change and Environmental Issues", content: "Historical context of environmental activism and policy."},
          {week: 9, topic: "Terrorism and Global Security", content: "The evolution of terrorism and counter-terrorism measures."},
          {week: 10, topic: "The Rise of Populism", content: "Exploring the rise and impact of populism in world politics."},
          {week: 11, topic: "Health and Pandemics", content: "Historical and contemporary impacts of pandemics on societies."},
          {week: 12, topic: "The Information Age", content: "How information technology has reshaped interactions and conflicts."},
          {week: 13, topic: "Global Culture and Society", content: "The effects of globalization on cultures around the world."},
          {week: 14, topic: "Modern Conflicts and Resolutions", content: "Ongoing conflicts and peace processes in the 21st century."},
          {week: 15, topic: "The Future of International Relations", content: "Predicting future trends in global politics and economics."},
          {week: 16, topic: "Capstone Project", content: "Students will research and present on a contemporary world issue of their choice."}
        ],
        students: [
            {id: 301, name: "Chloe Green", email: "chloe@example.com"},
            {id: 302, name: "Derek Lee", email: "derek@example.com"}
          ]
      },
      {
        id: 13,
        name: "Principles of Economics",
        instructor: "George Wilson",
        description: "This course provides an introduction to micro and macroeconomic theories and how they apply to today's economic environment.",
        enrollmentStatus: "Open",
        thumbnail: economics,
        duration: "15 weeks",
        schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: ["Basic math skills", "Interest in economics"],
        syllabus: [
          {week: 1, topic: "Introduction to Economics", content: "Basic concepts and economic way of thinking."},
          {week: 2, topic: "Supply and Demand", content: "Market mechanisms and price determination."},
          {week: 3, topic: "Elasticity", content: "Price sensitivity and its effects on demand and supply."},
          {week: 4, topic: "Consumer Behavior", content: "Utility and choice under constraints."},
          {week: 5, topic: "Production and Costs", content: "Short-run and long-run production costs and outputs."},
          {week: 6, topic: "Market Structures", content: "Perfect competition, monopoly, monopolistic competition, and oligopoly."},
          {week: 7, topic: "Labor Markets", content: "Labor supply and demand, wages, and employment."},
          {week: 8, topic: "Capital Markets", content: "Role of capital markets in economic growth."},
          {week: 9, topic: "Income Distribution and Poverty", content: "Economic inequality and policies to address poverty."},
          {week: 10, topic: "Macroeconomic Indicators", content: "GDP, inflation, and unemployment rates."},
          {week: 11, topic: "Fiscal Policy", content: "Government spending, taxation, and fiscal deficits."},
          {week: 12, topic: "Monetary Policy", content: "The role of central banks in regulating the economy."},
          {week: 13, topic: "Economic Fluctuations", content: "Business cycles and economic stabilization."},
          {week: 14, topic: "International Trade and Finance", content: "Trade theories, exchange rates, and balance of payments."},
          {week: 15, topic: "Capstone Project", content: "Analyzing and presenting on an economic issue or case study."}
        ],
        students: [
            {id: 301, name: "Chloe Green", email: "chloe@example.com"},
            {id: 302, name: "Derek Lee", email: "derek@example.com"}
          ]
      }
  ]
 export default courseModel;
