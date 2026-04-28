# Automated Grocery Inventory Management System

## Overview

I have a very niche problem that I would like to solve in my home: grocery inventory (and laziness).

My family tries to be very conscious about what groceries we buy – we try not to buy food we already have. I set us up to use AnyList which contains a current inventory of each item with a recent updated date. However, the process to update this is tedious and manual and tends to get skipped, which almost makes this system useless because the inventory is inaccurate.

This project aims to streamline our at-home food inventory management by reducing manual updates and improving the accuracy of grocery lists. It addresses the challenge of maintaining a current and reliable inventory system with minimal user intervention. By integrating barcode scanning and data synchronization, the system will provide an efficient solution to a tedious household task.

## Technologies Used
* Python & Node
* Database: Supabase (PostgreSQL)
* APIs: [RapidAPI - Big Product Data (right now)](https://rapidapi.com/bigproductdata/api/big-product-data)
* Modified NPM package for AnyList integration. [My Pull Request](https://github.com/codetheweb/anylist/pull/46)

## Features
* Barcode Scanning: Uses a barcode scanner and APIs to identify products and retrieve details.
* AnyList Integration: Synchronizes scanned items with the AnyList app to update quantities and item details.
* Data Ranking: algorithm to rank and match scanned items with existing inventory.

## Layout
**RaspberryPI**
* Barcode scanner driver listens for scanned barcodes.
* Once a barcode has been scanned, if the barcode is not previously stored in the **barcode** table, I gather the name from [RapidAPI - Big Product Data](https://rapidapi.com/bigproductdata/api/big-product-data).
  * I pull all the list items from Anylist and use the Python package rapidfuzz to rank which item name from the list is closest to the name pulled from the barcode api.
  * After doing some testing, using different models was giving some interesting results. Some models were better with idential word matching and others were better when similar words were present (substrings). Using one model would not work. So, I picked two models which balenced these two strengths and prioritized names that ranked above a certain threashold in both calculations.
* Based on the "mode" the scanner is in (determined by two barcodes taped near the scanner), the **inventory** table in the database will update the quantity.

Notes about the barcode scanning:
* The driver is a little confusing. In the raspberry pi, the barcode will write to the file: `/dev/hidraw0`. The interaction acts in the same way as a keyboard. So, all that is necessary is to open this file, convert the bytes to unicode, and decode them with the [keyboard code table](https://source.android.com/docs/core/interaction/input/keyboard-devices#hid-keyboard-and-keypad-page-0x07). Thanks to the [raspberry pi forum](https://forums.raspberrypi.com/viewtopic.php?f=45&t=55100%22%22%22) for figuring this out!

**ESP32**
* Wrote a simple embedded Rust server to listen to network requests from the Pi which tell it to write information to a display and change an LED to indicate the current mode (adding or removing).
