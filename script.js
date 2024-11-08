// fetch data sequentially
fetchDataSequentially();

// fetch data in parallel
fetchDataParallel();

// fetch data sequentially, chaining functions
getUserContent();


// returns a promise that resolves after a specified number of milliseconds
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



// Simulate data fetching of user profiles
async function fetchUserProfiles() {

    return new Promise(async (resolve, reject) => {

        // delay 2sec
        await delay(2000);

        // Simulate user profile
        const userProfile = {
            name: 'TestName',
            email: 'TestEmail'
        };

        resolve(userProfile);
        reject('Fetching of user profiles is failed');
    }
    )
}



// Simulate data fetching of posts
async function fetchPosts() {
    return new Promise(async (resolve, reject) => {

        // delay 2sec
        await delay(2000);

        // Simulate post
        const post = {
            title: 'TestTitle',
            content: 'TestContent'
        };

        resolve(post);
        reject('Fetching of posts is failed');

    }
    )
};



// Simulate data fetching of comments
async function fetchComments() {
    return new Promise(async (resolve, reject) => {

        // delay 2sec
        await delay(2000);

        // Simulate comment
        const comment = {
            commentDate: 'TestDate',
            commentText: 'TestText'
        };

        // resolve(comment);
        // reject('Fetching of comments is failed');

        // simulate an error
        success = false;

        if (success) {
            resolve(comment);
        } else {
            reject("Fetching of comments is failed");
        }
    }
    )
};



// Sequential data fetching (displays a relevant message without stopping the entire application)
async function fetchDataSequentially() {

    try {
        // Fetch user profiles
        console.log('(Sequentially) Fetching user profiles sequentially...');
        const userProfiles = await fetchUserProfiles();
        console.log('(Sequentially) User Profile:', userProfiles);

        // Fetch posts
        console.log('(Sequentially) Fetching posts sequentially...');
        const posts = await fetchPosts();
        console.log('(Sequentially) Post:', posts);

        // Fetch comments
        console.log('(Sequentially) Fetching comments sequentially...');
        const comments = await fetchComments();
        console.log('(Sequentially) Comment:', comments);

    } catch (error) {
        console.error('Error in sequential fetching:', error);
    }
}



// Parallel data fetching
async function fetchDataParallel() {

    try {
        console.log('(Parallel) Fetching user profiles, posts, and comments in parallel');

        // Start all promises in parallel
        const fetchUserProfile = fetchUserProfiles();
        const fetchPost = fetchPosts();
        const fetchComment = fetchComments();

        // Wait for all promises to resolve
        const [userProfiles, posts, comments] = await Promise.all([fetchUserProfile, fetchPost, fetchComment]);

        // Log results
        console.log('(Parallel) User profile:', userProfiles);
        console.log('(Parallel) Posts:', posts);
        console.log('(Parallel) Comments:', comments);

    } catch (error) {
        console.error('Error in parallel fetching:', error);
    }
}



async function getUserContent() {

    const data = [];

    // Start fetchUserProfiles promise
    fetchUserProfiles()
        .then(userProfile => {
            console.log('(Chaining) Fetching user profiles sequentially...');
            console.log("(Chaining) User profile: ", userProfile);
            data.push(userProfile);

            // Start fetchPosts promise
            return fetchPosts();

        }).then(post => {
            console.log('(Chaining) Fetching posts sequentially...');
            console.log("(Chaining) Post: ", post);
            data.push(post);

            // Start fetchComments promise
            return fetchComments();

        }).then(comment => {
            console.log('(Chaining) Fetching comments sequentially...');
            console.log("(Chaining) Comment: ", comment);
            data.push(comment);
            console.log("(Chaining) All the data: ", data);

        }).catch((error) => {
            console.error('Error in chaining: ', error);
        });

}