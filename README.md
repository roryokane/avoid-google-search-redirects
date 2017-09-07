# Avoid Google Search redirects

## Introduction

This add-on avoids Google Search to track you with redirect links.

When a user hovers a Google Search result, target link seems to be the right one, but, when he clicks on this link, the target is rewritten with a redirection link to a Google tracker.
This tracker is then able to save your click in the Google Search engine data.

To achieve this, Google Search uses an onmousedown event on results. This event is able to rewrite the target link by using a function called « rwt ».
This add-on simply redefines this rwt function with an empty function, so nothing happens on click and user goes directly to its result.

The original idea comes from the « Remove Google Redirect in Google Search Results » add-on.

This add-on is packaged as WebExtension and so is compatible with recent Firefox releases and technologies.

## Report issue, improvements

Source code can be found on Github: https://github.com/Trim/avoid-google-search-redirects

You can use this repository to open issues and feature requests.
