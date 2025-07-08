function toggleContent(button) {
    let content = button.previousElementSibling;
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.textContent = "Read Less";
    } else {
        content.style.display = "none";
        button.textContent = "Read More";
    }
}

function loadMorePosts() {
    let blogContainer = document.getElementById("blogContainer");

    let newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.innerHTML = `
        <h2>New Blog Post</h2>
        <p>This is a dynamically added blog post.</p>
        <button class="read-more" onclick="toggleContent(this)">Read More</button>
    `;

    blogContainer.appendChild(newPost);
}