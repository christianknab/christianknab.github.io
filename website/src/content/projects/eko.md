# Eko Social Media App
Twitter-like social media app created with Flutter.

### Authors
* [Eliah Reeves](https://github.com/nunibye)
* [Christian Knab](https://github.com/christianknab)
* [Eric Chuang](https://github.com/ericbreh)

## General Info
We wanted to create an app that functions similarly to X (Twitter) or Threads.

For the core app, we used Flutter in an MVVM architecture. To accomplish MVVM we utilized Provider for state management.

## Overview
Here is an example of the current pages as of February 2024.

#### Feed
Here is the Feed. You can choose a filter and scroll through their respective posts. You can comment, like, and even share a post with a link.

<img src="https://github.com/nunibye/Eko/raw/main/images/readme/homepage1.png" alt="drawing" width="200"/>

#### Groups
The Groups page is similar to group chats, where you can make posts to people you select.

<img src="https://github.com/nunibye/Eko/raw/main/images/readme/groups1.png" alt="drawing" width="200"/>

#### Compose
The page to write a post. Click the +image button to add a gif from Giphy.

<img src="https://github.com/nunibye/Eko/raw/main/images/readme/postpage1.png" alt="drawing" width="200"/>

#### Search
You can search for any user.

<img src="https://github.com/nunibye/Eko/raw/main/images/readme/searchpage1.png" alt="drawing" width="200"/>

#### Profile Page
A page for your or another user's profile. Can view their followers and following.

<img src="https://github.com/nunibye/Eko/raw/main/images/readme/profilepage1.png" alt="drawing" width="200"/>

#### Comments Page
A page to post and view comments.

<img src="https://github.com/nunibye/Eko/raw/main/images/readme/comments1.png" alt="drawing" width="200"/>

#### Login Page
A page for users to log in.

<img src="https://github.com/nunibye/Eko/raw/main/images/readme/login1.png" alt="drawing" width="200"/>

#### Share Page
A page for users to share their profile with others.

<img src="https://github.com/nunibye/Eko/raw/main/images/readme/qr1.png" alt="drawing" width="200"/>

## Technologies
**Firebase**:
- **Firestore**: JSON database stores all posts and user data in documents organized in subcollections.
- **Firebase Cloud Storage**: Stores profile pictures.
- **Firebase Auth**: The authentication service for our users.
- **Google Cloud Functions**: Using Go and JavaScript to listen and react to changes to the database.
- **Firebase Cloud Messaging**: Service to send notifications to devices, based on writes to the database.
- **Firebase Realtime Database**: Realtime database for presence tracking and single client enforcement.
- **AppCheck**: Security across Android, IOS, and Web through client verification.
- **Analytics**: Full page-aware analytics tracking.

**Algolia Search API**: Service to search user names and usernames.

**Giphy API**: Integrated to add GIFs to posts.


Page in progress...