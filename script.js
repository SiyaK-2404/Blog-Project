const languages = [
  {
    id: 1,
    title: "HTML (Web)",
    description: "HTML is the foundational language for structuring web content, providing the basic framework for web pages and applications.",
    fullDetails: `
      HTML (HyperText Markup Language) is the backbone of web development, defining the structure of web pages and applications.
      It uses a series of tags, such as headings, paragraphs, lists, and links, to format and organize content.
      Developers use HTML to add images, videos, and multimedia to web pages, ensuring dynamic and engaging content.
      HTML is easy to learn and forms the foundation of building websites, making it essential for beginners.
      It is continuously updated with new features under HTML5, which supports advanced multimedia and semantic elements.
      Along with CSS and JavaScript, HTML is one of the core technologies of the World Wide Web.
      It is supported by all modern browsers and remains crucial for creating responsive and accessible websites.
    `,
    image: "assets/images/html.png",
    color: "#f06529",
  },
  {
    id: 2,
    title: "CSS (Web)",
    description: "CSS is a style sheet language that controls the layout, presentation, and visual design of web pages, enhancing the user experience.",
    fullDetails: `
      CSS (Cascading Style Sheets) is used to enhance the visual appeal and layout of web pages.
      It controls colors, fonts, margins, padding, and positioning of elements to create aesthetically pleasing designs.
      CSS enables the creation of responsive websites, ensuring compatibility with various devices and screen sizes.
      It supports animations, transitions, and effects that bring interactivity and dynamism to websites.
      CSS preprocessors like SASS and LESS add powerful features like variables and nesting to standard CSS.
      Modern CSS frameworks, such as Bootstrap and Tailwind, simplify web design and development processes.
      CSS is indispensable for any web developer aiming to build engaging and user-friendly interfaces.
    `,
    image: "assets/images/css.png",
    color: "#2965f1",
  },
  {
    id: 3,
    title: "JavaScript (Web & Mobile)",
    description: "JavaScript is a dynamic programming language that enables web elements and mobile app development, powering both frontend and backend functionalities.",
    fullDetails: `
      JavaScript is a versatile programming language that runs in web browsers to enhance user interactions.
      It enables features such as dynamic content updates, animations, and form validations on web pages.
      JavaScript frameworks like React, Angular, and Vue.js simplify the development of complex frontend applications.
      It is also used on the backend through environments like Node.js, enabling full-stack development.
      JavaScript supports asynchronous programming with promises and async/await for better performance.
      With tools like React Native, JavaScript powers mobile app development for both iOS and Android.
      It is one of the most in-demand languages in the tech industry and is essential for modern web development.
    `,
    image: "assets/images/js.png",
    color: "#f7df1e", 
  },
  {
    id: 4,
    title: "Python (Web)",
    description: "Python is a powerful, high-level programming language favored for its simplicity and readability, used in a wide variety of fields like web development, data analysis, and artificial intelligence.",
    fullDetails: `
      Python is a high-level, versatile programming language known for its simplicity and readability.
      It is widely used in web development with frameworks like Django and Flask for creating scalable applications.
      In data science, Python dominates with libraries such as NumPy, pandas, and Matplotlib for data analysis and visualization.
      Python is also a leader in artificial intelligence and machine learning, with frameworks like TensorFlow and PyTorch.
      It is used for automation tasks, scripting, and even game development due to its flexibility.
      Python's vast ecosystem and supportive community make it a favorite among beginners and professionals alike.
      It is cross-platform and continually evolving to meet modern software development needs.
    `,
    image: "assets/images/python.png",
    color: "#3776ab", 
  },
  {
    id: 5,
    title: "Java (Web & Mobile)",
    description: "Java is a highly robust and platform-independent language, widely used for enterprise-level applications, mobile app development (Android), and backend systems.",
    fullDetails: `
      Java is a powerful, object-oriented programming language known for its cross-platform capabilities.
      It is a primary choice for enterprise-level applications due to its robustness and scalability.
      Java powers Android app development through its integration with the Android SDK.
      Popular frameworks like Spring and Hibernate make Java a dominant player in backend development.
      Its extensive libraries and APIs simplify complex programming tasks and enhance productivity.
      Java's "write once, run anywhere" principle ensures portability across different platforms.
      It is highly secure, making it suitable for financial and government applications worldwide.
    `,
    image: "assets/images/java.png",
    color: "#5382a1",
  },
  {
    id: 6,
    title: "Angular (Web)",
    description: "Angular is a powerful front-end framework that enables the creation of dynamic, single-page web applications with a rich user interface using TypeScript and HTML.",
    fullDetails: `
      Angular is a popular frontend framework maintained by Google for building single-page applications (SPAs).
      It leverages TypeScript, providing strong typing and advanced development tools for scalable applications.
      Angular's two-way data binding ensures seamless synchronization between the UI and the application logic.
      It includes features like dependency injection, routing, and modular architecture for efficient coding.
      Angular's built-in tools enable the creation of reactive forms, HTTP client integration, and animations.
      Its component-based structure promotes reusability and maintainability in large-scale applications.
      Angular is widely adopted for developing enterprise-grade web applications with robust performance.
    `,
    image: "assets/images/angular.png",
    color: "#dd0031",
  },
  {
    id: 7,
    title: "Swift (Mobile)",
    description: "Swift is an open-source, fast, and intuitive programming language developed by Apple for creating iOS and macOS applications with modern features and high performance.",
    fullDetails: `
      Swift is a powerful programming language developed by Apple for iOS, macOS, watchOS, and tvOS applications.
      It is known for its safety features, such as null safety, preventing common programming errors.
      Swift's clean and concise syntax enhances developer productivity and code readability.
      It is integrated with Xcode, Apple's official development environment for building native apps.
      Swift supports modern features like generics, closures, and optionals for advanced programming needs.
      It offers high performance, ensuring smooth and efficient applications on Apple devices.
      As an open-source language, Swift has a growing community and ecosystem of tools and libraries.
    `,
    image: "assets/images/swift.png",
    color: "#fa7343",
  },
  {
    id: 8,
    title: "Kotlin (Mobile)",
    description: "Kotlin is a modern, concise, and expressive programming language that runs on the Java Virtual Machine (JVM), designed for Android development and fully interoperable with Java.",
    fullDetails: `
      Kotlin is a modern programming language developed by JetBrains, officially supported for Android development.
      It is fully interoperable with Java, allowing seamless integration with existing Java codebases.
      Kotlin features null safety, eliminating null pointer exceptions and enhancing code reliability.
      Its concise syntax reduces boilerplate code, making development faster and more efficient.
      Kotlin supports functional programming paradigms, enhancing flexibility and code reusability.
      It is cross-platform, enabling development for Android, iOS, and even backend systems using Kotlin Multiplatform.
      As Google's preferred language for Android, Kotlin is the future of mobile app development.
    `,
    image: "assets/images/kotlin.png",
    color: "#7f52ff", 
  },
];

  

  const blogPosts = document.getElementById("blogPosts");
  if (blogPosts) {
    languages.forEach((lang) => {
      blogPosts.innerHTML += `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card" style="border-top: 5px solid ${lang.color}">
            <img src="${lang.image}" class="card-img" alt="${lang.title}" style="height: 200px;">
            <div class="card-body">
              <h5 class="card-title">${lang.title}</h5>
              <p class="card-text">${lang.description}</p>
              <a href="language-details.html?id=${lang.id}" class="btn btn-primary" style="background-color: ${lang.color}; border-color: ${lang.color};">Read More</a>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  const languageDetails = document.getElementById("languageDetails");
  if (languageDetails) {
    const urlParams = new URLSearchParams(window.location.search);
    const languageId = parseInt(urlParams.get("id"));
  
    const language = languages.find(lang => lang.id === languageId);
  
    if (language) {
      languageDetails.innerHTML = `
        <div class="col-12">
          <div class="card" style="border-top: 5px solid ${language.color}">
            <img src="${language.image}" class="card-img-top" alt="${language.title}" style="height: 300px;">
            <div class="card-body">
              <h1 class="card-title">${language.title}</h1>
              <p class="card-text">${language.fullDetails}</p>
              <a href="blog.html" class="btn btn-primary" style="background-color: ${language.color}; border-color: ${language.color};">Back to Blog</a>
            </div>
          </div>
        </div>
      `;
    } else {
      languageDetails.innerHTML = `
        <div class="col-12">
          <div class="alert alert-danger" role="alert">
            Language details not found. Please go back to the <a href="blog.html" class="alert-link">Blog</a>.
          </div>
        </div>
      `;
    }
  }
  

