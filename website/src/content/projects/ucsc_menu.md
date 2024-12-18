# UCSC Menu App
- [GitHub]() (repo recently turned private to keep competative advantage with my GET mobile integration)
- [App Store](https://apps.apple.com/us/app/ucsc-menu/id1670523487?platform=iphone)
- [Publicity](https://cityonahillpress.com/2023/03/09/why-did-uc-santa-cruz-students-create-a-new-dining-hall-app/)

## Overview
The UC Santa Cruz campus is set up in a way where it is pretty common to go to different halls. With different hours, if you are trying to eat late, you might have to walk to another hall. Or, maybe you have a class on the other side of campus. Maybe you'll want to stop by another hall on your way back to the dorm. In this environment, students love to check to see which dining hall offers their favorite meal.

In my freshman year, there were two dining hall apps - one for ios, and one for android which could take up to a minute to load. Both apps did not categorize the menu. This meant you had to scroll through condiments, (why is ketchup at the top??) random bakery items and try and pin point what exactly the dining hall was serving. My friends and I found this frustrating. We wanted an app was quick to find what each dining hall was serving. So, we decided to make our own app.

For the design, we landed on a horizontal scroll bar for all the halls, with summaries listed below. We thought this design allowed for a quick overview of all the halls, with a more detailed view once you clicked on a specific hall.

We decided to use Flutter so the app could be cross platform. After a couple months of development, we finally released our first app! Students loved it. But, there were a lot of bugs and new features we wanted to add. We continue to work on the app and update the codebase to reflect our growth as software engineers.

In fact, we are currently working and testing a new feature - integrating Cbord Get Mobile services for swiping into the dining hall (see below).

## Technologies Used
- Flutter
- Firebase
- Google Cloud
    - Go -> web scraper
- Google Ads

## Key Features
- Summarizes menu data from https://nutrition.sa.ucsc.edu/
- Check hall hours
- See how busy a dining hall is using Waitz data
- Slug points calculator
- Color theme customization

## Currently working on...
- Get Mobile Integration!

I reverse engineered the GetMobile app with the help of one of Jason Antwi-Appah's repositories, inspecting the network traffic, and looking searching through the decompiled APK.

Here is the current design flow:
<div style="display: flex; gap: 10px;">
  <img src="https://github.com/christianknab/christianknab.github.io/blob/main/website/src/images/ucsc-menu-app/get1.PNG?raw=true" alt="image" width="200"/>
  <img src="https://github.com/christianknab/christianknab.github.io/blob/main/website/src/images/ucsc-menu-app/get2.PNG?raw=true" alt="image" width="200"/>
  <img src="https://github.com/christianknab/christianknab.github.io/blob/main/website/src/images/ucsc-menu-app/get3.PNG?raw=true" alt="image" width="200"/>
</div>

We will integrate this with our slug points calculator so that we can help students more precisely use their slug points (dining hall money).

## Conclusion
All the artwork was created by me with input from my friends. Below, you can see the original poster we made.

I am excited to continue integrating more features in the app, getting feedback, and helping out my fellow slugs! :)

![image](https://github.com/christianknab/christianknab.github.io/blob/main/website/src/images/ucsc-menu-app/support-us.png?raw=true)