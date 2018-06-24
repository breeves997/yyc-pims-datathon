var getFacilities = function() {
	var facilities = [{"COMPLEX_NAME":"Valleyview Spray Park","FACILITY_TYPE":"Spray Park","ADDRESS":"28 ST SE & 30 AV SE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Parks\\/Pages\\/Locations\\/SE-parks\\/Valleyview-Park.aspx","longitude":-113.9940182129,"latitude":51.0265060977,"location":"(51.0265060977398, -113.994018212921)"},{"COMPLEX_NAME":"Southwood Skatepark","FACILITY_TYPE":"Skate Park","ADDRESS":"11 SACKVILLE DR SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Skateparks\\/Home.aspx?redirect=\\/skateparks","longitude":-114.0872003439,"latitude":50.9560810754,"location":"(50.9560810753955, -114.087200343881)"},{"COMPLEX_NAME":"Big Marlborough Park","FACILITY_TYPE":"Outdoor Skating Rink","ADDRESS":"755 MADEIRA DR NE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Parks\\/Pages\\/Locations\\/NE-parks\\/Big-Marlborough-Park.aspx","longitude":-113.9451671265,"latitude":51.0592901283,"location":"(51.0592901283396, -113.945167126546)"},{"COMPLEX_NAME":"Shaw Millennium Park","FACILITY_TYPE":"Skate Park","ADDRESS":"1220 9 AV SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Parks\\/Pages\\/Locations\\/Downtown-parks\\/Shaw-Millennium-Park.aspx","longitude":-114.0918707261,"latitude":51.0461282874,"location":"(51.0461282874336, -114.091870726129)"},{"COMPLEX_NAME":"Prairie Winds Park","FACILITY_TYPE":"Outdoor Skating Rink","ADDRESS":"223 CASTLERIDGE BV NE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Parks\\/Pages\\/Locations\\/NE-parks\\/Prairie-Winds-Park.aspx","longitude":-113.9707726302,"latitude":51.1046133993,"location":"(51.1046133993436, -113.970772630174)"},{"COMPLEX_NAME":"Riley Park Wading Pool","FACILITY_TYPE":"Outdoor Wading Pool","ADDRESS":"800 12 ST NW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Parks\\/Pages\\/Locations\\/NW-parks\\/Riley-Park.aspx","longitude":-114.0891735825,"latitude":51.0588546105,"location":"(51.0588546105, -114.089173582526)"},{"COMPLEX_NAME":"Canmore Spray Park","FACILITY_TYPE":"Spray Park","ADDRESS":"2020 CHICOUTIMI DR SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Parks\\/Pages\\/Locations\\/NW-parks\\/Canmore-Park.aspx","longitude":-114.1093124013,"latitude":51.0810686745,"location":"(51.081068674532, -114.109312401341)"},{"COMPLEX_NAME":"New Brighton Skatepark","FACILITY_TYPE":"Skate Park","ADDRESS":"5801 130 AV SE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Skateparks\\/Home.aspx?redirect=\\/skateparks","longitude":-113.9471858184,"latitude":50.9283524784,"location":"(50.9283524783775, -113.947185818414)"},{"COMPLEX_NAME":"Variety Park Spray Park","FACILITY_TYPE":"Spray Park","ADDRESS":"9035 24 ST SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Parks\\/Pages\\/Locations\\/SW-parks\\/South-Glenmore-Park.aspx","longitude":-114.1216528804,"latitude":50.9742674679,"location":"(50.9742674679489, -114.121652880372)"},{"COMPLEX_NAME":"Prairie Winds Park Wading Pool & Spray Park","FACILITY_TYPE":"Outdoor Wading Pool","ADDRESS":"223 CASTLERIDGE BV NE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Parks\\/Pages\\/Locations\\/NE-parks\\/Prairie-Winds-Park.aspx","longitude":-113.9711473744,"latitude":51.1037750376,"location":"(51.1037750375539, -113.971147374418)"},{"COMPLEX_NAME":"Eau Claire Plaza Wading Pool & Spray Park","FACILITY_TYPE":"Outdoor Wading Pool","ADDRESS":"139 BARCLAY PR SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Parks\\/Pages\\/Locations\\/Downtown-parks\\/Eau-Claire-Plaza.aspx","longitude":-114.0696010087,"latitude":51.0533512197,"location":"(51.0533512196899, -114.069601008665)"},{"COMPLEX_NAME":"Confederation Park Golf Course","FACILITY_TYPE":"Golf Course - Municipal","ADDRESS":"3204 COLLINGWOOD DR NW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Golf-courses\\/Confederation-Park.aspx","longitude":-114.1016949262,"latitude":51.0791090326,"location":"(51.0791090325577, -114.101694926176)"},{"COMPLEX_NAME":"Glenmore Athletic Park","FACILITY_TYPE":"Athletic Park","ADDRESS":"5300 19 ST SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/csps\\/recreation\\/pages\\/athletic-parks\\/glenmore-athletic-park.aspx","longitude":-114.1026772472,"latitude":51.0073985523,"location":"(51.0073985522768, -114.102677247221)"},{"COMPLEX_NAME":"Woodbine Athletic Park","FACILITY_TYPE":"Athletic Park","ADDRESS":"96 WOODFIELD DR SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Athletic-parks\\/Woodbine-Athletic-Park.aspx","longitude":-114.1197247996,"latitude":50.9373689399,"location":"(50.937368939897, -114.11972479957)"},{"COMPLEX_NAME":"Calgary Canoe & Rowing Club","FACILITY_TYPE":"Canoe & Rowing Club","ADDRESS":"7550 CROWCHILD TR SW","WEBSITE":"http:\\/\\/calgarycanoeclub.com\\/","longitude":-114.1173658858,"latitude":50.9864757932,"location":"(50.986475793243, -114.117365885841)"},{"COMPLEX_NAME":"Renfrew Athletic Park","FACILITY_TYPE":"Athletic Park","ADDRESS":"810 13 AV NE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Athletic-parks\\/Renfrew-Athletic-Park.aspx","longitude":-114.0439183015,"latitude":51.0655890838,"location":"(51.0655890837516, -114.043918301457)"},{"COMPLEX_NAME":"Maple Ridge Golf Course","FACILITY_TYPE":"Golf Course - Municipal","ADDRESS":"1240 MAPLEGLADE DR SE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Golf-courses\\/Maple-Ridge.aspx","longitude":-114.032979798,"latitude":50.9523024705,"location":"(50.952302470546, -114.032979798029)"},{"COMPLEX_NAME":"Richmond Green Golf Course","FACILITY_TYPE":"Golf Course - Municipal","ADDRESS":"2539 33 AV SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Golf-courses\\/Richmond-Green.aspx","longitude":-114.1219219753,"latitude":51.0233812573,"location":"(51.0233812573123, -114.121921975328)"},{"COMPLEX_NAME":"New Brighton Athletic Park","FACILITY_TYPE":"Athletic Park","ADDRESS":"5801 130 AV SE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Research-and-development\\/New-Brighton-Regional-Athletic-Park.aspx","longitude":-113.950623356,"latitude":50.9277260603,"location":"(50.9277260603203, -113.950623356038)"},{"COMPLEX_NAME":"Optimist Athletic Park","FACILITY_TYPE":"Athletic Park","ADDRESS":"5020 26 AV SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Athletic-parks\\/Optimist-Athletic-Park.aspx","longitude":-114.1615474612,"latitude":51.0332812632,"location":"(51.0332812631518, -114.161547461246)"},{"COMPLEX_NAME":"Shaganappi Golf Course","FACILITY_TYPE":"Golf Course - Municipal","ADDRESS":"1200 26 ST SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Golf-courses\\/Shaganappi-Point.aspx","longitude":-114.1247786174,"latitude":51.0455008088,"location":"(51.0455008088225, -114.124778617383)"},{"COMPLEX_NAME":"Calgary Soccer Centre","FACILITY_TYPE":"Soccer Centre","ADDRESS":"7000 48 ST SE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Calgary-Soccer-Centre\\/Calgary-Soccer-Centre.aspx","longitude":-113.9609282023,"latitude":50.9924432441,"location":"(50.9924432440799, -113.960928202277)"},{"COMPLEX_NAME":"Shouldice Athletic Park","FACILITY_TYPE":"Athletic Park","ADDRESS":"1515 HOME RD NW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Athletic-parks\\/Shouldice-Athletic-Park.aspx","longitude":-114.1694304073,"latitude":51.073984741,"location":"(51.0739847410177, -114.169430407254)"},{"COMPLEX_NAME":"Shouldice Aquatic Centre","FACILITY_TYPE":"Aquatic - Flat Water","ADDRESS":"5303 BOWNESS RD NW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Pools\\/Shouldice.aspx","longitude":-114.1720029784,"latitude":51.0770847336,"location":"(51.0770847336323, -114.172002978393)"},{"COMPLEX_NAME":"CKE Skatespot","FACILITY_TYPE":"Skate Park","ADDRESS":"1015 73 AV SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Skateparks\\/Home.aspx?redirect=\\/skateparks","longitude":-114.0839145385,"latitude":50.9873594556,"location":"(50.9873594556113, -114.083914538484)"},{"COMPLEX_NAME":"Foothills Athletic Park","FACILITY_TYPE":"Athletic Park","ADDRESS":"2424 UNIVERSITY DR NW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Athletic-parks\\/Foothills-Athletic-Park.aspx","longitude":-114.1241705868,"latitude":51.0732672755,"location":"(51.0732672755486, -114.124170586771)"},{"COMPLEX_NAME":"Rotary Park Spray Park","FACILITY_TYPE":"Spray Park","ADDRESS":"617 1 ST NE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Parks\\/Pages\\/Locations\\/NE-parks\\/Rotary-Park.aspx","longitude":-114.0605048164,"latitude":51.0572965293,"location":"(51.0572965293455, -114.060504816354)"},{"COMPLEX_NAME":"Wildflower Arts Centre","FACILITY_TYPE":"Art Centre","ADDRESS":"3363 SPRUCE DR SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Arts-centres\\/Wildflower.aspx","longitude":-114.1355338235,"latitude":51.0462724115,"location":"(51.0462724115184, -114.135533823538)"},{"COMPLEX_NAME":"Glenmore Sailing School","FACILITY_TYPE":"Sailing School","ADDRESS":"8415 24 ST SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Sailing-school\\/Glenmore-Sailing-School.aspx","longitude":-114.1198020221,"latitude":50.9751582329,"location":"(50.9751582328531, -114.119802022105)"},{"COMPLEX_NAME":"Olympic Plaza","FACILITY_TYPE":"Outdoor Skating Rink","ADDRESS":"228 8 AV SE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Parks\\/Pages\\/Locations\\/Downtown-parks\\/Olympic-Plaza.aspx","longitude":-114.058935134,"latitude":51.0458299663,"location":"(51.0458299663338, -114.058935134036)"},{"COMPLEX_NAME":"Bowness Park Lagoon","FACILITY_TYPE":"Outdoor Skating Rink","ADDRESS":"8900 48 AV NW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Parks\\/Pages\\/Locations\\/NW-parks\\/Bowness-Park.aspx","longitude":-114.214717247,"latitude":51.0967920362,"location":"(51.0967920361672, -114.214717246982)"},{"COMPLEX_NAME":"Huntington Hills Skatepark","FACILITY_TYPE":"Skate Park","ADDRESS":"CENTRE ST & 64 AV NW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Skateparks\\/Home.aspx?redirect=\\/skateparks","longitude":-114.0652327428,"latitude":51.1112296223,"location":"(51.111229622293, -114.065232742822)"},{"COMPLEX_NAME":"Lakeview Golf Course","FACILITY_TYPE":"Golf Course - Municipal","ADDRESS":"6540 20 ST SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Golf-courses\\/Lakeview.aspx","longitude":-114.1068321804,"latitude":51.0005877054,"location":"(51.0005877054191, -114.106832180439)"},{"COMPLEX_NAME":"North Mount Pleasant Arts Centre","FACILITY_TYPE":"Art Centre","ADDRESS":"523 27 AV NW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Arts-centres\\/North-Mount-Pleasant.aspx","longitude":-114.072725522,"latitude":51.0767274243,"location":"(51.0767274243173, -114.07272552201)"},{"COMPLEX_NAME":"Ernest Manning Athletic Park","FACILITY_TYPE":"Athletic Park","ADDRESS":"20 SPRINGBOROUGH BV SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Athletic-parks\\/Ernest-Manning-athletic-park.aspx","longitude":-114.192145807,"latitude":51.0364232253,"location":"(51.0364232253408, -114.192145806971)"},{"COMPLEX_NAME":"South Health Campus YMCA","FACILITY_TYPE":"Fitness Centre","ADDRESS":"4448 FRONT ST SE","WEBSITE":"http:\\/\\/www.ymcacalgary.org\\/program-descriptions\\/locations\\/south-health-campus\\/","longitude":-113.9508687936,"latitude":50.8819030703,"location":"(50.8819030703342, -113.950868793644)"},{"COMPLEX_NAME":"Frank McCool Athletic Park","FACILITY_TYPE":"Athletic Park","ADDRESS":"1900 LAKE BONAVISTA DR SE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Athletic-parks\\/Frank-McCool-Athletic-Park.aspx","longitude":-114.0514139628,"latitude":50.9364770706,"location":"(50.9364770705833, -114.051413962759)"},{"COMPLEX_NAME":"Acadia Athletic Park","FACILITY_TYPE":"Athletic Park","ADDRESS":"295 90 AV SE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Athletic-parks\\/Acadia-Athletic-Park.aspx","longitude":-114.0629491056,"latitude":50.9710254938,"location":"(50.971025493846, -114.062949105593)"},{"COMPLEX_NAME":"Pop Davies Athletic Park","FACILITY_TYPE":"Athletic Park","ADDRESS":"6415 OGDEN RD SE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Athletic-parks\\/Pop-Davies-Athletic-Park.aspx","longitude":-114.0085739462,"latitude":50.9962681043,"location":"(50.9962681043227, -114.008573946203)"},{"COMPLEX_NAME":"Tom Brook Athletic Park","FACILITY_TYPE":"Athletic Park","ADDRESS":"2000 SOUTHLAND DR SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Athletic-parks\\/Tom-Brook-Athletic-Park.aspx","longitude":-114.1078208035,"latitude":50.9638534018,"location":"(50.9638534018303, -114.10782080353)"},{"COMPLEX_NAME":"McCall Lake Golf Course","FACILITY_TYPE":"Golf Course - Municipal","ADDRESS":"1600 32 AV NE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Golf-courses\\/McCall-Lake.aspx","longitude":-114.0207407331,"latitude":51.0841744322,"location":"(51.0841744321962, -114.020740733119)"},{"COMPLEX_NAME":"Forest Lawn Athletic Park","FACILITY_TYPE":"Athletic Park","ADDRESS":"4808 14 AV SE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Athletic-parks\\/Forest-Lawn-Athletic-Park.aspx","longitude":-113.9624606681,"latitude":51.0417319827,"location":"(51.0417319826607, -113.962460668052)"},{"COMPLEX_NAME":"Carburn Park","FACILITY_TYPE":"Outdoor Skating Rink","ADDRESS":"67 RIVERVIEW DR SE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Parks\\/Pages\\/Locations\\/SE-parks\\/Carburn-Park.aspx","longitude":-114.0287657276,"latitude":50.9745845276,"location":"(50.9745845275787, -114.028765727628)"},{"COMPLEX_NAME":"Prince\'s Island Lagoon","FACILITY_TYPE":"Outdoor Skating Rink","ADDRESS":"25 PRINCE\'S ISLAND PARK SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Parks\\/Pages\\/Locations\\/Downtown-parks\\/Princes-Island-Park.aspx","longitude":-114.0715324964,"latitude":51.0543884994,"location":"(51.054388499366, -114.071532496406)"},{"COMPLEX_NAME":"WinSport","FACILITY_TYPE":"Multi-Sport Facility","ADDRESS":"88 CANADA OLYMPIC RD SW","WEBSITE":"http:\\/\\/www.winsport.ca\\/","longitude":-114.2208881659,"latitude":51.0844829925,"location":"(51.0844829925066, -114.220888165858)"},{"COMPLEX_NAME":"Bob Bahan Aquatic & Fitness Centre","FACILITY_TYPE":"Aquatic & Fitness Centre","ADDRESS":"4812 14 AV SE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Pools\\/Bob-Bahan.aspx","longitude":-113.9639612569,"latitude":51.0412981508,"location":"(51.0412981508481, -113.963961256934)"},{"COMPLEX_NAME":"Southland Leisure Centre","FACILITY_TYPE":"Leisure Centre - Municipal","ADDRESS":"2000 SOUTHLAND DR SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Leisure-centres\\/Southland.aspx","longitude":-114.1085205507,"latitude":50.9622887586,"location":"(50.9622887586411, -114.108520550688)"},{"COMPLEX_NAME":"Beltline Aquatic & Fitness Centre","FACILITY_TYPE":"Aquatic & Fitness Centre","ADDRESS":"221 12 AV SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Pools\\/Beltline.aspx","longitude":-114.0669580862,"latitude":51.0412405816,"location":"(51.0412405816103, -114.066958086159)"},{"COMPLEX_NAME":"Inglewood Aquatic Centre","FACILITY_TYPE":"Aquatic - Flat Water","ADDRESS":"1525 17 AV SE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Pools\\/Inglewood.aspx","longitude":-114.0286618425,"latitude":51.0374409686,"location":"(51.0374409685699, -114.02866184245)"},{"COMPLEX_NAME":"Foothills Aquatic Centre","FACILITY_TYPE":"Aquatic - Flat Water","ADDRESS":"2424 UNIVERSITY DR NW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Pools\\/Foothills.aspx","longitude":-114.1254428842,"latitude":51.0740997751,"location":"(51.0740997750809, -114.125442884227)"},{"COMPLEX_NAME":"Canyon Meadows Aquatic & Fitness Centre","FACILITY_TYPE":"Aquatic & Fitness Centre","ADDRESS":"89 CANOVA RD SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Pools\\/Canyon-Meadows.aspx","longitude":-114.089515751,"latitude":50.9484029215,"location":"(50.9484029214909, -114.089515751003)"},{"COMPLEX_NAME":"Renfrew Aquatic & Recreation Centre","FACILITY_TYPE":"Aquatic & Recreation Centre","ADDRESS":"810 13 AV NE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Pools\\/Renfrew.aspx","longitude":-114.0454725625,"latitude":51.0645569032,"location":"(51.0645569031819, -114.045472562524)"},{"COMPLEX_NAME":"Acadia Aquatic & Fitness Centre","FACILITY_TYPE":"Aquatic & Fitness Centre","ADDRESS":"9009 FAIRMOUNT DR SE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Pools\\/Acadia.aspx","longitude":-114.0601578388,"latitude":50.973477488,"location":"(50.9734774879604, -114.060157838762)"},{"COMPLEX_NAME":"Sir Winston Churchill Aquatic & Rec Ctr","FACILITY_TYPE":"Aquatic & Recreation Centre","ADDRESS":"1520 NORTHMOUNT DR NW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Pools\\/Sir-Winston-Churchill.aspx","longitude":-114.1379181727,"latitude":51.0968837981,"location":"(51.0968837980896, -114.137918172675)"},{"COMPLEX_NAME":"Thornhill Aquatic & Recreation Centre","FACILITY_TYPE":"Aquatic & Recreation Centre","ADDRESS":"6715 CENTRE ST NW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Pools\\/Thornhill.aspx","longitude":-114.0652900196,"latitude":51.1125702714,"location":"(51.1125702714431, -114.065290019646)"},{"COMPLEX_NAME":"Village Square Leisure Centre","FACILITY_TYPE":"Leisure Centre - Municipal","ADDRESS":"2623 56 ST NE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Leisure-centres\\/Village-Square.aspx","longitude":-113.95443745,"latitude":51.0760141056,"location":"(51.0760141056374, -113.954437449996)"},{"COMPLEX_NAME":"Glenmore Aquatic Centre","FACILITY_TYPE":"Aquatic - Flat Water","ADDRESS":"5330 19 ST SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Pools\\/Glenmore.aspx","longitude":-114.1054114845,"latitude":51.0062350029,"location":"(51.0062350028935, -114.105411484525)"},{"COMPLEX_NAME":"Killarney Aquatic & Recreation Centre","FACILITY_TYPE":"Aquatic & Recreation Centre","ADDRESS":"1919 29 ST SW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Pools\\/Killarney.aspx","longitude":-114.130294632,"latitude":51.0373636842,"location":"(51.037363684198, -114.130294632021)"},{"COMPLEX_NAME":"Repsol Sport Centre","FACILITY_TYPE":"Leisure Centre","ADDRESS":"2225 MACLEOD TR SE","WEBSITE":"http:\\/\\/www.repsolsportcentre.com\\/","longitude":-114.0633442621,"latitude":51.0345768478,"location":"(51.0345768477997, -114.063344262124)"},{"COMPLEX_NAME":"Deer Run Skatespot","FACILITY_TYPE":"Skate Park","ADDRESS":"2223 146 AV SE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Skateparks\\/Home.aspx?redirect=\\/skateparks","longitude":-114.0077470412,"latitude":50.9222337156,"location":"(50.9222337155549, -114.007747041228)"},{"COMPLEX_NAME":"Genesis Centre of Community Wellness","FACILITY_TYPE":"Leisure Centre","ADDRESS":"7556 FALCONRIDGE BV NE","WEBSITE":"http:\\/\\/www.genesis-centre.ca\\/","longitude":-113.9492812277,"latitude":51.1206773747,"location":"(51.1206773746699, -113.949281227686)"},{"COMPLEX_NAME":"Shawnessy YMCA","FACILITY_TYPE":"Aquatic & Fitness Centre","ADDRESS":"#400 333 SHAWVILLE BV SE","WEBSITE":"http:\\/\\/www.ymcacalgary.org\\/program-descriptions\\/locations\\/shawnessy\\/","longitude":-114.064552019,"latitude":50.8981140702,"location":"(50.8981140701689, -114.064552019017)"},{"COMPLEX_NAME":"Trico Centre for Family Wellness","FACILITY_TYPE":"Leisure Centre","ADDRESS":"11150 BONAVENTURE DR SE","WEBSITE":"http:\\/\\/www.tricocentre.ca\\/","longitude":-114.0589465319,"latitude":50.9522460637,"location":"(50.9522460637359, -114.058946531891)"},{"COMPLEX_NAME":"Westside Recreation Centre","FACILITY_TYPE":"Leisure Centre","ADDRESS":"2000 69 ST SW","WEBSITE":"http:\\/\\/www.westsiderec.com\\/","longitude":-114.185565557,"latitude":51.0357133961,"location":"(51.0357133960991, -114.185565556987)"},{"COMPLEX_NAME":"Saddletowne YMCA","FACILITY_TYPE":"Aquatic & Fitness Centre","ADDRESS":"7556 FALCONRIDGE BV NE","WEBSITE":"http:\\/\\/www.ymcacalgary.org\\/program-descriptions\\/locations\\/saddletowne\\/","longitude":-113.9478457901,"latitude":51.1203134774,"location":"(51.1203134774108, -113.947845790078)"},{"COMPLEX_NAME":"Mid-Sun Skatespot","FACILITY_TYPE":"Skate Park","ADDRESS":"50 MIDPARK RI SE","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Recreation\\/Pages\\/Skateparks\\/Home.aspx?redirect=\\/skateparks","longitude":-114.056626428,"latitude":50.9146001977,"location":"(50.9146001976506, -114.056626428036)"},{"COMPLEX_NAME":"Cardel Rec South","FACILITY_TYPE":"Leisure Centre","ADDRESS":"#101 333 SHAWVILLE BV SE","WEBSITE":"http:\\/\\/www.sfcra.com\\/","longitude":-114.0636678757,"latitude":50.8970182972,"location":"(50.8970182972339, -114.063667875721)"},{"COMPLEX_NAME":"Gray Family Eau Claire YMCA","FACILITY_TYPE":"Aquatic & Fitness Centre","ADDRESS":"101 3 ST SW","WEBSITE":"http:\\/\\/www.ymcacalgary.org\\/program-descriptions\\/locations\\/eau-claire\\/","longitude":-114.0708159828,"latitude":51.0527656024,"location":"(51.052765602443, -114.070815982779)"},{"COMPLEX_NAME":"Silver Springs Outdoor Pool","FACILITY_TYPE":"Outdoor Pool","ADDRESS":"5720 SILVER RIDGE DR NW","WEBSITE":"http:\\/\\/sscacalgary.weebly.com\\/pool.html","longitude":-114.1923412896,"latitude":51.1040438849,"location":"(51.1040438849087, -114.192341289565)"},{"COMPLEX_NAME":"Bowness Park Wading Pool","FACILITY_TYPE":"Outdoor Wading Pool","ADDRESS":"8900 48 AV NW","WEBSITE":"https:\\/\\/www.calgary.ca\\/CSPS\\/Parks\\/Pages\\/Locations\\/NW-parks\\/Bowness-Park.aspx","longitude":-114.2115822229,"latitude":51.0972445753,"location":"(51.0972445752977, -114.211582222855)"},{"COMPLEX_NAME":"Vecova Centre for Disability Services and Research","FACILITY_TYPE":"Leisure Centre","ADDRESS":"3304 33 ST NW","WEBSITE":"https:\\/\\/vecova.ca\\/social-enterprise\\/recreation-centre\\/","longitude":-114.1325572065,"latitude":51.0822075817,"location":"(51.0822075816673, -114.132557206528)"},{"COMPLEX_NAME":"Melcor YMCA at Crowfoot","FACILITY_TYPE":"Aquatic & Fitness Centre","ADDRESS":"8100 JOHN LAURIE BV NW","WEBSITE":"https:\\/\\/www.ymcacalgary.org\\/program-descriptions\\/locations\\/crowfoot\\/","longitude":-114.1957308439,"latitude":51.1288104173,"location":"(51.1288104172665, -114.195730843949)"},{"COMPLEX_NAME":"Remington YMCA in Quarry Park","FACILITY_TYPE":"Aquatic & Fitness Centre","ADDRESS":"108 QUARRY PARK RD SE","WEBSITE":"https:\\/\\/www.ymcacalgary.org\\/program-descriptions\\/locations\\/quarry-park\\/","longitude":-114.0060917495,"latitude":50.9617471769,"location":"(50.9617471769241, -114.006091749531)"},{"COMPLEX_NAME":"Shane Homes YMCA at Rocky Ridge","FACILITY_TYPE":"Multi-Sport Facility","ADDRESS":"11300 ROCKY RIDGE RD NW","WEBSITE":"https:\\/\\/www.ymcacalgary.org\\/program-descriptions\\/locations\\/shane-homes-ymca-at-rocky-ridge\\/","longitude":-114.2314983055,"latitude":51.1571563808,"location":"(51.1571563807724, -114.231498305465)"},{"COMPLEX_NAME":"Vivo for Healthier Generations","FACILITY_TYPE":"Leisure Centre","ADDRESS":"11950 COUNTRY VILLAGE LI NE","WEBSITE":"https:\\/\\/www.vivo.ca\\/","longitude":-114.0655471325,"latitude":51.1595189868,"location":"(51.159518986803, -114.065547132538)"}]
	return facilities;
}
