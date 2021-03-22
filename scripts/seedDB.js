const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Jobs collection and inserts the Jobs below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/jobtrack"
);

const jobSeed = [
  {
    id: "9ae220e5-a889-493a-9523-0ecf39b89a03",
    title: "Lead Programmer",
    description: "<h2>Company Description</h2>\n<p>We're the studio behind the hit franchise Chivalry: Medieval Warfare. At Torn Banner we understand that long, hard hours are not conducive to being a happy, healthy person. Combine this idea with a flat studio structure and profit sharing and you've got ideals that promote a positive, low stress environment to help us create awesome games. As a small team of developers, each individual has a huge impact on the final product that we put out, so we put emphasis on being open with each other, giving/receiving critical feedback, and not letting an false sense of authority cloud our vision. The more eyes and input that we have from different disciplines and personality types, the better our releases will be.</p>\n<h2>Job Description</h2>\n<p>Torn Banner Studios is looking for a Lead Programmer to manage the programming team. The ideal candidate is passionate about providing high-level direction, supporting a team of engineers, and getting their hands dirty with day-to-day development.</p>\n<p>You are an accomplished engineer that enjoys collaborating closely with the engineering team to build a technically excellent game across multiple platforms.</p>\n<h2>Qualifications</h2>\n<p><strong>Responsibilities:</strong></p>\n<ul>\n<li>Lead and manage a programming team at technical and personnel level</li>\n<li>Provide estimate time to complete programming task/objectives and be committed to meet them</li>\n<li>Help in setting up best practices for coding and conduct regular code reviews</li>\n<li>Encourage and help guide the creation of technical design documents</li>\n<li>Setup a process to review the game on a regular interval during development cycle and identify area of improvement</li>\n<li>Collaborate directors, designers and production to ensure efficient development practices</li>\n<li>Ensure that solid coding practices, technical briefs and code reviews are maintained</li>\n<li>Maintain regular internal communications and encourage a positive and ambitious team atmosphere</li>\n<li>Demonstrate good leadership, enthusiasm and sense of commitment</li>\n<li>Take responsibility for recruitment, on-boarding, development and professional training of the programming team</li>\n<li>Propose solutions to improve the development of projects in the studio</li>\n<li>Maintain a strong understanding of multiplayer FPS games</li>\n</ul>\n<p><strong>Requirements</strong></p>\n<ul>\n<li>Proficiency in C++</li>\n<li>At least 5 years professional video game programming experience</li>\n<li>A strong and efficient communicator with excellent management skills</li>\n<li>A bachelor's degree in Computer Science, Software Engineering, or equivalent.</li>\n<li>Previous leadership/mentorship experience, or leadership interest and potential</li>\n<li>A good knowledge of programming languages and software engineering practices</li>\n<li>Experience developing AAA titles on multiple platforms</li>\n<li>Experience with Unreal Engine 4 or other large engines</li>\n<li>Comfortable wandering around unexplored game design territory, and excited to help refine ideas i-into shippable features</li>\n</ul>\n<p><strong>Bonus</strong></p>\n<ul>\n<li>Previous experience as a Lead Programmer on a shipped game</li>\n<li>Previous experience in small/medium sized development studios</li>\n</ul>\n<h2>Additional Information</h2>\n<p><em>Portfolio and résumé required for any application.</em></p>\n<p>Benefits &amp; Perks</p>\n<ul>\n<li>Profit sharing</li>\n<li>4 weeks Paid vacation</li>\n<li>A no crunching policy</li>\n<li>Relocation assistance</li>\n<li>Flexible schedule</li>\n<li>Weekly happy hour</li>\n<li>Healthcare &amp; benefits</li>\n</ul>\n",
    type: "Full Time",
    location: "Toronto",
    company: "Torn Banner Studios",
    url: "https://jobs.github.com/positions/9ae220e5-a889-493a-9523-0ecf39b89a03",
    created_at: "Fri Mar 12 09:15:59 UTC 2021",
    applied: false,
    date_applied: "",
    status: 'None',
    attachments: '',
    date: new Date(Date.now())
  },
  {
    id: "9d310813-1798-4be3-a822-7f0c504dd949",
    type: "Full Time",
    url: "https://jobs.github.com/positions/9d310813-1798-4be3-a822-7f0c504dd949",
    created_at: "Mon Feb 22 13:37:02 UTC 2021",
    company: "Torn Banner Studios",
    location: "Toronto",
    title: "Lead Programmer",
    description: "<h2>Company Description</h2>\n<p>We're the studio behind the hit franchise Chivalry: Medieval Warfare. At Torn Banner we understand that long, hard hours are not conducive to being a happy, healthy person. Combine this idea with a flat studio structure and profit sharing and you've got ideals that promote a positive, low stress environment to help us create awesome games. As a small team of developers, each individual has a huge impact on the final product that we put out, so we put emphasis on being open with each other, giving/receiving critical feedback, and not letting an false sense of authority cloud our vision. The more eyes and input that we have from different disciplines and personality types, the better our releases will be.</p>\n<h2>Job Description</h2>\n<p>Torn Banner Studios is looking for a Lead Programmer to manage the programming team. The ideal candidate is passionate about providing high-level direction, supporting a team of engineers, and getting their hands dirty with day-to-day development.</p>\n<p>You are an accomplished engineer that enjoys collaborating closely with the engineering team to build a technically excellent game across multiple platforms.</p>\n<h2>Qualifications</h2>\n<p><strong>Responsibilities:</strong></p>\n<ul>\n<li>Lead and manage a programming team at technical and personnel level</li>\n<li>Provide estimate time to complete programming task/objectives and be committed to meet them</li>\n<li>Help in setting up best practices for coding and conduct regular code reviews</li>\n<li>Encourage and help guide the creation of technical design documents</li>\n<li>Setup a process to review the game on a regular interval during development cycle and identify area of improvement</li>\n<li>Collaborate directors, designers and production to ensure efficient development practices</li>\n<li>Ensure that solid coding practices, technical briefs and code reviews are maintained</li>\n<li>Maintain regular internal communications and encourage a positive and ambitious team atmosphere</li>\n<li>Demonstrate good leadership, enthusiasm and sense of commitment</li>\n<li>Take responsibility for recruitment, on-boarding, development and professional training of the programming team</li>\n<li>Propose solutions to improve the development of projects in the studio</li>\n<li>Maintain a strong understanding of multiplayer FPS games</li>\n</ul>\n<p><strong>Requirements</strong></p>\n<ul>\n<li>Proficiency in C++</li>\n<li>At least 5 years professional video game programming experience</li>\n<li>A strong and efficient communicator with excellent management skills</li>\n<li>A bachelor's degree in Computer Science, Software Engineering, or equivalent.</li>\n<li>Previous leadership/mentorship experience, or leadership interest and potential</li>\n<li>A good knowledge of programming languages and software engineering practices</li>\n<li>Experience developing AAA titles on multiple platforms</li>\n<li>Experience with Unreal Engine 4 or other large engines</li>\n<li>Comfortable wandering around unexplored game design territory, and excited to help refine ideas into shippable features</li>\n</ul>\n<p><strong>Bonus</strong></p>\n<ul>\n<li>Previous experience as a Lead Programmer on a shipped game</li>\n<li>Previous experience in small/medium sized development studios</li>\n</ul>\n<h2>Additional Information</h2>\n<p><em>Portfolio and résumé required for any application.</em></p>\n<h2>Benefits &amp; Perks</h2>\n<ul>\n<li>Profit sharing</li>\n<li>4 weeks Paid vacation</li>\n<li>A no crunching policy</li>\n<li>Relocation assistance</li>\n<li>Flexible schedule</li>\n<li>Weekly happy hour</li>\n<li>Healthcare &amp; benefits</li>\n</ul>\n<p><a href=\"https://vonq.io/2MehNWv\">Click here for the application form!</a></p>\n",
    applied: false,
    date_applied: "",
    status: 'None',
    attachments: '',
    date: new Date(Date.now())
  },
  {
    id: "242d7658-0a4a-4d12-895f-f70a6eb88e10",
    type: "Full Time",
    url: "https://jobs.github.com/positions/242d7658-0a4a-4d12-895f-f70a6eb88e10",
    created_at: "Wed Mar 10 20:49:25 UTC 2021",
    company: "BlueVine",
    location: "Redwood City, CA",
    title: "Senior Python Developer",
    description: "<p>BlueVine is a high-growth fintech company empowering small businesses with innovative banking. By combining industry-leading technology and security with our team's expertise and care, we've helped 200,000+ businesses, funding more than $9 billion since 2013.</p>\n<p>Small businesses deserve accessible and modern financial services, and traditional banks have underserved them for too long. We're hiring problem solvers and collaborators to join our meaningful mission.</p>\n<p>Headquartered in Redwood City, CA, we've recently raised $102.5M and are backed by top investors, including Menlo Ventures, Lightspeed Ventures, Citi Ventures, SVB Financial, Nationwide Insurance, and M12.</p>\n<p>Our Redwood City engineering team is building BlueVine’s new banking product that is driving our next phase of growth. The market we’re going after is huge, and we’re just getting started.</p>\n<p>We're looking for a Senior Full Stack Engineer flexible enough to develop features from the front (beautiful UX) to the back (scalable and robust components and integrations). If you're drawn to engineering challenges and have a strong desire to make a big impact as part of a small, agile team, in an exciting space, we’d love to talk to you.</p>\n<p>WHAT YOU'LL DO:</p>\n<p>Fully own and independently drive the engineering development of complex features\nDesign and build state-of-the-art responsive banking applications\nProvide leadership and mentorship to teammates\nWork closely with, and incorporate feedback from product managers and other stakeholders in the company\nBe part of a fast-paced and highly-flexible team with the comfort of making decisions using your best judgement\nDevelop projects through their entire life cycle\nWHAT WE LOOK FOR:</p>\n<p>5+ years of combined back and front end experience building fast, reliable, web and/or mobile applications (preferably with Python backends)\nExperience with Web frameworks (e.g., Angular, React, or Vue) and/or mobile development (e.g., Native, Native Script, React)\nExperience with source control management systems, preferably Git\nExperience with AWS, GPC, or Azure\nB.S. in Computer Science or a related field\nNice to have:</p>\n<p>Experience with AWS, cloud deployments, DevOps, and web security\nBENEFITS &amp; PERKS:</p>\n<p>Receive over $1,000 annually for a wellness benefit of your choice\nMonthly WFH Stipend\nGenerous PTO and holidays\nExcellent health coverage and life insurance benefits\nGenerous, paid parental leave which covers up to 15 weeks\n401K with an immediate 3% company match\nOnce we Return to Office:</p>\n<p>Commuter benefits - CalTrain passes for SF employees and a monthly parking allowance\nWeekly catered lunches\nUnlimited snacks in fully stocked kitchens\nPet-friendly HQ</p>\n",
    applied: false,
    date_applied: "",
    status: 'None',
    attachments: '',
    date: new Date(Date.now())
  },
  {
    id: "ff66ddb7-1e7e-4e5e-9076-fefc4863ae59",
    type: "Full Time",
    url: "https://jobs.github.com/positions/ff66ddb7-1e7e-4e5e-9076-fefc4863ae59",
    created_at: "Tue Feb 23 15:37:07 UTC 2021",
    company: "Fehr & Peers",
    company_url: "https://www.fehrandpeers.com/",
    location: "Walnut Creek, CA",
    title: "Application Developer",
    description: "<p>Dedicated to improving communities, Fehr &amp; Peers focuses on helping people travel safely and easily from place to place. Our consultants rely on a dynamic and innovative Information Technology (IT) team that can quickly respond to ever-evolving client needs. To be successful, the IT team is continually learning and actively collaborating with all elements of the firm. The team functions as part of the larger Corporate office and is responsible for advancing IT practices for both business operations and our consulting practice.</p>\n<p>Our IT team is searching for a new member to help the firm create a variety of applications that allow us to perform efficient analysis and communicate our analysis effectively to diverse audiences. Applications will typically be web-based and involve database and geo-database foundations. The ideal candidate will be able to help design the development environment, create innovative applications, and a have the capability to navigate us through changing technology and client demands. The new Application Developer has the opportunity to connect with many talented individuals across the company, exercise curiosity to learn, and figure out how to make the difficult simple.\nPlease visit our site to learn more about this opportunity, Fehr &amp; Peers, and to apply.</p>\n",
    applied: false,
    date_applied: "",
    status: 'None',
    attachments: '',
    date: new Date(Date.now())
  }
];

db.Job
  .remove({})
  .then(() => db.Job.collection.insertMany(jobSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
