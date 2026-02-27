# Mangadex webpages

-> Manga page (where the details of manga is described)
There are mainly three apis calls related to the manga.

The first one is:
header ->
[https://api.mangadex.org/manga/801513ba-a712-498c-8f57-cae55b38cc92?includes[]=artist&includes[]=author&includes[]=cover_art]
response ->
{
"result": "ok",
"response": "entity",
"data": {
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga",
"attributes": {
"title": {
"ja-ro": "Berserk"
},
"altTitles": [
{
"ja": "\u30d9\u30eb\u30bb\u30eb\u30af"
},
{
"ko": "\ubca0\ub974\uc138\ub974\ud06c"
},
{
"zh": "\u70d9\u5370\u52c7\u58eb"
},
{
"zh-hk": "\u528d\u98a8\u50b3\u5947"
},
{
"ar": "\u0628\u0631\u0633\u0631\u0643"
},
{
"ar": "\u0628\u064a\u0631\u0633\u064a\u0631\u0643"
},
{
"be": "\u0411\u044f\u0440\u0441\u0435\u0440\u043a"
},
{
"de": "Berserk"
},
{
"he": "\u05d1\u05e8\u05d6\u05e8\u05e7"
},
{
"ne": "\u092c\u0930\u094d\u0938\u0930\u094d\u0915"
},
{
"fa": "\u0628\u0631\u0632\u0631\u06a9"
},
{
"ru": "\u0411\u0435\u0440\u0441\u0435\u0440\u043a"
},
{
"th": "\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e40\u0e0b\u0e34\u0e23\u0e4c\u0e01"
},
{
"th": "\u0e40\u0e17\u0e1e\u0e21\u0e23\u0e13\u0e30"
},
{
"uk": "\u0411\u0435\u0440\u0441\u0435\u0440\u043a"
},
{
"bg": "\u0411\u0435\u0440\u0441\u0435\u0440\u043a"
},
{
"bn": "\u09b0\u09a3\u09cb\u09a8\u09cd\u09ae\u09a4\u09cd\u09a4"
},
{
"en": "Berserk"
}
],
"description": {
"en": "Guts, known as the Black Swordsman, seeks sanctuary from the demonic forces attracted to him and his woman because of a demonic mark on their necks, and also vengeance against the man who branded him as an unholy sacrifice. Aided only by his titanic strength gained from a harsh childhood lived with mercenaries, a gigantic sword, and an iron prosthetic left hand, Guts must struggle against his bleak destiny, all the while fighting with a rage that might strip him of his humanity.\n\_\_\_\nWon the 6th Osamu Tezuka Cultural Prize Excellence Award in 2002.\n\nNote: Following Miura Kenta\u0027s death in 2021, the series has been taken over by Kouji Mori, who supervises the series with art done by Studio Gaga.",
"es": "Guts, conocido como el Espadach\u00edn Negro, busca refugio de las fuerzas demon\u00edacas que se sienten atra\u00eddas por \u00e9l y su mujer debido a una marca demon\u00edaca en el cuello, adem\u00e1s de vengarse del hombre que lo marc\u00f3 como un sacrificio imp\u00edo. \u00danicamente con la ayuda de su fuerza tit\u00e1nica, adquirida tras una dura infancia vivida con mercenarios, una espada gigantesca y una pr\u00f3tesis de hierro en la mano izquierda, Guts deber\u00e1 luchar contra su sombr\u00edo destino, al tiempo que combate con una rabia que podr\u00eda despojarle de su humanidad.",
"ja": "\u5de8\u5927\u306a\u5263\u3092\u80cc\u8ca0\u3044\u3001\u9244\u306e\u7fa9\u624b\u3092\u3064\u3051\u305f\u5263\u58eb\u30fb\u30ac\u30c3\u30c4\u3002\u5f7c\u306e\u884c\u304f\u3068\u3053\u308d\u3001\u8840\u306e\u96e8\u304c\u964d\u308a\u3001\u6b7b\u4f53\u306e\u5c71\u304c\u7bc9\u304b\u308c\u308b\u2026\uff01",
"ru": "\u0413\u0430\u0442\u0441 \u2013 \u0427\u0435\u0440\u043d\u044b\u0439 \u041c\u0435\u0447\u043d\u0438\u043a, \u0437\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043e\u0445\u043e\u0442\u044f\u0442\u0441\u044f \u0434\u0435\u043c\u043e\u043d\u044b. \u041c\u0435\u0447\u043d\u0438\u043a \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0441\u044f \u043d\u0430\u0439\u0442\u0438 \u0432\u0441\u0435 \u0443\u0431\u0435\u0436\u0438\u0449\u0430 \u0434\u0435\u043c\u043e\u043d\u043e\u0432 \u0438 \u043e\u0442\u043e\u043c\u0441\u0442\u0438\u0442\u044c \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443, \u0441\u0434\u0435\u043b\u0430\u0432\u0448\u0435\u0433\u043e \u0438\u0445 \u043d\u0435\u0433\u043e \u00ab\u0436\u0435\u0440\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u043e\u0432\u0435\u0447\u043a\u0443\u00bb. \u0427\u0435\u0440\u043d\u044b\u0439 \u041c\u0435\u0447\u043d\u0438\u043a \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u0441\u0442\u043e\u0438\u0442 \u0436\u0435\u0441\u0442\u043e\u043a\u043e\u0439 \u0441\u0443\u0434\u044c\u0431\u0435 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043d\u0435\u043f\u043e\u043a\u043e\u043b\u0435\u0431\u0438\u043c\u043e\u0439 \u0432\u043e\u043b\u0435, \u043d\u0435\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0439 \u0441\u0438\u043b\u0435, \u0438, \u043a\u043e\u043d\u0435\u0447\u043d\u043e \u0436\u0435, \u043c\u0435\u0447\u0430. \u041f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u044b\u0435 \u0441\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043e \u0437\u043b\u043e\u043c \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0430\u0435\u0442 \u0413\u0430\u0442\u0441\u0430 \u043a \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u043e\u043c\u0443 \u043c\u0438\u0440\u0443 \u0442\u044c\u043c\u044b, \u043b\u0438\u0448\u0430\u044f \u0435\u0433\u043e \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u043d\u043e\u0441\u0442\u0438. \u0411\u0435\u0440\u0441\u0435\u0440\u043a \u2013 \u0441\u043b\u043e\u0436\u043d\u0430\u044f, \u043d\u043e \u0441\u0438\u043b\u044c\u043d\u0430\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043e \u0441\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0445 \u0438 \u0437\u043b\u043e\u0439 \u0441\u0443\u0434\u044c\u0431\u0435.",
"th": "\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e40\u0e0b\u0e34\u0e23\u0e4c\u0e01 \u0e40\u0e1b\u0e47\u0e19\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e31\u0e07\u0e07\u0e30 \u0e41\u0e19\u0e27\u0e14\u0e32\u0e23\u0e4c\u0e04 \u0e41\u0e1f\u0e19\u0e15\u0e32\u0e0b\u0e35 \u0e02\u0e2d\u0e07\u0e0d\u0e35\u0e48\u0e1b\u0e38\u0e48\u0e19 \u0e27\u0e32\u0e14\u0e42\u0e14\u0e22\u0e40\u0e04\u0e19\u0e17\u0e32\u0e42\u0e23\u0e48 \u0e21\u0e34\u0e2d\u0e38\u0e23\u0e30 \u0e21\u0e35\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19\u0e43\u0e19\u0e22\u0e38\u0e04\u0e01\u0e25\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e22\u0e38\u0e42\u0e23\u0e1b \u0e42\u0e14\u0e22\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e2d\u0e34\u0e17\u0e18\u0e34\u0e1e\u0e25\u0e21\u0e32\u0e08\u0e32\u0e01\u0e42\u0e25\u0e01\u0e41\u0e2b\u0e48\u0e07\u0e08\u0e34\u0e19\u0e15\u0e19\u0e34\u0e21\u0e34\u0e15\u0e14\u0e49\u0e32\u0e19\u0e21\u0e37\u0e14 \u0e21\u0e35\u0e15\u0e31\u0e27\u0e25\u0e30\u0e04\u0e23\u0e40\u0e2d\u0e01\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e04\u0e37\u0e2d \u0e01\u0e31\u0e17\u0e2a\u0e4c \u0e17\u0e2b\u0e32\u0e23\u0e23\u0e31\u0e1a\u0e08\u0e49\u0e32\u0e07\u0e1c\u0e39\u0e49\u0e42\u0e14\u0e14\u0e40\u0e14\u0e35\u0e48\u0e22\u0e27\u0e41\u0e25\u0e30 \u0e01\u0e23\u0e34\u0e1f\u0e1f\u0e34\u0e17 \u0e2b\u0e31\u0e27\u0e2b\u0e19\u0e49\u0e32\u0e02\u0e2d\u0e07\u0e01\u0e25\u0e38\u0e48\u0e21\u0e17\u0e2b\u0e32\u0e23\u0e23\u0e31\u0e1a\u0e08\u0e49\u0e32\u0e07\u0e17\u0e35\u0e48\u0e23\u0e27\u0e21\u0e15\u0e31\u0e27\u0e01\u0e31\u0e19\u0e20\u0e32\u0e22\u0e43\u0e15\u0e49\u0e0a\u0e37\u0e48\u0e2d \u0e01\u0e2d\u0e07\u0e1e\u0e31\u0e19\u0e40\u0e2b\u0e22\u0e35\u0e48\u0e22\u0e27\n\n----\n [Shopee (\u0e44\u0e17\u0e22)](https://shopee.co.th/berserk%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%8B%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%81-%E0%B8%9A%E0%B8%B4%E0%B9%8A%E0%B8%81%E0%B8%9A%E0%B8%B8%E0%B8%84-%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-1-20-%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%AB%E0%B8%99%E0%B8%B6%E0%B9%88%E0%B8%87-i.63434898.1855330863)",
"tr": "Kara K\u0131l\u0131\u00e7 Ustas\u0131 olarak an\u0131lan Guts, v\u00fccutlar\u0131ndaki \u015feytani damga y\u00fcz\u00fcnden onlara musallat olan \u015feytani g\u00fc\u00e7lerden, kad\u0131n\u0131n\u0131 ve kendisini koruman\u0131n bir yolunu aramaktad\u0131r. Ayn\u0131 zamanda onu damgalayan ve bir kurban konumuna d\u00fc\u015f\u00fcren adamdan intikam almaya \u00e7al\u0131\u015fmaktad\u0131r. Paral\u0131 askerlerle ge\u00e7irdi\u011fi zorlu \u00e7ocukluk y\u0131llar\u0131n\u0131n getirdi\u011fi tecr\u00fcbeler sayesinde elde etti\u011fi b\u00fcy\u00fck g\u00fcc\u00fc, devasa bir k\u0131l\u0131\u00e7 ve protez bir kol ile destekleyen Guts, karamsar kaderiyle m\u00fccadele etmek zorundad\u0131r. T\u00fcm bunlar\u0131 yaparken, insani benli\u011fini kaybetmesine neden olabilecek \u00f6fkeyle ba\u015fa \u00e7\u0131kmal\u0131d\u0131r. \n\nTheWildDeer\u0027dan Dorylaion taraf\u0131ndan biraz yorum kat\u0131larak sitedeki ingilizce a\u00e7\u0131klamadan \u00e7evrilmi\u015ftir.",
"uk": "\u0419\u043e\u0433\u043e \u0456\u043c\u0027\u044f \u0490\u0430\u0442\u0441, \u0427\u043e\u0440\u043d\u0438\u0439 \u041c\u0435\u0447\u043d\u0438\u043a. \u0412\u0456\u043d \u043c\u043e\u0433\u0443\u0442\u043d\u0456\u0439 \u0432\u043e\u0457\u043d, \u043f\u0440\u043e \u044f\u043a\u043e\u0433\u043e \u0433\u043e\u0432\u043e\u0440\u044f\u0442\u044c \u043b\u0438\u0448\u0435\u043d\u044c \u043f\u043e\u0448\u0435\u043f\u043a\u0438. \u0423 \u043d\u044c\u043e\u0433\u043e \u0454 \u0432\u0435\u043b\u0435\u0442\u0435\u043d\u0441\u044c\u043a\u0438\u0439 \u043c\u0435\u0447 , \u0440\u0443\u043a\u0430 \u0437\u0456 \u0437\u0430\u043b\u0456\u0437\u0430 \u0439 \u0448\u0440\u0430\u043c\u0438 \u0432\u0456\u0434 \u043d\u0435\u0437\u043b\u0456\u0447\u0435\u043d\u043d\u0438\u0445 \u0431\u043e\u0457\u0432 \u0456 \u0442\u043e\u0440\u0442\u0443\u0440. \u0410 \u0449\u0435 \u0439\u043e\u0433\u043e \u043f\u043b\u043e\u0442\u044c \u043f\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0422\u0430\u0432\u0440\u043e\u043c \u2014 \u043d\u0435\u0447\u0435\u0441\u0442\u0438\u0432\u0438\u043c \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u043c, \u044f\u043a\u0438\u0439 \u043f\u0440\u0438\u0442\u044f\u0433\u0443\u0454 \u0441\u0438\u043b\u0438 \u043f\u0456\u0442\u044c\u043c\u0438 \u0439 \u0440\u043e\u0431\u0438\u0442\u044c \u0490\u0430\u0442\u0441\u0430 \u0457\u0445\u043d\u044c\u043e\u044e \u0436\u0435\u0440\u0442\u0432\u043e\u044e. \u0410\u043b\u0435 \u0490\u0430\u0442\u0441 \u043d\u0435 \u043f\u0440\u0438\u0439\u043c\u0435 \u0442\u0430\u043a\u0443 \u0434\u043e\u043b\u044e \u0441\u043f\u043e\u043a\u0456\u0439\u043d\u043e: \u0432\u0456\u043d \u043f\u043e\u0440\u0443\u0431\u0430\u0454 \u043d\u0430 \u0444\u0430\u0440\u0448 \u0432\u0456\u0439\u0441\u044c\u043a\u0430 \u043f\u0440\u043e\u043a\u043b\u044f\u0442\u0438\u0445, \u044f\u043a \u0456 \u0431\u0443\u0434\u044c-\u043a\u043e\u0433\u043e, \u043a\u043e\u043c\u0443 \u0441\u0442\u0430\u043d\u0435 \u0434\u0443\u0440\u043e\u0441\u0442\u0456 \u0441\u0442\u0430\u0442\u0438 \u043d\u0430 \u0439\u043e\u0433\u043e \u0448\u043b\u044f\u0445\u0443! \u0490\u0430\u0442\u0441 \u0456\u0434\u0435 \u0432 \u0442\u043e\u0432\u0430\u0440\u0438\u0441\u0442\u0432\u0456 \u0435\u043b\u044c\u0444\u0430 \u041f\u0430\u043a\u0430 (\u0431\u0456\u043b\u044c\u0448\u0435 \u0434\u043e\u043a\u0443\u0447\u0430\u0439\u043b\u0430, \u043d\u0456\u0436 \u0442\u043e\u0432\u0430\u0440\u0438\u0448\u0430) \u0442\u0435\u043c\u043d\u0438\u043c \u0456 \u0437\u0430\u043a\u0440\u0438\u0432\u0430\u0432\u043b\u0435\u043d\u0438\u043c \u0448\u043b\u044f\u0445\u043e\u043c, \u044f\u043a\u0438\u0439 \u043f\u0440\u0438\u0432\u0435\u0434\u0435 \u043b\u0438\u0448\u0435 \u0434\u043e \u0437\u0430\u0433\u0438\u0431\u0435\u043b\u0456... \u0427\u0438 \u043f\u043e\u043c\u0441\u0442\u0438.",
"es-la": "Guts, conocido como el Espadach\u00edn Negro, busca refugio de las fuerzas demon\u00edacas que se sienten atra\u00eddas por \u00e9l y su mujer debido a una marca demon\u00edaca en el cuello, adem\u00e1s de vengarse del hombre que lo marc\u00f3 como un sacrificio imp\u00edo. \u00danicamente con la ayuda de su fuerza tit\u00e1nica, adquirida tras una dura infancia vivida con mercenarios, una espada gigantesca y una pr\u00f3tesis de hierro en la mano izquierda, Guts deber\u00e1 luchar contra su sombr\u00edo destino, al tiempo que combate con una rabia que podr\u00eda despojarle de su humanidad.",
"pt-br": "Guts, conhecido como o Espadachim Negro, busca ref\u00fagio das for\u00e7as demon\u00edacas atra\u00eddas por ele e sua mulher por causa de uma marca demon\u00edaca em seus pesco\u00e7os, e tamb\u00e9m vingan\u00e7a contra o homem que o marcou como um sacrif\u00edcio profano. Ajudado apenas por sua for\u00e7a tit\u00e2nica adquirida de uma inf\u00e2ncia dura vivida com mercen\u00e1rios, uma espada gigantesca e uma m\u00e3o esquerda prot\u00e9tica de ferro, Guts deve lutar contra seu destino sombrio, enquanto luta com uma raiva que pode despoj\u00e1-lo de sua humanidade."
},
"isLocked": false,
"links": {
"al": "30002",
"ap": "berserk",
"bw": "series\/16664\/list",
"kt": "8",
"mu": "njeqwry",
"amz": "https:\/\/www.amazon.co.jp\/-\/en\/dp\/B074C597F1",
"cdj": "https:\/\/www.cdjapan.co.jp\/product\/NEOBK-3115032",
"ebj": "https:\/\/ebookjapan.yahoo.co.jp\/books\/127562\/",
"mal": "2",
"raw": "https:\/\/younganimal.com\/series\/f68f676b354d4\/",
"engtl": "https:\/\/www.darkhorsedirect.com\/products\/berserk-multi-volume-books"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "",
"lastChapter": "",
"publicationDemographic": "seinen",
"status": "ongoing",
"year": 1989,
"contentRating": "erotica",
"tags": [
{
"id": "0a39b5a1-b235-4886-a747-1d05d216532d",
"type": "tag",
"attributes": {
"name": {
"en": "Award Winning"
},
"description": {},
"group": "format",
"version": 1
},
"relationships": []
},
{
"id": "36fd93ea-e8b8-445e-b836-358f02b3d33d",
"type": "tag",
"attributes": {
"name": {
"en": "Monsters"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "39730448-9a5f-48a2-85b0-a70db87b1233",
"type": "tag",
"attributes": {
"name": {
"en": "Demons"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
"type": "tag",
"attributes": {
"name": {
"en": "Psychological"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "87cc87cd-a395-47af-b27a-93258283bbc6",
"type": "tag",
"attributes": {
"name": {
"en": "Adventure"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "97893a4c-12af-4dac-b6be-0dffb353568e",
"type": "tag",
"attributes": {
"name": {
"en": "Sexual Violence"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
"type": "tag",
"attributes": {
"name": {
"en": "Military"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b1e97889-25b4-4258-b28b-cd7f4d28ea9b",
"type": "tag",
"attributes": {
"name": {
"en": "Philosophical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
"type": "tag",
"attributes": {
"name": {
"en": "Gore"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
"type": "tag",
"attributes": {
"name": {
"en": "Drama"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "cdad7e68-1419-41dd-bdce-27753074a640",
"type": "tag",
"attributes": {
"name": {
"en": "Horror"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "cdc58593-87dd-415e-bbc0-2ec27bf404cc",
"type": "tag",
"attributes": {
"name": {
"en": "Fantasy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2018-01-30T13:50:05+00:00",
"updatedAt": "2026-02-26T16:36:44+00:00",
"version": 119,
"availableTranslatedLanguages": [
"fr",
"pt-br",
"es-la",
"es",
"ar",
"en",
"uk",
"id",
"ru",
"tr",
"zh-hk",
"it",
"ro",
"hu",
"pl",
"fa",
"zh",
"bg",
"el"
],
"latestUploadedChapter": "515133cf-bf49-4add-9d68-88f4601d15ce"
},
"relationships": [
{
"id": "5863578d-4e4f-4b57-b64d-1dd45a893cb0",
"type": "author",
"attributes": {
"name": "Miura Kentarou",
"imageUrl": null,
"biography": {
"en": "**Name In Native Language:** \u4e09\u6d66\u5efa\u592a\u90ce\n\nMiura Kentarou (July 11, 1966 \u2013 May 6, 2021) was born in Chiba City, Chiba Prefecture, Japan. He was left-handed. In 1976, at the early age of 10, Miura made his first manga, titled Miuranger, which was published for his classmates in a school publication; the manga ended up spanning 40 volumes. In 1977, Miura created his second manga titled Ken e No Michi (The Way to the Sword), using Indian ink for the first time. \n\nIn 1988, Miura bounced back with a 48-page manga known as Berserk Prototype, as an introduction to the current Berserk fantasy world.\n\nIn 1989, as a collaboration with writer [Buronson](https://mangadex.org/author/9be55a5a-2512-447b-9847-16169e44aeaf) and illustrated by Miura, Ourou was published in the Monthly Animal House magazine. In the following year, a sequel titled Ourouden was published in the same magazine. In the same year 1989, the 6th issue of the Monthly Animal House, the first issue of the solo project Berserk was released with relatively limited success. Miura again collaborated with Buronson on a manga titled Japan that was published in Young Animal from the 1st issue to the 8th of 1992, and was later released as a stand-alone tankoubon. Miura\u0027s fame grew after Berserk was serialized in Young Animal in 1992 with the release of \u0022The Golden Age\u0022 story arc of Berserk, and the huge success of his masterpiece made him one of the most prominent contemporary mangaka. At this time, Miura dedicated himself solely to work on Berserk. He indicated, however, that he intended to publish more manga in the future.\n\nMiura provided the designs for the Vocaloid Kamui Gakupo, whose voice is taken from the Japanese singer and actor, Gackt.\n\nMiura Kentarou died on May 6, 2021 due to an acute aortic dissection at 54 years old."
},
"twitter": null,
"pixiv": null,
"melonBook": null,
"fanBox": null,
"booth": null,
"namicomi": null,
"nicoVideo": null,
"skeb": null,
"fantia": null,
"tumblr": null,
"youtube": null,
"weibo": null,
"naver": null,
"website": null,
"createdAt": "2021-04-19T21:59:45+00:00",
"updatedAt": "2025-06-12T20:52:08+00:00",
"version": 5
}
},
{
"id": "e4dc18d8-1b8d-48e6-9b70-0f93a5af35ca",
"type": "author",
"attributes": {
"name": "Mori Kouji",
"imageUrl": null,
"biography": {
"en": "**Name In Native Language:** \u68ee\u6052\u4e8c\n\nMori Kouji was born in Tokyo, November 28, 1966. Because of his strong physique, he entered the Junior Baseball League at the recommendation of his parents when he was a child. From primary school to junior middle school, he buried himself in baseball games. His team even entered the national competition. Unfortunately, He don\u0027t have much interest in baseball. He enjoy drawing at home more than playing baseball. In the first grade of middle school, after reading [Koyama Yuu](https://mangadex.org/author/d986fd84-1d97-4bde-b3ec-15a06a858ebc/koyama-yuu)\u0027s _Ganbare Genki_, he decided to become a manga artist, so he took this as his goal in the future.\n\nDuring his senior high school years, [Miura Kentarou](https://mangadex.org/author/5863578d-4e4f-4b57-b64d-1dd45a893cb0) was his best friend.\n\nHe married [Akkiu](https://mangadex.org/author/842b8f3e-f7ee-4603-822d-198c92fd19e7), a female manga artist.\n\nAfter Miura Kentarou died, Mori attended the private ceremony held by Miura\u0027s family.\n\n\n\n\n\n\n"
},
"twitter": "https:\/\/twitter.com\/taigaofgenesis",
"pixiv": null,
"melonBook": null,
"fanBox": null,
"booth": null,
"namicomi": null,
"nicoVideo": null,
"skeb": null,
"fantia": null,
"tumblr": null,
"youtube": null,
"weibo": null,
"naver": null,
"website": null,
"createdAt": "2021-04-19T21:59:45+00:00",
"updatedAt": "2025-06-12T20:53:54+00:00",
"version": 5
}
},
{
"id": "5863578d-4e4f-4b57-b64d-1dd45a893cb0",
"type": "artist",
"attributes": {
"name": "Miura Kentarou",
"imageUrl": null,
"biography": {
"en": "**Name In Native Language:** \u4e09\u6d66\u5efa\u592a\u90ce\n\nMiura Kentarou (July 11, 1966 \u2013 May 6, 2021) was born in Chiba City, Chiba Prefecture, Japan. He was left-handed. In 1976, at the early age of 10, Miura made his first manga, titled Miuranger, which was published for his classmates in a school publication; the manga ended up spanning 40 volumes. In 1977, Miura created his second manga titled Ken e No Michi (The Way to the Sword), using Indian ink for the first time. \n\nIn 1988, Miura bounced back with a 48-page manga known as Berserk Prototype, as an introduction to the current Berserk fantasy world.\n\nIn 1989, as a collaboration with writer [Buronson](https://mangadex.org/author/9be55a5a-2512-447b-9847-16169e44aeaf) and illustrated by Miura, Ourou was published in the Monthly Animal House magazine. In the following year, a sequel titled Ourouden was published in the same magazine. In the same year 1989, the 6th issue of the Monthly Animal House, the first issue of the solo project Berserk was released with relatively limited success. Miura again collaborated with Buronson on a manga titled Japan that was published in Young Animal from the 1st issue to the 8th of 1992, and was later released as a stand-alone tankoubon. Miura\u0027s fame grew after Berserk was serialized in Young Animal in 1992 with the release of \u0022The Golden Age\u0022 story arc of Berserk, and the huge success of his masterpiece made him one of the most prominent contemporary mangaka. At this time, Miura dedicated himself solely to work on Berserk. He indicated, however, that he intended to publish more manga in the future.\n\nMiura provided the designs for the Vocaloid Kamui Gakupo, whose voice is taken from the Japanese singer and actor, Gackt.\n\nMiura Kentarou died on May 6, 2021 due to an acute aortic dissection at 54 years old."
},
"twitter": null,
"pixiv": null,
"melonBook": null,
"fanBox": null,
"booth": null,
"namicomi": null,
"nicoVideo": null,
"skeb": null,
"fantia": null,
"tumblr": null,
"youtube": null,
"weibo": null,
"naver": null,
"website": null,
"createdAt": "2021-04-19T21:59:45+00:00",
"updatedAt": "2025-06-12T20:52:08+00:00",
"version": 5
}
},
{
"id": "8d88f37d-bd1e-4974-a309-7dfce13f9c56",
"type": "artist",
"attributes": {
"name": "Studio Gaga",
"imageUrl": null,
"biography": {
"en": "Studio Gaga (\u30b9\u30bf\u30b8\u30aa\u6211\u753b) is a Japanese manga production studio founded by [Kentarou Miura](https://mangadex.org/author/5863578d-4e4f-4b57-b64d-1dd45a893cb0/kentaro-miura). A primary motivation for Miura creating the studio was so that his assistants could be included in his works under an official collective name.\n\nCurrently led by:\nYoshimitsu Kurosaki (\u9ed2\u5d0e \u80fd\u5149)\n"
},
"twitter": null,
"pixiv": null,
"melonBook": null,
"fanBox": null,
"booth": null,
"namicomi": null,
"nicoVideo": null,
"skeb": null,
"fantia": null,
"tumblr": null,
"youtube": null,
"weibo": null,
"naver": null,
"website": null,
"createdAt": "2021-04-19T21:59:45+00:00",
"updatedAt": "2023-10-05T08:53:09+00:00",
"version": 3
}
},
{
"id": "bab715d9-1b6a-4f50-8fea-ac5628ebfd8e",
"type": "cover_art",
"attributes": {
"description": "",
"volume": "43",
"fileName": "81e1c82d-6672-400c-8c58-4ff9bfb89031.jpg",
"locale": "ja",
"createdAt": "2025-08-22T11:23:23+00:00",
"updatedAt": "2025-08-22T11:23:23+00:00",
"version": 1
}
},
{
"id": "4a5d677d-e3ac-4c23-a6bf-bb92c984fee4",
"type": "manga",
"related": "preserialization"
},
{
"id": "5a143603-d575-4062-9528-12c2ddb83af3",
"type": "manga",
"related": "side_story"
},
{
"id": "77994aef-fe9a-418b-97a8-12b306a8dbdc",
"type": "manga",
"related": "doujinshi"
},
{
"id": "d9e2f26e-c762-41a6-bb71-b6ae18cadde2",
"type": "manga",
"related": "colored"
},
{
"id": "fab932f0-385e-46c2-b67a-f7e68ad85208",
"type": "manga",
"related": "doujinshi"
}
]
}
}

The Second one is:
header ->
[https://api.mangadex.org/chapter?manga=801513ba-a712-498c-8f57-cae55b38cc92&limit=0&includes[]=scanlation_group&includes[]=user&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&contentRating[]=pornographic&excludeExternalUrl=blinktoon.com]
resposne ->
{
"result": "ok",
"response": "collection",
"data": [],
"limit": 0,
"offset": 0,
"total": 4440
}

The Thrid one is:
header ->
[https://api.mangadex.org/manga/801513ba-a712-498c-8f57-cae55b38cc92/feed?limit=96&includes[]=scanlation_group&includes[]=user&order[volume]=asc&order[chapter]=asc&offset=0&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&contentRating[]=pornographic&includeUnavailable=0&excludeExternalUrl=blinktoon.com]
response ->
{
"result": "ok",
"response": "collection",
"data": [
{
"id": "407342d4-22bf-4dbe-9588-0bafd8e494e6",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "Pendekar Pedang Hitam",
"translatedLanguage": "id",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-03-11T17:19:50+00:00",
"readableAt": "2022-03-11T17:19:50+00:00",
"createdAt": "2022-03-11T17:19:50+00:00",
"updatedAt": "2023-03-22T15:42:53+00:00",
"version": 4,
"pages": 94
},
"relationships": [
{
"id": "dd6d4d25-7e19-4286-a103-afe60105aeac",
"type": "scanlation_group",
"attributes": {
"name": "Tempat Singgah Scans",
"altNames": [],
"locked": true,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "tempatsinggah.cn@gmail.com",
"description": "Manga Scanlations group located in Indonesia. Tempat Singgah Scans created first on Facebook in 2020 and decided to expanse the group to Mangadex in 2021. All the work is done by one man, mostly.",
"twitter": "https:\/\/twitter.com\/damnizaki",
"mangaUpdates": null,
"focusedLanguages": [
"id"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-02-08T16:28:17+00:00",
"updatedAt": "2023-03-30T17:42:03+00:00",
"version": 16
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "4f524a18-dbe0-42a3-82df-b624d2370857",
"type": "user",
"attributes": {
"username": "dzakijack",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_POWER_UPLOADER",
"ROLE_USER"
],
"version": 2245
}
}
]
},
{
"id": "08d98058-c945-4a54-adbe-e6ef6b8ad395",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "\u0427\u0451\u0440\u043d\u044b\u0439 \u041c\u0435\u0447\u043d\u0438\u043a",
"translatedLanguage": "ru",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2023-05-16T12:08:21+00:00",
"readableAt": "2023-05-16T12:08:21+00:00",
"createdAt": "2023-05-16T12:08:20+00:00",
"updatedAt": "2023-05-16T12:09:21+00:00",
"version": 3,
"pages": 97
},
"relationships": [
{
"id": "ac193a20-195b-4768-b1cf-f2a28d24f22d",
"type": "scanlation_group",
"attributes": {
"name": "Berserk World",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"ru"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "2eeee16f-8fcb-4150-a4bb-28691ff6d871",
"type": "user",
"attributes": {
"username": "Nastanados",
"roles": [
"ROLE_USER",
"ROLE_POWER_UPLOADER"
],
"version": 3
}
}
]
},
{
"id": "6310f6a1-17ee-4890-b837-2ec1b372905b",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "The Black Swordsman",
"translatedLanguage": "en",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2018-01-31T07:07:06+00:00",
"readableAt": "2018-01-31T07:07:06+00:00",
"createdAt": "2018-01-31T07:07:06+00:00",
"updatedAt": "2018-01-31T07:07:06+00:00",
"version": 1,
"pages": 94
},
"relationships": [
{
"id": "4b98efe6-e5f2-4077-b9b3-193e3d9c5022",
"type": "scanlation_group",
"attributes": {
"name": "Band of the Hawks",
"altNames": [
{
"en": "Hawks"
}
],
"locked": false,
"website": "https:\/\/web.archive.org\/web\/20071020172415\/http:\/\/thehawks.org\/",
"ircServer": "irc.irchighway.net",
"ircChannel": "hawks",
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"en"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "b86e992f-c93c-4286-90d0-e1eba31cadf7",
"type": "user",
"attributes": {
"username": "Assasinart",
"roles": [
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"version": 16071
}
}
]
},
{
"id": "adee8060-53cf-4390-b81f-3bb8369b59fe",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "Siyah Silah\u015f\u00f6r",
"translatedLanguage": "tr",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2021-01-29T10:29:38+00:00",
"readableAt": "2021-01-29T10:29:38+00:00",
"createdAt": "2021-01-29T10:29:38+00:00",
"updatedAt": "2023-04-22T07:37:51+00:00",
"version": 3,
"pages": 94
},
"relationships": [
{
"id": "abcd9d87-eea0-4493-9776-9af6732cd279",
"type": "scanlation_group",
"attributes": {
"name": "NeyZenManga",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": "Yw58ydknM6",
"contactEmail": null,
"description": "NeyZenManga \u00d6zet: <https:\/\/www.youtube.com\/watch?v=exyMAumtgt8&feature=youtu.be>",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"tr"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "81d342d0-a9d2-4c49-b65c-7652bbfd1989",
"type": "user",
"attributes": {
"username": "Lavash-Kun",
"roles": [
"ROLE_MEMBER",
"ROLE_GROUP_MEMBER",
"ROLE_GROUP_LEADER"
],
"version": 7
}
}
]
},
{
"id": "b21939fc-f404-4aa3-930e-c2bfea0a7576",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "",
"translatedLanguage": "zh-hk",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2021-02-09T20:15:59+00:00",
"readableAt": "2021-02-09T20:15:59+00:00",
"createdAt": "2021-02-09T20:15:59+00:00",
"updatedAt": "2021-02-09T20:15:59+00:00",
"version": 1,
"pages": 88
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "6fbc54a0-c317-4f9a-8dca-0846858b95de",
"type": "user",
"attributes": {
"username": "calblbkao",
"roles": [
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"version": 1152
}
}
]
},
{
"id": "201a0135-57e8-4f58-a1bb-b95b60bd4bc1",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "A0 Epiz\u00f3d: A fekete kardforgat\u00f3",
"translatedLanguage": "hu",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2024-09-11T20:40:09+00:00",
"readableAt": "2024-09-11T20:40:09+00:00",
"createdAt": "2024-09-11T20:40:08+00:00",
"updatedAt": "2025-11-12T23:39:15+00:00",
"version": 19,
"pages": 95
},
"relationships": [
{
"id": "232dd593-8163-4b7d-9848-4c4dba0063a9",
"type": "scanlation_group",
"attributes": {
"name": "The Father Translations",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "thefathercontact@gmail.com",
"description": "Hali! A csoportunk c\u00e9lja, hogy megismertess\u00fck a magyar k\u00f6z\u00f6ns\u00e9get min\u00e9l t\u00f6bb seinen mang\u00e1val.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"hu"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2024-05-05T16:05:25+00:00",
"updatedAt": "2024-05-25T23:14:20+00:00",
"version": 4
}
},
{
"id": "deb85a19-d535-4303-8736-26acee931a8d",
"type": "scanlation_group",
"attributes": {
"name": "Anime Sekai Team",
"altNames": [],
"locked": false,
"website": "http:\/\/animesekaiteam.nhely.hu",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Egy magyar ford\u00edt\u00f3csapat magyaroknak.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"hu"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2025-05-10T17:21:50+00:00",
"version": 4
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f325cd78-550f-4f9e-845f-7d6a5d9df27c",
"type": "user",
"attributes": {
"username": "mafoto777",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_USER"
],
"avatarFileName": "3e40fad5-2d1b-494b-9f69-6e311edb5e5b.jpg",
"bannerFileName": null,
"version": 8
}
}
]
},
{
"id": "03381228-05e7-47e8-b086-6f411ce6b1f3",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "Kara K\u0131l\u0131\u00e7 Ustas\u0131",
"translatedLanguage": "tr",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2023-04-20T20:06:47+00:00",
"readableAt": "2023-04-20T20:06:47+00:00",
"createdAt": "2023-04-20T19:59:40+00:00",
"updatedAt": "2023-04-20T20:06:47+00:00",
"version": 3,
"pages": 92
},
"relationships": [
{
"id": "2210d7ea-29d4-4156-8030-2af75566ec18",
"type": "scanlation_group",
"attributes": {
"name": "TheWildDeer",
"altNames": [],
"locked": true,
"website": "https:\/\/s.id\/thewilddeer",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "thewilddeertranslation@gmail.com",
"description": "Karanl\u0131k mangalar\u0131n, karanl\u0131k \u00e7eviri grubu.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"tr"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2023-04-14T15:51:15+00:00",
"updatedAt": "2023-04-30T16:22:20+00:00",
"version": 5
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f237454a-a93a-4908-b257-3090987ef811",
"type": "user",
"attributes": {
"username": "Dorylaion",
"roles": [
"ROLE_GROUP_MEMBER",
"ROLE_USER",
"ROLE_GROUP_LEADER"
],
"version": 842
}
}
]
},
{
"id": "0dae4ebf-2909-4e51-9d8a-806a0e8fcf07",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "A fekete kardforgat\u00f3",
"translatedLanguage": "hu",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2024-09-07T22:29:25+00:00",
"readableAt": "2024-09-07T22:29:25+00:00",
"createdAt": "2024-09-07T22:29:25+00:00",
"updatedAt": "2024-09-08T17:49:18+00:00",
"version": 5,
"pages": 90
},
"relationships": [
{
"id": "e9fc6ec5-6fab-4baf-a0f2-733712246015",
"type": "scanlation_group",
"attributes": {
"name": "Dragon's Antlers",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"hu"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2023-03-04T08:55:24+00:00",
"updatedAt": "2023-12-21T17:48:24+00:00",
"version": 7
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "64b0146c-f719-4f2d-92ac-edbc574ddec1",
"type": "user",
"attributes": {
"username": "DEADDragonoid",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_USER"
],
"version": 8575
}
}
]
},
{
"id": "11b6d602-0087-4f6c-ba8a-b25a0a279e2e",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "Espadach\u00edn Negro",
"translatedLanguage": "es-la",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2021-09-16T03:41:48+00:00",
"readableAt": "2021-09-16T03:41:48+00:00",
"createdAt": "2021-09-16T03:41:47+00:00",
"updatedAt": "2021-09-16T04:48:22+00:00",
"version": 7,
"pages": 91
},
"relationships": [
{
"id": "9ca0a878-9657-4342-9305-907969b01180",
"type": "scanlation_group",
"attributes": {
"name": "Seinen Den",
"altNames": [],
"locked": false,
"website": "https:\/\/seinenden.mforos.com\/",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "cmam_sd@live.com.mx",
"description": "Seinen Den",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"es-la"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-09-15T02:25:49+00:00",
"version": 3
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "7083af20-87f1-4f71-8413-bf316f938f06",
"type": "user",
"attributes": {
"username": "cmam_sd",
"roles": [
"ROLE_GROUP_MEMBER",
"ROLE_USER",
"ROLE_GROUP_LEADER"
],
"version": 8
}
}
]
},
{
"id": "7329f5c6-d3d8-4f4e-875f-81d4aa400c22",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "0.01",
"translatedLanguage": "tr",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2021-08-24T00:53:04+00:00",
"readableAt": "2021-08-24T00:53:04+00:00",
"createdAt": "2021-08-24T00:53:03+00:00",
"updatedAt": "2021-08-24T00:53:17+00:00",
"version": 3,
"pages": 89
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "1ceb9388-cc1b-47a5-b427-820cf7abcfed",
"type": "user",
"attributes": {
"username": "Kraptor121",
"roles": [
"ROLE_MEMBER"
],
"version": 4
}
}
]
},
{
"id": "3fc110c1-5685-489e-addd-c1142ec2071e",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "\u0427\u043e\u0440\u043d\u0438\u0439 \u041c\u0435\u0447\u043d\u0438\u043a",
"translatedLanguage": "uk",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-11-28T23:30:35+00:00",
"readableAt": "2025-11-28T23:30:35+00:00",
"createdAt": "2025-11-28T23:30:34+00:00",
"updatedAt": "2025-11-28T23:34:50+00:00",
"version": 3,
"pages": 90
},
"relationships": [
{
"id": "e6883fea-317e-4af8-ab4f-877451c5f6f5",
"type": "scanlation_group",
"attributes": {
"name": "Chimu Team",
"altNames": [],
"locked": false,
"website": "https:\/\/t.me\/+FXxPFAO2k7pmOTFi",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "chimu.team.ua@gmail.com",
"description": null,
"twitter": "https:\/\/twitter.com\/ChimuTeam",
"mangaUpdates": null,
"focusedLanguages": [
"uk"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-06-17T22:08:29+00:00",
"updatedAt": "2022-08-26T12:55:24+00:00",
"version": 5
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "c7e91c3e-eb1c-484a-8275-df19f2e82565",
"type": "user",
"attributes": {
"username": "IT_IS_ME1987",
"roles": [
"ROLE_USER",
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER"
],
"version": 9
}
}
]
},
{
"id": "bbea0894-09ab-4983-901d-368371a66708",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "O Espadachim Negro",
"translatedLanguage": "pt-br",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-05-30T22:13:18+00:00",
"readableAt": "2022-05-30T22:13:18+00:00",
"createdAt": "2022-05-30T22:13:17+00:00",
"updatedAt": "2022-05-30T22:13:54+00:00",
"version": 4,
"pages": 93
},
"relationships": [
{
"id": "8090b646-d4f8-4687-a392-05aaaa9dde91",
"type": "scanlation_group",
"attributes": {
"name": "Kousen Scans",
"altNames": [],
"locked": false,
"website": "http:\/\/kousenscans.com.br\/",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"pt-br"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "7014d0f0-cea5-4d8b-b28c-a9aaf7f773b5",
"type": "user",
"attributes": {
"username": "Hajime_uploader",
"roles": [
"ROLE_GROUP_MEMBER",
"ROLE_USER",
"ROLE_POWER_UPLOADER"
],
"version": 2477
}
}
]
},
{
"id": "fcaef375-8e61-4376-a812-68f15c603ca6",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "Spadasinul Negru",
"translatedLanguage": "ro",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-11-29T16:38:41+00:00",
"readableAt": "2022-11-29T16:38:41+00:00",
"createdAt": "2022-11-29T16:38:40+00:00",
"updatedAt": "2023-05-08T22:13:31+00:00",
"version": 5,
"pages": 93
},
"relationships": [
{
"id": "2fa13110-993a-4f51-9336-9eec7eece8de",
"type": "scanlation_group",
"attributes": {
"name": "Anime Nexus",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Monogatari Family https:\/\/anime-nexus.io\/",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"ro"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-10-19T23:10:57+00:00",
"updatedAt": "2026-02-13T17:28:33+00:00",
"version": 7
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "8f3af679-922c-4b67-87ae-4ad56796977d",
"type": "user",
"attributes": {
"username": "bing021",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"avatarFileName": null,
"bannerFileName": null,
"version": 16625
}
}
]
},
{
"id": "d3e7e129-f00f-499c-abbc-437552b8128a",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "O Espadachim Negro",
"translatedLanguage": "pt-br",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-02-05T03:03:58+00:00",
"readableAt": "2025-02-05T03:03:58+00:00",
"createdAt": "2025-02-05T03:03:57+00:00",
"updatedAt": "2025-02-05T23:33:59+00:00",
"version": 5,
"pages": 90
},
"relationships": [
{
"id": "fa52c582-94e3-4a58-899d-4f7f2149aafb",
"type": "scanlation_group",
"attributes": {
"name": "Centipede Scans",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": "3u4hDNRBjb",
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"pt-br"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-02-10T17:40:16+00:00",
"updatedAt": "2025-05-12T20:39:27+00:00",
"version": 8
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "32a865d6-9163-4f0b-be8a-5c7581098d8d",
"type": "user",
"attributes": {
"username": "Bat17",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_POWER_UPLOADER",
"ROLE_USER"
],
"version": 8819
}
}
]
},
{
"id": "d120a2fb-67b7-4b3f-b551-ab973ac66a85",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "El guerrero negro",
"translatedLanguage": "es",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2024-12-11T01:49:41+00:00",
"readableAt": "2024-12-11T01:49:41+00:00",
"createdAt": "2024-12-11T01:49:40+00:00",
"updatedAt": "2024-12-11T01:51:07+00:00",
"version": 3,
"pages": 90
},
"relationships": [
{
"id": "d2a5b511-8e05-4ccb-9f48-85abcb728a2e",
"type": "scanlation_group",
"attributes": {
"name": "Gl\u00e9nat Spain (Ex-Licenses)",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Creada como filial de la editorial francesa Gl\u00e9nat Editions. \n1990-2011",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"es"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2024-06-10T16:28:11+00:00",
"version": 3
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "0ade8309-34e4-461c-9564-c1fef47bd38b",
"type": "user",
"attributes": {
"username": "Trite",
"roles": [
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"version": 381
}
}
]
},
{
"id": "661a019c-3948-45ed-ac3e-0f05e4e12734",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "\u0427\u043e\u0440\u043d\u0438\u0439 \u041c\u0435\u0447\u043d\u0438\u043a",
"translatedLanguage": "uk",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-04-09T23:36:35+00:00",
"readableAt": "2022-04-09T23:36:35+00:00",
"createdAt": "2022-04-09T17:08:05+00:00",
"updatedAt": "2022-04-09T23:55:53+00:00",
"version": 4,
"pages": 92
},
"relationships": [
{
"id": "40eefe2a-d99e-4aa4-b864-55ed68d58309",
"type": "scanlation_group",
"attributes": {
"name": "\ud835\udd71\ud835\udd86\ud835\udd91\ud835\udd88\ud835\udd94\ud835\udd93\ud835\udd8a \ud835\udd89\ud835\udd8e \ud835\udd77\ud835\udd9a\ud835\udd88\ud835\udd8a",
"altNames": [],
"locked": false,
"website": "https:\/\/t.me\/IT_IS_ME1987",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "So, I'm simply... One hell of a translator. But usually I work alone.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"uk"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-04-09T21:14:26+00:00",
"updatedAt": "2022-04-09T23:56:55+00:00",
"version": 2
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "c7e91c3e-eb1c-484a-8275-df19f2e82565",
"type": "user",
"attributes": {
"username": "IT_IS_ME1987",
"roles": [
"ROLE_USER",
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER"
],
"version": 9
}
}
]
},
{
"id": "5bc3a83f-095e-4c07-87d0-b513c52ab43f",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "O Espadachim Negro",
"translatedLanguage": "pt-br",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-03-29T16:57:37+00:00",
"readableAt": "2025-03-29T16:57:37+00:00",
"createdAt": "2025-03-29T01:02:18+00:00",
"updatedAt": "2025-03-29T16:57:37+00:00",
"version": 3,
"pages": 90
},
"relationships": [
{
"id": "14e5ce92-0226-418c-b336-052d417b7514",
"type": "scanlation_group",
"attributes": {
"name": "El Pochita Scan",
"altNames": [],
"locked": true,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Scan iniciada por uma pessoa com o objetivo de traduzir apenas chainsaw man (eu n\u00e3o traduzo apenas chainsaw man)",
"twitter": "https:\/\/twitter.com\/Polarmccormick",
"mangaUpdates": null,
"focusedLanguages": [],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2025-03-16T23:15:42+00:00",
"updatedAt": "2025-03-23T04:07:26+00:00",
"version": 4
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "d01f5abf-64c8-43e9-a813-89ac72c200b0",
"type": "user",
"attributes": {
"username": "Polardelimao",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_USER"
],
"version": 5
}
}
]
},
{
"id": "3d7fb2a6-0f7d-4c6b-b80d-fcd2e7d9bff8",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "Czarny Szermierz",
"translatedLanguage": "pl",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-04-01T22:50:19+00:00",
"readableAt": "2022-04-01T22:50:19+00:00",
"createdAt": "2022-04-01T19:41:36+00:00",
"updatedAt": "2022-06-27T13:47:47+00:00",
"version": 5,
"pages": 90
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f97be60b-8a9f-4802-bf80-89e6f73a757a",
"type": "user",
"attributes": {
"username": "Anonimowy",
"roles": [
"ROLE_USER"
],
"version": 2
}
}
]
},
{
"id": "c258f881-2a0f-448f-8966-8284b43eb053",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "Spadasinul Negru",
"translatedLanguage": "ro",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-11-01T21:19:53+00:00",
"readableAt": "2022-11-01T21:19:53+00:00",
"createdAt": "2022-11-01T20:26:14+00:00",
"updatedAt": "2022-11-01T21:53:47+00:00",
"version": 4,
"pages": 90
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "7a0030ce-0472-4777-a0d1-219f16ba7899",
"type": "user",
"attributes": {
"username": "Mystery98",
"roles": [
"ROLE_MEMBER"
],
"version": 1
}
}
]
},
{
"id": "b04976c9-823e-4bd0-bb62-36324607552a",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "Kara K\u0131l\u0131\u00e7 Ustas\u0131!!",
"translatedLanguage": "tr",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-12-25T18:28:49+00:00",
"readableAt": "2022-12-25T18:28:49+00:00",
"createdAt": "2022-12-25T18:28:49+00:00",
"updatedAt": "2022-12-26T12:45:16+00:00",
"version": 5,
"pages": 94
},
"relationships": [
{
"id": "9b0d2c8b-93bf-4fca-8e57-5997dd8b9380",
"type": "scanlation_group",
"attributes": {
"name": "Garcia Fansub",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": "9ytVXWzG5a",
"contactEmail": null,
"description": "07.03.2021\\'de GermanReich taraf\u0131ndan kurulan bu Fansub insanlar\u0131n mangalara ve animelere h\u0131zl\u0131 ve kolay bir \u015fekilde ula\u015f\u0131lmas\u0131n\u0131 sa\u011flamak i\u00e7in yola \u00e7\u0131kt\u0131 ve ilerleyi\u015fini s\u00fcrd\u00fcr\u00fcyor.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-09-21T11:33:18+00:00",
"updatedAt": "2021-09-21T11:33:18+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f6077008-78fe-4f15-84db-d13b5aff4939",
"type": "user",
"attributes": {
"username": "GermanReich",
"roles": [
"ROLE_BANNED"
],
"version": 8
}
}
]
},
{
"id": "f6175027-ad99-4c42-aae9-c440555a4997",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.01",
"title": "Kara K\u0131l\u0131\u00e7 Ustas\u0131",
"translatedLanguage": "tr",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2024-07-27T09:45:14+00:00",
"readableAt": "2024-07-27T09:45:14+00:00",
"createdAt": "2024-07-26T23:45:43+00:00",
"updatedAt": "2024-07-27T09:45:14+00:00",
"version": 3,
"pages": 26
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "8dffc511-8427-494b-9dad-cc37912b6e8f",
"type": "user",
"attributes": {
"username": "Nika106",
"roles": [
"ROLE_USER",
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER"
],
"version": 4
}
}
]
},
{
"id": "0634e42f-e5d0-4f6b-b2bb-044339372936",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "La marca",
"translatedLanguage": "es-la",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2021-09-16T04:34:50+00:00",
"readableAt": "2021-09-16T04:34:50+00:00",
"createdAt": "2021-09-16T04:34:50+00:00",
"updatedAt": "2021-09-16T04:48:46+00:00",
"version": 8,
"pages": 69
},
"relationships": [
{
"id": "9ca0a878-9657-4342-9305-907969b01180",
"type": "scanlation_group",
"attributes": {
"name": "Seinen Den",
"altNames": [],
"locked": false,
"website": "https:\/\/seinenden.mforos.com\/",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "cmam_sd@live.com.mx",
"description": "Seinen Den",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"es-la"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-09-15T02:25:49+00:00",
"version": 3
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "7083af20-87f1-4f71-8413-bf316f938f06",
"type": "user",
"attributes": {
"username": "cmam_sd",
"roles": [
"ROLE_GROUP_MEMBER",
"ROLE_USER",
"ROLE_GROUP_LEADER"
],
"version": 8
}
}
]
},
{
"id": "18ceda91-3762-4f63-8bbb-ffc7eb3731ce",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "",
"translatedLanguage": "tr",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2021-08-24T00:55:51+00:00",
"readableAt": "2021-08-24T00:55:51+00:00",
"createdAt": "2021-08-24T00:55:51+00:00",
"updatedAt": "2023-04-22T07:37:54+00:00",
"version": 5,
"pages": 70
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "1ceb9388-cc1b-47a5-b427-820cf7abcfed",
"type": "user",
"attributes": {
"username": "Kraptor121",
"roles": [
"ROLE_MEMBER"
],
"version": 4
}
}
]
},
{
"id": "10d14daf-7ec1-43bf-ba15-dcabe84fccd1",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "A marca do sacrif\u00edcio",
"translatedLanguage": "pt-br",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-05-30T22:17:26+00:00",
"readableAt": "2022-05-30T22:17:26+00:00",
"createdAt": "2022-05-30T22:17:25+00:00",
"updatedAt": "2022-05-30T22:17:32+00:00",
"version": 3,
"pages": 69
},
"relationships": [
{
"id": "8090b646-d4f8-4687-a392-05aaaa9dde91",
"type": "scanlation_group",
"attributes": {
"name": "Kousen Scans",
"altNames": [],
"locked": false,
"website": "http:\/\/kousenscans.com.br\/",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"pt-br"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "7014d0f0-cea5-4d8b-b28c-a9aaf7f773b5",
"type": "user",
"attributes": {
"username": "Hajime_uploader",
"roles": [
"ROLE_GROUP_MEMBER",
"ROLE_USER",
"ROLE_POWER_UPLOADER"
],
"version": 2477
}
}
]
},
{
"id": "88bd3701-ce4e-407b-b09a-5598a860f58c",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "Tanda",
"translatedLanguage": "id",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-03-11T18:52:55+00:00",
"readableAt": "2022-03-11T18:52:55+00:00",
"createdAt": "2022-03-11T18:52:54+00:00",
"updatedAt": "2023-05-10T19:34:25+00:00",
"version": 4,
"pages": 70
},
"relationships": [
{
"id": "dd6d4d25-7e19-4286-a103-afe60105aeac",
"type": "scanlation_group",
"attributes": {
"name": "Tempat Singgah Scans",
"altNames": [],
"locked": true,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "tempatsinggah.cn@gmail.com",
"description": "Manga Scanlations group located in Indonesia. Tempat Singgah Scans created first on Facebook in 2020 and decided to expanse the group to Mangadex in 2021. All the work is done by one man, mostly.",
"twitter": "https:\/\/twitter.com\/damnizaki",
"mangaUpdates": null,
"focusedLanguages": [
"id"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-02-08T16:28:17+00:00",
"updatedAt": "2023-03-30T17:42:03+00:00",
"version": 16
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "4f524a18-dbe0-42a3-82df-b624d2370857",
"type": "user",
"attributes": {
"username": "dzakijack",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_POWER_UPLOADER",
"ROLE_USER"
],
"version": 2245
}
}
]
},
{
"id": "da63389a-3d60-4634-8652-47a52e35eacc",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "The Brand",
"translatedLanguage": "en",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2018-01-31T07:13:08+00:00",
"readableAt": "2018-01-31T07:13:08+00:00",
"createdAt": "2018-01-31T07:13:08+00:00",
"updatedAt": "2018-01-31T07:13:08+00:00",
"version": 1,
"pages": 69
},
"relationships": [
{
"id": "4b98efe6-e5f2-4077-b9b3-193e3d9c5022",
"type": "scanlation_group",
"attributes": {
"name": "Band of the Hawks",
"altNames": [
{
"en": "Hawks"
}
],
"locked": false,
"website": "https:\/\/web.archive.org\/web\/20071020172415\/http:\/\/thehawks.org\/",
"ircServer": "irc.irchighway.net",
"ircChannel": "hawks",
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"en"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "b86e992f-c93c-4286-90d0-e1eba31cadf7",
"type": "user",
"attributes": {
"username": "Assasinart",
"roles": [
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"version": 16071
}
}
]
},
{
"id": "db01f771-3199-42fd-b50e-48deca8a997d",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "\u0422\u0430\u0432\u0440\u043e",
"translatedLanguage": "uk",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-04-09T23:59:12+00:00",
"readableAt": "2022-04-09T23:59:12+00:00",
"createdAt": "2022-04-09T23:59:11+00:00",
"updatedAt": "2022-04-09T23:59:32+00:00",
"version": 3,
"pages": 69
},
"relationships": [
{
"id": "40eefe2a-d99e-4aa4-b864-55ed68d58309",
"type": "scanlation_group",
"attributes": {
"name": "\ud835\udd71\ud835\udd86\ud835\udd91\ud835\udd88\ud835\udd94\ud835\udd93\ud835\udd8a \ud835\udd89\ud835\udd8e \ud835\udd77\ud835\udd9a\ud835\udd88\ud835\udd8a",
"altNames": [],
"locked": false,
"website": "https:\/\/t.me\/IT_IS_ME1987",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "So, I'm simply... One hell of a translator. But usually I work alone.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"uk"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-04-09T21:14:26+00:00",
"updatedAt": "2022-04-09T23:56:55+00:00",
"version": 2
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "c7e91c3e-eb1c-484a-8275-df19f2e82565",
"type": "user",
"attributes": {
"username": "IT_IS_ME1987",
"roles": [
"ROLE_USER",
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER"
],
"version": 9
}
}
]
},
{
"id": "c2a3a696-14d1-4b65-a8bc-6ace6664506c",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "Damga!!",
"translatedLanguage": "tr",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-12-25T18:33:12+00:00",
"readableAt": "2022-12-25T18:33:12+00:00",
"createdAt": "2022-12-25T18:33:11+00:00",
"updatedAt": "2022-12-25T18:35:37+00:00",
"version": 3,
"pages": 71
},
"relationships": [
{
"id": "9b0d2c8b-93bf-4fca-8e57-5997dd8b9380",
"type": "scanlation_group",
"attributes": {
"name": "Garcia Fansub",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": "9ytVXWzG5a",
"contactEmail": null,
"description": "07.03.2021\\'de GermanReich taraf\u0131ndan kurulan bu Fansub insanlar\u0131n mangalara ve animelere h\u0131zl\u0131 ve kolay bir \u015fekilde ula\u015f\u0131lmas\u0131n\u0131 sa\u011flamak i\u00e7in yola \u00e7\u0131kt\u0131 ve ilerleyi\u015fini s\u00fcrd\u00fcr\u00fcyor.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-09-21T11:33:18+00:00",
"updatedAt": "2021-09-21T11:33:18+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f6077008-78fe-4f15-84db-d13b5aff4939",
"type": "user",
"attributes": {
"username": "GermanReich",
"roles": [
"ROLE_BANNED"
],
"version": 8
}
}
]
},
{
"id": "18546144-5fa4-4241-8c5a-51b5eca28794",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "Damga",
"translatedLanguage": "tr",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2023-04-20T20:06:55+00:00",
"readableAt": "2023-04-20T20:06:55+00:00",
"createdAt": "2023-04-20T20:02:17+00:00",
"updatedAt": "2023-04-20T20:06:55+00:00",
"version": 3,
"pages": 70
},
"relationships": [
{
"id": "2210d7ea-29d4-4156-8030-2af75566ec18",
"type": "scanlation_group",
"attributes": {
"name": "TheWildDeer",
"altNames": [],
"locked": true,
"website": "https:\/\/s.id\/thewilddeer",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "thewilddeertranslation@gmail.com",
"description": "Karanl\u0131k mangalar\u0131n, karanl\u0131k \u00e7eviri grubu.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"tr"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2023-04-14T15:51:15+00:00",
"updatedAt": "2023-04-30T16:22:20+00:00",
"version": 5
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f237454a-a93a-4908-b257-3090987ef811",
"type": "user",
"attributes": {
"username": "Dorylaion",
"roles": [
"ROLE_GROUP_MEMBER",
"ROLE_USER",
"ROLE_GROUP_LEADER"
],
"version": 842
}
}
]
},
{
"id": "c11082a4-ab47-4542-b240-3cd0029ef427",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "\u041a\u043b\u0435\u0439\u043c\u043e",
"translatedLanguage": "ru",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2023-05-16T12:12:25+00:00",
"readableAt": "2023-05-16T12:12:25+00:00",
"createdAt": "2023-05-16T12:12:25+00:00",
"updatedAt": "2023-05-16T12:13:18+00:00",
"version": 3,
"pages": 70
},
"relationships": [
{
"id": "ac193a20-195b-4768-b1cf-f2a28d24f22d",
"type": "scanlation_group",
"attributes": {
"name": "Berserk World",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"ru"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "2eeee16f-8fcb-4150-a4bb-28691ff6d871",
"type": "user",
"attributes": {
"username": "Nastanados",
"roles": [
"ROLE_USER",
"ROLE_POWER_UPLOADER"
],
"version": 3
}
}
]
},
{
"id": "93f221d1-2f38-4cb3-a64c-840384a9cf4f",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "Pi\u0119tno",
"translatedLanguage": "pl",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-04-02T16:52:06+00:00",
"readableAt": "2022-04-02T16:52:06+00:00",
"createdAt": "2022-04-02T16:52:05+00:00",
"updatedAt": "2022-06-27T13:48:05+00:00",
"version": 4,
"pages": 69
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f97be60b-8a9f-4802-bf80-89e6f73a757a",
"type": "user",
"attributes": {
"username": "Anonimowy",
"roles": [
"ROLE_USER"
],
"version": 2
}
}
]
},
{
"id": "ae5cd49d-21f5-4472-b47b-b72661aee20e",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "El estigma",
"translatedLanguage": "es",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2024-12-11T01:50:36+00:00",
"readableAt": "2024-12-11T01:50:36+00:00",
"createdAt": "2024-12-11T01:50:36+00:00",
"updatedAt": "2024-12-11T01:52:06+00:00",
"version": 3,
"pages": 69
},
"relationships": [
{
"id": "d2a5b511-8e05-4ccb-9f48-85abcb728a2e",
"type": "scanlation_group",
"attributes": {
"name": "Gl\u00e9nat Spain (Ex-Licenses)",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Creada como filial de la editorial francesa Gl\u00e9nat Editions. \n1990-2011",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"es"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2024-06-10T16:28:11+00:00",
"version": 3
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "0ade8309-34e4-461c-9564-c1fef47bd38b",
"type": "user",
"attributes": {
"username": "Trite",
"roles": [
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"version": 381
}
}
]
},
{
"id": "f3e848f4-48e7-4ff4-ab25-81e2af295381",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "\u00censemnul",
"translatedLanguage": "ro",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-11-28T23:15:15+00:00",
"readableAt": "2022-11-28T23:15:15+00:00",
"createdAt": "2022-11-28T23:15:15+00:00",
"updatedAt": "2022-11-29T16:21:53+00:00",
"version": 4,
"pages": 69
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "7a0030ce-0472-4777-a0d1-219f16ba7899",
"type": "user",
"attributes": {
"username": "Mystery98",
"roles": [
"ROLE_MEMBER"
],
"version": 1
}
}
]
},
{
"id": "59d71c25-83a0-4db9-b76f-809457f0157f",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "B0 Epiz\u00f3d: - A b\u00e9lyeg",
"translatedLanguage": "hu",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2024-09-11T20:43:24+00:00",
"readableAt": "2024-09-11T20:43:24+00:00",
"createdAt": "2024-09-11T20:43:24+00:00",
"updatedAt": "2026-01-26T05:39:12+00:00",
"version": 10,
"pages": 70
},
"relationships": [
{
"id": "232dd593-8163-4b7d-9848-4c4dba0063a9",
"type": "scanlation_group",
"attributes": {
"name": "The Father Translations",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "thefathercontact@gmail.com",
"description": "Hali! A csoportunk c\u00e9lja, hogy megismertess\u00fck a magyar k\u00f6z\u00f6ns\u00e9get min\u00e9l t\u00f6bb seinen mang\u00e1val.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"hu"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2024-05-05T16:05:25+00:00",
"updatedAt": "2024-05-25T23:14:20+00:00",
"version": 4
}
},
{
"id": "deb85a19-d535-4303-8736-26acee931a8d",
"type": "scanlation_group",
"attributes": {
"name": "Anime Sekai Team",
"altNames": [],
"locked": false,
"website": "http:\/\/animesekaiteam.nhely.hu",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Egy magyar ford\u00edt\u00f3csapat magyaroknak.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"hu"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2025-05-10T17:21:50+00:00",
"version": 4
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f325cd78-550f-4f9e-845f-7d6a5d9df27c",
"type": "user",
"attributes": {
"username": "mafoto777",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_USER"
],
"avatarFileName": "3e40fad5-2d1b-494b-9f69-6e311edb5e5b.jpg",
"bannerFileName": null,
"version": 8
}
}
]
},
{
"id": "24a5a455-6eb1-4b51-b57b-b7e720994221",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "A Marca do Sacrif\u00edcio ",
"translatedLanguage": "pt-br",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-02-15T02:19:43+00:00",
"readableAt": "2025-02-15T02:19:43+00:00",
"createdAt": "2025-02-15T02:19:42+00:00",
"updatedAt": "2025-02-15T02:20:29+00:00",
"version": 3,
"pages": 71
},
"relationships": [
{
"id": "fa52c582-94e3-4a58-899d-4f7f2149aafb",
"type": "scanlation_group",
"attributes": {
"name": "Centipede Scans",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": "3u4hDNRBjb",
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"pt-br"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-02-10T17:40:16+00:00",
"updatedAt": "2025-05-12T20:39:27+00:00",
"version": 8
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "32a865d6-9163-4f0b-be8a-5c7581098d8d",
"type": "user",
"attributes": {
"username": "Bat17",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_POWER_UPLOADER",
"ROLE_USER"
],
"version": 8819
}
}
]
},
{
"id": "1c5611e0-fb05-4a15-b41e-536154d4a912",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "\u0422\u0430\u0432\u0440\u043e",
"translatedLanguage": "uk",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-11-28T23:34:06+00:00",
"readableAt": "2025-11-28T23:34:06+00:00",
"createdAt": "2025-11-28T23:34:05+00:00",
"updatedAt": "2025-11-28T23:37:25+00:00",
"version": 3,
"pages": 69
},
"relationships": [
{
"id": "e6883fea-317e-4af8-ab4f-877451c5f6f5",
"type": "scanlation_group",
"attributes": {
"name": "Chimu Team",
"altNames": [],
"locked": false,
"website": "https:\/\/t.me\/+FXxPFAO2k7pmOTFi",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "chimu.team.ua@gmail.com",
"description": null,
"twitter": "https:\/\/twitter.com\/ChimuTeam",
"mangaUpdates": null,
"focusedLanguages": [
"uk"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-06-17T22:08:29+00:00",
"updatedAt": "2022-08-26T12:55:24+00:00",
"version": 5
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "c7e91c3e-eb1c-484a-8275-df19f2e82565",
"type": "user",
"attributes": {
"username": "IT_IS_ME1987",
"roles": [
"ROLE_USER",
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER"
],
"version": 9
}
}
]
},
{
"id": "4a977357-1d44-4ec9-9233-bd579bad41a0",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "Semnul",
"translatedLanguage": "ro",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2023-05-08T22:56:47+00:00",
"readableAt": "2023-05-08T22:56:47+00:00",
"createdAt": "2023-05-08T22:56:46+00:00",
"updatedAt": "2023-05-08T22:58:13+00:00",
"version": 3,
"pages": 70
},
"relationships": [
{
"id": "2fa13110-993a-4f51-9336-9eec7eece8de",
"type": "scanlation_group",
"attributes": {
"name": "Anime Nexus",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Monogatari Family https:\/\/anime-nexus.io\/",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"ro"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-10-19T23:10:57+00:00",
"updatedAt": "2026-02-13T17:28:33+00:00",
"version": 7
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "8f3af679-922c-4b67-87ae-4ad56796977d",
"type": "user",
"attributes": {
"username": "bing021",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"avatarFileName": null,
"bannerFileName": null,
"version": 16625
}
}
]
},
{
"id": "5f227923-4795-46ab-a186-1c1549004f37",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "A b\u00e9lyeg",
"translatedLanguage": "hu",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2024-10-19T18:48:21+00:00",
"readableAt": "2024-10-19T18:48:21+00:00",
"createdAt": "2024-10-19T18:48:20+00:00",
"updatedAt": "2024-10-19T18:49:15+00:00",
"version": 3,
"pages": 69
},
"relationships": [
{
"id": "e9fc6ec5-6fab-4baf-a0f2-733712246015",
"type": "scanlation_group",
"attributes": {
"name": "Dragon's Antlers",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"hu"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2023-03-04T08:55:24+00:00",
"updatedAt": "2023-12-21T17:48:24+00:00",
"version": 7
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "64b0146c-f719-4f2d-92ac-edbc574ddec1",
"type": "user",
"attributes": {
"username": "DEADDragonoid",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_USER"
],
"version": 8575
}
}
]
},
{
"id": "643e42ab-9d53-4c7f-bf04-1041b17935b2",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "",
"translatedLanguage": "zh-hk",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2021-02-09T20:15:58+00:00",
"readableAt": "2021-02-09T20:15:58+00:00",
"createdAt": "2021-02-09T20:15:58+00:00",
"updatedAt": "2021-02-09T20:15:58+00:00",
"version": 1,
"pages": 69
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "6fbc54a0-c317-4f9a-8dca-0846858b95de",
"type": "user",
"attributes": {
"username": "calblbkao",
"roles": [
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"version": 1152
}
}
]
},
{
"id": "a35f533c-336a-4507-b93d-70a6b61bc3f0",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.02",
"title": "O Bras\u00e3o",
"translatedLanguage": "pt-br",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-03-29T17:22:27+00:00",
"readableAt": "2025-03-29T17:22:27+00:00",
"createdAt": "2025-03-29T17:22:25+00:00",
"updatedAt": "2025-03-29T17:25:13+00:00",
"version": 3,
"pages": 70
},
"relationships": [
{
"id": "14e5ce92-0226-418c-b336-052d417b7514",
"type": "scanlation_group",
"attributes": {
"name": "El Pochita Scan",
"altNames": [],
"locked": true,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Scan iniciada por uma pessoa com o objetivo de traduzir apenas chainsaw man (eu n\u00e3o traduzo apenas chainsaw man)",
"twitter": "https:\/\/twitter.com\/Polarmccormick",
"mangaUpdates": null,
"focusedLanguages": [],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2025-03-16T23:15:42+00:00",
"updatedAt": "2025-03-23T04:07:26+00:00",
"version": 4
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "d01f5abf-64c8-43e9-a813-89ac72c200b0",
"type": "user",
"attributes": {
"username": "Polardelimao",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_USER"
],
"version": 5
}
}
]
},
{
"id": "833bd7c8-349b-4370-b6bf-a4408cf9af8f",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "Gardienii dorintei partea I",
"translatedLanguage": "ro",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2023-03-31T18:44:51+00:00",
"readableAt": "2023-03-31T18:44:51+00:00",
"createdAt": "2023-03-31T18:44:51+00:00",
"updatedAt": "2023-03-31T18:47:09+00:00",
"version": 4,
"pages": 56
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "7a0030ce-0472-4777-a0d1-219f16ba7899",
"type": "user",
"attributes": {
"username": "Mystery98",
"roles": [
"ROLE_MEMBER"
],
"version": 1
}
}
]
},
{
"id": "9b2c4997-e4de-408a-8cd0-6f4adfd15ea6",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "O guardi\u00e3o do Anjo do desejo (1)",
"translatedLanguage": "pt-br",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-05-30T22:28:38+00:00",
"readableAt": "2022-05-30T22:28:38+00:00",
"createdAt": "2022-05-30T22:28:36+00:00",
"updatedAt": "2022-05-30T22:28:44+00:00",
"version": 3,
"pages": 57
},
"relationships": [
{
"id": "8090b646-d4f8-4687-a392-05aaaa9dde91",
"type": "scanlation_group",
"attributes": {
"name": "Kousen Scans",
"altNames": [],
"locked": false,
"website": "http:\/\/kousenscans.com.br\/",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"pt-br"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "7014d0f0-cea5-4d8b-b28c-a9aaf7f773b5",
"type": "user",
"attributes": {
"username": "Hajime_uploader",
"roles": [
"ROLE_GROUP_MEMBER",
"ROLE_USER",
"ROLE_POWER_UPLOADER"
],
"version": 2477
}
}
]
},
{
"id": "dddecd59-8636-483f-8f2e-31e69d15c920",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "C0 Epiz\u00f3d: - A v\u00e1gy \u0151rangyalai (1)",
"translatedLanguage": "hu",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2024-09-22T18:43:56+00:00",
"readableAt": "2024-09-22T18:43:56+00:00",
"createdAt": "2024-09-22T18:43:56+00:00",
"updatedAt": "2025-07-04T22:21:34+00:00",
"version": 8,
"pages": 57
},
"relationships": [
{
"id": "232dd593-8163-4b7d-9848-4c4dba0063a9",
"type": "scanlation_group",
"attributes": {
"name": "The Father Translations",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "thefathercontact@gmail.com",
"description": "Hali! A csoportunk c\u00e9lja, hogy megismertess\u00fck a magyar k\u00f6z\u00f6ns\u00e9get min\u00e9l t\u00f6bb seinen mang\u00e1val.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"hu"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2024-05-05T16:05:25+00:00",
"updatedAt": "2024-05-25T23:14:20+00:00",
"version": 4
}
},
{
"id": "deb85a19-d535-4303-8736-26acee931a8d",
"type": "scanlation_group",
"attributes": {
"name": "Anime Sekai Team",
"altNames": [],
"locked": false,
"website": "http:\/\/animesekaiteam.nhely.hu",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Egy magyar ford\u00edt\u00f3csapat magyaroknak.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"hu"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2025-05-10T17:21:50+00:00",
"version": 4
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f325cd78-550f-4f9e-845f-7d6a5d9df27c",
"type": "user",
"attributes": {
"username": "mafoto777",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_USER"
],
"avatarFileName": "3e40fad5-2d1b-494b-9f69-6e311edb5e5b.jpg",
"bannerFileName": null,
"version": 8
}
}
]
},
{
"id": "9f4c1ef0-346a-4296-9def-41b54256fb2e",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "\u0412\u0430\u0440\u0442\u043e\u0432\u0456 \u0436\u0430\u0434\u0430\u043d\u043d\u044f, \u0440\u043e\u0437\u0434\u0456\u043b \u043f\u0435\u0440\u0448\u0438\u0439",
"translatedLanguage": "uk",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-04-10T00:01:12+00:00",
"readableAt": "2022-04-10T00:01:12+00:00",
"createdAt": "2022-04-10T00:01:12+00:00",
"updatedAt": "2022-08-19T16:38:44+00:00",
"version": 4,
"pages": 56
},
"relationships": [
{
"id": "40eefe2a-d99e-4aa4-b864-55ed68d58309",
"type": "scanlation_group",
"attributes": {
"name": "\ud835\udd71\ud835\udd86\ud835\udd91\ud835\udd88\ud835\udd94\ud835\udd93\ud835\udd8a \ud835\udd89\ud835\udd8e \ud835\udd77\ud835\udd9a\ud835\udd88\ud835\udd8a",
"altNames": [],
"locked": false,
"website": "https:\/\/t.me\/IT_IS_ME1987",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "So, I'm simply... One hell of a translator. But usually I work alone.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"uk"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-04-09T21:14:26+00:00",
"updatedAt": "2022-04-09T23:56:55+00:00",
"version": 2
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "c7e91c3e-eb1c-484a-8275-df19f2e82565",
"type": "user",
"attributes": {
"username": "IT_IS_ME1987",
"roles": [
"ROLE_USER",
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER"
],
"version": 9
}
}
]
},
{
"id": "a33bbe00-21ed-4469-8d5f-34e166dd140b",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "\u0425\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u0456 \u0436\u0430\u0434\u0430\u043d\u043d\u044f, \u0447\u0430\u0441\u0442\u0438\u043d\u0430 \u043f\u0435\u0440\u0448\u0430",
"translatedLanguage": "uk",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-11-28T23:45:07+00:00",
"readableAt": "2025-11-28T23:45:07+00:00",
"createdAt": "2025-11-28T23:45:07+00:00",
"updatedAt": "2025-11-28T23:47:33+00:00",
"version": 3,
"pages": 56
},
"relationships": [
{
"id": "e6883fea-317e-4af8-ab4f-877451c5f6f5",
"type": "scanlation_group",
"attributes": {
"name": "Chimu Team",
"altNames": [],
"locked": false,
"website": "https:\/\/t.me\/+FXxPFAO2k7pmOTFi",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "chimu.team.ua@gmail.com",
"description": null,
"twitter": "https:\/\/twitter.com\/ChimuTeam",
"mangaUpdates": null,
"focusedLanguages": [
"uk"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-06-17T22:08:29+00:00",
"updatedAt": "2022-08-26T12:55:24+00:00",
"version": 5
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "c7e91c3e-eb1c-484a-8275-df19f2e82565",
"type": "user",
"attributes": {
"username": "IT_IS_ME1987",
"roles": [
"ROLE_USER",
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER"
],
"version": 9
}
}
]
},
{
"id": "454bbf68-b00e-4a1f-8bad-934f252dd6d4",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "Anjo da Guarda do Desejo (1)",
"translatedLanguage": "pt-br",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-02-15T05:55:23+00:00",
"readableAt": "2025-02-15T05:55:23+00:00",
"createdAt": "2025-02-15T05:55:22+00:00",
"updatedAt": "2025-02-15T05:56:09+00:00",
"version": 3,
"pages": 58
},
"relationships": [
{
"id": "fa52c582-94e3-4a58-899d-4f7f2149aafb",
"type": "scanlation_group",
"attributes": {
"name": "Centipede Scans",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": "3u4hDNRBjb",
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"pt-br"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-02-10T17:40:16+00:00",
"updatedAt": "2025-05-12T20:39:27+00:00",
"version": 8
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "32a865d6-9163-4f0b-be8a-5c7581098d8d",
"type": "user",
"attributes": {
"username": "Bat17",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_POWER_UPLOADER",
"ROLE_USER"
],
"version": 8819
}
}
]
},
{
"id": "55e2674f-0d44-4539-b1ba-94ef30c7c5f9",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "Os Guardi\u00f5es do Desejo",
"translatedLanguage": "pt-br",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-03-29T17:26:57+00:00",
"readableAt": "2025-03-29T17:26:57+00:00",
"createdAt": "2025-03-29T17:26:56+00:00",
"updatedAt": "2025-03-29T17:30:15+00:00",
"version": 3,
"pages": 56
},
"relationships": [
{
"id": "14e5ce92-0226-418c-b336-052d417b7514",
"type": "scanlation_group",
"attributes": {
"name": "El Pochita Scan",
"altNames": [],
"locked": true,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Scan iniciada por uma pessoa com o objetivo de traduzir apenas chainsaw man (eu n\u00e3o traduzo apenas chainsaw man)",
"twitter": "https:\/\/twitter.com\/Polarmccormick",
"mangaUpdates": null,
"focusedLanguages": [],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2025-03-16T23:15:42+00:00",
"updatedAt": "2025-03-23T04:07:26+00:00",
"version": 4
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "d01f5abf-64c8-43e9-a813-89ac72c200b0",
"type": "user",
"attributes": {
"username": "Polardelimao",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_USER"
],
"version": 5
}
}
]
},
{
"id": "5bbe7bce-0358-4189-a26f-db4ad5a2e9cd",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "",
"translatedLanguage": "zh-hk",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2021-02-09T20:12:15+00:00",
"readableAt": "2021-02-09T20:12:15+00:00",
"createdAt": "2021-02-09T20:12:15+00:00",
"updatedAt": "2021-02-09T20:12:15+00:00",
"version": 1,
"pages": 56
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "6fbc54a0-c317-4f9a-8dca-0846858b95de",
"type": "user",
"attributes": {
"username": "calblbkao",
"roles": [
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"version": 1152
}
}
]
},
{
"id": "50379cfc-3a1d-490c-879c-70cdff73521a",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "Penjaga Nafsu, Bagian 1",
"translatedLanguage": "id",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-03-11T19:03:03+00:00",
"readableAt": "2022-03-11T19:03:03+00:00",
"createdAt": "2022-03-11T19:03:03+00:00",
"updatedAt": "2023-07-14T19:13:50+00:00",
"version": 5,
"pages": 59
},
"relationships": [
{
"id": "dd6d4d25-7e19-4286-a103-afe60105aeac",
"type": "scanlation_group",
"attributes": {
"name": "Tempat Singgah Scans",
"altNames": [],
"locked": true,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "tempatsinggah.cn@gmail.com",
"description": "Manga Scanlations group located in Indonesia. Tempat Singgah Scans created first on Facebook in 2020 and decided to expanse the group to Mangadex in 2021. All the work is done by one man, mostly.",
"twitter": "https:\/\/twitter.com\/damnizaki",
"mangaUpdates": null,
"focusedLanguages": [
"id"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-02-08T16:28:17+00:00",
"updatedAt": "2023-03-30T17:42:03+00:00",
"version": 16
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "4f524a18-dbe0-42a3-82df-b624d2370857",
"type": "user",
"attributes": {
"username": "dzakijack",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_POWER_UPLOADER",
"ROLE_USER"
],
"version": 2245
}
}
]
},
{
"id": "74166770-3bb5-4fa3-b4c4-b767f9e56f76",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "0.03",
"translatedLanguage": "tr",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2021-08-24T00:57:37+00:00",
"readableAt": "2021-08-24T00:57:37+00:00",
"createdAt": "2021-08-24T00:57:37+00:00",
"updatedAt": "2021-08-24T00:58:01+00:00",
"version": 3,
"pages": 56
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "1ceb9388-cc1b-47a5-b427-820cf7abcfed",
"type": "user",
"attributes": {
"username": "Kraptor121",
"roles": [
"ROLE_MEMBER"
],
"version": 4
}
}
]
},
{
"id": "455f3a93-8d9a-4a8d-95e3-a45a7ea90ce0",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "\u0425\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u0438 \u0436\u0435\u043b\u0430\u043d\u0438\u0439 II",
"translatedLanguage": "ru",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2023-05-16T12:18:46+00:00",
"readableAt": "2023-05-16T12:18:46+00:00",
"createdAt": "2023-05-16T12:18:45+00:00",
"updatedAt": "2023-05-16T12:19:26+00:00",
"version": 3,
"pages": 60
},
"relationships": [
{
"id": "ac193a20-195b-4768-b1cf-f2a28d24f22d",
"type": "scanlation_group",
"attributes": {
"name": "Berserk World",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"ru"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "2eeee16f-8fcb-4150-a4bb-28691ff6d871",
"type": "user",
"attributes": {
"username": "Nastanados",
"roles": [
"ROLE_USER",
"ROLE_POWER_UPLOADER"
],
"version": 3
}
}
]
},
{
"id": "b979f23f-6a43-493e-aafa-61cf5917f8c7",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "Anio\u0142 str\u00f3\u017c po\u017c\u0105dania (1)",
"translatedLanguage": "pl",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-04-08T18:52:34+00:00",
"readableAt": "2022-04-08T18:52:34+00:00",
"createdAt": "2022-04-08T18:52:34+00:00",
"updatedAt": "2022-06-27T13:48:15+00:00",
"version": 4,
"pages": 57
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f97be60b-8a9f-4802-bf80-89e6f73a757a",
"type": "user",
"attributes": {
"username": "Anonimowy",
"roles": [
"ROLE_USER"
],
"version": 2
}
}
]
},
{
"id": "e1cf00ad-d348-471a-bb12-7eee78085ebc",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "Arzunun Muhaf\u0131zlar\u0131!!",
"translatedLanguage": "tr",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-12-25T18:36:56+00:00",
"readableAt": "2022-12-25T18:36:56+00:00",
"createdAt": "2022-12-25T18:36:56+00:00",
"updatedAt": "2022-12-26T12:13:05+00:00",
"version": 8,
"pages": 57
},
"relationships": [
{
"id": "9b0d2c8b-93bf-4fca-8e57-5997dd8b9380",
"type": "scanlation_group",
"attributes": {
"name": "Garcia Fansub",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": "9ytVXWzG5a",
"contactEmail": null,
"description": "07.03.2021\\'de GermanReich taraf\u0131ndan kurulan bu Fansub insanlar\u0131n mangalara ve animelere h\u0131zl\u0131 ve kolay bir \u015fekilde ula\u015f\u0131lmas\u0131n\u0131 sa\u011flamak i\u00e7in yola \u00e7\u0131kt\u0131 ve ilerleyi\u015fini s\u00fcrd\u00fcr\u00fcyor.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-09-21T11:33:18+00:00",
"updatedAt": "2021-09-21T11:33:18+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f6077008-78fe-4f15-84db-d13b5aff4939",
"type": "user",
"attributes": {
"username": "GermanReich",
"roles": [
"ROLE_BANNED"
],
"version": 8
}
}
]
},
{
"id": "d65b2ffa-f9cc-4095-b558-fa83837d9ae7",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "\u015eehvetin Muhaf\u0131zlar\u0131: B\u00f6l\u00fcm Bir",
"translatedLanguage": "tr",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2023-04-21T19:03:10+00:00",
"readableAt": "2023-04-21T19:03:10+00:00",
"createdAt": "2023-04-21T19:03:08+00:00",
"updatedAt": "2023-04-21T19:04:02+00:00",
"version": 3,
"pages": 57
},
"relationships": [
{
"id": "2210d7ea-29d4-4156-8030-2af75566ec18",
"type": "scanlation_group",
"attributes": {
"name": "TheWildDeer",
"altNames": [],
"locked": true,
"website": "https:\/\/s.id\/thewilddeer",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "thewilddeertranslation@gmail.com",
"description": "Karanl\u0131k mangalar\u0131n, karanl\u0131k \u00e7eviri grubu.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"tr"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2023-04-14T15:51:15+00:00",
"updatedAt": "2023-04-30T16:22:20+00:00",
"version": 5
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f237454a-a93a-4908-b257-3090987ef811",
"type": "user",
"attributes": {
"username": "Dorylaion",
"roles": [
"ROLE_GROUP_MEMBER",
"ROLE_USER",
"ROLE_GROUP_LEADER"
],
"version": 842
}
}
]
},
{
"id": "2ffb6363-0001-4359-a63f-262e22b5ff40",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "Guardianes de la codicia (1)",
"translatedLanguage": "es",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2024-12-11T01:51:14+00:00",
"readableAt": "2024-12-11T01:51:14+00:00",
"createdAt": "2024-12-11T01:51:14+00:00",
"updatedAt": "2024-12-11T01:52:38+00:00",
"version": 3,
"pages": 56
},
"relationships": [
{
"id": "d2a5b511-8e05-4ccb-9f48-85abcb728a2e",
"type": "scanlation_group",
"attributes": {
"name": "Gl\u00e9nat Spain (Ex-Licenses)",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Creada como filial de la editorial francesa Gl\u00e9nat Editions. \n1990-2011",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"es"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2024-06-10T16:28:11+00:00",
"version": 3
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "0ade8309-34e4-461c-9564-c1fef47bd38b",
"type": "user",
"attributes": {
"username": "Trite",
"roles": [
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"version": 381
}
}
]
},
{
"id": "0ef160be-d552-471e-a841-a027b3410430",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "The Guardians of Desire (1)",
"translatedLanguage": "en",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2018-01-31T07:14:12+00:00",
"readableAt": "2018-01-31T07:14:12+00:00",
"createdAt": "2018-01-31T07:14:12+00:00",
"updatedAt": "2018-01-31T07:14:12+00:00",
"version": 1,
"pages": 58
},
"relationships": [
{
"id": "4b98efe6-e5f2-4077-b9b3-193e3d9c5022",
"type": "scanlation_group",
"attributes": {
"name": "Band of the Hawks",
"altNames": [
{
"en": "Hawks"
}
],
"locked": false,
"website": "https:\/\/web.archive.org\/web\/20071020172415\/http:\/\/thehawks.org\/",
"ircServer": "irc.irchighway.net",
"ircChannel": "hawks",
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"en"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "b86e992f-c93c-4286-90d0-e1eba31cadf7",
"type": "user",
"attributes": {
"username": "Assasinart",
"roles": [
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"version": 16071
}
}
]
},
{
"id": "3c508e50-a91a-4fb0-9e63-683d83d707de",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "Los \u00c1ngeles Guardianes del deseo (1)",
"translatedLanguage": "es-la",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2021-09-16T04:39:09+00:00",
"readableAt": "2021-09-16T04:39:09+00:00",
"createdAt": "2021-09-16T04:39:09+00:00",
"updatedAt": "2021-09-16T04:48:56+00:00",
"version": 4,
"pages": 58
},
"relationships": [
{
"id": "9ca0a878-9657-4342-9305-907969b01180",
"type": "scanlation_group",
"attributes": {
"name": "Seinen Den",
"altNames": [],
"locked": false,
"website": "https:\/\/seinenden.mforos.com\/",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "cmam_sd@live.com.mx",
"description": "Seinen Den",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"es-la"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-09-15T02:25:49+00:00",
"version": 3
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "7083af20-87f1-4f71-8413-bf316f938f06",
"type": "user",
"attributes": {
"username": "cmam_sd",
"roles": [
"ROLE_GROUP_MEMBER",
"ROLE_USER",
"ROLE_GROUP_LEADER"
],
"version": 8
}
}
]
},
{
"id": "72b4542d-b1bc-4445-a9a2-f22b7cf028d1",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "0.03",
"title": "Gardienii dorin\u021bei",
"translatedLanguage": "ro",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2023-05-08T23:00:26+00:00",
"readableAt": "2023-05-08T23:00:26+00:00",
"createdAt": "2023-05-08T23:00:16+00:00",
"updatedAt": "2023-05-08T23:01:23+00:00",
"version": 3,
"pages": 58
},
"relationships": [
{
"id": "2fa13110-993a-4f51-9336-9eec7eece8de",
"type": "scanlation_group",
"attributes": {
"name": "Anime Nexus",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Monogatari Family https:\/\/anime-nexus.io\/",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"ro"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-10-19T23:10:57+00:00",
"updatedAt": "2026-02-13T17:28:33+00:00",
"version": 7
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "8f3af679-922c-4b67-87ae-4ad56796977d",
"type": "user",
"attributes": {
"username": "bing021",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"avatarFileName": null,
"bannerFileName": null,
"version": 16625
}
}
]
},
{
"id": "12a7fa27-7002-4e9c-a414-f53928d808d3",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "1",
"title": "\u0427\u043e\u0440\u043d\u0438\u0439 \u043c\u0435\u0447\u043d\u0438\u043a",
"translatedLanguage": "uk",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-03-27T12:47:14+00:00",
"readableAt": "2022-03-27T12:47:14+00:00",
"createdAt": "2022-03-27T12:47:14+00:00",
"updatedAt": "2022-03-28T08:44:36+00:00",
"version": 9,
"pages": 92
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "09356223-4b91-4a45-892d-ded1f9c2f774",
"type": "user",
"attributes": {
"username": "Frozsenxs",
"roles": [
"ROLE_USER"
],
"version": 2
}
}
]
},
{
"id": "0c9be97a-c3cf-468c-9198-cc2a84ce809c",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "1",
"title": "\u0427\u0451\u0440\u043d\u044b\u0439 \u043c\u0435\u0447\u043d\u0438\u043a",
"translatedLanguage": "ru",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2018-05-03T17:13:48+00:00",
"readableAt": "2018-05-03T17:13:48+00:00",
"createdAt": "2018-05-03T17:13:48+00:00",
"updatedAt": "2018-05-03T17:13:48+00:00",
"version": 1,
"pages": 97
},
"relationships": [
{
"id": "33963140-173a-47f0-bbe5-83171f2b30f3",
"type": "scanlation_group",
"attributes": {
"name": "Okami",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"ru"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "e19519ce-8c5f-4d7c-8280-704a87d34429",
"type": "user",
"attributes": {
"username": "Lymus",
"roles": [
"ROLE_ADMIN",
"ROLE_GLOBAL_MODERATOR",
"ROLE_GROUP_MEMBER",
"ROLE_MD_AT_HOME",
"ROLE_POWER_UPLOADER",
"ROLE_STAFF"
],
"avatarFileName": null,
"bannerFileName": null,
"version": 6676
}
}
]
},
{
"id": "43ed9a4f-b453-4b22-84a6-e8585aed770a",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "1",
"title": "\u039f \u039c\u03b1\u03cd\u03c1\u03bf\u03c2 \u039e\u03b9\u03c6\u03bf\u03bc\u03ac\u03c7\u03bf\u03c2",
"translatedLanguage": "el",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2024-04-20T11:39:37+00:00",
"readableAt": "2024-04-20T11:39:37+00:00",
"createdAt": "2024-04-20T11:39:36+00:00",
"updatedAt": "2024-04-20T11:40:29+00:00",
"version": 3,
"pages": 87
},
"relationships": [
{
"id": "01ca2222-3c65-4b3a-9960-f6bc6d79fe3b",
"type": "scanlation_group",
"attributes": {
"name": "\u0394.\u0391.\u039a. (\u0394\u03c5\u03c4\u03b9\u03ba\u03ae \u0391\u03c4\u03c4\u03b9\u03ba\u03ae \u039a\u03c1\u03bf\u03cd)",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": "GbrJsKXA4w",
"contactEmail": null,
"description": "",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"el"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2023-03-20T10:22:49+00:00",
"updatedAt": "2023-03-23T07:55:39+00:00",
"version": 3
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "1d5705b6-b363-477d-8527-910fd669dfd7",
"type": "user",
"attributes": {
"username": "ARDIOK",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_USER"
],
"version": 6663
}
}
]
},
{
"id": "aa769576-260e-47b2-9b66-32ffe187cee9",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "1",
"title": "\u0427\u0435\u0440\u043d\u0438\u044f\u0442 \u043c\u0435\u0447\u043e\u043d\u043e\u0441\u0435\u0446",
"translatedLanguage": "bg",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-09-05T13:04:24+00:00",
"readableAt": "2025-09-05T13:04:24+00:00",
"createdAt": "2025-09-05T13:04:23+00:00",
"updatedAt": "2025-09-05T13:06:58+00:00",
"version": 3,
"pages": 89
},
"relationships": [
{
"id": "5f0e8289-75bd-41f4-ade2-2d9f12c56eaa",
"type": "scanlation_group",
"attributes": {
"name": "OtakuBG",
"altNames": [],
"locked": false,
"website": null,
"ircServer": "otaku.bg",
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"bg"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2025-08-26T23:45:02+00:00",
"updatedAt": "2025-08-27T22:59:24+00:00",
"version": 2
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "a2dd4f97-a874-444b-9670-fc4e2ce99336",
"type": "user",
"attributes": {
"username": "qnkov",
"roles": [
"ROLE_MEMBER",
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER"
],
"version": 3
}
}
]
},
{
"id": "38310cd3-d890-4d0e-bc21-d87b37fae891",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "2",
"title": "\u0411\u0435\u043b\u0435\u0433\u044a\u0442",
"translatedLanguage": "bg",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-09-05T13:05:39+00:00",
"readableAt": "2025-09-05T13:05:39+00:00",
"createdAt": "2025-09-05T13:05:39+00:00",
"updatedAt": "2025-09-05T13:07:51+00:00",
"version": 3,
"pages": 69
},
"relationships": [
{
"id": "5f0e8289-75bd-41f4-ade2-2d9f12c56eaa",
"type": "scanlation_group",
"attributes": {
"name": "OtakuBG",
"altNames": [],
"locked": false,
"website": null,
"ircServer": "otaku.bg",
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"bg"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2025-08-26T23:45:02+00:00",
"updatedAt": "2025-08-27T22:59:24+00:00",
"version": 2
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "a2dd4f97-a874-444b-9670-fc4e2ce99336",
"type": "user",
"attributes": {
"username": "qnkov",
"roles": [
"ROLE_MEMBER",
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER"
],
"version": 3
}
}
]
},
{
"id": "796294e5-c05c-45e5-a5b5-3a9214b34a96",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "2",
"title": "\u03a4\u03bf \u03a3\u03b7\u03bc\u03ac\u03b4\u03b9",
"translatedLanguage": "el",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2024-08-27T08:04:26+00:00",
"readableAt": "2024-08-27T08:04:26+00:00",
"createdAt": "2024-08-27T08:04:26+00:00",
"updatedAt": "2024-08-27T08:04:54+00:00",
"version": 3,
"pages": 69
},
"relationships": [
{
"id": "01ca2222-3c65-4b3a-9960-f6bc6d79fe3b",
"type": "scanlation_group",
"attributes": {
"name": "\u0394.\u0391.\u039a. (\u0394\u03c5\u03c4\u03b9\u03ba\u03ae \u0391\u03c4\u03c4\u03b9\u03ba\u03ae \u039a\u03c1\u03bf\u03cd)",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": "GbrJsKXA4w",
"contactEmail": null,
"description": "",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"el"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2023-03-20T10:22:49+00:00",
"updatedAt": "2023-03-23T07:55:39+00:00",
"version": 3
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "1d5705b6-b363-477d-8527-910fd669dfd7",
"type": "user",
"attributes": {
"username": "ARDIOK",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_USER"
],
"version": 6663
}
}
]
},
{
"id": "73186794-29e5-45bb-98f7-aa207bbbe4c0",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "2",
"title": "\u041a\u043b\u0435\u0439\u043c\u043e",
"translatedLanguage": "ru",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2018-05-03T17:14:32+00:00",
"readableAt": "2018-05-03T17:14:32+00:00",
"createdAt": "2018-05-03T17:14:32+00:00",
"updatedAt": "2018-05-03T17:14:32+00:00",
"version": 1,
"pages": 73
},
"relationships": [
{
"id": "33963140-173a-47f0-bbe5-83171f2b30f3",
"type": "scanlation_group",
"attributes": {
"name": "Okami",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"ru"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "e19519ce-8c5f-4d7c-8280-704a87d34429",
"type": "user",
"attributes": {
"username": "Lymus",
"roles": [
"ROLE_ADMIN",
"ROLE_GLOBAL_MODERATOR",
"ROLE_GROUP_MEMBER",
"ROLE_MD_AT_HOME",
"ROLE_POWER_UPLOADER",
"ROLE_STAFF"
],
"avatarFileName": null,
"bannerFileName": null,
"version": 6676
}
}
]
},
{
"id": "082584ac-bdc6-4069-bffd-596104eb1098",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "3",
"title": "\u0410\u043d\u0433\u0435\u043b-\u0445\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u044c \u0436\u0435\u043b\u0430\u043d\u0438\u044f I",
"translatedLanguage": "ru",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2018-05-03T17:15:21+00:00",
"readableAt": "2018-05-03T17:15:21+00:00",
"createdAt": "2018-05-03T17:15:21+00:00",
"updatedAt": "2018-05-03T17:15:21+00:00",
"version": 1,
"pages": 62
},
"relationships": [
{
"id": "33963140-173a-47f0-bbe5-83171f2b30f3",
"type": "scanlation_group",
"attributes": {
"name": "Okami",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"ru"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "e19519ce-8c5f-4d7c-8280-704a87d34429",
"type": "user",
"attributes": {
"username": "Lymus",
"roles": [
"ROLE_ADMIN",
"ROLE_GLOBAL_MODERATOR",
"ROLE_GROUP_MEMBER",
"ROLE_MD_AT_HOME",
"ROLE_POWER_UPLOADER",
"ROLE_STAFF"
],
"avatarFileName": null,
"bannerFileName": null,
"version": 6676
}
}
]
},
{
"id": "6f19f021-d0e7-4d0a-b89f-12051bbc2e6a",
"type": "chapter",
"attributes": {
"volume": "1",
"chapter": "3",
"title": "\u041f\u0430\u0437\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u043d\u0430 \u0436\u0435\u043b\u0430\u043d\u0438\u0435\u0442\u043e \u2013 \u0433\u043b\u0430\u0432\u0430 1",
"translatedLanguage": "bg",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-09-05T13:07:53+00:00",
"readableAt": "2025-09-05T13:07:53+00:00",
"createdAt": "2025-09-05T13:07:52+00:00",
"updatedAt": "2025-09-05T13:09:04+00:00",
"version": 3,
"pages": 55
},
"relationships": [
{
"id": "5f0e8289-75bd-41f4-ade2-2d9f12c56eaa",
"type": "scanlation_group",
"attributes": {
"name": "OtakuBG",
"altNames": [],
"locked": false,
"website": null,
"ircServer": "otaku.bg",
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"bg"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2025-08-26T23:45:02+00:00",
"updatedAt": "2025-08-27T22:59:24+00:00",
"version": 2
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "a2dd4f97-a874-444b-9670-fc4e2ce99336",
"type": "user",
"attributes": {
"username": "qnkov",
"roles": [
"ROLE_MEMBER",
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER"
],
"version": 3
}
}
]
},
{
"id": "2a4b1c71-0500-4d25-9094-dd3947c3922a",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.04",
"title": "Os Guardi\u00f5es do Desejo Parte 2",
"translatedLanguage": "pt-br",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-03-29T18:15:48+00:00",
"readableAt": "2025-03-29T18:15:48+00:00",
"createdAt": "2025-03-29T18:15:48+00:00",
"updatedAt": "2025-03-29T18:19:34+00:00",
"version": 3,
"pages": 116
},
"relationships": [
{
"id": "14e5ce92-0226-418c-b336-052d417b7514",
"type": "scanlation_group",
"attributes": {
"name": "El Pochita Scan",
"altNames": [],
"locked": true,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Scan iniciada por uma pessoa com o objetivo de traduzir apenas chainsaw man (eu n\u00e3o traduzo apenas chainsaw man)",
"twitter": "https:\/\/twitter.com\/Polarmccormick",
"mangaUpdates": null,
"focusedLanguages": [],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2025-03-16T23:15:42+00:00",
"updatedAt": "2025-03-23T04:07:26+00:00",
"version": 4
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "d01f5abf-64c8-43e9-a813-89ac72c200b0",
"type": "user",
"attributes": {
"username": "Polardelimao",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_USER"
],
"version": 5
}
}
]
},
{
"id": "5260a014-2df6-4d09-8cbf-8f301ca0326b",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.04",
"title": "\u015eehvetin Muhaf\u0131zlar\u0131: B\u00f6l\u00fcm \u0130ki",
"translatedLanguage": "tr",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2023-04-25T12:33:16+00:00",
"readableAt": "2023-04-25T12:33:16+00:00",
"createdAt": "2023-04-25T12:33:16+00:00",
"updatedAt": "2023-04-25T19:30:08+00:00",
"version": 6,
"pages": 123
},
"relationships": [
{
"id": "2210d7ea-29d4-4156-8030-2af75566ec18",
"type": "scanlation_group",
"attributes": {
"name": "TheWildDeer",
"altNames": [],
"locked": true,
"website": "https:\/\/s.id\/thewilddeer",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "thewilddeertranslation@gmail.com",
"description": "Karanl\u0131k mangalar\u0131n, karanl\u0131k \u00e7eviri grubu.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"tr"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2023-04-14T15:51:15+00:00",
"updatedAt": "2023-04-30T16:22:20+00:00",
"version": 5
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f237454a-a93a-4908-b257-3090987ef811",
"type": "user",
"attributes": {
"username": "Dorylaion",
"roles": [
"ROLE_GROUP_MEMBER",
"ROLE_USER",
"ROLE_GROUP_LEADER"
],
"version": 842
}
}
]
},
{
"id": "573a9995-28fe-4e11-aab4-db87d49dd65c",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.04",
"title": "O guardi\u00e3o do Anjo do desejo (2)",
"translatedLanguage": "pt-br",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-05-30T22:33:33+00:00",
"readableAt": "2022-05-30T22:33:33+00:00",
"createdAt": "2022-05-30T22:33:33+00:00",
"updatedAt": "2022-05-30T22:34:00+00:00",
"version": 3,
"pages": 117
},
"relationships": [
{
"id": "8090b646-d4f8-4687-a392-05aaaa9dde91",
"type": "scanlation_group",
"attributes": {
"name": "Kousen Scans",
"altNames": [],
"locked": false,
"website": "http:\/\/kousenscans.com.br\/",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"pt-br"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "7014d0f0-cea5-4d8b-b28c-a9aaf7f773b5",
"type": "user",
"attributes": {
"username": "Hajime_uploader",
"roles": [
"ROLE_GROUP_MEMBER",
"ROLE_USER",
"ROLE_POWER_UPLOADER"
],
"version": 2477
}
}
]
},
{
"id": "f566ad35-7894-42b7-9d94-2eb1c38e3bec",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.04",
"title": "\u0412\u0430\u0440\u0442\u043e\u0432\u0456 \u0436\u0430\u0434\u0430\u043d\u043d\u044f, \u0440\u043e\u0437\u0434\u0456\u043b \u0434\u0440\u0443\u0433\u0438\u0439",
"translatedLanguage": "uk",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-04-12T18:22:23+00:00",
"readableAt": "2022-04-12T18:22:23+00:00",
"createdAt": "2022-04-12T18:22:22+00:00",
"updatedAt": "2022-08-20T07:52:19+00:00",
"version": 4,
"pages": 122
},
"relationships": [
{
"id": "40eefe2a-d99e-4aa4-b864-55ed68d58309",
"type": "scanlation_group",
"attributes": {
"name": "\ud835\udd71\ud835\udd86\ud835\udd91\ud835\udd88\ud835\udd94\ud835\udd93\ud835\udd8a \ud835\udd89\ud835\udd8e \ud835\udd77\ud835\udd9a\ud835\udd88\ud835\udd8a",
"altNames": [],
"locked": false,
"website": "https:\/\/t.me\/IT_IS_ME1987",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "So, I'm simply... One hell of a translator. But usually I work alone.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"uk"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-04-09T21:14:26+00:00",
"updatedAt": "2022-04-09T23:56:55+00:00",
"version": 2
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "c7e91c3e-eb1c-484a-8275-df19f2e82565",
"type": "user",
"attributes": {
"username": "IT_IS_ME1987",
"roles": [
"ROLE_USER",
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER"
],
"version": 9
}
}
]
},
{
"id": "88a02a43-9414-4e4f-a7b5-e9a30ecf76f4",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.04",
"title": "",
"translatedLanguage": "zh-hk",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2021-02-09T20:12:17+00:00",
"readableAt": "2021-02-09T20:12:17+00:00",
"createdAt": "2021-02-09T20:12:17+00:00",
"updatedAt": "2021-02-09T20:12:17+00:00",
"version": 1,
"pages": 118
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "6fbc54a0-c317-4f9a-8dca-0846858b95de",
"type": "user",
"attributes": {
"username": "calblbkao",
"roles": [
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"version": 1152
}
}
]
},
{
"id": "7198f447-abb2-4625-a8ca-78fe8107548d",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.04",
"title": "\u0425\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u0438 \u0436\u0435\u043b\u0430\u043d\u0438\u0439 II",
"translatedLanguage": "ru",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-06-18T16:16:08+00:00",
"readableAt": "2022-06-18T16:16:08+00:00",
"createdAt": "2022-06-18T16:16:08+00:00",
"updatedAt": "2024-11-17T15:25:04+00:00",
"version": 5,
"pages": 125
},
"relationships": [
{
"id": "ac193a20-195b-4768-b1cf-f2a28d24f22d",
"type": "scanlation_group",
"attributes": {
"name": "Berserk World",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"ru"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "2eeee16f-8fcb-4150-a4bb-28691ff6d871",
"type": "user",
"attributes": {
"username": "Nastanados",
"roles": [
"ROLE_USER",
"ROLE_POWER_UPLOADER"
],
"version": 3
}
}
]
},
{
"id": "a6984876-58d7-44f1-bed5-b605e0887899",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.04",
"title": "Anjo da Guarda do Desejo (2)",
"translatedLanguage": "pt-br",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-03-11T21:18:35+00:00",
"readableAt": "2025-03-11T21:18:35+00:00",
"createdAt": "2025-03-11T21:18:33+00:00",
"updatedAt": "2025-03-11T21:20:17+00:00",
"version": 3,
"pages": 120
},
"relationships": [
{
"id": "fa52c582-94e3-4a58-899d-4f7f2149aafb",
"type": "scanlation_group",
"attributes": {
"name": "Centipede Scans",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": "3u4hDNRBjb",
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"pt-br"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-02-10T17:40:16+00:00",
"updatedAt": "2025-05-12T20:39:27+00:00",
"version": 8
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "32a865d6-9163-4f0b-be8a-5c7581098d8d",
"type": "user",
"attributes": {
"username": "Bat17",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_POWER_UPLOADER",
"ROLE_USER"
],
"version": 8819
}
}
]
},
{
"id": "996b6b09-692f-4e85-ace3-1619772be2c7",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.04",
"title": "The Guardians of Desire (2) (LQ)",
"translatedLanguage": "en",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2018-01-31T07:21:18+00:00",
"readableAt": "2018-01-31T07:21:18+00:00",
"createdAt": "2018-01-31T07:21:18+00:00",
"updatedAt": "2018-01-31T07:21:18+00:00",
"version": 1,
"pages": 118
},
"relationships": [
{
"id": "4b98efe6-e5f2-4077-b9b3-193e3d9c5022",
"type": "scanlation_group",
"attributes": {
"name": "Band of the Hawks",
"altNames": [
{
"en": "Hawks"
}
],
"locked": false,
"website": "https:\/\/web.archive.org\/web\/20071020172415\/http:\/\/thehawks.org\/",
"ircServer": "irc.irchighway.net",
"ircChannel": "hawks",
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"en"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "b86e992f-c93c-4286-90d0-e1eba31cadf7",
"type": "user",
"attributes": {
"username": "Assasinart",
"roles": [
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"version": 16071
}
}
]
},
{
"id": "eb69e914-d8e5-4f25-a965-80814b27fd15",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.04",
"title": "Anio\u0142 str\u00f3\u017c po\u017c\u0105dania (2)",
"translatedLanguage": "pl",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-04-10T20:18:11+00:00",
"readableAt": "2022-04-10T20:18:11+00:00",
"createdAt": "2022-04-10T20:18:10+00:00",
"updatedAt": "2022-06-27T13:51:11+00:00",
"version": 4,
"pages": 116
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f97be60b-8a9f-4802-bf80-89e6f73a757a",
"type": "user",
"attributes": {
"username": "Anonimowy",
"roles": [
"ROLE_USER"
],
"version": 2
}
}
]
},
{
"id": "49614135-7eef-4f12-817c-f5fc8de19481",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.04",
"title": "Los \u00c1ngeles Guardianes del deseo (2)",
"translatedLanguage": "es-la",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2021-09-16T05:00:35+00:00",
"readableAt": "2021-09-16T05:00:35+00:00",
"createdAt": "2021-09-16T05:00:35+00:00",
"updatedAt": "2021-09-16T05:01:49+00:00",
"version": 3,
"pages": 121
},
"relationships": [
{
"id": "9ca0a878-9657-4342-9305-907969b01180",
"type": "scanlation_group",
"attributes": {
"name": "Seinen Den",
"altNames": [],
"locked": false,
"website": "https:\/\/seinenden.mforos.com\/",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "cmam_sd@live.com.mx",
"description": "Seinen Den",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"es-la"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-09-15T02:25:49+00:00",
"version": 3
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "7083af20-87f1-4f71-8413-bf316f938f06",
"type": "user",
"attributes": {
"username": "cmam_sd",
"roles": [
"ROLE_GROUP_MEMBER",
"ROLE_USER",
"ROLE_GROUP_LEADER"
],
"version": 8
}
}
]
},
{
"id": "3e22c3a6-770c-47c5-9295-9953643dc088",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.04",
"title": "Penjaga Nafsu, Bagian 2",
"translatedLanguage": "id",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-03-11T19:18:02+00:00",
"readableAt": "2022-03-11T19:18:02+00:00",
"createdAt": "2022-03-11T19:18:02+00:00",
"updatedAt": "2024-06-02T18:11:02+00:00",
"version": 5,
"pages": 123
},
"relationships": [
{
"id": "dd6d4d25-7e19-4286-a103-afe60105aeac",
"type": "scanlation_group",
"attributes": {
"name": "Tempat Singgah Scans",
"altNames": [],
"locked": true,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "tempatsinggah.cn@gmail.com",
"description": "Manga Scanlations group located in Indonesia. Tempat Singgah Scans created first on Facebook in 2020 and decided to expanse the group to Mangadex in 2021. All the work is done by one man, mostly.",
"twitter": "https:\/\/twitter.com\/damnizaki",
"mangaUpdates": null,
"focusedLanguages": [
"id"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-02-08T16:28:17+00:00",
"updatedAt": "2023-03-30T17:42:03+00:00",
"version": 16
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "4f524a18-dbe0-42a3-82df-b624d2370857",
"type": "user",
"attributes": {
"username": "dzakijack",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_POWER_UPLOADER",
"ROLE_USER"
],
"version": 2245
}
}
]
},
{
"id": "60bc52ec-40d7-46e0-a081-3dbbaee8b865",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.04",
"title": "D0 Epiz\u00f3d: - A v\u00e1gy \u0151rangyalai (2)",
"translatedLanguage": "hu",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2024-10-13T17:13:06+00:00",
"readableAt": "2024-10-13T17:13:06+00:00",
"createdAt": "2024-10-13T17:13:05+00:00",
"updatedAt": "2025-07-09T00:32:05+00:00",
"version": 10,
"pages": 122
},
"relationships": [
{
"id": "232dd593-8163-4b7d-9848-4c4dba0063a9",
"type": "scanlation_group",
"attributes": {
"name": "The Father Translations",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "thefathercontact@gmail.com",
"description": "Hali! A csoportunk c\u00e9lja, hogy megismertess\u00fck a magyar k\u00f6z\u00f6ns\u00e9get min\u00e9l t\u00f6bb seinen mang\u00e1val.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"hu"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2024-05-05T16:05:25+00:00",
"updatedAt": "2024-05-25T23:14:20+00:00",
"version": 4
}
},
{
"id": "deb85a19-d535-4303-8736-26acee931a8d",
"type": "scanlation_group",
"attributes": {
"name": "Anime Sekai Team",
"altNames": [],
"locked": false,
"website": "http:\/\/animesekaiteam.nhely.hu",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Egy magyar ford\u00edt\u00f3csapat magyaroknak.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"hu"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2025-05-10T17:21:50+00:00",
"version": 4
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f325cd78-550f-4f9e-845f-7d6a5d9df27c",
"type": "user",
"attributes": {
"username": "mafoto777",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_USER"
],
"avatarFileName": "3e40fad5-2d1b-494b-9f69-6e311edb5e5b.jpg",
"bannerFileName": null,
"version": 8
}
}
]
},
{
"id": "bd31214c-2cec-434c-a4a5-75f8d915d5b2",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.04",
"title": "Gardienii dorin\u021bei, partea a 2-a",
"translatedLanguage": "ro",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2023-05-08T23:31:57+00:00",
"readableAt": "2023-05-08T23:31:57+00:00",
"createdAt": "2023-05-08T23:31:57+00:00",
"updatedAt": "2023-05-08T23:34:11+00:00",
"version": 3,
"pages": 123
},
"relationships": [
{
"id": "2fa13110-993a-4f51-9336-9eec7eece8de",
"type": "scanlation_group",
"attributes": {
"name": "Anime Nexus",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Monogatari Family https:\/\/anime-nexus.io\/",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"ro"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-10-19T23:10:57+00:00",
"updatedAt": "2026-02-13T17:28:33+00:00",
"version": 7
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "8f3af679-922c-4b67-87ae-4ad56796977d",
"type": "user",
"attributes": {
"username": "bing021",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"avatarFileName": null,
"bannerFileName": null,
"version": 16625
}
}
]
},
{
"id": "da0834a0-e1d6-4bd9-bb6a-15d08de9ff77",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.04",
"title": "Guardianes de la codicia (2)",
"translatedLanguage": "es",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2024-12-11T01:52:21+00:00",
"readableAt": "2024-12-11T01:52:21+00:00",
"createdAt": "2024-12-11T01:52:21+00:00",
"updatedAt": "2024-12-11T01:54:07+00:00",
"version": 3,
"pages": 120
},
"relationships": [
{
"id": "d2a5b511-8e05-4ccb-9f48-85abcb728a2e",
"type": "scanlation_group",
"attributes": {
"name": "Gl\u00e9nat Spain (Ex-Licenses)",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Creada como filial de la editorial francesa Gl\u00e9nat Editions. \n1990-2011",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"es"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2024-06-10T16:28:11+00:00",
"version": 3
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "0ade8309-34e4-461c-9564-c1fef47bd38b",
"type": "user",
"attributes": {
"username": "Trite",
"roles": [
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"version": 381
}
}
]
},
{
"id": "dbba2543-1279-4fae-b5d9-e7448cafb911",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.04",
"title": "Arzunun Muhaf\u0131zlar\u0131 1",
"translatedLanguage": "tr",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2021-08-23T23:25:38+00:00",
"readableAt": "2021-08-23T23:25:38+00:00",
"createdAt": "2021-08-23T23:25:38+00:00",
"updatedAt": "2021-08-23T23:25:48+00:00",
"version": 3,
"pages": 118
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "1ceb9388-cc1b-47a5-b427-820cf7abcfed",
"type": "user",
"attributes": {
"username": "Kraptor121",
"roles": [
"ROLE_MEMBER"
],
"version": 4
}
}
]
},
{
"id": "dbea90d5-3f56-4970-8aaf-fb337b9e735a",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.04",
"title": "\u0425\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u0456 \u0436\u0430\u0434\u0430\u043d\u043d\u044f, \u0447\u0430\u0441\u0442\u0438\u043d\u0430 \u0434\u0440\u0443\u0433\u0430",
"translatedLanguage": "uk",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-11-28T23:47:47+00:00",
"readableAt": "2025-11-28T23:47:47+00:00",
"createdAt": "2025-11-28T23:47:46+00:00",
"updatedAt": "2025-11-28T23:53:07+00:00",
"version": 3,
"pages": 120
},
"relationships": [
{
"id": "e6883fea-317e-4af8-ab4f-877451c5f6f5",
"type": "scanlation_group",
"attributes": {
"name": "Chimu Team",
"altNames": [],
"locked": false,
"website": "https:\/\/t.me\/+FXxPFAO2k7pmOTFi",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "chimu.team.ua@gmail.com",
"description": null,
"twitter": "https:\/\/twitter.com\/ChimuTeam",
"mangaUpdates": null,
"focusedLanguages": [
"uk"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-06-17T22:08:29+00:00",
"updatedAt": "2022-08-26T12:55:24+00:00",
"version": 5
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "c7e91c3e-eb1c-484a-8275-df19f2e82565",
"type": "user",
"attributes": {
"username": "IT_IS_ME1987",
"roles": [
"ROLE_USER",
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER"
],
"version": 9
}
}
]
},
{
"id": "8c4ef7c6-ba40-4d67-9518-cfcdd8f86b13",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.05",
"title": "\u0412\u0430\u0440\u0442\u043e\u0432\u0456 \u0436\u0430\u0434\u0430\u043d\u043d\u044f, \u0440\u043e\u0437\u0434\u0456\u043b \u0442\u0440\u0435\u0442\u0456\u0439",
"translatedLanguage": "uk",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-04-19T19:01:48+00:00",
"readableAt": "2022-04-19T19:01:48+00:00",
"createdAt": "2022-04-19T19:01:48+00:00",
"updatedAt": "2022-04-19T19:02:15+00:00",
"version": 3,
"pages": 109
},
"relationships": [
{
"id": "40eefe2a-d99e-4aa4-b864-55ed68d58309",
"type": "scanlation_group",
"attributes": {
"name": "\ud835\udd71\ud835\udd86\ud835\udd91\ud835\udd88\ud835\udd94\ud835\udd93\ud835\udd8a \ud835\udd89\ud835\udd8e \ud835\udd77\ud835\udd9a\ud835\udd88\ud835\udd8a",
"altNames": [],
"locked": false,
"website": "https:\/\/t.me\/IT_IS_ME1987",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "So, I'm simply... One hell of a translator. But usually I work alone.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"uk"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-04-09T21:14:26+00:00",
"updatedAt": "2022-04-09T23:56:55+00:00",
"version": 2
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "c7e91c3e-eb1c-484a-8275-df19f2e82565",
"type": "user",
"attributes": {
"username": "IT_IS_ME1987",
"roles": [
"ROLE_USER",
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER"
],
"version": 9
}
}
]
},
{
"id": "715fa6b3-18a0-4bfe-a0b7-5bd9c08a1221",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.05",
"title": "Guardianes de la codicia (3)",
"translatedLanguage": "es",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2024-12-11T01:53:31+00:00",
"readableAt": "2024-12-11T01:53:31+00:00",
"createdAt": "2024-12-11T01:53:30+00:00",
"updatedAt": "2024-12-11T01:55:20+00:00",
"version": 3,
"pages": 109
},
"relationships": [
{
"id": "d2a5b511-8e05-4ccb-9f48-85abcb728a2e",
"type": "scanlation_group",
"attributes": {
"name": "Gl\u00e9nat Spain (Ex-Licenses)",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Creada como filial de la editorial francesa Gl\u00e9nat Editions. \n1990-2011",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"es"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2024-06-10T16:28:11+00:00",
"version": 3
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "0ade8309-34e4-461c-9564-c1fef47bd38b",
"type": "user",
"attributes": {
"username": "Trite",
"roles": [
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"version": 381
}
}
]
},
{
"id": "82fb16b9-8b27-416f-84b6-a35b2f07389c",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.05",
"title": "O guardi\u00e3o do Anjo do desejo (3)",
"translatedLanguage": "pt-br",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-06-02T00:14:17+00:00",
"readableAt": "2022-06-02T00:14:17+00:00",
"createdAt": "2022-06-02T00:14:17+00:00",
"updatedAt": "2022-06-02T00:14:23+00:00",
"version": 3,
"pages": 106
},
"relationships": [
{
"id": "8090b646-d4f8-4687-a392-05aaaa9dde91",
"type": "scanlation_group",
"attributes": {
"name": "Kousen Scans",
"altNames": [],
"locked": false,
"website": "http:\/\/kousenscans.com.br\/",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"pt-br"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "50ffc0a3-d5ff-4cac-a44a-76eda8023eb3",
"type": "user",
"attributes": {
"username": "rsilienT",
"roles": [
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"version": 4146
}
}
]
},
{
"id": "6089cb1e-ecf2-4f5c-b4ad-ead4be0b2cb1",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.05",
"title": "Arzunun Muhaf\u0131zlar\u0131 2",
"translatedLanguage": "tr",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2021-08-24T00:46:49+00:00",
"readableAt": "2021-08-24T00:46:49+00:00",
"createdAt": "2021-08-24T00:46:49+00:00",
"updatedAt": "2021-08-24T00:47:19+00:00",
"version": 3,
"pages": 108
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "1ceb9388-cc1b-47a5-b427-820cf7abcfed",
"type": "user",
"attributes": {
"username": "Kraptor121",
"roles": [
"ROLE_MEMBER"
],
"version": 4
}
}
]
},
{
"id": "7d025813-2b8e-4bb5-8d48-ff95d3e3c9cc",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.05",
"title": "\u015eehvetin Muhaf\u0131zlar\u0131: B\u00f6l\u00fcm \u00dc\u00e7",
"translatedLanguage": "tr",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2023-04-30T12:38:58+00:00",
"readableAt": "2023-04-30T12:38:58+00:00",
"createdAt": "2023-04-30T12:38:57+00:00",
"updatedAt": "2023-05-12T12:57:00+00:00",
"version": 12,
"pages": 111
},
"relationships": [
{
"id": "2210d7ea-29d4-4156-8030-2af75566ec18",
"type": "scanlation_group",
"attributes": {
"name": "TheWildDeer",
"altNames": [],
"locked": true,
"website": "https:\/\/s.id\/thewilddeer",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "thewilddeertranslation@gmail.com",
"description": "Karanl\u0131k mangalar\u0131n, karanl\u0131k \u00e7eviri grubu.",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"tr"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2023-04-14T15:51:15+00:00",
"updatedAt": "2023-04-30T16:22:20+00:00",
"version": 5
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f237454a-a93a-4908-b257-3090987ef811",
"type": "user",
"attributes": {
"username": "Dorylaion",
"roles": [
"ROLE_GROUP_MEMBER",
"ROLE_USER",
"ROLE_GROUP_LEADER"
],
"version": 842
}
}
]
},
{
"id": "e0d761ab-0a58-4f90-b1c0-611b9ef5c7cf",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.05",
"title": "Los \u00c1ngeles Guardianes del deseo (3)",
"translatedLanguage": "es-la",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2021-09-16T05:16:56+00:00",
"readableAt": "2021-09-16T05:16:56+00:00",
"createdAt": "2021-09-16T05:16:55+00:00",
"updatedAt": "2021-09-16T05:18:18+00:00",
"version": 3,
"pages": 109
},
"relationships": [
{
"id": "9ca0a878-9657-4342-9305-907969b01180",
"type": "scanlation_group",
"attributes": {
"name": "Seinen Den",
"altNames": [],
"locked": false,
"website": "https:\/\/seinenden.mforos.com\/",
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "cmam_sd@live.com.mx",
"description": "Seinen Den",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"es-la"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-09-15T02:25:49+00:00",
"version": 3
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "7083af20-87f1-4f71-8413-bf316f938f06",
"type": "user",
"attributes": {
"username": "cmam_sd",
"roles": [
"ROLE_GROUP_MEMBER",
"ROLE_USER",
"ROLE_GROUP_LEADER"
],
"version": 8
}
}
]
},
{
"id": "d734ca5d-a286-4cd1-9a94-a218654cdc70",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.05",
"title": "",
"translatedLanguage": "zh-hk",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2021-02-09T20:12:18+00:00",
"readableAt": "2021-02-09T20:12:18+00:00",
"createdAt": "2021-02-09T20:12:18+00:00",
"updatedAt": "2021-02-09T20:12:18+00:00",
"version": 1,
"pages": 107
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "6fbc54a0-c317-4f9a-8dca-0846858b95de",
"type": "user",
"attributes": {
"username": "calblbkao",
"roles": [
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"version": 1152
}
}
]
},
{
"id": "31f7109d-7f4f-42c0-a449-e77712dfcd3e",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.05",
"title": "Anio\u0142 str\u00f3\u017c po\u017c\u0105dania (3)",
"translatedLanguage": "pl",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-04-18T11:19:43+00:00",
"readableAt": "2022-04-18T11:19:43+00:00",
"createdAt": "2022-04-18T11:19:43+00:00",
"updatedAt": "2022-06-27T13:51:33+00:00",
"version": 4,
"pages": 106
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "f97be60b-8a9f-4802-bf80-89e6f73a757a",
"type": "user",
"attributes": {
"username": "Anonimowy",
"roles": [
"ROLE_USER"
],
"version": 2
}
}
]
},
{
"id": "0b2d0f6b-7867-4a3b-b94d-fc5d965ca66e",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.05",
"title": "Os Guardi\u00f5es do Desejo Parte 3",
"translatedLanguage": "pt-br",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-03-29T20:35:52+00:00",
"readableAt": "2025-03-29T20:35:52+00:00",
"createdAt": "2025-03-29T20:35:51+00:00",
"updatedAt": "2025-03-29T20:40:24+00:00",
"version": 3,
"pages": 109
},
"relationships": [
{
"id": "14e5ce92-0226-418c-b336-052d417b7514",
"type": "scanlation_group",
"attributes": {
"name": "El Pochita Scan",
"altNames": [],
"locked": true,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Scan iniciada por uma pessoa com o objetivo de traduzir apenas chainsaw man (eu n\u00e3o traduzo apenas chainsaw man)",
"twitter": "https:\/\/twitter.com\/Polarmccormick",
"mangaUpdates": null,
"focusedLanguages": [],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2025-03-16T23:15:42+00:00",
"updatedAt": "2025-03-23T04:07:26+00:00",
"version": 4
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "d01f5abf-64c8-43e9-a813-89ac72c200b0",
"type": "user",
"attributes": {
"username": "Polardelimao",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_USER"
],
"version": 5
}
}
]
},
{
"id": "0674fdf5-d93e-412d-8c59-e46daa432d77",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.05",
"title": "The Guardians of Desire (3) (LQ)",
"translatedLanguage": "en",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2018-01-31T07:26:50+00:00",
"readableAt": "2018-01-31T07:26:50+00:00",
"createdAt": "2018-01-31T07:26:50+00:00",
"updatedAt": "2018-01-31T07:26:50+00:00",
"version": 1,
"pages": 107
},
"relationships": [
{
"id": "4b98efe6-e5f2-4077-b9b3-193e3d9c5022",
"type": "scanlation_group",
"attributes": {
"name": "Band of the Hawks",
"altNames": [
{
"en": "Hawks"
}
],
"locked": false,
"website": "https:\/\/web.archive.org\/web\/20071020172415\/http:\/\/thehawks.org\/",
"ircServer": "irc.irchighway.net",
"ircChannel": "hawks",
"discord": null,
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"en"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-04-19T21:45:59+00:00",
"updatedAt": "2021-04-19T21:45:59+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "b86e992f-c93c-4286-90d0-e1eba31cadf7",
"type": "user",
"attributes": {
"username": "Assasinart",
"roles": [
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"version": 16071
}
}
]
},
{
"id": "b419993a-2fd1-41f3-acee-54cf17b21a38",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.05",
"title": "Gardienii dorin\u021bei, partea a 3-a",
"translatedLanguage": "ro",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2023-05-09T09:45:03+00:00",
"readableAt": "2023-05-09T09:45:03+00:00",
"createdAt": "2023-05-09T09:45:02+00:00",
"updatedAt": "2023-05-09T09:47:03+00:00",
"version": 3,
"pages": 107
},
"relationships": [
{
"id": "2fa13110-993a-4f51-9336-9eec7eece8de",
"type": "scanlation_group",
"attributes": {
"name": "Anime Nexus",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": null,
"description": "Monogatari Family https:\/\/anime-nexus.io\/",
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"ro"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2021-10-19T23:10:57+00:00",
"updatedAt": "2026-02-13T17:28:33+00:00",
"version": 7
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "8f3af679-922c-4b67-87ae-4ad56796977d",
"type": "user",
"attributes": {
"username": "bing021",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_MEMBER",
"ROLE_POWER_UPLOADER"
],
"avatarFileName": null,
"bannerFileName": null,
"version": 16625
}
}
]
},
{
"id": "b7f1bdd0-7a02-4529-b73f-8f2bbe949fdb",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.05",
"title": "The Guardian of Desire (3)",
"translatedLanguage": "id",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2022-03-11T19:32:11+00:00",
"readableAt": "2022-03-11T19:32:11+00:00",
"createdAt": "2022-03-11T19:32:11+00:00",
"updatedAt": "2022-03-11T19:32:39+00:00",
"version": 3,
"pages": 106
},
"relationships": [
{
"id": "dd6d4d25-7e19-4286-a103-afe60105aeac",
"type": "scanlation_group",
"attributes": {
"name": "Tempat Singgah Scans",
"altNames": [],
"locked": true,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": null,
"contactEmail": "tempatsinggah.cn@gmail.com",
"description": "Manga Scanlations group located in Indonesia. Tempat Singgah Scans created first on Facebook in 2020 and decided to expanse the group to Mangadex in 2021. All the work is done by one man, mostly.",
"twitter": "https:\/\/twitter.com\/damnizaki",
"mangaUpdates": null,
"focusedLanguages": [
"id"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-02-08T16:28:17+00:00",
"updatedAt": "2023-03-30T17:42:03+00:00",
"version": 16
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "4f524a18-dbe0-42a3-82df-b624d2370857",
"type": "user",
"attributes": {
"username": "dzakijack",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_POWER_UPLOADER",
"ROLE_USER"
],
"version": 2245
}
}
]
},
{
"id": "95b5a3c7-3863-4170-ba7f-99266186ff93",
"type": "chapter",
"attributes": {
"volume": "2",
"chapter": "0.05",
"title": "Anjo da Guarda do Desejo (3)",
"translatedLanguage": "pt-br",
"externalUrl": null,
"isUnavailable": false,
"publishAt": "2025-03-11T21:21:21+00:00",
"readableAt": "2025-03-11T21:21:21+00:00",
"createdAt": "2025-03-11T21:21:20+00:00",
"updatedAt": "2025-03-11T21:22:57+00:00",
"version": 3,
"pages": 109
},
"relationships": [
{
"id": "fa52c582-94e3-4a58-899d-4f7f2149aafb",
"type": "scanlation_group",
"attributes": {
"name": "Centipede Scans",
"altNames": [],
"locked": false,
"website": null,
"ircServer": null,
"ircChannel": null,
"discord": "3u4hDNRBjb",
"contactEmail": null,
"description": null,
"twitter": null,
"mangaUpdates": null,
"focusedLanguages": [
"pt-br"
],
"official": false,
"verified": false,
"inactive": false,
"publishDelay": null,
"exLicensed": false,
"createdAt": "2022-02-10T17:40:16+00:00",
"updatedAt": "2025-05-12T20:39:27+00:00",
"version": 8
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "32a865d6-9163-4f0b-be8a-5c7581098d8d",
"type": "user",
"attributes": {
"username": "Bat17",
"roles": [
"ROLE_GROUP_LEADER",
"ROLE_GROUP_MEMBER",
"ROLE_POWER_UPLOADER",
"ROLE_USER"
],
"version": 8819
}
}
]
}
],
"limit": 96,
"offset": 0,
"total": 4440
}

the forth one is:
header ->
[https://api.mangadex.org/manga/801513ba-a712-498c-8f57-cae55b38cc92/recommendation]
response ->
{
"result": "ok",
"response": "collection",
"data": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_0164b90d-860e-45b0-876c-0ba89bb29200",
"type": "manga_recommendation",
"attributes": {
"score": 0.7213532806978192
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "0164b90d-860e-45b0-876c-0ba89bb29200",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_14846783-dc71-4b23-90ae-d442c7f3dcb8",
"type": "manga_recommendation",
"attributes": {
"score": 0.6860424887640331
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "14846783-dc71-4b23-90ae-d442c7f3dcb8",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_16dc43f3-d6ba-4154-b445-a9d2e674c0eb",
"type": "manga_recommendation",
"attributes": {
"score": 0.6939683680399439
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "16dc43f3-d6ba-4154-b445-a9d2e674c0eb",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_2557db08-1d02-4dfc-83da-4e1a2b62d223",
"type": "manga_recommendation",
"attributes": {
"score": 0.7302211136949002
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "2557db08-1d02-4dfc-83da-4e1a2b62d223",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_33493b21-3e31-4b5a-9a8b-8abff89f0e73",
"type": "manga_recommendation",
"attributes": {
"score": 0.6966630930236284
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "33493b21-3e31-4b5a-9a8b-8abff89f0e73",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_36801362-0927-4901-9a91-8a85e73275e4",
"type": "manga_recommendation",
"attributes": {
"score": 0.7634481093367159
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "36801362-0927-4901-9a91-8a85e73275e4",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_3bce4841-9f35-4a68-b10a-7403777cf0d9",
"type": "manga_recommendation",
"attributes": {
"score": 0.6891552240198633
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "3bce4841-9f35-4a68-b10a-7403777cf0d9",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_4481002b-f65c-426a-8cb4-3a1bba1040c5",
"type": "manga_recommendation",
"attributes": {
"score": 0.7217009869627736
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "4481002b-f65c-426a-8cb4-3a1bba1040c5",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_4a5d677d-e3ac-4c23-a6bf-bb92c984fee4",
"type": "manga_recommendation",
"attributes": {
"score": 0.6888215532510747
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "4a5d677d-e3ac-4c23-a6bf-bb92c984fee4",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_4c1fce47-9d04-4c0c-a25c-30e068a0f60e",
"type": "manga_recommendation",
"attributes": {
"score": 0.7230171776278377
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "4c1fce47-9d04-4c0c-a25c-30e068a0f60e",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_5ad9757a-3d14-4504-a6a7-56db27a38220",
"type": "manga_recommendation",
"attributes": {
"score": 0.7039483982759783
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "5ad9757a-3d14-4504-a6a7-56db27a38220",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_7328c8ff-9c64-4b22-b2ca-e092f9b9c62f",
"type": "manga_recommendation",
"attributes": {
"score": 0.7277233993601271
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "7328c8ff-9c64-4b22-b2ca-e092f9b9c62f",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_9cf439ab-6122-43cf-8ec2-8b3778577850",
"type": "manga_recommendation",
"attributes": {
"score": 0.741254613056521
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "9cf439ab-6122-43cf-8ec2-8b3778577850",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_b9959adb-c7bc-4303-84c7-c4b6b2828c46",
"type": "manga_recommendation",
"attributes": {
"score": 0.6830101025383108
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "b9959adb-c7bc-4303-84c7-c4b6b2828c46",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_ba322adf-e395-49ab-b8ae-4e5023620d6d",
"type": "manga_recommendation",
"attributes": {
"score": 0.7116678608559592
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "ba322adf-e395-49ab-b8ae-4e5023620d6d",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_c7a47226-5e2a-47b8-9b35-728683d70faf",
"type": "manga_recommendation",
"attributes": {
"score": 0.7677195143538343
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "c7a47226-5e2a-47b8-9b35-728683d70faf",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_d1e95047-af53-4565-b19d-5c67b0d8841a",
"type": "manga_recommendation",
"attributes": {
"score": 0.744342866299617
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "d1e95047-af53-4565-b19d-5c67b0d8841a",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_d7e68212-e21d-400c-85c5-c7b5467e15ac",
"type": "manga_recommendation",
"attributes": {
"score": 0.70496945335144
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "d7e68212-e21d-400c-85c5-c7b5467e15ac",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_e14e3725-e74a-47d5-a57b-38f274af67a8",
"type": "manga_recommendation",
"attributes": {
"score": 0.6969635817959787
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "e14e3725-e74a-47d5-a57b-38f274af67a8",
"type": "manga"
}
]
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92_ef1d242f-964f-429e-9ddc-9f0f485f8ab9",
"type": "manga_recommendation",
"attributes": {
"score": 0.6830101025383108
},
"relationships": [
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga"
},
{
"id": "ef1d242f-964f-429e-9ddc-9f0f485f8ab9",
"type": "manga"
}
]
}
],
"limit": 50,
"offset": 0,
"total": 20
}

The Fifth one is:
header ->
[https://api.mangadex.org/manga?ids[]=0164b90d-860e-45b0-876c-0ba89bb29200&ids[]=14846783-dc71-4b23-90ae-d442c7f3dcb8&ids[]=16dc43f3-d6ba-4154-b445-a9d2e674c0eb&ids[]=2557db08-1d02-4dfc-83da-4e1a2b62d223&ids[]=33493b21-3e31-4b5a-9a8b-8abff89f0e73&ids[]=36801362-0927-4901-9a91-8a85e73275e4&ids[]=3bce4841-9f35-4a68-b10a-7403777cf0d9&ids[]=4481002b-f65c-426a-8cb4-3a1bba1040c5&ids[]=4a5d677d-e3ac-4c23-a6bf-bb92c984fee4&ids[]=4c1fce47-9d04-4c0c-a25c-30e068a0f60e&ids[]=5ad9757a-3d14-4504-a6a7-56db27a38220&ids[]=7328c8ff-9c64-4b22-b2ca-e092f9b9c62f&ids[]=9cf439ab-6122-43cf-8ec2-8b3778577850&ids[]=b9959adb-c7bc-4303-84c7-c4b6b2828c46&ids[]=ba322adf-e395-49ab-b8ae-4e5023620d6d&ids[]=c7a47226-5e2a-47b8-9b35-728683d70faf&ids[]=d1e95047-af53-4565-b19d-5c67b0d8841a&ids[]=d7e68212-e21d-400c-85c5-c7b5467e15ac&ids[]=e14e3725-e74a-47d5-a57b-38f274af67a8&ids[]=ef1d242f-964f-429e-9ddc-9f0f485f8ab9&limit=100&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&contentRating[]=pornographic&includes[]=cover_art]
response ->
{
"result": "ok",
"response": "collection",
"data": [
{
"id": "14846783-dc71-4b23-90ae-d442c7f3dcb8",
"type": "manga",
"attributes": {
"title": {
"ja-ro": "Shitai Katsugi no Nemu"
},
"altTitles": [
{
"ja": "\u6b7b\u4f53\u62c5\u304e\u306e\u30cd\u30e0"
},
{
"en": "Nemu the Corpse Bearer"
},
{
"fr": "N\u00e9mou, la porteuse de cadavres"
}
],
"description": {
"en": "Garen, who became stranded in a dungeon, met Nemu the Corpse Bearer. A Corpse Bearer was someone who went to retrieve the bodies of people who'd died in dangerous places like dungeon depths, beast lairs, or the ocean floor. Answering the pleas of the bereaved who said, \"I want them back even if it's just their body.\" Nemu continued to travel to dangerous places, carrying corpses back home.",
"ja": "\u30c0\u30f3\u30b8\u30e7\u30f3\u3067\u906d\u96e3\u3057\u305f\u30ac\u30ec\u30f3\u306f\u3001\u300c\u6b7b\u4f53\u62c5\u304e\u300d\u306e\u30cd\u30e0\u3068\u51fa\u4f1a\u3046\u3002\u300c\u6b7b\u4f53\u62c5\u304e\u300d\u306f\u3001\u30c0\u30f3\u30b8\u30e7\u30f3\u306e\u5965\u3001\u7363\u306e\u5de3\u3001\u6d77\u306e\u5e95\u306a\u3069\u306e\u5371\u967a\u306a\u5834\u6240\u3067\u4ea1\u304f\u306a\u3063\u305f\u4eba\u306e\u907a\u4f53\u3092\u56de\u53ce\u3057\u306b\u884c\u304f\u4ed5\u4e8b\u3002\u300c\u6b7b\u4f53\u3067\u3082\u3044\u3044\u304b\u3089\u5e30\u3063\u3066\u304d\u3066\u6b32\u3057\u3044\u300d\u3068\u3044\u3046\u907a\u3055\u308c\u305f\u4eba\u306e\u58f0\u306b\u5fdc\u3048\u3066\u3001\u30cd\u30e0\u306f\u4eca\u65e5\u3082\u5371\u967a\u306a\u5834\u6240\u306b\u8d74\u304d\u3001\u6b7b\u4f53\u3092\u62c5\u3044\u3067\u5e30\u3063\u3066\u304f\u308b\u3002"
},
"isLocked": false,
"links": {
"al": "197311",
"ap": "shitai-katsugi-no-nemu",
"bw": "series\/534786",
"mu": "m1v2xzq",
"amz": "https:\/\/www.amazon.co.jp\/dp\/B0GGMRG3T7",
"cdj": "https:\/\/www.cdjapan.co.jp\/product\/NEOBK-3114313",
"ebj": "https:\/\/ebookjapan.yahoo.co.jp\/books\/915029",
"mal": "187726",
"raw": "https:\/\/kuragebunch.com\/episode\/2550912965483839251",
"engtl": "https:\/\/sevenseasentertainment.com\/2025\/12\/10\/seven-seas-licenses-nemu-the-corpse-bearer-manga-series\/"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "",
"lastChapter": "",
"publicationDemographic": "seinen",
"status": "ongoing",
"year": 2025,
"contentRating": "safe",
"tags": [
{
"id": "36fd93ea-e8b8-445e-b836-358f02b3d33d",
"type": "tag",
"attributes": {
"name": {
"en": "Monsters"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "87cc87cd-a395-47af-b27a-93258283bbc6",
"type": "tag",
"attributes": {
"name": {
"en": "Adventure"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "b1e97889-25b4-4258-b28b-cd7f4d28ea9b",
"type": "tag",
"attributes": {
"name": {
"en": "Philosophical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
"type": "tag",
"attributes": {
"name": {
"en": "Gore"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
"type": "tag",
"attributes": {
"name": {
"en": "Drama"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "cdc58593-87dd-415e-bbc0-2ec27bf404cc",
"type": "tag",
"attributes": {
"name": {
"en": "Fantasy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2025-04-04T08:45:12+00:00",
"updatedAt": "2026-02-13T14:14:33+00:00",
"version": 19,
"availableTranslatedLanguages": [
"en",
"id",
"vi",
"fr"
],
"latestUploadedChapter": "71dd0dd6-0038-49da-ad57-53fefba34432"
},
"relationships": [
{
"id": "127db4e9-5f8e-4cf2-9bbc-21660c4c89bc",
"type": "author"
},
{
"id": "127db4e9-5f8e-4cf2-9bbc-21660c4c89bc",
"type": "artist"
},
{
"id": "5e0a6e30-91e2-4566-b807-3bbf0532ef11",
"type": "cover_art",
"attributes": {
"description": "Volume 2 cover from BookLive",
"volume": "2",
"fileName": "f86858f4-16f2-4af9-8ce7-68603eaae884.jpg",
"locale": "ja",
"createdAt": "2026-02-13T14:13:13+00:00",
"updatedAt": "2026-02-13T14:13:13+00:00",
"version": 1
}
},
{
"id": "6640d5cb-18a0-4264-8c0a-9dcbe39be5ef",
"type": "creator"
}
]
},
{
"id": "4481002b-f65c-426a-8cb4-3a1bba1040c5",
"type": "manga",
"attributes": {
"title": {
"ja-ro": "Mugen no Junin"
},
"altTitles": [
{
"el": "\u0397 \u039b\u03b5\u03c0\u03af\u03b4\u03b1 \u03c4\u03bf\u03c5 \u0391\u03b8\u03b1\u03bd\u03ac\u03c4\u03bf\u03c5"
},
{
"hu": "A halhatatlan peng\u00e9je"
},
{
"pt-br": "Blade - A L\u00e2mina do Imortal"
},
{
"es": "Espada Del Inmortal"
},
{
"de": "Klinge des Unsterblichen"
},
{
"fr": "L'Habitant de l'Infini"
},
{
"it": "L'Immortale"
},
{
"fr": "Lame de l'immortel"
},
{
"vi": "L\u01b0\u1ee1i Ki\u1ebfm B\u1ea5t T\u1eed"
},
{
"pl": "Miecz Nie\u015bmiertelnego"
},
{
"sr": "O\u0161trica Besmrtnika - Samuraj Dvanaest Sje\u010diva"
},
{
"ru": "\u041a\u043b\u0438\u043d\u043e\u043a \u0411\u0435\u0441\u0441\u043c\u0435\u0440\u0442\u043d\u043e\u0433\u043e"
},
{
"NULL": "\u0531\u0576\u0574\u0561\u0570\u0578\u0582\u0569\u0575\u0561\u0576 \u0562\u0565\u0580\u0561\u0576"
},
{
"ar": "\u0634\u0641\u0631\u0629 \u0627\u0644\u062e\u0627\u0644\u062f"
},
{
"ja": "\u3080\u3052\u3093\u306e\u3058\u3085\u306b\u3093"
},
{
"zh": "\u65e0\u9650\u4e4b\u4f4f\u4eba"
},
{
"ja": "\u7121\u9650\u306e\u4f4f\u4eba"
},
{
"zh-hk": "\u7121\u9650\u4e4b\u4f4f\u4eba"
},
{
"ko": "\ubd88\uba78\uc758 \uac80"
},
{
"en": "Blade of the Immortal"
},
{
"en": "The Inhabitant of Infinity"
}
],
"description": {
"en": "\"To end his eternal suffering, he must slay one thousand enemies!\" Manji, a ronin warrior of feudal Japan, has been cursed with immortality. To rid himself of this curse and end his life of misery, he must slay one thousand evil men! His quest begins when a young girl seeks his help in taking revenge on her parents' killers\u2026 and his quest won't end until the blood of a thousand has spilled! \n\n[Official English](https://digital.darkhorse.com/series/373/blade-of-the-immortal)\n \n--- \n- **Won the 1st Japan Media Arts Award Division Excellence Prize**\n\n---\n \nAnimeNewsNetwork Links: \n[Anime](https://www.animenewsnetwork.com/encyclopedia/anime.php?id=9691) \n[Live-Action Movie](https://www.animenewsnetwork.com/encyclopedia/anime.php?id=18861)",
"es": "Asano Rin, una chica que jura vengarse de los Itto Ryu, un grupo de espadachines que mataron a su padre y secuestraron a su madre, contrata a Manji, un espadach\u00edn conocido como los \"El asesino de los 100\" y que tiene un cuerpo inmortal gracias a un par\u00e1sito llamado bicho Kessenchu, como su guardi\u00e1n y comienza un viaje para perseguir al l\u00edder de los Itto Ryu. Comienza un viaje en busca de su archienemigo, Amatsu Kagehisa, el l\u00edder de la escuela Itto.",
"ja": "\u7236\u3092\u6bba\u3057\u3001\u6bcd\u3092\u652b\uff08\u3055\u3089\uff09\u3063\u305f\u5263\u5ba2\u96c6\u56e3\u300e\u9038\u5200\u6d41\uff08\u3044\u3063\u3068\u3046\u308a\u3085\u3046\uff09\u300f\u306b\u5fa9\u8b90\u3092\u8a93\u3046\u5c11\u5973\u30fb\u6d45\u91ce \u51dc\uff08\u3042\u3055\u306e\u308a\u3093\uff09\u306f\u3001\u300c\u767e\u4eba\u65ac\u308a\u300d\u306e\u7570\u540d\u3092\u6301\u3061\u3001\u5df1\u306e\u8eab\u4f53\u306b\u8840\u4ed9\u87f2\uff08\u3051\u3063\u305b\u3093\u3061\u3085\u3046\uff09\u3068\u3044\u3046\u866b\u3092\u5bc4\u751f\u3055\u305b\u308b\u3053\u3068\u3067\u4e0d\u6b7b\u306e\u8089\u4f53\u3092\u6301\u3063\u305f\u5263\u58eb\u30fb\u4e07\u6b21\uff08\u307e\u3093\u3058\uff09\u3092\u7528\u5fc3\u68d2\u3068\u3057\u3066\u96c7\u3044\u3001\u9038\u5200\u6d41\u306e\u7d71\u4e3b\u3067\u3042\u308b\u5bbf\u6575\u30fb\u5929\u6d25\u5f71\u4e45\uff08\u3042\u306e\u3064\u304b\u3052\u3072\u3055\uff09\u3092\u8ffd\u3046\u65c5\u3092\u59cb\u3081\u308b\u2015\u2015\u3002",
"es-la": "Asano Rin, una chica que jura vengarse de los Itto Ryu, un grupo de espadachines que mataron a su padre y secuestraron a su madre, contrata a Manji, un espadach\u00edn conocido como los \"El asesino de los 100\" y que tiene un cuerpo inmortal gracias a un par\u00e1sito llamado bicho Kessenchu, como su guardi\u00e1n y comienza un viaje para perseguir al l\u00edder de los Itto Ryu. Comienza un viaje en busca de su archienemigo, Amatsu Kagehisa, el l\u00edder de la escuela Itto.",
"pt-br": "Manji \u00e9 um espadachim imortal, que foi amaldi\u00e7oado com a vida eterna. Ele cresceu cansado de viver com toda a morte que ele criou. Ele n\u00e3o tem outras habilidades, a n\u00e3o ser as que trazem a morte, assim ele faz um plano para recuperar sua mortalidade: ele deve matar cem homens maus para cada homem bom que ele matou. A velha bruxa que amaldi\u00e7oou Manji com a imortalidade se compromete a tir\u00e1-la de Manji por tal condi\u00e7\u00e3o, e para isso ele ter\u00e1 que matar mil homens maus. Em sua jornada, ele conhece uma jovem garota, Rin, que tem a sua pr\u00f3pria vingan\u00e7a contra a procurar a escola de espadachins cujos membros mataram a fam\u00edlia Rin. Rin e Manji entram junto numa jornada, cada um com a esperan\u00e7a de encontrar algum tipo de paz. Em seu caminho muitos inimigos aparecem, Rin e Manji est\u00e3o quase constantemente sob ataque e devem aprender a viver suas vidas, evitando serem consumidos pela vingan\u00e7a."
},
"isLocked": false,
"links": {
"al": "30658",
"ap": "blade-of-the-immortal",
"kt": "1487",
"mu": "dhtyiyk",
"mal": "658",
"raw": "https:\/\/comic-days.com\/episode\/13932016480030642212"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "30",
"lastChapter": "206",
"publicationDemographic": "seinen",
"status": "completed",
"year": 1993,
"contentRating": "safe",
"tags": [
{
"id": "07251805-a27e-4d59-b488-f0bfbec15168",
"type": "tag",
"attributes": {
"name": {
"en": "Thriller"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "0a39b5a1-b235-4886-a747-1d05d216532d",
"type": "tag",
"attributes": {
"name": {
"en": "Award Winning"
},
"description": {},
"group": "format",
"version": 1
},
"relationships": []
},
{
"id": "33771934-028e-4cb3-8744-691e866a923e",
"type": "tag",
"attributes": {
"name": {
"en": "Historical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "36fd93ea-e8b8-445e-b836-358f02b3d33d",
"type": "tag",
"attributes": {
"name": {
"en": "Monsters"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "39730448-9a5f-48a2-85b0-a70db87b1233",
"type": "tag",
"attributes": {
"name": {
"en": "Demons"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
"type": "tag",
"attributes": {
"name": {
"en": "Psychological"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "489dd859-9b61-4c37-af75-5b18e88daafc",
"type": "tag",
"attributes": {
"name": {
"en": "Ninja"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
"type": "tag",
"attributes": {
"name": {
"en": "Comedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "5fff9cde-849c-4d78-aab0-0d52b2ee1d25",
"type": "tag",
"attributes": {
"name": {
"en": "Survival"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "799c202e-7daa-44eb-9cf7-8a3c0441531e",
"type": "tag",
"attributes": {
"name": {
"en": "Martial Arts"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "81183756-1453-4c81-aa9e-f6e1b63be016",
"type": "tag",
"attributes": {
"name": {
"en": "Samurai"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "87cc87cd-a395-47af-b27a-93258283bbc6",
"type": "tag",
"attributes": {
"name": {
"en": "Adventure"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "97893a4c-12af-4dac-b6be-0dffb353568e",
"type": "tag",
"attributes": {
"name": {
"en": "Sexual Violence"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
"type": "tag",
"attributes": {
"name": {
"en": "Military"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
"type": "tag",
"attributes": {
"name": {
"en": "Gore"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
"type": "tag",
"attributes": {
"name": {
"en": "Drama"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "da2d50ca-3018-4cc0-ac7a-6b7d472a29ea",
"type": "tag",
"attributes": {
"name": {
"en": "Delinquents"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "df33b754-73a3-4c54-80e6-1a74a8058539",
"type": "tag",
"attributes": {
"name": {
"en": "Police"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "eabc5b4c-6aff-42f3-b657-3e90cbd00b75",
"type": "tag",
"attributes": {
"name": {
"en": "Supernatural"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
"type": "tag",
"attributes": {
"name": {
"en": "Tragedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2018-05-11T09:15:38+00:00",
"updatedAt": "2026-02-22T19:39:07+00:00",
"version": 19,
"availableTranslatedLanguages": [
"es",
"es-la",
"pt-br",
"en",
"hu"
],
"latestUploadedChapter": "a247921a-126f-4610-8dce-436f083f8f9b"
},
"relationships": [
{
"id": "b4f52b2e-e491-4cf8-8998-4a63a85f48e7",
"type": "author"
},
{
"id": "b4f52b2e-e491-4cf8-8998-4a63a85f48e7",
"type": "artist"
},
{
"id": "f8d0d0b7-82c0-4f11-81ab-0bafe3525d9e",
"type": "cover_art",
"attributes": {
"description": "",
"volume": null,
"fileName": "d4f09702-2208-40a1-9f5b-1ef91aabaeba.png",
"locale": "ja",
"createdAt": "2021-05-24T18:17:07+00:00",
"updatedAt": "2021-05-24T18:17:07+00:00",
"version": 1
}
},
{
"id": "685408cf-b6eb-457e-841b-122b9780acca",
"type": "manga",
"related": "sequel"
},
{
"id": "ff73234b-4387-448c-ab54-2879626b4442",
"type": "manga",
"related": "preserialization"
}
]
},
{
"id": "d1e95047-af53-4565-b19d-5c67b0d8841a",
"type": "manga",
"attributes": {
"title": {
"en": "Joan"
},
"altTitles": [
{
"en": "Jeanne"
},
{
"ja": "\u30b8\u30e3\u30f3\u30cc"
}
],
"description": {
"en": "Guided by visions of \"la Pucelle\" (the name given to Joan by followers), Emil seeks to unite France under the divine rule of the King. In her quest, Emil goes to the same places Joan had traveled through, and gains her own followers in the process. However, Emil is opposed by the dauphin Louis, a brute enforcer who fears no divine power and wishes to make his own bid to rule the country."
},
"isLocked": false,
"links": {
"al": "31214",
"ap": "joan",
"kt": "2673",
"mu": "bmaoru8",
"mal": "1214"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "3",
"lastChapter": "12",
"publicationDemographic": "seinen",
"status": "completed",
"year": 1995,
"contentRating": "safe",
"tags": [
{
"id": "33771934-028e-4cb3-8744-691e866a923e",
"type": "tag",
"attributes": {
"name": {
"en": "Historical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "39730448-9a5f-48a2-85b0-a70db87b1233",
"type": "tag",
"attributes": {
"name": {
"en": "Demons"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
"type": "tag",
"attributes": {
"name": {
"en": "Psychological"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "5fff9cde-849c-4d78-aab0-0d52b2ee1d25",
"type": "tag",
"attributes": {
"name": {
"en": "Survival"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "97893a4c-12af-4dac-b6be-0dffb353568e",
"type": "tag",
"attributes": {
"name": {
"en": "Sexual Violence"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
"type": "tag",
"attributes": {
"name": {
"en": "Military"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b1e97889-25b4-4258-b28b-cd7f4d28ea9b",
"type": "tag",
"attributes": {
"name": {
"en": "Philosophical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
"type": "tag",
"attributes": {
"name": {
"en": "Drama"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "ee968100-4191-4968-93d3-f82d72be7e46",
"type": "tag",
"attributes": {
"name": {
"en": "Mystery"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "f5ba408b-0e7a-484d-8d49-4e9125ac96de",
"type": "tag",
"attributes": {
"name": {
"en": "Full Color"
},
"description": {},
"group": "format",
"version": 1
},
"relationships": []
},
{
"id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
"type": "tag",
"attributes": {
"name": {
"en": "Tragedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2018-05-18T15:23:45+00:00",
"updatedAt": "2025-11-15T15:54:21+00:00",
"version": 6,
"availableTranslatedLanguages": [
"es"
],
"latestUploadedChapter": "7cd7a36f-a24d-4b4a-a947-936cbfbc27be"
},
"relationships": [
{
"id": "30aee8f2-f041-466a-b685-8d23e82a539e",
"type": "author"
},
{
"id": "30aee8f2-f041-466a-b685-8d23e82a539e",
"type": "artist"
},
{
"id": "55fb5e27-3ba6-4fde-a60e-cd4ea7518726",
"type": "cover_art",
"attributes": {
"description": "",
"volume": "4",
"fileName": "d4065276-849b-4c7a-b8c2-24912d683564.jpg",
"locale": "ja",
"createdAt": "2021-05-23T07:50:34+00:00",
"updatedAt": "2022-12-13T21:27:41+00:00",
"version": 4
}
},
{
"id": "ea96661c-9ccd-4b81-94a0-80ffb22701dc",
"type": "manga",
"related": "same_franchise"
}
]
},
{
"id": "0164b90d-860e-45b0-876c-0ba89bb29200",
"type": "manga",
"attributes": {
"title": {
"en": "The Daughter of Murakami Pirates"
},
"altTitles": [
{
"ja-ro": "Murakami Kaizoku no Musume"
},
{
"ja": "\u6751\u4e0a\u6d77\u8cca\u306e\u5a18"
}
],
"description": {
"en": "Winner of the 2014 Bookstore Award and the Yoshikawa Eiji Literary Newcomer Award, this blockbuster historical novel has captivated over 1 million readers and is now fully adapted into a manga!\n\nThe enemy? The legendary warlord of the Sengoku period, Oda Nobunaga! What destiny awaits the courageous pirate princess who boldly stands against him?\n\nSet in the turbulent Sengoku era, after the chaos of the \u014cnin War, the Ashikaga shogunate's power has crumbled. Across Japan, formidable warlords are emerging, each declaring their ambitions in this age of conflict. But did you know there was a woman who dared to challenge the unstoppable forces of Oda Nobunaga, leaving his armies astounded?\n\nRooted in historical events, this story delivers heart-pounding battles and more! Follow the journey of a striking warrior princess and her encounters with powerful, charismatic heroes. Experience the ultimate Sengoku entertainment!"
},
"isLocked": false,
"links": {
"al": "104512",
"bw": "series\/125796\/list",
"mu": "cnemecs",
"amz": "https:\/\/www.amazon.co.jp\/-\/en\/dp\/B0756XN33N?binding=kindle_edition&ref_=dbs_s_ks_series_rwt_tkin&qid=1733396847&sr=1-1",
"ebj": "https:\/\/ebookjapan.yahoo.co.jp\/books\/360957\/",
"mal": "113897"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "13",
"lastChapter": "131",
"publicationDemographic": "seinen",
"status": "completed",
"year": 2015,
"contentRating": "safe",
"tags": [
{
"id": "07251805-a27e-4d59-b488-f0bfbec15168",
"type": "tag",
"attributes": {
"name": {
"en": "Thriller"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "0a39b5a1-b235-4886-a747-1d05d216532d",
"type": "tag",
"attributes": {
"name": {
"en": "Award Winning"
},
"description": {},
"group": "format",
"version": 1
},
"relationships": []
},
{
"id": "33771934-028e-4cb3-8744-691e866a923e",
"type": "tag",
"attributes": {
"name": {
"en": "Historical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
"type": "tag",
"attributes": {
"name": {
"en": "Psychological"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "489dd859-9b61-4c37-af75-5b18e88daafc",
"type": "tag",
"attributes": {
"name": {
"en": "Ninja"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "5fff9cde-849c-4d78-aab0-0d52b2ee1d25",
"type": "tag",
"attributes": {
"name": {
"en": "Survival"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "799c202e-7daa-44eb-9cf7-8a3c0441531e",
"type": "tag",
"attributes": {
"name": {
"en": "Martial Arts"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "81183756-1453-4c81-aa9e-f6e1b63be016",
"type": "tag",
"attributes": {
"name": {
"en": "Samurai"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "87cc87cd-a395-47af-b27a-93258283bbc6",
"type": "tag",
"attributes": {
"name": {
"en": "Adventure"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
"type": "tag",
"attributes": {
"name": {
"en": "Military"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b1e97889-25b4-4258-b28b-cd7f4d28ea9b",
"type": "tag",
"attributes": {
"name": {
"en": "Philosophical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
"type": "tag",
"attributes": {
"name": {
"en": "Gore"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
"type": "tag",
"attributes": {
"name": {
"en": "Drama"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "ee968100-4191-4968-93d3-f82d72be7e46",
"type": "tag",
"attributes": {
"name": {
"en": "Mystery"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "f4122d1c-3b44-44d0-9936-ff7502c39ad3",
"type": "tag",
"attributes": {
"name": {
"en": "Adaptation"
},
"description": {},
"group": "format",
"version": 1
},
"relationships": []
},
{
"id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
"type": "tag",
"attributes": {
"name": {
"en": "Tragedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2024-12-05T11:13:42+00:00",
"updatedAt": "2025-09-29T02:16:01+00:00",
"version": 8,
"availableTranslatedLanguages": [
"en"
],
"latestUploadedChapter": "e14ee97b-4aab-452c-a7f0-3c45664ad5c1"
},
"relationships": [
{
"id": "31d879c5-357d-483a-98e9-7bf538980889",
"type": "author"
},
{
"id": "9ebe2fb1-9aa2-408a-b4f3-9b3ef74850de",
"type": "artist"
},
{
"id": "488f58a9-8028-4e2d-93ea-af83a0c395f3",
"type": "cover_art",
"attributes": {
"description": "",
"volume": "13",
"fileName": "76f4b8fb-c5e6-4c3a-9bd7-5776fab2cab5.jpg",
"locale": "ja",
"createdAt": "2024-12-05T11:13:48+00:00",
"updatedAt": "2024-12-05T11:13:48+00:00",
"version": 1
}
},
{
"id": "67591cb1-95e1-45fd-ab85-4a45485ffc80",
"type": "creator"
}
]
},
{
"id": "5ad9757a-3d14-4504-a6a7-56db27a38220",
"type": "manga",
"attributes": {
"title": {
"en": "Oni Goroshi"
},
"altTitles": [
{
"ja": "\u9b3c\u30b4\u30ed\u30b7"
},
{
"ja-ro": "Oni-Goroshi"
},
{
"vi": "S\u00e1t Qu\u1ef7 V\u01b0\u01a1ng"
},
{
"vi": "\u6bba\u9b3c\u738b (Nom Script)"
},
{
"en": "Demon City"
}
],
"description": {
"en": "A family murder 15 years ago. \n\nShuhei Sakata, the criminal who killed his wife and child and attempted suicide, was released for the first time in 15 years. However, it was a trap by demons...! \n\nSakata miraculously awakens from the vegetative state and vows to revenge only in the town of the cause of the legend of demon possession!"
},
"isLocked": false,
"links": {
"al": "130955",
"ap": "oni-goroshi",
"kt": "73491",
"mu": "4n4lqvl",
"mal": "145509"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "16",
"lastChapter": "162",
"publicationDemographic": "seinen",
"status": "completed",
"year": 2020,
"contentRating": "safe",
"tags": [
{
"id": "07251805-a27e-4d59-b488-f0bfbec15168",
"type": "tag",
"attributes": {
"name": {
"en": "Thriller"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "39730448-9a5f-48a2-85b0-a70db87b1233",
"type": "tag",
"attributes": {
"name": {
"en": "Demons"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
"type": "tag",
"attributes": {
"name": {
"en": "Military"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
"type": "tag",
"attributes": {
"name": {
"en": "Gore"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "cdad7e68-1419-41dd-bdce-27753074a640",
"type": "tag",
"attributes": {
"name": {
"en": "Horror"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "eabc5b4c-6aff-42f3-b657-3e90cbd00b75",
"type": "tag",
"attributes": {
"name": {
"en": "Supernatural"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2021-11-28T14:44:38+00:00",
"updatedAt": "2025-11-15T17:17:39+00:00",
"version": 21,
"availableTranslatedLanguages": [
"vi",
"en"
],
"latestUploadedChapter": "5dd71fc0-aa6f-4369-8c4f-2cb1aa082430"
},
"relationships": [
{
"id": "fadff0df-0cc1-47fa-a34d-7a25c979184f",
"type": "author"
},
{
"id": "fadff0df-0cc1-47fa-a34d-7a25c979184f",
"type": "artist"
},
{
"id": "d19f2dd9-c172-48ae-bc52-0b35766d19f3",
"type": "cover_art",
"attributes": {
"description": "",
"volume": "16",
"fileName": "0314bf17-e1d3-495e-aab0-b2e444f66898.jpg",
"locale": "ja",
"createdAt": "2025-02-26T08:11:41+00:00",
"updatedAt": "2025-02-26T08:11:41+00:00",
"version": 1
}
},
{
"id": "6640d5cb-18a0-4264-8c0a-9dcbe39be5ef",
"type": "creator"
}
]
},
{
"id": "3bce4841-9f35-4a68-b10a-7403777cf0d9",
"type": "manga",
"attributes": {
"title": {
"en": "The Day of Salvation"
},
"altTitles": [
{
"ja": "\u6551\u6e08\u306e\u65e5"
},
{
"ja-ro": "Kyuusai no Hi"
}
],
"description": {
"en": "Nishioka Kyoudai's anti-war epic, told in their signature surrealist style. \n \nA man wakes up one morning to find the world outside of his house a wasteland. As he searches for signs of life, he finds a fetus in a ditch, which promptly latches onto his thumb and won't let go, and things only get stranger from there\u2026"
},
"isLocked": false,
"links": {
"al": "106552",
"ap": "kyuusai-no-hi",
"kt": "43179",
"mu": "bpd50jr",
"mal": "94022"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "1",
"lastChapter": "11",
"publicationDemographic": "seinen",
"status": "completed",
"year": 2008,
"contentRating": "safe",
"tags": [
{
"id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
"type": "tag",
"attributes": {
"name": {
"en": "Psychological"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
"type": "tag",
"attributes": {
"name": {
"en": "Military"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b1e97889-25b4-4258-b28b-cd7f4d28ea9b",
"type": "tag",
"attributes": {
"name": {
"en": "Philosophical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
"type": "tag",
"attributes": {
"name": {
"en": "Gore"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "cdad7e68-1419-41dd-bdce-27753074a640",
"type": "tag",
"attributes": {
"name": {
"en": "Horror"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
"type": "tag",
"attributes": {
"name": {
"en": "Tragedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2020-02-14T03:48:51+00:00",
"updatedAt": "2025-11-15T16:26:22+00:00",
"version": 7,
"availableTranslatedLanguages": [
"en",
"pt-br"
],
"latestUploadedChapter": "be5d630f-c7f8-4508-8449-a613daf7dee3"
},
"relationships": [
{
"id": "fdbf703d-0cd5-4f72-8faa-28e50107c919",
"type": "author"
},
{
"id": "fdbf703d-0cd5-4f72-8faa-28e50107c919",
"type": "artist"
},
{
"id": "384cfc1d-8322-4fe0-bc15-97146c9678e8",
"type": "cover_art",
"attributes": {
"description": "",
"volume": null,
"fileName": "349bcde4-f340-4f73-87c5-8ae740121615.jpg",
"locale": "ja",
"createdAt": "2021-05-24T17:44:59+00:00",
"updatedAt": "2021-05-24T17:44:59+00:00",
"version": 1
}
}
]
},
{
"id": "4c1fce47-9d04-4c0c-a25c-30e068a0f60e",
"type": "manga",
"attributes": {
"title": {
"en": "Hitler"
},
"altTitles": [
{
"en": "20th Century Madness: Gekiga Hitler"
},
{
"fr": "Hitler: La Novela Gr\u00e1fica"
},
{
"en": "Shigeru Mizuki's Hitler"
},
{
"ja": "\u5287\u753b\u30d2\u30c3\u30c8\u30e9\u30fc"
},
{
"ja-ro": "Gekiga hittor\u0101"
}
],
"description": {
"en": "(from amazon.jp):\nShigeru Mizuki depicts the life of the dictator who shaped the 20th century!\u3000\n\nIn addition to the title story, which carefully traces the strange fate of Adolf Hitler, this volume also includes a Beethoven biographical manga and rare short essay works from a wide range of adult-oriented magazines. \n\nThe book is packed with the charm of Mizuki's verse, which depicts a wide variety of themes.\u3000\n\nCommentary: \"Hitler is a monster who appeared in human society\" by Taro Minamoto (mangaka and manga critic)\n\n[Official English](https://drawnandquarterly.com/books/shigeru-mizukis-hitler/)",
"es": "Hitler: La Novela Gr\u00e1fica es una rigurosa y l\u00facida biograf\u00eda explicada con el pulso y la frescura que s\u00f3lo un narrador de pura raza puede aportar todav\u00eda acerca de una de las figuras m\u00e1s complejas de la historia mundial. Desde sus inicios como mediocre pintor hasta el horror de la soluci\u00f3n final, el gran mestro del manga Shigeru Mizuki dibuja en esta obra alguna de su mejores p\u00e1ginas sin apartar la mirada de un monstruo humano, demasiado humano."
},
"isLocked": false,
"links": {
"al": "46814",
"ap": "shigeru-mizukis-hitler",
"kt": "3569",
"mu": "21crycl",
"mal": "16814",
"raw": "https:\/\/drawnandquarterly.com\/books\/shigeru-mizukis-hitler\/"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "1",
"lastChapter": "17",
"publicationDemographic": "seinen",
"status": "completed",
"year": 1971,
"contentRating": "safe",
"tags": [
{
"id": "07251805-a27e-4d59-b488-f0bfbec15168",
"type": "tag",
"attributes": {
"name": {
"en": "Thriller"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "33771934-028e-4cb3-8744-691e866a923e",
"type": "tag",
"attributes": {
"name": {
"en": "Historical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "36fd93ea-e8b8-445e-b836-358f02b3d33d",
"type": "tag",
"attributes": {
"name": {
"en": "Monsters"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
"type": "tag",
"attributes": {
"name": {
"en": "Psychological"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
"type": "tag",
"attributes": {
"name": {
"en": "Comedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "5ca48985-9a9d-4bd8-be29-80dc0303db72",
"type": "tag",
"attributes": {
"name": {
"en": "Crime"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "5fff9cde-849c-4d78-aab0-0d52b2ee1d25",
"type": "tag",
"attributes": {
"name": {
"en": "Survival"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
"type": "tag",
"attributes": {
"name": {
"en": "Military"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b1e97889-25b4-4258-b28b-cd7f4d28ea9b",
"type": "tag",
"attributes": {
"name": {
"en": "Philosophical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
"type": "tag",
"attributes": {
"name": {
"en": "Gore"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
"type": "tag",
"attributes": {
"name": {
"en": "Drama"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "cdad7e68-1419-41dd-bdce-27753074a640",
"type": "tag",
"attributes": {
"name": {
"en": "Horror"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "e5301a23-ebd9-49dd-a0cb-2add944c7fe9",
"type": "tag",
"attributes": {
"name": {
"en": "Slice of Life"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
"type": "tag",
"attributes": {
"name": {
"en": "Tragedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2021-01-19T00:12:28+00:00",
"updatedAt": "2025-12-03T14:59:21+00:00",
"version": 12,
"availableTranslatedLanguages": [
"es"
],
"latestUploadedChapter": "0266ee01-7b88-4ab7-8553-6ba19af363bc"
},
"relationships": [
{
"id": "9a7709d7-c9a6-4afb-bdf9-054aec977140",
"type": "author"
},
{
"id": "9a7709d7-c9a6-4afb-bdf9-054aec977140",
"type": "artist"
},
{
"id": "7842e571-0fc3-4b73-80f4-5b8f031723ad",
"type": "cover_art",
"attributes": {
"description": "",
"volume": "1.1",
"fileName": "b2298a11-009e-4c5c-b910-d375683c7c7a.png",
"locale": "ja",
"createdAt": "2022-07-14T20:59:47+00:00",
"updatedAt": "2022-07-14T20:59:47+00:00",
"version": 1
}
},
{
"id": "957a54aa-b37c-4136-9e95-34f47dce188f",
"type": "manga",
"related": "same_franchise"
}
]
},
{
"id": "c7a47226-5e2a-47b8-9b35-728683d70faf",
"type": "manga",
"attributes": {
"title": {
"en": "Fantasy World Jun"
},
"altTitles": [
{
"ja-ro": "Jun - Shotaro no Fantasy World"
},
{
"ja": "\u30d5\u30a1\u30f3\u30bf\u30b8\u30fc\u30ef\u30fc\u30eb\u30c9 \u30b8\u30e5\u30f3"
},
{
"en": "Jun - Shotaro's Fantasy World"
}
],
"description": {
"en": "A experimental manga series about a boy named Jun and his surreal voyages. The character is an alter-ego of Ishinomori himself.\n\n(from ebookjapan):\n\nJun is an aspiring mangaka. His dream is not understood by his father, and the manga name(manuscript) he drew is torn up. Guided by a girl he met in his disappointment, he grows up in a fantasy world with various experiences... \n\nThis shocking work was published in \"COM,\" the magazine launched by Osamu Tezuka in its first issue and was the recipient of the 13th Shogakukan Manga Award in 1967.\n\n---\n- **As mentioned in the description, FWJ won the 13th Shogakukan Manga Award in 1967**"
},
"isLocked": false,
"links": {
"al": "82343",
"ap": "jun-shotaro-no-fantasy-world",
"kt": "11040",
"mu": "8yt0vk3",
"mal": "52343"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "2",
"lastChapter": "34",
"publicationDemographic": "seinen",
"status": "completed",
"year": 1967,
"contentRating": "safe",
"tags": [
{
"id": "07251805-a27e-4d59-b488-f0bfbec15168",
"type": "tag",
"attributes": {
"name": {
"en": "Thriller"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "0a39b5a1-b235-4886-a747-1d05d216532d",
"type": "tag",
"attributes": {
"name": {
"en": "Award Winning"
},
"description": {},
"group": "format",
"version": 1
},
"relationships": []
},
{
"id": "256c8bd9-4904-4360-bf4f-508a76d67183",
"type": "tag",
"attributes": {
"name": {
"en": "Sci-Fi"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "36fd93ea-e8b8-445e-b836-358f02b3d33d",
"type": "tag",
"attributes": {
"name": {
"en": "Monsters"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
"type": "tag",
"attributes": {
"name": {
"en": "Psychological"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "3de8c75d-8ee3-48ff-98ee-e20a65c86451",
"type": "tag",
"attributes": {
"name": {
"en": "Animals"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "423e2eae-a7a2-4a8b-ac03-a8351462d71d",
"type": "tag",
"attributes": {
"name": {
"en": "Romance"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
"type": "tag",
"attributes": {
"name": {
"en": "Comedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "87cc87cd-a395-47af-b27a-93258283bbc6",
"type": "tag",
"attributes": {
"name": {
"en": "Adventure"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "a1f53773-c69a-4ce5-8cab-fffcd90b1565",
"type": "tag",
"attributes": {
"name": {
"en": "Magic"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b1e97889-25b4-4258-b28b-cd7f4d28ea9b",
"type": "tag",
"attributes": {
"name": {
"en": "Philosophical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
"type": "tag",
"attributes": {
"name": {
"en": "Drama"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "cdc58593-87dd-415e-bbc0-2ec27bf404cc",
"type": "tag",
"attributes": {
"name": {
"en": "Fantasy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "e5301a23-ebd9-49dd-a0cb-2add944c7fe9",
"type": "tag",
"attributes": {
"name": {
"en": "Slice of Life"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "eabc5b4c-6aff-42f3-b657-3e90cbd00b75",
"type": "tag",
"attributes": {
"name": {
"en": "Supernatural"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "ee968100-4191-4968-93d3-f82d72be7e46",
"type": "tag",
"attributes": {
"name": {
"en": "Mystery"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
"type": "tag",
"attributes": {
"name": {
"en": "Tragedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2018-07-25T10:14:31+00:00",
"updatedAt": "2025-11-15T20:04:30+00:00",
"version": 14,
"availableTranslatedLanguages": [
"en",
"pt-br",
"es-la"
],
"latestUploadedChapter": "c446859e-fe8b-44e7-935b-9858a8cfb457"
},
"relationships": [
{
"id": "36f5f595-0196-4d0a-aae1-0f730679d10a",
"type": "author"
},
{
"id": "36f5f595-0196-4d0a-aae1-0f730679d10a",
"type": "artist"
},
{
"id": "81f4ffb6-8d4e-4c67-a590-017bead265d7",
"type": "cover_art",
"attributes": {
"description": "",
"volume": "2.1",
"fileName": "082d065d-c036-49fb-b0cd-8563fceade50.png",
"locale": "ja",
"createdAt": "2022-05-19T17:18:46+00:00",
"updatedAt": "2023-01-22T10:38:02+00:00",
"version": 2
}
},
{
"id": "94e81520-f128-4a18-83ca-304e5f76d26d",
"type": "manga",
"related": "sequel"
},
{
"id": "d513aff4-147f-4956-8b4c-345f2e96b2f4",
"type": "manga",
"related": "alternate_story"
}
]
},
{
"id": "d7e68212-e21d-400c-85c5-c7b5467e15ac",
"type": "manga",
"attributes": {
"title": {
"ja-ro": "Koukoku no Shugosha"
},
"altTitles": [
{
"en": "Imperial Guards"
},
{
"ja": "\u7687\u56fd\u306e\u5b88\u8b77\u8005"
}
],
"description": {
"en": "An elite military unit conducts its duties alongside sabertooth tigers trained to assist their human masters. The Royal Kingdom invades the Empire in their desire for world dominion\u2026after the disastrous opening battle of the war, the unit fights to save not only itself but their comrades from the enemy."
},
"isLocked": false,
"links": {
"al": "34599",
"ap": "koukoku-no-shugosha",
"kt": "9905",
"mu": "dlz4uat",
"mal": "4599"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "5",
"lastChapter": "34",
"publicationDemographic": "seinen",
"status": "completed",
"year": 2004,
"contentRating": "safe",
"tags": [
{
"id": "0a39b5a1-b235-4886-a747-1d05d216532d",
"type": "tag",
"attributes": {
"name": {
"en": "Award Winning"
},
"description": {},
"group": "format",
"version": 1
},
"relationships": []
},
{
"id": "36fd93ea-e8b8-445e-b836-358f02b3d33d",
"type": "tag",
"attributes": {
"name": {
"en": "Monsters"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "3de8c75d-8ee3-48ff-98ee-e20a65c86451",
"type": "tag",
"attributes": {
"name": {
"en": "Animals"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "87cc87cd-a395-47af-b27a-93258283bbc6",
"type": "tag",
"attributes": {
"name": {
"en": "Adventure"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "a1f53773-c69a-4ce5-8cab-fffcd90b1565",
"type": "tag",
"attributes": {
"name": {
"en": "Magic"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
"type": "tag",
"attributes": {
"name": {
"en": "Military"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
"type": "tag",
"attributes": {
"name": {
"en": "Gore"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
"type": "tag",
"attributes": {
"name": {
"en": "Drama"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "cdc58593-87dd-415e-bbc0-2ec27bf404cc",
"type": "tag",
"attributes": {
"name": {
"en": "Fantasy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "eabc5b4c-6aff-42f3-b657-3e90cbd00b75",
"type": "tag",
"attributes": {
"name": {
"en": "Supernatural"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "f4122d1c-3b44-44d0-9936-ff7502c39ad3",
"type": "tag",
"attributes": {
"name": {
"en": "Adaptation"
},
"description": {},
"group": "format",
"version": 1
},
"relationships": []
},
{
"id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
"type": "tag",
"attributes": {
"name": {
"en": "Tragedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2018-05-26T05:58:26+00:00",
"updatedAt": "2026-02-06T16:46:24+00:00",
"version": 8,
"availableTranslatedLanguages": [
"en",
"fr",
"es-la",
"ru",
"pt-br"
],
"latestUploadedChapter": "d38ae9af-7a18-4250-9474-ae8c121b5a0a"
},
"relationships": [
{
"id": "1a12e389-3a90-4aad-a517-6b14807d85c0",
"type": "author"
},
{
"id": "4c8f4aff-3aa1-43bf-b170-e7436e26bf3f",
"type": "artist"
},
{
"id": "e808e4c1-cf93-4f50-86d7-e8836a9b6a6f",
"type": "cover_art",
"attributes": {
"description": "",
"volume": null,
"fileName": "8a22b90b-c891-4522-b23f-9aa4adcd0454.jpg",
"locale": "ja",
"createdAt": "2021-05-24T18:33:34+00:00",
"updatedAt": "2021-05-24T18:33:34+00:00",
"version": 1
}
}
]
},
{
"id": "33493b21-3e31-4b5a-9a8b-8abff89f0e73",
"type": "manga",
"attributes": {
"title": {
"en": "Cat Eyed Boy"
},
"altTitles": [
{
"ru": "\u041c\u0430\u043b\u044c\u0447\u0438\u043a \u0441 \u043a\u043e\u0448\u0430\u0447\u044c\u0438\u043c\u0438 \u0433\u043b\u0430\u0437\u0430\u043c\u0438"
},
{
"ja": "\u732b\u76ee\u5c0f\u50e7"
},
{
"ja-ro": "Nekome Kozou"
}
],
"description": {
"en": "Cat-Eyed Boy is a half-human, half-monster child who mostly resembles a human, and therefore cannot live in the demon world. He lives hidden in the shadows of the human world, hated by both demons and humans. But wherever he goes, awful events occur. Humans interact with demons, but for the most part the humans that appear to act more evil than the monsters. Cat-Eyed Boy acts like Trickster, saving the innocent and helping the wicked receive the punishment that fate metes out. The stories are mostly tales of revenge and retribution for the evil acts people do. The series is broken into 11 individual stories, full of extremely grotesque and disturbing images."
},
"isLocked": false,
"links": {
"al": "35550",
"ap": "cat-eyed-boy",
"kt": "11933",
"mu": "mioom6i",
"mal": "5550",
"engtl": "https:\/\/www.viz.com\/cat-eyed-boy"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "3",
"lastChapter": "13",
"publicationDemographic": "seinen",
"status": "completed",
"year": 1967,
"contentRating": "safe",
"tags": [
{
"id": "36fd93ea-e8b8-445e-b836-358f02b3d33d",
"type": "tag",
"attributes": {
"name": {
"en": "Monsters"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "39730448-9a5f-48a2-85b0-a70db87b1233",
"type": "tag",
"attributes": {
"name": {
"en": "Demons"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
"type": "tag",
"attributes": {
"name": {
"en": "Psychological"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "87cc87cd-a395-47af-b27a-93258283bbc6",
"type": "tag",
"attributes": {
"name": {
"en": "Adventure"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
"type": "tag",
"attributes": {
"name": {
"en": "Gore"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "cdad7e68-1419-41dd-bdce-27753074a640",
"type": "tag",
"attributes": {
"name": {
"en": "Horror"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "eabc5b4c-6aff-42f3-b657-3e90cbd00b75",
"type": "tag",
"attributes": {
"name": {
"en": "Supernatural"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2018-05-19T06:41:55+00:00",
"updatedAt": "2025-11-15T19:11:26+00:00",
"version": 4,
"availableTranslatedLanguages": [
"en"
],
"latestUploadedChapter": "3aa5acba-e2e2-44f2-ba3d-a703a9646a9e"
},
"relationships": [
{
"id": "344c9083-ef8c-4eda-81d6-4aca7453d335",
"type": "author"
},
{
"id": "344c9083-ef8c-4eda-81d6-4aca7453d335",
"type": "artist"
},
{
"id": "3f787348-c1fa-4f74-9ff4-fde8fd0826d3",
"type": "cover_art",
"attributes": {
"description": "",
"volume": "5",
"fileName": "dba738fd-1639-4646-a08d-069dc621ca09.jpg",
"locale": "ja",
"createdAt": "2021-05-24T18:26:19+00:00",
"updatedAt": "2022-02-05T23:34:36+00:00",
"version": 2
}
}
]
},
{
"id": "4a5d677d-e3ac-4c23-a6bf-bb92c984fee4",
"type": "manga",
"attributes": {
"title": {
"en": "Berserk - The Prototype"
},
"altTitles": [
{
"ja": "\u30d9\u30eb\u30bb\u30eb\u30af\u30fb\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7"
},
{
"ru": "\u0411\u0435\u0440\u0441\u0435\u0440\u043a \u041f\u0440\u043e\u0442\u043e\u0442\u0438\u043f"
}
],
"description": {
"en": "The original pre-serialization one-shot for Berserk. Included in Berserk Volume 14.\n\n---\n- **Won the Comi Manga School Prize in 1988**",
"uk": "\u0426\u0435 \u0432\u0430\u043d\u0448\u043e\u0442, \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0439 \u041c\u0430\u0439\u0441\u0442\u0440\u043e\u043c \u041c\u0456\u0443\u0440\u043e\u044e 1988-\u0433\u043e \u0440\u043e\u043a\u0443. \u0425\u0440\u043e\u043d\u043e\u043b\u043e\u0433\u0456\u0447\u043d\u043e \u0439\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u0430 \u0431\u0443\u043b\u043e \u0431 \u0440\u043e\u0437\u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043f\u0456\u0441\u043b\u044f \u0430\u0440\u043a\u0438 \u00ab\u0427\u043e\u0440\u043d\u0438\u0439 \u041c\u0435\u0447\u043d\u0438\u043a\u00bb, \u043e\u0434\u043d\u0430\u043a, \u0432\u0456\u043d \u043d\u0435\u043a\u0430\u043d\u043e\u043d\u0456\u0447\u043d\u0438\u0439, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0454 \u0447\u0438\u043c\u0430\u043b\u043e \u0440\u043e\u0437\u0431\u0456\u0436\u043d\u043e\u0441\u0442\u0435\u0439 \u0456\u0437 \u0438\u043d\u0448\u0438\u043c\u0438 \u0430\u0440\u043a\u0430\u043c\u0438, \u043d\u0430 \u043a\u0448\u0442\u0430\u043b\u0442 \u00ab\u0427\u043e\u0440\u043d\u043e\u0433\u043e \u043b\u0438\u0446\u0430\u0440\u044f\u00bb \u0437\u0430\u043c\u0456\u0441\u0442\u044c \u00ab\u0427\u043e\u0440\u043d\u043e\u0433\u043e \u041c\u0435\u0447\u043d\u0438\u043a\u0430\u00bb. \u041e\u0434\u043d\u0430\u043a, \u0446\u0435\u0439 \u0432\u0430\u043d\u0448\u043e\u0442 \u0454 \u0432\u0430\u0436\u043b\u0438\u0432\u0438\u043c, \u0430\u0434\u0436\u0435 \u0432\u0456\u043d \u0432\u0438\u0437\u043d\u0430\u0447\u0438\u0432 \u043f\u043e\u0434\u0430\u043b\u044c\u0448\u0438\u0439 \u043d\u0430\u0440\u0430\u0442\u0438\u0432 \u00ab\u0411\u0435\u0440\u0441\u0435\u0440\u043a\u0430\u00bb.",
"pt-br": "Antes de Berserk se tornar o que \u00e9 agora, Miura Kentaro criou um cap\u00edtulo prot\u00f3tipo para o manga. O ano era 1988 e ele ainda era um estudante na \u00e9poca. Este \u00e9 o one-shot prot\u00f3tipo em que a manga Berserk \u00e9 baseado."
},
"isLocked": false,
"links": {
"al": "36408"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "",
"lastChapter": "",
"publicationDemographic": "seinen",
"status": "completed",
"year": 1988,
"contentRating": "safe",
"tags": [
{
"id": "0234a31e-a729-4e28-9d6a-3f87c4966b9e",
"type": "tag",
"attributes": {
"name": {
"en": "Oneshot"
},
"description": {},
"group": "format",
"version": 1
},
"relationships": []
},
{
"id": "07251805-a27e-4d59-b488-f0bfbec15168",
"type": "tag",
"attributes": {
"name": {
"en": "Thriller"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "0a39b5a1-b235-4886-a747-1d05d216532d",
"type": "tag",
"attributes": {
"name": {
"en": "Award Winning"
},
"description": {},
"group": "format",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "39730448-9a5f-48a2-85b0-a70db87b1233",
"type": "tag",
"attributes": {
"name": {
"en": "Demons"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
"type": "tag",
"attributes": {
"name": {
"en": "Comedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "87cc87cd-a395-47af-b27a-93258283bbc6",
"type": "tag",
"attributes": {
"name": {
"en": "Adventure"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
"type": "tag",
"attributes": {
"name": {
"en": "Gore"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "cdc58593-87dd-415e-bbc0-2ec27bf404cc",
"type": "tag",
"attributes": {
"name": {
"en": "Fantasy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2021-03-20T07:38:31+00:00",
"updatedAt": "2023-05-09T01:54:18+00:00",
"version": 16,
"availableTranslatedLanguages": [
"pt-br",
"ru"
],
"latestUploadedChapter": "f8df677a-f7f6-46fa-a92d-afd4bcdeeeb7"
},
"relationships": [
{
"id": "5863578d-4e4f-4b57-b64d-1dd45a893cb0",
"type": "author"
},
{
"id": "5863578d-4e4f-4b57-b64d-1dd45a893cb0",
"type": "artist"
},
{
"id": "fa00df5b-05f6-4920-b644-5e9bb29d330f",
"type": "cover_art",
"attributes": {
"description": "",
"volume": "1.1",
"fileName": "6c16ef4d-f87d-4e96-b1a1-aba9ccd36302.jpg",
"locale": "ja",
"createdAt": "2023-04-17T18:02:29+00:00",
"updatedAt": "2023-04-17T18:02:29+00:00",
"version": 1
}
},
{
"id": "801513ba-a712-498c-8f57-cae55b38cc92",
"type": "manga",
"related": "serialization"
}
]
},
{
"id": "16dc43f3-d6ba-4154-b445-a9d2e674c0eb",
"type": "manga",
"attributes": {
"title": {
"en": "Message to Adolf"
},
"altTitles": [
{
"en": "Tell Adolf"
},
{
"ja-ro": "Adolf ni Tsugu"
},
{
"en": "Adolf"
},
{
"ja": "\u30a2\u30c9\u30eb\u30d5\u306b\u544a\u3050"
},
{
"pt-br": "Recado a Adolf"
},
{
"pt-br": "Adolf"
}
],
"description": {
"en": "A graveyard in contemporary Israel has an unlikely visitor. The elderly gentleman from Japan, a former news correspondent, lays a bouquet of flowers at the tomb of one Adolf Kamil. For he remembers the tale of three Adolfs: Kamil, a Jew who grew up in Kobe, Japan, the son of a baker; Kaufmann, only child of a German consul stationed at that port city and his Japanese wife; and the Fuhrer with whom the Far Eastern nation made common cause. \n\n---\n- **Won the 10th Kodansha Manga Award for General Manga in 1986, shared with Makoto Kobayashi's What's Michael?**\n\n\n---\n**Volumes 372-376 of the Osamu Tezuka Complete Works**"
},
"isLocked": false,
"links": {
"al": "31695",
"ap": "message-to-adolf",
"kt": "3607",
"mu": "64o0tng",
"mal": "1695",
"raw": "https:\/\/kodansha.us\/series\/message-to-adolf\/"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "5",
"lastChapter": "36",
"publicationDemographic": "seinen",
"status": "completed",
"year": 1983,
"contentRating": "safe",
"tags": [
{
"id": "07251805-a27e-4d59-b488-f0bfbec15168",
"type": "tag",
"attributes": {
"name": {
"en": "Thriller"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "0a39b5a1-b235-4886-a747-1d05d216532d",
"type": "tag",
"attributes": {
"name": {
"en": "Award Winning"
},
"description": {},
"group": "format",
"version": 1
},
"relationships": []
},
{
"id": "33771934-028e-4cb3-8744-691e866a923e",
"type": "tag",
"attributes": {
"name": {
"en": "Historical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
"type": "tag",
"attributes": {
"name": {
"en": "Psychological"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "423e2eae-a7a2-4a8b-ac03-a8351462d71d",
"type": "tag",
"attributes": {
"name": {
"en": "Romance"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
"type": "tag",
"attributes": {
"name": {
"en": "Comedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "5ca48985-9a9d-4bd8-be29-80dc0303db72",
"type": "tag",
"attributes": {
"name": {
"en": "Crime"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "5fff9cde-849c-4d78-aab0-0d52b2ee1d25",
"type": "tag",
"attributes": {
"name": {
"en": "Survival"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "69964a64-2f90-4d33-beeb-f3ed2875eb4c",
"type": "tag",
"attributes": {
"name": {
"en": "Sports"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "85daba54-a71c-4554-8a28-9901a8b0afad",
"type": "tag",
"attributes": {
"name": {
"en": "Mafia"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "87cc87cd-a395-47af-b27a-93258283bbc6",
"type": "tag",
"attributes": {
"name": {
"en": "Adventure"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "97893a4c-12af-4dac-b6be-0dffb353568e",
"type": "tag",
"attributes": {
"name": {
"en": "Sexual Violence"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
"type": "tag",
"attributes": {
"name": {
"en": "Military"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b1e97889-25b4-4258-b28b-cd7f4d28ea9b",
"type": "tag",
"attributes": {
"name": {
"en": "Philosophical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
"type": "tag",
"attributes": {
"name": {
"en": "Gore"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
"type": "tag",
"attributes": {
"name": {
"en": "Drama"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "df33b754-73a3-4c54-80e6-1a74a8058539",
"type": "tag",
"attributes": {
"name": {
"en": "Police"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "e5301a23-ebd9-49dd-a0cb-2add944c7fe9",
"type": "tag",
"attributes": {
"name": {
"en": "Slice of Life"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "ee968100-4191-4968-93d3-f82d72be7e46",
"type": "tag",
"attributes": {
"name": {
"en": "Mystery"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
"type": "tag",
"attributes": {
"name": {
"en": "Tragedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2018-07-14T10:55:42+00:00",
"updatedAt": "2025-11-15T23:56:16+00:00",
"version": 16,
"availableTranslatedLanguages": [
"en",
"pt-br"
],
"latestUploadedChapter": "36f920bc-5fcb-43d4-a6cd-d34557107d23"
},
"relationships": [
{
"id": "21575d70-b954-4e3a-80df-00192f413a83",
"type": "author"
},
{
"id": "21575d70-b954-4e3a-80df-00192f413a83",
"type": "artist"
},
{
"id": "dcea5d72-b6ed-4fa3-8a29-c2f8810f00fe",
"type": "cover_art",
"attributes": {
"description": "",
"volume": "5",
"fileName": "4f6bf801-d99e-427c-a032-18db376bb293.jpg",
"locale": "ja",
"createdAt": "2021-05-23T08:10:56+00:00",
"updatedAt": "2021-05-23T08:10:56+00:00",
"version": 2
}
}
]
},
{
"id": "e14e3725-e74a-47d5-a57b-38f274af67a8",
"type": "manga",
"attributes": {
"title": {
"en": "Arion"
},
"altTitles": [
{
"ru": "\u0410\u0440\u0438\u043e\u043d"
},
{
"ja": "\u30a2\u30ea\u30aa\u30f3"
},
{
"zh": "\u4e9a\u5229\u5b89"
},
{
"zh-hk": "\u4e9a\u91cc\u5b89"
},
{
"zh-hk": "\u4e9e\u91cc\u5b89"
},
{
"ko": "\uc544\ub9ac\uc628"
},
{
"el": "\u0391\u03c1\u03af\u03c9\u03bd"
},
{
"ko-ro": "alion"
},
{
"zh-ro": "Y\u01ce l\u00ec'\u0101n"
},
{
"zh": "\u4e9e\u5229\u5b89"
}
],
"description": {
"en": "(from ebookjapan):\n\nOnce upon a time there were... 3 brothers. They decided to divide the world into three parts and decide which part of the world each would occupy by drawing their lot. \n\nThe youngest brother, Zeus, who drew the first lot, became king of the Sky, and the second brother, Poseidon, drew the second lot and became king of the fertile Sea. The unlucky eldest brother, Hades, drew the third and worst lot. He was forced to become king of the dark Underworld...\n\nYears later, Arion, a young, and promising, boy is kidnapped by Hades and raised for the day for when he goes to Mount Olympus to deal with Zeus once and for all. \n\nAdapted into an anime film by Yasuhiko Yoshikazu himself in 1986, with the titled altered to **Neo Heroic Fantasia: Arion**. The tagline for the film was \"There's an Arion in you!\"\n\n---\n\n**Links:** \n- [Anime Film Adaptation on ANN](https://www.animenewsnetwork.com/encyclopedia/anime.php?id=807) \n \n [Official Chinese](https://book.douban.com/subject/3126619/)",
"fr": "UNE LEGENDE DU MANGA DANS UNE EDITION EXCEPTIONNELLE ! Arion, fils de D\u00e9m\u00e9ther et de Prom\u00e9th\u00e9e, est enlev\u00e9 par Had\u00e8s qui l'entra\u00eene au royaume des enfers. Il y grandit et devient un vaillant guerrier dans le but cach\u00e9 par Had\u00e8s de tuer Zeus et Poseidon. Il entame alors un voyage initiatique au travers de la Gr\u00e8ce antique mise \u00e0 feu et \u00e0 sang par les guerres qui opposent les dieux et va en devenir l'acteur le plus important ! e chef-d'oeuvre intemporel de Yoshikazu YASUHIKO pour la premi\u00e8re fois en France, ET EN GRAND FORMAT ! Cette \u00e9dition est une reproduction de l'\u00e9dition en 3 tomes de 1986 jamais r\u00e9\u00e9dit\u00e9e. Chaque tome comporte des suppl\u00e9ments exclusifs. Dans ce tome 1 : 8 Illustrations couleurs en d\u00e9but de tome Pr\u00e9sentation des personnages et interview de l'auteur.",
"ja": "\u305d\u306e\u6614\u2026\u2026\uff13\u4eba\u306e\u5144\u5f1f\u304c\u3044\u305f\u3002\u304b\u308c\u3089\u306f\u4e16\u754c\u3092\uff13\u3064\u306b\u308f\u3051\u305d\u308c\u305e\u308c\u306e\u304a\u3055\u3081\u308b\u90e8\u5206\u3092\u304f\u3058\u5f15\u304d\u3067\u6c7a\u3081\u308b\u3053\u3068\u306b\u3057\u305f\u3002\u4e00\u756a\u304f\u3058\u3092\u5f15\u3044\u305f\u672b\u5f1f\u306e\u30bc\u30a6\u30b9\u306f\u5929\u754c\u306e\u738b\u3068\u306a\u308a\u3001\u6b21\u5144\u306e\u30dd\u30bb\u30a4\u30c9\u30f3\u306f\u4e8c\u756a\u304f\u3058\u3092\u5f15\u304d\u8c4a\u7a63\u306a\u6d77\u754c\u306e\u738b\u3068\u306a\u3063\u305f\u3002\u4e0d\u904b\u306a\u9577\u5144\u306e\u30cf\u30c7\u30b9\u306f\u4e09\u756a\u304f\u3058\u3092\u5f15\u3044\u305f\u3002\u304b\u308c\u306f\u3084\u3080\u306a\u304f\u6697\u3044\u5730\u5e95\u306e\u56fd\u306e\u738b\u3068\u306a\u3063\u305f\u2026\u2026",
"zh": "\u4e9e\u5229\u5b89\u7684\u6bcd\u89aa\u4e00\u751f\u4e0b\u4ed6\uff0c\u96d9\u76ee\u4fbf\u544a\u5931\u660e\uff0c\u552f\u6709\u4e9e\u5229\u5b89\u5b8c\u6210\u4e86\u81ea\u5df1\u6240\u63f9\u8ca0\u7684\u5bbf\u547d\uff0c\u6bcd\u89aa\u624d\u5f97\u4ee5\u5fa9\u660e\u3002\u70ba\u6b64\uff0c\u4e9e\u5229\u5b89\u523a\u6bba\u5b99\u65af\uff0c\u6311\u8d77\u4e86\u4e00\u5834\u773e\u795e\u5927\u6230\u2026"
},
"isLocked": false,
"links": {
"al": "53777",
"ap": "arion",
"kt": "15613",
"mu": "96smfd3",
"mal": "23777"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "5",
"lastChapter": "28",
"publicationDemographic": "seinen",
"status": "completed",
"year": 1979,
"contentRating": "safe",
"tags": [
{
"id": "07251805-a27e-4d59-b488-f0bfbec15168",
"type": "tag",
"attributes": {
"name": {
"en": "Thriller"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "33771934-028e-4cb3-8744-691e866a923e",
"type": "tag",
"attributes": {
"name": {
"en": "Historical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "36fd93ea-e8b8-445e-b836-358f02b3d33d",
"type": "tag",
"attributes": {
"name": {
"en": "Monsters"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
"type": "tag",
"attributes": {
"name": {
"en": "Psychological"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
"type": "tag",
"attributes": {
"name": {
"en": "Comedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "5fff9cde-849c-4d78-aab0-0d52b2ee1d25",
"type": "tag",
"attributes": {
"name": {
"en": "Survival"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "87cc87cd-a395-47af-b27a-93258283bbc6",
"type": "tag",
"attributes": {
"name": {
"en": "Adventure"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "97893a4c-12af-4dac-b6be-0dffb353568e",
"type": "tag",
"attributes": {
"name": {
"en": "Sexual Violence"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "a1f53773-c69a-4ce5-8cab-fffcd90b1565",
"type": "tag",
"attributes": {
"name": {
"en": "Magic"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
"type": "tag",
"attributes": {
"name": {
"en": "Military"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b1e97889-25b4-4258-b28b-cd7f4d28ea9b",
"type": "tag",
"attributes": {
"name": {
"en": "Philosophical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
"type": "tag",
"attributes": {
"name": {
"en": "Gore"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
"type": "tag",
"attributes": {
"name": {
"en": "Drama"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "e5301a23-ebd9-49dd-a0cb-2add944c7fe9",
"type": "tag",
"attributes": {
"name": {
"en": "Slice of Life"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "eabc5b4c-6aff-42f3-b657-3e90cbd00b75",
"type": "tag",
"attributes": {
"name": {
"en": "Supernatural"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "ee968100-4191-4968-93d3-f82d72be7e46",
"type": "tag",
"attributes": {
"name": {
"en": "Mystery"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
"type": "tag",
"attributes": {
"name": {
"en": "Tragedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2018-09-08T12:31:10+00:00",
"updatedAt": "2025-11-15T19:56:38+00:00",
"version": 23,
"availableTranslatedLanguages": [
"en"
],
"latestUploadedChapter": "181f0aa1-7b08-482d-83bc-6fd4368d3dd7"
},
"relationships": [
{
"id": "30aee8f2-f041-466a-b685-8d23e82a539e",
"type": "author"
},
{
"id": "30aee8f2-f041-466a-b685-8d23e82a539e",
"type": "artist"
},
{
"id": "9abd3bd4-49c0-4371-b19c-41c8ab440dd2",
"type": "cover_art",
"attributes": {
"description": "",
"volume": "5",
"fileName": "19c41fb7-a45e-45da-98bf-060d6f3efe28.png",
"locale": "ja",
"createdAt": "2023-01-04T17:15:30+00:00",
"updatedAt": "2023-01-04T17:15:30+00:00",
"version": 1
}
},
{
"id": "ea96661c-9ccd-4b81-94a0-80ffb22701dc",
"type": "manga",
"related": "same_franchise"
}
]
},
{
"id": "2557db08-1d02-4dfc-83da-4e1a2b62d223",
"type": "manga",
"attributes": {
"title": {
"ja-ro": "Yuusha ni Haiboku Shita Maou-sama wa Kaerizaku Tame ni Mamonogirudo wo Tsukuru Koto ni Shimashita."
},
"altTitles": [
{
"ja": "\u52c7\u8005\u306b\u6557\u5317\u3057\u305f\u9b54\u738b\u69d8\u306f\u8fd4\u308a\u54b2\u304f\u305f\u3081\u306b\u9b54\u7269\u30ae\u30eb\u30c9\u3092\u4f5c\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002"
},
{
"ja-ro": "Yuusha ni Haiboku Shita Maou-sama wa Kaerizaku Tame ni Mamonogirudo o Tsukuru Koto ni Shimashita."
},
{
"en": "Monster Guild: The Dark Lord\u2019s (No-Good) Comeback!"
}
],
"description": {
"en": "The Demon King has had a rough day. Just when he thought he finally defeated the hero, he came back. And back. And back. And sooner or later, the hero who constantly resurrected was bound to defeat a Demon Lord who couldn't. And he did. The hero vanquished the Demon Lord, peace spread across the land, and so on and so forth. The End. That's it. That's the whole story.\n\n...Kidding. The Demon Lord sent his soul to a empty vessel, which saved his life but unfortunately also is incredibly weak. So what\u2019s a Demon King to do when he wants to rule the world, but couldn\u2019t even defeat a child?\n\_\_\_\n[Official English](https://sevenseasentertainment.com/series/monster-guild-the-dark-lords-no-good-comeback/)\n\n- **Won the 2nd Shinchosha Bunch Manga Award**",
"ja": "\u66b4\u8650\u306e\u9650\u308a\u3092\u5c3d\u304f\u3057\u305f\u30a2\u30b0\u30cb\u30a4\u30f3\u306e\u9b54\u738b\u306f\u52c7\u8005\u306b\u6557\u5317\u3002\u304b\u308d\u3046\u3058\u3066\u6d88\u6ec5\u3092\u514d\u308c\u305f\u3082\u306e\u306e\u3001\u5168\u3066\u3092\u5931\u3044\u898b\u308b\u5f71\u3082\u306a\u3044\u307b\u3069\u843d\u3061\u3076\u308c\u3066\u2026\u2026\u3002\u529b\u3092\u6c42\u3081\u3066\u4e03\u8ee2\u516b\u5012\u3002"
},
"isLocked": false,
"links": {
"al": "125592",
"ap": "monster-guild-the-dark-lords-no-good-comeback",
"bw": "series\/248510\/list",
"kt": "60930",
"mu": "dww15rg",
"mal": "127487",
"raw": "https:\/\/www.comicbunch.com\/manga\/bbunch\/yushanihaiboku\/"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "",
"lastChapter": "",
"publicationDemographic": "seinen",
"status": "ongoing",
"year": 2019,
"contentRating": "safe",
"tags": [
{
"id": "07251805-a27e-4d59-b488-f0bfbec15168",
"type": "tag",
"attributes": {
"name": {
"en": "Thriller"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "0a39b5a1-b235-4886-a747-1d05d216532d",
"type": "tag",
"attributes": {
"name": {
"en": "Award Winning"
},
"description": {},
"group": "format",
"version": 1
},
"relationships": []
},
{
"id": "0bc90acb-ccc1-44ca-a34a-b9f3a73259d0",
"type": "tag",
"attributes": {
"name": {
"en": "Reincarnation"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "36fd93ea-e8b8-445e-b836-358f02b3d33d",
"type": "tag",
"attributes": {
"name": {
"en": "Monsters"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "39730448-9a5f-48a2-85b0-a70db87b1233",
"type": "tag",
"attributes": {
"name": {
"en": "Demons"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
"type": "tag",
"attributes": {
"name": {
"en": "Psychological"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
"type": "tag",
"attributes": {
"name": {
"en": "Comedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "5fff9cde-849c-4d78-aab0-0d52b2ee1d25",
"type": "tag",
"attributes": {
"name": {
"en": "Survival"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "87cc87cd-a395-47af-b27a-93258283bbc6",
"type": "tag",
"attributes": {
"name": {
"en": "Adventure"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "a1f53773-c69a-4ce5-8cab-fffcd90b1565",
"type": "tag",
"attributes": {
"name": {
"en": "Magic"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
"type": "tag",
"attributes": {
"name": {
"en": "Military"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
"type": "tag",
"attributes": {
"name": {
"en": "Drama"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "cdc58593-87dd-415e-bbc0-2ec27bf404cc",
"type": "tag",
"attributes": {
"name": {
"en": "Fantasy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "eabc5b4c-6aff-42f3-b657-3e90cbd00b75",
"type": "tag",
"attributes": {
"name": {
"en": "Supernatural"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
"type": "tag",
"attributes": {
"name": {
"en": "Tragedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2020-05-02T02:58:39+00:00",
"updatedAt": "2026-02-06T17:22:12+00:00",
"version": 13,
"availableTranslatedLanguages": [
"en",
"ru"
],
"latestUploadedChapter": "e388aa15-eb50-4b95-ad6c-6b1261f090e7"
},
"relationships": [
{
"id": "0b6a8bbb-7f1f-43e4-bc5e-2bfa6a5b4cba",
"type": "author"
},
{
"id": "0b6a8bbb-7f1f-43e4-bc5e-2bfa6a5b4cba",
"type": "artist"
},
{
"id": "9d21dd84-54d3-42f3-99b6-942be8d26537",
"type": "cover_art",
"attributes": {
"description": "",
"volume": "12",
"fileName": "47b67a93-8292-40f1-bf95-fd7e302563f6.jpg",
"locale": "ja",
"createdAt": "2025-12-04T15:32:55+00:00",
"updatedAt": "2025-12-04T15:32:55+00:00",
"version": 1
}
}
]
},
{
"id": "9cf439ab-6122-43cf-8ec2-8b3778577850",
"type": "manga",
"attributes": {
"title": {
"en": "CONTRACTORS"
},
"altTitles": [
{
"ja": "\u30b3\u30f3\u30c8\u30e9\u30af\u30bf\u30fc\u30ba"
}
],
"description": {
"en": "A police officer who acquired the ability to become a \"pumpkin monster\" after an incident. What's the case he follows\u2026!?"
},
"isLocked": false,
"links": {},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "",
"lastChapter": "",
"publicationDemographic": "seinen",
"status": "completed",
"year": 2020,
"contentRating": "safe",
"tags": [
{
"id": "0234a31e-a729-4e28-9d6a-3f87c4966b9e",
"type": "tag",
"attributes": {
"name": {
"en": "Oneshot"
},
"description": {},
"group": "format",
"version": 1
},
"relationships": []
},
{
"id": "0a39b5a1-b235-4886-a747-1d05d216532d",
"type": "tag",
"attributes": {
"name": {
"en": "Award Winning"
},
"description": {},
"group": "format",
"version": 1
},
"relationships": []
},
{
"id": "0bc90acb-ccc1-44ca-a34a-b9f3a73259d0",
"type": "tag",
"attributes": {
"name": {
"en": "Reincarnation"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "36fd93ea-e8b8-445e-b836-358f02b3d33d",
"type": "tag",
"attributes": {
"name": {
"en": "Monsters"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "39730448-9a5f-48a2-85b0-a70db87b1233",
"type": "tag",
"attributes": {
"name": {
"en": "Demons"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "5ca48985-9a9d-4bd8-be29-80dc0303db72",
"type": "tag",
"attributes": {
"name": {
"en": "Crime"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "85daba54-a71c-4554-8a28-9901a8b0afad",
"type": "tag",
"attributes": {
"name": {
"en": "Mafia"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "a1f53773-c69a-4ce5-8cab-fffcd90b1565",
"type": "tag",
"attributes": {
"name": {
"en": "Magic"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
"type": "tag",
"attributes": {
"name": {
"en": "Military"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
"type": "tag",
"attributes": {
"name": {
"en": "Gore"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
"type": "tag",
"attributes": {
"name": {
"en": "Drama"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "cdad7e68-1419-41dd-bdce-27753074a640",
"type": "tag",
"attributes": {
"name": {
"en": "Horror"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "cdc58593-87dd-415e-bbc0-2ec27bf404cc",
"type": "tag",
"attributes": {
"name": {
"en": "Fantasy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "eabc5b4c-6aff-42f3-b657-3e90cbd00b75",
"type": "tag",
"attributes": {
"name": {
"en": "Supernatural"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2020-08-04T21:49:05+00:00",
"updatedAt": "2022-11-04T14:57:22+00:00",
"version": 2,
"availableTranslatedLanguages": [
"pt-br"
],
"latestUploadedChapter": "3ac2df02-ff5a-4d4e-bbc8-96233744cac4"
},
"relationships": [
{
"id": "e4ad099d-30ec-4c2d-9398-3aa1d031bf71",
"type": "author"
},
{
"id": "0ad44978-58c9-4fcc-997b-a61664f2ea65",
"type": "cover_art",
"attributes": {
"description": "",
"volume": null,
"fileName": "42b05ef8-1855-4622-9dbb-11bee84465a6.jpg",
"locale": "ja",
"createdAt": "2021-05-24T18:05:29+00:00",
"updatedAt": "2021-05-24T18:05:29+00:00",
"version": 1
}
}
]
},
{
"id": "ba322adf-e395-49ab-b8ae-4e5023620d6d",
"type": "manga",
"attributes": {
"title": {
"en": "The Devil of the Gods"
},
"altTitles": [
{
"ja-ro": "Kamigami no Akuma"
},
{
"ja": "\u795e\u3005\u306e\u60aa\u9b54"
}
],
"description": {
"en": "A mysterious man butchers his way through a busy train car in Tokyo. This marks the starting point of a series of mysterious incidents. Renji Amamiya is attacked by Toriko, a prostitute with whom he is in love with, but he is saved by father Mitakura, a renowned exorcist who reveals to him the existence of demons\u2026 \n \n[Twitter](https://twitter.com/tukasai)"
},
"isLocked": false,
"links": {
"al": "105298",
"ap": "kamigami-no-akuma",
"kt": "62563",
"mu": "84tob0o",
"mal": "127987",
"raw": "http:\/\/www.nihonbungeisha.co.jp\/goraku\/"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "2",
"lastChapter": "10",
"publicationDemographic": "seinen",
"status": "cancelled",
"year": 2018,
"contentRating": "safe",
"tags": [
{
"id": "07251805-a27e-4d59-b488-f0bfbec15168",
"type": "tag",
"attributes": {
"name": {
"en": "Thriller"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "36fd93ea-e8b8-445e-b836-358f02b3d33d",
"type": "tag",
"attributes": {
"name": {
"en": "Monsters"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "39730448-9a5f-48a2-85b0-a70db87b1233",
"type": "tag",
"attributes": {
"name": {
"en": "Demons"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
"type": "tag",
"attributes": {
"name": {
"en": "Psychological"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
"type": "tag",
"attributes": {
"name": {
"en": "Gore"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "cdad7e68-1419-41dd-bdce-27753074a640",
"type": "tag",
"attributes": {
"name": {
"en": "Horror"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "cdc58593-87dd-415e-bbc0-2ec27bf404cc",
"type": "tag",
"attributes": {
"name": {
"en": "Fantasy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "eabc5b4c-6aff-42f3-b657-3e90cbd00b75",
"type": "tag",
"attributes": {
"name": {
"en": "Supernatural"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "ee968100-4191-4968-93d3-f82d72be7e46",
"type": "tag",
"attributes": {
"name": {
"en": "Mystery"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
"type": "tag",
"attributes": {
"name": {
"en": "Tragedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2020-08-22T01:56:19+00:00",
"updatedAt": "2025-11-15T21:25:03+00:00",
"version": 7,
"availableTranslatedLanguages": [
"en",
"ru",
"pt-br"
],
"latestUploadedChapter": "b891261d-0a82-44f7-ba18-b7a787232e50"
},
"relationships": [
{
"id": "494cce57-7444-4583-b8ee-cf1bccfcfcbf",
"type": "author"
},
{
"id": "19448f88-a91e-4acc-b7ad-e0105d786933",
"type": "artist"
},
{
"id": "090d8653-116b-4883-9f7e-80d52a4731dc",
"type": "cover_art",
"attributes": {
"description": "",
"volume": "1",
"fileName": "3530b32d-1c8a-49a8-9fc9-497894418f67.jpg",
"locale": "ja",
"createdAt": "2024-04-27T21:33:30+00:00",
"updatedAt": "2024-04-27T21:33:30+00:00",
"version": 1
}
}
]
},
{
"id": "36801362-0927-4901-9a91-8a85e73275e4",
"type": "manga",
"attributes": {
"title": {
"en": "Adu of Hades"
},
"altTitles": [
{
"ja-ro": "Naraku no Adu"
},
{
"fr": "Twelve Demon Kings"
},
{
"ru": "\u0410\u0434\u0443 \u0438\u0437 \u0410\u0434\u0430"
},
{
"ja": "\u30ca\u30e9\u30af\u30ce\u30a2\u30c9\u30a5"
},
{
"zh-hk": "\u4f86\u81ea\u6df1\u6df5\u7684\u963f\u675c"
},
{
"zh": "\u6765\u81ea\u6df1\u6e0a\u7684\u963f\u675c"
}
],
"description": {
"en": "Adu is no ordinary human being. He is actually one of the 12 most powerful Demon Kings who, after making a pact with an angel, has been allowed to materialize into a human's body in the real world under one condition: \n \nHe must seek and destroy all of the other Demon Kings. \n \nBeing one of the most powerful Demon Kings, this sounds like an easy task, but the aftereffect of becoming more human-like is becoming less demon-like. Becoming less powerful. \n \nThis is the story of Adu's journey as he embarks on a quest to rid the world of the Demon Kings and protect its people, all while hiding his dark secret from the very people themselves."
},
"isLocked": false,
"links": {
"al": "96463",
"ap": "narakunoadu",
"bw": "series\/68041\/list",
"kt": "38054",
"mu": "4a99e8w",
"mal": "94701"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "6",
"lastChapter": "36",
"publicationDemographic": "seinen",
"status": "completed",
"year": 2015,
"contentRating": "safe",
"tags": [
{
"id": "36fd93ea-e8b8-445e-b836-358f02b3d33d",
"type": "tag",
"attributes": {
"name": {
"en": "Monsters"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "39730448-9a5f-48a2-85b0-a70db87b1233",
"type": "tag",
"attributes": {
"name": {
"en": "Demons"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "87cc87cd-a395-47af-b27a-93258283bbc6",
"type": "tag",
"attributes": {
"name": {
"en": "Adventure"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "a1f53773-c69a-4ce5-8cab-fffcd90b1565",
"type": "tag",
"attributes": {
"name": {
"en": "Magic"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
"type": "tag",
"attributes": {
"name": {
"en": "Gore"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
"type": "tag",
"attributes": {
"name": {
"en": "Drama"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "cdc58593-87dd-415e-bbc0-2ec27bf404cc",
"type": "tag",
"attributes": {
"name": {
"en": "Fantasy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "eabc5b4c-6aff-42f3-b657-3e90cbd00b75",
"type": "tag",
"attributes": {
"name": {
"en": "Supernatural"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
"type": "tag",
"attributes": {
"name": {
"en": "Tragedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2018-12-16T13:43:50+00:00",
"updatedAt": "2026-01-05T09:00:31+00:00",
"version": 7,
"availableTranslatedLanguages": [
"en",
"vi"
],
"latestUploadedChapter": "b414c181-d73d-494a-8660-7e485fdf8329"
},
"relationships": [
{
"id": "7bb61cc9-1f0c-461a-b878-d59ef922bd65",
"type": "author"
},
{
"id": "7bb61cc9-1f0c-461a-b878-d59ef922bd65",
"type": "artist"
},
{
"id": "e4462b42-f2ed-4ffd-8374-4759896b4122",
"type": "cover_art",
"attributes": {
"description": "",
"volume": "6",
"fileName": "a30c442f-f24b-431c-bd5b-82ee66c1bb6c.png",
"locale": "ja",
"createdAt": "2021-05-23T06:04:01+00:00",
"updatedAt": "2021-05-23T06:04:01+00:00",
"version": 2
}
}
]
},
{
"id": "b9959adb-c7bc-4303-84c7-c4b6b2828c46",
"type": "manga",
"attributes": {
"title": {
"en": "Aircraft Carrier Ibuki"
},
"altTitles": [
{
"ja": "\u7a7a\u6bcd\u3044\u3076\u304d"
},
{
"es-la": "Portaaviones Kabuki"
},
{
"ja-ro": "Kuubo Ibuki"
}
],
"description": {
"en": "The year is 20XX, state of the world affairs is changing at a dizzying pace. This is particularly clear in the growing military strength of countries neighboring Japan. In response to a near-skirmish with China over the much-disputed Senkaku Islands, Japan launched the state-of-the-art aircraft carrier _\"Ibuki\"_, equipped with the latest stealth aircrafts and formed a new fleet\u2026 Captained by an Air Self-Defense Force, Ryota Akitsu, will he able to sort out inter-service differences? And amidst this rising tension, what will be Japan's next move? \n \n*From the award-winning author of \"[Zipang](https://mangadex.org/title/665)\", \"[A Spirit of the Sun](https://mangadex.org/title/6580)\" **Kaiji Kawaguchi**, comes a thrilling modern geopolitical dramas of the Far East Asia.* \n \n**\u2022Winner of the 63rd Shogakukan Manga Award 2017, 'Best General Manga'\u2022** \n \nNote: It can be assumed that the story take places in 2014, the year of the series initial release. As mentioned in the manga; \"60 years since the establishment of JSDF\" (1954).",
"es-la": "Es el a\u00f1o 20XX, el estado de los asuntos mundiales est\u00e1 cambiando a un ritmo vertiginoso. Esto es particularmente claro en la creciente fuerza militar de los pa\u00edses vecinos de Jap\u00f3n. En respuesta a una casi escaramuza con China por las disputadas islas Senkaku, Jap\u00f3n lanz\u00f3 el portaaviones de \u00faltima generaci\u00f3n _\"Ibuki \"_, equipado con los \u00faltimos aviones furtivos y form\u00f3 una nueva flota... Capitaneado por una Fuerza de Autodefensa A\u00e9rea, Ryota Akitsu, \u00bfser\u00e1 capaz de resolver las diferencias entre servicios? Y en medio de esta creciente tensi\u00f3n, \u00bfcu\u00e1l ser\u00e1 el pr\u00f3ximo movimiento de Jap\u00f3n? \n\n- **Ganador del 63\u00ba Premio Shogakukan Manga 2017, 'Mejor Manga General'-** \n \nNota: Se puede suponer que la historia tiene lugar en 2014, el a\u00f1o del lanzamiento inicial de la serie. Como se menciona en el manga; \"60 a\u00f1os desde el establecimiento de la JSDF\" (1954)."
},
"isLocked": false,
"links": {
"al": "102950",
"ap": "kuubo-ibuki",
"kt": "42997",
"mu": "ecpvyhz",
"mal": "93497",
"raw": "https:\/\/bigcomics.jp\/series\/683f7b5b6d32d"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "13",
"lastChapter": "103",
"publicationDemographic": "seinen",
"status": "completed",
"year": 2014,
"contentRating": "safe",
"tags": [
{
"id": "0a39b5a1-b235-4886-a747-1d05d216532d",
"type": "tag",
"attributes": {
"name": {
"en": "Award Winning"
},
"description": {},
"group": "format",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
"type": "tag",
"attributes": {
"name": {
"en": "Military"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
"type": "tag",
"attributes": {
"name": {
"en": "Drama"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2018-11-23T13:46:28+00:00",
"updatedAt": "2025-11-15T16:33:34+00:00",
"version": 10,
"availableTranslatedLanguages": [
"en"
],
"latestUploadedChapter": "62e41a81-5587-4fe0-95a4-86931a452483"
},
"relationships": [
{
"id": "6a37b2ab-e958-40b9-ad8f-7a990f8097e6",
"type": "author"
},
{
"id": "dc2c847f-b38c-4fcc-aa87-1191648b30d2",
"type": "author"
},
{
"id": "6a37b2ab-e958-40b9-ad8f-7a990f8097e6",
"type": "artist"
},
{
"id": "d16a0967-2764-4495-a603-d0e0090e3880",
"type": "cover_art",
"attributes": {
"description": "",
"volume": "13",
"fileName": "580e439e-aa78-4f3b-a2ae-b2c61affb526.jpg",
"locale": "ja",
"createdAt": "2022-01-31T00:55:55+00:00",
"updatedAt": "2022-01-31T00:55:55+00:00",
"version": 1
}
},
{
"id": "104a4efb-d305-4213-abb2-c237391979f0",
"type": "manga",
"related": "sequel"
}
]
},
{
"id": "ef1d242f-964f-429e-9ddc-9f0f485f8ab9",
"type": "manga",
"attributes": {
"title": {
"ja-ro": "Juuza no Ulna"
},
"altTitles": [
{
"ja-ro": "Juuza no Uruna"
},
{
"ja-ro": "Juza no Ulna"
},
{
"en": "Ulna at the Emplacement"
},
{
"zh-hk": "\u69cd\u6258\u4e0a\u7684\u70cf\u9b6f\u5a1c"
},
{
"ja": "\u9283\u5ea7\u306e\u30a6\u30eb\u30ca"
}
],
"description": {
"en": "Ulna Trop Jonk is a sniper who assumes her first military job on the front line of a remote island. \nThere, the soldiers must fight against a wild village of monstrous aspect. \n \n- Won the 21st Japan Media Arts Festival Excellence Award's Manga Division in 2018 \nNominated to 24th Tezuka Osamu Cultural Award"
},
"isLocked": false,
"links": {
"al": "96163",
"ap": "juuza-no-uruna",
"kt": "43011",
"mu": "8b16540",
"mal": "93563",
"raw": "https:\/\/www.ecccomics.com\/comics\/ulna-en-su-torreta-3572.aspx"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "7",
"lastChapter": "38",
"publicationDemographic": "seinen",
"status": "completed",
"year": 2015,
"contentRating": "safe",
"tags": [
{
"id": "0a39b5a1-b235-4886-a747-1d05d216532d",
"type": "tag",
"attributes": {
"name": {
"en": "Award Winning"
},
"description": {},
"group": "format",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
"type": "tag",
"attributes": {
"name": {
"en": "Military"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
"type": "tag",
"attributes": {
"name": {
"en": "Drama"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2019-08-19T16:05:05+00:00",
"updatedAt": "2026-02-07T15:44:09+00:00",
"version": 6,
"availableTranslatedLanguages": [
"en",
"zh"
],
"latestUploadedChapter": "59f8e95c-14f6-4f90-aff9-f99ab7f3d768"
},
"relationships": [
{
"id": "484a6282-e519-49fb-8af0-a811ed0f40f7",
"type": "author"
},
{
"id": "484a6282-e519-49fb-8af0-a811ed0f40f7",
"type": "artist"
},
{
"id": "5865250f-c2fd-4fd2-8c30-0f3e519e2199",
"type": "cover_art",
"attributes": {
"description": "",
"volume": null,
"fileName": "7086a783-19ee-41da-9481-926a169b5691.jpg",
"locale": "ja",
"createdAt": "2021-05-24T17:23:25+00:00",
"updatedAt": "2021-05-24T17:23:25+00:00",
"version": 1
}
}
]
},
{
"id": "7328c8ff-9c64-4b22-b2ca-e092f9b9c62f",
"type": "manga",
"attributes": {
"title": {
"en": "Onward Towards Our Noble Deaths!"
},
"altTitles": [
{
"en": "Let Us All Die Honorably!"
},
{
"fr": "Op\u00e9ration Mort"
},
{
"es": "Operaci\u00f3n Muerte"
},
{
"en": "Operation Death"
},
{
"ja": "\u7dcf\u54e1\u7389\u7815\u305b\u3088!"
},
{
"ja-ro": "Souin Gyokusai Seyo!"
},
{
"de": "Auf in den Heldentod!"
},
{
"en": "Whole Unit Ought to Fight to Death!"
}
],
"description": {
"en": "(from ebookjapan):\n\nNow is the time to think about war. A masterpiece war manga that should be preserved for the future, based on the real experiences of Shigeru Mizuki, a Mangaka who served in the Pacific War. 20 historic chapters. \n\n The Japanese officers decide to commit to using a banzai charge in the face of overwhelming defeat by the onslaught of the U.S. forces. \n\nWhat will be the fate of the 500 survivors?\u3000\n\nBased on the mangaka's own real-life experiences, this masterpiece war memoir manga depicts the horror, senselessness, and tragedy of war. \n\nIncludes a special collection of conception notes discovered after his death. A new and complete edition that resonates with the determination of the soul that went into the work!\n\n[Official English](https://drawnandquarterly.com/books/onward-towards-our-noble-deaths/)"
},
"isLocked": false,
"links": {
"al": "45279",
"ap": "onward-towards-our-noble-deaths",
"kt": "625",
"mu": "ao9p5hg",
"mal": "15279",
"raw": "https:\/\/www.cornelius-boutique.com\/product\/operation-mort"
},
"officialLinks": null,
"originalLanguage": "ja",
"lastVolume": "1",
"lastChapter": "20",
"publicationDemographic": "seinen",
"status": "completed",
"year": 1973,
"contentRating": "safe",
"tags": [
{
"id": "07251805-a27e-4d59-b488-f0bfbec15168",
"type": "tag",
"attributes": {
"name": {
"en": "Thriller"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "33771934-028e-4cb3-8744-691e866a923e",
"type": "tag",
"attributes": {
"name": {
"en": "Historical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "391b0423-d847-456f-aff0-8b0cfc03066b",
"type": "tag",
"attributes": {
"name": {
"en": "Action"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "3b60b75c-a2d7-4860-ab56-05f391bb889c",
"type": "tag",
"attributes": {
"name": {
"en": "Psychological"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "4d32cc48-9f00-4cca-9b5a-a839f0764984",
"type": "tag",
"attributes": {
"name": {
"en": "Comedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "5fff9cde-849c-4d78-aab0-0d52b2ee1d25",
"type": "tag",
"attributes": {
"name": {
"en": "Survival"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "ac72833b-c4e9-4878-b9db-6c8a4a99444a",
"type": "tag",
"attributes": {
"name": {
"en": "Military"
},
"description": {},
"group": "theme",
"version": 1
},
"relationships": []
},
{
"id": "b1e97889-25b4-4258-b28b-cd7f4d28ea9b",
"type": "tag",
"attributes": {
"name": {
"en": "Philosophical"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "b29d6a3d-1569-4e7a-8caf-7557bc92cd5d",
"type": "tag",
"attributes": {
"name": {
"en": "Gore"
},
"description": {},
"group": "content",
"version": 1
},
"relationships": []
},
{
"id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
"type": "tag",
"attributes": {
"name": {
"en": "Drama"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "cdad7e68-1419-41dd-bdce-27753074a640",
"type": "tag",
"attributes": {
"name": {
"en": "Horror"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
},
{
"id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
"type": "tag",
"attributes": {
"name": {
"en": "Tragedy"
},
"description": {},
"group": "genre",
"version": 1
},
"relationships": []
}
],
"state": "published",
"chapterNumbersResetOnNewVolume": false,
"createdAt": "2019-02-28T19:11:17+00:00",
"updatedAt": "2025-12-03T15:01:06+00:00",
"version": 10,
"availableTranslatedLanguages": [
"es-la"
],
"latestUploadedChapter": "daa7fba2-da12-4b5a-b756-fb88bcacdb06"
},
"relationships": [
{
"id": "9a7709d7-c9a6-4afb-bdf9-054aec977140",
"type": "author"
},
{
"id": "9a7709d7-c9a6-4afb-bdf9-054aec977140",
"type": "artist"
},
{
"id": "72b56ff8-4d77-4881-b4b6-a59d487a7b4c",
"type": "cover_art",
"attributes": {
"description": "",
"volume": "1.1",
"fileName": "55720d2c-d6e3-4045-8cfb-9493c068f617.png",
"locale": "ja",
"createdAt": "2022-07-14T21:28:11+00:00",
"updatedAt": "2022-07-14T21:28:11+00:00",
"version": 1
}
},
{
"id": "957a54aa-b37c-4136-9e95-34f47dce188f",
"type": "manga",
"related": "same_franchise"
}
]
}
],
"limit": 100,
"offset": 0,
"total": 20
}

when clicked on index:
header ->
[https://api.mangadex.org/manga/801513ba-a712-498c-8f57-cae55b38cc92/aggregate]
response ->
{
"result": "ok",
"volumes": {
"none": {
"volume": "none",
"count": 4,
"chapters": {
"383": {
"chapter": "383",
"id": "658f732d-9d25-4f5a-84eb-cd3cbdacde14",
"isUnavailable": false,
"others": [
"e7803aa5-bb7d-47ad-b52b-13551bfb18cb",
"308a621d-a2cd-4ca4-a74c-723b0f6aa3b8",
"8ceadc31-e41e-4038-8aef-d002aab344a5"
],
"count": 4
}
}
},
"43": {
"volume": "43",
"count": 74,
"chapters": {
"383": {
"chapter": "383",
"id": "515133cf-bf49-4add-9d68-88f4601d15ce",
"isUnavailable": false,
"others": [],
"count": 1
},
"382": {
"chapter": "382",
"id": "53fb2382-c7ec-47e3-8bbe-857fa5b6101b",
"isUnavailable": false,
"others": [
"76a1f31a-f51d-4be8-8205-c4619e05a09d",
"75545e40-8e57-4d49-813b-a1e211247d18",
"81141fcf-a0bc-49a5-9512-090390e4a331",
"fac8e8e4-da62-48e2-9a4e-5bc5a6335bf1",
"3f6899c2-b17c-4447-b18e-bba2d8316c92",
"5dc17107-dfb6-4bca-97c7-a8d9634afb86",
"83e30f7d-53d2-4068-9e37-ce061e621b30"
],
"count": 8
},
"381": {
"chapter": "381",
"id": "232811f4-7245-4487-a1f4-5e46a98b000a",
"isUnavailable": false,
"others": [
"35f9d705-7cb3-4cd5-a48b-f390a6a28816",
"b9507b33-3330-4293-b6f1-939696e9e0f1",
"b57e03f8-8870-45da-94d6-cd63432662c4",
"a7b66e16-96c4-48ee-a53d-8926cdb35565",
"cd35e6e9-b595-405a-9c9a-ed055c52dc62",
"b7b64a8f-4338-4127-b108-d5e0bac80b88"
],
"count": 7
},
"380": {
"chapter": "380",
"id": "3e1d4d1f-8478-4916-a56e-05be021bf246",
"isUnavailable": false,
"others": [
"34e9592f-bb02-4c59-b51f-09d7dcbf0659",
"d202dd83-f01b-480d-8f5e-48f55addeb04",
"099594d4-a9c2-403d-9ad3-1865da115268",
"3c673c25-3a8d-43b1-a34f-35921f7e251e",
"9ce5decc-0f2f-408a-a580-edfc7eabc3de",
"c8c08a84-0433-4cc2-b09c-501fa05281e4",
"ca4ce3c4-81a7-4e35-a4c6-5544a8ea72ea"
],
"count": 8
},
"379": {
"chapter": "379",
"id": "1d424789-2a6f-4ef8-a529-4d9f572eda3a",
"isUnavailable": false,
"others": [
"136cbee3-0c0f-41ce-90a6-9dedb631a205",
"538df78f-a990-4a4f-a6aa-96030ceaa169",
"76ec0504-1b77-433a-8e29-1d8fddd8aa51",
"a5170650-08a9-4083-96bd-219d3d16194d",
"dc0415c3-ce0e-4afd-b5c1-19f53ad5b014",
"75a65149-ee40-4978-ae8c-38ccf1992bc9",
"737daede-dab5-48da-a510-5ee56e01dc2a",
"798661ff-f1dd-4e86-92c4-96f5a69a08db"
],
"count": 9
},
"378": {
"chapter": "378",
"id": "4a157d8c-69d6-4664-b80a-e6527106c90b",
"isUnavailable": false,
"others": [
"9a534162-3f63-4561-a0db-8266964e98b8",
"4abd416b-15b3-440a-90cb-49f33e93095a",
"47772130-4354-4a0c-a878-53b7d6961a91",
"8bf9c7c2-4566-43df-b8b6-57fba74416ec",
"b92c3ad7-5bec-4b56-bb1a-47d8391ab4d0",
"ea4d2460-1b69-46c4-9ed8-942ec293f28d",
"e0ba0a2e-9938-40c9-a28c-bb74ec9d8d63",
"f94571f1-8aa4-4fbd-a066-c3779389b991"
],
"count": 9
},
"377": {
"chapter": "377",
"id": "23153025-86d5-4b2d-8610-d41d91fe53f7",
"isUnavailable": false,
"others": [
"82dbb5b1-7abb-4d2d-beb7-1015905b3578",
"713d6a0b-eb7d-4b64-aedc-1185bdd1d087",
"67add822-eb08-4bfc-ab02-e7ee31d52a35",
"a57cc862-061d-49e2-b975-700808394aa5",
"00805337-b39a-4646-abfc-2b9eda7a33e3",
"5a4c2f14-43f7-43a3-878f-b2c6d8cff97a",
"a9de9bd2-d726-488d-ad9f-cfb3ed607204",
"cab80726-2af1-4f3b-8806-99d9c40b5850",
"af8d572d-7dbf-4fa5-ae26-955a613b6ca3"
],
"count": 10
},
"376": {
"chapter": "376",
"id": "c894e202-58f0-4ed0-b40b-46e46b3d2bb7",
"isUnavailable": false,
"others": [
"088a4a5b-2619-40b7-b1f9-9fa23a3b093b",
"2f2ccf30-4175-420a-b5aa-117f5cd9430b",
"46235d19-5709-4222-b2b7-a6dc7cfdec76",
"8a19a805-94e1-456f-9ec2-d26b8691712e",
"d16c1bb0-e265-4f19-9269-06b65682a7da",
"cd7dbda5-bd1d-4426-946b-f19cbfd0c09e"
],
"count": 7
},
"375": {
"chapter": "375",
"id": "33b69715-30d5-442e-b00b-3c0d6ce14736",
"isUnavailable": false,
"others": [
"12817d8e-f2d4-4fae-a1f9-2729e0ea9d4d",
"e53ac81e-f9c5-4d29-8feb-c0253f760f40",
"43e03af7-bcb6-42a5-a943-23fff07537a2",
"6aa65c07-d376-449e-881a-6fb55d85ad6e",
"5e2efc9d-5308-4ff1-95ab-ca001c071228",
"d55c2cf2-3947-4176-86fe-6fa254ec8477"
],
"count": 7
},
"374": {
"chapter": "374",
"id": "7b27a9f1-2131-4372-aa64-bba1c15aa7c4",
"isUnavailable": false,
"others": [
"838e7e74-75dc-48cd-b9e1-7fc6535ef62d",
"6eff8492-3e82-4962-9866-dd668b4766ac",
"9f9af7d4-b2ea-482c-87fb-4e729684c69e",
"dd058c09-ece6-4b84-b267-f232a8bad8a8",
"e57be067-eb9c-4fec-b12e-8163291074f2",
"ebfbf925-2c9b-4a66-895a-745fb25a338f",
"34d06cff-080d-4dd7-9b52-080fcdf5fea9"
],
"count": 8
}
}
},
"42": {
"volume": "42",
"count": 90,
"chapters": {
"373": {
"chapter": "373",
"id": "6f7f8462-5667-4629-89f5-b9e633a4968f",
"isUnavailable": false,
"others": [
"495791f0-2b8c-4522-a484-109afe4d8c1e",
"960a0883-11e2-4c51-9ae2-d44e475aee5b",
"f38c3bff-22ff-4dcd-9042-5b1d1f6bef0e",
"0d20e6e2-f7a3-45a8-9272-d0f204e518b8",
"c5584d79-0933-439b-9b1d-17e4eaa0c097",
"7cf56794-e4bf-4a53-a385-e1d2d38f5687",
"e74bd7c9-86f3-4c08-9274-608218099aab"
],
"count": 8
},
"372": {
"chapter": "372",
"id": "749b02f0-54b5-40ee-a1ad-12d293c73a83",
"isUnavailable": false,
"others": [
"34dd18b8-6788-4fb8-b222-30eac9852ef7",
"3fe1d9a9-c09d-42e6-ab77-38ed538bf238",
"b7e6c46c-55f1-4fee-83e0-8a2cfecbbf5f",
"f570272d-2528-4ae5-a4bd-f7a672a58326",
"4fc3dd40-87d6-46f0-86ac-cb7e1162dcd2",
"b7cf8628-dfd0-48b4-86e1-334a3a86bb8a",
"e35c9468-5b7d-4d0f-8b68-d16a8e8baeee",
"ddd36c60-e3fa-4cc1-82ca-859c7a71eb61",
"f6746db1-459d-43ce-a0e9-19e947ed8fb1"
],
"count": 10
},
"371": {
"chapter": "371",
"id": "0903ea15-1569-453b-8d9a-81db67b5f0bb",
"isUnavailable": false,
"others": [
"46b88eda-73d4-4698-ba05-50d47e86b9d4",
"7dbbd042-b115-4587-a336-530d94ddb2f1",
"0f42a77f-b029-4c45-8370-4b78976c5ec1",
"3f2fa66c-8b4c-4e76-8734-1f1fb269c34c",
"a08a4068-0c90-4c60-89f1-0e1a173620c4",
"c9e27928-258a-4a13-841b-56997de30d50",
"d8c33c67-c3e3-4b05-8113-753d345a1663",
"ce3d1041-9a2e-4661-95b7-4ea442d2a02b"
],
"count": 9
},
"370": {
"chapter": "370",
"id": "34ba393a-5edb-4803-b0ab-4602038174d4",
"isUnavailable": false,
"others": [
"861f2bb4-9002-4009-bc99-e3dbb9c155cf",
"b71d3f09-0200-48b4-8531-391f93cbabb4",
"3ac78412-a0d8-47db-838f-af95d8f92e08",
"83551d86-0389-4a50-a2e8-a7f9019009ae",
"e41e2969-b048-43d7-bf39-8f8560de264f",
"3d0f0cd2-eb4b-4ebe-b120-262d8f7b7573",
"1d05fffd-ab88-4d90-bb80-f46df78b24d5",
"9bdf19d6-20f2-4e88-b04f-7c8bfea83162"
],
"count": 9
},
"369": {
"chapter": "369",
"id": "1de98fa9-a8ec-422d-8827-3160637233d9",
"isUnavailable": false,
"others": [
"552fe465-b9e6-43b9-b454-741fd87589be",
"b4573c7c-037a-4193-93a5-da2802c94f44",
"32e3fbce-f6b4-489f-9ed5-3db424c8ae29",
"19c6bc6d-c526-4efa-842d-4d1046728adf",
"7acba945-c207-4119-8fcf-b976d332d950",
"b9c93c1f-c30c-4974-9951-3adc48d19bb9",
"c2f57ec1-dd97-42c8-8506-fc472c23347e",
"203602dd-b474-43c4-87cb-03da5f139277",
"b358cd8a-cbf2-4bed-bcdd-124ee98f0b3a",
"da346093-bc90-4f17-a62a-4ffce78513a4"
],
"count": 11
},
"368": {
"chapter": "368",
"id": "06b61a51-d001-46f6-b33c-b179c2caac4e",
"isUnavailable": false,
"others": [
"7185aedd-bb50-4687-8c96-a26eb9f3d0e7",
"649bf443-b2a1-49be-9d30-b8a503d97c09",
"aa01d122-a1b0-4a89-82c8-d6037fbdfb72",
"9b1ce57c-08b5-4d61-ae73-1168bc3518cd",
"97b4ffba-a8ff-468d-9693-d1544b97d448",
"d65a72f6-b4d2-445e-8087-0e77324fbf7a",
"41072f7b-6c7c-4fad-9dd1-13d7e4961052",
"2a8e07e0-8a30-4e2b-bd05-c8343842d7ff",
"65bba14e-fedb-4e24-afee-167a0c0a1e8d",
"80e7686a-71c6-47a1-93f0-42b1ea04707e"
],
"count": 11
},
"367": {
"chapter": "367",
"id": "7e31f21d-c7d4-430e-8de9-b67644616f6f",
"isUnavailable": false,
"others": [
"79998583-a06b-4aab-897d-33b63ead8db2",
"cc3eb14a-ae0d-4cc4-81c0-c5b5df25572f",
"2c61a6e5-2c5f-464e-aaa5-193f6715501a",
"495d456b-7123-4a8a-9cdb-a5c28b994d8b",
"82002bcf-b390-4c21-bed7-4f618158b011",
"ed3cb153-02f3-4891-af04-91945cce850d",
"f04c2e11-9dd0-4e1c-8f4f-6dcefc1a152b",
"2becac5c-9737-4534-a494-0bcd84918216",
"a760a7d4-da69-4ce6-9419-6a190c7548d6"
],
"count": 10
},
"366": {
"chapter": "366",
"id": "b69180c9-3e42-405b-a0e3-858d560c331a",
"isUnavailable": false,
"others": [
"c3e91dc1-c86f-40cd-9049-46f124095644",
"d477c28c-9367-4914-a107-2f318fc7757b",
"688a4790-7ff9-49e3-aa95-af419bc1fbf1",
"b70eb123-02e4-4932-a56b-8429abc84236",
"b73335e1-6590-4d3e-920c-554fdef1041f",
"9e23dcb1-7207-49a3-b927-8e257322b110",
"2223511c-5ec4-4b84-ad63-ee5dcb039f05",
"1ba2f039-1220-443f-ae16-44798194d837",
"c899bdc4-cca0-467f-9963-16b2615dc08a",
"eb54af7a-923f-4a9a-863c-63732f7692f8"
],
"count": 11
},
"365": {
"chapter": "365",
"id": "59bb54f6-3fe3-4ee7-b9b1-8c745759b057",
"isUnavailable": false,
"others": [
"a1dce8b1-8abd-44d0-b55e-78a1176f8e6c",
"2960f341-dc5d-422c-b241-2e8f5d5bdd62",
"105a74a5-17ec-4ed4-bb91-ad86a9165811",
"d188a667-7356-4e20-90b1-95cffa05735f",
"90c6da60-00b9-4ab3-8452-c4d9c832e2e7",
"9462081e-3074-4540-b2d7-7fdc69d98455",
"f64de995-36bd-4668-9202-78896c61b9a9",
"d12bc109-33a6-46cc-b4dd-d9b6c30deb11",
"c429f05e-234b-4da6-a1c3-7f666a64d46a",
"e570a6ea-7d19-4667-967c-20afcbed954c"
],
"count": 11
}
}
},
"41": {
"volume": "41",
"count": 76,
"chapters": {
"364": {
"chapter": "364",
"id": "3b1977bc-bcda-4e69-bc02-f3f1a0cc7b0e",
"isUnavailable": false,
"others": [
"3d1300b5-f9f1-4fda-9cb7-b24bf003360f",
"954b6134-cd6f-4212-8381-ecb2ff0505b3",
"040d13db-b38b-4f9f-acc4-bb74437e435e",
"662a4e07-2029-4f83-861a-8fb4e09ebb43",
"16de1caa-c658-4fef-9337-d85b332ca199",
"4f3c9741-a2e3-4f29-9dc8-bc359f4f70aa",
"acaae845-5adf-4827-a335-41b6264767d1",
"e7cb3ecd-cf29-4f91-8c89-fd7b4b117c3e",
"fe7b1968-b0ae-4f26-99d2-144f3e4cf9ac"
],
"count": 10
},
"363": {
"chapter": "363",
"id": "0ddf1c7c-519b-4dcd-9487-febd76c960e9",
"isUnavailable": false,
"others": [
"4d3e68a6-950c-49ef-bfe3-94344ec348e7",
"bbf4ab6e-bbd9-4f5f-975a-9d2892d36ebb",
"98e23fdd-c4e7-4f8b-be8b-625bad914faf",
"4ca52f70-c1d3-495d-9c34-aa5668cbcae8",
"7c9e8ea7-d676-4136-85db-2c7c742623d8",
"5620652c-8698-4e13-8acb-20eef4e59f39",
"84252829-6279-4ba9-99bb-70cebee1386a",
"b39d967f-29f9-4c7d-b0e1-3f751d673d7f"
],
"count": 9
},
"362": {
"chapter": "362",
"id": "1dbda0f2-157f-4308-889e-863ad79bb44c",
"isUnavailable": false,
"others": [
"2a2cb9fe-23c3-4f1c-b3af-08955ca1bd6a",
"bdfd1a9b-f471-4a76-a65f-4441931d17e2",
"9ca4d3c9-0143-4521-a107-e72fca9bf0ba",
"a66f1602-f7f4-4121-8c75-bd430816a2de",
"dae1eca6-22ab-4b02-863a-359977db340d",
"361f763c-14ea-4a95-a998-888073fd3c06",
"9835741a-75bb-4590-ae74-d4ddb191fac5",
"796cc9fd-ae4e-48b9-9272-c59203cdc3de",
"9159de2c-00f2-4b3e-8376-b7b5b7c467d6",
"d8ddc2d7-005c-4a9b-aedf-df4746fffe62"
],
"count": 11
},
"361": {
"chapter": "361",
"id": "00f15ed7-7a7b-4818-9c87-c5dcac2124d3",
"isUnavailable": false,
"others": [
"4e3d5526-be49-4ba4-aea4-7a29b79aecb4",
"b075febf-2861-43e0-8006-4d7bc6376f86",
"9b577300-55b8-4b76-8fc4-08f8f610854f",
"d9a675e1-cbdf-40a3-9294-2f5cd3c28d69",
"f047df33-b5b3-4017-8df4-3ebc066ec2a9",
"81c2a72c-2579-4721-9ca7-4ff8093cbd9f",
"b6359242-2681-4429-9ffc-fc071d76154b",
"34075757-2a2c-4092-9219-c9b05fa40573",
"750c0871-870a-4f4c-b402-53b9fd66dde5",
"b8e4f7f7-83d0-4b3c-b84d-84cc5f285e17",
"e1d9dc09-2261-489f-9d47-cf7a3a539d93"
],
"count": 12
},
"360": {
"chapter": "360",
"id": "10614e1f-4bd2-47ba-9603-13dced2bff23",
"isUnavailable": false,
"others": [
"0055ebf2-0da4-4195-8260-d234f407ddca",
"15c47a1b-fe7d-41cc-9de2-a64f4920052c",
"7350d3ae-e38a-4df6-8631-c46ea2250141",
"702e0fb6-48a8-4426-8be7-10496de82e37",
"5db50777-ae92-46ff-b2cb-a9eac67bf7a7",
"ede7f90b-73f9-425f-9f92-9180cf4d227e",
"bf0df76c-7279-419b-b626-9e364de3c1c9",
"4fd33682-7d85-46ba-ad69-b76be4ac78a5",
"1f1657ba-fc50-4f75-a5bd-6131b116a367",
"ae61d40f-be2c-415c-8bf6-638658fafc84"
],
"count": 11
},
"359": {
"chapter": "359",
"id": "05b3a7be-991f-4645-bdf6-acc8c6d1bbf6",
"isUnavailable": false,
"others": [
"d06e2d67-3e06-4add-8c44-4b6001d2eaf1",
"d0c34c6a-9a5d-4783-b5a3-dc3d11799de7",
"5fc4a6e0-fbbe-46f9-b50f-e68472198687",
"bbd52bc9-0e55-4667-9134-ca30fecc71cc",
"bbff13ee-75e6-45f6-a1cc-dca398543734",
"34c34163-80a8-4e82-af25-f7327416f196",
"418e932d-850f-4863-8148-3ce5dfda52b6",
"45fba3d4-154e-4f31-9393-26757b7d164f",
"94670744-7e42-4f51-9369-02b4495b2ac6",
"dbcfdd6f-0c0d-4ccc-87e8-98c119e2f28a"
],
"count": 11
},
"358": {
"chapter": "358",
"id": "1ae4b337-a987-4f73-82eb-e2dc082d279f",
"isUnavailable": false,
"others": [
"0ad4af51-ffdf-4294-a030-22f2ed46913f",
"c2629697-9863-4674-963c-c1a765d2fd2c",
"f37a0f62-0afc-4d7c-9a1c-308c6de285d0",
"1f914c7c-7891-4b84-9461-8645744b7ba1",
"253c1866-f974-4f01-8eb1-233b9fb83bef",
"89b03b7c-00b9-449b-918f-32007ccbde70",
"778f1e7f-d1d1-464d-8593-ad6e1461cbf1",
"3a1d99ab-f624-41e1-bdd9-e786024e2698",
"88526618-1d7f-437a-b626-4722203fe345",
"71e2ba9e-4bc4-4bf4-a5a9-d0b83aa96c9e",
"dde76c71-9146-4992-82fe-0539ffec3bb9"
],
"count": 12
}
}
},
"40": {
"volume": "40",
"count": 94,
"chapters": {
"357": {
"chapter": "357",
"id": "825bdaf2-e7fc-4342-a852-fb2bcf14e6c6",
"isUnavailable": false,
"others": [
"4cae18bd-eb2b-47a5-a857-7c634488cd48",
"591924dd-8fd3-4ee6-b779-de78e2196fd3",
"3cca2e11-4b64-4815-b91c-9086097fa524",
"c1c35de4-2b31-4939-bc03-afc63c9eadd1",
"e2aba255-0822-4756-8e79-6b772cdfe483",
"2733abe8-7e63-4c78-a320-fc538b85a750",
"8796e317-507d-4eae-8e95-897e7a87ed7f",
"64410237-9063-43d1-bb36-516bfa8e456f",
"78ac4f95-ce77-4ff1-b803-28a4fb4310ae",
"8faa48d1-6415-425c-a9ec-d85d938b3c41",
"cb35935f-c8e3-40f1-b179-6e8803fc3252"
],
"count": 12
},
"356.2": {
"chapter": "356.2",
"id": "384f51fd-17a1-4a96-9173-fab2c665398c",
"isUnavailable": false,
"others": [
"10a3c55f-29c4-416a-8e12-0fbc90f0c5e0",
"6da11e38-0b76-4381-a7c0-eccbc1edfef8",
"5a519600-3dfb-4efb-b824-c01260502e45",
"68caee3a-a603-4f96-afa3-11ef9464d890",
"eb6597cc-40e6-4e32-a8c1-760e5b9f761d",
"04de8a4e-5206-4138-ac86-0a01b23dc710",
"7887acb3-42d6-4057-b6fc-ffe2590461c2",
"e8e14f25-3c4a-4d4e-8329-297e197ad3a8"
],
"count": 9
},
"356.1": {
"chapter": "356.1",
"id": "9ed16ee3-ac06-4a79-84fa-d943d8118e60",
"isUnavailable": false,
"others": [
"93680817-4505-4b82-9ade-1587844fae15",
"8c4dc56d-53bf-4f3b-9569-028f092d8335",
"288f4927-e170-41f4-b1fc-f48e07f7fcf7",
"cbb43f37-2f16-46c5-9159-e1252cfc5158"
],
"count": 5
},
"356": {
"chapter": "356",
"id": "10ff667a-7c89-4c52-8f61-e65be4aa04a7",
"isUnavailable": false,
"others": [
"4d9a59fa-9ddc-4669-8f35-306594147af3",
"18c29182-949d-4b65-a1fb-97839bc657ab",
"bc087855-2352-4d6e-990a-ae65878f6d5e",
"fea2aad9-8362-4d06-b582-09b3f357e206",
"18a0a783-5a6d-4b09-a66f-f9f746541302",
"8aebe49d-3305-4e30-bb12-972629f0239b",
"a117adb7-6da6-414b-ab2b-9d0177d43cd2"
],
"count": 8
},
"355": {
"chapter": "355",
"id": "0d28087c-bfd9-421f-8c70-914ccb2c76e9",
"isUnavailable": false,
"others": [
"2448b440-3ade-4811-a8e4-0a3f53ac259b",
"e65dbb94-be3f-43fa-8c27-6e34d188fd08",
"2d470559-5909-4591-88c7-d9ddabf8e974",
"308df4cf-e824-43b6-b027-711dc60fcb95",
"c5fa6c4d-441d-49de-b5c9-c777d1316005",
"ff128949-d129-4f84-8d60-3f2e728ff15f",
"d9cfc38d-cdd9-4ebc-b758-877ba6d41ac2",
"30ea46f1-8f50-48c4-9c56-5d22757ce751",
"94b58ecd-5e46-466e-94f8-7407234b607a",
"c79e2cd8-3f80-4dd1-9301-5563088fcf6c",
"fb344f1f-0968-471d-8f1d-155b1d0ba71e",
"ddcc15c7-4cbe-4f79-98be-726eb26df60d"
],
"count": 13
},
"354": {
"chapter": "354",
"id": "11ddd514-5ea2-49fe-bc96-86fcfc6844e4",
"isUnavailable": false,
"others": [
"64fb04f1-c20c-4902-b533-709f1003197d",
"50b90709-51f6-4cb8-b1f1-650bf6c8d8f1",
"352c69f7-d3c9-404e-9a06-1d6dc519ca2b",
"1dfe31ce-7a1c-4cf4-8716-61d8aa5d437c",
"604bff62-ff8f-4f4e-92b3-338f2b89ba38",
"9226a815-dc1d-4675-8c0f-b5358e533efb",
"fa155b1c-c503-4eb4-8f7c-2f47785cb56e",
"dce7d6fc-baca-423a-ad50-4116867d2d51",
"3c28d750-453d-4aea-bc4c-1c54643174ea",
"84e38bae-41c8-4174-9782-2511a30c7ff0",
"d398479a-325e-4b67-82fe-7a5f75eefbb4",
"c8ce7885-6c51-40ac-898e-1d58de7ddc91"
],
"count": 13
},
"353": {
"chapter": "353",
"id": "31abf13c-c7b9-4a7e-a7f3-80d54ee2972a",
"isUnavailable": false,
"others": [
"8a5c5293-291b-43f3-9aab-236b217abb5e",
"a8144e05-9ff8-4f95-8438-0e1b9d75f497",
"1ca57dee-3cde-4a6e-9e7d-86cb16055057",
"6202f628-366c-4d4c-94a2-bc7e1e4818b2",
"9cdc0271-7adb-45cf-8c8f-95394093487f",
"4383180d-0921-466e-aff8-106cfd5a2055",
"15647aa6-0ad3-4490-a93a-78bab0173370",
"1d7b6996-6922-4eb2-a2fa-e1616c8e16ee",
"c9a957d6-de2f-440f-9917-da6d4f1bd942",
"c1e46d9b-e70b-47b8-bb67-8a3b2d979d77"
],
"count": 11
},
"352": {
"chapter": "352",
"id": "fafd59c0-6bbf-4f52-b903-08152928cdbc",
"isUnavailable": false,
"others": [
"d2622fbb-38e8-4f36-83fc-bafb54ebd27c",
"3539e790-d706-40d1-8ec9-a5fb75a6894e",
"1b62c1f6-f016-4a0f-90e4-a48a979c09f4",
"2d0a5ecc-4f47-43c3-b01b-01acd322cc78",
"4c64ee30-4e3a-487d-bca0-0d79a13eef9d",
"b5846ea4-f663-4683-a238-7fe400638574",
"c2c3c0ec-fe5b-45b0-a186-d6eb78a281da",
"c160534d-f97d-4e65-8db2-b3d394d55982",
"be881747-536a-4c14-a3f7-f7033bc19936",
"9e85018f-704b-4593-95c3-d5e778cb0cec"
],
"count": 11
},
"351": {
"chapter": "351",
"id": "0e99fef9-704c-4f85-8ba4-384e8dab0b4e",
"isUnavailable": false,
"others": [
"c5f712ad-e32d-4211-9081-584d3394898a",
"d76c8846-0a8d-404b-bd0e-b6a89eda97c5",
"83bff699-f3fd-4c33-9e55-3deb2da28a33",
"7958e60a-b3e6-4bf7-98df-aa72e5a9cc33",
"6ef59ca0-73fd-43fd-9cae-3928e0781c49",
"a1d6b46d-6cfd-402b-a1b6-abb2926b7a91",
"44798102-255a-4bb6-96db-d252a0ae5955",
"3b4441ec-cec7-41b5-90d0-68b7e9fc78da",
"55101eb1-b3d4-4093-8830-597e38985616",
"7ca4f5d2-7667-4afa-9535-61d7dec46097",
"cddbee09-777c-4c44-9e58-ed378ee0e034"
],
"count": 12
}
}
},
"39": {
"volume": "39",
"count": 87,
"chapters": {
"350": {
"chapter": "350",
"id": "38d2e671-feea-4d39-a298-7957645793dc",
"isUnavailable": false,
"others": [
"5eaeb7e2-d043-4fdd-89fd-f99a130dcba6",
"2b1f116d-a978-4229-b624-fb97b8537848",
"396bd774-69ce-4fd2-a223-bcd80f118abe",
"0d4ce1c0-9fa1-4b2c-b9c4-2dba3164e99f",
"4fe3c50e-8430-4dcc-b426-a3c237662dc4",
"67e4adab-1863-4211-b5b0-d654cbc96c4f",
"6e4c0b96-665a-4e23-b91c-7eed08eae433",
"91a05923-8b57-41e6-8c11-b76bc83f6f4b",
"f55c8965-db3d-4f4b-b180-0b13207ab375"
],
"count": 10
},
"349": {
"chapter": "349",
"id": "088a6c66-1628-45ad-be5f-7af4680c9311",
"isUnavailable": false,
"others": [
"d1d0a0ce-d310-462d-97fc-54978455420c",
"e8d56fe9-421e-4f8a-98b6-ba00b1901e84",
"2b06faf7-a4b8-4cef-816f-e03703121166",
"0bf120eb-dddc-4447-a12b-44f2da6823c2",
"0c214d06-8002-4597-a878-baceea660433",
"bcde25b5-21d3-4877-88bc-8238774f0834",
"fce64e2b-7a62-45e1-bb22-2dd345d076d3",
"94effb4d-5644-4862-8b40-f83be432f72f",
"d662d4e6-53b1-4c09-848f-97eed2d87e1f",
"edd35f62-e3df-4a6f-84fa-4cb6f989ce49"
],
"count": 11
},
"348": {
"chapter": "348",
"id": "0e2d81df-7094-4952-82f0-6c1a13094c63",
"isUnavailable": false,
"others": [
"7e233592-a221-49f1-8119-cf8b20115daf",
"4d6f377b-7637-4e54-aa1f-67dec5690271",
"3ea35b89-4879-4add-9967-b50a18e88886",
"b60cf5cb-122e-4f97-8e62-c19f5b1e88a6",
"e6720459-ec6c-4925-8596-413d14bb4f68",
"072f7374-8e11-450a-870f-38d3dc1a1cd2",
"ad4ad13a-7432-4e59-bd14-588d7b949a3e",
"d37e277e-548a-4d40-8c5f-eb16ae68beee",
"044ae5f0-195f-4361-8fe6-a3f0104e6bce",
"9ad1f1c0-b681-40c8-93ff-8b94531dd4d1"
],
"count": 11
},
"347": {
"chapter": "347",
"id": "2a384579-e651-4327-95fd-c68e48d66475",
"isUnavailable": false,
"others": [
"2904151a-691a-4978-9c45-272939db8f83",
"16b8e363-8274-4189-bfd3-d02872d44115",
"72568a69-9d38-4cd6-9973-7d61f2df8207",
"b0929e31-c5bd-4c2c-825b-22ee417b1afd",
"04964fe5-5bd4-4ceb-a53a-7b8291f87180",
"53985d19-b14e-4bc2-a7e6-fb2d5d33bfa9",
"06efd495-0846-464b-afb2-8fcccf5c7a4b",
"7ccda123-9d04-4f98-ac1a-07bdccb9792c",
"d151bd44-6485-481a-86a0-471b298af868",
"ec705fc4-6d68-418b-ac13-babb30f01e22"
],
"count": 11
},
"346": {
"chapter": "346",
"id": "094aa7e9-467c-428a-a298-c3448bbbaaa9",
"isUnavailable": false,
"others": [
"592e8bb8-2f14-4106-af4d-e785c09f4ed6",
"aa1a011c-f7c2-4e85-83fd-b707219f27be",
"cb65bc09-592b-4d27-9f31-00decfcc4f1c",
"a45fe091-7444-42c5-bff1-e52c185df8b1",
"a97e15b3-e7d1-4fcb-8f12-cafd90a5f1af",
"7283266a-1a20-4cc2-aa64-7e9c995f64d3",
"80cc57f2-eb64-456b-8684-8848481472ad",
"acbbdbea-669c-4ea6-bc09-f5f3b4e148ce",
"bc3ac0b7-0fe6-4381-85cc-f834303c7b78",
"bd108d23-def3-4a00-b027-362390fbf6b2"
],
"count": 11
},
"345": {
"chapter": "345",
"id": "777e1a57-6841-4965-a2a4-7085b28d596f",
"isUnavailable": false,
"others": [
"9f0dce73-1dfd-46af-81fd-4e32435317fc",
"347c9901-3ab3-4dc2-aba8-8cd4b9120712",
"0f847a31-50d9-4fd9-8b97-c2916745aba8",
"176d4349-d9ab-4d01-8fe1-43f958bed827",
"755b2979-4645-4fa1-9134-bc6e72fa1ea2",
"bf9e1d82-9d8a-4155-beb0-3801ba9c42bf",
"8e4acb86-dc43-400b-b756-6a0eef5215c3",
"e48d31dc-4d1b-430a-af8f-5159cd9c5f10",
"da667fcf-18d0-47cc-8a1a-1c5cf09b8b3f",
"ff628cca-e30a-4f74-9668-7a61fc039e0b"
],
"count": 11
},
"344": {
"chapter": "344",
"id": "20f0844f-ce77-4f8f-bcd7-fe5802076d18",
"isUnavailable": false,
"others": [
"4895d84f-c8f0-4ccd-9f5c-dcbd3c0c8dd3",
"88c34a9d-7641-4b24-b81c-faaf4d51506c",
"5574ade0-4815-4f85-9145-64fe75096d4c",
"95da4f9a-3cfe-481a-b49e-98b2f91937a8",
"bfbd9441-cf6f-4df4-a452-586695e001d4",
"0189d996-07c0-40ba-b90c-d9a6bbde36e5",
"60acbdef-38ae-417e-a347-da1fe3474bda",
"686cebee-a60b-4ef5-9212-5e8eaa4931bd",
"90960e6e-704f-4090-863c-31ee98b8fca9",
"c85fcd85-885f-4423-8d4a-38d198384ab2"
],
"count": 11
},
"343": {
"chapter": "343",
"id": "0db55460-6911-4ae4-8a66-7e62c5090637",
"isUnavailable": false,
"others": [
"78e5c4d7-cf81-4f82-9c09-d56f666ca14f",
"a9ed833a-18cf-4230-a31c-8cd7d278783c",
"8fe83a59-f5d2-44f2-9640-3fdef408038e",
"82306a06-e869-4372-bd00-bb2c5b23161c",
"67c54808-33a4-4551-b87f-844547d46cab",
"c7e6f095-cc31-4793-839f-f6c3a9ac8299",
"15d09026-fa48-4f82-9f27-e8438edb593a",
"15e10e6f-5f7b-40f6-8888-2e4a2cc58c59",
"cf9ab974-323f-4568-9ae5-a004e52d94bd",
"a1d67b05-9585-4f62-ba65-491de79a5fbd"
],
"count": 11
}
}
},
"38": {
"volume": "38",
"count": 90,
"chapters": {
"342": {
"chapter": "342",
"id": "2f49bffa-4d34-4316-93eb-907f7f63d777",
"isUnavailable": false,
"others": [
"67853ccc-1774-4219-83af-ea1c1cdb14eb",
"59e976e1-d138-44f4-bd5b-5647a06a11d0",
"ad90cf19-78ef-4189-857c-bf72cf78fdb2",
"913409da-8aff-4164-9782-ed572952b175",
"909d7ec9-fd06-49da-b9c9-d638d89fcf62",
"30113b90-2cc2-465d-bf33-09e8558c8d5c",
"72e54eb8-8fa1-4fc2-9a83-502f0953c0a8",
"901ea408-3d72-4918-a625-36ae3dcf5fcf",
"28c01680-df31-4a3c-b95d-c5fcb2207220",
"b8fb88ef-98e2-48d2-bbda-196630957739"
],
"count": 11
},
"341": {
"chapter": "341",
"id": "3902ebde-7cc8-4fd9-9368-df19acc4ce5e",
"isUnavailable": false,
"others": [
"ae30a4d5-983c-4627-98c4-9707ffd23db2",
"ee0d8baf-2fa4-48fb-9a97-051499a99988",
"f32a05eb-278b-4247-8745-bbf3c34af24c",
"09e2df8c-dbb8-4d8e-9357-8003b2a81700",
"34dafaa9-c05c-4cdd-89fd-4164db15c909",
"7f0d59e8-9ee9-49a9-b721-c824d3f1c5c2",
"c3cf1206-60da-43f2-ac3e-726265c1fb90",
"b73c805e-a6ae-4ddb-91eb-578ef417bbef",
"dbb52404-e4fe-4930-be5f-fabc002f0de4",
"c8f91a93-c1f1-48ee-ae45-57a56b8468e6"
],
"count": 11
},
"340": {
"chapter": "340",
"id": "215d6f2f-f3e0-49eb-b80a-74af830c7d6a",
"isUnavailable": false,
"others": [
"37bc4ed5-8038-4b7d-bc33-991509c8a16f",
"3915a492-2f0b-464a-803f-d5d42bc8fff9",
"64e80f5a-9c0e-46ec-8a72-e49ac9da4790",
"f2e66ae0-accf-424e-a282-d8737ae6edd8",
"16d38308-e08d-4737-8ec3-1b923ac55a92",
"63adf2b8-4add-4f7e-b040-1352dac85341",
"43d46f30-ede5-4f05-8c33-1c6388fb2b29",
"b2a9e10e-d0ad-4b28-b6e6-2a616e2f1446",
"923abbec-01f9-4a57-b38e-835591543484",
"eb061f14-29b0-42f5-bf45-3172ee59854f"
],
"count": 11
},
"339": {
"chapter": "339",
"id": "189f2b4a-6bc0-487f-ac56-05d44dff7c13",
"isUnavailable": false,
"others": [
"5af4fe58-56e6-4319-9200-97724cec61db",
"ffa60cd7-ddc3-4c1d-a411-a367bb2b1923",
"20727a86-b38f-4fb4-ae0e-a8556e4a3cef",
"5c7e368c-07c4-4ea8-b7d4-be5143384d0e",
"0ee69c79-237d-4b47-93db-9462ba37f439",
"294e2c43-293a-4e00-a16c-12ad11f6ea22",
"85f6e41d-5995-4faf-bc5e-576bfacd4cbf",
"8ac1a10f-44b4-4d0e-a869-7e09744374fd",
"b17c2273-ac49-47ae-96a5-aa473cb62e97",
"acf812f1-6660-4f37-b687-cbb3e6f326fa"
],
"count": 11
},
"338": {
"chapter": "338",
"id": "3dd3de7a-be7a-446f-b1f1-21008e0e0d30",
"isUnavailable": false,
"others": [
"2732203d-7f89-4f92-ba82-76d6f3ccd2c8",
"a6fb8601-cd1a-4218-b8fc-5ec0d81d394f",
"8ef59ec9-ee72-4bbd-a107-8eabc261188d",
"2f1b93d3-2309-4a7c-ad4f-177df55793fa",
"0e806c45-5fae-4fea-aade-8d7daa4fddd7",
"03462ebd-7b41-4129-9363-bc58bfba2e2c",
"5c78b5c9-e0c9-4a5e-80c5-e8b0d7ac47b3",
"68a8ac86-491f-431c-8bf5-9136b903ad34",
"c96b61c0-3ae2-49fe-bb9c-0e8e01882b24"
],
"count": 10
},
"337": {
"chapter": "337",
"id": "2db495a0-8301-404c-a884-7889e0bef98f",
"isUnavailable": false,
"others": [
"131b1359-4ff8-492b-b3cc-e4fb62555675",
"7322bfd7-efb5-40d3-92a6-60330d6fa805",
"3aab5907-98f2-4fa2-bb4b-2089f5a53662",
"424ee20f-329b-4a7f-b044-548284cfb8e8",
"7008a811-d3e4-4410-a112-4a1f7527d1ed",
"593b6d83-d58b-4f0c-acdf-4e7e41ea1cd7",
"5899904b-4eaa-42ab-8a2f-454408554f81",
"d5481218-ce24-4755-9422-9eeea958be1d"
],
"count": 9
},
"336": {
"chapter": "336",
"id": "029a7484-441f-4fba-9ecf-90cfd0a8f5c6",
"isUnavailable": false,
"others": [
"046e5213-ab1e-474b-96bb-bd07bd17890d",
"c3e3bb93-74e9-467d-ac87-f8d4b172c7dc",
"d059899f-b10f-4841-9c2b-27266bd15a00",
"354e6c6f-c5fa-4e82-a95d-502065c891be",
"35ea011f-a3d0-450e-bb8f-17f17a47f5f2",
"f4e4b223-445c-403b-9c13-631cd2ce2903",
"3cf5eb64-b9cd-40a4-b065-d8b38492bf2e",
"7522d384-4063-4283-be0f-6a01504d2edd"
],
"count": 9
},
"335": {
"chapter": "335",
"id": "0b6d56c8-9742-442e-a011-b8327bddbac2",
"isUnavailable": false,
"others": [
"086bdd13-c0c8-4f59-9544-e92fa6c48cd5",
"7384f912-aa3e-45a0-afd3-212ce3fdabed",
"e7469d45-1361-495a-935d-79e16c15a896",
"fc2be3a0-7d1f-4e40-b608-b99cb48848ac",
"2b4c00eb-f64e-481f-94a1-c27a09a26191",
"187228b8-07d1-420d-a06e-2a28c71cb0a4",
"c94a2e80-0d95-4fb5-adeb-368a74ca4cc1",
"ee4d915a-1d73-4603-bb8f-040ccada21a5"
],
"count": 9
},
"334": {
"chapter": "334",
"id": "18b78778-6018-484e-8218-632a248fcd48",
"isUnavailable": false,
"others": [
"71d2d0cf-eee7-4cda-b2b1-553cc56c86af",
"a90bfa12-a908-435b-8071-428caf99ec22",
"04d7e12e-bc09-4056-b220-d43b6af7751c",
"63de031e-a17b-4f33-8616-24157075867a",
"9262f33c-64c6-4e3e-98be-49bb85fed250",
"b7c77a95-11a4-4a2f-a4d0-41357c13de93",
"05b3fa0c-c6bb-430d-8a17-ea1652795f1b",
"e56a2ede-d36b-4253-b549-d02d3e80f7b2"
],
"count": 9
}
}
},
"37": {
"volume": "37",
"count": 87,
"chapters": {
"333": {
"chapter": "333",
"id": "5cce5810-cd81-495b-80df-c9bd10f6c736",
"isUnavailable": false,
"others": [
"a8262bbe-5bab-46d9-a970-6aacc20d3c30",
"d7b8c2c7-4461-46fe-9035-5846d10540f0",
"4862b3ac-f2cc-4fd6-9c4a-77d8bb4cd515",
"4c329562-a38b-436d-a828-9920bdc18a6a",
"418c53d3-825e-4acf-8fd5-e381fa6ebc70",
"935c9a21-2252-456e-b876-386eda2a0df6",
"ac0ddaf1-bea7-4ba1-b16d-4e929a604725",
"ecdd703e-fd6a-4459-9d41-6487a9886b6c"
],
"count": 9
},
"332": {
"chapter": "332",
"id": "31457d6d-7a3e-4385-9de4-1680415f1673",
"isUnavailable": false,
"others": [
"bfab5658-c4ce-4f0e-b4d6-669edbdb319d",
"bfcea11b-ff56-4c87-82d7-bd11c84b2403",
"46966b3a-b2f5-4b95-9f3a-7e05f06a9269",
"613fa058-c83f-4c77-ae28-7b490277924c",
"6996a06d-4ba6-484f-8c06-92a847435aa1",
"a86d46e9-795d-4b1b-b929-d58f4e3a3d31",
"08fabb5a-41d6-442b-813d-b6de337fc9d3",
"5e0a18ee-7e4e-45d8-9df3-465b6f969866"
],
"count": 9
},
"331": {
"chapter": "331",
"id": "83e45bba-11a6-4e48-b931-dbb7deaabae8",
"isUnavailable": false,
"others": [
"4d91f1de-44f9-4c3e-a4c8-d8180c8bc6fb",
"c4ab94bd-f1e9-4664-b592-c94f536f43f7",
"abf7baf1-7268-4aa7-89b8-d7b7454bbf12",
"e9a935a9-6e64-4f3c-8a6a-f6013c06cd4c",
"d5c3694d-31ad-4c79-a4ed-03abfa632ada",
"34c76f09-6bbd-4bc5-9b67-6db07b0cc21d",
"67983df5-46f2-42fe-ac9c-bef0592f640f",
"cc953d21-e623-4f91-aa1a-f9c1ce446f1f"
],
"count": 9
},
"330": {
"chapter": "330",
"id": "2e2e66a6-aaab-43b7-b9e1-7f08347efc52",
"isUnavailable": false,
"others": [
"2744dc2b-67b1-4f14-b070-bcb162cd2559",
"7f1da5e6-d78c-47cf-8a6f-8cc2753616c9",
"32229a79-d01d-410e-a86d-c4a23f062196",
"08972595-ba04-46cc-a09a-76f50ac9a251",
"733aa593-c922-4bc6-93a9-2a58a3d77b6c",
"68b94070-9cc0-4334-87a5-35f7d931e7ea",
"c2a07b1e-37dd-4e13-902c-8f9d7a037be7",
"85ed726e-1bc6-4491-8825-8b85469932fd",
"9a034fab-682e-4e9f-b20b-d62c27ba660c"
],
"count": 10
},
"329": {
"chapter": "329",
"id": "157b44d8-7e62-4f1b-9133-c3abd92c8082",
"isUnavailable": false,
"others": [
"58b2d95f-ba6e-4cd2-910b-65d1bffd8780",
"5f35b6b6-72ac-41df-a11a-ac2caeb0784a",
"9e2630ab-8f1d-4a94-8427-1bf8dbfea40e",
"1e004794-c10b-4051-a676-c73b841f6d93",
"a1798cf2-bfee-4833-8155-9eb8525f7f0f",
"fd216b91-62cc-47d7-a038-0b80a814bf04",
"1c8b8adf-e387-4612-b4ec-b820be8b8c87",
"764a3dc6-cf9f-4b05-91b8-83588ce9dae8",
"727303c1-0edc-40f8-ac1a-20c8d3c25f56"
],
"count": 10
},
"328": {
"chapter": "328",
"id": "3c0d2e16-723a-410b-aaec-365637b62c7e",
"isUnavailable": false,
"others": [
"1e89076e-d636-497d-a322-82e9a74ed7d2",
"275e47b6-1245-4562-9107-051403ea1242",
"f2f31b66-fc55-4f03-ac01-c7db2d96b209",
"27e5cb4d-edcd-46f4-86ee-fe2866ef8d3b",
"47a9d2b8-58cd-4b1b-82bc-7f10ef7998fd",
"62e2a023-6f72-4d8a-94a9-d9bcb8e799fe",
"1c38a973-9d1b-4541-a983-bc56c6a19796",
"93714e90-11e0-48c9-bd3c-f053316b0b0c",
"b5873135-30cc-4f2e-be38-3eeee01ad5e1"
],
"count": 10
},
"327": {
"chapter": "327",
"id": "19941af9-9afc-4957-9975-6151a83d74fd",
"isUnavailable": false,
"others": [
"7920533a-6074-4fab-a73a-9f47b7a427e3",
"508b0ea8-9cfc-4dd0-8c22-963594a63884",
"b5da9561-f483-4750-9700-32f60ab9aadf",
"2ba2f415-afc9-4449-8c5e-d3f9e0672dbb",
"17a5f8fb-dbd0-478e-80df-fa7d01c8426f",
"75215f73-0a87-49df-aa2a-965c2ec53346",
"528146e7-a6f3-4b87-a0a2-0db06394b340",
"6e8802d1-50fa-4cb0-ae0b-5ad64875cf8f",
"961f8040-cf78-45a0-a71b-c4537dad80e5"
],
"count": 10
},
"326": {
"chapter": "326",
"id": "47dd5fa4-b0a3-4e49-97f8-17e46c63e9c4",
"isUnavailable": false,
"others": [
"85ea8882-358d-45ad-be3d-9e020da0ff53",
"74eb0bd9-6621-4f10-9607-09b698ef7cce",
"b0a23413-9383-4fe8-b88c-1f560e04581a",
"e52cf8d4-5b44-4f8c-8ac8-1a482b59e88f",
"2b5ab6a8-8953-464d-967e-7d528386df8c",
"2408881b-aafc-4b8b-ba2e-963ee7fa6b7b",
"f78f5959-b31d-4e24-a224-28af25d86ca8",
"56a61e32-9311-40e6-af2f-ced872dc062f",
"bbc192ad-6a15-41c0-8cb8-672a601e8427"
],
"count": 10
},
"325": {
"chapter": "325",
"id": "052e6b23-e282-468f-9e33-9392e26fa03b",
"isUnavailable": false,
"others": [
"3d940076-212b-47c9-a6a2-ae620b202ad8",
"a6bfd2c1-29b0-4a58-87b0-b469b0fbe5bd",
"fc5fa6ba-60d0-4ede-b95c-400e84b5f88e",
"92bb6552-4707-4b05-b986-d20e6e655e91",
"f573f619-6c50-451b-abf3-9f0b1d3ad25c",
"61977bf7-9195-4c40-b950-986d8e35d3f6",
"93e13d45-86c4-4f27-a54a-b57cb42e6c3a",
"c2f0da5e-8331-4b5f-a923-1edbfabd314b",
"bf41c218-d00c-4f6a-b931-27ed03fa0d9b"
],
"count": 10
}
}
},
"36": {
"volume": "36",
"count": 99,
"chapters": {
"324": {
"chapter": "324",
"id": "2d124292-509c-4bb5-816d-84fa4d1cba04",
"isUnavailable": false,
"others": [
"1abd6a59-35a4-4430-a082-f8ea1c998b7d",
"0b17b7b5-2231-4ac7-8206-d278d703d704",
"6d66dcd3-4e6c-4fb6-bfd8-c34894d657a9",
"5b46a06b-d531-4d33-8939-be66b938e714",
"ab1c2477-ad1f-4b5f-a3c4-e3ec89b7b8e2",
"9dd5d0c2-44cf-4c05-9880-b088b964d567",
"4e105b79-51ab-4bf4-8006-a2dd3ca5e93a",
"87182f23-180e-49b9-8119-1216e1e94c59",
"cc0a4827-dc69-4aee-9db6-fcf62170faf1",
"d4b3411b-12b2-4324-93b8-ae0fb338dd85"
],
"count": 11
},
"323": {
"chapter": "323",
"id": "84c03339-1c90-4bdd-ab36-b3b6bb26bc1e",
"isUnavailable": false,
"others": [
"521a2098-efb7-4bc1-b1f7-45c3eb435be0",
"614e3713-a5d3-44a8-9bb0-cbade837db19",
"8f7f9ff6-e98b-4f03-98b9-99f7fde22d94",
"2d2c92ad-f653-4741-8938-26ac0cbcd11a",
"0a9c20ff-bec3-42fd-b609-9e0862d6a68e",
"5c7620e6-77e5-4270-9452-539eb9d01a4f",
"cc69aef7-149f-4b68-a9e4-f772dc591f76",
"3c664541-b250-4868-866d-b844f59af4f7",
"4954c845-e78b-4011-b933-585b0c91889f",
"da4c6ee3-4436-4da6-af50-6f03a1de8a13"
],
"count": 11
},
"322": {
"chapter": "322",
"id": "a2fc3ebf-bce4-493c-81ed-f819da59dc62",
"isUnavailable": false,
"others": [
"98abdc8a-ec5c-4738-9395-a8b68a7f94cd",
"8c62f5e7-0f74-4d1d-ba08-90aabed4fb85",
"c9bcd6fd-4669-4989-aedb-4304a826db61",
"bd29ed17-467d-42be-876e-463bea403fd0",
"e5153421-7b9b-4f94-be11-bb7182c64acf",
"e6eebfab-27ef-4968-b775-dee832ec0248",
"439166e9-a644-4c83-b789-019d311d2db6",
"c88dad81-885d-4851-bd97-4c1697a3adb2",
"9ae9e884-10ee-4dbe-be2c-d8bf83c733c0",
"eadfd5c1-5f25-4844-8411-aa86fc432499"
],
"count": 11
},
"321": {
"chapter": "321",
"id": "7114ecb5-6ea8-4964-b70b-9a12da6e9099",
"isUnavailable": false,
"others": [
"4f08c22a-73e2-4c17-9f69-4dc7138c6b43",
"d3949453-e1e5-405a-a3ec-418a4e2d87b9",
"0e0dd1b1-b303-4fec-a4b0-557c8af2cb04",
"29e5076a-e34b-4cb7-b1c0-a4f7d2014636",
"4ec0a481-ec29-4ff8-b775-fa284f5b4890",
"86902e40-98cb-461b-bc59-4c765de23e7f",
"7ac7e3dc-a7e1-4223-8540-268bdc5af32c",
"b0ed371d-fe3f-471b-b6a5-0605e3f292fa",
"b7787271-5ec4-43a6-9c00-66839743bbf5",
"b470248e-a62f-485a-aaf8-f8172d6774f5"
],
"count": 11
},
"320": {
"chapter": "320",
"id": "06f23f89-790d-4cb6-9c2f-d18e67d172b8",
"isUnavailable": false,
"others": [
"00f987b0-f5a9-4e22-b5a4-84c925739631",
"0d9874e5-31bf-40f3-b1d5-1ab3c5d0fc98",
"755834e3-70fa-47e4-b6f6-9a96b04b85ef",
"7f102d52-b7d1-41bf-9e9e-f6002359fcd3",
"d6cbfa44-84fe-4a36-852c-90f64def93ff",
"44147e56-5a67-4b06-947b-d300e65c54d3",
"2a365db8-b593-454c-abf1-6474c9b71169",
"47128054-ab20-4fe2-a43a-aae30a7b154d",
"4a3e3173-cb70-4ab7-9aa0-9aa2a32571d4",
"6ec2669e-569c-4146-9160-387a34520091"
],
"count": 11
},
"319": {
"chapter": "319",
"id": "0b296676-5b6a-43a6-846d-323b4972e420",
"isUnavailable": false,
"others": [
"3ad83107-2854-4fa9-9aef-cf129ef37bf0",
"45083bb1-63fe-487b-ad22-34c13a2afea2",
"4a4ef4dc-7d37-4224-b3e9-167c6c0fe171",
"a3889216-8afb-4765-a657-1012b27b469d",
"9a111d1d-c4f7-4aa8-bba2-d24583c09d69",
"e7b4822e-05c4-4671-9375-693e9874f60b",
"8f74d644-ecce-4c8b-bb1a-6dbe128cae2e",
"a9a1c63e-f86c-445f-8601-ad97c2e7e945",
"b057cb1e-460f-41b9-ae56-f21fefdd381c",
"f3387b1c-d29c-405b-8c05-71513aa36cde"
],
"count": 11
},
"318": {
"chapter": "318",
"id": "3ac43d9d-fdd3-4538-9a89-13c47600b141",
"isUnavailable": false,
"others": [
"1c41cf2a-1fa5-4f92-8f61-61c53efa2c75",
"5bde480a-ccb6-4120-8cb3-6ee1c2846f1b",
"9bcf4f92-49aa-4a8e-a52e-e3bc5173d155",
"a93cff4f-bb1f-47c0-8948-47370d043cf7",
"faa3e47d-1675-4f69-adee-879d9d6d5549",
"2260e27f-5ee8-4a9a-809c-dd9ab572a03c",
"4f1c4600-4c0c-4f2d-ae81-d27dce263164",
"c04f316f-1d5e-4e93-b74d-c42a009772d6",
"20bdef1f-3897-4355-bc98-2b4ce93dfd29",
"59ca6453-84ca-4f33-af80-b4aa43f7e683"
],
"count": 11
},
"317": {
"chapter": "317",
"id": "0717aeba-ea98-4fa9-9904-4889d3aa4d2a",
"isUnavailable": false,
"others": [
"c1c76d21-1eab-4acd-b104-0d87fd3a1e83",
"d02bd7af-cf6c-4fc7-8875-1426463d3770",
"3ba2e84d-9fc4-4725-b2e8-c26e720412c5",
"25e2fd44-7623-48af-962c-31ef10a135e6",
"8979a95b-8433-4978-b2c2-f881da168a42",
"c28a67fd-6194-41b4-b03c-70e79167b6b9",
"a013e51d-c6b4-4841-a19e-daf3601706ca",
"f59d8028-21e8-43ad-9b88-df2fc7f4174b",
"ec90aa01-d47d-4c54-9055-5ca406c79303",
"f3be18cc-c481-4330-b5fa-07aa8f8e68ae"
],
"count": 11
},
"316": {
"chapter": "316",
"id": "2c12d237-6fcc-4095-91da-e00fd15d4a4c",
"isUnavailable": false,
"others": [
"8616b966-a1f0-4ee7-8787-eb12cfa24540",
"57db92db-8f6c-41c2-8c40-f2f256565a38",
"62c524a8-dfa6-4ceb-8552-944758ce8de8",
"950a2f51-2a9d-4fb4-8779-d7dc350d4f3b",
"87b2c4a2-bf82-449b-ad3c-4535490762aa",
"629bffe5-37bb-4549-978b-11236109ae4b",
"6651edbc-8dc4-45af-ac76-c97dc44e367d",
"b062fc46-cbdb-4690-ac86-3f6c7b79f973",
"9d87e2b0-00a2-41ef-a61e-092b1af9822b",
"e2dc87e3-e0c7-4c5b-9212-85359a974985"
],
"count": 11
}
}
},
"35": {
"volume": "35",
"count": 90,
"chapters": {
"315": {
"chapter": "315",
"id": "3db30e80-9b45-41d4-a558-1315e3b35a43",
"isUnavailable": false,
"others": [
"8772be98-2578-46de-9165-7e770f496d19",
"65bc1b09-6d12-44c2-a7ef-f53d64046395",
"40345b1c-68ba-4a5b-abb8-21e348961385",
"dac29ef2-83ac-4824-b60c-95b986ee1ecb",
"3d39eb0b-980e-4517-9154-d05b124ceb08",
"c1553419-a17c-4ebb-85b0-1b3080a95169",
"7d900767-6e88-4bf2-8b16-05e57b5bc34f",
"60743654-4129-4f5b-a1e5-369a85e6c8fe",
"5d380741-e7b6-4d41-98db-e53c4621bb73"
],
"count": 10
},
"314": {
"chapter": "314",
"id": "350bd12f-3ef2-4f15-9bd8-954247ade1cc",
"isUnavailable": false,
"others": [
"16407f6d-8355-45c2-9c4d-098149df7e23",
"8783ffcd-5a13-4e5d-8e90-7826232b2343",
"625526b0-3079-495b-9d3d-c484ee43f40c",
"7beb80e9-c974-46ab-b286-82f71a98ce74",
"ae5b8765-91c9-4c49-a80f-13102bbbdfb4",
"8276100e-3c64-4b52-b53b-8e89a54f45f4",
"5dc69b2c-1985-4467-a7f6-78ac386952e1",
"8b15bc97-93e8-4f9d-9456-16163fbb9ebe",
"eb3b8c77-fe9a-4dc4-9e02-6fbbd9e58c84"
],
"count": 10
},
"313": {
"chapter": "313",
"id": "6d081515-a812-497a-8666-ef678fe4836f",
"isUnavailable": false,
"others": [
"8113fc1d-d7a0-4f59-ab39-09523d5b8aeb",
"ce7253ec-6c9b-4366-adae-a04d1816e742",
"500568b7-88dd-473b-8209-95a93251b7b2",
"f294f77b-d9ae-43f1-a966-91ea5e219f71",
"08da7beb-05e6-441b-aeb7-8f2e21272c5b",
"560d9f2c-d866-4810-a2e8-80655457bff7",
"7842cd31-02f0-4f70-8ed6-a932a4e70115",
"a7b2c77c-8554-4d04-afef-de7152bde13e",
"a24d4ad2-1624-48f4-8700-42e881b2a1fa"
],
"count": 10
},
"312": {
"chapter": "312",
"id": "b7735013-1a37-42c7-ba76-c01629fbe015",
"isUnavailable": false,
"others": [
"4a363d03-19b8-4302-94ed-6237c8c00637",
"8b7dcf89-eec0-42ed-99bb-9f5e4bf31e5e",
"3f2bb870-f95d-495d-86e9-fe22d07d2c9b",
"22ff434c-57ef-4a60-b1cf-50d36927defa",
"124826da-1ca7-4e18-9b0b-b091d0358571",
"603619c8-02a4-4f9a-b4e3-a97fb97d1d83",
"da148002-4203-43b0-bfe7-845433bc5ec2",
"e555075b-c481-4240-9a5f-2c94369ba729",
"ec837df7-d21e-4117-a31b-c42c2687806c"
],
"count": 10
},
"311": {
"chapter": "311",
"id": "045c7b41-62a8-419a-a70b-8f5df756cab0",
"isUnavailable": false,
"others": [
"81ea6814-260f-4906-917c-c59753ceb3eb",
"ccba3e0d-fc0b-48d8-b1fa-15679eeb89ce",
"bdae5cca-8bee-4f70-b88f-c92133cfb7d3",
"9d09c93b-18ec-4ac2-9b52-f4ae81222155",
"610e7c0c-1450-49a8-aa62-518d046a8477",
"71cc02f2-2c45-45f9-820b-09e207109ba9",
"a98ecef1-05c9-4f85-8440-92362bc773f6",
"26341f2e-9924-4d25-ad62-0cc07831ef44",
"dce092b5-b965-408e-ab70-952b3949482c"
],
"count": 10
},
"310": {
"chapter": "310",
"id": "280e7ed6-e5b3-4c93-b4fe-4cac02dc288b",
"isUnavailable": false,
"others": [
"0d47d50a-c1bc-4df0-ae6b-f71b315aef5c",
"43743406-ab85-49f9-bf77-04fe98f96074",
"b8bfa716-d759-435d-ae00-2f84ceba32f5",
"f22ad6f8-4674-4ff6-99d8-5d05c5422d7f",
"3c978a5e-3c4b-459e-92db-bcb54160157a",
"4a0003e8-e325-4ebc-8ea0-e35a8bfa12d1",
"57a012bb-560a-4428-a12b-1cbf763677cb",
"32f86e10-90b9-4e36-9811-d10c6a6341cc",
"dbb3338c-c380-423b-a497-2383d70cfdec"
],
"count": 10
},
"309": {
"chapter": "309",
"id": "1fbaf35a-a140-4d5b-af54-ed93add27eb1",
"isUnavailable": false,
"others": [
"d02cbfae-a50a-4778-9176-a3bfeee0ffd0",
"33e3e43a-cef4-4750-afba-70f23fd883a0",
"57b94a41-2067-4ffb-a28a-4b2159ba6486",
"a5a514e9-afb7-468d-8ea0-02b4c08c0be7",
"1dfe25ac-c791-4fa9-a583-ed70a30db095",
"61ca5a93-8d35-42d6-b932-2e9df60e6c51",
"93b2f48f-c7cf-48fb-a9cd-bb067b125cc3",
"a63160de-fbf5-4b5d-83bf-add0bcd6f230",
"dc532c1b-c42d-45d7-bb6a-c80deab5ca02"
],
"count": 10
},
"308": {
"chapter": "308",
"id": "629a7a7a-890b-47da-a2b0-c52ae4eab84a",
"isUnavailable": false,
"others": [
"7604ee3a-8e9c-4501-8e17-170516cfe449",
"a62f9a68-f68e-4efd-a2a7-e7c70415cf98",
"9fd577c2-ee79-47cc-9b38-70b1ecad66c0",
"5ab006ff-0db1-4cd5-9fef-b67f791ce40d",
"e01d77c6-bc82-4517-9bfd-d63d4452af57",
"12e978d7-4ecc-47a8-a570-c0bb4eebeece",
"83087418-45f1-40ea-af53-16e6de609c32",
"b5d49d13-82c6-4f3c-ba1e-bde8001008aa",
"9d7c80b0-0561-4c41-9cbf-3f2b75b976f5"
],
"count": 10
},
"307": {
"chapter": "307",
"id": "1b7214cb-2900-4dcb-8310-41b12074044d",
"isUnavailable": false,
"others": [
"425170c9-c604-4595-b5af-6684adad3e1e",
"e9cbfe48-c722-476b-9dcf-2c49750198e5",
"d14319aa-b540-491c-ba72-925e87868490",
"54369d03-c1d8-4fc6-8fe8-41ab76059b59",
"3fcc1804-db4b-4aed-b320-e4f86e831bee",
"74171345-4d36-4cde-9c29-03bb428ba0c2",
"fe2ea4db-afcc-43fb-b83a-06029b8ec74f",
"5aa0834a-9e01-4ff0-94bf-41f37ee83526",
"d5d14c16-8a48-42d0-aa0c-727c6eb9aee7"
],
"count": 10
}
}
},
"34": {
"volume": "34",
"count": 100,
"chapters": {
"306": {
"chapter": "306",
"id": "07828827-fa03-41f5-8d52-7b611d47b837",
"isUnavailable": false,
"others": [
"fc08d11f-604e-4906-b065-39002e9f7c5b",
"f8207e21-95cd-43c7-98d4-63fe023243e9",
"880c7b37-e0ee-409e-aca5-c24bdad8d57e",
"c32d4270-6869-422b-b2c5-01a566216d74",
"d3f2cc71-3dff-402d-9e39-3e374c36f582",
"d6e65e54-ec48-42b3-9ffb-684f35d3fcc8",
"f167e311-bbf3-4fa4-9f8c-10a28ea2fce3",
"07f7f3c4-2394-456a-8866-77b766c88889",
"83c0d457-6d26-42f6-961c-277626a60a97"
],
"count": 10
},
"305": {
"chapter": "305",
"id": "a9755a9c-d2cd-449d-8bf5-4ab545f6e83d",
"isUnavailable": false,
"others": [
"eaed4f7a-b7cc-4dad-9c58-9f39205fdd02",
"f58d6d3d-1ba7-4d12-9b60-3282904283d4",
"176fb92d-3027-479d-a665-6bbabc6c80da",
"066979ea-6e7b-49f2-8110-db5f32f11d63",
"39cff861-7243-4a48-868a-bd0cfccbd1c8",
"439b72bc-8d25-4f98-a2fb-7774ed73229d",
"b9351222-f53a-4e14-89b9-5afcc8059eac",
"d5865403-badd-4316-acbe-f3a7f0018e2c",
"42b74e0c-0bbb-414e-b357-2284299e57c4"
],
"count": 10
},
"304": {
"chapter": "304",
"id": "253caef3-77df-4dfb-9865-13c54568d6bb",
"isUnavailable": false,
"others": [
"531d39d5-e78b-4c99-b5f0-0372f77d6b2e",
"8dcab5ce-13b5-40c0-b07b-83f6ee49805e",
"80bbc5af-9ca1-4b88-99d1-43cd95ec356d",
"d22de89b-0bf6-4f70-9d11-f06d7adca00e",
"cdb91d50-a614-4347-8cac-a7fd751919ba",
"dcda1a7f-875a-4d43-93d3-833188f0dc34",
"264a72c1-c07d-4df4-a56a-a4cbb243b1d0",
"d0af7b1f-1aec-4304-8d50-891184930650",
"ecdff382-a559-418e-9500-890b822a393b"
],
"count": 10
},
"303": {
"chapter": "303",
"id": "8178fef8-0ab8-470a-b3db-3c2e4521d77e",
"isUnavailable": false,
"others": [
"b430b64b-e2a3-4921-95cb-f1736b93c90d",
"f089443d-8b6a-4dad-88b9-7109d25d9942",
"31518cf2-91bc-4efc-9f70-e9ae818ff59b",
"34cab2f4-eac5-4b6b-aa67-fa5ad28d0989",
"45fc646e-8fd7-4378-9b6b-232adb7a47f9",
"5e957798-b5df-47ab-a8a5-726209bc098b",
"e16e41e2-c03c-4fd8-be56-dc97d4f6b8f7",
"0c093ba1-3c9b-42fd-a8c0-35a74f90d01b",
"ffb11de6-88b7-4e59-b265-bf0750492d0a"
],
"count": 10
},
"302": {
"chapter": "302",
"id": "3b696a06-e45a-4f17-b836-a1f7b712babc",
"isUnavailable": false,
"others": [
"84bacf09-bde5-4185-ae19-2a639e059ce2",
"c15cbe81-e64a-4f85-ab04-ee2f993cd87e",
"dc0f96b7-1990-4b1a-a9fa-3476ce8cafce",
"27e8bcef-83ca-4c8d-8885-118a6817e354",
"3b73d0fc-6e0a-4fec-ad61-963e83aafe33",
"20d08a48-c11f-45be-84b2-17865b66bd0b",
"1eaa0d95-ccbf-405c-966e-4e65208cd761",
"8f57490d-53ee-441d-b8cf-748c64b13937",
"b5e07f63-7d63-4f9b-a110-9315a88fe911"
],
"count": 10
},
"301": {
"chapter": "301",
"id": "1831e305-6d7d-498a-bc99-a701cb5f0a5f",
"isUnavailable": false,
"others": [
"aa2ecdeb-b5de-4964-9aee-37f1f559ce05",
"4d9698d9-d50c-467b-b092-83d971437459",
"9c67f52f-756b-4c88-b0cf-fcf90e312c08",
"a0f1c292-41b9-4ef3-af0e-1d63cde85fa2",
"e1032196-5646-4fd5-b852-934e1e3c5853",
"0d94e912-0561-43d0-968f-d4fd7c4c6a6f",
"520bc070-8b3b-4104-ad0b-5ff0d9f3b2e4",
"82f152e8-7ab1-44a1-90b6-dfaad54d5f90",
"a9bc7f90-e7c6-44b4-b6c2-9363e67c98a5"
],
"count": 10
},
"300": {
"chapter": "300",
"id": "a348d64a-ae15-4ff5-902f-92fc17c973f4",
"isUnavailable": false,
"others": [
"989bdcb8-190f-40c1-8a08-dae77e86446b",
"441c9a96-1244-416c-b27e-5b1818cbdd03",
"4cdb323a-1ffe-4b5c-a5a8-fb0f06e289d3",
"53dee2f2-b0df-4c2c-93a9-77e972ac133c",
"aa346445-7ba9-4daf-91c3-d070ce512def",
"bd3446a9-ab42-4721-8601-0fbccc3edb13",
"e390850b-56ee-4fdc-8c23-8572be1e7436",
"4f356b6a-1be9-4486-add5-3e8757643945",
"ad04e6c2-842d-4732-94a9-b274013d3d6b"
],
"count": 10
},
"299": {
"chapter": "299",
"id": "2bfc242c-4e60-4d55-9eb7-9fa084b7d47d",
"isUnavailable": false,
"others": [
"0ba4f29e-f545-4092-a3c8-16b27710876a",
"79e6bac4-4456-4897-a19c-da84a9c84db0",
"a8c90dc3-7388-44c3-b231-7e2f39979b74",
"2495831f-98af-4883-be0a-10b3ac3eb7f5",
"da96ac14-5c6d-4636-8766-265bee1246ba",
"0f0bcb4d-9e0e-4ae7-924a-b1a446fea10f",
"22162dcf-939b-4f70-805f-7cffb4595bff",
"37dabb19-8254-4a75-8ad8-a2bc504e3c20",
"1f8dae92-2792-4f80-8c44-87e764111315"
],
"count": 10
},
"298": {
"chapter": "298",
"id": "15e13242-cb47-4b11-9775-58f6df23c456",
"isUnavailable": false,
"others": [
"e42ac750-c7d8-4aa3-b824-c85248278a0b",
"6efda07f-c011-4f92-93f2-e4e62dd6adcb",
"c8ea8acb-97bf-4182-ab80-11c109b7c00c",
"bc748c0b-c347-43f3-ae21-95ec86305410",
"df0aa1ce-f6dc-4c64-865d-c46ba0f38fe1",
"63888d6d-b448-4707-9abd-41a9131049be",
"854fb15e-4266-4600-8131-ec55ccdd41ba",
"5d6c8ebd-16a7-4ba1-86c8-34cb80605e38",
"e6aa2e37-6680-4754-98d3-0e8930b74e27"
],
"count": 10
},
"297": {
"chapter": "297",
"id": "2defe7ba-1ff1-4c90-be09-b2756076fa3e",
"isUnavailable": false,
"others": [
"c0cb3811-aea7-4d2f-a179-c6eb32e84b09",
"acb3070b-c2b7-4bb5-afce-987a3fcfdb27",
"9192a8dc-aeac-495e-bfae-d384c8dcbaf9",
"e90daf93-821f-49e4-a366-7b8dcd30cf38",
"cf1ef601-ec71-40c8-a0bc-073a81624bd9",
"40be3d24-153e-4f96-bc9f-4084e704c0b0",
"e3d9e39f-43b9-4565-820e-477bd447317b",
"2f9898ff-c413-48b8-8fb4-bfed8f480da0",
"9dcbea89-39a2-4a17-824d-076e1314166c"
],
"count": 10
}
}
},
"33": {
"volume": "33",
"count": 100,
"chapters": {
"296": {
"chapter": "296",
"id": "c2009812-0b33-4f77-9ad3-5d16959220f6",
"isUnavailable": false,
"others": [
"3e23e199-1ee5-49e8-b408-6e01a179c977",
"7107fe47-c09a-4b93-b7cd-86c9c3ce0638",
"d5bad9d0-f7d5-4259-b88e-e2ac7d63545e",
"2385cc51-abaf-4ad3-8092-21b9697da73c",
"53995e01-da3d-48db-bed2-da0e05cdf346",
"5148d581-d693-4593-9c5f-0073a4dd4849",
"820a557f-b45e-45c8-b313-6d71cc62a2cc",
"c6a1c49a-5735-4797-a5a2-130e08e232ee",
"f6fad1a8-7e86-4c9f-849a-80270f9fd7c8"
],
"count": 10
},
"295": {
"chapter": "295",
"id": "18ff8058-3f3f-49b5-bf01-e94a900ad6a5",
"isUnavailable": false,
"others": [
"2fda30c8-01e6-4dd1-834f-fc45a73e055e",
"5deb24f1-fdcd-4abe-970d-f5580c21757c",
"aff6a138-7d8a-4f34-8d69-c955fc5fbbcc",
"2a4208b8-1fae-41bd-94de-ab9a8092765d",
"3afea214-0a0e-4ebb-af5d-981958b03913",
"d721d94a-6947-4631-b2ab-7bf24e34436f",
"1d0c6a9c-c5c4-4eb3-b623-f722deb63a49",
"556c5527-64cf-43f7-beba-b2a583f44071",
"e9871feb-465b-44ed-80f9-8336fd737279"
],
"count": 10
},
"294": {
"chapter": "294",
"id": "2bb2af6c-e906-4367-ad0c-551bdb72f031",
"isUnavailable": false,
"others": [
"80d35f9e-b0a2-4257-a57e-c389267e81d6",
"798f6afa-3186-45fc-b833-d693495efaa3",
"a4ce002b-3cd8-4655-931a-8c9eae3ff014",
"f56ba468-1d5f-41f9-b8d2-f972c20b9ac7",
"0ea5da4b-7789-4109-9fcf-04b63c594a56",
"8d1527a0-4864-400e-ab3a-14eb739859e1",
"d0768701-9adc-4955-9eae-db2b19dad414",
"7d5af101-2377-4814-9d67-4fc8e8cb8ff0",
"a2c21d8a-b70b-4f9a-86e9-98e13ab52d9e"
],
"count": 10
},
"293": {
"chapter": "293",
"id": "1cc45205-2df4-4ec2-9cb5-785749a046d2",
"isUnavailable": false,
"others": [
"6e663cda-9a39-46f1-a828-91c514333bc4",
"4a6fe6b2-9c2c-4356-b9b6-800f54c01783",
"8cb8ac2e-340e-4935-99eb-571d1b5914ad",
"ff873135-582a-4e6d-bb7a-0dd774c7cf2c",
"2b3eae7c-8853-4f62-a303-d518d6d9fb82",
"2e4236ad-2d31-4f12-a65f-676e42ad4dcb",
"25bc36b1-654a-41f3-a0d8-6df45b4360b2",
"84e31f13-e430-4e0b-ac20-6680e64c8277",
"effbd0cd-9ca8-4b89-bc95-85df40e166c3"
],
"count": 10
},
"292": {
"chapter": "292",
"id": "06bbd3ee-5bda-4176-b387-c5f9682af41f",
"isUnavailable": false,
"others": [
"e5ea1296-ad17-45b7-8f66-65051abac4f4",
"1b000506-11f5-4d2a-8833-8ae70c34f7eb",
"3628f5e5-d8f7-4b9a-b3fc-24e169c0cdfc",
"6b45defc-bed8-4fb6-aab4-a9e77bb632c5",
"93611abb-a0e9-4544-8163-b3bf1db0382c",
"c2d2d26f-975d-4fe8-a0c0-e8b67a7b87bf",
"07bd6e0e-fdab-4732-9664-a591ed0a16f1",
"1e3c10e9-9519-4974-9b42-e0c08b7f25ed",
"b30f5c1a-6547-42b5-a327-90e3bacba50d"
],
"count": 10
},
"291": {
"chapter": "291",
"id": "a61fa5e7-3718-4201-96d1-230bfe5de619",
"isUnavailable": false,
"others": [
"10ec46d8-4976-47ad-8dce-782516b1ef5b",
"3e0ebb40-f693-4771-b380-617fa80aa15d",
"7eef7dbf-53d6-4dad-81cc-22d70583cfa5",
"a122acaa-d3ed-443d-a28c-49d487528f01",
"e1e71dea-2676-4dbd-8b9d-b0d0af443740",
"f120d6a9-2333-4f69-a545-59789663cef8",
"1c7bb6d3-23a9-46d2-b63c-a27b631cee01",
"b9abc292-4923-4bbb-9ca2-2f04be3c8cfb",
"99817838-23bb-42b3-a47d-7e397ac7b966"
],
"count": 10
},
"290": {
"chapter": "290",
"id": "e9968e15-34b6-48d3-af67-50d4a20c39c7",
"isUnavailable": false,
"others": [
"036d5e8a-29c7-4e55-95d3-9274dbff16e2",
"389bdb9b-6d38-493f-8340-41290de8b604",
"8c84facc-6c6a-4fd1-9072-741858067107",
"f4796626-9395-491a-8ae1-f13f397f8dd5",
"31d4a79f-74d8-4eac-b94c-45331c147c36",
"7a28ae89-cb32-4ae5-bf27-e67087d48856",
"b534600c-0331-443c-87e1-1b89cc977cea",
"c9a9f3ad-a10b-4965-a765-a60e65aa87e8",
"f22acb52-61e0-485e-9936-e1f11761c440"
],
"count": 10
},
"289": {
"chapter": "289",
"id": "0cce7db7-4201-4a71-b6d9-79db01c5a98a",
"isUnavailable": false,
"others": [
"21a2c65d-3a3e-4fea-bedb-a4e010416c3f",
"c5b2f32b-a2a2-4019-b6c2-aa1c53f0aeb2",
"eebbacb4-53f5-4a5d-854f-0bc8aeb2ebbc",
"63d968c5-b1bd-4232-9cd8-76144a4b916e",
"be736e88-75fe-452b-a048-550c040a053d",
"99d4d6da-f9c9-4ff5-9dbf-08269a443aa9",
"6cef23f6-ac24-4f52-a4f0-9ea7d66bf559",
"5aacd452-a768-44ca-9814-85e60fdde60a",
"d359f3f7-b720-47fa-a8ef-800c97401d86"
],
"count": 10
},
"288": {
"chapter": "288",
"id": "2ce060e9-01dc-4bae-a3f1-5822ebb7adfb",
"isUnavailable": false,
"others": [
"37dada8b-a064-4b1c-a883-6e5056902327",
"373fe5c8-b897-430f-b975-cbf5c3cd7f52",
"42c49272-d8d4-45e1-9562-1d7b09d53fbb",
"a7232b6d-a519-4c8d-bd36-1691a727b5bf",
"62fbd24b-1f56-4217-a6f8-e2a954a5cc3f",
"bd968dc1-46fc-4582-ab6c-2c807167a60b",
"9e0f5512-c1f6-4c2a-81b2-0988fc0e0f7d",
"fe77cd30-5afa-44d7-bbdb-2e10dc41dd95",
"ced7ae4e-703e-4f13-ae2b-98e5cf99a914"
],
"count": 10
},
"287": {
"chapter": "287",
"id": "1cc774ec-cc3b-48f2-a5ea-4407e15abd8a",
"isUnavailable": false,
"others": [
"8aaeb702-e8b3-4fd6-913c-006834affd32",
"64dad4b8-d900-4f82-9afd-48f4b9a6ca65",
"403b8d3e-fe10-42a3-a8cb-47880d481d6e",
"cb49ca0a-a74e-4a1b-ae5f-bf164e4b6ecb",
"e4fbacec-a4b5-495a-a5a9-352ef7aa3595",
"fa743e2f-e0c8-4dd3-bbe6-fbe2d41b7b31",
"f2e57090-f839-4fcf-813b-7167d51208c1",
"05cfa8b7-f371-444a-9fc0-663e35279748",
"389a74ac-c93e-4dca-b552-99fc8f2c4d01"
],
"count": 10
}
}
},
"32": {
"volume": "32",
"count": 100,
"chapters": {
"286": {
"chapter": "286",
"id": "a25f6f57-6256-4f16-a306-9542b8fe5259",
"isUnavailable": false,
"others": [
"b3da6077-44b8-42ac-90ec-07d68cf34c9f",
"fd9ed0fa-c938-455e-a072-40854553f6d1",
"2377fa0a-1167-4b1f-9f4c-30774d94dfce",
"929d1da4-128e-4f70-89d5-3b2fb77dfba5",
"d4181a66-3225-4fd6-9884-8941dbf8a845",
"53b780cd-3bcc-494d-a3c6-7ebb31c74bdb",
"52b3e56d-7f33-4b28-ae1d-f13545132b66",
"91370a19-b0ba-44f2-8a1b-80d33bb8d1cf",
"bcc2b530-3a06-4cce-b629-d73986441e14"
],
"count": 10
},
"285": {
"chapter": "285",
"id": "26ec3eae-1b0f-4f3b-be82-e50b12ac1126",
"isUnavailable": false,
"others": [
"aacb5005-646b-4743-a862-4404be6af112",
"9fa9d84d-f55a-4cd7-9f22-0a787e168cd7",
"8c9f765b-b006-4b22-b3b3-8b83510fcfab",
"3e378076-f02a-4478-a517-d28b442a93b8",
"55e7a0ae-d7d3-4aa1-abc5-fa9e297126e2",
"403e4db8-c94e-4f5f-9902-caaa2d93180a",
"e7f0c9a7-5344-44b0-a4a4-dc0ac21120d3",
"f1df8130-54d9-4f97-900b-e7d3b3e27654",
"9921eaeb-b631-4c91-9776-b64362c5d43b"
],
"count": 10
},
"284": {
"chapter": "284",
"id": "a440bab1-17fc-4d0c-bedb-0033207a5d9f",
"isUnavailable": false,
"others": [
"8f87b222-62ff-4db9-9d9a-205f0320f937",
"1c21bf83-2d7f-4ff2-b77b-9c4994ae4978",
"759a522b-6376-44dc-b3dd-7b1bccf82a2e",
"c1e50a5a-e7f9-4751-a995-0e067184ea46",
"98476ec5-f84e-4c88-bfd3-c1800d20353d",
"d3b03b04-4cdb-4560-aa2a-1cf53eec5904",
"f87be6c6-a3e7-4463-8c1c-9f7a5f15d6bd",
"61a1217e-38ad-44fb-a8b6-837c2bd0e446",
"f477105f-680b-4f5d-9999-754ee5ac1da9"
],
"count": 10
},
"283": {
"chapter": "283",
"id": "8d9ff773-de3b-4745-8e25-8b2ba949a5b0",
"isUnavailable": false,
"others": [
"ccd4d1d7-0132-4c9c-8451-52cc0620082d",
"e9b12619-f8a3-479f-86e4-ff80fd5963fb",
"096afb22-d4f8-428d-8992-c397136b00d8",
"36eb5f7e-d3ef-432f-bca5-aa4532d6844b",
"8e1f894b-0cdd-4777-a2b4-5de11e566188",
"a90829b6-e902-4014-9f90-cb09a925d5a2",
"a7d903b8-d15a-4fde-b4aa-cbe785bb6c05",
"d0bd2a54-8184-4989-9403-bae39835a4e0",
"a6fa1a7e-1d5c-4be4-ac2e-b23c39d69570"
],
"count": 10
},
"282": {
"chapter": "282",
"id": "54273cbd-0651-4c6d-b56a-1b72aa018960",
"isUnavailable": false,
"others": [
"7870e094-ec07-4f30-a2d1-d79a69d41209",
"f7564f36-08ba-49be-a3af-7db2d4fb51b6",
"08cc93a4-e87d-4ae1-9fe7-0a6077e1c6c6",
"6ec45f55-6e76-4f29-a85e-c6decf86c3cf",
"c88a8d2b-dfd5-4ab1-9f8c-d99adfc862b8",
"3cf2ea86-06f7-4d96-929f-8ed34d6c6b0e",
"252ce3de-5dc9-4364-bac9-ac384486d1eb",
"4fa56898-187c-46fb-943b-2ef523e551c3",
"82c6a08c-303b-455d-b167-b00814179739"
],
"count": 10
},
"281": {
"chapter": "281",
"id": "3b1de70c-b69c-465b-bba7-56455614b1c6",
"isUnavailable": false,
"others": [
"1552c84e-794f-40ea-bcae-a52ff1bb16bc",
"837fd1b9-64f4-4a21-95aa-67dd53b3c3c0",
"848259c7-e2a7-428f-8fdf-0a8761d48bff",
"6c147423-71b1-4c1f-a079-0da9338b2a03",
"88027337-c00e-48b9-a514-73d57b2b93ce",
"40782aa3-9b46-498a-b847-4be0a4c80d95",
"a43a2bd8-e4bf-462d-961b-fb9630045456",
"c99d1032-8fae-4fb7-9f6a-a4c3bc6b494b",
"a989959a-fead-45d0-89c5-3930e34747d2"
],
"count": 10
},
"280": {
"chapter": "280",
"id": "73091f37-91e0-4057-9713-be68c4490d2f",
"isUnavailable": false,
"others": [
"9dfa975a-8efb-44d0-9256-2271e95c5fea",
"d773fd5b-5613-4ccf-826d-b053fcdf302c",
"4d230913-8760-4ead-87f3-c28f661efc4a",
"6b16dfb5-c00f-48f9-932d-b327eee1e1b8",
"ba81a753-d279-4fa6-b3c7-c42f31e1c72b",
"f7383cff-3812-4c97-a79c-51441dc46917",
"63c65b9b-6125-4223-b600-47fc268a017c",
"568b7e79-d085-4fc0-9618-a8872ac0db5c",
"a7bda90e-fb42-4df5-b74c-0fa0cfef87ab"
],
"count": 10
},
"279": {
"chapter": "279",
"id": "bfb06fb9-ed9c-4ece-ae3e-609c0eff7301",
"isUnavailable": false,
"others": [
"c074beea-9897-4f28-9fc6-3b4374074e1e",
"35509aaa-e482-41b0-b460-facfbb71e2fb",
"42da0f39-10c0-4545-afec-10cf39b85ae7",
"1cf5ae1d-7c06-4ed3-be0c-e0abd87f0fa5",
"8250a8b3-452c-4f1e-8969-6f72b6d05623",
"6ff46c40-7ee9-4a6f-bdc0-bd9d0819b949",
"a1629f72-b8ec-42e9-85a4-040cb0c5bff8",
"dbb0196c-30bb-44db-985b-d349b28235dc",
"fac2a07b-52c5-49bd-a9ca-56937d184cca"
],
"count": 10
},
"278": {
"chapter": "278",
"id": "679ed633-5c1b-4905-a5f0-cdf9f66000bf",
"isUnavailable": false,
"others": [
"c68ce56f-6a65-4f8f-af36-4322ea591360",
"e75a85c2-f247-4de9-a574-f2134f77cf85",
"a8984e01-fdb7-44b4-9593-4225532baa66",
"c3b24af7-ef0b-40cd-ab61-afb0b72dc412",
"97d401ae-036c-4e0f-a9a7-167b49215c93",
"e9f4625a-d0a7-4b03-9e08-4d42a58647a6",
"29a83592-e9ea-4b80-8aa6-7cc26a67ea41",
"7c23e95e-5f28-4fca-a65b-cddcc64d69da",
"74612f6b-bd9f-4c07-8aaa-290f6d0ff949"
],
"count": 10
},
"277": {
"chapter": "277",
"id": "21480cfa-2d01-4842-9766-d73aaa9e1188",
"isUnavailable": false,
"others": [
"c37728c1-f654-42c4-98dd-e30f00c277e0",
"d2953c63-633e-4cf8-8535-4c0db3106965",
"6f933aa0-59ab-4f92-83c2-37ded685c8d4",
"01e1c7ac-16fc-439d-9638-9e8014a2b361",
"0e20757e-73c3-4b46-9c90-ada4738b4e5a",
"7ff0d251-ba44-4fd7-bc77-4a3eb0a49998",
"c29e3b24-4622-4f0d-833d-80ce823fce50",
"cd5f0b59-bf9d-4fb8-b593-a966ebcb7d98",
"eb1986a4-6b1e-47fc-9a30-eccb4c0e785b"
],
"count": 10
}
}
},
"31": {
"volume": "31",
"count": 101,
"chapters": {
"276": {
"chapter": "276",
"id": "859167d2-45ef-43cc-9548-7e3cae867e27",
"isUnavailable": false,
"others": [
"b674ecb0-28f6-46ea-8e74-6d1b6f91bb40",
"b58335e5-3206-40d0-82d3-9cf0b4d2f992",
"cf67a79b-b922-4577-94ed-70a4a1a7a898",
"e5c96ed1-be39-4150-9e07-7e4acc78f211",
"4051b57f-6b2e-4051-89e2-344e810ff14a",
"857df3c5-99d7-4f62-bef9-88edf0062d0d",
"9783ee46-c055-45dd-af58-9590bfaef59e",
"8be892f1-f0fd-4e00-8c2e-df074b31164d",
"95cdb4f8-cff2-4857-b93b-feaff5c29768"
],
"count": 10
},
"275": {
"chapter": "275",
"id": "258e9538-eccb-473d-907a-664225a60112",
"isUnavailable": false,
"others": [
"ddf9acf3-689e-47a5-8ff7-d4dc9b71b178",
"36b789bf-2cf2-4d81-be50-ea28b92bc2b5",
"23f064ac-5748-40fb-a161-fe4396c6f69e",
"708d2bea-bc30-4f09-a510-dbbceb424ee0",
"06ac3e48-339e-4f3b-988e-fec942fdf5af",
"2c36f6ee-2a44-40a5-9eae-a4a6572d2de6",
"3aeccdd4-46c9-45bd-9a46-0bd2d3fe3de3",
"b3c70bd1-1f59-49f7-9cb5-9c61c9f78929",
"a2c2ca81-b65e-46cc-97e4-52d3a9b1f7b8"
],
"count": 10
},
"274": {
"chapter": "274",
"id": "c221468d-2b54-4150-b99b-8816391e3ee5",
"isUnavailable": false,
"others": [
"91d5966a-f896-4f90-a8db-72ba5731036a",
"99d5c850-749e-45fe-bb65-4de51d95c14c",
"5b5c83e1-d96b-454a-b432-1df84623872e",
"4c61a7af-4aa7-4bff-976f-c655cfd95a96",
"45005244-cade-428d-a0b5-f277638a808a",
"67b7d6da-ceaa-43a7-8bfa-0dcc8f82ebfa",
"6a310938-e957-4525-9c8c-922b83ca0e5f",
"d216a0b0-f8fa-4ae0-b577-7588abfdf305",
"fa528272-eb6c-420b-a8d9-5e192b0be0bb"
],
"count": 10
},
"273": {
"chapter": "273",
"id": "27fef544-8662-4ccf-9179-0c5d0fd34eb1",
"isUnavailable": false,
"others": [
"177dec47-aae0-4a57-af81-320005c3f9d4",
"0f19e806-8c74-4cb8-b7cc-7b818bdc835f",
"2612e92d-4d24-487a-ae2f-a3913d0bbf4b",
"a241cbc0-ca81-4897-b611-a4d9318fb125",
"35d1512d-1ca7-42f6-b40a-cc128a5b3a0d",
"47de6d08-950e-4f24-ada4-5907e6cf8452",
"921197c7-0118-44e9-84ba-c202757944eb",
"c7494d85-160f-48c8-92ea-afccc8673325",
"9fc72440-f744-4a29-81f7-0a63d0458f9d"
],
"count": 10
},
"272": {
"chapter": "272",
"id": "7a0c8bdd-61f6-47a0-99e3-29073345993b",
"isUnavailable": false,
"others": [
"663b3c6a-93b1-45be-bb62-804b28c2c875",
"21cabaca-5d62-4f7e-b560-8ad8be197f17",
"1bbd2c6c-5e6e-40d5-99c0-42ef7a9fef08",
"4d935b35-7dc9-4c9b-9a36-ce43a145f5dd",
"da001f54-cbf1-4a0e-a016-de03db87d677",
"4a747672-1899-436b-892f-ad4f05d9f3a9",
"4664fc1b-916f-4fc6-bcae-8ceab410a0be",
"ca6775ca-984c-4786-9af0-53a242a60406",
"f1dc6fa9-22a0-4321-acf6-40a5291e91c3"
],
"count": 10
},
"271": {
"chapter": "271",
"id": "9b5e808c-3a71-4890-960a-d48a6af609e5",
"isUnavailable": false,
"others": [
"d766fc22-c650-4fd1-9845-d7c845cfc96e",
"1b824811-6052-44a4-b83c-dae8a0adf342",
"077c0ee0-9055-40a8-bb8a-93c633e23435",
"5ea7e873-03e6-4d9a-bdcd-b087c5709e3d",
"77121908-e315-44cd-a877-76556e311321",
"393043e2-0b29-45a5-a901-98de6babef03",
"80a15426-1970-4683-afa6-7e45051dc8ca",
"dcb33c3c-721c-43d3-86a0-3baec7ffbfdc",
"ffb2159c-cb66-48b6-882f-b7c3411a6900"
],
"count": 10
},
"270": {
"chapter": "270",
"id": "40aa2300-4695-499d-8645-28ba64832996",
"isUnavailable": false,
"others": [
"9c477b82-149e-4fa2-b62d-394bcc29bdc0",
"d40e4f84-bb0f-4e0f-ab42-f3092e68dc97",
"25e9875c-8bb4-48c2-9069-7f166fe24515",
"a79de970-c26d-4019-a00d-1475b5c86212",
"b9d34e37-b8d6-4dfa-98fb-9e7a6045fba1",
"fe1b0689-0ab4-4daa-b42a-5a95041dfe2d",
"08b780b6-9591-44cf-b5a6-594970e3e9fe",
"1c3681b9-e7d6-4cfe-a2cc-470ed7815d82",
"a045c148-0645-4e33-9fa9-275a36e47c5b"
],
"count": 10
},
"269": {
"chapter": "269",
"id": "2d838031-7ccb-4f20-b5c7-ed2d758d4887",
"isUnavailable": false,
"others": [
"07c86eeb-3895-4cfa-985f-a383dc931d01",
"f108642c-08c0-4d19-aa76-58bed3106d46",
"e0c39642-bc7b-4203-a313-ae3ddea0062b",
"15817e6a-b88a-40e2-bb98-c887bdac7669",
"a85209a9-a97f-45cf-98e8-9f2ac6c4a2fc",
"0023d08b-129d-48b4-9ecd-d1d2acb5f1d9",
"85351e5c-37e0-42a7-a963-30d75f3384c1",
"ba7c1e83-90c3-4e4b-a42e-19d2b0e611ce",
"e726a986-7b26-4d82-bdba-291de4475895"
],
"count": 10
},
"268": {
"chapter": "268",
"id": "1f4f050b-c821-4f3c-a825-3b3d159731d9",
"isUnavailable": false,
"others": [
"48d9a972-15ab-419e-aa7e-5cc6e29f9321",
"865dcee3-746c-4ca1-95f4-cd5158f86b6f",
"58388ac4-5b53-4b32-a5a3-3f3cacf04e2a",
"bebb328e-05d1-4237-8324-8341b3d1c42d",
"084507a2-6015-45d7-adbc-f99338d3577b",
"5b38eb6b-7225-489c-a0eb-18e2196e7837",
"71308b4c-363b-4350-ae69-9d708698faaa",
"6c805350-3063-4c93-af77-2d846b43616d",
"f04bd8cd-394d-4aba-ae00-842ab49f7d1f"
],
"count": 10
},
"267": {
"chapter": "267",
"id": "33ad64ab-1f0a-4584-bdf7-ed42f86bd11f",
"isUnavailable": false,
"others": [
"7932d12e-3a9d-4810-ba68-5617fc553cc2",
"5b21374d-5d04-4262-81ec-f1c64c109b32",
"efff399f-301b-47b2-bb8a-893731d6fbbe",
"7c522f21-64e0-4814-9442-c75b90f6bf4e",
"79e15063-05d7-4f1b-afbd-74b340fe8321",
"f42f1b26-4345-4cd2-8fbd-f6b8472d0557",
"26ecb345-5ddd-4b15-9faa-4dc055d7dcc4",
"8543f62b-84e0-4ac5-bcb6-b5cccb234942",
"8ca8bb4d-abfa-427a-9d19-3b5e6f326b52",
"fb80f434-07e8-425a-90f6-94e4ca3688d6"
],
"count": 11
}
}
},
"30": {
"volume": "30",
"count": 95,
"chapters": {
"266": {
"chapter": "266",
"id": "966df1d3-ee8c-4687-b23b-8f9b802892ea",
"isUnavailable": false,
"others": [
"2b0ff5e7-c69a-4d69-b4ae-315a0846d128",
"36b1d278-c190-4622-9ee2-b9fbc427c67d",
"78ebdf25-7ee2-4f1e-8137-6b94edfc2aa4",
"a94e9eaf-1495-487f-9eae-a5b342de6b9a",
"f4a496d5-2786-4996-b11b-a17f0f47da54",
"3a6ab44d-9acb-4887-ad09-fb506f4d1170",
"da3727ab-c31f-42ed-8c44-5a77b300b8f6",
"e23ef871-97cb-46b1-b98e-3f6a921ba482",
"f250a50d-beab-4dcb-b8b4-5049b9f53eeb"
],
"count": 10
},
"265": {
"chapter": "265",
"id": "f1cc3e12-65d7-43c1-b677-0a367fcb639e",
"isUnavailable": false,
"others": [
"f72c0c76-456c-43f1-abf4-81b3db0fe3db",
"a85218b1-b1d9-4221-b852-a53631f0c8a7",
"49eaf109-34b9-42a0-8b88-9fe151b7bebe",
"690244d5-652f-41c3-b5bf-267ced87fc68",
"b5e01068-6e5b-4aab-aaec-a4e1abbbd66d",
"a76110f7-16d3-4f56-9c73-dcf47ea3ad44",
"ccaf1334-8f39-4e95-9192-d854d44b5cc9",
"eb21da65-7498-47db-841c-0f45015b7514",
"f41e8a86-ed0e-4f18-b143-ed5fbc647187"
],
"count": 10
},
"264": {
"chapter": "264",
"id": "1f7a630f-047d-4dbb-838f-c6f603575d80",
"isUnavailable": false,
"others": [
"a393706b-8408-428b-ae6d-cbeecc6cd6d0",
"c63cd4e6-52f9-423b-9023-9f0c03cf171a",
"21c20f8c-1688-4430-bef7-6a461613fb48",
"39517e11-5460-4631-86b9-c3060f5d9bd0",
"2d01fb35-bb30-4680-9598-6fd467692cc4",
"6cd47be2-54cf-486a-9d54-80d1ce43a566",
"6eead465-cb00-427f-ae9b-69ecf3d30eb9",
"e674ef01-d041-48e4-be11-2c3e98a7cb35",
"786878f4-599a-4f4d-9377-b2b2162a230e"
],
"count": 10
},
"263": {
"chapter": "263",
"id": "5f9e8f9f-4a6b-4493-bb84-750086cbd60b",
"isUnavailable": false,
"others": [
"09f5082e-f96e-42b7-a299-010b360d8969",
"2bf1835a-9c6b-4b5f-a133-6e892b1ae7d3",
"38ce459c-d18d-4efc-af92-bf5d910156b6",
"b99b451e-05ff-4eea-8b0e-eba12e380180",
"adb61110-368f-49fc-943f-8e958ab0830d",
"fa8543b8-100a-428f-910a-2617ec15abee",
"46d82ad8-7700-4840-b1f6-87406490d2f3",
"71d88bf7-f384-44d1-9e57-0472438fe5ff",
"bbf0a703-671d-4f18-b0f0-a2af45a4fea1"
],
"count": 10
},
"262": {
"chapter": "262",
"id": "58269a37-f9ac-4cd2-9372-d68287cc9c2c",
"isUnavailable": false,
"others": [
"b493a3f3-1f59-4403-8dc4-850acfc94155",
"e7ab01ae-83c8-4b70-9e22-e94eb149dadc",
"1a4ff5be-7166-45e7-acf1-914a5120cb4e",
"186b400d-3d10-4cb7-9e96-be582a0539f6",
"9b5d927a-2eb8-4cab-baac-56f95a8fe294",
"a061342b-8a15-4852-a65e-87a3d000eadc",
"dc09d3e9-67ef-45c0-945b-6611221fbf25",
"eede2656-02ce-479d-a4df-6ec85c943a0c",
"e93a0c91-4501-4f84-9d89-04c9a2858df6"
],
"count": 10
},
"261": {
"chapter": "261",
"id": "22a3e8a9-f902-4882-b5fb-8aaaba1c08b5",
"isUnavailable": false,
"others": [
"a62ff6d0-9093-49b6-a11b-59136dc05737",
"cd745b0a-e3c0-4332-989a-f7a5534a79af",
"91d19298-e1da-4780-a09e-4e7debb19c29",
"cf3b8a38-df12-498e-947d-da4112576662",
"630b1107-cb0f-4f2c-9db2-a39c82ff61cd",
"fc19dbef-1497-4c29-8794-368f133455c6",
"36be78bf-166f-4e32-bf2a-9c0d8751ac69",
"bcef5e12-28bb-41eb-b59e-6705a236b226"
],
"count": 9
},
"260": {
"chapter": "260",
"id": "18e0dfb7-73b6-4955-9cc0-178729a5deea",
"isUnavailable": false,
"others": [
"2e548eb7-8a66-4756-b8ce-99e3336ecd76",
"8077bd64-7b1f-49a7-85ce-3a0d55b55a7d",
"5f776c0a-5e0c-462b-b4ba-8e1cf60fdc72",
"9625dd8a-74d8-423d-be63-d3af9ffc1894",
"e4185e96-06bf-4f6c-a9c3-2438b03313c5",
"50363f63-3fd3-426e-8c44-265039b47a92",
"6df41d30-0eaa-4b03-a2e9-019b7c4a2eb1",
"5a4915df-4c29-41a9-ad38-544ae56463ec"
],
"count": 9
},
"259": {
"chapter": "259",
"id": "56e0c04a-d441-4a54-8f88-362895e200e8",
"isUnavailable": false,
"others": [
"d1a882f8-6aba-4b8a-a7f5-c8586ac674cc",
"fd719a95-57b8-4846-b05b-f58e6c686457",
"9c9c9645-f95c-4988-839f-0791650145df",
"dd3f1139-bbba-40a0-a152-461e3148e553",
"2dd087ce-ac62-4f8c-b405-1efaa9dc479a",
"062623db-b9d6-465d-bf1b-2628534e5652",
"c22cddd1-36e3-470b-b4f5-c8473a3a3d8a",
"e9726b3e-b5e7-4cf9-9b26-f7febe71102e"
],
"count": 9
},
"258": {
"chapter": "258",
"id": "2f340bac-17b8-44dd-aeec-846dd9243b29",
"isUnavailable": false,
"others": [
"11b65fd4-aae1-4090-bf6e-1e9e40e22965",
"5e43b9fb-a682-4569-8858-8d205377f389",
"2bc5d999-574d-4e34-9280-865188c5b2d5",
"b33d7dbe-a263-457e-8095-ba1e5d2eea0a",
"d0061ebe-72d7-4f96-aff2-65aea0481267",
"ff18f1b8-9558-4c4f-b0f1-38bdff3dd72d",
"12b2b581-14af-4493-ae91-555b7ace4463",
"c97b4532-d1b2-42fd-ac3c-455a62389761"
],
"count": 9
},
"257": {
"chapter": "257",
"id": "2a83d20d-482d-445e-b1ab-b9071146c575",
"isUnavailable": false,
"others": [
"25f1d1a1-6446-4c3f-a35d-5b9e606a2da2",
"f6fd642b-fe26-4d63-a185-a9d649266dfa",
"11588a3c-5ff6-45c8-a8a5-43753de4970f",
"25316e49-37d2-4713-bbd9-5389bcbb3438",
"b401351a-e48f-4fe8-93dd-1b9ad985ebb1",
"ad6a6d17-1c06-47a7-bb95-7f54ea7dfdf4",
"18557cc9-f0e4-40e3-8804-ecf4fbefb9da",
"bb04e0aa-2b8b-4dad-b3d6-ebf831d63250"
],
"count": 9
}
}
},
"29": {
"volume": "29",
"count": 90,
"chapters": {
"256": {
"chapter": "256",
"id": "e11dad89-edf9-4831-9c6b-20255ca3c31b",
"isUnavailable": false,
"others": [
"8a12492c-8f51-4fab-bbd7-d95b2739362c",
"7c9cd3d9-6ac0-4c29-9404-b363dcbfca6d",
"c6d759c4-a3c9-4b59-a0b6-97421660eece",
"bf7cb5b6-8fd6-4e86-9673-407bb055bf15",
"a4c4d68b-224c-4dde-aef4-697b8ac274a5",
"84813e58-90a6-4fd6-8d6d-613a0227e2d7",
"eb045355-553b-40a0-8960-b2a925e6e3cd",
"e67dda53-d483-41ec-9cf5-c843b9473bae"
],
"count": 9
},
"255": {
"chapter": "255",
"id": "53d334a2-6ee3-439f-9d61-a1ba7fb058d0",
"isUnavailable": false,
"others": [
"f5ba9713-765c-46ef-b22e-3d93c0a1c4ce",
"f1a1c9f1-f820-438a-b4d0-35c05952801e",
"2582e0fe-5daf-4bb5-8412-af7639adf404",
"b983b65a-1342-4938-9e25-8ba583120388",
"cb25a02e-fe91-4462-a550-8a46a77d5767",
"9e04b998-6218-4c60-abac-ae08d9adc0fd",
"a1f7fc66-bbfe-4f38-abd7-7f301b46ea2f",
"b36d7d7f-7ae5-47d2-a818-1f411bad5fcb"
],
"count": 9
},
"254": {
"chapter": "254",
"id": "9eba80e8-d346-40ce-9e2f-a7d81aebe928",
"isUnavailable": false,
"others": [
"e6a08281-7508-4e64-8c86-78e4e74fe24e",
"ddf47e7c-d8ce-40d1-a2f9-3600ac7e91e8",
"00ba6b14-72ef-4a4b-8fa5-93915ab75f1b",
"779a4723-d27c-4931-ba09-54b8cebe1b0d",
"6438b69e-be1d-4f2a-8b68-6b9dd83bee50",
"971c624d-f5d2-4fb5-af8f-548f6ccc7805",
"9d0d740e-70a4-4d35-bf80-87ae1f2eb603",
"d5af989b-2fa9-477c-888e-81fe406a7c7b"
],
"count": 9
},
"253": {
"chapter": "253",
"id": "6687feb3-fbdf-45e3-8f5c-dc923b5efa21",
"isUnavailable": false,
"others": [
"3aef4a28-a946-4234-8148-5bb18b3de7db",
"336d9065-d38a-4459-96d1-2e9deacad4ff",
"76fb9aa0-d068-44b3-bc65-ec8e2ac99704",
"74e71040-bef9-4221-b9f2-52b998d64453",
"6adb678b-8cda-4fcd-8b39-f46daf93d2ab",
"8e694517-d40c-4c61-a3c7-9ea623090289",
"98de0c68-7a93-4ff5-a260-648be6d2a2e6",
"d47bb267-6474-4550-9087-5abdd2df3a7b"
],
"count": 9
},
"252": {
"chapter": "252",
"id": "548014c5-45bb-4660-a6b0-7b3f2fb9ea71",
"isUnavailable": false,
"others": [
"aaad41c7-8cce-4c40-906d-adbb51f7690c",
"f3545f95-698d-47b8-a723-197189a9295a",
"448a5ba9-f256-4ffc-83cd-57560bb73fc0",
"6661f4d9-85b4-41f9-bbe2-e53b75baa169",
"bba4ee75-e845-4838-82bc-31407e7480ec",
"044ea066-c759-4385-92c8-831e24371234",
"47b49dbb-09b8-4d17-a1ad-6362742614c9",
"7e49a1d5-be61-4a34-8a1c-5a2210e558d8"
],
"count": 9
},
"251": {
"chapter": "251",
"id": "705fe706-22d0-41aa-9dd5-496e31e1d457",
"isUnavailable": false,
"others": [
"3159468b-296e-4741-b5a6-d053b4991652",
"47653c1d-d206-49ce-8b94-ee212ca56ba7",
"48ef44b1-69c1-4fff-85e8-dc9121919f42",
"50d47c89-8180-4777-950b-8257df90b651",
"e38772d6-33d9-4712-a321-63895efff77b",
"d9ab3b1c-8664-468a-b72a-ed54ac6c667e",
"627de944-3671-4723-94dd-5e213f74d9bf",
"65fc0d4d-30f7-4d48-9a4e-1f21cc7509e4"
],
"count": 9
},
"250": {
"chapter": "250",
"id": "2bd8d62f-1722-4ec6-9a63-30dcfd79a073",
"isUnavailable": false,
"others": [
"60af3186-342f-46ce-9ce2-fdf31de70ed2",
"b3808781-0dd0-4235-9fd2-2119691e9268",
"680db0c2-52e0-4d76-8c9b-03be1a2d0c88",
"f5eaa754-dd99-4079-9c16-bbc051fdb795",
"5599dd06-a174-4fdc-9a18-ef97d48ed9e6",
"8fa95628-70a0-47f9-abdd-d61937ad1248",
"92f2571a-73bb-4c90-85c8-f5fe0a992315",
"e530cf10-8b49-4a11-b9c1-dcfbf8d198c4"
],
"count": 9
},
"249": {
"chapter": "249",
"id": "2eb4f8bf-3b5b-467d-9025-ca09d7f9fcc5",
"isUnavailable": false,
"others": [
"d72847b1-5213-4e4a-bad9-0c6788e51330",
"30602a11-b4d6-405d-925d-58135365a818",
"4edf142c-ba3f-46b8-b7cb-62bafa70da0d",
"4bbc3998-b038-46e8-b0e4-fcd1373c31fa",
"6e32bbaf-0fc4-4de3-90eb-4600170b9bef",
"93ca35cf-141a-4870-addb-7d790c04c6cb",
"d3262fa0-ef31-4f80-8457-bfa72a02affc",
"b5a88134-1311-4137-8df5-05f652a06bd3"
],
"count": 9
},
"248": {
"chapter": "248",
"id": "14f91072-ac89-4caf-97f0-8ed6f077ad2d",
"isUnavailable": false,
"others": [
"5af21a42-a5d2-464c-b26e-4e5087f45f3e",
"bb751cae-c747-4b81-8ff7-caaa43dd7bda",
"473399e0-2c8e-4d28-994f-b99992e84028",
"4089d7e9-ea67-428d-8b24-330eae7204a5",
"a02b4cff-a999-43ae-9aab-2d9e62dfea81",
"e3ded454-a338-4f5e-97ea-8f07ac78e497",
"b05b9369-e1c0-4f63-a188-00bfa0293e11",
"fe61c3c6-6cd1-4d66-9219-66e51abef97b"
],
"count": 9
},
"247": {
"chapter": "247",
"id": "25342778-bc5c-4328-8167-03ac50bb3439",
"isUnavailable": false,
"others": [
"81972912-04b8-468c-83b6-39bd77f8001d",
"ac1b3204-c2f8-4b2e-82a3-34576d3952b3",
"7aed7bf0-afdd-46e8-ad2e-54355242b4fa",
"917f02c2-c59f-4cea-af56-3b67d4fd960f",
"73b20311-a3d1-43d7-86a5-3152cb7295de",
"90c182ce-eb5e-4eeb-91ea-f035e0cc461a",
"9dfbf5fd-5911-4fb9-b8df-cc5fd6d225cc",
"d899d6d9-4433-4f79-9541-43d0b57bbc36"
],
"count": 9
}
}
},
"28": {
"volume": "28",
"count": 100,
"chapters": {
"261": {
"chapter": "261",
"id": "aa8a1c26-18bb-4696-addc-3899cff793ad",
"isUnavailable": false,
"others": [],
"count": 1
},
"260": {
"chapter": "260",
"id": "8e7459e1-2461-499f-af3c-19158f37e7cb",
"isUnavailable": false,
"others": [],
"count": 1
},
"259": {
"chapter": "259",
"id": "8f36d51d-a45e-415b-8f7e-b1b6a02e2918",
"isUnavailable": false,
"others": [],
"count": 1
},
"258": {
"chapter": "258",
"id": "aefe7237-f602-4bc6-8df8-d32e65ca805d",
"isUnavailable": false,
"others": [],
"count": 1
},
"257": {
"chapter": "257",
"id": "7e2cd371-46a2-4a95-922e-ebaa18f837be",
"isUnavailable": false,
"others": [],
"count": 1
},
"256": {
"chapter": "256",
"id": "0203da00-f122-4dd6-aa09-8e9e9269990a",
"isUnavailable": false,
"others": [],
"count": 1
},
"255": {
"chapter": "255",
"id": "e7b027da-d89f-4739-8b3d-39723628daab",
"isUnavailable": false,
"others": [],
"count": 1
},
"254": {
"chapter": "254",
"id": "548b4345-d165-4078-98e2-7becabbc7d41",
"isUnavailable": false,
"others": [],
"count": 1
},
"253": {
"chapter": "253",
"id": "ec94b7e6-70ff-4547-92da-8626cd3e3671",
"isUnavailable": false,
"others": [],
"count": 1
},
"252": {
"chapter": "252",
"id": "b6bda0bf-13f0-4731-a7c8-ce99420fb020",
"isUnavailable": false,
"others": [],
"count": 1
},
"246": {
"chapter": "246",
"id": "87296f6f-1980-48c0-98ed-4323e979997c",
"isUnavailable": false,
"others": [
"dd1dbcda-6a11-4c29-9443-9cf6f9b2cabc",
"7c6163f5-2b9d-43e2-8f70-92033b9b27d1",
"bbe5951b-4c84-451f-9708-4520281d2350",
"019d3bcd-f098-4f0c-80bf-3f29c49ef0f4",
"84b9e880-8a72-4ce8-a294-3e5c839aff63",
"8c71fb4e-c35e-4713-bc3c-deb6629e90c4",
"dafbaedf-4c4a-4a83-987d-06f84bac35e7",
"f508f451-b48a-4187-a6fb-b2925eecc200"
],
"count": 9
},
"245": {
"chapter": "245",
"id": "117bb9dd-0754-4ad7-9773-220becbca81c",
"isUnavailable": false,
"others": [
"6daeed65-2d82-419a-b7e8-38853c3227d6",
"11d332d1-d91e-4d5b-a48a-919f047065b0",
"71a7d434-53c5-412a-890d-7c4723988f43",
"7c82e061-4b5e-450c-ae9e-9ae229bbecfc",
"3c798c49-8fcb-40ff-9327-b62a9dca4515",
"8d415a48-94ad-49dd-9b02-80b529b53bdd",
"cfe82323-8c9f-4fbc-8437-e370c65e0a79",
"e451eb8b-ac5a-46f4-bec0-8589c4d9bff8"
],
"count": 9
},
"244": {
"chapter": "244",
"id": "a5b3215d-85a4-43b2-ad0d-f2e29024eb00",
"isUnavailable": false,
"others": [
"ed93cb99-33a3-4b73-b287-07abb9a3a8cd",
"4e822566-a205-499a-a01f-3dad4d086511",
"4c915e64-bb2a-43be-ab78-199dfa329c25",
"8ce4be28-c39f-4ffa-a8a2-bb85adc97557",
"c675146a-9d02-4c9a-a855-736a0ac775a3",
"971839b5-9bb4-428e-ba32-5aa8beb3adf9",
"bfa423dc-e805-4c3b-ba42-0b31904ce7c8",
"a2e8b2b0-170a-44b6-835d-b2901629fddd"
],
"count": 9
},
"243": {
"chapter": "243",
"id": "44cd2448-338b-4439-9225-c775ac47ef83",
"isUnavailable": false,
"others": [
"71bc0adb-e1dd-41df-ba71-73a44f395a18",
"62f1b000-0bdc-4fff-ab09-d1f2dc143b2c",
"547cbedb-786a-4126-be3b-593d17149cfd",
"c3aae79b-2140-452a-aebf-0ece7921f71c",
"e8024ccc-9c82-4ee0-8dd7-0e464a639851",
"3e21b51c-0394-4872-83ad-0908c29fbd1d",
"3142f49f-6481-44a6-a6f0-2f147e63e9f1",
"bde7c368-e5c1-4537-b7a4-818264aaa1a3"
],
"count": 9
},
"242": {
"chapter": "242",
"id": "0ae8bea9-4a9a-492a-ba94-303c58607cb2",
"isUnavailable": false,
"others": [
"11858c8e-b07b-48a4-99a2-2192d48c08ee",
"6f0322ec-ccf3-463d-ae1c-ad8d26ff4351",
"65108138-6060-45db-bbb4-b30d8bbebb0f",
"ef610fc1-a407-4f38-90a8-48d2f5cbef3d",
"409ad569-1be6-46de-b4b8-76d632673677",
"7d78aa8e-716b-4944-807e-41c35ccf4ef4",
"349e8947-ec8f-47c3-a94e-76aebcc47e09",
"ff38505c-6959-48e3-9cc9-2c4553f69018"
],
"count": 9
},
"241": {
"chapter": "241",
"id": "43ffd695-b8ac-4fad-85bf-585377bd5d37",
"isUnavailable": false,
"others": [
"fe9f6db0-19cc-46da-bca4-e867fbe4264f",
"4fad895e-c96e-4ea1-93bb-a27b36eabf58",
"67fcd7b8-7a62-4a44-8e40-ec860915e8d6",
"d40d98ec-f235-4f74-94c6-9ee4552f4653",
"36ac2bcb-cdbd-4a8c-bfab-5500fdb8a057",
"4adefecc-f93f-4498-9856-1c3c8f6b0753",
"6c6d4b2a-51cd-4f99-9aed-e05b27a7ec8d",
"a0583618-4129-4c76-91fb-4110a99d72e6"
],
"count": 9
},
"240": {
"chapter": "240",
"id": "80915b61-882d-4f4b-8b4d-8bbababa9e3d",
"isUnavailable": false,
"others": [
"c6ed2497-1613-4c8f-a9f5-7920827552eb",
"a43359aa-4fb4-4504-9042-ff07fa0ad1ad",
"1eb205a6-8361-4f4f-a1a2-dc44dab252a2",
"47f2d0ed-ffe4-45ac-8607-ea240cc5aeba",
"7a066968-943d-4411-b2ab-157c5db788f5",
"8bbdb2d8-9328-4fbc-9d3a-1042cc66b56d",
"a3b860df-9b46-424d-b423-66050c2f7898",
"fb22cb84-7715-4d78-8014-dc16fcb9698f"
],
"count": 9
},
"239": {
"chapter": "239",
"id": "0aafc9b3-013b-4fae-b09a-a4f4c7062706",
"isUnavailable": false,
"others": [
"19cdc8bf-8b0a-4004-b4f2-6a3bfe07eb1d",
"c7b6c69f-433a-40ac-9006-315cede4bbc0",
"d533c43a-d86f-48f6-ac1b-296e6aa249dd",
"178944fc-af98-43e1-9998-a87065145d75",
"0ff037bb-b280-4b20-bf0f-5f5bd211cd18",
"2a847edc-a65b-4d56-9034-123f592f87b1",
"d6e36b50-bd05-495a-bcf3-af62b9e95d2d",
"99f0f2f8-59b4-435a-b7d1-969acdfb7491"
],
"count": 9
},
"238": {
"chapter": "238",
"id": "06d48f4e-247d-4bf7-9012-1b8c5a7c5ba2",
"isUnavailable": false,
"others": [
"2088e732-3f02-41d5-b7d5-abfe75fb7333",
"611dcea7-466b-49b9-8bd3-2ae10a6b7bb0",
"bff1083e-6028-4054-ab1d-78418e0eced1",
"c51f0cdd-2dff-4fc7-b0c1-9b590e5e713d",
"f21fef42-0f8e-4c55-8f7f-2c2f6bde7d86",
"271bee2e-1cb8-4a92-98d4-1f18d7443e7f",
"f2f7b03b-8894-40ed-9725-72f2d9019eb4",
"2bb694a3-eb00-4481-8a63-e9f8d6df3ed0"
],
"count": 9
},
"237": {
"chapter": "237",
"id": "bde10a7a-fed5-46c8-b98f-a0eeaaf72b6b",
"isUnavailable": false,
"others": [
"e2e477bb-2d17-4349-8a3b-b711694dcde8",
"d79c7872-d5e1-46aa-942d-8a3ef291eeb2",
"5d3b6c00-3b6b-4979-b888-886031773c1b",
"a28fd42d-6e07-4fe6-b74b-0c7251835ad3",
"c0b88247-9996-422a-9a89-0099f3483536",
"e3e66a83-e808-4fda-8e1e-0fa882ab1096",
"44d58011-9743-4be1-b67a-76fc1c9de8d0",
"6e2c02a6-151a-4e5a-b46a-5eeaa7921460"
],
"count": 9
}
}
},
"27": {
"volume": "27",
"count": 100,
"chapters": {
"251": {
"chapter": "251",
"id": "1e1efd80-89f3-427b-97b7-64a3cedac060",
"isUnavailable": false,
"others": [],
"count": 1
},
"250": {
"chapter": "250",
"id": "78346d49-e32c-4626-8e62-b65d5afe1c02",
"isUnavailable": false,
"others": [],
"count": 1
},
"249": {
"chapter": "249",
"id": "d43949be-9824-488c-9265-6c62157ac29f",
"isUnavailable": false,
"others": [],
"count": 1
},
"248": {
"chapter": "248",
"id": "be1082d0-ba08-4a31-903e-d1c2383d20b0",
"isUnavailable": false,
"others": [],
"count": 1
},
"247": {
"chapter": "247",
"id": "c3e03e88-3109-4526-97b9-343fa4e634c4",
"isUnavailable": false,
"others": [],
"count": 1
},
"246": {
"chapter": "246",
"id": "3c02c188-6836-49c8-bacd-01af8a893156",
"isUnavailable": false,
"others": [],
"count": 1
},
"245": {
"chapter": "245",
"id": "15b82da5-c2a7-4f14-9a65-fa0ed485a808",
"isUnavailable": false,
"others": [],
"count": 1
},
"244": {
"chapter": "244",
"id": "3ca74b2a-1b48-4c36-9582-e08fb52bd142",
"isUnavailable": false,
"others": [],
"count": 1
},
"243": {
"chapter": "243",
"id": "cb42f199-a69b-4423-9a57-76ba09030e6a",
"isUnavailable": false,
"others": [],
"count": 1
},
"242": {
"chapter": "242",
"id": "ecc572f3-48c6-44b9-b83d-3be0b0a5eddf",
"isUnavailable": false,
"others": [],
"count": 1
},
"236": {
"chapter": "236",
"id": "22b24df6-5f8e-48db-96de-68d6481c4c79",
"isUnavailable": false,
"others": [
"57293ddc-ba18-4eeb-a7a9-994a6e6eaf64",
"72f6881b-1f45-4377-8887-2a49258b5d72",
"bf8e79b0-8a95-4880-8994-f41ee1e7990d",
"fc8e128f-6d10-4bbc-a2db-6f582bba3b1f",
"e620942d-539b-49ca-baed-f3459f2c4400",
"6a2d30c5-980b-4dd8-a0ce-675ac1bdf3c3",
"838051be-eeb6-4e09-a4dd-5f5a5218774a",
"d95e4b8e-5bcc-4fa1-ba64-50ea5132c3b5"
],
"count": 9
},
"235": {
"chapter": "235",
"id": "1db1924a-1112-4bcd-ae7e-d36f9c47ffee",
"isUnavailable": false,
"others": [
"0e8d669c-ba16-4144-9901-fc2f760cdf9e",
"6fc61f23-4ce2-442b-9332-1f88b81e5663",
"b044bbf9-f6ab-49cb-bbe5-217af244d968",
"5e3c86e9-edf1-4468-bb73-10c608c5264d",
"2e57ace6-8839-4fc8-9a91-3e926314ed52",
"b2fb5469-11b2-4bbf-9d87-25da084f99af",
"eadd7a3b-4047-4930-8fe1-2a3dc3bbeba6",
"e4b7ce26-59cf-4dbf-95d3-55c1b11824db"
],
"count": 9
},
"234": {
"chapter": "234",
"id": "20ba49b4-4bd4-4a26-968f-4a375054838b",
"isUnavailable": false,
"others": [
"6f7f33fb-177b-411f-977c-8e342780f574",
"c952c456-34a9-455b-96ee-0a1836a59c9e",
"b83f467c-18f0-42c0-8151-9ce7516f4065",
"37e38f3b-819e-470e-ae43-4e62e7ae75e3",
"5a9dc71d-519e-4212-b796-c4fcee025ec7",
"55a4a238-6793-4a05-a3b5-406b36654e51",
"bd0cced1-1b65-42ab-9c12-89aba5c74310",
"ccb67668-54d9-4ffa-80a2-42ef3eca21e8"
],
"count": 9
},
"233": {
"chapter": "233",
"id": "724f86cd-4397-4077-bf6b-cd2828dfad98",
"isUnavailable": false,
"others": [
"adb34c6c-8ea8-47b0-839c-6330ce568d60",
"1b6ddbc3-0868-43e2-8d68-a8997d4bfc5c",
"98c1828a-2198-400f-8546-8e1e7e2fb1ce",
"4c6287e6-11bd-496b-980d-1838ad33a38a",
"613736f1-d6dc-420f-99ff-b19a4002647c",
"d2cb7438-efd3-467b-aea9-e606939f64aa",
"c4949625-1067-48e3-a8d3-192470d54bae",
"ece8d368-1620-4f5b-9f1d-5215f7a54693"
],
"count": 9
},
"232": {
"chapter": "232",
"id": "a4c9b5a5-b501-424e-a43b-410495a9215b",
"isUnavailable": false,
"others": [
"fafb2bad-0c76-4ac1-b0c4-b6113e010b5d",
"dd6ff112-3fcd-4f00-9f6e-26d10390b835",
"3b1ff9b7-21a0-4ec1-9c6c-df545a57e59f",
"865518b3-6e68-4f46-ae27-40fba201e645",
"1d515aee-bb44-43ed-a8ce-585e4e996898",
"1e0175a9-ff79-4c4b-955e-53b88c7823bd",
"1d083f30-59c2-43bb-9aa2-e923ab175efe",
"e6bae7db-93db-42f6-81ad-e4ab301a551e"
],
"count": 9
},
"231": {
"chapter": "231",
"id": "075439c5-d554-4eea-a3e2-9106de8b29a3",
"isUnavailable": false,
"others": [
"44093448-a953-451f-8977-28687edd59e4",
"4d402012-3ac1-4f2f-8603-2f029cc99035",
"9e0d9f6f-e185-4fda-8ed0-a402ac91e29a",
"dbf7d0de-5da7-46ce-91d6-03c29d8c47ef",
"28b8554a-fc04-4752-b965-5770419b8899",
"51d2aa37-5591-460d-8a32-ed476b34e07f",
"0e1163a4-1f5a-4107-8e2c-e3791cb7a9cf",
"bce4976d-988c-4b44-9332-59611f74574e"
],
"count": 9
},
"230": {
"chapter": "230",
"id": "fe445341-edc7-42b7-b762-4c8cbd8666ea",
"isUnavailable": false,
"others": [
"497773cf-5006-4272-a1d9-38068be5f121",
"8738d8a6-2aa5-408b-a57a-8d4e78449929",
"7d09da65-059a-4450-be3b-4af6a64f12a8",
"a939b0f7-79a4-4733-aad9-8d139b0e1518",
"f5bb597f-96c4-44fb-9fe1-3fd46e190bf0",
"314b7262-5df0-4fc5-b418-3af33ff8cd8c",
"832fbbc4-eb6a-4581-8040-f3b399413fad",
"e45c9ea8-38b2-4afe-b1d8-17b36a925460"
],
"count": 9
},
"229": {
"chapter": "229",
"id": "0cf31a6b-d348-4f77-bf66-82253a228a89",
"isUnavailable": false,
"others": [
"9ff1821f-9e93-40db-88c8-008fdfe8c3cb",
"3f12d557-ebfb-439b-a744-700ea40e1b34",
"a0a464f6-cf29-4a4a-83c4-ea1a70267160",
"e6fd673d-a724-4207-99dc-0fbf6c76ae40",
"f4722dca-f2de-4b42-80dc-1e8f4e9b4541",
"64754f38-0208-461d-8269-65ab621b7394",
"75d8b745-cd84-4fed-aa67-47cbbc34b330",
"db55b91e-90dc-46ea-8633-522318e44327"
],
"count": 9
},
"228": {
"chapter": "228",
"id": "0e37136f-4429-4589-99e1-a453b7a5f996",
"isUnavailable": false,
"others": [
"c333027e-10ea-4f56-ae6b-9dc5e38b0d03",
"02583398-37c5-433b-84ca-36a8ede71f5d",
"635f5fda-1c26-4abb-964a-2c4b8371a0e3",
"47a3726b-af9a-44cb-967e-9113c3daaa97",
"56f2a16a-a9da-4af2-81f4-cb6dc4ac62cb",
"e7f3a0b6-3034-4472-a894-f9a323ad8112",
"fa977d5e-5a67-4185-b5ec-cac8511ae78b",
"eec593d1-df9f-4293-a005-ed98d5222eff"
],
"count": 9
},
"227": {
"chapter": "227",
"id": "cede9ea9-0f61-4a86-95a8-df94608ed925",
"isUnavailable": false,
"others": [
"f899c2a3-eb95-4536-af25-7665ce2eaf32",
"81404ed9-8c51-4ffa-83c2-957a748afa6d",
"6d29cb2c-8358-440e-8731-f009850a8b5f",
"df6f75e4-687e-4550-8982-8c02c389fe7e",
"5f9cc94e-906f-4c54-abbe-84deddf9d091",
"b86faeb2-ad6e-4227-84ee-da304f233116",
"c7b0a394-8848-4b44-af19-ab243c078784",
"df45ab43-b121-4181-9e09-e9c0ab298c29"
],
"count": 9
}
}
},
"26": {
"volume": "26",
"count": 100,
"chapters": {
"241": {
"chapter": "241",
"id": "37bcf7ed-c017-4b18-9603-effad586e6de",
"isUnavailable": false,
"others": [],
"count": 1
},
"240": {
"chapter": "240",
"id": "2ca875c2-b9cd-4f6a-a4de-5a022a97ea01",
"isUnavailable": false,
"others": [],
"count": 1
},
"239": {
"chapter": "239",
"id": "b787063c-cf7c-43b9-81f2-3b50635217bd",
"isUnavailable": false,
"others": [],
"count": 1
},
"238": {
"chapter": "238",
"id": "c93d8762-935b-4255-b8f5-5352e47b4b75",
"isUnavailable": false,
"others": [],
"count": 1
},
"237": {
"chapter": "237",
"id": "ccdb9f56-86e8-414c-81ed-233acdd33b05",
"isUnavailable": false,
"others": [],
"count": 1
},
"236": {
"chapter": "236",
"id": "a36b18d0-83fb-46cb-b38e-838e7538d5f8",
"isUnavailable": false,
"others": [],
"count": 1
},
"235": {
"chapter": "235",
"id": "74cc51d5-09a7-42c2-b2a4-d115b803ff31",
"isUnavailable": false,
"others": [],
"count": 1
},
"234": {
"chapter": "234",
"id": "30b4a360-ab6a-47da-867f-72c0f1ae5a27",
"isUnavailable": false,
"others": [],
"count": 1
},
"233": {
"chapter": "233",
"id": "cd28cd18-343b-420d-a8f2-5687a17307df",
"isUnavailable": false,
"others": [],
"count": 1
},
"232": {
"chapter": "232",
"id": "37571bc0-b1d8-4ab9-9c01-7056362c713c",
"isUnavailable": false,
"others": [],
"count": 1
},
"226": {
"chapter": "226",
"id": "90b3667c-e4a8-458a-9297-2b18bf69e791",
"isUnavailable": false,
"others": [
"dccb3d56-5011-4e36-95b1-93b72e3861a5",
"fcee3a56-7d34-435b-a6d7-b7e0521e6343",
"1f29d652-8925-4b60-99de-019be65f0079",
"0b15a7c9-02a4-494a-92db-e49a20a60d25",
"1ad6130c-d4a4-4b16-b009-7e35bd024b72",
"90991f88-7a7b-4faf-9f1d-a6e63741fdcd",
"d1a87687-f17b-45c7-9376-9291ba0c6d78",
"5351098e-f503-4524-b40e-39a7a9c6b753"
],
"count": 9
},
"225": {
"chapter": "225",
"id": "8207bf14-ae19-4b9a-9343-bd203b2013cc",
"isUnavailable": false,
"others": [
"5b31d118-1c0f-4c26-9cf1-0b7b89845000",
"bbf6d5ca-7e95-435a-a950-f21806a6084d",
"2a6f35a8-942f-4aff-9599-cd01e2c1666d",
"e0547903-e93c-4015-a141-fe9b702528b3",
"f5b23b7a-4dd6-4724-b14f-a0e01927b7db",
"24357d4a-7013-4235-bb62-efbccf412340",
"2d399638-f76c-4b1c-913f-224d508e8c31",
"74caafbb-7e1c-4fd7-9cd8-0a86aca7646b"
],
"count": 9
},
"224": {
"chapter": "224",
"id": "28621c10-1d3b-43dc-a559-e2655612856a",
"isUnavailable": false,
"others": [
"848461c8-c203-44f5-aa5c-ef3dba422622",
"bdbdab48-124d-4fdb-93ea-41213245f458",
"15b356c3-cea4-4410-a57c-dc8d7ce52d96",
"42e4af05-7d4a-42a3-b1c8-ca379a647c1a",
"e0631cce-6605-4847-9b78-b8f853e66ed3",
"1f6433ad-634f-486b-bfb6-10cec5e6d9e3",
"c1f814d8-57f3-47f0-b8f9-4270003b0303",
"f914cf86-d5f2-48d4-86eb-d41420ebb27c"
],
"count": 9
},
"223": {
"chapter": "223",
"id": "03d66fcd-efe6-4f76-a50e-371c956f2fc6",
"isUnavailable": false,
"others": [
"a5627b20-a094-4944-9088-053ce8532b58",
"1f576d5f-8c62-4572-a5f6-e467654e5855",
"c7fe6a67-a133-4d6b-bf17-b1c7dcf2a245",
"d9841ab0-c8b5-4fb2-b950-b64f4af978bf",
"200e3a20-c47b-4448-a1ff-e0e32ce7d5ba",
"6b3b7202-a3f6-450a-b2d8-7bdbd99fef17",
"a905e2eb-d187-4740-adcc-deb2a88b7fd3",
"d0ce954a-5083-45a7-8a09-18cef2ad9307"
],
"count": 9
},
"222": {
"chapter": "222",
"id": "6264b5aa-4609-4ec6-8433-b1d0d2041656",
"isUnavailable": false,
"others": [
"7b7145cb-dbdd-4b2a-961a-3fa6d511ca29",
"f8ef1bc2-62cd-472f-a17a-b9fa5278d1d6",
"84b77ba0-59e6-4380-88c8-c4798787f4b6",
"d869b523-a206-4651-b81a-857a35c47a50",
"2429434c-536e-46bc-bc5d-795ce39c1d21",
"39380053-b3e0-4fe6-94cd-9b6c84619b40",
"992694f9-f0e9-44ec-adaf-144200f09e08",
"e961b172-919b-4cea-b017-bf451696d6d1"
],
"count": 9
},
"221": {
"chapter": "221",
"id": "052ea077-0fa0-4aad-a698-246410383d64",
"isUnavailable": false,
"others": [
"a5237403-d99e-4e9f-b5a9-fa2af078d12e",
"85cc1890-a2d7-400f-98ac-b05449b59c02",
"9c3af677-3010-4f6d-9258-231164453a11",
"af231b8e-b374-45db-beda-0e6383c6b6bc",
"25369b30-af23-4a2f-8f02-b00c60500546",
"800b4af1-720e-4ebc-bc9b-c079b97383f9",
"b620d313-ff68-406f-8e6b-b99328e3541d",
"9bbd3267-2308-4688-9c9b-c2b85d4dcf2a"
],
"count": 9
},
"220": {
"chapter": "220",
"id": "29cf5d45-4509-455b-b4ca-3fb46ac5904d",
"isUnavailable": false,
"others": [
"58dd0d1f-adae-4f7d-bc6c-07efc23d0b0a",
"408a38b6-4f48-44d3-804a-43df3a02ce77",
"ae610241-4f4d-44fc-a713-476757017425",
"dbbcb17c-b99c-4364-8343-a43007f3e2d1",
"879f8c36-7e53-46cc-9072-6578f814eb94",
"02f7fa35-4e68-42ed-89de-b7c8f53b52d4",
"493c5822-54ad-4472-a8df-f42451a4a85f",
"58d7ed96-b817-471b-8ebb-f8abd33edc85"
],
"count": 9
},
"219": {
"chapter": "219",
"id": "7e6674a6-8369-4f06-88f6-4366b926b3bf",
"isUnavailable": false,
"others": [
"5662406c-99cf-4ba4-a7e0-5b9929c0fb75",
"78560325-b213-457b-82de-ed0ec946876f",
"b76f7ce4-144f-4fc4-b08c-3c794911a158",
"172ee3e4-99f2-4f8e-888c-ef86abfbee45",
"0cfd818a-48ca-44b8-8a2e-288722581918",
"04e0dac1-6cca-46e4-ae5e-36e3cce0bf32",
"5cbdb413-46aa-485d-b74b-0ef33b56cd68",
"7616a0bb-f6d6-4894-a57b-574e265c9954"
],
"count": 9
},
"218": {
"chapter": "218",
"id": "76c39236-f846-445b-a0c2-69297ba5a75b",
"isUnavailable": false,
"others": [
"db459061-05f6-4fb3-b9e3-b8405e7ac91d",
"1f33a543-3878-4efa-bb9e-4e0716dba225",
"8e23567e-3c5e-4fda-921c-236c4c1c979a",
"ac117b2a-4723-48ba-8470-4fc07ab0208e",
"1bc4f441-9f80-4279-978e-ac9fc9ba385b",
"33991854-6174-4906-bf01-85cb379efdc1",
"99d83ad0-e6d7-4769-ba80-752f32be581c",
"ebf66ea2-d685-40fc-9220-c6e732614721"
],
"count": 9
},
"217": {
"chapter": "217",
"id": "322687af-d25b-4128-b4e2-337831fa9649",
"isUnavailable": false,
"others": [
"7a32e293-fa25-4f70-a93b-a8237a462a40",
"7fb206ce-c5f2-4358-a305-6ed9c0123178",
"ada4f0cd-6068-42bf-aadc-d1a178b269f4",
"fa7d6043-5991-401e-a4b7-40a7ed54c568",
"1efac268-d35a-46f9-a6e0-d2d6f7b395b1",
"1f9d0d75-ab4e-40fa-8545-035407e3b452",
"62730935-6188-4f7e-9044-e5140ef50799",
"c6bce8db-6b9b-427e-80d3-75541217da6d"
],
"count": 9
}
}
},
"25": {
"volume": "25",
"count": 100,
"chapters": {
"231": {
"chapter": "231",
"id": "8c573edf-a4ed-4ac3-94b4-e107d9f7d9f6",
"isUnavailable": false,
"others": [],
"count": 1
},
"230": {
"chapter": "230",
"id": "3eb77164-d2aa-4c3a-80d3-49f528f558f2",
"isUnavailable": false,
"others": [],
"count": 1
},
"229": {
"chapter": "229",
"id": "67f965fc-0093-4a36-b662-bba61998a414",
"isUnavailable": false,
"others": [],
"count": 1
},
"228": {
"chapter": "228",
"id": "cd1088e8-c05e-4ee2-8937-d49454e93eac",
"isUnavailable": false,
"others": [],
"count": 1
},
"227": {
"chapter": "227",
"id": "9753f847-548c-4e4b-864f-413fec551069",
"isUnavailable": false,
"others": [],
"count": 1
},
"226": {
"chapter": "226",
"id": "d5369e10-c722-46c1-a0e9-62e125709481",
"isUnavailable": false,
"others": [],
"count": 1
},
"225": {
"chapter": "225",
"id": "8525d944-e158-417b-a500-4533a2f821a1",
"isUnavailable": false,
"others": [],
"count": 1
},
"224": {
"chapter": "224",
"id": "273868d7-6187-4518-9e53-d7cf60690bb3",
"isUnavailable": false,
"others": [],
"count": 1
},
"223": {
"chapter": "223",
"id": "712e842e-e50c-4b6b-8b47-8c0f672e90d0",
"isUnavailable": false,
"others": [],
"count": 1
},
"222": {
"chapter": "222",
"id": "7637ff9b-d018-4944-a868-66a58db3952c",
"isUnavailable": false,
"others": [],
"count": 1
},
"216": {
"chapter": "216",
"id": "41b072e4-0002-41d5-981b-02ee55587002",
"isUnavailable": false,
"others": [
"251826a1-086b-429b-bdd4-490aa494b4b0",
"aaaeff4f-5b41-4978-9a24-25f28b59266e",
"db0eba7a-e6e0-4f2c-97a1-2b363f34ac07",
"05050de0-59de-4f2e-a68b-9ddf01c8b887",
"18b02237-f4de-49a5-9226-4acef8b9ef57",
"83ae1b4a-a52a-4f06-92cb-2117710fc152",
"7ba0449d-89ba-4720-9e61-11d788e7e731",
"4bba2954-da76-496d-9415-50fad84ed626"
],
"count": 9
},
"215": {
"chapter": "215",
"id": "6fab4003-8174-4b65-93f7-afde073c111c",
"isUnavailable": false,
"others": [
"5c13cce6-64f9-4bc7-a5f7-d747d4c6cfd6",
"cf25d98e-4b3a-4ed1-bc7c-40f08c5e8b65",
"8144a024-8fd5-4ed4-8eca-82b60695a167",
"0aa59503-28b4-4046-8e03-84548eb58fa4",
"11417609-9326-4355-bd34-33cc4490de08",
"04ed7ab1-68b9-4b71-b4a9-572d2c97a874",
"4d040114-cd7c-43ad-91e2-1a8be9d33438",
"e3bec881-f828-4fef-a985-954878fdd136"
],
"count": 9
},
"214": {
"chapter": "214",
"id": "243d9289-1105-4eed-93ad-e05ec24b5e4f",
"isUnavailable": false,
"others": [
"4351a0f7-402e-45f6-a0c5-f804b0fdb00b",
"25152cc0-9f63-4743-9b5c-b4cf6f3cb9fb",
"5573f631-76ce-4904-ba8a-47da16d1f8a9",
"db78e42f-2a53-49c6-9fbc-4e0cd7fef328",
"7fe5ce99-b947-404a-baa7-d853b7078c1a",
"94e2ea7e-c1bb-450c-b058-2694354a829a",
"d306feef-0b39-4ff2-a6ec-5d5fba386708",
"fb9693df-9a11-4413-83da-14ebb66f64db"
],
"count": 9
},
"213": {
"chapter": "213",
"id": "50a43aed-3881-4705-97e3-dcc5e1037ae5",
"isUnavailable": false,
"others": [
"ab321ee5-4794-4e99-a73d-5c09396d9152",
"b9a1a04a-1e0b-4f2e-86eb-2aa74a59ac8d",
"d0f071d9-76cc-4904-8e37-9f89f79174d2",
"31436409-5ff1-4931-ba64-c6fa209b16a0",
"933b6463-bdaf-4d75-a1ac-749360baeebf",
"ad60c375-48d7-4cce-a516-d644124a9e92",
"852b4389-96fc-4588-8455-e337872d2f49",
"da4f416b-666e-4f8e-b275-a4193e52e02e"
],
"count": 9
},
"212": {
"chapter": "212",
"id": "296fdc71-36aa-4315-b7eb-be6ecc7f05d9",
"isUnavailable": false,
"others": [
"08a67a10-95b4-4fe6-9246-38d17de3a22f",
"a51e2d08-d8d3-4486-9194-874e274efa59",
"a068e98a-6473-44e3-a889-5a9cd7b28c12",
"5df96c1f-9c03-4940-a633-3fb22a074dad",
"77a7f7e0-6fe6-442a-b63c-ccf6f955a8ec",
"16102cd6-47a4-4f95-8009-b2d2fd54ae9f",
"92ac555b-93a4-4429-8ea5-5e40200da169",
"bad6302e-cef8-4e94-aa15-aeca69d06440"
],
"count": 9
},
"211": {
"chapter": "211",
"id": "6a340bbf-ccd7-44c8-a6dc-0fc8d8c719b1",
"isUnavailable": false,
"others": [
"71f1aab3-e416-4fad-b2b8-f5844dbafc1f",
"a76c7481-ea6b-4880-8610-b9e292f284af",
"c367146a-e05c-4bb9-bd1d-366fa6f9c5a4",
"9a79bf08-8df5-4f40-9006-659e70fe0f61",
"667d3301-e803-46d9-9eeb-0d22d74e6fd0",
"9173f977-b18e-4f60-9dce-ea58527d16a3",
"cc1c692c-5c88-4fb9-891e-2f39d3d6f428",
"b059b3cb-c13e-4335-8b1c-271137f9f5e1"
],
"count": 9
},
"210": {
"chapter": "210",
"id": "251a7470-da9b-4e37-8c2c-d95ff75a1bd6",
"isUnavailable": false,
"others": [
"6d4012ef-05ad-4db9-93e5-9b946dc06a73",
"717bc56d-2468-43b6-ae08-248ba63da1bb",
"74e8506e-c195-4a4a-832f-2b882be86063",
"50f1e0b9-744c-4ccb-820d-0114b7e49157",
"9cbb82d6-fc2a-48a9-bfb7-fe322858dd96",
"ba881f1c-f584-4faa-b4da-2d069dd9d078",
"e93ce896-35d7-4f3c-8e51-18a251d4aabb",
"e36c65b5-110a-4a2f-9ae2-7ea84ea6a1e7"
],
"count": 9
},
"209": {
"chapter": "209",
"id": "4611a9a6-a393-4f7f-a067-2396ee280583",
"isUnavailable": false,
"others": [
"5c01b516-25b4-4d88-a9b1-18357887a381",
"fe517d7a-d328-49c1-b80f-2d818e56b781",
"5cb528c4-3416-48d9-9d87-c95a3bec9df3",
"6b2633a3-895e-49c8-bec6-dc48d9e96aae",
"f8679444-b21c-4aff-8263-96c8cd755460",
"0017000a-aa26-4f3a-a6a5-60b4f9987231",
"cd6692dc-8bb6-4ccd-8908-f7ba62458381",
"e7616ac7-33ac-4b95-8d9e-4af3d9251f1e"
],
"count": 9
},
"208": {
"chapter": "208",
"id": "2a948567-bf3b-4584-b46f-28a8af560ffa",
"isUnavailable": false,
"others": [
"00085d9f-c8eb-467a-9ebe-68c3ed5e3c87",
"6d97fbc4-62eb-4ea4-8c4c-677a27ba1c54",
"5243cee3-1f75-485d-a42f-f0b734b474a1",
"b9a51bb1-ab67-4fad-9cf6-70eb4377b128",
"d805906d-8994-463e-809e-ec8c4adafa3c",
"891a9650-dfe8-40a8-bccf-151009adbb58",
"4daa34fb-a261-41f1-987a-f2c81edc8a84",
"941deb3b-7269-4b36-85f1-453721634741"
],
"count": 9
},
"207": {
"chapter": "207",
"id": "3d17ffac-5c53-49a8-9cda-ad40c3790bd8",
"isUnavailable": false,
"others": [
"c4883e4e-f2eb-4213-aaac-d59328457309",
"38da613e-74c8-4498-89da-80da08d2cd16",
"86ff631b-078d-489e-ac1b-97e654a6c76b",
"0053691a-2f7d-4cb6-bb43-77da71763f5c",
"065d4f99-4de4-4fc1-82e6-31f8714292e6",
"541c7b06-9634-48b9-a723-51698452dd97",
"86ec177d-7c05-4041-a318-d4957ef36999",
"7c4e8c56-1704-4d64-abea-8689eb2e245b"
],
"count": 9
}
}
},
"24": {
"volume": "24",
"count": 100,
"chapters": {
"221": {
"chapter": "221",
"id": "ff2d47cd-1431-4424-a18f-4536fa3acef1",
"isUnavailable": false,
"others": [],
"count": 1
},
"220": {
"chapter": "220",
"id": "e14bd361-539a-45ba-99bc-a5e40b6b437b",
"isUnavailable": false,
"others": [],
"count": 1
},
"219": {
"chapter": "219",
"id": "5776c1ae-12d6-423b-b76d-fe7b0d10d1f8",
"isUnavailable": false,
"others": [],
"count": 1
},
"218": {
"chapter": "218",
"id": "91dd8bea-fac6-4974-9351-faa091655859",
"isUnavailable": false,
"others": [],
"count": 1
},
"217": {
"chapter": "217",
"id": "7748f0a0-6987-4f3f-aa27-0509e418e83d",
"isUnavailable": false,
"others": [],
"count": 1
},
"216": {
"chapter": "216",
"id": "88e7a73a-4fca-4866-9598-b04728801623",
"isUnavailable": false,
"others": [],
"count": 1
},
"215": {
"chapter": "215",
"id": "043affc5-6288-4bbd-bc8a-93afcc384750",
"isUnavailable": false,
"others": [],
"count": 1
},
"214": {
"chapter": "214",
"id": "f03ae42d-76d0-4c57-9834-1dba5eaf0d28",
"isUnavailable": false,
"others": [],
"count": 1
},
"213": {
"chapter": "213",
"id": "9a9dcaa0-f277-4d7e-8b39-935df5c1e0db",
"isUnavailable": false,
"others": [],
"count": 1
},
"212": {
"chapter": "212",
"id": "20e2d8f3-f137-4337-ad5e-42efde0c1ab4",
"isUnavailable": false,
"others": [],
"count": 1
},
"206": {
"chapter": "206",
"id": "1f5b0636-897c-4f32-96bd-5b33247dbbf7",
"isUnavailable": false,
"others": [
"9eb2bb3f-6311-4955-ba71-8d687fac74a3",
"8cf6450b-e42b-4dda-bca8-89b1d94083e3",
"e0e2d1e2-2c3a-4574-8cde-3673696d446b",
"1c684956-e3b4-4f1a-87c3-823368de5c52",
"4f7ca5de-73e5-4b80-9837-00873939c868",
"19c00dbd-8c04-4c61-b3a3-464264e0ef4a",
"1a6788a0-4a71-4093-a894-ca3ab1a7911b",
"d3aa2774-c11f-4bd8-8404-4ec44e318387"
],
"count": 9
},
"205": {
"chapter": "205",
"id": "0af5115c-f2fd-4f4b-b646-6a69ece39446",
"isUnavailable": false,
"others": [
"6aca7a81-6b6a-48ff-925c-15e56373fc9a",
"6f1e830d-4db6-4a4c-851a-218332671334",
"e978e4fa-395d-4288-a75c-f15f9bcc2a92",
"132f5c24-33d1-49af-9a90-439b25cdf20c",
"6ae51803-9547-4cbc-9281-087cc1f82fdf",
"a9c4aeec-5f80-4a65-99fa-27b7fbb65497",
"13a2900b-6f6b-4629-b7d8-a86375e0efb1",
"07579b7b-f2bc-44b7-9235-334877e3cd15"
],
"count": 9
},
"204": {
"chapter": "204",
"id": "88e94c78-e28b-4e8a-a24b-fd5a93fe8c4a",
"isUnavailable": false,
"others": [
"ec04c4bf-ebe6-42ef-94a5-2a13f1ecdb04",
"fd30d463-45b5-4fb8-aa78-95625320a9e1",
"2dcf51cb-b26f-4d41-adb2-662d1bf0f068",
"3788dd3e-21ff-4041-81cc-bb679514cfb9",
"9502f551-e2ce-4f9d-b7b5-ef09b03a5808",
"14c25d4e-f759-4b41-80f3-f97127063063",
"86a368b1-bada-45c5-b3b5-e16438d6ffd4",
"df27cbde-b8cf-4667-989e-f622f5598823"
],
"count": 9
},
"203": {
"chapter": "203",
"id": "15790f5c-6cc2-46fb-9619-dd5d3532e182",
"isUnavailable": false,
"others": [
"a190a8e6-b267-4e62-a8ae-f41641896feb",
"8a57786b-c782-44ae-86bb-8afeb90603c9",
"c6f00859-dbe1-4c17-a583-ac3b436b64d6",
"aa06f0fb-9ee0-49b9-bc2e-ac7913b2cec5",
"bd5d7528-9a05-4874-8731-c902a287f504",
"26114b5d-d310-4b5c-b264-5b8998559db0",
"d257d10b-7d9a-4f41-88cd-1958b7b52d8d",
"e0868114-1b10-432e-a997-8bf40f5dd397"
],
"count": 9
},
"202": {
"chapter": "202",
"id": "07aa83b1-b4a4-4f12-8301-5fc5e4742384",
"isUnavailable": false,
"others": [
"bbae91ac-8c1b-4c35-9a15-4d3b0991c64b",
"b021d7d9-5bbe-4e9a-92a8-5cf4dd19d9b6",
"1138d456-483b-472c-9c0d-4fb0dc6cebd3",
"6ee4b958-50f5-4d44-94e4-930137dfa82a",
"a224d659-9a2a-40ca-8280-1ade3d35abc3",
"d8372435-fbda-49e9-810c-42c2c4b2daea",
"e4c7306a-d578-45d1-a709-dbf4be6f697e",
"5bb09a8c-d5a8-4ea6-a1f7-601b6dc1b9e1"
],
"count": 9
},
"201": {
"chapter": "201",
"id": "412e78a1-8ec0-4a7d-b066-e4533226cd06",
"isUnavailable": false,
"others": [
"60aa53a0-ab91-4e39-8fb5-0a00a1e5c5c7",
"9d552f93-9c46-4817-bd02-1f8a01287ec4",
"c59cf092-3193-4cf6-b04b-a5128b0fa4e7",
"217381e6-7165-4829-9d56-71eb84c27f08",
"6e26c042-a0af-4ce4-80f8-a618ce3842bb",
"d270f7db-defa-4f14-b4f4-51d081218865",
"f6118d16-ae24-4850-88ed-83342355f02c",
"fa8e05e9-90b0-4090-8223-a8bd1c285bae"
],
"count": 9
},
"200": {
"chapter": "200",
"id": "774e1f09-f41b-4f06-b930-b8ce191fb45b",
"isUnavailable": false,
"others": [
"a16f13a6-82e5-4ef7-911d-e8d53321be23",
"3852696c-9636-417c-ba54-5d551873b45d",
"5047f3af-7b8b-48a9-a2ae-c9510c3af918",
"84d6b8c6-c6ad-4c11-bc03-ae30f7bb9893",
"e10b6fc5-8d0e-4657-bf1d-290cd6a85b3e",
"2501befb-15a6-4109-bd09-5e2a59758962",
"889ec76d-7cb4-4b26-bbdc-610a1fe091bd",
"57ac390a-4998-4cc1-a3ec-1b802fba2fa0"
],
"count": 9
},
"199": {
"chapter": "199",
"id": "06a76277-d8e4-41c4-ad01-a3ce00f63f10",
"isUnavailable": false,
"others": [
"4618606d-5c63-459a-b9f4-453ad57494d2",
"43776a74-a7a5-4f0b-9266-21d2fff83789",
"c9b326bc-6593-4d87-a596-3e10c7e2e731",
"147fc728-7988-4eea-86aa-d4d188ac4bd4",
"1a805014-e3ad-4254-8e0f-4aee9dd5d95e",
"d29cf195-4653-4f13-a11d-0fd8892a5bb6",
"a132dbf4-a3fa-4ac4-ba3f-34dacdd72e6a",
"f1f11699-c281-4349-9bdb-bb92aa69d8ab"
],
"count": 9
},
"198": {
"chapter": "198",
"id": "37d91e4b-9f61-46dd-a854-004961108a9b",
"isUnavailable": false,
"others": [
"74525b8b-c9a7-4fb4-9321-a88e4a141692",
"a7b253bd-1318-425c-a7cc-ec1938113ea1",
"b3a6c358-4fca-4e69-8bc3-9b5bf3e839da",
"b2481ad8-f7a4-455c-ba4e-dabfd5ebb7ce",
"11e932f0-df6e-449f-b33b-c46cc93cedd1",
"5a8b80c9-3e82-4f24-b7cb-34c79e465157",
"3d987e65-6e1b-454c-b552-3ca388e354f1",
"68be2be0-9b73-4974-87a5-50330467d482"
],
"count": 9
},
"197": {
"chapter": "197",
"id": "224f5205-3744-424c-bd5d-5897ed25f694",
"isUnavailable": false,
"others": [
"18a4d190-2166-43c6-85e0-4c93efec999a",
"b67709d9-e911-470f-a946-2d773a0ac750",
"bc1d2656-fd80-49f0-a8d2-6fa40472828f",
"2ae79de3-428c-4061-9283-97ed82a6dfe2",
"d887ed8d-9d1a-4e25-a72e-b3495fe5fcc0",
"5ae89795-64c4-4f2b-befb-5079b702904d",
"6e0292a2-c608-46ca-95d7-db78b2eec670",
"d0859270-2992-46d6-add0-10e0d6af63c2"
],
"count": 9
}
}
},
"23": {
"volume": "23",
"count": 100,
"chapters": {
"211": {
"chapter": "211",
"id": "0f4a029c-a1c3-49ed-a7ed-ac7727a718d6",
"isUnavailable": false,
"others": [],
"count": 1
},
"210": {
"chapter": "210",
"id": "d3151ecb-60e9-42cc-9e93-fb1daa2661dd",
"isUnavailable": false,
"others": [],
"count": 1
},
"209": {
"chapter": "209",
"id": "a7a04215-4dd5-4af5-bab2-1920e2b6bc68",
"isUnavailable": false,
"others": [],
"count": 1
},
"208": {
"chapter": "208",
"id": "d54fdaeb-5a5e-4287-b9e2-0f25a1ed0924",
"isUnavailable": false,
"others": [],
"count": 1
},
"207": {
"chapter": "207",
"id": "a41ecd81-2b8e-4920-83f8-60bda3c6afce",
"isUnavailable": false,
"others": [],
"count": 1
},
"206": {
"chapter": "206",
"id": "564bfadb-ad15-4e1f-a02f-888c336edef1",
"isUnavailable": false,
"others": [],
"count": 1
},
"205": {
"chapter": "205",
"id": "5900e1ee-115e-47c1-9c63-074934af7368",
"isUnavailable": false,
"others": [],
"count": 1
},
"204": {
"chapter": "204",
"id": "dc45c32d-9b7f-4c0e-b4c7-a85d3b1e3e01",
"isUnavailable": false,
"others": [],
"count": 1
},
"203": {
"chapter": "203",
"id": "e526ff7a-bebd-405b-9445-2748de555c74",
"isUnavailable": false,
"others": [],
"count": 1
},
"202": {
"chapter": "202",
"id": "4b05a7e4-ac23-4861-81ba-3d6a4a0ace49",
"isUnavailable": false,
"others": [],
"count": 1
},
"196": {
"chapter": "196",
"id": "1ca14cd8-14e7-4236-961f-8ff93ed80260",
"isUnavailable": false,
"others": [
"01d78590-5dc6-4984-806f-e9195c260f13",
"2c69949c-eaf5-4ca5-bb53-f5f229c88a09",
"4edc538e-6399-4fbb-b536-a61f63e54886",
"bce2562c-2f46-44fe-bcbd-56a1ffe20ced",
"91a5f40a-47bb-403d-9ebf-e355afbef79b",
"5fc64ffa-1e27-4745-9724-b36d2639ea5c",
"7da01727-3267-4468-8fa4-12ce632809bb",
"cd32bd04-3356-479b-bf3f-646eb4ed32af"
],
"count": 9
},
"195": {
"chapter": "195",
"id": "1575a269-9b25-459c-b9f6-190dbf2a2598",
"isUnavailable": false,
"others": [
"55131829-dc7a-4bf9-8e07-548047c6893e",
"8d0a88f3-f977-47ae-a7e1-d94fb112e542",
"16976909-5e6e-474e-8edf-ec74f5f5e133",
"17faf13f-fab5-4f88-9d2b-665cd837e8a1",
"25cf3459-0549-4f7c-b05f-1f176392749d",
"6c04c9f8-3420-4458-942b-50ebcd546410",
"6d1e0f21-e0f7-4e4b-acc3-e63a119aee02",
"d0168dd0-9e80-45b8-9c58-6513febb5061"
],
"count": 9
},
"194": {
"chapter": "194",
"id": "017031bd-8580-4e1c-88d5-ba53f7d705d3",
"isUnavailable": false,
"others": [
"54288e4c-4283-4865-8ccf-be69e296d7b6",
"4e58e78f-42b6-4e74-be58-3df005e660bd",
"1c8037e3-d101-40cf-bb1a-91194bd88d48",
"3c82db84-eb17-4147-a95f-c4e0193748c6",
"b8726c6c-bbb8-4f52-bcc5-b1f4c3f3accd",
"b007f154-95d3-480a-b8a2-0ba4886bb3ac",
"a7e2b6dc-115e-42c7-8fbc-b127491b4d62",
"acd72ab2-0d6d-4e56-8554-481e74805143"
],
"count": 9
},
"193": {
"chapter": "193",
"id": "526d2a66-032a-4385-aee9-0ec744e610fc",
"isUnavailable": false,
"others": [
"524d2203-759d-4c8c-be79-ecf8a8f98a71",
"96de5421-a694-4fc1-8062-407d93095dd5",
"eebb58be-0d93-4adc-8b31-110eb0d60dbb",
"fffb70c9-38d1-4fc2-b1db-736a77172281",
"55cdf6d3-8d80-4180-bd7e-f1204f527c94",
"acabd6ab-d217-41bb-81c4-b3690c52a5ce",
"eecff241-6307-41f2-a4b5-dca131ac6e15",
"e64024a5-524c-45a4-9a62-7b458913b33d"
],
"count": 9
},
"192": {
"chapter": "192",
"id": "5433c7fd-a273-422f-b7e8-0ec82ec8a95b",
"isUnavailable": false,
"others": [
"70b2f39d-3b7c-4c40-a4d9-2250047e97cc",
"52fe5b5f-249e-4375-9517-b5b9f8637075",
"9408b1bc-b17e-4f8d-8e55-64fcf5c6e5ff",
"c1753afe-ca62-4be7-a075-8bd47ccd0b73",
"cb118220-b59b-4153-9480-6db00d2e0587",
"f103bc53-83c6-4655-a99e-2f045481effc",
"0957c722-d218-4f52-b9ed-62dcf05c1c92",
"1228fd38-6b78-4528-a053-363677d14cb5"
],
"count": 9
},
"191": {
"chapter": "191",
"id": "83d23de7-4877-460b-87ac-41457d09bb78",
"isUnavailable": false,
"others": [
"bcb5d90f-7382-48ad-9435-d63093d5a5c8",
"c3544738-8748-4f5f-a4d3-81a3661ab24a",
"2e22b808-035d-4eb2-bb60-76aa22e2174a",
"33dbb9a7-e805-49e6-9ff0-816b50113229",
"1f8103ed-31d3-441a-ae65-0d4d3e413e0f",
"7bc30386-07c2-4570-9861-867e2f7772f6",
"9e9d83e9-46a7-4894-87ea-fafd857d8563",
"e64cb782-562d-49f7-a26a-a3d3e8cde8af"
],
"count": 9
},
"190": {
"chapter": "190",
"id": "02fbd0d7-8588-4295-89d7-8d6d9dafef19",
"isUnavailable": false,
"others": [
"12c15705-6b07-4741-8210-0a375b28105a",
"405c307b-f86e-4f2a-8c14-41d95142d719",
"b78c2efd-9d61-4d1a-90c1-12c2544c4eae",
"d2da2a9a-faa4-4920-a1ba-10612529d509",
"8d5d779c-ba56-4bfa-b3f6-bc0be0d2a117",
"00414146-c2a4-4d83-bc62-46f037362713",
"894dfe65-8fe9-4093-83f7-01a3a1e7aa24",
"d561dd37-691e-40d7-b2bc-102e24351f26"
],
"count": 9
},
"189": {
"chapter": "189",
"id": "8a5dad70-9f59-47d3-af7d-958fbb6fe8be",
"isUnavailable": false,
"others": [
"96c3768a-e9c4-4c88-98b8-b3388415b45e",
"d23bac28-b5ee-4c9f-b2d7-259a082060e4",
"697465bf-a693-433d-aef3-de0eb18e230b",
"7cc123cb-d9c4-4d92-b810-72c2fac7816c",
"56913ee2-0845-4f37-b542-47fb043898f0",
"bfe082ad-78f2-453a-b9f3-36c1a198ca29",
"c1231c51-2f87-4fca-a2e2-615cecb99c98",
"dc0a5609-7856-4b53-9f8d-19a1f7748812"
],
"count": 9
},
"188": {
"chapter": "188",
"id": "23895104-c239-4cbf-99e4-8970bf8a9ce3",
"isUnavailable": false,
"others": [
"14248835-703a-47d6-aa2c-bcb3d6a80cd0",
"4ed90102-a6ba-46c3-acd2-208408c60924",
"33db971f-5e5a-4457-8cf1-2a31888b7e70",
"15155608-b9d6-4f2b-8429-00c911e26308",
"d0e592c0-12ac-4217-80cb-628c8ca903cb",
"37e93bda-7060-4223-9d1e-23c195429dd4",
"71749d9d-7389-46e1-ac81-40456150c05c",
"f8e43869-cbc9-4198-ad07-ce5c682f22ab"
],
"count": 9
},
"187": {
"chapter": "187",
"id": "7128e000-b775-415c-8d5a-825b8af5b7b5",
"isUnavailable": false,
"others": [
"5c8e3a26-864a-43e5-8513-2e66b2b56680",
"3eaf6815-623a-47cd-8d31-6a0532641fa0",
"4d7cfd62-12d8-4ffb-ac2c-5e3005bf9e81",
"41be6b45-5d39-443e-ace5-89bab8f3beb8",
"6598cd47-0c0d-48bc-819d-99daae9a5160",
"931be375-ca49-4593-9c6c-0311ed11bc69",
"b3813b30-00b4-468e-84fb-fed67bd29117",
"adffef77-170b-4079-ba72-35d9daccc4f6"
],
"count": 9
}
}
},
"22": {
"volume": "22",
"count": 109,
"chapters": {
"201": {
"chapter": "201",
"id": "00f1c33c-f249-41ec-9875-c545dd9546e6",
"isUnavailable": false,
"others": [],
"count": 1
},
"200": {
"chapter": "200",
"id": "22ccc8f3-d171-4fb2-b82d-5cb00f97b409",
"isUnavailable": false,
"others": [],
"count": 1
},
"199": {
"chapter": "199",
"id": "b27d8862-8e2b-4f22-a415-f04ad7b97c40",
"isUnavailable": false,
"others": [],
"count": 1
},
"198": {
"chapter": "198",
"id": "7b5f2398-8d7b-447f-821c-e1946686d94f",
"isUnavailable": false,
"others": [],
"count": 1
},
"197": {
"chapter": "197",
"id": "9be616f7-15cc-4a3d-98db-cebdcae92d77",
"isUnavailable": false,
"others": [],
"count": 1
},
"196": {
"chapter": "196",
"id": "119bc2b2-3e47-4aef-9eea-dee880ed97ad",
"isUnavailable": false,
"others": [],
"count": 1
},
"195": {
"chapter": "195",
"id": "1c10ced3-2c5f-4781-84d8-c80137c49122",
"isUnavailable": false,
"others": [],
"count": 1
},
"194": {
"chapter": "194",
"id": "78223be5-92e8-475e-8d34-0c5ca2119d4b",
"isUnavailable": false,
"others": [],
"count": 1
},
"193": {
"chapter": "193",
"id": "7e2e1771-4fb1-4bc7-adfa-f6ea03520306",
"isUnavailable": false,
"others": [],
"count": 1
},
"192": {
"chapter": "192",
"id": "5b404527-2f48-4bbb-8d4a-d41852b68d45",
"isUnavailable": false,
"others": [],
"count": 1
},
"186": {
"chapter": "186",
"id": "66e7d518-3f7c-4f8b-b38b-1e61710c02e3",
"isUnavailable": false,
"others": [
"99cd2e30-d854-4818-a041-3469a547260a",
"161483fe-d13c-4f0e-9c0f-ababadbec2a5",
"11ea6e2f-4325-4683-9cea-0e67f04a5a7a",
"2a9e0163-efda-4d09-b94a-df5e4db8c8fb",
"d2d80f59-6efe-48f3-b908-5e2e0acaae38",
"423c5830-f79d-45be-be54-1e2b35065a8c",
"18c8351c-83aa-40ef-bb11-ebcedf7e85bf",
"74537a61-81d1-4f7e-b938-70795d29e95f",
"fc422736-ee2e-42be-9daa-3033b639773c"
],
"count": 10
},
"185": {
"chapter": "185",
"id": "2ec27fff-5d59-43d0-acfb-bcd6f106fb22",
"isUnavailable": false,
"others": [
"12f8b693-59e3-48d1-a42e-30a661d3c846",
"6cb1ef81-5f03-4176-b0ac-5705496a0a2c",
"6ef3e523-f324-4553-8c2c-d71645aacaa0",
"c6d2d148-c683-4645-bf17-99ab14414f15",
"024b26ef-88f4-4abf-bfe2-d659979473cf",
"76e40f4c-f0ef-41df-901b-fa8d1d21efc0",
"1e80d551-fe2d-4ce0-bd7c-7833574c3cdf",
"6d75b0f4-a642-46c2-98c0-45dbfa29b2ed",
"968dac7d-108b-4f3e-ad70-242cff13febc"
],
"count": 10
},
"184": {
"chapter": "184",
"id": "236d370b-096a-4cc4-b313-6c8f964f425e",
"isUnavailable": false,
"others": [
"42f43b50-522a-4808-b923-d06c066db588",
"496628c3-6e70-4511-a17b-45993bc31cd2",
"64c7b784-3dde-4f22-9967-933e8526e883",
"19d628c7-c7f8-4c61-8409-b4efe84fc59c",
"08aab37c-b784-4f26-a10b-4de19afdc5d3",
"3738a34b-d1fa-4455-87e6-f49fee54410a",
"722cf8b1-f2d5-4f8a-8c9f-1f4125f3742e",
"d45c8448-b87f-4228-9b09-86b288db8dba",
"d1de3134-3b96-4a3b-ad69-4209a644099d"
],
"count": 10
},
"183": {
"chapter": "183",
"id": "2bbf74a4-5773-4a1f-b733-b5749490f775",
"isUnavailable": false,
"others": [
"23ed07cc-7229-4eb2-bddd-54dcd4ed509b",
"8157a266-0f14-47dc-8cb5-697164f3f6ac",
"40170502-202c-4038-984f-11ba715cf1c2",
"9dded81c-1c0c-4f8c-b86b-64b0a3fef161",
"e3c61f20-d093-4f51-800f-ec6a60389e25",
"800e5261-9c69-43b6-a242-821e17b363ec",
"73c64e5c-59f9-41d0-bf79-70b1f9892583",
"ad9c8ea0-cdd0-4b88-ae9f-429de7163f49",
"7441d67f-d5c4-4c00-85cc-5af331241aa7"
],
"count": 10
},
"182": {
"chapter": "182",
"id": "7a179a29-d51b-4f98-ad3e-35e94b9efb9f",
"isUnavailable": false,
"others": [
"8346f953-0297-44e5-a63b-a2b39265739c",
"84728014-cc2e-4f3f-bed7-8d1a15b2606c",
"c70f3a18-ff41-4134-ad57-8e01b062277e",
"cc2bf46b-4694-4c3e-a9e1-091b27bc8ea2",
"d90f0419-b978-435e-bcf8-b1a3a5ed3d22",
"7caa25af-f389-471e-87b1-3b74c118f80e",
"811832ed-198d-431f-a2a9-03b3fe173fd2",
"8f034e8e-2d91-4a74-9a0c-05e3136cdf0c",
"ebbad0ad-d8a8-450f-ac0d-5fa25e8b0398"
],
"count": 10
},
"181": {
"chapter": "181",
"id": "55cc28bb-1e5e-48a0-943f-6c0164bfca25",
"isUnavailable": false,
"others": [
"71dbd800-028d-4f47-b439-338646d19bfc",
"b659f606-61af-492c-90b9-83d1a54d7fa4",
"b26ce533-b870-4e84-8881-a0d9630dc8bb",
"be8039ba-d528-4ac8-b693-7678bd1a12b7",
"0ecffa71-f408-457f-a676-4281dcebdb62",
"1a6d9267-baeb-48dc-90fd-614692968d00",
"7db4267b-7df9-448a-9895-2c8d4f685982",
"13e15c63-e6e1-4c1d-9203-900fde13fd3c",
"5902af09-3547-4f4f-9e97-87abf0f048aa"
],
"count": 10
},
"180": {
"chapter": "180",
"id": "64e20fb2-0751-45c4-8d04-a75ea28d9e6e",
"isUnavailable": false,
"others": [
"406c19a2-91b1-435a-9ea2-a4c74850966f",
"71873157-52dd-486d-a840-980f22c7830e",
"59b85277-1954-4c77-bdf9-269f6e621373",
"6eda2c39-9f26-4410-b626-6977d19f1976",
"92cd9b0d-28ee-4750-a2ea-9ad49426a577",
"3bd96832-acbf-4f19-8635-63d26552c2fa",
"a287b8ba-d704-40ce-9519-62b4e88e7dbe",
"9fdcdd75-7dff-4bf7-afd8-a2983cd04f7c",
"fb789c90-0d07-46b8-83cf-42555bd3fadd"
],
"count": 10
},
"179": {
"chapter": "179",
"id": "0aed35c6-c5a4-4dfd-971b-876580c5a70f",
"isUnavailable": false,
"others": [
"126407cd-54ff-4fe9-a08f-45d4af93d082",
"489ea1ae-e204-40a7-be1c-b3ff0d83ddef",
"63b606bf-dc46-4886-8044-6576c3e5294b",
"5fff0448-8d80-478b-8f8a-32e27b3af06b",
"6ff6e200-8802-437c-be6e-0b2d7ddd0316",
"9d2e3ab9-40f9-4177-854e-81317ede3edb",
"f7a60240-e12e-4b9d-9c91-22f0056df31a",
"fd5dae7e-9afa-4400-9a05-18dde1fe33f6"
],
"count": 9
},
"178": {
"chapter": "178",
"id": "5e8f904d-2fa5-4457-a988-156804c51e46",
"isUnavailable": false,
"others": [
"6761d998-291c-4a7d-b461-29e1ab023725",
"5aaf81f8-25cd-415c-8ecf-14aaa7ae760d",
"a6adcafc-54f4-47d0-8e9b-39eaafa68f28",
"494eb9dd-f623-48fc-9ae3-b513829916a6",
"539aeda5-72fa-42cc-b63d-ccccbb29792b",
"9593db3b-16aa-4fd3-bb23-8aa67459adaf",
"06ad8cf5-8f17-4410-b5d0-663e3033e99b",
"4afba079-55c1-443d-8258-04cff127f968",
"8fea6499-c7b1-42d8-83c4-3a95bf4c5b3a"
],
"count": 10
},
"177": {
"chapter": "177",
"id": "30f338d8-cbd3-457a-a24f-5df8e6c7e837",
"isUnavailable": false,
"others": [
"9980ae20-33f6-41c8-b0a9-4cf3a8ea069e",
"c214aa5b-d9e0-4f32-9a22-f58a596d707f",
"f904412f-9b5b-4afa-9b8a-e62f4d21ee52",
"d7603802-4c2a-4a5d-b22a-2112bf4ec456",
"25e34edc-5f8c-4615-8720-c90bb94f19f7",
"36438e36-c3f8-475e-a5b1-44c93d418bee",
"dc56f376-56fd-4c02-84f0-0212a1d049f4",
"53dd311b-1460-44d1-8bd3-899633d8e8ca",
"8b114b5b-a11d-4f61-aa05-a6939e5a38e8"
],
"count": 10
}
}
},
"21": {
"volume": "21",
"count": 121,
"chapters": {
"191": {
"chapter": "191",
"id": "87c56f98-6461-462d-9085-eb2e4694899a",
"isUnavailable": false,
"others": [],
"count": 1
},
"190": {
"chapter": "190",
"id": "04126dfe-60ca-44f4-9d90-3436052f7c85",
"isUnavailable": false,
"others": [],
"count": 1
},
"189": {
"chapter": "189",
"id": "0508eb80-c9dc-49f8-86b6-b758f3c7c808",
"isUnavailable": false,
"others": [],
"count": 1
},
"188": {
"chapter": "188",
"id": "cd942c9e-55b9-43f4-8f3d-26c4a3292784",
"isUnavailable": false,
"others": [],
"count": 1
},
"187": {
"chapter": "187",
"id": "c223479f-fbce-4b71-b950-cad30e12facc",
"isUnavailable": false,
"others": [],
"count": 1
},
"186": {
"chapter": "186",
"id": "fefc9e80-109e-4be9-b41a-b9fe05d7114d",
"isUnavailable": false,
"others": [],
"count": 1
},
"185": {
"chapter": "185",
"id": "1a96bf11-b122-42e1-be48-79371795b99a",
"isUnavailable": false,
"others": [],
"count": 1
},
"184": {
"chapter": "184",
"id": "d31b90de-727f-4d74-8270-4fc347587efb",
"isUnavailable": false,
"others": [],
"count": 1
},
"183": {
"chapter": "183",
"id": "9162a479-be46-4783-8406-1b8ae968017b",
"isUnavailable": false,
"others": [],
"count": 1
},
"182": {
"chapter": "182",
"id": "9df0c0b3-04d0-4889-8f36-00a0860fa5b6",
"isUnavailable": false,
"others": [],
"count": 1
},
"181": {
"chapter": "181",
"id": "aa1b5edf-94db-4768-a3f3-421414b09992",
"isUnavailable": false,
"others": [],
"count": 1
},
"176": {
"chapter": "176",
"id": "2496b77e-53a6-4348-ac02-9cd1cee5411c",
"isUnavailable": false,
"others": [
"4c640c20-6f7d-491d-95dc-1109c728b0d4",
"ab8ad4a6-4693-4f07-a016-05339dee986f",
"2180413a-2aba-4253-af92-1bb03e6ebacc",
"61f0bec6-6c89-48e5-9f33-a89e4bb5d176",
"d326d166-bd11-4e6c-b53d-c57f4e9cd704",
"68876a4c-72e7-4979-b6f4-8084b1060460",
"aeefd464-16f0-475a-b46b-972678488576",
"c7b61667-01a1-4109-90a7-240191f479ff",
"d31e09c0-287a-4846-8e09-8a97fdd096ba"
],
"count": 10
},
"175": {
"chapter": "175",
"id": "176f173e-4a22-4b39-9e03-71f5540b00a2",
"isUnavailable": false,
"others": [
"1a74349d-eaf8-4002-8b2a-0e0e6c11fb1d",
"7673902a-8ca5-4084-9bac-9951f3feae11",
"637754d1-3717-4ff1-8351-abc2defa1099",
"b67fab53-573f-4396-bd74-b83f51a330ff",
"26d55606-d8e5-4d88-9339-139b11f16460",
"3800782c-7bc2-4a01-9822-477c4d7717bd",
"4d6e7c6f-2404-4a13-bc8b-a6d2375a7cc0",
"b50376fd-742c-4d88-be70-daea800943d2",
"192fd073-0adb-4585-90da-1a2fbd3217ef"
],
"count": 10
},
"174": {
"chapter": "174",
"id": "44f4532e-197e-4689-b9e3-0da1db120a6d",
"isUnavailable": false,
"others": [
"5464710e-5220-467d-bf2f-63970f85b735",
"6ed1e3e7-b3d7-4c1c-8d40-0f4d9c123695",
"d1ea6105-120e-43a0-ad46-576badd749e4",
"7d8b63f9-6388-491c-bde6-2aa2c575fa6b",
"1b7ef390-edeb-4cb7-b3b2-1e0d8b5477f4",
"70402793-2dff-49a4-99e2-bcd894027fa9",
"5157f732-1259-4f19-8179-9d3cfa2f94bc",
"bcdc62d0-fedf-4408-9355-e83cbbdb7a23",
"af2ab456-f150-4961-91c9-36c7315d9413"
],
"count": 10
},
"173": {
"chapter": "173",
"id": "290ae94c-b15c-4e22-af01-c7c299c7e3bb",
"isUnavailable": false,
"others": [
"9291e41a-29df-4945-88bd-b9aa36e872ca",
"69919428-5b93-4fb3-96e4-6ad877c003f7",
"af251d2b-0e30-4673-aebb-af6253581604",
"e7e30e10-65e3-4264-8f1e-e971cd867e90",
"fdf943c4-d069-4967-9c53-a9b3d0aaf3ed",
"0aacfabd-0a9b-40ec-9a13-342da40457cf",
"1cb1f012-41e3-4eeb-8cb7-a866bc57b2cf",
"87ecfb0c-0f0a-4f15-8152-cffc79e9b9f8",
"89bc8e22-f1ff-492b-a2aa-d82abfa9e6ac"
],
"count": 10
},
"172": {
"chapter": "172",
"id": "15ddea2f-c94a-45c8-a09a-b3cef59e86c1",
"isUnavailable": false,
"others": [
"6039526a-771c-4ebe-83e4-7962b4a77ec0",
"c623cfe8-93c4-439c-9e9a-2273431d34ae",
"8993fc4e-b519-4d12-8a84-61e630bcf02b",
"f9557060-a6ee-4f2c-b238-9c0d3eb75912",
"0ce0a689-87fb-486a-92b0-5b2438b8a58c",
"49c65fb7-045c-456c-b59c-518141aebc60",
"690adad4-9787-4e98-a2ca-110c0e476ed7",
"af2bb976-80c0-405d-9f71-35b340971d61",
"9f22094e-67f5-4472-940b-5f93c98a215c"
],
"count": 10
},
"171": {
"chapter": "171",
"id": "6d7347fd-54fa-4489-8874-62e285bda5dd",
"isUnavailable": false,
"others": [
"fca495de-0998-4193-9827-cefbec159ee4",
"28bd6c67-8f25-4400-850d-96d27b806ca7",
"0c5a11e4-dfc3-4640-8515-4a0decc7a43d",
"371d17d8-7e80-4095-b1d6-7561cfbcbf8a",
"7315ee67-0971-43a2-9af5-a25f0f2af674",
"9d5ae65b-6201-4030-9902-cebdb9a2a4d5",
"2796022a-12a3-4747-abb5-37f67864364c",
"185b4636-f3a9-48e3-a813-54625163afff",
"d1b75127-55f2-4f36-bcb6-13bfdadc6479"
],
"count": 10
},
"170": {
"chapter": "170",
"id": "3940f409-a581-44ec-ba86-0e828c321198",
"isUnavailable": false,
"others": [
"213541a5-5a39-415a-ad8a-5e9e24d239bf",
"8266bd3a-01a9-488f-a024-313003d734a9",
"89752d32-7346-441a-b359-ecf0093cb71a",
"ea6e39cd-36d6-4a23-ba5c-f7b533d64e45",
"e63ed8f0-5bd6-4e3a-bf6f-7552261e7fe3",
"ebfec5a9-5b84-4138-8d55-ee1ab29de650",
"3a99190c-3362-4b70-b77b-b27a6877b5a8",
"25b5f1b0-c827-4f9c-ba3f-ff6687f652e9",
"815fcfa4-b46e-4908-84be-f121fd7246c9"
],
"count": 10
},
"169": {
"chapter": "169",
"id": "24a9d2ed-39a2-41e2-93a2-44d15cd61ab0",
"isUnavailable": false,
"others": [
"085c2a18-6465-42ea-8472-1f01db1c8576",
"6223f4db-20c7-4a63-a0c6-a3acf64c6e0b",
"4687749a-2bc5-4731-92b3-16ae867b988c",
"7d374654-f142-4fdb-9daa-19a83ca484e1",
"ec5a37ae-e679-4c16-989a-aea6c89d5347",
"1935249a-02e4-4ace-b5a9-98abe799e50a",
"11e2a548-d38e-40af-896b-99ecbbeab7d1",
"e7ecb2d4-91dd-4f7d-be69-889abd0f8ec7",
"75138b7c-4948-4a90-8d67-9c10cba65f70"
],
"count": 10
},
"168": {
"chapter": "168",
"id": "3ff4a8ac-2f1f-4d95-a8f3-422c08dc8a9e",
"isUnavailable": false,
"others": [
"0ec0b9be-41f5-4816-b214-39d845967d4a",
"5cbd34c5-de82-4681-86f6-b992041b87ab",
"d716ab3c-e0b9-4fa3-80bf-fdb87bf2b479",
"17514cbb-52d9-4113-b5b5-f501764084c9",
"d01b048b-239a-422c-9479-7cf28f71bc9e",
"e5c98ab8-168d-455d-a320-8e4ad0dd7a52",
"0315f13b-e46f-40d1-b636-6c95831a65ac",
"420940c9-6951-4fc8-a4ea-6cfe6bfee78b",
"6dce4845-b23f-4651-ab91-41fc69021291"
],
"count": 10
},
"167": {
"chapter": "167",
"id": "3dc28d85-b8d2-445e-ab50-d6519e2d7674",
"isUnavailable": false,
"others": [
"046f5d74-fde6-435b-a10e-acd6ff00cb17",
"81ca444a-c3af-46c6-9a0f-1cd4205b2a31",
"83df65a4-9e00-4f52-8996-773976831308",
"351fcde7-9909-44c7-98e7-25476341bad6",
"5c9efb51-b9d5-4d06-ab20-71bdc43f8468",
"ad0bbd0b-d830-454a-a701-1ebea3f8ed76",
"c97a89d4-a8df-449e-b8c4-0fac680580e8",
"c47443b7-5482-47a4-9779-7b40da6e387c",
"f5b0b6ab-f642-4b27-a0b0-f4d3fe7fca72"
],
"count": 10
},
"166": {
"chapter": "166",
"id": "e4a2f426-72f3-457c-85e6-ced2a71bc9a5",
"isUnavailable": false,
"others": [
"343783d5-4659-4fe4-ae71-cb2b2b533cd0",
"4f1732f3-171d-41f0-b681-d6ea60b29e1f",
"a62a183b-71ec-4b80-81eb-79c0c717565c",
"abb8bd6f-d9e7-4d70-b4b1-3be5add716a0",
"980d8d65-126c-4338-b758-899fc8043ff7",
"36727690-b1d1-41d2-a29e-7f2615fda8da",
"1ada8734-b766-495a-a223-cbcbecdcf08c",
"b5fcba49-3d44-4888-a7c3-4fddf0414be6",
"a05a9ad9-d44a-4aa5-b130-be5f0b5f7f9e"
],
"count": 10
}
}
},
"20": {
"volume": "20",
"count": 121,
"chapters": {
"180": {
"chapter": "180",
"id": "5da7c1ac-3a45-44fd-8b56-32fc76948eec",
"isUnavailable": false,
"others": [],
"count": 1
},
"179": {
"chapter": "179",
"id": "7213ec09-f5ba-4487-9118-74fe17033cfa",
"isUnavailable": false,
"others": [],
"count": 1
},
"178": {
"chapter": "178",
"id": "bd1bbd0d-ba0c-444a-857a-c0b592aa8b75",
"isUnavailable": false,
"others": [],
"count": 1
},
"177": {
"chapter": "177",
"id": "382b5b96-4cb9-41ac-9dac-da803cbbf5ba",
"isUnavailable": false,
"others": [],
"count": 1
},
"176": {
"chapter": "176",
"id": "5c89b95c-3dd4-42ab-ad33-ec24c47975d7",
"isUnavailable": false,
"others": [],
"count": 1
},
"175": {
"chapter": "175",
"id": "8953448e-eb98-40d7-b7a8-70e390db923a",
"isUnavailable": false,
"others": [],
"count": 1
},
"174": {
"chapter": "174",
"id": "b97c0b71-7a1c-46b3-a996-fcbfbcab0294",
"isUnavailable": false,
"others": [],
"count": 1
},
"173": {
"chapter": "173",
"id": "77f86282-9c96-4cda-bb59-52e10487ffd7",
"isUnavailable": false,
"others": [],
"count": 1
},
"172": {
"chapter": "172",
"id": "99aa7613-fbe3-402d-aa31-7acd55465c2c",
"isUnavailable": false,
"others": [],
"count": 1
},
"171": {
"chapter": "171",
"id": "4212cc00-8dff-413e-ac73-f0df50d811b7",
"isUnavailable": false,
"others": [],
"count": 1
},
"170": {
"chapter": "170",
"id": "d183da43-2003-403c-ad21-e85a3c62df30",
"isUnavailable": false,
"others": [],
"count": 1
},
"165": {
"chapter": "165",
"id": "789c42ca-ae84-4c97-84eb-f3cecd26796e",
"isUnavailable": false,
"others": [
"51d024d6-7471-4fe4-b723-12d1e1126111",
"69c95475-ae95-455f-8ed4-35feb6dda64b",
"a15f98df-c353-48ef-a10f-27b7285331bc",
"e980e99c-d23c-4a75-ab0d-c39cbb8a515b",
"e7ecafb4-b18c-4ce1-8ff1-466f134e6561",
"dd6e41b3-a407-40ad-b659-3024018959c4",
"0143438f-807a-40cd-9a00-211d9ebed800",
"60261d9b-ea26-4fe4-8025-a2315394f537",
"c48e00fe-a52b-4cea-9553-3a50c6006ea9"
],
"count": 10
},
"164": {
"chapter": "164",
"id": "04bdbd5c-f3c1-4547-840e-72d413b5a6e9",
"isUnavailable": false,
"others": [
"e6d090c4-4b17-4700-b83c-a8199d7d655e",
"d8c5a1e0-d4ed-4613-80a9-17bc0d293e77",
"2b218b5e-4e6f-4f1b-b155-daf8606f2a35",
"33c5ec67-27f7-4891-a390-8c045b4e3bca",
"275314ab-7112-41ce-979d-6cea4c34062a",
"fdc6614f-8cd6-4f4a-a74c-3c4bd6416d64",
"11f3fd0a-296d-472b-9198-9f919498afc6",
"17d8c36f-d1d5-4a48-80e6-001684b3a993",
"f8955493-482d-4f7d-91ec-62d1ea7e9527"
],
"count": 10
},
"163": {
"chapter": "163",
"id": "7b7cd4e4-f50c-411c-9167-4b60161be803",
"isUnavailable": false,
"others": [
"4a1300ee-9e0a-45d5-ae5c-d98d8d31f651",
"aecd40d2-5212-4ff1-96ae-10133847d2a5",
"35c24196-6b29-41c4-a8f1-2a2625fa5918",
"799e1922-eba2-45d3-bd1b-3befaf86211b",
"6922cb61-5789-4d12-9b2a-5dd915a2b955",
"b9fedb11-27ab-4586-978e-c4b91a959b0f",
"b5e84197-33a0-40d1-8b07-bdbd26b7ed6e",
"7a8b7492-2fce-4260-aaaf-0d059fabcd38",
"ccf5de44-ae00-4e15-8d4f-923dc6e89a2c"
],
"count": 10
},
"162": {
"chapter": "162",
"id": "21b11c92-a5b4-4bfa-9d83-7c079291e0c0",
"isUnavailable": false,
"others": [
"340fd10d-950b-4196-98c2-315f870ec774",
"bdd7dff0-1f60-4f70-8bf2-00ac97f621f1",
"fb25f01d-2ff1-4de0-ba21-3521bf07f5da",
"48fb2fd6-5a4f-4fa4-9f04-bf1b8d37639b",
"7631e9b5-7b60-4d8f-b07c-fa869933c1d7",
"9d8f73af-7767-4dd5-be63-c6fe6f4056b1",
"3c329161-8396-4d69-9f59-29233249698b",
"2a3ea4c5-bca4-4a17-a523-a61bf8170f3b",
"dfaef808-cc1b-4e34-93f0-47b19a33a35f"
],
"count": 10
},
"161": {
"chapter": "161",
"id": "5220b49f-872c-475c-90b6-c3c7c07c543b",
"isUnavailable": false,
"others": [
"51ba81f4-9cc1-43ac-98ce-e6ac5db50f11",
"d96c962e-6955-4a7c-a88c-cce758fa4e74",
"55010d61-9297-49d2-b823-c548e4051c99",
"97ce1024-0838-4dee-a552-4d4c0e805f2e",
"e501d7eb-b2e6-4331-8034-30a115034661",
"e34621bd-ef61-470a-a12f-afe70624a2c6",
"43a0323e-6913-416a-be8d-b3fe549b2fda",
"16ebcbd9-ffaa-4772-bb04-6cb192eb9c48",
"8532f8cd-8340-4f93-bc56-a6e40c856c5c"
],
"count": 10
},
"160": {
"chapter": "160",
"id": "ceb40c13-ecc0-4f44-9bc0-153cfa93f481",
"isUnavailable": false,
"others": [
"2a409561-cd4c-4c23-8428-d58ab4e8a617",
"29d0e84c-ae60-4f18-aa5e-4ebb56c0ebd7",
"5514b53f-7c3b-4790-8e6d-2a15fa4b2ddd",
"925b499c-b7a3-42c7-8655-dd08f0c9cfa6",
"cdcf9445-b5ac-464a-bc6c-8d0114a844dc",
"9a81e5f2-c673-495a-98eb-d4343b65b3e1",
"c6d0c382-325d-4b42-9a45-326e342ddabb",
"e3229179-b740-46e9-808f-b8947d9c8a5d",
"d742c328-39c8-4d59-a76f-63a9bd978f20"
],
"count": 10
},
"159": {
"chapter": "159",
"id": "33cd441a-eab2-42ab-b2c9-c304bea85fe6",
"isUnavailable": false,
"others": [
"7cddd74d-fad5-4db0-abd4-744e2ba80069",
"1f99a258-e829-48c5-9dda-3e7aef239787",
"54db1405-5585-4514-b6f5-e75ccc6675a4",
"b67857b0-193e-4faa-9233-d9045c695645",
"0a5766fb-462f-4fda-823b-1aad33908b1d",
"25e5fa98-a9b5-4c8e-acea-fc4bb7444f0d",
"076e152b-14fb-4e75-aa73-a2b8abf02070",
"4b0c07c5-9c20-4a53-afba-1df43741fbd3",
"6a801d17-22d0-4544-83c9-4c14cd853288"
],
"count": 10
},
"158": {
"chapter": "158",
"id": "4a2877d3-4094-43a0-8447-e2e997469994",
"isUnavailable": false,
"others": [
"b9495082-b404-459a-a93a-4621ddb7be79",
"919ef57a-37d9-4eca-a4d3-9c2f712247f8",
"e8a870cb-749b-4e1f-ad47-a3225df032ee",
"5980426d-5ecf-4c8a-9d26-11a978eba20d",
"c7f33cb9-82aa-4529-bf2e-ee39a653e546",
"fde07885-8cdd-45c3-b356-22369100d06d",
"330f3ddb-8e08-4f11-a39a-35238b485703",
"ba143fa6-55a4-42a0-b042-e7a3238493ae",
"fde6b4e3-f5a7-40cc-b790-387f03eb09d7"
],
"count": 10
},
"157": {
"chapter": "157",
"id": "00951035-df5a-442d-a2f5-26fcf3660ff8",
"isUnavailable": false,
"others": [
"aea83074-d2b0-4ad8-ad85-fe0798f1a576",
"eab5fd0f-753b-457a-b66b-85c9ec4f428d",
"245d4cb2-daf9-4cbd-acc4-604f9d73526e",
"62d94440-7e1f-4f00-9101-e5bd045d2d82",
"86d67bee-b198-4ef9-901a-8c271cc5d19b",
"1e346cd8-5f74-4843-99a6-302563dc84c5",
"7ed71b0f-f48d-4755-ab45-ad12e84500f5",
"a6393ef6-7f31-45f1-82b4-b600d3e23e34",
"b25947c6-5281-4637-add8-4a2d760f9bf6"
],
"count": 10
},
"156": {
"chapter": "156",
"id": "12a02c3b-79f5-4f02-9fbf-f249fdeb4cff",
"isUnavailable": false,
"others": [
"b9a127aa-ea54-4588-8094-573b7ec27bc5",
"2cd5d216-3578-4ffd-9510-fb0e0ce8e874",
"510b7b84-ed3f-474d-97f2-a9c96d19f6f2",
"c514d70d-a209-4d4d-b3c4-6ff193808f89",
"7d316401-6e4a-47a5-a53a-dcc6ebc4f37a",
"8127a06d-0ff6-4c9b-ac3f-115b25f7521b",
"56b88e96-6f8d-470e-955c-2e95f044c4fa",
"d8d0b187-b4e9-4e8c-8adc-2551ac39b106",
"f1943f72-5a61-4f3c-9b9c-ea4a8c4af26b"
],
"count": 10
},
"155": {
"chapter": "155",
"id": "0f2a8acc-7298-4355-95ed-19787fce1f42",
"isUnavailable": false,
"others": [
"48193288-a031-4728-b6c6-7c94c5fec9e1",
"3e8d85ee-5d29-40a4-82dc-ff66ff94b25d",
"4e86ce04-2c55-4be1-8ed4-f0e5fb70570b",
"5b43361e-8f10-4b89-9b04-32dd1c44f54e",
"9fab9d81-50bc-44a1-9c5e-c7944f455623",
"cb14de2a-ee12-4fba-9a4e-6c739853d4ea",
"ea6b2da3-22c0-4c31-827b-a40f06fb6399",
"d9a409b1-2974-42d8-a995-a5bdcc452800",
"ff1d3b20-4ec5-42be-bf92-e481f204d7ca"
],
"count": 10
}
}
},
"19": {
"volume": "19",
"count": 121,
"chapters": {
"169": {
"chapter": "169",
"id": "5f5daae1-f7f2-4bad-a7fb-90a0c054973b",
"isUnavailable": false,
"others": [],
"count": 1
},
"168": {
"chapter": "168",
"id": "22f1886c-eb6e-4903-a82e-3004e044271d",
"isUnavailable": false,
"others": [],
"count": 1
},
"167": {
"chapter": "167",
"id": "ded9d6dd-4940-4d8d-9bf7-8bff7da9b840",
"isUnavailable": false,
"others": [],
"count": 1
},
"166": {
"chapter": "166",
"id": "efadf7f7-e069-4f2f-a1d9-8afc31c697ce",
"isUnavailable": false,
"others": [],
"count": 1
},
"165": {
"chapter": "165",
"id": "7f2f08c1-12ba-4720-9cf8-ae085f3cba62",
"isUnavailable": false,
"others": [],
"count": 1
},
"164": {
"chapter": "164",
"id": "0bb6362d-a83c-473a-97f6-67895837ca85",
"isUnavailable": false,
"others": [],
"count": 1
},
"163": {
"chapter": "163",
"id": "17962342-4aba-4fc5-a867-10c609b5e464",
"isUnavailable": false,
"others": [],
"count": 1
},
"162": {
"chapter": "162",
"id": "b2ecfe61-7943-41bc-8d9a-e85613089be3",
"isUnavailable": false,
"others": [],
"count": 1
},
"161": {
"chapter": "161",
"id": "403add04-1ee0-47be-8532-05cdcd99fb46",
"isUnavailable": false,
"others": [],
"count": 1
},
"160": {
"chapter": "160",
"id": "22b29119-1a6a-4345-8942-481704dc8a43",
"isUnavailable": false,
"others": [],
"count": 1
},
"159": {
"chapter": "159",
"id": "10501416-452f-4864-8813-dbfc608ff372",
"isUnavailable": false,
"others": [],
"count": 1
},
"154": {
"chapter": "154",
"id": "2f56f611-e413-4563-9cab-b3332c609b5f",
"isUnavailable": false,
"others": [
"2b36dc7a-44ca-4d54-9410-b30a67412aeb",
"9345aeba-01e1-4904-afd2-fc1c5d507677",
"ae7f5e97-ea0d-42be-aef3-ffed86283f85",
"36e70b5b-afae-43b2-aba7-5569f4ab6c93",
"8af72900-26ea-453b-a330-6c56f276f122",
"06a8e843-e356-4f5f-830b-90fec61169ce",
"30612241-99bb-498e-9589-04fcf29eeea3",
"af143119-741c-4e3c-b728-53f541d0cd87",
"b3621c84-7f7e-4db7-b59c-5040e9a34627"
],
"count": 10
},
"153": {
"chapter": "153",
"id": "1906aadc-7c29-4eed-ba99-021a9a997970",
"isUnavailable": false,
"others": [
"29f056a5-dfe6-4891-a155-86f8f6ff1c15",
"6ef14b33-9f10-479a-af11-77c8b6207b5a",
"c909cd28-595e-4250-b7e3-8d8721fe80d7",
"4f1e7a86-339b-4887-a5d8-4f88090912aa",
"030607fd-c6e8-4e6d-9554-065333836102",
"b0c8b732-27e3-490f-b883-7c3b0a0b4077",
"76d85d96-b5e4-4412-a240-559ca57c6ce2",
"8a41c7c5-87c7-4f0b-a82d-b183d19a1616",
"be776621-8ad2-4c35-a64e-4cdf2b6d6631"
],
"count": 10
},
"152": {
"chapter": "152",
"id": "84d28077-75fc-407e-a06b-3f7e5f471363",
"isUnavailable": false,
"others": [
"71949c58-8787-41e0-9e92-6b354d820dc6",
"c4895334-3a39-45b9-8e7f-aed3f6d4aa4d",
"a1d452c2-fcc3-488e-8ce6-a946787bed4a",
"99e1d12f-8c14-4f9b-bfe7-9632a67737ff",
"81f93def-a9b3-4fe6-bd09-2e6889e104e1",
"a23659e3-f7b6-4502-bbfc-282f2dd9c359",
"eea8b126-02e8-4bc7-804d-bb16a58bc881",
"10a40c20-edc8-46e0-a119-2bfa41ceea03",
"8f978b69-b825-4d9a-8897-b9e8eb0d89dd"
],
"count": 10
},
"151": {
"chapter": "151",
"id": "6ed87d91-8ede-4f82-883f-5bf9d4d8959f",
"isUnavailable": false,
"others": [
"89d59f42-ea9f-4c1e-9c7b-9e3e1ba43cd6",
"417dc95f-1541-4fdf-a8ce-cc68202576bc",
"84ef0667-68c2-4d3b-828f-4cd3afe8da92",
"4f2cc4e3-0955-4e3c-bae7-e2bfbf438711",
"50b3b212-38b3-47d6-8b33-665f878d7cd8",
"7f99ec25-8236-446e-ac29-67d8605deba5",
"d5cb4082-1093-417b-b8e0-377b8abae4da",
"9c062922-2f59-4f54-b1f2-a703bc099d40",
"d4577637-bdec-48e7-acc1-958a9cecfc48"
],
"count": 10
},
"150": {
"chapter": "150",
"id": "01681f49-acdb-405b-94b6-c38fec8d8e42",
"isUnavailable": false,
"others": [
"6a750ba4-8eb4-4eea-b343-d4c5628a7149",
"58bc792a-fa3e-4cf6-b3cb-f7e4bd4ce242",
"ce27b779-588c-44bd-babd-8a5412368e18",
"11fc0f1c-f040-45ec-b208-c49ddb5850a8",
"b0ac008c-b72c-4f55-b38f-d8c7b1d4d210",
"bc07ea3e-5f9c-4de5-a207-05033349d8ac",
"6869f035-eeaa-4458-8a10-2ccaa96e6ea5",
"5605f4e5-6643-4277-9df7-f8e57f0aecc8",
"fd91e9a2-9b45-4842-8a1a-fdaa4d0a7e6e"
],
"count": 10
},
"149": {
"chapter": "149",
"id": "6017d39d-ea62-48db-a077-04206b126809",
"isUnavailable": false,
"others": [
"4efedcf4-fc2a-4e84-9620-76d331da9460",
"3996236e-7cf5-4f92-8e0a-13b803c3c226",
"778d9cb0-a2f2-4f7e-8fd4-abd1bde28a9d",
"a81ac7c9-324b-4cd2-a824-806df955e3d1",
"faa197e5-e81b-4bab-8fef-57dab9d5dbcf",
"1381c408-98df-4ac4-9aed-f66b3455e840",
"6cbc02fd-96d6-430f-a255-5cf5bfda7c8a",
"52ac489c-1289-46ef-8007-c5601fea923b",
"5e46ef37-0977-41ff-a691-f7b6715acf4b"
],
"count": 10
},
"148": {
"chapter": "148",
"id": "96cfb94e-2a7f-49a1-b84e-6ab2c87ca62f",
"isUnavailable": false,
"others": [
"dc8ae7d7-5a4c-4ca8-948f-95be892a004c",
"32b1d5e6-6988-4735-a70e-bf06bb7911c6",
"12a47c18-6a5c-4eeb-aee2-387e93c10c26",
"4f183584-53e0-42c2-9435-e3d2b617d11e",
"dd8a1dc8-2cbf-4fd1-b2af-1cb05624f988",
"05cdcf0c-d97e-47be-930a-7c4c051b8041",
"190684cd-daf5-44e8-b49c-65da27597368",
"7f2cd3fa-b2ce-4547-ac2b-1744796e722d",
"5d5edd03-69f6-469f-a4cb-3d84647a740c"
],
"count": 10
},
"147": {
"chapter": "147",
"id": "4add204b-0290-406d-b4ca-5b833ef4e5b6",
"isUnavailable": false,
"others": [
"9d6178e6-3a9c-4e09-ae29-1a9b9e564786",
"bf6f4993-f468-4833-a5b6-109a742ea286",
"1bb8ac2e-eb2c-4375-a351-f8e0c9fab69b",
"5601a074-ba30-43f1-b93a-fe678ac45237",
"eb77ed60-216f-4f47-88bf-5b6cf9863b30",
"ef696c47-c47d-494b-8870-ded0a8c5f555",
"0a562a11-edef-4f2b-b27b-23e843a7f9ea",
"6d49d8c9-dfb4-4f3e-8644-b12217b2e3ee",
"c8f6de22-7368-4726-8590-24ef5b12e327"
],
"count": 10
},
"146": {
"chapter": "146",
"id": "14edb597-8806-4ff9-b9c4-c75823853351",
"isUnavailable": false,
"others": [
"50b51392-7c60-4528-8ab4-cbef82e79f50",
"c6a66d36-8c1b-4efb-8a24-a9db0fbb622f",
"f87506b2-6e5a-47e6-9892-fcfcc381de60",
"63b9094d-b40d-4fd9-a1cf-31680824e5ea",
"8dc05068-47d6-4a0d-b4f6-a1a187b33db5",
"8bbdd1c5-4027-4fc5-be53-ac5ab52fed6c",
"963a3080-7ada-4b30-bfa3-46d6c3c08159",
"bac10d4f-0345-4a2e-8b55-af99a2d4b645",
"daa04b53-030b-40be-a8d2-e55b16d6b860"
],
"count": 10
},
"145": {
"chapter": "145",
"id": "02f47853-ed71-455e-8278-a207247d7e83",
"isUnavailable": false,
"others": [
"64a02817-cda3-47c1-a0e5-f39d5c09c15b",
"7dd48276-f3dc-4b42-942e-1847b917cb39",
"eabe99b3-46db-4fe9-8a3c-960ca2d72f07",
"745aff5a-b5ba-4ee5-88ca-494ec0e60f9d",
"e7958c7f-d407-4dfb-a901-337eda54f8a7",
"65395992-84b7-45bd-b621-c6438c2f4bdd",
"6e6c5fe4-c47d-4319-a9fd-a8becb371ca2",
"494045be-180b-4852-9112-8b9fc3397760",
"d5b3af32-ec53-468b-bfec-2f3c66427daa"
],
"count": 10
},
"144": {
"chapter": "144",
"id": "164fe971-e769-4d50-b4d0-e54e99562c87",
"isUnavailable": false,
"others": [
"984a3e59-8e06-4327-828a-cd84327c1bfb",
"912a891d-1f9a-4014-b61a-3a9e134baebf",
"13182159-d39b-4cc2-b749-5f6e38fb0aa8",
"0d6830f7-18b7-4d37-86f3-1b07eb2ca83e",
"beae689e-ef41-49bc-8569-025d198e5fec",
"cd944ec6-3d01-4f4c-84e8-9f9c39e1b3a1",
"68ffb988-8a71-47cf-b1b9-1774acf88da7",
"9bdc02cc-1630-4c6e-b381-41f671494d18",
"ed8b8677-4ce0-4650-bb2e-552fc6b326b4"
],
"count": 10
}
}
},
"18": {
"volume": "18",
"count": 121,
"chapters": {
"158": {
"chapter": "158",
"id": "48b0dced-a2cf-410b-82da-ba0fb4a5fd28",
"isUnavailable": false,
"others": [],
"count": 1
},
"157": {
"chapter": "157",
"id": "cecc29d1-6735-4505-aad0-0c6620e60727",
"isUnavailable": false,
"others": [],
"count": 1
},
"156": {
"chapter": "156",
"id": "e9f2dae5-b441-45ba-b3d3-9f726cbf59f9",
"isUnavailable": false,
"others": [],
"count": 1
},
"155": {
"chapter": "155",
"id": "1e8c7ca8-f268-4fef-9df4-2dd8cbdf9881",
"isUnavailable": false,
"others": [],
"count": 1
},
"154": {
"chapter": "154",
"id": "1c9fd76c-3006-400a-a84c-9ff73ce9ad3a",
"isUnavailable": false,
"others": [],
"count": 1
},
"153": {
"chapter": "153",
"id": "8f24030a-c4ec-44b9-9e3d-0aca88218d0f",
"isUnavailable": false,
"others": [],
"count": 1
},
"152": {
"chapter": "152",
"id": "17adba22-276f-4579-af9f-6c871d3f3bd1",
"isUnavailable": false,
"others": [],
"count": 1
},
"151": {
"chapter": "151",
"id": "e4c4f74a-0a05-48da-a0d0-9a21e65394b0",
"isUnavailable": false,
"others": [],
"count": 1
},
"150": {
"chapter": "150",
"id": "48e37133-f49d-456d-be05-33932161b425",
"isUnavailable": false,
"others": [],
"count": 1
},
"149": {
"chapter": "149",
"id": "7b0919fe-bbe4-42b3-be73-3bb0a263e273",
"isUnavailable": false,
"others": [],
"count": 1
},
"148": {
"chapter": "148",
"id": "124d393a-d9a7-45ed-9351-9864496e95b3",
"isUnavailable": false,
"others": [],
"count": 1
},
"143": {
"chapter": "143",
"id": "40d6fbc4-98e7-4fc3-b954-c266acd5831f",
"isUnavailable": false,
"others": [
"980be887-15f3-4ecc-87fe-bb2acd7e4627",
"2a021e24-8acf-4d6c-86ac-6825b6822345",
"5a9df7cc-aea6-40fc-b1e8-e76d08bf7713",
"adadfcfc-ffa8-496e-85be-bf21b388ae62",
"eb8cc6a8-add5-41da-83ad-2ea80ebb1f8e",
"fd1c069f-3b29-422e-b073-856ee4e3148e",
"3de9968f-3c59-4f95-8fff-ce1453d73e45",
"7270e8f2-ff34-43f2-94ce-c6aa19a87f0a",
"b2a53fe9-0f92-4acd-81cf-55c5dd53a1ce"
],
"count": 10
},
"142": {
"chapter": "142",
"id": "c0f3b2b7-d574-46df-b6b8-3f17c736c216",
"isUnavailable": false,
"others": [
"db9e06f8-e796-4150-91d7-8832240f1b30",
"11fc378f-c826-4c83-9c30-d0be6dc23ec8",
"5b5833d6-d360-45bc-9c16-bf03b776e566",
"ea2173c6-4baa-4fa5-a58b-36aebebfb1a7",
"012a0d2b-7263-4db7-9855-021cef46e344",
"2f211692-ea66-42bc-a20d-255f6fc00ef8",
"160cef2e-479f-4fe9-9c19-ec1df93b9d60",
"cc1c1b42-5085-4d78-ae22-6c63d38834eb",
"ae9de196-2328-49bb-a83d-d399da3e3e29"
],
"count": 10
},
"141": {
"chapter": "141",
"id": "877a0c00-6975-40c3-add3-eb6e0ef9ff30",
"isUnavailable": false,
"others": [
"53ffd78f-5225-44e8-ac68-4184fae79b30",
"691c5954-10c3-4dd7-a3b8-63b779f77192",
"d23f570a-bb2f-4fa0-9183-9a80a63c9312",
"86680964-2f29-4b74-8814-940a1e734ca8",
"8d01933f-e577-4bc5-83e0-2e5686faf075",
"9baa2c00-e120-4e83-9e17-d407f6c063ab",
"ebc4962e-2d55-47e2-978b-fed4dc51f734",
"1ee3a620-2d5a-439e-9df0-2847c3521853",
"5220313c-5eb6-44d2-b03f-b895a342dc12"
],
"count": 10
},
"140": {
"chapter": "140",
"id": "38c508a8-0780-4843-88f0-a643486de846",
"isUnavailable": false,
"others": [
"b84a9d61-659c-4d07-ae33-86741328c56f",
"ff3dc000-c66d-4786-a839-d49165a21b89",
"47059eff-b9fa-4949-bb8e-656ada7a07b3",
"66ac9e62-d26e-47b9-94f3-5a211bffa4f8",
"db07c2ff-22c8-4958-8464-bcd3d0d05718",
"41101106-fa4d-40c6-8c95-36e2f03896ed",
"475952cc-039b-4e55-90d4-70dd9fb6d9ad",
"74bb304a-7c5f-44c3-b1b7-67294fe55da2",
"72c4a45c-473f-4f36-a77a-8950b4ff94e3"
],
"count": 10
},
"139": {
"chapter": "139",
"id": "2ef35c7c-f532-4b7f-899c-14b7b31e764c",
"isUnavailable": false,
"others": [
"0a9b1a83-450e-441d-859a-8770209d8238",
"e245ee4d-6101-443a-a7a2-5781b40d5b10",
"8f0318e8-d889-4005-93ea-1fff44cfe2ba",
"9ef8d24d-39f1-4f07-9f50-bf40fc0debe0",
"f1e3aff2-d939-458a-bb90-88c72e184e63",
"53506409-8ee9-4846-9b7d-45d71f9c51b6",
"82a4252e-bd08-4677-bda6-5398ee959a8b",
"a0ea42bc-877e-41cf-bbc8-db49024d82f2",
"a5aa72f0-5a9b-4f1d-b2a6-ba94504c97e5"
],
"count": 10
},
"138": {
"chapter": "138",
"id": "0a55c9de-03e5-4293-a2f7-51e0a17d7995",
"isUnavailable": false,
"others": [
"3e7c18f3-ba62-4458-96a4-277412a2994d",
"72dae0da-a0d3-4321-a318-49403fd4a864",
"a1cf817c-98c6-4fdb-9c34-b80d242f29a8",
"b0f98931-88fb-4f70-b755-4b8dcbd5e9ca",
"e7582795-fa37-4abd-913b-d86b3c552084",
"f54b9a7f-e525-41fd-a9e2-121051e87105",
"95b8ce77-89e3-4a27-b2be-1de32a2b57d2",
"bacff443-5082-477c-a745-772a03f7d47e",
"ebf2a35c-3787-4eed-8079-4594f7fe0540"
],
"count": 10
},
"137": {
"chapter": "137",
"id": "396ddbef-6012-45a6-9b2b-9cdf5d705ad5",
"isUnavailable": false,
"others": [
"19d55fe9-2f0f-43b9-a875-575dcec210a5",
"ccf83f68-7f30-494d-a9a6-453e8185056c",
"7e446d17-526a-4fa1-b4ad-3ab56539614f",
"c3a0017e-7abd-46d8-a4b1-825b1548b26e",
"ff6f4fd0-14a7-470d-a8c8-b20032fc2dbe",
"e084b92f-8de4-49db-934a-98356cd2beba",
"74ebead2-31c3-4057-bcf5-daa8074c3958",
"45f2136a-6ba8-41a9-b201-989a27ab24aa",
"fee88fe9-5b11-4746-a7a3-8cf785eb21ef"
],
"count": 10
},
"136": {
"chapter": "136",
"id": "1453a9bc-e681-4602-bbb7-cf40a5a66afe",
"isUnavailable": false,
"others": [
"a9f7b5ed-b255-4f69-9019-eff155ff9b3b",
"a6b72145-3f28-46d4-a71b-91e0cb13e9c2",
"9dda0306-8ae4-4406-a1c2-d7bf64d1d3cb",
"1561e335-8d89-4c19-b054-06a0b48e3f5d",
"0c86e00d-6570-461b-9e9f-ff527fde3ffb",
"6cb02309-4c2f-475e-b1f1-9b6ff42ef466",
"e28cf0c8-5cf3-4c77-bb6c-86ab3839679c",
"bb4a9ca1-5ebd-4fd0-94c0-cf9c08a30963",
"f0dd79e0-c95a-4886-b092-4574b55af9e4"
],
"count": 10
},
"135": {
"chapter": "135",
"id": "757087a0-0a84-470a-9207-3d116eb21740",
"isUnavailable": false,
"others": [
"681515cf-d48a-4fe0-a7d3-4e827dc14e4e",
"7f7eecfb-2bb2-4c1a-8b06-609dbe6a694b",
"477ddfdb-cb89-4f4f-ab97-4ebfe138d639",
"53dfd7f4-ddbc-4ba1-8d7a-e16324f6fc21",
"8e69fbe0-fc26-4d9b-bf1f-ee73ec29c6f3",
"baa8d5c1-3446-45ef-a637-0b5ff190a1c9",
"0a742201-81b0-4ca4-9fb4-cafbaf453fd0",
"4e8d21e7-623e-48f0-a863-715fe52db94a",
"549cea07-a932-4503-9c28-ae5d521c4af1"
],
"count": 10
},
"134": {
"chapter": "134",
"id": "5c322795-167d-47dc-ace6-98cb5b125651",
"isUnavailable": false,
"others": [
"43698b4a-6f54-4b01-b8d3-2368dacd1676",
"e0e52f2c-878a-4dcc-9c85-089b04774794",
"1623db0b-2222-4d44-a26e-89f8a4d9fd2e",
"52d22539-6a88-46f1-a65b-c9f77cb534c3",
"76fe754c-598f-4499-b1e7-5ebf26233cd7",
"0798f09a-d74a-4c4e-adc4-11612dcf1c35",
"31c51f50-a66c-4d20-ab36-d1693123313a",
"66152080-040a-4f78-a745-94e9acf159e7",
"a60f68b0-31ff-41a1-ab23-effa81e5e691"
],
"count": 10
},
"133": {
"chapter": "133",
"id": "129d790b-a259-44ee-a380-630e6980f61c",
"isUnavailable": false,
"others": [
"0b76cad2-6bba-40c1-b39f-f91d3bb56b65",
"71c40a1f-cd93-4311-b386-fda70955452b",
"a1708eac-c32c-4401-879c-b6a70476384c",
"e7b94466-7c4e-4f23-8d06-be7465fe3809",
"d5a8cf90-b7c5-476a-b49d-7dd23aab0ef0",
"2b679bb3-d137-4115-85df-fb2491f202c7",
"47021a97-4cab-41af-a3ca-3b488c64a45f",
"745f0645-e510-470a-bdfb-1e1dc2b1cbf9",
"ada54c4a-11b3-4e92-82b2-891749897c27"
],
"count": 10
}
}
},
"17": {
"volume": "17",
"count": 121,
"chapters": {
"147": {
"chapter": "147",
"id": "c8825073-4692-4a5c-b8a8-9608d33606a8",
"isUnavailable": false,
"others": [],
"count": 1
},
"146": {
"chapter": "146",
"id": "632624f4-8e44-4661-951e-95b75572c484",
"isUnavailable": false,
"others": [],
"count": 1
},
"145": {
"chapter": "145",
"id": "f6603243-4875-493b-a9b8-1c2137ca0f4d",
"isUnavailable": false,
"others": [],
"count": 1
},
"144": {
"chapter": "144",
"id": "7fb0caaa-e968-4735-8309-3a8c311a1634",
"isUnavailable": false,
"others": [],
"count": 1
},
"143": {
"chapter": "143",
"id": "5b4df93a-b7d8-4059-b50d-555b32f15dd2",
"isUnavailable": false,
"others": [],
"count": 1
},
"142": {
"chapter": "142",
"id": "dbf1c6d1-7c05-414d-9055-b2e76dceaad0",
"isUnavailable": false,
"others": [],
"count": 1
},
"141": {
"chapter": "141",
"id": "7cbbb1e1-aa5c-475f-bb75-6764e2ad5353",
"isUnavailable": false,
"others": [],
"count": 1
},
"140": {
"chapter": "140",
"id": "4c7e01fe-f9d5-4934-aaea-964cf053b7e6",
"isUnavailable": false,
"others": [],
"count": 1
},
"139": {
"chapter": "139",
"id": "91f2979a-3ba5-4288-adf9-5e77504c5017",
"isUnavailable": false,
"others": [],
"count": 1
},
"138": {
"chapter": "138",
"id": "03f0a76c-0bbb-44a3-9c3c-73d3c0ddd67a",
"isUnavailable": false,
"others": [],
"count": 1
},
"137": {
"chapter": "137",
"id": "5bb09be9-b995-4c5f-affe-290900f1bad8",
"isUnavailable": false,
"others": [],
"count": 1
},
"132": {
"chapter": "132",
"id": "0ffcfadd-6aa6-4d4e-bdbf-80e0924b4d0c",
"isUnavailable": false,
"others": [
"629e7c81-e9a2-4ef9-b975-82b3482e300f",
"bca516f3-bb0f-47a6-90a3-d586fe0e4ec6",
"308dfc51-bdcb-46c7-ab21-b3d5b5797743",
"474d5bcd-4835-4ea4-b5e8-fbca4b4c0be7",
"44ce0731-72ff-448c-9ddc-38952095e24a",
"d9953137-e544-4e79-b27d-39ef9f080bc3",
"17dc565d-f3ac-4f05-a318-4e94caeba2fc",
"810d06e5-3d8a-42d6-984c-b0de930a60be",
"d64bdfd8-b5e1-4c08-97ad-4e4ea4f226cd"
],
"count": 10
},
"131": {
"chapter": "131",
"id": "343eb0fe-d969-4b9f-b424-5839214a3196",
"isUnavailable": false,
"others": [
"118fc172-9670-4279-bdc7-e0c5dfe5ad2c",
"89c3f874-9440-483d-b783-c308f89181b2",
"3a8898d7-1bb3-42ca-8e8f-2fc0dd5062fc",
"5f3c7a0c-c849-476f-aa17-e94f2e074c01",
"f1f403bf-3a38-472e-828f-d398b3a46889",
"357ec6bb-31dc-4f9d-982d-aebea2ee8f8a",
"2225b56d-90fa-4831-a27d-50df6de0d2bd",
"85eb9f54-29c5-4420-8ad3-2caabf59a127",
"e0609277-aa56-4f29-bac0-4d3987c04998"
],
"count": 10
},
"130": {
"chapter": "130",
"id": "284967d9-e595-45a2-a149-e8e9a9201139",
"isUnavailable": false,
"others": [
"2709f354-53da-4810-bc76-a986d3a42b3f",
"50a1d258-c404-4390-95c0-137c3f510eb2",
"4f1a603f-4f2e-40a5-9377-9fdff15e563e",
"23bf73d7-748e-4f6e-aba1-3f01b14444ef",
"5d0e703a-a316-490a-99ae-8a6c476dd20d",
"f0c08d3e-c050-40bd-8bd1-82dbb1f57ed5",
"a4eb1cdf-b08e-43d4-965d-d0dd61f65893",
"e7caa90f-84c3-427e-9d1b-198c4a157ee9",
"df7366cf-a4f6-447c-8168-8bb722dd1589"
],
"count": 10
},
"129": {
"chapter": "129",
"id": "5aa8b9e5-0d05-4983-8399-8d6cb5792bf2",
"isUnavailable": false,
"others": [
"666d9f75-7973-424d-a014-90db5c25b754",
"f8efcc7a-611c-4bdd-8c82-9c3d3cdf7810",
"d03edf62-ed85-4ec4-a672-7e8521442882",
"266828bb-6698-4974-9008-0dab23c28045",
"5d8fbd18-11e1-4b10-940f-d9e9f982a031",
"da9b59f2-de8b-4f63-9da4-dc8e25134c5c",
"32f6d062-c213-4ff1-85ac-bf2c3f629e8c",
"64289803-1b6d-4064-95ea-48cc44fe7758",
"be2d2720-2472-4c9b-a9b5-781451655505"
],
"count": 10
},
"128": {
"chapter": "128",
"id": "233a7186-e316-4f98-a274-c0f5d7c1cfa6",
"isUnavailable": false,
"others": [
"36ca05c4-ac01-4f41-a9f4-380d65a1fb84",
"90e8bf8d-5704-4753-a184-06f08581f60a",
"f2ed99e5-84a8-4500-ab8b-c8f444bb67e2",
"3c4f3cca-80c1-48b1-8a11-34ced2cacc3b",
"1555a396-b725-420b-a186-581507ad66b0",
"429cef41-6018-45df-b97b-25e9e652a3a2",
"66b12d45-92d6-425d-b9b1-d2e660fae393",
"ac689cf7-82fa-42ff-96c5-a62ef36bb4b0",
"e1bf2b86-21b5-4b32-b732-a0437ffc44fc"
],
"count": 10
},
"127": {
"chapter": "127",
"id": "471834b5-b95c-4fb9-9cd6-0a6c5d1dd3b1",
"isUnavailable": false,
"others": [
"f6fcd837-5c16-407e-b4a5-57440880c75d",
"3296136b-aa15-4e68-bdaa-3869435f75e0",
"5d4ea5d2-b3a9-4804-8f6d-80fe8b36e00c",
"c665e374-7b25-47c5-bfd0-2ea918e84347",
"386c6d39-c20e-4fb5-99a9-e3d3c0cae4b9",
"12685b41-e232-40af-874f-5945d23f4990",
"461ae372-da8b-4c5c-bb3b-d6ff660fadb0",
"90606029-7ce8-4dfe-974a-eafe911205b2",
"d740e3b7-4b2e-4c37-bf17-83f53a4d14d2"
],
"count": 10
},
"126": {
"chapter": "126",
"id": "84b6dfbb-bc2d-4ba9-9187-34e7c1aca3cf",
"isUnavailable": false,
"others": [
"7028eaa4-46bf-4fff-880f-978f4afd1cab",
"2b2fd4fc-a35f-4383-a0ee-170a963d06ab",
"13b8c136-d638-457c-a646-7a266302aaa9",
"cc350d3e-cc10-4b0f-b3c6-05fd0787d90c",
"a416c0b5-e2f1-4a2c-946a-39efadc20e57",
"2cbd0bf8-55d6-4023-9fd2-deb488962c82",
"97a0c2e1-31ac-45a6-8150-3ae06f6c9e77",
"9ef28442-d76b-41e8-a903-2113c658ab88",
"d679a83b-c646-423c-9483-308f3c0094e8"
],
"count": 10
},
"125": {
"chapter": "125",
"id": "826a163a-e03f-4bb7-be92-c5c0460c735d",
"isUnavailable": false,
"others": [
"79e24979-af6d-4f53-bed6-931478d6349d",
"7872e317-0974-4af0-aece-5a37557998ae",
"3f0a073b-6996-4a11-a5ec-9a8d67eb7e32",
"9d71546b-956b-4ba9-85be-5dd9943f2169",
"76069fc2-80dc-434d-bad3-6d7e2064357e",
"580f860b-5ec0-4339-92c7-0880a8b5635d",
"c0945216-2900-4c2d-b719-e07ab5581840",
"a4f2cd36-5f32-40ec-a8b9-129f9a2ed42e",
"02e32446-18da-4ae3-bdf1-0edb0d3c2a46"
],
"count": 10
},
"124": {
"chapter": "124",
"id": "405f126a-3c87-45fd-8104-7c7ea1a4623e",
"isUnavailable": false,
"others": [
"b89d148d-fdf4-48b6-b4fa-4235680f4e0c",
"34476aa8-0cc2-4100-a7cb-af74de70bdd4",
"37767615-5696-4669-9138-69d48c48fb80",
"c5382954-0ac7-4f31-9c55-0485bc020b7c",
"c0f6e752-bbc0-45b7-903f-d8f345e07c91",
"dc1cb0fb-67d9-43dc-9786-591b197788cd",
"1e368ea9-3587-4a4f-9fa0-4957ad5ade96",
"8b672c6d-7a88-45cc-8c05-179188e30f3e",
"ab4192cf-82a4-4537-909e-7d42da069ed8"
],
"count": 10
},
"123": {
"chapter": "123",
"id": "3809630e-a9c1-451f-b076-92d125cd586c",
"isUnavailable": false,
"others": [
"6f63c1fd-2d30-4546-a46a-bb1e7a760a6d",
"00f014db-4fc0-435b-b629-36556a5d8654",
"476b0fe4-54fc-40f1-8873-1ea4c9a3c007",
"4ad69de6-c7d2-4fb0-81ca-951627ac697f",
"6629ede7-ba10-4e19-843c-89e042cbf112",
"0e746f56-f112-4554-8e8b-57ef350d4efa",
"8a6bb874-f621-4a73-8bfb-4fb268e7a8e9",
"7323ffcf-83d3-49e9-8b07-288b5f7a0280",
"ad603a63-6103-408d-97c0-bf265c3c7898"
],
"count": 10
},
"122": {
"chapter": "122",
"id": "06de0c7c-3f3a-4768-bc11-f65bbcab049d",
"isUnavailable": false,
"others": [
"3d908dd0-bbee-4713-9cf0-59a36c494beb",
"3e69ec8a-fa91-4888-b741-215386a7fdd6",
"5f178e83-e2df-46f3-b210-838ce0133c0f",
"b80da6f1-ecc4-4ea3-ae4f-6e2fcf0b4ff2",
"d625a033-2016-404d-98bb-6c564c39534a",
"19554f8b-9391-4a7f-bad5-8ea64b36f174",
"4ef86b7f-0340-46a2-9041-e194d432f99a",
"968db6fc-51a5-4fe4-9a05-01803f9a6fa2",
"a024f30c-9dd9-444a-9522-39d62771934a"
],
"count": 10
}
}
},
"16": {
"volume": "16",
"count": 121,
"chapters": {
"136": {
"chapter": "136",
"id": "1e2ae082-e917-4bfb-a90d-528dde07fbcd",
"isUnavailable": false,
"others": [],
"count": 1
},
"135": {
"chapter": "135",
"id": "024a9a3a-e2a2-42d3-83b8-569937b8a63c",
"isUnavailable": false,
"others": [],
"count": 1
},
"134": {
"chapter": "134",
"id": "d576c704-e95b-4e4f-b66c-5bb21f6be4d6",
"isUnavailable": false,
"others": [],
"count": 1
},
"133": {
"chapter": "133",
"id": "2ab373de-68d1-44bb-9fd7-af5b031995c6",
"isUnavailable": false,
"others": [],
"count": 1
},
"132": {
"chapter": "132",
"id": "ee0df23c-b226-4ed6-a926-d745a9b59f3a",
"isUnavailable": false,
"others": [],
"count": 1
},
"131": {
"chapter": "131",
"id": "094c6ee1-8296-46a0-b122-ad2766c8e013",
"isUnavailable": false,
"others": [],
"count": 1
},
"130": {
"chapter": "130",
"id": "fa5c9615-d00c-480d-8293-31e71ac381b0",
"isUnavailable": false,
"others": [],
"count": 1
},
"129": {
"chapter": "129",
"id": "6117dbd1-217d-48e5-8aa2-51060e6cc82c",
"isUnavailable": false,
"others": [],
"count": 1
},
"128": {
"chapter": "128",
"id": "a0f30838-02c1-4e76-a4ad-8944865fee01",
"isUnavailable": false,
"others": [],
"count": 1
},
"127": {
"chapter": "127",
"id": "c72ef14f-7442-4729-af70-49670d560ce1",
"isUnavailable": false,
"others": [],
"count": 1
},
"126": {
"chapter": "126",
"id": "bad410fc-9426-45bf-a6c3-84c857892da1",
"isUnavailable": false,
"others": [],
"count": 1
},
"121": {
"chapter": "121",
"id": "1b84b25b-0645-4b8d-b455-ea8df2e764fc",
"isUnavailable": false,
"others": [
"01b78174-d807-4b69-9821-39b9aa7f86ca",
"c28b7166-a74e-447d-befb-0bf7d0bbae28",
"02c27586-c1a2-4ff2-9130-2e01434e21e3",
"ebf622e9-5fdd-42e0-8303-d7085940a2f3",
"0b01c1d9-0983-428c-b928-e133edcfbc28",
"3e926d1a-2b82-4a43-831d-b959a1d575bb",
"6f481975-9378-434f-a848-260b8287b140",
"5d8b37af-4701-43f7-9e71-912c009b605e",
"df2835fa-09e9-40d5-b035-eb5a11559333"
],
"count": 10
},
"120": {
"chapter": "120",
"id": "3bd00362-9af0-446a-a8be-1aea86e9d3e3",
"isUnavailable": false,
"others": [
"c12d2901-61c0-464e-849c-5c2060a726b3",
"27725eee-884e-4f97-9a52-5e30f3cb923e",
"58789eee-a887-450b-9598-2958c05a511c",
"034c5396-9c05-49e2-8584-c68bacd3bb63",
"1a5e6fe8-6bfe-4960-b57e-45aa34af5106",
"8f0e0e9e-42ad-4684-baac-4d11bc1f7b13",
"9697aedf-41f1-4227-a7ab-6ee83865cc3d",
"a258f987-4214-4e0a-9e82-e41161595302",
"cd4b9c8e-d5a8-40e3-ab44-f26512c9dd93"
],
"count": 10
},
"119": {
"chapter": "119",
"id": "22716d31-0b9f-4f15-9db3-d36b370190d9",
"isUnavailable": false,
"others": [
"3b00efe1-58e5-4758-a3a0-4d49808074b9",
"1f41c830-d41b-4474-92f4-1b89ccbe2368",
"b37e25a8-6084-467b-9bf0-673c4f844ae6",
"c6a624ab-1192-4407-b75a-3775ffe8b7e4",
"2753a537-318e-478c-b4fa-b6953cc553e2",
"0c10c403-ba9c-4ecd-a7d9-a2c97e647162",
"56d0f53c-b09f-4bc4-b91a-6aa4a4cbb2bb",
"40c81c32-e5dc-41d2-a812-62073ec038b2",
"210e98c7-389d-40e6-a40d-bb2fb4959df6"
],
"count": 10
},
"118": {
"chapter": "118",
"id": "e7868099-cc99-4fb7-8bbb-bfaed961b072",
"isUnavailable": false,
"others": [
"36e0b763-6e17-4fb2-9109-2039bdd87d97",
"443b3bb7-36c1-4039-928b-935c175c4683",
"4185888d-f514-4bda-9d4f-b91107998087",
"b077ac2b-659b-49a6-bdef-85892b72d600",
"c48bf292-2ac6-401b-a9b6-0849c64bd0e6",
"f40e055e-09f7-4ffb-9427-7dcc50e4084f",
"c2c26688-5726-4d7b-8a43-f26b3996786d",
"9bc1f90b-4184-44f3-b85a-329532838c67",
"f2eb7e71-7001-4dbc-8165-b9ed49284b25"
],
"count": 10
},
"117": {
"chapter": "117",
"id": "86aaa961-7656-4b0d-b100-3a8305b57c96",
"isUnavailable": false,
"others": [
"a6e2f50d-ee31-4ded-bcf5-983517f19787",
"40ab9dec-1ae2-40b2-81b0-5573445c6ba9",
"6eee51fa-fe24-4f55-ab65-5f67b3ca176e",
"efc29181-4cc7-4bae-9beb-f650e2a5bccc",
"2848799e-616c-4a6e-8d19-7fc40063f484",
"6b5f3af9-1c32-4126-b453-9b434d7fc9e2",
"c723353f-8739-4428-8702-d520480254f6",
"ae50e2bf-b847-4f07-9dfa-8a77b0afc310",
"db5731c4-18e5-465d-a498-3fb1c897fc6f"
],
"count": 10
},
"116": {
"chapter": "116",
"id": "772ff73f-22c3-4fb4-b8fd-22233e4dba0f",
"isUnavailable": false,
"others": [
"620bb25b-3ffd-4b6e-b9f9-d52264c78027",
"807b0660-04e7-49a9-8f11-8d1eb9516795",
"56f14f04-fe64-4812-92d7-d19f8e72e6ef",
"cd48846b-b97f-413f-b1bb-6bd75d644dad",
"a388b5d2-0849-427d-bf3e-be3acf1e3e24",
"a53f2a16-df2c-48d7-93e7-a48482c8b0dc",
"adbbd619-eb13-4f43-b0f4-fa862ac02edd",
"a0631ce5-e3e2-40b6-8b76-c865a2b557e9",
"c6d0aa2f-58a4-4803-acb6-1141cb4e0c57"
],
"count": 10
},
"115": {
"chapter": "115",
"id": "2b1b0095-0b19-402e-a24e-73bc9bc8aba9",
"isUnavailable": false,
"others": [
"04989434-28b1-4809-8fa8-d7a465951e50",
"43fef251-6a0b-43fc-95eb-f5d42cb6fbe9",
"cca5c807-42d3-441d-8fac-85100fdc9891",
"324fc2cf-aa33-41d6-b8d6-cb444b4c0dee",
"3c14a831-a798-4054-a984-de02a65fbd78",
"7b42f058-4e6d-4873-851b-d069d73fb008",
"0f072040-7b1c-4213-81e8-2993fd90b2ce",
"1d3c596d-e3b7-4fc6-9b0b-b0add645d58b",
"dfd5a014-b689-4b95-a165-4af8425bf758"
],
"count": 10
},
"114": {
"chapter": "114",
"id": "37e01996-67a1-4379-b0ab-4d7004fae203",
"isUnavailable": false,
"others": [
"321a9adc-d526-4ce9-b258-9944e6507ccb",
"311cf78c-0373-46d6-af31-1077a3b046c6",
"83c97ad4-e6e2-4136-829a-396d4e59b100",
"54dd7562-b628-47ff-8bfa-4b4f745c4861",
"fa6e0ef8-b28d-4b75-89de-f18eb6026605",
"2d4d05ad-aa72-4988-bd31-02b65b1caa91",
"4bb50e8a-2fab-4f67-9e5e-0ccee577fe75",
"6c011a4e-aad4-451c-82f0-f1645297c77e",
"c24cb6c0-2ce3-4e2e-9b0f-cd8c9a45c59b"
],
"count": 10
},
"113": {
"chapter": "113",
"id": "35e86674-b01a-4f3d-b65b-206a6fb4ba50",
"isUnavailable": false,
"others": [
"0ac8d1d5-d628-4c90-b555-ffd5d4be4071",
"256144c1-d4a5-4d9a-a102-22894e1451dc",
"12f68de8-46a3-490b-9702-ae398cf1013a",
"a2e0da3e-3c65-4cca-814e-2762e7bd7d32",
"2866e3a8-9479-4eb2-a923-543cbf7f4df0",
"082a45c1-bfd3-4be9-9d92-38e7de966dd6",
"8852ef3c-1d3f-4f26-bac0-e9f84bd0139d",
"560645ba-2069-4a40-a7e2-99f57afb992b",
"c94efc1f-7bd8-437a-88ed-e16e44207bc8"
],
"count": 10
},
"112": {
"chapter": "112",
"id": "24e6b9a2-2f95-425b-8b4e-f51b411994d7",
"isUnavailable": false,
"others": [
"3f27cb17-e128-4bf6-a363-fc0674b1daab",
"b11e9846-3927-4fd6-99af-49a0085d750d",
"4632e468-b351-458e-84fd-c4c439054114",
"02cb79c3-9153-47ec-a9f3-9e2bb3e04078",
"ba46a845-d5c6-48f1-9e21-d0d39c138e6b",
"45511bad-e446-49d3-8f2a-2d3666722f44",
"4c6f6e13-aeb2-487e-b382-3d8780f5cdca",
"a642e3c3-0218-4591-8ca3-479de8f90279",
"bd5fe1ba-2368-434c-81a6-d647c3665154"
],
"count": 10
},
"111": {
"chapter": "111",
"id": "24d8533f-856f-45de-98f7-1d2ce54a6afd",
"isUnavailable": false,
"others": [
"542e1692-bf7c-465c-903a-6285b8e3d8f5",
"7cfbcfa0-8c82-4a24-8552-65e90960cca6",
"a7389f36-168e-44ba-bb1d-dc10ab390db2",
"0e274e05-c870-4f65-98f7-b68f8cc913a6",
"8a41c5ab-e738-42e6-b503-386dc02a7119",
"a2c83da8-a538-41c7-a455-106727f3ae48",
"ed9d5e7f-6ca0-47b1-869c-4ee2c5a8d0ae",
"6fab1b5a-9ba6-4815-8ebf-83548f8ff8a6",
"9fdda2df-57c8-4a19-be3a-3e3233e2c7b1"
],
"count": 10
}
}
},
"15": {
"volume": "15",
"count": 122,
"chapters": {
"125": {
"chapter": "125",
"id": "b73048c9-1a87-4a6e-862b-a9591ffb5c41",
"isUnavailable": false,
"others": [],
"count": 1
},
"124": {
"chapter": "124",
"id": "257cc28b-b620-4a50-b457-c638c7da283b",
"isUnavailable": false,
"others": [],
"count": 1
},
"123": {
"chapter": "123",
"id": "7a8a3dd7-9795-420c-b0bb-45daf08d4da8",
"isUnavailable": false,
"others": [],
"count": 1
},
"122": {
"chapter": "122",
"id": "0c263d35-b8a7-45b5-bd57-842d68482ef8",
"isUnavailable": false,
"others": [],
"count": 1
},
"121": {
"chapter": "121",
"id": "1b247d48-a60f-4aa8-a913-28cbb56e5cd0",
"isUnavailable": false,
"others": [],
"count": 1
},
"120": {
"chapter": "120",
"id": "4bf7c430-f5f3-490c-913e-167151fe3f68",
"isUnavailable": false,
"others": [],
"count": 1
},
"119": {
"chapter": "119",
"id": "0564155e-a253-4a86-b575-0097ca59f117",
"isUnavailable": false,
"others": [],
"count": 1
},
"118": {
"chapter": "118",
"id": "ecc617e2-2b42-4dfa-aba8-98db8ef40a73",
"isUnavailable": false,
"others": [],
"count": 1
},
"117": {
"chapter": "117",
"id": "0c55d535-1efd-40a3-aed9-864db41d9116",
"isUnavailable": false,
"others": [],
"count": 1
},
"116": {
"chapter": "116",
"id": "e0a08d41-f4af-49ac-8ff8-4a00f24b0ff3",
"isUnavailable": false,
"others": [],
"count": 1
},
"115": {
"chapter": "115",
"id": "fcf9e197-9fef-4cd8-803a-06f6befcec56",
"isUnavailable": false,
"others": [],
"count": 1
},
"110": {
"chapter": "110",
"id": "7f62c39a-973d-40b3-83f2-2a61cf57f2b5",
"isUnavailable": false,
"others": [
"19860226-c8c6-43bf-8c78-87b1cfedc8f7",
"4baaba3e-b40e-461c-8e2a-75c07b073fd2",
"4a3eabf7-057b-4f44-9a77-270bef9275a7",
"3eaced47-abd6-4126-9f4c-6201048a51b3",
"81be1e28-2a5b-4a0a-83e6-a575b5b0c0af",
"6d06a1a4-3cd3-45e0-b3d4-9641a78d8604",
"f7637a42-07f6-4c4a-86c6-3fb9f9784775",
"a3d014de-050b-40f6-8d2e-e6939a254e02",
"da14f197-b1ac-412f-8892-9cced6862504"
],
"count": 10
},
"109": {
"chapter": "109",
"id": "3a808060-8800-48d0-a990-afce54cb8a27",
"isUnavailable": false,
"others": [
"c19927a6-d0c4-4f4a-96e2-df3cb93d5c6b",
"ebaab0ae-68a7-4547-9d64-8f989deeb5fc",
"f82c69cb-f2db-4411-9fd4-fa2d63a3c224",
"2aad3d84-e28b-460a-bb28-100ea9f0f415",
"4eed7e95-1fb9-4b15-96b8-a89491509405",
"67c9c91e-e0cf-43ec-a7c1-5e01c952980c",
"58b6a5f2-b1f5-475d-9ccf-0d366f3e78fa",
"eb5a32a9-1c6a-4f35-a77e-a4fd66bb0a05",
"fe90f91b-7e27-4e3b-a8dd-9646f0521228"
],
"count": 10
},
"108": {
"chapter": "108",
"id": "255dacc6-dc67-450f-9a28-763b1ad598c2",
"isUnavailable": false,
"others": [
"46a30afc-42a6-4f4b-8e88-0695ead96896",
"88042252-43fb-4cd7-a01f-3ba6f20916f3",
"625ec798-8062-44c5-b589-b6f927ed0f9d",
"c46646f9-5df3-4d50-8dbd-e3dc0afb4781",
"f953d1cb-3cbb-4e37-84d5-2cca32d96456",
"222c0252-5063-4ad4-9a37-1d04c898db15",
"25a3c1d4-180f-438c-9861-3b229571bc6d",
"9b414d05-d61d-4cfa-8614-52d925a01bd0",
"d72bb614-dd1d-4bc9-9a12-eae14488f4e0"
],
"count": 10
},
"107": {
"chapter": "107",
"id": "21fad9bb-c9ca-4d77-ab41-feebc9ea78ec",
"isUnavailable": false,
"others": [
"3e783ad1-5c67-4494-85b1-3389f2a3cd8e",
"708bbca2-9f87-4f9e-a263-b516ac1ee3c8",
"497e63b6-3b8b-41ca-a3d4-8ec133c80c14",
"45ab9cab-845e-4d14-9075-1e9b03f0ddbb",
"507a875c-3e5f-475e-b0cb-8c1d6d501ac4",
"73e0a01c-be92-441a-9eae-af49acf90a16",
"772cb737-eb22-4525-850c-ad97eb9afaff",
"7f7b48a2-6a9e-48ab-94b9-d1fd92dfeb5d",
"d4590f31-f4bf-4066-a8d4-59ed8efd202d"
],
"count": 10
},
"106": {
"chapter": "106",
"id": "2f2ba001-305c-432a-8fef-0430cc2bb61b",
"isUnavailable": false,
"others": [
"7aa3463e-d86e-4cd7-b304-5297bf38ddf4",
"0852a8af-a1bc-44fd-a107-1da67e4b4cad",
"6208946f-c39a-4f59-af3a-607d0f5a4dda",
"6f9404a6-fdf7-4246-a7f0-85715d64bc40",
"c384f7bf-e710-48c9-b3e7-5bf9dd1be0fa",
"b57ba495-4a44-4a12-b85c-dda868cbfe8a",
"85e27399-0ab6-45f0-b3ef-164e1125112d",
"b96ecad8-4907-45cb-9ead-b881957221d5",
"a6df922f-3077-486c-a4f0-0c4474026930"
],
"count": 10
},
"105": {
"chapter": "105",
"id": "6a98f63e-80bb-4130-ad5c-04b658b3c497",
"isUnavailable": false,
"others": [
"cbe10fba-af2a-4ac1-a7e6-c56e7b85066a",
"a10d330d-6cc6-4677-9986-6f92fdae264e",
"1bc6384e-827c-437c-a61c-e7da807f8f7c",
"72d63d11-b51d-4250-bd54-721e31f6357c",
"b8546211-67f2-4c63-bd17-e66e2f02b424",
"e83dbe64-7c00-4c4b-9fae-f39f62ddde69",
"098862c8-cb42-4f04-b66e-7923e9074eef",
"72ea8058-4feb-4076-838e-120b8f65ad22",
"e5383c76-ca89-472e-83dd-0e8426b6a3dd"
],
"count": 10
},
"104": {
"chapter": "104",
"id": "22ad20d7-1012-4fc8-bd38-24084eb49264",
"isUnavailable": false,
"others": [
"c166b62d-ef08-442c-bcb1-0f0acc1322cf",
"4bf39a85-1cfc-4f82-88af-3ec279c34a44",
"2541c089-1fca-4d61-9996-caeef323ba04",
"81e2de51-cb05-49c8-b4a4-5db88e4ca905",
"a5166dfb-7fca-407b-853d-42e43ff9e2ba",
"ac71911d-c23d-45db-9112-006ea2196916",
"a040f87b-1c08-4139-9470-cd4c7437f720",
"c8c2cd63-7f25-448b-862e-3f0110ac7c55",
"aa5b0e45-bbe0-49b8-bc31-e8c3ab3267c5"
],
"count": 10
},
"103": {
"chapter": "103",
"id": "3172e6b6-49d2-4b72-ba30-ebf59b4150a9",
"isUnavailable": false,
"others": [
"4786fbff-35e2-47ee-9736-d0d296bc819e",
"786f27de-f198-4e19-94bc-63738bea9b7f",
"a0d25ca2-4047-4bf4-aa63-bea74a97c62d",
"cdd2a225-e12a-4fe7-a767-c6168c9361af",
"7f15bc03-680b-4934-83c7-1d3b7cc5ca5a",
"17847e9c-8eda-465e-93e9-9b0abcc78dda",
"73c59b72-062a-4dfc-8cff-563b01c00057",
"dec874da-0d7f-46a0-a429-f8a7918dd47a",
"dc00cbcf-9d2c-4397-90d0-8e3c359a8234"
],
"count": 10
},
"102": {
"chapter": "102",
"id": "06776bee-3115-4742-93ab-c6f7bad2c98f",
"isUnavailable": false,
"others": [
"0d81fe73-d7a3-4458-86f1-6b15d6ae8f62",
"483fd8c9-b485-4fe6-a93b-b577e5f7d57c",
"2090f0b7-e57c-425c-8d87-69f935d9bbc1",
"1d01a485-33f7-4401-922b-f5d6499cfff7",
"a2d9eca4-219c-4595-9352-9aabfa78b240",
"4f1b040d-bcef-454f-a581-8a3c3353bfa9",
"95ea6f69-06e9-4a3c-aae3-cd53b9c9dc3b",
"e6d71141-e7eb-4d13-b452-6b2d610b2082",
"f238d2d4-efc6-4c83-950e-8967b68d54ff"
],
"count": 10
},
"101": {
"chapter": "101",
"id": "7c45d8e2-5565-4698-9bd1-3ce03d7a5638",
"isUnavailable": false,
"others": [
"8b864969-b4c2-4b47-9538-68d74720ebed",
"ec079fe7-5009-4ca6-8cec-5e61ba502939",
"f146d00f-f5ce-4f4c-a37c-e08739c2364f",
"51965f60-7c15-4ea0-993a-0d5c25cf29b3",
"9677e9e1-4e31-4f70-8000-83c2edbf6762",
"91f85619-9c11-4692-8ad8-b9dfc47ab35d",
"9ce6d64e-1247-46a6-9b84-2c1340d2f330",
"d49e2c13-7e1b-4f9c-b1a1-167329539492",
"fdd0c7c9-a318-4929-95d1-3911cda04d14"
],
"count": 10
},
"100": {
"chapter": "100",
"id": "17ec87ba-5555-4ed3-a857-e4ef9ccaa987",
"isUnavailable": false,
"others": [
"403d7753-7e75-4357-a368-c054b8f3d025",
"8d8001c2-3533-4a96-a6aa-0c15534b5075",
"e6c73c79-d23f-4aaf-912b-77f7ba6af792",
"1349db51-f9fa-44b1-b90d-45758b2c7d63",
"3c7c0d8f-4a85-4f68-ada0-f86993e9bc37",
"31743817-ddd3-4f8b-9f1a-35faac759138",
"1af92b8d-0d30-4303-927f-04ed419d92b7",
"5652ee50-eaa3-456e-bc4d-e0f3f9c2bb3b",
"8f1376ed-27a8-4562-b946-1bf3d1d58b23"
],
"count": 10
},
"99": {
"chapter": "99",
"id": "e4183a01-6cdb-434d-8d6e-f373ae1c6537",
"isUnavailable": false,
"others": [],
"count": 1
}
}
},
"14": {
"volume": "14",
"count": 98,
"chapters": {
"114": {
"chapter": "114",
"id": "64243afc-6da2-4f70-8c00-9bd1e602589c",
"isUnavailable": false,
"others": [],
"count": 1
},
"113": {
"chapter": "113",
"id": "4b6983bf-4c49-4045-a2c1-f8230a438d5e",
"isUnavailable": false,
"others": [],
"count": 1
},
"112": {
"chapter": "112",
"id": "83c1b2f7-0237-4503-a5b0-6615403910ce",
"isUnavailable": false,
"others": [],
"count": 1
},
"111": {
"chapter": "111",
"id": "1c97cdac-53f4-4899-b539-f073e5245602",
"isUnavailable": false,
"others": [],
"count": 1
},
"110": {
"chapter": "110",
"id": "56b095df-b784-49a8-8f5d-fbdeba9c9ead",
"isUnavailable": false,
"others": [],
"count": 1
},
"109": {
"chapter": "109",
"id": "40dd3005-411c-47c8-b428-d125d727cfd8",
"isUnavailable": false,
"others": [],
"count": 1
},
"108": {
"chapter": "108",
"id": "ab8d3403-9562-4dbd-a898-425838f8379b",
"isUnavailable": false,
"others": [],
"count": 1
},
"107": {
"chapter": "107",
"id": "ab3decf1-a2df-4ee4-9d3f-bc91b83961f3",
"isUnavailable": false,
"others": [],
"count": 1
},
"99.5": {
"chapter": "99.5",
"id": "82944eea-0d63-403c-b686-69b7916a47bb",
"isUnavailable": false,
"others": [
"42154268-5b00-4a54-8f32-4c181b7597c7",
"faeea7a6-23bc-44ed-a076-77021fda98ee",
"3c52be4c-0b15-4ee8-a27d-96d8c83a422e",
"7f57cbd5-59c3-4293-9793-718b7e83a0d5",
"c61e9095-c2d5-4720-87a1-44bd2a9f3d66",
"8c3fe189-4635-4fd7-8572-af7b6bba887a",
"dda146df-b089-403c-8969-10d761025742"
],
"count": 8
},
"99": {
"chapter": "99",
"id": "3ff65227-c294-4003-ba10-cbcefdeda05d",
"isUnavailable": false,
"others": [
"266a1c1d-a4ce-48a8-b26e-366934df2b06",
"80a58657-73ec-4f63-9053-6cae1261b3fd",
"6c025d6f-e3c1-4045-9dc5-7c20abb01c74",
"cc385aec-f9c5-4f43-b01a-415ccb1dba01",
"9fc05fe2-d2b3-431a-91fc-dc24c3caf2fc",
"0cabc4ac-0590-4b8d-b476-d79a22f68c87",
"b45653fa-8764-47cf-b14f-d0d3077573f5",
"ebd055bc-2b2f-4874-a819-4281e48acf50"
],
"count": 9
},
"98": {
"chapter": "98",
"id": "19dcd6fe-a31b-4787-bcce-31ffd2a4a8e8",
"isUnavailable": false,
"others": [
"9fc9e6fb-4dd1-4771-a4b5-d42ebe89ebc4",
"b75fb270-5284-47a0-a717-0ee5a5727c95",
"b9d63e51-2acb-4fd5-8ef6-9231f6122e9d",
"1db3ab92-b1fe-45a7-b4fe-8c6c4093249b",
"836f8aaf-5f09-4ded-b0b4-793b22012775",
"36278bac-9d00-4958-b0e0-f90bd6a0a660",
"8c5df6b0-5a18-42d3-b77b-e7dae007e753",
"96f05796-b58c-41db-b52b-421bd6b0470a",
"d7b1585a-42b7-4f68-9dbf-5d35748f8f70"
],
"count": 10
},
"97": {
"chapter": "97",
"id": "065c039c-7733-4295-9717-e3f10d015642",
"isUnavailable": false,
"others": [
"1fc2ff15-a1cb-4272-9571-1c9104533f59",
"8b978880-520f-42ad-bd3b-9e46d253b3e5",
"b576f1f8-01df-426a-9a86-a0f22604d958",
"f720d22b-e212-4e00-8474-63ba8ebba776",
"8002b290-58a4-4660-9a7b-7542e81db5ff",
"5827d857-1c73-4fcb-89f3-7946b4449d51",
"f1f0eb35-9744-43d4-a1b7-4179504f02b0",
"24ee9a9a-fdc3-4956-a7a6-9a3a10eb0287",
"f7201d8f-fa83-4ae3-b5c2-ac73a31a920d"
],
"count": 10
},
"96": {
"chapter": "96",
"id": "2fa14d0d-7cb1-4f94-b9e0-4202df510e1b",
"isUnavailable": false,
"others": [
"03040efb-ddc6-454d-8f61-b1f91ba98402",
"5a84141f-6acf-49be-8ac4-466529dbe97c",
"a862c23e-898c-4e56-80ba-3400a0ab2968",
"b6e238a3-e081-4df6-8120-c51530cf224f",
"0c04635a-5809-45f8-9fd1-0704e207ba57",
"12e74f3d-80f5-467d-ad55-c0fd4e01f3d7",
"939ecc70-955d-47af-a9a6-7e96d8b17ee0",
"c3f86f0d-d454-4cfd-8507-a97d5da8db3e",
"2486b1b6-2b6f-4b6b-a540-fe30f45f86b6"
],
"count": 10
},
"95": {
"chapter": "95",
"id": "0f6963c9-5322-48ba-9334-a8b62e72e7f4",
"isUnavailable": false,
"others": [
"83885f0e-a60d-4f70-92a4-4943df0b0d78",
"ee22effd-a6c8-4b14-aee1-9ca7db6103d5",
"036d8b4b-8bae-406f-b4e3-5ea6833bd69f",
"8039b2f2-47da-46d3-bbd5-f27e732fd18a",
"5b57af92-6790-4ed2-a13c-5cbf8423b866",
"ef2aae7d-db29-4f58-8684-4c21b226ddea",
"20773571-e272-4262-b006-e87c1fdb40f3",
"47335455-83ce-44f3-a9c6-50dddcd5083e",
"46b249eb-9853-4ca7-a74e-d50480408461"
],
"count": 10
},
"94": {
"chapter": "94",
"id": "2110adc8-9555-4f61-beb4-9f35b164485c",
"isUnavailable": false,
"others": [
"27eae4ca-5a6c-4672-a5e3-d0a001c82d7a",
"774943b6-7dd9-4021-b5ab-b83a2b043ef1",
"d5cae9a8-f5b9-43b0-bf4d-57f474730f88",
"dc756b94-9cac-49de-9476-24415bb7872d",
"03ca44ea-bedb-463a-9c2c-ea3b68c2b562",
"263232b2-853d-4b9f-abf7-22852c760bae",
"425f959d-26cf-468d-9f6c-6f8b084c48ff",
"6de8e85c-54f3-49ca-ae3d-5f0a7ab558ec",
"5d22ceea-69b9-4d03-87ee-ed43a8f3e9c3",
"e3468701-201e-4df7-8856-0482b939ff02"
],
"count": 11
},
"93": {
"chapter": "93",
"id": "0f499746-0bd3-4fb7-a717-5d992bccac72",
"isUnavailable": false,
"others": [
"70fbc959-2fc1-4f60-b77e-481aff555056",
"a59a75eb-554e-4675-ade8-e46b42264211",
"a52f110f-72ef-41d8-bb96-ee4f9d6930af",
"41392441-d044-4222-b565-b72ee8106a9f",
"49c27622-e336-40ea-afcf-8316c6a332ef",
"8ecc1f3e-805e-4472-9427-2a6b3c932f49",
"aa2aa71d-6ad8-49f0-85a4-0ba676d11f76",
"6f825eca-fc91-4d8f-b03c-9d5afed90c38",
"5bdf45b7-91ae-4986-90eb-0ff64c0918b5",
"a52f1505-28ca-48ae-a794-c2e3cdf38fdf"
],
"count": 11
},
"92": {
"chapter": "92",
"id": "4593bb06-c37c-4273-9221-bb09a1172afb",
"isUnavailable": false,
"others": [
"27f02177-0c3b-4a33-99a3-f0e500d8d211",
"2a43ab95-6f92-4f5a-8b30-77d879025fcc",
"3a9024bd-7b13-47b3-b359-b53e74ee7f96",
"76be3975-75cb-4aa9-8f58-9d4885d7d84e",
"66df4960-02ea-4e34-acc5-f60178c9f5b6",
"9b2f734d-d53e-47a7-83d5-f9d53ecaff53",
"bf6015e0-4e27-48a6-93b2-64d2426b8c14",
"d830f54f-582a-4154-bd62-ef41b0ec7f98",
"fcaeb013-68a0-4c7f-8aab-bdb91176f08c"
],
"count": 10
},
"91": {
"chapter": "91",
"id": "a79df5bc-e897-4e0c-a5b2-c5660e6b2384",
"isUnavailable": false,
"others": [],
"count": 1
}
}
},
"13": {
"volume": "13",
"count": 141,
"chapters": {
"106.5": {
"chapter": "106.5",
"id": "542a4f4d-def8-4f8c-92fd-e12c669d58a1",
"isUnavailable": false,
"others": [],
"count": 1
},
"106": {
"chapter": "106",
"id": "cae73e2d-c976-45ea-bd57-4f54e70f4517",
"isUnavailable": false,
"others": [],
"count": 1
},
"105": {
"chapter": "105",
"id": "872ad424-3d9f-4312-9261-e4ab61f8d6f4",
"isUnavailable": false,
"others": [],
"count": 1
},
"104": {
"chapter": "104",
"id": "be123114-1bd1-4639-9360-949eb88d0838",
"isUnavailable": false,
"others": [],
"count": 1
},
"103": {
"chapter": "103",
"id": "2996c021-f77b-4e70-bdba-d76522bc371d",
"isUnavailable": false,
"others": [],
"count": 1
},
"102": {
"chapter": "102",
"id": "b9b71a3f-05d4-4346-9eeb-9ce7a2cec1d8",
"isUnavailable": false,
"others": [],
"count": 1
},
"101": {
"chapter": "101",
"id": "cbe51d7a-aa6a-4d6f-90f2-2162a62fb454",
"isUnavailable": false,
"others": [],
"count": 1
},
"100": {
"chapter": "100",
"id": "53c5f058-91fc-4dbe-88ac-be6660823e3e",
"isUnavailable": false,
"others": [],
"count": 1
},
"99": {
"chapter": "99",
"id": "04636ac6-daf2-40ea-be9d-7ac0372be365",
"isUnavailable": false,
"others": [],
"count": 1
},
"98": {
"chapter": "98",
"id": "ffa4a86a-b59f-40d8-830f-0a42b4dd9b4e",
"isUnavailable": false,
"others": [],
"count": 1
},
"97": {
"chapter": "97",
"id": "dbc49589-a9fa-4118-bd90-1012d9f92be5",
"isUnavailable": false,
"others": [],
"count": 1
},
"96": {
"chapter": "96",
"id": "d5dad8b7-70ef-4dc7-a301-f214ed21ef40",
"isUnavailable": false,
"others": [],
"count": 1
},
"91": {
"chapter": "91",
"id": "20124711-8932-4ab0-bcaa-e04495243caf",
"isUnavailable": false,
"others": [
"e2f3e745-f19b-45ee-89cd-e1444cb9d5a5",
"47efbe52-2be7-4bef-9e4c-3ab100c5d037",
"cb8431c4-b8ae-4666-9df9-a194397a0c0c",
"b3fc0d82-0392-494f-9557-f88c23fae1a6",
"e406648d-4f9c-4de8-bfdf-526c62da849c",
"f71a93c3-ae2b-4be6-b342-3eb0b16e09cf",
"3ad13840-88d1-42c9-bf97-db0b2a1be967",
"cca47179-855b-4faa-bf79-855daef0e6df",
"ae607d1c-b4b1-4d8a-b31f-f453ee6599d9",
"f2736ca3-3577-4a85-a5a9-297bfc6f40e9"
],
"count": 11
},
"90": {
"chapter": "90",
"id": "47c08454-ba35-4e29-8932-e2c3a577dbe4",
"isUnavailable": false,
"others": [
"5247bc8c-2567-41da-97aa-4777d95ea113",
"c1935b9d-1d85-4479-bd6d-3e8eca1599e2",
"b83f175f-70ec-4fac-9b27-28abe9b8d122",
"3be32cea-06ec-499d-a6c4-40bb515118d2",
"c3c12b83-4ccb-471e-9810-403b2ce1066e",
"d5142267-621c-4329-9e93-d7a29f1e3e25",
"3b4820f4-eaa6-46f9-864c-a21f3c0a9bf3",
"9793eadc-fe95-47fa-b1d6-65657028dc71",
"acdfbef1-4071-4863-a674-a82dd43226bf",
"bca7515d-4c18-4657-a0d7-a528d51742a2"
],
"count": 11
},
"89": {
"chapter": "89",
"id": "c71b2bb9-eef2-4ded-bbca-8b2d26693c6f",
"isUnavailable": false,
"others": [
"998f2327-a3eb-4d8f-9bff-d01694164fbc",
"af484b96-1553-4d58-b24f-4c252ac45a52",
"91698445-76db-4ec4-8b8a-85a6d0a4e07c",
"9e0a192d-fa0b-41c8-8e57-c7e94a1969a0",
"1eb1c958-8704-49ac-bd4d-230cda0af230",
"42447252-7766-4f62-9c09-cd378bb599b1",
"a282e963-397a-48de-95a1-5c006cb92ee8",
"4e05a611-d494-4f31-8ce1-72d700bcb65f",
"a305bd27-924c-4c78-9e74-c4e63d2dd1fd",
"fe6d0541-2337-4726-84b7-dad49fc43075"
],
"count": 11
},
"88": {
"chapter": "88",
"id": "77e4a154-4556-4112-b919-5df93b11b3b4",
"isUnavailable": false,
"others": [
"676bccf4-7538-4b25-a4a3-d35ba2ad9686",
"d2edc959-dba5-40bc-9388-7d8dd17c1c94",
"ce21156a-f71a-4b56-b8bd-2992aaaee668",
"f10f8d50-5562-4f43-b6dd-90e63790fd7b",
"410f670a-d249-434b-a010-c46bdb6c007c",
"72926738-d504-4e13-8bb7-495722fcc803",
"fb06b3b2-adef-4fbb-a548-75361340bc89",
"40a2285b-d5cd-4320-90b4-7881c0fcd2c9",
"1cfabb0d-acf6-4e96-bf17-a046363e6974",
"bde1aeda-147a-42e3-aed6-94f5df3e194d"
],
"count": 11
},
"87": {
"chapter": "87",
"id": "0c724468-2654-44e4-8ee7-5f8607162337",
"isUnavailable": false,
"others": [
"5c211904-51fe-4614-957f-4e79181694a2",
"ab7dcf6f-3a88-44ec-b4b0-4a47b1ddcf88",
"510752be-3a58-4654-a2f7-b5f5cb379975",
"dce2749d-6cc0-4f90-b3db-0f7b0751a951",
"f861174f-7d6e-4a82-b568-5832c714ff08",
"f145c8b6-0693-4d6a-ab9e-cebfc0df40e3",
"f479e144-cea1-4738-9cec-1ab4791d4162",
"0298092f-c04f-4649-8acb-613d3f23f505",
"cd85592d-ff7c-42c7-abea-ad89935b4f50",
"f3d40c26-7079-4992-9f9c-dc6c0480e99d"
],
"count": 11
},
"86": {
"chapter": "86",
"id": "609b55e5-b409-41e7-b8cb-cb35509c1670",
"isUnavailable": false,
"others": [
"be2d972b-f5f4-4fae-bd48-5cc610550b98",
"fc611f7c-365e-470b-be64-76cb75e4650a",
"d6477690-59fa-46c8-94ab-3366dafb66f2",
"47189ef8-32b0-4f62-819b-2717cb5a32a3",
"a1ee7b50-17df-4cf1-bd88-4f6389b081ac",
"122ac3fd-20a6-4b89-8674-820d9f64257b",
"1343d289-9c93-4745-a6a2-809f89ef1e06",
"2cef0dbf-2214-4527-96d7-891f9efcebbe",
"7d6afb52-73de-4d87-8ba1-cc62c713ddc1",
"f97a2057-dc22-4f7a-a9c8-71f602dbdce1"
],
"count": 11
},
"85": {
"chapter": "85",
"id": "3fd4ab95-ed33-4e4d-ab54-fa097262ce81",
"isUnavailable": false,
"others": [
"4a745d3f-9f1a-4647-bc9f-ce2ae7028f5e",
"92916268-480c-4732-a5b5-6953d23ec7ac",
"330fea40-ba1b-4ac7-a7bf-f7db09d82929",
"cd434e9b-abf2-48ae-bae9-6d1450fa54d4",
"9811a12d-deeb-4f93-9cd4-c7095a8112a8",
"fbd7c49e-cad1-4cbd-8fe1-bdbdbc796fbf",
"423761fc-b1f7-47c9-99f4-0468a0148b33",
"126096b5-0dc6-4b02-85b2-e4508d7f800f",
"5ed7f998-f9c1-482f-8b7f-dbc55eee39ba",
"b0edb3c0-b534-4de6-88aa-f74ad3bc2cbd"
],
"count": 11
},
"84": {
"chapter": "84",
"id": "426f5773-40e3-4746-8997-f3ddd01d85b5",
"isUnavailable": false,
"others": [
"4c471665-e6fc-4741-aaa6-a409770318f3",
"63d29515-5c3a-4dec-a764-30968d681f7b",
"e92d82b6-0e10-45e1-adf1-ea3ac576cb56",
"f3cc1b1d-a8e8-452d-8c33-2b683478862b",
"f070d7d9-7fd3-44e1-a53f-ee1969ed358a",
"13fc51ee-9bbe-4208-94d6-f18af62260de",
"6ba4342d-4a32-4257-8c71-40e1b3738e7e",
"a6e99a7a-d544-4401-87eb-79c25e642e91",
"db024bb3-f853-4fe1-a793-18aeca365d33",
"c0148470-b71c-4f2e-8c9f-4c358e349d07"
],
"count": 11
},
"83": {
"chapter": "83",
"id": "30ba7b6e-0e98-403d-97f7-6074fbb47e99",
"isUnavailable": false,
"others": [
"2c67f8cd-c0cd-41b6-bbf6-63ef9323749c",
"5025a977-944d-4c94-aede-e7e6659def4f",
"a9aeda9c-241d-4f43-b13a-ac425746d541",
"2ea58fe4-f830-4d83-b968-498036da5b1e",
"a8a24b25-8eab-4d29-b82e-b4d91e7ea9a9",
"7609c2ed-f606-4989-8709-847c6ece5fd9",
"a297ca48-61d1-45e5-8ebb-9dea6c13d266"
],
"count": 8
},
"82": {
"chapter": "82",
"id": "3a7a92a0-fb0c-436c-aa99-c716a2777e06",
"isUnavailable": false,
"others": [
"e292c3f9-9bb8-4428-b4f3-89e7f3447150",
"75ed4028-1815-4bc1-8292-e829889b43bd",
"73c65d2a-cdd6-42d4-b728-b292fa400102",
"5dd0b01c-487c-4a72-b6a9-131037b0a4e9",
"7d0c8acb-24a6-4080-86d8-586d2d055d4b",
"a6298340-f374-4fdf-8888-e56e5b49ff20",
"b0987d93-f9cd-48be-b379-05b60763d42f",
"a0fbdff9-7f89-4489-8f40-b80ef0c6c76a",
"6abe11c9-9a15-44fd-bf3d-100641178349",
"cdfa379a-f7ed-4b34-ba0a-42ebb3f5313a"
],
"count": 11
},
"81": {
"chapter": "81",
"id": "25dc0dda-7ffb-4126-9008-2a348b681744",
"isUnavailable": false,
"others": [
"13af5ec3-f761-4df3-af1a-88bf44b8199d",
"76d11875-dc46-4e56-a47c-8b8b180c1079",
"6e6a0d3f-a9ef-4866-9cb4-6530b96615f0",
"6737647e-072b-4fb3-a996-6c70e425d45a",
"a8dca179-dddc-4a21-a6bd-47536eb7d6b3",
"e44bbbea-f4eb-443a-9cee-bf3454d55e19",
"f7564092-86bf-4fb1-80ec-236b36134662",
"0fb49441-1240-4479-a402-36c5932ce3ad",
"563b9db2-968a-401c-92bc-ff69a27236a4",
"b918fe64-1ce6-4e46-8e92-dc5bd98d9a71"
],
"count": 11
},
"80": {
"chapter": "80",
"id": "1e8af98e-b87b-47ab-be65-6c45554fc1c3",
"isUnavailable": false,
"others": [
"81557d38-05e9-4028-b92b-25984f3667ad",
"39b77440-c06d-4f5c-8b61-601c53270f28",
"8a7a65e7-d0d2-40ab-89ab-d1d27f8377ff",
"9bb353d7-7965-48cb-8ad6-a8ab2a6169d7",
"e5087770-34a8-4159-ac72-be3304bc9fb0",
"13b67b13-7801-4955-b8ba-da42a8ddd25b",
"954f6d65-6934-4922-8e1d-91c5df143e17",
"ba21e856-ebf0-4693-8fe9-d58331c6abba",
"af61d065-19bf-40d3-91e9-c2285dbb8c8a",
"c87ee238-5507-4ccd-b0ec-07466e4d3d94"
],
"count": 11
}
}
},
"12": {
"volume": "12",
"count": 120,
"chapters": {
"95": {
"chapter": "95",
"id": "6bc02c4e-d8e5-48c5-af62-c346189b6379",
"isUnavailable": false,
"others": [],
"count": 1
},
"94": {
"chapter": "94",
"id": "4db298dd-5e51-4dde-bbae-b5268a687164",
"isUnavailable": false,
"others": [],
"count": 1
},
"93": {
"chapter": "93",
"id": "a10c39da-7488-45cc-bd19-70297079aa90",
"isUnavailable": false,
"others": [],
"count": 1
},
"92": {
"chapter": "92",
"id": "7090a14f-474a-43c7-8b56-dce80e26ca9d",
"isUnavailable": false,
"others": [],
"count": 1
},
"91": {
"chapter": "91",
"id": "ee644b93-4f6d-4b86-912a-93b0264a1541",
"isUnavailable": false,
"others": [],
"count": 1
},
"90": {
"chapter": "90",
"id": "13004157-839b-4785-962a-bbd64376f2b3",
"isUnavailable": false,
"others": [],
"count": 1
},
"89": {
"chapter": "89",
"id": "254ec6aa-0664-486d-a1f9-5be340d0810e",
"isUnavailable": false,
"others": [],
"count": 1
},
"88": {
"chapter": "88",
"id": "60e32ef7-42f2-4ed5-8353-9244a80879fd",
"isUnavailable": false,
"others": [],
"count": 1
},
"87": {
"chapter": "87",
"id": "9516c112-1689-41ce-8549-2c407156a90c",
"isUnavailable": false,
"others": [],
"count": 1
},
"86": {
"chapter": "86",
"id": "c47465a5-4b1b-4596-b999-bbcac90849e1",
"isUnavailable": false,
"others": [],
"count": 1
},
"79": {
"chapter": "79",
"id": "1505941c-06f7-44d5-970d-0307ec60bb7d",
"isUnavailable": false,
"others": [
"8674af1f-aa0b-4dd5-a591-4f71937515b5",
"5a65ccef-124d-4670-aa19-0d0c2a503e66",
"bfbe88ae-af30-44bb-8893-c5c3c2773d90",
"89f1c184-dd10-4e33-95db-f7c243fefcdd",
"e1343d88-3a6c-4fea-9267-d98cb2696a24",
"8b6e5525-a728-4075-86a4-1e1f24d97030",
"d8cf0b4a-86d9-494b-867c-8c8fd6480ade",
"214a0642-1adb-41bb-8072-3d90407cd2da",
"13239e62-d4fd-4757-9d43-bfcca84c9872",
"afd7ae2e-d149-4f22-a91e-8a680ff43ed0"
],
"count": 11
},
"78": {
"chapter": "78",
"id": "2be3e89e-ea64-4883-a9ea-a2058a87f03d",
"isUnavailable": false,
"others": [
"5d325da5-7f22-48e0-8142-d01a6418cb08",
"eb176504-b2da-4b82-b6b0-dca93daa7c11",
"83926ca0-af46-4d58-a985-a2f004c701a3",
"bfc215c3-3e8a-4394-95d3-deffa8197392",
"31b1cfb7-0fcc-4f17-aa9d-3fe6508e21d2",
"742509d2-d4d1-4a01-b6cc-64fe21ee53ca",
"8095bdbc-6bf4-4e17-86ff-c3e54261ef5e",
"943d8fbc-110d-417e-a804-0a3032890aaa",
"df9475b4-2dba-4fad-b89d-a6dac3607f9c",
"f5e50b4e-25a6-4b3e-8ad5-996c9193fe62"
],
"count": 11
},
"77": {
"chapter": "77",
"id": "73dd36f0-8ce5-4fce-a2c0-1c44732c3b10",
"isUnavailable": false,
"others": [
"9b0b3e7e-2cd4-447a-8ca7-a9485006e0b9",
"d906cf81-8bf4-478a-ae2b-015b625f1f75",
"17ce3b4a-738a-41bc-8453-cf2139ab3917",
"22a411d8-7e91-4247-85c7-d2c8ffe53421",
"6236272a-3bd3-4d41-8b1d-a2f7a8acc07c",
"9502c81f-bfe9-45cc-8db7-19fa461a4a6f",
"279dd9d8-fac2-4a0b-b0e9-4965a03c701e",
"6e231d8e-5fb0-463e-be59-edf838a6c2af",
"640b8683-1b9c-4870-98c3-6642f9cf9a71",
"e373ab91-39b0-4319-bc7e-f2770bc8f3ff"
],
"count": 11
},
"76": {
"chapter": "76",
"id": "05cc17ab-d6c8-4402-81bf-c8bc1a885c0e",
"isUnavailable": false,
"others": [
"200f6173-2aa1-491d-8b9c-e9927aadc4ba",
"52ea2195-23c1-45d2-9d65-87c2db064c12",
"7d314653-ef12-4f5f-a197-c9435ea62a22",
"a487c0d3-a785-483a-996a-dc00fcdc76ff",
"b0dcb03e-1dbe-4ffb-ac3c-ee2da37e1d44",
"d0289ed8-65df-460a-bbce-742f1a2b7042",
"4432be6d-a15a-4fd1-8c53-d73f56247b51",
"ba928017-3bb8-456c-8dcd-c97bc38e2d2a",
"3f36d9c4-0af6-4889-b32c-dba869174b59",
"2b63849a-6eff-427a-a833-3c891e7ccb1c"
],
"count": 11
},
"75": {
"chapter": "75",
"id": "1d1c75fb-be9d-45b8-8e0c-78cfa8ea3474",
"isUnavailable": false,
"others": [
"2e8f30d5-efce-47d7-ada4-63e8e72332cd",
"59736e31-d25b-4fab-9502-23362efa6b37",
"e95c3b8a-3473-4869-ac4c-b2119281f061",
"87322c8f-a9d9-49a6-b656-eccbce9e67bd",
"d0fd8e52-0e6c-4c36-9b71-20dff038e2ed",
"d58b4dbd-2656-485d-8ebd-9ea24f59c6e1",
"fa67f97e-4da9-4858-b297-1b4c532c8d21",
"13853e72-4425-4d1e-acd6-f1744d0da3ab",
"3241cecd-93c8-40e7-b7dc-6ef653dcaedb",
"ae07d326-4b96-4d19-8a6c-03fafbb1cd29"
],
"count": 11
},
"74": {
"chapter": "74",
"id": "03097594-6201-4f3d-904f-4b471a530e1f",
"isUnavailable": false,
"others": [
"bf1dd75a-f28b-418e-adee-2ff50013b8bf",
"bd8669e9-ced3-432a-8ae8-8300a9402637",
"8eda8cd6-8a64-4f6a-9e8b-9e4cedb69266",
"3ad83a76-5acd-457f-88b7-76c4cfde70ee",
"3b8f745d-b54a-448b-b35d-72fd0cb77d3c",
"88f476fa-aa7a-430b-83ce-f206fa735928",
"b55773a7-6c27-4998-8489-c70afde856be",
"be3ef14f-3a3b-4028-b7b2-32c197ae0469",
"9e1bc5ce-1baf-413f-8744-1ff58b88b214",
"3fc2362a-3520-46c6-9ef1-2eb9a944483f"
],
"count": 11
},
"73": {
"chapter": "73",
"id": "19ceb463-6d98-4fc2-9f97-c6f95152188f",
"isUnavailable": false,
"others": [
"26dc2d65-bc84-4179-b674-23af85fadf5e",
"d73090ad-b5d9-4edc-8fe1-a2865b41c209",
"de3098ff-5525-404a-85ca-2438b13d2fec",
"d887f3b3-d7ec-4e52-86a5-b5c36ce30174",
"0a5563f5-8ec5-4a44-b6f6-bb3c61f2bba7",
"05434132-bdb0-4948-bae8-aa9154dab912",
"2615b8e3-5c5a-4a78-ac4d-a68a05829dfb",
"7f063e90-035a-4ac7-b992-bfda0bb13514",
"ef32b62a-3b1b-4df5-8acc-a6d0c634c66c",
"7ac803d6-7e20-479f-a4d7-35772ccb1462"
],
"count": 11
},
"72": {
"chapter": "72",
"id": "1abcf4ca-c3fc-4fd1-bb34-083804d0682c",
"isUnavailable": false,
"others": [
"da7e408f-bff7-42d5-a74b-17609beb5f4e",
"5bb13652-dc46-4780-ab29-687ff701dbf4",
"db7651a8-03a7-4c1a-8e21-0185779e53f3",
"010956e5-f0cc-4bd3-8c26-eec50c4a4f3e",
"2e7fb027-1474-40df-a696-7d337fa22d90",
"689980e5-ee14-4fb7-b5e9-acffbe713ef0",
"b7df40ba-301e-4827-b718-1bf2ad342068",
"cd5dfec9-9eaf-4590-afda-2f5997dcb577",
"ccc9488c-244f-4fd6-a6b9-c8d113c5da96",
"ea647d1d-557c-41b4-be0c-b99259c53981"
],
"count": 11
},
"71": {
"chapter": "71",
"id": "0d6729b1-4e4d-4484-a67f-e36b659073fa",
"isUnavailable": false,
"others": [
"bdbaec13-1a31-4ff9-9f44-bd3b67ab5f69",
"9261b072-4aac-4308-9127-184b6a093853",
"c9ef8a5d-ad5c-4394-8c18-e5115ca83e87",
"b0476ec1-6369-4aca-9bcb-05c8d97c1ffa",
"02f21829-35ab-4cd0-8ec7-22a9a969e69d",
"02f85ffa-8e68-469b-9c95-1eaf4fa89bf3",
"228fd885-8765-4eab-af20-1965a1cec209",
"d3d7ae94-ae4d-4f2b-8d47-3429681c1fc5",
"db57731b-54f2-48f0-a41c-7b2aa6208f8b",
"f1663748-228f-48f9-a209-6b19b2764cc2"
],
"count": 11
},
"70": {
"chapter": "70",
"id": "43df0f5a-1ea9-44b6-bb4d-f9b156f72958",
"isUnavailable": false,
"others": [
"7b1ceada-af11-4fa9-829a-3c0eec0ca8f9",
"34c02ae6-0f0c-4ede-a9a8-0be651bf6862",
"1fdebe14-959a-483a-bd9a-18d669353da8",
"4f76ea6e-0355-4350-9e86-65ad4c78b040",
"50a86458-0d23-417f-88bd-75be5758f8bd",
"9d909aff-019e-4e84-9aa1-5e23604c4710",
"aef940fd-ddd1-44ef-bdf2-f8c1ef717e9c",
"bf8e9be4-e6e1-4007-ba29-baa5748acb77",
"a852b7c9-efa3-4197-b178-eff1d3b3ae5a",
"e16313f2-8971-48d9-b25c-7a72151ad7be"
],
"count": 11
}
}
},
"11": {
"volume": "11",
"count": 132,
"chapters": {
"85": {
"chapter": "85",
"id": "b7d4467a-3249-42e8-a676-88b74377b2f5",
"isUnavailable": false,
"others": [],
"count": 1
},
"84": {
"chapter": "84",
"id": "5dd7e399-02bd-47ea-877b-fb65d522d9dd",
"isUnavailable": false,
"others": [],
"count": 1
},
"83": {
"chapter": "83",
"id": "b990229a-de42-4557-a28b-f018647f192e",
"isUnavailable": false,
"others": [],
"count": 1
},
"82": {
"chapter": "82",
"id": "2a876099-7b15-4d69-9573-4f1b6155b5f4",
"isUnavailable": false,
"others": [],
"count": 1
},
"81": {
"chapter": "81",
"id": "2f578e61-ab4a-45ab-9ff0-6cd902aa3143",
"isUnavailable": false,
"others": [],
"count": 1
},
"80": {
"chapter": "80",
"id": "9dfacdeb-80be-42e3-ae25-313ad04fb7aa",
"isUnavailable": false,
"others": [],
"count": 1
},
"79": {
"chapter": "79",
"id": "fdfeeb26-6776-4c17-9149-3b435da7915c",
"isUnavailable": false,
"others": [],
"count": 1
},
"78": {
"chapter": "78",
"id": "2ebbed6b-0c1b-49ab-adfb-f8eaa55dd08c",
"isUnavailable": false,
"others": [],
"count": 1
},
"77": {
"chapter": "77",
"id": "7f5cf2ff-a275-4ee1-90a8-039556bcd471",
"isUnavailable": false,
"others": [],
"count": 1
},
"76": {
"chapter": "76",
"id": "78bb2360-0679-4e55-89f8-fc21a724cbd1",
"isUnavailable": false,
"others": [],
"count": 1
},
"75": {
"chapter": "75",
"id": "e411d583-4f01-406e-9dcb-8e0c6b857d2e",
"isUnavailable": false,
"others": [],
"count": 1
},
"69": {
"chapter": "69",
"id": "328a46a5-0459-4d2b-bbeb-5b188ba7741f",
"isUnavailable": false,
"others": [
"3ccc3732-0076-4390-b011-19a3d31f4051",
"34900fbe-35d2-4bdb-8be2-2e4123b2e0ff",
"0297795b-2c88-4698-9650-8b430a7aefc2",
"a155aac8-8e08-4677-b7b0-4e19ba3adc1b",
"df4cdb60-1592-4a18-ac2d-f0caeae20cf3",
"d3bb8a0b-5648-4cad-aadf-75e1d82b0da3",
"1adabb80-9499-4f95-bb27-147afb19265d",
"577080b1-7f63-4c85-81f5-5606259c6958",
"44069ac5-f453-469e-bc24-b845c700f86e",
"7661009c-d499-402e-bcba-7d9125569f7f"
],
"count": 11
},
"68": {
"chapter": "68",
"id": "53ae7f76-bb2f-47a4-9b2c-2695423efcb1",
"isUnavailable": false,
"others": [
"2f16249a-2806-4fa9-b6f5-e3fbef8691b5",
"43f83318-1c27-44f8-b2dd-8e608642ffee",
"6d87c9db-e7be-4ff8-93bf-bfc07cf3a5d6",
"c9966564-bd27-472b-8974-fe1e218e40f7",
"b2ea94be-5eb2-4216-87ca-580b1caa4dbe",
"53c7415f-640f-46ac-ad0d-1bfc6e91426a",
"37122adf-f8d6-43a9-bb18-dd80eeeb5fc9",
"6d34e2ee-6dba-4647-9238-3a71ea178d0b",
"c65ec8cf-87f7-4765-b892-0de9e4437834",
"eec17bdb-d322-432c-a9af-fecabf506f8c"
],
"count": 11
},
"67": {
"chapter": "67",
"id": "0df5e983-fc1e-417a-a418-84b2a15d893c",
"isUnavailable": false,
"others": [
"bf1944ae-65d0-475a-9dcc-5da38ea9176f",
"101af12a-6799-4f15-92e9-a23be93e752d",
"37210bdd-aa41-465a-9e3d-75ff04762cff",
"788e4364-f804-4cfd-be81-c0498cfd8390",
"c1148231-6e3b-4253-a551-4554055d6ab2",
"ce0b551f-af31-4d83-9521-ece46dbf99ec",
"7dac80dc-82f7-40f0-b25f-9b93477ad092",
"8e7afd0d-1f91-4e7c-8b82-e5bb84880690",
"ad4c1d10-159e-4a2b-890e-a482ac4ec5b7",
"c7531b9f-08fd-41d1-ac55-0de24235779a"
],
"count": 11
},
"66": {
"chapter": "66",
"id": "32abc9d2-0aea-4e1b-82a6-fe7a19e26332",
"isUnavailable": false,
"others": [
"1abf0200-c0f1-4416-8b2e-de452c79fbdc",
"bcddb14d-0a0a-4004-bd80-9337fc5c3a28",
"8c15021f-aa1f-417d-8750-9e50ec306b84",
"db7b06e1-c39a-421d-94f7-25adfde61e44",
"3180a647-09d0-4cd7-9f55-586c6d47fef1",
"5abfe89b-9b7a-4853-952c-86256466b943",
"d74de6b4-8d90-4b80-9f0d-6ca240566b0c",
"a0ec1322-532a-4f3a-ba9d-8c17325af104",
"ca460f27-e161-4242-91e1-b90dbd8e7fc3",
"c43f18fc-3c29-4dd5-911b-4afe6b8fe9a7"
],
"count": 11
},
"65": {
"chapter": "65",
"id": "21f26b57-15a3-4e7f-a619-de2d4fe56767",
"isUnavailable": false,
"others": [
"26418b9e-e2b3-4d2c-a679-7d1c1b76a0d5",
"67001e05-63a1-4a20-a385-1b286a46caed",
"635f851c-ca9d-4e70-9ad9-3bd62ebee007",
"053d8ee4-3eff-4f81-9ee1-853388fc7bca",
"3d511c9c-f4f5-4072-851d-4f6549868942",
"b618e3b8-fec0-4f25-948b-6cf7158a59fd",
"96afb35a-88a7-4382-97a1-5ae187505f75",
"f8a1eb0b-e5ba-4d28-9af2-af66f038e442",
"86093934-f04b-45af-b3bf-55288df72dd9",
"e988f837-1e3c-4b3a-a727-435bcc31d266"
],
"count": 11
},
"64": {
"chapter": "64",
"id": "760f869a-c400-4ac1-8c2d-4dfb2a860d17",
"isUnavailable": false,
"others": [
"9fae3b03-b5c6-48f2-b67b-5c3500c1e14b",
"067889c0-94db-41ca-9cc3-ff3e6d2e3bef",
"9c2f0d68-c310-4f87-be46-18a14718c2a5",
"fd07f140-491e-4d4e-b195-e9b3710becdb",
"d7327c54-9251-4e7d-86c7-da1904c80cef",
"e07d7efc-37f0-4484-b55f-2e812a1605ec",
"03b99ce5-c7de-4b2b-b044-6442e11b7a5b",
"67656ec0-44e9-4892-80d3-c96c393abc5a",
"8c50e3a6-1055-4792-98d0-9c48484ed011",
"f6c60a51-9c93-414a-a73e-d0dfb18d0a59"
],
"count": 11
},
"63": {
"chapter": "63",
"id": "0bd9fa22-f582-4f99-a09e-62e05ed2c4aa",
"isUnavailable": false,
"others": [
"38abfc46-6b05-45ea-a167-6653ffc80eab",
"e706e1f5-1346-4cc5-b317-84ecbe518739",
"f99b0b40-ac47-4c74-9f52-36e6d3859231",
"37ea85fd-e6f6-41b8-8b9e-c3a94f475c17",
"15a0a8ec-7ed6-4f0c-90c1-cac7e902198c",
"c2110aed-f9a8-4386-adf5-1d51d10c2fbe",
"9e97db43-b8f2-4957-8599-58d471a8524c",
"b81c018f-5a15-4c0a-ab05-8bab24f66604",
"e5123e0a-664e-4e34-b56b-0fbb0fe4281d",
"46a5cfc9-c8d3-48fa-bf87-0b27732c0562"
],
"count": 11
},
"62": {
"chapter": "62",
"id": "3d74adfa-6df8-4d11-bb3a-acdfc2e83b1d",
"isUnavailable": false,
"others": [
"4d46c4b4-8f52-4ec6-afed-5a0416b4eb9a",
"634dcc93-1b50-473d-add3-73f19307156c",
"54fe1a5e-df25-4f3e-a4bf-ba78ae14dee6",
"3210a676-3eb1-45e6-8c99-417b4f06cf18",
"5b82fb33-8aef-4fa1-a56a-b913193d0389",
"5de9b119-1015-4b78-b466-56a5639d8ffa",
"172aaad4-1f2e-40f9-bb91-c18d75b31985",
"85440e11-b88b-4706-b157-5bb86a3798f1",
"d6934639-b090-4787-a428-6f8875bebbe5",
"e958165b-c8b9-4e75-97c9-ea0bd05b52a3"
],
"count": 11
},
"61": {
"chapter": "61",
"id": "0a9890f1-e298-440a-9f3c-15a5f3807126",
"isUnavailable": false,
"others": [
"02e14131-c4a6-4ce7-b241-d357262368b6",
"5e5cf7e5-2b24-4fdc-a926-b8253098218a",
"523a27fd-f95a-454b-a3da-e585c7e1c05c",
"74a57f20-f757-4268-a122-61107dc71f63",
"9a5a6419-c0d9-4009-8ac6-c2b8e9787ffc",
"f6613cc8-2db1-444b-8b3f-89bd63a2c841",
"d67c1e06-97b0-4376-b701-888230b57894",
"b2eacb65-02f4-48af-987d-4e5006f405c3",
"de86007d-8b75-4e3a-9561-b5efdb46a581",
"fc706d47-5e7a-4b4b-965d-4555b420faf3"
],
"count": 11
},
"60": {
"chapter": "60",
"id": "880e9bb7-5c37-4799-89c8-aa3362b51340",
"isUnavailable": false,
"others": [
"c688d67e-2ff1-41d7-804c-57d600102880",
"c7a1e535-97cf-486d-9ba3-ae4aab3dc931",
"898fe3ca-8179-4faf-8112-85cbbd376dd3",
"9f1be05d-6134-4437-8b59-4347629d660f",
"35486766-c050-4076-b180-d33938ba6c64",
"6926b924-e031-4003-b7fa-01ea777612fc",
"b76ce44a-5b2e-430e-8f86-21383395d04e",
"d60551f5-fc24-4d11-960d-34f2d47627f1",
"633c22d1-0b50-462a-9771-2ab32b8c240b",
"fbf48fb2-c782-434e-a96f-6834841e054f"
],
"count": 11
},
"59": {
"chapter": "59",
"id": "9fc131dd-70cc-4fb0-8404-6b8a5140e68c",
"isUnavailable": false,
"others": [
"e1ea0c50-c79f-40a6-8de2-0001d71d6591",
"3a7cb2a6-1548-4d34-8f9a-1dd1bf93e310",
"954fe4d8-424e-4d6a-a4b0-77f1510e5654",
"cb284a97-d865-495c-9ea6-f9962785b20f",
"c407a395-c755-492e-95d1-0189111885e9",
"4de8a690-b607-49fb-9143-c89ce495358b",
"48310d38-450f-4bdc-a0f3-93a01150107f",
"5903ac3b-b410-4b94-a523-4737bdea4e00",
"be7a1ed5-2189-4010-b19e-64e9c9f4ad69",
"9a987acb-9db1-427f-83c5-92cdbd155969"
],
"count": 11
}
}
},
"10": {
"volume": "10",
"count": 136,
"chapters": {
"74": {
"chapter": "74",
"id": "fc2d12a7-8fc5-43b8-af56-e8d62c420359",
"isUnavailable": false,
"others": [],
"count": 1
},
"73": {
"chapter": "73",
"id": "2514b292-faac-4b45-bf73-0aa04995714a",
"isUnavailable": false,
"others": [],
"count": 1
},
"72": {
"chapter": "72",
"id": "3a76f84a-1d0b-4cbc-9f7c-3ff00b735f41",
"isUnavailable": false,
"others": [],
"count": 1
},
"71": {
"chapter": "71",
"id": "c2d6e828-8ee8-4635-9e24-8476d4b950ad",
"isUnavailable": false,
"others": [],
"count": 1
},
"70": {
"chapter": "70",
"id": "c79e0133-a500-4dc8-9537-a0faf0e32319",
"isUnavailable": false,
"others": [],
"count": 1
},
"69": {
"chapter": "69",
"id": "7e111eff-d64b-4fb0-87dd-3acbfcd8070e",
"isUnavailable": false,
"others": [],
"count": 1
},
"68": {
"chapter": "68",
"id": "8bf93de5-087b-4122-8f2e-b54c2261bd59",
"isUnavailable": false,
"others": [],
"count": 1
},
"67": {
"chapter": "67",
"id": "5626d4c6-caa4-4389-a986-64b61102d2bc",
"isUnavailable": false,
"others": [],
"count": 1
},
"66": {
"chapter": "66",
"id": "09ee94a8-6320-450d-b85f-f962a03a252c",
"isUnavailable": false,
"others": [],
"count": 1
},
"65": {
"chapter": "65",
"id": "f6fad2da-b58c-4e02-83d7-8fedef94fede",
"isUnavailable": false,
"others": [],
"count": 1
},
"64": {
"chapter": "64",
"id": "ba371cab-c72d-42b3-9b36-96970072de82",
"isUnavailable": false,
"others": [],
"count": 1
},
"58": {
"chapter": "58",
"id": "2626abc8-e213-4fe9-bf09-f9daf9da9d74",
"isUnavailable": false,
"others": [
"ab937aec-8781-499d-97f5-788baf32f530",
"90f73a7a-3756-4f34-893c-50fd4cc54003",
"de4cf4ab-8be7-473f-8fd7-05c34d172d1b",
"f6b13c36-11aa-49b2-8bfa-d39a86e7d0eb",
"6c7a0629-9f81-414e-9653-fdb1da209e2d",
"623f8064-5308-4a6c-82e4-b388796df6f4",
"cf0a3058-7e30-4118-a7bd-d268a67ac135",
"cf5a0bd4-6853-4358-9416-0c6879c6b11d",
"bd1c4765-96fa-4fb1-b80e-c61f00dff936",
"e129404f-c6a3-41b5-aa98-abd5fb02a9eb"
],
"count": 11
},
"57": {
"chapter": "57",
"id": "76cdb0e8-1228-4fe2-94e0-8eb17eba8df4",
"isUnavailable": false,
"others": [
"8bada421-c198-4081-9877-4622567fd26b",
"03cc8871-bb4b-4c95-ad03-235f58bf745e",
"d09a15e8-26d1-4e83-bdc1-2c8b04595b85",
"c963fc9f-25bc-421f-9ae0-a01c7b108d73",
"b854180c-477b-4e9b-92f1-500a4dba2708",
"cfada62b-15c0-45c6-971f-6ea4896b582a",
"96bdb777-d176-4b64-af14-9f933fded8de",
"b26961aa-01d4-45ba-a1d0-d1106e74def2",
"dce5ddb9-a6f6-4502-9fa9-ac0b3ef31ad8",
"fe6f8cf5-30e6-4d8b-852e-14f16d3e02a1"
],
"count": 11
},
"56": {
"chapter": "56",
"id": "17005306-2242-4df7-84f8-6ef7ba02f26c",
"isUnavailable": false,
"others": [
"954a1e92-0403-4830-8f19-346d3ed9859f",
"8e97ffc3-ee9b-4432-b1f2-87234221461c",
"44a6db71-80cb-4fdd-b475-b4910b3c2675",
"c7a3bb62-015b-4003-88ae-a2635c612f59",
"e22b8ca1-65e5-4bbe-916f-8b6c9e169348",
"de0f5eba-53db-4697-926a-061c62f94199",
"27425a79-b1c3-494a-bc3c-28be8b113cd6",
"36b24959-c2f2-4eed-854e-afa92ea04ae9",
"dcab5bb4-8fde-4db2-aef9-560db2c895c5",
"ce7c2c5e-324c-4d74-bce7-2482466286c3"
],
"count": 11
},
"55": {
"chapter": "55",
"id": "c7ab6c16-b196-48dd-a040-49190d85d185",
"isUnavailable": false,
"others": [
"c4106c4b-7a03-4029-a141-9626e957ed36",
"f98333c7-1d94-4f90-a40a-7350bf56fcaf",
"2a294e6f-1b1e-4cca-a212-7c52737ec108",
"440299ef-72d0-45be-b9ef-c131ed6d8200",
"75cf18f0-dea4-4491-a24a-ef9db40ed30f",
"737aefb9-4dd7-450a-8346-d47b89554cad",
"508af007-4406-48bd-97d0-dd5c52974cec",
"92be2e45-300e-4567-9c9c-c3d7cd560ed1",
"4c560c55-7935-40ff-b60f-f725700d2889",
"d3cdc5bb-d16e-42e8-98c2-7400f39509ed"
],
"count": 11
},
"54": {
"chapter": "54",
"id": "2cbc19ac-d9ff-45ba-b41a-ed9553d61146",
"isUnavailable": false,
"others": [
"3d611487-3e09-42d3-a8ba-332b37a58b1b",
"68f20714-6a37-4cf1-a829-71315f9748fc",
"7cc14742-048d-4fea-bc3c-ac993d2c6e8a",
"c608c246-bfff-4506-805d-fb08f0b77f3f",
"ef214161-1f50-49ec-b00a-93ecea678366",
"e2b96b19-a311-43de-9c0f-184bac2bba9e",
"3c4de298-6d8d-4f14-ac01-7cc22938a55b",
"d25f166b-dfd3-4b80-9e8d-e311fb0319e5",
"f87946c1-3c31-4ff0-a83f-562462988123",
"f7680336-9904-4831-b657-5da8eca86738"
],
"count": 11
},
"53": {
"chapter": "53",
"id": "064770b6-7c73-40fa-9df3-66dd8af270dc",
"isUnavailable": false,
"others": [
"431e89c5-4510-4267-a58f-ae8733491b7d",
"5facd585-ace0-43e9-9e08-7315f1da7c73",
"af73d46b-b6b2-491c-9163-5dc4273114c9",
"df1330cc-7aee-49fa-8fc0-ed918d4bdf20",
"0c18d030-b0db-439f-84a8-7823eccb73f6",
"1dce0014-a559-4d6b-8109-665d1b7511b3",
"601aedc0-168a-4f49-bb04-d505c119d5ba",
"a8c7a6e1-b81b-4c8a-bf06-e95b7d361c9d",
"1decd1e5-df25-4414-b343-7167e86589b4",
"9012ce18-862e-4f28-8a61-a47770123d71"
],
"count": 11
},
"52": {
"chapter": "52",
"id": "3d958056-c534-4fc0-994e-1b122b28ffe0",
"isUnavailable": false,
"others": [
"84cbace3-99e7-4b6c-bcf1-d689feeccb1b",
"5e3783df-4925-483c-95f2-86c7762a00a3",
"502ea442-373a-4f52-9f51-779c932519a8",
"4016358d-1e47-4a42-afd5-e9c27c2ef37f",
"ae08d04a-b2c8-44f6-b568-7c5abddce55f",
"90736b04-c4d2-42bb-a4a6-17d523c1b1e8",
"4e366416-9bc6-44d2-94e4-28697e3758f5",
"860b04b0-b7ba-4a1b-9efa-442f97418cb1",
"a69008bf-da9c-48d8-a1b8-5f3d94ad9cef",
"ac04c1a6-1078-4164-b8f7-88b9bff533bf"
],
"count": 11
},
"51": {
"chapter": "51",
"id": "06495e56-5889-4fd8-8509-6640959df346",
"isUnavailable": false,
"others": [
"56055ab7-01dd-427c-b8d7-932a76b51975",
"80ec50c8-881b-405b-b939-294b9afd2bfa",
"58496d78-1da2-4183-a217-990d0966237f",
"6b7e690a-4747-4295-b89f-ff67954438f5",
"e3a8c91f-ad67-4109-9d35-45ae80a01068",
"f88145cb-d705-4fed-9f54-c12f8b1e3994",
"fe861651-0f6d-4ba9-98d8-41f4bd2665ba",
"deac53dd-f2f8-433b-880c-34f1c2a15013",
"e0c3e933-6a77-4bd1-ae74-ca9e1727277b",
"fec66a7c-232c-466e-88f7-60b3e4dc15cc",
"fdc4df07-0992-48b1-bba5-c0981091612d"
],
"count": 12
},
"50": {
"chapter": "50",
"id": "53d28e3a-f5ad-46e2-8ac7-203044f939f2",
"isUnavailable": false,
"others": [
"83383ccb-f684-4281-9047-c32fbd5521ff",
"a3032c63-c813-4950-af4c-85e7d3d2d84e",
"adfbb828-d6f0-433f-a422-41a40cd4b105",
"f3dbb125-72af-4f02-b5bc-11e6503c1a74",
"cf7a17fe-9bdf-4f99-918f-b6f4c8933363",
"58d7e6d9-dcf9-4129-82d0-78331f15cb3a",
"8b6ddaa1-31b2-4ec6-bca0-90061c48ad81",
"9d0d1a42-7aba-450f-8487-cf950f4772b6",
"29c221d6-5430-489e-b06b-43769444c11b",
"be63e11d-7f42-4d19-a835-60d8f56d4d51",
"f61d778a-c94a-47fd-9ca5-42410e5610b6"
],
"count": 12
},
"49": {
"chapter": "49",
"id": "77332965-323e-465b-b854-5c4b70633221",
"isUnavailable": false,
"others": [
"6391f9ff-55ca-4a56-9e3c-3fe87cc4cdc2",
"7c246b57-d29c-4f6d-b853-2fee9f91cd9c",
"4facbd91-76ad-454d-9073-26b22e533735",
"fa1d3c20-7bc1-4ce3-be69-09537e740101",
"64cf89f8-e299-4ddb-90e6-2933f17d7ee2",
"4c7089bd-0bf0-4dea-8127-b4584300ecc7",
"a41ff410-a98f-46e6-87d7-4edb05918ac1",
"d8c54174-9aaa-46f7-b7d0-de634cdb574a",
"342faaa5-02b3-4c9c-847e-b40dea99f882",
"501eaa0e-604f-4f5f-abb5-f153e03f4d61",
"ce6e4777-a9f2-44b5-bac5-2f41c187973d"
],
"count": 12
},
"48": {
"chapter": "48",
"id": "cb35b7f4-702f-47d8-ba92-cf619d80c3fd",
"isUnavailable": false,
"others": [
"50bc3dae-84b0-4f44-8dda-ffca2fdaf51e",
"52aa4298-e560-43fd-8e24-ccee46e68dd0",
"59b96634-d86c-4346-924c-f98ec5c51b20",
"9eb63811-44ba-48d1-985b-fd978b71399e",
"e6c4a8b9-5181-4893-a18c-0d99bb943a98",
"1552c6ed-2a16-452d-96fd-72daf003d505",
"8674a676-3b40-4dd4-9b64-1c1af28daae5",
"742bd80d-24d8-449d-ba8d-c249490ca8f0",
"69ae471c-8adf-4de8-89ca-01d309de6a19",
"dc9e465c-0fbc-4839-a139-1a23821a734e",
"ee7a9bd1-c451-4a3c-b17f-7ecad8f5bbb3"
],
"count": 12
}
}
},
"9": {
"volume": "9",
"count": 143,
"chapters": {
"63": {
"chapter": "63",
"id": "26b5f651-488c-469a-a8de-bffa018a8fac",
"isUnavailable": false,
"others": [],
"count": 1
},
"62": {
"chapter": "62",
"id": "1652e14f-e1e6-48ca-8655-0508470d93ee",
"isUnavailable": false,
"others": [],
"count": 1
},
"61": {
"chapter": "61",
"id": "e5d7a5b9-208b-4141-95c1-a604ee9c77fd",
"isUnavailable": false,
"others": [],
"count": 1
},
"60": {
"chapter": "60",
"id": "d8a21b4e-7a5f-4831-a86f-cc8da259aa3f",
"isUnavailable": false,
"others": [],
"count": 1
},
"59": {
"chapter": "59",
"id": "dfde65b5-d584-43b3-b8fe-df14ae4e1b84",
"isUnavailable": false,
"others": [],
"count": 1
},
"58": {
"chapter": "58",
"id": "e8071a32-7653-44a9-b6c3-9e6174a7cd87",
"isUnavailable": false,
"others": [],
"count": 1
},
"57": {
"chapter": "57",
"id": "d22245a2-aee6-46c8-8a0d-922200b99bc7",
"isUnavailable": false,
"others": [],
"count": 1
},
"56": {
"chapter": "56",
"id": "3d98edd4-984b-4e40-a88c-42ca0313ea25",
"isUnavailable": false,
"others": [],
"count": 1
},
"55": {
"chapter": "55",
"id": "42e59017-eaf4-4622-a0e3-eb2170e21dab",
"isUnavailable": false,
"others": [],
"count": 1
},
"54": {
"chapter": "54",
"id": "1b9de16c-052a-496a-aa23-397a1888b997",
"isUnavailable": false,
"others": [],
"count": 1
},
"53": {
"chapter": "53",
"id": "781441dc-4078-4280-a5ef-aec9dedcb201",
"isUnavailable": false,
"others": [],
"count": 1
},
"47": {
"chapter": "47",
"id": "089e3aaa-0e64-4661-978b-f7f3ed148a00",
"isUnavailable": false,
"others": [
"6c25e6c4-91cf-4712-9fcc-0186390362b8",
"4e230a99-20b8-4043-a823-19f21ebf00e1",
"a49bbe7e-f3d0-499a-a266-19a7b0be9ada",
"2a250635-9d61-4fe7-9c40-f791f9f061e6",
"3b1ed5e7-f92f-4d4a-abf3-0251d14803c5",
"4191d7e6-878a-4d24-9618-c51b06a33b96",
"bfb7ac85-b9e1-40ba-a811-644d2c4a64ea",
"def27cd5-3e4b-4609-aee2-b422c155c686",
"49937b58-a5e3-45b2-a1d8-59baa0dcf263",
"69126a09-7fd2-4a7f-9c46-9d8708ac7ae7",
"f852bef1-b1b0-43a0-90bc-0120a4d6560a"
],
"count": 12
},
"46": {
"chapter": "46",
"id": "2be04520-5de7-4edd-ab5a-19c8b5577bb4",
"isUnavailable": false,
"others": [
"1afd2c98-09cd-4f99-9928-ea62f6fefcc5",
"3482b40b-b40a-49da-9982-f8ea6a6c7fa1",
"4eb13c2d-542d-4f54-a2b2-549ed8484ea9",
"aacc0543-11af-4fc7-81d4-de6fb03886aa",
"34355c7e-4e38-41df-8c29-a12c070d62e2",
"c2f67525-922e-4624-b273-b73e37f5fa16",
"a1d391d2-0d5a-4901-9a19-e3268c8754d5",
"d8f37a40-f30d-496e-9e32-256b5d0c3091",
"234970f4-ac53-43ab-b250-6c1c7895825b",
"8970ec31-07d7-4237-878b-33f227f22286",
"cfa64be7-cd92-43e9-bb1f-e4e98f64b4c6"
],
"count": 12
},
"45": {
"chapter": "45",
"id": "0c9a5286-1492-46f4-b518-a61235afc1d1",
"isUnavailable": false,
"others": [
"3a2511f9-41a5-443a-869d-ddd44f15b11e",
"572fc251-1c78-45a9-a341-a94427d0a5d9",
"6334dac0-4738-4ff8-b451-0f6c4547d04e",
"b6b2dc1a-8498-446d-9b42-a31d9400a180",
"0f6b6a05-a610-4b4b-851c-486a7f285c9b",
"54a55a78-3189-4ed6-86c1-d8020437eaa6",
"87760dbd-6d25-4251-917a-fb55826767d3",
"c4f427c1-90d3-451a-96a8-3a851213d6d3",
"eacbfd9b-6ff8-4914-84dd-00f3d55d3318",
"d6ac9423-5ab7-4f68-8e17-eef8b2a193ba",
"3e2ef1d1-4ada-47ea-a825-4fea063b7a1a"
],
"count": 12
},
"44": {
"chapter": "44",
"id": "345deb3f-8d9a-4f41-941b-6382f3ed4b4f",
"isUnavailable": false,
"others": [
"620adbbb-978d-4793-9e2e-db245eb89218",
"742daccd-52d7-4eca-b61e-913dce972274",
"b6c198f6-5299-48f9-a221-b9d9a32d42d4",
"35b46b75-071d-461f-b329-9d1f36a3cfbb",
"0d70e691-39ed-4217-b801-d264822f7bb0",
"6162f822-fbeb-4412-962d-9382b94e5e64",
"bbf9b0be-e2f1-41b2-852b-4c50f1c369f9",
"a15e58ab-1c68-4330-b1a6-6dd61a98151e",
"7d47eb52-9aaa-4bce-abdc-b9f9336f229d",
"b6529858-ef0d-424f-af42-9136832212a6",
"c4856839-ba14-4517-8bdc-78b2676aaaf6"
],
"count": 12
},
"43": {
"chapter": "43",
"id": "3b015832-11c1-4ac8-8745-ccee2f0edf6f",
"isUnavailable": false,
"others": [
"43e70bcf-77e5-4e06-ac68-80e64932eb76",
"46b593c6-20d3-48aa-9cf9-3b268e14f03a",
"4a59a83f-3a4a-4c38-b419-2b6f3d997c58",
"57d3fdb2-b691-41bc-b9a7-8cf26edbf8d8",
"a3fb9613-c3d9-4517-8ee4-52b142858891",
"9348a6ee-71b0-4152-9e2d-8ee1577340f5",
"9361cfca-4a00-4e51-b823-acf99385ee11",
"8853b892-f4bf-476c-a64b-24bb8bb13ac2",
"cec58a4d-9f22-4fd9-a10a-8739d23142ce",
"920d3466-0a5b-4fda-a1b5-07a259ea7b98",
"1917cc76-08b7-4699-80ca-eee0d909edce"
],
"count": 12
},
"42": {
"chapter": "42",
"id": "44788ec1-1cfe-4f0d-97a5-629ae913a50e",
"isUnavailable": false,
"others": [
"82e2a1de-230f-4bc3-8b75-53e98144e5c7",
"bbaeb747-82e2-4ca2-954e-92d75d9433f3",
"bfe27b5d-adeb-4cd3-ba57-ce169e035262",
"f95b7d39-9769-4f8c-8ad4-ebe4e578d53f",
"f2860382-c3fd-443d-8d1f-1bdd0b1b5471",
"031af05f-8885-483b-9f8f-78910022dca8",
"64d81dba-f1e3-467e-8784-d2f8dfd47618",
"73384213-01f2-478a-b1e0-a53724938f74",
"b63e7bd6-dfc8-49bb-ab92-0419e5670c7f",
"9c98f991-0f7b-4706-b7a2-b8123c798295",
"a13956bd-525a-4a8a-add0-b588ed324a3e"
],
"count": 12
},
"41": {
"chapter": "41",
"id": "92c5b020-12fb-4d55-bcb3-2390371ba2aa",
"isUnavailable": false,
"others": [
"eda1c372-f637-45bb-b0d4-121057f0def9",
"71be702f-2665-40b5-b1be-dea3acecba41",
"a6d51496-39cd-4738-9e2e-fa71ce91314e",
"bbe80e5e-4afe-4f7f-a1ac-dbf1c7918c6d",
"ac1b56ba-d709-4dc5-a3f3-c486d421be9b",
"ecdd87d6-c30d-493c-9cbd-3595c036b4e5",
"7c924358-e8fd-4dd5-8bdd-57f2245e307c",
"78504b3a-e676-4e2e-a8da-89a2e6183eb4",
"8f535d74-d60c-4ddd-be16-b29c3d0c2c92",
"c614c48e-1f4f-4f40-9a5c-e20f7cf8ed14",
"f1775311-a059-49f6-af5e-af9a692a4206"
],
"count": 12
},
"40": {
"chapter": "40",
"id": "27b97bc9-52e4-4c10-9848-09215e862eea",
"isUnavailable": false,
"others": [
"318532c0-c67b-4ec0-b494-34cef61f97cf",
"681ad596-fb1a-425d-a19b-0e912cb14f85",
"c8b68215-5246-4d60-b85e-d13d1db38380",
"70ade3bb-ea52-4aaa-9a05-885562eae242",
"5e02f5e2-a510-4823-9f0b-693d6930e2f2",
"aa59e754-647e-40e4-bcdd-9df59ae3b872",
"ad45bc81-42c4-4094-b597-bf847027865e",
"97d1f2dc-372d-4a14-8d9e-aff25d7b2b44",
"b0f78d80-f119-42c3-b197-3dfcee8fb904",
"c0ecbbee-2486-4f68-9bb9-e90d29873a2c",
"d9bd6ef8-6e5d-41f4-9c18-50a6250cba7a"
],
"count": 12
},
"39": {
"chapter": "39",
"id": "18764e24-8ea4-4f36-8ef8-db8a4648b1a0",
"isUnavailable": false,
"others": [
"5ff0261f-17d5-4488-9574-92f0a346838a",
"b374bbbb-3dd9-480a-8e52-2cedb9a36c65",
"1f060404-195a-4f31-a2d5-1674ee98ea97",
"63f43dcb-1dce-4a21-83ed-3f5f53ab4e27",
"b7889021-e755-440f-8305-4afaeec3d23b",
"ad8ff4fb-9bc6-4903-b56a-3b2c9a9bdbdc",
"a7401d01-bebd-4690-85f7-bdbf1fa5866f",
"35c7ccc5-767c-44b1-9180-e3c2b1413364",
"61e083d5-9102-40f4-89ef-ed9044c77aeb",
"5f0948a0-a9eb-4f6a-ad68-d8e571cffbf7",
"c736c7c6-50ba-42d6-baa0-4e9286cea9b1"
],
"count": 12
},
"38": {
"chapter": "38",
"id": "21298eaa-87d3-4451-a040-92328c2a1170",
"isUnavailable": false,
"others": [
"09530bcc-4247-458e-bfa7-f3f308bfb5b3",
"c61aef63-87db-47db-b31f-fc36c87d2a12",
"660820be-05f5-49df-bbe8-beeb8839dbb6",
"b64630bc-677e-4d06-b095-a4e47cfe45cb",
"916e83f9-72d8-458b-a90d-54bc52e148ba",
"daa40b90-b0f7-4a2e-ac47-bf5f784a8cdd",
"87dfad5c-d7d4-43b7-ae98-f612bc8571a1",
"76c348d9-ed9c-43d1-ac0c-adbbc0a7f20b",
"665189e8-554a-4f8c-b473-56b0ea67c40d",
"56c44980-6b43-48ae-8918-4ae4008bd2ce",
"d3843b08-d20e-4356-a883-05f5b2d5935b"
],
"count": 12
},
"37": {
"chapter": "37",
"id": "6f4975b6-9366-4a7c-9e96-a3d7e50cbfdd",
"isUnavailable": false,
"others": [
"8b1e58d0-29ed-4cca-9cf9-e3d55a805b0d",
"9c12ff7f-4b9f-4716-acba-2a5b2b7475fe",
"ba417403-d45d-4c97-93f8-bede0c454941",
"61af706d-e78a-4263-9afc-e82cd746f39a",
"c8d27b9e-aca9-419b-8c49-1b40ed429ca1",
"d8020c2d-3644-455f-b98d-1f0d29a5a6c3",
"dc61baed-a791-491e-ae40-dd0b53b72ac9",
"31e1c56c-e8e1-423b-aacf-ec2875616762",
"67893518-cd68-464d-881d-4996bb6f3c1d",
"96fcbd09-442c-4fa8-90f5-46c13a68682b",
"cfcb5339-047c-4e2f-8026-cf317fcde25a"
],
"count": 12
}
}
},
"8": {
"volume": "8",
"count": 137,
"chapters": {
"52": {
"chapter": "52",
"id": "9ba0a994-953e-43af-a3b9-86b11a8180ad",
"isUnavailable": false,
"others": [],
"count": 1
},
"51": {
"chapter": "51",
"id": "1ac7bfa5-c174-47ba-ad5f-d8401afc1dd5",
"isUnavailable": false,
"others": [],
"count": 1
},
"50": {
"chapter": "50",
"id": "0ea1efb0-ccf8-4344-89f0-c2f64c9ac5d0",
"isUnavailable": false,
"others": [],
"count": 1
},
"49": {
"chapter": "49",
"id": "ee9eaacc-b9f0-4692-84d5-9321783e3f1a",
"isUnavailable": false,
"others": [],
"count": 1
},
"48": {
"chapter": "48",
"id": "aeb6ffd1-535b-4b70-ae7b-44e759122d08",
"isUnavailable": false,
"others": [],
"count": 1
},
"47": {
"chapter": "47",
"id": "8b8cbd42-1cff-459d-8d85-ac0503e33a66",
"isUnavailable": false,
"others": [],
"count": 1
},
"46": {
"chapter": "46",
"id": "79ce7ad5-59bc-4c98-8e02-855a6efe14b1",
"isUnavailable": false,
"others": [],
"count": 1
},
"45": {
"chapter": "45",
"id": "2b517c9b-9358-4040-804e-d005f528cf74",
"isUnavailable": false,
"others": [],
"count": 1
},
"44": {
"chapter": "44",
"id": "4a2c7f99-f4ac-4f86-8f7b-1f4fd65f1253",
"isUnavailable": false,
"others": [],
"count": 1
},
"43": {
"chapter": "43",
"id": "4360ff96-55ff-4d87-9e81-24618829d9d4",
"isUnavailable": false,
"others": [],
"count": 1
},
"36": {
"chapter": "36",
"id": "3880a518-a203-4e01-a662-aa58af437bf3",
"isUnavailable": false,
"others": [
"113118b3-6cac-4985-9e38-3c7a2bcb77fc",
"14aed4f1-eded-4c1c-bc25-d5260aefe3d2",
"5e10c322-f4af-43e0-b2a4-b39daa1b35db",
"b4ec8387-f0f2-4a95-9908-a75c0189df93",
"fd35e9fc-4a56-4519-9186-d3f5dd8e22d0",
"fe4ccbcd-99d8-4892-955c-f39d317955d0",
"ba4975c4-31db-4bc8-a02d-f307f3ae5b85",
"fcdb05ae-92cf-4a15-b188-8bc9591c3688",
"22181073-ff5d-4d0d-9376-d04b830c051d",
"6a61ec27-b6c2-4bdb-929a-d2b0189cd6ff",
"971f3de3-76e9-4f50-85cc-dc6a3c357f8a"
],
"count": 12
},
"35": {
"chapter": "35",
"id": "2eeb6689-b4db-4fa2-9ddb-7fdf393a251b",
"isUnavailable": false,
"others": [
"be72befd-f2e7-48e4-9728-e666e1723114",
"b105d7b5-c8d5-425b-b766-9414d7fd415e",
"3dcb740b-0521-452a-a9ac-81b5e86b6324",
"d28e6ce0-b57d-4e67-9ed7-f59d2c45f56a",
"9a7d9b4b-3baa-4643-8eaf-77cb0af56920",
"c4817fe9-face-463e-aab5-0f37edac0005",
"d9afe824-20c9-437f-a9d6-a4d0761d267f",
"15926275-4f83-46e0-b7bc-2535674912f7",
"5384b743-994a-4be6-b98d-b564116e5953",
"7acbe028-32e9-42cc-8d2c-e38d702ff47e",
"d3612f7a-1718-4c65-a38f-8859fd447a6a"
],
"count": 12
},
"34": {
"chapter": "34",
"id": "5d152d1b-1ba5-4fe1-8cba-de76f91d64c4",
"isUnavailable": false,
"others": [
"9e759fc5-ef7d-410c-a09d-4e9bba753ad2",
"016aaf05-30ff-4e6e-9918-fd6a81b9bf69",
"80dcd545-49fc-49e7-92b8-78ae117665c0",
"896b477a-7d76-4bd1-b3f5-bb6f615d99db",
"bceaf836-177f-4b07-9641-b3cd20838a6a",
"d38662d4-7646-4eef-9cb5-5ba7c5ba6445",
"10f106ad-96cb-4811-b402-63b3e5b45080",
"29055d7e-b915-4fff-9cad-d14a49691ead",
"4a50532a-a42c-4aae-8bb3-0e12e4f700b8",
"71aa4017-3a36-496c-8077-5acc3c794242",
"ec2afaf0-2ac3-4222-afeb-7c5f40d348e1"
],
"count": 12
},
"33": {
"chapter": "33",
"id": "7eb0f936-3896-4681-9fc4-cf8316d7a5bf",
"isUnavailable": false,
"others": [
"01e9f0cb-caea-406d-92bb-0cc67c37481d",
"17083012-3a2b-4c49-b8b5-edfac5fddb51",
"06bd3570-a6b3-4bf9-ad17-d0a23118fdc8",
"06d449ad-64a7-48ee-bf45-95f48c55f57b",
"0d0c5b07-52a8-4e30-94b4-b765bf55f8a4",
"1886d2ed-e6d5-464a-9ee5-3edf5f28c88e",
"035e2ad6-ec0c-4218-b6e5-c1c523753f74",
"c953049c-6c21-46a9-b5fb-afaedcb99c53",
"b06c5b80-88d8-4586-b233-a371d0259565",
"b2d7c0e6-ce03-4b5b-bd24-b1fe31cac7b9",
"c3e5c184-6a35-4d20-b479-fb9fa0ff7908",
"b89edba8-905a-4f3b-b879-8695bb059d17"
],
"count": 13
},
"32": {
"chapter": "32",
"id": "1eee2800-d3d1-4c5f-aa20-2965260113f4",
"isUnavailable": false,
"others": [
"44ed9703-7179-4157-9264-92dde67af059",
"7cefebb3-bc31-4978-8665-7a29e64aedf2",
"06385761-26c4-4f71-95ce-40e555ba5abf",
"8f48e31b-02dc-400a-96a1-14dcc87f7d41",
"962e4dfe-6f00-4731-bd15-43a2f8b9d205",
"43aac103-5517-4aa7-98fb-7d287c0ecb67",
"19728484-0d68-4eeb-bca7-2b6595b88760",
"1972a463-b7d6-42d9-b447-181c58f29af0",
"23ead1b2-cc81-44f8-8dc0-96291d1138ca",
"a7d34a1e-7824-48f4-9d86-394a4640bca4",
"de01b28f-583f-4750-842d-b6966f12a3c3",
"f3543b71-b100-4257-8e4a-318236e8aec4"
],
"count": 13
},
"31": {
"chapter": "31",
"id": "4114437c-a6c1-49e7-b83e-2f3881a53408",
"isUnavailable": false,
"others": [
"1689a05d-376e-4a0d-80ee-31903203edb8",
"dc05e81c-f5fc-4d16-89aa-b641372b4422",
"4f9a5654-6dbb-4a7d-afd2-15f947e3fecd",
"c56a5eee-c822-4340-80c0-dba5a14097de",
"ea4697a1-e176-4487-98ac-9e2168a41866",
"d442b297-59d4-4115-a01e-068e4570e449",
"223547b5-6505-40c4-803c-eef4ba326da3",
"636197d5-c6de-46bd-94d6-41e10ffc1d90",
"8e94afdc-b51f-4209-8758-7fa6fdc5f5fe",
"95cb4e7f-3bd3-4c86-b04b-66e275e749cc",
"991248b9-b478-4f5a-b6cc-c5506889c633",
"f5bb1dab-3223-41ee-b9b7-b99d63ca00e6"
],
"count": 13
},
"30": {
"chapter": "30",
"id": "36b47dcb-1d42-48f4-9024-0c80489f2453",
"isUnavailable": false,
"others": [
"41748765-0d31-4261-9398-85b4bc1b6e5f",
"9952e947-a997-4b22-a3af-ea0eb283e34b",
"c1ec9e12-3830-453b-a912-865718486689",
"9fda1fe7-f269-4fdd-aef5-52d0f966512a",
"0b026a0c-43d4-4baf-a83d-71cfa5fe6f00",
"3a07df2c-3787-4888-b457-9bff6365af2f",
"47723f1a-572b-4761-928c-74b4a2ab98ff",
"d2bc4b86-0b91-4077-a6b4-bd1210f392dc",
"b8cff03b-1b5e-426c-ba17-16133d9bfdeb",
"577bd71b-b53e-40ec-9def-1242a952474f",
"d232e420-cb2d-4186-8b82-ee35953b2a22",
"fa12ad9e-fef4-4ff5-9c85-a00fa807b954"
],
"count": 13
},
"29": {
"chapter": "29",
"id": "5b2811c1-886e-46d7-a3db-47f6fa620daa",
"isUnavailable": false,
"others": [
"c64a631f-0135-4f48-802d-2a928c19ca56",
"b0d3f7cb-3ce1-4d15-acb1-93246bc7ca84",
"90ab49f4-efb3-46f0-83d5-0cdc7e0d8d89",
"cf10cabf-bc9d-4bbb-babd-dae36768b0a9",
"179a83e7-ba2c-4197-85aa-cad1963ea7a7",
"099354f3-cf28-4384-8f77-639eadb1fbf5",
"43255db2-cf34-4da0-b36f-b00fc6e6e254",
"3fb26e67-1bea-4125-8bf4-7d95a1e2045a",
"5a38d538-53f0-4a7a-8cda-ebf33c637a49",
"890853db-4595-4f07-a24d-7ce3982b86be",
"ceb8a308-fa02-45a6-bf5f-5a76fdd515a1",
"d8b2e18e-990c-4e92-a50e-9c21e5f82031"
],
"count": 13
},
"28": {
"chapter": "28",
"id": "2a1a1c7d-fce6-4f6b-94da-b546baae3403",
"isUnavailable": false,
"others": [
"61124744-de06-44ed-b411-45c87fb1b28c",
"b0bfd4f4-e23f-4f7e-882c-edf13e26c61e",
"e244341f-1725-44f0-9cfa-739f9ad313aa",
"ec9de6e0-23b5-4470-b634-c70bdd44a9b4",
"65108391-1f19-4db1-b476-a1cf68ab98ed",
"70391863-4e23-444a-8287-cb377c2a69c4",
"a4f3e1d3-cdcc-4955-94a9-414c4b8deb96",
"d9ae273e-02eb-4092-83ba-72b77840a7a3",
"d8d2fb8d-fb37-447b-a153-681468fa4c74",
"4b3ce9f2-5e0e-4239-924e-cbb3101dc2bc",
"7b9c42b6-528e-4dd1-98f5-35fe2f617616",
"752561b9-2e88-41e8-a9ad-ccd74f11c074"
],
"count": 13
},
"27": {
"chapter": "27",
"id": "2a44b3bb-c425-4a8b-aba7-0e60253e6137",
"isUnavailable": false,
"others": [
"02c04155-67b1-49de-ba53-d6ec0e247dd8",
"a869ee44-1ee4-4f46-a31c-5049e0bf6063",
"0f614e88-2e6b-41b0-9757-f404c435c37f",
"220ba2ce-8890-4b28-bff5-ee6c8dca0f39",
"637c9621-9af4-4024-ac29-6fdfd669d70c",
"6609f47e-ca0a-42ff-a35f-3b1d28bc0e7a",
"2c4b5242-b17b-4439-9852-63a83bf46211",
"4ae121fc-1c6c-4816-add3-a7e9197adba7",
"9028df7e-c702-411e-ac85-0fbfe16c1761",
"d0b47e3a-1ba1-4e5a-9a37-15fe1e86a2ba",
"9f0679aa-3f5e-4166-bc12-d028bb31b09d",
"ed7a81db-fe93-4cb2-b20d-29d37ea0dacb"
],
"count": 13
}
}
},
"7": {
"volume": "7",
"count": 139,
"chapters": {
"42": {
"chapter": "42",
"id": "0597921c-65ba-466c-9f46-404c81cedc28",
"isUnavailable": false,
"others": [],
"count": 1
},
"41": {
"chapter": "41",
"id": "cb0a20cd-e902-4b10-8171-7eead1aef37d",
"isUnavailable": false,
"others": [],
"count": 1
},
"40": {
"chapter": "40",
"id": "7d38c8c8-fe3b-4181-b572-06416d14e817",
"isUnavailable": false,
"others": [],
"count": 1
},
"39": {
"chapter": "39",
"id": "4cc5510d-c546-478a-ac80-d22a9d778f8b",
"isUnavailable": false,
"others": [],
"count": 1
},
"38": {
"chapter": "38",
"id": "86877d5d-e7a9-4bd6-9c94-9ca3f7eeba6e",
"isUnavailable": false,
"others": [],
"count": 1
},
"37": {
"chapter": "37",
"id": "4525997a-a751-497a-b49b-a0bdb0b04371",
"isUnavailable": false,
"others": [],
"count": 1
},
"36": {
"chapter": "36",
"id": "1744104e-43e3-4e40-bedb-3fa2b0ffc624",
"isUnavailable": false,
"others": [],
"count": 1
},
"35": {
"chapter": "35",
"id": "f2afd1ec-53e7-4d25-acd4-cfdbfb3d111e",
"isUnavailable": false,
"others": [],
"count": 1
},
"34": {
"chapter": "34",
"id": "e0d3e204-6f16-4a7c-998f-95478f6c108e",
"isUnavailable": false,
"others": [],
"count": 1
},
"33": {
"chapter": "33",
"id": "c3e40ab1-bf8f-4d88-8db9-98d71e6e54c3",
"isUnavailable": false,
"others": [],
"count": 1
},
"26": {
"chapter": "26",
"id": "7475d6f1-5ca6-4c31-a711-1ce62ac3147e",
"isUnavailable": false,
"others": [
"c5eb8765-d277-4fb3-b790-3b1a3b70dda5",
"c22821a7-5903-41da-84b7-86a67dadc6d3",
"af02dc54-4436-4cb8-bee5-a75361af34eb",
"b454d9fb-82b8-4f9a-abb8-25dbd60aa735",
"8f1f1784-20f5-40af-a7b9-df33a8aacb59",
"dd075fd1-eed2-494c-bf0b-58a72650786e",
"e150f9d0-0174-46cb-a253-f746bae90aad",
"9eada899-2151-4139-b6a8-23e22c99f25a",
"047fd02b-e7b2-4b2c-9dfd-4db47f4348f1",
"3b76a3bb-0f93-484d-9a98-6373d5a814bc",
"621aefa6-897f-4ac7-b652-946fbdad5101",
"aa6f9165-511b-4591-b66d-091f33894fbf"
],
"count": 13
},
"25": {
"chapter": "25",
"id": "044ae532-35f9-4ce9-8870-d4ea58525f31",
"isUnavailable": false,
"others": [
"123380ae-c663-4ce2-aad3-2fff1cf270aa",
"aafb8a02-6dd5-45da-b592-d64c7d174646",
"a9ed6c42-e78d-43a9-98e9-eb6d6335837c",
"0797e94e-7c8b-484c-a937-339e894733a6",
"55ade7e6-03f6-474d-b84e-4d4c1b8c5aa3",
"79cd6cdf-c2b7-4a25-b645-b80b7d169bee",
"eee4591e-7f58-4cda-b093-a8b5090e6702",
"f1845f2e-ee88-4315-adb2-2622fc2bce16",
"284deabc-9c15-4542-b813-b7b9ee8e2dbc",
"8bd9cf68-97a5-4a87-8eb8-a1a0949f60f3",
"d4eb5495-c802-4f10-81c8-60227e2cf39b",
"ff894b9f-6a8f-4164-929b-ad092cec196d"
],
"count": 13
},
"24": {
"chapter": "24",
"id": "06a623b7-7c69-45fd-9a75-acd5c49f8f17",
"isUnavailable": false,
"others": [
"5089d947-0895-4f97-8d75-89e61d0eab88",
"346e2289-08b9-4566-9e42-994779a5a5f3",
"0a005ca2-238d-47d4-83a1-84f4af8624aa",
"0ccb84ae-ed88-455b-8eca-0f4ed8d42361",
"5c99cdf1-99b6-41c2-b40a-a82516aa60c0",
"683f89e5-d789-4b4b-a570-fe4850539ef5",
"c2b8097e-48b1-433a-92fc-265749cfbe0b",
"f78a96ed-ccb8-41f0-8715-71f308f1b555",
"3fd20d60-a7ad-4216-a16a-3c98f77fa8b6",
"733763b7-a355-41f2-97a5-ea8b87ae6316",
"c80e303b-dfbc-47b6-bf99-6954ede86b11",
"f2abd8d1-5c0e-4f0a-a235-a1c0126de7ea"
],
"count": 13
},
"23": {
"chapter": "23",
"id": "21988d5c-eed5-4959-858a-971f09dd4e34",
"isUnavailable": false,
"others": [
"85613a7e-e1e1-4f65-94ff-b6cc9f6f6fbf",
"692bb6ba-a3bc-45c2-9f5f-e9094259b14e",
"c059c884-37ec-45cd-a1b7-a727fe8109b6",
"b194160d-d687-4eb2-8f63-ac52a7fcf696",
"98b713ff-ded4-4b4b-ad4a-491090e1feb9",
"293fd767-3386-4a88-80cb-344ea51e1a04",
"138a2b4f-56b1-463f-b478-15a5609c49ff",
"8ab8ef5c-86c2-42fa-8728-bc8599cac884",
"56b2f474-4820-424f-8b27-4b51aba91163",
"e3847da8-7abb-422c-891f-3b647c77b229",
"f6410f08-55fa-417d-8ca7-f63a05d55bce"
],
"count": 12
},
"22": {
"chapter": "22",
"id": "48873581-7854-4688-9ee9-0f2da1650bac",
"isUnavailable": false,
"others": [
"a30f2d72-f16e-431a-a69f-c3e98603af36",
"969dfb53-1fed-4b6d-a43e-c097647f65dc",
"2a2e3b96-9ff1-49a5-a4d5-a9001fdc571f",
"59511659-4217-41ff-be2e-63d7904ae0ea",
"b24a92b5-1f67-4a3f-82e9-be3e38b3d65b",
"df8b0ee5-be04-4ebf-9cdc-22a5676d8210",
"e0ad49c2-953a-4070-940c-1ddad1b7291a",
"f50f486e-9679-47cc-a929-9fc5c150bf84",
"110a1371-90d5-4561-b443-5b2b0412c68f",
"c73b46f5-67cd-44e8-bae4-77cdb3fcf5c3",
"adbd433f-efdb-4f5b-96e6-2ab565f91570",
"edcfb696-2f7d-45b2-b1ba-64c2d680b675"
],
"count": 13
},
"21": {
"chapter": "21",
"id": "1f885d5c-bec8-4a5d-b304-9d898bad72af",
"isUnavailable": false,
"others": [
"a4c55c9d-08bf-4480-9694-4f171a43fb21",
"d86de41f-a86f-4f4f-9bd4-84e59fa0c39c",
"2902f7ec-abeb-4083-9ec3-26670553a956",
"387708ef-19b3-4f29-9b2c-f420cf45f02f",
"4c07ef6b-bd59-426c-8707-fb68edda85b8",
"65e7f041-7ef8-4c12-b96b-6c51a9b386fb",
"68391acf-2d40-4e3a-8ddf-c76d7a42bfd7",
"8cbe2c96-ccbc-4128-a243-fe1b5b94f076",
"c136465b-0a44-4995-8082-124295885d2d",
"bcaf36f3-ba1e-40af-8f50-b73abd8e3117",
"d4a58944-42d3-4972-a042-baad21a24a80",
"da8fa7b9-2b9b-4fc9-8fdf-344065eaa69f"
],
"count": 13
},
"20": {
"chapter": "20",
"id": "9576e2f6-b19f-4fc9-9538-1c5f4eb93f18",
"isUnavailable": false,
"others": [
"28863b7c-d262-4fa1-98c2-ef3283b971bf",
"4499859c-d819-4fa9-8815-c456f41c7547",
"b6ec26ae-6cea-4645-af95-ffa0ab9cbc8c",
"bfcf59fa-2306-4351-bcc8-2d4cc653c21d",
"d3f3119e-509f-4fb8-844b-5fd249fcb59f",
"f5692ce9-f10d-4490-9c77-88c9eecb93b7",
"3b1dd629-49d0-4e80-8e98-82bfcd135a5e",
"458edd18-3be0-4816-a605-58695ab500f9",
"486b51c5-9a7a-4584-bddd-666b672eb419",
"8648d65e-d54e-46f0-a948-c8ad6570dd4a",
"908f1b6b-1ebf-43f9-93fd-028f594ecb23",
"f27d0201-00e1-4b3d-94e0-b3c8a558e726"
],
"count": 13
},
"19": {
"chapter": "19",
"id": "178d6870-dd59-4c72-b63f-ff1183e6e158",
"isUnavailable": false,
"others": [
"2dee069d-c887-401b-8913-b8b0508e362a",
"241c4ce8-66d9-4f15-97a4-cc5ba52827bc",
"a6ddaa95-a545-4c13-9c3d-16b0d1858110",
"b542ea9b-850e-4f20-9436-c44b0b073c6d",
"f6e29d4d-31ea-4848-82e3-9357b946e051",
"5110583a-6a64-4f33-9777-4e8d5617857d",
"a9544a50-8062-42c3-87b5-c0897f939a89",
"29810113-020d-4c6b-81b7-70c7fc6bc0a9",
"379689c3-0698-4caa-b6e3-6790143536d3",
"631557bd-64fd-4ad7-bc3e-18a9e6072a90",
"5a5c4292-5971-4d8f-b42b-92dc0d160eee",
"ec5569a9-4631-4ccc-a7ec-ffdcab1b576d"
],
"count": 13
},
"18": {
"chapter": "18",
"id": "37702a5a-fe55-4e9d-8c3a-249e96218571",
"isUnavailable": false,
"others": [
"25773901-fdc8-4966-bd01-c645eb33fc07",
"1225a044-6921-4e7e-a153-7817428d8c6c",
"5744d06e-ac51-46cd-acca-0f327babd5c3",
"0967fac6-5197-4ec0-af48-13cb8cadae96",
"8974cf0a-0e4e-4f28-8257-5dc84e220062",
"8e100bfb-7e16-42de-8715-e2def512cec0",
"b4620915-e333-4d3c-b99b-f674c68615f2",
"fbe0ca1b-07ad-4ebb-ac24-61760e92fddb",
"ee885595-93dc-423d-9337-f67cce26c9b9",
"0e00725e-9604-48b9-af39-bb1bcb8f31cc",
"7ac71530-84f0-4452-b0e7-e1b402e106c6",
"ade05603-959e-4f35-9629-9f99bf6e85ed"
],
"count": 13
},
"17": {
"chapter": "17",
"id": "30ee3ba9-593e-4fb5-bfb8-753afdb3e7d5",
"isUnavailable": false,
"others": [
"88cd3ef9-07d3-416b-a7e0-1d2a0340a012",
"5b0632e6-3877-47aa-bbba-f12e3425bb1b",
"474984da-e2b2-47fe-b5b7-cd06d46433d7",
"b07b686b-dcdd-4ebf-9351-6c72627f44a6",
"e47a0fec-e8cc-4c22-8258-6776f29dee7c",
"ed69cf8e-e497-4710-85dd-4e2d1d9914c6",
"1e1da184-d92a-4a5c-b93c-6b41e2718419",
"49a7fbbb-fae7-445d-8f18-872976dc7da7",
"82178587-5a34-487a-bdd4-33bb90a0af5f",
"92a54d4d-eb1f-4fbb-b111-00ee286cca18",
"af7b3ebd-76bd-457c-980c-f55cf54784be",
"c770dd4a-e299-495f-849d-e1de71ca1a90"
],
"count": 13
}
}
},
"6": {
"volume": "6",
"count": 126,
"chapters": {
"32": {
"chapter": "32",
"id": "ae71428a-5719-4b95-9c78-fd9b18f85adb",
"isUnavailable": false,
"others": [],
"count": 1
},
"31": {
"chapter": "31",
"id": "a4184588-f0b0-4a02-b5aa-f4b5d293e9d0",
"isUnavailable": false,
"others": [],
"count": 1
},
"30": {
"chapter": "30",
"id": "4adf5a78-6145-4fff-8381-99737b12502e",
"isUnavailable": false,
"others": [],
"count": 1
},
"29": {
"chapter": "29",
"id": "838a0abf-fb5c-46d9-aaf1-4afa89fcc26f",
"isUnavailable": false,
"others": [],
"count": 1
},
"28": {
"chapter": "28",
"id": "ea3a3fa0-6b15-44fa-958c-dd4590c8c4f8",
"isUnavailable": false,
"others": [],
"count": 1
},
"27": {
"chapter": "27",
"id": "a9e857d3-1971-4076-ae2e-1acec09d0251",
"isUnavailable": false,
"others": [],
"count": 1
},
"26": {
"chapter": "26",
"id": "3e8d4950-9540-4128-9c63-193a534be713",
"isUnavailable": false,
"others": [],
"count": 1
},
"25": {
"chapter": "25",
"id": "dcad2b82-0b35-4e80-987a-fce76b3a1c88",
"isUnavailable": false,
"others": [],
"count": 1
},
"24": {
"chapter": "24",
"id": "63a48a50-bc49-41fa-b5de-2dcb8537c0a7",
"isUnavailable": false,
"others": [],
"count": 1
},
"23": {
"chapter": "23",
"id": "1a55ec0b-c674-4641-8636-c9ef2c6cf7bc",
"isUnavailable": false,
"others": [],
"count": 1
},
"16": {
"chapter": "16",
"id": "5579e71d-3a88-4b82-a14a-1a236de55396",
"isUnavailable": false,
"others": [
"56259fe3-7c61-4f19-b573-337c6dc1d11b",
"0ec32f59-0619-4fdc-b4f7-0807c9be7c18",
"2a5b5607-e4c5-4c90-8c42-23870b4eab9e",
"56aa0747-476d-4e60-a7fd-8f10b6375683",
"b3a08500-bd31-4699-bcda-6823e093a035",
"e51d7506-b364-4417-b2de-a0f31f810a71",
"021b6aa4-4e25-450b-82b3-376a5ac785b8",
"1217236a-33a0-4ed7-841c-33fe55f31e30",
"393b0c24-548c-4b27-9165-1886a3ddb940",
"847277b7-e607-4a35-9e00-d00150bce8ac",
"b82ab1ec-e164-4897-94cd-7b3ee57edffe"
],
"count": 12
},
"15": {
"chapter": "15",
"id": "2298ce5c-f96d-4b32-a161-e2a1074e2e02",
"isUnavailable": false,
"others": [
"0718b6c6-7ccd-4ad5-86ba-dac16f3ad8b5",
"1c5afba0-adba-4183-9c69-77a1398de1e7",
"50e9abda-89d2-4fa6-a387-f75327e08fdd",
"59e2c74d-809e-4a3b-881f-1fa9d5f8dce4",
"dc9e35aa-7593-4984-a53a-00029ba7a78a",
"22763805-ea1a-48bd-828f-09908b08ce10",
"8011e7ae-6ffb-4f97-b9f6-bd3b413b940b",
"d409772d-78db-4c4c-93a9-de75a8c12744",
"05951c06-f2f1-479b-b2e9-249fa0aea873",
"6bab9a83-5af5-4642-9cf7-41ceba20811a",
"f2d1c581-3662-4773-be14-c779f1f89a9f"
],
"count": 12
},
"14": {
"chapter": "14",
"id": "35fbda77-ef19-4a29-af96-d168d0cd7125",
"isUnavailable": false,
"others": [
"8567357e-b32a-49da-8a7c-73d8faecc39e",
"87cee1f2-870f-4f55-8170-c037b88e218e",
"78457a57-d0ca-461a-aef8-e7530e70afce",
"a7c0d42d-3964-4ab3-9800-9a76961a4697",
"c20ead20-aad7-4a44-8036-1dad5551d5ea",
"bb1f1f35-7570-4755-8fe9-0b82fdaba57b",
"e3ad6d60-aae0-4f26-8a6e-61a1148b54ad",
"118d8aa1-7959-46fe-9318-ac3c9be440ba",
"95299b89-b911-4ee0-a340-75e6802d408a",
"d009046b-5a88-407d-ab58-9854f0997c8c",
"d4fdc756-c668-4b2b-95be-8ebbe4c45baf"
],
"count": 12
},
"13": {
"chapter": "13",
"id": "290b4b2a-20b2-49e6-858c-a105066ebae7",
"isUnavailable": false,
"others": [
"11dab6a7-9813-42cd-9849-a36eb7ecd489",
"46fb5433-8197-462f-8a0d-93d6ce472efb",
"554d8180-4ec9-4f7e-acbe-6dc89bd22a99",
"5130afcf-17b3-4526-a043-16928ef6dfdb",
"61d08faa-9965-4fef-a36d-688b43f7afd5",
"9ce47a95-8326-4e7c-9851-cc7185e520fd",
"ab3817bb-4acf-4d53-b6cd-34d3b4ad28ee",
"b37bfad5-8f80-4217-9016-d6d60704ca98",
"378d615d-95a3-4e33-957e-57f9c104da4f",
"1df5c82b-d6cf-46c3-80dc-2b226597fbfa",
"650d8af7-2b73-4a12-a73f-c58970a9213c"
],
"count": 12
},
"12": {
"chapter": "12",
"id": "42cfdae2-c442-41b5-8bca-d593dfc76ab1",
"isUnavailable": false,
"others": [
"58e0f0c9-d3ab-4178-a15e-80bef770ab31",
"33709792-f7d7-4560-9e66-074bff64f2e8",
"422f06e6-5c16-42bc-9c28-411d31500285",
"5564892d-903d-4f85-84fe-438777bd407b",
"7bf5c604-7465-4e9e-b67f-a127dfdbd769",
"68f1b229-fcb4-4f68-b6df-c26735b6afc5",
"c7620a82-13c1-4771-9677-0b6b0888b0c0",
"326a07f5-4c35-477b-adf2-8b6bf429bb82",
"42939251-c877-43b6-b692-47cc9fb65b07",
"1efed826-3534-48db-9624-13d243e0e27b",
"59c95c16-e0ad-4d24-bb36-5c924f2ee8b2"
],
"count": 12
},
"11": {
"chapter": "11",
"id": "012571fb-fca2-4fff-97e0-bbf2b3b0c5b2",
"isUnavailable": false,
"others": [
"0d2c3d3f-b9b6-43ca-8ec6-bac81f96e6d8",
"1520b3a7-8652-4468-981c-4c502864a206",
"7a886032-317f-4f72-9901-8588e2253dfa",
"8cab3a29-8f2c-4e4f-96b4-b132c2170c10",
"57fb7e2b-f74f-45d2-b4dd-b66cb393c38e",
"edcd9fa6-c40e-4fe9-9983-80d73e714102",
"fe6e2944-ca38-4d6c-a051-b0962168af85",
"f622233f-0746-49c4-ab42-eca15f4fc878",
"0dbec741-75cf-436c-82e6-d88a8b6db065",
"290c7a05-5d59-47fe-8132-69572fb6563d",
"711ca94f-4598-4957-9e7b-7e6a30da24be"
],
"count": 12
},
"10": {
"chapter": "10",
"id": "88a57cb1-ff0a-4261-82a6-4069c753a0b9",
"isUnavailable": false,
"others": [
"7805edf8-e283-49d9-b3b8-7d32e8303294",
"70874f2c-dcbe-4cf6-a4c9-dacd66c57c28",
"49e3f67c-0478-4f47-854e-a4fa879d5a44",
"1e2c9d35-2ded-4322-b140-eea39ad10b5d",
"75bcf08b-3381-4fce-b460-8787c8fdcc91",
"ecb7ce71-f482-4e0c-a71d-37abd14536b0",
"4c8cd446-a0ed-4143-a19b-609909677c8c",
"63378f7b-58c5-47ab-a153-ecb75f5bab68",
"5e1a4d8e-4283-47e6-b492-dbb086a61d5c",
"e9f1668e-d027-4f27-8a36-91f73626711b"
],
"count": 11
},
"9": {
"chapter": "9",
"id": "1200bd65-2f0c-483a-9f19-bd993f7b4c06",
"isUnavailable": false,
"others": [
"162e8cd3-ce7d-41ee-b2dd-8cfdffbef1b6",
"5f0b7673-5def-4f1d-9c39-a9bf6ff04103",
"e16dbd3b-5560-4532-addb-5595e0fc8d0c",
"268da91d-1c4c-4dc1-a92a-be387532822f",
"8363fd29-adfa-4af4-88c3-c2807ec57fa2",
"6ef65867-f33b-4bd6-9806-520952775c45",
"b98b35d5-e823-4f52-901e-4496bab1fa41",
"201f414a-9206-46dd-9040-7f385859ca5c",
"1aaf34b8-0167-477b-a4f3-7b143305365a",
"fcbc36f9-f1f7-4f32-b659-2285aa45fd02"
],
"count": 11
},
"8": {
"chapter": "8",
"id": "8d844dc8-4189-416d-8e16-ba1f6608be75",
"isUnavailable": false,
"others": [
"bd5aca71-ef18-4d24-964b-4a9f69663f46",
"915499fe-47ef-4b9b-b8db-f04bf0478eb4",
"f9c4a1de-3928-4de3-bdf4-e2d82971d2e5",
"1e746df9-abb6-4c8a-aad2-26dc0d3fa846",
"543acb79-5103-4f7c-beb7-5be5d786e579",
"9ff244fb-b93a-4c1b-a4cb-f86e4fabca69",
"d6947332-5983-4df6-9a68-f24d8df49a14",
"896f062e-be85-4f7d-8aa7-7553837fcc58",
"9aec3faf-f8a5-4ade-b9ba-c2c5441677b6",
"fc34dd01-6697-49ae-88e4-ba869e9572d3"
],
"count": 11
},
"7": {
"chapter": "7",
"id": "6101d98a-fbd7-455e-a998-d044d616a304",
"isUnavailable": false,
"others": [
"c4420c40-77bc-441c-82b5-441130b6461e",
"c5a9a09d-7c38-425b-89ae-a7e9d8fe629e",
"278975c2-e14b-4f4c-be54-2e7304989ac8",
"212fa4a3-6fe4-4ba3-9b42-677b943c02c3",
"4190bb18-11d9-47e4-81e9-86e1c412dd3c",
"179bac8c-0146-4ffe-9953-5eb2ae86fa2a",
"482846af-4ddb-4cf3-8ff0-f94a3c9a0424",
"67821ae2-a255-4fd2-803a-4661ccd6069c",
"62cf2b34-e725-4b58-81ce-60803ab47952",
"d8b5627b-9c19-4b0d-8b8d-dbf974b2a612"
],
"count": 11
}
}
},
"5": {
"volume": "5",
"count": 98,
"chapters": {
"22": {
"chapter": "22",
"id": "e58fbd9a-0d8f-4a2c-a3c2-aff2f8030fed",
"isUnavailable": false,
"others": [],
"count": 1
},
"21": {
"chapter": "21",
"id": "12be7bed-4a3e-4397-a131-512dd5d97a06",
"isUnavailable": false,
"others": [],
"count": 1
},
"20": {
"chapter": "20",
"id": "ab1b5552-5897-4fa1-8026-cc92e16d8e5d",
"isUnavailable": false,
"others": [],
"count": 1
},
"19": {
"chapter": "19",
"id": "5001f24d-7f03-4a35-bf77-3ba7a6e66517",
"isUnavailable": false,
"others": [],
"count": 1
},
"18": {
"chapter": "18",
"id": "b15e217f-050e-43d6-9118-b6e8dab1efb0",
"isUnavailable": false,
"others": [],
"count": 1
},
"17": {
"chapter": "17",
"id": "13741eb0-7d77-4adb-b6ab-569beb7f76a0",
"isUnavailable": false,
"others": [],
"count": 1
},
"16": {
"chapter": "16",
"id": "9edba7c0-51e3-4f0d-b471-9cd102cfa9d4",
"isUnavailable": false,
"others": [
"9b494212-432f-4b10-908c-9332b957babf"
],
"count": 2
},
"15": {
"chapter": "15",
"id": "f95d484f-c72a-4d31-882d-a9a5738b9815",
"isUnavailable": false,
"others": [
"e6f04511-418d-4fce-bf11-56491383328f"
],
"count": 2
},
"6": {
"chapter": "6",
"id": "434c5c46-3fe1-4f2f-99d5-d3e0c199afc8",
"isUnavailable": false,
"others": [
"6141d322-2104-493d-ab97-7fa032f4ebf9",
"a3c8f3b8-1792-48a1-9749-70ca5ad44e2b",
"ac67dab1-22f7-41cd-aaa9-67e8d94abeee",
"acd18103-358c-4ac3-aec8-5756796a4e58",
"3129785e-cc85-46da-a8d8-11da68a8696b",
"78a00ab1-00dd-4513-aa63-6e0b3b258c06",
"587fb2bb-f897-4f8c-9490-ff451986b5a8",
"adb6976c-a5c9-4777-8cca-598c017b52be",
"324aff93-2526-4eaf-9767-8c5d1427183d",
"cd3c2dc9-8162-43f7-9850-84b6e5a724e6"
],
"count": 11
},
"5": {
"chapter": "5",
"id": "1cafb983-702e-4550-8c84-1befbb49a71c",
"isUnavailable": false,
"others": [
"3772f91a-a5e4-4496-8bb1-6340679e1912",
"10fd0dbe-a9ec-4fc7-a51c-c6937915cd70",
"ad550eaa-2bc3-4d94-89b8-da39eab88711",
"d7e8f4fe-7569-4ce2-b2d4-beae2c78f47c",
"23b4e174-c471-4f7f-ac28-ecdc8a4f1d7a",
"2038d14d-652a-41cd-98a1-318dfa8f7a0a",
"7bfa15d8-e008-4980-a878-c8c897450849",
"a1109a12-a303-4a88-8724-93bf0f9fa9a8",
"e79fc2eb-4571-441b-8467-d5237b46b1af",
"fb1cc2fd-a6be-47e3-9ef2-14f054d8a2ff"
],
"count": 11
},
"4": {
"chapter": "4",
"id": "5c30771a-b240-4f60-a378-c11e0e706676",
"isUnavailable": false,
"others": [
"9a71e0c7-2f99-4461-8276-ef081975a154",
"d2fb1fdd-f4ff-49a1-b5c1-067904d76fab",
"1959a216-26ff-481c-9de6-358e5bf8d6c2",
"1e7a9b1f-2712-4d82-92cf-02e6e3885a23",
"706c7395-7a66-4f5a-940f-f87980b9abc6",
"70a26370-5b8b-4bdb-b452-0bdc6c28134d",
"5285f50f-6676-45be-b094-3cd12d1ff1b3",
"a5510e1b-e040-4f67-afcc-733e178bc403",
"d288fa30-8121-4537-b755-bb2da8f9c550",
"e01066fb-ee8a-44ff-84bd-6585d70fe61c"
],
"count": 11
},
"3": {
"chapter": "3",
"id": "26b60d22-9208-4300-8162-6a952f047a96",
"isUnavailable": false,
"others": [
"020dd4fb-77f3-4b12-a8e4-d526b7c18d51",
"55fa4e41-8a98-45ef-a8d2-ba70165c597b",
"7c28b2fd-0505-4c14-a9ec-e77c5fa135cd",
"8f589964-82dd-4502-b205-22d48ecabf0e",
"8fa080d2-4d37-48c8-a145-b6b9146b8c79",
"55979b44-1086-4fe8-a1a0-6a7c918a3875",
"7cf58922-9114-4f63-8b51-ba8a211526e0",
"1742f069-a4e9-4784-92b5-13f09430c93b",
"21211962-d3af-4298-a1b2-da86944e8f7e",
"d97a17cc-eb01-4529-a0f8-ae025cb7b436"
],
"count": 11
},
"2": {
"chapter": "2",
"id": "3454b319-4dba-4c6d-8886-6bdd910d611a",
"isUnavailable": false,
"others": [
"6b8246b2-79f6-4f19-a39c-41d7dde8dd09",
"c0842b43-1401-4d4b-8967-37d49e6d99c8",
"e0112140-8ec4-4fd0-8f4e-d348bdc8d41a",
"85e3fa7c-1592-4afb-94e7-ca8d6f509dd0",
"c8eafa05-a2a9-40bc-9ff3-560daa1b93da",
"d8594ac7-4f4c-47ec-a693-9551de92ed64",
"e4dc028f-0f27-41b0-b799-486c225d212b",
"8ecfbefe-bf61-4baf-b95f-c158ad4b1302",
"cfc0f941-dc54-437a-be5d-819e4bd5b4d5",
"9a7b5aaf-c702-4fef-93b9-b83fac0c7fc2"
],
"count": 11
},
"1": {
"chapter": "1",
"id": "283f8be9-a5d2-44b1-b771-bbb0cef46ee8",
"isUnavailable": false,
"others": [
"0ba461b0-fb71-4c3f-b720-2c17e17632ce",
"046d9d30-53b4-4f19-bea6-8bbb9d391d8a",
"6a39450c-87db-4f14-82e8-bd8e51db60d9",
"caa18d82-e92c-4c35-937f-fa3f25311560",
"b32d600d-99c1-4503-ad9e-3d4e9257f183",
"0e0097d9-f4cb-49b8-a546-929bffbd7829",
"6d929428-3e59-488c-9cd7-c2de485ed122",
"59b48a8a-6869-447b-acce-b906a713f6c7",
"afbb8171-1b98-4209-94c0-855104c056fa",
"624f609b-ffd5-4587-9850-f2f97d1f00f4"
],
"count": 11
},
"0.16": {
"chapter": "0.16",
"id": "63d97d21-8c52-4dec-9a90-5497b2b1c253",
"isUnavailable": false,
"others": [
"e9691c64-5695-47c7-8202-e9005432fa4c",
"633b7205-2435-4b81-8889-a23e59a8d472",
"618aeba2-1996-4f07-a7a2-a0db6e136d81",
"bf097dbd-3c88-4c37-b9e1-1c00eae97728",
"97bc0ddf-1e99-4765-9bf4-8afa9c92a4da",
"3c29d3f1-e4cd-48fb-bfa1-d751f1f27647",
"6be2028b-0127-4ae1-ae75-2199f96cc666",
"d0ed5959-dd82-43a4-bddf-cb14ccea44bb",
"f6386e7e-9399-41be-9115-12b0ee661ed4"
],
"count": 10
},
"0.15": {
"chapter": "0.15",
"id": "2517fe4e-8722-4c63-8292-8b880b1aec0d",
"isUnavailable": false,
"others": [
"9129ac8e-750c-4645-a128-8fa78a6e1e6c",
"2074c5fa-a548-4dd8-a7ce-9144e9f25139",
"d1c54e2d-23d9-4f4f-b9cb-141611ebcf0b",
"b1f36161-41a4-4ea8-9596-6c89077d2160",
"a86f6c47-d803-4623-98d8-ec2f439d280d",
"237e9d65-607a-41e5-9c4f-deea08f04c68",
"72cdedd1-4553-43fd-965f-025b2834e80a",
"cf612c0f-23d7-4ecd-9d37-ec19f074d536",
"e223e396-b214-470a-8247-777f6a04aa36"
],
"count": 10
},
"0.08": {
"chapter": "0.08",
"id": "f909490b-3b22-40ad-8a5d-767b625958d3",
"isUnavailable": false,
"others": [],
"count": 1
},
"0.07": {
"chapter": "0.07",
"id": "983eb936-d3e6-414a-9f89-25de8a0c0c9b",
"isUnavailable": false,
"others": [],
"count": 1
}
}
},
"4": {
"volume": "4",
"count": 71,
"chapters": {
"14": {
"chapter": "14",
"id": "47aa18a7-e2bc-46cc-b6d3-50c106a93889",
"isUnavailable": false,
"others": [
"f82e27ad-fe15-4f20-8bf0-9c05e69727b5"
],
"count": 2
},
"13": {
"chapter": "13",
"id": "4f541c73-908a-483d-b7d0-c34de447821a",
"isUnavailable": false,
"others": [
"f3608145-6612-4f47-a2e2-4181dcbd3856"
],
"count": 2
},
"12": {
"chapter": "12",
"id": "31d401a4-6c1a-4f58-a696-72893dfdece6",
"isUnavailable": false,
"others": [
"bd2c5021-8e29-4fe4-8474-72710005384b"
],
"count": 2
},
"11": {
"chapter": "11",
"id": "1112bd29-b124-41b0-b67a-1dbef54d13a5",
"isUnavailable": false,
"others": [
"bc5176f3-bae1-4f6a-bea4-ee6c91ba5f8c"
],
"count": 2
},
"10": {
"chapter": "10",
"id": "8531c9f7-ef35-4eb7-a9a0-aaaae9bfda35",
"isUnavailable": false,
"others": [
"03a6c9ec-c2aa-4ff0-911c-a4696170d261"
],
"count": 2
},
"0.14": {
"chapter": "0.14",
"id": "0c74a8db-bd60-4dcc-b8de-5bbd7c5f103d",
"isUnavailable": false,
"others": [
"55ff730f-32ac-4946-b81c-9cc227679536",
"63efd407-4f92-4a00-85af-f050f4bb5cf4",
"dc80cafb-d2d1-4397-b332-6a3bb8b0ab49",
"1d799982-567f-4182-ba90-6cc21d7c512d",
"53c7a014-8c2b-41fe-8638-c9c083e0ef5c",
"80de9280-0031-4983-a034-31058b567aab",
"8568162d-cc6e-4f20-994c-90286cc9a23c",
"bf491f2d-f798-40e4-88a3-0308be39030c",
"27fe90f0-ec0e-4019-9ca0-810ad77c50b8",
"487e5085-eea1-4d2a-960c-647c207c68c8"
],
"count": 11
},
"0.13": {
"chapter": "0.13",
"id": "47884095-1717-4fef-9dd3-8063f37d7de7",
"isUnavailable": false,
"others": [
"e0b558b1-18a1-46e1-974b-ada18087f122",
"f9c3841e-6515-41ef-8de4-aa911119f05f",
"1870fb36-b312-4434-88d6-03a052dfbb42",
"15a6ed45-d268-482a-ac37-d2dfaed5a037",
"ea0a203b-ccf6-4355-8e2d-17a8665a2001",
"f8cfec17-90e0-4ecb-8405-5784cc147471",
"fb6f1ee1-72d3-4d33-b633-aa7b6683f28a",
"7e9f8f3e-0ff6-4f52-8dee-7fb4ddf6da74",
"a4371a44-f433-4166-a390-ce44e4ca4682",
"a9e4ae21-7a00-4208-a162-7bd41d78f153"
],
"count": 11
},
"0.12": {
"chapter": "0.12",
"id": "3c105b1c-7216-48e4-9673-02f72dda29ac",
"isUnavailable": false,
"others": [
"777225cb-fa28-48dc-8134-b9c9aa3eee23",
"353ca561-4af0-493b-902f-017bc7d3c78f",
"09c4b0e5-0b49-4079-943e-d9785b0e1852",
"20fadcd9-57d2-429f-ad93-0c74b172aaf9",
"90a097fb-28eb-4998-89cc-13f7e19f9499",
"b1a57c82-99cf-43ed-b1a5-729bd524aaa3",
"2f4196e6-add0-40d3-91ec-f2b31c35ac4f",
"22b306b2-f3bf-4c5a-a420-02daf461295a",
"7844df0c-ceb7-4e9a-a2e8-b29f792b61ec",
"aee05a9a-9858-4f35-9709-081c4a1c751a"
],
"count": 11
},
"0.11": {
"chapter": "0.11",
"id": "cee376fb-ba21-4343-87eb-2877a286ce96",
"isUnavailable": false,
"others": [
"cc5bf5ee-2173-458a-bbfc-7987f4cebae4",
"9025c0ab-e915-44a7-9bdd-f79b56ffaacd",
"b602f690-2739-434c-a34e-9443a789f4d2",
"aef4fc40-62f7-4d36-9ecd-5e50c91248b3",
"b2d4ece9-34ed-40bd-bb1b-f776b2d5d3fd",
"e197cc4a-601a-48cc-855c-a61041b86b8e",
"64846703-e616-4158-a46a-45a101d37ee6",
"b5837aaf-3935-4a7e-8632-7428809af538",
"d3c1f69d-c052-4070-8b0e-581ca87dfe1f",
"dfef3b50-ed7a-4faf-83c0-472ef2ce6450"
],
"count": 11
},
"0.10": {
"chapter": "0.10",
"id": "02a7a66c-55ac-437c-b4bf-eeb5404a4e49",
"isUnavailable": false,
"others": [
"6551e86a-e170-42b9-99a2-7559d9a9cb7f",
"a709ba77-55aa-48f2-92da-6028bfc89ba9",
"27417647-9137-4bb5-acee-373d7f7f50db",
"75c5f1fb-7a1b-485b-8235-edfd2960b924",
"c220d667-b139-4a95-b4a2-8802a9ce6594",
"ae4ea342-651f-445c-8a46-c447c6224492",
"b1abf3a1-4043-4f25-8dda-03aba6cab5aa",
"ac338a08-eca0-4039-afb1-311a5bd94613",
"84f64446-4985-4284-85e5-939cafa97490",
"8dd318eb-3dd2-43c9-8684-84481b718d36",
"8ed7463e-a04c-4016-94d3-a15835d17c17"
],
"count": 12
},
"0.06": {
"chapter": "0.06",
"id": "db0f60ee-7caa-4997-8997-4191526a3820",
"isUnavailable": false,
"others": [],
"count": 1
},
"0.05": {
"chapter": "0.05",
"id": "b14ef45b-2489-49ee-b422-e199ec162617",
"isUnavailable": false,
"others": [],
"count": 1
},
"0.04": {
"chapter": "0.04",
"id": "5b99492a-562e-4d5e-bb18-8eee5e69361f",
"isUnavailable": false,
"others": [],
"count": 1
},
"0.03": {
"chapter": "0.03",
"id": "50083e17-c0ce-4070-bb98-dc2d81d4586f",
"isUnavailable": false,
"others": [],
"count": 1
},
"0.02": {
"chapter": "0.02",
"id": "e2182b61-6318-4696-b903-02161e9cdfd3",
"isUnavailable": false,
"others": [],
"count": 1
}
}
},
"3": {
"volume": "3",
"count": 64,
"chapters": {
"9": {
"chapter": "9",
"id": "d9bd2fd0-7e6b-4d21-8c4e-995f31240a6f",
"isUnavailable": false,
"others": [],
"count": 1
},
"8": {
"chapter": "8",
"id": "764401f3-87dd-45ba-bcef-b922f9c30aba",
"isUnavailable": false,
"others": [],
"count": 1
},
"7": {
"chapter": "7",
"id": "30cd133f-6d0c-4de4-afe0-f665e1a710bb",
"isUnavailable": false,
"others": [],
"count": 1
},
"6": {
"chapter": "6",
"id": "fee753ce-5f91-44ed-8ccf-8af91903ab18",
"isUnavailable": false,
"others": [],
"count": 1
},
"0.09": {
"chapter": "0.09",
"id": "44556b1b-f76d-48ee-bbdd-ac1e0f54760d",
"isUnavailable": false,
"others": [
"b65d1616-8735-4cef-821d-d648b1fd32c2",
"f1d6eeef-61a7-41aa-9115-d10c5868dfbc",
"d584c8d4-5e81-4520-9711-a91b41c71d55",
"14fc7f60-e3fd-48ac-adbb-472b837919f3",
"7eb4aab5-1ada-4e71-a230-54b2775b2922",
"9c185ad5-0836-47f0-bdc9-27c5b9718303",
"9f714f5b-7360-4f3c-8290-21ed7d026556",
"e5aada0e-5c25-4083-ab70-9d2568cb70cb",
"402639fb-4744-4f70-b417-562992c88838",
"7dccf36e-f431-4de8-af5c-dc3b8ca671b7",
"6eeb7e64-583e-4ca9-9e0c-4d6becad94e9",
"70ebf4f7-a1ec-42a3-a8c7-c065bdb4581d",
"c7244104-719c-49ce-8f99-31a6e88b8357"
],
"count": 14
},
"0.08": {
"chapter": "0.08",
"id": "326722b5-4dcd-43bb-83d7-6cff93228fda",
"isUnavailable": false,
"others": [
"1e333e3a-ca4d-4448-a4d3-e73b8dda54de",
"34e8b03e-4b20-4cad-8c3a-3071cf569d32",
"43aefcb2-f42a-45e4-8004-98637d7782ad",
"f592df27-633e-4cda-9809-9fe7f8567964",
"99847707-5002-4682-b452-c90f877478fd",
"522837fb-46cf-430a-a1b3-ddcfc5186af3",
"a65b1756-445f-4fb9-868f-0b1f2f81a67f",
"97aefebf-420e-4d1c-8272-efef18daeaf7",
"e74b48d4-e471-4380-8e51-8fc6fb1448f9",
"20d5ad60-aa4d-4788-b3c2-881687dbcfab",
"3a4e2078-9b56-47bb-9fcb-110312476a53",
"89a67d6d-282f-426a-847f-02468d8e000a",
"5e989716-4ee6-4f4e-8d48-e86b566b00c5",
"81bcead9-aef6-431e-bb99-224f71392d17"
],
"count": 15
},
"0.07": {
"chapter": "0.07",
"id": "728229aa-c8e7-4edc-9735-64ea4717d7db",
"isUnavailable": false,
"others": [
"66c220f8-76bc-4f6c-9361-a4c27b092403",
"7d347206-3182-43bf-a902-ed01262e3e78",
"4fba007f-932a-4dbe-bf12-56eed0d77a87",
"559011af-ca14-4bbe-8963-1b623c860008",
"b8d1c523-d854-4847-9206-de483c3a0462",
"0f59f05a-d947-47dd-8e9e-d43f1b8ad95d",
"0a2a4b71-cdc3-47a5-be49-bfd09d666968",
"222b8892-7ac6-4b20-9c69-2af4fb224b41",
"8644f94d-2632-41c4-bb67-6922fa2ff5ef",
"1d0b0b84-b918-4f64-88f8-05d00dbe8ff8",
"d0c1cbac-6ac2-459c-bdf6-d80b08ad5fb4",
"a775997a-f6d1-41a1-a20a-9bf21e688268",
"b4e55b26-bc13-4e1d-8d68-4a59b185c7af",
"e7e9bac9-2854-4fe9-b3bc-ee52f15f427b"
],
"count": 15
},
"0.06": {
"chapter": "0.06",
"id": "1356fda3-9b0a-4ea1-a17a-99db1a7badd8",
"isUnavailable": false,
"others": [
"5b4f7baa-7d22-4603-ad93-d97b05b314b0",
"3ea50797-234e-489c-ac4c-be0e206212ab",
"8abf1b72-a32a-4f66-b425-a5a46595386d",
"b87520d1-f404-4ff5-b608-d59259c939e8",
"4a931c2f-d8f0-4742-a05f-6fd7e30daa6e",
"894747fd-4e15-43ac-8a53-630de180d680",
"b9c5f3d9-5ac7-4fee-b36f-80e65935a5df",
"98585b89-7c5c-48ba-a2b1-dd811346972e",
"3604efc8-d1ef-4428-b657-678a60b1fcc9",
"7d3c88a1-b5f2-4dd6-bd59-84982e4e6a27",
"bafe089d-7993-4b25-b2ab-cd13f17402e6",
"d6586e1a-4bc1-4cfa-a37b-f10ee8b878a1",
"b1b7fb5e-dc13-401d-b302-3ea79988d829",
"b415cd73-1b91-45c1-8ae0-5e5db2f83308"
],
"count": 15
},
"0.01": {
"chapter": "0.01",
"id": "07316614-f33d-438c-98e9-5151c660127d",
"isUnavailable": false,
"others": [],
"count": 1
}
}
},
"2": {
"volume": "2",
"count": 34,
"chapters": {
"5": {
"chapter": "5",
"id": "05af2978-61eb-4fd3-b58a-58e2cb839161",
"isUnavailable": false,
"others": [],
"count": 1
},
"4": {
"chapter": "4",
"id": "377c2a17-6c6b-43a6-b5ec-4cc69f8bdc2c",
"isUnavailable": false,
"others": [],
"count": 1
},
"0.05": {
"chapter": "0.05",
"id": "82fb16b9-8b27-416f-84b6-a35b2f07389c",
"isUnavailable": false,
"others": [
"6089cb1e-ecf2-4f5c-b4ad-ead4be0b2cb1",
"7d025813-2b8e-4bb5-8d48-ff95d3e3c9cc",
"e0d761ab-0a58-4f90-b1c0-611b9ef5c7cf",
"d734ca5d-a286-4cd1-9a94-a218654cdc70",
"31f7109d-7f4f-42c0-a449-e77712dfcd3e",
"0b2d0f6b-7867-4a3b-b94d-fc5d965ca66e",
"0674fdf5-d93e-412d-8c59-e46daa432d77",
"b419993a-2fd1-41f3-acee-54cf17b21a38",
"b7f1bdd0-7a02-4529-b73f-8f2bbe949fdb",
"95b5a3c7-3863-4170-ba7f-99266186ff93",
"a049acf9-b1f5-4df9-8573-585929c0c3ad",
"b040d273-72d0-4ee5-b657-86d0f76ef3fd",
"68ba8d52-7540-47c3-8bf4-5e66fc0c2ee7",
"715fa6b3-18a0-4bfe-a0b7-5bd9c08a1221",
"8c4ef7c6-ba40-4d67-9518-cfcdd8f86b13"
],
"count": 16
},
"0.04": {
"chapter": "0.04",
"id": "88a02a43-9414-4e4f-a7b5-e9a30ecf76f4",
"isUnavailable": false,
"others": [
"7198f447-abb2-4625-a8ca-78fe8107548d",
"a6984876-58d7-44f1-bed5-b605e0887899",
"996b6b09-692f-4e85-ace3-1619772be2c7",
"eb69e914-d8e5-4f25-a965-80814b27fd15",
"49614135-7eef-4f12-817c-f5fc8de19481",
"3e22c3a6-770c-47c5-9295-9953643dc088",
"60bc52ec-40d7-46e0-a081-3dbbaee8b865",
"bd31214c-2cec-434c-a4a5-75f8d915d5b2",
"da0834a0-e1d6-4bd9-bb6a-15d08de9ff77",
"dbba2543-1279-4fae-b5d9-e7448cafb911",
"dbea90d5-3f56-4970-8aaf-fb337b9e735a",
"2a4b1c71-0500-4d25-9094-dd3947c3922a",
"573a9995-28fe-4e11-aab4-db87d49dd65c",
"5260a014-2df6-4d09-8cbf-8f301ca0326b",
"f566ad35-7894-42b7-9d94-2eb1c38e3bec"
],
"count": 16
}
}
},
"1": {
"volume": "1",
"count": 67,
"chapters": {
"3": {
"chapter": "3",
"id": "082584ac-bdc6-4069-bffd-596104eb1098",
"isUnavailable": false,
"others": [
"6f19f021-d0e7-4d0a-b89f-12051bbc2e6a"
],
"count": 2
},
"2": {
"chapter": "2",
"id": "38310cd3-d890-4d0e-bc21-d87b37fae891",
"isUnavailable": false,
"others": [
"796294e5-c05c-45e5-a5b5-3a9214b34a96",
"73186794-29e5-45bb-98f7-aa207bbbe4c0"
],
"count": 3
},
"1": {
"chapter": "1",
"id": "12a7fa27-7002-4e9c-a414-f53928d808d3",
"isUnavailable": false,
"others": [
"0c9be97a-c3cf-468c-9198-cc2a84ce809c",
"43ed9a4f-b453-4b22-84a6-e8585aed770a",
"aa769576-260e-47b2-9b66-32ffe187cee9"
],
"count": 4
},
"0.03": {
"chapter": "0.03",
"id": "454bbf68-b00e-4a1f-8bad-934f252dd6d4",
"isUnavailable": false,
"others": [
"55e2674f-0d44-4539-b1ba-94ef30c7c5f9",
"5bbe7bce-0358-4189-a26f-db4ad5a2e9cd",
"50379cfc-3a1d-490c-879c-70cdff73521a",
"74166770-3bb5-4fa3-b4c4-b767f9e56f76",
"455f3a93-8d9a-4a8d-95e3-a45a7ea90ce0",
"b979f23f-6a43-493e-aafa-61cf5917f8c7",
"e1cf00ad-d348-471a-bb12-7eee78085ebc",
"d65b2ffa-f9cc-4095-b558-fa83837d9ae7",
"2ffb6363-0001-4359-a63f-262e22b5ff40",
"0ef160be-d552-471e-a841-a027b3410430",
"3c508e50-a91a-4fb0-9e63-683d83d707de",
"72b4542d-b1bc-4445-a9a2-f22b7cf028d1",
"833bd7c8-349b-4370-b6bf-a4408cf9af8f",
"a33bbe00-21ed-4469-8d5f-34e166dd140b",
"9b2c4997-e4de-408a-8cd0-6f4adfd15ea6",
"9f4c1ef0-346a-4296-9def-41b54256fb2e",
"dddecd59-8636-483f-8f2e-31e69d15c920"
],
"count": 18
},
"0.02": {
"chapter": "0.02",
"id": "18546144-5fa4-4241-8c5a-51b5eca28794",
"isUnavailable": false,
"others": [
"c11082a4-ab47-4542-b240-3cd0029ef427",
"93f221d1-2f38-4cb3-a64c-840384a9cf4f",
"ae5cd49d-21f5-4472-b47b-b72661aee20e",
"f3e848f4-48e7-4ff4-ab25-81e2af295381",
"59d71c25-83a0-4db9-b76f-809457f0157f",
"24a5a455-6eb1-4b51-b57b-b7e720994221",
"1c5611e0-fb05-4a15-b41e-536154d4a912",
"4a977357-1d44-4ec9-9233-bd579bad41a0",
"5f227923-4795-46ab-a186-1c1549004f37",
"643e42ab-9d53-4c7f-bf04-1041b17935b2",
"a35f533c-336a-4507-b93d-70a6b61bc3f0",
"18ceda91-3762-4f63-8bbb-ffc7eb3731ce",
"10d14daf-7ec1-43bf-ba15-dcabe84fccd1",
"0634e42f-e5d0-4f6b-b2bb-044339372936",
"88bd3701-ce4e-407b-b09a-5598a860f58c",
"c2a3a696-14d1-4b65-a8bc-6ace6664506c",
"db01f771-3199-42fd-b50e-48deca8a997d",
"da63389a-3d60-4634-8652-47a52e35eacc"
],
"count": 19
},
"0.01": {
"chapter": "0.01",
"id": "03381228-05e7-47e8-b086-6f411ce6b1f3",
"isUnavailable": false,
"others": [
"0dae4ebf-2909-4e51-9d8a-806a0e8fcf07",
"11b6d602-0087-4f6c-ba8a-b25a0a279e2e",
"7329f5c6-d3d8-4f4e-875f-81d4aa400c22",
"3fc110c1-5685-489e-addd-c1142ec2071e",
"bbea0894-09ab-4983-901d-368371a66708",
"fcaef375-8e61-4376-a812-68f15c603ca6",
"d3e7e129-f00f-499c-abbc-437552b8128a",
"d120a2fb-67b7-4b3f-b551-ab973ac66a85",
"661a019c-3948-45ed-ac3e-0f05e4e12734",
"5bc3a83f-095e-4c07-87d0-b513c52ab43f",
"3d7fb2a6-0f7d-4c6b-b80d-fcd2e7d9bff8",
"c258f881-2a0f-448f-8966-8284b43eb053",
"b04976c9-823e-4bd0-bb62-36324607552a",
"f6175027-ad99-4c42-aae9-c440555a4997",
"407342d4-22bf-4dbe-9588-0bafd8e494e6",
"08d98058-c945-4a54-adbe-e6ef6b8ad395",
"6310f6a1-17ee-4890-b837-2ec1b372905b",
"adee8060-53cf-4390-b81f-3bb8369b59fe",
"b21939fc-f404-4aa3-930e-c2bfea0a7576",
"201a0135-57e8-4f58-a1bb-b95b60bd4bc1"
],
"count": 21
}
}
}
}
}
