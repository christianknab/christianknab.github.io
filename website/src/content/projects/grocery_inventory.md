# Automated Grocery Inventory Management System

## Overview

I have a very niche problem that I would like to solve in my home: grocery inventory.

My family tries to be very conscious about what groceries we buy – try not to buy food we already have. I set us up to use AnyList which contains a current inventory of each item with a recent updated date. However, the process to update this is tedious and manual and tends to get skipped, which almost makes this system useless because the inventory is inaccurate.

This project aims to streamline our at-home food inventory management by reducing manual updates and improving the accuracy of grocery lists. It addresses the challenge of maintaining a current and reliable inventory system with minimal user intervention. By integrating barcode scanning and data synchronization, the system will provide an efficient solution to a tedious, yet essential household task. This project is currently a work in progress.

## Technologies Used
* Python & Node
* Database: Supabase (PostgreSQL)
* APIs: [RapidAPI - Big Product Data (right now)](https://rapidapi.com/bigproductdata/api/big-product-data)
* Modified NPM package for AnyList integration. [My Pull Request](https://github.com/codetheweb/anylist/pull/46)

## Features (in progress...)
* Barcode Scanning: Uses a barcode scanner and APIs to identify products and retrieve details.
* AnyList Integration: Synchronizes scanned items with the AnyList app to update quantities and item details.
* Data Ranking: Implements algorithms to rank and match scanned items with existing inventory for efficient updates. (rapidfuzz)

## Challenges
* Data Synchronization: Ensuring real-time updates between the local database and the AnyList application.
* Reverse Engineering: Adapting and modifying an existing NPM package to facilitate seamless integration with AnyList.
* API Integration: Selecting and utilizing APIs to provide accurate product identification and details.
* User Experience: Creating a system that eliminates manual processes and works seamlessly in a household environment.

## Layout
**RaspberryPI**
* Barcode scanner driver listens for scanned barcodes.
* Once a barcode has been scanned, if the barcode is not previously stored in the **barcode** table, I gather the name from [RapidAPI - Big Product Data](https://rapidapi.com/bigproductdata/api/big-product-data).
  * I pull all the list items from Anylist and use the Python package rapidfuzz to rank which item name from the list is closest to the name pulled from the barcode api.
  * After doing some testing, using different models was giving some interesting results. Some models were better with idential word matching and others were better when similar words were present (substrings). Using one model would not work. So, I picked two models which balenced these two strengths and prioritized names that ranked above a certain threashold in both calculations.
* Based on the "mode" the scanner is in (determined by two barcodes taped near the scanner), the **inventory** table in the database will update the quantity.

Notes about the barcode scanning:
* The driver is a little confusing. In the raspberry pi, the barcode will write to the file: `/dev/hidraw0`. Interestingly, the interaction acts in the same way as a keyboard. So, all that is necessary is to open this file, convert the bytes to unicode, and decode them with the [keyboard code table](https://source.android.com/docs/core/interaction/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07). Thanks to the [raspberry pi forum](https://forums.raspberrypi.com/viewtopic.php?f=45&t=55100%22%22%22) for figuring this out!

**Supabase**
* Initially my thought was to have a Webhook that listened to row updates to the quantity number on the **inventory** table. This would create some separation between the Pi logic and the Anylist updates. My idea was to compare the updated row with the previous row quantity value and increment or decrement the quantity in the item description is Anylist (using regex to find the exact line to update).

* Currently, I am having a problem with deploying a Supabase function. Supabase Edge Functions use Deno. I cannot use the publish NPM package because I have some modifications to the package. Deploying my local npm package will not work: https://github.com/denoland/deno/issues/18474. This means I will not be able to run this code server side.
* Given the above issue, I decided to run it on the RaspberryPI. I don't mind this option and it has turned out better than expected. I am using Python threads to launch processes and listen to their outputs, decoding their json messages in order to display the result on the display. The reason I am using threads is so that I can launch these node js processes and the python process does not need to "wait" for it to finish.

### Status
The project is mostly done. As my family tests it, I will continue to update it with more features and bug fixes. Also, I will continue to create pull requests to the AnylistAPI.
