const searchEngineJumpPlusEngines = {
  web: [
    {
      name: "Google",
      url: "https://www.google.com/search?q=%s&ie=utf-8&oe=utf-8",
      favicon:
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='48px' height='48px' viewBox='0 0 48 48' enable-background='new 0 0 48 48' xml:space='preserve'%3E%3Cpath fill='%23FFC107' d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3Cpath fill='%23FF3D00' d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'/%3E%3Cpath fill='%234CAF50' d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'/%3E%3Cpath fill='%231976D2' d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3C/svg%3E%0A",
      gbk: false,
    },
    {
      name: "bing",
      url: "https://www.bing.com/search?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jZ2Tv0sbYRyHX5Uzl8bLVNrSToUOHbr0T2gHqf1Baf8AvcUruNcpd5e75BK9H0Q9gptCogZKh6J2kWtDhkpxkmCwOIidijpYECoI5unQNo0QauwHnuUD78PL9/2+on9w0ItrWiSraiSNjER9w8NRTFUjuQvimhaJuKZ9ThaLJHyfGzMz3AxDRC6H7LooQYDi+50JApJhiJBVNVJ8nx7TZKhU4svhIYX1dW4XCsRsm4FstjOOg+K6fwXCMHiysMCfvKhUELp+OcHjcrkleL60hEil/l/wslKhxzAQuk6vaRLPZC5/g9dra5jVKvdnZ5FtG5FKIVkWSjeCB3NzvFpeBuD7yQnvd3YYW13lztQUsm1fLHhUKnE1n6e+v0973mxtIaXTJDKZLoY4Ps71yUneNhqt/uPuLrJlceUiwcP5ea5NTJCt1fh2fNzq321vI6XT/xacNZuUNzdpHBy0Dp41m1Tqde4Vi/RbVucZPG1bpPbU9vZ4triIlE7TZ5qdXyFmWdzyfYobG/w4PQXg69ERYysrKI6D0PXzu9Am+KAEAYrjELNthGEwVC5jVqvcDUOErv/6E45znlwOxfMQ8ujop2QYorguiueRcF16HQeRzSLl8wz87hXXPY/nkZye5icfi28JEi0cegAAAABJRU5ErkJggg==",
    },
    {
      name: "yahoo",
      url: "https://search.yahoo.com/search;?p=%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666872979419' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='13466' width='32' height='32'%3E%3Cpath d='M513.216 69.568C332.224 69.568 161.216 45.76 0 0v1024c161.408-45.824 332.416-69.632 513.216-69.632 178.816 0 349.376 23.232 510.784 69.632V0c-161.408 46.4-331.776 69.568-510.784 69.568z m283.584 87.424l-6.208 9.792c-5.824 9.216-11.008 17.024-18.176 28.032-9.6 14.4-27.584 43.008-49.216 79.808-6.016 10.176-13.376 22.4-20.992 35.584l-44.032 74.368-16.384 28.608-43.392 75.584c-14.592 25.792-28.992 51.2-43.392 76.416v25.408c0 35.2 0.768 73.6 1.984 107.776 0.576 15.616 1.216 43.392 1.984 72.768 0.768 35.008 1.6 71.232 2.624 89.6l0.192 5.632v0.576l-6.016-1.6-6.976-1.792a197.952 197.952 0 0 0-22.592-3.584 172.224 172.224 0 0 0-28.416 0 195.712 195.712 0 0 0-29.568 5.376l-6.016 1.6v-0.576l0.192-5.632c0.832-18.176 1.792-54.592 2.624-89.6 0.576-29.376 1.408-57.216 1.984-72.768a2721.92 2721.92 0 0 0 1.984-107.776v-25.408L425.6 488.768c-14.208-25.024-28.992-50.624-43.2-75.584-5.632-9.6-11.008-19.2-16.384-28.608-12.8-22.208-29.376-49.984-44.032-74.368a2038.784 2038.784 0 0 1-20.992-35.584 1986.112 1986.112 0 0 0-49.216-79.808c-7.168-11.008-12.416-18.816-18.176-28.032l-6.208-9.792 11.2 3.2c14.208 4.032 28.8 6.016 44.416 6.016s30.592-1.984 44.608-6.016l3.392-1.024 1.792 3.008c27.584 49.792 101.824 171.776 146.176 244.8 15.168 25.216 27.392 44.992 33.408 55.168v-0.192 0.192l33.408-55.168c44.416-72.832 118.592-194.816 146.176-244.8l1.792-3.008 3.392 1.024c14.016 4.032 28.992 6.016 44.608 6.016s30.208-1.984 44.416-6.016l10.624-3.2z' p-id='13467' fill='%234C07A2'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "Yandex",
      url: "https://yandex.com/search/?text=%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666872628734' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='10516' width='200' height='200'%3E%3Cpath d='M451 1024V691.8L229 96h111.6l163.6 459.4L692.4 0h102.6L553.6 695.6V1024h-102.6z' p-id='10517' fill='%23FC401D'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "DDG",
      url: "https://duckduckgo.com/?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADiElEQVQ4jXWTfVDTBRjHn+uyi8KAbWz7/TbeNzeUeNkLCljGS3hrspDUsC7vqivz5cI/OtQ7vSxNrpvdkQx0k10M5FYgztECgfOoM7kurs6IFx1ja7xsgMiLAySDffvDtLrs8/fz+T7PH8+X6BFIQymxOGb1WyWy8COH13LL9svCSgtEoTt4RMyj5h/CIRKfSImsMKu4NrOKZ6vZwDafz2Tbajaw9ur1wibzemHj+7Lwo0S06j9yYtgqRX0m216lFDS0FCR3Obcl3/FvFmJCFwt/0Rr0aOPGrVlsuymduVShEljDiCL+3hxCUbWZTLtBwfuqXyeZCThqsTTUj0BrPUZ2psGTE4mxQilmt8twLT/WVaUSXvgsjW8hoseJiOhYUuTpSqWw8YYmPjC6JQ5TtXqsLAYAAMu3fLj9eSk8eQw8OimmXpGjMzfWaU5nv94RvfodkoQ+se6cmm2+tDGqe1Ijxm+HXsd4IIi5+WUAQBDA6MRdePdq4c4Xw12wBlNFifginW0tTxN8Sa9Gh+02qlh7v0ayOJTNh8d4Ev7AMq4P+BAM3g/4rm8KvdVn4H6exWCOHMMaOTqzY1wGJXORDkg5H1ermZYRnQyubCEG9R/Av7CCsnOd+P3eCgCg68YCbnZ0YGyXCLf0AowfjML1PMm8UcHaqVTOO1WjFnWMFMjgyhWjZ48OC3/cPx9YRnD6POArAoZSsfT9k7jTEIHR/THoyZXerVYzLfReQvjRs0qRw7NFBmd+HH4pTMXk6Mhf/jTg4WDGRBjex4f33Th43ojHoEaG7nzJXKWSsdHLwmd2VSmE9h9flMwNaqT4NSca3mudeMCs4xDGj4fgdiUfc1YOJssF8OpkcGTF9FUomIvEIRIb0li7RSX+dqxAjt6NAgxYDA8Dpq116E+JhHdzPJxaKfpyZBjWymFQsPZPkvgWIiLancA9Up7C2K5sivd6XxCh98MS+JYmMDzvxqJ7AN2FctSVKtC9dS18LyWiXh3dZVKK257jPaV98IxPn0oWNpYlCera1cxN/55itLpt2H45A3uvbMObjiy89pMWP7ydioZk0dXyFNZWIuGW/asLoUR8fZLQenod325MlzsuXLVMHnMeRIXrLC67G4OHP8roPZ4hajI9y7YdSOB9+n+FfKw4KmLfSUlEbdPOvJ9dJv3sUnMTZmqM9yypsd+ckHLNm7ghW/8p/Alp3+8i87OHIgAAAABJRU5ErkJggg==",
    },
    {
      name: "Startpage",
      url: "https://www.startpage.com/sp/search$post$query",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA9ElEQVR4nO2WTUoDQRBGX5txIMRs/EFBAm49iEfxBN5J8AAeZwwkgmTR6e6ZHsNMDO2iFkEyibqQcVG1+aq74KvXteky9w8p0WMc9dlcARRAARRAARTgXwBk+z5jYyA/3p7zvDv/Ltp2N2/XoilBNj4Rw6sLuDyXwuRa9OxUdDz6ajoc/hwAYLUSrertnV2KmpT6XUiyvzBtGplxjPLksooA+FAB4HzZDdA0a2Ksmb2+4XzJYmFxPlBM51jr8aHCLgPOBQDqd5ntx2ZzECgbDPbWzOPTcyqmM5wvKV7mOw26zA8Z/jbMze2dLqUKoAAKoAC9xic+GmK9S0OJvAAAAABJRU5ErkJggg==",
    },
  ],
  video: [
    {
      name: "YouTube",
      url: "https://www.youtube.com/results?search_query=%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666872437167' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='8429' width='32' height='32'%3E%3Cpath d='M426.666667 682.666667V384l256 149.845333L426.666667 682.666667z m587.093333-355.541334s-10.026667-71.04-40.704-102.357333c-38.954667-41.088-82.602667-41.258667-102.613333-43.648C727.168 170.666667 512.213333 170.666667 512.213333 170.666667h-0.426666s-214.954667 0-358.229334 10.453333c-20.053333 2.389333-63.658667 2.56-102.656 43.648-30.677333 31.317333-40.661333 102.4-40.661333 102.4S0 410.538667 0 493.952v78.293333c0 83.456 10.24 166.912 10.24 166.912s9.984 71.04 40.661333 102.357334c38.997333 41.088 90.154667 39.765333 112.938667 44.074666C245.76 893.568 512 896 512 896s215.168-0.341333 358.442667-10.752c20.053333-2.432 63.658667-2.602667 102.613333-43.690667 30.72-31.317333 40.704-102.4 40.704-102.4s10.24-83.413333 10.24-166.869333v-78.250667c0-83.456-10.24-166.912-10.24-166.912z' fill='%23FF0000' p-id='8430'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "bilibili",
      url: "https://search.bilibili.com/all?keyword=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAwElEQVQ4ja2Syw2DQAxEhwvdIHEklENFUIIN5EAftGAjigA6cA58krBZaZMwki+7nqfR7gC7zCLQUKDRBD41moCGAmaRe9mOKUgMrAsayVyzZGBdQGJox9QFmEVgbT9CXs2k9/cEncUgKcEyrQsBs+6W6CwGSMpgozslQDKDxFBr7n28s2rNN8CMg/atDt8ZwNqDtXcM53MvwJfIu3d5glBdCZi3ht2Czfs3skwAa/VzkVirZ5WPJEEzg7Vaq/ynHh0yOLrBLqn3AAAAAElFTkSuQmCC",
    },
  ],
  music: [
    {
      name: "Spotify",
      url: "https://open.spotify.com/search/%s",
      favicon:
        "https://www.google.com/s2/favicons?domain=open.spotify.com",
    },
    {
      name: "YT Music",
      url: "https://music.youtube.com/search?q=%s",
      favicon:
        "https://www.google.com/s2/favicons?domain=music.youtube.com",
    },
    {
      name: "Soundcloud",
      url: "https://soundcloud.com/search?q=%s&ie=utf-8&oe=utf-8",
      favicon:
        "https://www.google.com/s2/favicons?domain=soundcloud.com",
    },
  ],
  image: [
    {
      name: "Pinterest",
      url: "https://www.pinterest.com/search/pins/?q=%s&rs=typed&term_meta",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACD0lEQVR4nO1WsW4UMRB9sxsECAmlpbrbRKwpKE4nk0i0/AQSogGlSInID/ABKegoEimioCC/kJYiySKCkE7aC8rtUdKgSClQyHlSBN95N/batyQVN5U9nnnvzazXNjCz/92oSVKWiPcAnlfcR3KQL16rgCwRHBKn1Ki7NPz+5coEhBJXTQ5yL350XeShubUKnQDMZ7Lo3zBdH4F4IRFntvC6TjgXsnb6B0Rz04CNcy3CXXluARWQW7fjmw97vVPXesSq0y0OvzpFUNySR70fVR7rHthPxK+qT5NnbbFhq1BRdGD6L1XMo6GNyyqAgHlzrsE+L6RPQHhpy9GWJWL8+7HCal2sU0DJmD9MhrRzMcCxHOTk+K4dPXg0zN+VxLXFrldAlqRb5lwW/WcAkLXSBxNfPj8OUPzKV8PYCEteAcz01Joc4a0dlN4EC7DCVvGA39ZIxje7ANy9UgEAts3Jbut+BwBk0V/7F6JgAbLIV8x5HEWTXQ1+7QM0N+Z+kp6UFhl7XgE20/83gdZNv+6Oywh0pySuyJeDBDDjp0vESMX3tG95eHgwyeFTs/rQSyz4KNYWchfsLYrHkcKnMtMURzFwUVEdietIzhLBl8gB2MiBBtex7sA074S6rtVuwmqiryvTknsFWADWnYENyIMEaCA5yIn+/h2+9is16oaQA02f5e10E0QvKu5Gz/KZzewcjEjYbJKZwQoAAAAASUVORK5CYII=",
      blank: true,
    },
    {
      name: "tumblr",
      url: "https://www.tumblr.com/search/%s",
      favicon:
        "https://www.google.com/s2/favicons?domain=www.tumblr.com",
    },
    {
      name: "flickr",
      url: "https://www.flickr.com/search/?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVQ4jWNgGAUIIKBqwKCfUMSgGZXJwCklhy6twSCoW8BpUZTFaZIjz8CviCprXtbFkHX3PxynXPrGoBIQC5Ou57Fv/C/Z+B+Gf4jV/szgMs6EyMq7BqJoRjaEQ1zRmUXRFVkzsiEaDIK6DAwuE1ZgNSDr7n8Gvbj8Wfy+c7AZ8F+y8X8tl30dA4PrlNU4DdBPKFrCH7QUlwGNPE4tDAzqoclYNaff+MMgoGoQwaYdhcsAGxY5G0g4eExZh2GAUVY1LBCX8wevQNfcyevShRoTim4hDHZNMxls6yczSJjao0ejP5ta4Axe35mT+DwnO7MoupKfXoYfAABPvsL2GuU3QwAAAABJRU5ErkJggg==",
      blank: true,
    },
    {
      name: "pixiv",
      url: "https://www.pixiv.net/search.php?word=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACaElEQVQ4jY2TS0iUYRSGjwupXYsIAqFdDl13tclNd6WgZVQULZrB6ddsbhA1FwkyNQOjCMz805nxMiM6ajq/OkjZxQElLS0sK6NQI7QkCCrTnhbfmBMatXj54PDxfO97zvlERERM245IlqbLXut/StNlj7VM0kzbRdZlHBVfJ+LtQDzGgtwGci6KuKN/1ueVH0Nc9bMi+3KD4u1AnGHEHkK0IHIyiNhDLD/TQIozrGpaEHGE1D1nGHGGEF8nIpnZt8QdRaxBUh0hDvl70HtHaR4ao/XZBLHn72kcHONwoAc5XYucqkFcCYjHQGSHRRdXC8eCcQbHp3kwOsnxQBxTQRurPBHSL7Ria3jE568zdL/6wGp3REHmASv3a3rkxRTfZ+cAWHsxipyoVK/Z69RpriK9oI0fcz/pH/vEMkdIxfUYSHlFhd40Mo29aQCATZc6kNyapKxhZdlchaPlMQCW+j7EGkg0s+SqnlZ8F0u4D4DNJUsAnGEkt4b1RQYAxvAEolWrCaVmaXqKsxlngv5XQF4taedvA9D39iOSV6sAssuiiy2C618ArZqtpTEA6p+8U2N1RxHZa9XF3vQbsKG4fTHAFkLMVfj73gCQVd6tIniMxYAtpTE1BWtAKduP5FTjbR8C4Nr9l0hOddIeJAD2ZjWFh6OTlPe8xmcMYWse4HLXMIPj00x9+YYt0q/c2euSAJnZlckOdl6/w4GybrztT7lyb4TCrmEO+uOsONuoHCWvswJoleJsxZFwYCoyEHPVQgRrQOW11S1ubH4MkTUbd4tWM1MYnwAg42Yv4mpZ+gcmyxdDrDcmfgF4QGAxnLBCrgAAAABJRU5ErkJggg==",
      blank: true,
    },
    {
      name: "Google",
      url: "https://www.google.com/search?q=%s&tbm=isch",
      favicon:
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='48px' height='48px' viewBox='0 0 48 48' enable-background='new 0 0 48 48' xml:space='preserve'%3E%3Cpath fill='%23FFC107' d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3Cpath fill='%23FF3D00' d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'/%3E%3Cpath fill='%234CAF50' d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'/%3E%3Cpath fill='%231976D2' d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3C/svg%3E%0A",
    },
    {
      name: "Bing",
      url: "https://www.bing.com/images/search?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jZ2Tv0sbYRyHX5Uzl8bLVNrSToUOHbr0T2gHqf1Baf8AvcUruNcpd5e75BK9H0Q9gptCogZKh6J2kWtDhkpxkmCwOIidijpYECoI5unQNo0QauwHnuUD78PL9/2+on9w0ItrWiSraiSNjER9w8NRTFUjuQvimhaJuKZ9ThaLJHyfGzMz3AxDRC6H7LooQYDi+50JApJhiJBVNVJ8nx7TZKhU4svhIYX1dW4XCsRsm4FstjOOg+K6fwXCMHiysMCfvKhUELp+OcHjcrkleL60hEil/l/wslKhxzAQuk6vaRLPZC5/g9dra5jVKvdnZ5FtG5FKIVkWSjeCB3NzvFpeBuD7yQnvd3YYW13lztQUsm1fLHhUKnE1n6e+v0973mxtIaXTJDKZLoY4Ps71yUneNhqt/uPuLrJlceUiwcP5ea5NTJCt1fh2fNzq321vI6XT/xacNZuUNzdpHBy0Dp41m1Tqde4Vi/RbVucZPG1bpPbU9vZ4triIlE7TZ5qdXyFmWdzyfYobG/w4PQXg69ERYysrKI6D0PXzu9Am+KAEAYrjELNthGEwVC5jVqvcDUOErv/6E45znlwOxfMQ8ujop2QYorguiueRcF16HQeRzSLl8wz87hXXPY/nkZye5icfi28JEi0cegAAAABJRU5ErkJggg==",
    },
    {
      name: "Yandex",
      url: "https://yandex.com/images/search?from=tabbar&text=%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666872628734' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='10516' width='200' height='200'%3E%3Cpath d='M451 1024V691.8L229 96h111.6l163.6 459.4L692.4 0h102.6L553.6 695.6V1024h-102.6z' p-id='10517' fill='%23FC401D'%3E%3C/path%3E%3C/svg%3E",
      blank: true,
    },
  ],
  download: [
    {
      name: "You",
      url: "Hi",
      favicon:
        "",
    },
    {
      name: "Can",
      blank: true,
      url: "Technoblade never dies",
      favicon:
        "",
    },
    {
      name: "Edit",
      url: "Are you having a good time?",
      favicon:
        "",
    },
    {
      name: "These",
      url: "Fun fact: I don't know how to code.",
      favicon:
        "",
    },
    {
      name: "Shhhh!",
      url: "PlD",
      favicon:
        "",
    },
  ],
  shopping: [
    {
      name: "Amazon",
      url: "https://www.amazon.com/s?k=%s",
      favicon:
        "https://www.google.com/s2/favicons?domain=www.amazon.com",
    },
    {
      name: "Walmart",
      url: "https://www.walmart.com/search?q=%s",
      favicon:
        "https://www.google.com/s2/favicons?domain=www.walmart.com",
    },
    {
      name: "Wish",
      url: "https://www.wish.com/search/%s",
      favicon:
        "https://www.google.com/s2/favicons?domain=www.wish.com",
    },
    {
      name: "New Egg",
      url: "https://www.newegg.com/p/pl?d=%s",
      favicon:
        "https://www.google.com/s2/favicons?domain=www.newegg.com",
    },
  ],
  translate: [
    {
      name: "Google Tranlator",
      url: "https://translate.google.com/?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC/UlEQVQ4jYWTT0ybdRyH34MH4wVjovG2ZIl60IMXNTgoDtlG/wAy49bt4r+8XSFm2SZGox6WWNnal45SbKAbygKbShAT38yMNC9LMGyQsS5OdGtpOwqNvNkLLbwv76+KJns8lES9jG/yXJ98kidf6bGn6vY42tWEo/2SVutXtZotHEcT2o5q33vSdlfbpk68OQSH4uCNw8F+ONAPhwbhlQ9mbkuS9NADBY72S1e8cXg9ItgfEbR2bxH5k5aw+PuRJ5994YGCGr+qeePQ2i1whQRuReAMCZq6BC0992k6+nVCfuetE7J8pEOW5Q6fz/e+LMsdbW1tH7pcrgNSjV/V3uiD5rAgNr7BzB2TyzdM3u63aThVxjcgSGcKCNvCtm0sy8I0TWzbZm1tDellv6o1RSE2bpGcX+fjbzcIjG1w+AvBvqDApQhGxlMsZNOsrhgY9+6h6zq6rmNZFlL1EVVr7oXrKZOOCzbeXpvLSZPxpIl81sYR+IPPLi6RufMr0aERpm/ewiwV0fXlyoJqn6p5eiBx02RgwmJfUBBSLQr6Ov4vbeo7NzkYXiZ6foxPzvQRHvyGyPAo/SM/kM0vVQTNUfCds5lNrzM5ZzKT+lfmCpVxKwLl/E9cvXaNxORVOuNDpLM5VovFimB/DPaeFnh7BSe/2+D4sE1jsFLDrQj2hjY53jdHOP4VysAFrkxNoy//TqlUQnrRp2qtMfB0CRqDgvrPBQ2dW0lDNq5QpYbcV+IjJc6xUz2kUmmWFhcxDAOp2p+YqgjKeLrKuJXKZNcWzpCNMyioD6wTvTjFqPojp88NM/fbbVYMA+kZd6C7JQaeHvBEwNN9H/d/cHZt0qiUcXT+RXB0maVcmu/HNSanr7OyYiBJkvTwozt27a7aufvVqp21/+Pxp+uddd6xhYZ3b7Dr8BRnBn8ml02zcDdHLpdF13W2fbbnX2o/W/faBJ8GJpi79QvpdIr5+XkymQzF4ur2gqonnttzUkmSSmXJ5++Szy9SKBQwDIPZ2eTaP/p6Y/2tPjpQAAAAAElFTkSuQmCC",
    },
    {
      name: "DeepL",
      url: "https://www.deepl.com/translator#zh/en/%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACNwAAAjcB9wZEwgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGZSURBVDiNjZKxaxRBFMZ/b2ZHbWITUxkRC4PnBUW0k1gkoFlMYmIR8R+w0UZBFAvtLAMS0ipC0guCd0GOa23EJGTPkBRCSCNHKiEgMzvPwmjCuiv3lft97zff7BuhQraWTouJLwE0mmf518a7spwUPxwZvlmLms8B4wWrLZhHPvuwUg44N9afGPcc4T5gK4pFgSUv/jHrre8HgKHJE4nzHWBgn/sZdBuYqQB1Q+5rbLR2DUBy1J89GIbEmNmQNW8DqxWAgcS5IQBT5vqYP3H1Gw9AHyosAKECVA4QuKfIPMhHVKygV4OVU8ByT4BDsiI6rWpusdbYUdgpBpLSMeGTRLYx2o5q9kT0ja2P3xU401ODQJz1neYdVRkT9C1gyob/Ngg/3VbifJf9TVg1L2Q43UC1eo3eb8KfB7O7uRf7T782Yo8hXBG4DFwvaRgFFoP4GTqt7u/bFuTOp5dU9BUw8u/BOhqy5fZ//4HvNL6ErHlNkSmFb4e9YM1WMV+5xjxrvM+P99VBngI/qnK96UI66OrpEhcnThatXx/tiqJJdDA6AAAAAElFTkSuQmCC",
    },
    {
      name: "Bing Translator",
      url: "https://www.bing.com/translator/?text=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jZ2Tv0sbYRyHX5Uzl8bLVNrSToUOHbr0T2gHqf1Baf8AvcUruNcpd5e75BK9H0Q9gptCogZKh6J2kWtDhkpxkmCwOIidijpYECoI5unQNo0QauwHnuUD78PL9/2+on9w0ItrWiSraiSNjER9w8NRTFUjuQvimhaJuKZ9ThaLJHyfGzMz3AxDRC6H7LooQYDi+50JApJhiJBVNVJ8nx7TZKhU4svhIYX1dW4XCsRsm4FstjOOg+K6fwXCMHiysMCfvKhUELp+OcHjcrkleL60hEil/l/wslKhxzAQuk6vaRLPZC5/g9dra5jVKvdnZ5FtG5FKIVkWSjeCB3NzvFpeBuD7yQnvd3YYW13lztQUsm1fLHhUKnE1n6e+v0973mxtIaXTJDKZLoY4Ps71yUneNhqt/uPuLrJlceUiwcP5ea5NTJCt1fh2fNzq321vI6XT/xacNZuUNzdpHBy0Dp41m1Tqde4Vi/RbVucZPG1bpPbU9vZ4triIlE7TZ5qdXyFmWdzyfYobG/w4PQXg69ERYysrKI6D0PXzu9Am+KAEAYrjELNthGEwVC5jVqvcDUOErv/6E45znlwOxfMQ8ujop2QYorguiueRcF16HQeRzSLl8wz87hXXPY/nkZye5icfi28JEi0cegAAAABJRU5ErkJggg==",
    },
  ],
  knowledge: [
    {
      name: "Wiki",
      url: "https://wikipedia.org/wiki/%s",
      favicon:
        "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACKklEQVR4nM2Xva3yMBSG3xPdBai8Ah0WS1iUiCYbeINITBAWyApImSAjuKOgSUYwFRv43ILryCR2IN8VN58lGr/E5zm/TgiR5Zzj2P5vV5ZlNNzrNz5l9BVMtoTx0Gb214aHa3EAWiL84Vo8AosDfAHAbrfD7XaDEAKr1aoXu64DAFwuF2y326R+PB5RluWTfr/fsdlscDqdRs92XYf1eo3z+fxoB/8rioIBMBExEbG1lkO9rmsWQvR6qDnnWErJRMRVVY20siyZiFgp9bT/BGCt5TzPkwZCSAAjzT87BA/h27ZNA3gIb6BpmiiEBxx6CoDruh7931rLSik2xoy0EYBzjoUQDICllFEAKSUDYCFE760xhpVSUe+bpolGLAlQVVXv5TBnzjlu27aHFEKwMSaZMh+xPM/fB7DW9l6myLXWPWSe5yyEmASIpSYJ4L1MdUOYcyKKFlcYzVhXvAQIi01rPamHtRCrp5T2EsD3NRFxWZaTaYgVrFJqMjUvAZqmYSJKdoQ3npobAJLRewvA5zBWjMaY/nCvh1Fq2zZZ+bMAvKfDIRP2fJgGX4xa62RhzgYY9rxS6iklfg54CD/33zn7LYBw/vvDw2hYa0cFmZqi/wQwvKRid0R4h0gpJ1tvNsAwzFO1krqOfw3g3KPai6JI6v4OmXPm15zXp6IosN/vk/rhcMD1ep1z5OPL6Me7P19ZltHiL6X/B0Dsq/Xjhn9sRg1/qiZijn4DhUA2yPD/DEEAAAAASUVORK5CYII=",
    },
    {
      name: "Quora",
      url: "https://www.quora.com/search?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADQUlEQVR4nO2WXYhUZRjHf8+ZzS0Jw9oUtMSa2V0TI1MJwqiETSzNWnFnxkzpoi5CSqKLCIwGL2Shqz4uFvoAtZCZYEet9GI1Ay+EDRQ1ktWZvNiIVNA+2V3dc/5eNDvunPPOeLS9Uv9X5zw8z/P/vec9vM8Lt3Szy+Im7kkx5W+PTnyWCRYYTBc0A2cMymb0kaCYHmBgQgEKj3OHzvGOxJvA1Ks0k6A4yWPTqlOc+N8AhRRzJfKCedUC4yjGF+bxEz5DwMxALDfjZYmmStMhYGOmzKfXDVBIMVdwUOLuarLHxzaft9Jf40fykywMoI9xX8kz3k2X6L5mgN453HNplKMSM8eFD2ZKPGWGGkCvDMSuGgOPlzKn2FGvxnMFL15iS8gcS7C5kTlAusRujCM1QfHhtw/X/3ciAMUUSYPXQuEL9ggHGplXQY1ijb+4959h3o4NcBEyim7NYde+OwECfowExZrYAIhnHXnlOOYVlRw9Hyy00x4PAGaFAwZ/xLY3/nSF5TM7HoAxPVJsDMf1b064c6VoXzeAOB9lojkuwIiY4oqbcSYegDHogLorLgDelYNrvG5r4rQr3hT14nvgsRBUcuwx38ZzCnjFoBW4U/ALRq/Xwrb0IYYsYFrExRjszFIi5+INEyWip5bgUeXwdrUzA5/diC6J+RIpxFICenSW/uIcZgcBixwmn1mOwPUFIgCrBzgG9IYIWgpf8cQLA/wmjw0Y3Ubt2BXMGxllD2JpzeKNc02T6XGZQ51ZsDPJ/SNwXFzZe4N9mTLPjL0feJrbz/7KdonVDZrLS7C86yR76+U4Z8GLZQa9BM9XxioAgo58im7l/qtZ8gPD0+5jHXCsjrlvxoZG5pW8+sq38qTEDsSMaoHRr8p9wIy/NMoKiS2Oxp2ZMjurC8jh8T4KD7Sr3oi+aaPlX58Pxl84Ysn4PFviVYB8Gx3y6QP2Z8t0XBPAmArtPCCf9cAyYIHEpEqD34GfMRZLtQeWwXdm9AewHpE0+ChTZuN1AYQ1NuNXHOcCQL6V9xSwuWGRsTBb4vCEAIRV6CKhI2yVWFvH/JNsiTei4QmUcnj5L1lj4nWMhxAJjBN49GROsnUivW7pxtFlNM8U1KJDSwUAAAAASUVORK5CYII=",
    },
    {
      name: "S.O.",
      url: "https://stackoverflow.com/search?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACRklEQVR4nM3XXWjPURzH8dcfUVsekjuhZVa0mI3kIeUhzcMFkvJ0sSgXLpCSkljZhRQXKLlAUliJkodSyhXSPJQ8jF14KuXG04rR/i7Omf2a/2y/bf/9fet0zu90Ht7nez7fc84vk81mFdIGFHR2DOqqQXPthLxMXLz3Jf4DD/Q1wDTcRXkhAIbjJmbgEkb0N8BnbEIWpTiHgfkGGIhJie+L2B/L1ajLN8ARPMDmRN0+XI3lnVidL4BxWIEhOI4zKEIr1uEFMjiFyfkAeI2puB2/N+AeygQ9LI95ES5jVF8DwAcsxAFBfOW4j1V4HqGyKNGJKHsCsBbLEn1/YRdW4hOGoR6HcEPQhAh6sLcAw3EUV9CIbbGO4ObpeCTs/XbcwknhXPgmeKVXAKPxJJbH4zDeRqgyvMJMnI5t5qBBEGkFTvQW4CnmoipO8gNDsUVY3XXMw8aYvqMl9mvKNWBPRfgANRiDPXgvuL0a1/BMUP8iLMa7zgZKA7BEiO+J2tX8UTj5SrBGuIgI23EEs7VvWU7r8j2QsB2YH8vNeIyHgjceCsfweeFG3IoFONbVoGkAfuKLEGbFmBVTm7UIq23AHdTia48ATp2t/1NOHOTVwpaVCidgZcyrMBKDY11lbL9UiIr0ANHaXquZRF2rEP+NuJCoHxtBKmI+RdRD/fi6LKxu2p0cp1sAaexNTJfSdkwDkPb9nnPFHa3gj9I0HujWitJawT2QyfVrFsOwr//ZMjXr/36dFdwD/9JAXva8oxXcAzk10J/2Gw08e05AgXJ5AAAAAElFTkSuQmCC",
    },
  ],
  sociality: [
    {
      name: "Twitter",
      url: "https://twitter.com/search/%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVQ4jWNgGEyAH5e4bXhCgX1ibqOVb2gCklpU9ealvRuRFMCBau3cCwxTzvxnmHbhP8PEk//1yyfvl6xb9sDGLywJRaFh/+ZTDBNP/rfOrZ8PM11VW9uAYcnj/wxr3iHwwvv/eZfc/mxkZeeEYoBvdnkdw5p3/xnm3PjP37TunXVu/XyH3LopKJqhODCrtIKBgYEHxQCDliVH4YpWvvrPMOfGf4aZVzA0M6x595+Xl1cEI6RcfIPDeFc8/oxNAzLWWHjuNq5Y4PFvmT6fkCH++dWNuAxgcPAJCteYc+Y2PttFRUUlcBrAwMDA7x4UEWUzbcchbJotbW3tcWq0zq2fz1+38h1D597/DPNvo2h2nrBmG1QzMy4DmNXU1DR8I2IT/FtnLYThkPKWTs+g0HA1NTUNfJqRAY+kpKQ8DEP9y06MxoEDAKUW4Kpi1NnUAAAAAElFTkSuQmCC",
    },
    {
      name: "Reddit",
      url: "https://www.reddit.com/search/?q=%s",
      favicon:
        "https://www.google.com/s2/favicons?domain=www.reddit.com",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/search/results.php?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVQ4jWNgoAbQtE48bOXX9J8UrGmdeBhugEvs7P8eSYtJwi6xs//DDcCnMCx31f9j5x79//X7z//3H7//v3H3NVyOKAP2n7j3Hx2QZMDXbz///////39+3RK4/0kyAAZcYmdhyOE1ABd4/PwjZQYsWXecOANg/oUBGN8hYhJ5YYBNbjgZYOJRdZhUA8w9a48QmVfxAwATIfnUl6gLIAAAAABJRU5ErkJggg==",
    },
  ],
  news: [
    {
      name: "Google news",
      url: "https://news.google.com/search?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAERElEQVR4nO2WTWhcVRTHf/e++crko/kyX201jQitIOnGhcWqUBWLSGgRVNCVFqouXFQFa0XQXRRcWBpBURRBo9JWcZGWghhqbVOK1I8uLEksmKS2yTRt5iszc+9x8Wbmzbx5mca1OfB4vHvOPf//+bjnPliT/7uoesq7v9k3o6JOn1gBBAFE3HfpG+C6FZqR8krJRhSQK8z+8eSh9SthhOoRWLTZPklaRDxIEWFagIxlZF2KRzov09/4A/suPc3ocqSCZJGOVn31MOoS8Ms8ihsGDug0j982z2DLONgomFaeWfc3o1cG/ou7mxMoiDBt4VYD77Utsrt7HEwWpAEQsC24YQpbW39h7KtOpjbGGFrvgAY0dOu6Va5PYNpqRlqW2Nt7EgoLUGgE4lCufkkEbIT471e5f0a41tzCdE+M4YE4X0bzdQnU0JOLjw2xcG6U8GyUXN29NTwWTvejvu+CmHF1YsFaQloRijeTibf/5LS2j7cd/GR/IAGZGJwnfK3j6o3nQMxN0GsJ5JcUS0ciqGil3jWyOPRcOoLWYfJNzbO6oWGs/dPDzyoAObNRMDlAg55j18+p4PMpHqb4vyVoTco6C4weayIf2YYCxJortxw/060BMOnzKO2F5C/xKsBXmSRA0IBY+ytuyKC2LWzF2LwXRjGiygfvqQSvQvBFX0m4nFFRCNB14uxDZQKu5E+txFoAI7BcAGurwQVIG0gZ9502kCoIaQNWqEmqIFhjpkouysdQ3Zt4QE51SSn6kiwsw+ieGH2dHtc9IxlmkkJIw+UsTLweJ0iOTeR443iejoiXSRB0InGgZKOrdjgeWwESOXjqLqcKHODN3Q5zy6XuriMV5VRAQUCh6Dh38YuaDABQyP9FiP5SBj54IsKdm0K8+tF1TvwTptGBRB56ItARUYhAbxQ2v5UGwIigcMuFQJMDMe1xSRpoU9Xnq5qAXR5Ds7dksqXfVR+dDbO5EXYMaArWS93YpCVn4cOhMMbW9rtSiqWMcHDcnYY5Acd3vqsIqO3p5+VH7rHCoOvAXe9wwFh4aVesavPHb6cIA9sHwzXgJRER3h/Pg0DaQiHvNXttBgDyfA0ugflFQ2erw+m0sDOiUK8kQMAMt6G1IqagKwrq5UQRzY8OhBQPt0fKRzGZyZysCjqI9aPvpATg+HXL1IthNvREsRYmZwy3b3DQCs7/meW1bw2JHHz3QgMmYHIfPZXj898MjcXmfvdw09zgWar+D3TttuIQEeHBFsV9h5ZdQw13bHTBL0xm2PGZe1NlDXS1aXo7a5+BHk2m4PkNpznvxwrMwM7hZFUys8bt/qRxO7uveNmUjC6kBFsxBU1RuSmqaAp50/PE/qYavOD/AV8tY7oa1F/qLXHPb8UFGDyuV0Ogjr2r9xn4gfyXVD1/qyewghf/vbCi+Qr7AwkowogED1kJ+JCKhaASiIBSgf2+JmvCvyV4A+6kXQlFAAAAAElFTkSuQmCC",
      blank: true,
    },
    {
      name: "Bing news",
      url: "https://www.bing.com/news/search?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jZ2Tv0sbYRyHX5Uzl8bLVNrSToUOHbr0T2gHqf1Baf8AvcUruNcpd5e75BK9H0Q9gptCogZKh6J2kWtDhkpxkmCwOIidijpYECoI5unQNo0QauwHnuUD78PL9/2+on9w0ItrWiSraiSNjER9w8NRTFUjuQvimhaJuKZ9ThaLJHyfGzMz3AxDRC6H7LooQYDi+50JApJhiJBVNVJ8nx7TZKhU4svhIYX1dW4XCsRsm4FstjOOg+K6fwXCMHiysMCfvKhUELp+OcHjcrkleL60hEil/l/wslKhxzAQuk6vaRLPZC5/g9dra5jVKvdnZ5FtG5FKIVkWSjeCB3NzvFpeBuD7yQnvd3YYW13lztQUsm1fLHhUKnE1n6e+v0973mxtIaXTJDKZLoY4Ps71yUneNhqt/uPuLrJlceUiwcP5ea5NTJCt1fh2fNzq321vI6XT/xacNZuUNzdpHBy0Dp41m1Tqde4Vi/RbVucZPG1bpPbU9vZ4triIlE7TZ5qdXyFmWdzyfYobG/w4PQXg69ERYysrKI6D0PXzu9Am+KAEAYrjELNthGEwVC5jVqvcDUOErv/6E45znlwOxfMQ8ujop2QYorguiueRcF16HQeRzSLl8wz87hXXPY/nkZye5icfi28JEi0cegAAAABJRU5ErkJggg==",
      blank: true,
    },
    {
      name: "CNN",
      url: "https://edition.cnn.com/search/?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAF/ElEQVR4nI2XXWxURRTHf3Pv3W2loC2flggFET8KSRURo2h8MFFj+AokoAYffIIHHwwESRRfxAcxkVoSTMQnQsAYJaAPopbU2qqhCAJaTW1pawWjtNqy61J7d/fe48Pe2T17WdBJJmfuzNwz5/zPmZn/mPdBDOAAbiQ99W0iSdQ2qi1K6hpGMojJfDRmxx3Aswr1Arpao2y18+LFLky0kO63Y/b/UPV7ttOpUF3KkXCUjC+uFVfqM6pPO+Jp5YmonaA8FFbGDdBKoRzykBLkJuqzBqG+PavQKtde63YcCVt0DujixDzXxtp1QouAVW49TypENDIe5aGwxSq2nlvlJoaANsT2e9eLeyUEKiWjKOXxBa1RUA5/cRfoxdzIy4RCRCOjcyFuABRibrdbQOV8MWos0AhU2nLaMGvA9UJgvdRoWI9dhYaj/vvfCNgxbXA8BEHMOwuz9hwlhWgX2Kq9D1yXsQce4JIIbk0N9Pdzf38/f86aRV9TE9POn2fxwECZ171PPMGwMdzd2oqbzxMAeWPoe+wxvD/+YLy+Huerr5iZyZQOrjaQTpBvQE6DfOt58s/YmIiIDH39tZx9913pOXBAPluxQn565x0REbnY0SEiIicefVQmQDIg327fLn4mI0Pt7SIi8sX69XIBpMfzRETk+5YWERE5sHixdIK0g7SCOPpsDx2H7PPPU11bS8/hw/z28cekLl4k/ddf5EZGmLl8OUE2y+9vv83gkSMsbGnh99pafGOYtHQpQ4cOcXHfPgDu3b27PGFNKWv0mo6O6Yy2Nh5sbqZz2zbmP/44TS+8wPTZs0kPDmJ8n6obbuDv4WEa33wT47pMXbSIm/v7uUmkYNiZM9yzezentm6luq6O3jvvpCoI0CUebk8PNDzyCJcvXGDx5s1UTZ5M5y23sCCVot4mYjJJYAz58XHmrVrFL0ePMm/NGkaMIZtKYYBcOo1TU0PvwYM0vP46oxs2MBeuMsKW4qmaTyYB+GH/fuoWLOD4unUsTKWKO8AA6XS6kL1BgIgwPjTE9zt3Yk6eZO5DDxUSMgxZ8uqrOK7L/NWruW1wEBEpC4EupWPdKTTHR0cBqB4ZuWqyMQaMQYIAI8KCjc8SXrrE9KVLmdHYSGQBhCG3rl3L4LFPmFxfT5jLFfqvZ4Dj+wA0LFsGQN2WLVeTjMhzz/W4fP48E2OjNLW00LtvH4hAEOC6Lu3rNzDc3c3Y2XOcbW6GiQlQuaAPLqd4jotAkGf2svsY6+lh0Zo19E2bxpVEgpzjEBiDl0xiRDAI7qRJ9Lz2GsZ1yZw+zVh3d8HLIEC+bOfHl16m8bnnyPT24iYSSGSASPm96VmKFAIfNi5i3ZmznHnrLX76dYj7z52jauasEmsYv8LwwAAmDJlUV8c9+/fT2dfHg0c/onvnTggF8X3yNTUs6eygesoUlr+xi+6DB0lWVxcNCCmdmp5mMPN7ezn2zNM8eeg9fv7wA77b9QZVN07B9ycwGBzXJZ9KseyVV5BcnhBYeOIE7vRpzH3qKbr37KG6thZclxA419xM07YXGe7oBMfhdgRct5w7tIK0gXSAdIGcAvm0vl6Ob9okksmIXLkiks0Vai4v4vsy2nVC2hsaJA2SBml7+GHJDQ+L+FmRrC+DIBdABkCO3nWXiO+L+Fnp3LFDWo2RdpDjIJ+BmM9BPApbLUnhYEgWAGdgzhyq6meTqK4q3pZeIkGiq4uFmUzxig2AnjlzyK5ciZw6xR0nTxIAuWhscONGmDoVs3cvU4IAP+rPA+YYiL0JqygxImuIZkbX4wNx+q0NyF5DFnNA0yciaS20XEAzWn0daz4YqH91O4xVvb29QCnIUTr14vTpvzihdUQvmlPSOmSrnePZhTRh0BDHmfB/kVIbAs0HtdSGCrFz4FrKAirTck21tWJb80oGFSTWAE2VteJKsY4bAOUhiL8J4zmh5wng5WNKbcI5lAikRSDOBW1bo6ehzleQofoWol0Qhz0OLcqYa72M7Jx4KCqFRr8hi4QkfvM5sYn60RF/nMZ1xJ/lcei18f8CXzwtfnAJiVYAAAAASUVORK5CYII=",
      blank: true,
    },
    {
      name: "BBC",
      url: "https://www.bbc.co.uk/search?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAq0lEQVR4nO2USwrDMAwFn0vvZR1NvtnzydRN06iNf4FAoGg2NmIUy4oSIAiCILiZ5Pa26F/qPX4jJEESqjrMXPUAQFW7/qEDZoZSCkQEAD6r8095JOFXEfFuahaQ3mG/bxUw8/yhHdKzFd0Sa629xCUv54xSyvAZhxkA9jZt763HzJtdoFvAVZCEiHwN3mhoDYB5SNoWx/5ZnfJU1Uj23Pv/AwtOEARB8Oe8AEX8nWWaRvY7AAAAAElFTkSuQmCC",
      blank: true,
    },
    {
      name: "Economist",
      url: "https://www.economist.com/search?q=%s",
      favicon:
        "data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAALEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//w==",
      blank: true,
    },
  ],
  mine: [
    {
      name: "Can I Use",
      url: "https://caniuse.com/#search=%s",
      blank: true,
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAADAFBMVEXRa1hIvVUBriaErG7//vzQx7e116nq4M2Dy4FmYktwx3Tt48/y6NQXsTH+7uK2fGBhwmhoxW7Wg3HEMxe8EAD78Nqn0plRvluZ0ZLKQizNs6qupZZ0zX/9/+3669vM5cUxt0QlszpQqV6HhoPP3L1YwWKYooEQujB9ynxWUTgly0Tp38yhlIhAkEAldSRdOC706tbw5dL/8ezInXD169iK1JO7u6n+9ODAJQSY2J+Wrc+z4bLluKpnkcWbyYz/++CMzYcAqQz25dd90Yn90/ll020qwEPk28j5/OjhueEstkDfoo7k2NP+68n/5+CmSj3i2MX85dI6ukzx+ufhqp7+8/r39er29uP77NU0kjgvvEQ4LBc8nEFOzVqQvY0evzvN+f/m+drt8uHpxbnb5s7s7dpwomfb0cA3p0Ti7tfB473n3bzc7dDe3szr//9SZH0Avij37tng1ssttT7dk4Xf4t6U4ZOm3Kh81ntaelrv6Os/WC6I3Ik+iDvuzr/z2M6AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7////XnzsNAAAAmklEQVR4nF3KQQuCMADF8U2EQT1hklJCQSIhbIdCCtepRodgpxB26eKxj+ChL99mhOm7/OHHI8AdD+AFeZzXRXEhTLKKSuZyYD49xFM4T+E0hpttprAeQ2x5YAZYJEsb6KgHHweN3f6DSnL/iLTa/B5lWOq21SpMdZum5Cn4nguTi+ydCWMEAVZVR/mOAqAd8AWgBz8H12qGYR9XXh8E2WsxgQAAAABJRU5ErkJggg==",
    },
    {
      name: "GitHub",
      url: "https://github.com/search?utf8=✓&q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADLElEQVR4nM1Xz2sTQRT+dpNScqhJW7ZJ9mx706RJ0/SHbRHR/8Cz9ORBBBEUEfwjBJVePHhQFPUiIi09SNqkSbtJU70p6dH+IOChQmpNss9Ddqezu7NJmgT0LQPZN/O+75s3bzI7wD826QxjPURUawtUktrGbWfggK7rR3bnxWjc8v51p+AIlGVZBkAdC9B1nQXbCZuZXYwsy648bh1yvV6vA8D9Bw+xvLLSNrlFSPFUiMfjEXKJnJ5arVYDgMj4REfEdvtSzAMAvF6vg8/hqFWrBACRWKIn5EzEttYQ0ddn4bS8VE3yHs3cIaKYR6VSOfD7/WHTJ3P9YSJykCuKgp1tDTvGDNoxt/FEBJ/PF+J9LAMnJycEAFFb6s9CbDc7Fo/X398vAYDX8A+ACJH4pBOFmm7jpiaMtOHJAPD7+PiIiBqdthaJJUBEHbVmeKqqjjEBLMhQzbdifrNjAcX8phCTiLBbKn1jS0BEGJ9IOrJlkndlgngeUwbQ11AsylhnM+fbtpZzxTUF+BrpFzw9ECDCXrhyjQlgSyAq2a7TDyC1tu7AHvT7LQKO+ZT0WsCdu/ccvvdvX1uWoEq6LlyC8cQUSNe7a6LH6DMFgIhQyGUE+6W7QoxNzjTFtAhwK8RYcqYj8pu3botnbxR3YGjoPBMwODx8jhWi0fLZNPsdT84inpxti/jxk2eIJ2ehaQXh7PPZtDn7XYA7jH6WywQA8alLrFgKuTSm5y7jT7VqKaJCLi0sOD7WzczYIUWRWAYMh0oAVpc/WgA31j87QIR/ry2pgXwuDeLIgdPTEAD2iQgBbo8CjfrQsutWAS7bs9m2fffmJYgINxYXr/N+xydZ+fCQACAxPcd8dgFuxsfYzcRQgkH3TzLDPOWDgxoATMzMOzpfvXiOsdFRIYlo/OqnDxgMBBrkoZCDT7Y7ANSVUMhDRNAyKWiZlOUk+bG377oD7KeOlkmxJRWRuwkAAH0kHJbM4traWMPWxhoAYGF+rmURmuMJwNOlpUcj4fCZLya8DRzu7TmuZu1YUFVbXs3cMsDbr6CqSkFV9X4vlbJuszfbhWj0qjFeakX+X9hfKwNpwLLdyLQAAAAASUVORK5CYII=",
    },
    {
      name: "w3c",
      url: "https://www.runoob.com/?s=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHklEQVR4nIWTX0jTURTHP+fu59xUCJLGCgp0IIPSIvLPg9JTvZq+RBj5WJGySWVPKSH0ZCSWD/ZiFAQVqQUVBulbaQT2IkVEUhISPrTptE23e3pYm26t+sLlHrjnfL/3fM+9Qh4Gp5ubVOSmqlSLIACqGkUY8bp83acP3drYmi+ZYGSq3RP1RudFxJ9PmgOVU6GG0bs5BCNT7Z7lkuUVwPlncZaEi6GGsf4swcD0sUW14p954S6cryAoKoJ/j6VybxLEHAzVPZp1Bl63HBHB//2bYe6N2dLUJhqD68xKgANflpj7GCewL4m1qQnAJwPTLZ9ECJS7K2ja3gFogRuneRX4mYowsdSHIKRc7HJECAAYceEu2rRARECV6Ooa28pKUU0Tp0xRNseVpNXkqxljeDz5ig/zC0RiqywsLnGhf5jYWryQO00mv/j4+T6qqyoJVuzm3tNJaqoquN59ls6rN3j/+WtuubDgqJIQoRjAWsv9a5eZmnmHqiWyHAOgd+gOw71duIsc1lKRTUExE0aE51tZrbUcrq1h545yzp1oJmUtPWfacvzJoLN29KWzXhw76U6UxRJ2BSOu7GGZtyQnOTNdVft757YImn5IMy1XBHoKjfAP29JbPFw/7gUwAOH6sV5Fh9I6/1vEExvWl/UhE4TrxzvUchRl9a/qyoMfdftLLzU+WclvLQeDb1uDNqltiAZREgIPPY7vWf5XBvgFMS/Jw/yUPqwAAAAASUVORK5CYII=",
    },
    {
      name: "GreasyFork",
      url: "https://greasyfork.org/scripts?q=%s&utf8=✓",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=",
      blank: true,
    },
  ],
};
