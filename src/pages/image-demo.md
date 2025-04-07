---
title: "Image Size Control in Markdown"
layout: ../layouts/main.astro
---

# Controlling Image Sizes in Markdown

In Astro markdown files, you can control the size of your images using the custom CSS classes.

## Default Image Size

Images without any class will have a default max-height of 500px:

![Default size image](../assets/images/downscope.jpg)

## Small Image

Use the `img-sm` class for small images (300px max):

<img src="../assets/images/downscope.jpg" alt="Small image" class="img-sm">

## Medium Image

Use the `img-md` class for medium images (500px max):

<img src="../assets/images/downscope.jpg" alt="Medium image" class="img-md">

## Large Image

Use the `img-lg` class for large images (800px max):

<img src="../assets/images/downscope.jpg" alt="Large image" class="img-lg">

## Full Width Image

Use the `img-full` class for full width images:

<img src="../assets/images/downscope.jpg" alt="Full width image" class="img-full">

## Image Alignment

You can also control image alignment:

<img src="../assets/images/downscope.jpg" alt="Left aligned image" class="img-sm img-left">

<div style="clear: both; margin-bottom: 2rem;"></div>

<img src="../assets/images/downscope.jpg" alt="Center aligned image" class="img-sm img-center">

<div style="clear: both; margin-bottom: 2rem;"></div>

<img src="../assets/images/downscope.jpg" alt="Right aligned image" class="img-sm img-right">

## In Regular Markdown Files

For regular markdown files where you can't use HTML tags, you have two options:

1. Use the default image size which is now constrained to a reasonable height:

   ![Default constrained image](../assets/images/downscope.jpg)

2. For more control, you can use Astro's MDX format which allows HTML tags directly in markdown. 