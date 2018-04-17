var countries = [
  ['Country', 'News Hits'],
  ['United States', 0],
  ['Canada', 0],
  ['Mexico', 0],
  ['Greenland', 0],
  ['Cuba', 0],
  ['Dominican Republic', 0],
  ['Haiti', 0],
  ['Jamaica', 0],
  ['Martinique', 0],
  ['Puerto Rico', 0],
  ['Trinidad and Tobago', 0],
  ['Belize', 0],
  ['Costa Rica', 0],
  ['Guatemala', 0],
  ['Honduras', 0],
  ['Nicaragua', 0],
  ['Panama', 0],
  ['El Salvador', 0],
  ['Argentina', 0],
  ['Bolivia', 0],
  ['Brazil', 0],
  ['Chile', 0],
  ['Colombia', 0],
  ['Ecuador', 0],
  ['French Guiana', 0],
  ['Guyana', 0],
  ['Peru', 0],
  ['Paraguay', 0],
  ['Suriname', 0],
  ['Uraguay', 0],
  ['Venezuela', 0],
  ['Algeria', 0],
  ['Egypt', 0],
  ['Western Sahara', 0],
  ['Libya', 0],
  ['Morocco', 0],
  ['Sudan', 0],
  ['South Sudan', 0],
  ['Tunisia', 0],
  ['Burkina Faso', 0],
  ['Benin', 0],
  ['Ivory Coast', 0],
  ['Ghana', 0],
  ['Gambia', 0],
  ['Guinea', 0],
  ['Guinea-Bissau', 0],
  ['Liberia', 0],
  ['Mali', 0],
  ['Mauritania', 0],
  ['Niger', 0],
  ['Nigeria', 0],
  ['Sierra Leone', 0],
  ['Senegal', 0],
  ['Togo', 0],
  ['Angola', 0],
  ['The Democratic Republic of The Congo', 0],
  ['Central African Republic', 0],
  ['Congo', 0],
  ['Cameroon', 0],
  ['Gabon', 0],
  ['Equitorial Guinea', 0],
  ['Chad', 0],
  ['Burundi', 0],
  ['Djibouti', 0],
  ['Eritrea', 0],
  ['Ethiopia', 0],
  ['Kenya', 0],
  ['Madagascar', 0],
  ['Muritania', 0],
  ['Malawi', 0],
  ['Mozambique', 0],
  ['Rawanda', 0],
  ['Somalia', 0],
  ['Tanzania', 0],
  ['Uganda', 0],
  ['Zambia', 0],
  ['Zimbabwe', 0],
  ['Botswana', 0],
  ['Lesotho', 0],
  ['Namibia', 0],
  ['Swaziland', 0],
  ['South Africa', 0],
  ['Finland', 0],
  ['Denmark', 0],
  ['Estonia', 0],
  ['Britain', 0],
  ['Ireland', 0],
  ['Iceland', 0],
  ['Lithuania', 0],
  ['Latvia', 0],
  ['Norway', 0],
  ['Sweden', 0],
  ['Austria', 0],
  ['Belgium', 0],
  ['Switzerland', 0],
  ['Germany', 0],
  ['France', 0],
  ['Liechtenstein', 0],
  ['Luxembourg', 0],
  ['Monaco', 0],
  ['Netherlands', 0],
  ['Bulgaria', 0],
  ['Belarus', 0],
  ['Czech Republic', 0],
  ['Hungary', 0],
  ['Republic of Moldova', 0],
  ['Poland', 0],
  ['Romania', 0],
  ['Russia', 0],
  ['Slovakia', 0],
  ['Ukraine', 0],
  ['Andorra', 0],
  ['Albania', 0],
  ['Boznia and Herzegovina', 0],
  ['Spain', 0],
  ['Greece', 0],
  ['Croatia', 0],
  ['Italy', 0],
  ['Montenegro', 0],
  ['Malta', 0],
  ['Serbia', 0],
  ['Portugal', 0],
  ['Slovenia', 0],
  ['San Marino', 0],
  ['Turkmenistan', 0],
  ['Tajikstan', 0],
  ['Kyrgyzstan', 0],
  ['Kazakhstan', 0],
  ['Uzbekistan', 0],
  ['China', 0],
  ['Hong Kong', 0],
  ['Japan', 0],
  ['South Korea', 0],
  ['North Korea', 0],
  ['Mongolia', 0],
  ['Taiwan', 0],
  ['Afghanistan', 0],
  ['Bangladesh', 0],
  ['Bhutan', 0],
  ['India', 0],
  ['Iran', 0],
  ['Sri Lanka', 0],
  ['Nepal', 0],
  ['Pakistan', 0],
  ['Indonesia', 0],
  ['Cambodia', 0],
  ['Laos', 0],
  ['Myanmar', 0],
  ['Malaysia', 0],
  ['Philippines', 0],
  ['Singapore', 0],
  ['Thailand', 0],
  ['Vietnam', 0],
  ['United Arab Emirates', 0],
  ['Armenia', 0],
  ['Azerbaijan', 0],
  ['Bahrain', 0],
  ['Cyprus', 0],
  ['Georgia', 0],
  ['Israel', 0],
  ['Iraq', 0],
  ['Jordan', 0],
  ['Kuwait', 0],
  ['Lebanon', 0],
  ['Oman', 0],
  ['Qatar', 0],
  ['Saudi Arabia', 0],
  ['Syria', 0],
  ['Turkey', 0],
  ['Yemen', 0],
  ['Australia', 0],
  ['New Zealand', 0],
  ['Fiji', 0],
  ['Papa New Guinea', 0],
  ['Solomon Islands', 0],
  ['Guam', 0],
  ['American Samoa', 0],
  ['Tonga', 0],
  ['Samoa', 0],
];

