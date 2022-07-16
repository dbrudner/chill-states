/**
 * Map of key value pairs
 * [keys] are string-type two-letter US state abbreviations
 * https://en.wikipedia.org/wiki/List_of_U.S._state_and_territory_abbreviations
 *
 * Values are the number of pools in that state
 * https://www.datamasters.org/wp-content/uploads/USA-POOL-COUNTS.pdf
 */ const $a65b2ab6b0a59c8f$var$poolsByState = {
    AK: 5861,
    AL: 120363,
    AR: 56745,
    AZ: 431027,
    CA: 1242498,
    CO: 50167,
    CT: 95272,
    DC: 1779,
    DE: 15067,
    FL: 1305112,
    GA: 189842,
    IA: 38785,
    ID: 22926,
    IL: 156489,
    IN: 153399,
    KS: 35074,
    KY: 99467,
    LA: 70202,
    MA: 129899,
    MD: 116142,
    ME: 27151,
    MI: 282523,
    MN: 50679,
    MO: 117338,
    MS: 47597,
    MT: 8862,
    NC: 156899,
    ND: 5322,
    NE: 19158,
    NH: 30879,
    NJ: 154994,
    NM: 14327,
    NV: 114822,
    NY: 463992,
    OH: 316514,
    OK: 99933,
    OR: 46605,
    PA: 333832,
    RI: 30073,
    SC: 92372,
    SD: 5643,
    TN: 168856,
    TX: 578327,
    UT: 20973,
    VA: 135370,
    VT: 12390,
    WA: 73926,
    WI: 109220,
    WV: 38001,
    WY: 2753
};
var $a65b2ab6b0a59c8f$export$2e2bcd8739ae039 = $a65b2ab6b0a59c8f$var$poolsByState;


const $ece657b1b9d38885$var$population = {
    "Virgin Islands": 104680,
    "Puerto Rico": 3386941,
    Guam: 165768,
    "Northern Mariana Islands": 56882,
    Alabama: 4864680,
    Alaska: 738516,
    Arizona: 6946685,
    Arkansas: 2990671,
    California: 39148760,
    Colorado: 5531141,
    Connecticut: 3581504,
    Delaware: 949495,
    "District of Columbia": 684498,
    Florida: 20598139,
    Georgia: 10297484,
    Hawaii: 1422029,
    Idaho: 1687809,
    Illinois: 12821497,
    Indiana: 6637426,
    Iowa: 3132499,
    Kansas: 2908776,
    Kentucky: 4440204,
    Louisiana: 4663616,
    Maine: 1332813,
    Maryland: 6003435,
    Massachusetts: 6830193,
    Michigan: 9957488,
    Minnesota: 5527358,
    Mississippi: 2988762,
    Missouri: 6090062,
    Montana: 1041732,
    Nebraska: 1904760,
    Nevada: 2922849,
    "New Hampshire": 1343622,
    "New Jersey": 8881845,
    "New Mexico": 2092434,
    "New York": 19618453,
    "North Carolina": 10155624,
    "North Dakota": 752201,
    Ohio: 11641879,
    Oklahoma: 3918137,
    Oregon: 4081943,
    Pennsylvania: 12791181,
    "Rhode Island": 1056611,
    "South Carolina": 4955925,
    "South Dakota": 864289,
    Tennessee: 6651089,
    Texas: 27885195,
    Utah: 3045350,
    Vermont: 624977,
    Virginia: 8413774,
    Washington: 7294336,
    "West Virginia": 1829054,
    Wisconsin: 5778394,
    Wyoming: 581836
};
var $ece657b1b9d38885$export$2e2bcd8739ae039 = $ece657b1b9d38885$var$population;


var $bf4b2c2b8d1a310b$export$2e2bcd8739ae039 = {
    AL: "Alabama",
    AK: "Alaska",
    AS: "American Samoa",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    DC: "District Of Columbia",
    FM: "Federated States Of Micronesia",
    FL: "Florida",
    GA: "Georgia",
    GU: "Guam",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MH: "Marshall Islands",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    MP: "Northern Mariana Islands",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PW: "Palau",
    PA: "Pennsylvania",
    PR: "Puerto Rico",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VI: "Virgin Islands",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming"
};


