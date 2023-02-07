const addresses = [
  {
    address: '1775 Bellevue Ave, West Vancouver',
    lat: 49.3278471,
    lng: -123.161684
  },
  {
    address: '1370 Clyde Ave, West Vancouver',
    lat: 49.3284725,
    lng: -123.1535426
  },
  {
    address: '2100 Bellevue Ave, West Vancouver',
    lat: 49.3286161,
    lng: -123.1684069
  },
  {
    address: '2190 Bellevue Ave, West Vancouver',
    lat: 49.3292428,
    lng: -123.1702589
  },
  {
    address: '935 Marine Dr, West Vancouver',
    lat: 49.3276969,
    lng: -123.1417613
  },
  {
    address: '2085 Bellevue Ave, West Vancouver',
    lat: 49.3289499,
    lng: -123.1676493
  },
  {
    address: '2025 Bellevue Ave, West Vancouver',
    lat: 49.32868870000001,
    lng: -123.1668178
  },
  {
    address: '1425 Esquimalt Ave, West Vancouver',
    lat: 49.3307543,
    lng: -123.1550697
  },
  {
    address: '195 21st St, West Vancouver',
    lat: 49.328457,
    lng: -123.1685
  },
  {
    address: '1550 Duchess Ave, West Vancouver',
    lat: 49.3295464,
    lng: -123.1577202
  },
  {
    address: '2151 Gordon Ave, West Vancouver',
    lat: 49.33276679999999,
    lng: -123.1692372
  },
  {
    address: '2222 Bellevue Ave, Vancouver',
    lat: 49.3298212,
    lng: -123.1718933
  },
  {
    address: '328 Taylor Way, West Vancouver',
    lat: 49.3265359,
    lng: -123.1345321
  },
  {
    address: '2190 Bellevue Ave, West Vancouver',
    lat: 49.3292696,
    lng: -123.1703217
  },
  {
    address: '14th St & Clyde Ave, West Vancouver',
    lat: 49.3287398,
    lng: -123.1543291
  },
  {
    address: '1689 Duchess Ave, West Vancouver',
    lat: 49.3299841,
    lng: -123.1599424
  },
  {
    address: '2288 Bellevue Ave, West Vancouver',
    lat: 49.3316501,
    lng: -123.1747535
  },
  {
    address: '605 Clyde Ave, West Vancouver',
    lat: 49.328419,
    lng: -123.1324323
  },
  {
    address: '2535 Garden Court, West Vancouver',
    lat: 49.34930259999999,
    lng: -123.1833051
  },
  {
    address: '150 24th St, West Vancouver',
    lat: 49.3325036,
    lng: -123.179033
  },
  {
    address: '630 Millbank, Vancouver',
    lat: 49.2680841,
    lng: -123.1182283
  },
  {
    address: '3627 Oak St #2, Vancouver',
    lat: 49.2533204,
    lng: -123.1276732
  },
  {
    address: '550 W 12th Ave, Vancouver',
    lat: 49.2601619,
    lng: -123.1164516
  },
  {
    address: '107 W Broadway, Vancouver',
    lat: 49.2634391,
    lng: -123.1025391
  },
  {
    address: '855 W 8th Ave, Vancouver',
    lat: 49.2643901,
    lng: -123.1232606
  },
  {
    address: '955 W 10th Ave, Vancouver',
    lat: 49.2625828,
    lng: -123.1253144
  },
  {
    address: '43 E 15th Ave, Vancouver',
    lat: 49.2577027,
    lng: -123.104088
  },
  {
    address: '30 E 10th Ave, Vancouver',
    lat: 49.26191559999999,
    lng: -123.1039039
  },
  {
    address: '131 E 16th Ave, Vancouver',
    lat: 49.256763,
    lng: -123.1025112
  },
  {
    address: '2M4, 55 E 14th Ave, Vancouver',
    lat: 49.2586844,
    lng: -123.1040965
  },
  {
    address: '1125 W 12th Ave, Vancouver',
    lat: 49.2608622,
    lng: -123.1297967
  },
  {
    address: '1050 W 10th Ave, Vancouver',
    lat: 49.2623094,
    lng: -123.1278604
  },
  {
    address: '3537 Oak St #304, Vancouver',
    lat: 49.2540857,
    lng: -123.1276057
  },
  {
    address: '917 W 7th Ave, Vancouver',
    lat: 49.2653048,
    lng: -123.1248559
  },
  {
    address: '3115 Quebec St, Vancouver',
    lat: 49.257298,
    lng: -123.1034205
  },
  {
    address: '603 W 8th Ave, Vancouver',
    lat: 49.2642883,
    lng: -123.1178351
  },
  {
    address: '1100 W 6th Ave, Vancouver',
    lat: 49.2658931,
    lng: -123.1296746
  },
  {
    address: '2268 Ash St, Vancouver',
    lat: 49.2647999,
    lng: -123.1172702
  },
  {
    address: '3819 &, 3821 Cambie St, Vancouver',
    lat: 49.2511245,
    lng: -123.1156237
  },
  {
    address: '2910 Ontario St, Vancouver',
    lat: 49.2590754,
    lng: -123.1046361
  },
  {
    address: '1406 Laburnum St, Vancouver',
    lat: 49.2734534,
    lng: -123.1511794
  },
  {
    address: '4655 Valley Dr, Vancouver',
    lat: 49.24435880000001,
    lng: -123.1521729
  },
  {
    address: '1790 W 10th Ave #111, Vancouver',
    lat: 49.2625702,
    lng: -123.1453495
  },
  {
    address: '1741 W 10th Ave, Vancouver',
    lat: 49.2629083,
    lng: -123.1445065
  },
  {
    address: '3593 W 30th Ave, Vancouver',
    lat: 49.24537710000001,
    lng: -123.1848183
  },
  {
    address: '2324 W 1st Ave Unit 704, Vancouver',
    lat: 49.270598,
    lng: -123.1580329
  },
  {
    address: '1848 W 3rd Ave, Vancouver',
    lat: 49.2687635,
    lng: -123.1469695
  },
  {
    address: '2341 York Ave, Vancouver',
    lat: 49.27190479999999,
    lng: -123.1586824
  },
  {
    address: '3755 W 6th Ave, Vancouver',
    lat: 49.26764439999999,
    lng: -123.1870079
  },
  {
    address: '3675 W 7th Ave, Vancouver',
    lat: 49.2662079,
    lng: -123.1853993
  },
  {
    address: '2233 W 3rd Ave, Vancouver',
    lat: 49.2692225,
    lng: -123.1555775
  },
  {
    address: '2395 W 4th Ave, Vancouver',
    lat: 49.2683653,
    lng: -123.1596199
  },
  {
    address: '1526 Arbutus St, Vancouver',
    lat: 49.2722673,
    lng: -123.1524549
  },
  {
    address: '4750 Arbutus St, Vancouver',
    lat: 49.2432616,
    lng: -123.1529198
  },
  {
    address: '2475 W Broadway, Vancouver',
    lat: 49.2641547,
    lng: -123.1611536
  },
  {
    address: '1783 W 14th Ave, Vancouver',
    lat: 49.2592243,
    lng: -123.1454435
  },
  {
    address: '2350 W 1st Ave, Vancouver',
    lat: 49.27062189999999,
    lng: -123.1588403
  },
  {
    address: '2296 Cornwall Ave, Vancouver',
    lat: 49.27245019999999,
    lng: -123.1571379
  },
  {
    address: '2265 W 3rd Ave, Vancouver',
    lat: 49.26923679999999,
    lng: -123.1564521
  },
  {
    address: '1663 W 12th Ave, Vancouver',
    lat: 49.2610342,
    lng: -123.1425898
  },
  {
    address: '170 Keith Rd E, North Vancouver',
    lat: 49.3159392,
    lng: -123.0705513
  },
  {
    address: '130 11th St E #203, North Vancouver',
    lat: 49.3181708,
    lng: -123.0710805
  },
  {
    address: '308 Forbes Ave, North Vancouver',
    lat: 49.3173946,
    lng: -123.0855997
  },
  {
    address: '125 W Keith Rd, North Vancouver',
    lat: 49.3167205,
    lng: -123.0753466
  },
  {
    address: '163 5th St W, North Vancouver',
    lat: 49.31583699999999,
    lng: -123.0780048
  },
  {
    address: '108 13th St W, North Vancouver',
    lat: 49.3201681,
    lng: -123.0731041
  },
  {
    address: '131 6th St W, North Vancouver',
    lat: 49.3161292,
    lng: -123.0761065
  },
  {
    address: '145 W Keith Rd, North Vancouver',
    lat: 49.3170534,
    lng: -123.0760119
  },
  {
    address: '170 5th St E, North Vancouver',
    lat: 49.3142097,
    lng: -123.0725228
  },
  {
    address: '130 W Keith Rd, North Vancouver',
    lat: 49.3182531,
    lng: -123.0744399
  },
  {
    address: '111 1st St E, North Vancouver',
    lat: 49.3115004,
    lng: -123.0781782
  },
  {
    address: '175 14th St W, North Vancouver',
    lat: 49.3208148,
    lng: -123.0751444
  },
  {
    address: '616 Lonsdale Ave, North Vancouver',
    lat: 49.3161213,
    lng: -123.0740546
  },
  {
    address: '380 1st St E, North Vancouver',
    lat: 49.308366,
    lng: -123.0696954
  },
  {
    address: '150 11th St E, North Vancouver',
    lat: 49.3180685,
    lng: -123.0703824
  },
  {
    address: '315 1st St E, North Vancouver',
    lat: 49.3088221,
    lng: -123.0720959
  },
  {
    address: '1240 St Georges Ave, North Vancouver',
    lat: 49.31961949999999,
    lng: -123.0689926
  },
  {
    address: '1320 Chesterfield Ave, North Vancouver',
    lat: 49.3203602,
    lng: -123.0752699
  },
  {
    address: '177 5th St W #206, North Vancouver',
    lat: 49.3160692,
    lng: -123.078382
  },
  {
    address: '150 Keith Rd E #1103, North Vancouver',
    lat: 49.3166429,
    lng: -123.070865
  },
  {
    address: '128 W Pender St W, Vancouver',
    lat: 49.2809653,
    lng: -123.1084721
  },
  {
    address: '909 Burrard St, Vancouver',
    lat: 49.2822141,
    lng: -123.124813
  },
  {
    address: '159 W 2nd Ave, Vancouver',
    lat: 49.2697441,
    lng: -123.107957
  },
  {
    address: '711 Broughton St, Vancouver',
    lat: 49.2886256,
    lng: -123.1294329
  },
  {
    address: '1255 Bidwell St, Vancouver',
    lat: 49.285946,
    lng: -123.1414863
  },
  {
    address: '289 Drake St, Vancouver',
    lat: 49.2739744,
    lng: -123.1235961
  },
  {
    address: '16 E Hastings St, Vancouver',
    lat: 49.2812639,
    lng: -123.1039163
  },
  {
    address: 'W Cordova St, Vancouver',
    lat: 49.2882824,
    lng: -123.117379
  },
  {
    address: '811 Helmcken St #407, Vancouver',
    lat: 49.2791957,
    lng: -123.1255688
  },
  {
    address: '535 Howe St, Vancouver',
    lat: 49.28512509999999,
    lng: -123.1167263
  },
  { address: 'Vancouver', lat: 49.281971, lng: -123.1176401 },
  {
    address: '1770 Davie St, Vancouver',
    lat: 49.2868354,
    lng: -123.1414762
  },
  {
    address: '300 W Georgia St, Vancouver',
    lat: 49.2796616,
    lng: -123.115319
  },
  {
    address: '510 Burrard St, Vancouver',
    lat: 49.2858822,
    lng: -123.1171844
  },
  {
    address: '233 Robson St, Vancouver',
    lat: 49.27848030000001,
    lng: -123.1149437
  },
  {
    address: '510 W Hastings St, Vancouver',
    lat: 49.28398749999999,
    lng: -123.1124277
  },
  {
    address: '1655 Barclay St, Vancouver',
    lat: 49.2887981,
    lng: -123.1347156
  },
  {
    address: '1461 Harwood St, Vancouver',
    lat: 49.2829585,
    lng: -123.1391595
  },
  {
    address: '58 Keefer Pl, Vancouver',
    lat: 49.2792813,
    lng: -123.1065474
  },
  {
    address: '909 Burrard St, Vancouver',
    lat: 49.2823018,
    lng: -123.1249281
  },
  {
    address: '107 W Broadway, Vancouver',
    lat: 49.2634391,
    lng: -123.1025391
  },
  {
    address: '2336 St Catherines St, Vancouver',
    lat: 49.26368240000001,
    lng: -123.0848643
  },
  {
    address: '336 E 7th Ave, Vancouver',
    lat: 49.2643972,
    lng: -123.0975647
  },
  {
    address: '837 E Broadway, Vancouver',
    lat: 49.26266589999999,
    lng: -123.0861829
  },
  {
    address: '180 Switchmen St, Vancouver',
    lat: 49.2709002,
    lng: -123.1010893
  },
  {
    address: '303 E Pender St, Vancouver',
    lat: 49.2806063,
    lng: -123.097117
  },
  {
    address: '30 E 10th Ave, Vancouver',
    lat: 49.26191559999999,
    lng: -123.1039039
  },
  {
    address: '111 E 1st Ave, Vancouver',
    lat: 49.2705772,
    lng: -123.1020663
  },
  {
    address: '180 E 2nd Ave, Vancouver',
    lat: 49.26886090000001,
    lng: -123.1010493
  },
  {
    address: '316 E 1st Ave, Vancouver',
    lat: 49.2680399,
    lng: -123.0970097
  },
  {
    address: '22 E Cordova St, Vancouver',
    lat: 49.2822604,
    lng: -123.1036387
  },
  {
    address: '679 E Cordova St, Vancouver',
    lat: 49.2822585,
    lng: -123.08967
  },
  {
    address: '1216 E 7th Ave, Vancouver',
    lat: 49.2640986,
    lng: -123.0788324
  },
  {
    address: '333 E 11th Ave, Vancouver',
    lat: 49.2611868,
    lng: -123.0974131
  },
  {
    address: '110 Switchmen St, Vancouver',
    lat: 49.2710399,
    lng: -123.1020086
  },
  {
    address: '1168 E Hastings St, Vancouver',
    lat: 49.280698,
    lng: -123.0797641
  },
  {
    address: '285 E 10th Ave, Vancouver',
    lat: 49.2621141,
    lng: -123.0995228
  },
  {
    address: '245 E Georgia St, Vancouver',
    lat: 49.2786882,
    lng: -123.0981037
  },
  {
    address: '320 Abbott St, Vancouver',
    lat: 49.2826146,
    lng: -123.106795
  },
  {
    address: '161 W Georgia St, Vancouver',
    lat: 49.27879129999999,
    lng: -123.1117482
  },
  {
    address: '1260 Harwood St, Vancouver',
    lat: 49.2811654,
    lng: -123.1371648
  },
  {
    address: '1890 Haro St, Vancouver',
    lat: 49.29158469999999,
    lng: -123.1381202
  },
  {
    address: '1122 Harwood St, Vancouver',
    lat: 49.2791429,
    lng: -123.1343574
  },
  {
    address: '1120 Barclay St Unit: 802, Vancouver',
    lat: 49.28353449999999,
    lng: -123.1278922
  },
  {
    address: '1221 Homer St, Vancouver',
    lat: 49.2751125,
    lng: -123.1239233
  },
  {
    address: '2040 Nelson St, Vancouver',
    lat: 49.29149659999999,
    lng: -123.1424007
  },
  {
    address: '22 E Cordova St, Vancouver',
    lat: 49.2822604,
    lng: -123.1036387
  },
  {
    address: '1355 Pendrell St, Vancouver',
    lat: 49.2841618,
    lng: -123.1343062
  },
  {
    address: '1022 Nelson St, Vancouver',
    lat: 49.2816959,
    lng: -123.1272031
  },
  {
    address: '1920 Alberni St, Vancouver',
    lat: 49.2932508,
    lng: -123.1364279
  },
  {
    address: '1160 Haro St, Vancouver',
    lat: 49.2848495,
    lng: -123.1276496
  },
  {
    address: '1033 Haro St Suite 106, Vancouver',
    lat: 49.2832216,
    lng: -123.1244682
  },
  {
    address: '1540 Davie St, Vancouver',
    lat: 49.2846645,
    lng: -123.1383309
  },
  {
    address: '928 Beatty St, Vancouver',
    lat: 49.2761612,
    lng: -123.1156941
  },
  {
    address: '1414 Davie St, Vancouver',
    lat: 49.28386039999999,
    lng: -123.1368901
  },
  {
    address: '1454 Pendrell St, Vancouver',
    lat: 49.2847888,
    lng: -123.1362155
  },
  {
    address: '2045 Nelson St, Vancouver',
    lat: 49.2917715,
    lng: -123.1419738
  },
  {
    address: '939 Expo Blvd, Vancouver',
    lat: 49.275519,
    lng: -123.1154595
  },
  {
    address: '1228 Nicola St, Vancouver',
    lat: 49.2841183,
    lng: -123.1375194
  },
  {
    address: '945 Jervis St #104, Vancouver',
    lat: 49.28558169999999,
    lng: -123.1312333
  },
  {
    address: '2035 Fullerton Ave, North Vancouver',
    lat: 49.3272018,
    lng: -123.1229859
  },
  {
    address: '1989 Marine Dr, North Vancouver',
    lat: 49.32351389999999,
    lng: -123.1213751
  },
  {
    address: '2016 Fullerton Ave, North Vancouver',
    lat: 49.3305521,
    lng: -123.1232396
  },
  {
    address: 'Marine Dr FS Capilano Rd, North Vancouver',
    lat: 49.3245477,
    lng: -123.122373
  },
  {
    address: '388 Kaslo St, Vancouver',
    lat: 49.2815315,
    lng: -123.0464221
  },
  {
    address: '2326 Eton St, Vancouver',
    lat: 49.2873308,
    lng: -123.0571364
  },
  {
    address: '501 E Hastings St, Vancouver',
    lat: 49.2810796,
    lng: -123.0441015
  },
  {
    address: '388 Skeena St, Vancouver',
    lat: 49.2813485,
    lng: -123.0280998
  },
  {
    address: '16 N Nanaimo St, Vancouver',
    lat: 49.28425920000001,
    lng: -123.0559477
  },
  {
    address: '3760 Albert St, Burnaby',
    lat: 49.2819476,
    lng: -123.0222438
  },
  {
    address: '2215 Dundas St, Vancouver',
    lat: 49.2849825,
    lng: -123.0592545
  },
  {
    address: '2551 Triumph St, Vancouver',
    lat: 49.2840479,
    lng: -123.0533334
  },
  {
    address: '125 20th St E, North Vancouver',
    lat: 49.3268996,
    lng: -123.0711614
  },
  {
    address: '230 16th St E, North Vancouver',
    lat: 49.3232332,
    lng: -123.0679411
  },
  {
    address: '136 15th St E, North Vancouver',
    lat: 49.3222706,
    lng: -123.0704508
  },
  {
    address: '143 21st St E, North Vancouver',
    lat: 49.3280242,
    lng: -123.0704827
  },
  {
    address: '130 17th Street West, North Vancouver',
    lat: 49.3243427,
    lng: -123.0738023
  },
  {
    address: '150 15th St W, North Vancouver',
    lat: 49.32226929999999,
    lng: -123.0745749
  },
  {
    address: '1441 St Georges Ave, North Vancouver',
    lat: 49.3217368,
    lng: -123.0694854
  },
  {
    address: '857 15th St W, North Vancouver',
    lat: 49.3221926,
    lng: -123.0965308
  },
  {
    address: '144 14th St W, North Vancouver',
    lat: 49.3212759,
    lng: -123.0743107
  },
  {
    address: '154 18th St E, North Vancouver',
    lat: 49.32538599999999,
    lng: -123.0696095
  },
  {
    address: '1730 Chesterfield Ave, North Vancouver',
    lat: 49.3247778,
    lng: -123.0751314
  },
  {
    address: '108 13th St W, North Vancouver',
    lat: 49.3201681,
    lng: -123.0731041
  },
  {
    address: '150 15th St E, North Vancouver',
    lat: 49.3222681,
    lng: -123.0700138
  },
  {
    address: '101 29th St E, North Vancouver',
    lat: 49.3354803,
    lng: -123.0715847
  },
  {
    address: '1110 27th St, North Vancouver',
    lat: 49.3336009,
    lng: -123.0428361
  },
  {
    address: '830 Westview Crescent, North Vancouver',
    lat: 49.3349695,
    lng: -123.0898859
  },
  {
    address: '1748 E Pender St, Vancouver',
    lat: 49.2800783,
    lng: -123.0692044
  },
  {
    address: '1417 E 8th Ave, Vancouver',
    lat: 49.2634638,
    lng: -123.0749458
  },
  {
    address: '1555 E 6th Ave, Vancouver',
    lat: 49.2652873,
    lng: -123.0726995
  },
  {
    address: '841 Commercial Dr, Vancouver',
    lat: 49.2769193,
    lng: -123.0706409
  },
  {
    address: '3655 Victoria Dr, Vancouver',
    lat: 49.2521744,
    lng: -123.0657038
  },
  {
    address: '1835 McLean Dr, Vancouver',
    lat: 49.2685177,
    lng: -123.0757111
  },
  {
    address: '2336 St Catherines St, Vancouver',
    lat: 49.26368240000001,
    lng: -123.0848643
  },
  {
    address: '1771 E 18th Ave, Vancouver',
    lat: 49.2545176,
    lng: -123.0688826
  },
  {
    address: '1216 E 7th Ave, Vancouver',
    lat: 49.2640986,
    lng: -123.0788324
  },
  {
    address: '1556 E Pender St, Vancouver',
    lat: 49.2802206,
    lng: -123.0729643
  },
  { address: 'Vancouver', lat: 49.26258439999999, lng: -123.076899 },
  {
    address: '1130 E Broadway, Vancouver',
    lat: 49.2622052,
    lng: -123.080727
  },
  {
    address: '1718 Venables St, Vancouver',
    lat: 49.2765573,
    lng: -123.0690508
  },
  {
    address: '1368 E 8th Ave, Vancouver',
    lat: 49.26318089999999,
    lng: -123.0761342
  },
  {
    address: '1650 E 3rd Ave, Vancouver',
    lat: 49.26764490000001,
    lng: -123.0705064
  },
  {
    address: '1168 E Hastings St, Vancouver',
    lat: 49.280698,
    lng: -123.0797641
  },
  {
    address: '1811 Adanac St, Vancouver',
    lat: 49.2778146,
    lng: -123.0677228
  },
  {
    address: '1435 E 14th Ave, Vancouver',
    lat: 49.2577952,
    lng: -123.0753306
  },
  {
    address: '3588 Hull St, Vancouver',
    lat: 49.25245349999999,
    lng: -123.0640644
  },
  {
    address: '3615 Victoria Drive Buzzer: 0000, 3615 Victoria Dr #401, Vancouver',
    lat: 49.2528246,
    lng: -123.0664445
  },
  {
    address: '7448 14th Ave, Burnaby',
    lat: 49.2171607,
    lng: -122.9413653
  },
  {
    address: '211 11th St, New Westminster',
    lat: 49.2029781,
    lng: -122.921849
  },
  {
    address: '1303 8th Ave, New Westminster',
    lat: 49.2095379,
    lng: -122.936265
  },
  {
    address: '527 Carnarvon St, New Westminster',
    lat: 49.2045469,
    lng: -122.9084413
  },
  {
    address: '435 Ash St, New Westminster',
    lat: 49.210415,
    lng: -122.9207326
  },
  {
    address: '514 13th St, New Westminster',
    lat: 49.20563000000001,
    lng: -122.9310615
  },
  {
    address: '910 St Andrews St, New Westminster',
    lat: 49.2075259,
    lng: -122.9236811
  },
  {
    address: '101 Royal Ave, New Westminster',
    lat: 49.2101431,
    lng: -122.9031752
  },
  {
    address: '1211 Cameron St, New Westminster',
    lat: 49.2051642,
    lng: -122.9288389
  },
  {
    address: '908 Sixth Ave, New Westminster',
    lat: 49.2100055,
    lng: -122.9258024
  },
  {
    address: '820 6th Ave, New Westminster',
    lat: 49.2105618,
    lng: -122.9247253
  },
  {
    address: '1205 4th Ave, New Westminster',
    lat: 49.2047093,
    lng: -122.9273864
  },
  {
    address: '225 Royal Ave, New Westminster',
    lat: 49.20827629999999,
    lng: -122.90668
  },
  {
    address: '814 4th Ave, New Westminster',
    lat: 49.2074244,
    lng: -122.9214599
  },
  {
    address: '315 Agnes St, New Westminster',
    lat: 49.206732,
    lng: -122.9069449
  },
  {
    address: '1116 Hamilton St, New Westminster',
    lat: 49.2101038,
    lng: -122.9321432
  },
  {
    address: '1115 4th Ave, New Westminster',
    lat: 49.2050689,
    lng: -122.9266001
  },
  {
    address: '8350 11th Ave, Burnaby',
    lat: 49.22599049999999,
    lng: -122.91653
  },
  {
    address: '430 11th St, New Westminster',
    lat: 49.2062956,
    lng: -122.9272113
  },
  {
    address: '1021 4th Ave, New Westminster',
    lat: 49.2061938,
    lng: -122.9246989
  },
  {
    address: '4960 Sanders St, Burnaby',
    lat: 49.22762609999999,
    lng: -122.9935556
  },
  {
    address: '2800 Queensbridge Dr, Burnaby',
    lat: 49.2590553,
    lng: -122.9543546
  },
  {
    address: '6555 Bonsor Ave, Burnaby',
    lat: 49.224362,
    lng: -122.9982208
  },
  {
    address: '4733 Hazel St, Burnaby',
    lat: 49.2289784,
    lng: -122.9973876
  },
  {
    address: '5140 Sanders St, Burnaby',
    lat: 49.22774510000001,
    lng: -122.9901801
  },
  {
    address: '6141 Willingdon Ave, Burnaby',
    lat: 49.2283357,
    lng: -123.0071901
  },
  {
    address: '4769 Hazel St, Burnaby',
    lat: 49.2289896,
    lng: -122.9967919
  },
  {
    address: '4390 Grange St, Burnaby',
    lat: 49.2319342,
    lng: -123.0062471
  },
  {
    address: '5850 Sunset St, Burnaby',
    lat: 49.249076,
    lng: -122.9802127
  },
  {
    address: '6461 Telford Ave, Burnaby',
    lat: 49.2251659,
    lng: -123.0039563
  },
  {
    address: '4808 Hazel St, Burnaby',
    lat: 49.2280808,
    lng: -122.9959137
  },
  {
    address: '4360 Beresford St., Burnaby',
    lat: 49.226947,
    lng: -123.0076289
  },
  {
    address: '4288 Grange St #101, Burnaby',
    lat: 49.2322616,
    lng: -123.0097122
  },
  {
    address: '4880 Bennett St, Burnaby',
    lat: 49.2250013,
    lng: -122.9950632
  },
  {
    address: '4830 Bennett St, Burnaby',
    lat: 49.2250422,
    lng: -122.9960779
  },
  {
    address: '4350 Beresford St., Burnaby',
    lat: 49.22729649999999,
    lng: -123.0088243
  },
  {
    address: '2P2, 5900 Olive Ave, Burnaby',
    lat: 49.2303186,
    lng: -123.0111913
  },
  {
    address: '4345 Grange St, Burnaby',
    lat: 49.2326228,
    lng: -123.0070169
  },
  {
    address: '6463 Silver Ave, Burnaby',
    lat: 49.22470939999999,
    lng: -123.0068046
  },
  {
    address: '6288 Cassie Ave, Burnaby',
    lat: 49.2258672,
    lng: -123.0077785
  },
  {
    address: '6111 Tisdall St, Vancouver',
    lat: 49.2298499,
    lng: -123.1221174
  },
  {
    address: '5688 Ash St, Vancouver',
    lat: 49.2339394,
    lng: -123.1175899
  },
  {
    address: '5976 Tisdall St, Vancouver',
    lat: 49.2313239,
    lng: -123.121442
  },
  {
    address: '488 W 41st Ave, Vancouver',
    lat: 49.233287,
    lng: -123.1152827
  },
  {
    address: '6015 Tisdall St, Vancouver',
    lat: 49.2310185,
    lng: -123.1223658
  },
  {
    address: '5550 Cambie St, Vancouver',
    lat: 49.2349061,
    lng: -123.1155895
  },
  {
    address: '4963 Cambie St, Vancouver',
    lat: 49.2401675,
    lng: -123.1184927
  },
  {
    address: '4120 Main St, Vancouver',
    lat: 49.2484838,
    lng: -123.1008565
  },
  {
    address: '268 W King Edward Ave, Vancouver',
    lat: 49.248687,
    lng: -123.1104305
  },
  {
    address: '383 E 37th Ave, Vancouver',
    lat: 49.23796,
    lng: -123.0986094
  }
];

// console.log(addresses.length);

module.exports = { addresses };