/*
 * This file is part of Avoid Google Search redirects.
 *
 * Copyright ⓒ 2017 Adrien Dorsaz <adrien@adorsaz.ch>
 *
 * Avoid Google Search redirects is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Avoid Google Search redirects is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Avoid Google Search redirects.If not, see <http://www.gnu.org/licenses/>.
 */

const currentURL = new URL(window.location.href);
// can’t use `"matches": ["*://*.google.*/"]` in `manifest.json` because
// `*` is only supported at the beginning of the hostname
const currentURLIsAGoogleDomain = currentURL.hostname.match(/\.google(\.[^\.]+|\.co\.uk)$/);

if (currentURLIsAGoogleDomain && window.wrappedJSObject.rwt) {
    window.wrappedJSObject.rwt = exportFunction(function() { }, window);
}
