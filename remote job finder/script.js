const jobs = [
    {
        title: "Frontend Developer",
        company: "TechSoft",
        location: "Remote - India",
        link: "https://example.com"
    },
    {
        title: "Data Analyst",
        company: "DataCorp",
        location: "Remote - Worldwide",
        link: "https://example.com"
    },
    {
        title: "Machine Learning Engineer",
        company: "AI Solutions",
        location: "Remote - US",
        link: "https://example.com"
    },
    {
        title: "Backend Developer",
        company: "CloudNet",
        location: "Remote - Europe",
        link: "https://example.com"
    }
];

function displayJobs(filteredJobs) {
    const container = document.getElementById("jobsContainer");
    container.innerHTML = "";

    if (filteredJobs.length === 0) {
        container.innerHTML = "<p style='color:white;'>No jobs found.</p>";
        return;
    }

    filteredJobs.forEach(job => {
        container.innerHTML += `
            <div class="job-card">
                <h3>${job.title}</h3>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <a href="${job.link}" target="_blank" class="apply-btn">Apply Now</a>
            </div>
        `;
    });
}

function searchJobs() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const filtered = jobs.filter(job =>
        job.title.toLowerCase().includes(keyword)
    );
    displayJobs(filtered);
}

displayJobs(jobs);