$(document).ready(function() {
  var url = 'http://www.rssmix.com/u/8280914/rss.xml';
  feednami.load(url,function(result){
    if(result.error) {
      console.log(result.error);
    } else {
      var entries = result.feed.entries;
      for(var i = 0; i < entries.length; i++){
        var entry = entries[i];
        //console.dir(entry);
        //console.log(entry.title);
        //console.log(entry.summary);
        countCountries(entry.summary);
      }

      //console.log(countries);
      google.charts.load('current', {
        'packages':['geochart'],
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);
    }
  });
});

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable(countries);
  var options = {colors: ['#FFFFFF', '#FF0000']};
  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  chart.draw(data, options);
}

function countCountries(summary) {
  var keywords = [
    {
      possibleWords: ["America", "US", "USA", "Trump", "American", "United States"],
      indexInArray: 1
    },
    {
      possibleWords: ["Canada", "Canadian", "Trudeau"],
      indexInArray: 2
    },
    {
      possibleWords: ["Mexico", "Mexican"],
      indexInArray: 3
    },
    {
      possibleWords: ["Greenland"],
      indexInArray: 4
    },
    {
      possibleWords: ["Cuba", "Cuban"],
      indexInArray: 5
    },
    {
      possibleWords: ["Dominican Republic"],
      indexInArray: 6
    },
    {
      possibleWords: ["Haiti", "Haitian"],
      indexInArray: 7
    },
    {
      possibleWords: ["Jamaica", "Jamaican", "Usain Bolt"],
      indexInArray: 8
    },
    {
      possibleWords: ["Martinique"],
      indexInArray: 9
    },
    {
      possibleWords: ["Puerto Rico", "Puerto Rican"],
      indexInArray: 10
    },
    {
      possibleWords: ["Trinidad and Togabo"],
      indexInArray: 11
    },
    {
      possibleWords: ["Belize"],
      indexInArray: 12
    },
    {
      possibleWords: ["Costa Rica", "Costa Rican"],
      indexInArray: 13
    },
    {
      possibleWords: ["Guatemala", "Guatemalan"],
      indexInArray: 14
    },
    {
      possibleWords: ["Honduras"],
      indexInArray: 15
    },
    {
      possibleWords: ["Nicaragua", "Nicaraguan"],
      indexInArray: 16
    },
    {
      possibleWords: ["Panama"],
      indexInArray: 17
    },
    {
      possibleWords: ["El Salvador"],
      indexInArray: 18
    },
    {
      possibleWords: ["Argentina", "Argentinian", "Messi", "Maradonna"],
      indexInArray: 19
    },
    {
      possibleWords: ["Bolivia"],
      indexInArray: 20
    },
    {
      possibleWords: ["Brazil", "Brazilian", "Neymar"],
      indexInArray: 21
    },
    {
      possibleWords: ["Chile", "Chilean"],
      indexInArray: 22
    },
    {
      possibleWords: ["Colombia", "Pablo Escobar", "Colombian"],
      indexInArray: 23
    },
    {
      possibleWords: ["Ecuador", "Ecuadorian"],
      indexInArray: 24
    },
    {
      possibleWords: ["French Guiana"],
      indexInArray: 25
    },
    {
      possibleWords: ["Guyana"],
      indexInArray: 26
    },
    {
      possibleWords: ["Peru", "Peruvian"],
      indexInArray: 27
    },
    {
      possibleWords: ["Paraguay"],
      indexInArray: 28
    },
    {
      possibleWords: ["Suriname"],
      indexInArray: 29
    },
    {
      possibleWords: ["Uraguay"],
      indexInArray: 30
    },
    {
      possibleWords: ["Venezuela", "Venezuelan"],
      indexInArray: 31
    },
    {
      possibleWords: ["Algeria","Algerian"],
      indexInArray: 32
    },
    {
      possibleWords: ["Egypt", "Egyptian", "Pharoah", "Mummy", "Pyramids"],
      indexInArray: 33
    },
    {
      possibleWords: ["Western Sahara"],
      indexInArray: 34
    },
    {
      possibleWords: ["Libya"],
      indexInArray: 35
    },
    {
      possibleWords: ["Morocco"],
      indexInArray: 36
    },
    {
      possibleWords: ["Sudan", "Sudanese"],
      indexInArray: 37
    },
    {
      possibleWords: ["South Sudan"],
      indexInArray: 38
    },
    {
      possibleWords: ["Tunisia", "Tunisian"],
      indexInArray: 39
    },
    {
      possibleWords: ["Burkina Faso"],
      indexInArray: 40
    },
    {
      possibleWords: ["Benin"],
      indexInArray: 41
    },
    {
      possibleWords: ["Ivory Coast", "Ivorian"],
      indexInArray: 42
    },
    {
      possibleWords: ["Ghana"],
      indexInArray: 43
    },
    {
      possibleWords: ["Gambia", "Gambian"],
      indexInArray: 44
    },
    {
      possibleWords: ["Guinea"],
      indexInArray: 45
    },
    {
      possibleWords: ["Guinea-Bissau"],
      indexInArray: 46
    },
    {
      possibleWords: ["Liberia", "Liberian"],
      indexInArray: 47
    },
    {
      possibleWords: ["Mali"],
      indexInArray: 48
    },
    {
      possibleWords: ["Mauritania"],
      indexInArray: 49
    },
    {
      possibleWords: ["Niger"],
      indexInArray: 50
    },
    {
      possibleWords: ["Nigeria", "Nigerian"],
      indexInArray: 51
    },
    {
      possibleWords: ["Sierra Leone"],
      indexInArray: 52
    },
    {
      possibleWords: ["Senegal", "Senegalese"],
      indexInArray: 53
    },
    {
      possibleWords: ["Togo"],
      indexInArray: 54
    },
    {
      possibleWords: ["Angola"],
      indexInArray: 55
    },
    {
      possibleWords: ["The Democratic Republic of the Congo", "DRC"],
      indexInArray: 56
    },
    {
      possibleWords: ["Central African Republic", "CAR"],
      indexInArray: 57
    },
    {
      possibleWords: ["Congo"],
      indexInArray: 58
    },
    {
      possibleWords: ["Cameroon"],
      indexInArray: 59
    },
    {
      possibleWords: ["Gabon", "Gabonese", "Aubameyang"],
      indexInArray: 60
    },
    {
      possibleWords: ["Equitorial Guinea"],
      indexInArray: 61
    },
    {
      possibleWords: ["Chad"],
      indexInArray: 62
    },
    {
      possibleWords: ["Burundi"],
      indexInArray: 63
    },
    {
      possibleWords: ["Djibouti"],
      indexInArray: 64
    },
    {
      possibleWords: ["Eritrea"],
      indexInArray: 65
    },
    {
      possibleWords: ["Ethiopia", "Ethiopian"],
      indexInArray: 66
    },
    {
      possibleWords: ["Kenya", "Kenyan"],
      indexInArray: 67
    },
    {
      possibleWords: ["Madagascar"],
      indexInArray: 68
    },
    {
      possibleWords: ["Mauritania"],
      indexInArray: 69
    },
    {
      possibleWords: ["Malawi"],
      indexInArray: 70
    },
    {
      possibleWords: ["Mozambique"],
      indexInArray: 71
    },
    {
      possibleWords: ["Rawanda", "Rawandan"],
      indexInArray: 72
    },
    {
      possibleWords: ["Somalia", "Somalian", "Pirates"],
      indexInArray: 73
    },
    {
      possibleWords: ["Tanzania"],
      indexInArray: 74
    },
    {
      possibleWords: ["Uganda", "Ugandan"],
      indexInArray: 75
    },
    {
      possibleWords: ["Zambia", "Zambian"],
      indexInArray: 76
    },
    {
      possibleWords: ["Zimbabwe"],
      indexInArray: 77
    },
    {
      possibleWords: ["Botswana"],
      indexInArray: 78
    },
    {
      possibleWords: ["Lesotho"],
      indexInArray: 79
    },
    {
      possibleWords: ["Namibia", "Namibian"],
      indexInArray: 80
    },
    {
      possibleWords: ["Swaziland"],
      indexInArray: 81
    },
    {
      possibleWords: ["South Africa", "South African"],
      indexInArray: 82
    },
    {
      possibleWords: ["Finland"],
      indexInArray: 83
    },
    {
      possibleWords: ["Denmark", "Danish"],
      indexInArray: 84
    },
    {
      possibleWords: ["Estonia"],
      indexInArray: 85
    },
    {
      possibleWords: ["Britain", "British", "UK", "England", "London", "Brexit"],
      indexInArray: 86
    },
    {
      possibleWords: ["Ireland", "Pubs", "IRA", "Irish", "St. Patrick"],
      indexInArray: 87
    },
    {
      possibleWords: ["Iceland", "Icelandic"],
      indexInArray: 88
    },
    {
      possibleWords: ["Lithuania"],
      indexInArray: 89
    },
    {
      possibleWords: ["Latvia", "Latvian"],
      indexInArray: 90
    },
    {
      possibleWords: ["Norway", "Norwegian"],
      indexInArray: 91
    },
    {
      possibleWords: ["Sweden", "Swedish", "Swedish Fish"],
      indexInArray: 92
    },
    {
      possibleWords: ["Austria", "Austrian"],
      indexInArray: 93
    },
    {
      possibleWords: ["Belgium", "Belgian", "Belgian Waffles"],
      indexInArray: 94
    },
    {
      possibleWords: ["Switzerland", "Swiss", "World Bank", "Swiss Bank"],
      indexInArray: 95
    },
    {
      possibleWords: ["Germany", "German", "Oktober Fest", "Holocaust", "Berlin"],
      indexInArray: 96
    },
    {
      possibleWords: ["France", "French", "Paris"],
      indexInArray: 97
    },
    {
      possibleWords: ["Liechtenstein"],
      indexInArray: 98
    },
    {
      possibleWords: ["Luxembourg"],
      indexInArray: 999
    },
    {
      possibleWords: ["Monaco"],
      indexInArray: 100
    },
    {
      possibleWords: ["Netherlands", "Dutch"],
      indexInArray: 101
    },
    {
      possibleWords: ["Bulgaria", "Bulgarian"],
      indexInArray: 102
    },
    {
      possibleWords: ["Belarus"],
      indexInArray: 103
    },
    {
      possibleWords: ["Czech Republic"],
      indexInArray: 104
    },
    {
      possibleWords: ["Hungary", "Hungarian"],
      indexInArray: 105
    },
    {
      possibleWords: ["Republic of Moldova"],
      indexInArray: 106
    },
    {
      possibleWords: ["Poland", "Polish"],
      indexInArray: 107
    },
    {
      possibleWords: ["Romania", "Romanian"],
      indexInArray: 108
    },
    {
      possibleWords: ["Russia", "Russian", "Putin", "Vodka", "Crimea"],
      indexInArray: 109
    },
    {
      possibleWords: ["Slovakia", "Slovakian"],
      indexInArray: 110
    },
    {
      possibleWords: ["Ukraine", "Crimea"],
      indexInArray: 111
    },
    {
      possibleWords: ["Andorra"],
      indexInArray: 112
    },
    {
      possibleWords: ["Albania"],
      indexInArray: 113
    },
    {
      possibleWords: ["Boznia and Herzegovina"],
      indexInArray: 114
    },
    {
      possibleWords: ["Spain", "Spanish", "Madrid", "Barelona", "Catalonia"],
      indexInArray: 115
    },
    {
      possibleWords: ["Greece", "Greek", "Athens"],
      indexInArray: 116
    },
    {
      possibleWords: ["Croatia", "Croatian"],
      indexInArray: 117
    },
    {
      possibleWords: ["Italy", "Italian"],
      indexInArray: 118
    },
    {
      possibleWords: ["Montenegro"],
      indexInArray: 119
    },
    {
      possibleWords: ["Malta"],
      indexInArray: 120
    },
    {
      possibleWords: ["Serbia", "Serbian"],
      indexInArray: 121
    },
    {
      possibleWords: ["Portugal", "Portuguese", "Ronaldo"],
      indexInArray: 122
    },
    {
      possibleWords: ["SLovenia", "Slovenian"],
      indexInArray: 123
    },
    {
      possibleWords: ["San Marino"],
      indexInArray: 124
    },
    {
      possibleWords: ["Turkmenistan"],
      indexInArray: 125
    },
    {
      possibleWords: ["Tajikstan"],
      indexInArray: 126
    },
    {
      possibleWords: ["Kyrgyzstan"],
      indexInArray: 127
    },
    {
      possibleWords: ["Kazakhstan"],
      indexInArray: 128
    },
    {
      possibleWords: ["Uzbekistan"],
      indexInArray: 129
    },
    {
      possibleWords: ["China", "Chinese", "Beijing", "Xi Jinping"],
      indexInArray: 130
    },
    {
      possibleWords: ["Hong Kong"],
      indexInArray: 131
    },
    {
      possibleWords: ["Japan", "Japanese", "Pokemon"],
      indexInArray: 132
    },
    {
      possibleWords: ["South Korea", "South Korean"],
      indexInArray: 133
    },
    {
      possibleWords: ["North Korea", "North Korean", "Kim Jong Un"],
      indexInArray: 134
    },
    {
      possibleWords: ["Mongolia"],
      indexInArray: 135
    },
    {
      possibleWords: ["Taiwan"],
      indexInArray: 136
    },
    {
      possibleWords: ["Afghanistan"],
      indexInArray: 137
    },
    {
      possibleWords: ["Bangladesh"],
      indexInArray: 138
    },
    {
      possibleWords: ["Bhutan"],
      indexInArray: 139
    },
    {
      possibleWords: ["India", "Indian", "Taj Mahal"],
      indexInArray: 140
    },
    {
      possibleWords: ["Iran", "Iranian"],
      indexInArray: 141
    },
    {
      possibleWords: ["Sri Lanka"],
      indexInArray: 142
    },
    {
      possibleWords: ["Nepal"],
      indexInArray: 143
    },
    {
      possibleWords: ["Pakistan"],
      indexInArray: 144
    },
    {
      possibleWords: ["Indonesia", "Indonesian"],
      indexInArray: 145
    },
    {
      possibleWords: ["Cambodia"],
      indexInArray: 146
    },
    {
      possibleWords: ["Laos"],
      indexInArray: 147
    },
    {
      possibleWords: ["Myanmar"],
      indexInArray: 148
    },
    {
      possibleWords: ["Malaysia", "Malaysian"],
      indexInArray: 149
    },
    {
      possibleWords: ["Philippines"],
      indexInArray: 150
    },
    {
      possibleWords: ["Singapore"],
      indexInArray: 151
    },
    {
      possibleWords: ["Thailand"],
      indexInArray: 152
    },
    {
      possibleWords: ["Vietnam"],
      indexInArray: 153
    },
    {
      possibleWords: ["United Arab Emirates"],
      indexInArray: 154
    },
    {
      possibleWords: ["Armenia"],
      indexInArray: 155
    },
    {
      possibleWords: ["Azerbaijan"],
      indexInArray: 156
    },
    {
      possibleWords: ["Bahrain"],
      indexInArray: 157
    },
    {
      possibleWords: ["Cyprus"],
      indexInArray: 158
    },
    {
      possibleWords: ["Georgia"],
      indexInArray: 159
    },
    {
      possibleWords: ["Israel", "Jerusalem"],
      indexInArray: 160
    },
    {
      possibleWords: ["Iraq"],
      indexInArray: 161
    },
    {
      possibleWords: ["Jordan"],
      indexInArray: 162
    },
    {
      possibleWords: ["Kuwait"],
      indexInArray: 163
    },
    {
      possibleWords: ["Lebanon"],
      indexInArray: 164
    },
    {
      possibleWords: ["Oman"],
      indexInArray: 165
    },
    {
      possibleWords: ["Qatar"],
      indexInArray: 166
    },
    {
      possibleWords: ["Saudi Arabia", "Dubai"],
      indexInArray: 167
    },
    {
      possibleWords: ["Syria", "ISIS"],
      indexInArray: 168
    },
    {
      possibleWords: ["Turkey"],
      indexInArray: 169
    },
    {
      possibleWords: ["Yemen"],
      indexInArray: 170
    },
    {
      possibleWords: ["Australia", "Kangaroos", "Australian"],
      indexInArray: 171
    },
    {
      possibleWords: ["New Zealand"],
      indexInArray: 172
    },
    {
      possibleWords: ["Fiji"],
      indexInArray: 173
    },
    {
      possibleWords: ["Papa New Guinea"],
      indexInArray: 174
    },
    {
      possibleWords: ["Solomon Islands"],
      indexInArray: 175
    },
    {
      possibleWords: ["Guam"],
      indexInArray: 176
    },
    {
      possibleWords: ["American Samoa"],
      indexInArray: 177
    },
    {
      possibleWords: ["Tonga"],
      indexInArray: 178
    },
    {
      possibleWords: ["Samoa", "Samoan"],
      indexInArray: 179
    }
  ];
  //check all objects inside of keywords
  for (i = 0; i < keywords.length; i++) {
    checkKeywords(summary, keywords[i].possibleWords, keywords[i].indexInArray);

  }
  // for - check all possibleWords inside of each country object
  // if you find one of those possiblewords, increment the countries array at the "indexInArray" location
  //   if (summary.indexOf(keyword) > -1) {
  //     countries[9][1]++
  //   }
  //   if (summary.indexOf(weykord) > -1) {
  //     countries[2][1]++
  //   }
  //   if (summary.indexOf(deywork) > -1) {
  //     countries[8][1]++
  //   }
  //   if (summary.indexOf(yekdorw) > -1) {
  //     countries[10][1]++
  //   }
}

function checkKeywords(summary, words, index) {
  try {
    for (j = 0; j < words.length; j++){
      if (summary.indexOf(words[j]) > -1){
        countries[index][1]++
        return true;
      }
    }
    return false;
  }
  catch(e) {
    console.log(e);
    return false;
  }
}