let $d1dcd62ed562d64f$var$stateNameToAbbreviation = {};
const $d1dcd62ed562d64f$var$mapValuesToKeys = Object.entries((0, $bf4b2c2b8d1a310b$export$2e2bcd8739ae039));
for (const e of $d1dcd62ed562d64f$var$mapValuesToKeys){
    const [k, v] = e;
    $d1dcd62ed562d64f$var$stateNameToAbbreviation[k] = (0, $ece657b1b9d38885$export$2e2bcd8739ae039)[v];
}
var $d1dcd62ed562d64f$export$2e2bcd8739ae039 = $d1dcd62ed562d64f$var$stateNameToAbbreviation;




console.log({
    poolsByStateData: $a65b2ab6b0a59c8f$export$2e2bcd8739ae039,
    popByState: $d1dcd62ed562d64f$export$2e2bcd8739ae039
});
function $7bbd592ce9dbf689$export$91a5d33703f72b09(googleChartData) {
    return Object.entries(googleChartData).map((e)=>{
        const [state, amount] = e;
        const toolTipHtml = `<div>
    <ul><li>People: ${(0, $d1dcd62ed562d64f$export$2e2bcd8739ae039)[state] || ""}</li>
        <li>Pools: ${(0, $a65b2ab6b0a59c8f$export$2e2bcd8739ae039)[state] || ""}
    </ul>
    </div>`;
        return [
            state,
            amount,
            toolTipHtml
        ];
    });
}
function $7bbd592ce9dbf689$export$fef151b94550e9f5(numbers) {
    return {
        minValue: numbers.reduce((n, m)=>Math.min(n, m), numbers[0]),
        maxValue: numbers.reduce((n, m)=>Math.max(n, m), 0)
    };
}


let $84bbbef7adac1a5e$var$poolsPerCapitaStateMap = {};
for (const key of Object.keys((0, $d1dcd62ed562d64f$export$2e2bcd8739ae039))){
    const poolsPerCapita = (0, $a65b2ab6b0a59c8f$export$2e2bcd8739ae039)[key] / (0, $d1dcd62ed562d64f$export$2e2bcd8739ae039)[key];
    $84bbbef7adac1a5e$var$poolsPerCapitaStateMap[key] = poolsPerCapita * 10000 || 0;
}
console.log($84bbbef7adac1a5e$var$poolsPerCapitaStateMap);
google.charts.load("current", {
    packages: [
        "geochart"
    ],
    mapsApiKey: "AIzaSyBrl2ZOgsKEjSlM7m_WQB4cNKQJG4QlloY"
});
google.charts.setOnLoadCallback($84bbbef7adac1a5e$var$drawRegionsMap);
function $84bbbef7adac1a5e$var$drawRegionsMap() {
    const data = google.visualization.arrayToDataTable([
        [
            "Country",
            "Popularity",
            {
                role: "tooltip",
                p: {
                    html: true
                }
            }, 
        ],
        ...(0, $7bbd592ce9dbf689$export$91a5d33703f72b09)($84bbbef7adac1a5e$var$poolsPerCapitaStateMap), 
    ]);
    const sizeAxis = (0, $7bbd592ce9dbf689$export$fef151b94550e9f5)(Object.values($84bbbef7adac1a5e$var$poolsPerCapitaStateMap));
    const options = {
        region: "US",
        resolution: "provinces",
        tooltip: {
            isHtml: true
        },
        colorAxis: {
            minValue: sizeAxis.minValue,
            colors: [
                "white",
                "blue"
            ],
            maxValue: sizeAxis.maxValue
        },
        backgroundColor: "#81d4fa",
        datalessRegionColor: "#f8bbd0",
        defaultColor: "#f5f5f5",
        sizeAxis: sizeAxis
    };
    const chart = new google.visualization.GeoChart(document.getElementById("regions_div"));
    chart.draw(data, options);
}


//# sourceMappingURL=index.f61f3603.js.map
