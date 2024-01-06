# SearchEngineJumpPlus+

<div align="center">
<a href="https://greasyfork.org/zh-CN/scripts/454280-searchenginejumpplus" target="_blank">
<img src="https://img.shields.io/badge/Download-GreasyFork-blue?logo=Tampermonkey&style=for-the-badge" alt="GreasyFork"></a>
<a href="https://openuserjs.org/scripts/MUTED64/SearchEngineJumpPlus_%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%BF%AB%E6%8D%B7%E8%B7%B3%E8%BD%AC%2B" target="_blank">
<img src="https://img.shields.io/badge/Download-OpenUserJS-green?logo=Tampermonkey&style=for-the-badge" alt="GreasyFork"></a>
</div>

## Project Description

This project originated from [iqxin maintained search engine jump script](https://github.com/qxinGitHub/searchEngineJump), which was Forked to this repository after version 5.27.0. Originally, Fork was intended to give PR to the author, but the author doesn't use GitHub very often, and the PRs contributed by some people before were not merged into the master branch, plus the large-scale refactoring after 2022-12-03 made it impossible to synchronise the changes in the original repository, so we temporarily Detach Forked the project, and we'll continue to update the project in this repository, and push the updates to the following repositories from time to time GreasyFork and OpenUserJS.

## Instructions

### Search Page Jump

After enabling the script in the script manager, when you visit a supported search page, the script's jump bar will be displayed on the page, and you can click the button to jump to the corresponding search engine, and automatically perform a quick one-click search according to the contents of the current search box.

! [SearchEngineJump](SearchEngineJump.png)

### Crossword Search

When you visit other pages which don't support the search box, the script will enable the search function by default, when you use the mouse to scratch the words on the page, a small bar will pop up at the top of the page, then you can click the button to jump to the corresponding search engine, and automatically perform a quick one-click search according to the content of the current search words.

! [SelectSearch](SelectSearch.png)

### Dark Mode

The script supports dark mode, but different pages have different adaptation of dark mode, which leads to conflict between some websites that don't support dark mode and the default settings of operating system or browsers, so it is recommended to use it together with [Dark Reader Extension](https://darkreader.org/) to render dark pages according to the operating system settings automatically.

! [Dark](Dark.png)

### Settings menu

At the end of the jump bar there is a settings button, click on it to enter the settings menu, or you can enter the settings menu from the options in the script manager. In the settings menu you can configure the search engine of the script, for example drag and drop to adjust the position, click to toggle the enabled status, add or remove search engines, etc.

! [Settings](Settings.png)

## Update history

- version 5.31.15 2023-06-13

  - Fixed: Taobao front-end update caused the jump bar to disappear.

- version 5.31.14 2023-06-12

  - Tweak: Disable scripts from running in iframes via @noframe to optimise performance.

- version 5.31.13 2023-06-02

  - Tweak: Shake search style
  - Added: middle mouse button to open new tabs.

- version 5.31.12 2023-04-26

  - Fixed: Baidu search does not show the jump bar.

- version 5.31.11 2023-04-18

  - Added: adaption for Xiaohongshu

- version 5.31.10 2023-03-26

  - Fixed the issue that Google doesn't show the jump bar after update.

- version 5.31.9 2023-03-24

  - Tweak: Baidu widescreen adaptation

- version 5.31.8 2023-01-11

  - Tweak: Synchronise changes to Baidu in original script.
  - Tweak: update bing link
  - Fix: CSS conflict on some pages

- version 5.31.7 2023-01-11

  - Fixed: disappearance of red strikethrough in settings panel

- version 5.31.6 2023-01-10

  - Tweak: Optimise dark mode experience
  
- version 5.31.5 2023-01-09

  - Added: Documentation instructions and images
  - Tweak: Baidu style
  - Fix: Overwrite button styles on some pages
  - Fix: Fixed an issue with the sticky style of position that caused the top fix to be invalidated on some sites.
  - Fixed: Wikipedia page styles were messed up.

- version 5.31.4 2023-01-06

  - Fix: dropdown menu buttons disabled
  - Fix: Insertion failure due to GitHub search change

- version 5.31.3 2022-12-23

  - Tweak: Optimise dark mode logic for Firefox.

- version 5.31.2 2022-12-19

  - Tweak: Top Wrapper for Crossword Search
  - Tweak: display hierarchy of search words

- version 5.31.1 2022-12-18

  - Tweak: Edge style closer to Fluent UI
  - Tweak: Adapt to Quora
  - Tweak: Optimise top attachment experience
  - Fixed: Posting full screen style, Yahoo style, Youdao Dictionary style.
  - Fix: some pages jump to target issue

- version 5.31.0 2022-12-11

  - Tweak: Most of the framework of the code has been refactored, the details need to be optimised.
  - Tweak: animation style
  - Tweak: Optimise popup notification on settings page
  - Tweak: Settings button style
  - Tweak: drop-down style
  - Fix: Wrong update logic
  - Fix: Settings panel label colour issue

- version 5.30.4 2022-12-10

  - Tweak: code refactoring
  - Tweak: StartPage jump links
  - Tweak: Update Logic
  - Fix: Update version number shallow copy issue
  - Fix: Single page application routing change issue
  - Fix: Settings list fail to load due to routing change.
  - Fix: Multiple loads due to routing changes
  - Fix: Conflict between Post request jump and tab default behaviour.

- version 5.30.3 2022-12-10

  - Tweak: Optimise the stroke experience

- version 5.30.2 2022-12-05

  - Add: Baidu library, Baidu post bar search re-adaptation.
  - Tweak: Refactor most of the code to reduce redundancy and improve readability.
  - Tweak: microblog jump engine issue.
  - Tweak: console info style
  - Tweak: remove custom rules support
  - Tweak: shadow style
  - Tweak: Baidu Post Bar, Youdao Translate, Mengnian Wikipedia, Google Images, Bing Images, Baidu Images, Bilibili, NetEase Yunmusic, Google Scholar Style
  - Tweak: Top adsorption logic
  - Tweak: Delete LeTV video

- version 5.30.1 2022-12-05

  - Adjustment: refactor some codes, split logic, reduce redundant code, improve readability.
  - Fixed: wrong style of some websites' setting tips
  - Fixed the problem that when adding a website without specifying the protocol, it can't be added correctly.

- version 5.30.0 2022-12-04

  - Tweak: Split CSS file to streamline code.

- version 5.29.10 2022-12-04

  - Fixed the problem that the icon positions of some websites are messed up.
  - Tweak: display fonts
  - Tweak: category name

- version 5.29.9 2022-12-04

  - Add: version number support
  - Tweak: Settings menu button style

- version 5.29.8 2022-12-04 added: night mode setting button style

  - Tweak: Night mode setting button style

- version 5.29.7 2022-12-04 Added: Settings menu button style.

  - Tweak: Settings page style

- version 5.29.6 2022-12-03

  - Synchronised update of source repository codes 5.26.1-5.26.3
  - Tweak: Support all sites for searching by scratch word, sometimes it may not be compatible with some sites, you need to manually close it.
  - Tweak: Bilibili style and multiple search sub-pages.
  - Fix: Exclude cubic-bezier.com from searching with scratch word.

- version 5.29.5 2022-11-25

  - Tweak: dark mode button and shadow styles

- version 5.29.4 2022-11-10

  - Fixed: forced centering not working

- version 5.29.3 2022-11-09

  - Added: Adaptation for Munchkin Wiki and StackOverflow.
  - Tweaked: Zhi.com and Baidu Encyclopedia styles

- version 5.29.2 2022-11-09

  - Adapted: YouTube style
  - Tweak: Slider mode style, normal search centre style.
  - Tweak: Full httpsisation
  - Fixed: Baidu posting blocking useful information on Edge.
  - Fixed: Jumping to Haiyin, Bing Images, pixiv, Petals, Pinterest, Yandex Images, QQ music.
  - Fixed the problem that the jump bar disappears when jumping to Yidian music.
  - Fixed the problem of line breaks in Douban's jump bar.
  - Fixed: What's Worth Buying, 1688 style problem.
  - Fix: Bing image dropdown blocking the jump bar issue.

- version 5.29.1 2022-11-05

  - Tweak: Slide word mode style

- version 5.29.0 2022-11-05

  - Add: Baidu Scholar, Google Scholar, Zhi.com, Wanfang, Baidu Post Bar, Taobao, Weibo, Douban, QQ Music, Yilian, Tencent video re-adaptation.

- version 5.28.1 2022-11-05

  - Tweak: GitHub Adaptation

- version 5.28.0 2022-11-05

  - Tweak: Use Flexbox to rewrite styles.
  - Tweak: Adapt some websites
  - Fix: Fixed 1 pixel white gap when hovering over buttons.
  - Fix: Remove and modify some websites that don't need to be redirected.

- version 5.27.0 2022-11-04

  - Forked by MUTED
  - Tweak: change the style of the jump bar to rounded corners, fix some margin and embedding issues, and use sticky on some sites to optimise the top fixing experience

- version 5.26.0 2022-11-03

  - ADDED: Crossword search function, can be turned off in settings menu.
  - Tweak: Style change, remove triangular arrow, dropdown search menu is now centered

- version 5.25.1 2022-10-27

  - Fixed: Shake search interface colour issue

- version 5.25.0 2022-10-27

  - ADDED: Support Google Night Mode
  - Tweak: Updated some icons, but users need to reset the settings to use the new icons.

- version 5.24.19 2022-09-28

  - ADDED: Support buy slowly website

- version 5.24.18 2022-09-11

  - Fixed: Last version caused many sites to appear in the search term if the search link was a specific site after turning off "Hide same site links".

- version 5.24.17 2022-09-10

  - Fixed a bug in Jingdong search page where the search bar was too long and caused the Jingdong page to be misaligned. [Thanks to abossk for feedback](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump/discussions/147572)
  - Fixed: If there is a site: in the search content, the jump will no longer delete the site and the content after it.

- version 5.24.16 2022-09-04

  - Fixed: Google search, menu with two rows was blocking the toolbar.

- version 5.24.15 2022-08-24

  - Fixed: YouTube website without toolbar.
  - Record: Removed hashList, completely replace it with title monitor, not a big problem as long as Baidu page is OK.

- version 5.24.14 2022-08-24

  - ADDED: Can hide text and keep icon only. Settings - More Settings - Profile "icon" value changed to 0, 1 is default icon, 2 is abstract icon.
  - Fixed: Styling adjustment for multiple sites
  - Fix: "Hide same site links" now works correctly.

- version 5.24.13 2022-08-23

  - ADDED: Added setting "Hide same site links". Settings - More Settings - Hide Same Site Links: On by default, Baidu page will hide Baidu search. If you want to search the same site but in different language, you can choose false to achieve it. Currently there is a problem 2022-08-23 todo: Hide same site links will fail intermittently.
  - Added: support sites brave.com, neeva.com(delayed loading)
  - Record: Google removed magin, added class: "s6JM6d", for alignment. This version adds an extra class to #sej-container.
  - I logged into github and found a lot of feedback.

- version 5.24.12 2022-08-06

  - Fix: ecosia.org search URL change.
  - Fix: Two search fields on the Knowledge page.

- version 5.24.11 2022-07-31

  - Fixed: Baidu page lost styles when changing search terms or clicking next page. This is probably caused by the v5.24.6 update earlier this month, which removed some code about Baidu search for compatibility with "ac Baidu". We are not sure if the problem is solved or not, we will feedback if there is any problem.
  - Fix: f Search URL change [Thanks to ZZH-qwq for feedback](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump-%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%BF%) AB%E6%8D%B7%E8%B7%B3%E8%BD%AC/discussions/119203)
  - Add: support Google mirror site jump,google.ml xn--flw351e.ml [Thanks to nvfddbgfh comments](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump-%E6%90%9C%E7%B4%A2% E5%BC%95%E6%93%8E%E5%BF%AB%E6%8D%B7%E8%B7%B3%E8%BD%AC/discussions/64397#comment-310585)

- version 5.24.10 2022-07-25

  - Fix: Problem with one-click search not opening searches containing site [[Thanks to HelloWeirdTourist for feedback](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump/discussions/142314)

- version 5.24.9 2022-07-23

  - Fixed: Problem with lists over 10 not being able to be added. [Thanks to HelloWeirdTourist for feedback](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump/discussions/142261)
  - Fix: Adjust the search URL of Knowledge.com. [Thanks to Holiday2019 for help](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump/discussions/116013)
  - Fix: Taobao page style problem.

- version 5.24.8 2022-07-04

  - Fix: Baidu lite with "AC-baidu-redirect-optimise-baidu-sogou-google-bingo-search*favicon*double-column" script turned on, obscured issue.

- version 5.24.7 2022-07-03

  - Fixed: After opening "AC-baidu-Redirection Optimise Baidu Sogou Google Bing Search *favicon* Double Column" script, the dropdown menu will be blocked by other contents on the page.
  - Known issue: When two scripts co-exist, the search bar cannot be fixed in Baidu dropdown page, will be fixed later.

- version 5.24.6 2022-07-03

  - Fixed: Open "AC-baidu-Redirection Optimise Baidu Sogou Google Bing Search*favicon*double-column" script, Baidu page dropdown menu shift problem, but need to manually open, open method: Menu - Centre - Force. Due to the script will delay loading, resulting in the previous use of automatic acquisition failure, if the two scripts are enabled at the same time, be sure to "menu" in the "centre" to "forced".
  - Thank you to everyone in the comments section who has continued to report on this issue while I've been gone.

- version 5.24.5 2022-03-19

  - Fixed: Error deleting duckduckgo.com in version 5.24.3, restored www.1ting.com [thanks to JY3 for the reminder] (https://greasyfork.org/zh-CN/scripts/27752-searchenginejump/). discussions/123460#comment-279499)

- version 5.24.4 2022-03-18

  - Fixed: Compatible with old and new layout of bilibili search interface. The problem is that it's almost impossible to fix the top of b-site, so it's the lesser of two evils. [Thanks to iamking22 for the feedback](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump/discussions/123330)

- version 5.24.3 2022-03-15

  - 未解决的问题: headline search can not jump to taobao.
  - the following add new search, and search site order adjustment does not affect the old user
  - Add: add f search support. Thanks to [ZZH-qwq](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump/discussions/119203) for providing the code, due to the search is in the internal testing stage, not verified the accuracy of the code.
  - Add: support for today's headline search, fix the problem of wrong links in today's headline search.
  - ADDED: Jitterbug search, in social list; support for Jitterbug search (problem with colour display).
  - Fixed: Yahoo Japan search not working.
  - Fixed: BeiliBeili search issue, [I can't see me I can't see me Feedback](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump/discussions/123251)
  - Interface: Delete the websites such as www.1ting.com, yinyuetai.com, easyicon.net, zimuzu.tv, guokr.com, mijisou.com, DOG duckduckgo.com, and so on.

- version 5.24.2 2021-06-30

  - Fixed: Missing issue when searching again on the Yodo search page. Thanks to [spn](https://greasyfork.org/zh-CN/scripts/27752/discussions/90926)
  - Added: Kingsoft WordBuilder support. Thanks to [spn](https://greasyfork.org/zh-CN/scripts/27752/discussions/91053) for the code.
  - Fixed: The icon of setting interface is not normal in some websites, e.g. Kingsoft wordmaster website.

- version 5.24.1 2021-06-23

  - Fixed: Inaccurate search links in Enterprise Search. Thanks to [kidzgy](https://greasyfork.org/zh-CN/scripts/27752/discussions/90497).
  - ADDED: 1688 website add search bar

- version 5.24.0 2021-06-21

  - ADDED: Add the option to turn off animation effect in settings.
  - ADDED: Tianyecha, Enterprise Search Thanks to [kidzgy](https://greasyfork.org/zh-CN/scripts/27752/discussions/90497) for providing the code.

- version 5.23.10 2021-06-14

  - ADDED: to www.ecosia.org网站的支持 [thanks to lisariel](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump/discussions/90001)

- version 5.23.9 2021-05-22

  - Fixed: Google search page overlaps with the tools it comes with
  - OPTIMISE: In the settings screen, when the search list is too large, the gap with the edge is increased.

- version 5.23.8 2021-05-22

  - Fix: Version 5.23.7 caused some users to be unable to use it (because it called a list that had been deleted by the user, which caused an error).
  - Fixed: Baidu page search translation content, the background colour is missing, adjusted the index of the parent element to 101.

- version 5.23.7 2021-03-19

  - Fixed: Mouse move from category list to menu will cause the list to keep moving down [Thanks kidzgy](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump/discussions/79010)
  - Interface: b-site icon [Thanks to kidzgy](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump/discussions/79010)

- version 5.23.6 2021-03-16

  - Fixed: What's Worth Buying level is too high.
  - Fix: List exit animation missing
  - Fix: Baidu interface list shift
  - Fix: Google image dropdown not showing up
  - Optimise: domain matching rules `// @include *://*.yahoo.tld/*` [thanks to dnknn](https://greasyfork.org/zh-CN/users/35765-dnknn)
  - Interface: add some hairy glass effect, part of enter/exit animation modified.

- version 5.23.5 2021-03-07

  - Fixed: AcFun website
  - Optimise: duckduckgo Yandex
  - Removed: Shrimp Music One Shop Idle Fish

- version 5.23.4 2020-12-27

  - Optimise: remove some sites that don't need to be matched

- version 5.23.3 2020-12-26

  - Optimise:Remove some websites that don't need to be matched.

- version 5.23.2 2020-12-23

  - Fixed: Search bar not aligned on Bing page [thanks to When I was a kid I rode a bamboo horse and we were generals](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump-%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%) 8E%E5%BF%AB%E6%8D%B7%E8%B7%B3%E8%BD%AC/discussions/71057)

- version 5.23.1 2020-12-22

  - Fix: Match all Google URLs (before it would only match main site com) [Thanks zy G](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump-%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E% E5%BF%AB%E6%8D%B7%E8%B7%B3%E8%BD%AC/discussions/71035)

- version 5.23.0 2020-12-19

  - Fixed: a serious problem with scripts, after re-importing configurations, the scripts would most likely load incorrectly
  - Fixed: Baidu library
  - Add: shopping site Amazon
  - Optimise: Wealth Search startpage
  - Optimise: no longer match all sites, only related sites
  - Interface: Baidu icon, B-site icon

- version 5.22.5 2020-10-15

  - Delete tencent microblogging, google+ [thanks to wsxy162](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump/discussions/64302)
  - Website dogedoge compatible with "ac baidu" [Thanks to benzBrake](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump/discussions/) 64242)
  - Video add cherry blossom anime Special thanks to [storyInAugest](https://greasyfork.org/zh-CN/scripts/27752-searchenginejump/discussions/30535) for their contribution!
  - Add "enable" and "disable" hints.

- version 5.22.4 2020-09-05

  - Baidu Encyclopaedia Problem with too many levels
  - startpage.com website fix
  - github.com website fix

- version 5.22.3 2020-08-02

  - dogedoge stacking order too high issue
  - Add DeepL to translation list
  - Compatibility issue with script "AC-baidu".
  - (previous version error missing v_5.22.1)

- version 5.22.2 2020-08-02

  - Icon fine-tuning
  - Add support for "Yahoo Japan Search".

- version 5.22.0 2020-08-01

  - 1688 messy code problem
  - Baidu blocking problem

- version 5.21.2 2020-05-04

  - Fix Google Images
  - Fix A-site link
  - Compatible with script "Zhihu Typography Optimisation".

- version 5.21.1 2020-02-20

  - 样式微调

- version 5.21.0 2020-02-04

  - Compatibility script [AC-baidu:redirect optimise Baidu Sogou Google search*remove ads\_favicon*double columns](https://greasyfork.org/zh-CN/scripts/14178), add related options in settings menu

- version 5.20.0 2020-01-27

  - Add one-click search. When you click the icon of the search category, it will open all the search sites of the category in the background to search.
  - Minor changes to settings page

- version 5.19.0 2020-01-26

  - Encoding problem, all searches are transcoded by default (can search c# without turning into c). 1688 is encoded in gbk, add gbk option in the rules.
  - Add website style google.infinitynewtab.com | <www.dogedoge.com>.
  - Add search engine Yandex
  - Fixed Zhihu website NetEaseCloud(still have problem: can't fix to top).
  - Time is not abandoned Age is quiet Peace in the New Year

- version 5.18.2 2019-04-19

  - Add secret search, [thanks swearwr for the help and lukemin for the suggestion](https://greasyfork.org/zh-CN/forum/discussion/55490/x)
  - YouTube will show a search bar above the video when playing the video through search, you can refresh the page once to remove it temporarily, waiting for a better way to deal with it later

- version 5.18.1 2019-02-28

  - Add startpage web search
  - Add Dangdang shopping search
  - Add CoolMusic 5sing song search.

- version 5.18.0 2019-02-28

  - Add option to only appear on top when fixed to top: Settings - More Settings - Profiles fixedTopUpward Change false to true [Thanks to Chi-Tung Huang for suggesting this](https://greasyfork.org/zh-CN/forum/discussion/50315/x)

- version 5.17.3 2019-02-21

  - Sogou search page revamp [Thanks to Fordo for feedback](https://greasyfork.org/zh-CN/forum/discussion/51921/x)
  - Add Sogou emoji search in self use
  - It's been a long time, may everyone be treated with gentleness

- version 5.17.2 2018-12-21

  - Add search Shopping - What's Worth Buying [Thanks to iqeq for the suggestion](https://greasyfork.org/zh-CN/forum/discussion/48023/x)

- version 5.17.1 2018-12-09

  - "Fixed to top" Issue with search bar being obscured in Google search when "Fixed to top" is turned on (flawed)
  - Centre YouTube search bar, known issue: not fixed to top
  - <www.startpage.com> website add search bar
  - Individual name changes

- version 5.17.0 2018-08-03

  - Add icon option to use google to get icon, or domain to get it, or dnspot to get it when user adds custom search. Settings - More Settings - Configuration menu - getIcon. You can check the message to set it up.
  - Add web search in import by [Cheese on the Run](https://www.runningcheese.com/resources).

- version 5.16.2 2018-07-02

  - Remove adverts

- version 5.16.1 2018-06-30

  - Added new search category eBooks from import . Settings - More Settings - Import ; Organised by [Cheese on the Run](https://www.runningcheese.com/search-engines).

- version 5.16.0 2018-06-29

  - Add import function, currently can only import what I have set up, Settings - More Settings - Import; Only added a search category, will be added gradually. Firstly, add [Selected Search Engines](https://www.runningcheese.com/search-engines) organised by Cheese on the Run.
  - Remove search links for adult sites

- version 5.15.15 2018-06-29

  - Updated adverts

- version 5.15.14 2018-06-25

  - Added new search category - News Search [Thanks to Hipd in the Github comments section for suggesting this](https://github.com/qxinGitHub/searchEngineJump/issues/9) , and the URL provided by chinchihyu, the search engine put together by [Running Cheese](https ://www.runningcheese.com/search-engines)
  - Knowledge search list add quora , stackoverflow

- version 5.15.13 2018-06-25

  - Added adverts

- version 5.15.12 2018-06-17

  - Added search style for yandex search page. There is a flaw that obscures the content of the source page

- version 5.15.11 2018-06-11

  - Knowledge page tweaks

- version 5.15.10 2018-05-10

  - Category background is transparent in dge browser [thanks to WLYYL feedback in Github comments section](https://github.com/qxinGitHub/searchEngineJump/issues/6)

- version 5.15.9 2018-04-08

  - If you use style adjustment style for Baidu page, you can change baiduOffset in config file to fix the offset of secondary menu.

- version 5.15.8 2018-04-04

  - Problem with missing search bar on site b
  - Fixed the problem that if you are editing a title without confirming, clicking on another title to edit it will make the title name wrong.

- version 5.15.7 2018-03-25

  - Bing image search is misaligned

- version 5.15.6 2018-03-08

  - Fix Google Books being incorrectly hidden [thanks to tensun tsai in the comments section for feedback] (https://greasyfork.org/zh-CN/forum/discussion/comment/48233#Comment_48233)
  - Baidu academic interface without search box
  - This version starts collapsing the current search category by default

- version 5.15.5 2018-03-05

  - Modify a-site search link, fix a-site style

- version 5.15.4 2018-02-15

  - Add Sogou search

- version 5.15.3 2018-01-19

  - Google search interface,, incorrectly hide Google search under download category [Thanks to wsxy162 in the comments section for feedback](https://greasyfork.org/zh-CN/forum/discussion/comment/46012#Comment_46012)

- version 5.15.2 2018-01-07

  - "Open as" always automatically jumps back to "Default Page" instead of "New Tab Open" [Thanks to cll12 in the comments section for the feedback](https://) greasyfork.org/zh-cn/forum/discussion/comment/45425#Comment_45425)

- version 5.15.1 2017-12-15

  - Fix Baidu encyclopaedia, Sogou search, 360 good search, facebook problems, [thanks to Ring feedback in the comment section](https://greasyfork.org/zh-TW/forum/discussion/comment/44291#Comment_44291)

- version 5.15.0 2017-12-13

  - Settings screen can be dragged

- version 5.14.0 2017-12-12

  - Can hide the close button in the upper right corner of the settings screen Configuration file closeBtn
  - The problem that you need to refresh the page to open it again after hiding the settings button.
  - Other small details unification

- version 5.13.1 2017-12-11

  - Youku search connection change [thanks for the feedback](https://greasyfork.org/zh-CN/forum/discussion/31999/x)

- version 5.13.0 2017-12-11

  - Change the implementation of drag-and-drop sorting to make it more intuitive and easy to use.

- version 5.12.12 2017-12-10

  - Zhihu interface changes
  - Search list change: html search list merged into mine.

- version 5.12.11 2017-11-27

  - Add search by sea words in translation list [thanks for the suggestion](https://greasyfork.org/zh-CN/forum/discussion/31670/x), old users disable it by default.
  - Fixed the problem that the toolbar will be blocked when the mouse passes over the product on Taobao page.

- version 5.12.10 2017-11-19

  - Added download search list, hidden by default [Thanks for the suggestion](https://greasyfork.org/zh-CN/forum/discussion/31317/x)
  - Added a few setting options that may be needed in the future.

- version 5.12.9 2017-11-04

  - Tmall cause source page sidebar misalignment problem [Thanks for feedback](https://greasyfork.org/zh-CN/forum/discussion/30899/)
  - Fixed the issue that caused the top bar to be misaligned in the previous version of Zhihua

- version 5.12.8 2017-10-27

  - Fixed to the top bar of sites such as Taobao, which would be misaligned, remains flawed.
  - Firefox users can't click the disable menu button directly from the menu from this version onwards
  - Hide associative hints below search box when scrolling up a Baidu page

- version 5.12.7 2017-10-18

  - Fix the problem that "Fixed to top" cannot take effect in time after saving the modification.
  - Fixed the problem of wrong position of message alert box.
  - Tiny adjustments to button colours and animations.

- version 5.12.6 2017-10-10

  - Fix icon offset

- version 5.12.5 2017-10-04

  - No need to reload the page after changing settings
  - Settings interface adjustments: colour scheme, position, fonts

- version 5.12.4 2017-09-23

  - Removed "More Settings - List Sort" function, now you can drag the list title to sort the list.
  - Add search: shopping-GreasyFork, mine-GreasyFork
  - Settings interface Icon and name not aligned issue

- version 5.12.3 2017-09-10

  - Settings menu is integrated into Tampermonkey menu.
  - Click the number after "Set Button Transparency" to hide the settings menu, to reopen it, you need to open it from Tampermonkey menu, Firefox users please ignore this update!
  - The Flowers Of The Forest Have Gone Red In The Spring, It's Too Soon - Li Yu Happiness In The Presence Of Each Other

- version 5.12.2 2017-09-01

  - Disabled searches missing strikethrough in Settings menu.
  - youtube revamp
  - Problem of messy code when jumping from Baidu library [thanks for feedback](https://greasyfork.org/zh-CN/forum/discussion/28783)
  - Adjusted minimum width for better performance on normal screens [Thanks for the feedback](https://greasyfork.org/zh-CN/forum/discussion/28783)

- version 5.12.1 2017-08-27

  - Misaligned secondary search menu on Baidu page with fixed search bar
  - Google page style fine-tuning

- version 5.12.0 2017-08-21

  - Add post submitter method, search link followed by '$post$xx' where xx is the name of the post submission [Related Feedback](https://greasyfork.org/zh-CN/forum/discussion/28440/x)
  - Fix the problem that "search item" can be dragged and dropped with "category name" [Thanks for the feedback](https://greasyfork.org/zh-CN/forum/discussion/27907/) x)
  - Add styles to searx and Sogou pages.

- version 5.11.2 2017-08-20

  - Setting button can't bottom automatically when the visible area of setting menu is too low [Thanks for the feedback](https://greasyfork.org/zh-CN/forum/discussion/27907/x)
  - Add Yahoo search

- version 5.11.1 2017-08-19

  - Google search page, "Sort list" gap is too large
  - Sanding animation 😂

- version 5.11.0 2017-08-18

  - Add list sorting feature: Settings - More Settings - List Sorting
  - Fixed misalignment of settings menu in Running Cheese custom Firefox v8.
  - Hide html search list by default; javlibrary search link fix; remove baidu know; add mengnai wikipedia
  - Setting up interface style fine-tuning

- version 5.10.3 2017-08-10

  - Input box changed to auto select text after getting focus, before it was auto select text when mouse clicked on the input box.
  - Firefox settings interface full selection problem
  - Bing search, the "More Settings" menu is misaligned.

- version 5.10.2 2017-08-09

  - Adjust the style of setting interface, add multiple setting buttons. Change the opening and closing animation of setting interface.

- version 5.10.1 2017-08-09

  - Remove rotation animation of close button
  - Remove inexplicable amount of margin attributes

- version 5.10.0 2017-08-08

  - Add fixedTop option, the toolbar can stay at the top of the page after scrolling down. "Settings - Advanced - fixedTop" to true, some pages are not very compatible [Thanks for the suggestion](https://greasyfork.org/zh-CN/forum/discussion/27478/x)

- version 5.9.2 2017-08-07

  - Issue with not being able to scroll to the top when the settings menu viewing area is too low

- version 5.9.1 2017-08-06

  - Issue with no scrollbar when the visible area of the settings menu is too low [feedback appreciated] (https://greasyfork.org/zh-CN/forum/discussion/27907/x)

- version 5.9.0 2017-08-05

  - Add function to add or delete search list
  - Add debug settings-advanced-debug (picked up from similar scripts)
  - Numerous detail adjustments

- version 5.8.1 2017-07-29

  - Still can't rule out searching against a site [thanks for the feedback] (https://greasyfork.org/zh-CN/forum/discussion/27527/x)

- version 5.8.0 2017-07-28

  - Add rules information in config file, same function as rules in script, but higher priority, config file updated to 1.6.
  - Previously, it would remove the search that jumps to the current search, now it will exclude the search engine to search for a certain site site:xxx.xx [such as the case in the feedback](https://greasyfork.org/zh-CN/forum/discussion/27527/x)
  - Issue where some information was overwritten by the default configuration in some cases after modifying the local configuration file

- version 5.7.0 2017-07-26

  - Add the function of modifying the transparency of the set button, the number behind the setting-advanced-setBtnOpacity is the transparency value 0-1, -1 is to close the set button. Configuration file updated to 1.5
  - Delete the details information in the configuration file and integrate it into engineDetails.
  - Individual site styles adjusted

- version 5.6.3 2017-07-24

  - Fixed opening method can't be set to open in new tab [Thanks for the feedback](https://greasyfork.org/zh-CN/forum/discussion/27413)
  - Individual site styling changes

- version 5.6.2 2017-07-23

  - Remove useless information in the configuration file
  - Fix the style problem of opening settings in Baidu page.
  - Improve Tencent video search style

- version 5.6.1 2017-07-20

  - Add 360 search,Aiki video and webpage top search bar by default [Thanks for the feedback](https://greasyfork.org/zh-CN/forum/discussion/27278/x)
  - Add Tencent video search by default in video category, but failed to achieve top search bar, the reason is being found.
  - Fix the problem of adding "&type=1" to NetEase cloud music jump by default [Thanks for feedback](https://greasyfork.org/zh-CN/forum/discussion/27196/x)

- version 5.6.0 2017-07-16

  - Add the option of collapsing the current search category.
  - Add the option of modifying the code directly in the configuration file.
  - Setting interface button adjustment
  - Hide academic search list by default

- version 5.5.1 2017-06-07

  - When adding a new search, the icon will be preferred to get from google's API, if the network is not available, use the domain name plus favicon.ico to get it [Thanks for the suggestion](https://greasyfork.org/zh-CN/forum/discussion/24961/x)
  - Optimise details, add enquiry window when resetting settings.

- version 5.5.0 2017-06-04

  - Add the ability to change the name of the search category
  - Optimise settings details

- version 5.4.0 2017-06-01

  - Add the option to change the name of the existing search list
  - Detailed optimisation: modified some icons and added some animations in the settings interface.

- version 5.3.0 2017-05-29

  - Add global "New Tab Open" option, change profile version to 1.2.

- version 5.2.2 2017-05-28

  - Problem with mine category (or multiple) in categories not being displayed

- version 5.2.1 2017-05-27

  - Can only add up to 9 searches, continue to add can not display the problem [Thanks for the feedback](https://greasyfork.org/zh-CN/forum/discussion/24342/x)
  - UX change: text cannot be selected

- version 5.2.0 2017-05-20

  - Add the function of adding and deleting searches: no fault tolerance, will not judge whether your input is correct or not, the search URL in the search link needs to be replaced by %s, after adding, if you need to move, disable, delete need to "save and close" and then in the settings.

- version 5.1.5 2017-05-14

  - Must be misaligned [Feedback appreciated](https://greasyfork.org/zh-CN/forum/discussion/23528/x)

- version 5.1.4 2017-05-12

  - qq music URL change [Thanks for the feedback](https://greasyfork.org/zh-CN/forum/discussion/23366/x)

- version 5.1.3 2017-05-11

  - Previous version was released after forgetting to change the version number (after changing the version, greasyfork ignored the update of only the version number)
  - Translation (Baidu, Google, Bing, and Yodao are all adjusted) minor style [thanks for the feedback](https://greasyfork.org/zh-CN/forum/discussion/23297/x)

- version 5.1.2 2017-05-11

  - Issue with missing jump bar after refreshing page after searching from Google homepage [Feedback appreciated](https://greasyfork.org/zh-CN/forum/discussion/23230/x)
  - Issue with searching from Google homepage without style in case of bad internet speed.

- version 5.1.1 2017-05-10

  - Add animation effect
  - Change settings to flexible layout (test)

- version 5.1.0 2017-05-10

  - Add ability to modify source page for script compatibility
  - Incompatibility issue with Google Variety styles
  - Tweak the style in google search page
  - Fixed the problem that the version of the configuration file is not automatically updated.

- version 5.0.5 2017-05-10

  - Add Sogou Zhihu Search [Thanks for the suggestion](https://greasyfork.org/zh-CN/forum/discussion/23140/x)
  - Add Sogou WeChat search (in category mine).
  - Local datastore version upgraded to 1.1

- version 5.0.4 2017-05-9

  - 5.0.0.2 with style "Google Variety" incompatibility problem after modification of more harm than good, temporarily change back!

- version 5.0.3 2017-05-09

  - Fixed the problem that new tab opening cannot be saved in settings.
  - Fixed the issue that Google and Baidu search from homepage can't show the jump bar because of version 5.0.0.
  - Add a class named "rwl-exempt" to prepare for solving the problem with the script "Web page unrestricted".
  - Version changed from 5.x.x.x to 5.x.x.

- version 5.0.0.2 2017-05-09

  - Changing font settings causes misalignment [Feedback appreciated](https://greasyfork.org/zh-CN/forum/discussion/23109/x)
  - Incompatible with Google Variety styles

- version 5.0.0.1 2017-05-08

  - Comment out console.log

- version 5.0.0.0 2017-05-08

  - **Add settings menu (test)** Custom switch search list, sorted, can't add it myself. Test version
  - Add fruit shell search
  - Fix duckduckgo style

- version 4.1.1.17 2017-05-1

  - Add script icon
  - Baidu music style not centred [thanks for feedback](https://greasyfork.org/zh-CN/forum/discussion/22341/x)
  - Name changed from "searchEngineJump" to "searchEngineJump Search Engine Jump".

- version 4.1.1.16 2017-04-23

  - Fixed the problem of no style when searching from Baidu and Google homepage.

- version 4.1.1.15 2017-04-23

  - acfun style not centred [thanks for feedback](https://greasyfork.org/zh-CN/forum/discussion/22066/x)

- version 4.1.1.14 2017-04-21

  - Fix a problem with the search bar blocking associative words caused by the previous version.

- version 4.1.1.13 2017-04-20

  - Problem with Google search tool being obscured [Thanks for feedback](https://greasyfork.org/zh-CN/forum/di)
  - Problem with Google search tool being obscured [Feedback appreciated](https://greasyfork.org/zh-CN/forum/discussion/22006/x?locale=zh-CN)

- version 4.1.1.12 2017-04-09

  - Fixed an issue where changing the animation in the previous version caused the list to shift

- version 4.1.1.11 2017-04-07

  - Changed the exit animation to make it look smoother
  
- version: 4.1.1.10 2017-04-05

  - Google Translate changed hk to com
  - Baidu search changed to their own ajax request, no more forced page refresh.

- version: 4.1.1.9 2017-04-03

  - Fix b-site style, adjust search link
  - Style tweaks

- version: 4.1.1.8 2017-03-31

  - Fix flickr style
  - Fix Wikipedia can't get search term problem.
  - Baidu association search after style loss problem, although the style is no longer lost, but the mouse over the detailed search list is still not there, can be repaired, but too many places to pull, the future version to engage in, this version of the repair on the greater sense of the face of the project.
  - Icon fine-tuning: youtube, Netease cloud music, Wikipedia.

- version:4.1.1.7 2017-03-31

  - Can be used on some websites with Content Security Policy (CSP) enabled, Zhihu can be used, github still can't be used.

- version:4.1.1.6 2017-03-29

  - Add Pinterest, MDN search
  - Some icons are changed to 32x32, 16x16 jaggedness is too obvious, icon fine-tuning: Baidu

- version:4.1.1.5 2017-03-21

  - Unify icon 16x16 base64 encoding, write a tool for this [img2base64](http://iqingxin.cn/tool/)

- version:4.1.1.4 2017-03-20

  - Fix the problem of search keyword encoding in some web pages.
  - Fix the problem that the style overrides the Baidu search box
  - Change font colour to #333

- version:4.1.1.3 2017-03-20

  - Fix a problem with the search link of yingyue tai

- version:4.1.1.2 2017-03-10

  - Fixed Baidu's "Related Search" style missing.
  - Add GitHub search

- version:4.1.1.1 2017-03-06

  - Fixed the issue of Baidu search page, style lost after page flip.
  - Fix youtube page, left side is blocked.
  - Fix acfun style loss
  - There are still a lot of problems, take your time!

- version:4.1.1.0 2017-03-05.

  - Fixed the problem of missing style after using Baidu search.

- 2017-2-28: upload version:4.1.0.0
