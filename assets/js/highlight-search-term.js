/**
 * This file is a modified version of:
 * https://github.com/marmelab/highlight-search-term/blob/main/src/index.js
 * - We return the `matchingElements`
 * - We fixed a bug: `getRangesForSearchTermInElement` got the `node.parentElement`, which is not working if there are multiple text nodes in one element.
 *
 * highlight-search-term is published under MIT License.
 *
 * MIT License
 *
 * Copyright (c) 2024 marmelab
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const highlightSearchTerm=({search:e,selector:t,clearHighlights:n,customHighlightName:h="search"})=>{if(!t)throw new Error("The selector argument is required");if(!CSS.highlights)return{matchingElements:[],nonMatchingElements:[]};n&&CSS.highlights.delete(h);const r=[],o=[];if(e){const n=[],s=document.querySelectorAll(t);var g;if(Array.from(s).map((t=>{let h=!1;getTextNodesInElementContainingText(t,e).forEach((t=>{const r=getRangesForSearchTermInNode(t,e);n.push(...r),r.length>0&&(h=!0)})),h?o.push(t):r.push(t)})),0!==n.length)CSS.highlights.has(h)?(g=CSS.highlights.get(h),n.forEach((e=>{g=g.add(e)}))):g=new Highlight(...n),CSS.highlights.set(h,g)}return{matchingElements:o,nonMatchingElements:r}},getTextNodesInElementContainingText=(e,t)=>{const n=[],h=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);let r;for(;r=h.nextNode();)r.textContent&&r.textContent.toLowerCase().includes(t)&&n.push(r);return n},getRangesForSearchTermInNode=(e,t)=>{const n=[],h=(e.textContent?e.textContent.toLowerCase():"")||"";let r,o=0;for(;(r=h.indexOf(t,o))>=0;){const h=new Range;h.setStart(e,r),h.setEnd(e,r+t.length),n.push(h),o=r+t.length}return n};export{highlightSearchTerm};