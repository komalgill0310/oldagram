const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const divContainerElement = document.querySelector(".container")

displayData(posts)
    

function displayData(posts){
    divContainerElement.innerHTML += posts.map((post, index) => `
            <main>
                <section>
                    <div class="main-section">
                        <img src=${post.avatar} alt="avatar-vangogh" class="avatar-img">
                        <div class="about">
                            <h3>${post.name}</h3>
                            <p>${post.location}</p>
                        </div>
                        <img src=${post.post} alt="post-vangogh" class="post-img" 
                        ondblclick="increaseLikes(${index})">
                    </div>
                </section> 
            </main>
            
            <section class="body">
                <img src="images/icon-heart.png" alt="icon-heart" class="icon-img icon-heart" onclick="increaseLikes(${index})">
                <img src="images/icon-comment.png" alt="icon-comment" class="icon-img">
                <img src="images/icon-dm.png" alt="icon-dm" class="icon-img">
                <p class="like-count bold-text">${post.likes} likes</p>
                <p class="username-caption"><span class="bold-text">${post.username}</span> ${post.comment}</p>
            </section>`).join("")
}

function increaseLikes(index) {    
    const likeCountParaElement = document.getElementsByClassName("like-count")
    return posts.filter(post => post.username === posts[index].username ? 
                    likeCountParaElement[index].innerHTML = `${posts[index].likes++} likes` : "")
}