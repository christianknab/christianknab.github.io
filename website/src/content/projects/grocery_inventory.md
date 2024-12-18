# Automated Grocery Inventory Management System

## Overview

I have a very niche problem that I would like to solve in my home: grocery inventory.

My family tries to be very conscious about what groceries we buy – try not to buy food we already have. I set us up to use AnyList which contains a current inventory of each item with a recent updated date. However, the process to update this is tedious and manual and tends to get skipped, which almost makes this system useless because the inventory is innacurate.

This project aims to streamline our at-home food inventory management by reducing manual updates and improving the accuracy of grocery lists. It addresses the challenge of maintaining a current and reliable inventory system with minimal user intervention. By integrating barcode scanning and data synchronization, the system will provide an efficient solution to a tedious yet essential household task. This project is currently a work in progress.

## Technologies Used
* Python
* Database: Supabase (PostgreSQL)
* APIs: [RapidAPI - Big Product Data (right now)](https://rapidapi.com/bigproductdata/api/big-product-data)
* Modified NPM package for AnyList integration

## Features (in progress...)
* Barcode Scanning: Uses a barcode scanner and APIs to identify products and retrieve details.
* AnyList Integration: Synchronizes scanned items with the AnyList app to update quantities and item details.
* Data Ranking: Implements algorithms to rank and match scanned items with existing inventory for efficient updates. (rapidfuzz)

## Challenges
* Data Synchronization: Ensuring real-time updates between the local database and the AnyList application.
* Reverse Engineering: Adapting and modifying an existing NPM package to facilitate seamless integration with AnyList.
* API Integration: Selecting and utilizing APIs to provide accurate product identification and details.
* User Experience: Creating a system that eliminates manual processes and works seamlessly in a household environment.

### Status
This project is an ongoing effort. Next step is to purchase barcode scanner and raspberry pi.